import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function TimeRange() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        Every piece of data in NRDB has a <code>timestamp</code>. And every
        query operates on a subset of data within a time range. If you don't
        provide a time range in your NRQL query, it will return the last 60
        minutes by default. We saw this in the previous lesson. But what if we
        want to see data from a different time range? How do we control the
        window of data we see?
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        Fortunately, it's very straightforward. Use <code>SINCE</code> and{' '}
        <code>UNTIL</code> keywords to provide a beginning and end to your
        query's time range.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P3"}>
        It's also easy to specify time ranges relative to <em>now</em>. You can
        do this with keywords like <code>day</code>, <code>week</code>,{' '}
        <code>hour</code>, <code>minute</code>, or their plural equivalents.
        There are also logical expressions like <code>SINCE today</code> or{' '}
        <code>SINCE this week</code>.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P4"}>
        Here are some sample queries that demonstrate relative time ranges. Note
        that when specifying a relative time, you need to include the keyword{' '}
        <code>ago</code>.
        </Trans>
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

      <h2><Trans i18nKey={"Contents.P5"}>Lesson Summary</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P6"}>
        We're getting further control of our data now. Adding a time frame to a
        query lets us define exactly which window of data we want to see.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P7"}>
        These controls let us zero in on the data of interest by defining where
        the data should start and end. In our examples, we saw that we can
        easily choose the window and use common terms like <code>week</code>,{' '}
        <code>day</code>, <code>hour</code>, <code>minute</code>, and their
        plurals. You can even use <code>month</code> and <code>year</code> if
        you're storing that much data in New Relic.
        </Trans>
      </p>
    </div>
  );
}
