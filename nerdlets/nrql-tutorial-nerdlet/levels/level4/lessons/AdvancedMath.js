import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function AdvancedMath() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          NRQL also supports some nifty, more advanced mathetmatical functions
          for those who need to get nitty-gritty with their data. These
          functions can extrapolate values to power of X, find square roots,
          apply clamping to impose upper and lower bounds, or even just keep
          values postive on the Y axis.
        </Trans>
      </p>

      <h2>
        <Trans i18nKey="Contents.H1">Absolute and Integer Rounding</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P2">
          NRQL has many math functions that manipulate values in some way. In
          this example, we will demonstrate a few simultaneously.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">
          The <code>abs(n)</code> function returns the absolute value for n: for
          non-negative n values it returns n, and for negative n values it
          returns the positive number n. For example, <code>abs(2) = 2</code>,
          and <code>abs(-4) = 4</code>. Fortunately, duration is always
          positive, but we want to demonstrate how straightforward this can be.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P4">
          We can also round decimal numbers to integers using{' '}
          <code>floor()</code>, <code>ceil()</code>, and <code>round()</code>.{' '}
          <code>floor()</code> returns the closest full integer rounding down,
          and <code>ceil()</code> does the opposite by rounding up.{' '}
          <code>round()</code> is bi-directional and will round up <em>or</em>{' '}
          down to the closest full integer.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **abs(duration)**, **round(duration)**, **ceil(duration)**, **floor(duration)** FROM Transaction SINCE 1 day ago"
        fallbacknrql="SELECT abs(duration), round(duration), ceil(duration), floor(duration) from Public_APICall since 24 hours ago"
        chartType="table"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H2">Data Clamping</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P5">
          We can use clamping on an attribute to impose an upper or lower limit
          on its value. This is useful for things like ensuring extreme outliers
          don't skew the scale of a timeseries graph.{' '}
          <code>clamp_max(duration, 10)</code> returns the duration, unless it
          exceeds 10, in which case 10 is returned. Quite simply, anything
          greater than 10 is forced to equal 10.{' '}
          <code>clamp_min(duration,1)</code> does the inverse; if any duration
          is below 1, it is forced to equal 1.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT **clamp\_max(average(duration), 10) as clampMax**, **clamp\_min(average(duration), 1) as clampMin** FROM Transaction SINCE 1 day ago TIMESERIES"
        fallbacknrql="SELECT clamp_max(average(duration), 10) as clampMax, clamp_min(average(duration), 1) as clampMin from Public_APICall since 24 hours ago TIMESERIES"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H3">
          Powers, Roots, Exponential, and Logs
        </Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P6">
          Now we are onto the advanced maths some of us found challenging in
          school! As before, we can demonstrate all these functions in a single
          example query.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P7">
          The <code>pow()</code> function raises the first argument to the power
          of the second argument. In our example, we raise duration to the power
          of 2. If you need the square root of a value, the <code>sqrt()</code>{' '}
          function can quickly provide this. And the <code>exp()</code> function
          computes the natural exponential function of its argument.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P8">
          Finally, NRQL also offers logarithms catered to a number of similar
          functions:
        </Trans>
      </p>
      <ul>
        <Trans i18nKey="Contents.P9">
          <li>
            <code>ln(n)</code> computes the natural logarithm: the logarithm
            base e.
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
        </Trans>
      </ul>

      <SampleQuery
        nrql="SELECT **pow(duration, 2)**, **sqrt(duration)**, **exp(duration)**, **ln(duration)**, **log2(duration)** FROM Transaction SINCE 1 day ago"
        fallbacknrql="SELECT pow(duration, 2), sqrt(duration), exp(duration), ln(duration), log2(duration) from Public_APICall since 24 hours ago"
        chartType="table"
        span="12"
      />

      <h2>
        <Trans i18nKey="Contents.H4">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P10">
          In this lesson, we learned about smoothing event data.{' '}
          <code>round()</code>/<code>ceil()</code>/<code>floor()</code> let us
          round in whichever manner suits us. Clamping lets us put bounds on the
          data. And our advanced mathematic tools for logarithm, square root,
          power and exponential all offer further control to manipulate and plot
          data however we need.
        </Trans>
      </p>
    </div>
  );
}
