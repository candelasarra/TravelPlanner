import React, { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { Typography } from '@material-ui/core';

const Graph = ({ graphTitle, width }) => {
  const timeData = [
    [new Date('March 01, 2019').getTime(), 55],
    [new Date('March 2, 2019').getTime(), 98],
    [new Date('March 15, 2019').getTime(), 109],
    [new Date('March 22, 2019').getTime(), 200],
    [new Date('March 29, 2019').getTime(), 350],
    [new Date('April 12, 2019').getTime(), 230],
    [new Date('April 19, 2019').getTime(), 455],
    [new Date('April 26, 2019').getTime(), 400],
    [new Date('May 2, 2019').getTime(), 413],
    [new Date('May 9, 2019').getTime(), 256],
    [new Date('May 16, 2019').getTime(), 200],
    [new Date('May 23, 2019').getTime(), 400],
    [new Date('May 30, 2019').getTime(), 420]
  ];
  const [state, setState] = useState({
    series: [
      {
        name: 'series1',
        data: timeData
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: [],
        labels: {
          show: true
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.3,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.3,
          colorStops: []
        }
      },
      colors: ['#042460']
    }
  });

  return (
    <div
      id="chart"
      style={{
        borderRadius: '4px',
        backgroundColor: 'white',
        border: '1px solid #E5E9F1',
        margin: '10px',
        minWidth: width < 960 ? 325 : 800
      }}
    >
      <Typography
        variant="h6"
        style={{ fontWeight: 'bold', textAlign: 'left', margin: '12px' }}
      >
        {graphTitle}
      </Typography>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height={325}
      />
    </div>
  );
};
export default Graph;
