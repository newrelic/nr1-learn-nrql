import React from 'react';
import PropTypes from 'prop-types';

Lesson.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func
};

export default function Lesson({ title, component }) {
  return (
    <div className="lesson-content">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div>{component()}</div>
    </div>
  );
}
