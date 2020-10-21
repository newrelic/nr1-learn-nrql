import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function CompareWith() {
  return (
    <div>
      <p>
      <Trans i18nKey={"Contents.P1"}>
        We have learned how to use time ranges with <code>SINCE</code> and{' '}
        <code>UNTIL</code> clauses. But what if we want to compare values from
        <em>different</em> time ranges? We can achieve this with the{' '}
        <code>COMPARE WITH</code> clause.
      </Trans>
      </p>
      <p>
      <Trans i18nKey={"Contents.P2"}>
        We use <code>SINCE</code> and <code>UNTIL</code> to define our period of
        interest. Then, we denote the time period we'd like to compare against
        with a <code>COMPARE WITH [time period] AGO</code> clause containing a
        relative offset value.
      </Trans>
      </p>

      <p>
      <Trans i18nKey={"Contents.P3"}>
        Specifically, in the sample query below we compare the last day against
        the previous week using a relative offset of <code>1 week ago</code>.
      </Trans>
      </p>

      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO**"
        span="6"
      />

      <p>
      <Trans i18nKey={"Contents.P4"}>
        To map the comparison of values over time, add <code>TIMESERIES</code>.
        This creates a line chart of the comparison, allowing you to visualize
        how this period compares to recent data, and track it over time.
      </Trans>
      </p>

      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO** TIMESERIES"
        span="12"
      />

      <p>
      <Trans i18nKey={"Contents.P5"}>
        You can also specify many different relative time periods in the same
        format, similar to <code>UNTIL</code>. For instance, you may specify{' '}
        <code>4 WEEKS AGO</code> or <code>6 HOURS AGO</code>.
      </Trans>
      </p>

      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 HOUR AGO **COMPARE WITH 6 HOURS AGO** TIMESERIES"
        span="12"
      />

      <h2>
      <Trans i18nKey={"Contents.P6"}>
        Lesson Summary
      </Trans>
      </h2>
      <p>
      <Trans i18nKey={"Contents.P7"}>
        Comparisons can quickly answer questions about what's happening in your
        applications. Are different sales, performance, MTTR, or error values up
        or down compared to last week? And, if you are investigating an issue,
        comparing aperiod of problemantic performance to a period of{' '}
        <em>normal</em> performance can be very useful.
      </Trans>
      </p>
    </div>
  );
}
