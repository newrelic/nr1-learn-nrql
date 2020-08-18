import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery4() {
  return (
    <div>
      <p>
        In this final lesson on aggregate queries, we will discuss standard
        deviation and bucketing.
      </p>

      <h2>Standard Deviation and Variance</h2>
      <p>
        Standard deviation mesaures the amount of variation or dispersion within
        a set of values. It uses a scale from low (values close to the average)
        to high (values far from the average). The <code>stddev()</code>
        function lets us look between the lines of averages and understand what
        values are reported on a deeper level. In this example, we compare
        standard deviation of transaction response time ("duration") for the
        last day to the previous day.
      </p>
      <SampleQuery
        nrql="SELECT **stddev(duration)** from Transaction since 24 hours ago COMPARE WITH 24 hours ago TIMESERIES "
        span="12"
      />

      <p className="notice">
        The <code>stdvar()</code> function works in a similar way to{' '}
        <code>stddev()</code> but returns the standard variance for numeric
        attributes.
      </p>

      <h2>Facet Bucketing</h2>
      <p>
        In a previous lesson, we learned how to group data into a specific
        configuration of buckets using <code>FACET cases()</code>. We can also
        bucket data by a specific attribute automatically using{' '}
        <code>FACET buckets()</code>. This function simplifies grouping data for
        any aggregation function. It takes three arguments:
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
        In the example query, we ask for the average duration of an entire
        transaction; but we want to group that performance into transactions
        that make specific volumes of database calls. So, we specify the bucket
        attribute as <code>databaseCallCount</code>, set the ceiling at 400
        calls, and group it in 10 buckets. The result is the performance of
        transactions making 0-40, 40-80, 80-120, 120-160, 160-200, 200-240,
        240-280, 280-320, 320-360, and &gt;360 Database Calls. 10 clear buckets
        divided evenly up to the ceiling.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 12 hours ago FACET **buckets(databaseCallCount, 400, 10)**"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        You have now learned all aggregation functions that curently exist in
        NRQL! You can slice and dice your data like a pro. If you think an
        aggregation ability is missing from NRQL, let your account team know. We
        are always looking for the next killer functionality our customers need.{' '}
      </p>
    </div>
  );
}
