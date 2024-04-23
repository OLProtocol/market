import { Button } from '@nextui-org/react';
import { useSellStore } from '@/store';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

interface Props {
  toSell?: () => void;
  onClose?: () => void;
}
export const BatchSellFooter = ({ toSell, onClose }: Props) => {
  const { t } = useTranslation();
  const { list } = useSellStore();
  return (
    <div className="batch-sell-footer fixed bottom-0 w-full h-20 left-0 dark:bg-slate-900 bg-slate-100 z-20">
      <div className="flex justify-between items-center w-full h-full px-4">
        <div className="flex-1">{list.length}</div>
        <div className="flex gap-2 items-center">
          <Button className="btn btn-primary" color="primary" onClick={toSell}>
            {t('common.sell')}
          </Button>
          <Button isIconOnly onClick={onClose}>
            <Icon icon="mdi:close" className="text-white text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};
