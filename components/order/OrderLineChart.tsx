'use client';

import { useMemo, useEffect, useRef, useState, use } from 'react';
import { Chart } from '@antv/g2';

interface Props {
  data: any;
}
export const OrderLineChart = ({ data = [] }: Props) => {
  const container = useRef(null);
  const chart = useRef<any>(null);

  function renderLineChart(container) {
    // 如上
    const chart = new Chart({
      container: container,
      autoFit: true,
    });

    chart
      .theme({
        type: 'classicDark',
      })
      .data([])
      .encode('x', 'label')
      .encode('y', 'value')
      .scale('y', {
        nice: true,
      })
      .scale('x', {
        nice: true,
      })
      .axis('x', {
        labelAutoRotate: false,
        title: null,
      })
      .axis('y', {
        title: null,
      });

    chart
      .interval()
      .encode('x', 'label')
      .encode('y', 'volume')
      .style('size', 30)
      .style('inset', 2)
      .style('maxWidth', 10)
      .axis('y', { position: 'right', line: false, tick: false, label: false })
      .tooltip((d) => {
        return {
          title: d.label,
          name: 'Valume',
          value: d.volume ? d.volume.toString() : '-',
        };
      });

    chart
      .line()
      .encode('shape', 'smooth')
      .style({
        stroke: '#F7931A',
      })
      .scale('y', { independent: true })
      .axis('y', {
        position: 'left',
      })
      .tooltip((d) => {
        return {
          title: d.label,
          name: 'Avg Price',
          value: d.realValue ? d.realValue.toString() : '-',
        };
      });

    chart.render();
    return chart;
  }

  function updateLineChart(chart) {
    if (!data.length) return;

    chart.data(data);

    // 重新渲染
    chart.render();
  }
  const types = [
    {
      label: '24h',
      value: '24h',
    },
    {
      label: '7d',
      value: '7d',
    },
    {
      label: '30d',
      value: '30d',
    },
  ];
  useEffect(() => {
    if (chart.current) {
      updateLineChart(chart.current);
    }
  }, [data]);
  useEffect(() => {
    if (!chart.current) {
      chart.current = renderLineChart(container.current);
    }
  }, []);
  return <div className="flex-1 max-w-full" ref={container}></div>;
};
