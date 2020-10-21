import React from 'react';
import { Trans } from 'react-i18next';

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
        <Trans i18nKey={"Contents.P1"}>
          Congratulations on completing Level 2: Controlling Your Data!
        </Trans>
        </strong>
      </p>
      <p>
      <Trans i18nKey={"Contents.P2"}>
        With the knowledge you've gained here, you can create dashboard
        visualizations, and control the aspects of your data you're most
        interested in. These techniques are also extremely useful in narrowing
        focus for more granular, specific alerts!
      </Trans>
      </p>
      <p>
      <Trans i18nKey={"Contents.P3"}>
        So, what have we learned in this level? We learned how to:
      </Trans>
      </p>
      <ul>
        <li>
        <Trans i18nKey={"Contents.P4"}>
          Query for unique values using <code>uniques(attributeName)</code>
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P5"}>
          Determine how many unique values exist in an attribute using{' '}
          <code>uniqueCount(attributeName)</code>
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P6"}>
          Retrieve the <code>earliest(attributeName)</code> and{' '}
          <code>latest(attributeName)</code> within a specific time window
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P7"}>
          Calculate percentages based on a qualifer or other data point with{' '}
          <code>percentile()</code>
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P8"}>
          Perform basic math using attributes and aggregation functions, or a
          combination of both
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P9"}>
          Cast attribute names to something custom and more readable
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P10"}>
          Search to include/exclude using wildcards with <code>LIKE</code>/
          <code>NOT LIKE</code>, or limit results to those <code>IN</code> a
          list or <code>NOT IN</code> that list
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P11"}>
          Query within more advanced time windows using dates, epoch, and{' '}
          <code>WITH TIMEZONE</code>
        </Trans>
        </li>
        <li>
        <Trans i18nKey={"Contents.P12"}>
          Group data into interesting time windows using time-based cohorting
        </Trans>
        </li>
      </ul>
      <p>
      <Trans i18nKey={"Contents.P13"}>
        You are now a Level 2 NRQL hero. You've learned great techniques to
        control your data and produce much more interesting visualizations. Get
        ready to advance to level three, where you'll learn more interesting
        NRQL skills including filters, facet cases, histogram, apdex, filtering
        to eventTypes, overriding values, and extrapolation.
      </Trans>
      </p>
      <p>
      <Trans i18nKey={"Contents.P14"}>
        Revel in your newly attained knowledge. You are now equipped to build
        really powerful dashboards and alerts that could be critical to your
        organization.
      </Trans>
      </p>
    </div>
  );
}
