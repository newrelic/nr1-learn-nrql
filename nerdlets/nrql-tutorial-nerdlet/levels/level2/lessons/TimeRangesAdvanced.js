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
        using relative time ranges. You can specify a specific date and/or time
        as well. In our sample query, we specify the since date in{' '}
        <code>YYYY-MM-DD</code> format. This could be useful if you need to
        create SLA reports for a specified period of time.
      </p>
      <SampleQuery nrql={timedNRQL} span="12" />

      <p>
        You can include a specific time too with the format{' '}
        <code>YYYY-MM-DD HH:MM</code>. In this query, you can see the data being
        set at 6pm.
      </p>
      <SampleQuery nrql={timedNRQLTime} span="12" />

      <p>
        Sometimes, as an engineer, you might receive an event time in epoch
        (unixtime) and New Relic does not want to force you to translate that
        back to a date. Instead, we just accept epoch timestamps as an
        acceptable value in <code>SINCE</code> and <code>UNTIL</code>
      </p>
      <SampleQuery nrql={epochNRQL} span="12" />

      <p>
        When NRDB shows data over a period of time, it assumes that you want to
        see the data from the perspective of your timezone. But with dispersed
        teams at an international level, your "today" could be someone’s
        "tomorrow" or "yesterday" depending on their location.
      </p>

      <p>
        Use the <code>WITH TIMEZONE</code> clause to provide a specific timezone
        that the data should be displayed from. This affects the interpretation
        of the values in <code>SINCE</code> and <code>UNTIL</code> clauses. Take
        the example of these two charts: each query has a specified timezone
        using <code>WITH TIMEZONE</code> that are 8 hours apart. Notice that the
        pattern of data is the same offset 8 hours to align with their
        respective timezone.
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
        relative from now. That's super functional for dynamic dashboards and
        makes the dashboards constantly viewing the interesting data in the time
        windows you need to observe. With the lessons today, we have learned how
        to adjust the view depending where someone is in the world. Maybe a
        customer in East Coast America reports an issue and your engineering
        team is in West Coast America. They can build a dashboard and translate
        the view to map to the timezone as a customer would be citing. So if a
        customer advises an issue at 9am East Coast, we can ensure when we look
        at 9am we don't have to mentally translate.
      </p>
      <p>
        Epoch and standard date stamps make sense. You may have been hoping
        either of these existed and of course, you are right. So when you need
        to focus your data to specific dates of an incident for example, and you
        want to investigate the data without a moving time window being relative
        to the current time, this knowledge will help you obtain data in a
        static time window.
      </p>
    </div>
  );
}
