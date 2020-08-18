import React from 'react';
import { Link } from 'nr1';

export default function Links() {
  return (
    <div className="ResourcesPage">
      <p>
        Here is a list of useful resources to help you with improving your NRQL
      </p>

      <h3>
        <Link to="https://docs.newrelic.com/attribute-dictionary">
          Attribute dictionary
        </Link>
      </h3>
      <p>
        This attribute data dictionary lists and defines all the attributes
        attached to New Relic events and other data objects. It's a great
        resource for understanding what the attributes mean.
      </p>

      <h3>
        <Link to="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language">
          New Relic NRQL Documentation
        </Link>
      </h3>
      <p>The official documentation for NRQL from the New Relic docs site.</p>

      <h3>
        <Link to="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials">
          NRQL Tutorials
        </Link>
      </h3>
      <p>
        A selection of tutorials on some of the more advanced NRQL features.
      </p>
    </div>
  );
}
