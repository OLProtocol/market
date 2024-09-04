'use client';
import { Button } from '@nextui-org/react';
import {
  bindTwitterAccount,
  updateTwitterActivity,
  getTwitterActivity,
  getTwitterAccount,
} from '@/api';
import { useEffect, useState } from 'react';
import { tryit } from 'radash';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

export default function BtcNameEvent() {
  const { address } = useReactWalletStore();
  const [loading, setLoading] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [retweetLoading, setRetweetLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [activityResult, setActivityResult] = useState<any>({});
  const [acountResult, setAccountResult] = useState(false);
  const bindTwitter = async () => {
    const [_, res] = await tryit(bindTwitterAccount)({ address });
    console.log(res);

    if (res.code === 200) {
      window.open(res.data.authorization_url, '_blank');
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
      setAccountResult(true);
    }
  };
  const getFollowStatus = async () => {
    setLoading(true);
    setActivityResult({});
    const [err, res] = await tryit(getTwitterActivity)({ address });
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
      'https://twitter.com/intent/follow?screen_name=btname_DID',
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'following',
      result: 1,
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
      'https://twitter.com/intent/retweet?tweet_id=1234567890123456789',
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'retweets',
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
      'https://twitter.com/intent/like?tweet_id=1234567890123456789',
      '_blank',
    );
    const [err, res] = await tryit(updateTwitterActivity)({
      address,
      activity_name: 'flowers',
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
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">🔥 .btc (BtcName) 盲盒空投</h1>
        <p className="text-sm">2024/08/16 ~ 2024/08/26</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">完成Web3 任务</h2>
        <div className="border border-gray-700 rounded-lg p-4">
          活动期间持有 ≥ 0.0002 BTC
        </div>
      </div>
      <div className="mb-6">
        <div className="text-2xl font-bold mb-4 flex justify-between items-center">
          <span>完成 X 社媒任务</span>
          {acountResult && (
            <Button
              size="sm"
              color="default"
              radius="full"
              onClick={bindTwitter}
            >
              绑定 X
            </Button>
          )}
        </div>
        <div className="mb-4 border border-gray-700 rounded-lg p-4">
          <div className="mb-4">关注 @btcname_DID 的 X 账号</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={followHandler}
              size="sm"
              isLoading={loading || followLoading}
              isDisabled={activityResult.following === 1 || !acountResult}
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
          <div className="mb-4">转发 @btcname_DID 的推文</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={shareHandler}
              size="sm"
              color="default"
              isLoading={loading || retweetLoading}
              isDisabled={activityResult.retweets === 1 || !acountResult}
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
          <div className="mb-4">点赞 @btcname_DID 的推文</div>
          <div className="flex items-center gap-4">
            <Button
              onClick={likeHandler}
              size="sm"
              color="default"
              isLoading={loading || likeLoading}
              isDisabled={activityResult.flowers === 1 || !acountResult}
              radius="full"
            >
              点赞
            </Button>
            {/* <Button size="sm" color="default" radius="full">
              验证
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
