'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { BlogNameSelect } from '@/components/BlogNameSelect';
import { useInscribeStore, useBlogStore } from '@/store';
import { ordx } from '@/api';
import { tryit } from 'radash';
import { blogTemplate } from '@/lib/utils/blog';
import { useRouter } from 'next/navigation';
import { Textarea, Button, Input } from '@nextui-org/react';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

export function BlogCreate() {
  const nav = useRouter();
  const [selectName, setSelectName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [naData, setNaData] = useState<any>();
  const [checkStatus, setCheckStatus] = useState(false);
  const [templateInscriptionId, setTemplateInscriptionId] = useState('');
  const [prevInscriptionId, setPrevInscriptionId] = useState('');
  const { inscriptionId, reset: resetBlogStore } = useBlogStore();
  const { network } = useReactWalletStore();
  const { setData: setInscribeData } = useInscribeStore();
  const checkHandler = async () => {
    setCheckStatus(false);
    await getNsName();
  };
  const mintTemplate = async () => {
    setInscribeData({
      type: 'blog',
      mode: 'template',
      relateInscriptionId:
        '3e24e4bd35dc2e96382918b945d30b40aceb964bb2922c071127d8b9bcfa98b4i0i0',
      metadata: {
        op: 'update',
        name: selectName,
        key: 'template_blog',
      },
      text: 'template_blog',
    });
    nav.push('/inscribe?source=blog');
  };
  const mintRouting = async () => {
    setInscribeData({
      type: 'text',
      mode: 'routing',
      text: JSON.stringify({
        p: 'btcname',
        op: 'routing',
        name: selectName,
        ord_handle: 'www',
        ord_index: templateInscriptionId,
      }),
    });
    // resetBlogStore()
    nav.push('/inscribe?source=blog');
  };
  const preview = () => {
    window.open(`https://${selectName}.mainnet.dev.ordx.space/`, '_blank');
  };
  const publishHandler = async () => {
    const params = {
      p: 'sns',
      op: 'update',
      name: selectName,
      [`blog_${+new Date()}`]: content,
    };
    setInscribeData({
      type: 'text',
      text: JSON.stringify(params),
    });
    nav.push('/inscribe');
  };
  const getNsName = async () => {
    if (!selectName) {
      return;
    }
    setLoading(true);
    const [err, res] = await tryit(ordx.getNsName)({
      name: selectName,
      network,
    });
    setLoading(false);
    if (!err) {
      setCheckStatus(true);
      const { kvs = [] } = res.data || {};
      console.log('_id ', inscriptionId);
      const _id =
        inscriptionId || kvs?.find((kv) => kv.key === 'ord_index')?.value;
      setTemplateInscriptionId(_id);
      setPrevInscriptionId(_id);
      setNaData(res.data);
    }
  };
  const hasRoute = useMemo(() => {
    return !!naData?.kvs?.find((kv) => kv.key === 'ord_handle')?.inscriptionId;
  }, [naData]);

  const handlerChange = (name: string) => {
    setSelectName(name);
  };
  const mintRoutingDisabled = useMemo(() => {
    return false;
  }, [templateInscriptionId]);
  const publishDisabled = useMemo(() => {
    return !(content && selectName && templateInscriptionId);
  }, [content, selectName, templateInscriptionId]);
  useEffect(() => {
    if (selectName) {
      checkHandler();
    }
  }, [selectName]);
  console.log(checkStatus);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-center mb-4 text-xl">Blog</h1>
      <div className="mb-4">
        <h2 className="mb-2">1、Select Btc Name</h2>
        <BlogNameSelect onChange={handlerChange} loading={loading} />
      </div>
      {checkStatus && (
        <>
          <div className="mb-4">
            <h2 className="mb-2">2、 Inscribe Template for Routing</h2>
            <div className="flex justify-center">
              <Button
                color="primary"
                isDisabled={mintRoutingDisabled}
                onClick={() => {
                  mintTemplate();
                }}
              >
                Mint Template
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2">
              <h2 className="mb-2">3、 Mint Routing</h2>
              <div>
                <Input
                  value={templateInscriptionId}
                  onChange={(e) => setTemplateInscriptionId(e.target.value)}
                ></Input>
              </div>
            </div>
            {/* <div className="mb-2">
              <h2 className="mb-2">Attr</h2>
              <div className='flex items-center'>
                <Input
                  value={templateInscriptionId}
                  onChange={(e) => setTemplateInscriptionId(e.target.value)}
                ></Input>
              </div>
            </div> */}
            <div className="flex justify-center">
              <Button
                color="primary"
                isDisabled={mintRoutingDisabled}
                onClick={() => {
                  mintRouting();
                }}
              >
                Mint Routing
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              color="primary"
              variant="light"
              isDisabled={mintRoutingDisabled}
              onClick={() => {
                preview();
              }}
            >
              预览: https://{selectName}.mainnet.dev.ordx.space/
            </Button>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <h2 className="mb-2">4、Publish Content</h2>
              <Textarea
                disableAnimation
                disableAutosize
                classNames={{
                  input: 'resize-y min-h-[140px]',
                }}
                placeholder="Enter your content here..."
                value={content}
                onValueChange={(e) => setContent(e)}
              />
            </div>
            <div className="flex justify-center">
              <Button
                color="primary"
                isDisabled={publishDisabled}
                onClick={() => {
                  publishHandler();
                }}
              >
                Publish
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
