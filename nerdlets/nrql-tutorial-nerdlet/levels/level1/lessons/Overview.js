import React from 'react';

export default function Overview() {
  return (
    <div>
      <p>
        Welcome to the NRQL tutorial! This brief tutorial should get you
        familiar with NRQL in just a few minutes. Progress through the levels to
        improve your skills.
      </p>
      <p>
        NRQL stands for <strong>New Relic Query Language</strong>. NRQL gives
        you realtime access to petabytes of Metric, Event, Log and Trace data in
        NRDB.
      </p>
      <p>
        NRDB is the database that powers New Relic's Telemetry Data Platform. It
        is the world's most powerful multi-tenant telemetry database.
      </p>

      <p>&nbsp;</p>

      <h2>About the data in these lessons</h2>
      <p>
        New Relic One's Telemetry Data Platform allows you to query many sets of
        data quickly and easily. For the sake of convenience, the examples and
        lessons have been formulated against APM transaction data as the
        broadest set of New Relic customers will have this data.
      </p>
      <p>
        If you have access to more than one account, please switch to an account
        where you may be using APM. You can try every query in our chart builder
        so you can test what you learn against other event data reporting to
        your account. Just click the 'Try this query' link beneath any example
        query to have a go.
      </p>
    </div>
  );
}
