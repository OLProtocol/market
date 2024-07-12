// components/BannerTop
import { Button, Image } from '@nextui-org/react';
import React, { useMemo } from 'react';
import { ordxSWR } from '@/api';
import { useRouter } from 'next/navigation';
import CountdownTimer from '@/components/CountdownTimer';
import ProgressBar from '@/components/ProgressBar';

const BannerTop = () => {
  const router = useRouter();
  const today = new Date();
  const startDate = new Date('2024-07-02T03:58:00');
  const targetDate = new Date('2024-07-23T11:14:00');
  const { data: heightData } = ordxSWR.useBtcHeight('livenet');
  console.log(heightData);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  
  const toMint = () => {
    router.push('/inscribe?type=ordx&ticker=RarePizza');
  };
  const startBlockHeight = 850282;
  const currentBlockHeight = useMemo(() => {
    return heightData?.data.height || 0;
  }, [heightData]);
  const endBlockHeight = 853358;

  return (
    <section className="bg-[#060818] text-white md:py-8 md:px-8 rounded-lg">
      <div className="mx-auto rounded-lg">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div>
            <div>
              <div className="mt-1 md:mt-0 mb-4 text-ellipsis text-lg text-gray-400 bg-transparent font-bold">               
                {formatDate(today)}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-14">
              🔥 RarePizza is now <br/>
                <span className="text-blue-500">being hotly minted!</span>
              </h2>
              <p className="mb-8 text-xs md:text-xl text-yellow-400">
                Efficient, Cost-effective, and Time-saving Minting.
              </p>
              <div>
                <Button
                  className="text-sm font-blod h-12 w-60 md:w-96 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 uppercase"
                  variant="flat"
                  radius="sm"
                  onClick={toMint}
                >
                 <span className='md:text-2xl'>🍕</span> MINT NOW
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-800/50 p-4  text-xs rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-4 uppercase">
                  RarePizza Mint End In
                </h3>
                <CountdownTimer date={targetDate} />
                <div className="mt-8">
                  <div className="flex justify-between mb-2">
                    <h6>
                      <span>{startBlockHeight.toLocaleString()} </span>
                    </h6>
                    <h6 className="pr-30 keep-all">
                    Current: <span className='text-green-500'>{currentBlockHeight.toLocaleString()}</span>
                    </h6>
                    <h6>
                      <span>{endBlockHeight.toLocaleString()} </span>
                    </h6>
                  </div>
                  <ProgressBar
                    start={startBlockHeight}
                    current={currentBlockHeight}
                    target={endBlockHeight}
                    isdisplay={true}
                  />
                  <div className="flex justify-between mt-2">
                    <p className="fs-14">{formatDate(startDate)}</p>
                    <p className="fs-14">
                      <h6 className="pr-30 keep-all">
                        Holders: <span className='text-green-500'>2,236</span> <br/>
                        Minted: <span className='text-green-500'>28,957,577</span>
                      </h6>
                    </p>
                    <p className="fs-14"> {formatDate(targetDate)}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="flex justify-center space-x-4">
                    <li>
                      <a href="#" title="">
                        <span className="icon-bitcoin">  </span>
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
