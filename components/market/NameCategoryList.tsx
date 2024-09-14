'use client';

import useSWR from 'swr';
import { Select, SelectItem, Tabs, Tab } from '@nextui-org/react';
import { getNameCategoryList } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CategorySelect } from './CategorySelect';
interface NameCategoryListProps {
  onChange?: (ticker?: string) => void;
  name: string;
}
export const NameCategoryList = ({ onChange, name }: NameCategoryListProps) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore((state) => state);
  const [nameSelected, setNameSelected] = useState<string | undefined>();
  const [letterSelected, setLetterSelected] = useState<string | undefined>();
  const [chineseSelected, setChineseSelected] = useState<string | undefined>();
  const [ohterSelected, setOhterSelected] = useState<string | undefined>();

  const swrKey = useMemo(() => {
    return `/ordx/getNameCategoryList-${name}-${network}`;
  }, [name, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getNameCategoryList({ name }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const list = useMemo(() => data?.data || [], [data]);
  const numberList = useMemo(
    () =>
      [
        {
          label: t('name.category.number.1_digit'),
          value: '1D',
        },
        {
          label: t('name.category.number.2_digit'),
          value: '2D',
        },
        {
          label: t('name.category.number.3_digit'),
          value: '3D',
        },
        {
          label: t('name.category.number.4_digit'),
          value: '4D',
        },
        {
          label: t('name.category.number.5_digit'),
          value: '5D',
        },
        {
          label: t('name.category.number.6_digit'),
          value: '6D',
        },
        {
          label: t('name.category.number.7_digit'),
          value: '7D',
        },
        {
          label: t('name.category.number.8_digit'),
          value: '8D',
        },
      ].map((item) => ({
        ...item,
        count: list.find((i) => i.category === item.value)?.count,
      })),
    [list],
  );
  const letterList = useMemo(
    () =>
      [
        {
          label: t('name.category.letter.1_letter'),
          value: '1L',
        },
        {
          label: t('name.category.letter.2_letters'),
          value: '2L',
        },
        {
          label: t('name.category.letter.3_letters'),
          value: '3L',
        },
        {
          label: t('name.category.letter.4_letters'),
          value: '4L',
        },
        {
          label: t('name.category.letter.cvcv'),
          value: 'cvcv',
        },
        {
          label: t('name.category.letter.same_letters'),
          value: 'same',
        },
      ].map((item) => ({
        ...item,
        count: list.find((i) => i.category === item.value)?.count,
      })),
    [list],
  );
  const otherList = useMemo(
    () =>
      [
        {
          label: t('name.category.other.symmetric_digit'),
          value: 'SDate',
        },
        {
          label: t('name.category.other.consecutive_luck_digit'),
          value: 'consecutive',
        },
        {
          label: t('name.category.other.full_date'),
          value: 'FDate',
        },
        {
          label: t('name.category.other.did'),
          value: '10D',
        },
        {
          label: t('name.category.other.c_mobile_number'),
          value: 'cmn',
        },
        {
          label: t('name.category.other.unclassified_digit_names'),
          value: 'undefined',
        },
      ].map((item) => ({
        ...item,
        count: list.find((i) => i.category === item.value)?.count,
      })),
    [list],
  );
  const chineseList = useMemo(
    () =>
      [
        {
          label: t('name.category.chinese.1_han'),
          value: '1Han',
        },
        {
          label: t('name.category.chinese.2_han'),
          value: '2Han',
        },
        {
          label: t('name.category.chinese.3_han'),
          value: '3Han',
        },
        {
          label: t('name.category.chinese.4_han'),
          value: '4Han',
        },
      ].map((item) => ({
        ...item,
        count: list.find((i) => i.category === item.value)?.count,
      })),
    [list],
  );
  const handlerSelected = (type: string, value: string) => {
    setNameSelected('');
    setLetterSelected('');
    setChineseSelected('');
    setOhterSelected('');

    if (type === 'number') {
      setNameSelected(value);
    } else if (type === 'letter') {
      setLetterSelected(value);
    } else if (type === 'chinese') {
      setChineseSelected(value);
    } else if (type === 'other') {
      setOhterSelected(value);
    }
    onChange?.(value);
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      <CategorySelect
        key="number"
        placeholder="Number Category"
        list={numberList}
        selected={nameSelected}
        onChange={(v) => handlerSelected('number', v)}
      />
      <CategorySelect
        key="letter"
        placeholder="Letter Category"
        list={letterList}
        selected={letterSelected}
        onChange={(v) => handlerSelected('letter', v)}
      />
      <CategorySelect
        key="chinese"
        placeholder="Chinese Category"
        list={chineseList}
        selected={chineseSelected}
        onChange={(v) => handlerSelected('chinese', v)}
      />
      <CategorySelect
        key="other"
        placeholder="Other Category"
        list={otherList}
        selected={ohterSelected}
        onChange={(v) => handlerSelected('other', v)}
      />
    </div>
  );
};
