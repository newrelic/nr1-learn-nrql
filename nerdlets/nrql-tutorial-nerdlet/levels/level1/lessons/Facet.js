import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Facet() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Often, you'll want to determine the "Top N" values grouped by a
          specific attribute. In NRQL, you do this using <code>FACET</code>. For
          example, here are the slowest <code>Transaction</code> calls observed
          on average, grouped by name. We could describe this as "faceted by
          name".
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 1 day ago"
        fallbacknrql="SELECT average(duration) FROM Public_APICall FACET awsAPI SINCE 1 day ago"
        chartType="bar"
        span="6"
      />
      <p>
        <Trans i18nKey="Contents.P2">
          By default, a faceted query will return the top 10 results; but you
          can customize how many results are returned with a <code>LIMIT</code>.
          In this example, we will retrieve the top 5 results displayed on a
          line chart with <code>TIMESERIES</code>.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 5** TIMESERIES"
        fallbacknrql="SELECT average(duration) FROM Public_APICall FACET awsAPI SINCE 3 hours ago LIMIT 5 TIMESERIES"
        span="6"
      />
      <p>
        <Trans i18nKey="Contents.P3">
          But maybe you don't want a line chart. Perhaps you'd prefer a list of
          the 20 slowest Transactions. By removing the <code>TIMESERIES</code>,
          we can instead render a bar or pie chart.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 20**"
        fallbacknrql="SELECT average(duration) FROM Public_APICall FACET awsAPI SINCE 3 hours ago LIMIT 20"
        chartType="bar"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 20**"
        fallbacknrql="SELECT average(duration) FROM Public_APICall FACET awsAPI SINCE 3 hours ago LIMIT 20"
        chartType="pie"
        span="6"
      />
      <p>
        <Trans i18nKey="Contents.P4">
          This query compares the quantity of Web transactions, broken down by
          individual applications that report to New Relic:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE transactionType='Web' **FACET appName** LIMIT 5 SINCE 6 hours ago TIMESERIES"
        fallbacknrql="SELECT count(*) FROM Public_APICall FACET awsAPI LIMIT 5 SINCE 6 hours ago TIMESERIES"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          Grouping or "faceting" is important. It allows us to get dimensional
          with our data. Using the <code>FACET</code> keyword is the simplest
          way to do this.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P6">
          When applying an aggregation function, we can use <code>FACET</code>{' '}
          to group by an attribute. You can use <em>any</em> attribute, default
          or custom, that reports to event data (just like the{' '}
          <code>WHERE</code> clause). We recommend tagging on custom data to
          your events. This allows you to more easily slice and dice the
          resulting data set.
        </Trans>
      </p>
    </div>
  );
}
