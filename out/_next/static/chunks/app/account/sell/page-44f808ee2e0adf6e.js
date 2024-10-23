(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2318],
  {
    35783: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 94764));
    },
    94764: function (e, s, t) {
      'use strict';
      t.r(s),
        t.d(s, {
          default: function () {
            return R;
          },
        });
      var a = t(57437),
        l = t(51446),
        i = t(62121),
        n = t(52551),
        c = t(8127),
        r = t(66496),
        o = t(29629),
        d = t(9139),
        m = t(964),
        x = t(93908),
        u = t(71272),
        h = t(7337),
        p = t(72354),
        j = t(55448),
        g = t(68937),
        f = t(41733),
        v = t(1271),
        _ = t(65647),
        b = t(2265),
        N = t(69077),
        y = t(57603),
        w = t(24842),
        C = t(65703),
        S = t(90089),
        k = t(16463),
        P = t(91617),
        B = t(48494);
      function R() {
        let { t: e } = (0, S.$G)(),
          s = (0, k.useRouter)(),
          [t, R] = (0, b.useState)(!1),
          {
            assets_name: T,
            assets_type: Z,
            list: O,
            reset: z,
            unit: D,
            amountUnit: E,
            changeAmountUnit: U,
            changeUnit: A,
            changePrice: G,
          } = (0, _.JU)((e) => e),
          [K, L] = (0, b.useState)(!1),
          [X, I] = (0, b.useState)();
        console.log('app.account.sell.page: list: ', O);
        let { network: J, address: M, btcWallet: V } = (0, w.$)((e) => e),
          { data: Y, isLoading: $ } = (0, P.ZP)(
            'getAssetsSummary-'.concat(T, '-').concat(Z, '-').concat(J),
            () => {
              console.log('app.account.sell.page: ticker: ', T);
              try {
                return (0, C.zU)({ assets_name: T, assets_type: Z });
              } catch (e) {
                console.log('app.account.sell.page: getAssetsSummary err: ', e);
              }
            },
            { revalidateOnFocus: !1, revalidateOnReconnect: !1 },
          ),
          F = (0, b.useMemo)(() => {
            var e;
            return (
              (null == Y
                ? void 0
                : null === (e = Y.data) || void 0 === e
                  ? void 0
                  : e.summary) || {}
            );
          }, [Y]);
        (0, b.useEffect)(() => {
          if (F.lowest_price)
            for (let e of O)
              'btc' === D
                ? G(e.utxo, (0, N.Ay)(parseInt(F.lowest_price)).toString())
                : G(e.utxo, parseInt(F.lowest_price).toString());
        }, [F]),
          (0, B.Z)(
            () => {
              if (K) {
                let e = X ? Number(X) : 0;
                for (let s = 0; s < O.length; s++) G(O[s].utxo, e.toString());
              }
            },
            300,
            [K, X],
          );
        let H = async () => {
            for (let s = 0; s < O.length; s++) {
              let { price: t, assets_list: a } = O[s];
              if (330 > Number('btc' === E ? (0, N.g)(t) : t)) {
                v.ZP.error({
                  message: e('notification.list_failed_title'),
                  description: e('notification.list_failed_min_amount'),
                });
                return;
              }
            }
            R(!0);
            try {
              let t = await (0, N.c8)({
                inscriptionUtxos: O,
                address: M,
                network: J,
                unit: E,
              });
              console.log('Batch Order PSBT', t);
              let a = await (null == V ? void 0 : V.signPsbt(t));
              if ((console.log('Batch Order raw', a), a)) {
                let t = (0, N.T1)(a, J),
                  l = O.map((e, s) => {
                    let a;
                    let { assets_list: l } = e;
                    return {
                      assets_name: (a =
                        'ticker' === Z
                          ? l.find((e) => e.assets_name === T)
                          : l.find((e) => e.assets_type === Z)).assets_name,
                      assets_type: a.assets_type,
                      raw: t[s],
                    };
                  }),
                  i = await (0, C.wC)({ address: M, orders: l });
                200 === i.code
                  ? (v.ZP.success({
                      message: e('notification.list_success_title'),
                      description: e('notification.list_success_description'),
                    }),
                    z(),
                    s.back())
                  : v.ZP.error({
                      message: e('notification.list_failed_title'),
                      description: i.msg,
                    });
              }
              R(!1);
            } catch (s) {
              R(!1),
                console.error('List failed', s),
                v.ZP.error({
                  message: e('notification.list_failed_title'),
                  description: s.message,
                });
            }
          },
          q = (e) => {},
          Q = (e) => {
            e !== D && e && A(e);
          },
          W = (e) => {
            console.log('unit change', e), e !== E && e && U(e);
          },
          ee = (0, b.useMemo)(
            () =>
              O.reduce((e, s) => {
                let t = new y.t(e),
                  a = new y.t(Number(s.price));
                return t.plus(a).toNumber();
              }, 0) || 0,
            [O],
          );
        return (0, a.jsx)('div', {
          className: 'py-2',
          children: (0, a.jsxs)('div', {
            className: 'md:flex justify-between gap-4',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex-1 mb-2',
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'flex flex-col gap-4 mb-2 md:flex-row md:items-center  ',
                    children: [
                      $
                        ? (0, a.jsx)(l.c, {})
                        : (0, a.jsxs)('div', {
                            className: 'flex items-center gap-6',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'flex items-center gap-4',
                              }),
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-4',
                                children: [
                                  (0, a.jsxs)('span', {
                                    children: [e('common.lowest_price'), ':'],
                                  }),
                                  (0, a.jsxs)('span', {
                                    children: [F.lowest_price, ' Sats'],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      (0, a.jsxs)('div', {
                        className: 'w-full flex items-center gap-1 sm:w-80',
                        children: [
                          (0, a.jsx)(i.Y, {
                            type: 'number',
                            placeholder: 'Custome Global Unit Price',
                            value: X,
                            onValueChange: (e) => {
                              L(!0), I(e);
                            },
                          }),
                          (0, a.jsxs)(n.g, {
                            size: 'sm',
                            color: 'primary',
                            isDisabled: $,
                            selectedKeys: [D],
                            onChange: (e) => Q(e.target.value),
                            className: 'w-28',
                            children: [
                              (0, a.jsx)(
                                c.R,
                                { value: 'btc', children: 'BTC' },
                                'btc',
                              ),
                              (0, a.jsx)(
                                c.R,
                                { value: 'sats', children: 'sats' },
                                'sats',
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)(r.b, {
                    'aria-label': 'Example static collection table',
                    children: [
                      (0, a.jsxs)(o.J, {
                        children: [
                          (0, a.jsx)(d.j, {
                            className: 'text-sm md:text-base',
                            children: e('common.item'),
                          }),
                          (0, a.jsx)(d.j, {
                            className: 'text-sm md:text-base ',
                            children: (0, a.jsxs)('div', {
                              className: 'flex  items-center gap-2',
                              children: [
                                e('common.sell_unit_price'),
                                (0, a.jsxs)(n.g, {
                                  size: 'sm',
                                  color: 'primary',
                                  isDisabled: $,
                                  selectedKeys: [D],
                                  onChange: (e) => Q(e.target.value),
                                  className: 'w-28',
                                  children: [
                                    (0, a.jsx)(
                                      c.R,
                                      { value: 'btc', children: 'BTC' },
                                      'btc',
                                    ),
                                    (0, a.jsx)(
                                      c.R,
                                      { value: 'sats', children: 'sats' },
                                      'sats',
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(d.j, {
                            className: 'text-sm md:text-base',
                            children: (0, a.jsxs)('div', {
                              className: 'flex  items-center gap-2',
                              children: [
                                e('common.amount'),
                                (0, a.jsxs)(n.g, {
                                  size: 'sm',
                                  color: 'primary',
                                  isDisabled: $,
                                  selectedKeys: [E],
                                  onChange: (e) => W(e.target.value),
                                  className: 'w-28',
                                  children: [
                                    (0, a.jsx)(
                                      c.R,
                                      { value: 'btc', children: 'BTC' },
                                      'btc',
                                    ),
                                    (0, a.jsx)(
                                      c.R,
                                      { value: 'sats', children: 'sats' },
                                      'sats',
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(m.y, {
                        children: O.map((s, t) => {
                          var l;
                          return (0, a.jsxs)(
                            x.g,
                            {
                              children: [
                                (0, a.jsxs)(u.X, {
                                  children: [
                                    (0, a.jsx)('div', {
                                      className:
                                        'mb-2 flex flex-wrap items-center gap-4',
                                      children:
                                        null === (l = s.assets_list) ||
                                        void 0 === l
                                          ? void 0
                                          : l.map((s) =>
                                              (0, a.jsxs)(
                                                'div',
                                                {
                                                  children: [
                                                    (0, a.jsxs)('div', {
                                                      children: [
                                                        (0, a.jsxs)('span', {
                                                          className:
                                                            'text-gray-400',
                                                          children: [
                                                            'ns' ===
                                                            s.assets_type
                                                              ? 'Name'
                                                              : 'Ticker',
                                                            '：',
                                                          ],
                                                        }),
                                                        (0, a.jsx)('span', {
                                                          children:
                                                            s.assets_name,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, a.jsxs)('div', {
                                                      children: [
                                                        (0, a.jsxs)('span', {
                                                          className:
                                                            'text-gray-400',
                                                          children: [
                                                            e(
                                                              'common.asset_num',
                                                            ),
                                                            '：',
                                                          ],
                                                        }),
                                                        (0, a.jsx)('span', {
                                                          children: s.amount,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                s.assets_name,
                                              ),
                                            ),
                                    }),
                                    (0, a.jsxs)('div', {
                                      children: [
                                        (0, a.jsx)('span', {
                                          className: 'text-gray-400 mr-4',
                                          children: 'Sats:',
                                        }),
                                        s.value,
                                      ],
                                    }),
                                    (0, a.jsxs)('div', {
                                      className: 'flex items-center',
                                      children: [
                                        (0, a.jsx)('span', {
                                          className: 'text-gray-400',
                                          children: 'Utxo：',
                                        }),
                                        (0, a.jsx)(h.Z, {
                                          codeString:
                                            null == s ? void 0 : s.utxo,
                                          className:
                                            'bg-transparent text-gray-500',
                                          symbol: '',
                                          size: 'lg',
                                          variant: 'flat',
                                          children: (0, a.jsx)('span', {
                                            className: 'font-thin',
                                            children: (0, N.NH)(
                                              null == s ? void 0 : s.utxo,
                                              6,
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(u.X, {
                                  children: (0, a.jsx)(i.Y, {
                                    type: 'number',
                                    placeholder: '0.00',
                                    isDisabled: $,
                                    value: O[t].unit_price,
                                    onValueChange: (e) => {
                                      L(!1), I(void 0), G(s.utxo, e);
                                    },
                                    onBlur: () => q(s.utxo),
                                  }),
                                }),
                                (0, a.jsx)(u.X, {
                                  className: 'text-center',
                                  children: s.price,
                                }),
                              ],
                            },
                            s.utxo,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(p.w, {
                className: 'sm:w-60 ',
                children: [
                  (0, a.jsxs)(j.G, {
                    children: [
                      (0, a.jsxs)('div', {
                        children: [e('common.total'), ': ', O.length],
                      }),
                      (0, a.jsxs)('div', {
                        children: [
                          e('common.your_profits'),
                          ': ',
                          ee,
                          ' ',
                          'btc' === E ? 'BTC' : 'Sats',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(g.i, {
                    children: (0, a.jsx)(f.A, {
                      isDisabled: ee <= 0,
                      color: 'primary',
                      isLoading: t,
                      className: 'w-full',
                      onClick: H,
                      children: e('buttons.list_sale'),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 148, 9189,
        9544, 3368, 4621, 42, 518, 1447, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 35783));
      },
    ),
      (_N_E = e.O());
  },
]);
