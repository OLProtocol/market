(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    25968: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 61569));
    },
    61569: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return m;
          },
        });
      var r = i(57437),
        n = i(41733),
        l = i(65703),
        s = i(2265),
        o = i(18182),
        a = i(1271),
        c = i(16463),
        d = i(24842),
        u = i(90089);
      function m() {
        let e = (0, c.useSearchParams)(),
          { i18n: t, t: i } = (0, u.$G)(),
          m = e.get('id') || 1,
          { address: f } = (0, d.$)(),
          [v, b] = (0, s.useState)(!1),
          [y, w] = (0, s.useState)(!1),
          [h, p] = (0, s.useState)(!1),
          [x, _] = (0, s.useState)(!1),
          [g, j] = (0, s.useState)({}),
          [N, S] = (0, s.useState)({}),
          k = (0, s.useMemo)(
            () =>
              'en' === t.language
                ? [
                    {
                      activity_id: 1,
                      title: '\uD83D\uDD25 .btc (BtcName) Blind Box Airdrop',
                      time: '2024/10/1 ~ 2024/10/7',
                      desc: 'Complete the Web3 task during the event period',
                      twitter_id: 'SAT20Market',
                      tweet_id: '1234567890123456789',
                    },
                  ]
                : [
                    {
                      activity_id: 1,
                      title: '\uD83D\uDD25 .btc (BtcName) 盲盒空投',
                      time: '2024/10/1 ~ 2024/10/7',
                      desc: '活动期间持有 ≥ 0.0002 BTC',
                      twitter_id: 'SAT20Market',
                      tweet_id: '1234567890123456789',
                    },
                  ],
            [t.language],
          ),
          P = (0, s.useMemo)(() => k.find((e) => e.activity_id == m), [m, k]),
          D = async () => {
            let [e, t] = await (0, o.vU)(l.tg)({ address: f });
            200 === t.code && (location.href = t.data.authorization_url);
          },
          C = async () => {
            b(!0), S(!1);
            let [e, t] = await (0, o.vU)(l.yr)({ address: f });
            if ((b(!1), e)) {
              console.error(e);
              return;
            }
            if (200 === t.code) {
              var i;
              S(
                (null === (i = t.data) || void 0 === i ? void 0 : i.twitter) ||
                  {},
              );
            }
          },
          U = async () => {
            b(!0), j({});
            let [e, t] = await (0, o.vU)(l.F_)({
              address: f,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            b(!1), e && console.error(e), 200 === t.code && j(t.data);
          };
        (0, s.useEffect)(() => {
          f && (C(), U());
        }, [f]);
        let Z = async () => {
            window.open(
              'https://twitter.com/intent/follow?screen_name='.concat(
                null == P ? void 0 : P.twitter_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'following',
              result: 1,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...g, following: 1 });
          },
          A = async () => {
            window.open(
              'https://twitter.com/intent/retweet?tweet_id='.concat(
                null == P ? void 0 : P.tweet_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'retweets',
              activity_id: null == P ? void 0 : P.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...g, retweets: 1 });
          },
          z = async () => {
            window.open(
              'https://twitter.com/intent/like?tweet_id=${currentData?.tweet_id}',
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'flowers',
              activity_id: null == P ? void 0 : P.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...g, flowers: 1 });
          },
          E = async () => {
            let [e, t] = await (0, o.vU)(l.F_)({
              address: f,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            b(!1);
            let r =
              (null == t ? void 0 : t.following) == 1 &&
              (null == t ? void 0 : t.retweets) == 1 &&
              (null == t ? void 0 : t.flowers) == 1;
            e || (null == t ? void 0 : t.code) !== 200 || !r
              ? a.ZP.error({ message: i('pages.event.totast.error') })
              : a.ZP.success({ message: i('pages.event.totast.success') });
          };
        return (0, r.jsxs)('div', {
          className: 'container mx-auto p-4 max-w-6xl',
          children: [
            (0, r.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, r.jsx)('h1', {
                  className: 'text-3xl font-bold mb-4',
                  children: null == P ? void 0 : P.title,
                }),
                (0, r.jsx)('p', {
                  className: 'text-sm',
                  children: null == P ? void 0 : P.time,
                }),
              ],
            }),
            (0, r.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, r.jsx)('h2', {
                  className: 'text-2xl font-bold mb-4',
                  children: '完成Web3 任务',
                }),
                (0, r.jsx)('div', {
                  className: 'border border-gray-700 rounded-lg p-4',
                  children: null == P ? void 0 : P.desc,
                }),
              ],
            }),
            (0, r.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, r.jsxs)('div', {
                  className:
                    'text-2xl font-bold mb-4 flex justify-between items-center',
                  children: [
                    (0, r.jsx)('span', { children: '完成 X 社媒任务' }),
                    (0, r.jsx)(n.A, {
                      size: 'sm',
                      color: 'default',
                      radius: 'full',
                      isLoading: v,
                      isDisabled: null == N ? void 0 : N.id,
                      onClick: D,
                      children: (null == N ? void 0 : N.id)
                        ? '已绑定 '.concat(N.name)
                        : '绑定 X',
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '关注 @',
                        null == P ? void 0 : P.twitter_id,
                        ' 的 X 账号',
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, r.jsx)(n.A, {
                        onClick: Z,
                        size: 'sm',
                        isLoading: v || y,
                        isDisabled:
                          1 === g.following || !(null == N ? void 0 : N.id),
                        color: 'default',
                        radius: 'full',
                        children: '关注',
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '转发 @',
                        null == P ? void 0 : P.twitter_id,
                        ' 的推文',
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, r.jsx)(n.A, {
                        onClick: A,
                        size: 'sm',
                        color: 'default',
                        isLoading: v || h,
                        isDisabled:
                          1 === g.retweets || !(null == N ? void 0 : N.id),
                        radius: 'full',
                        children: '转发',
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '点赞 @',
                        null == P ? void 0 : P.twitter_id,
                        ' 的推文',
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, r.jsx)(n.A, {
                        onClick: z,
                        size: 'sm',
                        color: 'default',
                        isLoading: v || x,
                        isDisabled:
                          1 === g.flowers || !(null == N ? void 0 : N.id),
                        radius: 'full',
                        children: '点赞',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, r.jsx)(n.A, {
                    size: 'md',
                    color: 'primary',
                    radius: 'full',
                    onClick: E,
                    children: '验证抽奖资格',
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    16463: function (e, t, i) {
      'use strict';
      var r = i(71169);
      i.o(r, 'usePathname') &&
        i.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        i.o(r, 'useRouter') &&
          i.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        i.o(r, 'useSearchParams') &&
          i.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    82546: function (e, t, i) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw TypeError('Cannot call a class as a function');
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    84179: function (e, t, i) {
      'use strict';
      i.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = i(83616);
      function n(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, (0, r.Z)(n.key), n);
        }
      }
      function l(e, t, i) {
        return (
          t && n(e.prototype, t),
          i && n(e, i),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
    },
    83616: function (e, t, i) {
      'use strict';
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = i(88092);
      function n(e) {
        var t = (function (e, t) {
          if ('object' != (0, r.Z)(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || 'default');
            if ('object' != (0, r.Z)(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == (0, r.Z)(t) ? t : t + '';
      }
    },
    88092: function (e, t, i) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [3121, 1866, 1645, 8218, 3911, 1277, 1271, 1447, 2971, 7023, 1744],
      function () {
        return e((e.s = 25968));
      },
    ),
      (_N_E = e.O());
  },
]);
