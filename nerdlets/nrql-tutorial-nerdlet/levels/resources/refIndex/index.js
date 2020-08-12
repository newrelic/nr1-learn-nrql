import React from 'react';
import { indexMapping } from './indexMapping.js';
import { LessonContextConsumer } from '../../../contexts/LessonContext';
import { Link } from 'nr1';
import LEVELS from '../..';

export default function RefIndex() {
  return (
    <LessonContextConsumer>
      {context => {
        indexMapping.sort((a, b) => (a.op > b.op ? 1 : -1)); // sort the ops first
        const items = indexMapping.map((item, idx) => {
          const refs = item.refs.map((ref, idx) => {
            const refTitle = `${LEVELS[ref.level - 1].level}: ${
              LEVELS[ref.level - 1].lessons[ref.lesson - 1].title
            }`;
            return (
              <div key={idx} className="refLink">
                <Link
                  onClick={() => {
                    context.chooseLesson(ref.level - 1, ref.lesson - 1);
                  }}
                >
                  {refTitle}
                </Link>
              </div>
            );
          });
          return (
            <tr key={idx} className="unstyledTr">
              <td className="hdrCol">
                <code>{item.op}</code>
              </td>
              <td>{refs}</td>
            </tr>
          );
        });

        return (
          <div>
            <p>
              Quicly find lessons refering to NRQL functions, operators and
              keywords.
            </p>
            <table className="indexTable u-unstyledTable">
              <tbody>{items}</tbody>
            </table>
          </div>
        );
      }}
    </LessonContextConsumer>
  );
}
