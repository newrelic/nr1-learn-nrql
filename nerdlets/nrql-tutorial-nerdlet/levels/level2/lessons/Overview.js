import React from 'react';

export default function Overview() {
  return (
    <div>
      <p>
        Welcome to Level 2. In the previous level, we explored the fundamentals
        of building queries and manipulating results to retrieve the data we
        want. We covered basic query structure, defining time windows, and how
        to select specific attributes to observe. We also began learning how to
        aggregate and display data on line graphs and other visualizations.
      </p>

      <p>
        In this section, we will delve deeper and explore even more functions
        for creating interesting aggregations. We will learn how to compare
        returned data with previous time periods, group data into more specific
        time windows, be more granular with <code>SINCE</code> and{' '}
        <code>UNTIL</code> functionality, and explore using wildcards in
        filters. We will even discuss how to rename attributes to be more
        user-friendly.
      </p>

      <p>Let's get started!</p>
    </div>
  );
}
