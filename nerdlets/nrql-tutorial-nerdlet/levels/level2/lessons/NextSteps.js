import React from 'react';

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
          Congratulations on completing Level 2: Controlling Your Data
        </strong>
      </p>
      <p>
        With the knowledge we added on top of Level 1, now you can create
        dashboard visualizations and control the aspects of your data you're
        most interested in. A lot of these techniques are also extremely useful
        in narrowing your focus on your data for more granular and specific
        alerts too!
      </p>
      <p>So what have we learned in this level?</p>
      <ul>
        <li>
          Show me unique values using <code>uniques(attributeName)</code>
        </li>
        <li>
          Show me how many unique values exist in an attribute using{' '}
          <code>uniqueCount(attributeName)</code>
        </li>
        <li>
          Show me the <code>earliest(attributeName)</code> and{' '}
          <code>latest(attributeName)</code> within the time window I'm
          searching
        </li>
        <li>
          Show percentages based on a qualifer or use a common interesting data
          point for <code>percentile()</code>
        </li>
        <li>
          Perform basic math using attributes and aggregation functions or a
          combination of both.
        </li>
        <li>
          Cast the name shown for an attribute to something custom and more
          digestible.
        </li>
        <li>
          Search to include/exclude using Wildcards with <code>LIKE</code>/
          <code>NOT LIKE</code> or limit results to <code>IN</code> a list or{' '}
          <code>NOT IN</code> that list
        </li>
        <li>
          Being more advanced with time windows using dates, epoch and{' '}
          <code>WITH TIMEZONE</code>
        </li>
        <li>Group data by interesting time windows.</li>
      </ul>
      <p>
        You are now a Level 2 NRQL Ninja. You've learned great techniques to
        control your data and produce much more interesting visualizations. As
        we move into Level 3, we have some really interesting things to teach
        you including filters, facet cases, histogram, apdex, filtering to
        eventTypes, overriding values and extrapolation.
      </p>
      <p>
        For now, revel in your newly attained knowledge. You are now equipped to
        build really powerful dashboards and alerts that could be critical to
        your organization.
      </p>
    </div>
  );
}
