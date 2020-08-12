/* eslint-disable no-nested-ternary */
import React from 'react';

import {
  Grid,
  GridItem,
  NerdGraphQuery,
  Select,
  SelectItem,
  UserStorageMutation,
  UserStorageQuery,
  Button,
  Icon,
  Spinner,
  nerdlet
} from 'nr1';
import LEVELS from './levels';
import LessonPicker from './components/LessonPicker';
import Lesson from './components/Lesson';
import { LessonContextProvider } from './contexts/LessonContext';

export default class NrqlTutorialNerdlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // lesson: LESSONS[LESSONS.length-1]  // for debugging the currently lesson I'm coding
      currentLevel: 0,
      currentLesson: 0
    };
    this.collectionId = 'NRQLesson';
    this.documentId = 'progress';
    this.topRef = React.createRef();
    this.handleNextLessonClick = this.handleNextLessonClick.bind(this);
  }

  componentDidMount() {
    this.loadAccounts();
    nerdlet.setConfig({
      timePicker: false
    });
  }

  async loadAccounts() {
    const query = `{
      actor {
        accounts {
          name id reportingEventTypes(filter: ["Transaction"])
        }
      }
    }`;
    const { data } = await NerdGraphQuery.query({ query });
    // const accounts = data.actor.accounts.filter(a => (a.reportingEventTypes || []).length > 0)
    const accounts = data.actor.accounts;

    let intendedState = {};
    if (accounts.length > 0) {
      intendedState = {
        selectedAccount: accounts[0].id,
        accounts: accounts.map(account => {
          return (
            <SelectItem value={String(account.id)} key={account.id}>
              {account.name +
                ((account.reportingEventTypes || []).length === 0
                  ? ' [no recent APM data]'
                  : '')}
            </SelectItem>
          );
        })
      };
    } else {
      intendedState = { noAccounts: true };
    }

    // load from local store
    UserStorageQuery.query({
      collection: this.collectionId,
      documentId: this.documentId
    })
      .then(({ data }) => {
        if (data !== null) {
          intendedState = { ...intendedState, ...data };
          // sanity check that loaded lesson actually exists
          if (
            !(
              data.currentLevel !== undefined &&
              data.currentLesson !== undefined &&
              LEVELS[data.currentLevel] &&
              LEVELS[data.currentLevel].lessons[data.currentLesson]
            )
          ) {
            // eslint-disable-next-line no-console
            console.log('level/lesson doesnt exist, setting to lesson 1');
            intendedState.currentLevel = 0;
            intendedState.currentLesson = 0;
          }
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
      .finally(() => {
        this.setState(intendedState);
      });
  }

  chooseLesson(level, lesson) {
    let nextLevel = level;
    let nextLesson = lesson;
    if (!LEVELS[nextLevel].lessons[nextLesson]) {
      // no more lessons at this level
      nextLevel = nextLevel + 1;
      nextLesson = 0;

      if (!LEVELS[nextLevel]) {
        // gone past last lesson... what shall we do? start again?
        nextLevel = 0;
        nextLesson = 0;
      }
    }

    const { selectedAccount } = this.state;
    this.setState({ currentLevel: nextLevel, currentLesson: nextLesson });
    UserStorageMutation.mutate({
      actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
      collection: this.collectionId,
      documentId: this.documentId,
      document: {
        currentLevel: nextLevel,
        currentLesson: nextLesson,
        selectedAccount: selectedAccount
      }
      // eslint-disable-next-line no-unused-vars
    }).then(res => {
      // console.log("saved to user storage")
    });
  }

  handleNextLessonClick() {
    const { currentLevel, currentLesson } = this.state;
    this.chooseLesson(currentLevel, currentLesson + 1);
    this.topRef.current.scrollIntoView();
  }

  render() {
    const {
      currentLevel,
      currentLesson,
      accounts,
      selectedAccount,
      noAccounts
    } = this.state;
    const lesson = LEVELS[currentLevel].lessons[currentLesson];
    const levelTitlePrefix = LEVELS[currentLevel].level;

    const NextLessonBt = React.forwardRef((props, ref) => (
      <Button
        ref={ref}
        type={Button.TYPE.PRIMARY}
        className="nextLessonBt"
        // eslint-disable-next-line react/no-this-in-sfc
        onClick={this.handleNextLessonClick}
      >
        Continue to next lesson{' '}
        <Icon type={Icon.TYPE.INTERFACE__CHEVRON__CHEVRON_RIGHT} />
      </Button>
    ));

    // hide button on last lesson ?
    const showNextButton = !(
      currentLevel + 1 === LEVELS.length &&
      currentLesson + 1 === LEVELS[currentLevel].lessons.length
    );
    return (
      <div ref={this.topRef}>
        {selectedAccount && accounts ? (
          <>
            {accounts.length > 1 ? (
              <Grid className="AccountChooser">
                <GridItem columnSpan={1}>Use data from account:</GridItem>
                <GridItem columnSpan={11}>
                  <Select
                    onChange={(event, value) => {
                      this.setState({ selectedAccount: value });
                    }}
                    value={selectedAccount}
                  >
                    {accounts}
                  </Select>
                </GridItem>
              </Grid>
            ) : null // ONly one account no need to show picker
            }
            <Grid className="MainLessonArea">
              <GridItem columnSpan={3}>
                <LessonPicker
                  levels={LEVELS}
                  lesson={lesson}
                  selectLesson={(level, lesson) =>
                    this.chooseLesson(level, lesson)
                  }
                  selectLevel={level => this.chooseLesson(level, 0)}
                  selectedLevel={currentLevel}
                  selectedLesson={currentLesson}
                />
              </GridItem>

              <GridItem columnSpan={9}>
                <LessonContextProvider
                  accountId={Number(selectedAccount)}
                  chooseLesson={(level, lesson) => {
                    this.chooseLesson(level, lesson);
                    this.topRef.current.scrollIntoView();
                  }}
                >
                  <Lesson levelTitle={levelTitlePrefix} {...lesson} />
                  {showNextButton && <NextLessonBt />}
                </LessonContextProvider>
              </GridItem>
            </Grid>
          </>
        ) : noAccounts === true ? (
          <div className="StartupMessage">
            Sorry, we could not find an account with recent transaction data.
          </div>
        ) : (
          <div className="StartupMessage">
            One moment while we set things up for you...{' '}
            <Spinner type={Spinner.TYPE.DOT} />{' '}
          </div>
        )}
      </div>
    );
  }
}
