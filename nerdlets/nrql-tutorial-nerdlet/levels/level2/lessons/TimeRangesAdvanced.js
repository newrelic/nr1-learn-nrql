import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

const epochSince = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
const sevendaysago = epochSince.toLocaleDateString('fr-CA', {
  // you can skip the first argument
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});
const timedNRQL = `SELECT average(duration) FROM Transaction **SINCE '${sevendaysago}'** TIMESERIES MAX`;
const timedNRQLTime = `SELECT average(duration) FROM Transaction **SINCE '${sevendaysago} 18:00'** TIMESERIES MAX`;
const epochUntil = new Date();
const epochNRQL = `SELECT average(duration) FROM Transaction **SINCE ${epochSince.getTime()} UNTIL ${epochUntil.getTime()}** TIMESERIES MAX`;

export default function TimeRangesAdvanced() {
  return (
    <div>
      <p>
        The <code>SINCE</code> and <code>UNTIL</code> clauses are not limited to
        relative time ranges. You can also provide a specific date and/or time.
        In the following sample query, we include a <code>SINCE</code> date in{' '}
        <code>YYYY-MM-DD</code> format. This is useful when creating SLA reports
        for a specified period of time.
      </p>
      <SampleQuery nrql={timedNRQL} span="12" />

      <p>
        You can even include specific time with the format{' '}
        <code>YYYY-MM-DD HH:MM</code>. In this query, you can see the data is
        set at 6pm.
      </p>
      <SampleQuery nrql={timedNRQLTime} span="12" />

      <p>
        Sometimes, as an engineer, you might receive an event time in epoch
        (unixtime). Conveniently, epoch timestamps are an acceptable value in{' '}
        <code>SINCE</code> and <code>UNTIL</code> clauses, so you don't have to
        translate these values into another date format.
      </p>
      <SampleQuery nrql={epochNRQL} span="12" />

      <p>
        When NRDB shows data over a period of time, it assumes you want to see
        the data from the perspective of your timezone. But with dispersed
        international teams, your "today" could be someone else's "tomorrow" or
        "yesterday" depending on their location.
      </p>

      <p>
        You can use the <code>WITH TIMEZONE</code> clause to define a timezone
        to display data from. This affects the interpretation of values in{' '}
        <code>SINCE</code> and <code>UNTIL</code> clauses.
      </p>
      <p>
        Consider the two example charts below. Each query has a specified
        timezone using <code>WITH TIMEZONE</code>. The two are 8 hours apart.
        Notice the pattern of data is the same, but offset 8 hours to align with
        each respective timezone:
      </p>
      <SampleQuery
        nrql="SELECT count(\*) from Transaction since yesterday until today **WITH TIMEZONE 'America/Los_Angeles'** TIMESERIES"
        span="12"
      />
      <SampleQuery
        nrql="SELECT count(\*) from Transaction since yesterday until today **WITH TIMEZONE 'Europe/London'** TIMESERIES"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        Before this lesson, all our time control mechanisms were based on
        relative times from now. With the lessons today, we have learned how to
        adjust the view depending where someone is in the world. Maybe a
        customer in East Coast America reports an issue and your engineering
        team is in West Coast America. They can build a dashboard and translate
        the view to map to the timezone as a customer would be citing. So if a
        customer advises an issue at 9am East Coast, we can ensure when we look
        at 9am we don't have to mentally translate.
      </p>
      <p>
        Epoch and standard date stamps make sense. So when you need to focus
        your data to specific dates of an incident for example, and you want to
        investigate the data without a moving time window being relative to the
        current time, this knowledge will help you obtain data in a static time
        window.
      </p>
    </div>
  );
}
