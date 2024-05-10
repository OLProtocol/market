'use client'
import { WalletConnectBus } from "@/components/walllet/WalletConnectBus";
import { Card, CardBody, CardHeader, Avatar, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ToolsPage() {

    const router = useRouter();

    const toTransact = () => {
        router.push(`/tools/transaction`);
    };

    const toSearchRareSats = () => {
        router.push(`/tools/sat`);
    }

    return (
        <div className="min-h-[10rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 sm:gap-4 mt-4 mb-4">
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar name="T" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Transaction</h4>
                        </div>
                    </div>
                    <WalletConnectBus className="mx-auto mt-20 block">
                        <Button
                            radius="full" 
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            onClick={() => toTransact()}
                        >
                            Split&Send
                        </Button>
                    </WalletConnectBus>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small justify-center items-center">
                    <p>
                        Split&Send
                    </p>
                </CardBody>
            </Card>

            {/* <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar name="R" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Rare Sat</h4>
                        </div>
                    </div>
                    <WalletConnectBus className="mx-auto mt-20 block">
                        <Button 
                            radius="full" 
                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            onClick={() => toSearchRareSats()}
                        >
                            Search
                        </Button>
                    </WalletConnectBus>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small justify-center items-center">
                    <p>
                        Search for rare sats
                    </p>
                </CardBody>
            </Card> */}
        </div>
    );
}