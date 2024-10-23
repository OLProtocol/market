'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3440],
  {
    93440: function (e, a, s) {
      s.r(a);
      var o = s(57437),
        n = s(86943),
        l = s(33822),
        r = s(41733),
        t = s(70480),
        c = s(7337),
        i = s(16463),
        d = s(2265),
        u = s(24842),
        p = s(19355),
        g = s(85169),
        b = s(69077),
        h = s(91848),
        f = s(1271),
        m = s(90089),
        y = s(65647);
      a.default = () => {
        let { t: e } = (0, m.$G)();
        (0, i.useRouter)();
        let { theme: a } = (0, g.F)(),
          {
            connected: s,
            check: v,
            address: x,
            publicKey: w,
            disconnect: k,
            btcWallet: j,
            network: C,
          } = (0, u.$)((e) => e),
          { reset: J, getUnspendUtxos: N, list: A } = (0, y.YL)(),
          { setSignature: B, signature: S } = (0, y.Ee)((e) => e),
          [E, M] = (0, d.useState)(0);
        (0, d.useEffect)(() => {
          console.log('check', s), v();
        }, []),
          (0, d.useEffect)(() => {
            M(N().reduce((e, a) => e + a.value, 0));
          }, [A]);
        let L = async (e) => {
            if (!S) {
              console.log('signature text', 'ordx-marketplace');
              try {
                let a = await e.signMessage('ordx-marketplace');
                B(a);
              } catch (e) {
                await k();
              }
            }
          },
          P = async () => {
            console.log('disconnect success'), B(''), await k();
          },
          I = async () => {
            console.log('accountAndNetworkChange'),
              console.log('connected', s),
              J();
            let e = 'visible' === document.visibilityState || !document.hidden;
            try {
              if ((await v(), s))
                try {
                  if ((console.log('checkSignature'), console.log(e), e)) {
                    let e = await (null == j
                      ? void 0
                      : j.signMessage('ordx-marketplace'));
                    e && B(e);
                  } else P();
                } catch (e) {
                  await P();
                }
            } catch (e) {
              console.log(e);
            }
          },
          W = (0, d.useMemo)(() => (0, b.Ay)(E), [E]),
          F = async () => {
            if (S)
              try {
                h.yw.verifyMessageOfECDSA(w, 'ordx-marketplace', S) ||
                  (f.ZP.warning({
                    message: 'Signature Verification Failed',
                    description:
                      'Please check your signature and try connect again',
                  }),
                  P());
              } catch (e) {
                console.log('checkSignature', e),
                  f.ZP.warning({
                    message: 'Signature Verification Failed',
                    description:
                      'Please check your signature and try connect again',
                  }),
                  P();
              }
          };
        return (
          (0, d.useEffect)(
            () => (
              console.log('connected', s),
              s
                ? (setTimeout(() => {
                    F();
                  }, 2e3),
                  null == j || j.on('accountsChanged', I),
                  null == j || j.on('networkChanged', I))
                : (null == j || j.removeListener('accountsChanged', I),
                  null == j || j.removeListener('networkChanged', I)),
              () => {
                null == j || j.removeListener('accountsChanged', I),
                  null == j || j.removeListener('networkChanged', I);
              }
            ),
            [s],
          ),
          (0, o.jsx)(u.A, {
            config: { network: 'livenet' },
            theme: 'dark' === a ? 'dark' : 'light',
            onConnectSuccess: L,
            onConnectError: (e) => {
              console.error('Connect Wallet Failed', e),
                f.ZP.error({
                  message: 'Connect Wallet Failed',
                  description: e.message,
                });
            },
            children: (0, o.jsx)(o.Fragment, {
              children: (0, o.jsxs)(n.j, {
                placement: 'bottom',
                children: [
                  (0, o.jsx)(l.b, {
                    children: (0, o.jsx)(r.A, {
                      className: 'px-0',
                      endContent: (0, o.jsx)('div', {
                        className:
                          'px-2 h-full flex justify-center items-center  bg-gray-600',
                        children: null == x ? void 0 : x.slice(-4),
                      }),
                      children: (0, o.jsxs)('div', {
                        className: 'flex items-center gap-1 pl-2',
                        children: [
                          (0, o.jsx)('span', { children: W }),
                          (0, o.jsx)(p.JO, {
                            icon: 'cryptocurrency-color:btc',
                            className: 'w-4 h-4',
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)(t.g, {
                    className: 'p-2',
                    children: (0, o.jsxs)('div', {
                      className: 'flex flex-col gap-2',
                      children: [
                        (0, o.jsx)('div', {
                          children: (0, o.jsx)(c.Z, {
                            codeString: x,
                            className:
                              'bg-transparent text-lg md:text-2xl font-thin items-center',
                            symbol: '',
                            variant: 'flat',
                            children: (0, o.jsx)('span', {
                              className: 'text-base font-thin text-slate-400',
                              children: (0, b.NH)(x, 4),
                            }),
                          }),
                        }),
                        (0, o.jsx)(r.A, {
                          className: 'w-full',
                          onClick: () => {
                            let e = (0, b.Gg)({
                              network: C,
                              path: 'address/'.concat(x),
                            });
                            window.open(e, '_blank');
                          },
                          children: e('buttons.to_history'),
                        }),
                        (0, o.jsx)(r.A, {
                          color: 'danger',
                          variant: 'ghost',
                          onClick: P,
                          children: e('buttons.disconnect'),
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
    },
    7337: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return x;
        },
      });
      var o = s(22226),
        n = (0, s(2068).tv)({
          slots: {
            base: 'inline-flex items-center justify-between h-fit rounded-large gap-2',
            pre: 'bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap',
            content: 'flex flex-col',
            symbol: 'select-none',
            copyButton: [
              'group',
              'relative',
              'z-10',
              'text-large',
              'text-inherit',
              'data-[hover=true]:bg-transparent',
            ],
            copyIcon: [
              'absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50',
            ],
            checkIcon: [
              'absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100',
            ],
          },
          variants: {
            variant: {
              flat: '',
              solid: '',
              bordered: 'border-medium bg-transparent',
              shadow: '',
            },
            color: {
              default: {},
              primary: {},
              secondary: {},
              success: {},
              warning: {},
              danger: {},
            },
            size: {
              sm: { base: 'px-1.5 py-0.5 text-tiny rounded-small' },
              md: { base: 'px-3 py-1.5 text-small rounded-medium' },
              lg: { base: 'px-4 py-2 text-medium rounded-large' },
            },
            radius: {
              none: { base: 'rounded-none' },
              sm: { base: 'rounded-small' },
              md: { base: 'rounded-medium' },
              lg: { base: 'rounded-large' },
            },
            fullWidth: { true: { base: 'w-full' } },
            disableAnimation: {
              true: {},
              false: {
                copyIcon: 'transition-transform-opacity',
                checkIcon: 'transition-transform-opacity',
              },
            },
          },
          defaultVariants: {
            color: 'default',
            variant: 'flat',
            size: 'md',
            fullWidth: !1,
          },
          compoundVariants: [
            {
              variant: ['solid', 'shadow'],
              color: 'default',
              class: {
                copyButton: 'data-[focus-visible]:outline-default-foreground',
              },
            },
            {
              variant: ['solid', 'shadow'],
              color: 'primary',
              class: {
                copyButton: 'data-[focus-visible]:outline-primary-foreground',
              },
            },
            {
              variant: ['solid', 'shadow'],
              color: 'secondary',
              class: {
                copyButton: 'data-[focus-visible]:outline-secondary-foreground',
              },
            },
            {
              variant: ['solid', 'shadow'],
              color: 'success',
              class: {
                copyButton: 'data-[focus-visible]:outline-success-foreground',
              },
            },
            {
              variant: ['solid', 'shadow'],
              color: 'warning',
              class: {
                copyButton: 'data-[focus-visible]:outline-warning-foreground',
              },
            },
            {
              variant: ['solid', 'shadow'],
              color: 'danger',
              class: {
                copyButton: 'data-[focus-visible]:outline-danger-foreground',
              },
            },
            {
              variant: 'flat',
              color: 'default',
              class: { base: o.J.flat.default },
            },
            {
              variant: 'flat',
              color: 'primary',
              class: { base: o.J.flat.primary },
            },
            {
              variant: 'flat',
              color: 'secondary',
              class: { base: o.J.flat.secondary },
            },
            {
              variant: 'flat',
              color: 'success',
              class: { base: o.J.flat.success },
            },
            {
              variant: 'flat',
              color: 'warning',
              class: { base: o.J.flat.warning },
            },
            {
              variant: 'flat',
              color: 'danger',
              class: { base: o.J.flat.danger },
            },
            {
              variant: 'solid',
              color: 'default',
              class: { base: o.J.solid.default },
            },
            {
              variant: 'solid',
              color: 'primary',
              class: { base: o.J.solid.primary },
            },
            {
              variant: 'solid',
              color: 'secondary',
              class: { base: o.J.solid.secondary },
            },
            {
              variant: 'solid',
              color: 'success',
              class: { base: o.J.solid.success },
            },
            {
              variant: 'solid',
              color: 'warning',
              class: { base: o.J.solid.warning },
            },
            {
              variant: 'solid',
              color: 'danger',
              class: { base: o.J.solid.danger },
            },
            {
              variant: 'shadow',
              color: 'default',
              class: { base: o.J.shadow.default },
            },
            {
              variant: 'shadow',
              color: 'primary',
              class: { base: o.J.shadow.primary },
            },
            {
              variant: 'shadow',
              color: 'secondary',
              class: { base: o.J.shadow.secondary },
            },
            {
              variant: 'shadow',
              color: 'success',
              class: { base: o.J.shadow.success },
            },
            {
              variant: 'shadow',
              color: 'warning',
              class: { base: o.J.shadow.warning },
            },
            {
              variant: 'shadow',
              color: 'danger',
              class: { base: o.J.shadow.danger },
            },
            {
              variant: 'bordered',
              color: 'default',
              class: { base: o.J.bordered.default },
            },
            {
              variant: 'bordered',
              color: 'primary',
              class: { base: o.J.bordered.primary },
            },
            {
              variant: 'bordered',
              color: 'secondary',
              class: { base: o.J.bordered.secondary },
            },
            {
              variant: 'bordered',
              color: 'success',
              class: { base: o.J.bordered.success },
            },
            {
              variant: 'bordered',
              color: 'warning',
              class: { base: o.J.bordered.warning },
            },
            {
              variant: 'bordered',
              color: 'danger',
              class: { base: o.J.bordered.danger },
            },
          ],
        }),
        l = s(12094),
        r = s(55971),
        t = s(26242),
        c = s(75300),
        i = s(36222),
        d = s(65263),
        u = s(53640),
        p = s(2265),
        g = s(25829),
        b = s(64621),
        h = s(57437),
        f = (e) =>
          (0, h.jsxs)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            focusable: 'false',
            height: '1em',
            role: 'presentation',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: [
              (0, h.jsx)('path', {
                d: 'M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z',
              }),
              (0, h.jsx)('path', {
                d: 'M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16',
              }),
              (0, h.jsx)('path', { d: 'M16 12.9C16 9.4 14.6 8 11.1 8' }),
            ],
          }),
        m = (e) =>
          (0, h.jsx)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            focusable: 'false',
            height: '1em',
            role: 'presentation',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: (0, h.jsx)('polyline', { points: '20 6 9 17 4 12' }),
          }),
        y = s(41733),
        v = (0, r.Gp)((e, a) => {
          let {
              Component: s,
              domRef: o,
              preRef: v,
              children: x,
              slots: w,
              classNames: k,
              copied: j,
              copyIcon: C = (0, h.jsx)(f, {}),
              checkIcon: J = (0, h.jsx)(m, {}),
              symbolBefore: N,
              disableCopy: A,
              disableTooltip: B,
              hideSymbol: S,
              hideCopyButton: E,
              tooltipProps: M,
              isMultiLine: L,
              onCopy: P,
              getSnippetProps: I,
              getCopyButtonProps: W,
            } = (function (e) {
              var a, s, o, b;
              let h = (0, l.w)(),
                [f, m] = (0, r.oe)(e, n.variantKeys),
                {
                  ref: y,
                  as: v,
                  children: x,
                  symbol: w = '$',
                  classNames: k,
                  timeout: j,
                  copyIcon: C,
                  checkIcon: J,
                  codeString: N,
                  disableCopy: A = !1,
                  disableTooltip: B = !1,
                  hideCopyButton: S = !1,
                  autoFocus: E = !1,
                  hideSymbol: M = !1,
                  onCopy: L,
                  tooltipProps: P = {},
                  copyButtonProps: I = {},
                  className: W,
                  ...F
                } = f,
                V = v || 'div',
                Z = 'string' == typeof V,
                _ =
                  null !=
                    (s =
                      null != (a = null == e ? void 0 : e.disableAnimation)
                        ? a
                        : null == h
                          ? void 0
                          : h.disableAnimation) && s,
                z = {
                  offset: 15,
                  delay: 1e3,
                  content: 'Copy to clipboard',
                  color:
                    null != (b = null == e ? void 0 : e.color)
                      ? b
                      : null == (o = n.defaultVariants)
                        ? void 0
                        : o.color,
                  isDisabled: f.disableCopy,
                  ...P,
                },
                D = (0, t.gy)(y),
                T = (0, p.useRef)(null),
                { copy: G, copied: H } = (function ({ timeout: e = 2e3 } = {}) {
                  let [a, s] = (0, p.useState)(null),
                    [o, n] = (0, p.useState)(!1),
                    [l, r] = (0, p.useState)(null),
                    t = (0, p.useCallback)(() => {
                      l && clearTimeout(l);
                    }, [l]),
                    c = (0, p.useCallback)(
                      (a) => {
                        t(), r(setTimeout(() => n(!1), e)), n(a);
                      },
                      [t, e],
                    );
                  return {
                    copy: (0, p.useCallback)(
                      (e) => {
                        'clipboard' in navigator
                          ? navigator.clipboard
                              .writeText(e)
                              .then(() => c(!0))
                              .catch((e) => s(e))
                          : s(
                              Error(
                                'useClipboard: navigator.clipboard is not supported',
                              ),
                            );
                      },
                      [c],
                    ),
                    reset: (0, p.useCallback)(() => {
                      n(!1), s(null), t();
                    }, [t]),
                    error: a,
                    copied: o,
                  };
                })({ timeout: j }),
                O = x && Array.isArray(x),
                {
                  isFocusVisible: $,
                  isFocused: R,
                  focusProps: X,
                } = (0, g.F)({ autoFocus: E }),
                K = (0, p.useMemo)(
                  () => n({ ...m, disableAnimation: _ }),
                  [(0, i.Xx)(m), _],
                ),
                U = (0, p.useMemo)(() => {
                  if (!w || 'string' != typeof w) return w;
                  let e = w.trim();
                  return e ? ''.concat(e, ' ') : '';
                }, [w]),
                Y = (0, d.W)(null == k ? void 0 : k.base, W),
                q = (0, p.useCallback)(
                  () => ({
                    className: K.base({ class: Y }),
                    ...(0, c.z)(F, { enabled: Z }),
                  }),
                  [K, Y, O, F],
                ),
                Q = (0, p.useCallback)(() => {
                  var e;
                  if (A) return;
                  let a = '';
                  'string' == typeof x
                    ? (a = x)
                    : Array.isArray(x) &&
                      x.forEach((e) => {
                        var s, o;
                        let n =
                          'string' == typeof e
                            ? e
                            : null ==
                                (o =
                                  null == (s = null == e ? void 0 : e.props)
                                    ? void 0
                                    : s.children)
                              ? void 0
                              : o.toString();
                        n && (a += n + '\n');
                      });
                  let s =
                    N ||
                    a ||
                    (null == (e = T.current) ? void 0 : e.textContent) ||
                    '';
                  G(s), null == L || L(s);
                }, [G, N, A, L, x]),
                ee = {
                  'aria-label':
                    'string' == typeof z.content
                      ? z.content
                      : 'Copy to clipboard',
                  size: 'sm',
                  variant: 'light',
                  isDisabled: A,
                  onPress: Q,
                  isIconOnly: !0,
                  ...I,
                },
                ea = (0, p.useCallback)(
                  () => ({
                    ...ee,
                    'data-copied': (0, u.PB)(H),
                    className: K.copyButton({
                      class: (0, d.W)(null == k ? void 0 : k.copyButton),
                    }),
                  }),
                  [K, $, R, A, null == k ? void 0 : k.copyButton, ee, X],
                );
              return {
                Component: V,
                as: v,
                domRef: D,
                preRef: T,
                children: x,
                slots: K,
                classNames: k,
                copied: H,
                onCopy: Q,
                copyIcon: C,
                checkIcon: J,
                symbolBefore: U,
                isMultiLine: O,
                isFocusVisible: $,
                hideCopyButton: S,
                disableCopy: A,
                disableTooltip: B,
                hideSymbol: M,
                tooltipProps: z,
                getSnippetProps: q,
                getCopyButtonProps: ea,
              };
            })({ ...e, ref: a }),
            F = (0, p.useCallback)(
              (e) => {
                let { children: a } = e;
                return (0, h.jsx)(b.e, {
                  ...M,
                  isDisabled: j || M.isDisabled,
                  children: a,
                });
              },
              [(0, i.Xx)(M)],
            ),
            V = (0, p.useMemo)(() => {
              if (E) return null;
              let e = J && (0, p.cloneElement)(J, { className: w.checkIcon() }),
                a = C && (0, p.cloneElement)(C, { className: w.copyIcon() }),
                s = (0, h.jsxs)(y.A, { ...W(), children: [e, a] });
              return B ? s : (0, h.jsx)(F, { children: s });
            }, [w, null == k ? void 0 : k.copyButton, j, J, C, P, F, A, B, E]),
            Z = (0, p.useMemo)(
              () =>
                L && x && Array.isArray(x)
                  ? (0, h.jsx)('div', {
                      className: w.content({
                        class: null == k ? void 0 : k.content,
                      }),
                      children: x.map((e, a) =>
                        (0, h.jsxs)(
                          'pre',
                          {
                            className: w.pre({
                              class: null == k ? void 0 : k.pre,
                            }),
                            children: [
                              !S &&
                                (0, h.jsx)('span', {
                                  className: w.symbol({
                                    class: null == k ? void 0 : k.symbol,
                                  }),
                                  children: N,
                                }),
                              e,
                            ],
                          },
                          ''.concat(a, '-').concat(e),
                        ),
                      ),
                    })
                  : (0, h.jsxs)('pre', {
                      ref: v,
                      className: w.pre({ class: null == k ? void 0 : k.pre }),
                      children: [
                        !S &&
                          (0, h.jsx)('span', {
                            className: w.symbol({
                              class: null == k ? void 0 : k.symbol,
                            }),
                            children: N,
                          }),
                        x,
                      ],
                    }),
              [x, S, L, N, null == k ? void 0 : k.pre, w],
            );
          return (0, h.jsxs)(s, { ref: o, ...I(), children: [Z, V] });
        });
      v.displayName = 'NextUI.Snippet';
      var x = v;
    },
  },
]);
