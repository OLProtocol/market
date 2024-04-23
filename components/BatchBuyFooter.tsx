import { Button } from '@nextui-org/react';
import { useBuyStore } from '@/store';
import { Icon } from '@iconify/react';
import { BatchCart } from './BatchCart';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  toBuy?: () => void;
  onClose?: () => void;
}
export const BatchBuyFooter = ({ toBuy, onClose }: Props) => {
  const { list } = useBuyStore();
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <BatchCart />}
      <div className="batch-sell-footer fixed bottom-0 w-full h-20 left-0 dark:bg-slate-900 bg-gray-100 z-20">
        <div className="flex justify-between items-center w-full h-full px-4">
          <div className="flex-1">{list.length}</div>
          <div className="flex gap-2 items-center">
            <Button className="btn btn-primary" color="primary" onClick={toBuy}>
              {t('common.buy')}
            </Button>
            <Button isIconOnly color="danger" onClick={() => setShow(!show)}>
              <Icon icon="mdi:cart" className="text-white text-2xl" />
            </Button>
            <Button isIconOnly onClick={onClose}>
              <Icon icon="mdi:close" className="text-white text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
