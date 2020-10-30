import React from 'react';
import SampleQuery from '../../../components/SampleQuery';
import { Trans } from 'react-i18next';

export default function Wildcards() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          We now know how to use a <code>WHERE</code> clause to filter the
          results in our query. Aside from using standard comparison operators,
          we can also use <code>LIKE</code> and <code>NOT LIKE</code> if we want
          to determine whether an attribute contains or does not contain a
          specified substring. In order to achieve this, we need to use the
          percent (<code>%</code>) symbol as a wildcard anywhere in the string.{' '}
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P2">
          In our sample query, we are getting the number of transactions with
          the term "Web" anywhere (beginning, middle or end) in the name.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE name **LIKE '%Web%'** FACET name SINCE 1 day ago"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P3">
          {' '}
          If we change our query to use <code>NOT LIKE</code> instead, then we
          will get the number of transactions that do not contain the word "Web"
          in its name.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE name **NOT LIKE '%Web%'** FACET name SINCE 1 day ago"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P4">
          We used the wild card <code>%</code> at the beginning and end, which
          means that we are checking the value of the attribute we chose if it
          contains "Web" anywhere in the text. Equally, you could use{' '}
          <code>%Web</code> OR <code>Web%</code> to match something that ends in
          "Web" or starts with "Web", respectively.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P5">
          You can also add the wildcard in between strings for a more refined
          search. This query will check for a transaction name that contains the
          word "Web" followed by any text, but then also contains the word
          "index" followed by any number of characters. So, the results will
          only be transactions with "Web" <em>and</em> "index" in the name.
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE name **LIKE '%Web%index%'** FACET name SINCE 1 day ago"
        span="6"
      />

      <p>
        <Trans i18nKey="Contents.P6">
          What if you need to be extremely specific and the names don't have a
          common string you can match using wildcards. The <code>IN</code> and{' '}
          <code>NOT IN</code> operators allow us to specify a set of values that
          we would like to check against an attribute. Instead of specifying
          multiple <code>WHERE</code> clauses with <code>AND</code> or{' '}
          <code>OR</code> operators, we can simplify our condition by listing
          the values in parentheses separated by commas.{' '}
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P7">
          In this sample query, we are counting the number of transactions whose
          subtype is either "SpringController" or "StrutsAction". If you change
          our query to use <code>NOT IN</code> instead, then we will get the
          number of transactions whose subtype is neither "SpringController" nor
          "StrutsAction".
        </Trans>
      </p>

      <SampleQuery
        nrql="SELECT count(\*) FROM Transaction WHERE transactionSubType **IN ('SpringController', 'StrutsAction')** SINCE 1 day ago"
        span="6"
      />

      <h2>
        <Trans i18nKey="Contents.H1">Lesson Summary</Trans>
      </h2>
      <p>
        <Trans i18nKey="Contents.P8">
          You can now control your data and manipulate it to do what you need,
          allowing you to construct powerful, meaningful dashboards and alerts.
        </Trans>
      </p>
    </div>
  );
}
