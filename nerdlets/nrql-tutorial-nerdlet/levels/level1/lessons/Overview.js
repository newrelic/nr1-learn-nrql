import React from 'react';

export default function Overview() {
  return (
    <div>
      <p>
        Welcome to the NRQL tutorial! This brief tutorial will get you familiar
        with NRQL in just a few minutes. Progress through the four levels to
        improve your skills.
      </p>
      <p>
        NRQL stands for <strong>New Relic Query Language</strong>. It gives you
        realtime access to petabytes of Metric, Event, Log and Trace data in
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
        data quickly and easily. For the sake of convenience, examples in this
        tutorial use APM transaction data, because most New Relic customers will
        have this type of data.
        <strong>
          If you have access to more than one account, please switch to an
          account using APM.
        </strong>
      </p>
      <p>
        You can try every query in this tutorial for yourself, on your own data,
        using the Chart Builder. This allows you to test what you learn against
        real live data reporting to your account. Just click the 'Try this
        query' link beneath any example query to have a go!
      </p>
    </div>
  );
}
