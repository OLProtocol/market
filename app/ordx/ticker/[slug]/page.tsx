"use client";
import useSWR from "swr";
import { getTickerSummary } from "@/api";
import { Content } from "@/components/Content";
import { useMemo } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const ticker = params.slug;
  const { data, isLoading } = useSWR(`/ordx/getTopTickers`, () =>
    getTickerSummary({ ticker })
  );
  const summary = useMemo(() => data?.data?.summary || {}, [data]);
  console.log(data);
  return (
    <div>
      <Content loading={isLoading}>

        <div>{summary?.ticker}</div>
      </Content>
    </div>
  );
}
