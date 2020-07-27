import Overview from './lessons/Overview';
import AggregateQuery2 from './lessons/AggregateQuery2';
import BasicMath from './lessons/BasicMath';
import CastingAs from './lessons/CastingAs';
import CompareWith from './lessons/CompareWith';
import TimeBasedCohorting from './lessons/TimeBasedCohorting';
import TimeRangesAdvanced from './lessons/TimeRangesAdvanced';
import Wildcards from './lessons/Wildcards';
import NextSteps from './lessons/NextSteps';

export default [
  {
    title: 'Introduction',
    component: Overview
  },
  {
    title: 'Aggregate functions',
    component: AggregateQuery2
  },
  {
    title: 'Math operators',
    component: BasicMath
  },
  {
    title: 'Labelling attributes',
    component: CastingAs
  },
  {
    title: 'Comparing time windows',
    component: CompareWith
  },
  {
    title: 'Wildcard filters',
    component: Wildcards
  },
  {
    title: 'Specify time ranges',
    component: TimeRangesAdvanced
  },
  {
    title: 'Time-based cohorting',
    component: TimeBasedCohorting
  },
  {
    title: 'Summary',
    component: NextSteps
  }
];
