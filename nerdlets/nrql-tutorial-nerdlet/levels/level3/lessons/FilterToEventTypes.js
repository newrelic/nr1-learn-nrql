import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function FilterToEventTypes() {
  return (
    <div>
      <p>
        Now it's time to learn something not many New Relic customers use or
        maybe are even aware of. We truly are in the realm of NRQL ninja land
        right now. So far, we've made a query that pulls data from a single
        source. However, what if I want to plot 2 data points but they are
        stored as two different event types? Querying NRDB data is not limited
        to a single event type, allowing you to see data representative of your
        entire system rather than just one aspect. To query from multiple event
        types, simply mention each event type seperated by a comma.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events' **FROM Transaction, PageView** SINCE  1 day ago"
        span="6"
      />

      <p>
        To make this more useful, the <code>eventType()</code> function allows
        us to know which event type a record is from. We can use that to control
        our data output. In this example, we can see the total number of{' '}
        <em>Transaction</em> and <em>PageView</em> events combined, as well as
        the totals for just <em>Transaction</em> and just <em>PageView</em>.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events', filter(count(\*), **WHERE eventType() = 'PageView'**) as 'Page Views', filter(count(\*), **WHERE eventType()='Transaction'**) as 'Transactions' FROM Transaction, PageView SINCE  1 day ago"
        span="12"
      />

      <p>
        Let's look at this in more detail: <code>count(*)</code> is the total of
        both <em>Transaction</em> and <em>PageView</em>. However, we use that
        aggregator function <code>filter()</code> that we learned about recently
        to do something unique. We tell it{' '}
        <code>WHERE eventType()='PageView'</code>. Now the filter function
        observed the type of event as part of the total result set and filtered
        to only have those specific events. We can even plot this as a
        timeseries to compare 2 data points that may be directly comparable on a{' '}
        <code>TIMESERIES</code> line graph
      </p>

      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events', filter(count(\*), WHERE eventType() = 'PageView') as 'Page Views', filter(count(\*), WHERE eventType()='Transaction') as 'Transactions' FROM Transaction, PageView SINCE  1 day ago TIMESERIES max"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Now we have managed to get results and plot a line graph using data from
        two different event types. This is just an example of how even without
        the database concept of joins, NRQL is still extremely powerful and can
        keep your results coming blazing fast without the complexity of joining
        two data sets.
      </p>
    </div>
  );
}
