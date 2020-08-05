import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function Timeseries() {
  return (
    <div>
      <p>
        A common NRQL use case is querying how a value changes over time. This
        type of query provides data for line charts, area charts, and other
        visualizations.
      </p>
      <p>
        "Timeseries" queries in NRDB are a piece of cake. We've already run some
        to explore aggregation functions <code>average()</code>,{' '}
        <code>max()</code>/<code>min()</code>, <code>sum()</code>, and{' '}
        <code>count()</code>.
      </p>
      <p>
        We can take any query made with aggregation functions and add the{' '}
        <code>TIMESERIES</code> keyword to plot the values over time.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES**"
        span="12"
      />
      <p>
        A time series query breaks the data into a number of buckets over the
        specified time period. You can have NRDB pick a good default value for
        the width of that bucket, or you can specify your own. Let's ask NRDB to
        show us the average duration of application transactions, with returned
        data organized into 1-hour buckets.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES 1 hour**"
        span="12"
      />
      <p>
        Notice this returns a flatter graph, since we only have 24 data points
        across the 1-day period being plotted. But what if you want to see the
        maximum possible granularity? Well, any timeseries query can have up to
        366 data buckets. This means the maximum possible for 24 hours is to
        bucket our data into 4 minute windows. We could calculate it out and use{' '}
        <code>TIMESERIES 4 minutes</code>, or we could ask NRDB to calculate
        this for us using <code>TIMESERIES MAX</code>:
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES MAX**"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        We're moving into new worlds of visualization, breaking out from
        summarized numbers to line charts of data trends over time.
      </p>

      <p>
        As you can see, using Timeseries offers full control over
        visualizations, granularity and averaging data over specified windows.
      </p>
    </div>
  );
}
