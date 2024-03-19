"use client";

import { useUnisatStore } from "@/providers/unisat-store-provider";
import { hideStr } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address } = useUnisatStore((state) => state);
  return (
    <section>
      <div className="">
        <div className="">
          <h1 className="text-4xl font-bold mb-2">{hideStr(address)}</h1>
          <div className="">
            <p className="text-2xl font-bold">{balance.total}<span className="text-md">sats</span></p>
          </div>
        </div>
        <Divider className="my-2"/>
      </div>
      <div className="">
        {children}
      </div>
    </section>
  );
}
