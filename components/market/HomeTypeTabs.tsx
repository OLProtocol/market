import { Tabs, Tab } from '@nextui-org/react';

interface HomeTypeTabsProps {
  value: string;
  onChange?: (key: any) => void;
}
export const HomeTypeTabs = ({ value, onChange }: HomeTypeTabsProps) => {
  const list = [
    {
      label: 'Token',
      key: 'ticker',
    },
    {
      label: 'Rare',
      key: 'exotic',
    },
    {
      label: 'Names',
      key: 'ns',
    },
    {
      label: 'Collection',
      key: 'nft',
    },
  ];
  const changeHandler = (key: any) => {
    console.log(key);
    onChange?.(key);
  };

  return (
    <Tabs selectedKey={value} onSelectionChange={changeHandler}>
      {list.map((item) => (
        <Tab key={item.key} title={item.label}></Tab>
      ))}
    </Tabs>
  );
};
