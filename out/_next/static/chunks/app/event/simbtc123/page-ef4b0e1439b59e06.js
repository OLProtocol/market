(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6518],
  {
    28907: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 41273));
    },
    41273: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var n = i(57437),
        r = i(41733),
        l = i(65703),
        o = i(2265),
        s = i(18182),
        a = i(1271),
        c = i(16463),
        d = i(24842),
        u = i(90089);
      function f() {
        let e = (0, c.useSearchParams)(),
          { i18n: t, t: i } = (0, u.$G)(),
          f = e.get('id') || 1,
          { address: m } = (0, d.$)(),
          [v, w] = (0, o.useState)(!1),
          [y, h] = (0, o.useState)(!1),
          [b, p] = (0, o.useState)(!1),
          [_, g] = (0, o.useState)(!1),
          [x, j] = (0, o.useState)({}),
          [N, S] = (0, o.useState)({}),
          k = (0, o.useMemo)(
            () =>
              'en' === t.language
                ? [
                    {
                      activity_id: 1,
                      title:
                        '\uD83D\uDD25 Randomly Select 1,000 Winners for $RarePizza Airdrop!',
                      time: '2024/10/1 ~ 2024/10/7',
                      desc: 'Complete the task to qualify for a lucky draw, where 1,000 winners will be randomly selected! The list of winners will be announced on Twitter after the event ends. Each winning participant will receive 100 $RarePizza airdropped once the SAT20 protocol L2 (Lighting Channel + SatoshiNet) officially launches. Don’t miss out—act fast for a chance to win!',
                      twitter_id: 'SimBtc123',
                      tweet_id: '1838568142236455423',
                    },
                  ]
                : [
                    {
                      activity_id: 1,
                      title:
                        '\uD83D\uDD25 随机抽 1000 名幸运者，赢 $RarePizza 空投！',
                      time: '2024/10/1 ~ 2024/10/7',
                      desc: '完成任务即有机会参与抽奖，1000 名幸运儿将随机抽出！活动结束后，我们将在推特公布中奖名单。中奖用户将在 SAT20 协议 L2（Lighting Channel + SatoshiNet）正式上线后，获得 100 个 $RarePizza 空投！机会有限，快来拼手速赢取空投吧！',
                      twitter_id: 'SimBtc123',
                      tweet_id: '1838568142236455423',
                    },
                  ],
            [t.language],
          ),
          P = (0, o.useMemo)(() => k.find((e) => e.activity_id == f), [f, k]),
          z = async () => {
            let [e, t] = await (0, s.vU)(l.tg)({ address: m });
            200 === t.code && (location.href = t.data.authorization_url);
          },
          D = async () => {
            w(!0), S(!1);
            let [e, t] = await (0, s.vU)(l.yr)({ address: m });
            if ((w(!1), e)) {
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
          C = async () => {
            w(!0), j({});
            let [e, t] = await (0, s.vU)(l.F_)({
              address: m,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            w(!1), e && console.error(e), 200 === t.code && j(t.data);
          };
        (0, o.useEffect)(() => {
          m && (D(), C());
        }, [m]);
        let L = async () => {
            window.open(
              'https://twitter.com/intent/follow?screen_name='.concat(
                null == P ? void 0 : P.twitter_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, s.vU)(l.UK)({
              address: m,
              activity_name: 'following',
              result: 1,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...x, following: 1 });
          },
          R = async () => {
            window.open(
              'https://twitter.com/intent/retweet?tweet_id='.concat(
                null == P ? void 0 : P.tweet_id,
              ),
              '_blank',
            );
            let [e, t] = await (0, s.vU)(l.UK)({
              address: m,
              activity_name: 'retweets',
              activity_id: null == P ? void 0 : P.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...x, retweets: 1 });
          },
          U = async () => {
            window.open(
              'https://twitter.com/intent/like?tweet_id=${currentData?.tweet_id}',
              '_blank',
            );
            let [e, t] = await (0, s.vU)(l.UK)({
              address: m,
              activity_name: 'flowers',
              activity_id: null == P ? void 0 : P.activity_id,
              result: 1,
            });
            if (e) {
              console.error(e);
              return;
            }
            200 === t.code && j({ ...x, flowers: 1 });
          },
          Z = async () => {
            let [e, t] = await (0, s.vU)(l.F_)({
              address: m,
              activity_id: null == P ? void 0 : P.activity_id,
            });
            w(!1);
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
                  className: 'md:text-3xl font-bold mb-4',
                  children: null == P ? void 0 : P.title,
                }),
                (0, n.jsxs)('p', {
                  className: 'text-sm',
                  children: ['Time:', null == P ? void 0 : P.time],
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, n.jsx)('h2', {
                  className: 'md:text-2xl font-bold mb-4',
                  children: 'Step-by-step Task Completion',
                }),
                (0, n.jsx)('div', {
                  className: 'border border-gray-700 rounded-lg p-4',
                  children: null == P ? void 0 : P.desc,
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'mb-6',
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'md:text-2xl font-bold mb-4 flex justify-between items-center',
                  children: [
                    (0, n.jsx)('span', {
                      children: 'Complete Follow, Like, and Retweet',
                    }),
                    (0, n.jsx)(r.A, {
                      size: 'sm',
                      color: 'default',
                      radius: 'full',
                      isLoading: v,
                      isDisabled: null == N ? void 0 : N.id,
                      onClick: z,
                      children: (null == N ? void 0 : N.id)
                        ? 'Bound successfully '.concat(N.name)
                        : 'Bind X',
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'mb-4 border border-gray-700 rounded-lg p-4',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        'Follow @',
                        null == P ? void 0 : P.twitter_id,
                        ' on X (formerly Twitter)',
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: L,
                        size: 'sm',
                        isLoading: v || y,
                        isDisabled:
                          1 === x.following || !(null == N ? void 0 : N.id),
                        color: 'default',
                        radius: 'full',
                        children: 'Follow',
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
                        'Retweet @',
                        null == P ? void 0 : P.twitter_id,
                        " 's post",
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: R,
                        size: 'sm',
                        color: 'default',
                        isLoading: v || b,
                        isDisabled:
                          1 === x.retweets || !(null == N ? void 0 : N.id),
                        radius: 'full',
                        children: 'Retweet',
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
                        'Like @',
                        null == P ? void 0 : P.twitter_id,
                        " 's post",
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex items-center gap-4',
                      children: (0, n.jsx)(r.A, {
                        onClick: U,
                        size: 'sm',
                        color: 'default',
                        isLoading: v || _,
                        isDisabled:
                          1 === x.flowers || !(null == N ? void 0 : N.id),
                        radius: 'full',
                        children: 'Like',
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
                    onClick: Z,
                    children: 'Verify Eligibility',
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
        return e((e.s = 28907));
      },
    ),
      (_N_E = e.O());
  },
]);
