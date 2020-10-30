import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Timeseries() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          A common NRQL use case is querying how a value changes over time. This
          type of query provides data for line charts, area charts, and other
          visualizations.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          "Timeseries" queries in NRDB are a piece of cake. We've already run
          some to explore aggregation functions <code>average()</code>,{' '}
          <code>max()</code>/<code>min()</code>, <code>sum()</code>, and{' '}
          <code>count()</code>.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">
          We can take any query made with aggregation functions and add the{' '}
          <code>TIMESERIES</code> keyword to plot the values over time.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES**"
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P4">
          A time series query breaks the data into a number of buckets over the
          specified time period. You can have NRDB pick a good default value for
          the width of that bucket, or you can specify your own. Let's ask NRDB
          to show us the average duration of application transactions, with
          returned data organized into 1-hour buckets.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES 1 hour**"
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P5">
          Notice this returns a flatter graph, since we only have 24 data points
          across the 1-day period being plotted. But what if you want to see the
          maximum possible granularity? Well, any timeseries query can have up
          to 366 data buckets. This means the maximum possible for 24 hours is
          to bucket our data into 4 minute windows. We could calculate it out
          and use <code>TIMESERIES 4 minutes</code>, or we could ask NRDB to
          calculate this for us using <code>TIMESERIES MAX</code>:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction SINCE 1 day ago **TIMESERIES MAX**"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P6">
          We're moving into new worlds of visualization, breaking out from
          summarized numbers to line charts of data trends over time.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P7">
          As you can see, using <code>TIMESERIES</code> offers full control over
          visualizations, granularity and averaging data over specified windows.
        </Trans>
      </p>
    </div>
  );
}
