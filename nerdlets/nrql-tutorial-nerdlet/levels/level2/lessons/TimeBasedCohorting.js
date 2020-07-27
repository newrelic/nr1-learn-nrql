import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function TimeBasedCohorting() {
  return (
    <div>
      <p>
        Time-based cohorting.... What a complicated but fun to say section name.
        Despite sounding complicated, all it really means is how do I group my
        data results into logical time-based groups like the{' '}
        <code>minuteOf</code>, <code>hourOf</code>, <code>weekOf</code> and a
        multitude of other ways of thinking of the time something happened to
        make comparison easy.
      </p>
      <p>
        When we use the <code>SINCE</code> clause for durations, we are looking
        at the entire length of time we queried for. But that might not tell us
        the whole story, and we need to know performance in that time on a more
        granular level. Maybe we need to bucket the data into logical time
        groupings. Once again, this is absolutely possible using NRDB and NRQL.
      </p>
      <p>
        Using a combination of <code>FACET</code> with one of the various
        time-based functions we make available such as{' '}
        <code>hourOf(timestamp)</code>, we can take our week’s worth of queried
        data and understand performance based on the hour it occurred, letting
        us see trends and understand our most critical times for our
        application.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET hourOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <p>
        Super interesting, right? We now can see the slowest response time based
        on the hour of the day.
      </p>
      <p>
        New Relic provides multiple options to facet based on time with your
        data, so you can find exactly the data trends you are looking for. Our
        previous example is grouped by the hour, but we can also group by the
        day of the week to understand our data. With this, we know exactly which
        days have the best and worst response times.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET weekdayOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <p>
        Now we're looking to see when are we slowest on any specific day. This
        could easily be extended logically to "When do we sell the most
        products" in an e-commerce platform or "When do we have the most
        sign-ups or logins". We're starting to answer the business critical
        questions.
      </p>
      <p>
        You can also group your results by the actual date instead, making it
        easy to use when considering SLA reports or understanding performance
        changes over a given period.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET dateOf(timestamp)** SINCE 1 week ago"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        Digging into your data is always fun and time-based cohorting is a way
        to really expose if you have problems on specific minutes, hours, days
        or weeks and group your data in the way you like to analyze it. Those
        problems could be related to performance or spikes in traffic you need
        to plan to handle. No matter what data you send to New Relic, you can
        dice the data how you need it.
      </p>
      <p>
        There’s a multitude of other options available to group by, including
        week, month, and year depending on your data retention. To see the full
        list, head to our{' '}
        <a
          href="https://docs.newrelic.com/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/group-results-across-time"
          target="_blank"
          rel="noreferrer"
        >
          Documentation Page
        </a>
        .
      </p>
    </div>
  );
}
