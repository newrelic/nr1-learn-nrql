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
          name
          id
          reportingEventTypes
        }
      }
    }`;
    let currentLevel;
    let currentLesson;
    let selectedLanguage;
    let selectedAccount;
    let prevAccount;
    let hasNoAPM = true;

    // Get the 'accounts' from the returned data from the query to NerdGraph
    const { data: { actor: { accounts } } } = await NerdGraphQuery.query({ query }); 
    const noAccounts = accounts.length === 0;

    // Get the previous level, lesson and language from the User Storage
    const { data: prevState } = await UserStorageQuery.query({
      collection: this.collectionId,
      documentId: this.documentId
      // eslint-disable-next-line no-console
    }).catch(err => console.log(err));

    if (prevState) {
      currentLevel = prevState.currentLevel;
      currentLesson = prevState.currentLesson;
      selectedLanguage = prevState.selectedLanguage || 'en';
      prevAccount = prevState.selectedAccount;
      // sanity check that loaded lesson actually exists
      const level = LEVELS[currentLevel];
      if (!level || !level.lessons[currentLesson]) {
        console.log(`Lesson ${currentLesson + 1} of level ${currentLevel + 1} doesn't exist! Resetting to level 1, lesson 1.`);
        currentLevel = 0;
        currentLesson = 0;
      }
    } else {
      currentLevel = 0;
      currentLesson = 0;
      selectedLanguage = 'en';
    }

    // Check all the accounts of the user to see if any contain the Transaction event type
    const processedAccounts = accounts.map(account => {
      let { name, id, reportingEventTypes } = account;
      if (reportingEventTypes && reportingEventTypes.includes('Transaction')) {
        // The account does contain the Transaction event type
        if (prevAccount === id) {
          // Use this account for this session if it was the selected account in the previous session
          selectedAccount = id;
        }
        if (hasNoAPM) {
          // We have APM data from Transaction, so clear the hasNoAPM flag
          hasNoAPM = false;
          if (typeof selectedAccount !== 'number') {
            // If we haven't already selected an account, select this one
            selectedAccount = id;
          }
        }
      } else {
        // If this account doesn't contain Transaction event types, update account the name to show this
        name += ' [no recent APM data]';
      }

      return (
        <SelectItem value={String(id)} key={id}>{name}</SelectItem> 
      );
    });
    // Check if we do not have an account selected when there are accounts (i.e. none contain Transaction event type)
    if (!noAccounts && typeof selectedAccount !== 'number') {
      //  If no account selected, use the first account in the list.
      selectedAccount = accounts[0].id;
    }

    i18n.changeLanguage(selectedLanguage);
    this.setState({
      currentLevel,
      currentLesson,
      selectedLanguage,
      selectedAccount,
      hasNoAPM,
      noAccounts,
      accounts: processedAccounts
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
                    <GridItem columnSpan={1} className="useDataLabel">
                      Use data from account:
                    </GridItem>
                    <GridItem columnSpan={5}>
                      <Select
                        onChange={(key, value) => {
                          const found = accounts.find(({ key }) => key === value); 
                          const hasAPMbool = found.props.children.includes('no recent APM data'); 
                          this.setState({ selectedAccount: value, hasNoAPM: hasAPMbool }); 
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
