import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery4() {
  return (
    <div>
      <p>
        We have kept this lesson about aggregators purposely brief as we have
        shared so much with you in previous levels 1-3. In this final lesson, we
        will be discussing the use of standard deviation and bucketing.
      </p>

      <h2>Standard deviation</h2>
      <p>
        The standard deviation is a measure of the amount of variation or
        dispersion of a set of values, with a scale from low (values close to
        the average) to high (values far from the average). When using the{' '}
        <code>stddev()</code> function within NRQL, it lets us look between the
        lines of averages and understand what values are reported on a deeper
        level. In this example, we are comparing the standard deviation of
        transaction response time ("duration") for the last day and we also
        compare this to the previous day.
      </p>
      <SampleQuery
        nrql="SELECT **stddev(duration)** from Transaction since 24 hours ago COMPARE WITH 24 hours ago TIMESERIES "
        span="12"
      />

      <h2>Facet bucketing</h2>
      <p>
        In a previous lesson, we learned how to group data into buckets with a
        specific configuration using <code>FACET cases()</code>. We can also
        bucket data automatically by a specific attribute using{' '}
        <code>FACET buckets()</code> which simplifies grouping data for any
        aggregation function. The function takes three arguments:
      </p>
      <p>
        <code>buckets(attribute, ceiling, number-of-buckets)</code>.
      </p>
      <ul>
        <li>The attribute we want to bucket by. </li>
        <li>
          Maximum value of the sample range. (Any outliers will appear in the
          final bucket)
        </li>
        <li>The total number of buckets we require.</li>
      </ul>

      <p>
        In the example query, we are asking for the average duration of an
        entire transaction, but we want to group that performance into
        transactions that make specific volumes of database calls. So, we will
        specify the bucket attribute as <code>databaseCallCount</code>, set the
        ceiling at 400 calls and group it in 10 buckets. The result is the
        performance of transactions making 0-40, 40-80, 80-120, 120-160,
        160-200, 200-240, 240-280, 280-320, 320-360 and &gt;360 Database Calls.
        10 clear buckets divided evenly up to the ceiling.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 12 hours ago FACET **buckets(databaseCallCount, 400, 10)**"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        You have now learned all the aggregation functions that exist in NRQL
        right now. You will be able to slice and dice your data like a binary
        samurai. If you think something is missing from NRQL in terms of
        aggregation, let your account team know. We are always looking for the
        next killer functionality that our customers need.{' '}
      </p>
    </div>
  );
}
