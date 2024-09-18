import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface OrderNameTypeNavProps {
  value?: string;
  list: any[];
  onChange?: (value: string) => void;
}

export const OrderNameTypeNav: FC<OrderNameTypeNavProps> = ({
  value,
  list,
  onChange,
}) => {
  const { t } = useTranslation();

  const handlerClick = (item) => {
    onChange?.(item.value);
  };

  return (
    <div className="flex gap-2 mb-4">
      {list.map((item) => (
        <Button
          key={item.value}
          variant="ghost"
          color={value === item.value ? 'primary' : 'default'}
          radius="full"
          onClick={() => handlerClick(item)}
        >
          {item.label} {item.count > 0 ? `(${item.count})` : ''}
        </Button>
      ))}
    </div>
  );
};
