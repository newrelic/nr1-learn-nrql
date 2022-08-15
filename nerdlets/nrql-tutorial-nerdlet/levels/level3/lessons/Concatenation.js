import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Concatenation() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          There may be some cases where you need to append and/or prepend text
          to the returned value of an attribute. This can be achieved using the{' '}
          <code>concat()</code> function.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P2">
          You can provide upto 20 arguments for the <code>concat()</code>{' '}
          function to concatenate into a string.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **concat('The duration of ', name, ' is ', duration, ' seconds')** FROM Transaction"
        fallbacknrql="SELECT **concat('The duration of ', http.url, ' is ', duration, ' seconds')** FROM Public_APICall"
        chartType="table"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          We can limit the number of decimal places that are used for any
          floating point numbers in the values of the concatenated attributes.
          To do this we use the optional <code>precision:</code> argument as the
          last value. In this example we are appending 's' to denote seconds,
          and limiting the value to 3 decimal places.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT name, concat(duration, 's', **precision: 3**) FROM Transaction"
        fallbacknrql="SELECT http.url, concat(duration, 's', **precision: 3**) FROM Public_APICall"
        chartType="table"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P4">
          Values that start with 'http(s)' are automatically displayed as links
          which can be clicked to open a new page, which means it is possible to
          create integrations to solutions where a dynamic URL can be used to
          open a related page to the entity. The following example demonstrates
          an example URL where the query parameter values are set by the
          attribute values.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT name, concat(**'https://www.example.com/?appId=', appId, '&amp;error=', error**) AS 'URL' FROM Transaction"
        fallbacknrql="SELECT http.url, concat(**'https://www.example.com/?appId=', api, '&amp;error=', error**) AS 'URL' FROM Public_APICall"
        chartType="table"
        span="12"
      />
      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          You can use the <code>concat()</code> function to combine values
          together (e.g. city and country for location), and prepend/append
          additional strings to present the data as you need.
        </Trans>
      </p>
    </div>
  );
}
