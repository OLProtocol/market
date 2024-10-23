'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4621],
  {
    64621: function (e, t, n) {
      n.d(t, {
        e: function () {
          return eO;
        },
      });
      var r = n(2265),
        o = n(89259);
      let i = {},
        u = 0,
        l = !1,
        s = null,
        a = null;
      var c = n(277);
      function d(e) {
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
      function v(e) {
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
      function f(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let p = f(function () {
          return v(/^Mac/i);
        }),
        m = f(function () {
          return v(/^iPhone/i);
        }),
        g = f(function () {
          return v(/^iPad/i) || (p() && navigator.maxTouchPoints > 1);
        }),
        E = f(function () {
          return m() || g();
        });
      f(function () {
        return p() || E();
      }),
        f(function () {
          return d(/AppleWebKit/i) && !h();
        });
      let h = f(function () {
          return d(/Chrome/i);
        }),
        b = f(function () {
          return d(/Android/i);
        });
      f(function () {
        return d(/Firefox/i);
      });
      let y = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        w = (e) =>
          e && 'window' in e && e.window === e ? e : y(e).defaultView || window,
        P = null,
        T = new Set(),
        L = new Map(),
        D = !1,
        C = !1;
      function M(e, t) {
        for (let n of T) n(e, t);
      }
      function k(e) {
        (D = !0),
          e.metaKey ||
            (!p() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((P = 'keyboard'), M('keyboard', e));
      }
      function S(e) {
        (P = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((D = !0), M('pointer', e));
      }
      function F(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (b() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((D = !0), (P = 'virtual'));
      }
      function H(e) {
        e.target !== window &&
          e.target !== document &&
          (D || C || ((P = 'virtual'), M('virtual', e)), (D = !1), (C = !1));
      }
      function x() {
        (D = !1), (C = !0);
      }
      function O(e) {
        if ('undefined' == typeof window || L.get(w(e))) return;
        let t = w(e),
          n = y(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (D = !0), r.apply(this, arguments);
        }),
          n.addEventListener('keydown', k, !0),
          n.addEventListener('keyup', k, !0),
          n.addEventListener('click', F, !0),
          t.addEventListener('focus', H, !0),
          t.addEventListener('blur', x, !1),
          'undefined' != typeof PointerEvent
            ? (n.addEventListener('pointerdown', S, !0),
              n.addEventListener('pointermove', S, !0),
              n.addEventListener('pointerup', S, !0))
            : (n.addEventListener('mousedown', S, !0),
              n.addEventListener('mousemove', S, !0),
              n.addEventListener('mouseup', S, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              W(e);
            },
            { once: !0 },
          ),
          L.set(t, { focus: r });
      }
      let W = (e, t) => {
        let n = w(e),
          r = y(e);
        t && r.removeEventListener('DOMContentLoaded', t),
          L.has(n) &&
            ((n.HTMLElement.prototype.focus = L.get(n).focus),
            r.removeEventListener('keydown', k, !0),
            r.removeEventListener('keyup', k, !0),
            r.removeEventListener('click', F, !0),
            n.removeEventListener('focus', H, !0),
            n.removeEventListener('blur', x, !1),
            'undefined' != typeof PointerEvent
              ? (r.removeEventListener('pointerdown', S, !0),
                r.removeEventListener('pointermove', S, !0),
                r.removeEventListener('pointerup', S, !0))
              : (r.removeEventListener('mousedown', S, !0),
                r.removeEventListener('mousemove', S, !0),
                r.removeEventListener('mouseup', S, !0)),
            L.delete(n));
      };
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let n = y(void 0);
          'loading' !== n.readyState
            ? O(void 0)
            : ((t = () => {
                O(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => W(e, t);
        })();
      let j = !1,
        B = 0;
      function N() {
        (j = !0),
          setTimeout(() => {
            j = !1;
          }, 50);
      }
      function R(e) {
        'touch' === e.pointerType && N();
      }
      function A() {
        if ('undefined' != typeof document)
          return (
            'undefined' != typeof PointerEvent
              ? document.addEventListener('pointerup', R)
              : document.addEventListener('touchend', N),
            B++,
            () => {
              --B > 0 ||
                ('undefined' != typeof PointerEvent
                  ? document.removeEventListener('pointerup', R)
                  : document.removeEventListener('touchend', N));
            }
          );
      }
      function K(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: o,
            isDisabled: i,
          } = e,
          [u, l] = (0, r.useState)(!1),
          s = (0, r.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
          }).current;
        (0, r.useEffect)(A, []);
        let { hoverProps: a, triggerHoverEnd: c } = (0, r.useMemo)(() => {
          let e = (e, r) => {
              if (
                ((s.pointerType = r),
                i ||
                  'touch' === r ||
                  s.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              s.isHovered = !0;
              let o = e.currentTarget;
              (s.target = o),
                t && t({ type: 'hoverstart', target: o, pointerType: r }),
                n && n(!0),
                l(!0);
            },
            r = (e, t) => {
              if (
                ((s.pointerType = ''),
                (s.target = null),
                'touch' === t || !s.isHovered)
              )
                return;
              s.isHovered = !1;
              let r = e.currentTarget;
              o && o({ type: 'hoverend', target: r, pointerType: t }),
                n && n(!1),
                l(!1);
            },
            u = {};
          return (
            'undefined' != typeof PointerEvent
              ? ((u.onPointerEnter = (t) => {
                  (j && 'mouse' === t.pointerType) || e(t, t.pointerType);
                }),
                (u.onPointerLeave = (e) => {
                  !i &&
                    e.currentTarget.contains(e.target) &&
                    r(e, e.pointerType);
                }))
              : ((u.onTouchStart = () => {
                  s.ignoreEmulatedMouseEvents = !0;
                }),
                (u.onMouseEnter = (t) => {
                  s.ignoreEmulatedMouseEvents || j || e(t, 'mouse'),
                    (s.ignoreEmulatedMouseEvents = !1);
                }),
                (u.onMouseLeave = (e) => {
                  !i && e.currentTarget.contains(e.target) && r(e, 'mouse');
                })),
            { hoverProps: u, triggerHoverEnd: r }
          );
        }, [t, n, o, i, s]);
        return (
          (0, r.useEffect)(() => {
            i && c({ currentTarget: s.target }, s.pointerType);
          }, [i]),
          { hoverProps: a, isHovered: u }
        );
      }
      let I = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
      var z = n(73165);
      let X = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        _ = new Map();
      var U = n(44839);
      function V(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            'function' == typeof n &&
            'function' == typeof o &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let n of e) 'function' == typeof n && n(...t);
                  };
                })(n, o))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof o
                ? (t[e] = (0, U.Z)(n, o))
                : 'id' === e && n && o
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let n = _.get(e);
                      if (n) return n(t), t;
                      let r = _.get(t);
                      return r ? (r(e), e) : t;
                    })(n, o))
                  : (t[e] = void 0 !== o ? o : n);
          }
        }
        return t;
      }
      let G = new Map(),
        Y = new Set();
      function Z() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let r = G.get(n.target);
          if (
            r &&
            (r.delete(n.propertyName),
            0 === r.size &&
              (n.target.removeEventListener('transitioncancel', t),
              G.delete(n.target)),
            0 === G.size)
          ) {
            for (let e of Y) e();
            Y.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let r = G.get(n.target);
          r ||
            ((r = new Set()),
            G.set(n.target, r),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            r.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function $(e) {
        if (
          (function () {
            if (null == q) {
              q = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (q = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return q;
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
          ? Z()
          : document.addEventListener('DOMContentLoaded', Z));
      let q = null;
      class J {
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
      function Q(e) {
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
      let ee = r.createContext(null),
        et = new Set(['id']),
        en = new Set([
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-details',
        ]),
        er = new Set([
          'href',
          'hrefLang',
          'target',
          'rel',
          'download',
          'ping',
          'referrerPolicy',
        ]),
        eo = /^(data-.*)$/;
      var ei = n(84511),
        eu = n(73699),
        el = n(78953),
        es = n(77594);
      function ea(e) {
        let t = (0, r.useRef)(null);
        return (
          (0, es.b)(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      var ec = n(19218);
      function ed(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
          let t = e.target.ownerDocument;
          if (
            !t ||
            !t.documentElement.contains(e.target) ||
            e.target.closest('[data-react-aria-top-layer]')
          )
            return !1;
        }
        return t.current && !t.current.contains(e.target);
      }
      class ev {
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
      let ef = [];
      var ep = n(12094),
        em = n(55971),
        eg = n(93261),
        eE = n(36222),
        eh = n(53640),
        eb = n(65263),
        ey = n(65262),
        ew = n(26242),
        eP = n(23663),
        eT = n(46896),
        eL = n(71671),
        eD = n(60980),
        eC = n(83582),
        eM = n(34565),
        ek = n(34446),
        eS = n(79046),
        eF = n(1144),
        eH = n(57437),
        ex = (0, em.Gp)((e, t) => {
          let n;
          let {
            Component: d,
            children: v,
            content: f,
            isOpen: p,
            portalContainer: m,
            placement: g,
            disableAnimation: E,
            motionProps: h,
            getTriggerProps: b,
            getTooltipProps: w,
            getTooltipContentProps: T,
          } = (function (e) {
            var t, n;
            let d = (0, ep.w)(),
              [v, f] = (0, em.oe)(e, eg.v.variantKeys),
              {
                ref: p,
                as: m,
                isOpen: g,
                content: E,
                children: h,
                defaultOpen: b,
                onOpenChange: w,
                isDisabled: T,
                trigger: L,
                shouldFlip: D = !0,
                containerPadding: C = 12,
                placement: M = 'top',
                delay: k = 0,
                closeDelay: S = 500,
                showArrow: F = !1,
                offset: H = 7,
                crossOffset: x = 0,
                isDismissable: O,
                shouldCloseOnBlur: W = !0,
                portalContainer: j,
                isKeyboardDismissDisabled: B = !1,
                updatePositionDeps: N = [],
                shouldCloseOnInteractOutside: R,
                className: A,
                onClose: U,
                motionProps: Z,
                classNames: q,
                shouldBlockScroll: eL = !0,
                ...eD
              } = v,
              eC =
                null !=
                  (n =
                    null != (t = null == e ? void 0 : e.disableAnimation)
                      ? t
                      : null == d
                        ? void 0
                        : d.disableAnimation) && n,
              eM = (function (e = {}) {
                let { delay: t = 1500, closeDelay: n = 500 } = e,
                  { isOpen: c, open: d, close: v } = (0, o.d)(e),
                  f = (0, r.useMemo)(() => `${++u}`, []),
                  p = (0, r.useRef)(),
                  m = () => {
                    i[f] = h;
                  },
                  g = () => {
                    for (let e in i) e !== f && (i[e](!0), delete i[e]);
                  },
                  E = () => {
                    clearTimeout(p.current),
                      (p.current = null),
                      g(),
                      m(),
                      (l = !0),
                      d(),
                      s && (clearTimeout(s), (s = null)),
                      a && (clearTimeout(a), (a = null));
                  },
                  h = (e) => {
                    e || n <= 0
                      ? (clearTimeout(p.current), (p.current = null), v())
                      : p.current ||
                        (p.current = setTimeout(() => {
                          (p.current = null), v();
                        }, n)),
                      s && (clearTimeout(s), (s = null)),
                      l &&
                        (a && clearTimeout(a),
                        (a = setTimeout(
                          () => {
                            delete i[f], (a = null), (l = !1);
                          },
                          Math.max(500, n),
                        )));
                  },
                  b = () => {
                    g(),
                      m(),
                      c || s || l
                        ? c || E()
                        : (s = setTimeout(() => {
                            (s = null), (l = !0), E();
                          }, t));
                  };
                return (
                  (0, r.useEffect)(
                    () => () => {
                      clearTimeout(p.current), i[f] && delete i[f];
                    },
                    [f],
                  ),
                  {
                    isOpen: c,
                    open: (e) => {
                      e || !(t > 0) || p.current ? E() : b();
                    },
                    close: h,
                  }
                );
              })({
                delay: k,
                closeDelay: S,
                isDisabled: T,
                defaultOpen: b,
                isOpen: g,
                onOpenChange: (e) => {
                  null == w || w(e), e || null == U || U();
                },
              }),
              ek = (0, r.useRef)(null),
              eS = (0, r.useRef)(null),
              eF = (0, r.useId)(),
              eH = eM.isOpen && !T;
            (0, r.useImperativeHandle)(p, () => (0, ew.fg)(eS)),
              (0, ei.t)({ isDisabled: !(eL && eH) });
            let { triggerProps: ex, tooltipProps: eO } = (function (e, t, n) {
                let { isDisabled: o, trigger: i } = e,
                  u = (function (e) {
                    let [t, n] = (0, r.useState)(void 0),
                      o = (0, r.useRef)(null),
                      i = (0, z.gP)(t),
                      u = (0, r.useCallback)((e) => {
                        o.current = e;
                      }, []);
                    return (
                      X && _.set(i, u),
                      I(
                        () => () => {
                          _.delete(i);
                        },
                        [i],
                      ),
                      (0, r.useEffect)(() => {
                        let e = o.current;
                        e && ((o.current = null), n(e));
                      }),
                      i
                    );
                  })(),
                  l = (0, r.useRef)(!1),
                  s = (0, r.useRef)(!1),
                  a = () => {
                    (l.current || s.current) && t.open(s.current);
                  },
                  c = (e) => {
                    l.current || s.current || t.close(e);
                  };
                (0, r.useEffect)(() => {
                  let e = (e) => {
                    n &&
                      n.current &&
                      'Escape' === e.key &&
                      (e.stopPropagation(), t.close(!0));
                  };
                  if (t.isOpen)
                    return (
                      document.addEventListener('keydown', e, !0),
                      () => {
                        document.removeEventListener('keydown', e, !0);
                      }
                    );
                }, [n, t]);
                let d = () => {
                    (s.current = !1), (l.current = !1), c(!0);
                  },
                  { hoverProps: v } = K({
                    isDisabled: o,
                    onHoverStart: () => {
                      'focus' !== i &&
                        ('pointer' === P ? (l.current = !0) : (l.current = !1),
                        a());
                    },
                    onHoverEnd: () => {
                      'focus' !== i &&
                        ((s.current = !1), (l.current = !1), c());
                    },
                  }),
                  { focusableProps: f } = (function (e, t) {
                    let { focusProps: n } = (function (e) {
                        let t,
                          n,
                          {
                            isDisabled: o,
                            onFocus: i,
                            onBlur: u,
                            onFocusChange: l,
                          } = e,
                          s = (0, r.useCallback)(
                            (e) => {
                              if (e.target === e.currentTarget)
                                return u && u(e), l && l(!1), !0;
                            },
                            [u, l],
                          ),
                          a =
                            ((t = (0, r.useRef)({
                              isFocused: !1,
                              observer: null,
                            })),
                            I(() => {
                              let e = t.current;
                              return () => {
                                e.observer &&
                                  (e.observer.disconnect(),
                                  (e.observer = null));
                              };
                            }, []),
                            (n = (function (e) {
                              let t = (0, r.useRef)(null);
                              return (
                                I(() => {
                                  t.current = e;
                                }, [e]),
                                (0, r.useCallback)((...e) => {
                                  let n = t.current;
                                  return null == n ? void 0 : n(...e);
                                }, [])
                              );
                            })((e) => {
                              null == s || s(e);
                            })),
                            (0, r.useCallback)(
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
                                        r.disabled && n(new J('blur', e)),
                                        t.current.observer &&
                                          (t.current.observer.disconnect(),
                                          (t.current.observer = null));
                                    },
                                    { once: !0 },
                                  ),
                                    (t.current.observer = new MutationObserver(
                                      () => {
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
                                            new FocusEvent('blur', {
                                              relatedTarget: n,
                                            }),
                                          ),
                                            r.dispatchEvent(
                                              new FocusEvent('focusout', {
                                                bubbles: !0,
                                                relatedTarget: n,
                                              }),
                                            );
                                        }
                                      },
                                    )),
                                    t.current.observer.observe(r, {
                                      attributes: !0,
                                      attributeFilter: ['disabled'],
                                    });
                                }
                              },
                              [n],
                            )),
                          c = (0, r.useCallback)(
                            (e) => {
                              let t = y(e.target);
                              e.target === e.currentTarget &&
                                t.activeElement === e.target &&
                                (i && i(e), l && l(!0), a(e));
                            },
                            [l, i, a],
                          );
                        return {
                          focusProps: {
                            onFocus: !o && (i || l || u) ? c : void 0,
                            onBlur: !o && (u || l) ? s : void 0,
                          },
                        };
                      })(e),
                      { keyboardProps: o } = {
                        keyboardProps: e.isDisabled
                          ? {}
                          : {
                              onKeyDown: Q(e.onKeyDown),
                              onKeyUp: Q(e.onKeyUp),
                            },
                      },
                      i = V(n, o),
                      u = (function (e) {
                        let t = (0, r.useContext)(ee) || {};
                        I(() => {
                          if (t && t.ref && e)
                            return (
                              (t.ref.current = e.current),
                              () => {
                                t.ref && (t.ref.current = null);
                              }
                            );
                        });
                        let { ref: n, ...o } = t;
                        return o;
                      })(t),
                      l = e.isDisabled ? {} : u,
                      s = (0, r.useRef)(e.autoFocus);
                    return (
                      (0, r.useEffect)(() => {
                        s.current &&
                          t.current &&
                          (function (e) {
                            let t = y(e);
                            if ('virtual' === P) {
                              var n;
                              let r = t.activeElement;
                              (n = () => {
                                t.activeElement === r && e.isConnected && $(e);
                              }),
                                requestAnimationFrame(() => {
                                  0 === G.size ? n() : Y.add(n);
                                });
                            } else $(e);
                          })(t.current),
                          (s.current = !1);
                      }, [t]),
                      {
                        focusableProps: V(
                          {
                            ...i,
                            tabIndex:
                              e.excludeFromTabOrder && !e.isDisabled
                                ? -1
                                : void 0,
                          },
                          l,
                        ),
                      }
                    );
                  })(
                    {
                      isDisabled: o,
                      onFocus: () => {
                        'pointer' !== P && ((s.current = !0), a());
                      },
                      onBlur: () => {
                        (s.current = !1), (l.current = !1), c(!0);
                      },
                    },
                    n,
                  );
                return {
                  triggerProps: {
                    'aria-describedby': t.isOpen ? u : void 0,
                    ...V(f, v, { onPointerDown: d, onKeyDown: d }),
                  },
                  tooltipProps: { id: u },
                };
              })({ isDisabled: T, trigger: L }, eM, ek),
              { tooltipProps: eW } = (function (e, t) {
                let n = (function (e, t = {}) {
                    let { labelable: n, isLink: r, propNames: o } = t,
                      i = {};
                    for (let t in e)
                      Object.prototype.hasOwnProperty.call(e, t) &&
                        (et.has(t) ||
                          (n && en.has(t)) ||
                          (r && er.has(t)) ||
                          (null == o ? void 0 : o.has(t)) ||
                          eo.test(t)) &&
                        (i[t] = e[t]);
                    return i;
                  })(e, { labelable: !0 }),
                  { hoverProps: r } = K({
                    onHoverStart: () => (null == t ? void 0 : t.open(!0)),
                    onHoverEnd: () => (null == t ? void 0 : t.close()),
                  });
                return { tooltipProps: V(n, r, { role: 'tooltip' }) };
              })({ isOpen: eH, ...(0, c.d)(v, eO) }, eM),
              {
                overlayProps: ej,
                placement: eB,
                updatePosition: eN,
              } = (0, eu.t)({
                isOpen: eH,
                targetRef: ek,
                placement: (0, eP.Yx)(M),
                overlayRef: eS,
                offset: F ? H + 3 : H,
                crossOffset: x,
                shouldFlip: D,
                containerPadding: C,
              });
            (0, eT.G)(() => {
              N.length && eN();
            }, N);
            let { overlayProps: eR } = (function (e, t) {
                let {
                  onClose: n,
                  shouldCloseOnBlur: o,
                  isOpen: i,
                  isDismissable: u = !1,
                  isKeyboardDismissDisabled: l = !1,
                  shouldCloseOnInteractOutside: s,
                } = e;
                (0, r.useEffect)(
                  () => (
                    i && ef.push(t),
                    () => {
                      let e = ef.indexOf(t);
                      e >= 0 && ef.splice(e, 1);
                    }
                  ),
                  [i, t],
                );
                let a = () => {
                  ef[ef.length - 1] === t && n && n();
                };
                !(function (e) {
                  let {
                      ref: t,
                      onInteractOutside: n,
                      isDisabled: o,
                      onInteractOutsideStart: i,
                    } = e,
                    u = (0, r.useRef)({
                      isPointerDown: !1,
                      ignoreEmulatedMouseEvents: !1,
                    }),
                    l = ea((e) => {
                      n &&
                        ed(e, t) &&
                        (i && i(e), (u.current.isPointerDown = !0));
                    }),
                    s = ea((e) => {
                      n && n(e);
                    });
                  (0, r.useEffect)(() => {
                    let e = u.current;
                    if (o) return;
                    let n = t.current,
                      r = (0, ec.r)(n);
                    if ('undefined' != typeof PointerEvent) {
                      let n = (n) => {
                        e.isPointerDown && ed(n, t) && s(n),
                          (e.isPointerDown = !1);
                      };
                      return (
                        r.addEventListener('pointerdown', l, !0),
                        r.addEventListener('pointerup', n, !0),
                        () => {
                          r.removeEventListener('pointerdown', l, !0),
                            r.removeEventListener('pointerup', n, !0);
                        }
                      );
                    }
                    {
                      let n = (n) => {
                          e.ignoreEmulatedMouseEvents
                            ? (e.ignoreEmulatedMouseEvents = !1)
                            : e.isPointerDown && ed(n, t) && s(n),
                            (e.isPointerDown = !1);
                        },
                        o = (n) => {
                          (e.ignoreEmulatedMouseEvents = !0),
                            e.isPointerDown && ed(n, t) && s(n),
                            (e.isPointerDown = !1);
                        };
                      return (
                        r.addEventListener('mousedown', l, !0),
                        r.addEventListener('mouseup', n, !0),
                        r.addEventListener('touchstart', l, !0),
                        r.addEventListener('touchend', o, !0),
                        () => {
                          r.removeEventListener('mousedown', l, !0),
                            r.removeEventListener('mouseup', n, !0),
                            r.removeEventListener('touchstart', l, !0),
                            r.removeEventListener('touchend', o, !0);
                        }
                      );
                    }
                  }, [t, o, l, s]);
                })({
                  ref: t,
                  onInteractOutside:
                    u && i
                      ? (e) => {
                          (!s || s(e.target)) &&
                            (ef[ef.length - 1] === t &&
                              (e.stopPropagation(), e.preventDefault()),
                            a());
                        }
                      : null,
                  onInteractOutsideStart: (e) => {
                    (!s || s(e.target)) &&
                      ef[ef.length - 1] === t &&
                      (e.stopPropagation(), e.preventDefault());
                  },
                });
                let { focusWithinProps: c } = (function (e) {
                  let t,
                    n,
                    {
                      isDisabled: o,
                      onBlurWithin: i,
                      onFocusWithin: u,
                      onFocusWithinChange: l,
                    } = e,
                    s = (0, r.useRef)({ isFocusWithin: !1 }),
                    a = (0, r.useCallback)(
                      (e) => {
                        s.current.isFocusWithin &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((s.current.isFocusWithin = !1),
                          i && i(e),
                          l && l(!1));
                      },
                      [i, l, s],
                    ),
                    c =
                      ((t = (0, r.useRef)({ isFocused: !1, observer: null })),
                      (0, es.b)(() => {
                        let e = t.current;
                        return () => {
                          e.observer &&
                            (e.observer.disconnect(), (e.observer = null));
                        };
                      }, []),
                      (n = ea((e) => {
                        null == a || a(e);
                      })),
                      (0, r.useCallback)(
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
                                  r.disabled && n(new ev('blur', e)),
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
                                    new FocusEvent('blur', {
                                      relatedTarget: n,
                                    }),
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
                      )),
                    d = (0, r.useCallback)(
                      (e) => {
                        s.current.isFocusWithin ||
                          document.activeElement !== e.target ||
                          (u && u(e),
                          l && l(!0),
                          (s.current.isFocusWithin = !0),
                          c(e));
                      },
                      [u, l, c],
                    );
                  return o
                    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                    : { focusWithinProps: { onFocus: d, onBlur: a } };
                })({
                  isDisabled: !o,
                  onBlurWithin: (e) => {
                    !(!e.relatedTarget || (0, el.cW)(e.relatedTarget)) &&
                      (!s || s(e.relatedTarget)) &&
                      n();
                  },
                });
                return {
                  overlayProps: {
                    onKeyDown: (e) => {
                      'Escape' !== e.key ||
                        l ||
                        e.nativeEvent.isComposing ||
                        (e.stopPropagation(), e.preventDefault(), a());
                    },
                    ...c,
                  },
                  underlayProps: {
                    onPointerDown: (e) => {
                      e.target === e.currentTarget && e.preventDefault();
                    },
                  },
                };
              })(
                {
                  isOpen: eH,
                  onClose: eM.close,
                  isDismissable: O,
                  shouldCloseOnBlur: W,
                  isKeyboardDismissDisabled: B,
                  shouldCloseOnInteractOutside: R,
                },
                eS,
              ),
              eA = (0, r.useMemo)(() => {
                var t, n, r;
                return (0, eg.v)({
                  ...f,
                  disableAnimation: eC,
                  radius:
                    null != (t = null == e ? void 0 : e.radius) ? t : 'md',
                  size: null != (n = null == e ? void 0 : e.size) ? n : 'md',
                  shadow:
                    null != (r = null == e ? void 0 : e.shadow) ? r : 'sm',
                });
              }, [
                (0, eE.Xx)(f),
                eC,
                null == e ? void 0 : e.radius,
                null == e ? void 0 : e.size,
                null == e ? void 0 : e.shadow,
              ]),
              eK = (0, r.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    ...(0, c.d)(ex, e),
                    ref: (0, ey.l)(t, ek),
                    'aria-describedby': eH ? eF : void 0,
                  };
                },
                [ex, eH, eF, eM],
              ),
              eI = (0, r.useCallback)(
                () => ({
                  ref: eS,
                  'data-slot': 'base',
                  'data-open': (0, eh.PB)(eH),
                  'data-arrow': (0, eh.PB)(F),
                  'data-disabled': (0, eh.PB)(T),
                  'data-placement': (0, eP.sK)(eB, M),
                  ...(0, c.d)(eW, eR, eD),
                  style: (0, c.d)(ej.style, eD.style, v.style),
                  className: eA.base({ class: null == q ? void 0 : q.base }),
                  id: eF,
                }),
                [eA, eH, F, T, eB, M, eW, eR, eD, ej, v, eF],
              ),
              ez = (0, r.useCallback)(
                () => ({
                  'data-slot': 'content',
                  'data-open': (0, eh.PB)(eH),
                  'data-arrow': (0, eh.PB)(F),
                  'data-disabled': (0, eh.PB)(T),
                  'data-placement': (0, eP.sK)(eB, M),
                  className: eA.content({
                    class: (0, eb.W)(null == q ? void 0 : q.content, A),
                  }),
                }),
                [eA, eH, F, T, eB, M, q],
              );
            return {
              Component: m || 'div',
              content: E,
              children: h,
              isOpen: eH,
              triggerRef: ek,
              showArrow: F,
              portalContainer: j,
              placement: M,
              disableAnimation: eC,
              isDisabled: T,
              motionProps: Z,
              getTooltipContentProps: ez,
              getTriggerProps: eK,
              getTooltipProps: eI,
            };
          })({ ...e, ref: t });
          try {
            let e = r.Children.count(v);
            if (1 !== e) throw Error();
            n = (0, r.isValidElement)(v)
              ? (0, r.cloneElement)(v, b(v.props, v.ref))
              : (0, eH.jsx)('p', { ...b(), children: v });
          } catch (e) {
            (n = (0, eH.jsx)('span', {})),
              (0, eF.Z)(
                'Tooltip must have only one child node. Please, check your code.',
              );
          }
          let { ref: L, id: D, style: C, ...M } = w(),
            k = (0, eH.jsx)('div', {
              ref: L,
              id: D,
              style: C,
              children: (0, eH.jsx)(eD.X, {
                features: eC.H,
                children: (0, eH.jsx)(eM.m.div, {
                  animate: 'enter',
                  exit: 'exit',
                  initial: 'exit',
                  variants: eS.y7.scaleSpring,
                  ...(0, c.d)(h, M),
                  style: { ...(0, eP.VS)(g) },
                  children: (0, eH.jsx)(d, { ...T(), children: f }),
                }),
              }),
            });
          return (0, eH.jsxs)(eH.Fragment, {
            children: [
              n,
              E && p
                ? (0, eH.jsx)(eL.Xj, {
                    portalContainer: m,
                    children: (0, eH.jsx)('div', {
                      ref: L,
                      id: D,
                      style: C,
                      ...M,
                      children: (0, eH.jsx)(d, { ...T(), children: f }),
                    }),
                  })
                : (0, eH.jsx)(ek.M, {
                    children: p
                      ? (0, eH.jsx)(eL.Xj, { portalContainer: m, children: k })
                      : null,
                  }),
            ],
          });
        });
      ex.displayName = 'NextUI.Tooltip';
      var eO = ex;
    },
    71671: function (e, t, n) {
      n.d(t, {
        N3: function () {
          return a;
        },
        Xj: function () {
          return c;
        },
      });
      var r = n(2265),
        o = n(54887),
        i = n(73165);
      let u = r.createContext(null);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useContext)(u),
          [o, i] = (0, r.useState)(0),
          l = (0, r.useMemo)(
            () => ({
              parent: n,
              modalCount: o,
              addModal() {
                i((e) => e + 1), n && n.addModal();
              },
              removeModal() {
                i((e) => e - 1), n && n.removeModal();
              },
            }),
            [n, o],
          );
        return r.createElement(u.Provider, { value: l }, t);
      }
      function s(e) {
        let t;
        let { modalProviderProps: n } = {
          modalProviderProps: {
            'aria-hidden':
              (!!(t = (0, r.useContext)(u)) && t.modalCount > 0) || null,
          },
        };
        return r.createElement('div', {
          'data-overlay-container': !0,
          ...e,
          ...n,
        });
      }
      function a(e) {
        return r.createElement(l, null, r.createElement(s, e));
      }
      function c(e) {
        let t = (0, i.Av)(),
          { portalContainer: n = t ? null : document.body, ...u } = e;
        if (
          (r.useEffect(() => {
            if (null == n ? void 0 : n.closest('[data-overlay-container]'))
              throw Error(
                'An OverlayContainer must not be inside another container. Please change the portalContainer prop.',
              );
          }, [n]),
          !n)
        )
          return null;
        let l = r.createElement(a, u);
        return o.createPortal(l, n);
      }
    },
  },
]);
