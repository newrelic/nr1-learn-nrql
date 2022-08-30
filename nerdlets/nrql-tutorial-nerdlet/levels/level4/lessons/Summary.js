import React from 'react';
import { Trans } from 'react-i18next';

export default function Summary() {
  return (
    <div>
      <p>
        <strong>
          <Trans i18nKey="Contents.P1">
            Congratulations on completing Level 4: NRQL Power User!
          </Trans>
        </strong>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          In this section we covered additional aggregation techniques,
          higher-level math functions, and advanced features like Regex
          filtering, nested aggregation and subqueries.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">
          Specifically, we learned how to use:
        </Trans>
      </p>
      <ul>
        <li>
          <Trans i18nKey="Contents.P4">
            The <code>stddev()</code> aggregation function, and how to group
            aggregated data using the <code>buckets()</code> function
          </Trans>
        </li>
        <li>
          <Trans i18nKey="Contents.P5">
            The advanced math functions available within NRQL to smooth, clamp
            and manipulate the data
          </Trans>
        </li>
        <li>
          <Trans i18nKey="Contents.P6">
            How to discover the event types and attributes available in your
            data within a specific period
          </Trans>
        </li>
        <li>
          <Trans i18nKey="Contents.P7">
            How to filter data with Regex using <code>RLIKE</code>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="Contents.P8">
            How to use nested aggregation and subqueries
          </Trans>
        </li>
      </ul>
      <p>
        <Trans i18nKey="Contents.P9">
          Well done! You have now learned all the amazing functionality of NRQL
          covered in this course. You truly are a NRQL wizard!
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P10">
          If you have further questions or encounter problems, feel free to
          contact New Relic support via
        </Trans>{' '}
        <a href="https://support.newrelic.com" target="_blank" rel="noreferrer">
          support.newrelic.com
        </a>
        .{' '}
        <Trans i18nKey="Contents.P11">
          You're also welcome to share your experience with our online community
          at
        </Trans>{' '}
        <a href="https://discuss.newrelic.com" target="_blank" rel="noreferrer">
          discuss.newrelic.com
        </a>
        .
      </p>
    </div>
  );
}
