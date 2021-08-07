import React from 'react';
import { Trans } from 'react-i18next';

export default function Overview() {
  return (
    <div>
      <p>
        <Trans i18nKey="Contents.P1">
          Welcome to Level 2. In the previous level, we explored the
          fundamentals of building queries and manipulating results to retrieve
          the data we want. We covered basic query structure, defining time
          windows, and how to select specific attributes to observe. We also
          began learning how to aggregate and display data on line graphs and
          other visualizations.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          In this section, we will delve deeper and explore even more functions
          for creating interesting aggregations. We will learn how to compare
          returned data with previous time periods, group data into more
          specific time windows, be more granular with <code>SINCE</code> and{' '}
          <code>UNTIL</code> functionality, and explore using wildcards in
          filters. We will even discuss how to rename attributes to be more
          user-friendly.
        </Trans>
      </p>

      <p>
        <Trans i18nKey="Contents.P3">Again if you have chosen an account without Transaction event reporting, we will fallback to other queries that are similar. Let's get started!</Trans>
      </p>
    </div>
  );
}
