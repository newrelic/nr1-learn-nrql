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
        In this section we explored specific, powerful NRQL functionality. These
        skills will undoubtedly serve you next time you're in the trenches,
        diving into the nitty-gritty of your data.
      </p>
      <p>Specifically, we learned how to use:</p>
      <ul>
        <li>
          Advanced aggregation functions like <code>filter()</code>,{' '}
          <code>apdex()</code>, <code>rate()</code>
          <code>funnel()</code>, <code>histogram()</code>
        </li>
        <li>
          The <code>EXTRAPOLATE</code> clauses
        </li>
        <li>
          <code>FACET CASES()</code>, including how to use attribute and group
          matching values
        </li>
        <li>
          <code>filter()</code> to combine Event Types{' '}
        </li>
        <li>Overriding values, when necessary</li>
      </ul>
      <p>
        You're now a Level 3 NRQL expert! Believe it or not, there are even more
        features and functions we want to showcase in the next section.
      </p>
    </div>
  );
}
