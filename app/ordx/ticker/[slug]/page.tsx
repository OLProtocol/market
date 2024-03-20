"use client";
import useSWR from "swr";
import { getTickerSummary } from "@/api";
import { Image, Divider } from "@nextui-org/react";
import { Content } from "@/components/Content";
import { OrdxOrderList } from "@/components/order/OrdxOrderList";
import { useMemo } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const ticker = params.slug;
  const { data, isLoading } = useSWR(`/ordx/getTopTickers`, () =>
    getTickerSummary({ ticker })
  );
  const summary = useMemo(() => data?.data?.summary || {}, [data]);

  return (
    <div>
      <Content loading={isLoading}>
        <div className="h-40">
          <div className="flex">
            <Image src={summary?.logo} alt="logo" className="mr-2 w-20 h-20" />
            <div className="flex-1">
              <div>{summary?.ticker}</div>
            </div>
          </div>
          <div></div>
          <Divider />
        </div>
      </Content>
      <div>
        <OrdxOrderList ticker={ticker} />
      </div>
    </div>
  );
}
