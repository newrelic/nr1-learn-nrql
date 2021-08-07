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
import i18n from './i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import locales from './i18n/locales';

export default class NrqlTutorialNerdlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // lesson: LESSONS[LESSONS.length-1]  // for debugging the currently lesson I'm coding
      currentLevel: 0,
      currentLesson: 0,
      selectedLanguage: 'en'
    };
    this.collectionId = 'NRQLesson';
    this.documentId = 'progress';
    this.topRef = React.createRef();
    this.handleNextLessonClick = this.handleNextLessonClick.bind(this);
  }

  componentDidMount() {
    this.loadAccounts();
    this.loadLanguages();
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
      const APMbool = accounts[0].reportingEventTypes === null ? 'true' : 'false';
      intendedState = {
        selectedAccount: accounts[0].id,
        hasNoAPM: APMbool,
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
        if (intendedState.selectedLanguage) {
          i18n.changeLanguage(intendedState.selectedLanguage);
        }
        this.setState(intendedState);
      });
  }

  async loadLanguages() {
    const languages = locales.map(language => (
      <SelectItem value={language.lng} key={language.lng}>
        {language.label}
      </SelectItem>
    ));
    this.setState({ languages });
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

    const { selectedAccount, selectedLanguage } = this.state;
    this.setState({ currentLevel: nextLevel, currentLesson: nextLesson });
    UserStorageMutation.mutate({
      actionType: UserStorageMutation.ACTION_TYPE.WRITE_DOCUMENT,
      collection: this.collectionId,
      documentId: this.documentId,
      document: {
        currentLevel: nextLevel,
        currentLesson: nextLesson,
        selectedAccount: selectedAccount,
        selectedLanguage: selectedLanguage
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
      noAccounts,
      languages,
      selectedLanguage
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

    NextLessonBt.displayName = 'NextLessonBt';

    // hide button on last lesson ?
    const showNextButton = !(
      currentLevel + 1 === LEVELS.length &&
      currentLesson + 1 === LEVELS[currentLevel].lessons.length
    );
    return (
      <I18nextProvider i18n={i18n}>
        <div ref={this.topRef}>
          {selectedAccount && accounts ? (
            <>
              <Grid className="AccountChooser">
                {accounts.length > 1 ? (
                  <>
                    <GridItem columnSpan={1}>Use data from account:</GridItem>
                    <GridItem columnSpan={5}>
                      <Select
                        onChange={(key, value) => {
                          const found = accounts.find(({ key }) => key === value); // eslint-disable-line prettier/prettier
                          const hasAPMbool = found.props.children.includes('no recent APM data'); // eslint-disable-line prettier/prettier
                          this.setState({ selectedAccount: value, hasNoAPM: hasAPMbool }); // eslint-disable-line prettier/prettier
                        }}
                        value={selectedAccount}
                      >
                        {accounts}
                      </Select>
                    </GridItem>
                  </>
                ) : (
                  <></>
                ) // ONly one account no need to show picker
                }
                {languages && languages.length > 1 ? (
                  <>
                    <GridItem columnSpan={1}>Select Language:</GridItem>
                    <GridItem columnSpan={5}>
                      <Select
                        onChange={(event, selectedLanguage) => {
                          i18n.changeLanguage(selectedLanguage);
                          this.setState({ selectedLanguage });
                        }}
                        value={selectedLanguage}
                      >
                        {languages}
                      </Select>
                    </GridItem>
                  </>
                ) : (
                  <></>
                ) // ONly one account no need to show picker
                }
              </Grid>
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
                    selectedLanguage={selectedLanguage}
                  />
                </GridItem>

                <GridItem columnSpan={9}>
                  <LessonContextProvider
                    accountId={Number(selectedAccount)}
                    hasNoAPM={this.state.hasNoAPM}
                    chooseLesson={(level, lesson) => {
                      this.chooseLesson(level, lesson);
                      this.topRef.current.scrollIntoView();
                    }}
                  >
                    <Lesson
                      language={selectedLanguage}
                      level={currentLevel}
                      levelTitle={levelTitlePrefix}
                      {...lesson}
                    />
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
      </I18nextProvider>
    );
  }
}
