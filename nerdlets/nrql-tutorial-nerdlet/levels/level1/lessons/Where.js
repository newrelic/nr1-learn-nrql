import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function Where() {
  return (
    <div>
      <p>
        Most of the time you want your query to operate on a subset of the data
        in NRDB. For example, let's query for the average response time for our
        backend application. In this data, there is an attribute called{' '}
        <code>transactionType</code> that specifies whether the transaction we
        timed was a "Non-Web" (maybe a cron-job or queued task) or "Web"
        transaction.
      </p>
      <p>
        Let's filter our query to return data only for the "Web"
        transactionType:
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **WHERE transactionType='Web'** TIMESERIES"
        span="12"
      />
      <p>
        You can also combine <code>AND</code> and <code>OR</code> to make more
        complex queries. Use parentheses "<code>(</code>" and "<code>)</code>"
        to control how these work together.
      </p>
      <p>
        This query shows the average response time of "Web" transactions that
        were faster than 100ms and had a response code of either 200 or 302.
        Notice how we use the parentheses to control the <code>OR</code> which
        may behave differently than you might expect.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction WHERE transactionType='Web' **AND** duration < 0.1 **AND (**httpResponseCode=200 **OR** httpResponseCode=302**)** TIMESERIES"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        This wasn't a long lesson but hopefully, it was nice and clear. So far,
        every query we made was performing the actions on all the available data
        in the given time window.
      </p>

      <p>
        Filtering out undesired data is important. The examples above are useful
        - we might want to filter to a type of transaction, or where a response
        code is a specific value. Equally, you might filter to a specific{' '}
        <code>appName</code> or Transaction <code>name</code> or even a custom
        attribute which you've tagged on your data set.
      </p>
    </div>
  );
}
