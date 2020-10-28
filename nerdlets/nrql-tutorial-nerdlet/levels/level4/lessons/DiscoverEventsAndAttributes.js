import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import {Trans} from "react-i18next";

export default function DiscoverEventsAndAttributes() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        Discovering Events and Attributes can help both answer questions about
        your available data before querying it, and assist with automation!
        Let's take a moment to explore this powerful utility.
        </Trans>
      </p>

      <h2><Trans i18nKey={"Contents.H1"}>Discovering Event Types</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P2"}>
        Let's say you want a list of all event types currently reporting to your
        New Relic account. The <code>SHOW EVENT TYPES</code> syntax returns a
        list of all reported event types in a given period. This is one of the
        rare exceptions where <code>SELECT</code> and <code>FROM</code> are not
        required in a NRQL query. You could use this functionality for things
        like confirming the existence of custom event data, for example.
        </Trans>
      </p>
      <SampleQuery
        nrql="**SHOW EVENT TYPES** SINCE 1 week ago"
        chartType="json"
        span="12"
      />

      <h2><Trans i18nKey={"Contents.H2"}>Discovering Attributes</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P3"}>
        You may need to know what attributes are available for a given event
        type. The <code>keyset()</code> function provides a list of all
        attributes for an event type, grouped by attribute type. Note that only
        attributes that contain values within the provided time window will be
        returned. You can use this to explore your data. You can also use it in
        automation, for things like ensuring customer data is reporting
        correctly.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **keyset()** FROM Transaction SINCE 1 week ago"
        chartType="json"
        span="12"
      />
      <h2><Trans i18nKey={"Contents.H3"}>Lesson Summary</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P4"}>
        These features help you discovery of changes in event types and/or
        attributes. More DevOps engineers use these functionalities to wrap up
        jobs, or even quickly automate them.
        </Trans>
      </p>
    </div>
  );
}
