'use client'
import { Card, CardBody, CardHeader, Avatar, Button } from "@nextui-org/react";
// import { useRouter } from "next/router";

export default function ToolsPage() {

    // const router = useRouter();

    const toTransact = () => {
        // window.location.href = '/tools/transact';
        // router.push(`/tools/transaction`);
        alert('开发中，敬请期待')
    };

    return (
        <div>
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar name="T" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Transaction</h4>
                            {/* <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5> */}
                        </div>
                    </div>
                    <Button
                        className=""
                        color="primary"
                        radius="full"
                        size="sm"
                        variant="solid"
                        onClick={() => toTransact()}
                    >
                        Split&Send
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Split&Send
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}