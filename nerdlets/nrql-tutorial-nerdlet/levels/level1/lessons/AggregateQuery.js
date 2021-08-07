import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function AggregateQuery() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Instead of viewing individual events, you usually want to view
          summarized aggregate data across many events. This is where NRDB
          shines. NRDB can scan billions of events and provide instant, realtime
          answers to questions about your data.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          For example, each <code>Transaction</code> event has a{' '}
          <code>duration</code> attribute. This attribute represents how many
          seconds the call took to execute. Let's see if we can discover the{' '}
          <code>average</code> duration across all <code>Transaction</code>{' '}
          events:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **average(duration)** FROM Transaction "
        fallbacknrql="SELECT average(duration) FROM Public_APICall"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          NRQL has many built-in functions you can use to aggregate event data.
          Common functions you might use include <code>max()</code>,{' '}
          <code>min()</code>, <code>median()</code>, and{' '}
          <code>percentile()</code>.
        </Trans>
      </p>
      <p>
        {' '}
        <Trans i18nKey="Contents.P4">
          In the following example, we ask NRDB for the duration of the slowest
          transaction from the last 60 minutes.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P5">
          To do this, we will ask NRDB for the <code>max(duration)</code>.
        </Trans>
      </p>

      <p>
        <em>
          <Trans i18nKey="Contents.P6">
            Note: The default time frame for a query is the last 60 minutes.
          </Trans>
        </em>
      </p>
      <SampleQuery 
        nrql="SELECT **max(duration)** FROM Transaction "
        fallbacknrql="SELECT max(duration) FROM Public_APICall"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P7">
          We now know how long the slowest customer experience in the last 60
          minutes took. Next, let's invert the logic: How long was the fastest
          experience? If we ask NRDB for <code>min(duration)</code> we can find
          out.
        </Trans>
      </p>
      <SampleQuery 
        nrql="SELECT **min(duration)** FROM Transaction "
        fallbacknrql="SELECT min(duration) FROM Public_APICall"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P8">
          As you can see, <code>max()</code> and <code>min()</code> both return
          interesting data points. However, we may also want to perform
          arithmetic on our data. With <code>sum()</code> we can do basic
          addition on a numeric attribute. In this query, we will use a new
          attribute, <code>databaseCallCount</code>. This attribute counts the
          number of database calls each transaction makes. By summing them we
          can get the total volume of database calls in the default 60 minute
          time window. (This will be 0 if your apps don't talk to a database.)
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **sum(databaseCallCount)** FROM Transaction "
        fallbacknrql="SELECT sum(duration) FROM Public_APICall"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P9">
          Finally, you can also count all recorded <code>Transaction</code>{' '}
          events. We do this with <code>count(*)</code>. In this example, we
          count all recorded events for all applications reporting to New Relic
          APM:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **count(*)** FROM Transaction"
        fallbacknrql="SELECT count(*) FROM Public_APICall" 
        span="6" 
      />
      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P10">
          Now we're doing some really interesting things. We're measuring the
          boundaries of our performance, grouping event data together, and even
          calculating information about our chosen attribute.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P11">
          We've chosen <code>duration</code> and calculated the{' '}
          <code>average</code>, <code>max</code>, and <code>min</code>. We
          learned how to <code>sum</code> up numeric attributes and{' '}
          <code>count</code> all the events for a time period.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P12">
          Manipulating data like this will help us when we want to present data
          in visualizations, which can assist us in spotting performance issues.
        </Trans>
      </p>
    </div>
  );
}
