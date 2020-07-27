import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery2() {
  return (
    <div>
      <p>
        We had a gentle introduction to <em>aggregation</em> in Level 1 by using{' '}
        <code>count()</code>, <code>average()</code>, <code>sum()</code>,{' '}
        <code>max()</code> and <code>min()</code> to transform our data in a
        meaningful way. Now, we will explore more powerful functionality. We are
        going to learn how to find and count unique values, find the most recent
        or oldest entries for an attribute and also how to work with percentages
        and percentiles.
      </p>
      <p>
        We have learned in a previous lesson how the <code>count()</code>{' '}
        function can simply return a count of available records. If we need to
        determine the number of unique values recorded for an attribute over a
        specified time range, we can use the <code>uniqueCount()</code> function
        specifying as an argument the attribute we want to inspect. For
        instance, here we display all the unique hosts.
      </p>
      <SampleQuery
        nrql="SELECT **uniqueCount(host)** FROM Transaction SINCE 1 day ago"
        span="6"
      />

      <p>
        If we want to return the actual list of unique values for an attribute
        over a specified time range, we can use the <code>uniques()</code>{' '}
        function.
      </p>
      <SampleQuery
        nrql="SELECT **uniques(host)** FROM Transaction SINCE 1 day ago"
        span="6"
        chartType="table"
      />

      <p>
        To get the most recent value of an attribute over a specified time
        range, use the <code>latest()</code> function. In this sample query, we
        are getting the most recent response time for a web transaction for the
        last day. We might be looking for the most recent value for an
        intermittently reporting transaction or service.
      </p>
      <SampleQuery
        nrql="SELECT **latest(duration)** FROM Transaction WHERE transactionType = 'Web' SINCE 1 day ago"
        span="6"
      />

      <p>
        Using the <code>earliest()</code> function will do the opposite, that
        is, it will return the earliest value of an attribute recorded in the
        specified time range. In this sample query, we are getting the earliest
        response time for a web transaction over the last day. If the data is
        consistently reporting, this will simply be the data point from the
        earliest event 24 hours ago.
      </p>
      <SampleQuery
        nrql="SELECT **earliest(duration)** FROM Transaction WHERE transactionType = 'Web' SINCE 1 day ago"
        span="6"
      />

      <p>
        There may be some scenarios when you need to look at percentages instead
        of just counts, sums or averages. Using the <code>percentage()</code>{' '}
        function will allow you to calculate the percentage of a value in the
        data set that matches a specified condition. This function takes two
        arguments: the first is an aggregator function for your desired
        attribute such as <code>count()</code>, and the second is a{' '}
        <code>WHERE</code> condition to specify the subset of data you are
        interested in.
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
        A very popular way to look at your application performance or customer
        experience is with percentiles rather than averages. With the{' '}
        <code>percentile()</code> function, we can understand what the
        experience of the <em>nth</em> percentile is.
      </p>

      <p>
        For example, today we want to know what the worst experience (highest
        duration) of 98% of our customers is. So let's ask NRDB for{' '}
        <code>percentile(duration, 98)</code> from the last 24 hours.
      </p>
      <SampleQuery
        nrql="SELECT **percentile(duration, 98)** FROM Transaction SINCE 1 day ago"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        Aggregation is a powerhouse of data manipulation. We used{' '}
        <code>uniqueCount()</code> to count the unique entries of a particular
        attribute. You could ask for a count of unique machines, containers
        reporting in, or even a unique count of some custom data being sent to
        New Relic. Either way, it is extremely simple. And if we want to know
        what unique values there are, we can also ask for a list of unique
        values with <code>uniques()</code>.{' '}
      </p>

      <p>
        The <code>latest()</code>/<code>earliest()</code> functions can be
        particularly useful when dealing with sparse data or investigating when
        something began or stopped reporting (assuming the data is still stored
        in New Relic).
      </p>

      <p>
        We learned that the <code>percentage()</code> can answer the question of
        what percentage of events matched a qualifier compared with the overall
        result set. Finally, in a similar vein, we looked at how easy it is to
        observe percentiles. You might use a <code>percentile()</code>, for
        example, as a Key Performance Indictator where you set a goal of
        ensuring 90% of all transactions experienced by end users were faster
        than a specific duration.{' '}
      </p>

      <p>
        Now we are getting much more advanced at dancing with our data. Let's
        move on to learn how to do some basic maths with NRQL.
      </p>
    </div>
  );
}
