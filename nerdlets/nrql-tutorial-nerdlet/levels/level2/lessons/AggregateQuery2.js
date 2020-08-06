import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery2() {
  return (
    <div>
      <p>
        We had a gentle introduction to <em>aggregation</em> in Level 1 by using{' '}
        <code>count()</code>, <code>average()</code>, <code>sum()</code>,{' '}
        <code>max()</code> and <code>min()</code> to transform data in
        meaningful ways. Next we will explore even more powerful functionality.
        In this lesson we will learn how to find and count unique values, locate
        the most recent or oldest entries for an attribute, and work with
        percentages and percentiles.
      </p>
      <p>
        In a previous lesson we learned how the <code>count()</code> function
        can return a simple count of available records. To determine the number
        of unique values recorded for an attribute over a specified time range,
        we can use the <code>uniqueCount()</code> function. In this function, we
        provide the attribute we want to inspect as an argument. For instance,
        here we display all the unique hosts:
      </p>
      <SampleQuery
        nrql="SELECT **uniqueCount(host)** FROM Transaction SINCE 1 day ago"
        span="6"
      />

      <p>
        To return the actual list of unique values for an attribute over a
        specified time range, we can use the <code>uniques()</code> function.
      </p>
      <SampleQuery
        nrql="SELECT **uniques(host)** FROM Transaction SINCE 1 day ago"
        span="6"
        chartType="table"
      />

      <p>
        To retrieve the most recent value of an attribute over a specified time
        range, use the <code>latest()</code> function. In this sample query, we
        are locating the most recent response time for a web transaction in the
        last day. This could help us locate the latest value for an
        intermittently reporting transaction or service.
      </p>
      <SampleQuery
        nrql="SELECT **latest(duration)** FROM Transaction WHERE transactionType = 'Web' SINCE 1 day ago"
        span="6"
      />

      <p>
        Using the <code>earliest()</code> function will do the opposite; that
        is, it will return the <em>earliest</em> value of an attribute recorded
        in the specified time range. In this sample query, we retrieve the
        earliest response time for a web transaction in the last day. If data is
        consistently reporting, this will simply be the data point from the
        earliest event 24 hours ago.
      </p>
      <SampleQuery
        nrql="SELECT **earliest(duration)** FROM Transaction WHERE transactionType = 'Web' SINCE 1 day ago"
        span="6"
      />

      <p>
        There may also be scenarios in which you need percentages instead of
        counts, sums, or averages. Using the <code>percentage()</code> function
        allows you to calculate the percentage of a value in the data set that
        matches a specified condition. This function takes two arguments: the
        first is an aggregator function for your desired attribute, such as{' '}
        <code>count()</code>. The second is a <code>WHERE</code> condition to
        specify the subset of data you'd like to query.
      </p>

      <p>
        In this sample query, we are finding the percentage of transactions over
        the last day that had a duration (or response time) greater than 100
        milliseconds.
      </p>
      <SampleQuery
        nrql="SELECT **percentage(count(*), WHERE duration > 0.1)** FROM Transaction SINCE 1 day ago"
        span="6"
      />

      <p>
        It's very common to view application performance and/or customer
        experience data using percentiles rather than averages. With the{' '}
        <code>percentile()</code> function we can understand the experience of
        the <em>nth</em> percentile.
      </p>

      <p>
        For example, let's say we want to know what the worst experience
        (highest duration) of 98% of our customers is today. We can ask NRDB for{' '}
        <code>percentile(duration, 98)</code> from the last 24 hours.
      </p>
      <SampleQuery
        nrql="SELECT **percentile(duration, 98)** FROM Transaction SINCE 1 day ago"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        As you can see, aggregation can manipulate data in powerful ways. We
        used <code>uniqueCount()</code> to count the unique entries of a
        particular attribute. But you could also use this to identify a count of
        unique machines, reporting containers, or even how many custom data
        points are sent to New Relic. And, if we want to know what unique values
        are available to query, we can always ask for a list using{' '}
        <code>uniques()</code>.{' '}
      </p>

      <p>
        The <code>latest()</code>/<code>earliest()</code> functions are
        particularly useful when dealing with sparse data, or investigating when
        something began or stopped reporting (assuming the data is still stored
        in New Relic).
      </p>

      <p>
        We also learned that <code>percentage()</code> can determine what
        percentage of events matched a qualifier compared with the overall
        result set.
      </p>

      <p>
        Finally, we saw how to observe percentiles. For example, you can use{' '}
        <code>percentile()</code> as a Key Performance Indictator by setting a
        goal to ensure 90% of all end user transactions are faster than a
        provided duration.{' '}
      </p>

      <p>
        We are getting much more advanced at dancing with our data! In the next
        lesson we will learn how to do basic mathematics with NRQL.
      </p>
    </div>
  );
}
