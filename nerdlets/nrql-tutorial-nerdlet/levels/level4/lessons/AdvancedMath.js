import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function AdvancedMath() {
  return (
    <div>
      <p>
        We have some nifty math functions available to you if you really want to
        massage your data and extrapolate values to power of X, find square
        roots, apply clamping to impose upper and lower bounds or just keep
        things postive on the Y axis.
      </p>

      <h2>Absolute and integer rounding</h2>
      <p>
        NRQL has a number of math functions that let you manipulate the value in
        some way. In this example, we will demonstrate a few all at once.
      </p>
      <p>
        The <code>abs(n)</code> function returns the absolute value for n: for
        non-negative n values it returns n, and for negative n it returns the
        positive number n. For example, <code>abs(2) = 2</code>, and{' '}
        <code>abs(-4) = 4</code>. Fortunately, duration is always positive but
        we want to ensure it’s obvious how easy to use this is.
      </p>
      <p>
        We can round decimal numbers to integers using <code>floor()</code>,{' '}
        <code>ceil()</code> and <code>round()</code>. <code>floor()</code> will
        return the closest full integer rounding down, with <code>ceil()</code>{' '}
        doing the opposite by rounding up. <code>round()</code> is
        bi-directional and will round up <em>or</em> down to the closest full
        integer.
      </p>
      <SampleQuery
        nrql="SELECT **abs(duration)**, **round(duration)**, **ceil(duration)**, **floor(duration)** FROM Transaction SINCE 1 day ago"
        chartType="table"
        span="12"
      />

      <h2>Data clamping</h2>
      <p>
        We can use clamping on an attribute when we want to impose an upper or
        lower limit on its value. This is useful, for example, for ensuring
        extreme outliers don't skew the scale of a timeseries graph.{' '}
        <code>clamp_max(duration, 10)</code> will return the duration, unless it
        exceeds 10, in which case 10 is returned. Quite simply, anything greater
        than 10 is forced to equal 10. <code>clamp_min(duration,1)</code> does
        the inverse. If any duration is below 1, it is forced to be 1.
      </p>
      <SampleQuery
        nrql="SELECT **clamp\_max(average(duration), 10)**, **clamp\_min(average(duration), 1)** FROM Transaction SINCE 1 day ago TIMESERIES"
        span="12"
      />

      <h2>Powers, roots, exponential and logs</h2>
      <p>
        Now we are onto the maths I struggled with at school! NRQL allows you to
        easily calculate these values for your data. As before, we can show all
        of these functions in a single example query.
      </p>
      <p>
        The <code>pow()</code> function raises the first argument to the power
        of the second argument. In our example, we have raised duration to the
        power of 2. If you need to know the square root of a value, then the{' '}
        <code>sqrt()</code> function is straight forward. The <code>exp()</code>{' '}
        function computes the natural exponential function of the argument.
      </p>
      <p>
        Finally, we have logarithms which are catered for with a number of
        similar functions:
      </p>
      <ul>
        <li>
          <code>ln(n)</code> computes the natural logarithm: the logarithm base
          e.
        </li>
        <li>
          <code>log2(n)</code> computes the logarithm base 2.
        </li>
        <li>
          <code>log10(n)</code> computes the logarithm base 10.
        </li>
        <li>
          <code>log(n, b)</code> allows logarithms to be computed with an
          arbitrary base b.
        </li>
      </ul>

      <SampleQuery
        nrql="SELECT **pow(duration, 2)**, **sqrt(duration)**, **exp(duration)**, **ln(duration)**, **log2(duration)** FROM Transaction SINCE 1 day ago"
        chartType="table"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        In this lesson, we learned a lot about smoothing the event data we're
        working with. <code>round()</code>/<code>ceil()</code>/
        <code>floor()</code> let us round in the way that suits us the most.
        Clamping lets us put bounds around the data. And then, our advanced
        mathematic tools for logarithm, square root, power and exponential all
        give us further control to manipulate our data to plot in the ways we
        need.
      </p>
    </div>
  );
}
