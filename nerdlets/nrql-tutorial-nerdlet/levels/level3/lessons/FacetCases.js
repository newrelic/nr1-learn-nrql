import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function FacetCases() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          As you learned in previous lessons, <code>FACET</code> is a great way
          to both segment your data, and understand it from differently grouped
          perspectives (such as seeing average response time based on different
          response codes). When you use <code>FACET</code>, NRDB organizes data
          into groups based on the values of provided attributes. But what if
          you wanted to group multiple values together, such as HTTP response
          codes 200, 201, etc.?
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          <code>FACET CASES()</code> solves for this issue by allowing you to
          choose how facet buckets are broken out. The operator takes any number
          of parameters in the format "<code>WHERE attr OP value</code>". In the
          example below we've categorized all transactions with response code
          starting with "2" into a "2xx Responses" bucket. We could also do this
          for 3xx, 4xx, and 5xx response codes to group our data in ways that
          increase readability and help us understand what's happening in our
          application(s).
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(\*) from Transaction **FACET CASES(where response.status LIKE '2%' OR httpResponseCode LIKE '2%', where response.status LIKE '3%' OR httpResponseCode LIKE '3%', where response.status LIKE '4%' OR httpResponseCode LIKE '4%', where response.status LIKE '5%' OR httpResponseCode LIKE '5%')**"
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P3">
          As you can see, these groupings are useful but difficult to read.
          Let's clean them up using something we learned in level 2 of this
          course:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(\*) from Transaction FACET CASES(where response.status LIKE '2%' OR httpResponseCode LIKE '2%' **as '2xx Responses'**, where response.status LIKE '3%' OR httpResponseCode LIKE '3%' **as '3xx Responses'**, where response.status LIKE '4%' OR httpResponseCode LIKE '4%' **as '4xx Responses'**, where response.status LIKE '5%' OR httpResponseCode LIKE '5%' **as '5xx Responses'**)"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          <code>FACET CASES()</code> allows us to match and group attributes
          with mulitple, interesting values we want combined. There are many
          useful scenarios for this functionality. It's also even more powerful
          when custom data is tagged onto your transaction data, allowing you
          more granularity and control in navigating and grouping data.
        </Trans>
      </p>
    </div>
  );
}
