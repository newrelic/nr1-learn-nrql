import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function FirstQuery() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        Let's start by looking at a single event type in NRDB called{' '}
        <code>Transaction</code>, gathered by New Relic APM.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P2"}>
        Every NRQL query must have <code>SELECT</code> and <code>FROM</code>{' '}
        clauses. You must <strong>SELECT</strong> some data and tell us where it
        is <strong>FROM</strong>.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P3"}>
        Start with this simple query that selects everything from the
        Transaction event type. (If you know SQL, NRQL should feel familiar.)
        </Trans>
      </p>

      <SampleQuery
        nrql="**SELECT** \* **FROM** Transaction"
        chartType="table"
        span="12"
      />

      <p>
        <Trans i18nKey={"Contents.P4"}>
        This returns a lot of results. Each has a timestamp and a collection of{' '}
        <em>attributes</em>. For now, we only want a single result, so we will
        limit results to a single record using <code>LIMIT 1</code>.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT \* FROM Transaction **LIMIT 1**"
        chartType="table"
        span="12"
      />

      <p className="notice">
        <Trans i18nKey={"Contents.P5"}>
        When a <code>LIMIT</code> is not supplied the default will be used,
        which is 100 table rows for <code>SELECT *</code> queries or 10
        aggregated values for <code>FACET</code> queries and{' '}
        <code>SELECT (attributes)</code> queries. You can specify any limit up
        to the maximum. Use <code>LIMIT MAX</code> to return the maximum number
        of results possible.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P6"}>
        We're now controlling the volume of results we get. But what if we don't
        want <em>all</em> the attributes? What if we would prefer to see only
        specific data points? Fortunately, like SQL, this can be done in only a
        few characters. We replace <code>*</code> with the name of the
        attribute(s) we want. In this case, we will ask for the name of a
        transaction and the duration of time it took.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P7"}>
        Feel free to try this query in the Chart Builder by clicking the link
        below the query.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT **name, duration** FROM Transaction "
        chartType="table"
        span="12"
      />
      <h2><Trans i18nKey={"Contents.H1"}>Lesson Summary</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P8"}>
        Fantastic start. You just wrote basic queries that can return either all
        attributes of an event, or specific attributes. You also learned how to
        control the number of results returned. Great work!
        </Trans>
      </p>
    </div>
  );
}
