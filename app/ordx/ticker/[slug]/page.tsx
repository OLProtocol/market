"use client";
import useSWR from "swr";
import { getTickerSummary } from "@/api";
import { Image, Divider, Tabs, Tab } from "@nextui-org/react";
import { OrdxOrderList } from "@/components/order/OrdxOrderList";
import { OrdxOrderHistoryList } from "@/components/order/OrdxOrderHistoryList";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { useMemo } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const { address } = useUnisatStore((state) => state);
  const ticker = params.slug;
  const { data, isLoading } = useSWR(`getTickerSummary`, () =>
    getTickerSummary({ ticker })
  );
  const summary = useMemo(() => data?.data?.summary || {}, [data]);

  return (
    <div>
      <div className="h-40 flex flex-col">
        <div className="flex-1 flex items-center">
          <Image src={summary?.logo} alt="logo" className="mr-2 w-20 h-20" />
          <div className="flex-1">
            <div>{summary?.ticker}</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="pt-4">
        <Tabs aria-label="Options">
          <Tab key="market" title="市场">
            <OrdxOrderList ticker={ticker} />
          </Tab>
          <Tab key="history" title="交易历史">
            <OrdxOrderHistoryList ticker={ticker} />
          </Tab>
          <Tab key="my" title="我的挂单">
            <OrdxOrderList ticker={ticker} address={address}/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
