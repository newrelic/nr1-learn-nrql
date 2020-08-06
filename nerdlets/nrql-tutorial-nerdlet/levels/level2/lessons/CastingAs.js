import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function CastingAs() {
  return (
    <div>
      <p>
        As you start performing more complex NRQL functions, you will notice
        that the name displayed for queried attributes might not be helpful -
        especially for others that don't know NRQL! Let's consider an example
        using what we learned in basic math.
      </p>
      <SampleQuery
        nrql="SELECT average(duration-externalDuration) from Transaction"
        span="6"
      />

      <p>
        We can use the <code>AS</code> clause after a function or attribute to
        give the result a more readable, meaningful name. This makes it easier
        for you and your team(s) to understand exactly what a chart represents.{' '}
      </p>
      <SampleQuery
        nrql="SELECT average(duration-externalDuration) **AS 'Non-External Response Time'** from Transaction"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        This may seem purely aesthetic, but when you're building detailed
        dashboards, it's important to clearly label your data. This ensures zero
        ambiguity for anyone viewing your widgets, billboards, line charts or
        tables.
      </p>
      <p>
        We'll refer back to this in upcoming examples about grouping, to explore
        how <code>AS</code> can create clean result sets in more advanced
        scenarios too.
      </p>
    </div>
  );
}
