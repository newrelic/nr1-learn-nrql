import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Subqueries() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Subqueries in NRQL are similar to nested aggregations, allowing you to
          use a query nested inside another query. With subqueries the nested
          query is used in the <code>SELECT</code> statement and the{' '}
          <code>WHERE</code> clause, while nested aggregations are used in the{' '}
          <code>FROM</code> clause.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P2">
          Let's look at some examples of these different types of subqueries.
        </Trans>
      </p>

      <h2>
        <Trans i18nKey="Contents.H1">Numeric Conditions</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P3">
          Any query which returns a single numeric value can be used in numeric
          conditions. This example uses a subquery in the <code>WHERE</code>{' '}
          clause that returns the value for the 97th percentile of the duration
          for the transactions, and then returns the name and the duration for
          those transactions that are greater than that.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT name, duration FROM Transaction WHERE duration **> (SELECT percentile(duration,97) FROM Transaction)**"
        fallbacknrql="SELECT http.url, duration FROM Public_APICall WHERE duration **> (SELECT percentile(duration,97) FROM Public_APICall)**"
        span="12"
        chartType="table"
      />

      <h2>
        <Trans i18nKey="Contents.H2">IN Conditions</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          Where multiple values are returned from a subquery, use an{' '}
          <code>IN</code> condition for the parent query to compare against each
          value. In the example, the <code>entity.guid</code> attribute for each
          unique entity that has a transaction error is returned, and this is
          matched against the <code>entity.guid</code> value for the
          transactions to determine the average duration for the erroring
          entities.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction WHERE entity.guid **IN (SELECT uniques(entity.guid) FROM TransactionError)** FACET appName TIMESERIES"
        fallbacknrql="SELECT average(duration) FROM Public_APICall WHERE api **IN (SELECT uniques(api) FROM Public_APICall where duration > 2)** FACET api TIMESERIES"
        span="12"
        chartType="line"
      />

      <h2>
        <Trans i18nKey="Contents.H3">Subqueries in the SELECT statement</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          Subquery results can be used in calculations in the{' '}
          <code>SELECT</code> statement, and may specify a different time range
          from the outer query. This example calculates the delta between the
          current average duration and that of the last 7 days.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) - **(SELECT average(duration) FROM Transaction SINCE 7 days ago)** FROM Transaction TIMESERIES"
        fallbacknrql="SELECT average(duration) - **(SELECT average(duration) FROM Public_APICall SINCE 7 days ago)** FROM Public_APICall TIMESERIES"
        span="12"
        chartType="line"
      />

      <h2>
        <Trans i18nKey="Contents.H4">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P6">
          Subqueries are a powerful tool for data exploration, allowing for more
          sophisticated queries across different data sources and time ranges.
        </Trans>
      </p>
    </div>
  );
}
