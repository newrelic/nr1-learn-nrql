import React from 'react';
import PropTypes from 'prop-types';

const LessonContext = React.createContext();

export class LessonContextProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    accountId: PropTypes.number,
    hasNoAPM: PropTypes.bool,
    chooseLesson: PropTypes.func
  };

  render() {
    return (
      <LessonContext.Provider
        value={{
          accountId: this.props.accountId,
          hasNoAPM: this.props.hasNoAPM,
          chooseLesson: this.props.chooseLesson
        }}
      >
        {this.props.children}
      </LessonContext.Provider>
    );
  }
}

export const LessonContextConsumer = LessonContext.Consumer;
