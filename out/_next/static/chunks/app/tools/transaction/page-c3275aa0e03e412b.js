(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1205],
  {
    72994: function (s, e, t) {
      Promise.resolve().then(t.bind(t, 96966));
    },
    96966: function (s, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return E;
          },
        });
      var a = t(57437),
        l = t(72354),
        i = t(40884),
        n = t(75945),
        r = t(55448),
        c = t(68937),
        u = t(90089),
        o = t(2265),
        m = t(52975),
        d = t(46807),
        x = t(24842),
        p = t(65647),
        v = t(65703),
        h = t(59430),
        f = t(1271),
        g = t(41733),
        b = t(52551),
        j = t(8127),
        N = t(62121);
      function w(s) {
        let {
            inputList: e,
            tickerList: t,
            handleTickerSelectChange: l,
            handleUtxoSelectChange: i,
            setInputList: n,
            loading: r,
          } = s,
          { t: c } = (0, u.$G)(),
          [m, d] = (0, o.useState)({}),
          x = () => {
            let s = (null == t ? void 0 : t.map((s) => s.ticker)) || [],
              a = e.items.length + 1;
            n('items', [
              ...e.items,
              {
                id: a,
                value: { ticker: '', utxo: '', sats: 0, unit: 'sats' },
                options: { tickers: s, utxos: [] },
              },
            ]);
          },
          p = (s) => {
            if (e.items.length > 1) {
              let t = e.items.filter((e) => e.id !== s);
              t.forEach((s, e) => {
                s.id = e + 1;
              }),
                n('items', t);
            }
          },
          v = (s, t) => {
            let a = t.target.value;
            (e.items[s - 1].value.unit = a), n('items', e.items);
          },
          f = async (s, e) => {
            d((e) => ({ ...e, [s]: !0 })),
              await l(s, e),
              d((e) => ({ ...e, [s]: !1 }));
          };
        return (
          console.log('inputList', e),
          (0, a.jsxs)('div', {
            className: 'space-y-4',
            children: [
              (0, a.jsxs)('h2', {
                className: 'text-base sm:text-lg font-semibold',
                children: [c('pages.tools.transaction.input'), ' UTXO'],
              }),
              (0, a.jsx)('div', {
                className: 'space-y-3 sm:space-y-4',
                children: e.items.map((s, l) => {
                  var n, c, u;
                  return (0, a.jsxs)(
                    'div',
                    {
                      className:
                        'border border-divider bg-content1 p-2 sm:p-3 rounded-lg space-y-2 sm:space-y-3',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, a.jsxs)('span', {
                              className: 'text-sm sm:text-base font-medium',
                              children: ['Input ', l + 1],
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex space-x-1 sm:space-x-2',
                              children: [
                                (0, a.jsx)(g.A, {
                                  size: 'sm',
                                  color: 'primary',
                                  variant: 'flat',
                                  onClick: x,
                                  className:
                                    'min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2',
                                  children: '+',
                                }),
                                (0, a.jsx)(g.A, {
                                  size: 'sm',
                                  color: 'danger',
                                  variant: 'flat',
                                  onClick: () => p(s.id),
                                  className:
                                    'min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2',
                                  isDisabled: 1 === e.items.length,
                                  children: '-',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'grid grid-cols-1 gap-2 sm:gap-3',
                          children: [
                            (0, a.jsx)(b.g, {
                              label: 'Ticker',
                              placeholder: 'Select Ticker',
                              size: 'sm',
                              className: 'w-full',
                              selectedKeys: (
                                null === (n = s.value) || void 0 === n
                                  ? void 0
                                  : n.ticker
                              )
                                ? [s.value.ticker]
                                : [],
                              onChange: (e) => f(s.id, e.target.value),
                              isLoading: m[s.id] || r,
                              children:
                                null == t
                                  ? void 0
                                  : t.map((s) =>
                                      (0, a.jsx)(
                                        j.R,
                                        {
                                          value: s.ticker,
                                          children: (0, h.t2)(s.ticker),
                                        },
                                        s.ticker,
                                      ),
                                    ),
                            }),
                            (0, a.jsx)(b.g, {
                              label: 'UTXO',
                              placeholder: 'Select UTXO',
                              size: 'sm',
                              className: 'w-full',
                              selectedKeys: (
                                null === (c = s.value) || void 0 === c
                                  ? void 0
                                  : c.utxo
                              )
                                ? [s.value.utxo]
                                : [],
                              onChange: (e) => i(s.id, e.target.value),
                              isLoading: m[s.id] || r,
                              children:
                                null === (u = s.options) || void 0 === u
                                  ? void 0
                                  : u.utxos.map((s) =>
                                      (0, a.jsx)(
                                        j.R,
                                        {
                                          textValue: s.txid + ':' + s.vout,
                                          children: (0, a.jsxs)('div', {
                                            className:
                                              'truncate text-xs sm:text-sm',
                                            children: [
                                              s.assetamount &&
                                                s.assetamount + ' Asset/',
                                              s.value +
                                                ' sats - ' +
                                                (0, h.NH)(
                                                  s.txid + ':' + s.vout,
                                                ),
                                            ],
                                          }),
                                        },
                                        s.txid + ':' + s.vout,
                                      ),
                                    ),
                            }),
                            (0, a.jsx)(N.Y, {
                              type: 'number',
                              label: 'Amount',
                              placeholder: '0',
                              size: 'sm',
                              readOnly: !0,
                              className: 'w-full',
                              value:
                                'sats' === s.value.unit
                                  ? s.value.sats
                                  : s.value.sats / 1e8,
                              endContent: (0, a.jsxs)(b.g, {
                                'aria-label': 'Select unit',
                                size: 'sm',
                                className: 'w-24 sm:w-32 min-w-max',
                                selectedKeys: [s.value.unit],
                                onChange: (e) => v(s.id, e),
                                children: [
                                  (0, a.jsx)(
                                    j.R,
                                    { value: 'sats', children: 'sats' },
                                    'sats',
                                  ),
                                  (0, a.jsx)(
                                    j.R,
                                    { value: 'btc', children: 'btc' },
                                    'btc',
                                  ),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  );
                }),
              }),
            ],
          })
        );
      }
      var y = t(64621);
      function k(s) {
        let { outputList: e, setOutputList: t, address: l } = s,
          { t: i } = (0, u.$G)(),
          n = () => {
            let s = e.items.length + 1;
            t('items', [
              ...e.items,
              { id: s, num: 1, value: { sats: 0, unit: 'sats', address: '' } },
            ]);
          },
          r = (s) => {
            if (e.items.length > 1) {
              let a = e.items.filter((e) => e.id !== s);
              a.forEach((s, e) => {
                s.id = e + 1;
              }),
                t('items', a);
            }
          },
          c = (s, a) => {
            (e.items[s - 1].value.address = a), t('items', e.items);
          },
          o = (s, a) => {
            console.log(a),
              'sats' === e.items[s - 1].value.unit
                ? (e.items[s - 1].value.sats = Number(a))
                : (e.items[s - 1].value.sats = 1e8 * Number(a)),
              t('items', e.items);
          },
          m = (s, a) => {
            console.log(Number(a)),
              (e.items[s - 1].num = Number(a)),
              t('items', e.items);
          },
          d = (s, a) => {
            let l = a.target.value;
            (e.items[s - 1].value.unit = l), t('items', e.items);
          };
        return (0, a.jsxs)('div', {
          className: 'space-y-4',
          children: [
            (0, a.jsxs)('h2', {
              className: 'text-base sm:text-lg font-semibold',
              children: [i('pages.tools.transaction.output'), ' UTXO'],
            }),
            (0, a.jsx)('div', {
              className: 'space-y-3 sm:space-y-4',
              children: e.items.map((s, t) => {
                var i;
                return (0, a.jsxs)(
                  'div',
                  {
                    className:
                      'border border-divider bg-content1 p-2 sm:p-3 rounded-lg space-y-2 sm:space-y-3',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          (0, a.jsxs)('span', {
                            className: 'text-sm sm:text-base font-medium',
                            children: ['Output ', t + 1],
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex space-x-1 sm:space-x-2',
                            children: [
                              (0, a.jsx)(N.Y, {
                                type: 'number',
                                placeholder: '0',
                                size: 'sm',
                                className: 'w-20',
                                value:
                                  null === (i = s.num) || void 0 === i
                                    ? void 0
                                    : i.toString(),
                                onChange: (e) => m(s.id, e.target.value),
                              }),
                              (0, a.jsx)(g.A, {
                                size: 'sm',
                                color: 'primary',
                                variant: 'flat',
                                onClick: n,
                                className:
                                  'min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2',
                                children: '+',
                              }),
                              (0, a.jsx)(g.A, {
                                size: 'sm',
                                color: 'danger',
                                variant: 'flat',
                                onClick: () => r(s.id),
                                className:
                                  'min-w-[24px] sm:min-w-[32px] h-6 sm:h-8 px-1 sm:px-2',
                                isDisabled: 1 === e.items.length,
                                children: '-',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'grid grid-cols-1 gap-2 sm:gap-3',
                        children: [
                          (0, a.jsx)(N.Y, {
                            label: 'BTC Address',
                            placeholder: 'Enter BTC Address',
                            size: 'sm',
                            value: s.value.address,
                            onChange: (e) => c(s.id, e.target.value),
                            className: 'w-full',
                            endContent: (0, a.jsx)(y.e, {
                              content:
                                'Fill the BTC address of the current account',
                              children: (0, a.jsx)(g.A, {
                                size: 'sm',
                                variant: 'flat',
                                onClick: () => c(s.id, l),
                                className:
                                  'px-1 sm:px-2 min-w-[40px] sm:min-w-[60px]',
                                children: 'Copy',
                              }),
                            }),
                          }),
                          (0, a.jsx)(N.Y, {
                            type: 'number',
                            label: 'Amount',
                            placeholder: '0',
                            size: 'sm',
                            className: 'w-full',
                            value:
                              'sats' === s.value.unit
                                ? s.value.sats
                                : s.value.sats / 1e8,
                            onChange: (e) => o(s.id, e.target.value),
                            endContent: (0, a.jsxs)(b.g, {
                              'aria-label': 'Select unit',
                              size: 'sm',
                              className: 'w-24 sm:w-32 min-w-max',
                              selectedKeys: [s.value.unit],
                              onChange: (e) => d(s.id, e),
                              children: [
                                (0, a.jsx)(
                                  j.R,
                                  { value: 'sats', children: 'sats' },
                                  'sats',
                                ),
                                (0, a.jsx)(
                                  j.R,
                                  { value: 'btc', children: 'btc' },
                                  'btc',
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      function C(s) {
        let { balance: e, setBalance: t, address: l } = s,
          { t: i } = (0, u.$G)(),
          n = (s) => {
            t('unit', s.target.value);
          };
        return (0, a.jsxs)('div', {
          className: 'space-y-3 sm:space-y-4',
          children: [
            (0, a.jsxs)('div', {
              className:
                'flex flex-col sm:flex-row sm:items-center sm:justify-between',
              children: [
                (0, a.jsx)('h2', {
                  className: 'text-base sm:text-lg font-semibold',
                  children: i('pages.tools.transaction.balance'),
                }),
                (0, a.jsxs)('span', {
                  className: 'text-xs sm:text-sm text-gray-400',
                  children: [
                    '(',
                    i('pages.tools.transaction.balance_des'),
                    ')',
                  ],
                }),
              ],
            }),
            (0, a.jsxs)('div', {
              className:
                'border border-divider bg-content1 p-2 sm:p-3 rounded-lg  space-y-2 sm:space-y-3',
              children: [
                (0, a.jsx)(N.Y, {
                  label: 'Current Address',
                  value: l,
                  readOnly: !0,
                  size: 'sm',
                  className: 'w-full',
                }),
                (0, a.jsx)(N.Y, {
                  type: 'number',
                  label: 'Balance',
                  placeholder: '0',
                  size: 'sm',
                  value: 'sats' === e.unit ? e.sats : e.sats / 1e8,
                  className: 'w-full',
                  endContent: (0, a.jsxs)(b.g, {
                    'aria-label': 'Select unit',
                    size: 'sm',
                    className: 'w-24 sm:w-32 min-w-max',
                    selectedKeys: [e.unit],
                    onChange: (s) => n(s),
                    children: [
                      (0, a.jsx)(
                        j.R,
                        { value: 'sats', children: 'sats' },
                        'sats',
                      ),
                      (0, a.jsx)(j.R, { value: 'btc', children: 'btc' }, 'btc'),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var _ = t(27517);
      function z(s) {
        let { loading: e, splitHandler: t, fee: l, feeRate: i } = s,
          { t: n } = (0, u.$G)();
        return (0, a.jsxs)('div', {
          className: 'flex flex-col items-center w-full space-y-2 sm:space-y-3',
          children: [
            (0, a.jsx)(_.j, {
              className: 'w-full',
              children: (0, a.jsx)(g.A, {
                color: 'primary',
                onClick: t,
                isLoading: e,
                className: 'w-full sm:w-auto',
                size: 'sm',
                children: n('pages.tools.transaction.btn_send'),
              }),
            }),
            (0, a.jsxs)('div', {
              className: 'text-xs sm:text-sm text-gray-400 text-center',
              children: [
                (0, a.jsxs)('p', {
                  children: [
                    n('pages.tools.transaction.network_fee'),
                    ': ',
                    l,
                    ' sats',
                  ],
                }),
                (0, a.jsxs)('p', { children: [i.value, ' sat/vb'] }),
              ],
            }),
          ],
        });
      }
      function E() {
        let { t: s } = (0, u.$G)(),
          {
            fee: e,
            loading: t,
            address: g,
            inputList: b,
            outputList: j,
            balance: N,
            tickerList: y,
            handleTickerSelectChange: _,
            handleUtxoSelectChange: E,
            setInputList: A,
            setOutputList: S,
            setBalance: R,
            splitHandler: O,
            feeRate: T,
          } = (function () {
            let { t: s } = (0, u.$G)(),
              [e, t] = (0, o.useState)(0),
              { feeRate: a } = (0, p.Ee)((s) => s),
              [l, i] = (0, o.useState)(!1),
              { address: n, network: r, publicKey: c } = (0, x.$)((s) => s),
              [g, b] = (0, o.useState)(0),
              [j, N] = (0, o.useState)(100),
              [w, y] = (0, o.useState)(100),
              [k, { set: C }] = (0, m.Z)({
                items: [
                  {
                    id: 1,
                    value: {
                      ticker: '',
                      utxo: '',
                      sats: 0,
                      unit: 'sats',
                      description: '',
                    },
                    options: { tickers: [], utxos: [] },
                  },
                ],
              }),
              [_, { set: z }] = (0, m.Z)({
                items: [
                  {
                    id: 1,
                    num: 1,
                    value: { sats: 0, unit: 'sats', address: '' },
                  },
                ],
              }),
              [E, { set: A }] = (0, m.Z)({ sats: 0, unit: 'sats' }),
              [S, { set: R }] = (0, d.Z)([]),
              O = (0, o.useCallback)(
                (s, e) => {
                  let t = [...k.items];
                  t[s - 1].value = {
                    ...t[s - 1].value,
                    ticker: e,
                    sats: 0,
                    unit: 'sats',
                    utxo: '',
                    utxos: [],
                  };
                  let a = (
                    (null == S ? void 0 : S.find((s) => s.ticker === e)) || []
                  ).utxos;
                  k.items.length > 1 &&
                    k.items.forEach((e, t) => {
                      t !== s - 1 &&
                        (a = [
                          ...new Set(
                            (a = a.filter(
                              (s) => s.txid + ':' + s.vout !== e.value.utxo,
                            )),
                          ),
                        ]);
                    }),
                    (t[s - 1].options.utxos = a),
                    C('items', t);
                },
                [k.items, S],
              ),
              T = (0, o.useCallback)(
                (s, e) => {
                  let t = e.split(':')[0],
                    a = Number(e.split(':')[1]),
                    l = k.items[s - 1].options.utxos.find(
                      (s) => s.txid === t && s.vout === a,
                    ),
                    i = [...k.items];
                  (i[s - 1].value = {
                    ...i[s - 1].value,
                    sats: (null == l ? void 0 : l.value) || 0,
                    utxo: e,
                    description: (null == l ? void 0 : l.assetamount)
                      ? ''
                          .concat(l.assetamount, ' Asset/ ')
                          .concat(l.value, ' sats')
                      : ''.concat(l.value, ' sats'),
                  }),
                    C('items', i),
                    L();
                },
                [k.items],
              ),
              L = (0, o.useCallback)(async () => {
                let s = 0,
                  e = 0;
                if (
                  (k.items.forEach((e) => {
                    s += e.value.sats;
                  }),
                  0 === s)
                )
                  return;
                let l = [];
                if (
                  (_.items.forEach((s) => {
                    for (let e = 0; e < s.num; e++)
                      l.push({ address: s.value.address, value: s.value.sats });
                  }),
                  l.forEach((s) => {
                    e += s.value;
                  }),
                  0 === e)
                )
                  return;
                let i = k.items.map((s) => ({
                    txid: s.value.utxo.split(':')[0],
                    vout: Number(s.value.utxo.split(':')[1]),
                    value: s.value.sats,
                  })),
                  u = await (0, h.QV)({
                    utxos: i,
                    outputs: l,
                    feeRate: a.value,
                    network: r,
                    address: n,
                    publicKey: c,
                  });
                t(u), A('sats', s - e - u);
              }, [k.items, _.items, a.value, r, n, c]),
              Z = (0, o.useCallback)(async () => {
                let e = [],
                  t = await (0, v.zO)({ address: n, network: r });
                if (0 !== t.code) {
                  f.ZP.error({
                    message: s('notification.transaction_title'),
                    description: t.msg,
                  });
                  return;
                }
                let a = t.data.detail;
                return (
                  await Promise.all(
                    a.map(async (s) => {
                      if ('e' === s.type || 'o' === s.type) return;
                      let a = s.type;
                      'f' === s.type && (a = s.ticker);
                      let l = [],
                        i = 0;
                      if (
                        0 ===
                        (t = await (0, v.Rw)({
                          start: 0,
                          limit: j,
                          address: n,
                          tickerOrAssetsType: a,
                          network: r,
                        })).code
                      ) {
                        let s = t.data.detail;
                        (i = t.data.total),
                          s.forEach((s) => {
                            let e = {
                              txid: s.utxo.split(':')[0],
                              vout: Number(s.utxo.split(':')[1]),
                              value: s.amount,
                              assetamount: s.assetamount,
                            };
                            l.push(e);
                          });
                      }
                      e.push({ ticker: s.ticker, total: i, utxos: l });
                    }),
                  ),
                  e
                );
              }, [n, r, j, s]),
              $ = (0, o.useCallback)(async () => {
                let e = await (0, v.wt)({ address: n, value: 0, network: r });
                if (0 !== e.code) {
                  f.ZP.error({
                    message: s('notification.transaction_title'),
                    description: e.msg,
                  });
                  return;
                }
                return {
                  ticker: s('pages.tools.transaction.available_utxo'),
                  utxos: e.data,
                };
              }, [n, r, s]),
              G = (0, o.useCallback)(async () => {
                let e = await (0, v.bA)({ address: n, network: r }),
                  t = [];
                return (
                  0 === e.code &&
                    e.data.forEach((e) => {
                      let a = !1;
                      if (
                        (e.sats &&
                          e.sats.length > 0 &&
                          e.sats.forEach((s) => {
                            if (s.satributes && s.satributes.length > 0) {
                              a = !0;
                              return;
                            }
                          }),
                        a)
                      ) {
                        let a = {
                          txid: e.utxo.split(':')[0],
                          vout: Number(e.utxo.split(':')[1]),
                          value: e.value,
                        };
                        if (0 === t.length)
                          t.push({
                            ticker:
                              s('pages.tools.transaction.rare_sats') +
                              '-' +
                              e.sats[0].satributes[0],
                            utxos: [a],
                          });
                        else {
                          let l = !1;
                          t.forEach((s) => {
                            s.utxos.forEach((s) => {
                              if (s === a.txid + ':' + a.vout) {
                                l = !0;
                                return;
                              }
                            });
                          }),
                            l ||
                              (t.some(
                                (t) =>
                                  t.ticker ===
                                  s('pages.tools.transaction.rare_sats') +
                                    '-' +
                                    e.sats[0].satributes[0],
                              )
                                ? (t = t.map((t) =>
                                    t.ticker ===
                                    s('pages.tools.transaction.rare_sats') +
                                      '-' +
                                      e.sats[0].satributes[0]
                                      ? {
                                          ticker: t.ticker,
                                          utxos: [...t.utxos, a],
                                        }
                                      : t,
                                  ))
                                : t.push({
                                    ticker:
                                      s('pages.tools.transaction.rare_sats') +
                                      '-' +
                                      e.sats[0].satributes[0],
                                    utxos: [a],
                                  }));
                        }
                      }
                    }),
                  t
                );
              }, [n, r, s]),
              P = (0, o.useCallback)(async () => {
                let s = await Z(),
                  e = await $();
                null == s || s.push(e);
                let t = await G();
                R((null == s ? void 0 : s.concat(t)) || []);
              }, [Z, $, G]),
              Y = (0, o.useCallback)(async () => {
                if (n) {
                  i(!0);
                  try {
                    let e = k.items.reduce((s, e) => s + e.value.sats, 0),
                      t = k.items.map((s) => ({
                        txid: s.value.utxo.split(':')[0],
                        vout: Number(s.value.utxo.split(':')[1]),
                        value: s.value.sats,
                      })),
                      l = [];
                    _.items.forEach((s) => {
                      for (let e = 0; e < s.num; e++)
                        l.push({
                          address: s.value.address,
                          value: s.value.sats,
                        });
                    });
                    let u = l.reduce((s, e) => s + e.value, 0),
                      o = await (0, h.QV)({
                        utxos: t,
                        outputs: l,
                        feeRate: a.value,
                        network: r,
                        address: n,
                        publicKey: c,
                      });
                    if (e - u - o < 0) {
                      i(!1),
                        f.ZP.error({
                          message: s('notification.transaction_title'),
                          description: 'Not enough sats',
                        });
                      return;
                    }
                    let m = await (0, h.cq)({
                      utxos: t,
                      outputs: l,
                      feeRate: a.value,
                      network: r,
                      address: n,
                      publicKey: c,
                    });
                    await (0, h.hw)(m),
                      i(!1),
                      f.ZP.success({
                        message: s('notification.transaction_title'),
                        description: s(
                          'notification.transaction_spilt_success',
                        ),
                      }),
                      b((s) => s + 1);
                  } catch (e) {
                    console.log('error(transfer sats) = ', e),
                      i(!1),
                      f.ZP.error({
                        message: s('notification.transaction_title'),
                        description:
                          e.message || s('notification.transaction_spilt_fail'),
                      });
                  }
                }
              }, [n, k.items, _.items, a.value, r, c, s]);
            return (
              (0, o.useEffect)(() => {
                L();
              }, [a, k, _]),
              (0, o.useEffect)(() => {
                R([]),
                  C('items', [
                    {
                      id: 1,
                      value: { ticker: '', utxo: '', sats: 0, unit: 'sats' },
                      options: { tickers: [], utxos: [] },
                    },
                  ]),
                  A('sats', 0),
                  A('unit', 'sats'),
                  t(0),
                  z('items', [
                    { id: 1, value: { sats: 0, unit: 'sats', address: '' } },
                  ]),
                  n && P();
              }, [n, g, P]),
              (0, o.useMemo)(
                () => ({
                  fee: e,
                  loading: l,
                  address: n,
                  inputList: k,
                  outputList: _,
                  balance: E,
                  tickerList: S,
                  handleTickerSelectChange: O,
                  handleUtxoSelectChange: T,
                  setInputList: C,
                  setOutputList: z,
                  setBalance: A,
                  splitHandler: Y,
                  refresh: g,
                  feeRate: a,
                }),
                [e, l, n, k, _, E, S, O, T, Y, g, a],
              )
            );
          })();
        return (0, a.jsx)('div', {
          className:
            'flex flex-col w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6',
          children: (0, a.jsxs)(l.w, {
            className: 'w-full',
            children: [
              (0, a.jsx)(i.u, {
                className: 'flex flex-col items-start p-3 sm:p-4',
                children: (0, a.jsx)('h1', {
                  className: 'text-lg sm:text-xl font-bold uppercase',
                  children: s('pages.tools.transaction.title'),
                }),
              }),
              (0, a.jsx)(n.j, {}),
              (0, a.jsx)(r.G, {
                className: 'p-3 sm:p-4',
                children: (0, a.jsxs)('div', {
                  className: 'space-y-4 sm:space-y-6',
                  children: [
                    (0, a.jsx)(w, {
                      loading: t,
                      inputList: b,
                      tickerList: y,
                      handleTickerSelectChange: _,
                      handleUtxoSelectChange: E,
                      setInputList: A,
                    }),
                    (0, a.jsx)(n.j, {}),
                    (0, a.jsx)(k, {
                      outputList: j,
                      setOutputList: S,
                      address: g,
                    }),
                    (0, a.jsx)(n.j, {}),
                    (0, a.jsx)(C, { balance: N, setBalance: R, address: g }),
                  ],
                }),
              }),
              (0, a.jsx)(n.j, {}),
              (0, a.jsx)(c.i, {
                className: 'flex flex-col items-center p-3 sm:p-4',
                children: (0, a.jsx)(z, {
                  loading: t,
                  splitHandler: O,
                  fee: e,
                  feeRate: T,
                }),
              }),
            ],
          }),
        });
      }
    },
    27517: function (s, e, t) {
      'use strict';
      t.d(e, {
        j: function () {
          return r;
        },
      });
      var a = t(57437),
        l = t(41733),
        i = t(24842);
      t(2265);
      var n = t(90089);
      let r = (s) => {
        var e;
        let { children: t, className: r, text: c, keepStyle: u } = s;
        null == t || null === (e = t.props) || void 0 === e || e.onClick;
        let { t: o } = (0, n.$G)(),
          { connected: m, setModalVisible: d } = (0, i.$)((s) => s);
        return m || u
          ? (0, a.jsx)(a.Fragment, { children: t })
          : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(l.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => d(!0),
                radius: 'sm',
                className: r,
                color: 'primary',
                children: c || o('buttons.connect'),
              }),
            });
      };
    },
  },
  function (s) {
    s.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 9189, 3368,
        4621, 42, 5036, 1447, 2971, 7023, 1744,
      ],
      function () {
        return s((s.s = 72994));
      },
    ),
      (_N_E = s.O());
  },
]);
