import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function UsingRegex() {
  return (
    <div>
      <p>
        Customers often want to filter data with more complex pattern matching
        than that provided by <code>LIKE</code>. Using a regular expression as a
        filter helps with more complicated matching and the <code>RLIKE</code>{' '}
        operator lets us do just that.
      </p>

      <p>
        In any scenario where you may have used LIKE, you can now use RLIKE and
        within the quotations provide common regex to match the string of
        interest. In this example, we list all the host names that end in an
        even number or consonant.{' '}
      </p>
      <SampleQuery
        nrql="SELECT uniques(host) FROM Transaction WHERE host **RLIKE '^.\*\[02468bcdfghjklmnpqrstvwxyz]'**"
        chartType="table"
        span="6"
      />

      <p>
        You can also just do simple matching, maybe you want to match a value
        that starts with a letter or word.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE name **RLIKE 'W.\*|O.\*'** FACET name"
        span="6"
      />
      <p>
        The regular expression engine uses{' '}
        <a
          href="https://github.com/google/re2/wiki/Syntax"
          target="_blank"
          rel="noreferrer"
        >
          RE2 syntax
        </a>
        . If you need to escape characters, please be aware that you might
        require double backslashing escape sequences. e.g. <code>\\*</code>
      </p>

      <p>
        <strong>
          Please be aware that <code>RLIKE</code> is inherently more complex and
          less performant than <code>LIKE</code>. Only use it if{' '}
          <code>LIKE</code> or other filtering does not cater to your needs.
        </strong>
      </p>

      <h2>Lesson Summary</h2>
      <p>
        Regular expression support is definitely a super powerful addition to
        NRQL. If you are already a regex guru, then you already know the power
        this adds to the New Relic Query Language.
      </p>
    </div>
  );
}
