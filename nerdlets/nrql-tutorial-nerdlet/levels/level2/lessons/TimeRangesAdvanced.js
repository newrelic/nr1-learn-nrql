import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

// Get the epoch time for 'now'
const epochUntil = Date.now();
// Get the epoch time for 2 days before 'now'
const epochSince = epochUntil - 2 * 24 * 60 * 60 * 1000;
const dateSinceStr = new Date(epochSince).toLocaleDateString('fr-CA', {
  // you can skip the first argument
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

export default function TimeRangesAdvanced() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          The <code>SINCE</code> and <code>UNTIL</code> clauses are not limited
          to relative time ranges. You can also provide a specific date and/or
          time. In the following sample query, we include a <code>SINCE</code>{' '}
          date in <code>YYYY-MM-DD</code> format. This is useful when creating
          SLA reports for a specified period of time.
        </Trans>
      </p>
      <SampleQuery
        nrql={`SELECT average(duration) FROM Transaction **SINCE '${dateSinceStr}'** TIMESERIES MAX`}
        fallbacknrql={`SELECT average(duration) FROM Public_APICall SINCE '${dateSinceStr}' TIMESERIES MAX`}
        span="12"
      />
      <p>
        <Trans i18nKey="Contents.P2">
          You can even include specific time with the format{' '}
          <code>YYYY-MM-DD HH:MM</code>. In this query, you can see the data is
          set at 6pm.
        </Trans>
      </p>

      <SampleQuery
        nrql={`SELECT average(duration) FROM Transaction **SINCE '${dateSinceStr} 18:00'** TIMESERIES MAX`}
        fallbacknrql={`SELECT average(duration) FROM Public_APICall SINCE '${dateSinceStr} 18:00' TIMESERIES MAX`}
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          Sometimes, as an engineer, you might receive an event time in epoch
          (unix) time. Conveniently, epoch timestamps are an acceptable value in{' '}
          <code>SINCE</code> and <code>UNTIL</code> clauses, so you don't have
          to translate these values into another date format.
        </Trans>
      </p>

      <SampleQuery
        nrql={`SELECT average(duration) FROM Transaction **SINCE ${epochSince} UNTIL ${epochUntil}** TIMESERIES MAX`}
        fallbacknrql={`SELECT average(duration) FROM Public_APICall SINCE ${epochSince} UNTIL ${epochUntil} TIMESERIES MAX`}
        span="12"
      />

      <p>
        <Trans i18nKey="Contents.P4">
          When NRDB shows data over a period of time, it assumes you want to see
          the data from the perspective of your timezone. But with dispersed
          international teams, your "today" could be someone else's "tomorrow"
          or "yesterday" depending on their location.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P5">
          You can use the <code>WITH TIMEZONE</code> clause to define a timezone
          to display data from. This affects the interpretation of values in{' '}
          <code>SINCE</code> and <code>UNTIL</code> clauses.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P6">
          Consider the two example charts below. Each query has a specified
          timezone using <code>WITH TIMEZONE</code>. The two are 8 hours apart.
          Notice the pattern of data is the same, but offset 8 hours to align
          with each respective timezone:
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction SINCE yesterday UNTIL today **WITH TIMEZONE 'America/Los_Angeles'** TIMESERIES"
        fallbacknrql="SELECT count(*) FROM Public_APICall SINCE yesterday UNTIL today WITH TIMEZONE 'America/Los_Angeles' TIMESERIES"
        span="12"
      />
      <SampleQuery
        nrql="SELECT count(\*) from Transaction since yesterday until today **WITH TIMEZONE 'Europe/London'** TIMESERIES"
        fallbacknrql="SELECT count(*) FROM Public_APICall SINCE yesterday until today WITH TIMEZONE 'Europe/London' TIMESERIES"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P7">
          Before this lesson, all our time control mechanisms were based on
          relative times from now. With the lessons today, we have learned how
          to adjust the view depending where someone is in the world. Maybe a
          customer in East Coast America reports an issue and your engineering
          team is in West Coast America. They can build a dashboard and
          translate the view to map to the timezone as a customer would be
          citing. So if a customer advises an issue at 9am East Coast, we can
          ensure when we look at 9am we don't have to mentally translate.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P8">
          Epoch and standard date stamps make sense. So when you need to focus
          your data to specific dates of an incident for example, and you want
          to investigate the data without a moving time window being relative to
          the current time, this knowledge will help you obtain data in a static
          time window.
        </Trans>
      </p>
    </div>
  );
}
