(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1497],
  {
    79788: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 18102));
    },
    18102: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return ej;
          },
        });
      var s = l(57437),
        a = l(91617),
        n = l(86778),
        o = l(85908),
        r = l(41733),
        i = l(72354),
        c = l(55448),
        d = l(65703),
        u = l(91142),
        m = l(34191),
        x = l(56803),
        v = l(1271),
        h = l(24842),
        f = l(2265),
        g = l(62121),
        p = l(10847),
        y = l(86943),
        b = l(33822),
        j = l(70480),
        _ = l(70148),
        N = l(65647),
        w = l(19355),
        k = l(75945),
        C = l(51446),
        S = l(57603),
        M = l(59430),
        A = l(90089);
      let z = (e) => {
        let {
            splitDummyBol: t,
            calcLoading: l,
            networkFee: a,
            serviceFee: n,
            onRemove: o,
          } = e,
          { t: i } = (0, A.$G)(),
          { network: c } = (0, h.$)((e) => e),
          { list: d, remove: u } = (0, N.cp)(),
          [m, x] = (0, f.useState)({ value: 1, type: 'Normal' }),
          v = (0, f.useMemo)(
            () =>
              d.reduce((e, t) => {
                let l = new S.t(e),
                  s = new S.t(Number(t.price));
                return l.plus(s).toNumber();
              }, 0) || 0,
            [d],
          ),
          g = async (e) => {
            await o(e);
          };
        return (0, s.jsxs)('div', {
          className:
            'fixed max-w-full w-full sm:w-96 bottom-28 sm:bottom-20 right-0 bg-gray-100 dark:bg-slate-900 rounded-t-lg px-4 z-50',
          children: [
            (0, s.jsxs)('div', {
              className: 'h-10 flex items-center justify-between font-bold',
              children: [
                (0, s.jsxs)('span', { children: ['Cart (', d.length, ')'] }),
                (0, s.jsxs)('span', { children: ['Total: ', v, ' BTC'] }),
              ],
            }),
            (0, s.jsx)(k.j, { className: 'my-2' }),
            (0, s.jsx)('div', {
              className: 'max-h-96 overflow-y-auto pr-2',
              children: d.map((e) =>
                (0, s.jsxs)(
                  'div',
                  {
                    className:
                      'flex items-center justify-between py-2 min-h-14',
                    children: [
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('div', {
                            className: 'mb-1',
                            children: e.assets.map((e) =>
                              (0, s.jsx)(
                                'div',
                                { children: e.ticker },
                                e.ticker,
                              ),
                            ),
                          }),
                          (0, s.jsxs)('div', {
                            className: 'flex items-center gap-2 text-sm',
                            children: [
                              (0, s.jsx)(w.JO, {
                                icon: 'cryptocurrency-color:btc',
                                className: '',
                              }),
                              e.price,
                              ' BTC',
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(r.A, {
                        isIconOnly: !0,
                        size: 'sm',
                        onClick: () => g(e.utxo),
                        children: (0, s.jsx)(w.JO, {
                          icon: 'mdi:close',
                          className: 'text-white text-xl',
                        }),
                      }),
                    ],
                  },
                  e.order_id,
                ),
              ),
            }),
            t &&
              (0, s.jsxs)('div', {
                children: [
                  (0, s.jsx)(k.j, { className: 'my-2' }),
                  (0, s.jsx)('div', {
                    className: 'text-xs text-gray-300',
                    children: i('common.split_dummy_hint'),
                  }),
                ],
              }),
            (0, s.jsx)(k.j, { className: 'my-2' }),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)('div', {}),
                (0, s.jsxs)('div', {
                  className: 'flex justify-between items-center',
                  children: [
                    (0, s.jsx)('span', { children: i('common.network_fee') }),
                    l
                      ? (0, s.jsx)(C.c, { size: 'sm', color: 'primary' })
                      : (0, s.jsxs)('span', {
                          children: ['~ ', (0, M.Ay)(a), ' BTC'],
                        }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'flex justify-between items-center',
                  children: [
                    (0, s.jsx)('span', { children: i('common.service_fee') }),
                    (0, s.jsxs)('span', { children: [(0, M.Ay)(n), ' BTC'] }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var U = l(77634),
        P = l(48494);
      let Z = (e) => {
        let {
            list: t,
            assets_name: l,
            assets_type: n,
            selectedSource: o,
            onSuccess: i,
            onClose: c,
          } = e,
          u = 0;
        u = Number('1000');
        let [m, x] = (0, f.useState)(!1),
          [k, C] = (0, f.useState)(),
          [Z, F] = (0, f.useState)([]),
          [O, B] = (0, f.useState)(!1),
          [D, L] = (0, f.useState)(!1),
          { list: R, setList: E, remove: $ } = (0, N.cp)(),
          [T, J] = (0, f.useState)(R.length || 0),
          { t: I } = (0, A.$G)(),
          [H, V] = (0, f.useState)(!0),
          [G, X] = (0, f.useState)([]),
          [K, W] = (0, f.useState)(0),
          { feeRate: Y, btcHeight: q } = (0, N.Ee)((e) => e),
          { address: Q, network: ee, publicKey: et } = (0, h.$)(),
          el = (0, f.useMemo)(() => R.map((e) => e.order_id), [R]),
          { data: es, isLoading: ea } = (0, a.ZP)(
            'getUtxoByValue-'.concat(Q, '-').concat(ee),
            () => (0, d.wt)({ address: Q, network: ee, value: 0 }),
          ),
          {
            data: en,
            isMutating: eo,
            trigger: er,
          } = (0, U.Z)(
            'getUtxoByValue-'
              .concat(Q, '-')
              .concat(ee, '-')
              .concat(JSON.stringify(el)),
            () => (0, d.Iu)({ address: Q, orderIds: el }),
          ),
          ei = (0, f.useMemo)(() => R.length || 0, [R]),
          ec = (0, f.useMemo)(() => ei + 1, [ei]);
        (0, f.useEffect)(() => {
          if ((null == en ? void 0 : en.code) === 200) {
            var e, t, l;
            F(
              (null === (e = en.data) || void 0 === e
                ? void 0
                : e.filter((e) => !!e.raw)) || [],
            ),
              null === (t = en.data) || void 0 === t || t.length;
            for (
              let e = 0;
              e < (null === (l = en.data) || void 0 === l ? void 0 : l.length);
              e++
            ) {
              let { raw: t, order_id: l } = en.data[e];
              t || 'Magisat' === o || $(l);
            }
          }
        }, [en]);
        let ed = (0, f.useMemo)(
            () =>
              Math.min(
                t.filter((e) => 0 === e.locked && e.address !== Q).length,
                32,
              ),
            [t, o],
          ),
          eu = (0, f.useMemo)(
            () => (null == es ? void 0 : es.data) || [],
            [es],
          ),
          em = (0, f.useMemo)(() => eu.filter((e) => e.value === M.pz), [eu]),
          ex = (0, f.useMemo)(() => ec > em.length, [ec, em]),
          ev = (0, f.useMemo)(() => eu.filter((e) => e.value !== M.pz), [eu]),
          eh = (0, f.useMemo)(
            () => ev.reduce((e, t) => e + t.value, 0) || 0,
            [eu],
          ),
          ef = (0, f.useMemo)(
            () =>
              R.reduce((e, t) => {
                let l = new S.t(e),
                  s = new S.t(Number((0, M.g)(t.price)));
                return l.plus(s).toNumber();
              }, 0) || 0,
            [R],
          ),
          eg = (0, f.useMemo)(() => {
            if ('Magisat' === o || ('btc' === l && 'ns' === n && q < 863e3))
              return 0;
            let e = new S.t(u);
            return R.reduce((e, t) => {
              let l = new S.t(Number((0, M.g)(t.price)));
              return (l = l.mul(new S.t(0.01)).ceil()), e.plus(l);
            }, new S.t(0))
              .plus(e)
              .toNumber();
          }, [R, q, l, n, o]),
          ep = (0, f.useMemo)(() => eh > ef + eg, [eh, ef, eg]),
          ey = async () => {
            let e;
            let t = (null == em ? void 0 : em.slice(0, ec)) || [],
              l = 1812 * Y.value,
              s = ec - t.length,
              a = [];
            if (s > 0) {
              let { utxos: n } = (0, M.zU)(eu, l + 330 + M.pz * s),
                { dummyUtxos: o, balanceUtxo: r } = await (0, M.S2)({
                  utxos: n,
                  feeRate: Y.value,
                  num: s,
                });
              (a = n), (e = r), t.push(...o);
            }
            return { dummyUtxos: t, balanceUtxo: e, spendedUtxos: a };
          },
          eb = async () => {
            if (D || 0 === R.length) return;
            if (!ep) {
              W(
                Math.ceil(
                  (170 * (R.length + 1) + 34 * (2 * R.length + ec + 2) + 10) *
                    Y.value,
                ),
              ),
                L(!1);
              return;
            }
            L(!0);
            let e = null == em ? void 0 : em.slice(0, ec),
              t = (1700 + 34 * (3 + ec) + 10) * Y.value,
              { utxos: l } = (0, M.zU)(ev, t + 330 + ef + eg + M.pz * ec),
              s = await (0, M.s8)({
                raws: Z,
                utxos: l,
                dummyUtxos: e,
                serviceFee: eg,
                feeRate: Y.value,
                network: ee,
              });
            L(!1), W(s);
          };
        (0, f.useEffect)(() => {
          eb();
        }, [ec, eg, em, ev, ef, Y.value]),
          (0, P.Z)(
            () => {
              console.log('lockTrigger'), console.log(el), el.length && er();
            },
            1e4,
            [el],
          ),
          (0, f.useEffect)(() => {
            J(R.length);
          }, [R]),
          (0, P.Z)(
            () => {
              G.length && (0, d.wB)({ address: Q, orderIds: G });
            },
            1e3,
            [G],
          ),
          (0, P.Z)(
            () => {
              let e = structuredClone(R),
                l = e.length;
              if ((X([]), T < l))
                X(e.slice(T, l).map((e) => e.order_id)), (e = e.slice(0, T));
              else if (T > l)
                for (let l = 0; l < t.length; l++) {
                  let s = t[l];
                  if (e.length >= T) break;
                  0 === s.locked &&
                    s.order_source === o &&
                    s.address !== Q &&
                    -1 === e.findIndex((e) => e.order_id === s.order_id) &&
                    (m ? s.price <= Number(k) && e.push(s) : e.push(s));
                }
              E(e);
            },
            300,
            [T],
          );
        let ej = async (e) => {
            try {
              await (0, d.n3)({ address: Q, order_id: e.order_id }), $(e.utxo);
            } catch (e) {
              v.ZP.error({
                message: I('notification.order_unlock_failed_title'),
                description: e.message,
              });
            }
          },
          e_ = async (e) => {
            let t = R.find((t) => t.utxo === e);
            t && (await ej(t));
          },
          eN = async () => {
            try {
              if (!eu.length) {
                v.ZP.error({
                  message: I('notification.order_buy_failed_title'),
                  description: I('notification.order_buy_failed_description_4'),
                });
                return;
              }
              B(!0);
              let {
                  dummyUtxos: e,
                  balanceUtxo: t,
                  spendedUtxos: l,
                } = await ey(),
                s = ev.filter(
                  (e) => !l.find((t) => t.txid === e.txid && t.vout === e.vout),
                );
              console.log('spendableUtxos', s), t && s.push(t);
              let a = (1700 + 34 * (3 + 3 * ec) + 10) * Y.value,
                { utxos: n } = (0, M.zU)(s, a + 330 + ef + eg + M.pz * ec),
                r = '';
              if (
                (console.log('selectedSource', o),
                'Magisat' === o
                  ? await (0, M.Ec)({
                      order_ids: R.map((e) => e.order_id),
                      fee_rate_tier: 'halfHourFee',
                    })
                  : (r = await (0, M.Us)({
                      raws: Z,
                      utxos: n,
                      dummyUtxos: e,
                      serviceFee: eg,
                      feeRate: Y.value,
                    })),
                !r)
              ) {
                v.ZP.error({
                  message: I('notification.order_buy_failed_title'),
                  description: I('notification.order_buy_failed_description_1'),
                }),
                  B(!1);
                return;
              }
              let c = R.map((e) => e.order_id),
                u = await (0, d.tq)({ address: Q, order_ids: c, raw: r });
              B(!1),
                200 === u.code
                  ? (v.ZP.success({
                      message: I('notification.order_buy_success_title'),
                      description: I(
                        'notification.order_buy_success_description',
                      ),
                    }),
                    null == i || i())
                  : v.ZP.error({
                      message: I('notification.order_buy_failed_title'),
                      description: u.msg,
                    });
            } catch (e) {
              B(!1),
                console.log('buy order error', e),
                v.ZP.error({
                  message: I('notification.order_buy_failed_title'),
                  description: e,
                }),
                console.error(e);
            } finally {
              B(!1);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            H &&
              R.length > 0 &&
              (0, s.jsx)(z, {
                splitDummyBol: ex,
                networkFee: K,
                serviceFee: eg,
                calcLoading: D,
                onRemove: e_,
              }),
            (0, s.jsx)('div', {
              className:
                'batch-sell-footer fixed bottom-0 w-full h-28 sm:h-20 left-0 dark:bg-slate-900 bg-gray-100 z-[99]',
              children: (0, s.jsxs)('div', {
                className:
                  'flex gap-2 justify-center sm:justify-between items-center flex-col sm:flex-row w-full h-full px-4',
                children: [
                  (0, s.jsx)('div', {
                    className: 'sm:flex-1 flex items-center flex-wrap gap-4',
                    children: (0, s.jsxs)('div', {
                      className: 'flex items-center gap-4 w-60',
                      children: [
                        (0, s.jsx)(g.Y, {
                          type: 'number',
                          className: 'w-20',
                          value: T.toString(),
                          onValueChange: (e) => J(Number(e)),
                        }),
                        (0, s.jsx)(p.L, {
                          size: 'sm',
                          step: 1,
                          minValue: 0,
                          maxValue: ed,
                          value: [T],
                          className: 'flex-1',
                          onChange: (e) => {
                            J(isNaN(e[0]) ? 0 : e[0]);
                          },
                        }),
                        (0, s.jsxs)(y.j, {
                          placement: 'top',
                          children: [
                            (0, s.jsx)(b.b, {
                              children: (0, s.jsx)(r.A, {
                                variant: 'light',
                                isIconOnly: !0,
                                color: 'primary',
                                'aria-label': 'Like',
                                children: (0, s.jsx)(w.JO, {
                                  icon: 'solar:settings-bold',
                                  className: 'text-xl',
                                }),
                              }),
                            }),
                            (0, s.jsx)(j.g, {
                              children: (0, s.jsxs)('div', {
                                className: 'flex items-center gap-6 py-2 px-1',
                                children: [
                                  (0, s.jsx)(_.K, {
                                    size: 'sm',
                                    className: 'text-xs',
                                    isSelected: m,
                                    onValueChange: (e) => x(e),
                                    children: '最高扫货价格',
                                  }),
                                  (0, s.jsx)(g.Y, {
                                    classNames: { input: 'text-right' },
                                    size: 'sm',
                                    isDisabled: !m,
                                    type: 'number',
                                    className: 'w-28',
                                    value: k,
                                    onValueChange: (e) => {
                                      console.log(e), C(e);
                                    },
                                    endContent: 'BTC',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex gap-2 items-center',
                    children: [
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'mb-1 flex items-center gap-2',
                            children: [
                              (0, s.jsx)(w.JO, {
                                icon: 'cryptocurrency-color:btc',
                                className: '',
                              }),
                              (0, M.Ay)(ef),
                              ' BTC',
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            className: 'text-xs text-right  '.concat(
                              ep ? 'text-gray-400' : 'text-red-500',
                            ),
                            children: [
                              I('common.balance'),
                              ':\xa0\xa0',
                              (0, M.Ay)(eh),
                              ' ',
                              'BTC',
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(r.A, {
                        className: 'btn btn-primary',
                        color: 'primary',
                        isDisabled: !ep || !R.length,
                        isLoading: O || ea,
                        onClick: eN,
                        children: I('common.buy'),
                      }),
                      (0, s.jsx)(r.A, {
                        isIconOnly: !0,
                        color: 'danger',
                        onClick: () => V(!H),
                        children: (0, s.jsx)(w.JO, {
                          icon: 'mdi:cart',
                          className: 'text-white text-2xl',
                        }),
                      }),
                      (0, s.jsx)(r.A, {
                        isIconOnly: !0,
                        onClick: c,
                        children: (0, s.jsx)(w.JO, {
                          icon: 'mdi:close',
                          className: 'text-white text-2xl',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var F = l(79386),
        O = l(68937),
        B = l(19637),
        D = l(69077),
        L = l(76734);
      let R = (e) => {
          let {
              asset: t,
              assets_type: l,
              order_source: a,
              othersAssets: o,
              utxo: r,
            } = e,
            i = (e, t) =>
              !!e && (!!t || !['text/plain'].some((t) => e.indexOf(t) > -1));
          return (0, s.jsxs)('div', {
            className:
              'flex-1 text-xs tracking-widest antialiased md:text-base',
            children: [
              (0, s.jsxs)('div', {
                className:
                  'flex-1 justify-center h-full overflow-hidden top-1 left-1',
                children: [
                  (0, s.jsx)('div', {
                    className: 'absolute items-center inset-0 z-10',
                    children:
                      (null == t ? void 0 : t.assets_type) === 'exotic'
                        ? (0, s.jsx)(n.J, {
                            src: '/raresats/'.concat(
                              null == t ? void 0 : t.assets_name,
                              '.svg',
                            ),
                            alt: 'logo',
                            className:
                              'w-16 h-16 md:w-28 md:h-28 top-9 left-[44px] md:top-14 md:left-[72px]',
                          })
                        : i(
                            null == t ? void 0 : t.content_type,
                            null == t ? void 0 : t.delegate,
                          ) &&
                          (0, s.jsx)('div', {
                            className: 'h-full w-full',
                            children: (0, s.jsx)(B.A, {
                              defaultImage: '/ordx-utxo-content-default.jpg',
                              inscriptionId:
                                null == t ? void 0 : t.inscription_id,
                              utxo: r,
                            }),
                          }),
                  }),
                  (0, s.jsx)(E, { asset: t, assets_type: l, showContent: i }),
                ],
              }),
              'exotic' === l &&
                (0, s.jsx)('div', {
                  className:
                    'flex gap-1 absolute bottom-2 px-1 overflow-x-auto w-full left-0 justify-center',
                  children:
                    null == o
                      ? void 0
                      : o.map((e, t) =>
                          (0, s.jsx)(
                            n.J,
                            {
                              src: '/raresats/'.concat(
                                null == e ? void 0 : e.assets_name,
                                '.svg',
                              ),
                              alt: 'icon',
                              className: 'w-4 h-4 md:w-5 md:h-5',
                            },
                            t,
                          ),
                        ),
                }),
              'ns' !== l &&
                (0, s.jsx)('div', {
                  className:
                    'left-0 top-0 flex absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100 z-10',
                  children: null == t ? void 0 : t.assets_name,
                }),
            ],
          });
        },
        E = (e) => {
          let { asset: t, assets_type: l, showContent: a } = e;
          return (0, s.jsx)(s.Fragment, {
            children: a(
              null == t ? void 0 : t.content_type,
              null == t ? void 0 : t.delegate,
            )
              ? (0, s.jsx)('section', {
                  className:
                    'text-center font-mono absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end',
                  children: (0, s.jsx)('p', {
                    className: 'font-medium text-2xl md:text-3xl mb-1',
                    children: (0, D.ic)(null == t ? void 0 : t.amount),
                  }),
                })
              : (0, s.jsxs)('section', {
                  className:
                    'text-center pt-10 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-20',
                  children: [
                    'ns' === l
                      ? (0, s.jsx)('p', {
                          className:
                            'font-medium pt-5 text-lg md:text-xl md:pt-6',
                          children: null == t ? void 0 : t.assets_name,
                        })
                      : 'exotic' === l
                        ? (0, s.jsx)('div', {
                            className:
                              'flex flex-col justify-end font-medium pb-6 text-xl md:text-4xl md:pb-9 h-full',
                            children: (0, s.jsx)('span', {
                              children: (0, D.ic)(
                                null == t ? void 0 : t.amount,
                              ),
                            }),
                          })
                        : (0, s.jsx)('p', {
                            className:
                              'font-medium pt-5 text-2xl md:text-3xl md:pt-6',
                            children: (0, D.ic)(null == t ? void 0 : t.amount),
                          }),
                    'ns' !== l && 'exotic' !== l && (0, s.jsx)($, { asset: t }),
                  ],
                }),
          });
        },
        $ = (e) => {
          let { asset: t } = e;
          return (0, s.jsx)(s.Fragment, {
            children:
              (null == t ? void 0 : t.assets_type) === 'exotic'
                ? (0, s.jsx)('p', {
                    className: 'md:text-sm',
                    children: (0, s.jsxs)('span', {
                      className: 'font-mono text-gray-100',
                      children: [
                        '$',
                        (0, s.jsx)(L.H, {
                          btc:
                            (null == t ? void 0 : t.unit_price) /
                            (null == t ? void 0 : t.unit_amount) /
                            1e8,
                        }),
                        '\xa0 /',
                        null == t ? void 0 : t.assets_name,
                      ],
                    }),
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)('p', {
                        className: 'pt-12 md:pb-2 md:text-sm',
                        children: [
                          (0, s.jsx)('span', {
                            className: 'font-bold text-amber-400',
                            children: (
                              (null == t ? void 0 : t.unit_price) /
                              (null == t ? void 0 : t.unit_amount)
                            ).toFixed(2),
                          }),
                          (0, s.jsxs)('span', {
                            className: 'font-mono text-gray-100',
                            children: [
                              '\xa0sats/',
                              null == t ? void 0 : t.assets_name,
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)('p', {
                        className: 'md:text-sm',
                        children: (0, s.jsxs)('span', {
                          className: 'font-mono text-gray-100',
                          children: [
                            '$',
                            (0, s.jsx)(L.H, {
                              btc:
                                (null == t ? void 0 : t.unit_price) /
                                (null == t ? void 0 : t.unit_amount) /
                                1e8,
                            }),
                            '\xa0 /',
                            null == t ? void 0 : t.assets_name,
                          ],
                        }),
                      }),
                    ],
                  }),
          });
        },
        T = (e) => {
          let { item: t, asset: l, assets_type: a } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)('div', {
                className:
                  'flex-1 flex items-center justify-between gap-4 font-bold mb-1 sm:md-2 '.concat(
                    'ns' === a ? 'mb-4' : '',
                  ),
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex',
                    children: [
                      'BTC' === t.currency &&
                        (0, s.jsx)(w.JO, {
                          icon: 'cryptocurrency-color:btc',
                          className: 'mr-1 mt-0.5',
                        }),
                      (0, s.jsx)('span', {
                        className: 'text-sm text-gray-400',
                        children: null == t ? void 0 : t.price,
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className: 'flex',
                    children: (0, s.jsxs)('span', {
                      className: 'text-sm text-gray-500',
                      children: [
                        '$',
                        (0, s.jsx)(L.H, { btc: null == t ? void 0 : t.price }),
                      ],
                    }),
                  }),
                ],
              }),
              'ns' !== a &&
                (0, s.jsx)('div', {
                  className:
                    'flex-1 flex items-center justify-between gap-4 md:mb-2 text-[10px] md:text-xs mb-1',
                  children: (0, s.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      'BTC' === t.currency &&
                        (0, s.jsx)(w.JO, {
                          icon: 'cryptocurrency-color:btc',
                          className: 'mr-1 mt-0.5',
                        }),
                      (0, s.jsx)('span', {
                        className: 'font-bold text-amber-400',
                        children: (
                          (null == l ? void 0 : l.unit_price) /
                          (null == l ? void 0 : l.unit_amount)
                        ).toFixed(2),
                      }),
                      (0, s.jsxs)('span', {
                        className: 'font-mono text-gray-100',
                        children: [
                          '\xa0sats/',
                          null == l ? void 0 : l.assets_name,
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          });
        };
      var J = l(27517);
      let I = (e) => {
          let {
              item: t,
              canBuy: l,
              showResale: a,
              currentAddress: n,
              onBuy: o,
              onCancelOrder: i,
              t: c,
            } = e,
            [d, u] = (0, f.useState)(!1),
            m = async () => {
              u(!0);
              try {
                await (null == o ? void 0 : o(t));
              } catch (e) {
                console.error('Buy error:', e);
              } finally {
                u(!1);
              }
            };
          return (0, s.jsx)(J.j, {
            className: 'flex-1',
            text: c('buttons.buy'),
            children:
              (null == t ? void 0 : t.address) === n && a
                ? (0, s.jsx)(r.A, {
                    className:
                      'text-tiny h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 uppercase',
                    variant: 'flat',
                    radius: 'sm',
                    startContent:
                      '1' === t.locked
                        ? (0, s.jsx)(w.JO, {
                            icon: 'mdi:lock',
                            className: 'text-lg',
                          })
                        : null,
                    onClick: i,
                    children: c('buttons.remove_sale'),
                  })
                : (0, s.jsx)(r.A, {
                    className:
                      'flex-1 border-none h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 uppercase',
                    variant: 'ghost',
                    size: 'md',
                    isDisabled: !l,
                    isLoading: d,
                    radius: 'sm',
                    startContent:
                      '1' === t.locked
                        ? (0, s.jsx)(w.JO, {
                            icon: 'mdi:lock',
                            className: 'text-lg',
                          })
                        : null,
                    onClick: m,
                    children: c('buttons.buy'),
                  }),
          });
        },
        H = (e) => {
          let { canBuy: t, selected: l, onSelect: a } = e;
          return (0, s.jsx)('div', {
            className:
              'absolute top-0 left-0 w-full h-full z-30 cursor-pointer bg-gray-600 bg-opacity-50',
            onClick: () => (null == a ? void 0 : a(!l)),
            children: (0, s.jsx)('div', {
              className: 'flex absolute top-4 right-4',
              children: (0, s.jsx)(_.K, {
                isDisabled: !t,
                isSelected: l,
                onValueChange: a,
              }),
            }),
          });
        },
        V = (e) => {
          let {
              item: t,
              onBuy: l,
              canSelect: a,
              selected: n,
              selectedSource: o,
              onSelect: r,
              assets_name: d,
              assets_type: u,
              onCancelOrder: m,
              delay: x,
              showResale: v = !0,
            } = e,
            { address: g } = (0, h.$)(),
            { t: p } = (0, A.$G)(),
            y = (0, f.useMemo)(() => {
              var e;
              return (
                (null == t
                  ? void 0
                  : t.assets.find((e) => e.assets_name === d)) ||
                (null == t
                  ? void 0
                  : null === (e = t.assets) || void 0 === e
                    ? void 0
                    : e[0])
              );
            }, [null == t ? void 0 : t.assets, d]),
            b = (0, f.useMemo)(
              () =>
                (null == t ? void 0 : t.assets.length) > 1
                  ? null == t
                    ? void 0
                    : t.assets.filter((e) => e.assets_name !== d)
                  : [],
              [null == t ? void 0 : t.assets, d],
            ),
            j = (0, f.useMemo)(
              () => g && t.address !== g && (!o || o === t.order_source),
              [g, t.address],
            );
          return (0, s.jsxs)(i.w, {
            isPressable: !0,
            radius: 'lg',
            className:
              "forced-colors:hidden border-none w-[10rem] h-[16rem] md:w-[16rem] md:h-[22.6rem] relative hover:border-1 hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]",
            children: [
              a && (0, s.jsx)(H, { canBuy: j, selected: n, onSelect: r }),
              (0, s.jsx)(c.G, {
                className:
                  'radius-lg w-[10rem] h-[10rem] md:w-[16em] md:h-[16rem] top-0 bottom-0 left-0',
                children: (0, s.jsx)(R, {
                  asset: y,
                  othersAssets: b,
                  order_source: null == t ? void 0 : t.order_source,
                  assets_type: u,
                  utxo: null == t ? void 0 : t.utxo,
                }),
              }),
              (0, s.jsxs)(O.i, {
                className:
                  'block item-center bg-gray-800 w-full h-[6rem] md:h-[6.5rem] p-1 sm:p-2',
                children: [
                  (0, s.jsx)(T, { item: t, asset: y, assets_type: u }),
                  (0, s.jsx)(I, {
                    item: t,
                    canBuy: j,
                    showResale: v,
                    currentAddress: g,
                    onBuy: l,
                    onCancelOrder: m,
                    t: p,
                  }),
                ],
              }),
            ],
          });
        };
      var G = l(76801),
        X = l(31847),
        K = l(583),
        W = l(95256),
        Y = l(81887),
        q = l(7337),
        Q = l(41197),
        ee = l(47971),
        et = l(81822),
        el = l(46002),
        es = l(52975);
      let ea = (e) => {
        var t;
        let { visiable: l, item: n, orderRaw: o, onClose: i, onSuccess: c } = e,
          { t: u } = (0, A.$G)(),
          [m, { set: x }] = (0, es.Z)({
            dummyUtxos: [],
            balanceUtxos: [],
            dummyFee: 0,
            dummyConsumedBalance: 0,
            dummyConsumeUtxos: [],
            payUtxos: [],
            payFee: 0,
          }),
          g = 0;
        g = Number('1000');
        let { feeRate: p } = (0, N.Ee)((e) => e),
          { address: y, network: b } = (0, h.$)((e) => e),
          [j, _] = (0, f.useState)(!1),
          { isOpen: w, onOpen: k, onOpenChange: S, onClose: z } = (0, G.q)(),
          { data: U, isLoading: P } = (0, a.ZP)(
            'getUtxoByValue-'.concat(y, '-').concat(b),
            () => (0, d.wt)({ address: y, network: b, value: 500 }),
          ),
          Z = (0, f.useMemo)(() => (null == U ? void 0 : U.data) || [], [U]),
          F = (0, f.useMemo)(() => Z.reduce((e, t) => e + t.value, 0), [Z]),
          O = (0, f.useMemo)(
            () =>
              (null == n ? void 0 : n.price)
                ? (0, M.g)(null == n ? void 0 : n.price)
                : 0,
            [null == n ? void 0 : n.price],
          ),
          B = async () => {
            if (Z.length) {
              _(!0);
              try {
                var e;
                let t =
                  (null === (e = Z.filter((e) => 0 === e.value)) || void 0 === e
                    ? void 0
                    : e.slice(0, 2)) || [];
                console.log('dummyUtxos', t);
                let l = 0,
                  s = 0,
                  a = [];
                if (2 !== t.length) {
                  let e = 1812 * p.value,
                    { utxos: t } = (0, M.zU)(Z, e + 330 + 2 * et.pz);
                  console.log('filterDummyConsumUtxos', t),
                    (l = (170 * t.length + 102 + 10) * p.value),
                    (a = t),
                    (s = t.reduce((e, t) => e + t.value, 0) - l),
                    (l = (0, el.M5)({
                      utxos: a,
                      address: y,
                      network: b,
                      estimateFee: l,
                      outputLenght: 3,
                      feeRate: p.value,
                    })),
                    x('dummyFee', l),
                    x('dummyConsumedBalance', s),
                    x('dummyConsumeUtxos', a);
                }
                console.log('dummyFee', l, a, a);
                let n = Z.filter(
                    (e) =>
                      t.every(
                        (t) =>
                          ''.concat(t.txid, ':').concat(t.vout) !==
                          ''.concat(e.txid, ':').concat(e.vout),
                      ) &&
                      a.every(
                        (t) =>
                          ''.concat(t.txid, ':').concat(t.vout) !==
                          ''.concat(e.txid, ':').concat(e.vout),
                      ),
                  ),
                  o = 1948 * p.value;
                console.log(n), console.log(o);
                let { utxos: r } = (0, M.zU)(n, o + 330 + O + g - s),
                  i =
                    (170 * (r.length + 2) + 34 * (0 === g ? 6 : 7) + 10) *
                    p.value;
                (i = (0, el.M5)({
                  utxos: a,
                  address: y,
                  network: b,
                  estimateFee: i,
                  outputLenght: 0 === g ? 7 : 8,
                  feeRate: p.value,
                })),
                  console.log('filterConsumUtxos', r),
                  x('payFee', i),
                  x('payUtxos', r);
              } catch (e) {
                console.error('calcFee error', e);
              } finally {
                _(!1);
              }
            }
          },
          D = (0, f.useMemo)(
            () => (console.log('calcFeeData', m), m.dummyFee + m.payFee),
            [m],
          ),
          L = (0, f.useMemo)(
            () => (n ? (0, M.g)(null == n ? void 0 : n.price) + g + D : 0),
            [n, g, D],
          ),
          R = async () => {
            _(!0);
            try {
              let e = await (0, d.n3)({ address: y, order_id: n.order_id });
              if (200 !== e.code) {
                v.ZP.error({
                  message: u('notification.order_unlock_failed_title'),
                  description: e.msg,
                });
                return;
              }
              E();
            } catch (e) {
              v.ZP.error({
                message: u('notification.order_unlock_failed_title'),
                description: e.message,
              });
            } finally {
              _(!1);
            }
          };
        (0, f.useEffect)(() => {
          B();
        }, [Z, n.order_id]);
        let E = () => {
            null == i || i(), z();
          },
          $ = async () => {
            let {
              dummyConsumedBalance: e,
              dummyConsumeUtxos: t,
              dummyFee: l,
            } = m;
            console.log(l, e, t);
            let { balanceUtxo: s, dummyUtxos: a } = await (0, M.S2)({
              utxos: t,
              feeRate: p,
            });
            if (
              (console.log('dummyUtxos', a),
              console.log('balanceUtxo', s),
              s && (null == a ? void 0 : a.length))
            ) {
              let { payUtxos: e } = m;
              e.push(s), x('dummyUtxos', a), x('payUtxos', e);
            }
          },
          T = async () => {
            try {
              if (!(y && b)) {
                v.ZP.warning({
                  message: u('notification.order_buy_failed_title'),
                  description: u('notification.order_buy_failed_description_1'),
                });
                return;
              }
              if (!o) {
                v.ZP.warning({
                  message: u('notification.order_buy_failed_title'),
                  description: u('notification.order_buy_failed_description_2'),
                });
                return;
              }
              if (m.dummyUtxos.length < 2) {
                v.ZP.warning({
                  message: u('notification.order_buy_failed_title'),
                  description: u('notification.order_buy_failed_description_3'),
                });
                return;
              }
              _(!0), console.log('calcFeeData', m);
              let e = await (0, M.Us)({
                  orderId: n.order_id,
                  orderRaw: o,
                  utxos: m.payUtxos,
                  dummyUtxos: m.dummyUtxos,
                  fee: m.payFee,
                  address: y,
                  network: b,
                  serviceFee: g,
                  feeRate: p.value,
                }),
                t = await (0, d.Hj)({
                  order_id: null == n ? void 0 : n.order_id,
                  address: y,
                  raw: e,
                });
              200 === t.code
                ? (v.ZP.success({
                    message: u('notification.order_buy_success_title'),
                    description: u(
                      'notification.order_buy_success_description',
                    ),
                  }),
                  null == c || c(),
                  E())
                : v.ZP.error({
                    message: u('notification.order_buy_failed_title'),
                    description: t.msg,
                  });
            } catch (e) {
              console.log('buy order error', e),
                v.ZP.error({
                  message: u('notification.order_buy_failed_title'),
                  description: e.message,
                });
            } finally {
              _(!1);
            }
          },
          J = (0, f.useMemo)(
            () => m.payUtxos.reduce((e, t) => e + t.value, 0),
            [m.payUtxos],
          ),
          I = (0, f.useMemo)(() => F < L || J < L, [F, L]),
          H = (0, f.useMemo)(() => I, [I]);
        return (
          (0, f.useEffect)(() => {
            l ? k() : z();
          }, [l]),
          (0, s.jsx)(X.R, {
            hideCloseButton: !0,
            backdrop: 'blur',
            isDismissable: !1,
            isOpen: w,
            onOpenChange: S,
            onClose: E,
            children: (0, s.jsxs)(K.A, {
              children: [
                (0, s.jsx)(W.k, {
                  className: '',
                  children: u('pages.order.modal_title'),
                }),
                (0, s.jsxs)(Y.I, {
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'flex  justify-between',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'flex-1',
                          children:
                            null == n
                              ? void 0
                              : null === (t = n.assets) || void 0 === t
                                ? void 0
                                : t.map((e) =>
                                    (0, s.jsx)(
                                      'div',
                                      {
                                        children: (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsxs)('div', {
                                              className: 'font-bold',
                                              children: [
                                                u('common.tick'),
                                                ': ',
                                                e.ticker,
                                              ],
                                            }),
                                            (0, s.jsxs)('div', {
                                              className: 'text-sm',
                                              children: [
                                                u('common.asset_num'),
                                                ': ',
                                                e.amount,
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      e.inscriptionnum,
                                    ),
                                  ),
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsxs)('div', {
                              children: [
                                u('common.price'),
                                ': ',
                                null == n ? void 0 : n.price,
                                ' BTC',
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className: 'flex items-center',
                              children: [
                                u('common.from'),
                                ':',
                                (0, s.jsx)(q.Z, {
                                  codeString: null == n ? void 0 : n.address,
                                  className: 'bg-transparent',
                                  symbol: '',
                                  size: 'sm',
                                  variant: 'flat',
                                  children: (0, M.NH)(
                                    null == n ? void 0 : n.address,
                                    4,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex justify-between items-center',
                      children: [
                        (0, s.jsx)('span', { children: u('common.fee_rate') }),
                        (0, s.jsxs)('div', {
                          children: [
                            p.value,
                            ' ',
                            (0, s.jsx)('span', { children: 'sats' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex justify-between items-center',
                      children: [
                        (0, s.jsx)('span', {
                          children: u('common.service_fee'),
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            g,
                            ' ',
                            (0, s.jsx)('span', { children: 'sats' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex justify-between items-center',
                      children: [
                        (0, s.jsx)('span', {
                          children: u('common.network_fee'),
                        }),
                        P
                          ? (0, s.jsx)(C.c, { size: 'sm' })
                          : (0, s.jsxs)('div', {
                              children: [
                                D,
                                ' ',
                                (0, s.jsx)('span', { children: 'sats' }),
                              ],
                            }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex justify-between items-center',
                      children: [
                        (0, s.jsx)('span', { children: 'Dummy Utxo length' }),
                        (0, s.jsxs)('div', {
                          children: [
                            m.dummyUtxos.length,
                            m.dummyUtxos.length < 2 &&
                              (0, s.jsx)(r.A, {
                                size: 'sm',
                                className: 'ml-2',
                                onClick: $,
                                isDisabled: !Z.length,
                                children: 'Split',
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className:
                        'flex justify-between items-center font-bold text-lg',
                      children: [
                        (0, s.jsx)('span', { children: u('common.total') }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, M.Ay)(L),
                            ' ',
                            (0, s.jsx)('span', { children: 'BTC' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(Q.z, {
                      radius: 'sm',
                      size: 'lg',
                      className: 'w-full max-w-none text-small',
                      children: (0, s.jsxs)('div', {
                        className: 'flex items-center justify-between '.concat(
                          I ? 'text-red-600' : '',
                        ),
                        children: [
                          (0, s.jsx)('span', {
                            children: u('common.available_balance'),
                          }),
                          P
                            ? (0, s.jsx)(C.c, { size: 'sm' })
                            : (0, s.jsxs)('span', {
                                children: [(0, M.Ay)(F), ' BTC'],
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(ee.R, {
                  children: [
                    (0, s.jsx)(r.A, {
                      color: 'danger',
                      isLoading: j,
                      variant: 'light',
                      onPress: R,
                      children: u('buttons.cancel'),
                    }),
                    (0, s.jsx)(r.A, {
                      isLoading: j,
                      isDisabled: H,
                      color: 'primary',
                      onPress: T,
                      children: u('buttons.confirm'),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var en = l(16463),
        eo = l(98551),
        er = l(64621);
      let ei = (e) => {
        let { value: t, list: l, onChange: a } = e,
          { t: n } = (0, A.$G)(),
          o = (e) => {
            null == a || a(e.value);
          };
        return (0, s.jsx)('div', {
          className: 'flex gap-2 flex-wrap items-center',
          children: l.map((e) =>
            e.tooltip
              ? (0, s.jsx)(
                  er.e,
                  {
                    content: e.tooltip,
                    children: (0, s.jsx)(r.A, {
                      variant: 'ghost',
                      color: t === e.value ? 'primary' : 'default',
                      radius: 'full',
                      onClick: () => o(e),
                      children: e.label,
                    }),
                  },
                  e.value,
                )
              : (0, s.jsx)(
                  r.A,
                  {
                    variant: 'ghost',
                    color: t === e.value ? 'primary' : 'default',
                    radius: 'full',
                    onClick: () => o(e),
                    children: e.label,
                  },
                  e.value,
                ),
          ),
        });
      };
      var ec = l(21433);
      let ed = (e) => {
        let { onChange: t, name: l } = e,
          { t: n } = (0, A.$G)(),
          { network: o } = (0, h.$)((e) => e),
          [r, i] = (0, f.useState)(''),
          [c, u] = (0, f.useState)(''),
          [m, x] = (0, f.useState)(''),
          [v, g] = (0, f.useState)(''),
          [p, y] = (0, f.useState)(''),
          b = (0, f.useMemo)(
            () => '/ordx/getNameCategoryList-'.concat(l, '-').concat(o),
            [l, o],
          ),
          {
            data: j,
            isLoading: _,
            mutate: N,
          } = (0, a.ZP)(b, () => (0, d.Ru)({ name: l }), {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
          }),
          w = (0, f.useMemo)(() => (null == j ? void 0 : j.data) || [], [j]),
          k = (0, f.useMemo)(
            () =>
              [
                { label: 'All', value: '' },
                { label: n('name.category.nav.2_han.label'), value: '2Han' },
                {
                  label: n('name.category.nav.dal3.label'),
                  tooltip: n('name.category.nav.dal3.tooltip'),
                  value: 'DaL3',
                },
                { label: n('name.category.nav.cvcv.label'), value: 'cvcv' },
                {
                  label: n('name.category.nav.date.label'),
                  tooltip: n('name.category.nav.date.tooltip'),
                  value: 'SDate',
                },
                { label: n('name.category.nav.lucky.label'), value: 'lucky' },
              ].map((e) => {
                var t;
                return {
                  ...e,
                  count:
                    null === (t = w.find((t) => t.category === e.value)) ||
                    void 0 === t
                      ? void 0
                      : t.count,
                };
              }),
            [w],
          ),
          C = (0, f.useMemo)(
            () =>
              [
                { label: 'All', value: '' },
                { label: n('name.category.number.1_digit'), value: '1D' },
                { label: n('name.category.number.2_digit'), value: '2D' },
                { label: n('name.category.number.3_digit'), value: '3D' },
                { label: n('name.category.number.4_digit'), value: '4D' },
                { label: n('name.category.number.5_digit'), value: '5D' },
                { label: n('name.category.number.6_digit'), value: '6D' },
                { label: n('name.category.number.7_digit'), value: '7D' },
                { label: n('name.category.number.8_digit'), value: '8D' },
                { label: n('name.category.number.11_digit'), value: '11D' },
                { label: n('name.category.number.12_digit'), value: '12D' },
              ].map((e) => {
                var t;
                return {
                  ...e,
                  count:
                    null === (t = w.find((t) => t.category === e.value)) ||
                    void 0 === t
                      ? void 0
                      : t.count,
                };
              }),
            [w],
          ),
          S = (0, f.useMemo)(
            () =>
              [
                { label: 'All', value: '' },
                { label: n('name.category.letter.1_letter'), value: '1L' },
                { label: n('name.category.letter.2_letters'), value: '2L' },
                { label: n('name.category.letter.3_letters'), value: '3L' },
                { label: n('name.category.letter.4_letters'), value: '4L' },
                { label: n('name.category.letter.cvcv'), value: 'cvcv' },
                {
                  label: n('name.category.letter.same_letters'),
                  value: 'same',
                },
              ].map((e) => {
                var t;
                return {
                  ...e,
                  count:
                    null === (t = w.find((t) => t.category === e.value)) ||
                    void 0 === t
                      ? void 0
                      : t.count,
                };
              }),
            [w],
          ),
          M = (0, f.useMemo)(
            () =>
              [
                { label: 'All', value: '' },
                { label: n('name.category.other.date'), value: 'SDate' },
                {
                  label: n('name.category.other.symmetric_digit'),
                  value: 'symmetric',
                },
                {
                  label: n('name.category.other.consecutive_digit'),
                  value: 'consecutive',
                },
                { label: n('name.category.other.luck_digit'), value: 'lucky' },
                { label: n('name.category.other.full_date'), value: 'FDate' },
                { label: n('name.category.other.did'), value: '10D' },
                {
                  label: n('name.category.other.c_mobile_number'),
                  value: 'cmn',
                },
                { label: n('name.category.other.dal2'), value: 'DaL2' },
                { label: n('name.category.other.dal3'), value: 'DaL3' },
                { label: n('name.category.other.char2'), value: '2char' },
                {
                  label: n('name.category.other.unclassified_digit_names'),
                  value: 'undefined',
                },
              ].map((e) => {
                var t;
                return {
                  ...e,
                  count:
                    null === (t = w.find((t) => t.category === e.value)) ||
                    void 0 === t
                      ? void 0
                      : t.count,
                };
              }),
            [w],
          ),
          z = (0, f.useMemo)(
            () =>
              [
                { label: 'All', value: '' },
                { label: n('name.category.chinese.1_han'), value: '1Han' },
                { label: n('name.category.chinese.2_han'), value: '2Han' },
                { label: n('name.category.chinese.3_han'), value: '3Han' },
                { label: n('name.category.chinese.4_han'), value: '4Han' },
              ].map((e) => {
                var t;
                return {
                  ...e,
                  count:
                    null === (t = w.find((t) => t.category === e.value)) ||
                    void 0 === t
                      ? void 0
                      : t.count,
                };
              }),
            [w],
          ),
          U = (e, l) => {
            'number' === e
              ? (i(l), x(''), g(''), y(''))
              : 'letter' === e
                ? (x(l), i(''), g(''), y(''))
                : 'chinese' === e
                  ? (g(l), i(''), x(''), y(''))
                  : 'other' === e && (y(l), i(''), x(''), g('')),
              u(l),
              null == t || t(l);
          };
        return (0, s.jsxs)('div', {
          className: 'flex flex-wrap justify-end items-center gap-2',
          children: [
            (0, s.jsx)(ei, {
              value: c,
              onChange: (e) => {
                u(e), i(''), x(''), g(''), y(''), null == t || t(e);
              },
              list: k,
            }),
            (0, s.jsxs)('div', {
              className: 'grid grid-cols-2 gap-2 md:grid-cols-4',
              children: [
                (0, s.jsx)(
                  ec.y,
                  {
                    placeholder: 'Number Category',
                    list: C,
                    selected: r,
                    onChange: (e) => U('number', e),
                  },
                  'number',
                ),
                (0, s.jsx)(
                  ec.y,
                  {
                    placeholder: 'Letter Category',
                    list: S,
                    selected: m,
                    onChange: (e) => U('letter', e),
                  },
                  'letter',
                ),
                (0, s.jsx)(
                  ec.y,
                  {
                    placeholder: 'Chinese Category',
                    list: z,
                    selected: v,
                    onChange: (e) => U('chinese', e),
                  },
                  'chinese',
                ),
                (0, s.jsx)(
                  ec.y,
                  {
                    placeholder: 'Other Category',
                    list: M,
                    selected: p,
                    onChange: (e) => U('other', e),
                  },
                  'other',
                ),
              ],
            }),
          ],
        });
      };
      var eu = l(48223),
        em = l(46807);
      let ex = (e) => {
        let {
            assets_name: t,
            assets_type: l,
            address: n,
            showResale: o = !0,
          } = e,
          { t: r } = (0, A.$G)();
        (0, en.useRouter)();
        let { address: i, network: c } = (0, h.$)((e) => e),
          { list: u, add: m, remove: g, reset: p } = (0, N.cp)(),
          [y, b] = (0, f.useState)(!1),
          [j, _] = (0, f.useState)(!1),
          [w, k] = (0, f.useState)(!1),
          [C, S] = (0, f.useState)(),
          [M, z] = (0, f.useState)(),
          [U, P] = (0, f.useState)(1),
          [O, B] = (0, f.useState)(10),
          [D, L] = (0, f.useState)(1),
          [R, E] = (0, f.useState)(''),
          $ = [
            { label: r('common.not_sort'), value: 0 },
            { label: r('common.sort_unit_price_ascending'), value: 1 },
            { label: r('common.sort_unit_price_descending'), value: 2 },
            { label: r('common.sort_price_ascending'), value: 5 },
            { label: r('common.sort_price_descending'), value: 6 },
            { label: r('common.sort_time_ascending'), value: 3 },
            { label: r('common.sort_time_descending'), value: 4 },
          ],
          T = (0, f.useMemo)(
            () =>
              n
                ? '/ordx/getOrders-'
                    .concat(t, '-')
                    .concat(l, '-')
                    .concat(n, '-')
                    .concat(c, '-')
                    .concat(U, '-')
                    .concat(O, '-')
                    .concat(D, '-')
                    .concat(R)
                : '/ordx/getOrders-'
                    .concat(t, '-')
                    .concat(l, '-')
                    .concat(c, '-')
                    .concat(U, '-')
                    .concat(O, '-')
                    .concat(D, '-')
                    .concat(R),
            [t, n, U, O, c, D, l, R],
          ),
          {
            data: J,
            isLoading: I,
            mutate: H,
          } = (0, a.ZP)(T, () =>
            (0, d.AU)({
              offset: (U - 1) * O,
              size: O,
              assets_name: t,
              address: n,
              sort: D,
              category: R,
              assets_type: l,
              hide_locked: !1,
            }),
          ),
          [G, { set: X, push: K, removeAt: W, reset: Y }] = (0, em.Z)([]);
        (0, f.useEffect)(() => {
          if (J) {
            let { order_list: e = [] } = (null == J ? void 0 : J.data) || {};
            1 === U ? X(e) : K(...e);
          }
        }, [J, y]);
        let q = (0, f.useMemo)(() => {
            var e;
            return (
              (null == u
                ? void 0
                : null === (e = u[0]) || void 0 === e
                  ? void 0
                  : e.order_source) || ''
            );
          }, [u]),
          Q = async (e) => {
            if ('1' === e.locker) {
              v.ZP.error({
                message: r('notification.order_cancel_failed_title'),
                description: r(
                  'notification.order_cancel_failed_description_1',
                ),
              });
              return;
            }
            try {
              let t = await (0, d.sl)({
                address: n || i,
                order_id: e.order_id,
              });
              if (200 === t.code) {
                v.ZP.success({
                  message: r('notification.order_cancel_success_title'),
                  description: r(
                    'notification.order_cancel_success_description_1',
                  ),
                });
                let t = G.findIndex((t) => t.utxo === e.utxo);
                W(t);
              } else
                v.ZP.error({
                  message: r('notification.order_cancel_failed_title'),
                  description: t.msg,
                });
            } catch (e) {
              v.ZP.error({
                message: r('notification.order_cancel_failed_title'),
                description: e.msg,
              });
            }
          },
          ee = async (e) => {
            console.log(e);
            try {
              0 === e.locked && m({ ...e, status: 'pending' });
            } catch (e) {
              v.ZP.error({
                message: r('notification.lock_order_failed_title'),
                description: e,
              });
            }
          },
          et = async (e, t) => {
            e ? await ee(t) : await el(t);
          },
          el = async (e) => {
            try {
              let t = await (0, d.n3)({ address: i, order_id: e.order_id });
              if (200 !== t.code) {
                v.ZP.error({
                  message: r('notification.order_unlock_failed_title'),
                  description: t.msg,
                });
                return;
              }
              g(e.utxo);
            } catch (e) {
              v.ZP.error({
                message: r('notification.order_unlock_failed_title'),
                description: e.message,
              });
            }
          },
          es = async (e) => {
            await ee(e), _(!0);
          },
          er = () => {
            H(T);
          },
          ei = async () => {
            _(!1);
            let e = u.map((e) =>
              (0, d.n3)({ address: i, order_id: e.order_id }),
            );
            try {
              if ((await Promise.all(e)).some((e) => 200 !== e.code)) {
                v.ZP.error({
                  message: r('notification.order_unlock_failed_title'),
                  description: r(
                    'notification.order_cancel_failed_description',
                  ),
                });
                return;
              }
              p(), _(!1), k(!1), H(T);
            } catch (e) {
              v.ZP.error({
                message: r('notification.order_unlock_failed_title'),
                description: e.message,
              });
            }
          },
          ec = (0, f.useMemo)(
            () => (y ? G.filter((e) => 0 === e.locked) : G),
            [G, y],
          ),
          ex = (0, f.useMemo)(() => {
            var e;
            return (
              (null == J
                ? void 0
                : null === (e = J.data) || void 0 === e
                  ? void 0
                  : e.total) || 0
            );
          }, [J]),
          ev = (0, f.useMemo)(() => G.length >= ex, [ex, G]);
        console.log('finished', ev);
        let eh = async () => {
          P(U + 1);
        };
        return (
          (0, f.useEffect)(() => {
            p();
          }, []),
          (0, s.jsxs)('div', {
            className: ''.concat(j ? 'pb-20' : ''),
            children: [
              (0, s.jsxs)(F.V, {
                loading: I,
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'flex justify-end items-end gap-4 mb-4 flex-wrap',
                    children: [
                      'ns' == l &&
                        (0, s.jsx)(ed, {
                          name: t,
                          onChange: (e) => {
                            p(), P(1), _(!1), Y(), E(e);
                          },
                        }),
                      (0, s.jsxs)('div', {
                        className: 'flex gap-4 items-center',
                        children: [
                          (0, s.jsx)(x.i, {
                            isSelected: y,
                            onValueChange: (e) => b(e),
                            children: 'Hide Locked',
                          }),
                          (0, s.jsx)(eo.a, {
                            sortList: $,
                            value: D,
                            disabled: !G.length || j,
                            onChange: (e) => {
                              void 0 !== e && L(e);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(eu.v, {
                    loading: I,
                    loadMore: eh,
                    hasMore: !ev,
                    empty: !G.length,
                    children: (0, s.jsx)('div', {
                      className:
                        'min-h-[30rem] flex flex-wrap justify-center md:gap-8 mb-4 gap-2',
                      children: ec.map((e, a) =>
                        (0, s.jsx)(
                          'div',
                          {
                            children: (0, s.jsx)(V, {
                              selectedSource: q,
                              assets_name: t,
                              assets_type: l,
                              showResale: o,
                              canSelect: j,
                              delay: a > 5 ? 2e3 : 0,
                              selected: !!u.find((t) => t.utxo === e.utxo),
                              item: e,
                              onCancelOrder: () => Q(e),
                              onSelect: (t) => et(t, e),
                              onBuy: () => es(e),
                            }),
                          },
                          e.order_id + '_' + a,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              !!M &&
                (0, s.jsx)(ea, {
                  item: C,
                  orderRaw: M,
                  onSuccess: () => er(),
                  onClose: () => k(!1),
                  visiable: w,
                }),
              j &&
                (0, s.jsx)(Z, {
                  selectedSource: q,
                  assets_name: t,
                  assets_type: l,
                  list: ec,
                  onClose: ei,
                  onSuccess: () => {
                    _(!1), k(!1), p(), H(T);
                  },
                }),
            ],
          })
        );
      };
      var ev = l(55528),
        eh = l(32516);
      let ef = (e) => {
          let { data: t } = e,
            l = (0, f.useRef)(null),
            a = (0, f.useRef)(null),
            n = (0, f.useMemo)(() => t.filter((e) => e.count > 0), [t]),
            o = (0, f.useMemo)(
              () =>
                n.reduce(
                  (e, t) => e + ((null == t ? void 0 : t.count) || 0),
                  0,
                ),
              [n],
            ),
            r = (0, f.useMemo)(() => {
              let e = n.map((e) => {
                  let t = e.count / o;
                  return { ...e, percentage: t < 0.05 ? 0.05 : t };
                }),
                t = e.reduce(
                  (e, t) => e + ((null == t ? void 0 : t.percentage) || 0),
                  0,
                );
              return e.map((e) => ({
                ...e,
                percentage: Math.floor((e.percentage / t) * o),
              }));
            }, [n, o]);
          return (
            (0, f.useEffect)(() => {
              a.current &&
                (function (e) {
                  var t;
                  if (!r.length) return;
                  console.log(e), e.data(r);
                  let l =
                    null == e
                      ? void 0
                      : null === (t = e.children) || void 0 === t
                        ? void 0
                        : t[2];
                  l && (l.value.style.text = o.toString()), e.render();
                })(a.current);
            }, [t]),
            (0, f.useEffect)(() => {
              a.current ||
                (a.current = (function (e) {
                  let t = new eh.kL({ container: e, autoFit: !0 });
                  return (
                    t.coordinate({ type: 'theta', innerRadius: 0.65 }),
                    t
                      .theme({ type: 'classicDark' })
                      .data(r)
                      .interval()
                      .transform({ type: 'stackY' })
                      .encode('y', 'percentage')
                      .encode('color', 'label')
                      .style('inset', 3)
                      .style('radius', 10)
                      .legend('color', {
                        position: 'bottom',
                        layout: { justifyContent: 'center' },
                      })
                      .tooltip((e) => ({
                        name: e.label,
                        value: ''.concat(e.count),
                      })),
                    t
                      .text()
                      .style('text', 'Total')
                      .style('x', '50%')
                      .style('y', '50%')
                      .style('fontSize', 40)
                      .style('dy', -20)
                      .style('fill', '#fff')
                      .style('fontWeight', 'bold')
                      .style('textAlign', 'center')
                      .tooltip(!1),
                    t
                      .text()
                      .style('text', o.toString())
                      .style('x', '50%')
                      .style('y', '50%')
                      .style('dy', 20)
                      .style('fill', '#fff')
                      .style('fontSize', 30)
                      .style('fontWeight', 'bold')
                      .style('textAlign', 'center')
                      .tooltip(!1),
                    t.render(),
                    t
                  );
                })(l.current));
            }, []),
            (0, s.jsx)('div', { className: 'w-96', ref: l })
          );
        },
        eg = (e) => {
          let { data: t = [] } = e,
            l = (0, f.useRef)(null),
            a = (0, f.useRef)(null);
          return (
            (0, f.useEffect)(() => {
              if (a.current) {
                var e;
                (e = a.current), t.length && (e.data(t), e.render());
              }
            }, [t]),
            (0, f.useEffect)(() => {
              a.current ||
                (a.current = (function (e) {
                  let l = new eh.kL({ container: e, autoFit: !0 });
                  return (
                    l
                      .theme({ type: 'classicDark' })
                      .data(t, { value: { min: 0 } })
                      .encode('x', 'label')
                      .encode('y', 'value')
                      .scale('x', { nice: !0 })
                      .scale('y', { nice: !0 })
                      .axis('x', { labelAutoRotate: !1, title: null })
                      .axis('y', { title: null }),
                    l
                      .interval()
                      .encode('x', 'label')
                      .encode('y', 'volume')
                      .style('size', 30)
                      .style('inset', 2)
                      .style('maxWidth', 10)
                      .scale('y', { independent: !0, domainMin: 0 })
                      .axis('y', {
                        position: 'right',
                        line: !1,
                        tick: !1,
                        label: !1,
                        grid: !1,
                      })
                      .tooltip((e) => ({
                        title: e.label,
                        name: 'Valume',
                        value: e.volume
                          ? ''.concat((0, D.Ay)(e.volume), ' btc')
                          : '-',
                      }))
                      .tooltip((e) => ({
                        color: !1,
                        name: 'Sales',
                        value: e.count ? e.count : '-',
                      })),
                    l
                      .line()
                      .encode('shape', 'smooth')
                      .style({ stroke: '#F7931A' })
                      .scale('y', { independent: !0, domainMin: 0 })
                      .axis('y', { position: 'left', grid: !1 })
                      .tooltip((e) => ({
                        name: 'Avg Price',
                        value: e.realValue
                          ? ''.concat(e.realValue, ' sat')
                          : '-',
                      })),
                    l.render(),
                    l
                  );
                })(l.current));
            }, []),
            (0, s.jsx)('div', { className: 'flex-1 max-w-full', ref: l })
          );
        };
      function ep(e) {
        let { loading: t, children: l, className: a } = e;
        return (0, s.jsx)('div', {
          className: 'w-full' + a,
          children: t
            ? (0, s.jsx)('div', {
                className: 'flex justify-center items-center min-h-[30rem]',
                children: (0, s.jsx)(C.c, {}),
              })
            : l,
        });
      }
      let ey = (e) => {
        let { assets_name: t, assets_type: l } = e,
          [n, o] = (0, f.useState)('24h'),
          [i, c] = (0, f.useState)('avg_price'),
          { network: u } = (0, h.$)(),
          m = (0, f.useMemo)(
            () => 'getAssetsAnalytics-'.concat(t, '-').concat(l, '-').concat(u),
            [t, u, l],
          ),
          {
            data: x,
            isLoading: v,
            mutate: g,
          } = (0, a.ZP)(m, () =>
            (0, d.Zs)({ assets_name: t, assets_type: l, hide_locked: !0 }),
          ),
          p = (0, f.useMemo)(() => {
            var e, t, l, s, a, o, r;
            return '24h' === n
              ? (null == x
                  ? void 0
                  : null === (t = x.data) || void 0 === t
                    ? void 0
                    : null === (e = t.items_24hours) || void 0 === e
                      ? void 0
                      : e.filter(Boolean)) || []
              : '7d' === n
                ? (null == x
                    ? void 0
                    : null === (a = x.data) || void 0 === a
                      ? void 0
                      : null === (s = a.items_30days) || void 0 === s
                        ? void 0
                        : null === (l = s.slice(-7)) || void 0 === l
                          ? void 0
                          : l.filter(Boolean)) || []
                : '30d' === n
                  ? (null == x
                      ? void 0
                      : null === (r = x.data) || void 0 === r
                        ? void 0
                        : null === (o = r.items_30days) || void 0 === o
                          ? void 0
                          : o.filter(Boolean)) || []
                  : void 0;
          }, [x, n, i]),
          y = (0, f.useMemo)(() => {
            let e = [];
            console.log('dataSource', p);
            for (let l = 0; l < p.length; l++) {
              var t;
              let s = p[l],
                a =
                  '24h' === n
                    ? s.time
                    : null === (t = s.date) || void 0 === t
                      ? void 0
                      : t.replace(/^\d{4}-/, ''),
                o = s.avg_price,
                r = s.volume,
                i = o;
              l > 0 &&
                (void 0 === o || o <= 0) &&
                (console.log(o), (o = e[l - 1].value));
              let c = s.order_count;
              e.push({ label: a, value: o, count: c, realValue: i, volume: r });
            }
            return e;
          }, [p, i, n]),
          b = (0, f.useMemo)(() => {
            let e = 0,
              t = 0,
              l = 0,
              s = 0,
              a = 0,
              n = 0;
            for (let o of p)
              o.date &&
                ((e += o.sat20.order_count),
                (t += o.magic_eden.order_count),
                (l += o.okx.order_count),
                (s += o.sat20.volume),
                (a += o.magic_eden.volume),
                (n += o.okx.volume));
            return [
              { id: 'sat20', label: 'SAT20Market', count: e, volume: s },
              { id: 'me', label: 'Magiceden', count: t, volume: a },
              { id: 'okx', label: 'OKX', count: l, volume: n },
            ];
          }, [p]);
        return (0, s.jsx)('div', {
          className: 'p-2  max-w-[100rem]',
          children: (0, s.jsxs)(ep, {
            loading: v,
            children: [
              (0, s.jsx)('div', {
                className: 'flex justify-end items-center mb-4',
                children: (0, s.jsx)(ev.g, {
                  children: [
                    { label: '24h', value: '24h' },
                    { label: '7d', value: '7d' },
                    { label: '30d', value: '30d' },
                  ].map((e) =>
                    (0, s.jsx)(
                      r.A,
                      {
                        color: n === e.value ? 'primary' : 'default',
                        onClick: () => o(e.value),
                        children: e.label,
                      },
                      e.value,
                    ),
                  ),
                }),
              }),
              (0, s.jsxs)('div', {
                className:
                  'flex flex-col md:flex-row justify-between items-center gap-2',
                children: [
                  (0, s.jsx)(eg, { data: y }),
                  (0, s.jsx)(ef, { data: b }),
                ],
              }),
            ],
          }),
        });
      };
      var eb = l(69142);
      function ej() {
        let { t: e, i18n: t } = (0, A.$G)(),
          l = (0, en.useRouter)(),
          x = (0, en.useSearchParams)(),
          { address: v, network: g } = (0, h.$)((e) => e),
          p = x.get('ticker'),
          y = x.get('assets_type'),
          { data: b } = (0, a.ZP)('getAssetsSummary', () => {
            console.log('app.ordx.ticker.page: ticker: ', p);
            try {
              return (0, d.zU)({ assets_name: p, assets_type: y });
            } catch (e) {
              console.log('app.ordx.ticker.page: getAssetsSummary error: ', e);
            }
          }),
          j = (0, f.useMemo)(() => {
            var e;
            return (
              (null == b
                ? void 0
                : null === (e = b.data) || void 0 === e
                  ? void 0
                  : e.summary) || {}
            );
          }, [b]),
          _ = (0, f.useMemo)(
            () => [
              {
                value: Number(j.lowest_price).toFixed(2),
                label: e('common.lowest_price'),
                unit: 'sats',
              },
              {
                value: j.tx_total_volume,
                label: e('common.tx_total_volume'),
                unit: 'BTC',
              },
              {
                value: j.tx_order_count,
                label: e('common.tx_order_count'),
                unit: '',
              },
              {
                value: ((j.total_amount * j.lowest_price) / 1e8).toFixed(4),
                label: e('common.total_amount'),
                unit: 'BTC',
              },
              {
                value: j.onsell_order_count,
                label: e('common.onsell_order_count'),
                unit: '',
              },
              {
                value: j.holder_count,
                label: t.t('common.holder_count'),
                unit: '',
              },
            ],
            [j, t.language],
          );
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)('div', {
              className: 'min-h-40 flex flex-col py-2',
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex-1 flex items-center mb-4 gap-4',
                  children: [
                    (null == j ? void 0 : j.logo)
                      ? (0, s.jsx)(n.J, {
                          src: ''
                            .concat('https://apiprd.ordx.market')
                            .concat('testnet' === g ? '/testnet' : '')
                            .concat(j.logo),
                          alt: 'logo',
                          className: 'w-20 h-20 p-2',
                        })
                      : (null == j ? void 0 : j.assets_type) === 'exotic'
                        ? (0, s.jsx)(n.J, {
                            src: '/raresats/'.concat(
                              null == j ? void 0 : j.assets_name,
                              '.svg',
                            ),
                            alt: 'logo',
                            className: 'w-20 h-20 p-2',
                          })
                        : (0, s.jsx)(o.h, {
                            name: p.slice(0, 1).toUpperCase(),
                            className:
                              'text-3xl text-gray-200 font-black w-20 h-20 bg-gray-900',
                          }),
                    (0, s.jsxs)('div', {
                      className:
                        'flex-1 flex items-center flex-wrap justify-center h-20',
                      children: [
                        (0, s.jsx)('div', {
                          className: 'flex-1',
                          children:
                            'btc' !== p &&
                            (0, s.jsx)('div', {
                              className:
                                'text-2xl md:text-3xl font-medium text-gary-500',
                              children: (null == j ? void 0 : j.nickname)
                                ? null == j
                                  ? void 0
                                  : j.nickname
                                : (0, D.t2)(null == j ? void 0 : j.assets_name),
                            }),
                        }),
                        (0, s.jsx)(J.j, {
                          text: e('buttons.list_sale'),
                          children: (0, s.jsx)(r.A, {
                            onClick: () => {
                              l.push('/account');
                            },
                            color: 'primary',
                            children: e('buttons.list_sale'),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)('div', {
                  className: 'flex-1 flex items-center justify-between gap-4',
                  children: (0, s.jsx)('div', {
                    className: 'grid gap-2 grid-cols-3 lg:grid-cols-6',
                    children: _.map((e) =>
                      (0, s.jsx)(
                        i.w,
                        {
                          isHoverable: !0,
                          className: 'px-2',
                          children: (0, s.jsxs)(c.G, {
                            className: 'text-center',
                            children: [
                              (0, s.jsxs)('div', {
                                className:
                                  'flex text-base md:text-2xl text-center justify-center',
                                children: [
                                  'BTC' === e.unit &&
                                    (0, s.jsx)(w.JO, {
                                      icon: 'cryptocurrency-color:btc',
                                      className: 'mr-1 mt-0.5',
                                    }),
                                  (0, s.jsx)('span', {
                                    children:
                                      void 0 === e.value ? '-' : e.value,
                                  }),
                                  'sats' === e.unit &&
                                    (0, s.jsx)('span', {
                                      className: 'text-base self-end ml-2',
                                      children: 'Sats',
                                    }),
                                ],
                              }),
                              (0, s.jsx)('div', {
                                className: 'text-sm lg:text-md text-gray-400',
                                children: e.label,
                              }),
                            ],
                          }),
                        },
                        e.label,
                      ),
                    ),
                  }),
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className: 'pt-4',
              children: (0, s.jsxs)(u.n, {
                'aria-label': 'Options',
                color: 'primary',
                size: 'lg',
                variant: 'underlined',
                classNames: {
                  tabList:
                    'gap-6 w-full relative rounded-none p-0 border-b border-divider',
                  cursor: 'w-full bg-blue-500',
                  tab: 'max-w-fit px-0 h-12',
                  tabContent: 'group-data-[selected=true]:text-blue-400',
                },
                style: { width: '100%' },
                children: [
                  (0, s.jsx)(
                    m.r,
                    {
                      title: e('pages.market.title'),
                      children: (0, s.jsx)(
                        ex,
                        { assets_name: p, assets_type: y, showResale: !0 },
                        ''.concat(p, '_').concat(y),
                      ),
                    },
                    'market',
                  ),
                  (0, s.jsx)(
                    m.r,
                    {
                      title: e('common.analyze'),
                      children: (0, s.jsx)(ey, {
                        assets_name: p,
                        assets_type: y,
                      }),
                    },
                    'analyze',
                  ),
                  (0, s.jsx)(
                    m.r,
                    {
                      title: e('common.tx_history'),
                      children: (0, s.jsx)(eb.K, {
                        assets_name: p,
                        assets_type: y,
                      }),
                    },
                    'history',
                  ),
                  (0, s.jsx)(
                    m.r,
                    {
                      title: e('common.my_listings'),
                      children: (0, s.jsx)(J.j, {
                        className: 'mx-auto mt-20 block',
                        children: (0, s.jsx)(ex, {
                          assets_name: p,
                          assets_type: y,
                          address: v,
                        }),
                      }),
                    },
                    'my',
                  ),
                ],
              }),
            }),
          ],
        });
      }
    },
    76734: function (e, t, l) {
      'use strict';
      l.d(t, {
        H: function () {
          return i;
        },
      });
      var s = l(57437),
        a = l(2265),
        n = l(65647),
        o = l(57603);
      let r = (e) => {
          let { btcPrice: t } = (0, n.Ee)();
          return (0, a.useMemo)(() => {
            let l = new o.t(e),
              s = new o.t(t);
            return l.mul(s).toFixed(2);
          }, [e, t]);
        },
        i = (e) => {
          let { btc: t, className: l } = e,
            a = r(t);
          return (0, s.jsx)('span', { className: l, children: a });
        };
    },
    79386: function (e, t, l) {
      'use strict';
      l.d(t, {
        V: function () {
          return n;
        },
      });
      var s = l(57437),
        a = l(51446);
      l(2265);
      let n = (e) => {
        let { loading: t = !0, className: l, children: n } = e;
        return (0, s.jsxs)('div', {
          className: 'relative '.concat(l),
          children: [
            n,
            t &&
              (0, s.jsx)('div', {
                className:
                  'absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2',
                children: (0, s.jsx)(a.c, {}),
              }),
          ],
        });
      };
    },
    48223: function (e, t, l) {
      'use strict';
      l.d(t, {
        v: function () {
          return r;
        },
      });
      var s = l(57437),
        a = l(51446),
        n = l(62575),
        o = l(2265);
      function r(e) {
        let {
            loadMore: t,
            hasMore: l,
            children: r,
            loading: i,
            loader: c,
            empty: d,
            endMessage: u = '',
          } = e,
          [m, x] = (0, o.useState)(!1),
          [v, h] = (0, o.useState)(null),
          f = (0, o.useRef)(null),
          g = void 0 !== i ? i : m;
        (0, o.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting && l && !g && p();
            },
            { threshold: 1 },
          );
          return (
            f.current && e.observe(f.current),
            () => {
              f.current && e.unobserve(f.current);
            }
          );
        }, [l, g]);
        let p = async () => {
          x(!0), h(null);
          try {
            await t();
          } catch (e) {
            h(
              e instanceof Error
                ? e
                : Error('An error occurred while loading more items'),
            );
          } finally {
            x(!1);
          }
        };
        return (0, s.jsxs)('div', {
          className: 'space-y-4',
          children: [
            r,
            d && (0, s.jsx)(n.Z, { className: 'mt-20' }),
            (0, s.jsxs)('div', {
              ref: f,
              className: 'flex justify-center p-4',
              children: [
                v &&
                  (0, s.jsxs)('div', {
                    className: 'text-red-500',
                    children: [
                      'Error: ',
                      v.message,
                      (0, s.jsx)('button', {
                        onClick: p,
                        className: 'ml-2 text-blue-500 underline',
                        children: 'Retry',
                      }),
                    ],
                  }),
                !v && g && (c || (0, s.jsx)(a.c, {})),
                !v && !g && !l && u,
              ],
            }),
          ],
        });
      }
    },
    96019: function (e, t, l) {
      'use strict';
      l.d(t, {
        t: function () {
          return n;
        },
      });
      var s = l(57437);
      l(2265);
      var a = l(99717);
      let n = (e) => {
        let { total: t, page: l, size: n, onChange: o } = e;
        return (
          console.log('Pagination', l),
          (0, s.jsx)(a.g, {
            isCompact: !0,
            showControls: !0,
            showShadow: !0,
            color: 'primary',
            total: t,
            initialPage: 1,
            page: l,
            onChange: o,
          })
        );
      };
    },
    98551: function (e, t, l) {
      'use strict';
      l.d(t, {
        a: function () {
          return i;
        },
      });
      var s = l(57437),
        a = l(52551),
        n = l(8127),
        o = l(2265),
        r = l(90089);
      let i = (e) => {
        let { value: t, onChange: l, sortList: i, disabled: c = !1 } = e,
          [d, u] = (0, o.useState)([
            (null == t ? void 0 : t.toString()) || '0',
          ]),
          { t: m } = (0, r.$G)();
        return (0, s.jsx)(a.g, {
          isDisabled: c,
          className: 'w-48',
          selectionMode: 'single',
          selectedKeys: d,
          defaultSelectedKeys: ['0'],
          onSelectionChange: (e) => {
            u(e);
            let t = Number(Array.from(e.values())[0]);
            null == l || l(t);
          },
          children: i.map((e) =>
            (0, s.jsx)(n.R, { value: e.value, children: e.label }, e.value),
          ),
        });
      };
    },
    19637: function (e, t, l) {
      'use strict';
      l.d(t, {
        A: function () {
          return u;
        },
      });
      var s = l(57437),
        a = l(65703),
        n = l(86778),
        o = l(51446),
        r = l(18182),
        i = l(2265),
        c = l(24842),
        d = l(69077);
      function u(e) {
        let { inscriptionId: t, utxo: l, delay: u = 0, defaultImage: m } = e,
          { network: x } = (0, c.$)(),
          [v, h] = (0, i.useState)('');
        (0, i.useRef)(null);
        let [f, g] = (0, i.useState)(!1),
          [p, y] = (0, i.useState)(!0),
          b = async () => {
            y(!0);
            let e = 'utxo-content-seed-'.concat(x, '-').concat(l),
              t = sessionStorage.getItem(e);
            if (t) {
              h(t);
              return;
            }
            let [s, n] = await (0, r.vU)(a.lI.getSeedByUtxo)({
              utxo: l,
              network: x,
            });
            if (s) console.error(s);
            else {
              var o, i;
              console.log(n);
              let t =
                null == n
                  ? void 0
                  : null === (i = n.data) || void 0 === i
                    ? void 0
                    : null === (o = i[0]) || void 0 === o
                      ? void 0
                      : o.seed;
              t && (h(t), sessionStorage.setItem(e, t));
            }
            y(!1);
          },
          j = (0, i.useMemo)(() => !f, [f]),
          _ = (0, i.useMemo)(
            () =>
              t && v
                ? (0, d.PS)({
                    network: x,
                    path: 'content/'.concat(t, '?seed=').concat(v),
                  })
                : void 0,
            [x, t, v],
          );
        return (
          (0, i.useEffect)(() => {
            l && x && b();
          }, [l, x]),
          (0, s.jsxs)('div', {
            className: 'h-full w-full',
            children: [
              j &&
                (0, s.jsx)(s.Fragment, {
                  children: m
                    ? (0, s.jsx)('div', {
                        className:
                          'absolute top-0 left-0 w-full h-full z-[1] flex justify-center items-center backdrop-blur-lg bg-black bg-opacity-70',
                        children: (0, s.jsx)(n.J, {
                          radius: 'full',
                          src: m,
                          alt: 'loading image',
                          classNames: { wrapper: 'w-1/2' },
                        }),
                      })
                    : (0, s.jsx)('div', {
                        className:
                          'absolute top-0 left-0 w-full h-full dark:bg-gray-800 z-[1] bg-gray-100 flex justify-center items-center',
                        children: (0, s.jsx)(o.c, {}),
                      }),
                }),
              _ &&
                (0, s.jsx)('iframe', {
                  onLoad: () => {
                    setTimeout(() => {
                      g(!0);
                    }, 1500);
                  },
                  onError: () => {
                    g(!0);
                  },
                  src: _,
                  className: 'pointer-events-none max-w-full h-full max-h-full',
                }),
            ],
          })
        );
      }
    },
    21433: function (e, t, l) {
      'use strict';
      l.d(t, {
        y: function () {
          return r;
        },
      });
      var s = l(57437),
        a = l(52551),
        n = l(8127),
        o = l(2265);
      let r = (e) => {
        let {
            isLoading: t,
            onChange: l,
            selected: r,
            list: i = [],
            placeholder: c,
          } = e,
          d = (0, o.useMemo)(() => (void 0 !== r ? [r] : void 0), [r]);
        return (0, s.jsx)(a.g, {
          items: i,
          size: 'sm',
          showScrollIndicators: !1,
          isLoading: t,
          className: 'w-60 max-w-full',
          label: c,
          selectionMode: 'single',
          selectedKeys: d,
          onSelectionChange: (e) => {
            let t = Array.from(e.values())[0];
            null == l || l(t);
          },
          renderValue: (e) =>
            e.map((e) => {
              var t, l, a;
              return (0, s.jsxs)(
                'div',
                {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, s.jsx)('span', {
                      children:
                        null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.label,
                    }),
                    !!(null === (l = e.data) || void 0 === l
                      ? void 0
                      : l.count) &&
                      (0, s.jsxs)('span', {
                        className: '',
                        children: [
                          '(',
                          null === (a = e.data) || void 0 === a
                            ? void 0
                            : a.count,
                          ')',
                        ],
                      }),
                  ],
                },
                e.key,
              );
            }),
          children: (e) =>
            (0, s.jsxs)(
              n.R,
              {
                children: [
                  e.label,
                  !!(null == e ? void 0 : e.count) &&
                    (0, s.jsxs)('span', {
                      className: 'text-xs text-gray-500',
                      children: ['(', null == e ? void 0 : e.count, ')'],
                    }),
                ],
              },
              e.value,
            ),
        });
      };
    },
    69142: function (e, t, l) {
      'use strict';
      l.d(t, {
        K: function () {
          return N;
        },
      });
      var s = l(57437),
        a = l(91617),
        n = l(66496),
        o = l(29629),
        r = l(9139),
        i = l(964),
        c = l(51446),
        d = l(93908),
        u = l(64757),
        m = l(71272),
        x = l(7337),
        v = l(86778),
        h = l(65703),
        f = l(2265),
        g = l(69077),
        p = l(19355),
        y = l(24842),
        b = l(96019),
        j = l(98551),
        _ = l(90089);
      let N = (e) => {
        let { assets_name: t, assets_type: l, address: N } = e,
          { t: w, i18n: k } = (0, _.$G)(),
          { network: C } = (0, y.$)((e) => e),
          [S, M] = (0, f.useState)(1),
          [A, z] = (0, f.useState)(12),
          [U, P] = (0, f.useState)(0),
          [Z, F] = (0, f.useState)(void 0),
          { data: O, isLoading: B } = (0, a.ZP)(
            '/ordx/history-'
              .concat(t, '-')
              .concat(N, '-')
              .concat(S, '-')
              .concat(A, '-')
              .concat(U, '-')
              .concat(Z),
            () =>
              (0, h.s1)({
                offset: (S - 1) * A,
                size: A,
                assets_name: t,
                assets_type: l,
                address: N,
                sort: U,
                filter: 0 === Z ? void 0 : Z,
              }),
            { revalidateOnMount: !0 },
          ),
          D = (0, f.useMemo)(() => {
            var e, t;
            return (
              null == O
                ? void 0
                : null === (e = O.data) || void 0 === e
                  ? void 0
                  : e.total
            )
              ? Math.ceil(
                  (null == O
                    ? void 0
                    : null === (t = O.data) || void 0 === t
                      ? void 0
                      : t.total) / A,
                )
              : 0;
          }, [O, A]),
          L = (0, f.useMemo)(
            () => (
              console.log(w('common.executed')),
              {
                1: w('common.executed'),
                2: w('common.delist'),
                3: w('common.invalid'),
                4: w('common.list'),
                10: w('common.history_sell'),
                11: w('common.buy'),
              }
            ),
            [k.language],
          ),
          R = (0, f.useMemo)(() => {
            let e = [
              { label: w('common.filter_all'), value: 0 },
              { label: w('common.executed'), value: 1 },
              { label: w('common.delist'), value: 2 },
              { label: w('common.invalid'), value: 3 },
              { label: w('common.list'), value: 4 },
            ];
            return (
              N &&
                (e.splice(1, 1),
                e.push({ label: w('common.history_sell'), value: 10 }),
                e.push({ label: w('common.history_buy'), value: 11 })),
              e
            );
          }, [k.language, N]),
          E = (0, f.useMemo)(() => {
            let e = [
              { key: 'result_text', label: 'Type', align: 'center' },
              { key: 'utxo', label: w('common.utxo'), align: 'center' },
              {
                key: 'assets_name',
                label: w('common.assets_name'),
                align: 'center',
              },
              { key: 'price', label: w('common.price'), align: 'center' },
              { key: 'value', label: w('common.num'), align: 'center' },
              { key: 'address', label: w('common.from'), align: 'center' },
              {
                key: 'txaddress',
                label: w('common.to'),
                align: 'center',
                hideHeader: !0,
              },
              { key: 'txtime', label: w('common.time'), align: 'center' },
              {
                key: 'txid',
                label: w('common.tx'),
                allowsSorting: !1,
                align: 'center',
              },
              {
                key: 'sourcename',
                label: w('common.source'),
                allowsSorting: !1,
                align: 'center',
              },
            ];
            return e.findIndex((e) => 'txaddress' === e.key), e;
          }, [N, k.language]),
          $ = [
            { label: w('common.not_sort'), value: 0 },
            { label: w('common.sort_price_ascending'), value: 1 },
            { label: w('common.sort_price_descending'), value: 2 },
            { label: w('common.sort_time_ascending'), value: 3 },
            { label: w('common.sort_time_descending'), value: 4 },
          ],
          T = (0, f.useMemo)(() => {
            var e, t;
            return (
              (null == O
                ? void 0
                : null === (t = O.data) || void 0 === t
                  ? void 0
                  : null === (e = t.order_list) || void 0 === e
                    ? void 0
                    : e.map((e) => ({ ...e, result_text: L[e.result] }))) || []
            );
          }, [O, L]);
        return (0, s.jsx)('div', {
          className: '',
          children: (0, s.jsxs)(n.b, {
            isHeaderSticky: !0,
            isStriped: !0,
            topContent: (0, s.jsxs)('div', {
              className: 'flex justify-end gap-4 flex-wrap',
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, s.jsxs)('span', {
                      children: [w('common.filter'), '：'],
                    }),
                    (0, s.jsx)(j.a, {
                      sortList: R,
                      value: Z,
                      disabled: !T.length,
                      onChange: (e) => {
                        void 0 !== e && F(e);
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, s.jsxs)('span', { children: [w('common.sort'), '：'] }),
                    (0, s.jsx)(j.a, {
                      sortList: $,
                      value: U,
                      disabled: !T.length,
                      onChange: (e) => {
                        void 0 !== e && P(e);
                      },
                    }),
                  ],
                }),
              ],
            }),
            bottomContent:
              D > 1
                ? (0, s.jsx)('div', {
                    className: 'flex justify-center',
                    children: (0, s.jsx)(b.t, {
                      total: D,
                      page: S,
                      size: A,
                      onChange: (e, t) => {
                        M(e);
                      },
                    }),
                  })
                : null,
            children: [
              (0, s.jsx)(o.J, {
                columns: E,
                children: E.map((e) =>
                  (0, s.jsx)(
                    r.j,
                    {
                      className:
                        'text-sm md:text-base text-center font-extralight',
                      align: e.align,
                      children: e.label,
                    },
                    e.key,
                  ),
                ),
              }),
              (0, s.jsx)(i.y, {
                isLoading: B,
                items: T,
                emptyContent: 'No Data.',
                loadingContent: (0, s.jsx)(c.c, {}),
                children: T.map((e, t) =>
                  (0, s.jsx)(
                    d.g,
                    {
                      className: 'text-sm md:text-base',
                      children: (t) => {
                        let l = (0, u.sF)(e, t);
                        if (
                          'utxo' === t ||
                          'txaddress' === t ||
                          'address' === t
                        )
                          return (0, s.jsx)(m.X, {
                            className: 'text-center font-light',
                            children: l
                              ? (0, s.jsx)(x.Z, {
                                  codeString: l,
                                  className: 'bg-transparent',
                                  symbol: '',
                                  size: 'lg',
                                  variant: 'flat',
                                  children: (0, s.jsx)('span', {
                                    className: 'font-light',
                                    children: (0, g.NH)(l, 6),
                                  }),
                                })
                              : '-',
                          });
                        if ('txid' === t)
                          return (
                            console.log(l),
                            (0, s.jsx)(m.X, {
                              className: 'text-center font-light',
                              children: l
                                ? (0, s.jsx)('a', {
                                    href: (0, g.a)(l, C),
                                    target: '_blank',
                                    children: (0, s.jsx)(p.JO, {
                                      icon: 'ph:share-fill',
                                    }),
                                  })
                                : '-',
                            })
                          );
                        if ('txtime' === t)
                          return (0, s.jsx)(m.X, {
                            className:
                              'text-center font-light text-sm md:text-base',
                            children: (0, s.jsx)('span', {
                              children: new Date(Number(l)).toLocaleString(),
                            }),
                          });
                        if ('result_text' === t)
                          return (0, s.jsx)(m.X, {
                            className:
                              'text-center font-light text-sm md:text-base',
                            children: l,
                          });
                        if ('price' === t)
                          return (0, s.jsx)(m.X, {
                            children: (0, s.jsxs)('div', {
                              className: 'flex text-sm md:text-base',
                              children: [
                                'BTC' === e.currency &&
                                  (0, s.jsx)(p.JO, {
                                    icon: 'cryptocurrency-color:btc',
                                    className: 'mr-1 mt-0.5',
                                  }),
                                l,
                                'BTC' !== e.currency && ' ' + e.currency,
                              ],
                            }),
                          });
                        if ('assets_name' === t) {
                          let t = ((0, u.sF)(e, 'assets') || [])
                            .map((e) => e.assets_name)
                            .join('-');
                          return (0, s.jsx)(m.X, {
                            className:
                              'text-center font-light text-sm md:text-base',
                            children: t,
                          });
                        }
                        {
                          if ('sourcename' !== t)
                            return (0, s.jsx)(m.X, {
                              className:
                                'text-center font-light text-sm md:text-base',
                              children: l,
                            });
                          let e =
                            {
                              'Magic Eden': '/icon/m-me.png',
                              OKX: '/icon/m-okx.png',
                            }[l] || '/icon/m-sat20.png';
                          return (0, s.jsx)(m.X, {
                            className:
                              'text-center font-light text-sm md:text-base',
                            children: (0, s.jsx)(v.J, {
                              src: e,
                              alt: 'me logo',
                              className: 'w-6 h-6',
                            }),
                          });
                        }
                      },
                    },
                    e.utxo + t,
                  ),
                ),
              }),
            ],
          }),
        });
      };
    },
    27517: function (e, t, l) {
      'use strict';
      l.d(t, {
        j: function () {
          return r;
        },
      });
      var s = l(57437),
        a = l(41733),
        n = l(24842);
      l(2265);
      var o = l(90089);
      let r = (e) => {
        var t;
        let { children: l, className: r, text: i, keepStyle: c } = e;
        null == l || null === (t = l.props) || void 0 === t || t.onClick;
        let { t: d } = (0, o.$G)(),
          { connected: u, setModalVisible: m } = (0, n.$)((e) => e);
        return u || c
          ? (0, s.jsx)(s.Fragment, { children: l })
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(a.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => m(!0),
                radius: 'sm',
                className: r,
                color: 'primary',
                children: i || d('buttons.connect'),
              }),
            });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 9508, 3911, 1277, 1271, 4158, 8791, 6425, 148,
        9189, 9544, 3368, 4621, 42, 8838, 6007, 9662, 6752, 1752, 5947, 6803,
        5579, 1447, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 79788));
      },
    ),
      (_N_E = e.O());
  },
]);
