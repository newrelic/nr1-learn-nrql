import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@kunukn/react-collapse';
import { Trans, NamespacesConsumer, withNamespaces } from 'react-i18next';

LessonPicker.propTypes = {
  levels: PropTypes.array,
  selectLesson: PropTypes.func,
  selectLevel: PropTypes.func,
  selectedLevel: PropTypes.number,
  selectedLesson: PropTypes.number
};

function LessonPicker({
  levels,
  selectLesson,
  selectLevel,
  selectedLevel,
  selectedLesson
}) {
  return (
    <div className="lesson-picker">
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
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <div>
          <button
            className="toggleLevel"
            onClick={() => {
              selectLevel(level);
            }}
            type="button"
          >
            <Trans
              i18n={i18n}
              i18nKey={`${titlePrefix}:Level`}
              values={{ emp: '' }}
            >
              {titlePrefix === 'Resources'
                ? '{{emp}}'
                : `${titlePrefix.toUpperCase()}: `}
            </Trans>
            <Trans i18n={i18n} i18nKey={`${titlePrefix}:Title`}>
              {title}
            </Trans>
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
                level={selectedLevel}
              />
            ))}
          </Collapse>
        </div>
      )}
    </NamespacesConsumer>
  );
}

Lesson.propTypes = {
  title: PropTypes.string,
  selectLesson: PropTypes.func,
  index: PropTypes.number,
  selected: PropTypes.bool,
  level: PropTypes.number
};

function Lesson({ title, index, selectLesson, selected, level }) {
  const className = selected ? 'lesson selected' : 'lesson';
  const namespace =
    ['Summary', 'Introduction'].indexOf(title) > -1
      ? `${title}_L${level + 1}`
      : title;

  return (
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <div className={className} onClick={() => selectLesson()}>
          <div className="index">{index + 1}.</div>
          <div className="title">
            <Trans i18n={i18n} i18nKey={`${namespace}:Title`}>
              {title}
            </Trans>
          </div>
        </div>
      )}
    </NamespacesConsumer>
  );
}

export default withNamespaces()(LessonPicker);
