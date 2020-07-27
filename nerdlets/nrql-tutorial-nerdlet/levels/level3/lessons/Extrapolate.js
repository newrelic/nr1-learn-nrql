import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function Extrapolate() {
  return (
    <div>
      <p>
        NRDB receives and processes an enormous amount of data every day at
        lightning speed! In circumstances where a large amount of event data is
        recorded by APM, New Relic agents implement a sampling technique to
        continue collecting meaningful data while reducing potential impact to
        your applications. This only tends to happen on applications or services
        where a single agent is handling extremely high volumes of requests. If
        multiple agents are spread across multiple load balanced instances of a
        service this limit might never be observed.
      </p>
      <p>
        However, let's understand what we can do when this happens. The{' '}
        <code>EXTRAPOLATE</code> operator is here to tell New Relic to
        mathematically compensate for the effects of sampling, thereby returning
        results that more closely represent the activity in your system. We
        store an extra value to tell us how many similar events occured over the
        liimit so we can deliver a statistically accurate result.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction SINCE 60 minutes ago FACET appName TIMESERIES 1 minute **EXTRAPOLATE**"
        span="12"
      />

      <p>
        You might be thinking, are we hitting the limit? Well, try to edit the
        query and remove <code>EXTRAPOLATE</code> and see if your count changes.
        If it doesn't, you most likely haven't hit the limit at all.
      </p>

      <h2>Lesson Summary</h2>
      <p>
        When <code>EXTRAPOLATE</code> is used in a NRQL query that supports its
        use, the ratio between the reported events and the total events is used
        to extrapolate a close approximation of the total unsampled data. When
        it is used in a NRQL query that doesn’t support its use or that hasn’t
        used sampled data, it has no effect.
      </p>
      <p>
        Note that <code>EXTRAPOLATE</code> is most useful for homogenous data
        (like throughput or error rate). It's not effective when attempting to
        extrapolate a count of distinct things (like <code>uniqueCount()</code>{' '}
        or <code>uniques()</code>). This clause works only with NRQL queries
        that use one of the following aggregator functions:
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
