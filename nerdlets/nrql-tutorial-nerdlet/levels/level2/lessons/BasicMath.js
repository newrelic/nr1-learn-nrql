import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function BasicMath() {
  return (
    <div>
      <p>
        NRQL supports basic math operators. You can perform addition (
        <code>+</code>), subtraction (<code>-</code>), multiplication (
        <code>*</code>) and division (<code>/</code>) on both numeric attribute
        values and results of aggregator functions.
      </p>
      <p>
        For example, when a transaction event is recorded we capture both the
        total response time (as <code>duration</code>) and database response
        time (as <code>databaseDuration</code>). What if we want to compute the
        average time spent outside of database processing? Well, let's start
        with calcuating that value for each event in our data set.
      </p>
      <SampleQuery
        nrql="SELECT **duration - databaseDuration**, name FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
        chartType="table"
      />

      <p>
        Great! So now, we have performed some basic math and that's useful if we
        are listing individual events But what if we want to know the average
        duration of transactions without the database time? Well we can simply
        do the arithmetic within the function:
      </p>
      <SampleQuery
        nrql="SELECT **average(duration - databaseDuration)** FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
      />

      <p>
        Simple, right? It should hopefully make a lot of sense, but what if we
        wanted to get even more complicated and subtract, divide and multiply in
        the same query because we want to figure out the duration without
        database time, as a percentage of overall time? We just have to build
        out the math and it reads pretty much exactly how you would expect.
      </p>
      <SampleQuery
        nrql="SELECT **(average(duration) - average(databaseDuration)) / average(duration) \* 100** FROM Transaction WHERE databaseDuration IS NOT NULL"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Short and sweet but extremely useful, New Relic will report timings as
        part of your events and you can use them to calculate interesting data
        points or generate percentage results after the fact.{' '}
      </p>
      <p>
        If you want to maximize the power of doing basic maths, then timing
        custom actions or events or sending custom data will be where you really
        see this excel. One example might be an e-commerce platform that sends
        the size of an order, which transactions were successful orders and
        maybe the type of payment method. Then, you can calculate something
        interesting to your business like a conversion rate of orders vs. unique
        customer visits.
      </p>
    </div>
  );
}
