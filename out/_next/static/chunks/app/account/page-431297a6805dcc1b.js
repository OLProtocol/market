(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9346],
  {
    14071: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 53620));
    },
    53620: function (e, t, l) {
      'use strict';
      l.r(t),
        l.d(t, {
          default: function () {
            return ey;
          },
        });
      var s = l(57437),
        a = l(2265),
        n = l(91142),
        r = l(34191),
        i = l(91617),
        o = l(52551),
        c = l(8127),
        d = l(69077),
        u = l(65703),
        m = l(24842);
      let x = (e) => {
        let { onChange: t, assets_type: l } = e,
          { address: n, network: r } = (0, m.$)((e) => e),
          [x, v] = (0, a.useState)(''),
          h = (0, a.useMemo)(
            () =>
              '/ordx/getAddressAssetsList-'
                .concat(n, '-')
                .concat(r, '-')
                .concat(l),
            [n, r, l],
          ),
          {
            data: f,
            isLoading: g,
            mutate: b,
          } = (0, i.ZP)(h, () => (0, u.pN)(n, l), {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
          }),
          p = (0, a.useMemo)(
            () =>
              (null == f ? void 0 : f.data)
                ? null == f
                  ? void 0
                  : f.data
                : [],
            [f],
          );
        return (
          (0, a.useEffect)(() => {
            p.length > 0 &&
              (v(p[0].assets_name), null == t || t(p[0].assets_name));
          }, [p]),
          (0, s.jsx)(s.Fragment, {
            children:
              'nft' !== l &&
              (0, s.jsx)('div', {
                className: 'mb-4',
                children: (0, s.jsx)(o.g, {
                  showScrollIndicators: !1,
                  isLoading: g,
                  className: 'w-full max-w-sm',
                  selectionMode: 'single',
                  selectedKeys: [x],
                  onSelectionChange: (e) => {
                    let l = Array.from(e.values())[0];
                    v(l), null == t || t(l);
                  },
                  children: p.map((e) =>
                    (0, s.jsx)(
                      c.R,
                      {
                        value: e.assets_name,
                        children: ''
                          .concat((0, d.vW)(e.assets_name, l))
                          .concat(e.balance ? '('.concat(e.balance, ')') : ''),
                      },
                      e.assets_name,
                    ),
                  ),
                }),
              }),
          })
        );
      };
      var v = l(72354),
        h = l(40884),
        f = l(75945),
        g = l(55448),
        b = l(90089),
        p = l(19355),
        j = l(76734);
      let y = (e) => {
        let { onChange: t } = e,
          { t: l } = (0, b.$G)(),
          { address: n, balance: r, network: o } = (0, m.$)((e) => e),
          c = (0, a.useMemo)(
            () => '/ordx/getAddressAssetsSummary-'.concat(n, '-').concat(o),
            [n, o],
          ),
          {
            data: d,
            isLoading: x,
            mutate: y,
          } = (0, i.ZP)(c, () => (0, u.QU)(n), {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
          }),
          N = (0, a.useMemo)(() => {
            var e, t, l, s;
            let a =
                null == d
                  ? void 0
                  : null === (e = d.data) || void 0 === e
                    ? void 0
                    : e.find((e) => 'ticker' === e.assets_type),
              n =
                null == d
                  ? void 0
                  : null === (t = d.data) || void 0 === t
                    ? void 0
                    : t.find((e) => 'exotic' === e.assets_type),
              r =
                null == d
                  ? void 0
                  : null === (l = d.data) || void 0 === l
                    ? void 0
                    : l.find((e) => 'nft' === e.assets_type),
              i =
                null == d
                  ? void 0
                  : null === (s = d.data) || void 0 === s
                    ? void 0
                    : s.find((e) => 'ns' === e.assets_type);
            return [
              {
                label: 'SAT20 Token',
                key: 'ticker',
                value: (null == a ? void 0 : a.total_value) || 0,
              },
              {
                label: 'Rare Sats',
                key: 'exotic',
                value: (null == n ? void 0 : n.total_value) || 0,
              },
              {
                label: 'Names[DID]',
                key: 'ns',
                value: (null == i ? void 0 : i.total_value) || 0,
              },
              {
                label: 'Ordinals NFT',
                key: 'nft',
                value: (null == r ? void 0 : r.total_value) || 0,
              },
              { label: 'Runes', key: 'rune', value: 0 },
            ];
          }, [d]),
          [w, _] = (0, a.useState)(N[0].key);
        return (
          (0, a.useEffect)(() => {
            w && (null == t || t(w));
          }, []),
          (0, a.useEffect)(() => {
            w && (null == t || t(w));
          }, [w]),
          (0, s.jsx)('div', {
            className:
              'grid grid-cols-2 max-w-4xl md:grid-cols-4 gap-2 md:gap-4',
            children: N.map((e) =>
              (0, s.jsxs)(
                v.w,
                {
                  isHoverable: !0,
                  isPressable: !0,
                  className: 'px-2 w-full max-w-full '.concat(
                    w === e.key
                      ? 'bg-gradient-to-r from-[#4361ee] to-[#2b35b8] '
                      : '',
                  ),
                  onPress: () => {
                    'nft' !== e.key && _(e.key);
                  },
                  children: [
                    (0, s.jsx)(h.u, {
                      children: (0, s.jsx)('span', {
                        className:
                          'text-base md:text-lg font-mono text-gray-400',
                        children: e.label,
                      }),
                    }),
                    (0, s.jsx)(f.j, {
                      className: 'divide-inherit divide-dashed',
                    }),
                    (e.key,
                    (0, s.jsxs)(g.G, {
                      className: 'text-left text-md leading-8',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'flex',
                          children: [
                            (0, s.jsx)(p.JO, {
                              icon: 'cryptocurrency-color:btc',
                              className: 'mr-1 mt-2',
                            }),
                            e.value,
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex text-sm md:font-bold',
                          children: [
                            (0, s.jsx)('span', {
                              className: 'text-yellow-400 w-5',
                              children: ' \xa0$',
                            }),
                            (0, s.jsx)('span', {
                              className: 'text-gray-400 h-5',
                              children: (0, s.jsx)(j.H, { btc: e.value }),
                            }),
                          ],
                        }),
                      ],
                    })),
                  ],
                },
                e.key,
              ),
            ),
          })
        );
      };
      var N = l(77634),
        w = l(1271),
        _ = l(65647),
        k = l(70148),
        S = l(68937),
        C = l(7337),
        M = l(41733);
      let A = (e) => {
          let { asset: t } = e;
          return (0, s.jsx)('div', {
            className:
              'w-full h-full uppercase flex items-center justify-center',
            children: (0, s.jsx)('p', {
              className:
                'font-medium pt-2 text-xl md:text-2xl md:pt-3 text-wrap break-all p-4',
              children: t.assets_name,
            }),
          });
        },
        O = (e) => {
          let { asset: t } = e,
            l = (0, a.useMemo)(
              () =>
                "{'p':'ordx','op':'mint','tick':'" +
                (null == t ? void 0 : t.assets_name) +
                "','amt':'" +
                (null == t ? void 0 : t.amount) +
                "'}",
              [t],
            );
          return (0, s.jsxs)('div', {
            className:
              'w-full h-full text-xs tracking-widest antialiased md:text-base flex items-center justify-center relative',
            children: [
              (0, s.jsx)('div', {
                className:
                  'left-0 top-0 flex z-10 absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100',
                children: null == t ? void 0 : t.assets_name,
              }),
              (0, s.jsxs)('section', {
                className:
                  'text-center pt-4 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-10',
                children: [
                  (0, s.jsx)('p', {
                    className: 'font-medium pt-3 text-2xl md:text-3xl md:pt-3',
                    children: (0, d.ic)(null == t ? void 0 : t.amount),
                  }),
                  (0, s.jsx)('p', {
                    className: ' pt-4 md:pt-12 md:pb-2 md:text-xs p-4',
                    children: (0, s.jsx)('span', {
                      className: 'font-mono text-gray-100',
                      children: l,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var I = l(19637);
      let z = (e) => {
        let { asset: t, utxo: l } = e;
        return (0, s.jsxs)('div', {
          className: 'w-full h-full relative antialiased  tracking-widest',
          children: [
            (0, s.jsx)('div', {
              className:
                'left-0 top-0 flex z-10 absolute p-2 rounded-br-[1rem] text-xs md:text-base text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100',
              children: null == t ? void 0 : t.assets_name,
            }),
            (0, s.jsx)(I.A, {
              defaultImage: '/ordx-utxo-content-default.jpg',
              inscriptionId: null == t ? void 0 : t.inscriptionId,
              utxo: l,
            }),
            (0, s.jsx)('div', {
              className:
                'font-medium  font-mono text-2xl md:text-3xl mb-1 absolute bottom-0 left-0 z-10 w-full text-center',
              children: (0, d.ic)(null == t ? void 0 : t.amount),
            }),
          ],
        });
      };
      var D = l(86778);
      let $ = (e) => {
        let { asset: t, otherAssets: l } = e;
        return (0, s.jsxs)('div', {
          className: 'w-full h-full flex justify-center items-center relative',
          children: [
            (0, s.jsx)('div', {
              className:
                'left-0 top-0 flex z-10 absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100',
              children: null == t ? void 0 : t.assets_name,
            }),
            (0, s.jsx)(D.J, {
              classNames: {
                wrapper: 'w-32 h-32 md:w-36 md:h-36',
                img: 'w-full h-full',
              },
              src: '/raresats/'.concat(
                null == t ? void 0 : t.assets_name,
                '.svg',
              ),
              alt: 'logo',
            }),
            (0, s.jsx)('div', {
              className:
                'flex gap-1 absolute top-2 px-1 overflow-x-auto w-[90%] right-0 justify-end',
              children:
                null == l
                  ? void 0
                  : l.map((e, t) =>
                      (0, s.jsx)(
                        D.J,
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
            (0, s.jsx)('div', {
              className:
                'font-medium  font-mono text-2xl md:text-3xl mb-1 absolute bottom-0 left-0 z-10 w-full text-center',
              children: (0, d.ic)(null == t ? void 0 : t.amount),
            }),
          ],
        });
      };
      var E = l(51446);
      function L(e) {
        let { inscriptionId: t } = e,
          { network: l } = (0, m.$)(),
          [n, r] = (0, a.useState)(!1),
          [i, o] = (0, a.useState)(!0),
          c = (0, a.useMemo)(() => !n, [n]),
          u = (0, a.useMemo)(
            () =>
              t
                ? (0, d.PS)({ network: l, path: 'content/'.concat(t) })
                : void 0,
            [l, t],
          );
        return (0, s.jsxs)('div', {
          className: 'h-full w-full',
          children: [
            c &&
              (0, s.jsx)('div', {
                className:
                  'absolute top-0 left-0 w-full h-full dark:bg-gray-800 z-[1] bg-gray-100 flex justify-center items-center',
                children: (0, s.jsx)(E.c, {}),
              }),
            u &&
              (0, s.jsx)('iframe', {
                onLoad: () => {
                  setTimeout(() => {
                    r(!0);
                  }, 1e3);
                },
                onError: () => {
                  r(!0);
                },
                src: u,
                className: 'pointer-events-none max-w-full h-full max-h-full',
              }),
          ],
        });
      }
      let Z = (e) => {
          let { asset: t, utxo: l } = e;
          return (0, s.jsxs)('div', {
            className: 'w-full h-full relative antialiased  tracking-widest',
            children: [
              (0, s.jsx)('div', {
                className:
                  'left-0 top-0 flex z-10 absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100',
                children: null == t ? void 0 : t.assets_name,
              }),
              (0, s.jsx)(L, {
                inscriptionId: null == t ? void 0 : t.inscriptionId,
              }),
            ],
          });
        },
        P = (e) => {
          var t, l, n, r, i, o;
          let {
              item: c,
              onSell: u,
              onTransfer: m,
              onCancelOrder: x,
              selected: h,
              assets_name: f,
              assets_type: j,
              canSelect: y,
              onSelect: N,
              delay: w,
            } = e,
            { t: _ } = (0, b.$G)(),
            [I, D] = (0, a.useState)(!1),
            [E, L] = (0, a.useState)(!1),
            P = async () => {
              D(!0), await (null == u ? void 0 : u(c)), D(!1);
            },
            F = (0, a.useMemo)(() => {
              var e;
              return (
                (null == c
                  ? void 0
                  : null === (e = c.assets_list) || void 0 === e
                    ? void 0
                    : e.find(
                        (e) => (null == e ? void 0 : e.assets_name) === f,
                      )) || (null == c ? void 0 : c.assets_list[0])
              );
            }, [null == c ? void 0 : c.assets_list, f]),
            T = (0, a.useMemo)(() => {
              var e;
              return (null == c
                ? void 0
                : null === (e = c.assets_list) || void 0 === e
                  ? void 0
                  : e.length) > 1
                ? c.assets_list.filter((e) => e.assets_name !== f)
                : [];
            }, [null == c ? void 0 : c.assets, f]),
            J = (0, a.useMemo)(
              () =>
                null != F &&
                !!F.content_type &&
                'ticker' === j &&
                (!!(null == F ? void 0 : F.delegate) ||
                  !['text/plain'].some(
                    (e) =>
                      (null == F ? void 0 : F.content_type.indexOf(e)) > -1,
                  )),
              [F],
            ),
            R = (0, a.useMemo)(() => 'ticker' === j && !J, [F, J]);
          null == F || F.assets_name,
            null == F || F.amount,
            (null == F ? void 0 : F.assets_type) === 'exotic' ||
              ((i =
                null == c
                  ? void 0
                  : null === (l = c.assets) || void 0 === l
                    ? void 0
                    : null === (t = l[0]) || void 0 === t
                      ? void 0
                      : t.content_type),
              (o =
                null == c
                  ? void 0
                  : null === (r = c.assets) || void 0 === r
                    ? void 0
                    : null === (n = r[0]) || void 0 === n
                      ? void 0
                      : n.delegate),
              !i ||
                'ticker' !== j ||
                o ||
                ['text/plain'].some((e) => i.indexOf(e) > -1));
          let G = async () => {
            D(!0), await (null == x ? void 0 : x()), D(!1);
          };
          return (0, s.jsxs)(v.w, {
            radius: 'lg',
            classNames: { footer: 'p-1 md:p-3' },
            className:
              "card-hover forced-colors:hidden min-w-[10rem] h-[16rem] md:w-[16rem] md:h-[22.6rem] relative border-1 border-solid border-transparent hover:border hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]",
            onMouseEnter: () => L(!0),
            onMouseLeave: () => L(!1),
            children: [
              y &&
                (0, s.jsx)('div', {
                  className:
                    'absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-30 cursor-pointer',
                  onClick: () => {
                    null == N || N(!h);
                  },
                  children: (0, s.jsx)('div', {
                    className: 'flex absolute top-4 right-4',
                    children: (0, s.jsx)(k.K, {
                      isSelected: h,
                      onValueChange: N,
                    }),
                  }),
                }),
              (0, s.jsxs)(g.G, {
                className:
                  'radius-lg min-w-[10rem] min-h-[10rem] md:w-[16rem] md:h-[16rem] p-0 justify-center overflow-hidden',
                children: [
                  (null == F ? void 0 : F.assets_type) === 'ns' &&
                    (0, s.jsx)(A, { asset: F }),
                  R && (0, s.jsx)(O, { asset: F }),
                  J &&
                    (0, s.jsx)(z, {
                      asset: F,
                      utxo: null == c ? void 0 : c.utxo,
                    }),
                  (null == F ? void 0 : F.assets_type) === 'exotic' &&
                    (0, s.jsx)($, { asset: F, otherAssets: T }),
                  (null == F ? void 0 : F.assets_type) === 'nft' &&
                    (0, s.jsx)(Z, { asset: F }),
                ],
              }),
              (0, s.jsxs)(S.i, {
                className:
                  'block item-center bg-gray-800 h-[6rem] md:h-[6.5rem]',
                children: [
                  (0, s.jsx)(C.Z, {
                    codeString: null == c ? void 0 : c.utxo,
                    className: 'bg-transparent text-blue-400 pt-0 pb-0',
                    symbol: '',
                    size: 'sm',
                    variant: 'flat',
                    children: (0, s.jsx)('span', {
                      className: 'font-thin md:pl-8',
                      children: (0, d.NH)(null == c ? void 0 : c.utxo, 6),
                    }),
                  }),
                  (0, s.jsx)('div', {
                    className: 'flex item-center justify-center pb-1 gap-2',
                    children:
                      0 === c.order_id
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(M.A, {
                                variant: 'ghost',
                                size: 'md',
                                isLoading: I,
                                radius: 'sm',
                                onClick: P,
                                className:
                                  'text-tiny h-8 flex-1 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase min-w-unit-2',
                                children: _('buttons.list_sale'),
                              }),
                              (0, s.jsx)(M.A, {
                                variant: 'ghost',
                                size: 'md',
                                isLoading: I,
                                radius: 'sm',
                                onClick: () => (null == m ? void 0 : m(c)),
                                className:
                                  'text-tiny h-8 flex-1 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase min-w-unit-2',
                                children: _('common.transfer'),
                              }),
                            ],
                          })
                        : (0, s.jsxs)(M.A, {
                            className:
                              'text-tiny h-8 w-5/6 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase',
                            variant: 'flat',
                            radius: 'sm',
                            isLoading: I,
                            startContent:
                              '1' == c.locker
                                ? (0, s.jsx)(p.JO, {
                                    icon: 'mdi:lock',
                                    className: 'text-lg',
                                  })
                                : null,
                            onClick: G,
                            children: [
                              _('buttons.remove_sale'),
                              '（',
                              c.price,
                              ' ',
                              c.currency,
                              '）',
                            ],
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        F = (e) => {
          let { toSell: t, toTransfer: l, onClose: a, actionType: n } = e,
            { t: r } = (0, b.$G)(),
            { list: i } = (0, _.JU)();
          return (0, s.jsx)('div', {
            className:
              'batch-sell-footer fixed bottom-0 w-full h-20 left-0 dark:bg-slate-900 bg-slate-100 z-50',
            children: (0, s.jsxs)('div', {
              className: 'flex justify-between items-center w-full h-full px-4',
              children: [
                (0, s.jsx)('div', { className: 'flex-1', children: i.length }),
                (0, s.jsxs)('div', {
                  className: 'flex gap-2 items-center',
                  children: [
                    (0, s.jsx)(M.A, {
                      className: 'btn btn-primary',
                      color: 'primary',
                      onClick: () =>
                        'sell' === n
                          ? null == t
                            ? void 0
                            : t()
                          : null == l
                            ? void 0
                            : l(),
                      children: r(
                        'sell' === n ? 'common.sell' : 'common.transfer',
                      ),
                    }),
                    (0, s.jsx)(M.A, {
                      isIconOnly: !0,
                      onClick: a,
                      children: (0, s.jsx)(p.JO, {
                        icon: 'mdi:close',
                        className: 'text-white text-2xl',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var T = l(16463),
        J = l(46807),
        R = l(57603),
        G = l(48223);
      let V = (e) => {
        let { assets_name: t, assets_type: l, assets_category: n } = e,
          r = (0, T.useRouter)(),
          { address: i, network: o } = (0, m.$)((e) => e),
          {
            add: c,
            changeAssetsName: d,
            changeAssetsType: x,
            reset: v,
            list: h,
            remove: f,
          } = (0, _.JU)((e) => e),
          [g, b] = (0, a.useState)('sell'),
          [p, j] = (0, a.useState)(!1),
          [y, k] = (0, a.useState)(1),
          [S, C] = (0, a.useState)(12);
        console.log('assets_category', n);
        let M = (0, a.useMemo)(
          () =>
            '/ordx/getOrdxAssets-'
              .concat(i, '-')
              .concat(l, '-')
              .concat(t, '-')
              .concat(n, '-')
              .concat(y, '-')
              .concat(S),
          [i, y, S, t, l, n],
        );
        console.log('swrKey', M);
        let {
            data: A,
            isMutating: O,
            trigger: I,
          } = (0, N.Z)(M, () =>
            (0, u.Ro)({
              address: i,
              assets_name: t,
              category: n,
              assets_type: l,
              offset: (y - 1) * S,
              size: S,
            }),
          ),
          [z, { set: D, reset: $, push: E, updateAt: L }] = (0, J.Z)([]);
        (0, a.useEffect)(() => {
          if (A) {
            let { assets: e = [] } = (null == A ? void 0 : A.data) || {};
            1 === y ? D(e) : E(...e);
          }
        }, [A]);
        let Z = async (e) => {
            V(e), j(!0);
          },
          V = (e) => {
            var s, a, n, r;
            let i = 0;
            (i =
              'exotic' === l
                ? (null === (a = e.assets_list) || void 0 === a
                    ? void 0
                    : null ===
                          (s = a.find((e) => 'exotic' === e.assets_type)) ||
                        void 0 === s
                      ? void 0
                      : s.amount) || 0
                : (null === (r = e.tickers) || void 0 === r
                    ? void 0
                    : null === (n = r.find((e) => e.ticker === t)) ||
                        void 0 === n
                      ? void 0
                      : n.amount) || 0),
              console.log(new R.t('2').mul(new R.t(i)).toString()),
              x(l),
              d(t),
              c({ ...e, unit_price: '2', status: 'pending' });
          },
          X = (e, t) => {
            e ? t.order_id || V(t) : f(t.utxo);
          },
          H = async (e) => {
            if ('1' === e.locker) {
              w.ZP.error({
                message: 'Cancel order failed',
                description: 'The order is locked, please wait unlock it first',
              });
              return;
            }
            try {
              let t = await (0, u.sl)({ address: i, order_id: e.order_id });
              if (200 === t.code) {
                w.ZP.success({
                  message: 'Cancel order successfully',
                  description: 'The order has been canceled successfully',
                });
                let t = z.findIndex((t) => t.utxo === e.utxo);
                (e.order_id = 0), t >= 0 && L(t, e);
              } else
                w.ZP.error({
                  message: 'Cancel order failed',
                  description: t.msg,
                });
            } catch (e) {
              w.ZP.error({
                message: 'Cancel order failed',
                description: e.msg,
              });
            }
          },
          B = (0, a.useMemo)(() => {
            var e;
            return (
              (null == A
                ? void 0
                : null === (e = A.data) || void 0 === e
                  ? void 0
                  : e.total) || 0
            );
          }, [A]),
          K = (0, a.useMemo)(() => z.length >= B, [B, z]),
          U = async () => {
            k(y + 1);
          };
        return (
          (0, a.useEffect)(() => {
            v();
          }, []),
          (0, a.useEffect)(() => {
            (l || t) && I();
          }, [y, S]),
          (0, a.useEffect)(() => {
            (l || t) && ($(), j(!1), k(1), I());
          }, [l, t, n]),
          (0, s.jsxs)('div', {
            className: ''.concat(p ? 'pb-20' : ''),
            children: [
              (0, s.jsx)(G.v, {
                loading: O,
                loadMore: U,
                hasMore: !K,
                empty: !z.length,
                children: (0, s.jsx)('div', {
                  className:
                    'flex flex-wrap justify-center gap-4 md:gap-6 mb-4',
                  children: z.map((e, a) =>
                    (0, s.jsx)(
                      'div',
                      {
                        children: (0, s.jsx)(P, {
                          assets_name: t,
                          assets_type: l,
                          selected: !!h.find((t) => t.utxo === e.utxo),
                          canSelect: p,
                          onSelect: (t) => X(t, e),
                          item: e,
                          delay: a > 5 ? 2e3 : 0,
                          onTransfer: () => {
                            b('transfer'), Z(e);
                          },
                          onSell: () => {
                            b('sell'), Z(e);
                          },
                          onCancelOrder: () => H(e),
                        }),
                      },
                      e.utxo + a,
                    ),
                  ),
                }),
              }),
              p &&
                (0, s.jsx)(F, {
                  actionType: g,
                  toTransfer: () => {
                    r.push('/account/transfer');
                  },
                  toSell: () => {
                    r.push('/account/sell');
                  },
                  onClose: () => {
                    j(!1), v();
                  },
                }),
            ],
          })
        );
      };
      var X = l(83887),
        H = l(62575),
        B = l(66496),
        K = l(29629),
        U = l(9139),
        Y = l(964),
        W = l(93908),
        q = l(64757),
        Q = l(71272);
      let ee = () => {
        let { address: e, network: t } = (0, m.$)((e) => e),
          l = (0, a.useMemo)(
            () => '/ordx/getAddressAssetsList-'.concat(e, '-').concat(t),
            [e, t],
          ),
          {
            data: n,
            isLoading: r,
            mutate: o,
          } = (0, i.ZP)(
            l,
            () => X.lI.getOrdinalsAssets({ address: e, network: t }),
            { revalidateOnFocus: !1, revalidateOnReconnect: !1 },
          ),
          c = (0, a.useMemo)(
            () =>
              (null == n
                ? void 0
                : n.runes_balances.map((e, t) => ({
                    key: t,
                    rune: e[0],
                    balance: e[1],
                    symbol: e[2],
                  }))) || [],
            [n],
          );
        return (
          console.log(c),
          0 === c.length
            ? (0, s.jsx)('div', {
                className: 'flex items-center justify-center h-64',
                children: (0, s.jsx)(H.Z, {}),
              })
            : (0, s.jsxs)(v.w, {
                className:
                  'w-full max-w-6xl mx-auto bg-[#1c1917] text-white shadow-none',
                children: [
                  (0, s.jsx)(h.u, {
                    className: 'pb-0 pt-4 px-4',
                    children: (0, s.jsx)('h4', {
                      className: 'text-xl font-normal',
                      children: 'Assets',
                    }),
                  }),
                  (0, s.jsx)(g.G, {
                    className: 'overflow-visible py-4',
                    children: (0, s.jsxs)(B.b, {
                      'aria-label': 'Example table with dynamic content',
                      children: [
                        (0, s.jsx)(K.J, {
                          columns: [
                            { key: 'rune', label: 'Rune' },
                            { key: 'balance', label: 'Balance' },
                          ],
                          children: (e) =>
                            (0, s.jsx)(
                              U.j,
                              { className: 'text-lg', children: e.label },
                              e.key,
                            ),
                        }),
                        (0, s.jsx)(Y.y, {
                          items: c,
                          children: (e) =>
                            (0, s.jsx)(
                              W.g,
                              {
                                children: (t) => {
                                  let l = (0, q.sF)(e, t);
                                  return (console.log('item', e), 'rune' === t)
                                    ? (0, s.jsx)(Q.X, {
                                        children: (0, s.jsx)('div', {
                                          className:
                                            'flex items-center space-x-4',
                                          children: (0, s.jsx)('span', {
                                            className: 'text-lg',
                                            children: 'UNCOMMON•GOODS',
                                          }),
                                        }),
                                      })
                                    : 'balance' === t
                                      ? (0, s.jsx)(Q.X, {
                                          children: (0, s.jsxs)('div', {
                                            className:
                                              'flex items-center space-x-2',
                                            children: [
                                              (0, s.jsx)('span', {
                                                className: 'text-lg',
                                                children: l,
                                              }),
                                              (0, s.jsx)('span', {
                                                children: e.symbol,
                                              }),
                                            ],
                                          }),
                                        })
                                      : (0, s.jsx)(Q.X, {
                                          children: (0, s.jsx)('div', {
                                            className:
                                              'flex items-center space-x-4',
                                            children: (0, s.jsx)('span', {
                                              className: 'text-lg',
                                              children: l,
                                            }),
                                          }),
                                        });
                                },
                              },
                              e.key,
                            ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
        );
      };
      var et = l(21433);
      let el = (e) => {
          let { onChange: t, name: l } = e,
            { t: n } = (0, b.$G)(),
            { network: r } = (0, m.$)((e) => e),
            [i, o] = (0, a.useState)(),
            [c, d] = (0, a.useState)(),
            [u, x] = (0, a.useState)(),
            [v, h] = (0, a.useState)();
          (0, a.useEffect)(() => {
            l || (o(''), d(''), x(''), h(''));
          }, [l]);
          let f = [
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
            ],
            g = [
              { label: 'All', value: '' },
              { label: n('name.category.letter.1_letter'), value: '1L' },
              { label: n('name.category.letter.2_letters'), value: '2L' },
              { label: n('name.category.letter.3_letters'), value: '3L' },
              { label: n('name.category.letter.4_letters'), value: '4L' },
              { label: n('name.category.letter.cvcv'), value: 'cvcv' },
              { label: n('name.category.letter.same_letters'), value: 'same' },
            ],
            p = [
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
              { label: n('name.category.other.c_mobile_number'), value: 'cmn' },
              { label: n('name.category.other.dal2'), value: 'DaL2' },
              { label: n('name.category.other.dal3'), value: 'DaL3' },
              { label: n('name.category.other.char2'), value: '2char' },
              {
                label: n('name.category.other.unclassified_digit_names'),
                value: 'undefined',
              },
            ],
            j = [
              { label: 'All', value: '' },
              { label: n('name.category.chinese.1_han'), value: '1Han' },
              { label: n('name.category.chinese.2_han'), value: '2Han' },
              { label: n('name.category.chinese.3_han'), value: '3Han' },
              { label: n('name.category.chinese.4_han'), value: '4Han' },
            ],
            y = (e, t) => {
              'number' === e
                ? o(t)
                : 'letter' === e
                  ? d(t)
                  : 'chinese' === e
                    ? x(t)
                    : 'other' === e && h(t);
            };
          return (
            (0, a.useEffect)(() => {
              let e = [i, c, u, v].filter((e) => e || '' !== e);
              null == t || t(e.join('+'));
            }, [i, c, u, v]),
            (0, s.jsxs)('div', {
              className: 'grid grid-cols-2 gap-2 md:grid-cols-4 mb-4',
              children: [
                (0, s.jsx)(
                  et.y,
                  {
                    placeholder: 'Number Category',
                    list: f,
                    selected: i,
                    onChange: (e) => y('number', e),
                  },
                  'number',
                ),
                (0, s.jsx)(
                  et.y,
                  {
                    placeholder: 'Letter Category',
                    list: g,
                    selected: c,
                    onChange: (e) => y('letter', e),
                  },
                  'letter',
                ),
                (0, s.jsx)(
                  et.y,
                  {
                    placeholder: 'Chinese Category',
                    list: j,
                    selected: u,
                    onChange: (e) => y('chinese', e),
                  },
                  'chinese',
                ),
                (0, s.jsx)(
                  et.y,
                  {
                    placeholder: 'Other Category',
                    list: p,
                    selected: v,
                    onChange: (e) => y('other', e),
                  },
                  'other',
                ),
              ],
            })
          );
        },
        es = () => {
          let [e, t] = (0, a.useState)('ticker'),
            [l, n] = (0, a.useState)(''),
            [r, i] = (0, a.useState)();
          return (0, s.jsxs)('div', {
            className: 'py-4',
            children: [
              (0, s.jsx)('div', {
                className: 'mb-4',
                children: (0, s.jsx)(y, {
                  onChange: (e) => {
                    t(e), i(''), n('');
                  },
                }),
              }),
              'rune' !== e &&
                (0, s.jsx)('div', {
                  children: (0, s.jsx)(x, {
                    onChange: (e) => {
                      n(e), i('');
                    },
                    assets_type: e,
                  }),
                }),
              'ns' === e &&
                (0, s.jsx)(el, {
                  name: r,
                  onChange: (e) => {
                    i(e);
                  },
                }),
              'rune' === e && (0, s.jsx)(ee, {}),
              !!e &&
                !!l &&
                (0, s.jsx)(V, {
                  assets_name: l,
                  assets_type: e,
                  assets_category: r,
                }),
            ],
          });
        };
      var ea = l(69142),
        en = l(96019),
        er = l(79386),
        ei = l(27517);
      let eo = (e) => {
          let {
              item: t,
              onBuy: l,
              canSelect: n,
              selected: r,
              onSelect: i,
              assets_name: o,
              assets_type: c,
              onCancelOrder: u,
              delay: x,
              showResale: h = !0,
            } = e,
            { address: f } = (0, m.$)(),
            [y, N] = (0, a.useState)(!1),
            [w, _] = (0, a.useState)(!1),
            { t: C } = (0, b.$G)(),
            A = async () => {
              N(!0);
              try {
                await (null == l ? void 0 : l(t));
              } catch (e) {
              } finally {
                N(!1);
              }
            },
            O = (0, a.useMemo)(() => f && t.address !== f, [f, t.address]),
            z = (e, t) =>
              !!e && (!!t || !['text/plain'].some((t) => e.indexOf(t) > -1)),
            $ = (0, a.useMemo)(() => {
              var e;
              return (
                (null == t
                  ? void 0
                  : t.assets.find((e) => e.assets_name === o)) ||
                (null == t
                  ? void 0
                  : null === (e = t.assets) || void 0 === e
                    ? void 0
                    : e[0])
              );
            }, [null == t ? void 0 : t.assets, o]),
            E = (e) => {
              O && (null == i || i(e));
            };
          return (0, s.jsxs)(v.w, {
            isPressable: !0,
            radius: 'lg',
            classNames: { footer: 'p-1 sm:p-2' },
            className:
              "forced-colors:hidden border-none w-[10rem] h-[16rem] md:w-[16rem] md:h-[22.6rem] relative hover:border-1 hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]",
            children: [
              n &&
                (0, s.jsx)('div', {
                  className:
                    'absolute top-0 left-0 w-full h-full z-30 cursor-pointer bg-gray-600 bg-opacity-50',
                  onClick: () => {
                    null == E || E(!r);
                  },
                  children: (0, s.jsx)('div', {
                    className: 'flex absolute top-4 right-4',
                    children: (0, s.jsx)(k.K, {
                      isDisabled: !O,
                      isSelected: r,
                      onValueChange: E,
                    }),
                  }),
                }),
              (0, s.jsx)(g.G, {
                className:
                  'radius-lg w-[10rem] h-[10rem] md:w-[16em] md:h-[16rem] top-0 bottom-0 left-0',
                children: (0, s.jsxs)('div', {
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
                            (null == $ ? void 0 : $.assets_type) === 'exotic'
                              ? (0, s.jsx)(D.J, {
                                  radius: 'full',
                                  src: '/raresats/'.concat(
                                    null == $ ? void 0 : $.assets_name,
                                    '.svg',
                                  ),
                                  alt: 'logo',
                                  className:
                                    'w-32 h-32 md:w-36 md:h-36 top-8 left-8 md:top-14 md:left-14 rounded-full',
                                })
                              : z(
                                  null == $ ? void 0 : $.content_type,
                                  null == $ ? void 0 : $.delegate,
                                ) &&
                                (0, s.jsx)('div', {
                                  className: 'h-full w-full',
                                  children: (0, s.jsx)(I.A, {
                                    defaultImage:
                                      '/ordx-utxo-content-default.jpg',
                                    inscriptionId:
                                      null == $ ? void 0 : $.inscription_id,
                                    delay: x,
                                    utxo: null == t ? void 0 : t.utxo,
                                  }),
                                }),
                        }),
                        z(
                          null == $ ? void 0 : $.content_type,
                          null == $ ? void 0 : $.delegate,
                        )
                          ? (0, s.jsx)('section', {
                              className:
                                'text-center font-mono absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end',
                              children: (0, s.jsx)('p', {
                                className:
                                  'font-medium text-2xl md:text-3xl mb-1',
                                children: (0, d.ic)(
                                  null == $ ? void 0 : $.amount,
                                ),
                              }),
                            })
                          : (0, s.jsxs)('section', {
                              className:
                                'text-center pt-10 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-20',
                              children: [
                                (0, s.jsx)('p', {
                                  className:
                                    'font-medium pt-5 text-2xl md:text-3xl md:pt-6',
                                  children:
                                    'ns' === c
                                      ? null == $
                                        ? void 0
                                        : $.assets_name
                                      : (0, d.ic)(
                                          null == $ ? void 0 : $.amount,
                                        ),
                                }),
                                'ns' !== c &&
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsxs)('p', {
                                        className: 'pt-12 md:pb-2 md:text-sm',
                                        children: [
                                          (0, s.jsx)('span', {
                                            className:
                                              'font-bold text-amber-400',
                                            children: (
                                              (null == $
                                                ? void 0
                                                : $.unit_price) /
                                              (null == $
                                                ? void 0
                                                : $.unit_amount)
                                            ).toFixed(2),
                                          }),
                                          (0, s.jsxs)('span', {
                                            className:
                                              'font-mono text-gray-100',
                                            children: [
                                              '\xa0sats/',
                                              null == $
                                                ? void 0
                                                : $.assets_name,
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
                                            (0, s.jsx)(j.H, {
                                              btc:
                                                (null == $
                                                  ? void 0
                                                  : $.unit_price) /
                                                (null == $
                                                  ? void 0
                                                  : $.unit_amount) /
                                                1e8,
                                            }),
                                            '\xa0 /',
                                            null == $ ? void 0 : $.assets_name,
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                      ],
                    }),
                    ' ',
                    'ns' !== c &&
                      (0, s.jsx)('div', {
                        className:
                          'left-0 top-0 flex absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100 z-10',
                        children: null == $ ? void 0 : $.assets_name,
                      }),
                  ],
                }),
              }),
              (0, s.jsxs)(S.i, {
                className:
                  'block item-center bg-gray-800 w-full h-[6rem] md:h-[6.5rem]',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'flex-1 flex items-center justify-between gap-4 font-bold mb-1 sm:md-2 '.concat(
                        'ns' === c ? 'mb-4' : '',
                      ),
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'flex ',
                        children: [
                          'BTC' === t.currency &&
                            (0, s.jsx)(p.JO, {
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
                            (0, s.jsx)(j.H, {
                              btc: null == t ? void 0 : t.price,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  'ns' !== c &&
                    (0, s.jsx)('div', {
                      className:
                        'flex-1 flex items-center justify-between gap-4  md:mb-2 text-[10px] md:text-xs mb-1',
                      children: (0, s.jsxs)('div', {
                        className: 'flex items-center',
                        children: [
                          'BTC' === t.currency &&
                            (0, s.jsx)(p.JO, {
                              icon: 'cryptocurrency-color:btc',
                              className: 'mr-1 mt-0.5',
                            }),
                          (0, s.jsx)('span', {
                            className: 'font-bold text-amber-400',
                            children: (
                              (null == $ ? void 0 : $.unit_price) /
                              (null == $ ? void 0 : $.unit_amount)
                            ).toFixed(2),
                          }),
                          (0, s.jsxs)('span', {
                            className: 'font-mono text-gray-100',
                            children: [
                              '\xa0sats/',
                              null == $ ? void 0 : $.assets_name,
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, s.jsx)(ei.j, {
                    className: 'flex-1',
                    text: C('buttons.buy'),
                    children:
                      (null == t ? void 0 : t.address) === f && h
                        ? (0, s.jsx)(M.A, {
                            className:
                              'text-tiny h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase',
                            variant: 'flat',
                            radius: 'sm',
                            startContent:
                              '1' == t.locked
                                ? (0, s.jsx)(p.JO, {
                                    icon: 'mdi:lock',
                                    className: 'text-lg',
                                  })
                                : null,
                            onClick: u,
                            children: C('buttons.remove_sale'),
                          })
                        : (0, s.jsx)(M.A, {
                            className:
                              'flex-1 border-none h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase',
                            variant: 'ghost',
                            size: 'md',
                            isDisabled: !O,
                            isLoading: y,
                            radius: 'sm',
                            startContent:
                              '1' == t.locked
                                ? (0, s.jsx)(p.JO, {
                                    icon: 'mdi:lock',
                                    className: 'text-lg',
                                  })
                                : null,
                            onClick: A,
                            children: C('buttons.buy'),
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        ec = (e) => {
          let { address: t } = e,
            { t: l } = (0, b.$G)(),
            { address: n, network: r } = (0, m.$)((e) => e),
            [o, c] = (0, a.useState)(1),
            [d, x] = (0, a.useState)(12),
            v = (0, a.useMemo)(
              () =>
                t
                  ? '/ordx/getOrders-'
                      .concat(t, '-')
                      .concat(r, '-')
                      .concat(o, '-')
                      .concat(d)
                  : '/ordx/getOrders-'.concat(r, '-').concat(o, '-').concat(d),
              [t, o, d, r],
            ),
            {
              data: h,
              isLoading: f,
              mutate: g,
            } = (0, i.ZP)(v, () =>
              (0, u.AU)({ offset: (o - 1) * d, size: d, address: t }),
            ),
            [p, { set: j, reset: y, updateAt: N, removeAt: _ }] = (0, J.Z)([]);
          (0, a.useEffect)(() => {
            if (h) {
              var e;
              j(
                (null === (e = h.data) || void 0 === e
                  ? void 0
                  : e.order_list) || [],
              );
            }
          }, [h, j]);
          let k = async (e) => {
              if ('1' === e.locker) {
                w.ZP.error({
                  message: 'Cancel order failed',
                  description:
                    'The order is locked, please wait unlock it first',
                });
                return;
              }
              let l = await (0, u.sl)({ address: t, order_id: e.order_id });
              200 === l.code
                ? (w.ZP.success({
                    message: 'Cancel order successfully',
                    description: 'The order has been canceled successfully',
                  }),
                  _(p.findIndex((t) => t.utxo === e.utxo)))
                : w.ZP.error({
                    message: 'Cancel order failed',
                    description: l.msg,
                  });
            },
            S = (0, a.useMemo)(() => {
              var e, t;
              return (
                null == h
                  ? void 0
                  : null === (e = h.data) || void 0 === e
                    ? void 0
                    : e.total
              )
                ? Math.ceil(
                    (null == h
                      ? void 0
                      : null === (t = h.data) || void 0 === t
                        ? void 0
                        : t.total) / d,
                  )
                : 0;
            }, [h, d]);
          return (0, s.jsxs)('div', {
            className: '',
            children: [
              (0, s.jsxs)(er.V, {
                loading: f,
                children: [
                  !p.length && (0, s.jsx)(H.Z, { className: 'mt-10' }),
                  (0, s.jsx)('div', {
                    className:
                      'min-h-[30rem] flex flex-wrap justify-center gap-8 mb-4',
                    children: p.map((e, t) =>
                      (0, s.jsx)(
                        'div',
                        {
                          children: (0, s.jsx)(eo, {
                            item: e,
                            delay: t > 5 ? 2e3 : 0,
                            onCancelOrder: () => k(e),
                          }),
                        },
                        e.utxo,
                      ),
                    ),
                  }),
                ],
              }),
              S > 1 &&
                (0, s.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, s.jsx)(en.t, {
                    total: S,
                    page: o,
                    size: d,
                    onChange: (e, t) => {
                      c(e);
                    },
                  }),
                }),
            ],
          });
        };
      var ed = l(64621),
        eu = l(59430);
      let em = () => {
        let { t: e, i18n: t } = (0, b.$G)(),
          l = (0, T.useRouter)(),
          [n, r] = (0, a.useState)(!1),
          { address: i, network: x } = (0, m.$)((e) => e),
          [v, h] = (0, a.useState)(1),
          [f, g] = (0, a.useState)(12),
          [p, j] = (0, a.useState)(0),
          [y, N] = (0, a.useState)(''),
          [w, _] = (0, a.useState)(1),
          [k, S] = (0, a.useState)('0'),
          [C, M] = (0, a.useState)([]),
          A = async () => {
            let e = [];
            r(!0);
            let t = await (0, u.ek)({
              address: i,
              offset: (v - 1) * f,
              size: f,
              sort_field: y,
              sort_order: w,
            });
            r(!1), 200 === t.code && (e = t.data.tasks), M(e), j(t.data.total);
          },
          O = async () => {
            let e = [];
            r(!0);
            let t = await (0, u.V0)({
              address: i,
              offset: (v - 1) * f,
              size: f,
              sort_field: y,
              sort_order: w,
            });
            r(!1), 200 === t.code && (e = t.data.tasks), M(e), j(t.data.total);
          };
        return (
          (0, a.useEffect)(() => {
            '0' === k ? A() : '1' === k && O();
          }, [k]),
          (0, s.jsxs)('div', {
            className: 'pt-4',
            children: [
              (0, s.jsx)('div', {
                className: 'mb-2 flex justify-end items-center',
                children: (0, s.jsx)(o.g, {
                  className: 'w-48',
                  selectionMode: 'single',
                  selectedKeys: k,
                  defaultSelectedKeys: ['0'],
                  onSelectionChange: (e) => {
                    S(Number(Array.from(e.values())[0]).toString());
                  },
                  children: [
                    { label: 'Charged Task', value: '0' },
                    { label: 'Order Task', value: '1' },
                  ].map((e) =>
                    (0, s.jsx)(
                      c.R,
                      { value: e.value, children: e.label },
                      e.value,
                    ),
                  ),
                }),
              }),
              (0, s.jsxs)(B.b, {
                isHeaderSticky: !0,
                isStriped: !0,
                color: 'primary',
                selectionMode: 'single',
                onRowAction: (e) => {
                  let t = C.find((t) => (null == t ? void 0 : t.txid) === e);
                  (null == t ? void 0 : t.type) === 'search_rarity_sats' &&
                    l.push('/tools/sat?txid='.concat(e));
                },
                bottomContent:
                  p > 1
                    ? (0, s.jsx)('div', {
                        className: 'flex justify-center',
                        children: (0, s.jsx)(en.t, {
                          total: p,
                          page: v,
                          size: f,
                          onChange: (e, t) => {
                            h(e);
                          },
                        }),
                      })
                    : null,
                children: [
                  (0, s.jsx)(K.J, {
                    children: [
                      { key: 'txid', label: 'Tx', allowsSorting: !0 },
                      { key: 'fees', label: 'Fee', allowsSorting: !0 },
                      { key: 'type', label: 'Type', allowsSorting: !0 },
                      {
                        key: 'created_at',
                        label: 'Create Date',
                        allowsSorting: !0,
                      },
                      {
                        key: 'updated_at',
                        label: 'Update Date',
                        allowsSorting: !0,
                      },
                      { key: 'status', label: 'Status', allowsSorting: !0 },
                    ].map((e) =>
                      (0, s.jsx)(
                        U.j,
                        {
                          className: 'text-sm md:text-base font-extralight',
                          children: e.label,
                        },
                        e.key,
                      ),
                    ),
                  }),
                  (0, s.jsx)(Y.y, {
                    isLoading: n,
                    items: C,
                    emptyContent: 'No Data.',
                    loadingContent: (0, s.jsx)(E.c, {}),
                    children: (e) =>
                      (0, s.jsx)(
                        W.g,
                        {
                          className: 'cursor-pointer text-sm md:text-base',
                          children: (t) => {
                            if ('txid' === t) {
                              let t = e.txid,
                                l = (0, d.Gg)({
                                  network: x,
                                  path: 'tx/'.concat(t),
                                });
                              return (0, s.jsx)(Q.X, {
                                className: 'font-light text-sm md:text-base',
                                children: (0, s.jsx)(ed.e, {
                                  content: t,
                                  children: (0, s.jsx)('a', {
                                    className:
                                      'text-blue-500 cursor-pointer mr-2',
                                    href: l,
                                    target: '_blank',
                                    children: (0, eu.NH)(t),
                                  }),
                                }),
                              });
                            }
                            return 'created_at' === t
                              ? (0, s.jsx)(Q.X, {
                                  className: 'font-light text-sm md:text-base',
                                  children: new Date(
                                    (0, q.sF)(e, t),
                                  ).toLocaleString('af'),
                                })
                              : 'updated_at' === t
                                ? (0, s.jsx)(Q.X, {
                                    className:
                                      'font-light text-sm md:text-base',
                                    children: new Date(
                                      (0, q.sF)(e, t),
                                    ).toLocaleString('af'),
                                  })
                                : (0, s.jsx)(Q.X, {
                                    className:
                                      'font-light text-sm md:text-base',
                                    children: (0, q.sF)(e, t),
                                  });
                          },
                        },
                        e.txid,
                      ),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var ex = l(75844);
      function ev(e) {
        let { onChange: t, loading: l } = e,
          n = (0, T.useRouter)(),
          { address: r, network: o } = (0, m.$)(),
          [c, d] = (0, a.useState)(''),
          x = (0, a.useMemo)(
            () => '/ordx/getNsListByAddress-'.concat(r, '-{network}'),
            [r, o],
          ),
          { data: v, isLoading: h } = (0, i.ZP)(x, () =>
            u.lI.getNsListByAddress({ address: r, network: o, limit: 1e3 }),
          ),
          f = (0, a.useMemo)(() => {
            var e, t;
            return (
              (null == v
                ? void 0
                : null === (t = v.data) || void 0 === t
                  ? void 0
                  : null === (e = t.names) || void 0 === e
                    ? void 0
                    : e.map((e) => ({ label: e.name, value: e.name }))) || []
            );
          }, [v]);
        return (
          (0, a.useMemo)(() => 0 === f.length, [f]),
          (0, a.useEffect)(() => {
            c && (null == t || t(c));
          }, [c]),
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(ex.Z, {
                value: c,
                size: 'large',
                onSelect: (e) => {
                  d(e);
                },
                loading: h || l,
                showSearch: !0,
                className: 'w-full rounded-full overflow-hidden bg-[#27272A]',
                placeholder: 'Select a person',
                filterOption: (e, t) =>
                  (null == t ? void 0 : t.label)
                    .toLowerCase()
                    .includes(e.toLowerCase()),
                options: f,
              }),
              (0, s.jsxs)('div', {
                className: 'flex gap-8 justify-center mt-2',
                children: [
                  (0, s.jsx)(M.A, {
                    color: 'primary',
                    onClick: () => {
                      n.push('/ordx/ticker?ticker=btc&assets_type=ns');
                    },
                    children: 'Buy',
                  }),
                  (0, s.jsx)(M.A, {
                    color: 'primary',
                    onClick: () => {
                      n.push('/inscribe?type=name&source=blog');
                    },
                    children: 'Inscribe',
                  }),
                ],
              }),
            ],
          })
        );
      }
      var eh = l(18182),
        ef = l(62121),
        eg = l(52975);
      let eb = (e) => {
        let { onChange: t, info: l = {} } = e,
          [n, { set: r }] = (0, eg.Z)({
            avatar: '',
            name: '',
            desc: '',
            twitter: '',
            website: '',
            email: '',
            facebook: '',
          });
        return (
          (0, a.useEffect)(() => {
            null == t || t(n);
          }, [n]),
          (0, a.useEffect)(() => {
            r('avatar', l.avatar),
              r('name', l.name),
              r('desc', l.desc),
              r('twitter', l.twitter),
              r('website', l.website),
              r('email', l.email),
              r('emafacebookil', l.facebook);
          }, []),
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', { className: 'w-40', children: 'Avatar' }),
                  (0, s.jsx)(ef.Y, {
                    placeholder: 'Image Inscription Id',
                    value: n.avatar,
                    onValueChange: (e) => r('avatar', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', {
                    className: 'w-40',
                    children: 'Nick Name',
                  }),
                  (0, s.jsx)(ef.Y, {
                    value: n.name,
                    onValueChange: (e) => r('name', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', {
                    className: 'w-40',
                    children: 'Description',
                  }),
                  (0, s.jsx)(ef.Y, {
                    value: n.desc,
                    onValueChange: (e) => r('desc', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', {
                    className: 'w-40',
                    children: 'Twitter',
                  }),
                  (0, s.jsx)(ef.Y, {
                    placeholder: 'link url',
                    value: n.twitter,
                    onValueChange: (e) => r('twitter', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', {
                    className: 'w-40',
                    children: 'Facebook',
                  }),
                  (0, s.jsx)(ef.Y, {
                    placeholder: 'link url',
                    value: n.facebook,
                    onValueChange: (e) => r('facebook', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', {
                    className: 'w-40',
                    children: 'Website',
                  }),
                  (0, s.jsx)(ef.Y, {
                    placeholder: 'link url',
                    value: n.website,
                    onValueChange: (e) => r('website', e),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex justify-center items-center mb-2 ',
                children: [
                  (0, s.jsx)('span', { className: 'w-40', children: 'Email' }),
                  (0, s.jsx)(ef.Y, {
                    placeholder: 'email',
                    value: n.email,
                    onValueChange: (e) => r('email', e),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var ep = l(72847);
      function ej() {
        let { t: e } = (0, b.$G)(),
          t = (0, T.useRouter)(),
          [l, n] = (0, a.useState)(!1),
          [r, i] = (0, a.useState)(''),
          [o, c] = (0, a.useState)(''),
          [d, x] = (0, a.useState)(!1),
          [v, h] = (0, a.useState)(),
          [f, g] = (0, a.useState)(!1),
          [p, j] = (0, a.useState)(''),
          [y, N] = (0, a.useState)(''),
          { inscriptionId: k, reset: S } = (0, _.Ny)(),
          [C, A] = (0, a.useState)({}),
          { network: O, address: I } = (0, m.$)(),
          { setData: z, reset: D } = (0, _.IV)(),
          [$, { set: E, reset: L }] = (0, eg.Z)({
            avatar: '',
            name: '',
            desc: '',
            twitter: '',
            website: '',
            email: '',
            facebook: '',
          }),
          Z = async () => {
            g(!1), await H();
          },
          P = (0, a.useMemo)(
            () =>
              'testnet' === O
                ? 'fa8d3086b679985125f000a63a0f533d04b35c3fb97fd70e2f47e708e5ec13d8i0'
                : '85ee4d912f36352f04dcb8a323f4193c9a341f23e5dc1ae1477ecebdc4195672i0',
            [O],
          ),
          F = async () => {
            D(),
              z({
                type: 'blog',
                mode: 'template',
                relateInscriptionId: P,
                metadata: { op: 'update', name: r, key: 'template_blog' },
                text: 'template_blog',
              }),
              t.push('/inscribe?source=blog');
          },
          J = async () => {
            z({
              type: 'text',
              mode: 'routing',
              text: JSON.stringify({
                p: 'btcname',
                op: 'routing',
                name: r,
                ord_handle: 'www',
                ord_index: p,
              }),
            }),
              t.push('/inscribe?source=blog');
          },
          R = () => {
            window.open(X, '_blank');
          },
          G = async () => {
            z({
              type: 'text',
              text: JSON.stringify({
                p: 'sns',
                op: 'update',
                name: r,
                ['blog_'.concat(+new Date())]: o.replace('\n', '<br/>'),
              }),
            }),
              t.push('/inscribe?source=blog');
          },
          V = async () => {
            var e;
            let l = { p: 'sns', op: 'update', name: r };
            $.avatar && $.avatar !== C.avatar && (l.avatar = $.avatar),
              $.name && $.name !== C.name && (l.personal_name = $.name),
              $.desc && $.desc !== C.desc && (l.personal_desc = $.desc),
              $.website &&
                $.website !== C.website &&
                (l.personal_website = $.website),
              $.email && $.email !== C.email && (l.personal_email = $.email),
              $.twitter &&
                $.twitter !== C.twitter &&
                (l.personal_twitter = $.twitter),
              $.facebook &&
                $.facebook !== C.facebook &&
                (l.personal_facebook = $.facebook),
              n(!0),
              console.log('params', l);
            let [s, a] = await (0, eh.vU)(u.lI.getInscriptiontInfo)({
              network: O,
              inscriptionId: $.avatar,
            });
            if (
              (n(!1),
              0 !== a.code ||
                (null == a
                  ? void 0
                  : null === (e = a.data) || void 0 === e
                    ? void 0
                    : e.address) !== I)
            ) {
              w.ZP.error({
                message: 'Error',
                description: 'You can only mint your own personal blog.',
              });
              return;
            }
            z({ type: 'text', text: JSON.stringify(l) }),
              t.push('/inscribe?source=blog');
          },
          X = (0, a.useMemo)(
            () =>
              'testnet' !== O
                ? 'https://'.concat(r, '.deweb.me')
                : 'https://'.concat(r, '.dkvs.xyz'),
            [O, r],
          ),
          H = async () => {
            if (!r) return;
            x(!0);
            let [e, t] = await (0, eh.vU)(u.lI.getNsName)({
              name: r,
              network: O,
            });
            if ((x(!1), !e)) {
              var l, s, a, n, i, o, c, d, m;
              g(!0);
              let { kvs: e = [] } = t.data || {};
              console.log('_id ', k);
              let r =
                  null == e
                    ? void 0
                    : null === (l = e.find((e) => 'ord_index' === e.key)) ||
                        void 0 === l
                      ? void 0
                      : l.value,
                u =
                  (null === (s = e.find((e) => 'avatar' === e.key)) ||
                  void 0 === s
                    ? void 0
                    : s.value) || '',
                x =
                  (null === (a = e.find((e) => 'personal_name' === e.key)) ||
                  void 0 === a
                    ? void 0
                    : a.value) || name,
                v =
                  (null === (n = e.find((e) => 'personal_desc' === e.key)) ||
                  void 0 === n
                    ? void 0
                    : n.value) || '',
                f =
                  (null === (i = e.find((e) => 'personal_twitter' === e.key)) ||
                  void 0 === i
                    ? void 0
                    : i.value) || '',
                b =
                  (null === (o = e.find((e) => 'personal_website' === e.key)) ||
                  void 0 === o
                    ? void 0
                    : o.value) || '',
                p =
                  (null === (c = e.find((e) => 'personal_email' === e.key)) ||
                  void 0 === c
                    ? void 0
                    : c.value) || '',
                y =
                  (null ===
                    (d = e.find((e) => 'personal_facebook' === e.key)) ||
                  void 0 === d
                    ? void 0
                    : d.value) || '',
                w =
                  (null === (m = e.find((e) => 'template_blog' === e.key)) ||
                  void 0 === m
                    ? void 0
                    : m.value) || '';
              N(r),
                h(t.data),
                E('avatar', u),
                E('name', x),
                E('desc', v),
                E('website', b),
                E('email', p),
                E('twitter', f),
                E('facebook', y),
                j(w),
                A({
                  avatar: u,
                  name: x,
                  desc: v,
                  website: b,
                  email: p,
                  facebook: y,
                  twitter: f,
                });
            }
          };
        (0, a.useMemo)(() => {
          var e, t;
          return !!(null == v
            ? void 0
            : null === (t = v.kvs) || void 0 === t
              ? void 0
              : null === (e = t.find((e) => 'ord_handle' === e.key)) ||
                  void 0 === e
                ? void 0
                : e.inscriptionId);
        }, [v]);
        let B = (0, a.useMemo)(() => !p, [p]),
          K = (0, a.useMemo)(() => !(o && r && p), [o, r, p]),
          U = (e) =>
            'testnet' === O
              ? 'https://ord-testnet4.sat20.org/content/'.concat(e)
              : 'https://ordinals.com/content/'.concat(e),
          Y = () => {
            window.open(U(p), '_blank');
          },
          W = (0, a.useMemo)(() => !$.avatar, [$]);
        return (
          (0, a.useEffect)(() => {
            r && Z();
          }, [r]),
          (0, s.jsxs)('div', {
            className: 'p-4 max-w-3xl mx-auto',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-center mb-4 text-xl',
                children: e('pages.blog.title'),
              }),
              (0, s.jsxs)('div', {
                className: 'mb-4',
                children: [
                  (0, s.jsxs)('h2', {
                    className: 'mb-2',
                    children: [e('pages.blog.step_1'), ' '],
                  }),
                  (0, s.jsx)(ev, {
                    onChange: (e) => {
                      e !== r && (L(), h({}), A({}), j(''), N('')), i(e);
                    },
                    loading: d,
                  }),
                ],
              }),
              f &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, s.jsxs)('h2', {
                          className: 'mb-2',
                          children: [
                            e('pages.blog.step_2'),
                            (0, s.jsxs)('a', {
                              target: '_blank',
                              className: 'text-blue-700',
                              href: U(P),
                              children: ['(', P, ')'],
                            }),
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className: 'flex justify-center',
                          children: (0, s.jsx)(M.A, {
                            color: 'primary',
                            onClick: () => {
                              F();
                            },
                            children: 'Inscribe Template',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'mb-2',
                          children: [
                            (0, s.jsxs)('h2', {
                              className: 'mb-2',
                              children: [e('pages.blog.step_3'), ' '],
                            }),
                            (0, s.jsx)('div', {
                              children: (0, s.jsx)(ef.Y, {
                                value: p,
                                onChange: (e) => j(e.target.value),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex justify-center gap-4',
                          children: [
                            (0, s.jsx)(M.A, {
                              color: 'primary',
                              onClick: () => {
                                Y();
                              },
                              children: '查看Routing铭文',
                            }),
                            (0, s.jsx)(M.A, {
                              color: 'primary',
                              isDisabled: B,
                              onClick: () => {
                                J();
                              },
                              children: 'Inscribe Routing',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className: 'flex justify-center',
                      children: (0, s.jsxs)(M.A, {
                        color: 'primary',
                        variant: 'light',
                        isDisabled: B,
                        onClick: () => {
                          R();
                        },
                        children: ['预览: ', X],
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, s.jsxs)('h2', {
                              className: 'mb-2',
                              children: [e('pages.blog.step_4'), ' '],
                            }),
                            (0, s.jsx)(eb, {
                              info: $,
                              onChange: (e) => {
                                E('avatar', e.avatar),
                                  E('name', e.name),
                                  E('desc', e.desc),
                                  E('twitter', e.twitter),
                                  E('website', e.website),
                                  E('email', e.email),
                                  E('facebook', e.facebook);
                              },
                            }),
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className: 'flex justify-center',
                          children: (0, s.jsx)(M.A, {
                            color: 'primary',
                            isLoading: l,
                            isDisabled: W,
                            onClick: () => {
                              V();
                            },
                            children: 'Inscribe Info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, s.jsxs)('h2', {
                              className: 'mb-2',
                              children: [e('pages.blog.step_5'), ' '],
                            }),
                            (0, s.jsx)(ep.Y, {
                              disableAnimation: !0,
                              disableAutosize: !0,
                              classNames: { input: 'resize-y min-h-[140px]' },
                              placeholder: 'Enter your content here...',
                              value: o,
                              onValueChange: (e) => c(e),
                            }),
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className: 'flex justify-center',
                          children: (0, s.jsx)(M.A, {
                            color: 'primary',
                            isDisabled: K,
                            onClick: () => {
                              G();
                            },
                            children: 'Publish',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function ey() {
        let { t: e } = (0, b.$G)(),
          t = (0, T.useSearchParams)().get('source') || 'utxo',
          { address: l, balance: o, network: c } = (0, m.$)((e) => e),
          [d, x] = (0, a.useState)(t),
          [v, h] = (0, a.useState)(0),
          f = (0, a.useMemo)(
            () => '/ordx/getAddressAssetsValue-'.concat(l, '-').concat(c),
            [l, c],
          ),
          {
            data: g,
            isLoading: p,
            mutate: j,
          } = (0, i.ZP)(f, () => (0, u.jq)(l), {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
          });
        return (
          (0, a.useEffect)(() => {
            if ((console.log(g), null == g ? void 0 : g.data)) {
              var e;
              h(
                (null === (e = g.data) || void 0 === e
                  ? void 0
                  : e.total_value) || 0,
              );
            }
          }, [g]),
          console.log('totalSatValue', v),
          (0, s.jsx)('div', {
            className: 'py-4',
            children: (0, s.jsxs)(n.n, {
              'aria-label': 'Options',
              color: 'primary',
              size: 'lg',
              selectedKey: d,
              variant: 'underlined',
              onSelectionChange: (e) => {
                x(e), history.replaceState(null, '', '?source='.concat(e));
              },
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
                  r.r,
                  {
                    title: e('buttons.my_assets'),
                    children: (0, s.jsx)(es, {}),
                  },
                  'utxo',
                ),
                (0, s.jsx)(
                  r.r,
                  {
                    title: e('common.tx_history'),
                    children: (0, s.jsx)(ea.K, { address: l }),
                  },
                  'history',
                ),
                (0, s.jsx)(
                  r.r,
                  {
                    title: e('common.my_listings'),
                    children: (0, s.jsx)(ec, { address: l }),
                  },
                  'order',
                ),
                (0, s.jsx)(
                  r.r,
                  { title: e('common.my_biils'), children: (0, s.jsx)(em, {}) },
                  'bill',
                ),
                (0, s.jsx)(
                  r.r,
                  { title: e('common.my_blog'), children: (0, s.jsx)(ej, {}) },
                  'blog',
                ),
              ],
            }),
          })
        );
      }
    },
    76734: function (e, t, l) {
      'use strict';
      l.d(t, {
        H: function () {
          return o;
        },
      });
      var s = l(57437),
        a = l(2265),
        n = l(65647),
        r = l(57603);
      let i = (e) => {
          let { btcPrice: t } = (0, n.Ee)();
          return (0, a.useMemo)(() => {
            let l = new r.t(e),
              s = new r.t(t);
            return l.mul(s).toFixed(2);
          }, [e, t]);
        },
        o = (e) => {
          let { btc: t, className: l } = e,
            a = i(t);
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
          return i;
        },
      });
      var s = l(57437),
        a = l(51446),
        n = l(62575),
        r = l(2265);
      function i(e) {
        let {
            loadMore: t,
            hasMore: l,
            children: i,
            loading: o,
            loader: c,
            empty: d,
            endMessage: u = '',
          } = e,
          [m, x] = (0, r.useState)(!1),
          [v, h] = (0, r.useState)(null),
          f = (0, r.useRef)(null),
          g = void 0 !== o ? o : m;
        (0, r.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting && l && !g && b();
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
        let b = async () => {
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
            i,
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
                        onClick: b,
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
        let { total: t, page: l, size: n, onChange: r } = e;
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
            onChange: r,
          })
        );
      };
    },
    98551: function (e, t, l) {
      'use strict';
      l.d(t, {
        a: function () {
          return o;
        },
      });
      var s = l(57437),
        a = l(52551),
        n = l(8127),
        r = l(2265),
        i = l(90089);
      let o = (e) => {
        let { value: t, onChange: l, sortList: o, disabled: c = !1 } = e,
          [d, u] = (0, r.useState)([
            (null == t ? void 0 : t.toString()) || '0',
          ]),
          { t: m } = (0, i.$G)();
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
          children: o.map((e) =>
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
        r = l(51446),
        i = l(18182),
        o = l(2265),
        c = l(24842),
        d = l(69077);
      function u(e) {
        let { inscriptionId: t, utxo: l, delay: u = 0, defaultImage: m } = e,
          { network: x } = (0, c.$)(),
          [v, h] = (0, o.useState)('');
        (0, o.useRef)(null);
        let [f, g] = (0, o.useState)(!1),
          [b, p] = (0, o.useState)(!0),
          j = async () => {
            p(!0);
            let e = 'utxo-content-seed-'.concat(x, '-').concat(l),
              t = sessionStorage.getItem(e);
            if (t) {
              h(t);
              return;
            }
            let [s, n] = await (0, i.vU)(a.lI.getSeedByUtxo)({
              utxo: l,
              network: x,
            });
            if (s) console.error(s);
            else {
              var r, o;
              console.log(n);
              let t =
                null == n
                  ? void 0
                  : null === (o = n.data) || void 0 === o
                    ? void 0
                    : null === (r = o[0]) || void 0 === r
                      ? void 0
                      : r.seed;
              t && (h(t), sessionStorage.setItem(e, t));
            }
            p(!1);
          },
          y = (0, o.useMemo)(() => !f, [f]),
          N = (0, o.useMemo)(
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
          (0, o.useEffect)(() => {
            l && x && j();
          }, [l, x]),
          (0, s.jsxs)('div', {
            className: 'h-full w-full',
            children: [
              y &&
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
                        children: (0, s.jsx)(r.c, {}),
                      }),
                }),
              N &&
                (0, s.jsx)('iframe', {
                  onLoad: () => {
                    setTimeout(() => {
                      g(!0);
                    }, 1500);
                  },
                  onError: () => {
                    g(!0);
                  },
                  src: N,
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
          return i;
        },
      });
      var s = l(57437),
        a = l(52551),
        n = l(8127),
        r = l(2265);
      let i = (e) => {
        let {
            isLoading: t,
            onChange: l,
            selected: i,
            list: o = [],
            placeholder: c,
          } = e,
          d = (0, r.useMemo)(() => (void 0 !== i ? [i] : void 0), [i]);
        return (0, s.jsx)(a.g, {
          items: o,
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
          return w;
        },
      });
      var s = l(57437),
        a = l(91617),
        n = l(66496),
        r = l(29629),
        i = l(9139),
        o = l(964),
        c = l(51446),
        d = l(93908),
        u = l(64757),
        m = l(71272),
        x = l(7337),
        v = l(86778),
        h = l(65703),
        f = l(2265),
        g = l(69077),
        b = l(19355),
        p = l(24842),
        j = l(96019),
        y = l(98551),
        N = l(90089);
      let w = (e) => {
        let { assets_name: t, assets_type: l, address: w } = e,
          { t: _, i18n: k } = (0, N.$G)(),
          { network: S } = (0, p.$)((e) => e),
          [C, M] = (0, f.useState)(1),
          [A, O] = (0, f.useState)(12),
          [I, z] = (0, f.useState)(0),
          [D, $] = (0, f.useState)(void 0),
          { data: E, isLoading: L } = (0, a.ZP)(
            '/ordx/history-'
              .concat(t, '-')
              .concat(w, '-')
              .concat(C, '-')
              .concat(A, '-')
              .concat(I, '-')
              .concat(D),
            () =>
              (0, h.s1)({
                offset: (C - 1) * A,
                size: A,
                assets_name: t,
                assets_type: l,
                address: w,
                sort: I,
                filter: 0 === D ? void 0 : D,
              }),
            { revalidateOnMount: !0 },
          ),
          Z = (0, f.useMemo)(() => {
            var e, t;
            return (
              null == E
                ? void 0
                : null === (e = E.data) || void 0 === e
                  ? void 0
                  : e.total
            )
              ? Math.ceil(
                  (null == E
                    ? void 0
                    : null === (t = E.data) || void 0 === t
                      ? void 0
                      : t.total) / A,
                )
              : 0;
          }, [E, A]),
          P = (0, f.useMemo)(
            () => (
              console.log(_('common.executed')),
              {
                1: _('common.executed'),
                2: _('common.delist'),
                3: _('common.invalid'),
                4: _('common.list'),
                10: _('common.history_sell'),
                11: _('common.buy'),
              }
            ),
            [k.language],
          ),
          F = (0, f.useMemo)(() => {
            let e = [
              { label: _('common.filter_all'), value: 0 },
              { label: _('common.executed'), value: 1 },
              { label: _('common.delist'), value: 2 },
              { label: _('common.invalid'), value: 3 },
              { label: _('common.list'), value: 4 },
            ];
            return (
              w &&
                (e.splice(1, 1),
                e.push({ label: _('common.history_sell'), value: 10 }),
                e.push({ label: _('common.history_buy'), value: 11 })),
              e
            );
          }, [k.language, w]),
          T = (0, f.useMemo)(() => {
            let e = [
              { key: 'result_text', label: 'Type', align: 'center' },
              { key: 'utxo', label: _('common.utxo'), align: 'center' },
              {
                key: 'assets_name',
                label: _('common.assets_name'),
                align: 'center',
              },
              { key: 'price', label: _('common.price'), align: 'center' },
              { key: 'value', label: _('common.num'), align: 'center' },
              { key: 'address', label: _('common.from'), align: 'center' },
              {
                key: 'txaddress',
                label: _('common.to'),
                align: 'center',
                hideHeader: !0,
              },
              { key: 'txtime', label: _('common.time'), align: 'center' },
              {
                key: 'txid',
                label: _('common.tx'),
                allowsSorting: !1,
                align: 'center',
              },
              {
                key: 'sourcename',
                label: _('common.source'),
                allowsSorting: !1,
                align: 'center',
              },
            ];
            return e.findIndex((e) => 'txaddress' === e.key), e;
          }, [w, k.language]),
          J = [
            { label: _('common.not_sort'), value: 0 },
            { label: _('common.sort_price_ascending'), value: 1 },
            { label: _('common.sort_price_descending'), value: 2 },
            { label: _('common.sort_time_ascending'), value: 3 },
            { label: _('common.sort_time_descending'), value: 4 },
          ],
          R = (0, f.useMemo)(() => {
            var e, t;
            return (
              (null == E
                ? void 0
                : null === (t = E.data) || void 0 === t
                  ? void 0
                  : null === (e = t.order_list) || void 0 === e
                    ? void 0
                    : e.map((e) => ({ ...e, result_text: P[e.result] }))) || []
            );
          }, [E, P]);
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
                      children: [_('common.filter'), '：'],
                    }),
                    (0, s.jsx)(y.a, {
                      sortList: F,
                      value: D,
                      disabled: !R.length,
                      onChange: (e) => {
                        void 0 !== e && $(e);
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'flex items-center',
                  children: [
                    (0, s.jsxs)('span', { children: [_('common.sort'), '：'] }),
                    (0, s.jsx)(y.a, {
                      sortList: J,
                      value: I,
                      disabled: !R.length,
                      onChange: (e) => {
                        void 0 !== e && z(e);
                      },
                    }),
                  ],
                }),
              ],
            }),
            bottomContent:
              Z > 1
                ? (0, s.jsx)('div', {
                    className: 'flex justify-center',
                    children: (0, s.jsx)(j.t, {
                      total: Z,
                      page: C,
                      size: A,
                      onChange: (e, t) => {
                        M(e);
                      },
                    }),
                  })
                : null,
            children: [
              (0, s.jsx)(r.J, {
                columns: T,
                children: T.map((e) =>
                  (0, s.jsx)(
                    i.j,
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
              (0, s.jsx)(o.y, {
                isLoading: L,
                items: R,
                emptyContent: 'No Data.',
                loadingContent: (0, s.jsx)(c.c, {}),
                children: R.map((e, t) =>
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
                                    href: (0, g.a)(l, S),
                                    target: '_blank',
                                    children: (0, s.jsx)(b.JO, {
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
                                  (0, s.jsx)(b.JO, {
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
          return i;
        },
      });
      var s = l(57437),
        a = l(41733),
        n = l(24842);
      l(2265);
      var r = l(90089);
      let i = (e) => {
        var t;
        let { children: l, className: i, text: o, keepStyle: c } = e;
        null == l || null === (t = l.props) || void 0 === t || t.onClick;
        let { t: d } = (0, r.$G)(),
          { connected: u, setModalVisible: m } = (0, n.$)((e) => e);
        return u || c
          ? (0, s.jsx)(s.Fragment, { children: l })
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(a.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => m(!0),
                radius: 'sm',
                className: i,
                color: 'primary',
                children: o || d('buttons.connect'),
              }),
            });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 148, 9189,
        9544, 3368, 4621, 42, 8838, 6007, 6752, 1752, 3074, 5947, 5844, 1447,
        2971, 7023, 1744,
      ],
      function () {
        return e((e.s = 14071));
      },
    ),
      (_N_E = e.O());
  },
]);
