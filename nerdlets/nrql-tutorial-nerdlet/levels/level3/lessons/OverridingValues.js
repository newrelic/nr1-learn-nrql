import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function OverridingValues() {
  return (
    <div>
      <h2>
        <Trans i18nKey="Contents.H1">Counting NULL Values</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P1">
          Sometimes data simply doesn't report in the format you need. For
          instance, sometimes integers are returned as strings, but you need
          them as integers to perform maths. Or maybe you get a NULL result, but
          in your case NULL actually means 0. Don't worry! We hear you, and
          we've added functionality to address this.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P2">
          NULL values on attributes can appear on both out-of-the-box and custom
          data. When you use aggregators such as <code>count()</code> and{' '}
          <code>average()</code>, NRQL automatically removes NULL values from
          the calculation, only performing the function on events without NULL
          values. NRQL lets you account for unexpected NULL values in
          calculations by using the "<code>OR value</code>" clause. For example,
          if you wanted to make sure NULL values for your "cartValue" attribute
          are counted as 0, you could use "cartValue OR 0" in your query.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P3">
          In this example, running <code>count()</code> on ApdexPerfZone only
          counts the number of times ApdexPerfZone has a value. But if we add "
          <code>OR 'Null'</code>" to the argument, we can count all transactions
          where ApdexPerfZone exists, and also those where the value is null.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(apdexPerfZone) as 'Events With Values', count(apdexPerfZone **OR 'Null'**) as 'Events With and Without Values' from Transaction SINCE 24 hours ago"
        fallbacknrql="SELECT count(duration) AS 'Events With Durations', count(http.url **OR 'Null'**) AS 'Events With and Without URL' FROM Public_APICall SINCE 1 day ago"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H2">Coercion</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          NRQL does not automatically apply coercion. This means a float stored
          as a string is treated as a string, and cannot be used by mathematical
          functions like <code>sum()</code> or <code>average()</code>. To
          override this behavior, use <code>boolean()</code> or{' '}
          <code>numeric()</code> to convert arguments to a boolean or numerical
          values. In this example, an <code>average()</code> function on
          "httpResponseCode" provides no value since this attribute is a string.
          But if we convert the attribute to a number using <code>numeric</code>
          (httpResponseCode), we can use the <code>average()</code> function
          successfully.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT average(**numeric(httpResponseCode)**) as 'Converted Attribute', average(httpResponseCode) as 'Non-converted Attribute'  FROM Transaction SINCE 24 hours ago"
        fallbacknrql="SELECT average(**numeric(duration)**) AS 'Ensuring stored value is treated as numeric', average(duration) AS 'Non-Converted Attribute' FROM Public_APICall SINCE 1 day ago"
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P5">
          Another common example is BOOLEAN (TRUE or FALSE) values. These are
          often incorrectly formatted as strings. When this happens, don't
          worry! You can change how the source sends the data to make it a
          proper boolean. Or, you can use the <code>boolean()</code> function.
          The example query below returns the same result, but that is because
          we're using a value sent by the agent as a BOOLEAN. If your attribute
          was a string "TRUE", <code>boolean()</code> would convert it into a
          proper boolean format, allowing the query to run as intended.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(**boolean(error)**), count(error)  FROM Transaction SINCE 24 hours ago"
        fallbacknrql="SELECT count(**boolean(sampleDataSet)**), count(sampleDataSet)  FROM Public_APICall SINCE 24 hours ago"
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P7">
          You can also convert boolean and numeric values to strings by using
          the <code>string()</code> function. Where numeric values are
          floating-point numbers you can use the optional <code>precision</code>{' '}
          argument to limit the number of decimal places for the string. This
          query returns the duration value as a string limited to three decimal
          places.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **string(duration, precision: 3)**  FROM Transaction SINCE 24 hours ago"
        fallbacknrql="SELECT **string(duration, precision: 3)** FROM Public_APICall SINCE 24 hours ago"
        chartType="table"
        span="12"
      />
      <h2>
        <Trans i18nKey="Contents.H3">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P6">
          Sometimes the devil is in the details. Here we've given you the power
          to control your data formats, and tell NRQL how you want it to act.
          NRQL operates in the manner we deem most logical, but if that does not
          suit your unique scenario, you can use the functions explored in this
          lesson to override values.
        </Trans>
      </p>
    </div>
  );
}
