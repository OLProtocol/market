import React, { useEffect, useRef } from 'react';
import { useWindowScroll, useWindowSize, useDebounce } from 'react-use';
import { Empty } from 'antd';
import { Spinner } from '@nextui-org/react';

interface ScrollContentProps {
  children: any;
  loading?: boolean;
  finished?: boolean;
  empty?: boolean;
  loadMore?: () => void;
}
export const ScrollContent = ({
  loading: fLoading,
  loadMore,
  children,
  empty,
  finished,
}: ScrollContentProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { y } = useWindowScroll();
  const { height } = useWindowSize();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (loading && !fLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(!!fLoading);
    }
  }, [fLoading]);
  useDebounce(
    () => {
      const dis = document.documentElement.scrollHeight - y - height;
      if (dis < 100 && !loading && !finished) {
        loadMore?.();
      }
    },
    300,
    [y, height],
  );

  return (
    <div className="h-full overflow-y-auto" ref={containerRef}>
      {empty && <Empty className="mt-10" />}
      {children}
      {loading && (
        <div className="flex justify-center items-center h-60">
          <Spinner label="Loading..." color="primary" />
        </div>
      )}
    </div>
  );
};
