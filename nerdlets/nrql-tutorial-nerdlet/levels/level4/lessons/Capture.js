import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Capture() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Sometimes you want to extract or display only a sub part of your column data. For instance you may want 
          to extract and display the product ID from a long URL that contains it rather than display the full URL. 
          There are two NRQL functions that can help with this: aparse() and capture(). aparse() is simple and 
          more efficient but capture() provides more complex regular expression support.
        </Trans>
      </p>
      <h2>
        <Trans i18nKey="Contents.H1">Capture with aparse()</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P2">
          The <code>aparse()</code> function allows you to extract values from a string using a simple syntax. You 
          provide the string you wish to extract from and a pattern controlling the extraction. The pattern supports 
          two wild cards:<br />
          <code>%</code>- Non capturing wild card<br />
          <code>*</code>- A capturing wild card
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">
          Lets take a look at an example. In the Public API data set Amazon API URL's are composed of three parts: 
          the service, the region and the domain. e.g. "dynamodb.us-east-1.amazonaws.com".  We can use <code>aparse()</code>
          to query data and group it by service. We use the pattern <code>'*.%'</code> which captures everything before the first 
          period and disregards the rest:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT COUNT(*) FROM Transaction WHERE request.headers.host LIKE '%.com' FACET aparse(request.headers.host,'\*.%') AS 'service'**"
        fallbacknrql="SELECT COUNT(*) FROM Public_APICall WHERE http.url LIKE '%amazonaws.com' **FACET aparse(http.url,'\*.%') AS 'service'**"
        span="12"
        chartType="table"
      />
      <p>
        <Trans i18nKey="Contents.P3">
          If we wanted to extract the region from the string instead then we need this pattern: <code>'%.*.%'</code> This discards 
          everthing matched before the first period, captures everything up to the next period, and disregards the rest:
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT COUNT(*) FROM Transaction WHERE request.headers.host LIKE '%.com' FACET aparse(request.headers.host,'%.\*.%') AS 'region'**"
        fallbacknrql="SELECT COUNT(*) FROM Public_APICall WHERE http.url LIKE '%amazonaws.com' **FACET aparse(http.url,'%.\*.%') AS 'region'**"
        span="12"
        chartType="table"
      />
      <p>
        <Trans i18nKey="Contents.P4">
          It is possible to extract more than one field using aparse() but you cant use them directly in the facet. This requires 
          variables which are covered in another section, but whilst we are here lets see how that would look. We need to adjust our 
          pattern so that it includes two capture groups: <code>'*.*.%'</code>. We set these to the variables 'service' and 'region' 
          then facet o nthem.
        
        </Trans>
      </p>
      <SampleQuery
        nrql="FROM Transaction **WITH aparse(request.headers.host,'\*.\*.%') AS (service,region)** SELECT COUNT(*) WHERE request.headers.host LIKE '%.com' **FACET service, region**"
        fallbacknrql="FROM Public_APICall **WITH aparse(http.url,'\*.\*.%') AS (service,region)** SELECT COUNT(*) WHERE http.url LIKE '%amazonaws.com' **FACET service, region**"
        span="12"
        chartType="table"
      />
      <h2>
        <Trans i18nKey="Contents.H2">Regex Capture</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          TBC
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(duration) FROM Transaction WHERE entity.guid **IN (SELECT uniques(entity.guid) FROM TransactionError)** FACET appName TIMESERIES"
        fallbacknrql="SELECT average(duration) FROM Public_APICall WHERE api **IN (SELECT uniques(api) FROM Public_APICall where duration > 2)** FACET api TIMESERIES"
        span="12"
        chartType="line"
      />

      
    </div>
  );
}
