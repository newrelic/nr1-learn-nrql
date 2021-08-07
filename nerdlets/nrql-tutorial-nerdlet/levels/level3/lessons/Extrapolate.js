import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Extrapolate() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          The New Relic Database (NRDB) receives and processes enormous amounts
          of data, every day, at lightning speed! When APM records a large
          amount of event data, New Relic agents implement a sampling technique
          to continue collecting meaningful data while reducing potential impact
          to your applications. This usually only happens when a single event in
          an application or service handles extremely high volumes of requests.
          If multiple agents are spread across multiple load-balanced instances
          of a service, this limit might never be observed.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          Let's discuss what we can do when this happens. The{' '}
          <code>EXTRAPOLATE</code> operator tells New Relic to mathematically
          compensate for the effects of sampling, thereby returning results that
          more closely represent activity in your system. We store an extra
          value to record how many similar events occured over the limit. This
          allows New Relic to deliver statistically accurate results. 
          There is no fallback query for this if you have no APM data
          due to the fact this is specific to Transaction events.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction SINCE 60 minutes ago FACET appName TIMESERIES 1 minute **EXTRAPOLATE**"
        fallbacknrql="SELECT count(*) FROM Transaction SINCE 60 minutes ago FACET appName TIMESERIES 1 minute EXTRAPOLATE"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          You might be thinking "are we hitting the limit?" Well, try removing{' '}
          <code>EXTRAPOLATE</code> from the query, and see if your count
          changes. If it doesn't, you most likely haven't reached the limit.
        </Trans>
      </p>

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          When <code>EXTRAPOLATE</code> is included in a query, the ratio
          between the reported events and the total events is calculated. This
          ratio is then used to extrapolate an approximation of unsampled data.
          Keep in mind that only some queries support its use. When included in
          a NRQL query that doesn’t support it, or that doesn't use sampled
          data, it will have no effect.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P5">
          Note that <code>EXTRAPOLATE</code> is most useful for homogenous data
          (like throughput or error rate). It's not effective when attempting to
          extrapolate a count of distinct things (like{' '}
          <code>uniqueCount()</code> or <code>uniques()</code>). This clause
          works only with NRQL queries that use one of the following aggregator
          functions:
        </Trans>
      </p>
      <ul>
        <li>apdex</li>
        <li>average</li>
        <li>count</li>
        <li>histogram</li>
        <li>sum</li>
        <li>percentage</li>
        <li>rate</li>
        <li>stddev</li>
      </ul>
    </div>
  );
}
