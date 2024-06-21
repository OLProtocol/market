import { useMemo } from 'react';
export const useCalcFee = ({
  feeRate,
  files,
  serviceStatus,
}: {
  feeRate: number;
  serviceStatus: number;
  inscriptionSize: number;
  files: any[];
}) => {
  const VITE_TIP_MIN = 1000;
  const clacFee = useMemo(() => {
    const feeObj: any = {
      networkFee: 0,
      serviceFee: 0,
      serviceStatus,
      totalFee: 0,
    };
    const totalInscriptionSize = files.reduce(
      (acc, cur) => acc + cur.amount,
      0,
    );
    console.log('totalInscriptionSize', totalInscriptionSize);
    const totalTxSize = files.reduce((acc, cur) => acc + cur.txsize, 0);
    const outputLength = serviceStatus ? files.length + 1 : files.length;
    console.log((160 + totalTxSize) * feeRate);
    feeObj.networkFee = Math.ceil(
      (160 + totalTxSize) * feeRate + 34 * (outputLength + 10) * feeRate,
    );
    let totalFee = feeObj.networkFee + totalInscriptionSize;
    if (serviceStatus) {
      const oneFee = Math.max(
        Number(VITE_TIP_MIN),
        Math.ceil(totalInscriptionSize * 0.1),
      );
      feeObj.serviceFee = Math.ceil(oneFee);
      totalFee += feeObj.serviceFee;
    }
    feeObj.totalFee = totalFee;
    return feeObj;
  }, [feeRate, files]);
  return clacFee;
};
