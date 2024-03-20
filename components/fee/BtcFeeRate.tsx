import { Input, Slider } from "@nextui-org/react";
import { useState, useMemo, useEffect } from "react";
import { BtcFeeRateItem } from "./BtcFeeRateItem";
import { fetchChainFeeRate } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import useSWR from "swr";

interface BtcFeeRate {
  onChange?: (value: number) => void;
}
export const BtcFeeRate = ({ onChange }: BtcFeeRate) => {
  const { network } = useUnisatStore((state) => state);
  const [type, setType] = useState("Normal");
  const [customValue, setCustomValue] = useState(1);
  const [economyValue, setEconomyValue] = useState(1);
  const [normalValue, setNormalValue] = useState(1);
  const [minFee, setMinFee] = useState(1);
  const [maxFee, setMaxFee] = useState(500);

  const {
    data: feeRateData,
    isLoading,
    error,
  } = useSWR(`fetchChainFeeRate-${network}`, () =>
    fetchChainFeeRate(network as any)
  );

  const clickHandler = (_type: string, value: number) => {
    if (type === _type) {
      return;
    }
    setType(_type);
    onChange?.(value);
  };
  const setRecommendFee = async () => {
    const defaultFee = network === "testnet" ? 1 : 50;
    setCustomValue(feeRateData?.fastestFee || defaultFee);
    setEconomyValue(feeRateData?.hourFee || defaultFee);
    setNormalValue(feeRateData?.halfHourFee || defaultFee);
    setMinFee(feeRateData?.minimumFee || defaultFee);
    onChange?.(feeRateData?.halfHourFee || defaultFee);
    setType("Normal");
  };
  const list = useMemo(
    () => [
      {
        label: "Economy",
        name: "Economy",
        value: economyValue,
      },
      {
        label: "Normal",
        name: "Normal",
        value: normalValue,
      },
      {
        label: "Custom",
        name: "Custom",
        value: customValue,
      },
    ],
    [economyValue, normalValue, customValue]
  );
  useEffect(() => {
    setRecommendFee();
  }, [feeRateData, error]);
  useEffect(() => {
    if (type === "Custom") {
      onChange?.(customValue);
    }
  }, [customValue]);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-2">
        {list.map((item) => (
          <BtcFeeRateItem
            className={
              type === item.label ? " border-orange-400 " : "border-gray-500"
            }
            key={item.label}
            label={item.name}
            value={item.value}
            onClick={() => clickHandler(item.label, item.value)}
          />
        ))}
      </div>
      {/* {economyValue > 100 && (
        <div className="text-sm text-orange-400 mb-2">
          {t("pages.inscribe.fee.high_hint")}
        </div>
      )} */}
      {type === "Custom" && (
        <div className="flex items-center gap-4">
          <Input
            type="number"
            className="w-30"
            placeholder="1"
            value={customValue.toString()}
            onChange={(e) => setCustomValue(Number(e.target.value))}
          />
          <Slider
            size="sm"
            step={1}
            maxValue={maxFee}
            minValue={minFee}
            defaultValue={20}
            className="flex-1"
            onChange={(e) => {
              setCustomValue(e as number);
            }}
          />
        </div>
      )}
    </div>
  );
};
