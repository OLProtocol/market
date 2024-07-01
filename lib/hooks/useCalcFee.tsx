import { useMemo } from 'react';
export const useCalcFee = ({
  feeRate,
  files,
  discount,
}: {
  feeRate: number;
  discount: number;
  files: any[];
}) => {
  const VITE_TIP_MIN = 1000;
  console.log(files);
  const clacFee = useMemo(() => {
    const feeObj: any = {
      networkFee: 0,
      serviceFee: 0,
      totalFee: 0,
      discountServiceFee: 0,
      totalInscriptionSize: 0,
    };
    const totalInscriptionSize = files.reduce(
      (acc, cur) => acc + cur.amount,
      0,
    );
    const totalTxSize = files.reduce((acc, cur) => acc + cur.txsize, 0);
    const outputLength = files.length;
    console.log((160 + totalTxSize) * feeRate);
    feeObj.networkFee = Math.ceil(
      (160 + totalTxSize) * feeRate + (34 * outputLength + 10) * feeRate,
    );
    let totalFee = feeObj.networkFee + totalInscriptionSize;
    const oneFee =
      Number(VITE_TIP_MIN) + Math.ceil(totalInscriptionSize * 0.01);
    feeObj.serviceFee = Math.ceil(oneFee);
    feeObj.discountServiceFee = Math.ceil((oneFee * (100 - discount)) / 100);
    feeObj.totalInscriptionSize = totalInscriptionSize;
    feeObj.totalFee = totalFee;
    return feeObj;
  }, [feeRate, files, discount]);
  return clacFee;
};
