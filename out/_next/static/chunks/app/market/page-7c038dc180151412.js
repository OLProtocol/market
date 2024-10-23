(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3828],
  {
    30504: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 54792));
    },
    54792: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        });
      var a = s(57437),
        l = s(65703),
        n = s(91617),
        o = s(66496),
        c = s(29629),
        r = s(9139),
        i = s(964),
        m = s(51446),
        d = s(93908),
        x = s(64757),
        u = s(71272),
        h = s(86778),
        p = s(85908),
        _ = s(2265),
        b = s(90089),
        g = s(16463),
        k = s(19355),
        j = s(24842),
        y = s(69077),
        f = s(98551),
        w = s(91142),
        v = s(34191);
      let N = (e) => {
        let { value: t, onChange: s } = e;
        return (0, a.jsx)(w.n, {
          selectedKey: t,
          onSelectionChange: (e) => {
            console.log(e), null == s || s(e);
          },
          children: [
            { label: 'Token', key: 'ticker' },
            { label: 'Names', key: 'ns' },
            { label: 'Rare', key: 'exotic' },
            { label: 'Collection', key: 'nft' },
          ].map((e) => (0, a.jsx)(v.r, { title: e.label }, e.key)),
        });
      };
      var S = s(41733);
      let F = () => {
        let e = (0, g.useRouter)(),
          t = (t) => {
            e.push(t.path);
          };
        return (0, a.jsx)('div', {
          className: 'flex gap-2 mb-4',
          children: [
            { label: '.btc', path: '/ordx/ticker?ticker=btc&assets_type=ns' },
            { label: '.sats', path: '/ordx/ticker?ticker=sats&assets_type=ns' },
            {
              label: '.unisat',
              path: '/ordx/ticker?ticker=unisat&assets_type=ns',
            },
            { label: '.x', path: '/ordx/ticker?ticker=x&assets_type=ns' },
            {
              label: 'pureName',
              path: '/ordx/ticker?ticker=un&assets_type=ns',
            },
          ].map((e) =>
            (0, a.jsx)(
              S.A,
              {
                variant: 'ghost',
                color: 'default',
                radius: 'full',
                onClick: () => t(e),
                children: e.label,
              },
              e.label,
            ),
          ),
        });
      };
      function C() {
        let { t: e, i18n: t } = (0, b.$G)(),
          s = (0, g.useRouter)(),
          w = (0, g.useSearchParams)().get('type') || 'ticker',
          [v, S] = (0, _.useState)(w),
          [C, X] = (0, _.useState)(1),
          [D, R] = (0, _.useState)(''),
          [J, M] = (0, _.useState)(0),
          E = (0, _.useMemo)(
            () => [
              { label: e('common.time_1D'), value: 1 },
              { label: e('common.time_7D'), value: 7 },
              { label: e('common.time_30D'), value: 30 },
            ],
            [t.language],
          ),
          [O, P] = (0, _.useState)({ column: '', direction: 'ascending' }),
          { network: A } = (0, j.$)(),
          {
            data: K,
            error: L,
            isLoading: T,
          } = (0, n.ZP)(
            '/ordx/getTopTickers-'
              .concat(A, '-')
              .concat(v, '-')
              .concat(C, '-')
              .concat(D, '-')
              .concat(J),
            () =>
              (0, l.cF)({
                assets_type: v,
                interval: C,
                top_count: 200,
                top_name: '',
                sort_field: D,
                sort_order: J,
              }),
          ),
          $ = (0, _.useMemo)(() => (null == K ? void 0 : K.data) || [], [K]),
          G = (0, _.useMemo)(
            () => [
              {
                key: 'assets_name',
                label:
                  'ns' === v
                    ? e('common.domain_name')
                    : e('common.assets_name'),
                allowsSorting: !0,
              },
              {
                key: 'lowest_price',
                label: e('common.lowest_price'),
                allowsSorting: !0,
              },
              {
                key: 'lowest_price_change',
                label: e('common.price_change'),
                allowsSorting: !0,
              },
              {
                key: 'tx_total_volume',
                label: e('common.tx_total_volume'),
                allowsSorting: !0,
              },
              {
                key: 'market_cap',
                label: e('common.total_amount'),
                allowsSorting: !0,
              },
              {
                key: 'tx_order_count',
                label: e('common.tx_order_count'),
                allowsSorting: !0,
              },
              {
                key: 'holder_count',
                label: e('common.holder_count'),
                allowsSorting: !0,
              },
              {
                key: 'onsell_order_count',
                label: e('common.order_num'),
                allowsSorting: !0,
              },
            ],
            [t.language, v],
          );
        return (0, a.jsxs)('div', {
          className: 'pt-4',
          children: [
            (0, a.jsxs)('div', {
              className: 'mb-2 flex justify-between items-center',
              children: [
                (0, a.jsx)(N, {
                  value: v,
                  onChange: (e) => {
                    S(e),
                      M(0),
                      R(''),
                      P({ column: '', direction: 'ascending' });
                    let t = new URL(window.location.href);
                    t.searchParams.set('type', e),
                      window.history.replaceState({}, '', t.toString());
                  },
                }),
                (0, a.jsx)(f.a, {
                  sortList: E,
                  value: C,
                  disabled: !$.length,
                  onChange: (e) => {
                    X(e);
                  },
                }),
              ],
            }),
            'ns' === v && (0, a.jsx)(F, {}),
            (0, a.jsxs)(o.b, {
              isHeaderSticky: !0,
              isStriped: !0,
              sortDescriptor: O,
              onSortChange: (e) => {
                P(e), R(e.column), M('ascending' === e.direction ? 0 : 1);
              },
              color: 'primary',
              selectionMode: 'single',
              onRowAction: (e) => {
                s.push(
                  '/ordx/ticker?ticker='.concat(e, '&assets_type=').concat(v),
                );
              },
              'aria-label': 'Example table with infinite pagination',
              children: [
                (0, a.jsx)(c.J, {
                  children: G.map((e) =>
                    (0, a.jsx)(
                      r.j,
                      {
                        allowsSorting: e.allowsSorting,
                        className:
                          'text-sm md:text-xl md:font-extrablod font-extralight md:pb-3 md:pt-3',
                        children: e.label,
                      },
                      e.key,
                    ),
                  ),
                }),
                (0, a.jsx)(i.y, {
                  isLoading: T,
                  items: $,
                  emptyContent: 'No Data.',
                  loadingContent: (0, a.jsx)(m.c, {}),
                  children: (e) =>
                    (0, a.jsx)(
                      d.g,
                      {
                        className: 'cursor-pointer text-sm md:text-base',
                        children: (t) => {
                          if ('assets_name' === t) {
                            let t = (0, x.sF)(e, 'assets_name'),
                              s = (0, x.sF)(e, 'assets_type'),
                              l = (0, x.sF)(e, 'nickname'),
                              n = (0, x.sF)(e, 'logo');
                            return (0, a.jsx)(u.X, {
                              children: (0, a.jsxs)('div', {
                                className:
                                  'flex text-sm md:text-base items-left',
                                children: [
                                  n
                                    ? (0, a.jsx)(h.J, {
                                        src: ''
                                          .concat('https://apiprd.ordx.market')
                                          .concat(
                                            'testnet' === A ? '/testnet' : '',
                                          )
                                          .concat(n),
                                        alt: 'logo',
                                        className:
                                          'w-14 h-14 min-w-[3.5rem] p-2',
                                      })
                                    : 'exotic' === s
                                      ? (0, a.jsx)(h.J, {
                                          src: '/raresats/'.concat(
                                            l || (0, y.t2)(t),
                                            '.svg',
                                          ),
                                          alt: 'logo',
                                          className:
                                            'w-14 h-14 min-w-[3.5rem] p-2  bg-gray-650',
                                        })
                                      : (0, a.jsx)(p.h, {
                                          name: t.slice(0, 1).toUpperCase(),
                                          className:
                                            'text-2xl text-gray-300 font-black w-14 h-14 bg-gray-950',
                                        }),
                                  (0, a.jsx)('span', {
                                    className:
                                      'pt-4 ml-2 break-keep whitespace-nowrap',
                                    children: l || (0, y.t2)(t),
                                  }),
                                ],
                              }),
                            });
                          }
                          if ('lowest_price' === t)
                            return (0, a.jsx)(u.X, {
                              children: (0, a.jsx)('div', {
                                className: 'flex text-sm md:text-base',
                                children: (0, x.sF)(e, t).toFixed(2) + ' sats',
                              }),
                            });
                          if ('lowest_price_change' === t) {
                            let s = (0, x.sF)(e, t);
                            return (0, a.jsx)(u.X, {
                              children: (0, a.jsxs)('div', {
                                className: 'flex text-sm md:text-base',
                                children: [
                                  '-' === s &&
                                    (0, a.jsx)('span', { children: '-' }),
                                  s.length > 1 &&
                                    s.includes('-') &&
                                    (0, a.jsx)('span', {
                                      className: 'text-red-500',
                                      children: s,
                                    }),
                                  s.length > 1 &&
                                    !s.includes('-') &&
                                    (0, a.jsx)('span', {
                                      className: 'text-green-500',
                                      children: s,
                                    }),
                                ],
                              }),
                            });
                          }
                          return 'market_cap' === t
                            ? (0, a.jsx)(u.X, {
                                children: (0, a.jsxs)('div', {
                                  className: 'flex text-sm md:text-base',
                                  children: [
                                    (0, a.jsx)(k.JO, {
                                      icon: 'cryptocurrency-color:btc',
                                      className: 'mr-1 mt-0.5',
                                    }),
                                    ((0, x.sF)(e, 'market_cap') / 1e8).toFixed(
                                      4,
                                    ),
                                  ],
                                }),
                              })
                            : 'tx_total_volume' === t
                              ? (0, a.jsx)(u.X, {
                                  children: (0, a.jsxs)('div', {
                                    className: 'flex text-sm md:text-base',
                                    children: [
                                      (0, a.jsx)(k.JO, {
                                        icon: 'cryptocurrency-color:btc',
                                        className: 'mr-1 mt-0.5',
                                      }),
                                      (0, x.sF)(e, t),
                                    ],
                                  }),
                                })
                              : ['tx_order_count', 'holder_count'].includes(
                                    t.toString(),
                                  )
                                ? (0, a.jsx)(u.X, {
                                    children: (0, a.jsx)('div', {
                                      className: 'flex text-sm md:text-base',
                                      children: (0, y.ic)((0, x.sF)(e, t)),
                                    }),
                                  })
                                : (0, a.jsx)(u.X, {
                                    className:
                                      'font-light text-sm md:text-base',
                                    children: (0, x.sF)(e, t),
                                  });
                        },
                      },
                      e.assets_name,
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    98551: function (e, t, s) {
      'use strict';
      s.d(t, {
        a: function () {
          return r;
        },
      });
      var a = s(57437),
        l = s(52551),
        n = s(8127),
        o = s(2265),
        c = s(90089);
      let r = (e) => {
        let { value: t, onChange: s, sortList: r, disabled: i = !1 } = e,
          [m, d] = (0, o.useState)([
            (null == t ? void 0 : t.toString()) || '0',
          ]),
          { t: x } = (0, c.$G)();
        return (0, a.jsx)(l.g, {
          isDisabled: i,
          className: 'w-48',
          selectionMode: 'single',
          selectedKeys: m,
          defaultSelectedKeys: ['0'],
          onSelectionChange: (e) => {
            d(e);
            let t = Number(Array.from(e.values())[0]);
            null == s || s(t);
          },
          children: r.map((e) =>
            (0, a.jsx)(n.R, { value: e.value, children: e.label }, e.value),
          ),
        });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 4158, 8791, 148, 9189, 9544, 3368,
        42, 8838, 6007, 5538, 1447, 2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 30504));
      },
    ),
      (_N_E = e.O());
  },
]);
