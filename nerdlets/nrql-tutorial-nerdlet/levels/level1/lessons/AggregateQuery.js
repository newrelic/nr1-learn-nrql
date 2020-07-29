import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery() {
  return (
    <div>
      <p>
        Rather than look at individual events you usually want to look at
        summarized aggregate data across a large number of events. This is where
        NRDB shines. NRDB can scan billions of events and give you instant
        answers to your questions about the data in realtime.
      </p>
      <p>
        For example, a single <code>Transaction</code> event has a{' '}
        <code>duration</code> attribute which represents how long that call took
        to execute in seconds. Let's see if we can discover the{' '}
        <code>average</code> duration across all Transaction events:
      </p>
      <SampleQuery
        nrql="SELECT **average(duration)** FROM Transaction "
        span="6"
      />

      <p>
        NRQL has many functions you can use to aggregate event data. Some of the
        common functions you might use are <code>max()</code>,{' '}
        <code>min()</code>, <code>count(*)</code> and <code>sum()</code>. In the
        following example, we are going to ask NRDB to tell us what the duration
        of the slowest transaction in the last 60 minutes was.
      </p>

      <p>
        So let's ask NRDB for the <code>max(duration)</code>.
      </p>

      <p>
        <em>Note: the default time frame for a query is the last 60 minutes</em>
      </p>
      <SampleQuery nrql="SELECT **max(duration)** FROM Transaction " span="6" />

      <p>
        Now we know how long the slowest experience one of our customers had in
        the last 60 minutes. Let's invert the logic: What about the fastest
        experience? If we ask NRDB for <code>min(duration)</code>, we should be
        able to answer that question.
      </p>
      <SampleQuery nrql="SELECT **min(duration)** FROM Transaction " span="6" />

      <p>
        <code>max()</code> and <code>min()</code> are interesting. However, we
        may want to perform some arithmetic operations on our data. With{' '}
        <code>sum()</code> we can do a basic math addition on the values of a
        numeric attribute. In this query, we are going to try a new attribute,{' '}
        <code>databaseCallCount</code>. This attribute counts the number of
        database calls each transaction makes. By summing we can get the total
        volume of database calls for the default 60-minute time window. (This
        will be 0 if your apps don't talk to a database)
      </p>
      <SampleQuery
        nrql="SELECT **sum(databaseCallCount)** FROM Transaction "
        span="6"
      />

      <p>
        Finally, you can simply count all the Transaction events that have been
        recorded. We do this with <code>count(*)</code>. In this example, we
        count all the events recorded for all the applications reporting to New
        Relic APM:
      </p>
      <SampleQuery nrql="SELECT **count(*)** FROM Transaction " span="6" />

      <h2>Lesson Summary</h2>
      <p>
        Now we're doing some really interesting things. We're measuring the
        boundaries of our performance. We are grouping event data together and
        calculating information about our chosen attribute.
      </p>

      <p>
        We've chosen <code>duration</code> and calculated the{' '}
        <code>average</code>, <code>max</code> and <code>min</code>. We learned
        how to <code>sum</code> up numeric attributes and <code>count</code> all
        the events for a time period.
      </p>

      <p>
        Manipulating the data in this way is going to help us when we want to
        present the data we need in different visualizations that will help us
        spot performance issues.
      </p>
    </div>
  );
}
