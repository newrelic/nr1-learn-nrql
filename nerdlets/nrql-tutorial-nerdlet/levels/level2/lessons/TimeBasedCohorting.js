import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function TimeBasedCohorting() {
  return (
    <div>
      <p>
        Time-based cohorting...what a complicated but fun term! While it sounds
        complex, "time-based cohorting" is simply a way to organize data into
        time-based groups like <code>minuteOf</code>, <code>hourOf</code>,{' '}
        <code>weekOf</code>, and more.
      </p>
      <p>
        When we use the <code>SINCE</code> clause for durations, we retrieve the
        entire length of time queried for. But that data may not always tell the
        whole story! We may need to ananlyze performance within a time period
        more closely. With time-based cohorting, we can further sort the data
        into logical, time-based groupings.
      </p>
      <p>
        Using a combination of <code>FACET</code> and one of the many time-based
        functions (such as <code>hourOf(timestamp)</code>) we can take a week’s
        worth of data and understand performance based on the specific hour it
        occurred. This reveals trends and identifies the most critical times for
        our application. Check it out:
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET hourOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <p>
        After running the query above we can see the slowest response time based
        on the hour of the day. Super interesting, right?
      </p>
      <p>
        New Relic provides many different options to facet based on time. The
        previous example is grouped by the hour, but we can also group by the
        day of the week to determine which days have the best and worst response
        times.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET weekdayOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <p>
        Now can see when are we slowest on any specific day. This could be
        logically extended to answer business-critical questions like "When do
        we sell the most products?", or "When do we have the most sign-ups or
        logins?".
      </p>
      <p>
        You can also group results by a specific date. This helps when
        considering SLA reports, or analyzing performance changes over a given
        period.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET dateOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        Digging into your data is always fun! Time-based cohorting is an easy
        way to expose problems that occur on specific minutes, hours, days, or
        weeks. No matter what data you send to New Relic, NRQL allows you to
        slice, dice, organize, and visualize it however you want.
      </p>
      <p>
        There’s also many other options available to group by, including week,
        month, and year depending on your data retention. To see the full list,
        head to our{' '}
        <a
          href="https://docs.newrelic.com/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/group-results-across-time"
          target="_blank"
          rel="noreferrer"
        >
          Group Results Across Time documentation Page
        </a>
        .
      </p>
    </div>
  );
}
