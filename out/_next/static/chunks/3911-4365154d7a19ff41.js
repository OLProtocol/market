(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3911],
  {
    34492: function (e, t, n) {
      'use strict';
      var r = n(2265),
        i =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        l = r.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var c =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                c = r[1];
              return (
                a(
                  function () {
                    (i.value = n), (i.getSnapshot = t), u(i) && c({ inst: i });
                  },
                  [e, n, t],
                ),
                s(
                  function () {
                    return (
                      u(i) && c({ inst: i }),
                      e(function () {
                        u(i) && c({ inst: i });
                      })
                    );
                  },
                  [e],
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    },
    85107: function (e, t, n) {
      'use strict';
      var r = n(2265),
        i = n(10554),
        o =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = i.useSyncExternalStore,
        a = r.useRef,
        l = r.useEffect,
        u = r.useMemo,
        c = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = a(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = s(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (s = e), (e = r(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (a = t);
                  }
                  return (a = e);
                }
                if (((t = a), o(s, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n) ? t : ((s = e), (a = n));
              }
              var s,
                a,
                l = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, i],
          ))[0],
          d[1],
        );
        return (
          l(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h],
          ),
          c(h),
          h
        );
      };
    },
    10554: function (e, t, n) {
      'use strict';
      e.exports = n(34492);
    },
    35006: function (e, t, n) {
      'use strict';
      e.exports = n(85107);
    },
    71906: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    78024: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return r;
        },
        M: function () {
          return i;
        },
      });
      var [r, i] = (0, n(37561).k)({ name: 'ButtonGroupContext', strict: !1 });
    },
    41733: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return M;
        },
      });
      var r = n(78024),
        i = n(12094),
        o = n(53640),
        s = n(2265),
        a = n(25829),
        l = n(5722),
        u = n(277),
        c = n(26242),
        d = n(75300),
        f = n(28261),
        h = n(5150),
        p = n(83892),
        g = n(90794),
        m = n(51446),
        v = n(22572),
        y = n(55971),
        w = n(57437),
        b = (0, y.Gp)((e, t) => {
          let {
            Component: n,
            domRef: y,
            children: b,
            styles: M,
            spinnerSize: x,
            spinner: T = (0, w.jsx)(m.c, { color: 'current', size: x }),
            spinnerPlacement: N,
            startContent: I,
            endContent: D,
            isLoading: E,
            disableRipple: C,
            getButtonProps: L,
            getRippleProps: j,
            isIconOnly: A,
          } = (function (e) {
            var t, n, m, v, y, w, b, M, x;
            let T = (0, r.M)(),
              N = (0, i.w)(),
              I = !!T,
              {
                ref: D,
                as: E,
                children: C,
                startContent: L,
                endContent: j,
                autoFocus: A,
                className: S,
                spinner: k,
                isLoading: z = !1,
                disableRipple: P = !1,
                fullWidth: O = null != (t = null == T ? void 0 : T.fullWidth) &&
                  t,
                radius: U = null == T ? void 0 : T.radius,
                size: Y = null != (n = null == T ? void 0 : T.size) ? n : 'md',
                color: V = null != (m = null == T ? void 0 : T.color)
                  ? m
                  : 'default',
                variant: W = null != (v = null == T ? void 0 : T.variant)
                  ? v
                  : 'solid',
                disableAnimation: Q = null !=
                  (w =
                    null != (y = null == T ? void 0 : T.disableAnimation)
                      ? y
                      : null == N
                        ? void 0
                        : N.disableAnimation) && w,
                isDisabled: R = null !=
                  (b = null == T ? void 0 : T.isDisabled) && b,
                isIconOnly: F = null !=
                  (M = null == T ? void 0 : T.isIconOnly) && M,
                spinnerPlacement: Z = 'start',
                onPress: G,
                onClick: B,
                ...K
              } = e,
              H = E || 'button',
              J = 'string' == typeof H,
              $ = (0, c.gy)(D),
              X =
                null != (x = P || (null == N ? void 0 : N.disableRipple))
                  ? x
                  : Q,
              {
                isFocusVisible: _,
                isFocused: q,
                focusProps: ee,
              } = (0, a.F)({ autoFocus: A }),
              et = R || z,
              en = (0, s.useMemo)(
                () =>
                  (0, f.L)({
                    size: Y,
                    color: V,
                    variant: W,
                    radius: U,
                    fullWidth: O,
                    isDisabled: et,
                    isInGroup: I,
                    disableAnimation: Q,
                    isIconOnly: F,
                    className: S,
                  }),
                [Y, V, W, U, O, et, I, F, Q, S],
              ),
              { onClick: er, onClear: ei, ripples: eo } = (0, g.i)(),
              es = (0, s.useCallback)(
                (e) => {
                  X || et || Q || !$.current || er(e);
                },
                [X, et, Q, $, er],
              ),
              { buttonProps: ea, isPressed: el } = (0, h.j)(
                {
                  elementType: E,
                  isDisabled: et,
                  onPress: G,
                  onClick: (0, l.t)(B, es),
                  ...K,
                },
                $,
              ),
              { isHovered: eu, hoverProps: ec } = (0, p.X)({ isDisabled: et }),
              ed = (0, s.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    'data-disabled': (0, o.PB)(et),
                    'data-focus': (0, o.PB)(q),
                    'data-pressed': (0, o.PB)(el),
                    'data-focus-visible': (0, o.PB)(_),
                    'data-hover': (0, o.PB)(eu),
                    'data-loading': (0, o.PB)(z),
                    ...(0, u.d)(
                      ea,
                      ee,
                      ec,
                      (0, d.z)(K, { enabled: J }),
                      (0, d.z)(e),
                    ),
                  };
                },
                [z, et, q, el, J, _, eu, ea, ee, ec, K],
              ),
              ef = (e) =>
                (0, s.isValidElement)(e)
                  ? (0, s.cloneElement)(e, {
                      'aria-hidden': !0,
                      focusable: !1,
                      tabIndex: -1,
                    })
                  : null,
              eh = ef(L);
            return {
              Component: H,
              children: C,
              domRef: $,
              spinner: k,
              styles: en,
              startContent: eh,
              endContent: ef(j),
              isLoading: z,
              spinnerPlacement: Z,
              spinnerSize: (0, s.useMemo)(
                () => ({ sm: 'sm', md: 'sm', lg: 'md' })[Y],
                [Y],
              ),
              disableRipple: X,
              getButtonProps: ed,
              getRippleProps: (0, s.useCallback)(
                () => ({ ripples: eo, onClear: ei }),
                [eo, ei],
              ),
              isIconOnly: F,
            };
          })({ ...e, ref: t });
          return (0, w.jsxs)(n, {
            ref: y,
            className: M,
            ...L(),
            children: [
              I,
              E && 'start' === N && T,
              E && A ? null : b,
              E && 'end' === N && T,
              D,
              !C && (0, w.jsx)(v.L, { ...j() }),
            ],
          });
        });
      b.displayName = 'NextUI.Button';
      var M = b;
    },
    75300: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = new Set([
          'id',
          'type',
          'style',
          'title',
          'role',
          'tabIndex',
          'htmlFor',
          'width',
          'height',
          'abbr',
          'accept',
          'acceptCharset',
          'accessKey',
          'action',
          'allowFullScreen',
          'allowTransparency',
          'alt',
          'async',
          'autoComplete',
          'autoFocus',
          'autoPlay',
          'cellPadding',
          'cellSpacing',
          'challenge',
          'charset',
          'checked',
          'cite',
          'class',
          'className',
          'cols',
          'colSpan',
          'command',
          'content',
          'contentEditable',
          'contextMenu',
          'controls',
          'coords',
          'crossOrigin',
          'data',
          'dateTime',
          'default',
          'defer',
          'dir',
          'disabled',
          'download',
          'draggable',
          'dropzone',
          'encType',
          'enterKeyHint',
          'for',
          'form',
          'formAction',
          'formEncType',
          'formMethod',
          'formNoValidate',
          'formTarget',
          'frameBorder',
          'headers',
          'hidden',
          'high',
          'href',
          'hrefLang',
          'httpEquiv',
          'icon',
          'inputMode',
          'isMap',
          'itemId',
          'itemProp',
          'itemRef',
          'itemScope',
          'itemType',
          'kind',
          'label',
          'lang',
          'list',
          'loop',
          'manifest',
          'max',
          'maxLength',
          'media',
          'mediaGroup',
          'method',
          'min',
          'minLength',
          'multiple',
          'muted',
          'name',
          'noValidate',
          'open',
          'optimum',
          'pattern',
          'ping',
          'placeholder',
          'poster',
          'preload',
          'radioGroup',
          'referrerPolicy',
          'readOnly',
          'rel',
          'required',
          'rows',
          'rowSpan',
          'sandbox',
          'scope',
          'scoped',
          'scrolling',
          'seamless',
          'selected',
          'shape',
          'size',
          'sizes',
          'slot',
          'sortable',
          'span',
          'spellCheck',
          'src',
          'srcDoc',
          'srcSet',
          'start',
          'step',
          'target',
          'translate',
          'typeMustMatch',
          'useMap',
          'value',
          'wmode',
          'wrap',
        ]),
        i = new Set([
          'onCopy',
          'onCut',
          'onPaste',
          'onLoad',
          'onError',
          'onWheel',
          'onScroll',
          'onCompositionEnd',
          'onCompositionStart',
          'onCompositionUpdate',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onFocus',
          'onBlur',
          'onChange',
          'onInput',
          'onSubmit',
          'onClick',
          'onContextMenu',
          'onDoubleClick',
          'onDrag',
          'onDragEnd',
          'onDragEnter',
          'onDragExit',
          'onDragLeave',
          'onDragOver',
          'onDragStart',
          'onDrop',
          'onMouseDown',
          'onMouseEnter',
          'onMouseLeave',
          'onMouseMove',
          'onMouseOut',
          'onMouseOver',
          'onMouseUp',
          'onPointerDown',
          'onPointerEnter',
          'onPointerLeave',
          'onPointerUp',
          'onSelect',
          'onTouchCancel',
          'onTouchEnd',
          'onTouchMove',
          'onTouchStart',
          'onAnimationStart',
          'onAnimationEnd',
          'onAnimationIteration',
          'onTransitionEnd',
        ]),
        o = /^(data-.*)$/,
        s = /^(aria-.*)$/,
        a = /^(on[A-Z].*)$/;
      function l(e, t = {}) {
        let {
            labelable: n = !0,
            enabled: l = !0,
            propNames: u,
            omitPropNames: c,
            omitEventNames: d,
            omitDataProps: f,
            omitEventProps: h,
          } = t,
          p = {};
        if (!l) return e;
        for (let t in e)
          !(
            (null == c ? void 0 : c.has(t)) ||
            ((null == d ? void 0 : d.has(t)) && a.test(t)) ||
            (a.test(t) && !i.has(t)) ||
            (f && o.test(t)) ||
            (h && a.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (r.has(t) ||
                (n && s.test(t)) ||
                (null == u ? void 0 : u.has(t)) ||
                o.test(t))) ||
              a.test(t)) &&
            (p[t] = e[t]);
        return p;
      }
    },
    37561: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(2265);
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            strict: t = !0,
            errorMessage:
              n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
            name: i,
          } = e,
          o = r.createContext(void 0);
        return (
          (o.displayName = i),
          [
            o.Provider,
            function e() {
              var i;
              let s = r.useContext(o);
              if (!s && t) {
                let t = Error(n);
                throw (
                  ((t.name = 'ContextError'),
                  null == (i = Error.captureStackTrace) || i.call(Error, t, e),
                  t)
                );
              }
              return s;
            },
            o,
          ]
        );
      }
    },
    26242: function (e, t, n) {
      'use strict';
      n.d(t, {
        fg: function () {
          return i;
        },
        gy: function () {
          return o;
        },
      });
      var r = n(2265);
      function i(e) {
        return { UNSAFE_getDOMNode: () => e.current };
      }
      function o(e) {
        let t = (0, r.useRef)(null);
        return (0, r.useImperativeHandle)(e, () => t.current), t;
      }
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
    },
    90794: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(36222),
        i = n(2265);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [t, n] = (0, i.useState)([]);
        return {
          ripples: t,
          onClick: (0, i.useCallback)((e) => {
            let t = e.currentTarget,
              i = Math.max(t.clientWidth, t.clientHeight),
              o = t.getBoundingClientRect();
            n((t) => [
              ...t,
              {
                key: (0, r.QI)(t.length.toString()),
                size: i,
                x: e.clientX - o.left - i / 2,
                y: e.clientY - o.top - i / 2,
              },
            ]);
          }, []),
          onClear: (0, i.useCallback)((e) => {
            n((t) => t.filter((t) => t.key !== e));
          }, []),
          ...e,
        };
      }
    },
    22572: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return c;
        },
      });
      var r = n(60980),
        i = n(83582),
        o = n(34446),
        s = n(34565),
        a = n(34140),
        l = n(57437),
        u = (e) => {
          let {
            ripples: t = [],
            motionProps: n,
            color: u = 'currentColor',
            style: c,
            onClear: d,
          } = e;
          return (0, l.jsx)(l.Fragment, {
            children: t.map((e) => {
              let t = (0, a.uZ)(0.01 * e.size, 0.2, e.size > 100 ? 0.75 : 0.5);
              return (0, l.jsx)(
                r.X,
                {
                  features: i.H,
                  children: (0, l.jsx)(o.M, {
                    mode: 'popLayout',
                    children: (0, l.jsx)(s.m.span, {
                      animate: { transform: 'scale(2)', opacity: 0 },
                      className: 'nextui-ripple',
                      exit: { opacity: 0 },
                      initial: { transform: 'scale(0)', opacity: 0.35 },
                      style: {
                        position: 'absolute',
                        backgroundColor: u,
                        borderRadius: '100%',
                        transformOrigin: 'center',
                        pointerEvents: 'none',
                        overflow: 'hidden',
                        inset: 0,
                        zIndex: 0,
                        top: e.y,
                        left: e.x,
                        width: ''.concat(e.size, 'px'),
                        height: ''.concat(e.size, 'px'),
                        ...c,
                      },
                      transition: { duration: t },
                      onAnimationComplete: () => {
                        d(e.key);
                      },
                      ...n,
                    }),
                  }),
                },
                e.key,
              );
            }),
          });
        };
      u.displayName = 'NextUI.Ripple';
      var c = u;
    },
    65263: function (e, t, n) {
      'use strict';
      function r(...e) {
        for (var t, n, i = 0, o = ''; i < e.length; )
          (t = e[i++]) &&
            (n = (function e(t) {
              var n,
                r,
                i = '';
              if ('string' == typeof t || 'number' == typeof t) i += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                else for (n in t) t[n] && (i && (i += ' '), (i += n));
              }
              return i;
            })(t)) &&
            (o && (o += ' '), (o += n));
        return o;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    53640: function (e, t, n) {
      'use strict';
      n.d(t, {
        Kn: function () {
          return o;
        },
        PB: function () {
          return l;
        },
        Ts: function () {
          return r;
        },
        mf: function () {
          return a;
        },
        xb: function () {
          return s;
        },
      });
      var r = !1;
      function i(e) {
        return Array.isArray(e);
      }
      function o(e) {
        let t = typeof e;
        return null != e && ('object' === t || 'function' === t) && !i(e);
      }
      function s(e) {
        return i(e)
          ? i(e) && 0 === e.length
          : o(e)
            ? o(e) && 0 === Object.keys(e).length
            : null == e || '' === e;
      }
      function a(e) {
        return 'function' == typeof e;
      }
      var l = (e) => (e ? 'true' : void 0);
    },
    34140: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return Array.from({ length: t - e + 1 }, (t, n) => n + e);
      }
      function i(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      n.d(t, {
        uZ: function () {
          return i;
        },
        w6: function () {
          return r;
        },
      });
    },
    36222: function (e, t, n) {
      'use strict';
      n.d(t, {
        Os: function () {
          return o;
        },
        QI: function () {
          return i;
        },
        Xx: function () {
          return s;
        },
        kC: function () {
          return r;
        },
      });
      var r = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      function i(e) {
        return `${e}-${Math.floor(1e6 * Math.random())}`;
      }
      function o(e) {
        for (let t in e) t.startsWith('on') && delete e[t];
        return e;
      }
      function s(e) {
        if (!e || 'object' != typeof e) return '';
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '';
        }
      }
    },
    51446: function (e, t, n) {
      'use strict';
      n.d(t, {
        c: function () {
          return c;
        },
      });
      var r = n(55971),
        i = (0, n(2068).tv)({
          slots: {
            base: 'relative inline-flex flex-col gap-2 items-center justify-center',
            wrapper: 'relative flex',
            circle1: [
              'absolute',
              'w-full',
              'h-full',
              'rounded-full',
              'animate-spinner-ease-spin',
              'border-2',
              'border-solid',
              'border-t-transparent',
              'border-l-transparent',
              'border-r-transparent',
            ],
            circle2: [
              'absolute',
              'w-full',
              'h-full',
              'rounded-full',
              'opacity-75',
              'animate-spinner-linear-spin',
              'border-2',
              'border-dotted',
              'border-t-transparent',
              'border-l-transparent',
              'border-r-transparent',
            ],
            label: 'text-foreground dark:text-foreground-dark font-regular',
          },
          variants: {
            size: {
              sm: {
                wrapper: 'w-5 h-5',
                circle1: 'border-2',
                circle2: 'border-2',
                label: 'text-small',
              },
              md: {
                wrapper: 'w-8 h-8',
                circle1: 'border-3',
                circle2: 'border-3',
                label: 'text-medium',
              },
              lg: {
                wrapper: 'w-10 h-10',
                circle1: 'border-3',
                circle2: 'border-3',
                label: 'text-large',
              },
            },
            color: {
              current: {
                circle1: 'border-b-current',
                circle2: 'border-b-current',
              },
              white: { circle1: 'border-b-white', circle2: 'border-b-white' },
              default: {
                circle1: 'border-b-default',
                circle2: 'border-b-default',
              },
              primary: {
                circle1: 'border-b-primary',
                circle2: 'border-b-primary',
              },
              secondary: {
                circle1: 'border-b-secondary',
                circle2: 'border-b-secondary',
              },
              success: {
                circle1: 'border-b-success',
                circle2: 'border-b-success',
              },
              warning: {
                circle1: 'border-b-warning',
                circle2: 'border-b-warning',
              },
              danger: {
                circle1: 'border-b-danger',
                circle2: 'border-b-danger',
              },
            },
            labelColor: {
              foreground: { label: 'text-foreground' },
              primary: { label: 'text-primary' },
              secondary: { label: 'text-secondary' },
              success: { label: 'text-success' },
              warning: { label: 'text-warning' },
              danger: { label: 'text-danger' },
            },
          },
          defaultVariants: {
            size: 'md',
            color: 'primary',
            labelColor: 'foreground',
          },
        }),
        o = n(36222),
        s = n(65263),
        a = n(2265),
        l = n(57437),
        u = (0, r.Gp)((e, t) => {
          let {
            slots: n,
            classNames: u,
            label: c,
            getSpinnerProps: d,
          } = (function (e) {
            let [t, n] = (0, r.oe)(e, i.variantKeys),
              { children: l, className: u, classNames: c, label: d, ...f } = t,
              h = (0, a.useMemo)(() => i({ ...n }), [(0, o.Xx)(n)]),
              p = (0, s.W)(null == c ? void 0 : c.base, u),
              g = d || l,
              m = (0, a.useMemo)(
                () =>
                  g && 'string' == typeof g
                    ? g
                    : f['aria-label']
                      ? ''
                      : 'Loading',
                [l, g, f['aria-label']],
              ),
              v = (0, a.useCallback)(
                () => ({
                  'aria-label': m,
                  className: h.base({ class: p }),
                  ...f,
                }),
                [m, h, p, f],
              );
            return { label: g, slots: h, classNames: c, getSpinnerProps: v };
          })({ ...e });
          return (0, l.jsxs)('div', {
            ref: t,
            ...d(),
            children: [
              (0, l.jsxs)('div', {
                className: n.wrapper({ class: null == u ? void 0 : u.wrapper }),
                children: [
                  (0, l.jsx)('i', {
                    className: n.circle1({
                      class: null == u ? void 0 : u.circle1,
                    }),
                  }),
                  (0, l.jsx)('i', {
                    className: n.circle2({
                      class: null == u ? void 0 : u.circle2,
                    }),
                  }),
                ],
              }),
              c &&
                (0, l.jsx)('span', {
                  className: n.label({ class: null == u ? void 0 : u.label }),
                  children: c,
                }),
            ],
          });
        });
      u.displayName = 'NextUI.Spinner';
      var c = u;
    },
    55971: function (e, t, n) {
      'use strict';
      n.d(t, {
        Gp: function () {
          return i;
        },
        oe: function () {
          return o;
        },
      });
      var r = n(2265);
      function i(e) {
        return (0, r.forwardRef)(e);
      }
      var o = (e, t, n = !0) => {
        if (!t) return [e, {}];
        let r = t.reduce((t, n) => (n in e ? { ...t, [n]: e[n] } : t), {});
        return n
          ? [
              Object.keys(e)
                .filter((e) => !t.includes(e))
                .reduce((t, n) => ({ ...t, [n]: e[n] }), {}),
              r,
            ]
          : [e, r];
      };
    },
    12094: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      var [r, i] = (0, n(37561).k)({ name: 'ProviderContext', strict: !1 });
    },
    22226: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return r;
        },
      });
      var r = {
        solid: {
          default: 'bg-default text-default-foreground',
          primary: 'bg-primary text-primary-foreground',
          secondary: 'bg-secondary text-secondary-foreground',
          success: 'bg-success text-success-foreground',
          warning: 'bg-warning text-warning-foreground',
          danger: 'bg-danger text-danger-foreground',
          foreground: 'bg-foreground text-background',
        },
        shadow: {
          default:
            'shadow-lg shadow-default/50 bg-default text-default-foreground',
          primary:
            'shadow-lg shadow-primary/40 bg-primary text-primary-foreground',
          secondary:
            'shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground',
          success:
            'shadow-lg shadow-success/40 bg-success text-success-foreground',
          warning:
            'shadow-lg shadow-warning/40 bg-warning text-warning-foreground',
          danger: 'shadow-lg shadow-danger/40 bg-danger text-danger-foreground',
          foreground:
            'shadow-lg shadow-foreground/40 bg-foreground text-background',
        },
        bordered: {
          default: 'bg-transparent border-default text-foreground',
          primary: 'bg-transparent border-primary text-primary',
          secondary: 'bg-transparent border-secondary text-secondary',
          success: 'bg-transparent border-success text-success',
          warning: 'bg-transparent border-warning text-warning',
          danger: 'bg-transparent border-danger text-danger',
          foreground: 'bg-transparent border-foreground text-foreground',
        },
        flat: {
          default: 'bg-default/40 text-default-700',
          primary: 'bg-primary/20 text-primary-700',
          secondary: 'bg-secondary/20 text-secondary-700',
          success: 'bg-success/20 text-success-800 dark:text-success',
          warning: 'bg-warning/20 text-warning-800 dark:text-warning',
          danger: 'bg-danger/20 text-danger-800 dark:text-danger-500',
          foreground: 'bg-foreground/10 text-foreground',
        },
        faded: {
          default: 'border-default bg-default-100 text-default-foreground',
          primary: 'border-default bg-default-100 text-primary',
          secondary: 'border-default bg-default-100 text-secondary',
          success: 'border-default bg-default-100 text-success',
          warning: 'border-default bg-default-100 text-warning',
          danger: 'border-default bg-default-100 text-danger',
          foreground: 'border-default bg-default-100 text-foreground',
        },
        light: {
          default: 'bg-transparent text-default-foreground',
          primary: 'bg-transparent text-primary',
          secondary: 'bg-transparent text-secondary',
          success: 'bg-transparent text-success',
          warning: 'bg-transparent text-warning',
          danger: 'bg-transparent text-danger',
          foreground: 'bg-transparent text-foreground',
        },
        ghost: {
          default: 'border-default text-default-foreground',
          primary: 'border-primary text-primary',
          secondary: 'border-secondary text-secondary',
          success: 'border-success text-success',
          warning: 'border-warning text-warning',
          danger: 'border-danger text-danger',
          foreground: 'border-foreground text-foreground hover:!bg-foreground',
        },
      };
    },
    2068: function (e, t, n) {
      'use strict';
      n.d(t, {
        tv: function () {
          return en;
        },
      });
      var r = ['small', 'medium', 'large'],
        i = {
          theme: {
            opacity: ['disabled'],
            spacing: ['divider'],
            borderWidth: r,
            borderRadius: r,
          },
          classGroups: {
            shadow: [{ shadow: r }],
            'font-size': [{ text: ['tiny', ...r] }],
            'bg-image': ['bg-stripe-gradient'],
          },
        },
        o = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
        s = (e) => !e || 'object' != typeof e || 0 === Object.keys(e).length,
        a = (e, t) => JSON.stringify(e) === JSON.stringify(t);
      function l(e) {
        let t = [];
        return (
          (function e(t, n) {
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, n) : n.push(t);
            });
          })(e, t),
          t
        );
      }
      var u = (...e) => l(e).filter(Boolean),
        c = (e, t) => {
          let n = {},
            r = Object.keys(e),
            i = Object.keys(t);
          for (let o of r)
            if (i.includes(o)) {
              let r = e[o],
                i = t[o];
              'object' == typeof r && 'object' == typeof i
                ? (n[o] = c(r, i))
                : Array.isArray(r) || Array.isArray(i)
                  ? (n[o] = u(i, r))
                  : (n[o] = i + ' ' + r);
            } else n[o] = e[o];
          for (let e of i) r.includes(e) || (n[e] = t[e]);
          return n;
        },
        d = (e) =>
          e && 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e,
        f = /^\[(.+)\]$/;
      function h(e, t) {
        var n = e;
        return (
          t.split('-').forEach(function (e) {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      var p = /\s+/;
      function g() {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              if ('string' == typeof t) return t;
              for (var n, r = '', i = 0; i < t.length; i++)
                t[i] && (n = e(t[i])) && (r && (r += ' '), (r += n));
              return r;
            })(e)) &&
            (r && (r += ' '), (r += t));
        return r;
      }
      function m() {
        for (var e, t, n, r = arguments.length, i = Array(r), o = 0; o < r; o++)
          i[o] = arguments[o];
        var s = function (r) {
          var o = i[0];
          return (
            (t = (e = (function (e) {
              var t, n, r, i, o, s, a, l, u, c, d;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    n = new Map(),
                    r = new Map();
                  function i(i, o) {
                    n.set(i, o), ++t > e && ((t = 0), (r = n), (n = new Map()));
                  }
                  return {
                    get: function (e) {
                      var t = n.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = r.get(e))
                          ? (i(e, t), t)
                          : void 0;
                    },
                    set: function (e, t) {
                      n.has(e) ? n.set(e, t) : i(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((n = 1 === (t = e.separator || ':').length),
                  (r = t[0]),
                  (i = t.length),
                  function (e) {
                    for (
                      var o, s = [], a = 0, l = 0, u = 0;
                      u < e.length;
                      u++
                    ) {
                      var c = e[u];
                      if (0 === a) {
                        if (c === r && (n || e.slice(u, u + i) === t)) {
                          s.push(e.slice(l, u)), (l = u + i);
                          continue;
                        }
                        if ('/' === c) {
                          o = u;
                          continue;
                        }
                      }
                      '[' === c ? a++ : ']' === c && a--;
                    }
                    var d = 0 === s.length ? e : e.substring(l),
                      f = d.startsWith('!'),
                      h = f ? d.substring(1) : d;
                    return {
                      modifiers: s,
                      hasImportantModifier: f,
                      baseClassName: h,
                      maybePostfixModifierPosition: o && o > l ? o - l : void 0,
                    };
                  }),
                ...((l = e.theme),
                (u = e.prefix),
                (c = { nextPart: new Map(), validators: [] }),
                ((d = Object.entries(e.classGroups)),
                u
                  ? d.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return 'string' == typeof e
                            ? u + e
                            : 'object' == typeof e
                              ? Object.fromEntries(
                                  Object.entries(e).map(function (e) {
                                    return [u + e[0], e[1]];
                                  }),
                                )
                              : e;
                        }),
                      ];
                    })
                  : d).forEach(function (e) {
                  var t = e[0];
                  (function e(t, n, r, i) {
                    t.forEach(function (t) {
                      if ('string' == typeof t) {
                        ('' === t ? n : h(n, t)).classGroupId = r;
                        return;
                      }
                      if ('function' == typeof t) {
                        if (t.isThemeGetter) {
                          e(t(i), n, r, i);
                          return;
                        }
                        n.validators.push({ validator: t, classGroupId: r });
                        return;
                      }
                      Object.entries(t).forEach(function (t) {
                        var o = t[0];
                        e(t[1], h(n, o), r, i);
                      });
                    });
                  })(e[1], c, t, l);
                }),
                (o = e.conflictingClassGroups),
                (a =
                  void 0 === (s = e.conflictingClassGroupModifiers) ? {} : s),
                {
                  getClassGroupId: function (e) {
                    var t = e.split('-');
                    return (
                      '' === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, n) {
                        if (0 === t.length) return n.classGroupId;
                        var r = t[0],
                          i = n.nextPart.get(r),
                          o = i ? e(t.slice(1), i) : void 0;
                        if (o) return o;
                        if (0 !== n.validators.length) {
                          var s = t.join('-');
                          return n.validators.find(function (e) {
                            return (0, e.validator)(s);
                          })?.classGroupId;
                        }
                      })(t, c) ||
                        (function (e) {
                          if (f.test(e)) {
                            var t = f.exec(e)[1],
                              n = t?.substring(0, t.indexOf(':'));
                            if (n) return 'arbitrary..' + n;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var n = o[e] || [];
                    return t && a[e] ? [].concat(n, a[e]) : n;
                  },
                }),
              };
            })(
              i.slice(1).reduce(function (e, t) {
                return t(e);
              }, o()),
            )).cache.get),
            (n = e.cache.set),
            (s = a),
            a(r)
          );
        };
        function a(r) {
          var i,
            o,
            s,
            a,
            l,
            u = t(r);
          if (u) return u;
          var c =
            ((o = (i = e).splitModifiers),
            (s = i.getClassGroupId),
            (a = i.getConflictingClassGroupIds),
            (l = new Set()),
            r
              .trim()
              .split(p)
              .map(function (e) {
                var t = o(e),
                  n = t.modifiers,
                  r = t.hasImportantModifier,
                  i = t.baseClassName,
                  a = t.maybePostfixModifierPosition,
                  l = s(a ? i.substring(0, a) : i),
                  u = !!a;
                if (!l) {
                  if (!a || !(l = s(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                var c = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    n = [];
                  return (
                    e.forEach(function (e) {
                      '[' === e[0]
                        ? (t.push.apply(t, n.sort().concat([e])), (n = []))
                        : n.push(e);
                    }),
                    t.push.apply(t, n.sort()),
                    t
                  );
                })(n).join(':');
                return {
                  isTailwindClass: !0,
                  modifierId: r ? c + '!' : c,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  n = e.classGroupId,
                  r = e.hasPostfixModifier,
                  i = t + n;
                return (
                  !l.has(i) &&
                  (l.add(i),
                  a(n, r).forEach(function (e) {
                    return l.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(' '));
          return n(r, c), c;
        }
        return function () {
          return s(g.apply(null, arguments));
        };
      }
      function v(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var y = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        w = /^\d+\/\d+$/,
        b = new Set(['px', 'full', 'screen']),
        M = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        x =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        T = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function N(e) {
        return j(e) || b.has(e) || w.test(e) || I(e);
      }
      function I(e) {
        return U(e, 'length', Y);
      }
      function D(e) {
        return U(e, 'size', V);
      }
      function E(e) {
        return U(e, 'position', V);
      }
      function C(e) {
        return U(e, 'url', W);
      }
      function L(e) {
        return U(e, 'number', j);
      }
      function j(e) {
        return !Number.isNaN(Number(e));
      }
      function A(e) {
        return e.endsWith('%') && j(e.slice(0, -1));
      }
      function S(e) {
        return Q(e) || U(e, 'number', Q);
      }
      function k(e) {
        return y.test(e);
      }
      function z() {
        return !0;
      }
      function P(e) {
        return M.test(e);
      }
      function O(e) {
        return U(e, '', R);
      }
      function U(e, t, n) {
        var r = y.exec(e);
        return !!r && (r[1] ? r[1] === t : n(r[2]));
      }
      function Y(e) {
        return x.test(e);
      }
      function V() {
        return !1;
      }
      function W(e) {
        return e.startsWith('url(');
      }
      function Q(e) {
        return Number.isInteger(Number(e));
      }
      function R(e) {
        return T.test(e);
      }
      function F() {
        var e = v('colors'),
          t = v('spacing'),
          n = v('blur'),
          r = v('brightness'),
          i = v('borderColor'),
          o = v('borderRadius'),
          s = v('borderSpacing'),
          a = v('borderWidth'),
          l = v('contrast'),
          u = v('grayscale'),
          c = v('hueRotate'),
          d = v('invert'),
          f = v('gap'),
          h = v('gradientColorStops'),
          p = v('gradientColorStopPositions'),
          g = v('inset'),
          m = v('margin'),
          y = v('opacity'),
          w = v('padding'),
          b = v('saturate'),
          M = v('scale'),
          x = v('sepia'),
          T = v('skew'),
          U = v('space'),
          Y = v('translate'),
          V = function () {
            return ['auto', 'contain', 'none'];
          },
          W = function () {
            return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
          },
          Q = function () {
            return ['auto', k, t];
          },
          R = function () {
            return [k, t];
          },
          F = function () {
            return ['', N];
          },
          Z = function () {
            return ['auto', j, k];
          },
          G = function () {
            return [
              'bottom',
              'center',
              'left',
              'left-bottom',
              'left-top',
              'right',
              'right-bottom',
              'right-top',
              'top',
            ];
          },
          B = function () {
            return ['solid', 'dashed', 'dotted', 'double', 'none'];
          },
          K = function () {
            return [
              'normal',
              'multiply',
              'screen',
              'overlay',
              'darken',
              'lighten',
              'color-dodge',
              'color-burn',
              'hard-light',
              'soft-light',
              'difference',
              'exclusion',
              'hue',
              'saturation',
              'color',
              'luminosity',
              'plus-lighter',
            ];
          },
          H = function () {
            return [
              'start',
              'end',
              'center',
              'between',
              'around',
              'evenly',
              'stretch',
            ];
          },
          J = function () {
            return ['', '0', k];
          },
          $ = function () {
            return [
              'auto',
              'avoid',
              'all',
              'avoid-page',
              'page',
              'left',
              'right',
              'column',
            ];
          },
          X = function () {
            return [j, L];
          },
          _ = function () {
            return [j, k];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [z],
            spacing: [N],
            blur: ['none', '', P, k],
            brightness: X(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', P, k],
            borderSpacing: R(),
            borderWidth: F(),
            contrast: X(),
            grayscale: J(),
            hueRotate: _(),
            invert: J(),
            gap: R(),
            gradientColorStops: [e],
            gradientColorStopPositions: [A, I],
            inset: Q(),
            margin: Q(),
            opacity: X(),
            padding: R(),
            saturate: X(),
            scale: X(),
            sepia: J(),
            skew: _(),
            space: R(),
            translate: R(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', k] }],
            container: ['container'],
            columns: [{ columns: [P] }],
            'break-after': [{ 'break-after': $() }],
            'break-before': [{ 'break-before': $() }],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none'] }],
            clear: [{ clear: ['left', 'right', 'both', 'none'] }],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [{ object: [].concat(G(), [k]) }],
            overflow: [{ overflow: W() }],
            'overflow-x': [{ 'overflow-x': W() }],
            'overflow-y': [{ 'overflow-y': W() }],
            overscroll: [{ overscroll: V() }],
            'overscroll-x': [{ 'overscroll-x': V() }],
            'overscroll-y': [{ 'overscroll-y': V() }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [g] }],
            'inset-x': [{ 'inset-x': [g] }],
            'inset-y': [{ 'inset-y': [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', S] }],
            basis: [{ basis: Q() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', k] }],
            grow: [{ grow: J() }],
            shrink: [{ shrink: J() }],
            order: [{ order: ['first', 'last', 'none', S] }],
            'grid-cols': [{ 'grid-cols': [z] }],
            'col-start-end': [{ col: ['auto', { span: ['full', S] }, k] }],
            'col-start': [{ 'col-start': Z() }],
            'col-end': [{ 'col-end': Z() }],
            'grid-rows': [{ 'grid-rows': [z] }],
            'row-start-end': [{ row: ['auto', { span: [S] }, k] }],
            'row-start': [{ 'row-start': Z() }],
            'row-end': [{ 'row-end': Z() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', k] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', k] }],
            gap: [{ gap: [f] }],
            'gap-x': [{ 'gap-x': [f] }],
            'gap-y': [{ 'gap-y': [f] }],
            'justify-content': [{ justify: ['normal'].concat(H()) }],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [
              { content: ['normal'].concat(H(), ['baseline']) },
            ],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [
              { 'place-content': [].concat(H(), ['baseline']) },
            ],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [w] }],
            px: [{ px: [w] }],
            py: [{ py: [w] }],
            ps: [{ ps: [w] }],
            pe: [{ pe: [w] }],
            pt: [{ pt: [w] }],
            pr: [{ pr: [w] }],
            pb: [{ pb: [w] }],
            pl: [{ pl: [w] }],
            m: [{ m: [m] }],
            mx: [{ mx: [m] }],
            my: [{ my: [m] }],
            ms: [{ ms: [m] }],
            me: [{ me: [m] }],
            mt: [{ mt: [m] }],
            mr: [{ mr: [m] }],
            mb: [{ mb: [m] }],
            ml: [{ ml: [m] }],
            'space-x': [{ 'space-x': [U] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [U] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [{ w: ['auto', 'min', 'max', 'fit', k, t] }],
            'min-w': [{ 'min-w': ['min', 'max', 'fit', k, N] }],
            'max-w': [
              {
                'max-w': [
                  '0',
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [P] },
                  P,
                  k,
                ],
              },
            ],
            h: [{ h: [k, t, 'auto', 'min', 'max', 'fit'] }],
            'min-h': [{ 'min-h': ['min', 'max', 'fit', k, N] }],
            'max-h': [{ 'max-h': [k, t, 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', P, I] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  L,
                ],
              },
            ],
            'font-family': [{ font: [z] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  k,
                ],
              },
            ],
            'line-clamp': [{ 'line-clamp': ['none', j, L] }],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  k,
                  N,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', k] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', k] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [y] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [y] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [{ decoration: [].concat(B(), ['wavy']) }],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', N] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', k, N] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            indent: [{ indent: R() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', k] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [y] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [{ bg: [].concat(G(), [E]) }],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', D] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  C,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [p] }],
            'gradient-via-pos': [{ via: [p] }],
            'gradient-to-pos': [{ to: [p] }],
            'gradient-from': [{ from: [h] }],
            'gradient-via': [{ via: [h] }],
            'gradient-to': [{ to: [h] }],
            rounded: [{ rounded: [o] }],
            'rounded-s': [{ 'rounded-s': [o] }],
            'rounded-e': [{ 'rounded-e': [o] }],
            'rounded-t': [{ 'rounded-t': [o] }],
            'rounded-r': [{ 'rounded-r': [o] }],
            'rounded-b': [{ 'rounded-b': [o] }],
            'rounded-l': [{ 'rounded-l': [o] }],
            'rounded-ss': [{ 'rounded-ss': [o] }],
            'rounded-se': [{ 'rounded-se': [o] }],
            'rounded-ee': [{ 'rounded-ee': [o] }],
            'rounded-es': [{ 'rounded-es': [o] }],
            'rounded-tl': [{ 'rounded-tl': [o] }],
            'rounded-tr': [{ 'rounded-tr': [o] }],
            'rounded-br': [{ 'rounded-br': [o] }],
            'rounded-bl': [{ 'rounded-bl': [o] }],
            'border-w': [{ border: [a] }],
            'border-w-x': [{ 'border-x': [a] }],
            'border-w-y': [{ 'border-y': [a] }],
            'border-w-s': [{ 'border-s': [a] }],
            'border-w-e': [{ 'border-e': [a] }],
            'border-w-t': [{ 'border-t': [a] }],
            'border-w-r': [{ 'border-r': [a] }],
            'border-w-b': [{ 'border-b': [a] }],
            'border-w-l': [{ 'border-l': [a] }],
            'border-opacity': [{ 'border-opacity': [y] }],
            'border-style': [{ border: [].concat(B(), ['hidden']) }],
            'divide-x': [{ 'divide-x': [a] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [a] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [y] }],
            'divide-style': [{ divide: B() }],
            'border-color': [{ border: [i] }],
            'border-color-x': [{ 'border-x': [i] }],
            'border-color-y': [{ 'border-y': [i] }],
            'border-color-t': [{ 'border-t': [i] }],
            'border-color-r': [{ 'border-r': [i] }],
            'border-color-b': [{ 'border-b': [i] }],
            'border-color-l': [{ 'border-l': [i] }],
            'divide-color': [{ divide: [i] }],
            'outline-style': [{ outline: [''].concat(B()) }],
            'outline-offset': [{ 'outline-offset': [k, N] }],
            'outline-w': [{ outline: [N] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: F() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [y] }],
            'ring-offset-w': [{ 'ring-offset': [N] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', P, O] }],
            'shadow-color': [{ shadow: [z] }],
            opacity: [{ opacity: [y] }],
            'mix-blend': [{ 'mix-blend': K() }],
            'bg-blend': [{ 'bg-blend': K() }],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', P, k] }],
            grayscale: [{ grayscale: [u] }],
            'hue-rotate': [{ 'hue-rotate': [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [b] }],
            sepia: [{ sepia: [x] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [n] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
            'backdrop-invert': [{ 'backdrop-invert': [d] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [y] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [b] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [s] }],
            'border-spacing-x': [{ 'border-spacing-x': [s] }],
            'border-spacing-y': [{ 'border-spacing-y': [s] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  k,
                ],
              },
            ],
            duration: [{ duration: _() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', k] }],
            delay: [{ delay: _() }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', k] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [M] }],
            'scale-x': [{ 'scale-x': [M] }],
            'scale-y': [{ 'scale-y': [M] }],
            rotate: [{ rotate: [S, k] }],
            'translate-x': [{ 'translate-x': [Y] }],
            'translate-y': [{ 'translate-y': [Y] }],
            'skew-x': [{ 'skew-x': [T] }],
            'skew-y': [{ 'skew-y': [T] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  k,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: ['appearance-none'],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  k,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': R() }],
            'scroll-mx': [{ 'scroll-mx': R() }],
            'scroll-my': [{ 'scroll-my': R() }],
            'scroll-ms': [{ 'scroll-ms': R() }],
            'scroll-me': [{ 'scroll-me': R() }],
            'scroll-mt': [{ 'scroll-mt': R() }],
            'scroll-mr': [{ 'scroll-mr': R() }],
            'scroll-mb': [{ 'scroll-mb': R() }],
            'scroll-ml': [{ 'scroll-ml': R() }],
            'scroll-p': [{ 'scroll-p': R() }],
            'scroll-px': [{ 'scroll-px': R() }],
            'scroll-py': [{ 'scroll-py': R() }],
            'scroll-ps': [{ 'scroll-ps': R() }],
            'scroll-pe': [{ 'scroll-pe': R() }],
            'scroll-pt': [{ 'scroll-pt': R() }],
            'scroll-pr': [{ 'scroll-pr': R() }],
            'scroll-pb': [{ 'scroll-pb': R() }],
            'scroll-pl': [{ 'scroll-pl': R() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [
              {
                touch: [
                  'auto',
                  'none',
                  'pinch-zoom',
                  'manipulation',
                  { pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
                ],
              },
            ],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              { 'will-change': ['auto', 'scroll', 'contents', 'transform', k] },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [N, L] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        };
      }
      var Z = m(F),
        G = Object.prototype.hasOwnProperty,
        B = new Set(['string', 'number', 'boolean']),
        K = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        H = (e) => e || void 0,
        J = (...e) => H(l(e).filter(Boolean).join(' ')),
        $ = null,
        X = {},
        _ = !1,
        q =
          (...e) =>
          (t) =>
            t.twMerge
              ? ((!$ || _) &&
                  ((_ = !1),
                  ($ = s(X)
                    ? Z
                    : (function (e) {
                        for (
                          var t = arguments.length,
                            n = Array(t > 1 ? t - 1 : 0),
                            r = 1;
                          r < t;
                          r++
                        )
                          n[r - 1] = arguments[r];
                        return 'function' == typeof e
                          ? m.apply(void 0, [F, e].concat(n))
                          : m.apply(
                              void 0,
                              [
                                function () {
                                  return (function (e, t) {
                                    for (var n in t)
                                      (function e(t, n, r) {
                                        if (
                                          !G.call(t, n) ||
                                          B.has(typeof r) ||
                                          null === r
                                        ) {
                                          t[n] = r;
                                          return;
                                        }
                                        if (
                                          Array.isArray(r) &&
                                          Array.isArray(t[n])
                                        ) {
                                          t[n] = t[n].concat(r);
                                          return;
                                        }
                                        if (
                                          'object' == typeof r &&
                                          'object' == typeof t[n]
                                        ) {
                                          if (null === t[n]) {
                                            t[n] = r;
                                            return;
                                          }
                                          for (var i in r) e(t[n], i, r[i]);
                                        }
                                      })(e, n, t[n]);
                                    return e;
                                  })(F(), e);
                                },
                              ].concat(n),
                            );
                      })(X))),
                H($(J(e))))
              : J(e),
        ee = (e, t) => {
          for (let n in t)
            e.hasOwnProperty(n) ? (e[n] = J(e[n], t[n])) : (e[n] = t[n]);
          return e;
        },
        et = (e, t) => {
          let {
              extend: n = null,
              slots: r = {},
              variants: i = {},
              compoundVariants: l = [],
              compoundSlots: f = [],
              defaultVariants: h = {},
            } = e,
            p = { ...K, ...t },
            g =
              null != n && n.base
                ? J(n.base, null == e ? void 0 : e.base)
                : null == e
                  ? void 0
                  : e.base,
            m =
              null != n && n.variants && !s(n.variants) ? c(i, n.variants) : i,
            v =
              null != n && n.defaultVariants && !s(n.defaultVariants)
                ? { ...n.defaultVariants, ...h }
                : h;
          s(p.twMergeConfig) ||
            a(p.twMergeConfig, X) ||
            ((_ = !0), (X = p.twMergeConfig));
          let y = s(null == n ? void 0 : n.slots),
            w = s(r)
              ? {}
              : {
                  base: J(
                    null == e ? void 0 : e.base,
                    y && (null == n ? void 0 : n.base),
                  ),
                  ...r,
                },
            b = y
              ? w
              : ee(
                  { ...(null == n ? void 0 : n.slots) },
                  s(w) ? { base: null == e ? void 0 : e.base } : w,
                ),
            M = (e) => {
              if (s(m) && s(r) && y)
                return q(
                  g,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className,
                )(p);
              if (l && !Array.isArray(l))
                throw TypeError(
                  `The "compoundVariants" prop must be an array. Received: ${typeof l}`,
                );
              if (f && !Array.isArray(f))
                throw TypeError(
                  `The "compoundSlots" prop must be an array. Received: ${typeof f}`,
                );
              let t = (e, t, n = [], r) => {
                  let i = n;
                  if ('string' == typeof t)
                    i = i.concat(
                      d(t)
                        .split(' ')
                        .map((t) => `${e}:${t}`),
                    );
                  else if (Array.isArray(t))
                    i = i.concat(t.reduce((t, n) => t.concat(`${e}:${n}`), []));
                  else if ('object' == typeof t && 'string' == typeof r) {
                    for (let n in t)
                      if (t.hasOwnProperty(n) && n === r) {
                        let o = t[n];
                        if (o && 'string' == typeof o) {
                          let t = d(o);
                          i[r]
                            ? (i[r] = i[r].concat(
                                t.split(' ').map((t) => `${e}:${t}`),
                              ))
                            : (i[r] = t.split(' ').map((t) => `${e}:${t}`));
                        } else
                          Array.isArray(o) &&
                            o.length > 0 &&
                            (i[r] = o.reduce(
                              (t, n) => t.concat(`${e}:${n}`),
                              [],
                            ));
                      }
                  }
                  return i;
                },
                i = (n, r = m, i = null, a = null) => {
                  var l;
                  let u = r[n];
                  if (!u || s(u)) return null;
                  let c =
                    null != (l = null == a ? void 0 : a[n])
                      ? l
                      : null == e
                        ? void 0
                        : e[n];
                  if (null === c) return null;
                  let d = o(c),
                    f =
                      (Array.isArray(p.responsiveVariants) &&
                        p.responsiveVariants.length > 0) ||
                      !0 === p.responsiveVariants,
                    h = null == v ? void 0 : v[n],
                    g = [];
                  if ('object' == typeof d && f)
                    for (let [e, n] of Object.entries(d)) {
                      let r = u[n];
                      if ('initial' === e) {
                        h = n;
                        continue;
                      }
                      (Array.isArray(p.responsiveVariants) &&
                        !p.responsiveVariants.includes(e)) ||
                        (g = t(e, r, g, i));
                    }
                  let y = u[d] || u[o(h)];
                  return 'object' == typeof g && 'string' == typeof i && g[i]
                    ? ee(g, y)
                    : g.length > 0
                      ? (g.push(y), g)
                      : y;
                },
                a = (e, t) => {
                  if (!m || 'object' != typeof m) return null;
                  let n = [];
                  for (let r in m) {
                    let o = i(r, m, e, t),
                      s = 'base' === e && 'string' == typeof o ? o : o && o[e];
                    s && (n[n.length] = s);
                  }
                  return n;
                },
                c = {};
              for (let t in e) void 0 !== e[t] && (c[t] = e[t]);
              let h = (t, n) => {
                  var r;
                  let i =
                    'object' == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (r = e[t]) ? void 0 : r.initial }
                      : {};
                  return { ...v, ...c, ...i, ...n };
                },
                w = (e = [], t) => {
                  let n = [];
                  for (let { class: r, className: i, ...o } of e) {
                    let e = !0;
                    for (let [n, r] of Object.entries(o)) {
                      let i = h(n, t);
                      if (Array.isArray(r)) {
                        if (!r.includes(i[n])) {
                          e = !1;
                          break;
                        }
                      } else if (i[n] !== r) {
                        e = !1;
                        break;
                      }
                    }
                    e && (r && n.push(r), i && n.push(i));
                  }
                  return n;
                },
                M = (e) => {
                  let t = w(l, e);
                  return u(w(null == n ? void 0 : n.compoundVariants, e), t);
                },
                x = (e) => {
                  let t = M(e);
                  if (!Array.isArray(t)) return t;
                  let n = {};
                  for (let e of t)
                    if (
                      ('string' == typeof e && (n.base = q(n.base, e)(p)),
                      'object' == typeof e)
                    )
                      for (let [t, r] of Object.entries(e))
                        n[t] = q(n[t], r)(p);
                  return n;
                },
                T = (e) => {
                  if (f.length < 1) return null;
                  let t = {};
                  for (let {
                    slots: n = [],
                    class: r,
                    className: i,
                    ...o
                  } of f) {
                    if (!s(o)) {
                      let t = !0;
                      for (let n of Object.keys(o)) {
                        let r = h(n, e)[n];
                        if (
                          void 0 === r ||
                          (Array.isArray(o[n]) ? !o[n].includes(r) : o[n] !== r)
                        ) {
                          t = !1;
                          break;
                        }
                      }
                      if (!t) continue;
                    }
                    for (let e of n) (t[e] = t[e] || []), t[e].push([r, i]);
                  }
                  return t;
                };
              if (!s(r) || !y) {
                let e = {};
                if ('object' == typeof b && !s(b))
                  for (let t of Object.keys(b))
                    e[t] = (e) => {
                      var n, r;
                      return q(
                        b[t],
                        a(t, e),
                        (null != (n = x(e)) ? n : [])[t],
                        (null != (r = T(e)) ? r : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className,
                      )(p);
                    };
                return e;
              }
              return q(
                g,
                m ? Object.keys(m).map((e) => i(e, m)) : null,
                M(),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className,
              )(p);
            };
          return (
            (M.variantKeys = (() => {
              if (!(!m || 'object' != typeof m)) return Object.keys(m);
            })()),
            (M.extend = n),
            (M.base = g),
            (M.slots = b),
            (M.variants = m),
            (M.defaultVariants = v),
            (M.compoundSlots = f),
            (M.compoundVariants = l),
            M
          );
        },
        en = (e, t) => {
          var n, r, o;
          return et(e, {
            ...t,
            twMerge: null == (n = null == t ? void 0 : t.twMerge) || n,
            twMergeConfig: {
              ...(null == t ? void 0 : t.twMergeConfig),
              theme: {
                ...(null == (r = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : r.theme),
                ...i.theme,
              },
              classGroups: {
                ...(null == (o = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : o.classGroups),
                ...i.classGroups,
              },
            },
          });
        };
    },
    21616: function (e, t, n) {
      'use strict';
      n.d(t, {
        Dh: function () {
          return r;
        },
        ID: function () {
          return i;
        },
        Zs: function () {
          return a;
        },
        jR: function () {
          return o;
        },
        z6: function () {
          return s;
        },
      });
      var r = [
          'outline-none',
          'data-[focus-visible=true]:z-10',
          'data-[focus-visible=true]:outline-2',
          'data-[focus-visible=true]:outline-focus',
          'data-[focus-visible=true]:outline-offset-2',
        ],
        i = [
          'outline-none',
          'group-data-[focus-visible=true]:z-10',
          'group-data-[focus-visible=true]:ring-2',
          'group-data-[focus-visible=true]:ring-focus',
          'group-data-[focus-visible=true]:ring-offset-2',
          'group-data-[focus-visible=true]:ring-offset-background',
        ],
        o = [
          'outline-none',
          'ring-2',
          'ring-focus',
          'ring-offset-2',
          'ring-offset-background',
        ],
        s = [
          'absolute',
          'top-1/2',
          'left-1/2',
          '-translate-x-1/2',
          '-translate-y-1/2',
        ],
        a = {
          default: [
            '[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
          primary: [
            '[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
          secondary: [
            '[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
          success: [
            '[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
          warning: [
            '[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
          danger: [
            '[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]',
          ],
        };
    },
    28261: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return a;
        },
        L: function () {
          return s;
        },
      });
      var r = n(22226),
        i = n(2068),
        o = n(21616),
        s = (0, i.tv)({
          base: [
            'z-0',
            'group',
            'relative',
            'inline-flex',
            'items-center',
            'justify-center',
            'box-border',
            'appearance-none',
            'outline-none',
            'select-none',
            'whitespace-nowrap',
            'min-w-max',
            'font-normal',
            'subpixel-antialiased',
            'overflow-hidden',
            'tap-highlight-transparent',
            'data-[pressed=true]:scale-[0.97]',
            ...o.Dh,
          ],
          variants: {
            variant: {
              solid: '',
              bordered: 'border-medium bg-transparent',
              light: 'bg-transparent',
              flat: '',
              faded: 'border-medium',
              shadow: '',
              ghost: 'border-medium bg-transparent',
            },
            size: {
              sm: 'px-3 min-w-16 h-8 text-tiny gap-2 rounded-small',
              md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-medium',
              lg: 'px-6 min-w-24 h-12 text-medium gap-3 rounded-large',
            },
            color: {
              default: '',
              primary: '',
              secondary: '',
              success: '',
              warning: '',
              danger: '',
            },
            radius: {
              none: 'rounded-none',
              sm: 'rounded-small',
              md: 'rounded-medium',
              lg: 'rounded-large',
              full: 'rounded-full',
            },
            fullWidth: { true: 'w-full' },
            isDisabled: { true: 'opacity-disabled pointer-events-none' },
            isInGroup: {
              true: '[&:not(:first-child):not(:last-child)]:rounded-none',
            },
            isIconOnly: {
              true: 'px-0 !gap-0',
              false: '[&>svg]:max-w-[theme(spacing.8)]',
            },
            disableAnimation: {
              true: '!transition-none data-[pressed=true]:scale-100',
              false:
                'transition-transform-colors-opacity motion-reduce:transition-none',
            },
          },
          defaultVariants: {
            size: 'md',
            variant: 'solid',
            color: 'default',
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1,
          },
          compoundVariants: [
            { variant: 'solid', color: 'default', class: r.J.solid.default },
            { variant: 'solid', color: 'primary', class: r.J.solid.primary },
            {
              variant: 'solid',
              color: 'secondary',
              class: r.J.solid.secondary,
            },
            { variant: 'solid', color: 'success', class: r.J.solid.success },
            { variant: 'solid', color: 'warning', class: r.J.solid.warning },
            { variant: 'solid', color: 'danger', class: r.J.solid.danger },
            { variant: 'shadow', color: 'default', class: r.J.shadow.default },
            { variant: 'shadow', color: 'primary', class: r.J.shadow.primary },
            {
              variant: 'shadow',
              color: 'secondary',
              class: r.J.shadow.secondary,
            },
            { variant: 'shadow', color: 'success', class: r.J.shadow.success },
            { variant: 'shadow', color: 'warning', class: r.J.shadow.warning },
            { variant: 'shadow', color: 'danger', class: r.J.shadow.danger },
            {
              variant: 'bordered',
              color: 'default',
              class: r.J.bordered.default,
            },
            {
              variant: 'bordered',
              color: 'primary',
              class: r.J.bordered.primary,
            },
            {
              variant: 'bordered',
              color: 'secondary',
              class: r.J.bordered.secondary,
            },
            {
              variant: 'bordered',
              color: 'success',
              class: r.J.bordered.success,
            },
            {
              variant: 'bordered',
              color: 'warning',
              class: r.J.bordered.warning,
            },
            {
              variant: 'bordered',
              color: 'danger',
              class: r.J.bordered.danger,
            },
            { variant: 'flat', color: 'default', class: r.J.flat.default },
            { variant: 'flat', color: 'primary', class: r.J.flat.primary },
            { variant: 'flat', color: 'secondary', class: r.J.flat.secondary },
            { variant: 'flat', color: 'success', class: r.J.flat.success },
            { variant: 'flat', color: 'warning', class: r.J.flat.warning },
            { variant: 'flat', color: 'danger', class: r.J.flat.danger },
            { variant: 'faded', color: 'default', class: r.J.faded.default },
            { variant: 'faded', color: 'primary', class: r.J.faded.primary },
            {
              variant: 'faded',
              color: 'secondary',
              class: r.J.faded.secondary,
            },
            { variant: 'faded', color: 'success', class: r.J.faded.success },
            { variant: 'faded', color: 'warning', class: r.J.faded.warning },
            { variant: 'faded', color: 'danger', class: r.J.faded.danger },
            {
              variant: 'light',
              color: 'default',
              class: [r.J.light.default, 'data-[hover=true]:bg-default/40'],
            },
            {
              variant: 'light',
              color: 'primary',
              class: [r.J.light.primary, 'data-[hover=true]:bg-primary/20'],
            },
            {
              variant: 'light',
              color: 'secondary',
              class: [r.J.light.secondary, 'data-[hover=true]:bg-secondary/20'],
            },
            {
              variant: 'light',
              color: 'success',
              class: [r.J.light.success, 'data-[hover=true]:bg-success/20'],
            },
            {
              variant: 'light',
              color: 'warning',
              class: [r.J.light.warning, 'data-[hover=true]:bg-warning/20'],
            },
            {
              variant: 'light',
              color: 'danger',
              class: [r.J.light.danger, 'data-[hover=true]:bg-danger/20'],
            },
            {
              variant: 'ghost',
              color: 'default',
              class: [r.J.ghost.default, 'data-[hover=true]:!bg-default'],
            },
            {
              variant: 'ghost',
              color: 'primary',
              class: [
                r.J.ghost.primary,
                'data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground',
              ],
            },
            {
              variant: 'ghost',
              color: 'secondary',
              class: [
                r.J.ghost.secondary,
                'data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground',
              ],
            },
            {
              variant: 'ghost',
              color: 'success',
              class: [
                r.J.ghost.success,
                'data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground',
              ],
            },
            {
              variant: 'ghost',
              color: 'warning',
              class: [
                r.J.ghost.warning,
                'data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground',
              ],
            },
            {
              variant: 'ghost',
              color: 'danger',
              class: [
                r.J.ghost.danger,
                'data-[hover=true]:!bg-danger !text-danger-foreground',
              ],
            },
            {
              isInGroup: !0,
              class:
                'rounded-none first:rounded-s-medium last:rounded-e-medium',
            },
            {
              isInGroup: !0,
              size: 'sm',
              class: 'rounded-none first:rounded-s-small last:rounded-e-small',
            },
            {
              isInGroup: !0,
              size: 'md',
              class:
                'rounded-none first:rounded-s-medium last:rounded-e-medium',
            },
            {
              isInGroup: !0,
              size: 'lg',
              class: 'rounded-none first:rounded-s-large last:rounded-e-large',
            },
            {
              isInGroup: !0,
              isRounded: !0,
              class: 'rounded-none first:rounded-s-full last:rounded-e-full',
            },
            {
              isInGroup: !0,
              radius: 'none',
              class: 'rounded-none first:rounded-s-none last:rounded-e-none',
            },
            {
              isInGroup: !0,
              radius: 'sm',
              class: 'rounded-none first:rounded-s-small last:rounded-e-small',
            },
            {
              isInGroup: !0,
              radius: 'md',
              class:
                'rounded-none first:rounded-s-medium last:rounded-e-medium',
            },
            {
              isInGroup: !0,
              radius: 'lg',
              class: 'rounded-none first:rounded-s-large last:rounded-e-large',
            },
            {
              isInGroup: !0,
              radius: 'full',
              class: 'rounded-none first:rounded-s-full last:rounded-e-full',
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'default',
              className: o.Zs.default,
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'primary',
              className: o.Zs.primary,
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'secondary',
              className: o.Zs.secondary,
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'success',
              className: o.Zs.success,
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'warning',
              className: o.Zs.warning,
            },
            {
              isInGroup: !0,
              variant: ['ghost', 'bordered'],
              color: 'danger',
              className: o.Zs.danger,
            },
            { isIconOnly: !0, size: 'sm', class: 'min-w-8 w-8 h-8' },
            { isIconOnly: !0, size: 'md', class: 'min-w-10 w-10 h-10' },
            { isIconOnly: !0, size: 'lg', class: 'min-w-12 w-12 h-12' },
            {
              variant: ['solid', 'faded', 'flat', 'bordered', 'shadow'],
              class: 'data-[hover=true]:opacity-hover',
            },
          ],
        }),
        a = (0, i.tv)({
          base: 'inline-flex items-center justify-center h-auto',
          variants: { fullWidth: { true: 'w-full' } },
          defaultVariants: { fullWidth: !1 },
        });
    },
    5150: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return a;
        },
      });
      var r = n(277),
        i = n(60357),
        o = n(58936),
        s = n(98647);
      function a(e, t) {
        let n,
          {
            elementType: a = 'button',
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: d,
            onPressChange: f,
            preventFocusOnPress: h,
            allowFocusWhenDisabled: p,
            onClick: g,
            href: m,
            target: v,
            rel: y,
            type: w = 'button',
            allowTextSelectionOnPress: b,
          } = e;
        n =
          'button' === a
            ? { type: w, disabled: l }
            : {
                role: 'button',
                tabIndex: l ? void 0 : 0,
                href: 'a' === a && l ? void 0 : m,
                target: 'a' === a ? v : void 0,
                type: 'input' === a ? w : void 0,
                disabled: 'input' === a ? l : void 0,
                'aria-disabled': l && 'input' !== a ? l : void 0,
                rel: 'a' === a ? y : void 0,
              };
        let { pressProps: M, isPressed: x } = (0, s.r)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: f,
            onPress: u,
            isDisabled: l,
            preventFocusOnPress: h,
            allowTextSelectionOnPress: b,
            ref: t,
          }),
          { focusableProps: T } = (0, o.k)(e, t);
        p && (T.tabIndex = l ? -1 : T.tabIndex);
        let N = (0, r.d)(T, M, (0, i.z)(e, { labelable: !0 }));
        return {
          isPressed: x,
          buttonProps: (0, r.d)(n, N, {
            'aria-haspopup': e['aria-haspopup'],
            'aria-expanded': e['aria-expanded'],
            'aria-controls': e['aria-controls'],
            'aria-pressed': e['aria-pressed'],
            onClick: (e) => {
              null == g || g(e);
            },
          }),
        };
      }
    },
    31417: function (e, t, n) {
      'use strict';
      n.d(t, {
        e: function () {
          return c;
        },
      });
      var r = n(84267);
      let i = new Map(),
        o = new Set();
      function s() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let r = i.get(n.target);
          if (
            r &&
            (r.delete(n.propertyName),
            0 === r.size &&
              (n.target.removeEventListener('transitioncancel', t),
              i.delete(n.target)),
            0 === i.size)
          ) {
            for (let e of o) e();
            o.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let r = i.get(n.target);
          r ||
            ((r = new Set()),
            i.set(n.target, r),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            r.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function a(e) {
        if (
          (function () {
            if (null == l) {
              l = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (l = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return l;
          })()
        )
          e.focus({ preventScroll: !0 });
        else {
          let t = (function (e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r; )
              (t.offsetHeight < t.scrollHeight ||
                t.offsetWidth < t.scrollWidth) &&
                n.push({
                  element: t,
                  scrollTop: t.scrollTop,
                  scrollLeft: t.scrollLeft,
                }),
                (t = t.parentNode);
            return (
              r instanceof HTMLElement &&
                n.push({
                  element: r,
                  scrollTop: r.scrollTop,
                  scrollLeft: r.scrollLeft,
                }),
              n
            );
          })(e);
          e.focus(),
            (function (e) {
              for (let { element: t, scrollTop: n, scrollLeft: r } of e)
                (t.scrollTop = n), (t.scrollLeft = r);
            })(t);
        }
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? s()
          : document.addEventListener('DOMContentLoaded', s));
      let l = null;
      var u = n(48673);
      function c(e) {
        let t = (0, r.r)(e);
        if ('virtual' === (0, u.Jz)()) {
          var n;
          let r = t.activeElement;
          (n = () => {
            t.activeElement === r && e.isConnected && a(e);
          }),
            requestAnimationFrame(() => {
              0 === i.size ? n() : o.add(n);
            });
        } else a(e);
      }
    },
    25829: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return a;
        },
      });
      var r = n(48673),
        i = n(13162),
        o = n(31575),
        s = n(2265);
      function a(e = {}) {
        let { autoFocus: t = !1, isTextInput: n, within: a } = e,
          l = (0, s.useRef)({ isFocused: !1, isFocusVisible: t || (0, r.E)() }),
          [u, c] = (0, s.useState)(!1),
          [d, f] = (0, s.useState)(
            () => l.current.isFocused && l.current.isFocusVisible,
          ),
          h = (0, s.useCallback)(
            () => f(l.current.isFocused && l.current.isFocusVisible),
            [],
          ),
          p = (0, s.useCallback)(
            (e) => {
              (l.current.isFocused = e), c(e), h();
            },
            [h],
          );
        (0, r.mG)(
          (e) => {
            (l.current.isFocusVisible = e), h();
          },
          [],
          { isTextInput: n },
        );
        let { focusProps: g } = (0, i.K)({ isDisabled: a, onFocusChange: p }),
          { focusWithinProps: m } = (function (e) {
            let {
                isDisabled: t,
                onBlurWithin: n,
                onFocusWithin: r,
                onFocusWithinChange: i,
              } = e,
              a = (0, s.useRef)({ isFocusWithin: !1 }),
              l = (0, s.useCallback)(
                (e) => {
                  a.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((a.current.isFocusWithin = !1), n && n(e), i && i(!1));
                },
                [n, i, a],
              ),
              u = (0, o.d)(l),
              c = (0, s.useCallback)(
                (e) => {
                  a.current.isFocusWithin ||
                    document.activeElement !== e.target ||
                    (r && r(e),
                    i && i(!0),
                    (a.current.isFocusWithin = !0),
                    u(e));
                },
                [r, i, u],
              );
            return t
              ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
              : { focusWithinProps: { onFocus: c, onBlur: l } };
          })({ isDisabled: !a, onFocusWithinChange: p });
        return { isFocused: u, isFocusVisible: d, focusProps: a ? m : g };
      }
    },
    58936: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return f;
        },
      });
      var r = n(31417),
        i = n(82679),
        o = n(2265);
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let s = new Map();
      var a = n(44839);
      function l(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              i = r[e];
            'function' == typeof n &&
            'function' == typeof i &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let n of e) 'function' == typeof n && n(...t);
                  };
                })(n, i))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof i
                ? (t[e] = (0, a.Z)(n, i))
                : 'id' === e && n && i
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let n = s.get(e);
                      if (n) return n(t), t;
                      let r = s.get(t);
                      return r ? (r(e), e) : t;
                    })(n, i))
                  : (t[e] = void 0 !== i ? i : n);
          }
        }
        return t;
      }
      var u = n(13162);
      function c(e) {
        if (!e) return;
        let t = !0;
        return (n) => {
          e({
            ...n,
            preventDefault() {
              n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.',
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && n.stopPropagation();
        };
      }
      let d = o.createContext(null);
      function f(e, t) {
        let { focusProps: n } = (0, u.K)(e),
          { keyboardProps: s } = {
            keyboardProps: e.isDisabled
              ? {}
              : { onKeyDown: c(e.onKeyDown), onKeyUp: c(e.onKeyUp) },
          },
          a = l(n, s),
          f = (function (e) {
            let t = (0, o.useContext)(d) || {};
            (0, i.b)(() => {
              if (t && t.ref && e)
                return (
                  (t.ref.current = e.current),
                  () => {
                    t.ref && (t.ref.current = null);
                  }
                );
            });
            let { ref: n, ...r } = t;
            return r;
          })(t),
          h = e.isDisabled ? {} : f,
          p = (0, o.useRef)(e.autoFocus);
        return (
          (0, o.useEffect)(() => {
            p.current && t.current && (0, r.e)(t.current), (p.current = !1);
          }, [t]),
          {
            focusableProps: l(
              {
                ...a,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
              },
              h,
            ),
          }
        );
      }
    },
    13162: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var r = n(31575),
        i = n(2265),
        o = n(84267);
      function s(e) {
        let { isDisabled: t, onFocus: n, onBlur: s, onFocusChange: a } = e,
          l = (0, i.useCallback)(
            (e) => {
              if (e.target === e.currentTarget)
                return s && s(e), a && a(!1), !0;
            },
            [s, a],
          ),
          u = (0, r.d)(l),
          c = (0, i.useCallback)(
            (e) => {
              let t = (0, o.r)(e.target);
              e.target === e.currentTarget &&
                t.activeElement === e.target &&
                (n && n(e), a && a(!0), u(e));
            },
            [a, n, u],
          );
        return {
          focusProps: {
            onFocus: !t && (n || a || s) ? c : void 0,
            onBlur: !t && (s || a) ? l : void 0,
          },
        };
      }
    },
    48673: function (e, t, n) {
      'use strict';
      function r(e) {
        var t;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function i(e) {
        var t;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function o(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, {
        Jz: function () {
          return L;
        },
        E: function () {
          return C;
        },
        mG: function () {
          return A;
        },
      });
      let s = o(function () {
          return i(/^Mac/i);
        }),
        a = o(function () {
          return i(/^iPhone/i);
        }),
        l = o(function () {
          return i(/^iPad/i) || (s() && navigator.maxTouchPoints > 1);
        }),
        u = o(function () {
          return a() || l();
        });
      o(function () {
        return s() || u();
      }),
        o(function () {
          return r(/AppleWebKit/i) && !c();
        });
      let c = o(function () {
          return r(/Chrome/i);
        }),
        d = o(function () {
          return r(/Android/i);
        });
      o(function () {
        return r(/Firefox/i);
      });
      var f = n(84267),
        h = n(2265);
      let p = null,
        g = new Set(),
        m = new Map(),
        v = !1,
        y = !1,
        w = { Tab: !0, Escape: !0 };
      function b(e, t) {
        for (let n of g) n(e, t);
      }
      function M(e) {
        (v = !0),
          e.metaKey ||
            (!s() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((p = 'keyboard'), b('keyboard', e));
      }
      function x(e) {
        (p = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((v = !0), b('pointer', e));
      }
      function T(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (d() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((v = !0), (p = 'virtual'));
      }
      function N(e) {
        e.target !== window &&
          e.target !== document &&
          (v || y || ((p = 'virtual'), b('virtual', e)), (v = !1), (y = !1));
      }
      function I() {
        (v = !1), (y = !0);
      }
      function D(e) {
        if ('undefined' == typeof window || m.get((0, f.k)(e))) return;
        let t = (0, f.k)(e),
          n = (0, f.r)(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (v = !0), r.apply(this, arguments);
        }),
          n.addEventListener('keydown', M, !0),
          n.addEventListener('keyup', M, !0),
          n.addEventListener('click', T, !0),
          t.addEventListener('focus', N, !0),
          t.addEventListener('blur', I, !1),
          'undefined' != typeof PointerEvent
            ? (n.addEventListener('pointerdown', x, !0),
              n.addEventListener('pointermove', x, !0),
              n.addEventListener('pointerup', x, !0))
            : (n.addEventListener('mousedown', x, !0),
              n.addEventListener('mousemove', x, !0),
              n.addEventListener('mouseup', x, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              E(e);
            },
            { once: !0 },
          ),
          m.set(t, { focus: r });
      }
      let E = (e, t) => {
        let n = (0, f.k)(e),
          r = (0, f.r)(e);
        t && r.removeEventListener('DOMContentLoaded', t),
          m.has(n) &&
            ((n.HTMLElement.prototype.focus = m.get(n).focus),
            r.removeEventListener('keydown', M, !0),
            r.removeEventListener('keyup', M, !0),
            r.removeEventListener('click', T, !0),
            n.removeEventListener('focus', N, !0),
            n.removeEventListener('blur', I, !1),
            'undefined' != typeof PointerEvent
              ? (r.removeEventListener('pointerdown', x, !0),
                r.removeEventListener('pointermove', x, !0),
                r.removeEventListener('pointerup', x, !0))
              : (r.removeEventListener('mousedown', x, !0),
                r.removeEventListener('mousemove', x, !0),
                r.removeEventListener('mouseup', x, !0)),
            m.delete(n));
      };
      function C() {
        return 'pointer' !== p;
      }
      function L() {
        return p;
      }
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let n = (0, f.r)(void 0);
          'loading' !== n.readyState
            ? D(void 0)
            : ((t = () => {
                D(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => E(e, t);
        })();
      let j = new Set([
        'checkbox',
        'radio',
        'range',
        'color',
        'file',
        'image',
        'button',
        'submit',
        'reset',
      ]);
      function A(e, t, n) {
        D(),
          (0, h.useEffect)(() => {
            let t = (t, r) => {
              (function (e, t, n) {
                var r;
                let i =
                    'undefined' != typeof window
                      ? (0, f.k)(null == n ? void 0 : n.target).HTMLInputElement
                      : HTMLInputElement,
                  o =
                    'undefined' != typeof window
                      ? (0, f.k)(null == n ? void 0 : n.target)
                          .HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  s =
                    'undefined' != typeof window
                      ? (0, f.k)(null == n ? void 0 : n.target).HTMLElement
                      : HTMLElement,
                  a =
                    'undefined' != typeof window
                      ? (0, f.k)(null == n ? void 0 : n.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    ((null == n ? void 0 : n.target) instanceof i &&
                      !j.has(
                        null == n
                          ? void 0
                          : null === (r = n.target) || void 0 === r
                            ? void 0
                            : r.type,
                      )) ||
                    (null == n ? void 0 : n.target) instanceof o ||
                    ((null == n ? void 0 : n.target) instanceof s &&
                      (null == n ? void 0 : n.target.isContentEditable))) &&
                  'keyboard' === t &&
                  n instanceof a &&
                  !w[n.key]
                );
              })(!!(null == n ? void 0 : n.isTextInput), t, r) && e(C());
            };
            return (
              g.add(t),
              () => {
                g.delete(t);
              }
            );
          }, t);
      }
    },
    31575: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var r = n(2265),
        i = n(82679);
      class o {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function s(e) {
        let t = (0, r.useRef)({ isFocused: !1, observer: null });
        (0, i.b)(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (function (e) {
          let t = (0, r.useRef)(null);
          return (
            (0, i.b)(() => {
              t.current = e;
            }, [e]),
            (0, r.useCallback)((...e) => {
              let n = t.current;
              return null == n ? void 0 : n(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, r.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let r = e.target;
              r.addEventListener(
                'focusout',
                (e) => {
                  (t.current.isFocused = !1),
                    r.disabled && n(new o('blur', e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 },
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let n =
                      r === document.activeElement
                        ? null
                        : document.activeElement;
                    r.dispatchEvent(
                      new FocusEvent('blur', { relatedTarget: n }),
                    ),
                      r.dispatchEvent(
                        new FocusEvent('focusout', {
                          bubbles: !0,
                          relatedTarget: n,
                        }),
                      );
                  }
                })),
                t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ['disabled'],
                });
            }
          },
          [n],
        );
      }
    },
    84267: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return i;
        },
        r: function () {
          return r;
        },
      });
      let r = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        i = (e) =>
          e && 'window' in e && e.window === e ? e : r(e).defaultView || window;
    },
    82679: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
    },
    83892: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var r = n(2265);
      let i = !1,
        o = 0;
      function s() {
        (i = !0),
          setTimeout(() => {
            i = !1;
          }, 50);
      }
      function a(e) {
        'touch' === e.pointerType && s();
      }
      function l() {
        if ('undefined' != typeof document)
          return (
            'undefined' != typeof PointerEvent
              ? document.addEventListener('pointerup', a)
              : document.addEventListener('touchend', s),
            o++,
            () => {
              --o > 0 ||
                ('undefined' != typeof PointerEvent
                  ? document.removeEventListener('pointerup', a)
                  : document.removeEventListener('touchend', s));
            }
          );
      }
      function u(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: o,
            isDisabled: s,
          } = e,
          [a, u] = (0, r.useState)(!1),
          c = (0, r.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
          }).current;
        (0, r.useEffect)(l, []);
        let { hoverProps: d, triggerHoverEnd: f } = (0, r.useMemo)(() => {
          let e = (e, r) => {
              if (
                ((c.pointerType = r),
                s ||
                  'touch' === r ||
                  c.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              c.isHovered = !0;
              let i = e.currentTarget;
              (c.target = i),
                t && t({ type: 'hoverstart', target: i, pointerType: r }),
                n && n(!0),
                u(!0);
            },
            r = (e, t) => {
              if (
                ((c.pointerType = ''),
                (c.target = null),
                'touch' === t || !c.isHovered)
              )
                return;
              c.isHovered = !1;
              let r = e.currentTarget;
              o && o({ type: 'hoverend', target: r, pointerType: t }),
                n && n(!1),
                u(!1);
            },
            a = {};
          return (
            'undefined' != typeof PointerEvent
              ? ((a.onPointerEnter = (t) => {
                  (i && 'mouse' === t.pointerType) || e(t, t.pointerType);
                }),
                (a.onPointerLeave = (e) => {
                  !s &&
                    e.currentTarget.contains(e.target) &&
                    r(e, e.pointerType);
                }))
              : ((a.onTouchStart = () => {
                  c.ignoreEmulatedMouseEvents = !0;
                }),
                (a.onMouseEnter = (t) => {
                  c.ignoreEmulatedMouseEvents || i || e(t, 'mouse'),
                    (c.ignoreEmulatedMouseEvents = !1);
                }),
                (a.onMouseLeave = (e) => {
                  !s && e.currentTarget.contains(e.target) && r(e, 'mouse');
                })),
            { hoverProps: a, triggerHoverEnd: r }
          );
        }, [t, n, o, s, c]);
        return (
          (0, r.useEffect)(() => {
            s && f({ currentTarget: c.target }, c.pointerType);
          }, [s]),
          { hoverProps: d, isHovered: a }
        );
      }
    },
    98647: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return A;
        },
      });
      var r = n(2446),
        i = n(73070);
      let o = new Map(),
        s = new Set();
      function a() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let r = o.get(n.target);
          if (
            r &&
            (r.delete(n.propertyName),
            0 === r.size &&
              (n.target.removeEventListener('transitioncancel', t),
              o.delete(n.target)),
            0 === o.size)
          ) {
            for (let e of s) e();
            s.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let r = o.get(n.target);
          r ||
            ((r = new Set()),
            o.set(n.target, r),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            r.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? a()
          : document.addEventListener('DOMContentLoaded', a));
      let l = 'default',
        u = '',
        c = new WeakMap();
      function d(e) {
        if ((0, r.gn)()) {
          if ('default' === l) {
            let t = (0, i.r)(e);
            (u = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          l = 'disabled';
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (c.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
      }
      function f(e) {
        if ((0, r.gn)())
          'disabled' === l &&
            ((l = 'restoring'),
            setTimeout(() => {
              var t;
              (t = () => {
                if ('restoring' === l) {
                  let t = (0, i.r)(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = u || ''),
                    (u = ''),
                    (l = 'default');
                }
              }),
                requestAnimationFrame(() => {
                  0 === o.size ? t() : s.add(t);
                });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          c.has(e)
        ) {
          let t = c.get(e);
          'none' === e.style.userSelect && (e.style.userSelect = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            c.delete(e);
        }
      }
      var h = n(2265);
      let p = h.createContext({ register: () => {} });
      p.displayName = 'PressResponderContext';
      var g = n(52396),
        m = n(49994),
        v = n(93936);
      function y(...e) {
        return (...t) => {
          for (let n of e) 'function' == typeof n && n(...t);
        };
      }
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let w = new Map();
      var b = n(44839);
      function M(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              i = r[e];
            'function' == typeof n &&
            'function' == typeof i &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = y(n, i))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof i
                ? (t[e] = (0, b.Z)(n, i))
                : 'id' === e && n && i
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let n = w.get(e);
                      if (n) return n(t), t;
                      let r = w.get(t);
                      return r ? (r(e), e) : t;
                    })(n, i))
                  : (t[e] = void 0 !== i ? i : n);
          }
        }
        return t;
      }
      var x = n(94922),
        T = n(99688);
      function N(e) {
        if (
          (function () {
            if (null == I) {
              I = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (I = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return I;
          })()
        )
          e.focus({ preventScroll: !0 });
        else {
          let t = (function (e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r; )
              (t.offsetHeight < t.scrollHeight ||
                t.offsetWidth < t.scrollWidth) &&
                n.push({
                  element: t,
                  scrollTop: t.scrollTop,
                  scrollLeft: t.scrollLeft,
                }),
                (t = t.parentNode);
            return (
              r instanceof HTMLElement &&
                n.push({
                  element: r,
                  scrollTop: r.scrollTop,
                  scrollLeft: r.scrollLeft,
                }),
              n
            );
          })(e);
          e.focus(),
            (function (e) {
              for (let { element: t, scrollTop: n, scrollLeft: r } of e)
                (t.scrollTop = n), (t.scrollLeft = r);
            })(t);
        }
      }
      let I = null;
      function D(e, t, n = !0) {
        var i, o;
        let { metaKey: s, ctrlKey: a, altKey: l, shiftKey: u } = t;
        (0, r.vU)() &&
          (null === (o = window.event) || void 0 === o
            ? void 0
            : null === (i = o.type) || void 0 === i
              ? void 0
              : i.startsWith('key')) &&
          '_blank' === e.target &&
          ((0, r.V5)() ? (s = !0) : (a = !0));
        let c =
          (0, r.Pf)() && (0, r.V5)() && !(0, r.zc)()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: s,
                ctrlKey: a,
                altKey: l,
                shiftKey: u,
              })
            : new MouseEvent('click', {
                metaKey: s,
                ctrlKey: a,
                altKey: l,
                shiftKey: u,
                bubbles: !0,
                cancelable: !0,
              });
        (D.isOpening = n), N(e), e.dispatchEvent(c), (D.isOpening = !1);
      }
      D.isOpening = !1;
      var E = n(45057),
        C = new WeakMap();
      class L {
        continuePropagation() {
          (0, v._)(this, C, !1);
        }
        get shouldStopPropagation() {
          return (0, g._)(this, C);
        }
        constructor(e, t, n) {
          (0, m._)(this, C, { writable: !0, value: void 0 }),
            (0, v._)(this, C, !0),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey);
        }
      }
      let j = Symbol('linkClicked');
      function A(e) {
        let t,
          n,
          o,
          s,
          {
            onPress: a,
            onPressChange: l,
            onPressStart: u,
            onPressEnd: c,
            onPressUp: g,
            isDisabled: m,
            isPressed: v,
            preventFocusOnPress: w,
            shouldCancelOnPointerExit: b,
            allowTextSelectionOnPress: I,
            ref: C,
            ...A
          } = (function (e) {
            var t;
            let n = (0, h.useContext)(p);
            if (n) {
              let { register: t, ...r } = n;
              (e = M(r, e)), t();
            }
            return (
              (t = e.ref),
              (0, x.b)(() => {
                if (n && n.ref && t)
                  return (
                    (n.ref.current = t.current),
                    () => {
                      n.ref && (n.ref.current = null);
                    }
                  );
              }),
              e
            );
          })(e),
          [V, W] = (0, h.useState)(!1),
          Q = (0, h.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
          }),
          { addGlobalListener: R, removeAllGlobalListeners: F } =
            ((t = (0, h.useRef)(new Map())),
            (n = (0, h.useCallback)((e, n, r, i) => {
              let o = (null == i ? void 0 : i.once)
                ? (...e) => {
                    t.current.delete(r), r(...e);
                  }
                : r;
              t.current.set(r, { type: n, eventTarget: e, fn: o, options: i }),
                e.addEventListener(n, r, i);
            }, [])),
            (o = (0, h.useCallback)((e, n, r, i) => {
              var o;
              let s =
                (null === (o = t.current.get(r)) || void 0 === o
                  ? void 0
                  : o.fn) || r;
              e.removeEventListener(n, s, i), t.current.delete(r);
            }, [])),
            (s = (0, h.useCallback)(() => {
              t.current.forEach((e, t) => {
                o(e.eventTarget, e.type, t, e.options);
              });
            }, [o])),
            (0, h.useEffect)(() => s, [s]),
            {
              addGlobalListener: n,
              removeGlobalListener: o,
              removeAllGlobalListeners: s,
            }),
          Z = (0, T.i)((e, t) => {
            let n = Q.current;
            if (m || n.didFirePressStart) return !1;
            let r = !0;
            if (((n.isTriggeringEvent = !0), u)) {
              let n = new L('pressstart', t, e);
              u(n), (r = n.shouldStopPropagation);
            }
            return (
              l && l(!0),
              (n.isTriggeringEvent = !1),
              (n.didFirePressStart = !0),
              W(!0),
              r
            );
          }),
          G = (0, T.i)((e, t, n = !0) => {
            let r = Q.current;
            if (!r.didFirePressStart) return !1;
            (r.ignoreClickAfterPress = !0),
              (r.didFirePressStart = !1),
              (r.isTriggeringEvent = !0);
            let i = !0;
            if (c) {
              let n = new L('pressend', t, e);
              c(n), (i = n.shouldStopPropagation);
            }
            if ((l && l(!1), W(!1), a && n && !m)) {
              let n = new L('press', t, e);
              a(n), i && (i = n.shouldStopPropagation);
            }
            return (r.isTriggeringEvent = !1), i;
          }),
          B = (0, T.i)((e, t) => {
            let n = Q.current;
            if (m) return !1;
            if (g) {
              n.isTriggeringEvent = !0;
              let r = new L('pressup', t, e);
              return g(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
          }),
          K = (0, T.i)((e) => {
            let t = Q.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                G(P(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              F(),
              I || f(t.target));
          }),
          H = (0, T.i)((e) => {
            b && K(e);
          }),
          J = (0, h.useMemo)(() => {
            let e = Q.current,
              t = {
                onKeyDown(t) {
                  if (
                    k(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var o;
                    Y(t.target, t.key) && t.preventDefault();
                    let s = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (s = Z(t, 'keyboard'));
                      let r = t.currentTarget;
                      R(
                        (0, i.r)(t.currentTarget),
                        'keyup',
                        y((t) => {
                          k(t, r) &&
                            !t.repeat &&
                            r.contains(t.target) &&
                            e.target &&
                            B(P(e.target, t), 'keyboard');
                        }, n),
                        !0,
                      );
                    }
                    s && t.stopPropagation(),
                      t.metaKey &&
                        (0, r.V5)() &&
                        (null === (o = e.metaKeyEvents) ||
                          void 0 === o ||
                          o.set(t.key, t.nativeEvent));
                  } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !D.isOpening
                  ) {
                    let n = !0;
                    if (
                      (m && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType ||
                          (0, E.Z)(t.nativeEvent)))
                    ) {
                      m || w || N(t.currentTarget);
                      let e = Z(t, 'virtual'),
                        r = B(t, 'virtual'),
                        i = G(t, 'virtual');
                      n = e && r && i;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      n && t.stopPropagation();
                  }
                },
              },
              n = (t) => {
                var n, r, i;
                if (e.isPressed && e.target && k(t, e.target)) {
                  Y(t.target, t.key) && t.preventDefault();
                  let n = t.target;
                  G(P(e.target, t), 'keyboard', e.target.contains(n)),
                    F(),
                    'Enter' !== t.key &&
                      S(e.target) &&
                      e.target.contains(n) &&
                      !t[j] &&
                      ((t[j] = !0), D(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (r = e.metaKeyEvents) ||
                      void 0 === r ||
                      r.delete(t.key);
                } else if (
                  'Meta' === t.key &&
                  (null === (n = e.metaKeyEvents) || void 0 === n
                    ? void 0
                    : n.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let n of ((e.metaKeyEvents = void 0), t.values()))
                    null === (i = e.target) ||
                      void 0 === i ||
                      i.dispatchEvent(new KeyboardEvent('keyup', n));
                }
              };
            if ('undefined' != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if ((0, E.c)(t.nativeEvent)) {
                  e.pointerType = 'virtual';
                  return;
                }
                U(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let s = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  m || w || N(t.currentTarget),
                  I || d(e.target),
                  (s = Z(t, e.pointerType)),
                  R((0, i.r)(t.currentTarget), 'pointermove', n, !1),
                  R((0, i.r)(t.currentTarget), 'pointerup', r, !1),
                  R((0, i.r)(t.currentTarget), 'pointercancel', o, !1)),
                  s && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (U(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    O(t, t.currentTarget) &&
                    B(t, e.pointerType || t.pointerType);
                });
              let n = (t) => {
                  t.pointerId === e.activePointerId &&
                    (e.target && O(t, e.target)
                      ? e.isOverTarget ||
                        null == e.pointerType ||
                        ((e.isOverTarget = !0),
                        Z(P(e.target, t), e.pointerType))
                      : e.target &&
                        e.isOverTarget &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        G(P(e.target, t), e.pointerType, !1),
                        H(t)));
                },
                r = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (O(t, e.target) && null != e.pointerType
                      ? G(P(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        G(P(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    F(),
                    I || f(e.target));
                },
                o = (e) => {
                  K(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && K(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (U(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = (0, E.Z)(t.nativeEvent)
                      ? 'virtual'
                      : 'mouse'),
                    m || w || N(t.currentTarget),
                    Z(t, e.pointerType) && t.stopPropagation(),
                    R((0, i.r)(t.currentTarget), 'mouseup', n, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (n = Z(t, e.pointerType))),
                    n && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (n = G(t, e.pointerType, !1)),
                    H(t)),
                    n && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    B(t, e.pointerType || 'mouse');
                });
              let n = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), F(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && O(t, e.target) && null != e.pointerType
                    ? G(P(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      G(P(e.target, t), e.pointerType, !1),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let n = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                n &&
                  ((e.activePointerId = n.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = 'touch'),
                  m || w || N(t.currentTarget),
                  I || d(e.target),
                  Z(t, e.pointerType) && t.stopPropagation(),
                  R((0, i.k)(t.currentTarget), 'scroll', r, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = z(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && O(n, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0), (r = Z(t, e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (r = G(t, e.pointerType, !1)),
                      H(t)),
                    r && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = z(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && O(n, t.currentTarget) && null != e.pointerType
                    ? (B(t, e.pointerType), (r = G(t, e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (r = G(t, e.pointerType, !1)),
                    r && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !I && f(e.target),
                    F();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && K(t));
                });
              let r = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  K({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && K(e);
              };
            }
            return t;
          }, [R, m, w, F, I, K, H, G, Z, B]);
        return (
          (0, h.useEffect)(
            () => () => {
              var e;
              I ||
                f(null !== (e = Q.current.target) && void 0 !== e ? e : void 0);
            },
            [I],
          ),
          { isPressed: v || V, pressProps: M(A, J) }
        );
      }
      function S(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function k(e, t) {
        let { key: n, code: r } = e,
          o = t.getAttribute('role');
        return (
          ('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === r) &&
          !(
            (t instanceof (0, i.k)(t).HTMLInputElement && !W(t, n)) ||
            t instanceof (0, i.k)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === o || (!o && S(t))) && 'Enter' !== n)
        );
      }
      function z(e, t) {
        let n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if (r.identifier === t) return r;
        }
        return null;
      }
      function P(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
        };
      }
      function O(e, t) {
        let n,
          r,
          i = t.getBoundingClientRect(),
          o =
            ((n = 0),
            (r = 0),
            void 0 !== e.width
              ? (n = e.width / 2)
              : void 0 !== e.radiusX && (n = e.radiusX),
            void 0 !== e.height
              ? (r = e.height / 2)
              : void 0 !== e.radiusY && (r = e.radiusY),
            {
              top: e.clientY - r,
              right: e.clientX + n,
              bottom: e.clientY + r,
              left: e.clientX - n,
            });
        return (
          !(i.left > o.right) &&
          !(o.left > i.right) &&
          !(i.top > o.bottom) &&
          !(o.top > i.bottom)
        );
      }
      function U(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
      }
      function Y(e, t) {
        return e instanceof HTMLInputElement
          ? !W(e, t)
          : e instanceof HTMLButtonElement
            ? 'submit' !== e.type && 'reset' !== e.type
            : !S(e);
      }
      let V = new Set([
        'checkbox',
        'radio',
        'range',
        'color',
        'file',
        'image',
        'button',
        'submit',
        'reset',
      ]);
      function W(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type
          ? ' ' === t
          : V.has(e.type);
      }
    },
    73070: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return i;
        },
        r: function () {
          return r;
        },
      });
      let r = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        i = (e) =>
          e && 'window' in e && e.window === e ? e : r(e).defaultView || window;
    },
    45057: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return i;
        },
        c: function () {
          return o;
        },
      });
      var r = n(2446);
      function i(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          ((0, r.Dt)() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function o(e) {
        return (
          (!(0, r.Dt)() && 0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            'mouse' === e.pointerType)
        );
      }
    },
    2446: function (e, t, n) {
      'use strict';
      function r(e) {
        var t;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function i(e) {
        var t;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function o(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, {
        Dt: function () {
          return f;
        },
        Pf: function () {
          return c;
        },
        V5: function () {
          return s;
        },
        gn: function () {
          return u;
        },
        vU: function () {
          return h;
        },
        zc: function () {
          return l;
        },
      });
      let s = o(function () {
          return i(/^Mac/i);
        }),
        a = o(function () {
          return i(/^iPhone/i);
        }),
        l = o(function () {
          return i(/^iPad/i) || (s() && navigator.maxTouchPoints > 1);
        }),
        u = o(function () {
          return a() || l();
        });
      o(function () {
        return s() || u();
      });
      let c = o(function () {
          return r(/AppleWebKit/i) && !d();
        }),
        d = o(function () {
          return r(/Chrome/i);
        }),
        f = o(function () {
          return r(/Android/i);
        }),
        h = o(function () {
          return r(/Firefox/i);
        });
    },
    99688: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(94922),
        i = n(2265);
      function o(e) {
        let t = (0, i.useRef)(null);
        return (
          (0, r.b)(() => {
            t.current = e;
          }, [e]),
          (0, i.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
    },
    94922: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
    },
    73165: function (e, t, n) {
      'use strict';
      n.d(t, {
        Av: function () {
          return h;
        },
        gP: function () {
          return u;
        },
      });
      var r = n(2265);
      let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        o = r.createContext(i),
        s = r.createContext(!1),
        a = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        l = new WeakMap(),
        u =
          'function' == typeof r.useId
            ? function (e) {
                let t = r.useId(),
                  [n] = (0, r.useState)(h()),
                  o = n ? 'react-aria' : `react-aria${i.prefix}`;
                return e || `${o}-${t}`;
              }
            : function (e) {
                let t = (0, r.useContext)(o);
                t !== i ||
                  a ||
                  console.warn(
                    'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.',
                  );
                let n = (function (e = !1) {
                    let t = (0, r.useContext)(o),
                      n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                      var i, s;
                      let e =
                        null ===
                          (s =
                            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                        void 0 === s
                          ? void 0
                          : null === (i = s.ReactCurrentOwner) || void 0 === i
                            ? void 0
                            : i.current;
                      if (e) {
                        let n = l.get(e);
                        null == n
                          ? l.set(e, { id: t.current, state: e.memoizedState })
                          : e.memoizedState !== n.state &&
                            ((t.current = n.id), l.delete(e));
                      }
                      n.current = ++t.current;
                    }
                    return n.current;
                  })(!!e),
                  s = `react-aria${t.prefix}`;
                return e || `${s}-${n}`;
              };
      function c() {
        return !1;
      }
      function d() {
        return !0;
      }
      function f(e) {
        return () => {};
      }
      function h() {
        return 'function' == typeof r.useSyncExternalStore
          ? r.useSyncExternalStore(f, c, d)
          : (0, r.useContext)(s);
      }
    },
    5722: function (e, t, n) {
      'use strict';
      function r(...e) {
        return (...t) => {
          for (let n of e) 'function' == typeof n && n(...t);
        };
      }
      n.d(t, {
        t: function () {
          return r;
        },
      });
    },
    60357: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return a;
        },
      });
      let r = new Set(['id']),
        i = new Set([
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-details',
        ]),
        o = new Set([
          'href',
          'hrefLang',
          'target',
          'rel',
          'download',
          'ping',
          'referrerPolicy',
        ]),
        s = /^(data-.*)$/;
      function a(e, t = {}) {
        let { labelable: n, isLink: a, propNames: l } = t,
          u = {};
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            (r.has(t) ||
              (n && i.has(t)) ||
              (a && o.has(t)) ||
              (null == l ? void 0 : l.has(t)) ||
              s.test(t)) &&
            (u[t] = e[t]);
        return u;
      }
    },
    277: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var r = n(5722),
        i = n(80612),
        o = n(44839);
      function s(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let s = e[n];
          for (let e in s) {
            let n = t[e],
              a = s[e];
            'function' == typeof n &&
            'function' == typeof a &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (0, r.t)(n, a))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof a
                ? (t[e] = (0, o.Z)(n, a))
                : 'id' === e && n && a
                  ? (t.id = (0, i.ur)(n, a))
                  : (t[e] = void 0 !== a ? a : n);
          }
        }
        return t;
      }
    },
    7353: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(79248),
        i = n(2265);
      function o(e) {
        let t = (0, i.useRef)(null);
        return (
          (0, r.b)(() => {
            t.current = e;
          }, [e]),
          (0, i.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
    },
    80612: function (e, t, n) {
      'use strict';
      n.d(t, {
        ur: function () {
          return c;
        },
        Me: function () {
          return u;
        },
        mp: function () {
          return d;
        },
      });
      var r = n(79248),
        i = n(7353),
        o = n(2265),
        s = n(73165);
      let a = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        l = new Map();
      function u(e) {
        let [t, n] = (0, o.useState)(e),
          i = (0, o.useRef)(null),
          u = (0, s.gP)(t),
          c = (0, o.useCallback)((e) => {
            i.current = e;
          }, []);
        return (
          a && l.set(u, c),
          (0, r.b)(
            () => () => {
              l.delete(u);
            },
            [u],
          ),
          (0, o.useEffect)(() => {
            let e = i.current;
            e && ((i.current = null), n(e));
          }),
          u
        );
      }
      function c(e, t) {
        if (e === t) return e;
        let n = l.get(e);
        if (n) return n(t), t;
        let r = l.get(t);
        return r ? (r(e), e) : t;
      }
      function d(e = []) {
        let t = u(),
          [n, s] = (function (e) {
            let [t, n] = (0, o.useState)(e),
              s = (0, o.useRef)(null),
              a = (0, i.i)(() => {
                if (!s.current) return;
                let e = s.current.next();
                if (e.done) {
                  s.current = null;
                  return;
                }
                t === e.value ? a() : n(e.value);
              });
            (0, r.b)(() => {
              s.current && a();
            });
            let l = (0, i.i)((e) => {
              (s.current = e(t)), a();
            });
            return [t, l];
          })(t),
          a = (0, o.useCallback)(() => {
            s(function* () {
              yield t, yield document.getElementById(t) ? t : void 0;
            });
          }, [t, s]);
        return (0, r.b)(a, [t, a, ...e]), n;
      }
    },
    79248: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
    },
    24842: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return m;
        },
        A: function () {
          return v;
        },
      });
      var r = n(2265),
        i = n(54887),
        o = n(39099),
        s = n(89291),
        a = ({
          visible: e,
          title: t = 'Select Wallet',
          theme: n = 'light',
          wallets: o = [],
          zIndex: s = 100,
          className: a,
          onClick: l,
          onClose: u,
        }) => {
          let [c, d] = (0, r.useState)(!1),
            [f, h] = (0, r.useState)(!1),
            p = async (e, t) => {
              if (!f && t) {
                h(!0),
                  setTimeout(() => {
                    h(!1);
                  }, 3e3);
                try {
                  await l?.(e);
                } catch (e) {
                  throw e;
                } finally {
                  h(!1);
                }
              }
            };
          (0, r.useEffect)(() => {
            d(!0);
          }, []);
          let g = e
            ? r.createElement(
                'div',
                {
                  className: 'fixed top-0 left-0 w-screen h-screen',
                  style: { zIndex: s },
                },
                r.createElement('div', {
                  className: `bg-black ${'dark' === n ? 'bg-opacity-70' : 'bg-opacity-30'}  w-full h-full`,
                }),
                r.createElement(
                  'div',
                  {
                    className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-[90%] min-h-30 max-h-[full] rounded-xl  overflow-hidden ${'dark' === n ? 'text-[#ecedee] bg-[#18181b]' : 'bg-white text-black'} ${a}`,
                  },
                  r.createElement(
                    'div',
                    {
                      className: `p-4  relative ${'dark' === n ? 'border-b border-gray-600' : 'border-b border-gray-200'}`,
                    },
                    r.createElement(
                      'h2',
                      { className: 'text-xl font-bold text-center' },
                      t,
                    ),
                    r.createElement(
                      'button',
                      {
                        onClick: () => u?.(),
                        className: 'absolute top-1/2 -translate-y-1/2 right-4',
                      },
                      r.createElement('img', {
                        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjQ2IDEyTDE5IDE3LjU0VjE5aC0xLjQ2TDEyIDEzLjQ2TDYuNDYgMTlINXYtMS40NkwxMC41NCAxMkw1IDYuNDZWNWgxLjQ2TDEyIDEwLjU0TDE3LjU0IDVIMTl2MS40NkwxMy40NiAxMloiLz48L3N2Zz4=',
                        alt: 'close',
                        className: `w-6 h-6 ${'dark' === n ? 'invert' : ''}`,
                      }),
                    ),
                  ),
                  r.createElement(
                    'div',
                    { className: 'p-4 flex flex-col gap-2' },
                    o.map((e) =>
                      r.createElement(
                        'div',
                        {
                          key: e.id,
                          onClick: () => p?.(e.id, e.installed),
                          className: `h-12 cursor-pointer flex items-center justify-between p-2 gap-2 rounded-lg relative overflow-hidden ${'dark' === n ? 'bg-[#2d2d2d] text-[#ecedee]' : 'bg-gray-100 text-black'}`,
                        },
                        f &&
                          r.createElement(
                            'div',
                            {
                              className:
                                'absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center',
                            },
                            r.createElement('img', {
                              src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMzNDYxYmMiIGQ9Ik0xMiA0VjJBMTAgMTAgMCAwIDAgMiAxMmgyYTggOCAwIDAgMSA4LThaIi8+PC9zdmc+',
                              alt: 'loading',
                              className: 'w-6 h-6 animate-spin',
                            }),
                          ),
                        r.createElement(
                          'div',
                          { className: 'flex items-center flex-1' },
                          r.createElement('img', {
                            src: e.logo,
                            alt: e.name,
                            className: 'w-8 h-8 mr-2',
                          }),
                          r.createElement(
                            'span',
                            { className: 'flex-1' },
                            e.name,
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'text-xs text-orange-600' },
                          !e.installed && 'Not Installed',
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : null;
          return c ? i.createPortal(g, document.body) : null;
        },
        l = (e, t = 10, n = '*****') =>
          'string' == typeof e && e
            ? `${e?.substring(0, t)}${n}${e?.substring(e?.length - t)}`
            : '';
      function u(e) {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '1em',
            height: '1em',
            viewBox: '0 0 24 24',
            ...e,
          },
          r.createElement('path', {
            fill: 'currentColor',
            d: 'M13.34 8.17c-.93 0-1.69-.77-1.69-1.7a1.69 1.69 0 0 1 1.69-1.69c.94 0 1.7.76 1.7 1.69c0 .93-.76 1.7-1.7 1.7M10.3 19.93l-5.93-1.18l.34-1.7l4.15.85l1.35-6.86l-1.52.6v2.86H7v-3.96l4.4-1.87l.67-.08c.6 0 1.1.34 1.43.85l.86 1.35c.68 1.21 2.03 2.03 3.64 2.03v1.68c-1.86 0-3.56-.83-4.66-2.1l-.5 2.54l1.77 1.69V23h-1.69v-5.1l-1.78-1.69l-.84 3.72M21 23h-2V3H6v13.11l-2-.42V1h17v22M6 23H4v-3.22l2 .42V23Z',
          }),
        );
      }
      class c {
        ready = !1;
        connected = !1;
        address = '';
        publicKey;
        network;
        networks = ['mainnet', 'testnet'];
        constructor(e) {
          this.network = e;
        }
        get installed() {
          return !1;
        }
        disconnect() {
          (this.address = void 0), (this.publicKey = void 0);
        }
        getAccount() {
          return this.address;
        }
        isAuthorized() {
          return !!this.getAccount();
        }
        async getNetwork() {
          if (!this.network)
            throw Error('Something went wrong while connecting');
          return this.network;
        }
        async getPublicKey() {
          if (!this.publicKey)
            throw Error('Something went wrong while connecting');
          return this.publicKey;
        }
      }
      class d extends c {
        id = 'unisat';
        name = 'Unisat';
        logo =
          'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTEuODc1NTY2NyUiIHkxPSIyOS43Mjg4NjIyJSIgeDI9IjUuNTkzNTkzODUlIiB5Mj0iNjcuNzM4NzI0OCUiIGlkPSJsaW5lYXJHcmFkaWVudC1leXZkOXN5Z2Z5LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjAxQzFCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NzM5MEQiIG9mZnNldD0iMzYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFQTgxMDEiIG9mZnNldD0iNjclIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEI4NTIiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMC41MTQwNjI0JSIgeTE9IjYyLjg4MzE2ODglIiB4Mj0iMTEwLjc4ODYyJSIgeTI9IjM3LjMyMTc0MDIlIiBpZD0ibGluZWFyR3JhZGllbnQtZXl2ZDlzeWdmeS0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFGMUQxQyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzczOTBEIiBvZmZzZXQ9IjM3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUE4MTAxIiBvZmZzZXQ9IjY3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjRGQjUyIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNTAlIiBjeT0iNTAuMDQ1MDk4OCUiIGZ4PSI1MCUiIGZ5PSI1MC4wNDUwOTg4JSIgcj0iNTAuODMyODIzNiUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41MDAwMDAsMC41MDA0NTEpLHNjYWxlKDAuOTgzNjEyLDEuMDAwMDAwKSx0cmFuc2xhdGUoLTAuNTAwMDAwLC0wLjUwMDQ1MSkiIGlkPSJyYWRpYWxHcmFkaWVudC1leXZkOXN5Z2Z5LTMiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjRCODUyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFQTgxMDEiIG9mZnNldD0iMzMlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3NzM5MEQiIG9mZnNldD0iNjQlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMTFDMUQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDYuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDkuMzcxMDQwNiw3LjkwMTkzODMzIEw2Ny42OTU5OTYsMjUuNzU0MjQ5NyBDNjkuMjU1ODc2MiwyNy4yNzA2MjQ1IDcwLjAyMzYwMTgsMjguODA0OTc3OSA3MCwzMC4zNTExMzQgQzY5Ljk3NTI5MywzMS44OTcyOTAxIDY5LjMwNDE4NSwzMy4zMDY2MTcgNjcuOTkyMjk5MSwzNC41ODUxNTMzIEM2Ni42MTk4OSwzNS45MjMyNTIyIDY1LjEzODY0ODksMzYuNjAxMjIyMyA2My41NTQ2MTQzLDM2LjYzMDg2NjMgQzYxLjk3MDU3OTcsMzYuNjU0NzQ2MiA2MC4zOTg2MjIzLDM1LjkwNTQxMDkgNTguODM4NzQyMSwzNC4zODkwMzYxIEw0MC4wOTY3MTE2LDE2LjEzMjI4OTUgQzM3Ljk2ODUxNjgsMTQuMDU2OTMyNCAzNS45MTI5MjI1LDEyLjU4ODAxNTUgMzMuOTM1OTY3MiwxMS43MjU3MzA5IEMzMS45NTg4NzQ2LDEwLjg2MzQ0NjIgMjkuODc5MTI1OSwxMC43MjY2NzE5IDI3LjcwMjYyMjMsMTEuMzIxMzUwNSBDMjUuNTIwMDgwMSwxMS45MTAwODY2IDIzLjE4MDM5NywxMy40MjY1MTYzIDIwLjY3MTM1ODcsMTUuODY0NjY5NyBDMTcuMjEzMTYyMiwxOS4yMzY1NDE2IDE1LjU2MjU2NTgsMjIuNDAwMjE5MSAxNS43MzE5MjExLDI1LjM1NTgzOTMgQzE1LjkwMTEzOTEsMjguMzExMzIyMyAxNy42MTgxNjAyLDMxLjM3OTg5MTkgMjAuODc2OTQ1NiwzNC41NDk2MDc5IEwzOS43NzAyMTU1LDUyLjk2MDg4NzggQzQxLjM0ODIxMTUsNTQuNDk1MTAzOSA0Mi4xMjE5NzU4LDU2LjAyOTMyMDEgNDIuMDk3ODIxNCw1Ny41NTE3MzM1IEM0Mi4wNzM2NjcsNTkuMDgwMDQ4MyA0MS4zOTY1MjAzLDYwLjQ4OTUxMjQgNDAuMDYwMzQyOCw2MS43OTE3OTE0IEMzOC43MzAzNDExLDYzLjA4ODE2OTEgMzcuMjYxMTc3Miw2My43NjYxMzkxIDM1LjY2NTA2NTQsNjMuODE5NjYzMSBDMzQuMDY4OTUzNiw2My44NzMxODcxIDMyLjQ3ODg4MDQsNjMuMTI5ODkwMyAzMC45MDY5MjMsNjEuNTk1NTM2OSBMMTIuNTgxOTY3Nyw0My43NDMyMzkzIEM5LjYwMTM2OTYxLDQwLjg0MTI4MDIgNy40NDkwMzQxMywzOC4wOTM4NTQ0IDYuMTI1MDAyNDUsMzUuNTAwOTYxOSBDNC44MDA5NTcwNCwzMi45MDgyMDY2IDQuMzA1MjAxNywyOS45NzY0NjYzIDQuNjQ5ODEzNjIsMjYuNzA1NzQwOSBDNC45NTgxNTI3OCwyMy45MDQ3OTEyIDUuODcxMDY1NTksMjEuMTkzMDQ4IDcuMzk0NjMxODMsMTguNTY0NjEwMSBDOC45MTIxMzIwMywxNS45MzYwMzUgMTEuMDg4NjQ5NCwxMy4yNDgxMTY4IDEzLjkxMjEwNjYsMTAuNDk0NzQ4NSBDMTcuMjczNTQ4Miw3LjIxODA2Njg3IDIwLjQ4Mzg4NzYsNC43MDg1MjA3NSAyMy41NDMxMjQ3LDIuOTYwMTUzOSBDMjYuNTk2MzIzMywxLjIxMTc5OTQgMjkuNTUyNjI5NywwLjI0MjQ3MDk2MyAzMi40MDYyOCwwLjA0MDI4MDI0MjIgQzM1LjI2NTk2ODgsLTAuMTYxOTEwNzUzIDM4LjA4MzM4NzUsMC4zOTcwODc5NDUgNDAuODcwNDc1OSwxLjcxNzI3Mjc3IEM0My42NTc3MDE1LDMuMDM3NDYxNyA0Ni40ODcxOTc0LDUuMDk1MDU5NzggNDkuMzY1MDAyLDcuOTAxOTM4MzMgTDQ5LjM3MTA0MDYsNy45MDE5MzgzMyBaIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LWV5dmQ5c3lnZnktMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC42MjI5MTI2LDc5LjkzNTQ1MTUgTDIuMzA0MDIzMzYsNjIuMDgzMTUzOSBDMC43NDQxOTM5NTIsNjAuNTYwNzQwNCAtMC4wMjM2Mjk1NTQxLDU5LjAzMjQyNTcgMi4wNDU4MDg0OWUtMTUsNTcuNDg2MjY5NiBDMC4wMjQ3MzcyOTkzLDU1Ljk0MDExMzUgMC42OTU4Mjc1MSw1NC41MzA3ODY2IDIuMDA3Nzc1MTMsNTMuMjUyMTEzIEMzLjM4MDE4NDI0LDUxLjkxNDE1MTQgNC44NjE0MjUzOCw1MS4yMzYxODEzIDYuNDQ1NDMyNTIsNTEuMjA2NCBDOC4wMjk0NTMzOSw1MS4xODI2NTczIDkuNjAxMzY5NjEsNTEuOTI1OTU0MSAxMS4xNjEyMDg2LDUzLjQ0ODM2NzUgTDI5Ljg5NzI0MTcsNzEuNzA1MTE0MSBDMzIuMDMxNDc1MSw3My43ODA0NzExIDM0LjA4MTAzMDgsNzUuMjQ5MzYwNiAzNi4wNTc5ODYxLDc2LjExMTY0NTMgQzM4LjAzNTA3ODcsNzYuOTczOTI5OSA0MC4xMTQ4Mjc0LDc3LjEwNDcyMDUgNDIuMjk3MzY5Niw3Ni41MTU5NTcgQzQ0LjQ3OTkxMTgsNzUuOTI3MzMwNyA0Ni44MTk1OTQ5LDc0LjQxMDgxODYgNDkuMzI4NjMzMiw3MS45NjY2OTUzIEM1Mi43ODY5NjY5LDY4LjU5NDgyMzMgNTQuNDM3NDI2MSw2NS40MzExNDU5IDU0LjI2ODIwODEsNjIuNDc1NjYyOSBDNTQuMDk4ODUyOCw1OS41MjAwNDI2IDUyLjM4MTgzMTcsNTYuNDUxNDczMSA0OS4xMjMxODM2LDUzLjI3NTk5MjkgTDM5LjA1NjgzNzMsNDMuNTUyODg2MSBDMzcuNDc4ODQxMyw0Mi4wMTg2NyAzNi43MDQ5Mzk4LDQwLjQ4NDMxNjYgMzYuNzI5MDk0MiwzOC45NjIwNDA0IEMzNi43NTMyNDg2LDM3LjQzMzcyNTcgMzcuNDMwMzk1MiwzNi4wMjQyNjE1IDM4Ljc2NjU3MjcsMzQuNzIxOTgyNSBDNDAuMDk2NzExNiwzMy40MjU0Njc2IDQxLjU2NTg3NTYsMzIuNzQ3NjM0OCA0My4xNjE4NTAxLDMyLjY5NDExMDggQzQ0Ljc1Nzk2MTksMzIuNjQwNTg2OSA0Ni4zNDgwMzUxLDMzLjM4Mzg4MzYgNDcuOTE5OTkyNSwzNC45MTgyMzcgTDU3LjQxMTk4NTYsNDQuMDgyMjI0MyBDNjAuMzkyNTgzNyw0Ni45ODQxODM0IDYyLjU0NDkzMjksNDkuNzMxNjA5MiA2My44NjkwMzMyLDUyLjMyNDUwMTcgQzY1LjE5Mjk5NjMsNTQuOTE3MjU3IDY1LjY4ODcxMDQsNTcuODQ4OTk3MyA2NS4zNDQwOTg1LDYxLjExOTcyMjcgQzY1LjAzNTg1NTQsNjMuOTIwNjcyNCA2NC4xMjI5Mjg5LDY2LjYzMjQxNTYgNjIuNTk5MjgwMyw2OS4yNjA5OTA3IEM2MS4wODE4MDc1LDcxLjg4OTQyODYgNTguOTA1MzAzOSw3NC41Nzc0MjkxIDU2LjA4MTg0NjcsNzcuMzMwNzU2MyBDNTIuNzIwNDA1MSw4MC42MDczODMgNDkuNTEwMDY1Nyw4My4xMTY5NzAzIDQ2LjQ1MDgyODYsODQuODY1MjgyMiBDNDMuMzkxNTkxNCw4Ni42MTM3MzE0IDQwLjQzNTI4NSw4Ny41ODg5NjU0IDM3LjU3NTU5NjEsODcuNzkxMTIxMiBDMzQuNzE1OTA3Myw4Ny45OTM0MTQzIDMxLjg5ODQ4ODYsODcuNDM0Mjk0OSAyOS4xMTE0MDAyLDg2LjExNDE3NDUgQzI2LjMyNDE3NDUsODQuNzkzOTE3IDIzLjQ5NDY3ODcsODIuNzM2NDAxMiAyMC42MTY4NzQsNzkuOTI5NTUwMSBMMjAuNjIyOTEyNiw3OS45MzU0NTE1IFoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtZXl2ZDlzeWdmeS0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjA0OTU5MDksMzMuODcxNjM3OCBDMzUuNzY1OTM3NSwzMy44NzE2Mzc4IDM4Ljc3ODY0OTksMzAuOTA4MzMyMSAzOC43Nzg2NDk5LDI3LjI1Mjc4MzIgQzM4Ljc3ODY0OTksMjMuNTk3MzcxNSAzNS43NjU5Mzc1LDIwLjYzNDA2NTggMzIuMDQ5NTkwOSwyMC42MzQwNjU4IEMyOC4zMzMyNDQyLDIwLjYzNDA2NTggMjUuMzIwNTMxOCwyMy41OTczNzE1IDI1LjMyMDUzMTgsMjcuMjUyNzgzMiBDMjUuMzIwNTMxOCwzMC45MDgzMzIxIDI4LjMzMzI0NDIsMzMuODcxNjM3OCAzMi4wNDk1OTA5LDMzLjg3MTYzNzggWiIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC1leXZkOXN5Z2Z5LTMpIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
        networks = ['mainnet', 'testnet'];
        homepage = 'https://unisat.io';
        banance = { confirmed: 0, unconfirmed: 0, total: 0 };
        constructor(e) {
          super(e);
        }
        get wallet() {
          return window.unisat;
        }
        get installed() {
          return !!window.unisat;
        }
        on(e, t) {
          if (!this.wallet) throw Error('Unisat not installed');
          this.wallet.on(e, t);
        }
        removeListener(e, t) {
          if (!this.wallet) throw Error('Unisat not installed');
          this.wallet.removeListener(e, t);
        }
        async connect() {
          this.connected = !1;
          try {
            if (!this.wallet) throw Error('Unisat not installed');
            return (
              await this.requestAccounts(),
              await this.getCurrentInfo(),
              (this.connected = !0),
              !0
            );
          } catch (e) {
            throw e;
          }
        }
        async requestAccounts() {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.requestAccounts();
        }
        async getCurrentInfo() {
          if (!this.wallet) throw Error('Unisat not installed');
          let e = await this.wallet.getAccounts();
          if (e.length) {
            this.address = e[0];
            let [t, n, r] = await Promise.all([
              this.wallet.getPublicKey(),
              this.wallet.getNetwork(),
              this.wallet.getBalance(),
            ]);
            (this.publicKey = t),
              (this.network = n),
              (this.banance = r),
              (this.connected = !0);
          }
        }
        async disconnect() {
          (this.address = void 0),
            (this.publicKey = void 0),
            (this.connected = !1),
            (this.banance = { confirmed: 0, unconfirmed: 0, total: 0 });
        }
        async getAccounts() {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.getAccounts();
        }
        async sendToAddress(e, t) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet?.sendBitcoin(e, t);
        }
        async switchNetwork(e) {
          if (!this.wallet) throw Error('Unisat not installed');
          await this.wallet.switchNetwork(e);
        }
        async getPublicKey() {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.getPublicKey();
        }
        async getBalance() {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.getBalance();
        }
        async signPsbt(e, t) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.signPsbt(e, t);
        }
        async signMessage(e) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.signMessage(e);
        }
        async signPsbts(e, t) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.signPsbts(e, t);
        }
        async pushTx(e) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.pushTx({ rawtx: e });
        }
        async pushPsbt(e) {
          if (!this.wallet) throw Error('Unisat not installed');
          return this.wallet.pushPsbt(e);
        }
      }
      class f extends c {
        id = 'sat20';
        name = 'SAT20';
        logo =
          'data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwNy41OCAyMDguMDIiPjxwYXRoIGQ9Ik0yMjcsMTc2Ljc4Yy04LjE0LDQuMTYtMTYuMjcsOC4yMy0yMy42NCwxMy44M2ExMDIuNjUsMTAyLjY1LDAsMCwwLTI5LDM0LjgsMTAwLjUxLDEwMC41MSwwLDAsMC0xMS41NCw0NS41Yy0uMjEsMTEuODktNC4xLDIyLjQ2LTE0LDI5LjUzLTEyLjUzLDguOTQtMjUuMjQsMTAuMi0zOS4yLDEuODMtMTIuNzEtNy42MS0xOC43NS0yMy41My0xNS4xLTM3LjcsMy43MS0xNC4zNiwxNS4yMS0yNC40LDI5LjY5LTI1LjY3LDkuMjEtLjgxLDE4LjE3LTIuMDcsMjUuNTYtOC40MiwxMC44My05LjMyLDE1LjA5LTIxLjA2LDExLjYyLTM0Ljg1LTMuNjctMTQuNjMtMTMuNTYtMjMuMjMtMjguNDQtMjUuODYtNy0xLjI0LTE0LjIxLTEuMDgtMjAuNzctNC42NS0xMi4zLTYuNjctMTguNzMtMTcuMDYtMTguNTgtMzAuNzUuMTctMTUuNDksOC0yNi43MiwyMi41OC0zMi4xMSwxMy4wOC00LjgzLDI1LjM5LTIuMzIsMzUuNjEsNy4zOCw3LjU3LDcuMTgsMTAuNjUsMTYuNDUsMTEuMjIsMjYuODMsMSwxNy45MywxMy42OCwzMC41OCwzMi4xMiwzMi40OCwxNS42MiwxLjYxLDMxLjUyLTEwLDM1LjU0LTI2LjE0QTc4LDc4LDAsMCwwLDIzMi4xMSwxMzFjMS4wOS0xMi42LDEwLjY5LTI1LjYyLDIyLjkxLTI4Ljc4LDcuODUtMiwxNi4yOC0zLDI0LjI2LjY2LTEuNDMsNS42OS01LjU4LDkuODItOC40MSwxNC43Mi0zLjI1LDEuMzYtNi44NS44OS0xMC4xOSwyLjEtNy42OCwyLjc4LTExLjUyLDkuMDktMTAuMDcsMTcuMTQuMzQsMS45NCwxLjQxLDMuNzcuODgsNS44NC05LjQ5LDkuMjEtMTYuMDUsMjAuNTUtMjMsMzEuNkMyMjgsMTc1LjA2LDIyNy43NywxNzYuMDksMjI3LDE3Ni43OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05My40NSAtOTkuODcpIiBmaWxsPSIjOTQ1ZWY4Ii8+PHBhdGggZD0iTTE4OC44MywyNTAuODVhNTUuNzIsNTUuNzIsMCwwLDEsNTYuNTEtNTUuNzNjMzIuMDkuMjUsNTUuMjksMjYuNiw1NS42Niw1Ni41My4zOCwzMC45LTI1LjMxLDU2LjExLTU2LjMzLDU2LjFDMjEzLjMyLDMwNy43NCwxODguODIsMjgyLjc3LDE4OC44MywyNTAuODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMuNDUgLTk5Ljg3KSIgZmlsbD0iIzllNGVmNSIvPjxwYXRoIGQ9Ik0yNzAuODIsMTE3LjQ1YzEuMTktNS44Miw1LjQ1LTkuODYsOC40Ni0xNC42MiwyMC43Nyw3LjE2LDI4LjYzLDM1LDE0Ljg2LDUyLjM1LTcuMjgsOS4xOC0xNi42MSwxMy44Ni0yOC4zNSwxNC0xMy4zOS4xMi0yNi4yNiwzLjExLTM4LjgsNy42NC0uMTUtNi4xMSw0LjY2LTkuNzEsNy40Mi0xNC4yOCwzLjQyLTUuNjYsNy42OC0xMC44LDExLjQxLTE2LjI3LDEuMzEtMS45MiwyLjYtMy40NCw1LjEzLTMuMTksMywyLjU4LDYuMDcsNS4wOCw5LjkyLDYuNDZhMTUuNjUsMTUuNjUsMCwwLDAsMTkuNTctNy4zYzQtNy41NywyLjA4LTE1Ljg1LTQuOC0yMC43NUMyNzMuOTQsMTIwLjI0LDI3MS40OSwxMTkuOSwyNzAuODIsMTE3LjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjQ1IC05OS44NykiIGZpbGw9IiM5ZTRlZjUiLz48cGF0aCBkPSJNMjcwLjgyLDExNy40NWM0LjI1LDIuMjEsOC41MSw0LjMzLDEwLjg4LDguOTQsMy40MSw2LjY2LDIuNywxNC0yLjEzLDE5LjQxLTUuMTUsNS43Ni0xMi40Miw3LjY5LTE5LjM1LDQuNzQtMy43Mi0xLjU4LTcuOC0zLTkuMjctNy41LTEuNjUtNS44NS0zLjMxLTExLjY1LjI1LTE3LjQ5QzI1NS43OSwxMTgsMjYyLjg5LDExNi43OCwyNzAuODIsMTE3LjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjQ1IC05OS44NykiIGZpbGw9IiNmY2ZiZmUiLz48cGF0aCBkPSJNMTI4LjI0LDI1NS44MmExNy4xNywxNy4xNywwLDAsMS0uNTIsMzQuMzRjLTkuMDctLjIxLTE3LjIyLTYuNTMtMTcuMjgtMTcuMjlDMTEwLjM5LDI2My40NiwxMTguNjgsMjU1LjYsMTI4LjI0LDI1NS44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05My40NSAtOTkuODcpIiBmaWxsPSIjZmNmYmZlIi8+PHBhdGggZD0iTTExMC45MiwxMzQuNDlhMTcuNTEsMTcuNTEsMCwwLDEsMTctMTcuMzNjOS4xOC0uMSwxNy4xOCw3Ljg2LDE3LjI2LDE3LjE3LjA4LDkuNjEtOCwxNy44LTE3LjM1LDE3LjYyQTE3LjU3LDE3LjU3LDAsMCwxLDExMC45MiwxMzQuNDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMuNDUgLTk5Ljg3KSIgZmlsbD0iI2ZjZmJmZSIvPjwvc3ZnPg==';
        networks = ['mainnet', 'testnet'];
        homepage = 'https://sat20.org';
        banance = { confirmed: 0, unconfirmed: 0, total: 0 };
        constructor(e) {
          super(e);
        }
        get wallet() {
          return window.sat20;
        }
        get installed() {
          return !!window.sat20;
        }
        on(e, t) {
          if (!this.wallet) throw Error('SAT20 not installed');
          this.wallet.on(e, t);
        }
        removeListener(e, t) {
          if (!this.wallet) throw Error('SAT20 not installed');
          this.wallet.removeListener(e, t);
        }
        async connect() {
          this.connected = !1;
          try {
            if (!this.wallet) throw Error('SAT20 not installed');
            return (
              await this.requestAccounts(),
              await this.getCurrentInfo(),
              (this.connected = !0),
              !0
            );
          } catch (e) {
            throw e;
          }
        }
        async requestAccounts() {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.requestAccounts();
        }
        async getCurrentInfo() {
          if (!this.wallet) throw Error('SAT20 not installed');
          let e = await this.wallet.getAccounts();
          if (e.length) {
            this.address = e[0];
            let [t, n, r] = await Promise.all([
              this.wallet.getPublicKey(),
              this.wallet.getNetwork(),
              this.wallet.getBalance(),
            ]);
            (this.publicKey = t),
              (this.network = n),
              (this.banance = r),
              (this.connected = !0);
          }
        }
        async disconnect() {
          (this.address = void 0),
            (this.publicKey = void 0),
            (this.connected = !1),
            (this.banance = { confirmed: 0, unconfirmed: 0, total: 0 });
        }
        async getAccounts() {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.getAccounts();
        }
        async sendToAddress(e, t) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet?.sendBitcoin(e, t);
        }
        async switchNetwork(e) {
          if (!this.wallet) throw Error('SAT20 not installed');
          await this.wallet.switchNetwork(e);
        }
        async getPublicKey() {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.getPublicKey();
        }
        async getBalance() {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.getBalance();
        }
        async signPsbt(e, t) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.signPsbt(e, t);
        }
        async signMessage(e) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.signMessage(e);
        }
        async signPsbts(e, t) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.signPsbts(e, t);
        }
        async pushTx(e) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.pushTx({ rawtx: e });
        }
        async pushPsbt(e) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.pushPsbt(e);
        }
        async addAccounts(e) {
          if (!this.wallet) throw Error('SAT20 not installed');
          return this.wallet.addAccounts(e);
        }
      }
      class h extends c {
        id = 'okx';
        name = 'OKX';
        logo =
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+Cgk8ZyBpZD0iXzIxODczODEzMjM4NTYiPgoJCTxyZWN0IHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiPjwvcmVjdD4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0NjMsMTAxNWgtNDA0Yy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxdi00MDQgICAgIEMxNDk0LDEwMjksMTQ4MCwxMDE1LDE0NjMsMTAxNXoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5Niw1NDlINTkyYy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxVjU4MEMxMDI3LDU2MywxMDEzLDU0OSw5OTYsNTQ5eiI+PC9wYXRoPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTkzMCw1NDloLTQwNGMtMTcsMC0zMSwxNC0zMSwzMXY0MDRjMCwxNywxNCwzMSwzMSwzMWg0MDRjMTcsMCwzMS0xNCwzMS0zMVY1ODAgICAgIEMxOTYxLDU2MywxOTQ3LDU0OSwxOTMwLDU0OXoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTk5NiwxNDgySDU5MmMtMTcsMC0zMSwxNC0zMSwzMXY0MDRjMCwxNywxNCwzMSwzMSwzMWg0MDRjMTcsMCwzMS0xNCwzMS0zMXYtNDA0ICAgICBDMTAyNywxNDk2LDEwMTMsMTQ4Miw5OTYsMTQ4MnoiPjwvcGF0aD4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE5MzAsMTQ4MmgtNDA0Yy0xNywwLTMxLDE0LTMxLDMxdjQwNGMwLDE3LDE0LDMxLDMxLDMxaDQwNGMxNywwLDMxLTE0LDMxLTMxdi00MDQgICAgIEMxOTYxLDE0OTYsMTk0NywxNDgyLDE5MzAsMTQ4MnoiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==';
        networks = ['mainnet'];
        homepage =
          'https://www.okx.com/web3/build/docs/sdks/chains/bitcoin/provider';
        banance = { confirmed: 0, unconfirmed: 0, total: 0 };
        constructor(e) {
          super(e), (this.network = 'mainnet');
        }
        get wallet() {
          return window.okxwallet?.bitcoin;
        }
        get installed() {
          return !!window.okxwallet;
        }
        on(e, t) {
          'mainnet' === this.network && this.wallet?.on(e, t);
        }
        async connect() {
          this.connected = !1;
          try {
            if (!this.wallet) throw Error('OkxWallet not installed');
            let e = await this.wallet.connect();
            (this.connected = !0),
              (this.address = e.address),
              (this.publicKey = e.publicKey),
              await this.switchNetwork('mainnet'),
              await this.getCurrentInfo();
          } catch (e) {
            throw e;
          }
          return this.connected;
        }
        async getCurrentInfo() {
          if (!this.wallet) throw Error('OkxWallet not installed');
          let e = await this.wallet.getAccounts();
          if (e.length) {
            this.address = e[0];
            let [t, n, r] = await Promise.all([
              this.wallet.getPublicKey(),
              this.wallet.getNetwork(),
              this.wallet.getBalance(),
            ]);
            (this.publicKey = t),
              (this.network = n),
              (this.banance = r),
              (this.connected = !0);
          }
        }
        async disconnect() {
          (this.address = void 0),
            (this.publicKey = void 0),
            (this.connected = !1),
            (this.banance = { confirmed: 0, unconfirmed: 0, total: 0 });
        }
        async getAccounts() {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.getAccounts();
        }
        async getNetwork() {
          return this.network;
        }
        async getPublicKey() {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.getPublicKey();
        }
        async getBalance() {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.getBalance();
        }
        async sendToAddress(e, t) {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet?.sendBitcoin(e, t);
        }
        async switchNetwork(e) {
          if (!this.wallet) throw Error('Unisat not installed');
          switch (e) {
            case 'mainnet':
              break;
            case 'testnet':
              throw Error('no implementation for okx testnet');
          }
          this.network = e;
        }
        async signPsbt(e, t) {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.signPsbt(e, t);
        }
        async signMessage(e) {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.signMessage(e);
        }
        async signPsbts(e, t) {
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.signPsbts(e, t);
        }
        async pushTx(e) {
          if ('mainnet' !== this.network)
            throw Error("Can't get accounts on testnet");
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.pushTx(e);
        }
        async pushPsbt(e) {
          if ('mainnet' !== this.network)
            throw Error("Can't get accounts on testnet");
          if (!this.wallet) throw Error('OkxWallet not installed');
          return this.wallet.pushPsbt(e);
        }
      }
      class p {
        local_storage_key = '_btc_connector_id_1';
        local_disconnect_key = '_btc_disconnect_status_1';
        connectorId;
        localConnectorId;
        disConnectStatus = !1;
        connected = !1;
        address;
        publicKey;
        network;
        balance = { confirmed: 0, unconfirmed: 0, total: 0 };
        connectors;
        _connector;
        get connector() {
          if (this.connectorId)
            return this.connectors.find(
              (e) => e.id === this.connectorId && e.instance.installed,
            )?.instance;
        }
        constructor({ network: e = 'mainnet' }) {
          this.network = e;
          let t = 'ordx.market' !== window.location.hostname;
          (this.connectors = [
            { id: 'unisat', instance: new d(this.network) },
            { id: 'okx', instance: new h(this.network) },
          ]),
            t &&
              this.connectors.unshift({
                id: 'sat20',
                instance: new f(this.network),
              }),
            (this.localConnectorId =
              localStorage.getItem(this.local_storage_key) || void 0),
            (this.disConnectStatus =
              '1' == localStorage.getItem(this.local_disconnect_key));
        }
        switchConnector(e) {
          let t = this.connectors.find(
            (t) => t.id === e && t.instance.installed,
          )?.instance;
          if (!t) {
            this.reset(),
              console.error('switchConnector: Connector not found: ' + e);
            return;
          }
          return (this.connectorId = e), t;
        }
        async connect() {
          if (!this.connector) {
            this.reset(), console.error('connect: Connector not found');
            return;
          }
          return (
            (this.connected = await this.connector.connect()),
            this.connected &&
              ((this.address = this.connector.address),
              (this.publicKey = this.connector.publicKey),
              (this.balance = this.connector.banance),
              (this.network = this.connector.network)),
            localStorage.setItem(
              this.local_storage_key,
              this.connectorId || '',
            ),
            localStorage.removeItem(this.local_disconnect_key),
            this.connected
          );
        }
        async getCurrentInfo() {
          if (!this.connector) {
            this.reset(), console.error('getCurrentInfo: Connector not found');
            return;
          }
          try {
            this.connector.getCurrentInfo &&
              (await this.connector.getCurrentInfo(),
              (this.address = this.connector.address),
              (this.publicKey = this.connector.publicKey),
              (this.network = this.connector.network),
              (this.balance = this.connector.banance),
              (this.connected = this.connector.connected));
          } catch (e) {
            throw e;
          }
        }
        async check() {
          if (this.disConnectStatus) return !1;
          if (
            ((this.connectorId = this.localConnectorId || this.connectorId),
            !this.connectors.find(
              (e) => e.id === this.connectorId && e.instance.installed,
            )?.instance)
          ) {
            this.reset(), console.error('check: Connector not found');
            return;
          }
          try {
            await this.getCurrentInfo();
          } catch (e) {
            console.error(e);
          }
        }
        async disconnect() {
          if (!this.connector) {
            this.reset(), console.error('disconnect: Connector not found');
            return;
          }
          await this.connector.disconnect(), this.reset();
        }
        async getAccounts() {
          if (!this.connector) {
            this.reset(), console.error('getAccounts: Connector not found');
            return;
          }
          return this.connector.getAccounts();
        }
        reset() {
          (this.connectorId = void 0),
            (this.connected = !1),
            (this.address = void 0),
            (this.publicKey = void 0),
            (this.balance = { confirmed: 0, unconfirmed: 0, total: 0 }),
            localStorage.setItem(this.local_disconnect_key, '1');
        }
        async getNetwork() {
          if (!this.connector) {
            this.reset(), console.error('getNetwork: Connector not found');
            return;
          }
          return this.connector.network;
        }
        async switchNetwork(e) {
          if (!this.connector) {
            this.reset(), console.error('switchNetwork: Connector not found');
            return;
          }
          await this.connector.switchNetwork(e),
            (this.network = e),
            await this.getCurrentInfo();
        }
        async sendToAddress(e, t) {
          if (!this.connector) {
            this.reset(), console.error('sendToAddress: Connector not found');
            return;
          }
          if (t <= 0) {
            console.error('sendToAddress: Invalid amount');
            return;
          }
          return this.connector.sendToAddress(e, t);
        }
        async signMessage(e, t) {
          if (!this.connector) {
            this.reset(), console.error('signMessage: Connector not found');
            return;
          }
          return this.connector.signMessage(e);
        }
        async signPsbt(e, t) {
          if (!this.connector) {
            this.reset(), console.error('signPsbt: Connector not found');
            return;
          }
          return this.connector.signPsbt(e, t);
        }
        async signPsbts(e, t) {
          if (!this.connector) {
            this.reset(), console.error('signPsbts: Connector not found');
            return;
          }
          return this.connector.signPsbts(e, t);
        }
        async pushTx(e) {
          if (!this.connector) {
            this.reset(), console.error('pushTx: Connector not found');
            return;
          }
          return this.connector.pushTx(e);
        }
        async pushPsbt(e) {
          if (!this.connector) {
            this.reset(), console.error('pushPsbt: Connector not found');
            return;
          }
          return this.connector.pushPsbt(e);
        }
        on(e, t) {
          this.connector &&
            (this.connector instanceof f
              ? this.connector.on(e, t)
              : this.connector instanceof d
                ? this.connector.on(e, t)
                : this.connector instanceof h && this.connector.on(e, t));
        }
        removeListener(e, t) {
          if (this.connector) {
            if (this.connector instanceof f)
              this.connector.removeListener(e, t);
            else if (this.connector instanceof d)
              this.connector.removeListener(e, t);
            else if (this.connector instanceof h) return;
          }
        }
        addAccounts(e) {
          if (!this.connector)
            return (
              console.error('addAccounts: Connector not found'),
              this.reset(),
              !1
            );
          if (this.connector instanceof f) this.connector.addAccounts(e);
          else if (this.connector instanceof d)
            return console.error('no implement'), !1;
          else if (this.connector instanceof h)
            return console.error('no implement'), !1;
        }
      }
      var g = {
          initStatus: !1,
          modalVisible: !1,
          balance: { confirmed: 0, unconfirmed: 0, total: 0 },
          connectors: [],
          publicKey: '',
          address: '',
          connected: !1,
          network: 'mainnet',
        },
        m = (0, o.Ue)()(
          (0, s.mW)((e, t) => ({
            ...g,
            setModalVisible: (t) => {
              e(() => ({ modalVisible: t }));
            },
            init: (t = {}) => {
              try {
                let { network: n = 'mainnet' } = t,
                  r = new p(t);
                (window.btcWallet = r),
                  e(() => ({
                    btcWallet: r,
                    network: n,
                    connector: r.connector,
                    localConnectorId: r.localConnectorId,
                    connectors: r.connectors.map((e) => ({
                      id: e.id,
                      name: e.instance.name,
                      logo: e.instance.logo,
                      connector: e.instance,
                      get installed() {
                        return e.instance.installed;
                      },
                    })),
                    initStatus: !0,
                  }));
              } catch (t) {
                throw (
                  (console.error('Error initializing Wallet', t),
                  e(() => ({ initStatus: !1 })),
                  t)
                );
              }
            },
            switchConnector(n) {
              let r = t().btcWallet;
              if (!r) throw Error('Wallet not initialized');
              r.switchConnector(n),
                e(() => ({
                  connectorId: n,
                  connector: r.connector,
                  localConnectorId: r.localConnectorId,
                }));
            },
            check: async () => {
              try {
                let n = t().btcWallet;
                if (!n) throw Error('Wallet not initialized');
                await n.check();
                let r = n.address,
                  i = n.publicKey,
                  o = n.balance,
                  s = n.connected,
                  a = n.network,
                  l = n.localConnectorId;
                e((e) => ({
                  publicKey: i,
                  address: r,
                  balance: o,
                  connected: s,
                  network: a,
                  localConnectorId: l,
                }));
              } catch (e) {
                throw e;
              }
            },
            connect: async () => {
              try {
                let n = t().btcWallet;
                if (!n) throw Error('Wallet not initialized');
                await n.connect();
                let r = n.address,
                  i = n.publicKey,
                  o = n.balance,
                  s = n.connected,
                  a = n.network,
                  l = n.localConnectorId;
                e((e) => ({
                  publicKey: i,
                  address: r,
                  balance: o,
                  connected: s,
                  network: a,
                  localConnectorId: l,
                }));
              } catch (e) {
                throw (console.error('Error connecting Wallet', e), e);
              }
            },
            disconnect: async () => {
              let { btcWallet: n } = t();
              if (!n) throw Error('Wallet not initialized');
              await n.disconnect(),
                e((e) => ({
                  balance: { confirmed: 0, unconfirmed: 0, total: 0 },
                  connectorId: void 0,
                  publicKey: '',
                  address: '',
                  initStatus: !1,
                  connected: !1,
                  network: 'mainnet',
                }));
            },
            switchNetwork: async () => {
              try {
                let n = t().btcWallet;
                if (!n) throw Error('Wallet not initialized');
                let r = 'testnet' === t().network ? 'mainnet' : 'testnet';
                await n.switchNetwork(r);
                let i = await n.getNetwork(),
                  o = n.address,
                  s = n.publicKey,
                  a = n.balance,
                  l = n.connected,
                  u = n.localConnectorId;
                e((e) => ({
                  publicKey: s,
                  address: o,
                  balance: a,
                  connected: l,
                  localConnectorId: u,
                  network: i,
                }));
              } catch (e) {
                throw e;
              }
            },
          })),
        ),
        v = ({
          config: { network: e = 'mainnet' } = {},
          theme: t = 'dark',
          isSwitchNetwork: n = !1,
          ui: {
            connectClass: i = '',
            disconnectClass: o = '',
            modalClass: s = '',
            modalZIndex: c = 100,
          } = {},
          text: {
            connectText: d = 'Connect',
            disconnectText: f = 'Disconnect',
            modalTitle: h = 'Select Wallet',
          } = {},
          onConnectSuccess: p,
          onConnectError: g,
          onDisconnectSuccess: v,
          onDisconnectError: y,
          children: w,
        }) => {
          let {
              connect: b,
              modalVisible: M,
              setModalVisible: x,
              connectors: T,
              connected: N,
              address: I,
              init: D,
              disconnect: E,
              initStatus: C,
              btcWallet: L,
              switchNetwork: j,
              switchConnector: A,
            } = m((e) => e),
            S = async (t) => {
              A(t);
              try {
                n && (await L?.switchNetwork(e)), b(), L && p?.(L);
              } catch (e) {
                g?.(e);
              } finally {
                x(!1);
              }
            },
            k = async () => {
              try {
                v?.(), E();
              } catch (e) {
                y?.(e);
              }
            },
            z = (0, r.useMemo)(
              () =>
                T?.map((e) => ({
                  id: e.id,
                  name: e.name,
                  logo: e.logo,
                  get installed() {
                    return e.installed;
                  },
                })) || [],
              [T],
            );
          return (
            (0, r.useEffect)(() => {
              D({ network: e });
            }, []),
            (0, r.useEffect)(() => {
              D({ network: e });
            }, [e]),
            r.createElement(
              r.Fragment,
              null,
              N
                ? w ||
                    r.createElement(
                      'button',
                      {
                        onClick: k,
                        className: `bg-clip-text text-transparent border border-gray-300 rounded-xl leading-none h-10 px-4 hover:border-yellow-500 flex justify-center items-center ${'dark' === t ? 'bg-gradient-to-r from-pink-500 to-violet-500' : 'bg-gradient-to-r from-blue-500 to-green-500'} ${o}`,
                      },
                      r.createElement(
                        'span',
                        { className: 'mr-1' },
                        l(I, 4, '***'),
                      ),
                      r.createElement(u, {
                        className: `${'dark' === t ? 'text-white' : 'text-black'}`,
                      }),
                    )
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      'button',
                      {
                        onClick: () => {
                          x(!0);
                        },
                        className: `bg-clip-text text-transparent border  rounded-xl h-10 px-4 leading-none hover:border-yellow-500 ${'dark' === t ? 'bg-gradient-to-r from-pink-500 to-violet-500 border-gray-600' : 'bg-gradient-to-r from-blue-500 to-green-500 border-gray-300'} ${i}`,
                      },
                      d,
                    ),
                    r.createElement(a, {
                      theme: t,
                      className: s,
                      zIndex: c,
                      title: h,
                      onClose: () => x(!1),
                      visible: M,
                      wallets: z,
                      onClick: S,
                    }),
                  ),
            )
          );
        };
    },
    44839: function (e, t, n) {
      'use strict';
      t.Z = function () {
        for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = '';
              if ('string' == typeof t || 'number' == typeof t) i += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++)
                    t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                } else for (r in t) t[r] && (i && (i += ' '), (i += r));
              }
              return i;
            })(e)) &&
            (r && (r += ' '), (r += t));
        return r;
      };
    },
    66323: function (e, t, n) {
      'use strict';
      n.d(t, {
        t: function () {
          return r;
        },
      });
      let r = new Set(['opacity', 'clipPath', 'filter', 'transform']);
    },
    11298: function (e, t, n) {
      'use strict';
      n.d(t, {
        v: function () {
          return eA;
        },
      });
      var r = n(80557),
        i = n(26019);
      let o = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        s = (e) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: 'keyframes', duration: 0.8 },
        l = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (e, { keyframes: t }) =>
          t.length > 2
            ? a
            : i.G.has(e)
              ? e.startsWith('scale')
                ? s(t[1])
                : o
              : l;
      var c = n(69792),
        d = n(565);
      let f = { current: !1 },
        h = (e) => null !== e;
      function p(e, { repeat: t, repeatType: n = 'loop' }, r) {
        let i = e.filter(h),
          o = t && 'loop' !== n && t % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== r ? r : i[o];
      }
      var g = n(86219),
        m = n(63078);
      function v(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      var y = n(69276),
        w = n(59993),
        b = n(23653),
        M = n(19047),
        x = n(83646);
      let T = (e, t) =>
        'zIndex' !== t &&
        !!(
          'number' == typeof e ||
          Array.isArray(e) ||
          ('string' == typeof e &&
            (x.P.test(e) || '0' === e) &&
            !e.startsWith('url('))
        );
      class N {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = 'keyframes',
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: o = 'loop',
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = w.X.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, b.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = w.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: r,
            velocity: i,
            delay: o,
            onComplete: s,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, n, r) {
              let i = e[0];
              if (null === i) return !1;
              if ('display' === t || 'visibility' === t) return !0;
              let o = e[e.length - 1],
                s = T(i, t),
                a = T(o, t);
              return (
                (0, M.K)(
                  s === a,
                  `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`,
                ),
                !!s &&
                  !!a &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let n = 0; n < e.length; n++)
                      if (e[n] !== t) return !0;
                  })(e) ||
                    ('spring' === n && r))
              );
            })(e, n, r, i)
          ) {
            if (f.current || !o) {
              null == a || a(p(e, this.options, t)),
                null == s || s(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var I = n(83476);
      function D(e, t, n) {
        let r = Math.max(t - 5, 0);
        return (0, I.R)(n - e(r), t - r);
      }
      var E = n(51506);
      function C(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let L = ['duration', 'bounce'],
        j = ['stiffness', 'damping', 'mass'];
      function A(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function S({ keyframes: e, restDelta: t, restSpeed: n, ...i }) {
        let o;
        let s = e[0],
          a = e[e.length - 1],
          l = { done: !1, value: s },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: p,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!A(e, j) && A(e, L)) {
              let n = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: i = 1,
              }) {
                let o, s;
                (0, M.K)(
                  e <= (0, r.w)(10),
                  'Spring duration must be 10 seconds or less',
                );
                let a = 1 - t;
                (a = (0, E.u)(0.05, 1, a)),
                  (e = (0, E.u)(0.01, 10, (0, r.X)(e))),
                  a < 1
                    ? ((o = (t) => {
                        let r = t * a,
                          i = r * e;
                        return 0.001 - ((r - n) / C(t, a)) * Math.exp(-i);
                      }),
                      (s = (t) => {
                        let r = t * a * e,
                          i = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          s = C(Math.pow(t, 2), a);
                        return (
                          ((r * n + n - i) *
                            Math.exp(-r) *
                            (-o(t) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((o = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (s = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let l = (function (e, t, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                  return r;
                })(o, s, 5 / e);
                if (((e = (0, r.w)(e)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(l, 2) * i;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(i * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...i, velocity: -(0, r.X)(i.velocity || 0) }),
          g = h || 0,
          m = c / (2 * Math.sqrt(u * d)),
          v = a - s,
          y = (0, r.X)(Math.sqrt(u / d)),
          w = 5 > Math.abs(v);
        if ((n || (n = w ? 0.01 : 2), t || (t = w ? 0.005 : 0.5), m < 1)) {
          let e = C(y, m);
          o = (t) =>
            a -
            Math.exp(-m * y * t) *
              (((g + m * y * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
        } else if (1 === m)
          o = (e) => a - Math.exp(-y * e) * (v + (g + y * v) * e);
        else {
          let e = y * Math.sqrt(m * m - 1);
          o = (t) => {
            let n = Math.exp(-m * y * t),
              r = Math.min(e * t, 300);
            return (
              a -
              (n * ((g + m * y * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
            );
          };
        }
        return {
          calculatedDuration: (p && f) || null,
          next: (e) => {
            let i = o(e);
            if (p) l.done = e >= f;
            else {
              let s = 0;
              m < 1 && (s = 0 === e ? (0, r.w)(g) : D(o, e, i));
              let u = Math.abs(s) <= n,
                c = Math.abs(a - i) <= t;
              l.done = u && c;
            }
            return (l.value = l.done ? a : i), l;
          },
        };
      }
      function k({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let h = e[0],
          p = { done: !1, value: h },
          g = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          m = (e) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - e) < Math.abs(l - e)
                  ? a
                  : l,
          v = n * t,
          y = h + v,
          w = void 0 === s ? y : s(y);
        w !== y && (v = w - h);
        let b = (e) => -v * Math.exp(-e / r),
          M = (e) => w + b(e),
          x = (e) => {
            let t = b(e),
              n = M(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? w : n);
          },
          T = (e) => {
            g(p.value) &&
              ((d = e),
              (f = S({
                keyframes: [p.value, m(p.value)],
                velocity: D(M, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), x(e), T(e)),
              void 0 !== d && e >= d)
                ? f.next(e - d)
                : (t || x(e), p);
            },
          }
        );
      }
      let z = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function P(e, t, n, r) {
        if (e === t && n === r) return y.Z;
        let i = (t) =>
          (function (e, t, n, r, i) {
            let o, s;
            let a = 0;
            do (o = z((s = t + (n - t) / 2), r, i) - e) > 0 ? (n = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : z(i(e), t, r));
      }
      let O = P(0.42, 0, 1, 1),
        U = P(0, 0, 0.58, 1),
        Y = P(0.42, 0, 0.58, 1),
        V = (e) => Array.isArray(e) && 'number' != typeof e[0];
      var W = n(68536),
        Q = n(73108),
        R = n(62718);
      let F = P(0.33, 1.53, 0.69, 0.99),
        Z = (0, R.M)(F),
        G = (0, Q.o)(Z),
        B = {
          linear: y.Z,
          easeIn: O,
          easeInOut: Y,
          easeOut: U,
          circIn: W.Z7,
          circInOut: W.X7,
          circOut: W.Bn,
          backIn: Z,
          backInOut: G,
          backOut: F,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * Z(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        K = (e) => {
          if (Array.isArray(e)) {
            (0, M.k)(
              4 === e.length,
              'Cubic bezier arrays must contain four numerical values.',
            );
            let [t, n, r, i] = e;
            return P(t, n, r, i);
          }
          return 'string' == typeof e
            ? ((0, M.k)(void 0 !== B[e], `Invalid easing type '${e}'`), B[e])
            : e;
        };
      var H = n(89654),
        J = n(33217),
        $ = n(75004);
      function X(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
            ? t
            : n < 2 / 3
              ? e + (t - e) * (2 / 3 - n) * 6
              : e;
      }
      var _ = n(45778),
        q = n(91583),
        ee = n(598);
      function et(e, t) {
        return (n) => (n > 0 ? t : e);
      }
      let en = (e, t, n) => {
          let r = e * e,
            i = n * (t * t - r) + r;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        er = [_.$, q.m, ee.J],
        ei = (e) => er.find((t) => t.test(e));
      function eo(e) {
        let t = ei(e);
        if (
          ((0, M.K)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !t)
        )
          return !1;
        let n = t.parse(e);
        return (
          t === ee.J &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  a = 2 * n - r;
                (i = X(a, r, e + 1 / 3)),
                  (o = X(a, r, e)),
                  (s = X(a, r, e - 1 / 3));
              } else i = o = s = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let es = (e, t) => {
        let n = eo(e),
          r = eo(t);
        if (!n || !r) return et(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = en(n.red, r.red, e)),
          (i.green = en(n.green, r.green, e)),
          (i.blue = en(n.blue, r.blue, e)),
          (i.alpha = (0, $.t)(n.alpha, r.alpha, e)),
          q.m.transform(i)
        );
      };
      var ea = n(50146),
        el = n(61534);
      let eu = new Set(['none', 'hidden']);
      function ec(e, t) {
        return (n) => (0, $.t)(e, t, n);
      }
      function ed(e) {
        return 'number' == typeof e
          ? ec
          : 'string' == typeof e
            ? (0, el.t)(e)
              ? et
              : ea.$.test(e)
                ? es
                : ep
            : Array.isArray(e)
              ? ef
              : 'object' == typeof e
                ? ea.$.test(e)
                  ? es
                  : eh
                : et;
      }
      function ef(e, t) {
        let n = [...e],
          r = n.length,
          i = e.map((e, n) => ed(e)(e, t[n]));
        return (e) => {
          for (let t = 0; t < r; t++) n[t] = i[t](e);
          return n;
        };
      }
      function eh(e, t) {
        let n = { ...e, ...t },
          r = {};
        for (let i in n)
          void 0 !== e[i] && void 0 !== t[i] && (r[i] = ed(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in r) n[t] = r[t](e);
          return n;
        };
      }
      let ep = (e, t) => {
        let n = x.P.createTransformer(t),
          r = (0, x.V)(e),
          i = (0, x.V)(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (eu.has(e) && !i.values.length) || (eu.has(t) && !r.values.length)
            ? eu.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e)
            : (0, H.z)(
                ef(
                  (function (e, t) {
                    var n;
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      let s = t.types[o],
                        a = e.indexes[s][i[s]],
                        l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
                      (r[o] = l), i[s]++;
                    }
                    return r;
                  })(r, i),
                  i.values,
                ),
                n,
              )
          : ((0, M.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            et(e, t));
      };
      function eg(e, t, n) {
        return 'number' == typeof e &&
          'number' == typeof t &&
          'number' == typeof n
          ? (0, $.t)(e, t, n)
          : ed(e)(e, t);
      }
      function em({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = 'easeInOut',
      }) {
        let i = V(r) ? r.map(K) : K(r),
          o = { done: !1, value: t[0] },
          s = (function (e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
            let o = e.length;
            if (
              ((0, M.k)(
                o === t.length,
                'Both input and output ranges must be the same length',
              ),
              1 === o)
            )
              return () => t[0];
            if (2 === o && e[0] === e[1]) return () => t[1];
            e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let s = (function (e, t, n) {
                let r = [],
                  i = n || eg,
                  o = e.length - 1;
                for (let n = 0; n < o; n++) {
                  let o = i(e[n], e[n + 1]);
                  if (t) {
                    let e = Array.isArray(t) ? t[n] || y.Z : t;
                    o = (0, H.z)(e, o);
                  }
                  r.push(o);
                }
                return r;
              })(t, r, i),
              a = s.length,
              l = (t) => {
                let n = 0;
                if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                let r = (0, J.Y)(e[n], e[n + 1], t);
                return s[n](r);
              };
            return n ? (t) => l((0, E.u)(e[0], e[o - 1], t)) : l;
          })(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let r = 1; r <= t; r++) {
                        let i = (0, J.Y)(0, t, r);
                        e.push((0, $.t)(n, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(i)
                ? i
                : t.map(() => i || Y).splice(0, t.length - 1),
            },
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = s(t)), (o.done = t >= e), o),
        };
      }
      let ev = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => g.Wi.update(t, !0),
            stop: () => (0, g.Pn)(t),
            now: () =>
              g.frameData.isProcessing ? g.frameData.timestamp : w.X.now(),
          };
        },
        ey = { decay: k, inertia: k, tween: em, keyframes: em, spring: S },
        ew = (e) => e / 100;
      class eb extends N {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.startTime = null),
            (this.state = 'idle'),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                'idle' === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: n,
              element: r,
              keyframes: i,
            } = this.options,
            o = (null == r ? void 0 : r.KeyframeResolver) || b.e;
          (this.resolver = new o(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, n;
          let {
              type: r = 'keyframes',
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0,
            } = this.options,
            l = ey[r] || em;
          l !== em &&
            'number' != typeof e[0] &&
            ((t = (0, H.z)(ew, eg(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          'mirror' === s &&
            (n = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  n = e.next(t);
                for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            'paused' !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: h,
            repeatDelay: g,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(e - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            'finished' === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let w = this.currentTime,
            b = i;
          if (f) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1),
              1 === n && t--,
              (t = Math.min(t, f + 1)) % 2 &&
                ('reverse' === h
                  ? ((n = 1 - n), g && (n -= g / c))
                  : 'mirror' === h && (b = o)),
              (w = (0, E.u)(0, 1, n) * c);
          }
          let M = y ? { done: !1, value: a[0] } : b.next(w);
          s && (M.value = s(M.value));
          let { done: x } = M;
          y ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && x));
          return (
            T && void 0 !== r && (M.value = p(a, this.options, r)),
            m && m(M.value),
            T && this.finish(),
            M
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, r.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, r.w)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: e = ev, onPlay: t, startTime: n } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
              ? 'finished' === this.state && (this.startTime = r)
              : (this.startTime = null != n ? n : this.calcStartTime()),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          (this.state = 'paused'),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          'running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = 'finished');
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      var eM = n(66323);
      let ex = (e) => Array.isArray(e) && 'number' == typeof e[0],
        eT = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        eN = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: eT([0, 0.65, 0.55, 1]),
          circOut: eT([0.55, 0, 1, 0.45]),
          backIn: eT([0.31, 0.01, 0.66, -0.59]),
          backOut: eT([0.33, 1.53, 0.69, 0.99]),
        };
      function eI(e) {
        return eD(e) || eN.easeOut;
      }
      function eD(e) {
        if (e) return ex(e) ? eT(e) : Array.isArray(e) ? e.map(eI) : eN[e];
      }
      let eE = v(() =>
        Object.hasOwnProperty.call(Element.prototype, 'animate'),
      );
      class eC extends N {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: n,
            element: r,
            keyframes: i,
          } = this.options;
          (this.resolver = new m.s(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            n,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var n, r;
          let {
            duration: i = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
            startTime: c,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            'spring' === (r = this.options).type ||
            !(function e(t) {
              return !!(
                !t ||
                ('string' == typeof t && t in eN) ||
                ex(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(r.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: n,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              c = (function (e, t) {
                let n = new eb({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: e[0] },
                  i = [],
                  o = 0;
                for (; !r.done && o < 2e4; )
                  i.push((r = n.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: 'linear',
                };
              })(e, u);
            1 === (e = c.keyframes).length && (e[1] = e[0]),
              (i = c.duration),
              (o = c.times),
              (s = c.ease),
              (a = 'keyframes');
          }
          let d = (function (
            e,
            t,
            n,
            {
              delay: r = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: s = 'loop',
              ease: a,
              times: l,
            } = {},
          ) {
            let u = { [t]: n };
            l && (u.offset = l);
            let c = eD(a);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: r,
                duration: i,
                easing: Array.isArray(c) ? 'linear' : c,
                fill: 'both',
                iterations: o + 1,
                direction: 'reverse' === s ? 'alternate' : 'normal',
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: s,
          });
          return (
            (d.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(p(e, this.options, t)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: o,
              type: a,
              ease: s,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, r.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, r.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.currentTime = (0, r.w)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: n } = t;
          n.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return 'idle';
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return y.Z;
            let { animation: n } = t;
            (n.timeline = e), (n.onfinish = null);
          } else this.pendingTimeline = e;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          'finished' === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            'idle' === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: n,
            duration: i,
            type: o,
            ease: s,
            times: a,
          } = e;
          if ('idle' === t.playState || 'finished' === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: l,
                element: u,
                ...c
              } = this.options,
              d = new eb({
                ...c,
                keyframes: n,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              f = (0, r.w)(this.time);
            e.setWithVelocity(d.sample(f - 10).value, d.sample(f).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: o,
            type: s,
          } = e;
          return (
            eE() &&
            n &&
            eM.t.has(n) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !r &&
            'mirror' !== i &&
            0 !== o &&
            'inertia' !== s
          );
        }
      }
      let eL = v(() => void 0 !== window.ScrollTimeline);
      class ej {
        constructor(e) {
          (this.stop = () => this.runAll('stop')),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!eL() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let n;
                  let r = () => {
                    let { currentTime: r } = t,
                      i = (null === r ? 0 : r.value) / 100;
                    n !== i && e(i), (n = i);
                  };
                  return g.Wi.update(r, !0), () => (0, g.Pn)(r);
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(e) {
          this.setAll('time', e);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(e) {
          this.setAll('speed', e);
        }
        get startTime() {
          return this.getAll('startTime');
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
      let eA =
        (e, t, n, i = {}, o, s) =>
        (a) => {
          let l = (0, c.e)(i, e) || {},
            h = l.delay || i.delay || 0,
            { elapsed: m = 0 } = i;
          m -= (0, r.w)(h);
          let v = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: 'easeOut',
            velocity: t.getVelocity(),
            ...l,
            delay: -m,
            onUpdate: (e) => {
              t.set(e), l.onUpdate && l.onUpdate(e);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: e,
            motionValue: t,
            element: s ? void 0 : o,
          };
          (0, c.r)(l) || (v = { ...v, ...u(e, v) }),
            v.duration && (v.duration = (0, r.w)(v.duration)),
            v.repeatDelay && (v.repeatDelay = (0, r.w)(v.repeatDelay)),
            void 0 !== v.from && (v.keyframes[0] = v.from);
          let y = !1;
          if (
            ((!1 !== v.type && (0 !== v.duration || v.repeatDelay)) ||
              ((v.duration = 0), 0 !== v.delay || (y = !0)),
            (f.current || d.c.skipAnimations) &&
              ((y = !0), (v.duration = 0), (v.delay = 0)),
            y && !s && void 0 !== t.get())
          ) {
            let e = p(v.keyframes, l);
            if (void 0 !== e)
              return (
                g.Wi.update(() => {
                  v.onUpdate(e), v.onComplete();
                }),
                new ej([])
              );
          }
          return !s && eC.supports(v) ? new eC(v) : new eb(v);
        };
    },
    65908: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = 'data-' + (0, n(51580).D)('framerAppearId');
    },
    2087: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var r = n(65908);
      function i(e) {
        return e.props[r.M];
      }
    },
    64572: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          null !== e && 'object' == typeof e && 'function' == typeof e.start
        );
      }
      n.d(t, {
        H: function () {
          return r;
        },
      });
    },
    66925: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return r;
        },
      });
      let r = (e) => Array.isArray(e);
    },
    69792: function (e, t, n) {
      'use strict';
      function r({
        when: e,
        delay: t,
        delayChildren: n,
        staggerChildren: r,
        staggerDirection: i,
        repeat: o,
        repeatType: s,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length;
      }
      function i(e, t) {
        return e[t] || e.default || e;
      }
      n.d(t, {
        e: function () {
          return i;
        },
        r: function () {
          return r;
        },
      });
    },
    34446: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return v;
        },
      });
      var r = n(57437),
        i = n(2265),
        o = n(67797),
        s = n(30458),
        a = n(29791);
      class l extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: n } = e,
          o = (0, i.useId)(),
          s = (0, i.useRef)(null),
          u = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, i.useContext)(a._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: i } = u.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = o;
            let a = document.createElement('style');
            return (
              c && (a.nonce = c),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, 'px !important;\n            height: ')
                    .concat(t, 'px !important;\n            top: ')
                    .concat(r, 'px !important;\n            left: ')
                    .concat(i, 'px !important;\n          }\n        '),
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [n]),
          (0, r.jsx)(l, {
            isPresent: n,
            childRef: s,
            sizeRef: u,
            children: i.cloneElement(t, { ref: s }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: a,
            onExitComplete: l,
            custom: c,
            presenceAffectsLayout: f,
            mode: h,
          } = e,
          p = (0, s.h)(d),
          g = (0, i.useId)(),
          m = (0, i.useMemo)(
            () => ({
              id: g,
              initial: n,
              isPresent: a,
              custom: c,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                l && l();
              },
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            f ? [Math.random()] : [a],
          );
        return (
          (0, i.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [a]),
          i.useEffect(() => {
            a || p.size || !l || l();
          }, [a]),
          'popLayout' === h &&
            (t = (0, r.jsx)(u, { isPresent: a, children: t })),
          (0, r.jsx)(o.O.Provider, { value: m, children: t })
        );
      };
      function d() {
        return new Map();
      }
      var f = n(5050),
        h = n(19047);
      let p = (e) => e.key || '';
      function g(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var m = n(9033);
      let v = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: o,
          initial: a = !0,
          onExitComplete: l,
          presenceAffectsLayout: u = !0,
          mode: d = 'sync',
        } = e;
        (0, h.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let v = (0, i.useMemo)(() => g(t), [t]),
          y = v.map(p),
          w = (0, i.useRef)(!0),
          b = (0, i.useRef)(v),
          M = (0, s.h)(() => new Map()),
          [x, T] = (0, i.useState)(v),
          [N, I] = (0, i.useState)(v);
        (0, m.L)(() => {
          (w.current = !1), (b.current = v);
          for (let e = 0; e < N.length; e++) {
            let t = p(N[e]);
            y.includes(t) ? M.delete(t) : !0 !== M.get(t) && M.set(t, !1);
          }
        }, [N, y.length, y.join('-')]);
        let D = [];
        if (v !== x) {
          let e = [...v];
          for (let t = 0; t < N.length; t++) {
            let n = N[t],
              r = p(n);
            y.includes(r) || (e.splice(t, 0, n), D.push(n));
          }
          'wait' === d && D.length && (e = D), I(g(e)), T(v);
          return;
        }
        let { forceRender: E } = (0, i.useContext)(f.p);
        return (0, r.jsx)(r.Fragment, {
          children: N.map((e) => {
            let t = p(e),
              n = v === N || y.includes(t);
            return (0, r.jsx)(
              c,
              {
                isPresent: n,
                initial: (!w.current || !!a) && void 0,
                custom: n ? void 0 : o,
                presenceAffectsLayout: u,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!M.has(t)) return;
                      M.set(t, !0);
                      let e = !0;
                      M.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == E || E(), I(b.current), l && l());
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    60980: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var r = n(57437),
        i = n(2265),
        o = n(36539),
        s = n(344);
      function a(e) {
        let { children: t, features: n, strict: a = !1 } = e,
          [, u] = (0, i.useState)(!l(n)),
          c = (0, i.useRef)(void 0);
        if (!l(n)) {
          let { renderer: e, ...t } = n;
          (c.current = e), (0, s.K)(t);
        }
        return (
          (0, i.useEffect)(() => {
            l(n) &&
              n().then((e) => {
                let { renderer: t, ...n } = e;
                (0, s.K)(n), (c.current = t), u(!0);
              });
          }, []),
          (0, r.jsx)(o.u.Provider, {
            value: { renderer: c.current, strict: a },
            children: t,
          })
        );
      }
      function l(e) {
        return 'function' == typeof e;
      }
    },
    5050: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({});
    },
    36539: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({ strict: !1 });
    },
    29791: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: 'never',
      });
    },
    67797: function (e, t, n) {
      'use strict';
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)(null);
    },
    86094: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({});
    },
    68536: function (e, t, n) {
      'use strict';
      n.d(t, {
        Bn: function () {
          return s;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return o;
        },
      });
      var r = n(73108),
        i = n(62718);
      let o = (e) => 1 - Math.sin(Math.acos(e)),
        s = (0, i.M)(o),
        a = (0, r.o)(o);
    },
    73108: function (e, t, n) {
      'use strict';
      n.d(t, {
        o: function () {
          return r;
        },
      });
      let r = (e) => (t) =>
        t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    },
    62718: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = (e) => (t) => 1 - e(1 - t);
    },
    23731: function (e, t, n) {
      'use strict';
      function r(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    33787: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(23731),
        i = n(63280);
      function o(e, t, n, o) {
        return (0, r.E)(e, t, (0, i.s)(n), o);
      }
    },
    63280: function (e, t, n) {
      'use strict';
      n.d(t, {
        Q: function () {
          return i;
        },
        s: function () {
          return o;
        },
      });
      var r = n(83414);
      function i(e, t = 'page') {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let o = (e) => (t) => (0, r.D)(t) && e(t, i(t));
    },
    83414: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = (e) =>
        'mouse' === e.pointerType
          ? 'number' != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
    },
    2981: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(565);
      let i = [
        'read',
        'resolveKeyframes',
        'update',
        'preRender',
        'render',
        'postRender',
      ];
      function o(e, t) {
        let n = !1,
          o = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (n = !0),
          l = i.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  n = new Set(),
                  r = !1,
                  i = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(t) {
                  o.has(t) && (l.schedule(t), e()), t(s);
                }
                let l = {
                  schedule: (e, i = !1, s = !1) => {
                    let a = s && r ? t : n;
                    return i && o.add(e), a.has(e) || a.add(e), e;
                  },
                  cancel: (e) => {
                    n.delete(e), o.delete(e);
                  },
                  process: (e) => {
                    if (((s = e), r)) {
                      i = !0;
                      return;
                    }
                    (r = !0),
                      ([t, n] = [n, t]),
                      n.clear(),
                      t.forEach(a),
                      (r = !1),
                      i && ((i = !1), l.process(e));
                  },
                };
                return l;
              })(a)),
              e
            ),
            {},
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: f,
            render: h,
            postRender: p,
          } = l,
          g = () => {
            let i = r.c.useManualTiming ? s.timestamp : performance.now();
            (n = !1),
              (s.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(i - s.timestamp, 40), 1)),
              (s.timestamp = i),
              (s.isProcessing = !0),
              u.process(s),
              c.process(s),
              d.process(s),
              f.process(s),
              h.process(s),
              p.process(s),
              (s.isProcessing = !1),
              n && t && ((o = !1), e(g));
          },
          m = () => {
            (n = !0), (o = !0), s.isProcessing || e(g);
          };
        return {
          schedule: i.reduce((e, t) => {
            let r = l[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < i.length; t++) l[i[t]].cancel(e);
          },
          state: s,
          steps: l,
        };
      }
    },
    86219: function (e, t, n) {
      'use strict';
      n.d(t, {
        Pn: function () {
          return o;
        },
        Wi: function () {
          return i;
        },
        frameData: function () {
          return s;
        },
        yL: function () {
          return a;
        },
      });
      var r = n(69276);
      let {
        schedule: i,
        cancel: o,
        state: s,
        steps: a,
      } = (0, n(2981).Z)(
        'undefined' != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0,
      );
    },
    78172: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return r;
        },
      });
      let { schedule: r, cancel: i } = (0, n(2981).Z)(queueMicrotask, !1);
    },
    59993: function (e, t, n) {
      'use strict';
      let r;
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var i = n(565),
        o = n(86219);
      function s() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              o.frameData.isProcessing || i.c.useManualTiming
                ? o.frameData.timestamp
                : performance.now(),
            ),
          r
        ),
        set: (e) => {
          (r = e), queueMicrotask(s);
        },
      };
    },
    75153: function (e, t, n) {
      'use strict';
      function r(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      n.d(t, {
        fJ: function () {
          return s;
        },
        gD: function () {
          return a;
        },
      });
      let i = r('dragHorizontal'),
        o = r('dragVertical');
      function s(e) {
        let t = !1;
        if ('y' === e) t = o();
        else if ('x' === e) t = i();
        else {
          let e = i(),
            n = o();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function a() {
        let e = s(!0);
        return !e || (e(), !1);
      }
    },
    20847: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return r;
        },
      });
      class r {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
    },
    96317: function (e, t, n) {
      'use strict';
      n.d(t, {
        featureDefinitions: function () {
          return i;
        },
      });
      let r = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        i = {};
      for (let e in r) i[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
    },
    344: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return i;
        },
      });
      var r = n(96317);
      function i(e) {
        for (let t in e)
          r.featureDefinitions[t] = { ...r.featureDefinitions[t], ...e[t] };
      }
    },
    42020: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var r = n(57290),
        i = n(26019);
      function o(e, { layout: t, layoutId: n }) {
        return (
          i.G.has(e) ||
          e.startsWith('origin') ||
          ((t || void 0 !== n) && (!!r.P[e] || 'opacity' === e))
        );
      }
    },
    33005: function (e, t, n) {
      'use strict';
      function r({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
      }
      function i({ x: e, y: t }) {
        return { top: t.min, right: e.max, bottom: t.max, left: e.min };
      }
      function o(e, t) {
        if (!t) return e;
        let n = t({ x: e.left, y: e.top }),
          r = t({ x: e.right, y: e.bottom });
        return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      }
      n.d(t, {
        d7: function () {
          return o;
        },
        i8: function () {
          return r;
        },
        z2: function () {
          return i;
        },
      });
    },
    46711: function (e, t, n) {
      'use strict';
      n.d(t, {
        D2: function () {
          return f;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return c;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return o;
        },
      });
      var r = n(75004),
        i = n(98107);
      function o(e, t, n) {
        return n + t * (e - n);
      }
      function s(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
      }
      function a(e, t = 0, n = 1, r, i) {
        (e.min = s(e.min, t, n, r, i)), (e.max = s(e.max, t, n, r, i));
      }
      function l(e, { x: t, y: n }) {
        a(e.x, t.translate, t.scale, t.originPoint),
          a(e.y, n.translate, n.scale, n.originPoint);
      }
      function u(e, t, n, r = !1) {
        let o, s;
        let a = n.length;
        if (a) {
          t.x = t.y = 1;
          for (let u = 0; u < a; u++) {
            s = (o = n[u]).projectionDelta;
            let { visualElement: a } = o.options;
            (!a || !a.props.style || 'contents' !== a.props.style.display) &&
              (r &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                f(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
              s && ((t.x *= s.x.scale), (t.y *= s.y.scale), l(e, s)),
              r && (0, i.ud)(o.latestValues) && f(e, o.latestValues));
          }
          t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
            t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
        }
      }
      function c(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function d(e, t, n, i, o = 0.5) {
        let s = (0, r.t)(e.min, e.max, o);
        a(e, t, n, s, i);
      }
      function f(e, t) {
        d(e.x, t.x, t.scaleX, t.scale, t.originX),
          d(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
    },
    58250: function (e, t, n) {
      'use strict';
      n.d(t, {
        dO: function () {
          return s;
        },
        wc: function () {
          return i;
        },
      });
      let r = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i = () => ({ x: r(), y: r() }),
        o = () => ({ min: 0, max: 0 }),
        s = () => ({ x: o(), y: o() });
    },
    57290: function (e, t, n) {
      'use strict';
      n.d(t, {
        B: function () {
          return i;
        },
        P: function () {
          return r;
        },
      });
      let r = {};
      function i(e) {
        Object.assign(r, e);
      }
    },
    98107: function (e, t, n) {
      'use strict';
      function r(e) {
        return void 0 === e || 1 === e;
      }
      function i({ scale: e, scaleX: t, scaleY: n }) {
        return !r(e) || !r(t) || !r(n);
      }
      function o(e) {
        return (
          i(e) ||
          s(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function s(e) {
        var t, n;
        return ((t = e.x) && '0%' !== t) || ((n = e.y) && '0%' !== n);
      }
      n.d(t, {
        D_: function () {
          return s;
        },
        Lj: function () {
          return i;
        },
        ud: function () {
          return o;
        },
      });
    },
    77684: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return o;
        },
        z: function () {
          return s;
        },
      });
      var r = n(33005),
        i = n(46711);
      function o(e, t) {
        return (0, r.i8)((0, r.d7)(e.getBoundingClientRect(), t));
      }
      function s(e, t, n) {
        let r = o(e, n),
          { scroll: s } = t;
        return s && ((0, i.am)(r.x, s.offset.x), (0, i.am)(r.y, s.offset.y)), r;
      }
    },
    34565: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return $;
        },
      });
      var r,
        i = n(57437),
        o = n(2265),
        s = n(29791);
      let a = (0, o.createContext)({});
      var l = n(67797),
        u = n(9033),
        c = n(36539),
        d = n(65908),
        f = n(78172),
        h = n(17576),
        p = n(86094);
      let g = !1;
      function m() {
        window.MotionHandoffIsComplete = !0;
      }
      var v = n(56859),
        y = n(83795);
      function w(e) {
        return Array.isArray(e) ? e.join(' ') : e;
      }
      var b = n(344),
        M = n(77282),
        x = n(5050);
      let T = Symbol.for('motionComponentSymbol');
      var N = n(96317),
        I = n(42860),
        D = n(70545),
        E = n(875),
        C = n(64572),
        L = n(28595),
        j = n(30458),
        A = n(32404),
        S = n(35674),
        k = n(28746);
      let z = (e) => (t, n) => {
        let r = (0, o.useContext)(a),
          i = (0, o.useContext)(l.O),
          s = () =>
            (function (
              {
                applyWillChange: e = !1,
                scrapeMotionValuesFromProps: t,
                createRenderState: n,
                onMount: r,
              },
              i,
              o,
              s,
              a,
            ) {
              let l = {
                latestValues: (function (e, t, n, r, i) {
                  var o;
                  let s = {},
                    a = [],
                    l =
                      r &&
                      (null === (o = e.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    u = i(e, {});
                  for (let e in u) s[e] = (0, A.b)(u[e]);
                  let { initial: c, animate: d } = e,
                    f = (0, y.G)(e),
                    h = (0, y.M)(e);
                  t &&
                    h &&
                    !f &&
                    !1 !== e.inherit &&
                    (void 0 === c && (c = t.initial),
                    void 0 === d && (d = t.animate));
                  let p = !!n && !1 === n.initial,
                    g = (p = p || !1 === c) ? d : c;
                  return (
                    g &&
                      'boolean' != typeof g &&
                      !(0, C.H)(g) &&
                      P(e, g, (e, t) => {
                        for (let t in e) {
                          let n = e[t];
                          if (Array.isArray(n)) {
                            let e = p ? n.length - 1 : 0;
                            n = n[e];
                          }
                          null !== n && (s[t] = n);
                        }
                        for (let e in t) s[e] = t[e];
                      }),
                    l &&
                      (d &&
                        !1 !== c &&
                        !(0, C.H)(d) &&
                        P(e, d, (e) => {
                          for (let t in e)
                            !(function (e, t) {
                              let n = (0, S.p)(t);
                              n && (0, k.y4)(e, n);
                            })(a, t);
                        }),
                      a.length && (s.willChange = a.join(','))),
                    s
                  );
                })(i, o, s, !a && e, t),
                renderState: n(),
              };
              return r && (l.mount = (e) => r(i, e, l)), l;
            })(e, t, r, i, n);
        return n ? s() : (0, j.h)(s);
      };
      function P(e, t, n) {
        let r = Array.isArray(t) ? t : [t];
        for (let t = 0; t < r.length; t++) {
          let i = (0, L.o)(e, r[t]);
          if (i) {
            let { transitionEnd: e, transition: t, ...r } = i;
            n(r, e);
          }
        }
      }
      let O = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        U = () => ({ ...O(), attrs: {} });
      var Y = n(92622),
        V = n(75969),
        W = n(86219);
      let Q = {
          useVisualState: z({
            scrapeMotionValuesFromProps: E.U,
            createRenderState: U,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              W.Wi.read(() => {
                try {
                  n.dimensions =
                    'function' == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                W.Wi.render(() => {
                  (0, Y.i)(n, r, (0, V.a)(t.tagName), e.transformTemplate),
                    (0, D.K)(t, n);
                });
            },
          }),
        },
        R = {
          useVisualState: z({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: n(11315).U,
            createRenderState: O,
          }),
        };
      var F = n(42020),
        Z = n(77599),
        G = n(14651);
      function B(e, t, n) {
        for (let r in t) (0, Z.i)(t[r]) || (0, F.j)(r, n) || (e[r] = t[r]);
      }
      let K = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport',
      ]);
      function H(e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          e.startsWith('onLayout') ||
          K.has(e)
        );
      }
      let J = (e) => !H(e);
      try {
        (r = require('@emotion/is-prop-valid').default) &&
          (J = (e) => (e.startsWith('on') ? !H(e) : r(e)));
      } catch (e) {}
      let $ = (function (e) {
        if ('undefined' == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (n, r) =>
            'create' === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
        });
      })(function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
        return (function (e) {
          let {
            preloadedFeatures: t,
            createVisualElement: n,
            useRender: r,
            useVisualState: I,
            Component: D,
          } = e;
          t && (0, b.K)(t);
          let E = (0, o.forwardRef)(function (e, t) {
            var b;
            let T;
            let E = {
                ...(0, o.useContext)(s._),
                ...e,
                layoutId: (function (e) {
                  let { layoutId: t } = e,
                    n = (0, o.useContext)(x.p).id;
                  return n && void 0 !== t ? n + '-' + t : t;
                })(e),
              },
              { isStatic: C } = E,
              L = (function (e) {
                let { initial: t, animate: n } = (function (e, t) {
                  if ((0, y.G)(e)) {
                    let { initial: t, animate: n } = e;
                    return {
                      initial: !1 === t || (0, v.$)(t) ? t : void 0,
                      animate: (0, v.$)(n) ? n : void 0,
                    };
                  }
                  return !1 !== e.inherit ? t : {};
                })(e, (0, o.useContext)(a));
                return (0, o.useMemo)(
                  () => ({ initial: t, animate: n }),
                  [w(t), w(n)],
                );
              })(e),
              j = I(e, C);
            if (!C && M.j) {
              (0, o.useContext)(c.u).strict;
              let e = (function (e) {
                let { drag: t, layout: n } = N.featureDefinitions;
                if (!t && !n) return {};
                let r = { ...t, ...n };
                return {
                  MeasureLayout:
                    (null == t ? void 0 : t.isEnabled(e)) ||
                    (null == n ? void 0 : n.isEnabled(e))
                      ? r.MeasureLayout
                      : void 0,
                  ProjectionNode: r.ProjectionNode,
                };
              })(E);
              (T = e.MeasureLayout),
                (L.visualElement = (function (e, t, n, r, i) {
                  var v;
                  let { visualElement: y } = (0, o.useContext)(a),
                    w = (0, o.useContext)(c.u),
                    b = (0, o.useContext)(l.O),
                    M = (0, o.useContext)(s._).reducedMotion,
                    x = (0, o.useRef)();
                  (r = r || w.renderer),
                    !x.current &&
                      r &&
                      (x.current = r(e, {
                        visualState: t,
                        parent: y,
                        props: n,
                        presenceContext: b,
                        blockInitialAnimation: !!b && !1 === b.initial,
                        reducedMotionConfig: M,
                      }));
                  let T = x.current,
                    N = (0, o.useContext)(p.g);
                  T &&
                    !T.projection &&
                    i &&
                    ('html' === T.type || 'svg' === T.type) &&
                    (function (e, t, n, r) {
                      let {
                        layoutId: i,
                        layout: o,
                        drag: s,
                        dragConstraints: a,
                        layoutScroll: l,
                        layoutRoot: u,
                      } = t;
                      (e.projection = new n(
                        e.latestValues,
                        t['data-framer-portal-id']
                          ? void 0
                          : (function e(t) {
                              if (t)
                                return !1 !== t.options.allowProjection
                                  ? t.projection
                                  : e(t.parent);
                            })(e.parent),
                      )),
                        e.projection.setOptions({
                          layoutId: i,
                          layout: o,
                          alwaysMeasureLayout: !!s || (a && (0, h.I)(a)),
                          visualElement: e,
                          animationType: 'string' == typeof o ? o : 'both',
                          initialPromotionConfig: r,
                          layoutScroll: l,
                          layoutRoot: u,
                        });
                    })(x.current, n, i, N),
                    (0, o.useInsertionEffect)(() => {
                      T && T.update(n, b);
                    });
                  let I = n[d.M],
                    D = (0, o.useRef)(
                      !!I &&
                        !window.MotionHandoffIsComplete &&
                        (null === (v = window.MotionHasOptimisedAnimation) ||
                        void 0 === v
                          ? void 0
                          : v.call(window, I)),
                    );
                  return (
                    (0, u.L)(() => {
                      T &&
                        (T.updateFeatures(),
                        f.g.render(T.render),
                        D.current &&
                          T.animationState &&
                          T.animationState.animateChanges());
                    }),
                    (0, o.useEffect)(() => {
                      T &&
                        (!D.current &&
                          T.animationState &&
                          T.animationState.animateChanges(),
                        (D.current = !1),
                        g || ((g = !0), queueMicrotask(m)));
                    }),
                    T
                  );
                })(D, j, E, n, e.ProjectionNode));
            }
            return (0, i.jsxs)(a.Provider, {
              value: L,
              children: [
                T && L.visualElement
                  ? (0, i.jsx)(T, { visualElement: L.visualElement, ...E })
                  : null,
                r(
                  D,
                  e,
                  ((b = L.visualElement),
                  (0, o.useCallback)(
                    (e) => {
                      e && j.mount && j.mount(e),
                        b && (e ? b.mount(e) : b.unmount()),
                        t &&
                          ('function' == typeof t
                            ? t(e)
                            : (0, h.I)(t) && (t.current = e));
                    },
                    [b],
                  )),
                  j,
                  C,
                  L.visualElement,
                ),
              ],
            });
          });
          return (E[T] = D), E;
        })({
          ...((0, I.q)(e) ? Q : R),
          preloadedFeatures: void 0,
          useRender: (function (e = !1) {
            return (t, n, r, { latestValues: i }, s) => {
              let a = (
                  (0, I.q)(t)
                    ? function (e, t, n, r) {
                        let i = (0, o.useMemo)(() => {
                          let n = U();
                          return (
                            (0, Y.i)(n, t, (0, V.a)(r), e.transformTemplate),
                            { ...n.attrs, style: { ...n.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          B(t, e.style, e), (i.style = { ...t, ...i.style });
                        }
                        return i;
                      }
                    : function (e, t) {
                        let n = {},
                          r = (function (e, t) {
                            let n = e.style || {},
                              r = {};
                            return (
                              B(r, n, e),
                              Object.assign(
                                r,
                                (function ({ transformTemplate: e }, t) {
                                  return (0, o.useMemo)(() => {
                                    let n = O();
                                    return (
                                      (0, G.r)(n, t, e),
                                      Object.assign({}, n.vars, n.style)
                                    );
                                  }, [t]);
                                })(e, t),
                              ),
                              r
                            );
                          })(e, t);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((n.draggable = !1),
                            (r.userSelect =
                              r.WebkitUserSelect =
                              r.WebkitTouchCallout =
                                'none'),
                            (r.touchAction =
                              !0 === e.drag
                                ? 'none'
                                : `pan-${'x' === e.drag ? 'y' : 'x'}`)),
                          void 0 === e.tabIndex &&
                            (e.onTap || e.onTapStart || e.whileTap) &&
                            (n.tabIndex = 0),
                          (n.style = r),
                          n
                        );
                      }
                )(n, i, s, t),
                l = (function (e, t, n) {
                  let r = {};
                  for (let i in e)
                    ('values' !== i || 'object' != typeof e.values) &&
                      (J(i) ||
                        (!0 === n && H(i)) ||
                        (!t && !H(i)) ||
                        (e.draggable && i.startsWith('onDrag'))) &&
                      (r[i] = e[i]);
                  return r;
                })(n, 'string' == typeof t, e),
                u = t !== o.Fragment ? { ...l, ...a, ref: r } : {},
                { children: c } = n,
                d = (0, o.useMemo)(() => ((0, Z.i)(c) ? c.get() : c), [c]);
              return (0, o.createElement)(t, { ...u, children: d });
            };
          })(t),
          createVisualElement: void 0,
          Component: e,
        });
      });
    },
    63078: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return p;
        },
      });
      var r = n(99102),
        i = n(19047),
        o = n(84386),
        s = n(61534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = n(35014),
        u = n(23769),
        c = n(23653),
        d = n(83646),
        f = n(66450);
      let h = new Set(['auto', 'none', '0']);
      class p extends c.e {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if ('string' == typeof r && ((r = r.trim()), (0, s.t)(r))) {
              let l = (function e(t, n, r = 1) {
                (0, i.k)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                );
                let [l, u] = (function (e) {
                  let t = a.exec(e);
                  if (!t) return [,];
                  let [, n, r, i] = t;
                  return [`--${null != n ? n : r}`, i];
                })(t);
                if (!l) return;
                let c = window.getComputedStyle(n).getPropertyValue(l);
                if (c) {
                  let e = c.trim();
                  return (0, o.P)(e) ? parseFloat(e) : e;
                }
                return (0, s.t)(u) ? e(u, n, r + 1) : u;
              })(r, t.current);
              void 0 !== l && (e[n] = l),
                n === e.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(n) || 2 !== e.length))
            return;
          let [r, c] = e,
            d = (0, u.C)(r),
            f = (0, u.C)(c);
          if (d !== f) {
            if ((0, l.mP)(d) && (0, l.mP)(f))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                'string' == typeof n && (e[t] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ('number' == typeof (i = e[t])
              ? 0 === i
              : null === i || 'none' === i || '0' === i || (0, r.W)(i)) &&
              n.push(t);
          }
          n.length &&
            (function (e, t, n) {
              let r,
                i = 0;
              for (; i < e.length && !r; ) {
                let t = e[i];
                'string' == typeof t &&
                  !h.has(t) &&
                  (0, d.V)(t).values.length &&
                  (r = e[i]),
                  i++;
              }
              if (r && n) for (let i of t) e[i] = (0, f.T)(n, r);
            })(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          'height' === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[n](
              e.measureViewportBox(),
              window.getComputedStyle(e.current),
            )),
            (t[0] = this.measuredOrigin);
          let r = t[t.length - 1];
          void 0 !== r && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: n, unresolvedKeyframes: r } = this;
          if (!t || !t.current) return;
          let i = t.getValue(n);
          i && i.jump(this.measuredOrigin, !1);
          let o = r.length - 1,
            s = r[o];
          (r[o] = l.lw[n](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    83582: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return ez;
        },
      });
      var r = n(64572),
        i = n(66925);
      function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var s = n(56859),
        a = n(28595);
      function l(e, t, n) {
        let r = e.getProps();
        return (0, a.o)(r, t, void 0 !== n ? n : r.custom, e);
      }
      var u = n(53552),
        c = n(26019),
        d = n(11298),
        f = n(99155),
        h = n(20804),
        p = n(69792),
        g = n(2087),
        m = n(3944),
        v = n(86219);
      function y(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        var o;
        let {
          transition: s = e.getDefaultTransition(),
          transitionEnd: a,
          ...u
        } = t;
        r && (s = r);
        let y = [],
          w = i && e.animationState && e.animationState.getState()[i];
        for (let t in u) {
          let r = e.getValue(
              t,
              null !== (o = e.latestValues[t]) && void 0 !== o ? o : null,
            ),
            i = u[t];
          if (
            void 0 === i ||
            (w &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let r = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), r;
              })(w, t))
          )
            continue;
          let a = { delay: n, ...(0, p.e)(s || {}, t) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let n = (0, g.s)(e);
            if (n) {
              let e = window.MotionHandoffAnimation(n, t, v.Wi);
              null !== e && ((a.startTime = e), (l = !0));
            }
          }
          (0, m.K)(e, t),
            r.start(
              (0, d.v)(
                t,
                r,
                i,
                e.shouldReduceMotion && c.G.has(t) ? { type: !1 } : a,
                e,
                l,
              ),
            );
          let f = r.animation;
          f && y.push(f);
        }
        return (
          a &&
            Promise.all(y).then(() => {
              v.Wi.update(() => {
                a &&
                  (function (e, t) {
                    let {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...i
                    } = l(e, t) || {};
                    for (let t in (i = { ...i, ...n })) {
                      let n = (0, f.Y)(i[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(n)
                        : e.addValue(t, (0, h.BX)(n));
                    }
                  })(e, a);
              });
            }),
          y
        );
      }
      function w(e, t, n = {}) {
        var r;
        let i = l(
            e,
            t,
            'exit' === n.type
              ? null === (r = e.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0,
          ),
          { transition: o = e.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        let s = i ? () => Promise.all(y(e, i, n)) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (e, t, n = 0, r = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * r,
                      l = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                    return (
                      Array.from(e.variantChildren)
                        .sort(b)
                        .forEach((e, r) => {
                          e.notify('AnimationStart', t),
                            s.push(
                              w(e, t, { ...o, delay: n + l(r) }).then(() =>
                                e.notify('AnimationComplete', t),
                              ),
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, i + r, s, a, n);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([s(), a(n.delay)]);
        {
          let [e, t] = 'beforeChildren' === u ? [s, a] : [a, s];
          return e().then(() => t());
        }
      }
      function b(e, t) {
        return e.sortNodePosition(t);
      }
      let M = u.V.length,
        x = [...u.e].reverse(),
        T = u.e.length;
      function N(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function I() {
        return {
          animate: N(!0),
          whileInView: N(),
          whileHover: N(),
          whileTap: N(),
          whileDrag: N(),
          whileFocus: N(),
          exit: N(),
        };
      }
      var D = n(20847);
      class E extends D.L {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let r;
                          if ((e.notify('AnimationStart', t), Array.isArray(t)))
                            r = Promise.all(t.map((t) => w(e, t, n)));
                          else if ('string' == typeof t) r = w(e, t, n);
                          else {
                            let i =
                              'function' == typeof t ? l(e, t, n.custom) : t;
                            r = Promise.all(y(e, i, n));
                          }
                          return r.then(() => {
                            e.notify('AnimationComplete', t);
                          });
                        })(e, t, n),
                      ),
                    ),
                  n = I(),
                  a = !0,
                  c = (t) => (n, r) => {
                    var i;
                    let o = l(
                      e,
                      r,
                      'exit' === t
                        ? null === (i = e.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0,
                    );
                    if (o) {
                      let { transition: e, transitionEnd: t, ...r } = o;
                      n = { ...n, ...r, ...t };
                    }
                    return n;
                  };
                function d(l) {
                  let { props: d } = e,
                    f =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let n = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (n.initial = t.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let e = 0; e < M; e++) {
                          let r = u.V[e],
                            i = t.props[r];
                          ((0, s.$)(i) || !1 === i) && (n[r] = i);
                        }
                        return n;
                      })(e.parent) || {},
                    h = [],
                    p = new Set(),
                    g = {},
                    m = 1 / 0;
                  for (let t = 0; t < T; t++) {
                    var v;
                    let u = x[t],
                      y = n[u],
                      w = void 0 !== d[u] ? d[u] : f[u],
                      b = (0, s.$)(w),
                      M = u === l ? y.isActive : null;
                    !1 === M && (m = t);
                    let T = w === f[u] && w !== d[u] && b;
                    if (
                      (T && a && e.manuallyAnimateOnMount && (T = !1),
                      (y.protectedKeys = { ...g }),
                      (!y.isActive && null === M) ||
                        (!w && !y.prevProp) ||
                        (0, r.H)(w) ||
                        'boolean' == typeof w)
                    )
                      continue;
                    let N =
                        ((v = y.prevProp),
                        'string' == typeof w
                          ? w !== v
                          : !!Array.isArray(w) && !o(w, v)),
                      I =
                        N || (u === l && y.isActive && !T && b) || (t > m && b),
                      D = !1,
                      E = Array.isArray(w) ? w : [w],
                      C = E.reduce(c(u), {});
                    !1 === M && (C = {});
                    let { prevResolvedValues: L = {} } = y,
                      j = { ...L, ...C },
                      A = (t) => {
                        (I = !0),
                          p.has(t) && ((D = !0), p.delete(t)),
                          (y.needsAnimating[t] = !0);
                        let n = e.getValue(t);
                        n && (n.liveStyle = !1);
                      };
                    for (let e in j) {
                      let t = C[e],
                        n = L[e];
                      if (!g.hasOwnProperty(e))
                        ((0, i.C)(t) && (0, i.C)(n) ? o(t, n) : t === n)
                          ? void 0 !== t && p.has(e)
                            ? A(e)
                            : (y.protectedKeys[e] = !0)
                          : null != t
                            ? A(e)
                            : p.add(e);
                    }
                    (y.prevProp = w),
                      (y.prevResolvedValues = C),
                      y.isActive && (g = { ...g, ...C }),
                      a && e.blockInitialAnimation && (I = !1);
                    let S = !(T && N) || D;
                    I &&
                      S &&
                      h.push(
                        ...E.map((e) => ({
                          animation: e,
                          options: { type: u },
                        })),
                      );
                  }
                  if (p.size) {
                    let t = {};
                    p.forEach((n) => {
                      let r = e.getBaseTarget(n),
                        i = e.getValue(n);
                      i && (i.liveStyle = !0), (t[n] = null != r ? r : null);
                    }),
                      h.push({ animation: t });
                  }
                  let y = !!h.length;
                  return (
                    a &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? t(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (t, r) {
                    var i;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (i = e.variantChildren) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let o = d(t);
                    for (let e in n) n[e].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = I()), (a = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          (0, r.H)(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let C = 0;
      class L extends D.L {
        constructor() {
          super(...arguments), (this.id = C++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive('exit', !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      var j = n(33787),
        A = n(89654),
        S = n(75153);
      function k(e, t) {
        let n = t ? 'onHoverStart' : 'onHoverEnd';
        return (0, j.a)(
          e.current,
          t ? 'pointerenter' : 'pointerleave',
          (r, i) => {
            if ('touch' === r.pointerType || (0, S.gD)()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive('whileHover', t);
            let s = o[n];
            s && v.Wi.postRender(() => s(r, i));
          },
          { passive: !e.getProps()[n] },
        );
      }
      class z extends D.L {
        mount() {
          this.unmount = (0, A.z)(k(this.node, !0), k(this.node, !1));
        }
        unmount() {}
      }
      var P = n(23731);
      class O extends D.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(':focus-visible');
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, A.z)(
            (0, P.E)(this.node.current, 'focus', () => this.onFocus()),
            (0, P.E)(this.node.current, 'blur', () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var U = n(63280);
      let Y = (e, t) => !!t && (e === t || Y(e, t.parentElement));
      var V = n(69276);
      function W(e, t) {
        if (!t) return;
        let n = new PointerEvent('pointer' + e);
        t(n, (0, U.Q)(n));
      }
      class Q extends D.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = V.Z),
            (this.removeEndListeners = V.Z),
            (this.removeAccessibleListeners = V.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                r = (0, j.a)(
                  window,
                  'pointerup',
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: n,
                        onTapCancel: r,
                        globalTapTarget: i,
                      } = this.node.getProps(),
                      o = i || Y(this.node.current, e.target) ? n : r;
                    o && v.Wi.update(() => o(e, t));
                  },
                  { passive: !(n.onTap || n.onPointerUp) },
                ),
                i = (0, j.a)(
                  window,
                  'pointercancel',
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) },
                );
              (this.removeEndListeners = (0, A.z)(r, i)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = (0, P.E)(this.node.current, 'keydown', (e) => {
                  'Enter' !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, P.E)(
                      this.node.current,
                      'keyup',
                      (e) => {
                        'Enter' === e.key &&
                          this.checkPressEnd() &&
                          W('up', (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && v.Wi.postRender(() => n(e, t));
                          });
                      },
                    )),
                    W('down', (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = (0, P.E)(this.node.current, 'blur', () => {
                  this.isPressing &&
                    W('cancel', (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = (0, A.z)(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive('whileTap', !0),
            n && v.Wi.postRender(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !1),
            !(0, S.gD)()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && v.Wi.postRender(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = (0, j.a)(
              e.globalTapTarget ? window : this.node.current,
              'pointerdown',
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) },
            ),
            n = (0, P.E)(this.node.current, 'focus', this.startAccessiblePress);
          this.removeStartListeners = (0, A.z)(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let R = new WeakMap(),
        F = new WeakMap(),
        Z = (e) => {
          let t = R.get(e.target);
          t && t(e);
        },
        G = (e) => {
          e.forEach(Z);
        },
        B = { some: 0, all: 1 };
      class K extends D.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = 'some', once: i } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: 'number' == typeof r ? r : B[r],
            };
          return (function (e, t, n) {
            let r = (function ({ root: e, ...t }) {
              let n = e || document;
              F.has(n) || F.set(n, {});
              let r = F.get(n),
                i = JSON.stringify(t);
              return (
                r[i] || (r[i] = new IntersectionObserver(G, { root: e, ...t })),
                r[i]
              );
            })(t);
            return (
              R.set(e, n),
              r.observe(e),
              () => {
                R.delete(e), r.unobserve(e);
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive('whileInView', t);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              o = t ? n : r;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t),
          ) && this.startObserver();
        }
        unmount() {}
      }
      var H = n(2265),
        J = n(14651),
        $ = n(61534),
        X = n(11315),
        _ = n(39979),
        q = n(40781),
        ee = n(77684),
        et = n(77282);
      let en = { current: null },
        er = { current: !1 };
      var ei = n(72428),
        eo = n(77599),
        es = n(83795),
        ea = n(96317);
      let el = new WeakMap();
      var eu = n(23653),
        ec = n(84386),
        ed = n(99102),
        ef = n(50146),
        eh = n(83646),
        ep = n(23769),
        eg = n(12649);
      let em = [...ep.$, ef.$, eh.P],
        ev = (e) => em.find((0, eg.l)(e));
      var ey = n(66450),
        ew = n(58250),
        eb = n(59993);
      let eM = [
        'AnimationStart',
        'AnimationComplete',
        'Update',
        'BeforeLayoutMeasure',
        'LayoutMeasure',
        'LayoutAnimationStart',
        'LayoutAnimationComplete',
      ];
      class ex {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            blockInitialAnimation: i,
            visualState: o,
          },
          s = {},
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eu.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = eb.X.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e),
                v.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = o;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = s),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = (0, es.G)(t)),
            (this.isVariantNode = (0, es.M)(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this,
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== a[e] && (0, eo.i)(t) && t.set(a[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            el.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            er.current ||
              (function () {
                if (((er.current = !0), et.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia('(prefers-reduced-motion)'),
                      t = () => (en.current = e.matches);
                    e.addListener(t), t();
                  } else en.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || en.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (el.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, v.Pn)(this.notifyUpdate),
          (0, v.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let r = c.G.has(e),
            i = t.on('change', (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && v.Wi.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = t.on('renderRequest', this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              i(), o(), n && n(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = 'animation';
          for (e in ea.featureDefinitions) {
            let t = ea.featureDefinitions[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] &&
                r &&
                n(this.props) &&
                (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, ew.dO)();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < eM.length; t++) {
            let n = eM[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = e['on' + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (e, t, n) {
            for (let r in t) {
              let i = t[r],
                o = n[r];
              if ((0, eo.i)(i)) e.addValue(r, i);
              else if ((0, eo.i)(o)) e.addValue(r, (0, h.BX)(i, { owner: e }));
              else if (o !== i) {
                if (e.hasValue(r)) {
                  let t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
                } else {
                  let t = e.getStaticValue(r);
                  e.addValue(r, (0, h.BX)(void 0 !== t ? t : i, { owner: e }));
                }
              }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = (0, h.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          var n;
          let r =
            void 0 === this.latestValues[e] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != r &&
              ('string' == typeof r && ((0, ec.P)(r) || (0, ed.W)(r))
                ? (r = parseFloat(r))
                : !ev(r) && eh.P.test(t) && (r = (0, ey.T)(e, t)),
              this.setBaseTarget(e, (0, eo.i)(r) ? r.get() : r)),
            (0, eo.i)(r) ? r.get() : r
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let n;
          let { initial: r } = this.props;
          if ('string' == typeof r || 'object' == typeof r) {
            let i = (0, a.o)(
              this.props,
              r,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom,
            );
            i && (n = i[e]);
          }
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || (0, eo.i)(i)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new ei.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      var eT = n(63078);
      class eN extends ex {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eT.s);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
      }
      class eI extends eN {
        constructor() {
          super(...arguments),
            (this.type = 'html'),
            (this.applyWillChange = !0),
            (this.renderInstance = _.N);
        }
        readValueFromInstance(e, t) {
          if (c.G.has(t)) {
            let e = (0, q.A)(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              r = ((0, $.f)(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return 'string' == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return (0, ee.J)(e, t);
        }
        build(e, t, n) {
          (0, J.r)(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return (0, X.U)(e, t, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, eo.i)(e) &&
            (this.childSubscription = e.on('change', (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      var eD = n(875),
        eE = n(92622),
        eC = n(51580),
        eL = n(82394),
        ej = n(70545),
        eA = n(75969);
      class eS extends eN {
        constructor() {
          super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ew.dO);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (c.G.has(t)) {
            let e = (0, q.A)(t);
            return (e && e.default) || 0;
          }
          return (t = eL.s.has(t) ? t : (0, eC.D)(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return (0, eD.U)(e, t, n);
        }
        build(e, t, n) {
          (0, eE.i)(e, t, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, n, r) {
          (0, ej.K)(e, t, n, r);
        }
        mount(e) {
          (this.isSVGTag = (0, eA.a)(e.tagName)), super.mount(e);
        }
      }
      var ek = n(42860);
      let ez = {
        renderer: (e, t) =>
          (0, ek.q)(e)
            ? new eS(t)
            : new eI(t, { allowProjection: e !== H.Fragment }),
        animation: { Feature: E },
        exit: { Feature: L },
        inView: { Feature: K },
        tap: { Feature: Q },
        focus: { Feature: O },
        hover: { Feature: z },
      };
    },
    51580: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();
    },
    61534: function (e, t, n) {
      'use strict';
      n.d(t, {
        f: function () {
          return i;
        },
        t: function () {
          return s;
        },
      });
      let r = (e) => (t) => 'string' == typeof t && t.startsWith(e),
        i = r('--'),
        o = r('var(--'),
        s = (e) => !!o(e) && a.test(e.split('/*')[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    42860: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return i;
        },
      });
      let r = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'switch',
        'symbol',
        'svg',
        'text',
        'tspan',
        'use',
        'view',
      ];
      function i(e) {
        if ('string' != typeof e || e.includes('-'));
        else if (r.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    35014: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ei: function () {
          return f;
        },
        lw: function () {
          return h;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return s;
        },
      });
      var r = n(26019),
        i = n(40783),
        o = n(75480);
      let s = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        a = (e) => e === i.Rx || e === o.px,
        l = (e, t) => parseFloat(e.split(', ')[t]),
        u =
          (e, t) =>
          (n, { transform: r }) => {
            if ('none' === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i) return l(i[1], t);
            {
              let t = r.match(/^matrix\((.+)\)$/u);
              return t ? l(t[1], e) : 0;
            }
          },
        c = new Set(['x', 'y', 'z']),
        d = r._.filter((e) => !c.has(e));
      function f(e) {
        let t = [];
        return (
          d.forEach((n) => {
            let r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
          }),
          t
        );
      }
      let h = {
        width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (h.translateX = h.x), (h.translateY = h.y);
    },
    66450: function (e, t, n) {
      'use strict';
      n.d(t, {
        T: function () {
          return s;
        },
      });
      var r = n(83646),
        i = n(24913),
        o = n(40781);
      function s(e, t) {
        let n = (0, o.A)(e);
        return (
          n !== i.h && (n = r.P),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
    },
    40781: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return s;
        },
      });
      var r = n(50146),
        i = n(24913);
      let o = {
          ...n(37755).j,
          color: r.$,
          backgroundColor: r.$,
          outlineColor: r.$,
          fill: r.$,
          stroke: r.$,
          borderColor: r.$,
          borderTopColor: r.$,
          borderRightColor: r.$,
          borderBottomColor: r.$,
          borderLeftColor: r.$,
          filter: i.h,
          WebkitFilter: i.h,
        },
        s = (e) => o[e];
    },
    23769: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return s;
        },
        C: function () {
          return a;
        },
      });
      var r = n(40783),
        i = n(75480),
        o = n(12649);
      let s = [
          r.Rx,
          i.px,
          i.aQ,
          i.RW,
          i.vw,
          i.vh,
          { test: (e) => 'auto' === e, parse: (e) => e },
        ],
        a = (e) => s.find((0, o.l)(e));
    },
    37755: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var r = n(40783),
        i = n(75480);
      let o = { ...r.Rx, transform: Math.round },
        s = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          size: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          rotate: i.RW,
          rotateX: i.RW,
          rotateY: i.RW,
          rotateZ: i.RW,
          scale: r.bA,
          scaleX: r.bA,
          scaleY: r.bA,
          scaleZ: r.bA,
          skew: i.RW,
          skewX: i.RW,
          skewY: i.RW,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.Fq,
          originX: i.$C,
          originY: i.$C,
          originZ: i.px,
          zIndex: o,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
          fillOpacity: r.Fq,
          strokeOpacity: r.Fq,
          numOctaves: o,
        };
    },
    12649: function (e, t, n) {
      'use strict';
      n.d(t, {
        l: function () {
          return r;
        },
      });
      let r = (e) => (t) => t.test(e);
    },
    14651: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return u;
        },
      });
      var r = n(26019);
      let i = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e);
      var o = n(37755);
      let s = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        a = r._.length;
      var l = n(61534);
      function u(e, t, n) {
        let { style: u, vars: c, transformOrigin: d } = e,
          f = !1,
          h = !1;
        for (let e in t) {
          let n = t[e];
          if (r.G.has(e)) {
            f = !0;
            continue;
          }
          if ((0, l.f)(e)) {
            c[e] = n;
            continue;
          }
          {
            let t = i(n, o.j[e]);
            e.startsWith('origin') ? ((h = !0), (d[e] = t)) : (u[e] = t);
          }
        }
        if (
          (!t.transform &&
            (f || n
              ? (u.transform = (function (e, t, n) {
                  let l = '',
                    u = !0;
                  for (let c = 0; c < a; c++) {
                    let a = r._[c],
                      d = e[a];
                    if (void 0 === d) continue;
                    let f = !0;
                    if (
                      !(f =
                        'number' == typeof d
                          ? d === (a.startsWith('scale') ? 1 : 0)
                          : 0 === parseFloat(d)) ||
                      n
                    ) {
                      let e = i(d, o.j[a]);
                      if (!f) {
                        u = !1;
                        let t = s[a] || a;
                        l += `${t}(${e}) `;
                      }
                      n && (t[a] = e);
                    }
                  }
                  return (
                    (l = l.trim()),
                    n ? (l = n(t, u ? '' : l)) : u && (l = 'none'),
                    l
                  );
                })(t, e.transform, n))
              : u.transform && (u.transform = 'none')),
          h)
        ) {
          let { originX: e = '50%', originY: t = '50%', originZ: n = 0 } = d;
          u.transformOrigin = `${e} ${t} ${n}`;
        }
      }
    },
    39979: function (e, t, n) {
      'use strict';
      function r(e, { style: t, vars: n }, r, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(o, n[o]);
      }
      n.d(t, {
        N: function () {
          return r;
        },
      });
    },
    11315: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var r = n(42020),
        i = n(77599);
      function o(e, t, n) {
        var o;
        let { style: s } = e,
          a = {};
        for (let l in s)
          ((0, i.i)(s[l]) ||
            (t.style && (0, i.i)(t.style[l])) ||
            (0, r.j)(l, e) ||
            (null === (o = null == n ? void 0 : n.getValue(l)) || void 0 === o
              ? void 0
              : o.liveStyle) !== void 0) &&
            (a[l] = s[l]);
        return (
          n && s && 'string' == typeof s.willChange && (n.applyWillChange = !1),
          a
        );
      }
    },
    26019: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return i;
        },
        _: function () {
          return r;
        },
      });
      let r = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        i = new Set(r);
    },
    92622: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(14651),
        i = n(75480);
      function o(e, t, n) {
        return 'string' == typeof e ? e : i.px.transform(t + n * e);
      }
      let s = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        a = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function l(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: c,
          pathLength: d,
          pathSpacing: f = 1,
          pathOffset: h = 0,
          ...p
        },
        g,
        m,
      ) {
        if (((0, r.r)(e, p, m), g)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: y, dimensions: w } = e;
        v.transform && (w && (y.transform = v.transform), delete v.transform),
          w &&
            (void 0 !== u || void 0 !== c || y.transform) &&
            (y.transformOrigin = (function (e, t, n) {
              let r = o(t, e.x, e.width),
                i = o(n, e.y, e.height);
              return `${r} ${i}`;
            })(w, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== n && (v.y = n),
          void 0 !== l && (v.scale = l),
          void 0 !== d &&
            (function (e, t, n = 1, r = 0, o = !0) {
              e.pathLength = 1;
              let l = o ? s : a;
              e[l.offset] = i.px.transform(-r);
              let u = i.px.transform(t),
                c = i.px.transform(n);
              e[l.array] = `${u} ${c}`;
            })(v, d, f, h, !1);
      }
    },
    82394: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return r;
        },
      });
      let r = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
    },
    75969: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return r;
        },
      });
      let r = (e) => 'string' == typeof e && 'svg' === e.toLowerCase();
    },
    70545: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var r = n(51580),
        i = n(39979),
        o = n(82394);
      function s(e, t, n, s) {
        for (let n in ((0, i.N)(e, t, void 0, s), t.attrs))
          e.setAttribute(o.s.has(n) ? n : (0, r.D)(n), t.attrs[n]);
      }
    },
    875: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var r = n(77599),
        i = n(11315),
        o = n(26019);
      function s(e, t, n) {
        let s = (0, i.U)(e, t, n);
        for (let n in e)
          ((0, r.i)(e[n]) || (0, r.i)(t[n])) &&
            (s[
              -1 !== o._.indexOf(n)
                ? 'attr' + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return s;
      }
    },
    23653: function (e, t, n) {
      'use strict';
      n.d(t, {
        e: function () {
          return d;
        },
        m: function () {
          return c;
        },
      });
      var r = n(35014),
        i = n(86219);
      let o = new Set(),
        s = !1,
        a = !1;
      function l() {
        if (a) {
          let e = Array.from(o).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            n = new Map();
          t.forEach((e) => {
            let t = (0, r.Ei)(e);
            t.length && (n.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = n.get(e);
              t &&
                t.forEach(([t, n]) => {
                  var r;
                  null === (r = e.getValue(t)) || void 0 === r || r.set(n);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (a = !1), (s = !1), o.forEach((e) => e.complete()), o.clear();
      }
      function u() {
        o.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(e, t, n, r, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (o.add(this),
                s || ((s = !0), i.Wi.read(u), i.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: n,
            motionValue: r,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == r ? void 0 : r.get(),
                  o = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (n && t) {
                  let r = n.readValue(t, o);
                  null != r && (e[0] = r);
                }
                void 0 === e[0] && (e[0] = o), r && void 0 === i && r.set(e[0]);
              } else e[i] = e[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            o.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), o.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    83795: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return s;
        },
        M: function () {
          return a;
        },
      });
      var r = n(64572),
        i = n(56859),
        o = n(53552);
      function s(e) {
        return (0, r.H)(e.animate) || o.V.some((t) => (0, i.$)(e[t]));
      }
      function a(e) {
        return !!(s(e) || e.variants);
      }
    },
    56859: function (e, t, n) {
      'use strict';
      function r(e) {
        return 'string' == typeof e || Array.isArray(e);
      }
      n.d(t, {
        $: function () {
          return r;
        },
      });
    },
    28595: function (e, t, n) {
      'use strict';
      function r(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, n) => {
              (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
          t
        );
      }
      function i(e, t, n, i) {
        if ('function' == typeof t) {
          let [o, s] = r(i);
          t = t(void 0 !== n ? n : e.custom, o, s);
        }
        if (
          ('string' == typeof t && (t = e.variants && e.variants[t]),
          'function' == typeof t)
        ) {
          let [o, s] = r(i);
          t = t(void 0 !== n ? n : e.custom, o, s);
        }
        return t;
      }
      n.d(t, {
        o: function () {
          return i;
        },
      });
    },
    53552: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return i;
        },
        e: function () {
          return r;
        },
      });
      let r = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        i = ['initial', ...r];
    },
    565: function (e, t, n) {
      'use strict';
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    28746: function (e, t, n) {
      'use strict';
      function r(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      n.d(t, {
        cl: function () {
          return i;
        },
        y4: function () {
          return r;
        },
      });
    },
    51506: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    19047: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var r = n(69276);
      let i = r.Z,
        o = r.Z;
    },
    77282: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = 'undefined' != typeof window;
    },
    84386: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let r = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    },
    17576: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          e &&
          'object' == typeof e &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      n.d(t, {
        I: function () {
          return r;
        },
      });
    },
    99102: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return r;
        },
      });
      let r = (e) => /^0[^.\s]+$/u.test(e);
    },
    75004: function (e, t, n) {
      'use strict';
      n.d(t, {
        t: function () {
          return r;
        },
      });
      let r = (e, t, n) => e + (t - e) * n;
    },
    69276: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (e) => e;
    },
    89654: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return i;
        },
      });
      let r = (e, t) => (n) => t(e(n)),
        i = (...e) => e.reduce(r);
    },
    33217: function (e, t, n) {
      'use strict';
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      let r = (e, t, n) => {
        let r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      };
    },
    99155: function (e, t, n) {
      'use strict';
      n.d(t, {
        Y: function () {
          return o;
        },
        p: function () {
          return i;
        },
      });
      var r = n(66925);
      let i = (e) => !!(e && 'object' == typeof e && e.mix && e.toValue),
        o = (e) => ((0, r.C)(e) ? e[e.length - 1] || 0 : e);
    },
    72428: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(28746);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, r.y4)(this.subscriptions, e),
            () => (0, r.cl)(this.subscriptions, e)
          );
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    80557: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return i;
        },
        w: function () {
          return r;
        },
      });
      let r = (e) => 1e3 * e,
        i = (e) => e / 1e3;
    },
    30458: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    9033: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = n(77282).j ? r.useLayoutEffect : r.useEffect;
    },
    83476: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
      n.d(t, {
        R: function () {
          return r;
        },
      });
    },
    20804: function (e, t, n) {
      'use strict';
      n.d(t, {
        BX: function () {
          return c;
        },
        Hg: function () {
          return u;
        },
      });
      var r = n(72428),
        i = n(83476),
        o = n(59993),
        s = n(86219);
      let a = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = '11.6.0'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = o.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = o.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on('change', e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new r.L());
          let n = this.events[e].add(t);
          return 'change' === e
            ? () => {
                n(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = o.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t,
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, t) {
        return new u(e, t);
      }
    },
    45778: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var r = n(91583);
      let i = {
        test: (0, n(93338).i)('#'),
        parse: function (e) {
          let t = '',
            n = '',
            r = '',
            i = '';
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (i = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (i = e.substring(4, 5)),
                (t += t),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    598: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(40783),
        i = n(75480),
        o = n(47292),
        s = n(93338);
      let a = {
        test: (0, s.i)('hsl', 'hue'),
        parse: (0, s.d)('hue', 'saturation', 'lightness'),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) =>
          'hsla(' +
          Math.round(e) +
          ', ' +
          i.aQ.transform((0, o.Nw)(t)) +
          ', ' +
          i.aQ.transform((0, o.Nw)(n)) +
          ', ' +
          (0, o.Nw)(r.Fq.transform(s)) +
          ')',
      };
    },
    50146: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var r = n(47292),
        i = n(45778),
        o = n(598),
        s = n(91583);
      let a = {
        test: (e) => s.m.test(e) || i.$.test(e) || o.J.test(e),
        parse: (e) =>
          s.m.test(e)
            ? s.m.parse(e)
            : o.J.test(e)
              ? o.J.parse(e)
              : i.$.parse(e),
        transform: (e) =>
          (0, r.HD)(e)
            ? e
            : e.hasOwnProperty('red')
              ? s.m.transform(e)
              : o.J.transform(e),
      };
    },
    91583: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return u;
        },
      });
      var r = n(51506),
        i = n(40783),
        o = n(47292),
        s = n(93338);
      let a = (e) => (0, r.u)(0, 255, e),
        l = { ...i.Rx, transform: (e) => Math.round(a(e)) },
        u = {
          test: (0, s.i)('rgb', 'red'),
          parse: (0, s.d)('red', 'green', 'blue'),
          transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            'rgba(' +
            l.transform(e) +
            ', ' +
            l.transform(t) +
            ', ' +
            l.transform(n) +
            ', ' +
            (0, o.Nw)(i.Fq.transform(r)) +
            ')',
        };
    },
    93338: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return o;
        },
        i: function () {
          return i;
        },
      });
      var r = n(47292);
      let i = (e, t) => (n) =>
          !!(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(e)) ||
            (t && !(0, r.Rw)(n) && Object.prototype.hasOwnProperty.call(n, t))
          ),
        o = (e, t, n) => (i) => {
          if (!(0, r.HD)(i)) return i;
          let [o, s, a, l] = i.match(r.KP);
          return {
            [e]: parseFloat(o),
            [t]: parseFloat(s),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    24913: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var r = n(83646),
        i = n(47292);
      let o = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function s(e) {
        let [t, n] = e.slice(0, -1).split('(');
        if ('drop-shadow' === t) return e;
        let [r] = n.match(i.KP) || [];
        if (!r) return e;
        let s = n.replace(r, ''),
          a = o.has(t) ? 1 : 0;
        return r !== n && (a *= 100), t + '(' + a + s + ')';
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.P,
          getAnimatableNone: (e) => {
            let t = e.match(a);
            return t ? t.map(s).join(' ') : e;
          },
        };
    },
    83646: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return f;
        },
        V: function () {
          return l;
        },
      });
      var r = n(50146),
        i = n(47292);
      let o = 'number',
        s = 'color',
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(e) {
        let t = e.toString(),
          n = [],
          i = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          c = t
            .replace(
              a,
              (e) => (
                r.$.test(e)
                  ? (i.color.push(u), l.push(s), n.push(r.$.parse(e)))
                  : e.startsWith('var(')
                    ? (i.var.push(u), l.push('var'), n.push(e))
                    : (i.number.push(u), l.push(o), n.push(parseFloat(e))),
                ++u,
                '${}'
              ),
            )
            .split('${}');
        return { values: n, split: c, indexes: i, types: l };
      }
      function u(e) {
        return l(e).values;
      }
      function c(e) {
        let { split: t, types: n } = l(e),
          a = t.length;
        return (e) => {
          let l = '';
          for (let u = 0; u < a; u++)
            if (((l += t[u]), void 0 !== e[u])) {
              let t = n[u];
              t === o
                ? (l += (0, i.Nw)(e[u]))
                : t === s
                  ? (l += r.$.transform(e[u]))
                  : (l += e[u]);
            }
          return l;
        };
      }
      let d = (e) => ('number' == typeof e ? 0 : e),
        f = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              (0, i.HD)(e) &&
              ((null === (t = e.match(i.KP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(i.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function (e) {
            let t = u(e);
            return c(e)(t.map(d));
          },
        };
    },
    40783: function (e, t, n) {
      'use strict';
      n.d(t, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return s;
        },
      });
      var r = n(51506);
      let i = {
          test: (e) => 'number' == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        o = { ...i, transform: (e) => (0, r.u)(0, 1, e) },
        s = { ...i, default: 1 };
    },
    75480: function (e, t, n) {
      'use strict';
      n.d(t, {
        $C: function () {
          return c;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return s;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var r = n(47292);
      let i = (e) => ({
          test: (t) =>
            (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(' ').length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        o = i('deg'),
        s = i('%'),
        a = i('px'),
        l = i('vh'),
        u = i('vw'),
        c = {
          ...s,
          parse: (e) => s.parse(e) / 100,
          transform: (e) => s.transform(100 * e),
        };
    },
    47292: function (e, t, n) {
      'use strict';
      n.d(t, {
        HD: function () {
          return a;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return r;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      let r = (e) => Math.round(1e5 * e) / 1e5,
        i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        o =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        s =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(e) {
        return 'string' == typeof e;
      }
      function l(e) {
        return null == e;
      }
    },
    3944: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return l;
        },
      });
      var r = n(20804),
        i = n(35674),
        o = n(28746);
      class s extends r.Hg {
        constructor() {
          super(...arguments), (this.values = []);
        }
        add(e) {
          let t = (0, i.p)(e);
          t && ((0, o.y4)(this.values, t), this.update());
        }
        update() {
          this.set(this.values.length ? this.values.join(', ') : 'auto');
        }
      }
      var a = n(77599);
      function l(e, t) {
        var n, r;
        if (!e.applyWillChange) return;
        let i = e.getValue('willChange');
        if (
          (i ||
            (null === (n = e.props.style) || void 0 === n
              ? void 0
              : n.willChange) ||
            ((i = new s('auto')), e.addValue('willChange', i)),
          (r = i),
          (0, a.i)(r) && r.add)
        )
          return i.add(t);
      }
    },
    35674: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return s;
        },
      });
      var r = n(66323),
        i = n(51580),
        o = n(26019);
      function s(e) {
        return o.G.has(e) ? 'transform' : r.t.has(e) ? (0, i.D)(e) : void 0;
      }
    },
    77599: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = (e) => !!(e && e.getVelocity);
    },
    32404: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(99155),
        i = n(77599);
      function o(e) {
        let t = (0, i.i)(e) ? e.get() : e;
        return (0, r.p)(t) ? t.toValue() : t;
      }
    },
    42505: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            'attempted to ' + n + ' private field on non-instance',
          );
        return t.get(e);
      }
      n.d(t, {
        J: function () {
          return r;
        },
      });
    },
    52396: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(42505);
      function i(e, t) {
        var n = (0, r.J)(e, t, 'get');
        return n.get ? n.get.call(e) : n.value;
      }
    },
    49994: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        !(function (e, t) {
          if (t.has(e))
            throw TypeError(
              'Cannot initialize the same private elements twice on an object',
            );
        })(e, t),
          t.set(e, n);
      }
      n.d(t, {
        _: function () {
          return r;
        },
      });
    },
    93936: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(42505);
      function i(e, t, n) {
        var i = (0, r.J)(e, t, 'set');
        return (
          !(function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
              if (!t.writable)
                throw TypeError('attempted to set read only private field');
              t.value = n;
            }
          })(e, i, n),
          n
        );
      }
    },
    90089: function (e, t, n) {
      'use strict';
      let r;
      n.d(t, {
        Db: function () {
          return x;
        },
        $G: function () {
          return C;
        },
      });
      var i = n(2265);
      n(71906), Object.create(null);
      let o = {};
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        (f(t[0]) && o[t[0]]) ||
          (f(t[0]) && (o[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              f(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
            }
          })(...t));
      }
      let a = (e, t) => () => {
          if (e.isInitialized) t();
          else {
            let n = () => {
              setTimeout(() => {
                e.off('initialized', n);
              }, 0),
                t();
            };
            e.on('initialized', n);
          }
        },
        l = (e, t, n) => {
          e.loadNamespaces(t, a(e, n));
        },
        u = (e, t, n, r) => {
          f(n) && (n = [n]),
            n.forEach((t) => {
              0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
            }),
            e.loadLanguages(t, a(e, r));
        },
        c = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = t.languages[0],
            i = !!t.options && t.options.fallbackLng,
            o = t.languages[t.languages.length - 1];
          if ('cimode' === r.toLowerCase()) return !0;
          let s = (e, n) => {
            let r = t.services.backendConnector.state[`${e}|${n}`];
            return -1 === r || 2 === r;
          };
          return (
            (!(n.bindI18n && n.bindI18n.indexOf('languageChanging') > -1) ||
              !t.services.backendConnector.backend ||
              !t.isLanguageChangingTo ||
              !!s(t.isLanguageChangingTo, e)) &&
            !!(
              t.hasResourceBundle(r, e) ||
              !t.services.backendConnector.backend ||
              (t.options.resources && !t.options.partialBundledLanguages) ||
              (s(r, e) && (!i || s(o, e)))
            )
          );
        },
        d = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return t.languages && t.languages.length
            ? void 0 !== t.options.ignoreJSONStructure
              ? t.hasLoadedNamespace(e, {
                  lng: n.lng,
                  precheck: (t, r) => {
                    if (
                      n.bindI18n &&
                      n.bindI18n.indexOf('languageChanging') > -1 &&
                      t.services.backendConnector.backend &&
                      t.isLanguageChangingTo &&
                      !r(t.isLanguageChangingTo, e)
                    )
                      return !1;
                  },
                })
              : c(e, t, n)
            : (s('i18n.languages were undefined or empty', t.languages), !0);
        },
        f = (e) => 'string' == typeof e,
        h = (e) => 'object' == typeof e && null !== e,
        p =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        g = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
          '&nbsp;': ' ',
          '&#160;': ' ',
          '&copy;': '\xa9',
          '&#169;': '\xa9',
          '&reg;': '\xae',
          '&#174;': '\xae',
          '&hellip;': '…',
          '&#8230;': '…',
          '&#x2F;': '/',
          '&#47;': '/',
        },
        m = (e) => g[e],
        v = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
          unescape: (e) => e.replace(p, m),
        },
        y = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          v = { ...v, ...e };
        },
        w = () => v,
        b = (e) => {
          r = e;
        },
        M = () => r,
        x = {
          type: '3rdParty',
          init(e) {
            y(e.options.react), b(e);
          },
        },
        T = (0, i.createContext)();
      class N {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces = () => Object.keys(this.usedNamespaces);
      }
      let I = (e, t) => {
          let n = (0, i.useRef)();
          return (
            (0, i.useEffect)(() => {
              n.current = t ? n.current : e;
            }, [e, t]),
            n.current
          );
        },
        D = (e, t, n, r) => e.getFixedT(t, n, r),
        E = (e, t, n, r) => (0, i.useCallback)(D(e, t, n, r), [e, t, n, r]),
        C = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { i18n: n } = t,
            { i18n: r, defaultNS: o } = (0, i.useContext)(T) || {},
            a = n || r || M();
          if (
            (a && !a.reportNamespaces && (a.reportNamespaces = new N()), !a)
          ) {
            s(
              'You will need to pass in an i18next instance by using initReactI18next',
            );
            let e = (e, t) =>
                f(t)
                  ? t
                  : h(t) && f(t.defaultValue)
                    ? t.defaultValue
                    : Array.isArray(e)
                      ? e[e.length - 1]
                      : e,
              t = [e, {}, !1];
            return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
          }
          a.options.react &&
            void 0 !== a.options.react.wait &&
            s(
              'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
            );
          let c = { ...w(), ...a.options.react, ...t },
            { useSuspense: p, keyPrefix: g } = c,
            m = e || o || (a.options && a.options.defaultNS);
          (m = f(m) ? [m] : m || ['translation']),
            a.reportNamespaces.addUsedNamespaces &&
              a.reportNamespaces.addUsedNamespaces(m);
          let v =
              (a.isInitialized || a.initializedStoreOnce) &&
              m.every((e) => d(e, a, c)),
            y = E(a, t.lng || null, 'fallback' === c.nsMode ? m : m[0], g),
            b = () => y,
            x = () =>
              D(a, t.lng || null, 'fallback' === c.nsMode ? m : m[0], g),
            [C, L] = (0, i.useState)(b),
            j = m.join();
          t.lng && (j = `${t.lng}${j}`);
          let A = I(j),
            S = (0, i.useRef)(!0);
          (0, i.useEffect)(() => {
            let { bindI18n: e, bindI18nStore: n } = c;
            (S.current = !0),
              v ||
                p ||
                (t.lng
                  ? u(a, t.lng, m, () => {
                      S.current && L(x);
                    })
                  : l(a, m, () => {
                      S.current && L(x);
                    })),
              v && A && A !== j && S.current && L(x);
            let r = () => {
              S.current && L(x);
            };
            return (
              e && a && a.on(e, r),
              n && a && a.store.on(n, r),
              () => {
                (S.current = !1),
                  e && a && e.split(' ').forEach((e) => a.off(e, r)),
                  n && a && n.split(' ').forEach((e) => a.store.off(e, r));
              }
            );
          }, [a, j]),
            (0, i.useEffect)(() => {
              S.current && v && L(b);
            }, [a, g, v]);
          let k = [C, a, v];
          if (((k.t = C), (k.i18n = a), (k.ready = v), v || (!v && !p)))
            return k;
          throw new Promise((e) => {
            t.lng ? u(a, t.lng, m, () => e()) : l(a, m, () => e());
          });
        };
    },
    39099: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ue: function () {
          return f;
        },
      });
      let r = (e) => {
          let t;
          let n = new Set(),
            r = (e, r) => {
              let i = 'function' == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : 'object' != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
                ),
                  n.clear();
              },
            },
            s = (t = e(r, i, o));
          return o;
        },
        i = (e) => (e ? r(e) : r);
      var o = n(2265),
        s = n(35006);
      let { useDebugValue: a } = o,
        { useSyncExternalStoreWithSelector: l } = s,
        u = !1,
        c = (e) => e,
        d = (e) => {
          'function' != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
            );
          let t = 'function' == typeof e ? i(e) : e,
            n = (e, n) =>
              (function (e, t = c, n) {
                n &&
                  !u &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
                  ),
                  (u = !0));
                let r = l(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getInitialState,
                  t,
                  n,
                );
                return a(r), r;
              })(t, e, n);
          return Object.assign(n, t), n;
        },
        f = (e) => (e ? d(e) : d);
    },
    89291: function (e, t, n) {
      'use strict';
      n.d(t, {
        mW: function () {
          return s;
        },
        tJ: function () {
          return d;
        },
      });
      let r = new Map(),
        i = (e) => {
          let t = r.get(e);
          return t
            ? Object.fromEntries(
                Object.entries(t.stores).map(([e, t]) => [e, t.getState()]),
              )
            : {};
        },
        o = (e, t, n) => {
          if (void 0 === e)
            return { type: 'untracked', connection: t.connect(n) };
          let i = r.get(n.name);
          if (i) return { type: 'tracked', store: e, ...i };
          let o = { connection: t.connect(n), stores: {} };
          return r.set(n.name, o), { type: 'tracked', store: e, ...o };
        },
        s =
          (e, t = {}) =>
          (n, r, s) => {
            let l;
            let { enabled: u, anonymousActionType: c, store: d, ...f } = t;
            try {
              l = (null == u || u) && window.__REDUX_DEVTOOLS_EXTENSION__;
            } catch (e) {}
            if (!l)
              return (
                u &&
                  console.warn(
                    '[zustand devtools middleware] Please install/enable Redux devtools extension',
                  ),
                e(n, r, s)
              );
            let { connection: h, ...p } = o(d, l, f),
              g = !0;
            s.setState = (e, t, o) => {
              let a = n(e, t);
              if (!g) return a;
              let l =
                void 0 === o
                  ? { type: c || 'anonymous' }
                  : 'string' == typeof o
                    ? { type: o }
                    : o;
              return (
                void 0 === d
                  ? null == h || h.send(l, r())
                  : null == h ||
                    h.send(
                      { ...l, type: `${d}/${l.type}` },
                      { ...i(f.name), [d]: s.getState() },
                    ),
                a
              );
            };
            let m = (...e) => {
                let t = g;
                (g = !1), n(...e), (g = t);
              },
              v = e(s.setState, r, s);
            if (
              ('untracked' === p.type
                ? null == h || h.init(v)
                : ((p.stores[p.store] = s),
                  null == h ||
                    h.init(
                      Object.fromEntries(
                        Object.entries(p.stores).map(([e, t]) => [
                          e,
                          e === p.store ? v : t.getState(),
                        ]),
                      ),
                    )),
              s.dispatchFromDevtools && 'function' == typeof s.dispatch)
            ) {
              let e = !1,
                t = s.dispatch;
              s.dispatch = (...n) => {
                '__setState' !== n[0].type ||
                  e ||
                  (console.warn(
                    '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.',
                  ),
                  (e = !0)),
                  t(...n);
              };
            }
            return (
              h.subscribe((e) => {
                var t;
                switch (e.type) {
                  case 'ACTION':
                    if ('string' != typeof e.payload) {
                      console.error(
                        '[zustand devtools middleware] Unsupported action format',
                      );
                      return;
                    }
                    return a(e.payload, (e) => {
                      if ('__setState' === e.type) {
                        if (void 0 === d) {
                          m(e.state);
                          return;
                        }
                        1 !== Object.keys(e.state).length &&
                          console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                        let t = e.state[d];
                        if (null == t) return;
                        JSON.stringify(s.getState()) !== JSON.stringify(t) &&
                          m(t);
                        return;
                      }
                      s.dispatchFromDevtools &&
                        'function' == typeof s.dispatch &&
                        s.dispatch(e);
                    });
                  case 'DISPATCH':
                    switch (e.payload.type) {
                      case 'RESET':
                        if ((m(v), void 0 === d))
                          return null == h ? void 0 : h.init(s.getState());
                        return null == h ? void 0 : h.init(i(f.name));
                      case 'COMMIT':
                        if (void 0 === d) {
                          null == h || h.init(s.getState());
                          break;
                        }
                        return null == h ? void 0 : h.init(i(f.name));
                      case 'ROLLBACK':
                        return a(e.state, (e) => {
                          if (void 0 === d) {
                            m(e), null == h || h.init(s.getState());
                            return;
                          }
                          m(e[d]), null == h || h.init(i(f.name));
                        });
                      case 'JUMP_TO_STATE':
                      case 'JUMP_TO_ACTION':
                        return a(e.state, (e) => {
                          if (void 0 === d) {
                            m(e);
                            return;
                          }
                          JSON.stringify(s.getState()) !==
                            JSON.stringify(e[d]) && m(e[d]);
                        });
                      case 'IMPORT_STATE': {
                        let { nextLiftedState: n } = e.payload,
                          r =
                            null == (t = n.computedStates.slice(-1)[0])
                              ? void 0
                              : t.state;
                        if (!r) return;
                        void 0 === d ? m(r) : m(r[d]),
                          null == h || h.send(null, n);
                        break;
                      }
                      case 'PAUSE_RECORDING':
                        return (g = !g);
                    }
                    return;
                }
              }),
              v
            );
          },
        a = (e, t) => {
          let n;
          try {
            n = JSON.parse(e);
          } catch (e) {
            console.error(
              '[zustand devtools middleware] Could not parse the received json',
              e,
            );
          }
          void 0 !== n && t(n);
        },
        l = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => l(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => l(t)(e),
            };
          }
        },
        u = (e, t) => (n, r, i) => {
          let o,
            s,
            a = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            u = !1,
            c = new Set(),
            d = new Set();
          try {
            o = a.getStorage();
          } catch (e) {}
          if (!o)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`,
                ),
                  n(...e);
              },
              r,
              i,
            );
          let f = l(a.serialize),
            h = () => {
              let e;
              let t = f({ state: a.partialize({ ...r() }), version: a.version })
                .then((e) => o.setItem(a.name, e))
                .catch((t) => {
                  e = t;
                });
              if (e) throw e;
              return t;
            },
            p = i.setState;
          i.setState = (e, t) => {
            p(e, t), h();
          };
          let g = e(
              (...e) => {
                n(...e), h();
              },
              r,
              i,
            ),
            m = () => {
              var e;
              if (!o) return;
              (u = !1), c.forEach((e) => e(r()));
              let t =
                (null == (e = a.onRehydrateStorage)
                  ? void 0
                  : e.call(a, r())) || void 0;
              return l(o.getItem.bind(o))(a.name)
                .then((e) => {
                  if (e) return a.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ('number' != typeof e.version || e.version === a.version)
                      return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided",
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((s = a.merge(e, null != (t = r()) ? t : g)), !0), h()
                  );
                })
                .then(() => {
                  null == t || t(s, void 0), (u = !0), d.forEach((e) => e(s));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (i.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.getStorage && (o = e.getStorage());
              },
              clearStorage: () => {
                null == o || o.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => m(),
              hasHydrated: () => u,
              onHydrate: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            m(),
            s || g
          );
        },
        c = (e, t) => (n, r, i) => {
          let o,
            s = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      i = null != (t = n.getItem(e)) ? t : null;
                    return i instanceof Promise ? i.then(r) : r(i);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            a = !1,
            u = new Set(),
            c = new Set(),
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
                ),
                  n(...e);
              },
              r,
              i,
            );
          let f = () => {
              let e = s.partialize({ ...r() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            h = i.setState;
          i.setState = (e, t) => {
            h(e, t), f();
          };
          let p = e(
            (...e) => {
              n(...e), f();
            },
            r,
            i,
          );
          i.getInitialState = () => p;
          let g = () => {
            var e, t;
            if (!d) return;
            (a = !1),
              u.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : p);
              });
            let i =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = r()) ? e : p)) || void 0;
            return l(d.getItem.bind(d))(s.name)
              .then((e) => {
                if (e) {
                  if ('number' != typeof e.version || e.version === s.version)
                    return [!1, e.state];
                  if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided",
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [i, a] = e;
                if ((n((o = s.merge(a, null != (t = r()) ? t : p)), !0), i))
                  return f();
              })
              .then(() => {
                null == i || i(o, void 0),
                  (o = r()),
                  (a = !0),
                  c.forEach((e) => e(o));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => g(),
              hasHydrated: () => a,
              onHydrate: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
            }),
            s.skipHydration || g(),
            o || p
          );
        },
        d = (e, t) =>
          'getStorage' in t || 'serialize' in t || 'deserialize' in t
            ? (console.warn(
                '[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.',
              ),
              u(e, t))
            : c(e, t);
    },
  },
]);
