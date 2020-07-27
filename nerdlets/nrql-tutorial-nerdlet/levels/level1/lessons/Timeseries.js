import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function Timeseries() {
  return (
    <div>
      <p>
        One of the most common use cases is to query how a value changes over
        time. This type of query will provide data for line charts, area charts
        and other visualizations.
      </p>
      <p>
        "Timeseries" queries in NRDB are a piece of cake. We've already run some
        queries where we explored aggregation functions <code>average()</code>,{' '}
        <code>max()</code>/<code>min()</code>, <code>sum()</code> and{' '}
        <code>count()</code>.
      </p>
      <p>
        We can take any query we made with our aggregation functions and simply
        just add the <code>TIMESERIES</code> keyword to plot the values over
        time.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES**"
        span="12"
      />
      <p>
        A time series query breaks the data into a number of buckets over the
        time period. You can have NRDB pick a good default value for the width
        of that bucket, or you can specify your own. Let's ask NRDB to show us
        the average duration of application transactions, but let's ask for the
        returned data to be in 1-hour data point buckets.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES 1 hour**"
        span="12"
      />
      <p>
        So that approach returned a flatter graph since we only have 24 data
        points across a 1-day period being plotted. What if you want to see the
        maximum possible granularity? Well any timeseries query can have up to
        366 data buckets. So the maximum possible for 24 hours is to bucket our
        data into 4 minutely windows. We could calculate it out and use{' '}
        <code>TIMESERIES 4 minutes</code>, but we can also just ask NRDB to
        figure that out for us with <code>TIMESERIES MAX</code>:
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES MAX**"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        So we're moving into new worlds of visualization, breaking out from
        summarized numbers to line charts of data trends over time.
      </p>

      <p>
        It's so simple to do and we have full control over the visualization and
        how many data points are plotted, allowing us to control the granularity
        and average the data over specified windows.
      </p>
    </div>
  );
}
