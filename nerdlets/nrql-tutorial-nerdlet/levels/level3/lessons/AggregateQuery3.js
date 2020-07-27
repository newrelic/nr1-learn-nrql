import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AggregateQuery3() {
  return (
    <div>
      <p>
        More aggregation? Yes, we have a lot of aggregation ability in New Relic
        and each function serves a different but useful purpose. In this lesson,
        we are going to see how we can use Rate, Funnels, Filter, Histograms and
        Apdex to answer more advanced questions.
      </p>

      <h2>Calculating rate</h2>
      <p>
        Let's start with the <code>rate()</code> function that lets you
        visualize the frequency of events over time. It is helpful when you want
        to understand the frequency of events for small periods of time within
        larger time windows. In this example, we display the average frequency
        of requests per 5 minutes for the last hour and we compare this to the
        previous hour’s 5-minute average frequency. Notice that the query uses{' '}
        <code>since 1 hour ago</code>, this is the overall time window for which
        we are calculating the rate across.
      </p>

      <p>
        You can easily use <code>rate()</code> to calculate{' '}
        <em>requests per minute</em> or <em>requests per second</em> by setting
        the time interval to 1 minute or 1 second as required.
      </p>
      <SampleQuery
        nrql="SELECT **rate(count(*), 5 minutes)** from Transaction SINCE 1 hour ago COMPARE WITH 1 hour ago"
        span="6"
      />

      <h2>Funnel charts</h2>
      <p>
        A lot of New Relic customers like to use funnel charts to understand end
        user behavior. The funnel chart tracks the occurrence of an attribute
        value across multiple records and is commonly used to visualize how
        successfully users progress through a defined path. This is definitely
        at its most powerful when using custom attributes, but one great example
        of using funnels out of the box with New Relic is using our Browser
        data.
      </p>
      <p>
        Here we use the <code>funnel()</code> aggregator function to help build
        a picture of how many users visit the home page and then proceed to
        another page. The first parameter is the attribute which identifies the
        unique entries we want to count. In this case, New Relic Browser sets a{' '}
        <code>session</code> ID attribute (subject to cookies being enabled)
        that keeps the same session ID across the user's journey through your
        site. The session ID value is the same on every event for the user. You
        can, of course, set your own ID for a session using custom attributes.
      </p>
      <p>
        The rest of the parameters to this function define how each step of the
        funnel is calculated and are specified in the format "
        <code>, WHERE attr OP value</code>". In this case, we will provide two:
        we want to know how many sessions were on the homepage and how many then
        went to other pages on the site.{' '}
        <em>
          You might need to try this query on your own data to get a reasonable
          result.
        </em>
      </p>
      <SampleQuery
        nrql="SELECT **funnel(session, WHERE pageUrl LIKE 'http%//%.%.com/' AS 'Home', WHERE pageUrl NOT LIKE 'http%//%.%.com/' AS 'Any Other Page')** FROM PageView SINCE 1 week ago UNTIL now"
        chartType="funnel"
        span="6"
      />

      <h2>Aggregator filters</h2>
      <p>
        <code>filter()</code> is a powerful tool that lets you control which
        events are included in aggregator function results. It allows you to
        perform aggregation on multiple data points within a single query. In
        this example, we use <code>filter()</code> to return the separate values
        for total transactions, total web transactions and total non-web
        transactions.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'All Transactions', **filter(count(\*), where transactionType ='Web') as 'Web Transactions'**, filter(count(\*), where transactionType !='Web') as 'Non-Web Transactions' from Transaction since 24 hours ago"
        span="12"
      />

      <p>
        Since this function returns a numeric value, you can perform math on the
        result. For example, dividing the total web transactions by the count of
        all transactions provides the percentage of total transactions
      </p>
      <SampleQuery
        nrql="SELECT (filter(count(\*), where transactionType ='Web') **/ count(\*)) \* 100**  as 'Percent web' from Transaction since 24 hours ago"
        span="6"
      />

      <h2>Histograms</h2>
      <p>
        Histograms are a great way to visualize the distribution of your data.
        They help with understanding the grouping of your data by frequency and
        not just from averages. This function takes three arguments: the
        attribute you want to plot (such as "duration"), the maximum value of
        the range you want to consider (such as "1" for 1 second or less), and
        the number of buckets you want the data to be grouped in. In our
        example, we are creating a <code>histogram()</code> chart for all
        duration values between 0 and 1 second, grouped into 50ms buckets. We do
        this by specifying "20" for the number of buckets the chart should use.
        All the durations larger than 1 second are grouped together in the last
        bucket.
      </p>
      <SampleQuery
        nrql="SELECT **histogram(duration, 1, 20)** from Transaction since 24 hours ago"
        chartType="histogram"
        span="12"
      />

      <h2>Apdex</h2>
      <p>
        The <code>apdex()</code> function lets you calculate an Apdex score on
        any numerical value (such as duration). What makes this function useful
        is the power of NRQL - you can calculate Apdex for one or more specific
        transactions, account for custom attribute values, as well as provide
        your own Apdex-T value that doesn’t interfere with your application
        settings. In this example, we have provided the function with an
        attribute of "duration" and an Apdex-T value of 0.08.
      </p>
      <SampleQuery
        nrql="SELECT **apdex(duration, t: 0.08) as 'Apdex of Duration'** FROM Transaction SINCE 1 week ago"
        span="12"
      />

      <p>
        Notice that if we add the <code>TIMESERIES</code> operator to chart the
        data over time, then the visualization shows the apdex with the
        satisifed, tolerated and frustrated thresholds plotted too.
      </p>
      <SampleQuery
        nrql="SELECT apdex(duration, t: 0.08) as 'Apdex of Duration' FROM Transaction SINCE 1 week ago **TIMESERIES**"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        Now that was a lesson. We explored a whole new set of visualizations
        with <code>funnel()</code> and <code>histogram()</code>, and we also
        learned how <code>filter()</code> can help us be selective in a singular
        query when we want to be specific with our WHERE clause. We also learned
        about <code>rate()</code> that lets us answer the question of the rate
        of some attribute over X period. In our case, it was the 5 minute rate
        over an hour of data.
      </p>
      <p>
        These queries are once again stepping up your ability with NRQL. Apdex
        is an industry standard and is applicable in so many scenarios. Funnels
        help you track progress through a desired path on your services.
        Histograms help you see the clear distribution of the data and filters
        let you get super specific in returned values. Next, we will learn about{' '}
        <code>extrapolate</code>.
      </p>
    </div>
  );
}
