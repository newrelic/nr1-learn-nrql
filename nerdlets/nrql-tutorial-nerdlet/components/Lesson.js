import React from 'react';
import PropTypes from 'prop-types';
import {Trans, withNamespaces} from "react-i18next";
import i18n from "../i18n/i18n";

Lesson.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func,
  language: PropTypes.string
};

function Lesson({ title, component, language, i18n }) {

  const Translated = withNamespaces(title)(component);
  return (
    <div className="lesson-content">
      <div className="title">
        <h1><Trans i18nKey={`${title}:Title`}>{title}</Trans></h1>
      </div>
      <div><Translated /></div>
    </div>
  );
}

export default withNamespaces()(Lesson);
