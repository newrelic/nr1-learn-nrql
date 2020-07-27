import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@kunukn/react-collapse';

LessonPicker.propTypes = {
  levels: PropTypes.array,
  selectLesson: PropTypes.func,
  selectLevel: PropTypes.func,
  selectedLevel: PropTypes.number,
  selectedLesson: PropTypes.number
};

export default function LessonPicker({
  levels,
  selectLesson,
  selectLevel,
  selectedLevel,
  selectedLesson
}) {
  return (
    <div className="lesson-picker">
      <h1>Lessons</h1>
      {levels.map((l, index) => (
        <Level
          level={index}
          key={index}
          lessons={levels[index].lessons}
          title={levels[index].title}
          titlePrefix={levels[index].level}
          selectLevel={selectLevel}
          selectLesson={selectLesson}
          selectedLevel={selectedLevel}
          selectedLesson={selectedLesson}
        />
      ))}
    </div>
  );
}

Level.propTypes = {
  level: PropTypes.number,
  lessons: PropTypes.array,
  title: PropTypes.string,
  titlePrefix: PropTypes.string,
  selectLevel: PropTypes.func,
  selectLesson: PropTypes.func,
  selectedLevel: PropTypes.number,
  selectedLesson: PropTypes.number
};

function Level({
  level,
  lessons,
  title,
  titlePrefix,
  selectLevel,
  selectLesson,
  selectedLevel,
  selectedLesson
}) {
  return (
    <div>
      <button
        className="toggleLevel"
        onClick={() => {
          selectLevel(level);
        }}
        type="button"
      >
        {titlePrefix.toUpperCase()}: {title}
      </button>
      <Collapse
        isOpen={level === selectedLevel}
        className="collapse-css-transition"
        transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
        elementType="article"
      >
        {lessons.map((l, index) => (
          <Lesson
            lesson={l}
            selected={selectedLesson === index}
            key={index}
            // selectLesson={()=>{console.log(`level ${level} lesson ${index}`);selectLesson(level,index)}}
            selectLesson={() => {
              selectLesson(level, index);
            }}
            index={index}
            title={l.title}
          />
        ))}
      </Collapse>
    </div>
  );
}

Lesson.propTypes = {
  title: PropTypes.string,
  selectLesson: PropTypes.func,
  index: PropTypes.number,
  selected: PropTypes.bool
};

function Lesson({ title, index, selectLesson, selected }) {
  const className = selected ? 'lesson selected' : 'lesson';
  return (
    <div className={className} onClick={() => selectLesson()}>
      <div className="index">{index + 1}.</div>
      <div className="title">{title}</div>
    </div>
  );
}
