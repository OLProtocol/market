(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    34412: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 65425));
    },
    65425: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        });
      var s = r(57437),
        d = r(2265),
        l = r(41733),
        i = r(16463),
        n = (e) => {
          let { start: t, current: r, target: d, isdisplay: l } = e,
            i = parseFloat((((r - t) / (d - t)) * 100).toFixed(2));
          return (0, s.jsx)('div', {
            className: 'w-full max-w-full text-xs bg-gray-600 rounded-full',
            children: (0, s.jsx)('div', {
              className:
                'bg-purple-500 leading-none py-1 text-center text-white rounded-full max-w-full',
              style: { width: ''.concat(i, '%') },
              children: l && (0, s.jsxs)('div', { children: [i, '%'] }),
            }),
          });
        },
        a = r(90089),
        o = r(81782),
        c = r(69077);
      let u = (e) => {
        let { rarepizza: t, jades: r, nsDetail: u } = e,
          { data: h } = o.Ol.useBtcHeight('livenet'),
          x = (0, d.useMemo)(
            () => (null == h ? void 0 : h.data.height) || 0,
            [h],
          ),
          m = (0, i.useRouter)(),
          { t: j, i18n: p } = (0, a.$G)(),
          v = (e) => {
            let { type: t, ticker: r } = e;
            m.push('/inscribe?type=' + t + '&ticker=' + r);
          },
          f = () => {
            m.push('/ordx/ticker?ticker=rarepizza&assets_type=ticker');
          };
        return (
          j('common.tick'),
          (0, s.jsx)('section', {
            className: 'bg-[#060818] text-white md:pb-6 rounded-lg',
            children: (0, s.jsxs)('table', {
              className: 'w-full border-collapse',
              children: [
                (0, s.jsx)('thead', {
                  className: 'h-16 bg-gray-800/50',
                  children: (0, s.jsxs)('tr', {
                    className: 'px-2 text-sm md:text-xl',
                    children: [
                      (0, s.jsx)('th', { children: 'No.' }),
                      (0, s.jsx)('th', { children: 'Ticker' }),
                      (0, s.jsx)('th', { children: 'Holders' }),
                      (0, s.jsx)('th', { children: 'Minted' }),
                      (0, s.jsx)('th', { children: 'Status' }),
                      (0, s.jsx)('th', { children: 'Action' }),
                    ],
                  }),
                }),
                (0, s.jsxs)('tbody', {
                  className: 'text-center',
                  children: [
                    (0, s.jsxs)('tr', {
                      className:
                        'h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800',
                      children: [
                        (0, s.jsx)('td', { children: '1' }),
                        (0, s.jsx)('td', { children: 'RarePizza' }),
                        (0, s.jsx)('td', {
                          children: (0, c.ic)(
                            null == t ? void 0 : t.holdersCount,
                          ),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, c.ic)(
                            null == t ? void 0 : t.totalMinted,
                          ),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, s.jsx)(n, {
                            start: null == t ? void 0 : t.startBlock,
                            current: x,
                            target: null == t ? void 0 : t.endBlock,
                            isdisplay: !1,
                          }),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, s.jsx)(l.A, {
                            className:
                              'flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32  bg-indigo-500/50 md:uppercase',
                            variant: 'flat',
                            radius: 'sm',
                            onClick: () => f(),
                            children: 'Trade',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('tr', {
                      className:
                        'h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800',
                      children: [
                        (0, s.jsx)('td', { children: '2' }),
                        (0, s.jsx)('td', { children: 'Jades' }),
                        (0, s.jsx)('td', {
                          children: (0, c.ic)(
                            null == r ? void 0 : r.holdersCount,
                          ),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, c.ic)(
                            null == r ? void 0 : r.totalMinted,
                          ),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, s.jsx)(n, {
                            start: '1000000',
                            current: '1500000',
                            target: '10000000',
                            isdisplay: !1,
                          }),
                        }),
                        (0, s.jsx)('td', {
                          children: (0, s.jsx)(l.A, {
                            className:
                              'flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase',
                            variant: 'flat',
                            radius: 'sm',
                            onClick: () => v({ type: 'ordx', ticker: 'jades' }),
                            children: 'Mint',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('tr', {
                      className:
                        'h-16 md:h-18 py-4 text-xm md:text-xl border-b-1 border-slate-800',
                      children: [
                        (0, s.jsx)('td', { children: '3' }),
                        (0, s.jsx)('td', { children: 'Name' }),
                        (0, s.jsx)('td', { children: ' - ' }),
                        (0, s.jsxs)('td', {
                          children: [null == u ? void 0 : u.total, ' '],
                        }),
                        (0, s.jsx)('td', {
                          children: (0, s.jsx)(n, {
                            start: '1000000',
                            current: '1500000',
                            target: '10000000',
                            isdisplay: !1,
                          }),
                        }),
                        (0, s.jsxs)('td', {
                          children: [
                            (0, s.jsx)(l.A, {
                              className:
                                'flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase',
                              variant: 'flat',
                              radius: 'sm',
                              onClick: () => v({ type: 'name', ticker: '' }),
                              children: 'Mint',
                            }),
                            ' ',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var h = r(65703);
      function x() {
        let { data: e, trigger: t } = h.Ol.useOrdxInfo({
            tick: 'rarepizza',
            network: 'livenet',
          }),
          { data: r } = h.Ol.useNsListStatus({ network: 'livenet' }),
          l = (0, d.useMemo)(() => (null == e ? void 0 : e.data) || {}, [e]),
          i = (0, d.useMemo)(() => (null == r ? void 0 : r.data) || {}, [r]),
          { data: n, trigger: a } = h.Ol.useOrdxInfo({
            tick: 'jades',
            network: 'livenet',
          }),
          o = (0, d.useMemo)(() => (null == n ? void 0 : n.data) || {}, [n]);
        return (
          (0, d.useEffect)(() => {
            t(), a();
          }, []),
          (0, s.jsx)('div', {
            className: 'py-4',
            children: (0, s.jsx)('div', {
              className: 'mb-4 w-full round-lg',
              children: (0, s.jsx)(u, { rarepizza: l, jades: o, nsDetail: i }),
            }),
          })
        );
      }
    },
    16463: function (e, t, r) {
      'use strict';
      var s = r(71169);
      r.o(s, 'usePathname') &&
        r.d(t, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        r.o(s, 'useRouter') &&
          r.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        r.o(s, 'useSearchParams') &&
          r.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
  },
  function (e) {
    e.O(
      0,
      [3121, 1866, 1645, 8218, 3911, 1277, 1447, 2971, 7023, 1744],
      function () {
        return e((e.s = 34412));
      },
    ),
      (_N_E = e.O());
  },
]);
