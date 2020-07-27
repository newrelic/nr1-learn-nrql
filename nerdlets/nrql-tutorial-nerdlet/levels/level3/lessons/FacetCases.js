import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function FacetCases() {
  return (
    <div>
      <p>
        Using <code>FACET</code> is a great way to segment your data and
        understand it from a differently grouped perspective, such as seeing
        average response time based on different response codes. When you use{' '}
        <code>FACET</code>, NRDB will break out the data into groups for each
        unique value of the attribute you provided, but what if you wanted to
        group some values together, such as http response codes 200, 201, etc.?
      </p>
      <p>
        <code>FACET CASES()</code> solves for this issue by letting you choose
        how the facet buckets are broken out. The operator takes any number of
        parameters each in the format "<code>WHERE attr OP value</code>". The
        example below shows that we've taken all the transactions that have a
        response code starting with "2" and categorized them all together into a
        "2xx Responses" bucket. Doing this for 3xx, 4xx, and 5xx response codes
        as well lets us better understand the performance of our application by
        grouping the data together in ways that make more sense.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) from Transaction **FACET CASES(where response.status LIKE '2%' OR httpResponseCode LIKE '2%', where response.status LIKE '3%' OR httpResponseCode LIKE '3%', where response.status LIKE '4%' OR httpResponseCode LIKE '4%', where response.status LIKE '5%' OR httpResponseCode LIKE '5%')**"
        span="12"
      />
      <p>
        The groupings are cool and really useful but the names are far from
        ideal. Let's clean them up using something we learned in level 2.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) from Transaction FACET CASES(where response.status LIKE '2%' OR httpResponseCode LIKE '2%' **as '2xx Responses'**, where response.status LIKE '3%' OR httpResponseCode LIKE '3%' **as '3xx Responses'**, where response.status LIKE '4%' OR httpResponseCode LIKE '4%' **as '4xx Responses'**, where response.status LIKE '5%' OR httpResponseCode LIKE '5%' **as '5xx Responses'**)"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        <code>FACET CASES()</code> is really useful, it allows us to take any
        attribute we like that has multiple interesting values and use our
        filtering functionality to match groups of values that we want combined.
        There are many useful scenarios for this functionality and it is even
        more powerful when custom data is tagged onto your transaction data
        allowing you to analyze in interesting ways.
      </p>
    </div>
  );
}
