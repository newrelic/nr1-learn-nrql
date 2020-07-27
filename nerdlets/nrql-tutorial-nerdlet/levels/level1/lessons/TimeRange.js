import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function TimeRange() {
  return (
    <div>
      <p>
        Every piece of data in NRDB has a <code>timestamp</code> and every query
        operates on a subset of data in a time range. If you don't provide a
        time range in your NRQL, then the query will default to a time range of
        the last 60 minutes until this moment (<em>now</em>). We saw this in the
        previous lesson. So how do we control the window of data we want to see?
      </p>
      <p>
        Fortunately, it's very easy. Use the <code>SINCE</code> and{' '}
        <code>UNTIL</code> keywords to provide a beginning and end to your
        query's time range.
      </p>
      <p>
        It's easy to specify time ranges relative to <em>now</em> using keywords
        such as <code>day</code>, <code>week</code>, <code>hour</code>,{' '}
        <code>minute</code> or their plural equivalents. There are also some
        logical expressions like <code>SINCE today</code> or{' '}
        <code>SINCE this week</code>.
      </p>
      <p>
        Here are some sample queries that demonstrate relative time ranges. Note
        that when specifying a relative time, you need to include the keyword{' '}
        <code>ago</code>.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **SINCE 1 day ago**"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **SINCE 1 week ago UNTIL 2 days ago**"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **SINCE 23 hours ago UNTIL 15 minutes ago**"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **SINCE today**"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **SINCE this week**"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        We're getting further control on our data now. The time frame of a query
        lets us define which window of data we want to see.
      </p>

      <p>
        These controls let us zero in on the data of interest by defining where
        the data should start and end. In our examples, we saw that we can
        easily choose the window and use common lexicons like <code>week</code>,{' '}
        <code>day</code>, <code>hour</code>, <code>minute</code> and their
        plurals. You can even use <code>month</code> and <code>year</code> if
        you're storing that much data in New Relic.
      </p>
    </div>
  );
}
