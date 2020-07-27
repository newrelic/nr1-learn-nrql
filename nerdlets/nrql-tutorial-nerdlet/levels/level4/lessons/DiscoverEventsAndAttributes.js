import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function DiscoverEventsAndAttributes() {
  return (
    <div>
      <p>
        Discovering Events and Attributes is the kind of utility you may want to
        use when you begin automation and need to use NRQL to answer questions
        about the available data before you query it.
      </p>

      <h2>Discovering event types</h2>
      <p>
        For example, what if you wanted to list all types of event reporting
        into New Relic so you can know when new events begin reporting in? The
        special <code>SHOW EVENT TYPES</code> syntax returns a list of all event
        types reporting for the specified period. This is one of the few
        exceptions in NRQL where <code>SELECT</code> and <code>FROM</code> are
        not required. You could use this to check for the existence of custom
        event data for example.
      </p>
      <SampleQuery
        nrql="**SHOW EVENT TYPES** SINCE 1 week ago"
        chartType="json"
        span="12"
      />

      <h2>Discovering attributes</h2>
      <p>
        You may need to know what attributes are available for a given event
        type. The <code>keyset()</code> function provides a list of all the
        attributes for the event type helpfully grouped by type. Note that the
        attributes returned are only those that have values within the time
        window you search. You can use this to explore your data or use it in
        automation to ensure customer data is reporting correctly for example.
      </p>
      <SampleQuery
        nrql="SELECT **keyset()** FROM Transaction SINCE 1 week ago"
        chartType="json"
        span="12"
      />
      <h2>Lesson Summary</h2>
      <p>
        Both these features help you do interesting discovery of changes in
        event types or attributes. More and more DevOps engineers are using
        these functionalities to wrap up jobs and automate them quickly and
        easily.
      </p>
    </div>
  );
}
