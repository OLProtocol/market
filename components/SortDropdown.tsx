import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useState } from "react";

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
  const [selectKeys, setSelectKeys] = useState([value?.toString() || "0"]);
  const sortList = [
    { label: "不排序", value: 0 },
    { label: "价格升序", value: 1 },
    { label: "价格降序", value: 2 },
    { label: "时间升序", value: 3 },
    { label: "时间降序", value: 4 },
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
      className="w-40"
      selectionMode="single"
      selectedKeys={selectKeys}
      defaultSelectedKeys={["0"]}
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
