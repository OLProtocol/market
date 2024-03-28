import { Select, SelectSection, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SortDropdownProps {
  sortList?: { label: string; value: number }[];
  value?: number;
  disabled?: boolean;
  onChange?: (value?: number) => void;
}
export const SortDropdown = ({
  value,
  onChange,
  disabled = false,
}: SortDropdownProps) => {
  const [selectKeys, setSelectKeys] = useState([value?.toString() || '0']);
  const { t } = useTranslation();
  const sortList = [
    { label: t('common.not_sort'), value: 0 },
    { label: t('common.sort_price_ascending'), value: 1 },
    { label: t('common.sort_price_descending'), value: 2 },
    { label: t('common.sort_time_ascending'), value: 3 },
    { label: t('common.sort_time_descending'), value: 4 },
  ];
  const onSelectionChange = (keys: any) => {
    setSelectKeys(keys);
    const _v = Number(Array.from(keys.values())[0]);
    onChange?.(_v);
    // onChange && onChange(Number(keys.get(0)));
  };
  return (
    <Select
      isDisabled={disabled}
      className="w-48"
      selectionMode="single"
      selectedKeys={selectKeys}
      defaultSelectedKeys={['0']}
      onSelectionChange={onSelectionChange}
    >
      {sortList.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
};
