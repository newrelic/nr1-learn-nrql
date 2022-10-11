import Overview from './lessons/Overview';
import AggregateQuery3 from './lessons/AggregateQuery3';
import Extrapolate from './lessons/Extrapolate';
import FacetCases from './lessons/FacetCases';
import FilterToEventTypes from './lessons/FilterToEventTypes';
import OverridingValues from './lessons/OverridingValues';
import Concatenation from './lessons/Concatenation';
import NextSteps from './lessons/NextSteps';

export default [
  {
    title: 'Introduction',
    component: Overview
  },
  {
    title: 'Advanced aggregators',
    component: AggregateQuery3
  },
  {
    title: 'Using extrapolate',
    component: Extrapolate
  },
  {
    title: 'Facet cases',
    component: FacetCases
  },
  {
    title: 'Filter by event type',
    component: FilterToEventTypes
  },
  {
    title: 'Overriding values',
    component: OverridingValues
  },
  {
    title: 'String concatenation',
    component: Concatenation
  },
  {
    title: 'Summary',
    component: NextSteps
  }
];
