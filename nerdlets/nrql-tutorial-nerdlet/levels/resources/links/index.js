import React from 'react';
import { Link } from 'nr1';
import { Trans } from 'react-i18next';

export default function Links() {
  return (
    <div className="ResourcesPage">
      <p>
        <Trans i18nKey="Contents.P1">
          Here is a list of useful resources to help you with improving your
          NRQL
        </Trans>
      </p>

      <h3>
        <Link to="https://docs.newrelic.com/attribute-dictionary">
          <Trans i18nKey="Contents.L1">Attribute dictionary</Trans>
        </Link>
      </h3>
      <p>
        <Trans i18nKey="Contents.P2">
          This attribute data dictionary lists and defines all the attributes
          attached to New Relic events and other data objects. It's a great
          resource for understanding what the attributes mean.
        </Trans>
      </p>

      <h3>
        <Link to="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language">
          <Trans i18nKey="Contents.L2">New Relic NRQL Documentation</Trans>
        </Link>
      </h3>
      <p>
        <Trans i18nKey="Contents.P3">
          The official documentation for NRQL from the New Relic docs site.
        </Trans>
      </p>

      <h3>
        <Link to="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials">
          <Trans i18nKey="Contents.L3">NRQL Tutorials</Trans>
        </Link>
      </h3>
      <p>
        <Trans i18nKey="Contents.P4">
          A selection of tutorials on some of the more advanced NRQL features.
        </Trans>
      </p>
    </div>
  );
}
