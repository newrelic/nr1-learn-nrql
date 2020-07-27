import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function CompareWith() {
  return (
    <div>
      <p>
        We have learned how to use time ranges through the <code>SINCE</code>{' '}
        and <code>UNTIL</code> clauses. What if we want to compare values from
        different time ranges? We can achieve this with the{' '}
        <code>COMPARE WITH</code> clause. We use <code>SINCE</code> and{' '}
        <code>UNTIL</code> to define our period of interest and then specify the
        time period we wish to compare to by specifying a{' '}
        <code>COMPARE WITH [time period] AGO</code> clause with a relative
        offset value. In our sample query, we are comparing the last day with
        the week before by using a relative offset of <code>1 week ago</code>.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO**"
        span="6"
      />

      <p>
        If you need to map the comparison of values over time, use{' '}
        <code>TIMESERIES</code> to create a line chart that shows the
        comparison. You are now able to visualize how your time window of
        concern compares with recent data and track it over time.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 DAY AGO **COMPARE WITH 1 WEEK AGO** TIMESERIES"
        span="12"
      />

      <p>
        You can specify many different relative time periods in the same format
        as used with <code>UNTIL</code>. For instance, you may specify{' '}
        <code>4 WEEKS AGO</code> or <code>6 HOURS AGO</code>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 HOUR AGO **COMPARE WITH 6 HOURS AGO** TIMESERIES"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Comparisons can quickly help you answer questions about what's happening
        in your world right now. Are we up or down compared with last week for
        sales or application performance, error rates or MTTR? If we are
        investigating an issue, comparing with a <em>normal</em> period can be
        very useful.
      </p>
    </div>
  );
}
