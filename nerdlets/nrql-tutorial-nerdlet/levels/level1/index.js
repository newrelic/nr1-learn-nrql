import FirstQuery from './lessons/FirstQuery';
import AggregateQuery from './lessons/AggregateQuery';
import TimeRange from './lessons/TimeRange';
import Timeseries from './lessons/Timeseries';
import Overview from './lessons/Overview';
import Where from './lessons/Where';
import Facet from './lessons/Facet';
import NextSteps from './lessons/NextSteps';

export default [
  {
    title: 'Welcome',
    component: Overview
  },
  {
    title: 'Your first query',
    component: FirstQuery
  },
  {
    title: 'Aggregating data',
    component: AggregateQuery
  },
  {
    title: 'Time ranges',
    component: TimeRange
  },
  {
    title: 'Time series queries',
    component: Timeseries
  },
  {
    title: 'Where clauses',
    component: Where
  },
  {
    title: 'Faceted queries',
    component: Facet
  },
  {
    title: 'Summary',
    component: NextSteps
  }
];
