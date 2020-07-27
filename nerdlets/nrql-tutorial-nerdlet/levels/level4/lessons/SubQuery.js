import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function SubQuery() {
  return (
    <div>
      <p>
        NRQL does not support joins like traditional SQL databases. However, you
        can write nested aggregation queries that look a bit like sub queries.
        This allows you to answer questions such as:
      </p>
      <ul>
        <li>
          Can I count the requests per minute for my application, then get the
          maximum requests per minute for the last hour?
        </li>
        <li>
          Can I compute the average CPU usage of all my servers, and show me
          only the ones over 90%?
        </li>
        <li>
          From all my user sessions, what percentage bounced immediately (i.e.
          only one PageView in the session)?
        </li>
      </ul>

      <p>Let's explore these use cases in more detail.</p>
      <h2>Example 1 - Max RPM for last hour</h2>
      <p>
        First, we simply count the number of transactions per minute over the
        last hour. There is nothing new here, this returns 60 data points on a
        graph:
      </p>
      <SampleQuery
        nrql="SELECT count(\*) **AS rpm** FROM Transaction TIMESERIES 1 MINUTE"
        span="12"
      />
      <p>
        Now to find the maximum value reported across that period, we wrap that
        query in parentheses and select from like this:{' '}
        <code>SELECT z FROM (SELECT x FROM y)</code>
      </p>
      <SampleQuery
        nrql="**SELECT max(rpm) FROM (**SELECT count(\*) **AS rpm** FROM Transaction TIMESERIES 1 MINUTE**)**"
        span="6"
        chartType="table"
      />

      <h2>Example 2 - Servers with high CPU load</h2>
      <p>
        This example uses data from New Relic Infrastructure. Sometimes you only
        want to see hosts whose CPU has on average exceeded x%. If you ask NRQL
        for the <code>average(cpuPercent)</code> you get a list of the hosts
        with the highest average CPU percent. You can not simply add a{' '}
        <code> WHERE cpuPercent {'>'} 90 </code> to limit this to only hosts
        running at 90% or above as this would remove the data before the average
        was calculated.{' '}
      </p>
      <p>
        This is where the nested aggregation comes in. By asking for{' '}
        <code>average(cpuPercent)</code> in the sub query, we get the list of
        hosts and their average CPU. Now, at the outer query, we can filter to
        only return the results that were {'>'} x%. Happy days!{' '}
        <em>
          (You may need to adjust the threshold of this query to work with your
          hosts CPU, we've set it to 20% here)
        </em>
      </p>
      <SampleQuery
        nrql="SELECT hostname, **cpu** FROM (SELECT average(cpuPercent) **AS cpu** FROM SystemSample FACET hostname) **WHERE cpu > 20**"
        span="12"
        chartType="table"
      />

      <h2>Example 3 - Session bounces</h2>
      <p>
        We are often asked how to calculate bounce rate on frontend monitoring -
        sessions that are just a single page view and that user bounced away not
        visting any more pages. With nested aggregation, we can now achieve
        this. Our inner query needs to count the pageviews and group them by
        session. The result set passed to the outer query is now a list of all
        sessions and how many pages they viewed. The outer query needs to
        calculate the percentage of sessions where the count came back as 1
        (indicating a bounced session).{' '}
      </p>
      <SampleQuery
        nrql="SELECT percentage(count(\*), **WHERE sessionLength = 1**) FROM (SELECT count(\*) **AS sessionLength** FROM PageView FACET session)"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Well done! You have now learned all the amazing functionality of NRQL
        covered in this course. Congratulations, you truly are a NRQL Ninja!
      </p>
      <p>
        If you have any further questions or encounter any problems, please do
        feel free to reach out to New Relic support via{' '}
        <a href="https://support.newrelic.com" target="_blank" rel="noreferrer">
          support.newrelic.com
        </a>{' '}
        or to share your experience on our online community at{' '}
        <a href="https://discuss.newrelic.com" target="_blank" rel="noreferrer">
          discuss.newrelic.com
        </a>
        .
      </p>
    </div>
  );
}
