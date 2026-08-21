'use client';
import { Suspense } from 'react';
import { Button } from '@nextui-org/react';
import {
  bindTwitterAccount,
  updateTwitterActivity,
  getTwitterActivity,
  getTwitterAccount,
} from '@/api';
import { useEffect, useMemo, useState } from 'react';
import { tryit } from 'radash';
import { notification } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useTranslation } from 'react-i18next';

function BtcNameEventContent() {
  const params = useSearchParams();
  const { i18n, t } = useTranslation();
  const paramId = params.get('id') || 1;
  // const activity_id = 1;
  const { address } = useReactWalletStore();
  const [loading, setLoading] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [retweetLoading, setRetweetLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [activityResult, setActivityResult] = useState<any>({});
  const [acountResult, setAccountResult] = useState<any>({});

  const previewData = useMemo(() => {
    if (i18n.language === 'en') {
      return [
        {
          activity_id: 1,
          title: '🔥 .btc (BtcName) Blind Box Airdrop',
          time: '2024/10/1 ~ 2024/10/7',
          desc: 'Complete the Web3 task during the event period',
          twitter_id: 'SAT20Market',
          tweet_id: '1234567890123456789',
        },
      ];
    } else {
      return [
        {
          activity_id: 1,
          title: '🔥 .btc (BtcName) 盲盒空投',
          time: '2024/10/1 ~ 2024/10/7',
          desc: '活动期间持有 ≥ 0.0002 BTC',
          twitter_id: 'SAT20Market',
          tweet_id: '1234567890123456789',
        },
      ];
    }
  }, [i18n.language]);
  const currentData = useMemo(() => {
    return previewData.find((item) => item.activity_id == paramId);
  }, [paramId, previewData]);
  const bindTwitter = async () => {
    const [_, res] = await tryit(bindTwitterAccount)({ address });
    if (res.code === 200) {
      location.href = res.data.authorization_url;
    }
  };
  const getTwitter = async () => {
    setLoading(true);
    setAccountResult(false);
    const [err, res] = await tryit(getTwitterAccount)({ address });
    setLoading(false);
    if (err) {
      console.error(err);
      return;
    }
    if (res.code === 200) {
      setAccountResult(res.data?.twitter || {});
    }
  };
  const getFollowStatus = async () => {
    setLoading(true);
    setActivityResult({});
    const [err, res] = await tryit(getTwitterActivity)({
      address,
      activity_id: currentData?.activity_id,
    });
    setLoading(false);
    if (err) {
      console.error(err);
    }
    if (res.code === 200) {
      setActivityResult(res.data);
    }
  };

  useEffect(() => {
    if (address) {
      getTwitter();
      getFollowStatus();
    }
  }, [address]);
  const followHandler = async () => {
    window.open(
      `https://twitter.com/intent/follow?screen_name=${currentData?.twitter_id}`,
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'following',
      result: 1,
      activity_id: currentData?.activity_id,
    });
    if (err) {
      console.error(err);
      return;
    }
    if (res.code === 200) {
      setActivityResult({
        ...activityResult,
        following: 1,
      });
    }
  };
  const shareHandler = async () => {
    window.open(
      `https://twitter.com/intent/retweet?tweet_id=${currentData?.tweet_id}`,
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'retweets',
      activity_id: currentData?.activity_id,
      result: 1,
    });
    if (err) {
      console.error(err);
      return;
    }
    if (res.code === 200) {
      setActivityResult({
        ...activityResult,
        retweets: 1,
      });
    }
  };
  const likeHandler = async () => {
    window.open(
      `https://twitter.com/intent/like?tweet_id=${currentData?.tweet_id}`,
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'flowers',
      activity_id: currentData?.activity_id,
      result: 1,
    });
    if (err) {
      console.error(err);
      return;
    }
    if (res.code === 200) {
      setActivityResult({
        ...activityResult,
        flowers: 1,
      });
    }
  };

  const verifyActivity = async () => {
    const [err, res] = await tryit(getTwitterActivity)({
      address,
      activity_id: currentData?.activity_id,
    });
    setLoading(false);
    const finished =
      res?.following == 1 && res?.retweets == 1 && res?.flowers == 1;
    if (err || res?.code !== 200 || !finished) {
      notification.error({
        message: t('pages.event.totast.error'),
      });
    } else {
      notification.success({
        message: t('pages.event.totast.success'),
      });
    }
  };
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">{currentData?.title}</h1>
        <p className="text-sm">{currentData?.time}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">完成Web3 任务</h2>
        <div className="border border-gray-700 rounded-lg p-4">
          {currentData?.desc}
        </div>
      </div>
      <div className="mb-6">
        <div className="text-2xl font-bold mb-4 flex justify-between items-center">
          <span>完成 X 社媒任务</span>
          <WalletConnectBus>
            <Button
              size="sm"
              color="default"
              radius="full"
              isLoading={loading}
              isDisabled={acountResult?.id}
              onClick={bindTwitter}
            >
              {acountResult?.id ? `已绑定 ${acountResult.name}` : '绑定 X'}
            </Button>
          </WalletConnectBus>
        </div>
        <div className="mb-4 border border-gray-700 rounded-lg p-4">
          <div className="mb-4">关注 @{currentData?.twitter_id} 的 X 账号</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={followHandler}
              size="sm"
              isLoading={loading || followLoading}
              isDisabled={activityResult.following === 1 || !acountResult?.id}
              color="default"
              radius="full"
            >
              关注
            </Button>
            {/* <Button size="sm" color="default" radius="full">
              验证
            </Button> */}
          </div>
        </div>
        <div className="mb-4 border border-gray-700 rounded-lg p-4">
          <div className="mb-4">转发 @{currentData?.twitter_id} 的推文</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={shareHandler}
              size="sm"
              color="default"
              isLoading={loading || retweetLoading}
              isDisabled={activityResult.retweets === 1 || !acountResult?.id}
              radius="full"
            >
              转发
            </Button>
            {/* <Button size="sm" color="default" radius="full">
              验证
            </Button> */}
          </div>
        </div>
        <div className="mb-4 border border-gray-700 rounded-lg p-4">
          <div className="mb-4">点赞 @{currentData?.twitter_id} 的推文</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={likeHandler}
              size="sm"
              color="default"
              isLoading={loading || likeLoading}
              isDisabled={activityResult.flowers === 1 || !acountResult?.id}
              radius="full"
            >
              点赞
            </Button>
            {/* <Button size="sm" color="default" radius="full">
              验证
            </Button> */}
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            size="md"
            color="primary"
            radius="full"
            onClick={verifyActivity}
          >
            验证抽奖资格
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function BtcNameEvent() {
  return <Suspense fallback={null}><BtcNameEventContent /></Suspense>;
}
