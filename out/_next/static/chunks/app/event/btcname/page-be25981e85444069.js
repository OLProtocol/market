(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7457],
  {
    71718: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 9860));
    },
    9860: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return v;
          },
        });
      var n = i(57437),
        r = i(41733),
        l = i(65703),
        s = i(2265),
        o = i(18182),
        a = i(1271),
        c = i(16463),
        d = i(24842),
        u = i(27517),
        m = i(90089);
      function v() {
        let e = (0, c.useSearchParams)(),
          { i18n: t, t: i } = (0, m.$G)(),
          v = e.get('id') || 1,
          { address: f } = (0, d.$)(),
          [b, y] = (0, s.useState)(!1),
          [h, w] = (0, s.useState)(!1),
          [x, p] = (0, s.useState)(!1),
          [_, g] = (0, s.useState)(!1),
          [j, N] = (0, s.useState)({}),
          [k, S] = (0, s.useState)({}),
          P = (0, s.useMemo)(
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
          C = (0, s.useMemo)(() => P.find((e) => e.activity_id == v), [v, P]),
          D = async () => {
            let [e, t] = await (0, o.vU)(l.tg)({ address: f });
            200 === t.code && (location.href = t.data.authorization_url);
          },
          U = async () => {
            y(!0), S(!1);
            let [e, t] = await (0, o.vU)(l.yr)({ address: f });
            if ((y(!1), e)) {
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
          Z = async () => {
            y(!0), N({});
            let [e, t] = await (0, o.vU)(l.F_)({
              address: f,
              activity_id: null == C ? void 0 : C.activity_id,
            });
            y(!1), e && console.error(e), 200 === t.code && N(t.data);
          };
        (0, s.useEffect)(() => {
          f && (U(), Z());
        }, [f]);
        let A = async () => {
            window.open(
              'https://twitter.com/intent/follow?screen_name='.concat(
                null == C ? void 0 : C.twitter_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'following',
              result: 1,
              activity_id: null == C ? void 0 : C.activity_id,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && N({ ...j, following: 1 });
          },
          z = async () => {
            window.open(
              'https://twitter.com/intent/retweet?tweet_id='.concat(
                null == C ? void 0 : C.tweet_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'retweets',
              activity_id: null == C ? void 0 : C.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && N({ ...j, retweets: 1 });
          },
          E = async () => {
            window.open(
              'https://twitter.com/intent/like?tweet_id='.concat(
                null == C ? void 0 : C.tweet_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, o.vU)(l.UK)({
              address: f,
              activity_name: 'flowers',
              activity_id: null == C ? void 0 : C.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && N({ ...j, flowers: 1 });
          },
          B = async () => {
            let [e, t] = await (0, o.vU)(l.F_)({
              address: f,
              activity_id: null == C ? void 0 : C.activity_id,
            });
            y(!1);
            let n =
              (null == t ? void 0 : t.following) == 1 &&
              (null == t ? void 0 : t.retweets) == 1 &&
              (null == t ? void 0 : t.flowers) == 1;
            e || (null == t ? void 0 : t.code) !== 200 || !n
              ? a.ZP.error({ message: i('pages.event.totast.error') })
              : a.ZP.success({ message: i('pages.event.totast.success') });
          };
        return (0, n.jsxs)('div', {
          className: 'container mx-auto p-4 max-w-6xl',
          children: [
            (0, n.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, n.jsx)('h1', {
                  className: 'text-3xl font-bold mb-4',
                  children: null == C ? void 0 : C.title,
                }),
                (0, n.jsx)('p', {
                  className: 'text-sm',
                  children: null == C ? void 0 : C.time,
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, n.jsx)('h2', {
                  className: 'text-2xl font-bold mb-4',
                  children: '完成Web3 任务',
                }),
                (0, n.jsx)('div', {
                  className: 'border border-gray-700 rounded-lg p-4',
                  children: null == C ? void 0 : C.desc,
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'text-2xl font-bold mb-4 flex justify-between items-center',
                  children: [
                    (0, n.jsx)('span', { children: '完成 X 社媒任务' }),
                    (0, n.jsx)(u.j, {
                      children: (0, n.jsx)(r.A, {
                        size: 'sm',
                        color: 'default',
                        radius: 'full',
                        isLoading: b,
                        isDisabled: null == k ? void 0 : k.id,
                        onClick: D,
                        children: (null == k ? void 0 : k.id)
                          ? '已绑定 '.concat(k.name)
                          : '绑定 X',
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '关注 @',
                        null == C ? void 0 : C.twitter_id,
                        ' 的 X 账号',
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: A,
                        size: 'sm',
                        isLoading: b || h,
                        isDisabled:
                          1 === j.following || !(null == k ? void 0 : k.id),
                        color: 'default',
                        radius: 'full',
                        children: '关注',
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '转发 @',
                        null == C ? void 0 : C.twitter_id,
                        ' 的推文',
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: z,
                        size: 'sm',
                        color: 'default',
                        isLoading: b || x,
                        isDisabled:
                          1 === j.retweets || !(null == k ? void 0 : k.id),
                        radius: 'full',
                        children: '转发',
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        '点赞 @',
                        null == C ? void 0 : C.twitter_id,
                        ' 的推文',
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: E,
                        size: 'sm',
                        color: 'default',
                        isLoading: b || _,
                        isDisabled:
                          1 === j.flowers || !(null == k ? void 0 : k.id),
                        radius: 'full',
                        children: '点赞',
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, n.jsx)(r.A, {
                    size: 'md',
                    color: 'primary',
                    radius: 'full',
                    onClick: B,
                    children: '验证抽奖资格',
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    27517: function (e, t, i) {
      'use strict';
      i.d(t, {
        j: function () {
          return o;
        },
      });
      var n = i(57437),
        r = i(41733),
        l = i(24842);
      i(2265);
      var s = i(90089);
      let o = (e) => {
        var t;
        let { children: i, className: o, text: a, keepStyle: c } = e;
        null == i || null === (t = i.props) || void 0 === t || t.onClick;
        let { t: d } = (0, s.$G)(),
          { connected: u, setModalVisible: m } = (0, l.$)((e) => e);
        return u || c
          ? (0, n.jsx)(n.Fragment, { children: i })
          : (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)(r.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => m(!0),
                radius: 'sm',
                className: o,
                color: 'primary',
                children: a || d('buttons.connect'),
              }),
            });
      };
    },
    16463: function (e, t, i) {
      'use strict';
      var n = i(71169);
      i.o(n, 'usePathname') &&
        i.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        i.o(n, 'useRouter') &&
          i.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        i.o(n, 'useSearchParams') &&
          i.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    82546: function (e, t, i) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw TypeError('Cannot call a class as a function');
      }
      i.d(t, {
        Z: function () {
          return n;
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
      var n = i(83616);
      function r(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, (0, n.Z)(r.key), r);
        }
      }
      function l(e, t, i) {
        return (
          t && r(e.prototype, t),
          i && r(e, i),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
    },
    83616: function (e, t, i) {
      'use strict';
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(88092);
      function r(e) {
        var t = (function (e, t) {
          if ('object' != (0, n.Z)(e) || !e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var r = i.call(e, t || 'default');
            if ('object' != (0, n.Z)(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == (0, n.Z)(t) ? t : t + '';
      }
    },
    88092: function (e, t, i) {
      'use strict';
      function n(e) {
        return (n =
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
          return n;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [3121, 1866, 1645, 8218, 3911, 1277, 1271, 1447, 2971, 7023, 1744],
      function () {
        return e((e.s = 71718));
      },
    ),
      (_N_E = e.O());
  },
]);
