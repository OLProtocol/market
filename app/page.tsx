'use client';

import BannerTop from '@/components/home/BannerTop';
import { MintingTable } from '@/components/home/MintingTable';

export default function Home() {
  return (
    <div className="py-4">
      <div className="mb-4">
        <BannerTop />
      </div>
      <div className='mb-4 w-full round-lg'>
      <MintingTable />
      </div>
      
    </div>
  );
}
