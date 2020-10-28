import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import {Trans} from "react-i18next";

export default function UsingRegex() {
  return (
    <div>
      <p>
        <Trans i18nKey={"Contents.P1"}>
        You may occasionally want to filter data with more complex pattern
        matching than is provided by <code>LIKE</code>. With the{' '}
        <code>RLIKE</code> clause, we can filter with regular expression for
        more complicated matching.
        </Trans>
      </p>

      <p>
        <Trans i18nKey={"Contents.P2"}>
        In any scenario you could use <code>LIKE</code>, you now have the option
        to use <code>RLIKE</code>, and provide corresponding Regex in
        quotations. In this example, we list all host names ending in even
        numbers or consonants.{' '}
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT uniques(host) FROM Transaction WHERE host **RLIKE '^.\*\[02468bcdfghjklmnpqrstvwxyz]'**"
        chartType="table"
        span="6"
      />

      <p>
        <Trans i18nKey={"Contents.P3"}>
        You can also do simple matching. For instance, maybe you want to match a
        value that starts with a given letter or word.
        </Trans>
      </p>
      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE name **RLIKE 'W.\*|O.\*'** FACET name"
        span="6"
      />
      <p>
        <Trans i18nKey={"Contents.P4"}>
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
        </Trans>
      </p>

      <p>
        <strong>
          <Trans i18nKey={"Contents.P5"}>
          Know that <code>RLIKE</code> is inherently more complex and less
          performant than <code>LIKE</code>. Only use it when <code>LIKE</code>{' '}
          and other filtering functionality does not fit your needs.
          </Trans>
        </strong>
      </p>

      <h2><Trans i18nKey={"Contents.H1"}>Lesson Summary</Trans></h2>
      <p>
        <Trans i18nKey={"Contents.P6"}>
        Regular expression support allows for near-infinite pattern matching
        possibilities. If you are already a Regex guru, you know the power this
        adds to NRQL. But if you're not, don't worry! There are tons of Regex
        resources available to reference online.
        </Trans>
      </p>
    </div>
  );
}
