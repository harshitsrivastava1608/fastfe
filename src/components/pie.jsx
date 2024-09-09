import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie(props) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: props.a, label: 'series A' },
            { id: 1, value: props.b, label: 'series B' },
            { id: 2, value: props.c, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
