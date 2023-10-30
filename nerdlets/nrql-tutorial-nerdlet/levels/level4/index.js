import Overview from './lessons/Overview';
import AggregateQuery4 from './lessons/AggregateQuery4';
import UsingRegex from './lessons/UsingRegex';
import Subqueries from './lessons/Subqueries';
import NestedAggregation from './lessons/NestedAggregation';
import DiscoverEventsAndAttributes from './lessons/DiscoverEventsAndAttributes';
import AdvancedMath from './lessons/AdvancedMath';
import Capture from './lessons/Capture';
import Summary from './lessons/Summary';

export default [
  {
    title: 'Introduction',
    component: Overview
  },
  {
    title: 'Aggregation and bucketing',
    component: AggregateQuery4
  },
  {
    title: 'Advanced maths',
    component: AdvancedMath
  },
  {
    title: 'Discover events and attributes',
    component: DiscoverEventsAndAttributes
  },
  {
    title: 'Filter with regex',
    component: UsingRegex
  },
  {
    title: 'Nested aggregation',
    component: NestedAggregation
  },
  {
    title: 'Subqueries',
    component: Subqueries
  },
  {
    title: 'Capturing data',
    component: Capture
  },
  {
    title: 'Summary',
    component: Summary
  }
];
