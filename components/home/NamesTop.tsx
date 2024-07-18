import { Button, Image } from '@nextui-org/react';
import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
const NamesTop = () => {
    const router = useRouter();
    const toMint = ({ type, ticker }) => {
        router.push('/inscribe?type=' + type + '&ticker=' + ticker);
    };
    const endBlockHeight = 853358;
    return (
        <div className="mt-0 mb-4 flex flex-col-reverse items-center justify-between gap-5 rounded-md bg-gradient-to-tl from-[rgba(234,241,255,0.44)] to-[rgba(234,241,255,0.96)] px-6 py-2.5 dark:from-[rgba(14,23,38,0.44)] dark:to-[#0E1726] md:flex-row lg:mt-20 xl:px-16">
            <div className="mb-2 text-gray-500 flex gap-1 text-end text-base leading-5 sm:flex-col xl:text-xl">
                <span>It's free, </span>
                <span>For everyone.</span>
            </div>
            <div className="-me-4 ms-2 hidden text-[#181506] dark:text-white sm:block rtl:rotate-y-180">
                <svg width="111" height="22" viewBox="0 0 116 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 xl:w-28">
                    <path d="M0.645796 11.44C0.215273 11.6829 0.0631375 12.2287 0.305991 12.6593C0.548845 13.0898 1.09472 13.2419 1.52525 12.9991L0.645796 11.44ZM49.0622 20.4639L48.9765 19.5731L48.9765 19.5731L49.0622 20.4639ZM115.315 2.33429L105.013 3.14964L110.87 11.6641L115.315 2.33429ZM1.52525 12.9991C10.3971 7.99452 17.8696 10.3011 25.3913 13.8345C29.1125 15.5825 32.9505 17.6894 36.8117 19.2153C40.7121 20.7566 44.7862 21.7747 49.148 21.3548L48.9765 19.5731C45.0058 19.9553 41.2324 19.0375 37.4695 17.5505C33.6675 16.0481 30.0265 14.0342 26.1524 12.2143C18.4834 8.61181 10.3 5.99417 0.645796 11.44L1.52525 12.9991ZM49.148 21.3548C52.4593 21.0362 54.7308 19.6545 56.4362 17.7498C58.1039 15.8872 59.2195 13.5306 60.2695 11.3266C61.3434 9.07217 62.3508 6.97234 63.8065 5.35233C65.2231 3.77575 67.0736 2.6484 69.8869 2.40495L69.7326 0.62162C66.4361 0.906877 64.1742 2.26491 62.475 4.15595C60.8148 6.00356 59.703 8.35359 58.6534 10.5568C57.5799 12.8105 56.5678 14.9194 55.1027 16.5557C53.6753 18.1499 51.809 19.3005 48.9765 19.5731L49.148 21.3548ZM69.8869 2.40495C72.2392 2.2014 75.0889 2.61953 78.2858 3.35001C81.4816 4.08027 84.9116 5.09374 88.4614 6.04603C91.9873 6.99189 95.6026 7.86868 99.0694 8.28693C102.533 8.70483 105.908 8.67299 108.936 7.75734L108.418 6.04396C105.72 6.85988 102.621 6.91239 99.2838 6.50981C95.9496 6.10757 92.4363 5.25904 88.9252 4.31715C85.4382 3.38169 81.9229 2.34497 78.6845 1.60499C75.4471 0.865243 72.3735 0.393097 69.7326 0.62162L69.8869 2.40495Z" fill="red"></path>
                </svg>
                
            </div>
            <div className="flex-1 px-2 py-1 md:px-8 md:py-3.5 text-center md:text-start">
                <div className="mb-4 text-4xl font-bold dark:text-orange-400 md:text-6xl">🎉Free Mint Names</div>
                <div className="text-lg md:text-3xl font-medium text-primary-600">
                    <span className='text-gray-200'>Supports suffixes: for example, .btc, .x, .pizza, and no suffix. </span><br/>
                    you can free mint names with the supported suffixes above until block <span className='text-orange-400'>{endBlockHeight}</span>.<br />
                </div>
                <div className="flex mt-8 md:px-10 w-full justify-center md:mt-10">
                    <Button
                        className=" text-lg h-12 w-56 md:text-xl font-bold md:h-16 md:w-80 bg-gradient-to-r to-indigo-500 via-purple-500 from-pink-500 hover:from-indigo-500/50 hover:via-purple-500/50 hover:to-pink-500/50 hover:border-none md:uppercase"
                        variant="flat"
                        radius="sm"
                        onClick={() => toMint({ type: 'name', ticker: '' })}
                    >
                        Now Mint
                    </Button>
                </div>
            </div>
            <div className="w-52 max-w-xs lg:w-full">
                <Image src="./find-solution.svg" alt="find-solution" className="w-full object-cover rtl:rotate-y-180 dark:brightness-[2.59] dark:grayscale-[83%]" />
            </div>
        </div>
    );
};

export default NamesTop;
