'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6752],
  {
    8390: function (e, a, o) {
      var r = o(2265),
        t = o(82821),
        n = o(31313);
      a.Z = (e, a) => {
        let o = r.useContext(t.Z);
        return [
          r.useMemo(() => {
            var r;
            let t = a || n.Z[e],
              s =
                null !== (r = null == o ? void 0 : o[e]) && void 0 !== r
                  ? r
                  : {};
            return Object.assign(
              Object.assign({}, 'function' == typeof t ? t() : t),
              s || {},
            );
          }, [e, a, o]),
          r.useMemo(() => {
            let e = null == o ? void 0 : o.locale;
            return (null == o ? void 0 : o.exist) && !e ? n.Z.locale : e;
          }, [o]),
        ];
      };
    },
    46807: function (e, a, o) {
      o.d(a, {
        Z: function () {
          return s;
        },
      });
      var r = o(2265),
        t = function (e) {
          return (e + 1) % 1e6;
        };
      function n(e, a) {
        return 'function' == typeof e ? (e.length ? e(a) : e()) : e;
      }
      var s = function (e) {
        void 0 === e && (e = []);
        var a = (0, r.useRef)(n(e)),
          o = (0, r.useReducer)(t, 0)[1],
          s = (0, r.useMemo)(function () {
            var r = {
              set: function (e) {
                (a.current = n(e, a.current)), o();
              },
              push: function () {
                for (var e = [], a = 0; a < arguments.length; a++)
                  e[a] = arguments[a];
                e.length &&
                  s.set(function (a) {
                    return a.concat(e);
                  });
              },
              updateAt: function (e, a) {
                s.set(function (o) {
                  var r = o.slice();
                  return (r[e] = a), r;
                });
              },
              insertAt: function (e, a) {
                s.set(function (o) {
                  var r = o.slice();
                  return e > r.length ? (r[e] = a) : r.splice(e, 0, a), r;
                });
              },
              update: function (e, a) {
                s.set(function (o) {
                  return o.map(function (o) {
                    return e(o, a) ? a : o;
                  });
                });
              },
              updateFirst: function (e, o) {
                var r = a.current.findIndex(function (a) {
                  return e(a, o);
                });
                r >= 0 && s.updateAt(r, o);
              },
              upsert: function (e, o) {
                var r = a.current.findIndex(function (a) {
                  return e(a, o);
                });
                r >= 0 ? s.updateAt(r, o) : s.push(o);
              },
              sort: function (e) {
                s.set(function (a) {
                  return a.slice().sort(e);
                });
              },
              filter: function (e, a) {
                s.set(function (o) {
                  return o.slice().filter(e, a);
                });
              },
              removeAt: function (e) {
                s.set(function (a) {
                  var o = a.slice();
                  return o.splice(e, 1), o;
                });
              },
              clear: function () {
                s.set([]);
              },
              reset: function () {
                s.set(n(e).slice());
              },
            };
            return (r.remove = r.removeAt), r;
          }, []);
        return [a.current, s];
      };
    },
    52975: function (e, a, o) {
      var r = o(11735),
        t = o(2265);
      a.Z = function (e) {
        void 0 === e && (e = {});
        var a = (0, t.useState)(e),
          o = a[0],
          n = a[1],
          s = (0, t.useMemo)(
            function () {
              return {
                set: function (e, a) {
                  n(function (o) {
                    var t;
                    return (0, r.__assign)(
                      (0, r.__assign)({}, o),
                      (((t = {})[e] = a), t),
                    );
                  });
                },
                setAll: function (e) {
                  n(e);
                },
                remove: function (e) {
                  n(function (a) {
                    return (
                      a[e],
                      (0, r.__rest)(a, ['symbol' == typeof e ? e : e + ''])
                    );
                  });
                },
                reset: function () {
                  return n(e);
                },
              };
            },
            [n],
          ),
          l = (0, r.__assign)(
            {
              get: (0, t.useCallback)(
                function (e) {
                  return o[e];
                },
                [o],
              ),
            },
            s,
          );
        return [o, l];
      };
    },
    55448: function (e, a, o) {
      o.d(a, {
        G: function () {
          return d;
        },
      });
      var r = o(66265),
        t = o(55971),
        n = o(26242),
        s = o(65263),
        l = o(57437),
        i = (0, t.Gp)((e, a) => {
          var o;
          let { as: t, className: i, children: d, ...u } = e,
            c = (0, n.gy)(a),
            { slots: f, classNames: b } = (0, r.R)(),
            p = (0, s.W)(null == b ? void 0 : b.body, i);
          return (0, l.jsx)(t || 'div', {
            ref: c,
            className: null == (o = f.body) ? void 0 : o.call(f, { class: p }),
            ...u,
            children: d,
          });
        });
      i.displayName = 'NextUI.CardBody';
      var d = i;
    },
    72354: function (e, a, o) {
      o.d(a, {
        w: function () {
          return B;
        },
      });
      var r = o(66265),
        t = o(2068),
        n = o(21616),
        s = (0, t.tv)({
          slots: {
            base: [
              'flex',
              'flex-col',
              'relative',
              'overflow-hidden',
              'h-auto',
              'outline-none',
              'text-foreground',
              'box-border',
              'bg-content1',
              ...n.Dh,
            ],
            header: [
              'flex',
              'p-3',
              'z-10',
              'w-full',
              'justify-start',
              'items-center',
              'shrink-0',
              'overflow-inherit',
              'color-inherit',
              'subpixel-antialiased',
            ],
            body: [
              'relative',
              'flex',
              'flex-1',
              'w-full',
              'p-3',
              'flex-auto',
              'flex-col',
              'place-content-inherit',
              'align-items-inherit',
              'h-auto',
              'break-words',
              'text-left',
              'overflow-y-auto',
              'subpixel-antialiased',
            ],
            footer: [
              'p-3',
              'h-auto',
              'flex',
              'w-full',
              'items-center',
              'overflow-hidden',
              'color-inherit',
              'subpixel-antialiased',
            ],
          },
          variants: {
            shadow: {
              none: { base: 'shadow-none' },
              sm: { base: 'shadow-small' },
              md: { base: 'shadow-medium' },
              lg: { base: 'shadow-large' },
            },
            radius: {
              none: {
                base: 'rounded-none',
                header: 'rounded-none',
                footer: 'rounded-none',
              },
              sm: {
                base: 'rounded-small',
                header: 'rounded-t-small',
                footer: 'rounded-b-small',
              },
              md: {
                base: 'rounded-medium',
                header: 'rounded-t-medium',
                footer: 'rounded-b-medium',
              },
              lg: {
                base: 'rounded-large',
                header: 'rounded-t-large',
                footer: 'rounded-b-large',
              },
            },
            fullWidth: { true: { base: 'w-full' } },
            isHoverable: {
              true: {
                base: 'data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2',
              },
            },
            isPressable: { true: { base: 'cursor-pointer' } },
            isBlurred: {
              true: {
                base: [
                  'bg-background/80',
                  'dark:bg-background/20',
                  'backdrop-blur-md',
                  'backdrop-saturate-150',
                ],
              },
            },
            isFooterBlurred: {
              true: {
                footer: [
                  'bg-background/10',
                  'backdrop-blur',
                  'backdrop-saturate-150',
                ],
              },
            },
            isDisabled: {
              true: { base: 'opacity-disabled cursor-not-allowed' },
            },
            disableAnimation: {
              true: '',
              false: {
                base: 'transition-transform-background motion-reduce:transition-none',
              },
            },
          },
          compoundVariants: [
            {
              isPressable: !0,
              class:
                'data-[pressed=true]:scale-[0.97] tap-highlight-transparent',
            },
          ],
          defaultVariants: {
            radius: 'lg',
            shadow: 'md',
            fullWidth: !1,
            isHoverable: !1,
            isPressable: !1,
            isDisabled: !1,
            isFooterBlurred: !1,
          },
        }),
        l = o(2265),
        i = o(5722),
        d = o(277),
        u = o(25829),
        c = o(83892),
        f = o(5150),
        b = o(12094),
        p = o(55971),
        h = o(65263),
        v = o(36222),
        m = o(53640),
        y = o(75300),
        g = o(26242),
        x = o(90794),
        w = o(22572),
        k = o(57437),
        C = (0, p.Gp)((e, a) => {
          let {
            children: o,
            context: t,
            Component: n,
            isPressable: C,
            disableAnimation: B,
            disableRipple: j,
            getCardProps: N,
            getRippleProps: J,
          } = (function (e) {
            var a, o, r, t;
            let n = (0, b.w)(),
              [w, k] = (0, p.oe)(e, s.variantKeys),
              {
                ref: C,
                as: B,
                children: j,
                onClick: N,
                onPress: J,
                autoFocus: A,
                className: P,
                classNames: D,
                allowTextSelectionOnPress: M = !0,
                ...I
              } = w,
              W = (0, g.gy)(C),
              _ = B || (e.isPressable ? 'button' : 'div'),
              S = 'string' == typeof _,
              E =
                null !=
                  (o =
                    null != (a = e.disableAnimation)
                      ? a
                      : null == n
                        ? void 0
                        : n.disableAnimation) && o,
              F =
                null !=
                  (t =
                    null != (r = e.disableRipple)
                      ? r
                      : null == n
                        ? void 0
                        : n.disableRipple) && t,
              V = (0, h.W)(null == D ? void 0 : D.base, P),
              { onClick: H, onClear: R, ripples: z } = (0, x.i)(),
              Z = (e) => {
                E || F || !W.current || H(e);
              },
              { buttonProps: L, isPressed: T } = (0, f.j)(
                {
                  onPress: J,
                  elementType: B,
                  isDisabled: !e.isPressable,
                  onClick: (0, i.t)(N, Z),
                  allowTextSelectionOnPress: M,
                  ...I,
                },
                W,
              ),
              { hoverProps: X, isHovered: G } = (0, c.X)({
                isDisabled: !e.isHoverable,
                ...I,
              }),
              {
                isFocusVisible: U,
                isFocused: K,
                focusProps: O,
              } = (0, u.F)({ autoFocus: A }),
              $ = (0, l.useMemo)(
                () => s({ ...k, disableAnimation: E }),
                [(0, v.Xx)(k), E],
              ),
              q = (0, l.useMemo)(
                () => ({
                  slots: $,
                  classNames: D,
                  disableAnimation: E,
                  isDisabled: e.isDisabled,
                  isFooterBlurred: e.isFooterBlurred,
                  fullWidth: e.fullWidth,
                }),
                [$, D, e.isDisabled, e.isFooterBlurred, E, e.fullWidth],
              ),
              Q = (0, l.useCallback)(
                function () {
                  let a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: W,
                    className: $.base({ class: V }),
                    tabIndex: e.isPressable ? 0 : -1,
                    'data-hover': (0, m.PB)(G),
                    'data-pressed': (0, m.PB)(T),
                    'data-focus': (0, m.PB)(K),
                    'data-focus-visible': (0, m.PB)(U),
                    'data-disabled': (0, m.PB)(e.isDisabled),
                    ...(0, d.d)(
                      e.isPressable ? { ...L, ...O, role: 'button' } : {},
                      e.isHoverable ? X : {},
                      (0, y.z)(I, { enabled: S }),
                      (0, y.z)(a),
                    ),
                  };
                },
                [
                  W,
                  $,
                  V,
                  S,
                  e.isPressable,
                  e.isHoverable,
                  e.isDisabled,
                  G,
                  T,
                  U,
                  L,
                  O,
                  X,
                  I,
                ],
              ),
              Y = (0, l.useCallback)(
                () => ({ ripples: z, onClear: R }),
                [z, R],
              );
            return {
              context: q,
              domRef: W,
              Component: _,
              classNames: D,
              children: j,
              isHovered: G,
              isPressed: T,
              disableAnimation: E,
              isPressable: e.isPressable,
              isHoverable: e.isHoverable,
              disableRipple: F,
              handleClick: Z,
              isFocusVisible: U,
              getCardProps: Q,
              getRippleProps: Y,
            };
          })({ ...e, ref: a });
          return (0, k.jsxs)(n, {
            ...N(),
            children: [
              (0, k.jsx)(r.k, { value: t, children: o }),
              C && !B && !j && (0, k.jsx)(w.L, { ...J() }),
            ],
          });
        });
      C.displayName = 'NextUI.Card';
      var B = C;
    },
    66265: function (e, a, o) {
      o.d(a, {
        R: function () {
          return t;
        },
        k: function () {
          return r;
        },
      });
      var [r, t] = (0, o(37561).k)({
        name: 'CardContext',
        strict: !0,
        errorMessage:
          'useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />',
      });
    },
    64757: function (e, a, o) {
      o.d(a, {
        sF: function () {
          return t;
        },
      });
      var r = o(53640),
        t = (e, a) => ((0, r.Kn)(e) ? (e instanceof Array ? [...e] : e[a]) : e);
    },
    7337: function (e, a, o) {
      o.d(a, {
        Z: function () {
          return x;
        },
      });
      var r = o(22226),
        t = (0, o(2068).tv)({
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
              class: { base: r.J.flat.default },
            },
            {
              variant: 'flat',
              color: 'primary',
              class: { base: r.J.flat.primary },
            },
            {
              variant: 'flat',
              color: 'secondary',
              class: { base: r.J.flat.secondary },
            },
            {
              variant: 'flat',
              color: 'success',
              class: { base: r.J.flat.success },
            },
            {
              variant: 'flat',
              color: 'warning',
              class: { base: r.J.flat.warning },
            },
            {
              variant: 'flat',
              color: 'danger',
              class: { base: r.J.flat.danger },
            },
            {
              variant: 'solid',
              color: 'default',
              class: { base: r.J.solid.default },
            },
            {
              variant: 'solid',
              color: 'primary',
              class: { base: r.J.solid.primary },
            },
            {
              variant: 'solid',
              color: 'secondary',
              class: { base: r.J.solid.secondary },
            },
            {
              variant: 'solid',
              color: 'success',
              class: { base: r.J.solid.success },
            },
            {
              variant: 'solid',
              color: 'warning',
              class: { base: r.J.solid.warning },
            },
            {
              variant: 'solid',
              color: 'danger',
              class: { base: r.J.solid.danger },
            },
            {
              variant: 'shadow',
              color: 'default',
              class: { base: r.J.shadow.default },
            },
            {
              variant: 'shadow',
              color: 'primary',
              class: { base: r.J.shadow.primary },
            },
            {
              variant: 'shadow',
              color: 'secondary',
              class: { base: r.J.shadow.secondary },
            },
            {
              variant: 'shadow',
              color: 'success',
              class: { base: r.J.shadow.success },
            },
            {
              variant: 'shadow',
              color: 'warning',
              class: { base: r.J.shadow.warning },
            },
            {
              variant: 'shadow',
              color: 'danger',
              class: { base: r.J.shadow.danger },
            },
            {
              variant: 'bordered',
              color: 'default',
              class: { base: r.J.bordered.default },
            },
            {
              variant: 'bordered',
              color: 'primary',
              class: { base: r.J.bordered.primary },
            },
            {
              variant: 'bordered',
              color: 'secondary',
              class: { base: r.J.bordered.secondary },
            },
            {
              variant: 'bordered',
              color: 'success',
              class: { base: r.J.bordered.success },
            },
            {
              variant: 'bordered',
              color: 'warning',
              class: { base: r.J.bordered.warning },
            },
            {
              variant: 'bordered',
              color: 'danger',
              class: { base: r.J.bordered.danger },
            },
          ],
        }),
        n = o(12094),
        s = o(55971),
        l = o(26242),
        i = o(75300),
        d = o(36222),
        u = o(65263),
        c = o(53640),
        f = o(2265),
        b = o(25829),
        p = o(64621),
        h = o(57437),
        v = (e) =>
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
        y = o(41733),
        g = (0, s.Gp)((e, a) => {
          let {
              Component: o,
              domRef: r,
              preRef: g,
              children: x,
              slots: w,
              classNames: k,
              copied: C,
              copyIcon: B = (0, h.jsx)(v, {}),
              checkIcon: j = (0, h.jsx)(m, {}),
              symbolBefore: N,
              disableCopy: J,
              disableTooltip: A,
              hideSymbol: P,
              hideCopyButton: D,
              tooltipProps: M,
              isMultiLine: I,
              onCopy: W,
              getSnippetProps: _,
              getCopyButtonProps: S,
            } = (function (e) {
              var a, o, r, p;
              let h = (0, n.w)(),
                [v, m] = (0, s.oe)(e, t.variantKeys),
                {
                  ref: y,
                  as: g,
                  children: x,
                  symbol: w = '$',
                  classNames: k,
                  timeout: C,
                  copyIcon: B,
                  checkIcon: j,
                  codeString: N,
                  disableCopy: J = !1,
                  disableTooltip: A = !1,
                  hideCopyButton: P = !1,
                  autoFocus: D = !1,
                  hideSymbol: M = !1,
                  onCopy: I,
                  tooltipProps: W = {},
                  copyButtonProps: _ = {},
                  className: S,
                  ...E
                } = v,
                F = g || 'div',
                V = 'string' == typeof F,
                H =
                  null !=
                    (o =
                      null != (a = null == e ? void 0 : e.disableAnimation)
                        ? a
                        : null == h
                          ? void 0
                          : h.disableAnimation) && o,
                R = {
                  offset: 15,
                  delay: 1e3,
                  content: 'Copy to clipboard',
                  color:
                    null != (p = null == e ? void 0 : e.color)
                      ? p
                      : null == (r = t.defaultVariants)
                        ? void 0
                        : r.color,
                  isDisabled: v.disableCopy,
                  ...W,
                },
                z = (0, l.gy)(y),
                Z = (0, f.useRef)(null),
                { copy: L, copied: T } = (function ({ timeout: e = 2e3 } = {}) {
                  let [a, o] = (0, f.useState)(null),
                    [r, t] = (0, f.useState)(!1),
                    [n, s] = (0, f.useState)(null),
                    l = (0, f.useCallback)(() => {
                      n && clearTimeout(n);
                    }, [n]),
                    i = (0, f.useCallback)(
                      (a) => {
                        l(), s(setTimeout(() => t(!1), e)), t(a);
                      },
                      [l, e],
                    );
                  return {
                    copy: (0, f.useCallback)(
                      (e) => {
                        'clipboard' in navigator
                          ? navigator.clipboard
                              .writeText(e)
                              .then(() => i(!0))
                              .catch((e) => o(e))
                          : o(
                              Error(
                                'useClipboard: navigator.clipboard is not supported',
                              ),
                            );
                      },
                      [i],
                    ),
                    reset: (0, f.useCallback)(() => {
                      t(!1), o(null), l();
                    }, [l]),
                    error: a,
                    copied: r,
                  };
                })({ timeout: C }),
                X = x && Array.isArray(x),
                {
                  isFocusVisible: G,
                  isFocused: U,
                  focusProps: K,
                } = (0, b.F)({ autoFocus: D }),
                O = (0, f.useMemo)(
                  () => t({ ...m, disableAnimation: H }),
                  [(0, d.Xx)(m), H],
                ),
                $ = (0, f.useMemo)(() => {
                  if (!w || 'string' != typeof w) return w;
                  let e = w.trim();
                  return e ? ''.concat(e, ' ') : '';
                }, [w]),
                q = (0, u.W)(null == k ? void 0 : k.base, S),
                Q = (0, f.useCallback)(
                  () => ({
                    className: O.base({ class: q }),
                    ...(0, i.z)(E, { enabled: V }),
                  }),
                  [O, q, X, E],
                ),
                Y = (0, f.useCallback)(() => {
                  var e;
                  if (J) return;
                  let a = '';
                  'string' == typeof x
                    ? (a = x)
                    : Array.isArray(x) &&
                      x.forEach((e) => {
                        var o, r;
                        let t =
                          'string' == typeof e
                            ? e
                            : null ==
                                (r =
                                  null == (o = null == e ? void 0 : e.props)
                                    ? void 0
                                    : o.children)
                              ? void 0
                              : r.toString();
                        t && (a += t + '\n');
                      });
                  let o =
                    N ||
                    a ||
                    (null == (e = Z.current) ? void 0 : e.textContent) ||
                    '';
                  L(o), null == I || I(o);
                }, [L, N, J, I, x]),
                ee = {
                  'aria-label':
                    'string' == typeof R.content
                      ? R.content
                      : 'Copy to clipboard',
                  size: 'sm',
                  variant: 'light',
                  isDisabled: J,
                  onPress: Y,
                  isIconOnly: !0,
                  ..._,
                },
                ea = (0, f.useCallback)(
                  () => ({
                    ...ee,
                    'data-copied': (0, c.PB)(T),
                    className: O.copyButton({
                      class: (0, u.W)(null == k ? void 0 : k.copyButton),
                    }),
                  }),
                  [O, G, U, J, null == k ? void 0 : k.copyButton, ee, K],
                );
              return {
                Component: F,
                as: g,
                domRef: z,
                preRef: Z,
                children: x,
                slots: O,
                classNames: k,
                copied: T,
                onCopy: Y,
                copyIcon: B,
                checkIcon: j,
                symbolBefore: $,
                isMultiLine: X,
                isFocusVisible: G,
                hideCopyButton: P,
                disableCopy: J,
                disableTooltip: A,
                hideSymbol: M,
                tooltipProps: R,
                getSnippetProps: Q,
                getCopyButtonProps: ea,
              };
            })({ ...e, ref: a }),
            E = (0, f.useCallback)(
              (e) => {
                let { children: a } = e;
                return (0, h.jsx)(p.e, {
                  ...M,
                  isDisabled: C || M.isDisabled,
                  children: a,
                });
              },
              [(0, d.Xx)(M)],
            ),
            F = (0, f.useMemo)(() => {
              if (D) return null;
              let e = j && (0, f.cloneElement)(j, { className: w.checkIcon() }),
                a = B && (0, f.cloneElement)(B, { className: w.copyIcon() }),
                o = (0, h.jsxs)(y.A, { ...S(), children: [e, a] });
              return A ? o : (0, h.jsx)(E, { children: o });
            }, [w, null == k ? void 0 : k.copyButton, C, j, B, W, E, J, A, D]),
            V = (0, f.useMemo)(
              () =>
                I && x && Array.isArray(x)
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
                              !P &&
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
                      ref: g,
                      className: w.pre({ class: null == k ? void 0 : k.pre }),
                      children: [
                        !P &&
                          (0, h.jsx)('span', {
                            className: w.symbol({
                              class: null == k ? void 0 : k.symbol,
                            }),
                            children: N,
                          }),
                        x,
                      ],
                    }),
              [x, P, I, N, null == k ? void 0 : k.pre, w],
            );
          return (0, h.jsxs)(o, { ref: r, ..._(), children: [V, F] });
        });
      g.displayName = 'NextUI.Snippet';
      var x = g;
    },
    93908: function (e, a, o) {
      o.d(a, {
        g: function () {
          return n;
        },
      });
      var r = o(2265);
      function t(e) {
        return null;
      }
      t.getCollectionNode = function* (e, a) {
        let { children: o, textValue: n, UNSTABLE_childItems: s } = e;
        yield {
          type: 'item',
          props: e,
          textValue: n,
          'aria-label': e['aria-label'],
          hasChildNodes: !0,
          *childNodes() {
            if (
              (a.showDragButtons &&
                (yield {
                  type: 'cell',
                  key: 'header-drag',
                  props: { isDragButtonCell: !0 },
                }),
              a.showSelectionCheckboxes &&
                'none' !== a.selectionMode &&
                (yield {
                  type: 'cell',
                  key: 'header',
                  props: { isSelectionCell: !0 },
                }),
              'function' == typeof o)
            ) {
              for (let e of a.columns)
                yield { type: 'cell', element: o(e.key), key: e.key };
              if (s) for (let e of s) yield { type: 'item', value: e };
            } else {
              let e = [],
                n = [];
              if (
                (r.Children.forEach(o, (o) => {
                  if (o.type === t) {
                    if (e.length < a.columns.length)
                      throw Error(
                        "All of a Row's child Cells must be positioned before any child Rows.",
                      );
                    n.push({ type: 'item', element: o });
                  } else e.push({ type: 'cell', element: o });
                }),
                e.length !== a.columns.length)
              )
                throw Error(
                  `Cell count must match column count. Found ${e.length} cells and ${a.columns.length} columns.`,
                );
              yield* e, yield* n;
            }
          },
          shouldInvalidate: (e) =>
            e.columns.length !== a.columns.length ||
            e.columns.some((e, o) => e.key !== a.columns[o].key) ||
            e.showSelectionCheckboxes !== a.showSelectionCheckboxes ||
            e.showDragButtons !== a.showDragButtons ||
            e.selectionMode !== a.selectionMode,
        };
      };
      var n = t;
    },
    71272: function (e, a, o) {
      function r(e) {
        return null;
      }
      o.d(a, {
        X: function () {
          return t;
        },
      }),
        (r.getCollectionNode = function* (e) {
          let { children: a } = e,
            o =
              e.textValue ||
              ('string' == typeof a ? a : '') ||
              e['aria-label'] ||
              '';
          yield {
            type: 'cell',
            props: e,
            rendered: a,
            textValue: o,
            'aria-label': e['aria-label'],
            hasChildNodes: !1,
          };
        });
      var t = r;
    },
  },
]);
