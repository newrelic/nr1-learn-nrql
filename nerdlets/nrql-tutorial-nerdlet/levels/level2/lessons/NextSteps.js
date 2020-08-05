import React from 'react';

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
          Congratulations on completing Level 2: Controlling Your Data!
        </strong>
      </p>
      <p>
        With the knowledge you've gained here, you can create dashboard
        visualizations, and control the aspects of your data you're most
        interested in. These techniques are also extremely useful in narrowing
        focus for more granular, specific alerts!
      </p>
      <p>So, what have we learned in this level? We learned how to:</p>
      <ul>
        <li>
          Query for unique values using <code>uniques(attributeName)</code>
        </li>
        <li>
          Determine how many unique values exist in an attribute using{' '}
          <code>uniqueCount(attributeName)</code>
        </li>
        <li>
          Retrieve the <code>earliest(attributeName)</code> and{' '}
          <code>latest(attributeName)</code> within a specific time window
        </li>
        <li>
          Calculate percentages based on a qualifer or other data point with{' '}
          <code>percentile()</code>
        </li>
        <li>
          Perform basic math using attributes and aggregation functions, or a
          combination of both
        </li>
        <li>Cast attribute names to something custom and more readable</li>
        <li>
          Search to include/exclude using Wildcards with <code>LIKE</code>/
          <code>NOT LIKE</code>, or limit results to those <code>IN</code> a
          list or <code>NOT IN</code> that list
        </li>
        <li>
          Query within more advanced time windows using dates, epoch, and{' '}
          <code>WITH TIMEZONE</code>
        </li>
        <li>Group data by interesting time windows</li>
      </ul>
      <p>
        You are now a Level 2 NRQL hero. You've learned great techniques to
        control your data and produce much more interesting visualizations. Get
        ready to advance to level three, where you'll learn more interesting
        NRQL skills including filters, facet cases, histogram, apdex, filtering
        to eventTypes, overriding values, and extrapolation.
      </p>
      <p>
        Revel in your newly attained knowledge. You are now equipped to build
        really powerful dashboards and alerts that could be critical to your
        organization.
      </p>
    </div>
  );
}
