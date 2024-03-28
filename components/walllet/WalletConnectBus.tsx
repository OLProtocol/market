'use client';
import { Button } from '@nextui-org/react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import React from 'react';

interface WalletConnectBusProps {
  children: React.ReactNode;
  className?: string;
}
export const WalletConnectBus = ({
  children,
  className,
}: WalletConnectBusProps) => {
  const { connected, setModalVisible } = useReactWalletStore((state) => state);
  console.log(connected);
  return connected ? (
    <>{children}</>
  ) : (
    <>
      <Button
        onClick={() => setModalVisible(true)}
        size="sm"
        radius="full"
        className={className}
        color="primary"
      >
        Connect Wallet
      </Button>
    </>
  );
};
