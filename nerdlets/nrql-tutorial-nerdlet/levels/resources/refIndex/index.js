import React from 'react';
import { indexMapping } from './indexMapping.js';
import { LessonContextConsumer } from '../../../contexts/LessonContext';
import { Link } from 'nr1';
import LEVELS from '../..';
import {Trans} from "react-i18next";

export default function RefIndex() {
  return (
    <LessonContextConsumer>
      {context => {
        indexMapping.sort((a, b) => (a.op > b.op ? 1 : -1)); // sort the ops first
        const items = indexMapping.map((item, idx) => {
          const refs = item.refs.map((ref, idx) => {
            const level = LEVELS[ref.level - 1].level;
            const title = LEVELS[ref.level - 1].lessons[ref.lesson - 1].title;
            return (
              <div key={idx} className="refLink">
                <Link
                  onClick={() => {
                    context.chooseLesson(ref.level - 1, ref.lesson - 1);
                  }}
                >
                  <Trans i18nKey={`${level}:Level`}>{level}</Trans>: <Trans i18nKey={`${title}:Title`}>{title}</Trans>
                </Link>
              </div>
            );
          });

          const docslink = !item.docs ? null : (
            <div>
              <Link className="externalLink" to={item.docs}>
                <Trans i18nKey="Contents.L1">
                Official documentation
                </Trans>
              </Link>
            </div>
          );
          return (
            <>
              <tr key={idx} className="unstyledTr">
                <td className="hdrCol">
                  <code>{item.op}</code>
                </td>
                <td>
                  {refs}
                  {docslink}
                </td>
              </tr>
              <tr>
                <td className="separator" colSpan="2">
                  &nbsp;
                </td>
              </tr>
            </>
          );
        });

        return (
          <div>
            <p>
              <Trans i18nKey={"Contents.P1"}>
              Quickly find lessons referring to NRQL functions, operators and
              keywords. You can also view the{' '}
              <Link
                className="externalLink"
                to="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language"
              >
                official New Relic documentation
              </Link>{' '}
              for each.
              </Trans>
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
