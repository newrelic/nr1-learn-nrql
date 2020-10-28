import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import {Trans} from "react-i18next";

export default function AggregateQuery3() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        New Relic offers many different aggregation abilities. Each function
        serves a different, useful purpose. In this lesson, we will explore how
        to use Rate, Funnels, Filter, Histograms, and Apdex aggregation to
        answer more advanced questions.
        </Trans>
      </p>

      <h2><Trans i18nKey={"Contents.H2_1"}>Calculating Rate</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        Let's start with the <code>rate()</code> function. It allows you to
        visualize the frequency of events over time. This is helpful when you
        want to understand the frequency of events in small periods of time
        within larger time windows.{' '}
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P3"}>
        {' '}
        In the example below, we display the average frequency of requests per 5
        minutes for the last hour. We compare this to the previous hour’s
        5-minute average frequency. Notice the query uses{' '}
        <code>SINCE 1 hour ago</code>, this is the overall time window in which
        we are calculating the rate.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P4"}>
        You can use <code>rate()</code> to calculate{' '}
        <em>requests per minute</em> or <em>requests per second</em> by setting
        the time interval to either 1 minute or 1 second.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **rate(count(*), 5 minutes)** from Transaction SINCE 1 hour ago COMPARE WITH 1 hour ago"
        span="6"
      />

      <h2><Trans i18nKey={"Contents.H2_2"}>Funnel Charts</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P5"}>
        Many New Relic customers use funnel charts to understand end-user
        behavior. Funnel charts track the occurrence of an attribute value
        across multiple records. They are commonly used to visualize how
        successfully users' progress through defined paths, and are especially
        powerful when using custom attributes.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P6"}>
        Here we use the <code>funnel()</code> aggregator function to visualize
        how many users visit the home page, then proceed to another page. The
        first parameter is the identifying attribute for the unique entries
        we're counting. In this case, New Relic Browser assigns and retains a{' '}
        <code>session</code> ID attribute for each user on your site (subject to
        cookies being enabled). You can also set your own session ID using
        custom attributes.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P7"}>
        The remaining parameters determine how each step of the funnel is
        calculated. They are written in the format "
        <code>, WHERE attr OP value</code>". In this case, we provide two: we
        want to know how many user sessions visited the homepage, then also how
        many of these also navigated to other pages.{' '}
        <em>Try this query on your own data to get a reasonable result.</em>
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **funnel(session, WHERE pageUrl LIKE 'http%//%.%.com/' AS 'Home', WHERE pageUrl NOT LIKE 'http%//%.%.com/' AS 'Any Other Page')** FROM PageView SINCE 1 week ago UNTIL now"
        chartType="funnel"
        span="6"
      />

      <h2><Trans i18nKey={"Contents.H2_3"}>Aggregator Filters</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P8"}>
        <code>filter()</code> is a powerful tool that allows you to aggregate
        multiple data points in a single query, offering more control over which
        events are included in function results. In this example, we use{' '}
        <code>filter()</code> to return the separate values for total
        transactions, total web transactions, and total non-web transactions:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'All Transactions', **filter(count(\*), where transactionType ='Web') as 'Web Transactions'**, filter(count(\*), where transactionType !='Web') as 'Non-Web Transactions' from Transaction since 24 hours ago"
        span="12"
      />

      <p>
        <Trans i18nKey={"Contents.P9"}>
        Since it returns a number, you can also perform math on its results. For
        example, we can divide total web transactions by all transactions to
        determine what percent of transaction were web transactions:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT (filter(count(\*), where transactionType ='Web') **/ count(\*)) \* 100**  as 'Percent web' from Transaction since 24 hours ago"
        span="6"
      />

      <h2><Trans i18nKey={"Contents.H2_4"}>Histograms</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P10"}>
        Histograms allow you to better visualize the distribution of your data.
        This assists in understanding how data points are grouped by frequency,
        not just averages. The <code>histogram()</code> function takes three
        arguments:
        <ol type="1">
          <li>the attribute you want to plot (such as duration)</li>
          <li>
            the maximum value of the range you want to consider (such as "1" for
            1 second or less)
          </li>
          <li>the number of buckets you want data grouped in</li>
        </ol>
        In our example, we create a <code>histogram()</code> chart for all
        duration values between 0 and 1 second, grouped into 50ms buckets. We do
        this by specifying "20" for the number of buckets. All the durations
        larger than 1 second are grouped together in the last bucket.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT **histogram(duration, 1, 20)** from Transaction since 24 hours ago"
        chartType="histogram"
        span="12"
      />

      <h2><Trans i18nKey={"Contents.H2_5"}>Apdex</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P11"}>
        The <code>apdex()</code> function calculates an Apdex score on any
        numerical value (such as duration). You can calculate Apdex for one or
        more specific transactions, account for custom attribute values, and
        even provide your own Apdex-T value without interfering with application
        settings. In this example, we have provided the function with an
        attribute of "duration" and an Apdex-T value of 0.08:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **apdex(duration, t: 0.08) as 'Apdex of Duration'** FROM Transaction SINCE 1 week ago"
        span="12"
      />

      <p>
        <Trans i18nKey={"Contents.P12"}>
        We can also add the <code>TIMESERIES</code> operator to chart the data
        over time. Notice this also plots the Apdex satisifed, tolerated, and
        frustrated thresholds.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT apdex(duration, t: 0.08) as 'Apdex of Duration' FROM Transaction SINCE 1 week ago **TIMESERIES**"
        span="6"
      />

      <h2><Trans i18nKey={"Contents.H2_6"}>Lesson Summary</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P13"}>
        We just explored a whole new set of visualizations with{' '}
        <code>funnel()</code> and <code>histogram()</code>. We also learned how{' '}
        <code>filter()</code> can help us get more specific in queries with
        WHERE clauses, and how
        <code>rate()</code> can displays the rate of attribute over time.
        </Trans>
      </p>
      <p>
        <Trans i18nKey={"Contents.P14"}>
        These queries further advance your NRQL ability. Apdex is an industry
        standard and is applicable many scenarios. Funnels can track progress
        through desired paths. Histograms visualize the clear distribution of
        the data; and filters let you get super specific with your returned
        values. Next, we will learn about <code>extrapolate</code>.
        </Trans>
      </p>
    </div>
  );
}
