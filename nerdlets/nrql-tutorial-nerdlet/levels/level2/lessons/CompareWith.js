import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function CompareWith() {
  return (
    <div>
      <p>
        We have learned how to use time ranges with <code>SINCE</code> and{' '}
        <code>UNTIL</code> clauses. But what if we want to compare values from
        <em>different</em> time ranges? We can achieve this with the{' '}
        <code>COMPARE WITH</code> clause.
      </p>
      <p>
        We use <code>SINCE</code> and <code>UNTIL</code> to define our period of
        interest. Then, we denote the time period we'd like to compare against
        with a <code>COMPARE WITH [time period] AGO</code> clause containing a
        relative offset value.
      </p>

      <p>
        Specifically, in the sample query below we compare the last day against
        the previous week using a relative offset of <code>1 week ago</code>.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO**"
        span="6"
      />

      <p>
        To map the comparison of values over time, add <code>TIMESERIES</code>.
        This creates a line chart of the comparison, allowing you to visualize
        how this period compares to recent data, and track it over time.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO** TIMESERIES"
        span="12"
      />

      <p>
        You can also specify many different relative time periods in the same
        format, similar to <code>UNTIL</code>. For instance, you may specify{' '}
        <code>4 WEEKS AGO</code> or <code>6 HOURS AGO</code>.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 HOUR AGO **COMPARE WITH 6 HOURS AGO** TIMESERIES"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Comparisons can quickly answer questions about what's happening in your
        applications. Are different sales, performance, MTTR, or error values up
        or down compared to last week? And, if you are investigating an issue,
        comparing aperiod of problemantic performance to a period of{' '}
        <em>normal</em> performance can be very useful.
      </p>
    </div>
  );
}
