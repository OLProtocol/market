'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9528],
  {
    16463: function (e, r, t) {
      var n = t(71169);
      t.o(n, 'usePathname') &&
        t.d(r, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        t.o(n, 'useRouter') &&
          t.d(r, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        t.o(n, 'useSearchParams') &&
          t.d(r, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    46807: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var n = t(2265),
        a = function (e) {
          return (e + 1) % 1e6;
        };
      function o(e, r) {
        return 'function' == typeof e ? (e.length ? e(r) : e()) : e;
      }
      var i = function (e) {
        void 0 === e && (e = []);
        var r = (0, n.useRef)(o(e)),
          t = (0, n.useReducer)(a, 0)[1],
          i = (0, n.useMemo)(function () {
            var n = {
              set: function (e) {
                (r.current = o(e, r.current)), t();
              },
              push: function () {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                e.length &&
                  i.set(function (r) {
                    return r.concat(e);
                  });
              },
              updateAt: function (e, r) {
                i.set(function (t) {
                  var n = t.slice();
                  return (n[e] = r), n;
                });
              },
              insertAt: function (e, r) {
                i.set(function (t) {
                  var n = t.slice();
                  return e > n.length ? (n[e] = r) : n.splice(e, 0, r), n;
                });
              },
              update: function (e, r) {
                i.set(function (t) {
                  return t.map(function (t) {
                    return e(t, r) ? r : t;
                  });
                });
              },
              updateFirst: function (e, t) {
                var n = r.current.findIndex(function (r) {
                  return e(r, t);
                });
                n >= 0 && i.updateAt(n, t);
              },
              upsert: function (e, t) {
                var n = r.current.findIndex(function (r) {
                  return e(r, t);
                });
                n >= 0 ? i.updateAt(n, t) : i.push(t);
              },
              sort: function (e) {
                i.set(function (r) {
                  return r.slice().sort(e);
                });
              },
              filter: function (e, r) {
                i.set(function (t) {
                  return t.slice().filter(e, r);
                });
              },
              removeAt: function (e) {
                i.set(function (r) {
                  var t = r.slice();
                  return t.splice(e, 1), t;
                });
              },
              clear: function () {
                i.set([]);
              },
              reset: function () {
                i.set(o(e).slice());
              },
            };
            return (n.remove = n.removeAt), n;
          }, []);
        return [r.current, i];
      };
    },
    52975: function (e, r, t) {
      var n = t(11735),
        a = t(2265);
      r.Z = function (e) {
        void 0 === e && (e = {});
        var r = (0, a.useState)(e),
          t = r[0],
          o = r[1],
          i = (0, a.useMemo)(
            function () {
              return {
                set: function (e, r) {
                  o(function (t) {
                    var a;
                    return (0, n.__assign)(
                      (0, n.__assign)({}, t),
                      (((a = {})[e] = r), a),
                    );
                  });
                },
                setAll: function (e) {
                  o(e);
                },
                remove: function (e) {
                  o(function (r) {
                    return (
                      r[e],
                      (0, n.__rest)(r, ['symbol' == typeof e ? e : e + ''])
                    );
                  });
                },
                reset: function () {
                  return o(e);
                },
              };
            },
            [o],
          ),
          l = (0, n.__assign)(
            {
              get: (0, a.useCallback)(
                function (e) {
                  return t[e];
                },
                [t],
              ),
            },
            i,
          );
        return [t, l];
      };
    },
    55448: function (e, r, t) {
      t.d(r, {
        G: function () {
          return u;
        },
      });
      var n = t(66265),
        a = t(55971),
        o = t(26242),
        i = t(65263),
        l = t(57437),
        s = (0, a.Gp)((e, r) => {
          var t;
          let { as: a, className: s, children: u, ...d } = e,
            c = (0, o.gy)(r),
            { slots: f, classNames: b } = (0, n.R)(),
            m = (0, i.W)(null == b ? void 0 : b.body, s);
          return (0, l.jsx)(a || 'div', {
            ref: c,
            className: null == (t = f.body) ? void 0 : t.call(f, { class: m }),
            ...d,
            children: u,
          });
        });
      s.displayName = 'NextUI.CardBody';
      var u = s;
    },
    72354: function (e, r, t) {
      t.d(r, {
        w: function () {
          return I;
        },
      });
      var n = t(66265),
        a = t(2068),
        o = t(21616),
        i = (0, a.tv)({
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
              ...o.Dh,
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
        l = t(2265),
        s = t(5722),
        u = t(277),
        d = t(25829),
        c = t(83892),
        f = t(5150),
        b = t(12094),
        m = t(55971),
        p = t(65263),
        g = t(36222),
        h = t(53640),
        v = t(75300),
        w = t(26242),
        y = t(90794),
        k = t(22572),
        x = t(57437),
        P = (0, m.Gp)((e, r) => {
          let {
            children: t,
            context: a,
            Component: o,
            isPressable: P,
            disableAnimation: I,
            disableRipple: C,
            getCardProps: N,
            getRippleProps: S,
          } = (function (e) {
            var r, t, n, a;
            let o = (0, b.w)(),
              [k, x] = (0, m.oe)(e, i.variantKeys),
              {
                ref: P,
                as: I,
                children: C,
                onClick: N,
                onPress: S,
                autoFocus: W,
                className: z,
                classNames: j,
                allowTextSelectionOnPress: B = !0,
                ...D
              } = k,
              F = (0, w.gy)(P),
              A = I || (e.isPressable ? 'button' : 'div'),
              _ = 'string' == typeof A,
              L =
                null !=
                  (t =
                    null != (r = e.disableAnimation)
                      ? r
                      : null == o
                        ? void 0
                        : o.disableAnimation) && t,
              M =
                null !=
                  (a =
                    null != (n = e.disableRipple)
                      ? n
                      : null == o
                        ? void 0
                        : o.disableRipple) && a,
              R = (0, p.W)(null == j ? void 0 : j.base, z),
              { onClick: G, onClear: H, ripples: E } = (0, y.i)(),
              U = (e) => {
                L || M || !F.current || G(e);
              },
              { buttonProps: V, isPressed: Z } = (0, f.j)(
                {
                  onPress: S,
                  elementType: I,
                  isDisabled: !e.isPressable,
                  onClick: (0, s.t)(N, U),
                  allowTextSelectionOnPress: B,
                  ...D,
                },
                F,
              ),
              { hoverProps: T, isHovered: O } = (0, c.X)({
                isDisabled: !e.isHoverable,
                ...D,
              }),
              {
                isFocusVisible: X,
                isFocused: $,
                focusProps: K,
              } = (0, d.F)({ autoFocus: W }),
              q = (0, l.useMemo)(
                () => i({ ...x, disableAnimation: L }),
                [(0, g.Xx)(x), L],
              ),
              J = (0, l.useMemo)(
                () => ({
                  slots: q,
                  classNames: j,
                  disableAnimation: L,
                  isDisabled: e.isDisabled,
                  isFooterBlurred: e.isFooterBlurred,
                  fullWidth: e.fullWidth,
                }),
                [q, j, e.isDisabled, e.isFooterBlurred, L, e.fullWidth],
              ),
              Q = (0, l.useCallback)(
                function () {
                  let r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: F,
                    className: q.base({ class: R }),
                    tabIndex: e.isPressable ? 0 : -1,
                    'data-hover': (0, h.PB)(O),
                    'data-pressed': (0, h.PB)(Z),
                    'data-focus': (0, h.PB)($),
                    'data-focus-visible': (0, h.PB)(X),
                    'data-disabled': (0, h.PB)(e.isDisabled),
                    ...(0, u.d)(
                      e.isPressable ? { ...V, ...K, role: 'button' } : {},
                      e.isHoverable ? T : {},
                      (0, v.z)(D, { enabled: _ }),
                      (0, v.z)(r),
                    ),
                  };
                },
                [
                  F,
                  q,
                  R,
                  _,
                  e.isPressable,
                  e.isHoverable,
                  e.isDisabled,
                  O,
                  Z,
                  X,
                  V,
                  K,
                  T,
                  D,
                ],
              ),
              Y = (0, l.useCallback)(
                () => ({ ripples: E, onClear: H }),
                [E, H],
              );
            return {
              context: J,
              domRef: F,
              Component: A,
              classNames: j,
              children: C,
              isHovered: O,
              isPressed: Z,
              disableAnimation: L,
              isPressable: e.isPressable,
              isHoverable: e.isHoverable,
              disableRipple: M,
              handleClick: U,
              isFocusVisible: X,
              getCardProps: Q,
              getRippleProps: Y,
            };
          })({ ...e, ref: r });
          return (0, x.jsxs)(o, {
            ...N(),
            children: [
              (0, x.jsx)(n.k, { value: a, children: t }),
              P && !I && !C && (0, x.jsx)(k.L, { ...S() }),
            ],
          });
        });
      P.displayName = 'NextUI.Card';
      var I = P;
    },
    40884: function (e, r, t) {
      t.d(r, {
        u: function () {
          return u;
        },
      });
      var n = t(66265),
        a = t(55971),
        o = t(26242),
        i = t(65263),
        l = t(57437),
        s = (0, a.Gp)((e, r) => {
          var t;
          let { as: a, className: s, children: u, ...d } = e,
            c = (0, o.gy)(r),
            { slots: f, classNames: b } = (0, n.R)(),
            m = (0, i.W)(null == b ? void 0 : b.header, s);
          return (0, l.jsx)(a || 'div', {
            ref: c,
            className:
              null == (t = f.header) ? void 0 : t.call(f, { class: m }),
            ...d,
            children: u,
          });
        });
      s.displayName = 'NextUI.CardHeader';
      var u = s;
    },
    66265: function (e, r, t) {
      t.d(r, {
        R: function () {
          return a;
        },
        k: function () {
          return n;
        },
      });
      var [n, a] = (0, t(37561).k)({
        name: 'CardContext',
        strict: !0,
        errorMessage:
          'useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />',
      });
    },
    75945: function (e, r, t) {
      t.d(r, {
        j: function () {
          return u;
        },
      });
      var n = t(75300),
        a = (0, t(2068).tv)({
          base: 'shrink-0 bg-divider border-none',
          variants: {
            orientation: {
              horizontal: 'w-full h-divider',
              vertical: 'h-full w-divider',
            },
          },
          defaultVariants: { orientation: 'horizontal' },
        }),
        o = t(2265),
        i = t(55971),
        l = t(57437),
        s = (0, i.Gp)((e, r) => {
          let { Component: t, getDividerProps: i } = (function (e) {
            var r;
            let t, i;
            let { as: l, className: s, orientation: u, ...d } = e,
              c = l || 'hr';
            'hr' === c && 'vertical' === u && (c = 'div');
            let { separatorProps: f } =
                ((r = {
                  elementType: 'string' == typeof c ? c : 'hr',
                  orientation: u,
                }),
                (i = (0, n.z)(r, {
                  enabled: 'string' == typeof r.elementType,
                })),
                ('vertical' === r.orientation && (t = 'vertical'),
                'hr' !== r.elementType)
                  ? {
                      separatorProps: {
                        ...i,
                        role: 'separator',
                        'aria-orientation': t,
                      },
                    }
                  : { separatorProps: i }),
              b = (0, o.useMemo)(
                () => a({ orientation: u, className: s }),
                [u, s],
              );
            return {
              Component: c,
              getDividerProps: (0, o.useCallback)(
                (e = {}) => ({
                  className: b,
                  role: 'separator',
                  'data-orientation': u,
                  ...f,
                  ...d,
                  ...e,
                }),
                [b, u, f, d],
              ),
            };
          })({ ...e });
          return (0, l.jsx)(t, { ref: r, ...i() });
        });
      s.displayName = 'NextUI.Divider';
      var u = s;
    },
    86778: function (e, r, t) {
      t.d(r, {
        J: function () {
          return m;
        },
      });
      var n = t(2265),
        a = t(12094),
        o = t(55971),
        i = (0, t(2068).tv)({
          slots: {
            wrapper: 'relative shadow-black/5',
            zoomedWrapper: 'relative overflow-hidden rounded-inherit',
            img: 'relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100',
            blurredImg: [
              'absolute',
              'z-0',
              'inset-0',
              'w-full',
              'h-full',
              'object-cover',
              'filter',
              'blur-lg',
              'scale-105',
              'saturate-150',
              'opacity-30',
              'translate-y-1',
            ],
          },
          variants: {
            radius: { none: {}, sm: {}, md: {}, lg: {}, full: {} },
            shadow: {
              none: { wrapper: 'shadow-none', img: 'shadow-none' },
              sm: { wrapper: 'shadow-small', img: 'shadow-small' },
              md: { wrapper: 'shadow-medium', img: 'shadow-medium' },
              lg: { wrapper: 'shadow-large', img: 'shadow-large' },
            },
            isZoomed: {
              true: { img: ['object-cover', 'transform', 'hover:scale-125'] },
            },
            showSkeleton: {
              true: {
                wrapper: [
                  'group',
                  'relative',
                  'overflow-hidden',
                  'bg-content3 dark:bg-content2',
                ],
                img: 'opacity-0',
              },
            },
            disableAnimation: {
              true: { img: 'transition-none' },
              false: {
                img: 'transition-transform-opacity motion-reduce:transition-none !duration-300',
              },
            },
          },
          defaultVariants: {
            radius: 'lg',
            shadow: 'none',
            isZoomed: !1,
            isBlurred: !1,
            showSkeleton: !1,
          },
          compoundVariants: [
            {
              showSkeleton: !0,
              disableAnimation: !1,
              class: {
                wrapper: [
                  'before:opacity-100',
                  'before:absolute',
                  'before:inset-0',
                  'before:-translate-x-full',
                  'before:animate-[shimmer_2s_infinite]',
                  'before:border-t',
                  'before:border-content4/30',
                  'before:bg-gradient-to-r',
                  'before:from-transparent',
                  'before:via-content4',
                  'dark:before:via-default-700/10',
                  'before:to-transparent',
                  'after:opacity-100',
                  'after:absolute',
                  'after:inset-0',
                  'after:-z-10',
                  'after:bg-content3',
                  'dark:after:bg-content2',
                ],
              },
            },
          ],
          compoundSlots: [
            {
              slots: ['wrapper', 'img', 'blurredImg', 'zoomedWrapper'],
              radius: 'none',
              class: 'rounded-none',
            },
            {
              slots: ['wrapper', 'img', 'blurredImg', 'zoomedWrapper'],
              radius: 'full',
              class: 'rounded-full',
            },
            {
              slots: ['wrapper', 'img', 'blurredImg', 'zoomedWrapper'],
              radius: 'sm',
              class: 'rounded-small',
            },
            {
              slots: ['wrapper', 'img', 'blurredImg', 'zoomedWrapper'],
              radius: 'md',
              class: 'rounded-md',
            },
            {
              slots: ['wrapper', 'img', 'blurredImg', 'zoomedWrapper'],
              radius: 'lg',
              class: 'rounded-large',
            },
          ],
        }),
        l = t(26242),
        s = t(36222),
        u = t(65263),
        d = t(53640),
        c = t(25137),
        f = t(57437),
        b = (0, o.Gp)((e, r) => {
          let {
              Component: t,
              domRef: b,
              slots: m,
              classNames: p,
              isBlurred: g,
              isZoomed: h,
              fallbackSrc: v,
              removeWrapper: w,
              disableSkeleton: y,
              getImgProps: k,
              getWrapperProps: x,
              getBlurredImgProps: P,
            } = (function (e) {
              var r, t;
              let f = (0, a.w)(),
                [b, m] = (0, o.oe)(e, i.variantKeys),
                {
                  ref: p,
                  as: g,
                  src: h,
                  className: v,
                  classNames: w,
                  loading: y,
                  isBlurred: k,
                  fallbackSrc: x,
                  isLoading: P,
                  disableSkeleton: I = !!x,
                  removeWrapper: C = !1,
                  onError: N,
                  onLoad: S,
                  srcSet: W,
                  sizes: z,
                  crossOrigin: j,
                  ...B
                } = b,
                D = (0, c.d)({
                  src: h,
                  loading: y,
                  onError: N,
                  onLoad: S,
                  ignoreFallback: !1,
                  srcSet: W,
                  sizes: z,
                  crossOrigin: j,
                }),
                F =
                  null !=
                    (t =
                      null != (r = e.disableAnimation)
                        ? r
                        : null == f
                          ? void 0
                          : f.disableAnimation) && t,
                A = 'loaded' === D && !P,
                _ = 'loading' === D || P,
                L = e.isZoomed,
                M = (0, l.gy)(p),
                { w: R, h: G } = (0, n.useMemo)(
                  () => ({
                    w: b.width
                      ? 'number' == typeof b.width
                        ? ''.concat(b.width, 'px')
                        : b.width
                      : 'fit-content',
                    h: b.height
                      ? 'number' == typeof b.height
                        ? ''.concat(b.height, 'px')
                        : b.height
                      : 'auto',
                  }),
                  [null == b ? void 0 : b.width, null == b ? void 0 : b.height],
                ),
                H = (!h || !A) && !!x,
                E = _ && !I,
                U = (0, n.useMemo)(
                  () => i({ ...m, disableAnimation: F, showSkeleton: E }),
                  [(0, s.Xx)(m), F, E],
                ),
                V = (0, u.W)(v, null == w ? void 0 : w.img),
                Z = (0, n.useCallback)(() => {
                  let e = H ? { backgroundImage: 'url('.concat(x, ')') } : {};
                  return {
                    className: U.wrapper({
                      class: null == w ? void 0 : w.wrapper,
                    }),
                    style: { ...e, maxWidth: R },
                  };
                }, [U, H, x, null == w ? void 0 : w.wrapper]),
                T = (0, n.useCallback)(
                  () => ({
                    src: h,
                    'aria-hidden': (0, d.PB)(!0),
                    className: U.blurredImg({
                      class: null == w ? void 0 : w.blurredImg,
                    }),
                  }),
                  [U, h, null == w ? void 0 : w.blurredImg],
                );
              return {
                Component: g || 'img',
                domRef: M,
                slots: U,
                classNames: w,
                isBlurred: k,
                disableSkeleton: I,
                fallbackSrc: x,
                removeWrapper: C,
                isZoomed: L,
                isLoading: _,
                getImgProps: function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = (0, u.W)(V, null == e ? void 0 : e.className);
                  return {
                    src: h,
                    ref: M,
                    'data-loaded': (0, d.PB)(A),
                    className: U.img({ class: r }),
                    loading: y,
                    srcSet: W,
                    sizes: z,
                    crossOrigin: j,
                    ...B,
                    style: {
                      ...((null == B ? void 0 : B.height) && { height: G }),
                      ...e.style,
                      ...B.style,
                    },
                  };
                },
                getWrapperProps: Z,
                getBlurredImgProps: T,
              };
            })({ ...e, ref: r }),
            I = (0, f.jsx)(t, { ref: b, ...k() });
          if (w) return I;
          let C = (0, f.jsx)('div', {
            className: m.zoomedWrapper({
              class: null == p ? void 0 : p.zoomedWrapper,
            }),
            children: I,
          });
          return g
            ? (0, f.jsxs)('div', {
                ...x(),
                children: [h ? C : I, (0, n.cloneElement)(I, P())],
              })
            : h || !y || v
              ? (0, f.jsxs)('div', { ...x(), children: [' ', h ? C : I] })
              : I;
        });
      b.displayName = 'NextUI.Image';
      var m = b;
    },
    25137: function (e, r, t) {
      t.d(r, {
        d: function () {
          return o;
        },
      });
      var n = t(2265),
        a = t(46896);
      function o(e = {}) {
        let {
            loading: r,
            src: t,
            srcSet: o,
            onLoad: i,
            onError: l,
            crossOrigin: s,
            sizes: u,
            ignoreFallback: d,
          } = e,
          [c, f] = (0, n.useState)('pending');
        (0, n.useEffect)(() => {
          f(t ? 'loading' : 'pending');
        }, [t]);
        let b = (0, n.useRef)(),
          m = (0, n.useCallback)(() => {
            if (!t) return;
            p();
            let e = new Image();
            (e.src = t),
              s && (e.crossOrigin = s),
              o && (e.srcset = o),
              u && (e.sizes = u),
              r && (e.loading = r),
              (e.onload = (e) => {
                p(), f('loaded'), null == i || i(e);
              }),
              (e.onerror = (e) => {
                p(), f('failed'), null == l || l(e);
              }),
              (b.current = e);
          }, [t, s, o, u, i, l, r]),
          p = () => {
            b.current &&
              ((b.current.onload = null),
              (b.current.onerror = null),
              (b.current = null));
          };
        return (
          (0, a.G)(() => {
            if (!d)
              return (
                'loading' === c && m(),
                () => {
                  p();
                }
              );
          }, [c, m, d]),
          d ? 'loaded' : c
        );
      }
    },
    79822: function (e, r, t) {
      let n;
      t.d(r, {
        q: function () {
          return b;
        },
      });
      var a = t(34909);
      let o = Symbol.for('react-aria.i18n.locale'),
        i = Symbol.for('react-aria.i18n.strings');
      class l {
        getStringForLocale(e, r) {
          let t = this.getStringsForLocale(r)[e];
          if (!t)
            throw Error(`Could not find intl message ${e} in ${r} locale`);
          return t;
        }
        getStringsForLocale(e) {
          let r = this.strings[e];
          return (
            r ||
              ((r = (function (e, r, t = 'en-US') {
                if (r[e]) return r[e];
                let n = Intl.Locale
                  ? new Intl.Locale(e).language
                  : e.split('-')[0];
                if (r[n]) return r[n];
                for (let e in r) if (e.startsWith(n + '-')) return r[e];
                return r[t];
              })(e, this.strings, this.defaultLocale)),
              (this.strings[e] = r)),
            r
          );
        }
        static getGlobalDictionaryForPackage(e) {
          if ('undefined' == typeof window) return null;
          let r = window[o];
          if (void 0 === n) {
            let e = window[i];
            if (!e) return null;
            for (let t in ((n = {}), e)) n[t] = new l({ [r]: e[t] }, r);
          }
          let t = null == n ? void 0 : n[e];
          if (!t)
            throw Error(
              `Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
            );
          return t;
        }
        constructor(e, r = 'en-US') {
          (this.strings = Object.fromEntries(
            Object.entries(e).filter(([, e]) => e),
          )),
            (this.defaultLocale = r);
        }
      }
      let s = new Map(),
        u = new Map();
      class d {
        format(e, r) {
          let t = this.strings.getStringForLocale(e, this.locale);
          return 'function' == typeof t ? t(r, this) : t;
        }
        plural(e, r, t = 'cardinal') {
          let n = r['=' + e];
          if (n) return 'function' == typeof n ? n() : n;
          let a = this.locale + ':' + t,
            o = s.get(a);
          return (
            o ||
              ((o = new Intl.PluralRules(this.locale, { type: t })),
              s.set(a, o)),
            'function' == typeof (n = r[o.select(e)] || r.other) ? n() : n
          );
        }
        number(e) {
          let r = u.get(this.locale);
          return (
            r ||
              ((r = new Intl.NumberFormat(this.locale)), u.set(this.locale, r)),
            r.format(e)
          );
        }
        select(e, r) {
          let t = e[r] || e.other;
          return 'function' == typeof t ? t() : t;
        }
        constructor(e, r) {
          (this.locale = e), (this.strings = r);
        }
      }
      var c = t(2265);
      let f = new WeakMap();
      function b(e, r) {
        let t,
          { locale: n } = (0, a.j)(),
          o =
            (r && l.getGlobalDictionaryForPackage(r)) ||
            ((t = f.get(e)) || ((t = new l(e)), f.set(e, t)), t);
        return (0, c.useMemo)(() => new d(n, o), [n, o]);
      }
    },
  },
]);
