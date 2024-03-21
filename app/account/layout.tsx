"use client";

import { useUnisatStore } from "@/providers/unisat-store-provider";
import { hideStr, satsToBitcoin } from "@/lib/utils";
import { Divider, Snippet } from "@nextui-org/react";
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
          <h1 className="">
            <Snippet
              codeString={address}
              className="bg-transparent text-2xl font-bold"
              symbol=""
              size="lg"
              variant="flat"
            >
              {hideStr(address, 6)}
            </Snippet>
          </h1>
          <div className="">
            <p className="text-4xl font-bold">
              {satsToBitcoin(balance.total)}
              <span className="text-md"> BTC</span>
            </p>
          </div>
        </div>
        <Divider className="my-2" />
      </div>
      <div className="">{children}</div>
    </section>
  );
}
