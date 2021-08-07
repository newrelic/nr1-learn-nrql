import React from 'react';
import { Trans } from 'react-i18next';

export default function Overview() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Welcome to the NRQL tutorial! This brief tutorial will get you
          familiar with NRQL right here in your New Relic account. Already an
          NRQL veteran? Consider this an opportunity to review important
          concepts, and pick up a few new tips and tricks. Progress through the
          four levels to improve your skills.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          NRQL stands for <strong>New Relic Query Language</strong>. It gives
          you realtime access to petabytes of Metric, Event, Log, and Trace data
          in NRDB.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">
          NRDB is the database that powers New Relic's Telemetry Data Platform.
          It is the world's most powerful multi-tenant telemetry database.
        </Trans>
      </p>

      <p>&nbsp;</p>

      <h2>
        <Trans i18nKey="Contents.H1">About the data in these lessons</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P4">
          New Relic One's Telemetry Data Platform allows you to query many sets
          of data quickly and easily. For the sake of convenience, examples in
          this tutorial use APM transaction data, because most New Relic
          customers will have this type of data.
          <strong>
            If you have access to more than one account, please switch to an
            account using APM. If none of your accounts have APM data. We will use fallback queries. 
            This may mean the lesson references Transaction table. However the query may use another 
            NR event to showcase a similar query.
          </strong>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P5">
          You can try every query in this tutorial for yourself, on your own
          data, using the Chart Builder. This allows you to test what you learn
          against real live data reporting to your account. Just click the 'Try
          this query' link beneath any example query to have a go!
        </Trans>
      </p>
    </div>
  );
}
