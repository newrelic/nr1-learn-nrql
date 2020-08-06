import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function UsingRegex() {
  return (
    <div>
      <p>
        You may occasionally want to filter data with more complex pattern
        matching than is provided by <code>LIKE</code>. With the{' '}
        <code>RLIKE</code> clause, we can filter with regular expression for
        more complicated matching.
      </p>

      <p>
        In any scenario you could use <code>LIKE</code>, you now have the option
        to use <code>RLIKE</code>, and provide corresponding Regex in
        quotations. In this example, we list all host names ending in even
        numbers or consonants.{' '}
      </p>
      <SampleQuery
        nrql="SELECT uniques(host) FROM Transaction WHERE host **RLIKE '^.\*\[02468bcdfghjklmnpqrstvwxyz]'**"
        chartType="table"
        span="6"
      />

      <p>
        You can also do simple matching. For instance, maybe you want to match a
        value that starts with a given letter or word.
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
        . If you need to escape characters, you may need to use double
        backslashing escape sequences. e.g. <code>\\*</code>
      </p>

      <p>
        <strong>
          Know that <code>RLIKE</code> is inherently more complex and less
          performant than <code>LIKE</code>. Only use it when <code>LIKE</code>{' '}
          and other filtering functionality does not fit your needs.
        </strong>
      </p>

      <h2>Lesson Summary</h2>
      <p>
        Regular expression support allows for near-infinite pattern matching
        possibilities. If you are already a Regex guru, you know the power this
        adds to NRQL. But if you're not, don't worry! There are tons of Regex
        resources available to reference online.
      </p>
    </div>
  );
}
