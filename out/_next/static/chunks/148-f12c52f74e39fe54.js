'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [148],
  {
    70148: function (e, t, r) {
      r.d(t, {
        K: function () {
          return V;
        },
      });
      var n = r(57437);
      function i(e) {
        let { isSelected: t, disableAnimation: r, ...i } = e;
        return (0, n.jsx)('svg', {
          'aria-hidden': 'true',
          role: 'presentation',
          viewBox: '0 0 17 18',
          ...i,
          children: (0, n.jsx)('polyline', {
            fill: 'none',
            points: '1 9 7 14 15 4',
            stroke: 'currentColor',
            strokeDasharray: 22,
            strokeDashoffset: t ? 44 : 66,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            style:
              !r && t
                ? { transition: 'stroke-dashoffset 250ms linear 0.2s' }
                : {},
          }),
        });
      }
      function a(e) {
        let { isSelected: t, disableAnimation: r, ...i } = e;
        return (0, n.jsx)('svg', {
          stroke: 'currentColor',
          strokeWidth: 3,
          viewBox: '0 0 24 24',
          ...i,
          children: (0, n.jsx)('line', {
            x1: '21',
            x2: '3',
            y1: '12',
            y2: '12',
          }),
        });
      }
      function o(e) {
        let { isIndeterminate: t, ...r } = e;
        return (0, n.jsx)(t ? a : i, { ...r });
      }
      var [l, s] = (0, r(37561).k)({
          name: 'CheckboxGroupContext',
          strict: !1,
        }),
        u = r(12094),
        d = r(2265),
        c = r(18918),
        f = r(2068),
        p = r(21616),
        v = (0, f.tv)({
          slots: {
            base: 'group/checkbox relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none',
            wrapper: [
              'relative',
              'inline-flex',
              'items-center',
              'justify-center',
              'flex-shrink-0',
              'overflow-hidden',
              "before:content-['']",
              'before:absolute',
              'before:inset-0',
              'before:border-solid',
              'before:border-2',
              'before:box-border',
              'before:border-default',
              "after:content-['']",
              'after:absolute',
              'after:inset-0',
              'after:scale-50',
              'after:opacity-0',
              'after:origin-center',
              'group-data-[selected=true]/checkbox:after:scale-100',
              'group-data-[selected=true]/checkbox:after:opacity-100',
              'group-data-[hover=true]/checkbox:before:bg-default-100',
              ...p.ID,
            ],
            icon: 'z-10 w-4 h-3 opacity-0 group-data-[selected=true]/checkbox:opacity-100',
            label: 'relative text-foreground select-none',
          },
          variants: {
            color: {
              default: {
                wrapper:
                  'after:bg-default after:text-default-foreground text-default-foreground',
              },
              primary: {
                wrapper:
                  'after:bg-primary after:text-primary-foreground text-primary-foreground',
              },
              secondary: {
                wrapper:
                  'after:bg-secondary after:text-secondary-foreground text-secondary-foreground',
              },
              success: {
                wrapper:
                  'after:bg-success after:text-success-foreground text-success-foreground',
              },
              warning: {
                wrapper:
                  'after:bg-warning after:text-warning-foreground text-warning-foreground',
              },
              danger: {
                wrapper:
                  'after:bg-danger after:text-danger-foreground text-danger-foreground',
              },
            },
            size: {
              sm: {
                wrapper: [
                  'w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]',
                  'rounded-[calc(theme(borderRadius.medium)*0.5)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.5)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.5)]',
                ],
                label: 'text-small',
                icon: 'w-3 h-2',
              },
              md: {
                wrapper: [
                  'w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]',
                  'rounded-[calc(theme(borderRadius.medium)*0.6)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.6)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.6)]',
                ],
                label: 'text-medium',
                icon: 'w-4 h-3',
              },
              lg: {
                wrapper: [
                  'w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]',
                  'rounded-[calc(theme(borderRadius.medium)*0.7)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.7)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.7)]',
                ],
                label: 'text-large',
                icon: 'w-5 h-4',
              },
            },
            radius: {
              none: {
                wrapper: 'rounded-none before:rounded-none after:rounded-none',
              },
              sm: {
                wrapper: [
                  'rounded-[calc(theme(borderRadius.medium)*0.5)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.5)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.5)]',
                ],
              },
              md: {
                wrapper: [
                  'rounded-[calc(theme(borderRadius.medium)*0.6)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.6)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.6)]',
                ],
              },
              lg: {
                wrapper: [
                  'rounded-[calc(theme(borderRadius.medium)*0.7)]',
                  'before:rounded-[calc(theme(borderRadius.medium)*0.7)]',
                  'after:rounded-[calc(theme(borderRadius.medium)*0.7)]',
                ],
              },
              full: {
                wrapper: 'rounded-full before:rounded-full after:rounded-full',
              },
            },
            lineThrough: {
              true: {
                label: [
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  "before:content-['']",
                  'before:absolute',
                  'before:bg-foreground',
                  'before:w-0',
                  'before:h-0.5',
                  'group-data-[selected=true]/checkbox:opacity-60',
                  'group-data-[selected=true]/checkbox:before:w-full',
                ],
              },
            },
            isDisabled: {
              true: { base: 'opacity-disabled pointer-events-none' },
            },
            isInvalid: {
              true: { wrapper: 'before:border-danger', label: 'text-danger' },
            },
            disableAnimation: {
              true: {
                wrapper: 'transition-none',
                icon: 'transition-none',
                label: 'transition-none',
              },
              false: {
                wrapper: [
                  'before:transition-colors',
                  'group-data-[pressed=true]/checkbox:scale-95',
                  'transition-transform',
                  'after:transition-transform-opacity',
                  'after:!ease-linear',
                  'after:!duration-200',
                  'motion-reduce:transition-none',
                ],
                icon: 'transition-opacity motion-reduce:transition-none',
                label:
                  'transition-colors-opacity before:transition-width motion-reduce:transition-none',
              },
            },
          },
          defaultVariants: {
            color: 'primary',
            size: 'md',
            isDisabled: !1,
            lineThrough: !1,
          },
        });
      (0, f.tv)({
        slots: {
          base: 'relative flex flex-col gap-2',
          label: 'relative text-medium text-foreground-500',
          wrapper:
            'flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row',
          description: 'text-small text-foreground-400',
          errorMessage: 'text-small text-danger',
        },
        variants: {
          isRequired: {
            true: {
              label: "after:content-['*'] after:text-danger after:ml-0.5",
            },
          },
          isInvalid: { true: { description: 'text-danger' } },
          disableAnimation: {
            true: {},
            false: {
              description:
                'transition-colors !duration-150 motion-reduce:transition-none',
            },
          },
        },
        defaultVariants: { isInvalid: !1, isRequired: !1 },
      });
      var g = r(39166),
        b = r(98647),
        m = r(83892),
        y = r(25829),
        h = r(5722),
        T = r(277),
        E = r(53640),
        w = r(1144),
        P = r(31887),
        k = r(65263),
        x = r(21166),
        S = r(56804),
        L = r(22263);
      function C(e, t, r) {
        let n = (0, S.Q3)({ ...e, value: t.isSelected }),
          {
            isInvalid: i,
            validationErrors: a,
            validationDetails: o,
          } = n.displayValidation,
          {
            labelProps: l,
            inputProps: s,
            isSelected: u,
            isPressed: c,
            isDisabled: f,
            isReadOnly: p,
          } = (0, L.O)({ ...e, isInvalid: i }, t, r);
        (0, x.Q)(e, n, r);
        let {
          isIndeterminate: v,
          isRequired: g,
          validationBehavior: b = 'aria',
        } = e;
        return (
          (0, d.useEffect)(() => {
            r.current && (r.current.indeterminate = !!v);
          }),
          {
            labelProps: l,
            inputProps: {
              ...s,
              checked: u,
              'aria-required': (g && 'aria' === b) || void 0,
              required: g && 'native' === b,
            },
            isSelected: u,
            isPressed: c,
            isDisabled: f,
            isReadOnly: p,
            isInvalid: i,
            validationErrors: a,
            validationDetails: o,
          }
        );
      }
      let M = new WeakMap();
      var D = r(41821),
        K = r(46896),
        O = r(65262),
        R = r(55971);
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let F = new Map();
      var I = r(44839);
      let A = 'undefined' != typeof document ? d.useLayoutEffect : () => {};
      class B {
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
      let W = {
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
      function H(e) {
        let {
            children: t,
            elementType: r = 'div',
            isFocusable: n,
            style: i,
            ...a
          } = e,
          { visuallyHiddenProps: o } = (function (e = {}) {
            let { style: t, isFocusable: r } = e,
              [n, i] = (0, d.useState)(!1),
              { focusWithinProps: a } = (function (e) {
                let t,
                  r,
                  {
                    isDisabled: n,
                    onBlurWithin: i,
                    onFocusWithin: a,
                    onFocusWithinChange: o,
                  } = e,
                  l = (0, d.useRef)({ isFocusWithin: !1 }),
                  s = (0, d.useCallback)(
                    (e) => {
                      l.current.isFocusWithin &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((l.current.isFocusWithin = !1), i && i(e), o && o(!1));
                    },
                    [i, o, l],
                  ),
                  u =
                    ((t = (0, d.useRef)({ isFocused: !1, observer: null })),
                    A(() => {
                      let e = t.current;
                      return () => {
                        e.observer &&
                          (e.observer.disconnect(), (e.observer = null));
                      };
                    }, []),
                    (r = (function (e) {
                      let t = (0, d.useRef)(null);
                      return (
                        A(() => {
                          t.current = e;
                        }, [e]),
                        (0, d.useCallback)((...e) => {
                          let r = t.current;
                          return null == r ? void 0 : r(...e);
                        }, [])
                      );
                    })((e) => {
                      null == s || s(e);
                    })),
                    (0, d.useCallback)(
                      (e) => {
                        if (
                          e.target instanceof HTMLButtonElement ||
                          e.target instanceof HTMLInputElement ||
                          e.target instanceof HTMLTextAreaElement ||
                          e.target instanceof HTMLSelectElement
                        ) {
                          t.current.isFocused = !0;
                          let n = e.target;
                          n.addEventListener(
                            'focusout',
                            (e) => {
                              (t.current.isFocused = !1),
                                n.disabled && r(new B('blur', e)),
                                t.current.observer &&
                                  (t.current.observer.disconnect(),
                                  (t.current.observer = null));
                            },
                            { once: !0 },
                          ),
                            (t.current.observer = new MutationObserver(() => {
                              if (t.current.isFocused && n.disabled) {
                                var e;
                                null === (e = t.current.observer) ||
                                  void 0 === e ||
                                  e.disconnect();
                                let r =
                                  n === document.activeElement
                                    ? null
                                    : document.activeElement;
                                n.dispatchEvent(
                                  new FocusEvent('blur', { relatedTarget: r }),
                                ),
                                  n.dispatchEvent(
                                    new FocusEvent('focusout', {
                                      bubbles: !0,
                                      relatedTarget: r,
                                    }),
                                  );
                              }
                            })),
                            t.current.observer.observe(n, {
                              attributes: !0,
                              attributeFilter: ['disabled'],
                            });
                        }
                      },
                      [r],
                    )),
                  c = (0, d.useCallback)(
                    (e) => {
                      l.current.isFocusWithin ||
                        document.activeElement !== e.target ||
                        (a && a(e),
                        o && o(!0),
                        (l.current.isFocusWithin = !0),
                        u(e));
                    },
                    [a, o, u],
                  );
                return n
                  ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                  : { focusWithinProps: { onFocus: c, onBlur: s } };
              })({ isDisabled: !r, onFocusWithinChange: (e) => i(e) }),
              o = (0, d.useMemo)(() => (n ? t : t ? { ...W, ...t } : W), [n]);
            return { visuallyHiddenProps: { ...a, style: o } };
          })(e);
        return d.createElement(
          r,
          (function (...e) {
            let t = { ...e[0] };
            for (let r = 1; r < e.length; r++) {
              let n = e[r];
              for (let e in n) {
                let r = t[e],
                  i = n[e];
                'function' == typeof r &&
                'function' == typeof i &&
                'o' === e[0] &&
                'n' === e[1] &&
                e.charCodeAt(2) >= 65 &&
                90 >= e.charCodeAt(2)
                  ? (t[e] = (function (...e) {
                      return (...t) => {
                        for (let r of e) 'function' == typeof r && r(...t);
                      };
                    })(r, i))
                  : ('className' === e || 'UNSAFE_className' === e) &&
                      'string' == typeof r &&
                      'string' == typeof i
                    ? (t[e] = (0, I.Z)(r, i))
                    : 'id' === e && r && i
                      ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let r = F.get(e);
                          if (r) return r(t), t;
                          let n = F.get(t);
                          return n ? (n(e), e) : t;
                        })(r, i))
                      : (t[e] = void 0 !== i ? i : r);
              }
            }
            return t;
          })(a, o),
          t,
        );
      }
      var N = (0, R.Gp)((e, t) => {
        let {
            Component: r,
            children: i,
            icon: a = (0, n.jsx)(o, {}),
            getBaseProps: l,
            getWrapperProps: f,
            getInputProps: p,
            getIconProps: x,
            getLabelProps: L,
          } = (function () {
            var e, t, r, n, i, a, o, l;
            let f =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              p = (0, u.w)(),
              x = s(),
              L = !!x,
              {
                as: R,
                ref: F,
                value: I = '',
                children: A,
                icon: B,
                name: W,
                isRequired: H,
                isReadOnly: N = !1,
                autoFocus: V = !1,
                isSelected: j,
                size: G = null != (e = null == x ? void 0 : x.size) ? e : 'md',
                color: U = null != (t = null == x ? void 0 : x.color)
                  ? t
                  : 'primary',
                radius: z = null == x ? void 0 : x.radius,
                lineThrough: X = null !=
                  (r = null == x ? void 0 : x.lineThrough) && r,
                isDisabled: Y = null !=
                  (n = null == x ? void 0 : x.isDisabled) && n,
                disableAnimation: _ = null !=
                  (a =
                    null != (i = null == x ? void 0 : x.disableAnimation)
                      ? i
                      : null == p
                        ? void 0
                        : p.disableAnimation) && a,
                validationState: q,
                isInvalid: Z = q
                  ? 'invalid' === q
                  : null != (o = null == x ? void 0 : x.isInvalid) && o,
                isIndeterminate: Q = !1,
                validationBehavior: $ = null !=
                (l = null == x ? void 0 : x.validationBehavior)
                  ? l
                  : 'aria',
                defaultSelected: J,
                classNames: ee,
                className: et,
                onValueChange: er,
                ...en
              } = f;
            x &&
              E.Ts &&
              (j &&
                (0, w.Z)(
                  'The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.',
                  'Checkbox',
                ),
              J &&
                (0, w.Z)(
                  'The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.',
                  'Checkbox',
                ));
            let ei = (0, d.useRef)(null),
              ea = (0, d.useRef)(null),
              eo = f.onChange;
            L &&
              (eo = (0, h.t)(() => {
                x.groupState.resetValidation();
              }, eo));
            let el = (0, d.useId)(),
              es = (0, d.useMemo)(
                () => ({
                  name: W,
                  value: I,
                  children: A,
                  autoFocus: V,
                  defaultSelected: J,
                  validationBehavior: $,
                  isIndeterminate: Q,
                  isRequired: H,
                  isInvalid: Z,
                  isSelected: j,
                  isDisabled: Y,
                  isReadOnly: N,
                  'aria-label': (0, P.x)(en['aria-label'], A),
                  'aria-labelledby': en['aria-labelledby'] || el,
                  onChange: er,
                }),
                [
                  I,
                  W,
                  el,
                  A,
                  V,
                  Z,
                  Q,
                  Y,
                  N,
                  j,
                  J,
                  $,
                  en['aria-label'],
                  en['aria-labelledby'],
                  er,
                ],
              ),
              eu = (0, c.l)(es),
              {
                inputProps: ed,
                isSelected: ec,
                isDisabled: ef,
                isReadOnly: ep,
                isPressed: ev,
              } = L
                ? (function (e, t, r) {
                    var n, i;
                    let a = (function (e = {}) {
                        let { isReadOnly: t } = e,
                          [r, n] = (0, D.z)(
                            e.isSelected,
                            e.defaultSelected || !1,
                            e.onChange,
                          );
                        return {
                          isSelected: r,
                          setSelected: function (e) {
                            t || n(e);
                          },
                          toggle: function () {
                            t || n(!r);
                          },
                        };
                      })({
                        isReadOnly: e.isReadOnly || t.isReadOnly,
                        isSelected: t.isSelected(e.value),
                        onChange(r) {
                          r ? t.addValue(e.value) : t.removeValue(e.value),
                            e.onChange && e.onChange(r);
                        },
                      }),
                      {
                        name: o,
                        descriptionId: l,
                        errorMessageId: s,
                        validationBehavior: u,
                      } = M.get(t);
                    u =
                      null !== (n = e.validationBehavior) && void 0 !== n
                        ? n
                        : u;
                    let { realtimeValidation: c } = (0, S.Q3)({
                        ...e,
                        value: a.isSelected,
                        name: void 0,
                        validationBehavior: 'aria',
                      }),
                      f = (0, d.useRef)(S.PS),
                      p = () => {
                        t.setInvalid(e.value, c.isInvalid ? c : f.current);
                      };
                    (0, d.useEffect)(p);
                    let v = t.realtimeValidation.isInvalid
                        ? t.realtimeValidation
                        : c,
                      g = 'native' === u ? t.displayValidation : v,
                      b = C(
                        {
                          ...e,
                          isReadOnly: e.isReadOnly || t.isReadOnly,
                          isDisabled: e.isDisabled || t.isDisabled,
                          name: e.name || o,
                          isRequired:
                            null !== (i = e.isRequired) && void 0 !== i
                              ? i
                              : t.isRequired,
                          validationBehavior: u,
                          [S.tL]: {
                            realtimeValidation: v,
                            displayValidation: g,
                            resetValidation: t.resetValidation,
                            commitValidation: t.commitValidation,
                            updateValidation(e) {
                              (f.current = e), p();
                            },
                          },
                        },
                        a,
                        r,
                      );
                    return {
                      ...b,
                      inputProps: {
                        ...b.inputProps,
                        'aria-describedby':
                          [e['aria-describedby'], t.isInvalid ? s : null, l]
                            .filter(Boolean)
                            .join(' ') || void 0,
                      },
                    };
                  })({ ...es }, x.groupState, ea)
                : C({ ...es }, eu, ea),
              eg = ef || ep,
              [eb, em] = (0, d.useState)(!1),
              { pressProps: ey } = (0, b.r)({
                isDisabled: eg,
                onPressStart(e) {
                  'keyboard' !== e.pointerType && em(!0);
                },
                onPressEnd(e) {
                  'keyboard' !== e.pointerType && em(!1);
                },
              }),
              eh = !eg && (eb || ev),
              { hoverProps: eT, isHovered: eE } = (0, m.X)({
                isDisabled: ed.disabled,
              }),
              {
                focusProps: ew,
                isFocused: eP,
                isFocusVisible: ek,
              } = (0, y.F)({ autoFocus: ed.autoFocus }),
              ex = (0, d.useMemo)(
                () =>
                  v({
                    color: U,
                    size: G,
                    radius: z,
                    isInvalid: Z,
                    lineThrough: X,
                    isDisabled: ef,
                    disableAnimation: _,
                  }),
                [U, G, z, Z, X, ef, _],
              );
            (0, K.G)(() => {
              if (!ea.current) return;
              let e = !!ea.current.checked;
              eu.setSelected(e);
            }, [ea.current]);
            let eS = (0, g.W)(eo),
              eL = (0, d.useCallback)(
                (e) => {
                  if (ep || ef) {
                    e.preventDefault();
                    return;
                  }
                  null == eS || eS(e);
                },
                [ep, ef, eS],
              ),
              eC = (0, k.W)(null == ee ? void 0 : ee.base, et),
              eM = (0, d.useCallback)(
                () => ({
                  ref: ei,
                  className: ex.base({ class: eC }),
                  'data-disabled': (0, E.PB)(ef),
                  'data-selected': (0, E.PB)(ec || Q),
                  'data-invalid': (0, E.PB)(Z),
                  'data-hover': (0, E.PB)(eE),
                  'data-focus': (0, E.PB)(eP),
                  'data-pressed': (0, E.PB)(eh),
                  'data-readonly': (0, E.PB)(ed.readOnly),
                  'data-focus-visible': (0, E.PB)(ek),
                  'data-indeterminate': (0, E.PB)(Q),
                  ...(0, T.d)(eT, ey, en),
                }),
                [ex, eC, ef, ec, Q, Z, eE, eP, eh, ed.readOnly, ek, eT, ey, en],
              ),
              eD = (0, d.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    'aria-hidden': !0,
                    className: (0, k.W)(
                      ex.wrapper({
                        class: (0, k.W)(
                          null == ee ? void 0 : ee.wrapper,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    ),
                  };
                },
                [ex, null == ee ? void 0 : ee.wrapper],
              ),
              eK = (0, d.useCallback)(
                () => ({
                  ref: (0, O.l)(ea, F),
                  ...(0, T.d)(ed, ew),
                  onChange: (0, h.t)(ed.onChange, eL),
                }),
                [ed, ew, eL],
              ),
              eO = (0, d.useCallback)(
                () => ({
                  id: el,
                  className: ex.label({
                    class: null == ee ? void 0 : ee.label,
                  }),
                }),
                [ex, null == ee ? void 0 : ee.label, ef, ec, Z],
              ),
              eR = (0, d.useCallback)(
                () => ({
                  isSelected: ec,
                  isIndeterminate: Q,
                  disableAnimation: _,
                  className: ex.icon({ class: null == ee ? void 0 : ee.icon }),
                }),
                [ex, null == ee ? void 0 : ee.icon, ec, Q, _],
              );
            return {
              Component: R || 'label',
              icon: B,
              children: A,
              isSelected: ec,
              isDisabled: ef,
              isInvalid: Z,
              isFocused: eP,
              isHovered: eE,
              isFocusVisible: ek,
              getBaseProps: eM,
              getWrapperProps: eD,
              getInputProps: eK,
              getLabelProps: eO,
              getIconProps: eR,
            };
          })({ ...e, ref: t }),
          R = 'function' == typeof a ? a(x()) : (0, d.cloneElement)(a, x());
        return (0, n.jsxs)(r, {
          ...l(),
          children: [
            (0, n.jsx)(H, {
              elementType: 'span',
              children: (0, n.jsx)('input', { ...p() }),
            }),
            (0, n.jsx)('span', { ...f(), children: R }),
            i && (0, n.jsx)('span', { ...L(), children: i }),
          ],
        });
      });
      N.displayName = 'NextUI.Checkbox';
      var V = N;
    },
    39166: function (e, t, r) {
      r.d(t, {
        W: function () {
          return a;
        },
      });
      var n = r(2265),
        i = r(46896);
      function a(e, t = []) {
        let r = (0, n.useRef)(e);
        return (
          (0, i.G)(() => {
            r.current = e;
          }),
          (0, n.useCallback)((...e) => {
            var t;
            return null == (t = r.current) ? void 0 : t.call(r, ...e);
          }, t)
        );
      }
    },
    22263: function (e, t, r) {
      function n(...e) {
        return (...t) => {
          for (let r of e) 'function' == typeof r && r(...t);
        };
      }
      r.d(t, {
        O: function () {
          return eE;
        },
      });
      var i = r(2265);
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let a = new Map();
      var o = r(44839);
      function l(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let i = e[r];
          for (let e in i) {
            let r = t[e],
              l = i[e];
            'function' == typeof r &&
            'function' == typeof l &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = n(r, l))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof r &&
                  'string' == typeof l
                ? (t[e] = (0, o.Z)(r, l))
                : 'id' === e && r && l
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let r = a.get(e);
                      if (r) return r(t), t;
                      let n = a.get(t);
                      return n ? (n(e), e) : t;
                    })(r, l))
                  : (t[e] = void 0 !== l ? l : r);
          }
        }
        return t;
      }
      let s = new Set(['id']),
        u = new Set([
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-details',
        ]),
        d = new Set([
          'href',
          'hrefLang',
          'target',
          'rel',
          'download',
          'ping',
          'referrerPolicy',
        ]),
        c = /^(data-.*)$/,
        f = 'undefined' != typeof document ? i.useLayoutEffect : () => {};
      function p(e) {
        let t = (0, i.useRef)(null);
        return (
          f(() => {
            t.current = e;
          }, [e]),
          (0, i.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
      let v = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        g = (e) =>
          e && 'window' in e && e.window === e ? e : v(e).defaultView || window,
        b = new Map(),
        m = new Set();
      function y() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let n = b.get(r.target);
          if (
            n &&
            (n.delete(r.propertyName),
            0 === n.size &&
              (r.target.removeEventListener('transitioncancel', t),
              b.delete(r.target)),
            0 === b.size)
          ) {
            for (let e of m) e();
            m.clear();
          }
        };
        document.body.addEventListener('transitionrun', (r) => {
          if (!e(r) || !r.target) return;
          let n = b.get(r.target);
          n ||
            ((n = new Set()),
            b.set(r.target, n),
            r.target.addEventListener('transitioncancel', t, { once: !0 })),
            n.add(r.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function h(e) {
        requestAnimationFrame(() => {
          0 === b.size ? e() : m.add(e);
        });
      }
      function T(e) {
        if (
          (function () {
            if (null == E) {
              E = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (E = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return E;
          })()
        )
          e.focus({ preventScroll: !0 });
        else {
          let t = (function (e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n; )
              (t.offsetHeight < t.scrollHeight ||
                t.offsetWidth < t.scrollWidth) &&
                r.push({
                  element: t,
                  scrollTop: t.scrollTop,
                  scrollLeft: t.scrollLeft,
                }),
                (t = t.parentNode);
            return (
              n instanceof HTMLElement &&
                r.push({
                  element: n,
                  scrollTop: n.scrollTop,
                  scrollLeft: n.scrollLeft,
                }),
              r
            );
          })(e);
          e.focus(),
            (function (e) {
              for (let { element: t, scrollTop: r, scrollLeft: n } of e)
                (t.scrollTop = r), (t.scrollLeft = n);
            })(t);
        }
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? y()
          : document.addEventListener('DOMContentLoaded', y));
      let E = null;
      function w(e) {
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
      function P(e) {
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
      function k(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let x = k(function () {
          return P(/^Mac/i);
        }),
        S = k(function () {
          return P(/^iPhone/i);
        }),
        L = k(function () {
          return P(/^iPad/i) || (x() && navigator.maxTouchPoints > 1);
        }),
        C = k(function () {
          return S() || L();
        });
      k(function () {
        return x() || C();
      });
      let M = k(function () {
          return w(/AppleWebKit/i) && !D();
        }),
        D = k(function () {
          return w(/Chrome/i);
        }),
        K = k(function () {
          return w(/Android/i);
        }),
        O = k(function () {
          return w(/Firefox/i);
        });
      function R(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          (K() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      let F = null,
        I = new Set(),
        A = new Map(),
        B = !1,
        W = !1;
      function H(e, t) {
        for (let r of I) r(e, t);
      }
      function N(e) {
        (B = !0),
          e.metaKey ||
            (!x() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((F = 'keyboard'), H('keyboard', e));
      }
      function V(e) {
        (F = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((B = !0), H('pointer', e));
      }
      function j(e) {
        R(e) && ((B = !0), (F = 'virtual'));
      }
      function G(e) {
        e.target !== window &&
          e.target !== document &&
          (B || W || ((F = 'virtual'), H('virtual', e)), (B = !1), (W = !1));
      }
      function U() {
        (B = !1), (W = !0);
      }
      function z(e) {
        if ('undefined' == typeof window || A.get(g(e))) return;
        let t = g(e),
          r = v(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (B = !0), n.apply(this, arguments);
        }),
          r.addEventListener('keydown', N, !0),
          r.addEventListener('keyup', N, !0),
          r.addEventListener('click', j, !0),
          t.addEventListener('focus', G, !0),
          t.addEventListener('blur', U, !1),
          'undefined' != typeof PointerEvent
            ? (r.addEventListener('pointerdown', V, !0),
              r.addEventListener('pointermove', V, !0),
              r.addEventListener('pointerup', V, !0))
            : (r.addEventListener('mousedown', V, !0),
              r.addEventListener('mousemove', V, !0),
              r.addEventListener('mouseup', V, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              X(e);
            },
            { once: !0 },
          ),
          A.set(t, { focus: n });
      }
      let X = (e, t) => {
        let r = g(e),
          n = v(e);
        t && n.removeEventListener('DOMContentLoaded', t),
          A.has(r) &&
            ((r.HTMLElement.prototype.focus = A.get(r).focus),
            n.removeEventListener('keydown', N, !0),
            n.removeEventListener('keyup', N, !0),
            n.removeEventListener('click', j, !0),
            r.removeEventListener('focus', G, !0),
            r.removeEventListener('blur', U, !1),
            'undefined' != typeof PointerEvent
              ? (n.removeEventListener('pointerdown', V, !0),
                n.removeEventListener('pointermove', V, !0),
                n.removeEventListener('pointerup', V, !0))
              : (n.removeEventListener('mousedown', V, !0),
                n.removeEventListener('mousemove', V, !0),
                n.removeEventListener('mouseup', V, !0)),
            A.delete(r));
      };
      function Y(e, t) {
        f(() => {
          if (e && e.ref && t)
            return (
              (e.ref.current = t.current),
              () => {
                e.ref && (e.ref.current = null);
              }
            );
        });
      }
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let r = v(void 0);
          'loading' !== r.readyState
            ? z(void 0)
            : ((t = () => {
                z(void 0);
              }),
              r.addEventListener('DOMContentLoaded', t)),
            () => X(e, t);
        })();
      class _ {
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
      function q(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.',
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && r.stopPropagation();
        };
      }
      let Z = i.createContext(null),
        Q = 'default',
        $ = '',
        J = new WeakMap();
      function ee(e) {
        if (C()) {
          if ('default' === Q) {
            let t = v(e);
            ($ = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          Q = 'disabled';
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (J.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
      }
      function et(e) {
        if (C())
          'disabled' === Q &&
            ((Q = 'restoring'),
            setTimeout(() => {
              h(() => {
                if ('restoring' === Q) {
                  let t = v(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = $ || ''),
                    ($ = ''),
                    (Q = 'default');
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          J.has(e)
        ) {
          let t = J.get(e);
          'none' === e.style.userSelect && (e.style.userSelect = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            J.delete(e);
        }
      }
      let er = i.createContext({ register: () => {} });
      er.displayName = 'PressResponderContext';
      var en = r(52396),
        ei = r(49994),
        ea = r(93936);
      function eo(e, t, r = !0) {
        var n, i;
        let { metaKey: a, ctrlKey: o, altKey: l, shiftKey: s } = t;
        O() &&
          (null === (i = window.event) || void 0 === i
            ? void 0
            : null === (n = i.type) || void 0 === n
              ? void 0
              : n.startsWith('key')) &&
          '_blank' === e.target &&
          (x() ? (a = !0) : (o = !0));
        let u =
          M() && x() && !L()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: a,
                ctrlKey: o,
                altKey: l,
                shiftKey: s,
              })
            : new MouseEvent('click', {
                metaKey: a,
                ctrlKey: o,
                altKey: l,
                shiftKey: s,
                bubbles: !0,
                cancelable: !0,
              });
        (eo.isOpening = r), T(e), e.dispatchEvent(u), (eo.isOpening = !1);
      }
      eo.isOpening = !1;
      var el = new WeakMap();
      class es {
        continuePropagation() {
          (0, ea._)(this, el, !1);
        }
        get shouldStopPropagation() {
          return (0, en._)(this, el);
        }
        constructor(e, t, r, n) {
          var i;
          (0, ei._)(this, el, { writable: !0, value: void 0 }),
            (0, ea._)(this, el, !0);
          let a =
              null !== (i = null == n ? void 0 : n.target) && void 0 !== i
                ? i
                : r.currentTarget,
            o = null == a ? void 0 : a.getBoundingClientRect(),
            l,
            s = 0,
            u,
            d = null;
          null != r.clientX &&
            null != r.clientY &&
            ((u = r.clientX), (d = r.clientY)),
            o &&
              (null != u && null != d
                ? ((l = u - o.left), (s = d - o.top))
                : ((l = o.width / 2), (s = o.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = l),
            (this.y = s);
        }
      }
      let eu = Symbol('linkClicked');
      function ed(e) {
        let t,
          r,
          a,
          o,
          {
            onPress: s,
            onPressChange: u,
            onPressStart: d,
            onPressEnd: c,
            onPressUp: f,
            isDisabled: b,
            isPressed: m,
            preventFocusOnPress: y,
            shouldCancelOnPointerExit: h,
            allowTextSelectionOnPress: E,
            ref: w,
            ...P
          } = (function (e) {
            let t = (0, i.useContext)(er);
            if (t) {
              let { register: r, ...n } = t;
              (e = l(n, e)), r();
            }
            return Y(t, e.ref), e;
          })(e),
          [k, S] = (0, i.useState)(!1),
          L = (0, i.useRef)({
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
          { addGlobalListener: C, removeAllGlobalListeners: M } =
            ((t = (0, i.useRef)(new Map())),
            (r = (0, i.useCallback)((e, r, n, i) => {
              let a = (null == i ? void 0 : i.once)
                ? (...e) => {
                    t.current.delete(n), n(...e);
                  }
                : n;
              t.current.set(n, { type: r, eventTarget: e, fn: a, options: i }),
                e.addEventListener(r, n, i);
            }, [])),
            (a = (0, i.useCallback)((e, r, n, i) => {
              var a;
              let o =
                (null === (a = t.current.get(n)) || void 0 === a
                  ? void 0
                  : a.fn) || n;
              e.removeEventListener(r, o, i), t.current.delete(n);
            }, [])),
            (o = (0, i.useCallback)(() => {
              t.current.forEach((e, t) => {
                a(e.eventTarget, e.type, t, e.options);
              });
            }, [a])),
            (0, i.useEffect)(() => o, [o]),
            {
              addGlobalListener: r,
              removeGlobalListener: a,
              removeAllGlobalListeners: o,
            }),
          D = p((e, t) => {
            let r = L.current;
            if (b || r.didFirePressStart) return !1;
            let n = !0;
            if (((r.isTriggeringEvent = !0), d)) {
              let r = new es('pressstart', t, e);
              d(r), (n = r.shouldStopPropagation);
            }
            return (
              u && u(!0),
              (r.isTriggeringEvent = !1),
              (r.didFirePressStart = !0),
              S(!0),
              n
            );
          }),
          O = p((e, t, r = !0) => {
            let n = L.current;
            if (!n.didFirePressStart) return !1;
            (n.ignoreClickAfterPress = !0),
              (n.didFirePressStart = !1),
              (n.isTriggeringEvent = !0);
            let i = !0;
            if (c) {
              let r = new es('pressend', t, e);
              c(r), (i = r.shouldStopPropagation);
            }
            if ((u && u(!1), S(!1), s && r && !b)) {
              let r = new es('press', t, e);
              s(r), i && (i = r.shouldStopPropagation);
            }
            return (n.isTriggeringEvent = !1), i;
          }),
          F = p((e, t) => {
            let r = L.current;
            if (b) return !1;
            if (f) {
              r.isTriggeringEvent = !0;
              let n = new es('pressup', t, e);
              return f(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
          }),
          I = p((e) => {
            let t = L.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                O(eg(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              M(),
              E || et(t.target));
          }),
          A = p((e) => {
            h && I(e);
          }),
          B = (0, i.useMemo)(() => {
            let e = L.current,
              t = {
                onKeyDown(t) {
                  if (
                    ef(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var i;
                    ey(t.target, t.key) && t.preventDefault();
                    let a = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (a = D(t, 'keyboard'));
                      let i = t.currentTarget;
                      C(
                        v(t.currentTarget),
                        'keyup',
                        n((t) => {
                          ef(t, i) &&
                            !t.repeat &&
                            i.contains(t.target) &&
                            e.target &&
                            F(eg(e.target, t), 'keyboard');
                        }, r),
                        !0,
                      );
                    }
                    a && t.stopPropagation(),
                      t.metaKey &&
                        x() &&
                        (null === (i = e.metaKeyEvents) ||
                          void 0 === i ||
                          i.set(t.key, t.nativeEvent));
                  } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !eo.isOpening
                  ) {
                    let r = !0;
                    if (
                      (b && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType || R(t.nativeEvent)))
                    ) {
                      b || y || T(t.currentTarget);
                      let e = D(t, 'virtual'),
                        n = F(t, 'virtual'),
                        i = O(t, 'virtual');
                      r = e && n && i;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, n, i;
                if (e.isPressed && e.target && ef(t, e.target)) {
                  ey(t.target, t.key) && t.preventDefault();
                  let r = t.target;
                  O(eg(e.target, t), 'keyboard', e.target.contains(r)),
                    M(),
                    'Enter' !== t.key &&
                      ec(e.target) &&
                      e.target.contains(r) &&
                      !t[eu] &&
                      ((t[eu] = !0), eo(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (n = e.metaKeyEvents) ||
                      void 0 === n ||
                      n.delete(t.key);
                } else if (
                  'Meta' === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r
                    ? void 0
                    : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (i = e.target) ||
                      void 0 === i ||
                      i.dispatchEvent(new KeyboardEvent('keyup', r));
                }
              };
            if ('undefined' != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                var a;
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if (
                  ((a = t.nativeEvent),
                  (!K() && 0 === a.width && 0 === a.height) ||
                    (1 === a.width &&
                      1 === a.height &&
                      0 === a.pressure &&
                      0 === a.detail &&
                      'mouse' === a.pointerType))
                ) {
                  e.pointerType = 'virtual';
                  return;
                }
                em(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let o = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  b || y || T(t.currentTarget),
                  E || ee(e.target),
                  (o = D(t, e.pointerType)),
                  C(v(t.currentTarget), 'pointermove', r, !1),
                  C(v(t.currentTarget), 'pointerup', n, !1),
                  C(v(t.currentTarget), 'pointercancel', i, !1)),
                  o && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (em(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    eb(t, t.currentTarget) &&
                    F(t, e.pointerType || t.pointerType);
                });
              let r = (t) => {
                  t.pointerId === e.activePointerId &&
                    (e.target && eb(t, e.target)
                      ? e.isOverTarget ||
                        null == e.pointerType ||
                        ((e.isOverTarget = !0),
                        D(eg(e.target, t), e.pointerType))
                      : e.target &&
                        e.isOverTarget &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        O(eg(e.target, t), e.pointerType, !1),
                        A(t)));
                },
                n = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (eb(t, e.target) && null != e.pointerType
                      ? O(eg(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        O(eg(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    M(),
                    E || et(e.target));
                },
                i = (e) => {
                  I(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && I(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (em(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = R(t.nativeEvent) ? 'virtual' : 'mouse'),
                    b || y || T(t.currentTarget),
                    D(t, e.pointerType) && t.stopPropagation(),
                    C(v(t.currentTarget), 'mouseup', r, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (r = D(t, e.pointerType))),
                    r && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (r = O(t, e.pointerType, !1)),
                    A(t)),
                    r && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    F(t, e.pointerType || 'mouse');
                });
              let r = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), M(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && eb(t, e.target) && null != e.pointerType
                    ? O(eg(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      O(eg(e.target, t), e.pointerType, !1),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let r = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                r &&
                  ((e.activePointerId = r.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = 'touch'),
                  b || y || T(t.currentTarget),
                  E || ee(e.target),
                  D(ev(e.target, t), e.pointerType) && t.stopPropagation(),
                  C(g(t.currentTarget), 'scroll', n, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = ep(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && eb(r, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0),
                      (n = D(ev(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (n = O(ev(e.target, t), e.pointerType, !1)),
                      A(ev(e.target, t))),
                    n && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = ep(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && eb(r, t.currentTarget) && null != e.pointerType
                    ? (F(ev(e.target, t), e.pointerType),
                      (n = O(ev(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (n = O(ev(e.target, t), e.pointerType, !1)),
                    n && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !E && et(e.target),
                    M();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && I(ev(e.target, t)));
                });
              let n = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  I({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && I(e);
              };
            }
            return t;
          }, [C, b, y, M, E, I, A, O, D, F]);
        return (
          (0, i.useEffect)(
            () => () => {
              var e;
              E ||
                et(
                  null !== (e = L.current.target) && void 0 !== e ? e : void 0,
                );
            },
            [E],
          ),
          { isPressed: m || k, pressProps: l(P, B) }
        );
      }
      function ec(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function ef(e, t) {
        let { key: r, code: n } = e,
          i = t.getAttribute('role');
        return (
          ('Enter' === r || ' ' === r || 'Spacebar' === r || 'Space' === n) &&
          !(
            (t instanceof g(t).HTMLInputElement && !eT(t, r)) ||
            t instanceof g(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === i || (!i && ec(t))) && 'Enter' !== r)
        );
      }
      function ep(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function ev(e, t) {
        let r = 0,
          n = 0;
        return (
          t.targetTouches &&
            1 === t.targetTouches.length &&
            ((r = t.targetTouches[0].clientX),
            (n = t.targetTouches[0].clientY)),
          {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: r,
            clientY: n,
          }
        );
      }
      function eg(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
        };
      }
      function eb(e, t) {
        let r,
          n,
          i = t.getBoundingClientRect(),
          a =
            ((r = 0),
            (n = 0),
            void 0 !== e.width
              ? (r = e.width / 2)
              : void 0 !== e.radiusX && (r = e.radiusX),
            void 0 !== e.height
              ? (n = e.height / 2)
              : void 0 !== e.radiusY && (n = e.radiusY),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return (
          !(i.left > a.right) &&
          !(a.left > i.right) &&
          !(i.top > a.bottom) &&
          !(a.top > i.bottom)
        );
      }
      function em(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
      }
      function ey(e, t) {
        return e instanceof HTMLInputElement
          ? !eT(e, t)
          : e instanceof HTMLButtonElement
            ? 'submit' !== e.type && 'reset' !== e.type
            : !ec(e);
      }
      let eh = new Set([
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
      function eT(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type
          ? ' ' === t
          : eh.has(e.type);
      }
      function eE(e, t, r) {
        var n, a;
        let o,
          g,
          {
            isDisabled: b = !1,
            isReadOnly: m = !1,
            value: y,
            name: E,
            children: w,
            'aria-label': P,
            'aria-labelledby': k,
            validationState: x = 'valid',
            isInvalid: S,
          } = e;
        null != w ||
          null != P ||
          null != k ||
          console.warn(
            'If you do not provide children, you must specify an aria-label for accessibility',
          );
        let { pressProps: L, isPressed: C } = ed({ isDisabled: b }),
          { pressProps: M, isPressed: D } = ed({
            isDisabled: b || m,
            onPress() {
              t.toggle();
            },
          }),
          { focusableProps: K } = (function (e, t) {
            let { focusProps: r } = (function (e) {
                let t,
                  r,
                  {
                    isDisabled: n,
                    onFocus: a,
                    onBlur: o,
                    onFocusChange: l,
                  } = e,
                  s = (0, i.useCallback)(
                    (e) => {
                      if (e.target === e.currentTarget)
                        return o && o(e), l && l(!1), !0;
                    },
                    [o, l],
                  ),
                  u =
                    ((t = (0, i.useRef)({ isFocused: !1, observer: null })),
                    f(() => {
                      let e = t.current;
                      return () => {
                        e.observer &&
                          (e.observer.disconnect(), (e.observer = null));
                      };
                    }, []),
                    (r = p((e) => {
                      null == s || s(e);
                    })),
                    (0, i.useCallback)(
                      (e) => {
                        if (
                          e.target instanceof HTMLButtonElement ||
                          e.target instanceof HTMLInputElement ||
                          e.target instanceof HTMLTextAreaElement ||
                          e.target instanceof HTMLSelectElement
                        ) {
                          t.current.isFocused = !0;
                          let n = e.target;
                          n.addEventListener(
                            'focusout',
                            (e) => {
                              (t.current.isFocused = !1),
                                n.disabled && r(new _('blur', e)),
                                t.current.observer &&
                                  (t.current.observer.disconnect(),
                                  (t.current.observer = null));
                            },
                            { once: !0 },
                          ),
                            (t.current.observer = new MutationObserver(() => {
                              if (t.current.isFocused && n.disabled) {
                                var e;
                                null === (e = t.current.observer) ||
                                  void 0 === e ||
                                  e.disconnect();
                                let r =
                                  n === document.activeElement
                                    ? null
                                    : document.activeElement;
                                n.dispatchEvent(
                                  new FocusEvent('blur', { relatedTarget: r }),
                                ),
                                  n.dispatchEvent(
                                    new FocusEvent('focusout', {
                                      bubbles: !0,
                                      relatedTarget: r,
                                    }),
                                  );
                              }
                            })),
                            t.current.observer.observe(n, {
                              attributes: !0,
                              attributeFilter: ['disabled'],
                            });
                        }
                      },
                      [r],
                    )),
                  d = (0, i.useCallback)(
                    (e) => {
                      let t = v(e.target);
                      e.target === e.currentTarget &&
                        t.activeElement === e.target &&
                        (a && a(e), l && l(!0), u(e));
                    },
                    [l, a, u],
                  );
                return {
                  focusProps: {
                    onFocus: !n && (a || l || o) ? d : void 0,
                    onBlur: !n && (o || l) ? s : void 0,
                  },
                };
              })(e),
              { keyboardProps: n } = {
                keyboardProps: e.isDisabled
                  ? {}
                  : { onKeyDown: q(e.onKeyDown), onKeyUp: q(e.onKeyUp) },
              },
              a = l(r, n),
              o = (function (e) {
                let t = (0, i.useContext)(Z) || {};
                Y(t, e);
                let { ref: r, ...n } = t;
                return n;
              })(t),
              s = e.isDisabled ? {} : o,
              u = (0, i.useRef)(e.autoFocus);
            return (
              (0, i.useEffect)(() => {
                u.current &&
                  t.current &&
                  (function (e) {
                    let t = v(e);
                    if ('virtual' === F) {
                      let r = t.activeElement;
                      h(() => {
                        t.activeElement === r && e.isConnected && T(e);
                      });
                    } else T(e);
                  })(t.current),
                  (u.current = !1);
              }, [t]),
              {
                focusableProps: l(
                  {
                    ...a,
                    tabIndex:
                      e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
                  },
                  s,
                ),
              }
            );
          })(e, r),
          O = l(L, K),
          R = (function (e, t = {}) {
            let { labelable: r, isLink: n, propNames: i } = t,
              a = {};
            for (let t in e)
              Object.prototype.hasOwnProperty.call(e, t) &&
                (s.has(t) ||
                  (r && u.has(t)) ||
                  (n && d.has(t)) ||
                  (null == i ? void 0 : i.has(t)) ||
                  c.test(t)) &&
                (a[t] = e[t]);
            return a;
          })(e, { labelable: !0 });
        return (
          (n = t.isSelected),
          (a = t.setSelected),
          (o = (0, i.useRef)(n)),
          (g = p(() => {
            a && a(o.current);
          })),
          (0, i.useEffect)(() => {
            var e;
            let t =
              null == r
                ? void 0
                : null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.form;
            return (
              null == t || t.addEventListener('reset', g),
              () => {
                null == t || t.removeEventListener('reset', g);
              }
            );
          }, [r, g]),
          {
            labelProps: l(M, { onClick: (e) => e.preventDefault() }),
            inputProps: l(R, {
              'aria-invalid': S || 'invalid' === x || void 0,
              'aria-errormessage': e['aria-errormessage'],
              'aria-controls': e['aria-controls'],
              'aria-readonly': m || void 0,
              onChange: (e) => {
                e.stopPropagation(), t.setSelected(e.target.checked);
              },
              disabled: b,
              ...(null == y ? {} : { value: y }),
              name: E,
              type: 'checkbox',
              ...O,
            }),
            isSelected: t.isSelected,
            isPressed: C || D,
            isDisabled: b,
            isReadOnly: m,
            isInvalid: S || 'invalid' === x,
          }
        );
      }
    },
    18918: function (e, t, r) {
      r.d(t, {
        l: function () {
          return i;
        },
      });
      var n = r(41821);
      function i(e = {}) {
        let { isReadOnly: t } = e,
          [r, i] = (0, n.z)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: r,
          setSelected: function (e) {
            t || i(e);
          },
          toggle: function () {
            t || i(!r);
          },
        };
      }
    },
  },
]);
