import React from 'react';
import PropTypes from 'prop-types';

const LessonContext = React.createContext();

export class LessonContextProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    accountId: PropTypes.number
  };

  render() {
    return (
      <LessonContext.Provider
        value={{
          accountId: this.props.accountId
        }}
      >
        {this.props.children}
      </LessonContext.Provider>
    );
  }
}

export const LessonContextConsumer = LessonContext.Consumer;
