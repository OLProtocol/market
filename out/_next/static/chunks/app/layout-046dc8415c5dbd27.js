(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    13697: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 37618)),
        Promise.resolve().then(n.bind(n, 91882)),
        Promise.resolve().then(n.bind(n, 5769)),
        Promise.resolve().then(n.bind(n, 9273)),
        Promise.resolve().then(n.bind(n, 94854)),
        Promise.resolve().then(n.t.bind(n, 72801, 23)),
        Promise.resolve().then(n.t.bind(n, 6957, 23)),
        Promise.resolve().then(n.t.bind(n, 23180, 23));
    },
    62478: function (e, t, n) {
      'use strict';
      n.d(t, {
        Hj: function () {
          return p;
        },
        sl: function () {
          return x;
        },
        jn: function () {
          return j;
        },
        Sf: function () {
          return g;
        },
        s1: function () {
          return u;
        },
        AU: function () {
          return c;
        },
        Ro: function () {
          return i;
        },
        RK: function () {
          return o;
        },
        eb: function () {
          return d;
        },
        Oy: function () {
          return b;
        },
        wt: function () {
          return v;
        },
        xS: function () {
          return m;
        },
        pm: function () {
          return h;
        },
        n3: function () {
          return f;
        },
      });
      var s = n(56690),
        a = n(87714),
        r = n(89860);
      let l = async function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { publicKey: n, connected: l } = r.$.getState(),
            { signature: i } = a.E.getState(),
            { headers: o = {}, method: c = 'GET', data: u } = t,
            d = 'https://apitest.ordx.market'.concat(e);
          if ('GET' === c) {
            let e = new URLSearchParams((0, s.$B)(u));
            d += '?'.concat(e);
          } else
            'POST' === c &&
              ((t.body = JSON.stringify(u)),
              (o['Content-Type'] = 'application/json'));
          l && i && ((o.Publickey = n), (o.Signature = i)),
            delete t.data,
            (t.headers = o);
          let h = await fetch(d, t);
          return h;
        },
        i = async (e) => {
          let { address: t, offset: n, size: s, type: a, ticker: r } = e,
            i = await l('/ordx/GetAddressOrdxAssets', {
              data: { address: t, offset: n, size: s, type: a, ticker: r },
            });
          return i.json();
        },
        o = async (e) => {
          let { ticker: t } = e,
            n = await l('/ordx/GetTickerSummary', { data: { ticker: t } });
          return n.json();
        },
        c = async (e) => {
          let {
              ticker: t,
              offset: n,
              size: s,
              sort: a = 0,
              type: r = 1,
              address: i,
            } = e,
            o = await l('/ordx/GetOrders', {
              data: {
                ticker: t,
                offset: n,
                size: s,
                sort: a,
                type: r,
                address: i,
              },
            });
          return o.json();
        },
        u = async (e) => {
          let { ticker: t, offset: n, size: s, sort: a = 0, address: r } = e,
            i = await l('/ordx/GetHistory', {
              data: { ticker: t, offset: n, size: s, sort: a, address: r },
            });
          return i.json();
        },
        d = async (e) => {
          let {
              interval: t = 1,
              top_count: n = 10,
              top_list: s = 'tx_amount',
            } = e,
            a = await l('/ordx/GetTopTickers', {
              data: { interval: t, top_count: n, top_list: s },
            });
          return a.json();
        },
        h = async (e) => {
          let { address: t, raw: n } = e,
            s = await l('/ordx/SubmitOrder', {
              method: 'POST',
              data: { address: t, raw: n },
            });
          return s.json();
        },
        x = async (e) => {
          let { address: t, order_id: n } = e,
            s = await l('/ordx/CancelOrder', {
              method: 'POST',
              data: { address: t, order_id: n },
            });
          return s.json();
        },
        m = async (e) => {
          let { address: t, order_id: n } = e,
            s = await l('/ordx/LockOrder', {
              method: 'POST',
              data: { address: t, order_id: n },
            });
          return s.json();
        },
        f = async (e) => {
          let { address: t, order_id: n } = e,
            s = await l('/ordx/UnlockOrder', {
              method: 'POST',
              data: { address: t, order_id: n },
            });
          return s.json();
        },
        p = async (e) => {
          let { address: t, order_id: n, raw: s } = e,
            a = await l('/ordx/BuyOrder', {
              method: 'POST',
              data: { address: t, order_id: n, raw: s },
            });
          return a.json();
        },
        v = async (e) => {
          let { address: t, value: n = 600, network: s } = e,
            a = await fetch(
              'https://apitest.ordx.space/testnet/utxo/getUtxoByValue',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: t, value: n }),
              },
            );
          return a.json();
        },
        j = async (e) => {
          let t = await fetch(
              'testnet' === e
                ? 'https://mempool.space/testnet/api/v1/fees/recommended'
                : 'https://mempool.space/api/v1/fees/recommended',
            ),
            n = await t.json();
          return n;
        },
        g = async () => {
          let e = await fetch('/version.txt');
          return console.log('appVersion', await e.text()), e.text();
        },
        b = async (e, t) => {
          let n = 'https://mempool.space'
              .concat('testnet' === t ? '/testnet' : '', '/api/tx/')
              .concat(e, '/hex'),
            s = await fetch(n)
              .then((e) => e.text())
              .then((e) => {
                if ('Transaction not found' === e)
                  throw Error(
                    'Some error happened when finding BTC to pay. Please try again later.',
                  );
                return e;
              });
          return s;
        };
    },
    37618: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Providers: function () {
            return i;
          },
        });
      var s = n(57437);
      n(2265);
      var a = n(34211),
        r = n(24033),
        l = n(6435);
      function i(e) {
        let { children: t, themeProps: n } = e,
          i = (0, r.useRouter)();
        return (0, s.jsx)(a.w, {
          navigate: i.push,
          children: (0, s.jsx)(l.f, { ...n, children: t }),
        });
      }
    },
    91882: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Navbar: function () {
            return q;
          },
        });
      var s = n(57437),
        a = n(21980),
        r = n(67683),
        l = n(11190),
        i = n(27231),
        o = n(91555),
        c = n(14511),
        u = n(15968),
        d = n(63686),
        h = n(82574),
        x = n(92557),
        m = n(27393),
        f = n(89571),
        p = n(2265),
        v = n(56221),
        j = n(49401),
        g = n(25677),
        b = n(28193),
        y = n(24033),
        w = n(89860);
      n(68375);
      var N = n(6435),
        S = n(56690),
        k = n(48749),
        O = n(87714);
      let C = () => {
        let e = (0, y.useRouter)(),
          { theme: t } = (0, N.F)(),
          {
            connected: n,
            check: a,
            address: r,
            disconnect: l,
            btcWallet: i,
          } = (0, w.$)((e) => e),
          { setSignature: o, signature: c } = (0, O.E)((e) => e);
        (0, p.useEffect)(() => {
          a();
        }, []);
        let u = async (e) => {
          if (!c) {
            console.log('signature text', 'ordx-marketplace');
            let t = await e.signMessage('ordx-marketplace');
            o(t);
          }
        };
        return (
          (0, p.useEffect)(
            () => (
              console.log('connected', n),
              n &&
                (null == i || i.on('accountsChanged', a),
                null == i || i.on('networkChanged', a)),
              () => {
                null == i || i.removeListener('accountChanged', a),
                  null == i || i.removeListener('networkChanged', a);
              }
            ),
            [n],
          ),
          (0, s.jsx)(w.A, {
            config: { network: 'livenet', defaultConnectorId: 'okx' },
            theme: 'dark' === t ? 'dark' : 'light',
            onConnectSuccess: u,
            onConnectError: (e) => {
              console.error('Connect Wallet Failed', e),
                k.ZP.error({
                  message: 'Connect Wallet Failed',
                  description: e.message,
                });
            },
            onDisconnectSuccess: () => {
              o('');
            },
            children: (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)(v.j, {
                placement: 'bottom',
                children: [
                  (0, s.jsx)(j.b, {
                    children: (0, s.jsx)(g.A, {
                      children: (0, S.NH)(r, 4, '**'),
                    }),
                  }),
                  (0, s.jsx)(b.g, {
                    className: 'p-2',
                    children: (0, s.jsxs)('div', {
                      className: 'flex flex-col gap-2',
                      children: [
                        (0, s.jsx)(g.A, {
                          className: 'w-full',
                          onClick: () => {
                            e.push('/account');
                          },
                          children: '我的资产',
                        }),
                        (0, s.jsx)(g.A, {
                          color: 'danger',
                          variant: 'ghost',
                          onClick: l,
                          children: 'Disconnect',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      var P = n(61396),
        E = n.n(P),
        T = n(91609),
        z = n(89369),
        A = n(61718),
        U = n(2913),
        H = n(62478),
        R = n(42853);
      let W = () => {
        let [e, t] = (0, p.useState)(!1),
          { data: n } = (0, R.ZP)('getAppVersion', () => (0, H.Sf)(), {
            refreshInterval: 12e4,
          }),
          a = (0, p.useRef)(),
          r = () => {
            t(!0);
          },
          l = () => {
            console.log('appVersion', n),
              console.log('version', 2),
              n && Number(n) > 2 && r();
          },
          i = () => {
            a.current && clearTimeout(a.current),
              (a.current = setTimeout(() => {
                l();
              }, 3e5)),
              t(!1);
          };
        return (
          (0, p.useEffect)(() => {
            l();
          }, [n]),
          (0, s.jsx)(T.R, {
            backdrop: 'blur',
            isDismissable: !1,
            isOpen: e,
            onClose: i,
            children: (0, s.jsxs)(z.A, {
              children: [
                (0, s.jsx)(A.k, {
                  className: '',
                  children: '有新版本，是否更新？',
                }),
                (0, s.jsxs)(U.R, {
                  children: [
                    (0, s.jsx)(g.A, {
                      color: 'primary',
                      variant: 'light',
                      onPress: i,
                      children: '取消',
                    }),
                    (0, s.jsx)(g.A, {
                      color: 'danger',
                      onPress: () => {
                        t(!1), window.location.reload();
                      },
                      children: '立即更新',
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var B = n(94318),
        F = n(69571),
        I = n(39830),
        _ = n(55481);
      let L = (e) => {
          let { label: t, value: n, onClick: a, className: r } = e;
          return (0, s.jsxs)('div', {
            className:
              'w-full h-30 p-2 cursor-pointer bg-gray-500 rounded-lg text-center border-2  '.concat(
                r,
              ),
            onClick: a,
            children: [
              (0, s.jsx)('div', {
                className: 'text-lg font-bold',
                children: t,
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center',
                children: [
                  (0, s.jsx)('span', {
                    className: 'mr-2 text-xl text-orange-400 font-bold',
                    children: n,
                  }),
                  (0, s.jsx)('span', { children: 'sats/vB' }),
                ],
              }),
            ],
          });
        },
        M = (e) => {
          let { onChange: t, feeRateData: n, value: r, feeType: l } = e,
            { network: i } = (0, w.$)((e) => e),
            [o, c] = (0, p.useState)('Normal'),
            [u, d] = (0, p.useState)(1),
            [h, x] = (0, p.useState)(1),
            [m, f] = (0, p.useState)(1),
            [v, j] = (0, p.useState)(1),
            [g, b] = (0, p.useState)(500),
            y = (e, n) => {
              o !== e && (c(e), null == t || t({ type: e, value: n }));
            },
            N = async () => {
              let e = 'testnet' === i ? 1 : 50;
              d((null == n ? void 0 : n.fastestFee) || e),
                x((null == n ? void 0 : n.hourFee) || e),
                f((null == n ? void 0 : n.halfHourFee) || e),
                j((null == n ? void 0 : n.minimumFee) || e),
                null == t || t((null == n ? void 0 : n.halfHourFee) || e),
                c('Normal');
            },
            S = (0, p.useMemo)(
              () => [
                { label: 'Economy', name: 'Economy', value: h },
                { label: 'Normal', name: 'Normal', value: m },
                { label: 'Custom', name: 'Custom', value: u },
              ],
              [h, m, u],
            );
          return (
            (0, p.useEffect)(() => {
              N();
            }, [n]),
            (0, p.useEffect)(() => {
              'Custom' === o && (null == t || t({ value: u, type: 'Custom' }));
            }, [u]),
            (0, p.useEffect)(() => {
              'Custom' === l && r ? (d(r), c(l)) : l && c(l);
            }, [l, r]),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-3 gap-3 mb-2',
                  children: S.map((e) =>
                    (0, s.jsx)(
                      L,
                      {
                        className:
                          o === e.label
                            ? ' border-orange-400 '
                            : 'border-gray-500',
                        label: e.name,
                        value: e.value,
                        onClick: () => y(e.label, e.value),
                      },
                      e.label,
                    ),
                  ),
                }),
                'Custom' === o &&
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-4',
                    children: [
                      (0, s.jsx)(a.Y, {
                        type: 'number',
                        className: 'w-30',
                        placeholder: '1',
                        value: u.toString(),
                        onChange: (e) => d(Number(e.target.value)),
                      }),
                      (0, s.jsx)(_.L, {
                        size: 'sm',
                        step: 1,
                        maxValue: g,
                        minValue: v,
                        value: u,
                        className: 'flex-1',
                        onChange: (e) => {
                          d(e);
                        },
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        V = () => {
          let { network: e } = (0, w.$)((e) => e),
            { isOpen: t, onClose: n, onOpenChange: a, onOpen: r } = (0, B.q)(),
            [l, i] = (0, p.useState)({ value: 1, type: 'Normal' }),
            { data: o, isLoading: c } = (0, R.ZP)(
              'fetchChainFeeRate-'.concat(e),
              () => (0, H.jn)(e),
            ),
            { setFeeRate: u, feeRate: d } = (0, O.E)((e) => e);
          return (
            (0, p.useEffect)(() => {
              u({
                value: (null == o ? void 0 : o.halfHourFee) || 1,
                type: 'Normal',
              });
            }, [o]),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsxs)(g.A, {
                  variant: 'ghost',
                  isLoading: c,
                  className: 'bg-transparent',
                  onClick: () => r(),
                  children: [
                    (0, s.jsx)(I.JO, {
                      icon: 'mdi:gas-station',
                      className: 'text-xl',
                    }),
                    ' ',
                    d.value,
                    ' ',
                    'sats/Vb',
                  ],
                }),
                (0, s.jsx)(T.R, {
                  isOpen: t,
                  onOpenChange: a,
                  children: (0, s.jsxs)(z.A, {
                    children: [
                      (0, s.jsx)(A.k, {
                        className: 'flex flex-col gap-1',
                        children: 'Gas Fee',
                      }),
                      (0, s.jsx)(F.I, {
                        children: (0, s.jsx)(M, {
                          onChange: (e) => {
                            i(e);
                          },
                          value: d.value,
                          feeType: d.type,
                          feeRateData: o,
                        }),
                      }),
                      (0, s.jsxs)(U.R, {
                        children: [
                          (0, s.jsx)(g.A, {
                            color: 'danger',
                            variant: 'light',
                            onPress: () => {
                              n();
                            },
                            children: 'Close',
                          }),
                          (0, s.jsx)(g.A, {
                            color: 'primary',
                            onPress: () => {
                              u(l), n();
                            },
                            children: 'Ok',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var G = n(61416),
        $ = n(2281),
        J = n(94256),
        Z = n(57042);
      let D = (e) => {
          let { size: t = 24, width: n, height: a, ...r } = e;
          return (0, s.jsx)('svg', {
            'aria-hidden': 'true',
            focusable: 'false',
            height: t || a,
            role: 'presentation',
            viewBox: '0 0 24 24',
            width: t || n,
            ...r,
            children: (0, s.jsx)('path', {
              d: 'M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z',
              fill: 'currentColor',
            }),
          });
        },
        Q = (e) => {
          let { size: t = 24, width: n, height: a, ...r } = e;
          return (0, s.jsx)('svg', {
            'aria-hidden': 'true',
            focusable: 'false',
            height: t || a,
            role: 'presentation',
            viewBox: '0 0 24 24',
            width: t || n,
            ...r,
            children: (0, s.jsxs)('g', {
              fill: 'currentColor',
              children: [
                (0, s.jsx)('path', { d: 'M19 12a7 7 0 11-7-7 7 7 0 017 7z' }),
                (0, s.jsx)('path', {
                  d: 'M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z',
                }),
              ],
            }),
          });
        },
        Y = (e) => {
          let { className: t, classNames: n } = e,
            { theme: a, setTheme: r } = (0, N.F)(),
            l = (0, J.Av)(),
            {
              Component: i,
              slots: o,
              isSelected: c,
              getBaseProps: u,
              getInputProps: d,
              getWrapperProps: h,
            } = (0, $.h)({
              isSelected: 'light' === a || l,
              'aria-label': 'Switch to '.concat(
                'light' === a || l ? 'dark' : 'light',
                ' mode',
              ),
              onChange: () => {
                'light' === a ? r('dark') : r('light');
              },
            });
          return (0, s.jsx)(i, {
            ...u({
              className: (0, Z.Z)(
                'px-px transition-opacity hover:opacity-80 cursor-pointer',
                t,
                null == n ? void 0 : n.base,
              ),
            }),
            children: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(G.T, { children: (0, s.jsx)('input', { ...d() }) }),
                (0, s.jsx)('div', {
                  ...h(),
                  className: o.wrapper({
                    class: (0, Z.Z)(
                      [
                        'w-auto h-auto',
                        'bg-transparent',
                        'rounded-lg',
                        'flex items-center justify-center',
                        'group-data-[selected=true]:bg-transparent',
                        '!text-default-500',
                        'pt-px',
                        'px-0',
                        'mx-0',
                      ],
                      null == n ? void 0 : n.wrapper,
                    ),
                  }),
                  children:
                    !c || l
                      ? (0, s.jsx)(Q, { size: 22 })
                      : (0, s.jsx)(D, { size: 22 }),
                }),
              ],
            }),
          });
        },
        q = () => {
          a.Y, r.C;
          let e = (0, p.useMemo)(() => [{ label: 'Market', href: '/' }], []);
          return (0, s.jsxs)(l.R, {
            maxWidth: 'xl',
            position: 'sticky',
            isBordered: !0,
            children: [
              (0, s.jsxs)(i.U, {
                className: 'basis-1/5 sm:basis-full',
                justify: 'start',
                children: [
                  (0, s.jsx)(o.H, {
                    as: 'li',
                    className: 'gap-3 max-w-fit',
                    children: (0, s.jsxs)(E(), {
                      className: 'flex justify-start items-center gap-1',
                      href: '/',
                      children: [
                        (0, s.jsx)(c.J, {
                          src: '/logo.jpg',
                          alt: 'logo',
                          className: 'w-8 h-8',
                        }),
                        (0, s.jsx)('p', {
                          className: 'font-bold text-inherit',
                          children: 'OrdX',
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)('ul', {
                    className: 'hidden lg:flex gap-4 justify-start ml-2',
                    children: e.map((e) =>
                      (0, s.jsx)(
                        u.k,
                        {
                          children: (0, s.jsx)(d.O, {
                            href: e.href,
                            children: e.label,
                          }),
                        },
                        e.href,
                      ),
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)(i.U, {
                className: 'hidden sm:flex basis-1/5 sm:basis-full',
                justify: 'end',
                children: [
                  (0, s.jsx)(u.k, {
                    className: '',
                    children: (0, s.jsx)(V, {}),
                  }),
                  (0, s.jsx)(u.k, {
                    className: 'hidden sm:flex gap-2',
                    children: (0, s.jsx)(Y, {}),
                  }),
                  (0, s.jsx)(u.k, {
                    className: 'hidden sm:flex',
                    children: (0, s.jsx)(C, {}),
                  }),
                ],
              }),
              (0, s.jsxs)(i.U, {
                className: 'sm:hidden basis-1 pl-4',
                justify: 'end',
                children: [(0, s.jsx)(C, {}), (0, s.jsx)(h.L, {})],
              }),
              (0, s.jsx)(x.$, {
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col gap-2',
                  children: [
                    (0, s.jsx)(m.h, {
                      children: (0, s.jsxs)('div', {
                        className: 'flex items-center gap-4',
                        children: [(0, s.jsx)(V, {}), (0, s.jsx)(Y, {})],
                      }),
                    }),
                    (0, s.jsx)(f.j, {}),
                    e.map((e) =>
                      (0, s.jsx)(
                        m.h,
                        {
                          children: (0, s.jsx)(d.O, {
                            href: e.href,
                            children: e.label,
                          }),
                        },
                        e.href,
                      ),
                    ),
                  ],
                }),
              }),
              (0, s.jsx)(W, {}),
            ],
          });
        };
    },
    56690: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return b;
        },
        Us: function () {
          return d;
        },
        eB: function () {
          return u;
        },
        zU: function () {
          return y;
        },
        NH: function () {
          return w;
        },
        u4: function () {
          return j;
        },
        $B: function () {
          return N;
        },
        a: function () {
          return S;
        },
        Ay: function () {
          return g;
        },
      });
      var s = n(99301),
        a = n(81254),
        r = n(24128),
        l = n(89860),
        i = n(62478),
        o = n(40263).Buffer;
      let c = (e) => {
          var t;
          let n =
            null === (t = r.Xf.fmt.toAsm(r.kL.toScriptPubKey(e))) ||
            void 0 === t
              ? void 0
              : t[0];
          return n;
        },
        u = async (e) => {
          let { inscriptionUtxo: t, total: n, network: r, address: o } = e,
            { btcWallet: c } = l.$.getState(),
            u = await (0, i.Oy)(t.txid, r),
            d = s.YW.fromHex(u),
            h = {
              hash: t.txid,
              index: t.vout,
              witnessUtxo: d.outs[t.vout],
              sighashType: 131,
            },
            x = new s._B({
              network: 'testnet' === r ? s.QW.testnet : s.QW.bitcoin,
            });
          if (
            (s.Wi(a), x.addInput(h), x.addOutput({ address: o, value: n }), !c)
          )
            throw Error('Wallet not initialized');
          let m = await c.signPsbt(x.toHex());
          return m;
        },
        d = async (e) => {
          let {
              orderRaw: t,
              network: n,
              address: r,
              fee: i,
              utxos: u,
              serviceFee: d,
              dummyUtxos: h,
            } = e,
            x =
              'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep',
            { btcWallet: m } = l.$.getState();
          s.Wi(a);
          let f = 'testnet' === n ? s.QW.testnet : s.QW.bitcoin,
            p = s._B.fromHex(t, { network: f }),
            v = new s._B({ network: f });
          console.log(p);
          let j = u.reduce((e, t) => e + t.value, 0),
            g = u.map((e) => ({
              hash: e.txid,
              index: e.vout,
              witnessUtxo: { script: o.from(c(r), 'hex'), value: e.value },
            })),
            b = h.reduce((e, t) => e + t.value, 0),
            y = h.map((e) => ({
              hash: e.txid,
              index: e.vout,
              witnessUtxo: { script: o.from(c(r), 'hex'), value: e.value },
              sighashType: s.YW.SIGHASH_ALL,
            }));
          y.forEach((e) => {
            v.addInput(e);
          }),
            v.addOutput({ address: r, value: b }),
            console.log(g);
          let w = {
            hash: p.txInputs[0].hash,
            index: p.txInputs[0].index,
            witnessUtxo: p.data.inputs[0].witnessUtxo,
            finalScriptWitness: p.data.inputs[0].finalScriptWitness,
          };
          v.addInput(w),
            g.forEach((e) => {
              v.addInput(e);
            });
          let N = p.data.inputs[0].witnessUtxo.value;
          v.addOutput({ address: r, value: N });
          let S = p.txOutputs[0].value,
            k = p.txOutputs[0];
          v.addOutput(k);
          let O = j - (S + i) - 1200;
          d && x && ((O -= d), v.addOutput({ address: x, value: d })),
            v.addOutput({ address: r, value: 600 }),
            v.addOutput({ address: r, value: 600 });
          let C = { address: r, value: O };
          if ((v.addOutput(C), !m)) throw Error('Wallet not initialized');
          let P = await m.signPsbt(v.toHex()),
            E = s._B.fromHex(P, { network: f }),
            T = E.extractTransaction(),
            z = T.toHex();
          return z;
        };
      var h = n(51864),
        x = n.n(h),
        m = n(90555),
        f = n.n(m),
        p = n(34098),
        v = n.n(p);
      let j = (e) => {
          let [t, n] = e.split(':');
          return { txid: t, vout: parseInt(n) };
        },
        g = (e) => {
          e >= 1e8 && (e *= 10);
          let t =
            String(e).padStart(8, '0').slice(0, -9) +
            '.' +
            String(e).padStart(8, '0').slice(-9);
          return '.' == t.substring(0, 1) && (t = '0' + t), t;
        },
        b = (e) => {
          let [t, n] = e.toString().split('.');
          return n || (n = '0'), 1e8 * parseInt(t) + parseInt(n.padEnd(8, '0'));
        },
        y = function (e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            s = x()(e, 'value'),
            a = v()(s);
          n && f()(a);
          let r = [],
            l = 0;
          for (let e = 0; e < a.length; e++) {
            let n = a[e];
            if ((r.push(n), (l += n.value) >= t)) break;
          }
          let i = s.slice(0, 2),
            o = [];
          for (let e = 0; e < i.length; e++)
            r.some((t) => t.txid === i[e].txid) || o.push(i[e]);
          return {
            minUtxo: s[0],
            maxUtxo: s[s.length - 1],
            utxos: r,
            smallTwoUtxos: o,
            total: l,
          };
        },
        w = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '*****';
          return 'string' == typeof e && e
            ? ''
                .concat(null == e ? void 0 : e.substring(0, t))
                .concat(n)
                .concat(
                  null == e
                    ? void 0
                    : e.substring((null == e ? void 0 : e.length) - t),
                )
            : '';
        },
        N = (e) => {
          let t = { ...e };
          return (
            Object.keys(t).forEach((e) => {
              ('' === t[e] ||
                void 0 === t[e] ||
                null === t[e] ||
                'null' === t[e] ||
                'undefined' === t[e] ||
                'NaN' === t[e] ||
                (isNaN(t[e]) && 'number' == typeof t[e])) &&
                delete t[e];
            }),
            t
          );
        },
        S = (e, t) =>
          'testnet' === t
            ? 'https://mempool.space/testnet/tx/'.concat(e)
            : 'https://mempool.space/tx/'.concat(e);
    },
    87714: function (e, t, n) {
      'use strict';
      n.d(t, {
        E: function () {
          return l;
        },
        J: function () {
          return r;
        },
      });
      var s = n(94660),
        a = n(74810);
      let r = (0, s.Ue)()(
          (0, a.mW)((e) => ({
            list: [],
            add: (t) => {
              e((e) => ({ list: [...e.list, t] }));
            },
            reset: () => {
              e({ list: [] });
            },
          })),
        ),
        l = (0, s.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
              (e) => ({
                feeRate: { value: 1, type: 'custom' },
                appVersion: 0,
                signature: '',
                setSignature: (t) => {
                  e({ signature: t });
                },
                setFeeRate: (t) => {
                  e({ feeRate: t });
                },
                reset: () => {
                  e({ feeRate: { value: 1, type: 'custom' }, appVersion: 0 });
                },
              }),
              {
                name: 'common-store',
                partialize: (e) =>
                  Object.fromEntries(
                    Object.entries(e).filter((e) => {
                      let [t] = e;
                      return ['signature'].includes(t);
                    }),
                  ),
              },
            ),
          ),
        );
    },
    72801: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        121, 645, 551, 677, 920, 257, 26, 853, 750, 726, 980, 429, 971, 472,
        744,
      ],
      function () {
        return e((e.s = 13697));
      },
    ),
      (_N_E = e.O());
  },
]);
