import React from 'react';

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
          Congratulations on completing Level 3: Advancing Your Dashboarding!
        </strong>
      </p>
      <p>
        We have explored the more specific elements of NRQL and learned how to
        do powerful things that might be something you need when in the trenches
        and diving into the nitty gritty of your data.
      </p>
      <p>We have shown you how to make use of:</p>
      <ul>
        <li>
          Further advanced aggregation functiions like <code>filter()</code>,{' '}
          <code>apdex()</code>, <code>rate()</code>
          <code>funnel()</code>, <code>histogram()</code>
        </li>
        <li>
          <code>EXTRAPOLATE</code> and what it means and does
        </li>
        <li>
          <code>FACET CASES()</code> and how we can use an attribute and group
          matching values
        </li>
        <li>
          Using <code>filter()</code> to combine Event Types{' '}
        </li>
        <li>Overriding values if necessary</li>
      </ul>
      <p>
        You're now a Level 3 NRQL Ninja! Believe it or not, there are more
        features and functions we want to showcase in the next section.
      </p>
    </div>
  );
}
