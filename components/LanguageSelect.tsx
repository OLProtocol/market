'use client';
import useTranslation from 'next-translate/useTranslation';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useState, useMemo } from 'react';
import { useSelectedLanguage } from 'next-export-i18n';
import { TranslationOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
export const LanguageSelect = () => {
  const { lang, setLang } = useSelectedLanguage();

  const items = [
    { key: 'en', label: 'Engish' },
    { key: 'zh', label: '中文' },
  ];
  const [selectedKeys, setSelectedKeys] = useState(new Set(['zh']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );
  const onSelectionChange = (e: any) => {
    const _l = Array.from(e)[0] as string;
    if (_l) {
      console.log(_l);
      setLang(_l);
      // i18n.changeLanguage(_l);
    }
    setSelectedKeys(e);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={onSelectionChange}
      >
        {items.map((item) => (
          <DropdownItem key={item.key}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
