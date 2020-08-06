import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function SubQuery() {
  return (
    <div>
      <p>
        NRQL does not support the type of joins used in traditional SQL
        databases. However, you can write nested aggregation queries that
        resemble sub queries. This allows you to answer questions such as:
      </p>
      <ul>
        <li>
          How many requests per minute did my application handle, and what was
          the maximum rate of requests per minute in the last hour?
        </li>
        <li>
          What is the average CPU usage of all my servers, and which specific
          servers are over 90%?
        </li>
        <li>
          What percentage of all user sessions bounced immediately (i.e. only
          one PageView in the session)?
        </li>
      </ul>

      <p>Let's explore each of these use cases in more detail.</p>

      <h2>Example 1 - Max RPM for Last Hour</h2>
      <p>
        First we count the number of transactions per minute over the last hour.
        There is nothing new here. This returns 60 data points on a graph:
      </p>
      <SampleQuery
        nrql="SELECT count(\*) **AS rpm** FROM Transaction TIMESERIES 1 MINUTE"
        span="12"
      />
      <p>
        Now, in order to find the maximum value reported across that period, we
        wrap the query in parentheses, and use <code>SELECT ... FROM</code> like this:{' '}
        <code>SELECT z FROM (SELECT x FROM y)</code>
      </p>
      <SampleQuery
        nrql="**SELECT max(rpm) FROM (**SELECT count(\*) **AS rpm** FROM Transaction TIMESERIES 1 MINUTE**)**"
        span="6"
        chartType="table"
      />

      <h2>Example 2 - Servers with High CPU Load</h2>
      <p>
        This example uses data from New Relic Infrastructure. Sometimes you only
        want to see hosts whose CPU has, on average, exceeded a certain
        percentage. If you ask NRQL for the <code>average(cpuPercent)</code> you
        get a list of hosts with the highest average CPU percent. But you cannot
        simply add a <code> WHERE cpuPercent {'>'} 90 </code> to limit this to
        only hosts running at 90% or above, because this would remove the data
        before calculating the average.{' '}
      </p>
      <p>
        But this can be solved with nested aggregation! By asking for{' '}
        <code>average(cpuPercent)</code> in the sub query, we get the list of
        hosts and their average CPU. Now, in the outer query we can filter to
        only results that were {'>'} x%. Happy days!{' '}
        <em>
          (Tip: You may need to adjust the threshold of this query to work with
          your hosts' CPU. We've set it to 20% here.)
        </em>
      </p>
      <SampleQuery
        nrql="SELECT hostname, **cpu** FROM (SELECT average(cpuPercent) **AS cpu** FROM SystemSample FACET hostname) **WHERE cpu > 20**"
        span="12"
        chartType="table"
      />

      <h2>Example 3 - Session Bounces</h2>
      <p>
        We are often asked how to calculate bounce rate on front-end monitoring.
        This refers to sessions that view a single page, and "bounce" away
        before visiting more pages. With nested aggregation, we can achieve
        this. Our inner query counts the PageViews, grouping them by session.
        The result set passed to the outer query is a list of all sessions and
        how many pages each viewed. The outer query then calculates the
        percentage of sessions in which the count is 1 (this indicates a
        "bounced session", because they only viewed a single page).{' '}
      </p>
      <SampleQuery
        nrql="SELECT percentage(count(\*), **WHERE sessionLength = 1**) FROM (SELECT count(\*) **AS sessionLength** FROM PageView FACET session)"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Well done! You have now learned all the amazing functionality of NRQL
        covered in this course. You truly are a NRQL wizard!
      </p>
      <p>
        If you have further questions or encounter problems, feel free to
        contact New Relic support via{' '}
        <a href="https://support.newrelic.com" target="_blank" rel="noreferrer">
          support.newrelic.com
        </a>{' '}
        You're also welcome to share your experience with our online community
        at{' '}
        <a href="https://discuss.newrelic.com" target="_blank" rel="noreferrer">
          discuss.newrelic.com
        </a>
        .
      </p>
    </div>
  );
}
