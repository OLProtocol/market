// components/BannerTop
import { Button, Image } from '@nextui-org/react';
import React, { useMemo } from 'react';
import { ordxSWR } from '@/api';
import { useRouter } from 'next/navigation';
import CountdownTimer from '@/components/CountdownTimer';
import ProgressBar from '@/components/ProgressBar';

const BannerTop = () => {
  const router = useRouter();
  const startDate = new Date('2024-07-02T03:58:00');
  const targetDate = new Date('2024-07-23T11:14:00');
  const { data: heightData } = ordxSWR.useBtcHeight('livenet');
  console.log(heightData);

  const formattedStartDate = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTargettDate = targetDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const toMint = () => {
    router.push('/inscribe?type=ordx&ticker=RarePizza');
  };
  const startBlockHeight = 850282;
  const currentBlockHeight = useMemo(() => {
    return heightData?.data.height || 0;
  }, [heightData]);
  const endBlockHeight = 853358;

  return (
    <section className="bg-gray-800/50 text-white py-12 px-10 rounded-lg">
      <div className="mx-auto rounded-lg">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div>
            <div>
              <div className="mb-4">
                <p>RarePizza Mint Day 7</p>
              </div>
              <h2 className="text-4xl font-bold mb-4 mt-16">
                SAT20 Rare Pizza is now <br />
                <span className="text-blue-500">being actively minted.</span>
              </h2>
              <p className="mb-8 text-yellow-400">
                Efficient, Cost-effective, and Time-saving Minting.
              </p>
              <div className="button">
                <Button
                  className="text-tiny h-10 w-60 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
                  variant="flat"
                  radius="sm"
                  onClick={toMint}
                >
                  MINT NOW
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                  RarePizza Mint End In
                </h3>
                <CountdownTimer date={targetDate} />
                <div className="mt-8">
                  <div className="flex justify-between mb-2">
                    <h6>
                      Block:<span>{currentBlockHeight.toLocaleString()} </span>
                    </h6>
                    <h6 className="pr-40 keep-all">
                      Holders:2236 / Minted: 28957577
                    </h6>
                    <h6>
                      Block:<span>{endBlockHeight.toLocaleString()} </span>
                    </h6>
                  </div>
                  <ProgressBar
                    start={startBlockHeight}
                    current={currentBlockHeight}
                    target={endBlockHeight}
                  />
                  <div className="flex justify-between mt-2">
                    <p className="fs-14">{formattedStartDate}</p>
                    <p className="fs-14"></p>
                    <p className="fs-14">{formattedTargettDate}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="flex justify-center space-x-4">
                    <li>
                      <a href="#" title="">
                        <span className="icon-bitcoin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <span className="icon-coinp"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <span className="icon-kyber-network"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTop;
