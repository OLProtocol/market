import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { getTickLabel, hideStr } from '@/lib';
import { useState } from 'react';

export function InputSection({
  inputList,
  tickerList,
  handleTickerSelectChange,
  handleUtxoSelectChange,
  setInputList,
  loading,
}) {
  const { t } = useTranslation();
  const [loadingStates, setLoadingStates] = useState({});

  const addInputItem = () => {
    const tickers = tickerList?.map((item) => item.ticker) || [];

    const newId = inputList.items.length + 1;
    const newItem = {
      id: newId,
      value: {
        ticker: '',
        utxo: '',
        sats: 0,
        unit: 'sats',
      },
      options: {
        tickers: tickers,
        utxos: [],
      },
    };
    setInputList('items', [...inputList.items, newItem]);
  };

  const removeInputItem = (id: number) => {
    if (inputList.items.length > 1) {
      const tmpItems = inputList.items.filter((item) => item.id !== id);
      tmpItems.forEach((item, index) => {
        item.id = index + 1;
      });
      setInputList('items', tmpItems);
    }
  };

  const handleInputUnitSelectChange = (itemId, e) => {
    const unit = e.target.value;
    inputList.items[itemId - 1].value.unit = unit;
    setInputList('items', inputList.items);
  };

  const handleTickerChange = async (itemId, ticker) => {
    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));
    await handleTickerSelectChange(itemId, ticker);
    setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
  };
  console.log('inputList', inputList);

  return (
    <div className="space-y-4">
      <h2 className="text-base sm:text-lg font-semibold">
        {t('pages.tools.transaction.input')} UTXO
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {inputList.items.map((item, i) => (
          <div
            key={i}
            className="border border-divider bg-content1 p-2 sm:p-3 rounded-lg space-y-2 sm:space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base font-medium">
                Input {i + 1}
              </span>
              <div className="flex space-x-1 sm:space-x-2">
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  onClick={addInputItem}
                  className="min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2"
                >
                  +
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  onClick={() => removeInputItem(item.id)}
                  className="min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2"
                  isDisabled={inputList.items.length === 1}
                >
                  -
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              <Select
                label="Ticker"
                placeholder="Select Ticker"
                size="sm"
                className="w-full"
                selectedKeys={item.value?.ticker ? [item.value.ticker] : []}
                onChange={(e) => handleTickerChange(item.id, e.target.value)}
                isLoading={loadingStates[item.id] || loading}
              >
                {tickerList?.map((utxo) => (
                  <SelectItem key={utxo.ticker} value={utxo.ticker}>
                    {getTickLabel(utxo.ticker)}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="UTXO"
                placeholder="Select UTXO"
                size="sm"
                className="w-full"
                selectedKeys={item.value?.utxo ? [item.value.utxo] : []}
                onChange={(e) =>
                  handleUtxoSelectChange(item.id, e.target.value)
                }
                isLoading={loadingStates[item.id] || loading}
              >
                {item.options?.utxos.map((utxo) => (
                  <SelectItem
                    key={utxo.txid + ':' + utxo.vout}
                    value={utxo.txid + ':' + utxo.vout}
                  >
                    <div className="truncate text-xs sm:text-sm">
                      {utxo.assetamount && utxo.assetamount + ' Asset/'}
                      {utxo.value +
                        ' sats - ' +
                        hideStr(utxo.txid + ':' + utxo.vout)}
                    </div>
                  </SelectItem>
                ))}
              </Select>
              <Input
                type="number"
                label="Amount"
                placeholder="0"
                size="sm"
                readOnly
                className="w-full"
                value={
                  item.value.unit === 'sats'
                    ? item.value.sats
                    : item.value.sats / 100000000
                }
                endContent={
                  <Select
                    aria-label="Select unit"
                    size="sm"
                    className="w-16 sm:w-20 min-w-max"
                    selectedKeys={[item.value.unit]}
                    onChange={(e) => handleInputUnitSelectChange(item.id, e)}
                  >
                    <SelectItem key="sats" value="sats">
                      sats
                    </SelectItem>
                    <SelectItem key="btc" value="btc">
                      btc
                    </SelectItem>
                  </Select>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
