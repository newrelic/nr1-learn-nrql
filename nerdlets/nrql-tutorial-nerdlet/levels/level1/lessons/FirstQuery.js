import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function FirstQuery() {
  return (
    <div>
      <p>
        Let's start by looking at a single event in NRDB. In this case, let's
        look at some data coming in from an application. If you’re using New
        Relic APM, you will have an event type called <code>Transaction</code>.
      </p>

      <p>
        Every NRQL query must have a <code>SELECT</code> and <code>FROM</code>{' '}
        clause. You must <strong>SELECT</strong> some data and tell us{' '}
        <strong>FROM</strong> where.
      </p>

      <p>
        Start with this simple query that selects everything from the
        Transaction event type. (If you know SQL, NRQL should feel familiar to
        you.)
      </p>

      <SampleQuery
        nrql="**SELECT** \* **FROM** Transaction"
        chartType="table"
        span="12"
      />

      <p>
        This returns a lot of results with a timestamp and a collection of{' '}
        <em>attributes</em>. For now, we just want a single result so we will
        limit the results to a single record with <code>LIMIT 1</code>.
      </p>

      <SampleQuery
        nrql="SELECT \* FROM Transaction **LIMIT 1**"
        chartType="table"
        span="12"
      />
      <p>
        OK, so now we're controlling the volume of results we get. What if we
        don't want all the attributes, just specific data points? Fortunately,
        like SQL, it's extremely simple. We replace <code>*</code> with the name
        of some attributes of interest. In this case, we will ask for the name
        of a transaction and the duration of time it took to respond.
      </p>

      <p>
        Feel free to try the query in our Chart builder by clicking the link
        below the query.
      </p>

      <SampleQuery
        nrql="SELECT **name, duration** FROM Transaction "
        chartType="table"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        Fantastic start. You have written some basic queries to return some
        simple data, either returning all attributes of an event each time or
        narrowing to specific data you want to see. We also learned how to
        control the number of results we get. Great work!
      </p>
    </div>
  );
}
