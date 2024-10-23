(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6104],
  {
    9825: function (e, s, l) {
      Promise.resolve().then(l.bind(l, 60153));
    },
    60153: function (e, s, l) {
      'use strict';
      l.r(s),
        l.d(s, {
          default: function () {
            return w;
          },
        });
      var t = l(57437),
        a = l(66496),
        n = l(29629),
        i = l(9139),
        r = l(964),
        c = l(93908),
        o = l(71272),
        d = l(7337),
        m = l(41733),
        x = l(91142),
        h = l(34191),
        u = l(62121),
        p = l(70148),
        f = l(72847),
        g = l(1271),
        j = l(65647),
        b = l(2265),
        N = l(14498),
        v = l(69077),
        _ = l(24842),
        y = l(90089);
      function w() {
        let { t: e } = (0, y.$G)(),
          [s, l] = (0, b.useState)(!1),
          { list: w, remove: S } = (0, j.JU)(),
          { feeRate: k } = (0, j.Ee)(),
          { getUnspendUtxos: C } = (0, j.YL)(),
          [A, E] = (0, b.useState)('single'),
          { network: P, btcWallet: U } = (0, _.$)((e) => e),
          [Y, z] = (0, b.useState)(''),
          [L, O] = (0, b.useState)(''),
          [Z, H] = (0, b.useState)(!1),
          [J, K] = (0, b.useState)('');
        console.log('app.account.sell.page: list: ', w);
        let M = (s) => {
            for (let l of s)
              if (!(0, N.Sd)(l, P))
                return O(e('pages.inscribe.step_three.error_3')), !1;
            return !0;
          },
          X = (0, b.useMemo)(
            () =>
              'single' === A
                ? Array.from({ length: w.length })
                    .fill(Y.trim())
                    .filter((e) => !!e)
                : J.split('\n')
                    .map((e) => e.trim())
                    .filter((e) => '' !== e),
            [J, Y, A, w],
          ),
          $ = async () => {
            if (0 === X.length) {
              O(e('pages.transfer.error_1'));
              return;
            }
            if (X.length !== w.length) {
              O(e('pages.transfer.error_2'));
              return;
            }
            if (!M(X)) return;
            l(!0);
            let s = C();
            try {
              let l = await (0, v.YU)({
                inscriptionUtxos: w,
                addresses: X,
                network: P,
                oneOutput: Z,
                utxos: s,
                feeRate: k.value,
              });
              if (!U) throw Error('No wallet connected');
              let t = await U.signPsbt(l.toHex());
              t && (await U.pushPsbt(t)),
                g.ZP.success({
                  message: e('notification.transfer_success_title'),
                });
            } catch (s) {
              console.error('List failed', s),
                g.ZP.error({
                  message: e('notification.transfer_error_title'),
                  description: s.message,
                });
            } finally {
              l(!1);
            }
          };
        return (0, t.jsxs)('div', {
          className: 'py-2 max-w-4xl mx-auto',
          children: [
            (0, t.jsxs)('div', {
              className: 'flex flex-col justify-between gap-4 mb-4',
              children: [
                (0, t.jsx)('div', {
                  className: 'flex-1 mb-2 md:mb-0',
                  children: (0, t.jsxs)(a.b, {
                    'aria-label': 'Example static collection table',
                    children: [
                      (0, t.jsxs)(n.J, {
                        children: [
                          (0, t.jsxs)(i.j, {
                            className: 'text-sm md:text-base',
                            children: [e('common.item'), '(', w.length, ')'],
                          }),
                          (0, t.jsx)(i.j, {
                            className: 'text-sm md:text-base',
                            children: 'Action',
                          }),
                        ],
                      }),
                      (0, t.jsx)(r.y, {
                        children: w.map((s, l) => {
                          var a;
                          return (0, t.jsxs)(
                            c.g,
                            {
                              children: [
                                (0, t.jsxs)(o.X, {
                                  children: [
                                    (0, t.jsx)('div', {
                                      className:
                                        'mb-2 flex flex-wrap items-center gap-4',
                                      children:
                                        null === (a = s.assets_list) ||
                                        void 0 === a
                                          ? void 0
                                          : a.map((l) =>
                                              (0, t.jsxs)(
                                                'div',
                                                {
                                                  children: [
                                                    (0, t.jsxs)('div', {
                                                      children: [
                                                        (0, t.jsxs)('span', {
                                                          className:
                                                            'text-gray-400',
                                                          children: [
                                                            'ns' ===
                                                            l.assets_type
                                                              ? 'Name'
                                                              : 'Ticker',
                                                            '：',
                                                          ],
                                                        }),
                                                        (0, t.jsx)('span', {
                                                          children:
                                                            l.assets_name,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, t.jsxs)('div', {
                                                      children: [
                                                        (0, t.jsxs)('span', {
                                                          className:
                                                            'text-gray-400',
                                                          children: [
                                                            e(
                                                              'common.asset_num',
                                                            ),
                                                            '：',
                                                          ],
                                                        }),
                                                        (0, t.jsx)('span', {
                                                          children: l.amount,
                                                        }),
                                                        (0, t.jsx)('span', {
                                                          className:
                                                            'text-gray-400 ml-4 ',
                                                          children: 'Sats:',
                                                        }),
                                                        s.value,
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                l.assets_name,
                                              ),
                                            ),
                                    }),
                                    (0, t.jsxs)('div', {
                                      className: 'flex items-center',
                                      children: [
                                        (0, t.jsx)('span', {
                                          className: 'text-gray-400',
                                          children: 'Utxo：',
                                        }),
                                        (0, t.jsx)(d.Z, {
                                          codeString:
                                            null == s ? void 0 : s.utxo,
                                          className:
                                            'bg-transparent text-gray-500',
                                          symbol: '',
                                          size: 'lg',
                                          variant: 'flat',
                                          children: (0, t.jsx)('span', {
                                            className: 'font-thin',
                                            children: (0, v.NH)(
                                              null == s ? void 0 : s.utxo,
                                              6,
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(o.X, {
                                  children: (0, t.jsx)(m.A, {
                                    onClick: () => {
                                      S(s.utxo);
                                    },
                                    children: e('common.delete'),
                                  }),
                                }),
                              ],
                            },
                            s.utxo,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'max-w-full',
                  children: (0, t.jsxs)(x.n, {
                    'aria-label': 'address tabs',
                    className: 'w-full',
                    selectedKey: A,
                    onSelectionChange: (e) => E(e),
                    children: [
                      (0, t.jsx)(
                        h.r,
                        {
                          title: e('pages.inscribe.step_three.to_single'),
                          children: (0, t.jsxs)('div', {
                            className: 'mb-4',
                            children: [
                              (0, t.jsx)('div', {
                                children: (0, t.jsx)(u.Y, {
                                  placeholder: 'Basic usage',
                                  value: Y,
                                  onChange: (e) => z(e.target.value),
                                }),
                              }),
                              (0, t.jsx)('div', {
                                className: 'mb-4',
                                children: (0, t.jsx)(p.K, {
                                  isSelected: Z,
                                  onValueChange: (e) => H(e),
                                  children: '合并到一个utxo',
                                }),
                              }),
                            ],
                          }),
                        },
                        'single',
                      ),
                      (0, t.jsx)(
                        h.r,
                        {
                          title: e('pages.inscribe.step_three.to_multiple'),
                          children: (0, t.jsxs)('div', {
                            className: 'mb-4',
                            children: [
                              (0, t.jsxs)('div', {
                                className: 'mb-2',
                                children: [
                                  'Multiple Adddress (',
                                  X.length,
                                  '):',
                                ],
                              }),
                              (0, t.jsx)(f.Y, {
                                disableAnimation: !0,
                                disableAutosize: !0,
                                classNames: { input: 'resize-y min-h-[140px]' },
                                className: 'w-full',
                                placeholder:
                                  'Enter multiple addresses, one per line',
                                value: J,
                                onChange: (e) => K(e.target.value),
                              }),
                              (0, t.jsx)('div', {
                                className: 'flex mt-2',
                                children: (0, t.jsx)(m.A, {
                                  color: 'primary',
                                  onClick: () => {
                                    let e = J.split('\n')
                                        .map((e) => e.trim())
                                        .filter((e) => '' !== e),
                                      s = w.length || 10,
                                      l = [];
                                    if (e.length < s) {
                                      for (let t = 0; t < s; t++)
                                        l.push(e[t % e.length]);
                                      K(l.join('\n'));
                                    }
                                  },
                                  className: 'w-full',
                                  children: e(
                                    'pages.inscribe.step_three.cycle_fill',
                                    { len: w.length },
                                  ),
                                }),
                              }),
                            ],
                          }),
                        },
                        'multiple',
                      ),
                    ],
                  }),
                }),
              ],
            }),
            !!L &&
              (0, t.jsx)('div', {
                className: 'text-red-500 text-center mb-4',
                children: L,
              }),
            (0, t.jsx)(m.A, {
              color: 'primary',
              isLoading: s,
              className: 'mx-auto max-w-full w-56 block',
              onClick: $,
              children: e('common.transfer'),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 148, 9189,
        9544, 4621, 8838, 4206, 1447, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 9825));
      },
    ),
      (_N_E = e.O());
  },
]);
