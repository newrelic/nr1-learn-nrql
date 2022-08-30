import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Where() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          You'll often want your query to operate on a subset of NRDB data. For
          example, let's query for our backend application's average response
          time. This data includes an attribute called{' '}
          <code>transactionType</code>, which specifies whether the transaction
          we timed was a "Web", or "Non-Web" (such as a cron job or queued task)
          transaction.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          Let's filter our query to only return data for the "Web"
          transactionType:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction **WHERE transactionType='Web'** TIMESERIES"
        fallbacknrql="SELECT average(duration) FROM Public_APICall **WHERE awsAPI='dynamodb'** TIMESERIES"
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P3">
          You can also combine <code>AND</code> and <code>OR</code> to make more
          complex queries. Use parentheses "<code>(</code>" and "<code>)</code>"
          to control how these work together.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P4">
          This query shows the average response time of "Web" transactions that
          were both faster than 100ms, and had a response code of either 200 or
          302. Notice how we use parentheses to control the <code>OR</code>,
          which may behave differently than you'd expect.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction WHERE transactionType='Web' **AND** duration < 0.1 **AND (**httpResponseCode=200 **OR** httpResponseCode=302**)** TIMESERIES"
        fallbacknrql="SELECT average(duration) FROM Public_APICall WHERE awsAPI='dynamodb' **AND** duration > 0.02 **AND** **(** http.method = 'POST' **OR** http.method = 'HEAD' **)** TIMESERIES"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          So far, every query we've made has performed actions on all available
          data in the given time window. But filtering out undesired data is
          also important. The examples above are useful when we want to filter
          to a type of transaction, or when a response code is a specific value.
          Similarly, you could filter to a specific <code>appName</code>,
          Transaction <code>name</code> or even a custom attribute you've tagged
          on your data.
        </Trans>
      </p>
    </div>
  );
}
