(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9550],
  {
    52368: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 8820));
    },
    8820: function (e, s, t) {
      'use strict';
      t.r(s),
        t.d(s, {
          default: function () {
            return k;
          },
        });
      var a = t(57437),
        i = t(65703),
        l = t(59430),
        r = t(65647),
        n = t(72354),
        c = t(55448),
        d = t(62121),
        o = t(41733),
        u = t(86778),
        f = t(75945),
        m = t(56803),
        h = t(40884),
        x = t(66496),
        g = t(29629),
        j = t(9139),
        p = t(964),
        v = t(1271),
        _ = t(24842),
        b = t(16463),
        y = t(2265),
        N = t(90089),
        w = t(46807),
        S = t(52975);
      function k() {
        let { t: e, i18n: s } = (0, N.$G)(),
          t = (0, b.useSearchParams)().get('txid'),
          [k, C] = (0, y.useState)(!1),
          { feeRate: Z } = (0, r.Ee)((e) => e),
          { address: P, network: E, publicKey: z } = (0, _.$)((e) => e),
          [J, { set: O }] = (0, w.Z)([]),
          [T, A] = (0, y.useState)(''),
          [G, { set: q }] = (0, S.Z)({ items: [] }),
          [D, M] = (0, y.useState)(!1),
          R =
            'testnet' === E
              ? 'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep'
              : 'bc1pwdm870vha822ux4084dxsh899apan7ugwj6f4yu9ntzrk7sled7q06ck8a',
          V = (e, s) => {
            (G.items[e - 1].sat = s), q('items', G.items);
          },
          Y = () => {
            let e = G.items.length + 1;
            q('items', [...G.items, { id: e, sat: '' }]);
          },
          $ = (e) => {
            if (G.items.length > 1) {
              let s = G.items.filter((s) => s.id !== e);
              s.forEach((e, s) => {
                e.id = s + 1;
              }),
                q('items', s);
            }
          },
          B = async () => {
            D ? F() : I();
          },
          F = async () => {
            C(!0);
            try {
              let s = await H();
              if (s && '' !== s.txid) {
                if (0 === s.status || 1 === s.status) {
                  C(!1),
                    v.ZP.info({
                      message: e('notification.search_sats_title'),
                      description: 'The task for searching sats is processing.',
                    });
                  return;
                }
                if (2 === s.status) {
                  let e = JSON.parse(s.result);
                  C(!1), O(e);
                  return;
                }
                if (-1 === s.status) {
                  C(!1),
                    v.ZP.info({
                      message: e('notification.search_sats_title'),
                      description: 'The task for searching sats is processing.',
                    });
                  return;
                }
              }
              let t = await K();
              if (!t) {
                C(!1),
                  v.ZP.error({
                    message: e('notification.search_sats_title'),
                    description:
                      'Search sats in global failed: There is not enough sats to pay.',
                  });
                return;
              }
              let a = null == t ? void 0 : t.value,
                r = [{ txid: t.txid, vout: t.vout, value: t.value }],
                n = await L(t);
              if (a - 1e5 - n < 0) {
                C(!1),
                  v.ZP.error({
                    message: e('notification.transaction_title'),
                    description: 'There is no enough sats',
                  });
                return;
              }
              await (0, l.cq)({
                utxos: r,
                outputs: [{ address: R || '', value: 1e5 }],
                feeRate: Z.value,
                network: E,
                address: P,
                publicKey: z,
              });
              let c = JSON.stringify({ sat_no: G.items[0].sat }),
                d = await (0, i.ty)({
                  address: P,
                  fees: 1e5,
                  parameters: c,
                  txid: 'a2f42b3860bf09f4ef59d550d682a0c3cac2f74adcf90c04ff8da6777c519d42',
                  type: 'search_rarity_sats',
                });
              C(!1),
                200 === d.code
                  ? v.ZP.success({
                      message: e('notification.search_sats_title'),
                      description: 'Split & Send success',
                    })
                  : v.ZP.error({
                      message: e('notification.search_sats_title'),
                      description: d.msg || 'Search sats in global failed',
                    });
            } catch (s) {
              console.log('error(search sats) = ', s),
                C(!1),
                v.ZP.error({
                  message: e('notification.search_sats_title'),
                  description: s.message || 'Search sats in global failed',
                });
            }
          },
          H = async () => {
            let e;
            let s = JSON.stringify({ sat_no: G.items[0].sat }),
              t = await (0, i.lk)({
                address: P,
                parameters: s,
                type: 'search_rarity_sats',
              });
            return 200 === t.code && (e = t.data), e;
          },
          I = async () => {
            C(!0), O([]);
            let s = await (0, i.MZ)({
              address: T,
              sats: G.items.map((e) => Number(e.sat)),
              network: E,
            });
            if (0 !== s.code) {
              C(!1),
                v.ZP.error({
                  message: e('notification.search_sats_title'),
                  description: s.msg,
                });
              return;
            }
            if (null === s.data) {
              C(!1),
                v.ZP.error({
                  message: e('notification.search_sats_title'),
                  description: 'No data',
                });
              return;
            }
            C(!1), O(s.data);
          },
          K = async () => {
            let e;
            let s = await (0, i.wt)({ address: P, value: 0, network: E });
            if (0 === s.code) {
              let t = s.data.sort((e, s) => e.value - s.value);
              for (let s = 0; s < t.length; s++) {
                let a = t[s];
                if (a.value > 1e5 && (await L(a)) > 0) {
                  e = a;
                  break;
                }
              }
            }
            return e;
          },
          L = async (e) => {
            let s = e.value,
              t = [{ txid: e.txid, vout: e.vout, value: e.value }],
              a = await (0, l.QV)({
                utxos: t,
                outputs: [{ address: R || '', value: 1e5 }],
                feeRate: Z.value,
                network: E,
                address: P,
                publicKey: z,
              });
            return s - 1e5 - a < 0 && (a = -1), a;
          },
          Q = (e) => {
            M(e), G.items.length > 0 && q('items', [G.items[0]]), A('');
          };
        return (
          (0, y.useEffect)(() => {
            t
              ? (q('items', [{ id: 1, sat: '1234567890' }]), M(!0))
              : q('items', [{ id: 1, sat: '' }]);
          }, [P, t]),
          (0, a.jsxs)('div', {
            className: 'flex flex-col max-w-7xl mx-auto pt-8',
            children: [
              (0, a.jsx)(n.w, {
                children: (0, a.jsxs)(c.G, {
                  children: [
                    G.items.map((e, s) =>
                      (0, a.jsxs)(
                        'div',
                        {
                          className: 'flex w-full gap-2 pb-2',
                          children: [
                            (0, a.jsx)(d.Y, {
                              className: 'w-[90%]',
                              value: e.sat,
                              startContent: (0, a.jsx)('div', {
                                className:
                                  'pointer-events-none flex items-center w-[19%] bg-gray-500 justify-center h-full',
                                children: (0, a.jsx)('span', {
                                  className: 'text-small txt-default-500',
                                  children: 'Sat',
                                }),
                              }),
                              onChange: (s) => V(e.id, s.target.value),
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex gap-2',
                              children: [
                                (0, a.jsx)(o.A, {
                                  radius: 'full',
                                  onClick: Y,
                                  children: (0, a.jsx)(u.J, {
                                    radius: 'full',
                                    src: '../icon/add.svg',
                                    alt: 'logo',
                                    className: 'w-10 h-10 p-1 rounded-full ',
                                  }),
                                }),
                                (0, a.jsx)(o.A, {
                                  radius: 'full',
                                  onClick: () => $(e.id),
                                  children: (0, a.jsx)(u.J, {
                                    radius: 'full',
                                    src: '../icon/del.svg',
                                    alt: 'logo',
                                    className: 'w-10 h-10 p-1 rounded-full ',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                    (0, a.jsx)(f.j, { className: 'mt-4 mb-4' }),
                    (0, a.jsx)('div', {
                      className: 'flex w-full',
                      children: (0, a.jsx)(d.Y, {
                        value: T,
                        onChange: (e) => A(e.target.value),
                        isDisabled: D,
                        startContent: (0, a.jsx)('div', {
                          className:
                            'pointer-events-none flex items-center w-[16%] bg-gray-500 justify-center h-full',
                          children: (0, a.jsx)('span', {
                            className: 'text-small txt-default-500',
                            children: 'BTC Address',
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)(f.j, { className: 'mt-4 mb-4' }),
                    (0, a.jsxs)('div', {
                      className: 'flex gap-2 pb-2 justify-end',
                      children: [
                        (0, a.jsx)(m.i, {
                          defaultSelected: D,
                          onValueChange: () => Q(!D),
                          children: (0, a.jsx)('p', {
                            className: 'text-gray-400 font-thin',
                            children: 'Search In Global(Fee: 100,000 Sats)',
                          }),
                        }),
                        (0, a.jsx)(o.A, {
                          size: 'md',
                          color: 'primary',
                          onKeyDown: function (e) {
                            'Enter' === e.key && B();
                          },
                          isLoading: k,
                          onClick: B,
                          children: 'Search',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(f.j, { className: 'mt-4 mb-4' }),
              (0, a.jsxs)(n.w, {
                children: [
                  (0, a.jsx)(h.u, {
                    children: (0, a.jsx)('h1', {
                      children: e('pages.tools.search_sat.table_title'),
                    }),
                  }),
                  (0, a.jsx)(f.j, {}),
                  (0, a.jsx)(c.G, {
                    children: (0, a.jsxs)(x.b, {
                      isHeaderSticky: !0,
                      isStriped: !0,
                      color: 'primary',
                      selectionMode: 'single',
                      children: [
                        (0, a.jsxs)(g.J, {
                          children: [
                            (0, a.jsx)(j.j, {
                              className: 'text-sm md:text-base font-thin',
                              children: e('pages.tools.search_sat.table_col1'),
                            }),
                            (0, a.jsx)(j.j, {
                              className: 'text-sm md:text-base font-thin',
                              children: e('pages.tools.search_sat.table_col2'),
                            }),
                            (0, a.jsx)(j.j, {
                              className: 'text-sm md:text-base font-thin',
                              children: e('pages.tools.search_sat.table_col3'),
                            }),
                            (0, a.jsx)(j.j, {
                              className: 'text-sm md:text-base font-thin',
                              children: e('pages.tools.search_sat.table_col4'),
                            }),
                          ],
                        }),
                        (0, a.jsx)(p.y, {
                          emptyContent: 'No datas.',
                          children: J.map((e, s) =>
                            (0, a.jsx)(
                              j.j,
                              {
                                className: 'text-sm md:text-base',
                                children: e.sat,
                              },
                              s,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 148, 9544,
        6803, 9528, 1447, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 52368));
      },
    ),
      (_N_E = e.O());
  },
]);
