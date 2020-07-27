import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function Facet() {
  return (
    <div>
      <p>
        Often, you'll want to determine the "Top N" values grouped by a specific
        attribute. In NRQL, you do this using <code>FACET</code>. For example,
        here are the slowest Transaction calls observed on average, grouped by
        Transaction name. We also might describe this as "faceted by name".
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 1 day ago"
        chartType="bar"
        span="6"
      />
      <p>
        By default, a faceted query will return the top 10 results, but you can
        customize that by providing a <code>LIMIT</code>. In this example, we
        will show the top 5 results but display on a line chart with{' '}
        <code>TIMESERIES</code>.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 5** TIMESERIES"
        span="6"
      />
      <p>
        Maybe you don't want to view this information as a line chart, perhaps
        you would like to see it as a list of the slowest 20 Transactions.
      </p>
      <p>
        By removing the <code>TIMESERIES</code>, we can render a bar chart or
        even a pie chart.
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 20**"
        chartType="bar"
        span="6"
      />
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **FACET name** SINCE 3 hours ago **LIMIT 20**"
        chartType="pie"
        span="6"
      />
      <p>
        This query compares the response times of Web Transactions broken down
        by individual applications reporting to New Relic:
      </p>
      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE transactionType='Web' **FACET appName** LIMIT 5 SINCE 6 hours ago TIMESERIES"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Grouping or "faceting" is important. It allows us to get dimensional
        with our data, and using the <code>FACET</code> keyword is the simple
        solution.
      </p>

      <p>
        While applying an aggregation function on our selected data (NRDB will
        tell you if you forget), we can use <code>FACET</code> to group by an
        attribute. That grouping can be on any attribute reporting to the event
        data. So just like the <code>WHERE</code> clause, once it's reporting we
        can use any attribute, default or custom, to power our groupings. We
        recommend tagging on custom data to your events to make the result set
        even more powerful to slice and dice.
      </p>
    </div>
  );
}
