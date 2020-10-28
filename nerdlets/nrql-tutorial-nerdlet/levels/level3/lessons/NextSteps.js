import React from 'react';
import {Trans} from "react-i18next";

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
          <Trans i18nKey={"Contents.P1"}>
          Congratulations on completing Level 3: Advancing Your Dashboarding!
          </Trans>
        </strong>
      </p>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        In this section we explored specific, powerful NRQL functionality. These
        skills will undoubtedly serve you next time you're in the trenches,
        diving into the nitty-gritty of your data.
        </Trans>
      </p>
      <p><Trans i18nKey={"Contents.P3"}>Specifically, we learned how to use:</Trans></p>
      <ul>
        <Trans i18nKey={"Contents.P4"}>
        <li>
          Advanced aggregation functions like <code>filter()</code>,{' '}
          <code>apdex()</code>, <code>rate()</code>
          <code>funnel()</code>, <code>histogram()</code>
        </li>
        <li>
          The <code>EXTRAPOLATE</code> clauses
        </li>
        <li>
          <code>FACET CASES()</code>, including how to use attribute and group
          matching values
        </li>
        <li>
          <code>filter()</code> to combine Event Types{' '}
        </li>
        <li>Overriding values, when necessary</li>
        </Trans>
      </ul>
      <p>
        <Trans i18nKey={"Contents.P5"}>
        You're now a Level 3 NRQL expert! Believe it or not, there are even more
        features and functions we want to showcase in the next section.
        </Trans>
      </p>
    </div>
  );
}
