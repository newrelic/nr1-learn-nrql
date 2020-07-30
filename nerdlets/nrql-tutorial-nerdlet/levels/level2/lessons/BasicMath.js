import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function BasicMath() {
  return (
    <div>
      <p>
        NRQL supports basic math operators. You can perform addition (
        <code>+</code>), subtraction (<code>-</code>), multiplication (
        <code>*</code>) and division (<code>/</code>) on both numeric attribute
        values, and results of aggregator functions.
      </p>
      <p>
        For example, when a transaction event is recorded we capture both the
        total response time (as <code>duration</code>) and database response
        time (as <code>databaseDuration</code>). But what if we want to compute
        the average time spent outside of database processing? Well, let's start
        by calcuating that value for each event in our data set.
      </p>
      <SampleQuery
        nrql="SELECT **duration - databaseDuration**, name FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
        chartType="table"
      />

      <p>
        Great! We just performed some basic math. This is useful if we are
        listing individual events. But what if we want to know the average
        duration of transactions without the database time? Well, we can simply
        do the arithmetic within the function:
      </p>
      <SampleQuery
        nrql="SELECT **average(duration - databaseDuration)** FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
      />

      <p>
        Simple, right? Now, what if we wanted to get even more complicated and
        subtract, divide, <em>and</em> multiply in the same query to figure out
        the duration without database time, as a percentage of overall time? We
        can simply build out the math. It reads pretty much exactly how you
        would expect.
      </p>
      <SampleQuery
        nrql="SELECT **(average(duration) - average(databaseDuration)) / average(duration) \* 100** FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        New Relic reports timings as part of your events, so you can use them to
        calculate interesting data points, or even generate percentage results.{' '}
      </p>
      <p>
        You can further maximize the power of basic mathematics by doing things
        like timing custom actions or events, or sending custom data. For
        instance, an e-commerce platform that reports data about order sizes,
        which transactions were successful orders, and payment methods could
        calculate values such as the conversion rate of orders vs. unique
        customer visits.
      </p>
    </div>
  );
}
