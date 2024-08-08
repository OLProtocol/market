'use client';

import { useMemo, useEffect, useRef, useState } from 'react';
import { ButtonGroup, Button, RadioGroup, Radio } from '@nextui-org/react';
import { getAssetsAnalytics } from '@/api';
import { Chart } from '@antv/g2';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import useSWR from 'swr';

interface OrderAnalyzeProps {
  assets_name: string;
  assets_type: string;
}
export const OrderAnalyze = ({
  assets_name,
  assets_type,
}: OrderAnalyzeProps) => {
  const container = useRef(null);
  const chart = useRef<any>(null);
  const [type, setType] = useState('24h');
  const [valueType, setValueType] = useState('volume');
  const { network } = useReactWalletStore();
  const swrKey = useMemo(() => {
    return `getAssetsAnalytics-${assets_name}-${assets_type}-${network}`;
  }, [assets_name, network, assets_type]);

  const { data, isLoading, mutate } = useSWR(swrKey, () =>
    getAssetsAnalytics({
      assets_name,
      assets_type,
      hide_locked: true,
    }),
  );
  const dataSource = useMemo(() => {
    if (type === '24h') {
      return (
        data?.data?.items_24hours
          ?.filter((i) => !!i)
          ?.map((item) => ({
            label: `${item.date?.replace(/^\d{4}-/, '')} ${item.time}`,
            value: valueType === 'volume' ? item.volume : item.avg_price,
          })) || []
      );
    } else {
      console.log(data?.data?.items_30days);

      return (
        data?.data?.items_30days
          ?.filter((i) => !!i)
          ?.map((item) => ({
            label: item.date,
            value: valueType === 'volume' ? item.volume : item.avg_price,
          })) || []
      );
    }
  }, [data, type, valueType]);
  const scale = {
    price: {
      min: 0,
      max: 1.5,
    },
    year: {
      range: [0.05, 0.95],
    },
  };
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
      .data(dataSource)
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
    // .axis('y', { labelFormatter: (d) => d + '°C' });

    chart.line().encode('shape', 'smooth').style({
      stroke: '#F7931A',
    });

    chart.render();

    return chart;
  }

  function updateLineChart(chart) {
    if (!dataSource.length) return;

    chart.data(dataSource);

    // 重新渲染
    chart.render();
  }
  useEffect(() => {
    console.log(chart.current);

    if (chart.current) {
      updateLineChart(chart.current);
    }
  }, [dataSource]);
  useEffect(() => {
    if (!chart.current) {
      chart.current = renderLineChart(container.current);
    }
  }, []);
  return (
    <div className="p-2">
      <div className="flex justify-end items-center mb-4">
        <ButtonGroup>
          <Button
            color={type === '24h' ? 'primary' : 'default'}
            onClick={() => setType('24h')}
          >
            24h
          </Button>
          <Button
            color={type === '30d' ? 'primary' : 'default'}
            onClick={() => setType('30d')}
          >
            30d
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex justify-end items-center mb-2">
        <RadioGroup
          onValueChange={setValueType}
          orientation="horizontal"
          value={valueType}
        >
          <Radio value="volume">Volume</Radio>
          <Radio value="aavg_pricevg">Avg Price</Radio>
        </RadioGroup>
      </div>
      <div className="w-full max-w-full" ref={container}></div>
    </div>
  );
};
