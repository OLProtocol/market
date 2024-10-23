'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6803],
  {
    56803: function (e, t, r) {
      r.d(t, {
        i: function () {
          return S;
        },
      });
      var l = r(2265),
        n = r(12094),
        a = r(55971),
        s = r(65262),
        o = r(46896),
        i = r(83892),
        u = r(98647),
        d = r(2068),
        c = r(21616),
        g = (0, d.tv)({
          slots: {
            base: 'group/toggle relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent select-none',
            wrapper: [
              'px-1',
              'relative',
              'inline-flex',
              'items-center',
              'justify-start',
              'flex-shrink-0',
              'overflow-hidden',
              'bg-default-200',
              'rounded-full',
              ...c.ID,
            ],
            thumb: [
              'z-10',
              'flex',
              'items-center',
              'justify-center',
              'bg-white',
              'shadow-small',
              'rounded-full',
              'origin-right',
            ],
            startContent:
              'z-0 absolute left-1.5 rtl:right-1.5 rtl:left-[unset] text-current',
            endContent:
              'z-0 absolute right-1.5 rtl:left-1.5 rtl:right-[unset] text-default-600',
            thumbIcon: 'text-black',
            label: 'relative text-foreground select-none',
          },
          variants: {
            color: {
              default: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-default-400',
                  'group-data-[selected=true]/toggle:text-default-foreground',
                ],
              },
              primary: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-primary',
                  'group-data-[selected=true]/toggle:text-primary-foreground',
                ],
              },
              secondary: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-secondary',
                  'group-data-[selected=true]/toggle:text-secondary-foreground',
                ],
              },
              success: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-success',
                  'group-data-[selected=true]/toggle:text-success-foreground',
                ],
              },
              warning: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-warning',
                  'group-data-[selected=true]/toggle:text-warning-foreground',
                ],
              },
              danger: {
                wrapper: [
                  'group-data-[selected=true]/toggle:bg-danger',
                  'data-[selected=true]:text-danger-foreground',
                ],
              },
            },
            size: {
              sm: {
                wrapper: 'w-10 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]',
                thumb: [
                  'w-4 h-4 text-tiny',
                  'group-data-[selected=true]/toggle:ml-4 rtl:group-data-[selected=true]/toggle:ml-0 rtl:group-data-[selected=true]/toggle:mr-4',
                ],
                endContent: 'text-tiny',
                startContent: 'text-tiny',
                label: 'text-small',
              },
              md: {
                wrapper: 'w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset]',
                thumb: [
                  'w-5 h-5 text-small',
                  'group-data-[selected=true]/toggle:ml-5 rtl:group-data-[selected=true]/toggle:ml-0 rtl:group-data-[selected=true]/toggle:mr-5',
                ],
                endContent: 'text-small',
                startContent: 'text-small',
                label: 'text-medium',
              },
              lg: {
                wrapper: 'w-14 h-8 mr-2 rtl:ml-2 rtl:mr-[unset]',
                thumb: [
                  'w-6 h-6 text-medium',
                  'group-data-[selected=true]/toggle:ml-6 rtl:group-data-[selected=true]/toggle:ml-0 rtl:group-data-[selected=true]/toggle:mr-6',
                ],
                endContent: 'text-medium',
                startContent: 'text-medium',
                label: 'text-large',
              },
            },
            isDisabled: {
              true: { base: 'opacity-disabled pointer-events-none' },
            },
            disableAnimation: {
              true: { wrapper: 'transition-none', thumb: 'transition-none' },
              false: {
                wrapper: 'transition-background',
                thumb: 'transition-all',
                startContent: [
                  'opacity-0',
                  'scale-50',
                  'transition-transform-opacity',
                  'group-data-[selected=true]/toggle:scale-100',
                  'group-data-[selected=true]/toggle:opacity-100',
                ],
                endContent: [
                  'opacity-100',
                  'transition-transform-opacity',
                  'group-data-[selected=true]/toggle:translate-x-3',
                  'group-data-[selected=true]/toggle:opacity-0',
                ],
              },
            },
          },
          defaultVariants: { color: 'primary', size: 'md', isDisabled: !1 },
          compoundVariants: [
            {
              disableAnimation: !1,
              size: 'sm',
              class: {
                thumb: [
                  'group-data-[pressed=true]/toggle:w-5',
                  'group-data-[selected]/toggle:group-data-[pressed]/toggle:ml-3',
                ],
              },
            },
            {
              disableAnimation: !1,
              size: 'md',
              class: {
                thumb: [
                  'group-data-[pressed=true]/toggle:w-6',
                  'group-data-[selected]/toggle:group-data-[pressed]/toggle:ml-4',
                ],
              },
            },
            {
              disableAnimation: !1,
              size: 'lg',
              class: {
                thumb: [
                  'group-data-[pressed=true]/toggle:w-7',
                  'group-data-[selected]/toggle:group-data-[pressed]/toggle:ml-5',
                ],
              },
            },
          ],
        }),
        p = r(277),
        m = r(5722),
        b = r(36222),
        h = r(65263),
        f = r(53640),
        v = r(22263),
        w = r(18918),
        y = r(25829);
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let x = new Map();
      var P = r(44839);
      let C = 'undefined' != typeof document ? l.useLayoutEffect : () => {};
      class E {
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
      let F = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
      };
      function k(e) {
        let {
            children: t,
            elementType: r = 'div',
            isFocusable: n,
            style: a,
            ...s
          } = e,
          { visuallyHiddenProps: o } = (function (e = {}) {
            let { style: t, isFocusable: r } = e,
              [n, a] = (0, l.useState)(!1),
              { focusWithinProps: s } = (function (e) {
                let t,
                  r,
                  {
                    isDisabled: n,
                    onBlurWithin: a,
                    onFocusWithin: s,
                    onFocusWithinChange: o,
                  } = e,
                  i = (0, l.useRef)({ isFocusWithin: !1 }),
                  u = (0, l.useCallback)(
                    (e) => {
                      i.current.isFocusWithin &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((i.current.isFocusWithin = !1), a && a(e), o && o(!1));
                    },
                    [a, o, i],
                  ),
                  d =
                    ((t = (0, l.useRef)({ isFocused: !1, observer: null })),
                    C(() => {
                      let e = t.current;
                      return () => {
                        e.observer &&
                          (e.observer.disconnect(), (e.observer = null));
                      };
                    }, []),
                    (r = (function (e) {
                      let t = (0, l.useRef)(null);
                      return (
                        C(() => {
                          t.current = e;
                        }, [e]),
                        (0, l.useCallback)((...e) => {
                          let r = t.current;
                          return null == r ? void 0 : r(...e);
                        }, [])
                      );
                    })((e) => {
                      null == u || u(e);
                    })),
                    (0, l.useCallback)(
                      (e) => {
                        if (
                          e.target instanceof HTMLButtonElement ||
                          e.target instanceof HTMLInputElement ||
                          e.target instanceof HTMLTextAreaElement ||
                          e.target instanceof HTMLSelectElement
                        ) {
                          t.current.isFocused = !0;
                          let l = e.target;
                          l.addEventListener(
                            'focusout',
                            (e) => {
                              (t.current.isFocused = !1),
                                l.disabled && r(new E('blur', e)),
                                t.current.observer &&
                                  (t.current.observer.disconnect(),
                                  (t.current.observer = null));
                            },
                            { once: !0 },
                          ),
                            (t.current.observer = new MutationObserver(() => {
                              if (t.current.isFocused && l.disabled) {
                                var e;
                                null === (e = t.current.observer) ||
                                  void 0 === e ||
                                  e.disconnect();
                                let r =
                                  l === document.activeElement
                                    ? null
                                    : document.activeElement;
                                l.dispatchEvent(
                                  new FocusEvent('blur', { relatedTarget: r }),
                                ),
                                  l.dispatchEvent(
                                    new FocusEvent('focusout', {
                                      bubbles: !0,
                                      relatedTarget: r,
                                    }),
                                  );
                              }
                            })),
                            t.current.observer.observe(l, {
                              attributes: !0,
                              attributeFilter: ['disabled'],
                            });
                        }
                      },
                      [r],
                    )),
                  c = (0, l.useCallback)(
                    (e) => {
                      i.current.isFocusWithin ||
                        document.activeElement !== e.target ||
                        (s && s(e),
                        o && o(!0),
                        (i.current.isFocusWithin = !0),
                        d(e));
                    },
                    [s, o, d],
                  );
                return n
                  ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                  : { focusWithinProps: { onFocus: c, onBlur: u } };
              })({ isDisabled: !r, onFocusWithinChange: (e) => a(e) }),
              o = (0, l.useMemo)(() => (n ? t : t ? { ...F, ...t } : F), [n]);
            return { visuallyHiddenProps: { ...s, style: o } };
          })(e);
        return l.createElement(
          r,
          (function (...e) {
            let t = { ...e[0] };
            for (let r = 1; r < e.length; r++) {
              let l = e[r];
              for (let e in l) {
                let r = t[e],
                  n = l[e];
                'function' == typeof r &&
                'function' == typeof n &&
                'o' === e[0] &&
                'n' === e[1] &&
                e.charCodeAt(2) >= 65 &&
                90 >= e.charCodeAt(2)
                  ? (t[e] = (function (...e) {
                      return (...t) => {
                        for (let r of e) 'function' == typeof r && r(...t);
                      };
                    })(r, n))
                  : ('className' === e || 'UNSAFE_className' === e) &&
                      'string' == typeof r &&
                      'string' == typeof n
                    ? (t[e] = (0, P.Z)(r, n))
                    : 'id' === e && r && n
                      ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let r = x.get(e);
                          if (r) return r(t), t;
                          let l = x.get(t);
                          return l ? (l(e), e) : t;
                        })(r, n))
                      : (t[e] = void 0 !== n ? n : r);
              }
            }
            return t;
          })(s, o),
          t,
        );
      }
      var W = r(57437),
        N = (0, a.Gp)((e, t) => {
          let {
              Component: r,
              children: d,
              startContent: c,
              endContent: x,
              thumbIcon: P,
              getBaseProps: C,
              getInputProps: E,
              getWrapperProps: F,
              getThumbProps: N,
              getThumbIconProps: S,
              getLabelProps: T,
              getStartContentProps: D,
              getEndContentProps: B,
            } = (function () {
              var e, t;
              let r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                d = (0, n.w)(),
                [c, x] = (0, a.oe)(r, g.variantKeys),
                {
                  ref: P,
                  as: C,
                  name: E,
                  value: F = '',
                  isReadOnly: k = !1,
                  autoFocus: W = !1,
                  startContent: N,
                  endContent: S,
                  defaultSelected: T,
                  isSelected: D,
                  children: B,
                  thumbIcon: A,
                  className: j,
                  classNames: I,
                  onChange: M,
                  onValueChange: R,
                  ...z
                } = c,
                H = (0, l.useRef)(null),
                L = (0, l.useRef)(null),
                O =
                  null !=
                    (t =
                      null != (e = r.disableAnimation)
                        ? e
                        : null == d
                          ? void 0
                          : d.disableAnimation) && t,
                _ = (0, l.useId)(),
                G = (0, l.useMemo)(() => {
                  let e = z['aria-label'] || 'string' == typeof B ? B : void 0;
                  return {
                    name: E,
                    value: F,
                    children: B,
                    autoFocus: W,
                    defaultSelected: T,
                    isSelected: D,
                    isDisabled: !!r.isDisabled,
                    isReadOnly: k,
                    'aria-label': e,
                    'aria-labelledby': z['aria-labelledby'] || _,
                    onChange: R,
                  };
                }, [
                  F,
                  E,
                  _,
                  B,
                  W,
                  k,
                  D,
                  T,
                  r.isDisabled,
                  z['aria-label'],
                  z['aria-labelledby'],
                  R,
                ]),
                U = (0, w.l)(G);
              (0, o.G)(() => {
                if (!L.current) return;
                let e = !!L.current.checked;
                U.setSelected(e);
              }, [L.current]);
              let {
                  inputProps: V,
                  isPressed: X,
                  isReadOnly: K,
                } = (function (e, t, r) {
                  let {
                    labelProps: l,
                    inputProps: n,
                    isSelected: a,
                    isPressed: s,
                    isDisabled: o,
                    isReadOnly: i,
                  } = (0, v.O)(e, t, r);
                  return {
                    labelProps: l,
                    inputProps: { ...n, role: 'switch', checked: a },
                    isSelected: a,
                    isPressed: s,
                    isDisabled: o,
                    isReadOnly: i,
                  };
                })(G, U, L),
                {
                  focusProps: Z,
                  isFocused: q,
                  isFocusVisible: J,
                } = (0, y.F)({ autoFocus: V.autoFocus }),
                { hoverProps: Q, isHovered: Y } = (0, i.X)({
                  isDisabled: V.disabled,
                }),
                $ = G.isDisabled || K,
                [ee, et] = (0, l.useState)(!1),
                { pressProps: er } = (0, u.r)({
                  isDisabled: $,
                  onPressStart(e) {
                    'keyboard' !== e.pointerType && et(!0);
                  },
                  onPressEnd(e) {
                    'keyboard' !== e.pointerType && et(!1);
                  },
                }),
                el = !$ && (ee || X),
                en = V.checked,
                ea = V.disabled,
                es = (0, l.useMemo)(
                  () => g({ ...x, disableAnimation: O }),
                  [(0, b.Xx)(x), O],
                ),
                eo = (0, h.W)(null == I ? void 0 : I.base, j),
                ei = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ...e,
                      'aria-hidden': !0,
                      className: (0, h.W)(
                        es.wrapper({
                          class: (0, h.W)(
                            null == I ? void 0 : I.wrapper,
                            null == e ? void 0 : e.className,
                          ),
                        }),
                      ),
                    };
                  },
                  [es, null == I ? void 0 : I.wrapper],
                ),
                eu = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ...e,
                      className: es.thumb({
                        class: (0, h.W)(
                          null == I ? void 0 : I.thumb,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    };
                  },
                  [es, null == I ? void 0 : I.thumb],
                ),
                ed = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ...e,
                      id: _,
                      className: es.label({
                        class: (0, h.W)(
                          null == I ? void 0 : I.label,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    };
                  },
                  [es, null == I ? void 0 : I.label, ea, en],
                ),
                ec = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { includeStateProps: !1 };
                    return (0, p.d)(
                      {
                        width: '1em',
                        height: '1em',
                        className: es.thumbIcon({
                          class: (0, h.W)(null == I ? void 0 : I.thumbIcon),
                        }),
                      },
                      e.includeStateProps ? { isSelected: en } : {},
                    );
                  },
                  [es, null == I ? void 0 : I.thumbIcon, en],
                ),
                eg = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      width: '1em',
                      height: '1em',
                      ...e,
                      className: es.startContent({
                        class: (0, h.W)(
                          null == I ? void 0 : I.startContent,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    };
                  },
                  [es, null == I ? void 0 : I.startContent, en],
                ),
                ep = (0, l.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      width: '1em',
                      height: '1em',
                      ...e,
                      className: es.endContent({
                        class: (0, h.W)(
                          null == I ? void 0 : I.endContent,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    };
                  },
                  [es, null == I ? void 0 : I.endContent, en],
                );
              return {
                Component: C || 'label',
                slots: es,
                classNames: I,
                domRef: H,
                children: B,
                thumbIcon: A,
                startContent: N,
                endContent: S,
                isHovered: Y,
                isSelected: en,
                isPressed: el,
                isFocused: q,
                isFocusVisible: J,
                isDisabled: ea,
                getBaseProps: (e) => ({
                  ...(0, p.d)(Q, er, z, e),
                  ref: H,
                  className: es.base({
                    class: (0, h.W)(eo, null == e ? void 0 : e.className),
                  }),
                  'data-disabled': (0, f.PB)(ea),
                  'data-selected': (0, f.PB)(en),
                  'data-readonly': (0, f.PB)(K),
                  'data-focus': (0, f.PB)(q),
                  'data-focus-visible': (0, f.PB)(J),
                  'data-hover': (0, f.PB)(Y),
                  'data-pressed': (0, f.PB)(el),
                }),
                getWrapperProps: ei,
                getInputProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...(0, p.d)(V, Z, e),
                    ref: (0, s.l)(L, P),
                    id: V.id,
                    onChange: (0, m.t)(M, V.onChange),
                  };
                },
                getLabelProps: ed,
                getThumbProps: eu,
                getThumbIconProps: ec,
                getStartContentProps: eg,
                getEndContentProps: ep,
              };
            })({ ...e, ref: t }),
            A =
              'function' == typeof P
                ? P(S({ includeStateProps: !0 }))
                : P && (0, l.cloneElement)(P, S()),
            j = c && (0, l.cloneElement)(c, D()),
            I = x && (0, l.cloneElement)(x, B());
          return (0, W.jsxs)(r, {
            ...C(),
            children: [
              (0, W.jsx)(k, {
                elementType: 'span',
                children: (0, W.jsx)('input', { ...E() }),
              }),
              (0, W.jsxs)('span', {
                ...F(),
                children: [
                  c && j,
                  (0, W.jsx)('span', { ...N(), children: P && A }),
                  x && I,
                ],
              }),
              d && (0, W.jsx)('span', { ...T(), children: d }),
            ],
          });
        });
      N.displayName = 'NextUI.Switch';
      var S = N;
    },
  },
]);
