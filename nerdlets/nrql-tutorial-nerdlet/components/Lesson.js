import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withNamespaces } from 'react-i18next';

Lesson.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func,
  level: PropTypes.number
};

function Lesson({ title, component, level }) {
  const namespace =
    ['Summary', 'Introduction'].indexOf(title) > -1
      ? `${title}_L${level + 1}`
      : title;
  const Translated = withNamespaces(namespace)(component);
  return (
    <div className="lesson-content">
      <div className="title">
        <h1>
          <Trans i18nKey={`${namespace}:Title`}>{title}</Trans>
        </h1>
      </div>
      <div>
        <Translated />
      </div>
    </div>
  );
}

export default withNamespaces()(Lesson);
