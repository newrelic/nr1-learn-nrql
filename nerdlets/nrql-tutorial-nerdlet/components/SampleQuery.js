import React from 'react';
import PropTypes from 'prop-types';
import { LessonContextConsumer } from '../contexts/LessonContext';
import copy from 'copy-to-clipboard';
import { Trans } from 'react-i18next';

import {
  LineChart,
  BillboardChart,
  TableChart,
  PieChart,
  BarChart,
  Grid,
  GridItem,
  Button,
  navigation,
  FunnelChart,
  HistogramChart,
  JsonChart,
  Icon,
  Toast
} from 'nr1';

const ReactMarkdown = require('react-markdown');

export default class SampleQuery extends React.Component {
  static propTypes = {
    chartType: PropTypes.string,
    nrql: PropTypes.string,
    fallbacknrql: PropTypes.string,
    span: PropTypes.string,
    markdown: PropTypes.string
  };

  state = {
    showButton: true
  };

  getChart() {
    const { chartType, nrql } = this.props;
    if (chartType === 'line') {
      return LineChart;
    } else if (chartType === 'billboard') {
      return BillboardChart;
    } else if (chartType === 'table') {
      return TableChart;
    } else if (chartType === 'bar') {
      return BarChart;
    } else if (chartType === 'pie') {
      return PieChart;
    } else if (chartType === 'funnel') {
      return FunnelChart;
    } else if (chartType === 'json') {
      return JsonChart;
    } else if (chartType === 'jsonchart') {
      return JsonChart;
    } else if (chartType === 'histogram') {
      return HistogramChart;
    } else if (nrql.match(/timeseries/i)) {
      return LineChart;
    } else if (nrql.match(/facet/i)) {
      return TableChart;
    } else {
      return BillboardChart;
    }
  }

  render() {
    let { nrql, span, markdown, fallbacknrql } = this.props;
    let nrqlPlain = nrql
      .replace(/\*\*/g, '')
      .replace(/\\\*/g, '*')
      .replace(/\\_/g, '_')
      .replace(/\\\[/g, '[');

    let fallbacknrqlPlain = fallbacknrql ? fallbacknrql
      .replace(/\*\*/g, '')
      .replace(/\\\*/g, '*')
      .replace(/\\_/g, '_')
      .replace(/\\\[/g, '[') : "" ;

    if (markdown === 'no') {
      nrqlPlain = nrql;
    }
    const numSpan = Number(span);
    const { showButton } = this.state;

    const Chart = this.getChart();

    const renderChart = (nrqlPlain,accountId)=>{
      //deal with different props based on type :( 
      if (Chart.name == 'LineChart' || Chart.name == 'AreaChart'  || Chart.name == 'TableChart') {
        return  <Chart
        fullWidth
        query={nrqlPlain}
        accountIds={[accountId]}
    />
      } else {
        return  <Chart
        fullWidth
        query={nrqlPlain}
        accountId={accountId}
    />
      }
     
    }

    return (
      <LessonContextConsumer>
        {context => {
          let fallBackDescription;
          if(context.hasNoAPM) {
            nrql = fallbacknrql;
            nrqlPlain = fallbacknrqlPlain;
            fallBackDescription=<div className="fallBackNote">⚠️
                <Trans i18nKey="NRQL:Warn">
                  Using fallback NRQL query example, this may differ slightly
                  from the description. English
                </Trans>
              </div>
          }
          return (
            <Grid className="sample-query">
              <GridItem columnSpan={numSpan} style={{ height: '100%' }}>
                <div
                  onMouseEnter={() => this.setState({ showButton: true })}
                  // onMouseLeave={() => this.setState({showButton: false})}
                  style={{ height: '100%' }}
                >
                  <h3>NRQL</h3>
                  <div className="nrql">
                    {markdown === 'no' ? (
                      <p>{nrqlPlain}</p>
                    ) : (
                      <ReactMarkdown source={nrql} />
                    )}
                  </div>
                  {fallBackDescription}
                  <div className="try-button">
                    {showButton && (
                      <>
                        <Button
                          type="plain"
                          onClick={() =>
                            openChartBuilder({
                              query: nrqlPlain,
                              accountId: context.accountId
                            })
                          }
                        >
                          <Icon
                            type={Icon.TYPE.DATAVIZ__DATAVIZ__DASHBOARD__A_EDIT}
                            spacingType={[
                              Icon.SPACING_TYPE.NONE,
                              Icon.SPACING_TYPE.MEDIUM,
                              Icon.SPACING_TYPE.NONE,
                              Icon.SPACING_TYPE.NONE
                            ]}
                          />
                          Try this query
                        </Button>
                        <Button
                          type="plain"
                          onClick={() => {
                            copy(nrqlPlain);
                            Toast.showToast({
                              title: 'Query copied to clipboard',
                              type: Toast.TYPE.NORMAL
                            });
                          }}
                        >
                          <Icon
                            spacingType={[
                              Icon.SPACING_TYPE.NONE,
                              Icon.SPACING_TYPE.MEDIUM,
                              Icon.SPACING_TYPE.NONE,
                              Icon.SPACING_TYPE.NONE
                            ]}
                            type={Icon.TYPE.INTERFACE__OPERATIONS__COPY_TO}
                          />
                          Copy
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </GridItem>
              <GridItem columnSpan={numSpan}>
                <h3>Result</h3>
                <div className="chart">
                  {renderChart(nrqlPlain,context.accountId)}
                </div>
              </GridItem>
            </Grid>
          );
        }}
      </LessonContextConsumer>
    );
  }
}

function openChartBuilder({ query, accountId }) {
  const nerdlet = {
    id: 'data-exploration.query-builder',
    urlState: {
      initialActiveInterface: 'nrqlEditor',
      initialAccountId: accountId,
      initialNrqlValue: query,
      isViewingQuery: true
    }
  };
  navigation.openStackedNerdlet(nerdlet);
}
