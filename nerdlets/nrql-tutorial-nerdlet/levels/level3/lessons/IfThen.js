import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function IfThen() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Sometimes you may not want to display something different depending on the value. You can use <code>IF...THEN</code> in 
          your query to add logic. The <code>IF()</code> function takes a value then a true and a false condition.  
        </Trans>
      </p>

      <SampleQuery
        nrql="FROM Transaction SELECT COUNT(\*), **IF(COUNT(\*)> 1000000,'High traffic','Low traffic') AS 'Scale'** FACET request.headers.host"
        fallbacknrql="FROM Public_APICall SELECT COUNT(\*), **IF(COUNT(\*)> 1000000,'High traffic','Low traffic') AS 'Scale'** FACET api"
        chartType="table"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P2">
          You can enrich your dashboard by using emoji icons in order to make them more impactful. 
          For example here we show a red icon if the duration is above a threshold we choose. 
        </Trans>
      </p>
      <SampleQuery
        nrql="FROM Transaction SELECT average(duration), **IF(average(duration)> 1,'🔴','🟢') AS 'Flag'** FACET request.headers.host"
        fallbacknrql="FROM Public_APICall SELECT average(duration), **IF(average(duration)> 1,'🔴','🟢') AS 'Flag'** FACET api"
        chartType="table"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          It's possible to use the IF() function within the facet clause too. This lets you control how to group assets together for evaluation. 
          For example here we group the API's by Amazon and Google and group the rest together.
        </Trans>
      </p>
      <SampleQuery
        nrql="FROM Transaction SELECT COUNT(*) **FACET IF(api LIKE 'amazon%', 'Amazon', IF(api LIKE 'google%', 'Google','Everything else')) AS 'Service'**"
        fallbacknrql="FROM Public_APICall SELECT COUNT(*) **FACET IF(api LIKE 'amazon%', 'Amazon', IF(api LIKE 'google%', 'Google','Everything else')) AS 'Service'**"
        chartType="pie"
        span="12"
      />
      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          Using the <code>IF()</code> funciton can help simplify your data, build more flexible queries and make it easier to digest.
        </Trans>
      </p>
    </div>
  );
}
