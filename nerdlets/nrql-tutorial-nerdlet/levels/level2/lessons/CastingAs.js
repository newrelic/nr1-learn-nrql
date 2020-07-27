import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function CastingAs() {
  return (
    <div>
      <p>
        As you start performing some of the more complex NRQL functions on your
        data, you will start noticing that the name displayed for the attributes
        you queried might not be super helpful - especially for anyone reading
        the chart that doesn’t know NRQL! Let's see what one example might be
        like using what we just learned in basic math.
      </p>
      <SampleQuery
        nrql="SELECT average(duration-externalDuration) from Transaction"
        span="6"
      />

      <p>
        Use the <code>AS</code> clause after a function or attribute to give the
        result a more readable and meaningful name, making it easy to understand
        for you and your teams when viewing the chart to know exactly what it
        represents.{' '}
      </p>
      <SampleQuery
        nrql="SELECT average(duration-externalDuration) **AS 'Non-External Response Time'** from Transaction"
        span="6"
      />

      <h2>Lesson Summary</h2>
      <p>
        This lesson is aesthetic in nature but when you're building really
        detailed dashboards and need clarity, it's important to be able to put
        clear labels on your data and ensure anyone viewing a widget, billboard,
        line chart or table has no ambiguity.
      </p>
      <p>
        We will likely use this again in more advanced examples of grouping to
        show how you can use this in other scenarios to ensure clean result
        sets.
      </p>
    </div>
  );
}
