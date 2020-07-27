import React from 'react';

export default function Overview() {
  return (
    <div>
      <p>
        Welcome to Level 2. In the previous level, we have explored the
        fundamentals of building a basic query and taking some actions to
        manipulate the results to get back the data we wanted. We covered the
        basic structure required to query data, how to define the time window
        and how to select the attributes we wanted to observe. We also began
        looking at how to aggregate data into valuable information which can be
        displayed on a line graph and other visualizations.
      </p>

      <p>
        In this section, we are going to delve deeper into even more functions
        for exploring interesting aggregations on our data. We are going to
        investigate how to compare the returned data with a previous time
        period, group data into more specific time windows, be more specific
        with our SINCE and UNTIL functionality, and also learn how we can use
        wildcards in our filters. We will also learn how we can rename
        attributes to be more user-friendly.
      </p>

      <p>Let's get started!</p>
    </div>
  );
}
