'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8838],
  {
    91142: function (t, e, i) {
      i.d(e, {
        n: function () {
          return iT;
        },
      });
      var s = i(55971),
        o = i(26242),
        r = i(65263),
        n = i(277);
      let a = new WeakMap();
      function l(t, e, i) {
        'string' == typeof e && (e = e.replace(/\s+/g, ''));
        let s = a.get(t);
        return `${s}-${i}-${e}`;
      }
      var d = i(2265);
      let u = 'undefined' != typeof document ? d.useLayoutEffect : () => {};
      var h = i(73165);
      let c = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        p = new Map();
      function m(t) {
        let [e, i] = (0, d.useState)(t),
          s = (0, d.useRef)(null),
          o = (0, h.gP)(e),
          r = (0, d.useCallback)((t) => {
            s.current = t;
          }, []);
        return (
          c && p.set(o, r),
          u(
            () => () => {
              p.delete(o);
            },
            [o],
          ),
          (0, d.useEffect)(() => {
            let t = s.current;
            t && ((s.current = null), i(t));
          }),
          o
        );
      }
      function f(t, e) {
        let { id: i, 'aria-label': s, 'aria-labelledby': o } = t;
        return (
          (i = m(i)),
          o && s
            ? (o = [...new Set([i, ...o.trim().split(/\s+/)])].join(' '))
            : o && (o = o.trim().split(/\s+/).join(' ')),
          s || o || !e || (s = e),
          { id: i, 'aria-label': s, 'aria-labelledby': o }
        );
      }
      var g = i(44839);
      function v(...t) {
        let e = { ...t[0] };
        for (let i = 1; i < t.length; i++) {
          let s = t[i];
          for (let t in s) {
            let i = e[t],
              o = s[t];
            'function' == typeof i &&
            'function' == typeof o &&
            'o' === t[0] &&
            'n' === t[1] &&
            t.charCodeAt(2) >= 65 &&
            90 >= t.charCodeAt(2)
              ? (e[t] = (function (...t) {
                  return (...e) => {
                    for (let i of t) 'function' == typeof i && i(...e);
                  };
                })(i, o))
              : ('className' === t || 'UNSAFE_className' === t) &&
                  'string' == typeof i &&
                  'string' == typeof o
                ? (e[t] = (0, g.Z)(i, o))
                : 'id' === t && i && o
                  ? (e.id = (function (t, e) {
                      if (t === e) return t;
                      let i = p.get(t);
                      if (i) return i(e), e;
                      let s = p.get(e);
                      return s ? (s(t), t) : e;
                    })(i, o))
                  : (e[t] = void 0 !== o ? o : i);
          }
        }
        return e;
      }
      let y = (t) => {
          var e;
          return null !== (e = null == t ? void 0 : t.ownerDocument) &&
            void 0 !== e
            ? e
            : document;
        },
        b = (t) =>
          t && 'window' in t && t.window === t ? t : y(t).defaultView || window,
        x = [
          'input:not([disabled]):not([type=hidden])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          'button:not([disabled])',
          'a[href]',
          'area[href]',
          'summary',
          'iframe',
          'object',
          'embed',
          'audio[controls]',
          'video[controls]',
          '[contenteditable]',
        ],
        P =
          x.join(':not([hidden]),') +
          ',[tabindex]:not([disabled]):not([hidden])';
      x.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let w = x.join(':not([hidden]):not([tabindex="-1"]),');
      class T {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(t) {
          return this.fastMap.get(t);
        }
        addTreeNode(t, e, i) {
          let s = this.fastMap.get(null != e ? e : null);
          if (!s) return;
          let o = new D({ scopeRef: t });
          s.addChild(o),
            (o.parent = s),
            this.fastMap.set(t, o),
            i && (o.nodeToRestore = i);
        }
        addNode(t) {
          this.fastMap.set(t.scopeRef, t);
        }
        removeTreeNode(t) {
          if (null === t) return;
          let e = this.fastMap.get(t);
          if (!e) return;
          let i = e.parent;
          for (let t of this.traverse())
            t !== e &&
              e.nodeToRestore &&
              t.nodeToRestore &&
              e.scopeRef &&
              e.scopeRef.current &&
              (function (t, e) {
                return !!t && !!e && e.some((e) => e.contains(t));
              })(t.nodeToRestore, e.scopeRef.current) &&
              (t.nodeToRestore = e.nodeToRestore);
          let s = e.children;
          i &&
            (i.removeChild(e),
            s.size > 0 && s.forEach((t) => i && i.addChild(t))),
            this.fastMap.delete(e.scopeRef);
        }
        *traverse(t = this.root) {
          if ((null != t.scopeRef && (yield t), t.children.size > 0))
            for (let e of t.children) yield* this.traverse(e);
        }
        clone() {
          var t, e;
          let i = new T();
          for (let s of this.traverse())
            i.addTreeNode(
              s.scopeRef,
              null !==
                (e =
                  null === (t = s.parent) || void 0 === t
                    ? void 0
                    : t.scopeRef) && void 0 !== e
                ? e
                : null,
              s.nodeToRestore,
            );
          return i;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new D({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class D {
        addChild(t) {
          this.children.add(t), (t.parent = this);
        }
        removeChild(t) {
          this.children.delete(t), (t.parent = void 0);
        }
        constructor(t) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = t.scopeRef);
        }
      }
      new T();
      var A = i(25829),
        E = i(57437),
        S = (0, s.Gp)((t, e) => {
          var i, s;
          let {
              as: a,
              tabKey: h,
              destroyInactiveTabPanel: c,
              state: p,
              className: m,
              slots: g,
              classNames: x,
              ...T
            } = t,
            D = (0, o.gy)(e),
            { tabPanelProps: S } = (function (t, e, i) {
              var s;
              let o = !(function (t, e) {
                  let i,
                    [s, o] = (0, d.useState)(!1);
                  return (
                    u(() => {
                      if ((null == t ? void 0 : t.current) && !i) {
                        let e = () => {
                          if (t.current) {
                            var e, i;
                            let s, r;
                            o(
                              !!((e = t.current),
                              (s = (i = { tabbable: !0 }).tabbable ? w : P),
                              (r = y(e).createTreeWalker(
                                e,
                                NodeFilter.SHOW_ELEMENT,
                                {
                                  acceptNode(t) {
                                    var e;
                                    return (
                                      null == i
                                        ? void 0
                                        : null === (e = i.from) || void 0 === e
                                          ? void 0
                                          : e.contains(t)
                                    )
                                      ? NodeFilter.FILTER_REJECT
                                      : t.matches(s) &&
                                          (function t(e, i) {
                                            return (
                                              '#comment' !== e.nodeName &&
                                              (function (t) {
                                                let e = b(t);
                                                if (
                                                  !(
                                                    t instanceof e.HTMLElement
                                                  ) &&
                                                  !(t instanceof e.SVGElement)
                                                )
                                                  return !1;
                                                let {
                                                    display: i,
                                                    visibility: s,
                                                  } = t.style,
                                                  o =
                                                    'none' !== i &&
                                                    'hidden' !== s &&
                                                    'collapse' !== s;
                                                if (o) {
                                                  let { getComputedStyle: e } =
                                                      t.ownerDocument
                                                        .defaultView,
                                                    {
                                                      display: i,
                                                      visibility: s,
                                                    } = e(t);
                                                  o =
                                                    'none' !== i &&
                                                    'hidden' !== s &&
                                                    'collapse' !== s;
                                                }
                                                return o;
                                              })(e) &&
                                              !e.hasAttribute('hidden') &&
                                              !e.hasAttribute(
                                                'data-react-aria-prevent-focus',
                                              ) &&
                                              ('DETAILS' !== e.nodeName ||
                                                !i ||
                                                'SUMMARY' === i.nodeName ||
                                                e.hasAttribute('open')) &&
                                              (!e.parentElement ||
                                                t(e.parentElement, e))
                                            );
                                          })(t) &&
                                          (!(null == i ? void 0 : i.accept) ||
                                            i.accept(t))
                                        ? NodeFilter.FILTER_ACCEPT
                                        : NodeFilter.FILTER_SKIP;
                                  },
                                },
                              )),
                              (null == i ? void 0 : i.from) &&
                                (r.currentNode = i.from),
                              r).nextNode(),
                            );
                          }
                        };
                        e();
                        let i = new MutationObserver(e);
                        return (
                          i.observe(t.current, {
                            subtree: !0,
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ['tabIndex', 'disabled'],
                          }),
                          () => {
                            i.disconnect();
                          }
                        );
                      }
                    }),
                    !i && s
                  );
                })(i)
                  ? 0
                  : void 0,
                r = l(
                  e,
                  null !== (s = t.id) && void 0 !== s
                    ? s
                    : null == e
                      ? void 0
                      : e.selectedKey,
                  'tabpanel',
                );
              return {
                tabPanelProps: v(
                  f({
                    ...t,
                    id: r,
                    'aria-labelledby': l(
                      e,
                      null == e ? void 0 : e.selectedKey,
                      'tab',
                    ),
                  }),
                  {
                    tabIndex: o,
                    role: 'tabpanel',
                    'aria-describedby': t['aria-describedby'],
                    'aria-details': t['aria-details'],
                  },
                ),
              };
            })({ ...t, id: String(h) }, p, D),
            { focusProps: L, isFocused: R, isFocusVisible: M } = (0, A.F)(),
            k = p.selectedItem,
            C = p.collection.getItem(h).props.children,
            j = (0, r.W)(
              null == x ? void 0 : x.panel,
              m,
              null == (i = null == k ? void 0 : k.props) ? void 0 : i.className,
            ),
            K = h === (null == k ? void 0 : k.key);
          return C && (K || !c)
            ? (0, E.jsx)(a || 'div', {
                ref: D,
                'data-focus': R,
                'data-focus-visible': M,
                'data-inert': K ? void 0 : 'true',
                inert: K ? void 0 : 'true',
                ...(K && (0, n.d)(S, L, T)),
                className:
                  null == (s = g.panel) ? void 0 : s.call(g, { class: j }),
                'data-slot': 'panel',
                children: C,
              })
            : null;
        });
      S.displayName = 'NextUI.TabPanel';
      var L = i(75300),
        R = i(53640),
        M = i(5722),
        k = i(49998);
      let C = new Set(['id']),
        j = new Set([
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-details',
        ]),
        K = new Set([
          'href',
          'hrefLang',
          'target',
          'rel',
          'download',
          'ping',
          'referrerPolicy',
        ]),
        B = /^(data-.*)$/,
        V = null;
      function N(t) {
        var e;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          ((null === (e = window.navigator.userAgentData) || void 0 === e
            ? void 0
            : e.brands.some((e) => t.test(e.brand))) ||
            t.test(window.navigator.userAgent))
        );
      }
      function F(t) {
        var e;
        return (
          'undefined' != typeof window &&
          null != window.navigator &&
          t.test(
            (null === (e = window.navigator.userAgentData) || void 0 === e
              ? void 0
              : e.platform) || window.navigator.platform,
          )
        );
      }
      function O(t) {
        let e = null;
        return () => (null == e && (e = t()), e);
      }
      let U = O(function () {
          return F(/^Mac/i);
        }),
        W = O(function () {
          return F(/^iPhone/i);
        }),
        I = O(function () {
          return F(/^iPad/i) || (U() && navigator.maxTouchPoints > 1);
        }),
        z = O(function () {
          return W() || I();
        });
      O(function () {
        return U() || z();
      });
      let H = O(function () {
          return N(/AppleWebKit/i) && !$();
        }),
        $ = O(function () {
          return N(/Chrome/i);
        });
      O(function () {
        return N(/Android/i);
      });
      let G = O(function () {
          return N(/Firefox/i);
        }),
        _ = (0, d.createContext)({
          isNative: !0,
          open: function (t, e) {
            !(function (t, e) {
              if (t instanceof HTMLAnchorElement) e(t);
              else if (t.hasAttribute('data-href')) {
                let i = document.createElement('a');
                (i.href = t.getAttribute('data-href')),
                  t.hasAttribute('data-target') &&
                    (i.target = t.getAttribute('data-target')),
                  t.hasAttribute('data-rel') &&
                    (i.rel = t.getAttribute('data-rel')),
                  t.hasAttribute('data-download') &&
                    (i.download = t.getAttribute('data-download')),
                  t.hasAttribute('data-ping') &&
                    (i.ping = t.getAttribute('data-ping')),
                  t.hasAttribute('data-referrer-policy') &&
                    (i.referrerPolicy = t.getAttribute('data-referrer-policy')),
                  t.appendChild(i),
                  e(i),
                  t.removeChild(i);
              }
            })(t, (t) => X(t, e));
          },
          useHref: (t) => t,
        });
      function X(t, e, i = !0) {
        var s, o;
        let { metaKey: r, ctrlKey: n, altKey: a, shiftKey: l } = e;
        G() &&
          (null === (o = window.event) || void 0 === o
            ? void 0
            : null === (s = o.type) || void 0 === s
              ? void 0
              : s.startsWith('key')) &&
          '_blank' === t.target &&
          (U() ? (r = !0) : (n = !0));
        let d =
          H() && U() && !I()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: r,
                ctrlKey: n,
                altKey: a,
                shiftKey: l,
              })
            : new MouseEvent('click', {
                metaKey: r,
                ctrlKey: n,
                altKey: a,
                shiftKey: l,
                bubbles: !0,
                cancelable: !0,
              });
        (X.isOpening = i),
          (function (t) {
            if (
              (function () {
                if (null == V) {
                  V = !1;
                  try {
                    document.createElement('div').focus({
                      get preventScroll() {
                        return (V = !0), !0;
                      },
                    });
                  } catch (t) {}
                }
                return V;
              })()
            )
              t.focus({ preventScroll: !0 });
            else {
              let e = (function (t) {
                let e = t.parentNode,
                  i = [],
                  s = document.scrollingElement || document.documentElement;
                for (; e instanceof HTMLElement && e !== s; )
                  (e.offsetHeight < e.scrollHeight ||
                    e.offsetWidth < e.scrollWidth) &&
                    i.push({
                      element: e,
                      scrollTop: e.scrollTop,
                      scrollLeft: e.scrollLeft,
                    }),
                    (e = e.parentNode);
                return (
                  s instanceof HTMLElement &&
                    i.push({
                      element: s,
                      scrollTop: s.scrollTop,
                      scrollLeft: s.scrollLeft,
                    }),
                  i
                );
              })(t);
              t.focus(),
                (function (t) {
                  for (let { element: e, scrollTop: i, scrollLeft: s } of t)
                    (e.scrollTop = i), (e.scrollLeft = s);
                })(e);
            }
          })(t),
          t.dispatchEvent(d),
          (X.isOpening = !1);
      }
      X.isOpening = !1;
      var Y = i(37190),
        Z = i(83892),
        J = i(60980),
        Q = i(20847),
        q = i(69276),
        tt = i(19047),
        te = i(63280),
        ti = i(80557),
        ts = i(33787),
        to = i(89654);
      let tr = (t, e) => Math.abs(t - e);
      var tn = i(83414),
        ta = i(86219);
      class tl {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: o = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = th(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                o =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tr(t.x, e.x) ** 2 + tr(t.y, e.y) ** 2) >= 3);
              if (!s && !o) return;
              let { point: r } = i,
                { timestamp: n } = ta.frameData;
              this.history.push({ ...r, timestamp: n });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = td(e, this.transformPagePoint)),
                ta.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: o,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && o && o(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = th(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : td(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !(0, tn.D)(t))
          )
            return;
          (this.dragSnapToOrigin = o),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = td((0, te.Q)(t), this.transformPagePoint),
            { point: n } = r,
            { timestamp: a } = ta.frameData;
          this.history = [{ ...n, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, th(r, this.history)),
            (this.removeListeners = (0, to.z)(
              (0, ts.a)(
                this.contextWindow,
                'pointermove',
                this.handlePointerMove,
              ),
              (0, ts.a)(this.contextWindow, 'pointerup', this.handlePointerUp),
              (0, ts.a)(
                this.contextWindow,
                'pointercancel',
                this.handlePointerUp,
              ),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, ta.Pn)(this.updatePoint);
        }
      }
      function td(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tu(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function th({ point: t }, e) {
        return {
          point: t,
          delta: tu(t, tc(e)),
          offset: tu(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              o = tc(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(o.timestamp - s.timestamp > (0, ti.w)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = (0, ti.X)(o.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let n = { x: (o.x - s.x) / r, y: (o.y - s.y) / r };
            return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n;
          })(e, 0),
        };
      }
      function tc(t) {
        return t[t.length - 1];
      }
      var tp = i(75153),
        tm = i(17576),
        tf = i(33217),
        tg = i(75004);
      function tv(t) {
        return t.max - t.min;
      }
      function ty(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, tg.t)(e.min, e.max, t.origin)),
          (t.scale = tv(i) / tv(e)),
          (t.translate = (0, tg.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function tb(t, e, i, s) {
        ty(t.x, e.x, i.x, s ? s.originX : void 0),
          ty(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function tx(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + tv(e));
      }
      function tP(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + tv(e));
      }
      function tw(t, e, i) {
        tP(t.x, e.x, i.x), tP(t.y, e.y, i.y);
      }
      var tT = i(51506);
      function tD(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tA(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function tE(t, e, i) {
        return { min: tS(t, e), max: tS(t, i) };
      }
      function tS(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      var tL = i(58250);
      function tR(t) {
        return [t('x'), t('y')];
      }
      var tM = i(77684),
        tk = i(33005),
        tC = i(23731),
        tj = i(75480),
        tK = i(11298);
      let tB = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tV = i(3944);
      let tN = new WeakMap();
      class tF {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, tL.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new tl(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, te.Q)(t, 'page').point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: o,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, tp.fJ)(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tR((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tj.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = tv(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  o && ta.Wi.postRender(() => o(t, e)),
                  (0, tV.K)(this.visualElement, 'transform');
                let { animationState: r } = this.visualElement;
                r && r.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: o,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: n } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = 'y')
                        : Math.abs(t.x) > e && (i = 'x'),
                      i
                    );
                  })(n)),
                    null !== this.currentDirection &&
                      o &&
                      o(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, n),
                  this.updateAxis('y', e.point, n),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tR((t) => {
                  var e;
                  return (
                    'paused' === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: tB(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && ta.Wi.postRender(() => o(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive('whileDrag', !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !tO(t, s, this.currentDirection)) return;
          let o = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, tg.t)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, tg.t)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            o.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            o = this.constraints;
          e && (0, tm.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: s, right: o },
                ) {
                  return { x: tD(t.x, i, o), y: tD(t.y, e, s) };
                })(s.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tE(t, 'left', 'right'), y: tE(t, 'top', 'bottom') }
              );
            })(i)),
            o !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tR((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, tm.I)(e)) return !1;
          let s = e.current;
          (0, tt.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let r = (0, tM.z)(
              s,
              o.root,
              this.visualElement.getTransformPagePoint(),
            ),
            n = { x: tA((t = o.layout.layoutBox).x, r.x), y: tA(t.y, r.y) };
          if (i) {
            let t = i((0, tk.z2)(n));
            (this.hasMutatedConstraints = !!t), t && (n = (0, tk.i8)(t));
          }
          return n;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: o,
              dragSnapToOrigin: r,
              onDragTransitionEnd: n,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            tR((n) => {
              if (!tO(n, e, this.currentDirection)) return;
              let l = (a && a[n]) || {};
              r && (l = { min: 0, max: 0 });
              let d = {
                type: 'inertia',
                velocity: i ? t[n] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l,
              };
              return this.startAxisValueAnimation(n, d);
            }),
          ).then(n);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, tV.K)(this.visualElement, t),
            i.start((0, tK.v)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          tR((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tR((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          tR((e) => {
            let { drag: i } = this.getProps();
            if (!tO(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              o.set(t[e] - (0, tg.t)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, tm.I)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          tR((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = tv(t),
                  o = tv(e);
                return (
                  o > s
                    ? (i = (0, tf.Y)(e.min, e.max - s, t.min))
                    : s > o && (i = (0, tf.Y)(t.min, t.max - o, e.min)),
                  (0, tT.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            tR((e) => {
              if (!tO(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: o, max: r } = this.constraints[e];
              i.set((0, tg.t)(o, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tN.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, ts.a)(t, 'pointerdown', (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              (0, tm.I)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: s } = this.visualElement,
            o = s.addEventListener('measure', i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
            ta.Wi.read(i);
          let r = (0, tC.E)(window, 'resize', () =>
              this.scalePositionWithinConstraints(),
            ),
            n = s.addEventListener(
              'didUpdate',
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tR((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            r(), e(), o(), n && n();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: r = 0.35,
              dragMomentum: n = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: n,
          };
        }
      }
      function tO(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tU extends Q.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = q.Z),
            (this.removeListeners = q.Z),
            (this.controls = new tF(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || q.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tW = (t) => (e, i) => {
        t && ta.Wi.postRender(() => t(e, i));
      };
      class tI extends Q.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = q.Z);
        }
        onPointerDown(t) {
          this.session = new tl(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tB(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: tW(t),
            onStart: tW(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && ta.Wi.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, ts.a)(
            this.node.current,
            'pointerdown',
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tz = i(67797),
        tH = i(5050),
        t$ = i(86094);
      let tG = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function t_(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tX = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ('string' == typeof t) {
            if (!tj.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = t_(t, e.target.x),
            s = t_(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var tY = i(83646),
        tZ = i(57290),
        tJ = i(78172);
      class tQ extends d.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: o } = t;
          (0, tZ.B)(t0),
            o &&
              (e.group && e.group.add(o),
              i && i.register && s && i.register(o),
              o.root.didUpdate(),
              o.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tG.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: o,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = o),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === o ||
                (o
                  ? r.promote()
                  : r.relegate() ||
                    ta.Wi.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tJ.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tq(t) {
        let [e, i] = (function () {
            let t = (0, d.useContext)(tz.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              o = (0, d.useId)();
            (0, d.useEffect)(() => s(o), []);
            let r = (0, d.useCallback)(() => i && i(o), [o, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          s = (0, d.useContext)(tH.p);
        return (0, E.jsx)(tQ, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, d.useContext)(t$.g),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let t0 = {
        borderRadius: {
          ...tX,
          applyTo: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
          ],
        },
        borderTopLeftRadius: tX,
        borderTopRightRadius: tX,
        borderBottomLeftRadius: tX,
        borderBottomRightRadius: tX,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = tY.P.parse(t);
            if (s.length > 5) return t;
            let o = tY.P.createTransformer(t),
              r = 'number' != typeof s[0] ? 1 : 0,
              n = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + r] /= n), (s[1 + r] /= a);
            let l = (0, tg.t)(n, a, 0.5);
            return (
              'number' == typeof s[2 + r] && (s[2 + r] /= l),
              'number' == typeof s[3 + r] && (s[3 + r] /= l),
              o(s)
            );
          },
        },
      };
      var t1 = i(72428),
        t2 = i(68536);
      let t5 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        t3 = t5.length,
        t9 = (t) => ('string' == typeof t ? parseFloat(t) : t),
        t7 = (t) => 'number' == typeof t || tj.px.test(t);
      function t8(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let t4 = et(0, 0.5, t2.Bn),
        t6 = et(0.5, 0.95, q.Z);
      function et(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, tf.Y)(t, e, s)));
      }
      function ee(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ei(t, e) {
        ee(t.x, e.x), ee(t.y, e.y);
      }
      function es(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var eo = i(46711);
      function er(t, e, i, s, o) {
        return (
          (t -= e),
          (t = (0, eo.q2)(t, 1 / i, s)),
          void 0 !== o && (t = (0, eo.q2)(t, 1 / o, s)),
          t
        );
      }
      function en(t, e, [i, s, o], r, n) {
        !(function (t, e = 0, i = 1, s = 0.5, o, r = t, n = t) {
          if (
            (tj.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tg.t)(n.min, n.max, e / 100) - n.min)),
            'number' != typeof e)
          )
            return;
          let a = (0, tg.t)(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = er(t.min, e, i, a, o)),
            (t.max = er(t.max, e, i, a, o));
        })(t, e[i], e[s], e[o], e.scale, r, n);
      }
      let ea = ['x', 'scaleX', 'originX'],
        el = ['y', 'scaleY', 'originY'];
      function ed(t, e, i, s) {
        en(t.x, e, ea, i ? i.x : void 0, s ? s.x : void 0),
          en(t.y, e, el, i ? i.y : void 0, s ? s.y : void 0);
      }
      var eu = i(69792);
      function eh(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ec(t) {
        return eh(t.x) && eh(t.y);
      }
      function ep(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function em(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function ef(t, e) {
        return em(t.x, e.x) && em(t.y, e.y);
      }
      function eg(t) {
        return tv(t.x) / tv(t.y);
      }
      function ev(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var ey = i(28746);
      class eb {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ey.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ey.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var ex = i(98107);
      let eP = (t, e) => t.depth - e.depth;
      class ew {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ey.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ey.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eP),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eT = i(32404),
        eD = i(59993),
        eA = i(20804),
        eE = i(77599),
        eS = i(2087);
      let eL = {
          type: 'projectionFrame',
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        eR = 'undefined' != typeof window && void 0 !== window.MotionDebug,
        eM = ['', 'X', 'Y', 'Z'],
        ek = { visibility: 'hidden' },
        eC = 0;
      function ej(t, e, i, s) {
        let { latestValues: o } = e;
        o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function eK({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: o,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = eC++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  eR &&
                    (eL.totalNodes =
                      eL.resolvedTargetDeltas =
                      eL.recalculatedProjection =
                        0),
                  this.nodes.forEach(eN),
                  this.nodes.forEach(eH),
                  this.nodes.forEach(e$),
                  this.nodes.forEach(eF),
                  eR && window.MotionDebug.record(eL);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ew());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new t1.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: o, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (o || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = eD.X.now(),
                      s = ({ timestamp: e }) => {
                        let o = e - i;
                        o >= 250 && ((0, ta.Pn)(s), t(o - 250));
                      };
                    return ta.Wi.read(s, !0), () => (0, ta.Pn)(s);
                  })(s, 0)),
                  tG.hasAnimatedSinceResize &&
                    ((tG.hasAnimatedSinceResize = !1), this.nodes.forEach(ez));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || o) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let o =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        eJ,
                      {
                        onLayoutAnimationStart: n,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !ef(this.targetLayout, s) || i,
                      d = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      d ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, d);
                      let e = {
                        ...(0, eu.e)(o, 'layout'),
                        onPlay: n,
                        onComplete: a,
                      };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || ez(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, ta.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eG),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = (0, eS.s)(i);
                  if (window.MotionHasOptimisedAnimation(s, 'transform')) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      'transform',
                      ta.Wi,
                      !(t || i),
                    );
                  }
                  let { parent: o } = e;
                  o && !o.hasCheckedOptimisedAppear && t(o);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, '')
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eU);
              return;
            }
            this.isUpdating || this.nodes.forEach(eW),
              (this.isUpdating = !1),
              this.nodes.forEach(eI),
              this.nodes.forEach(eB),
              this.nodes.forEach(eV),
              this.clearAllSnapshots();
            let t = eD.X.now();
            (ta.frameData.delta = (0, tT.u)(
              0,
              1e3 / 60,
              t - ta.frameData.timestamp,
            )),
              (ta.frameData.timestamp = t),
              (ta.frameData.isProcessing = !0),
              ta.yL.update.process(ta.frameData),
              ta.yL.preRender.process(ta.frameData),
              ta.yL.render.process(ta.frameData),
              (ta.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tJ.g.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eO), this.sharedNodes.forEach(e_);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              ta.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            ta.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, tL.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                'LayoutMeasure',
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = 'measure') {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!o) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !ec(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, '') : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || (0, ex.ud)(this.latestValues) || r) &&
              (o(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              e0((e = s).x),
              e0(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, tL.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(e2)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, eo.am)(i.x, t.offset.x), (0, eo.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, tL.dO)();
            if (
              (ei(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: o, options: r } = s;
              s !== this.root &&
                o &&
                r.layoutScroll &&
                (o.wasRoot && ei(i, t),
                (0, eo.am)(i.x, o.offset.x),
                (0, eo.am)(i.y, o.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, tL.dO)();
            ei(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, eo.D2)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, ex.ud)(s.latestValues) && (0, eo.D2)(i, s.latestValues);
            }
            return (
              (0, ex.ud)(this.latestValues) && (0, eo.D2)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, tL.dO)();
            ei(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, ex.ud)(i.latestValues)) continue;
              (0, ex.Lj)(i.latestValues) && i.updateSnapshot();
              let s = (0, tL.dO)();
              ei(s, i.measurePageBox()),
                ed(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s,
                );
            }
            return (0, ex.ud)(this.latestValues) && ed(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                ta.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, o;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = ta.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tL.dO)()),
                    (this.relativeTargetOrigin = (0, tL.dO)()),
                    tw(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    ei(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, tL.dO)()),
                    (this.targetWithTransforms = (0, tL.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (o = this.relativeParent.target),
                      tx(i.x, s.x, o.x),
                      tx(i.y, s.y, o.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : ei(this.target, this.layout.layoutBox),
                        (0, eo.o2)(this.target, this.targetDelta))
                      : ei(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, tL.dO)()),
                      (this.relativeTargetOrigin = (0, tL.dO)()),
                      tw(this.relativeTargetOrigin, this.target, t.target),
                      ei(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eR && eL.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, ex.Lj)(this.parent.latestValues) ||
              (0, ex.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === ta.frameData.timestamp &&
                (s = !1),
              s)
            )
              return;
            let { layout: o, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || r))
            )
              return;
            ei(this.layoutCorrected, this.layout.layoutBox);
            let n = this.treeScale.x,
              a = this.treeScale.y;
            (0, eo.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, tL.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (es(this.prevProjectionDelta.x, this.projectionDelta.x),
                es(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              tb(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === n &&
                this.treeScale.y === a &&
                ev(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ev(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              eR && eL.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, tL.wc)()),
              (this.projectionDelta = (0, tL.wc)()),
              (this.projectionDeltaWithTransform = (0, tL.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              o = s ? s.latestValues : {},
              r = { ...this.latestValues },
              n = (0, tL.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tL.dO)(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              d = this.getStack(),
              u = !d || d.members.length <= 1,
              h = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(eZ)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (eX(n.x, t.x, s),
                  eX(n.y, t.y, s),
                  this.setTargetDelta(n),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var d, c, p, m;
                  tw(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    eY(p.x, m.x, a.x, s),
                    eY(p.y, m.y, a.y, s),
                    i &&
                      ((d = this.relativeTarget),
                      (c = i),
                      ep(d.x, c.x) && ep(d.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, tL.dO)()),
                    ei(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, o, r) {
                    o
                      ? ((t.opacity = (0, tg.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          t4(s),
                        )),
                        (t.opacityExit = (0, tg.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t6(s),
                        )))
                      : r &&
                        (t.opacity = (0, tg.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s,
                        ));
                    for (let o = 0; o < t3; o++) {
                      let r = `border${t5[o]}Radius`,
                        n = t8(e, r),
                        a = t8(i, r);
                      (void 0 !== n || void 0 !== a) &&
                        (n || (n = 0),
                        a || (a = 0),
                        0 === n || 0 === a || t7(n) === t7(a)
                          ? ((t[r] = Math.max((0, tg.t)(t9(n), t9(a), s), 0)),
                            (tj.aQ.test(a) || tj.aQ.test(n)) && (t[r] += '%'))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tg.t)(e.rotate || 0, i.rotate || 0, s));
                  })(r, o, this.latestValues, s, h, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, ta.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = ta.Wi.update(() => {
                (tG.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, eE.i)(0) ? 0 : (0, eA.BX)(0);
                    return s.start((0, tK.v)('', s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: o,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                e1(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox,
                )
              ) {
                i = this.target || (0, tL.dO)();
                let e = tv(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = tv(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              ei(e, i),
                (0, eo.D2)(e, o),
                tb(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eb()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && ej('z', t, s, this.animationValues);
            for (let e = 0; e < eM.length; e++)
              ej(`rotate${eM[e]}`, t, s, this.animationValues),
                ej(`skew${eM[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ek;
            let s = { visibility: '' },
              o = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ''),
                (s.pointerEvents =
                  (0, eT.b)(null == t ? void 0 : t.pointerEvents) || ''),
                (s.transform = o ? o(this.latestValues, '') : 'none'),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, eT.b)(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !(0, ex.ud)(this.latestValues) &&
                  ((e.transform = o ? o({}, '') : 'none'),
                  (this.hasProjected = !1)),
                e
              );
            }
            let n = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = '',
                  o = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  n = (null == i ? void 0 : i.z) || 0;
                if (
                  ((o || r || n) &&
                    (s = `translate3d(${o}px, ${r}px, ${n}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: o,
                    rotateY: r,
                    skewX: n,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    o && (s += `rotateX(${o}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    n && (s += `skewX(${n}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || 'none'
                );
              })(this.projectionDeltaWithTransform, this.treeScale, n)),
              o && (s.transform = o(n, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = n.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : n.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ''
                    : void 0 !== n.opacityExit
                      ? n.opacityExit
                      : 0),
            tZ.P)) {
              if (void 0 === n[t]) continue;
              let { correct: e, applyTo: i } = tZ.P[t],
                o = 'none' === s.transform ? n[t] : e(n[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = o;
              } else s[t] = o;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? (0, eT.b)(null == t ? void 0 : t.pointerEvents) || ''
                    : 'none'),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eU),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eB(t) {
        t.updateLayout();
      }
      function eV(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: o } = t.options,
            r = i.source !== t.layout.source;
          'size' === o
            ? tR((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  o = tv(s);
                (s.min = e[t].min), (s.max = s.min + o);
              })
            : e1(o, i.layoutBox, e) &&
              tR((s) => {
                let o = r ? i.measuredBox[s] : i.layoutBox[s],
                  n = tv(e[s]);
                (o.max = o.min + n),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + n));
              });
          let n = (0, tL.wc)();
          tb(n, e, i.layoutBox);
          let a = (0, tL.wc)();
          r
            ? tb(a, t.applyTransform(s, !0), i.measuredBox)
            : tb(a, e, i.layoutBox);
          let l = !ec(n),
            d = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: o, layout: r } = s;
              if (o && r) {
                let n = (0, tL.dO)();
                tw(n, i.layoutBox, o.layoutBox);
                let a = (0, tL.dO)();
                tw(a, e, r.layoutBox),
                  ef(n, a) || (d = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = n),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: n,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: d,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eN(t) {
        eR && eL.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eF(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eO(t) {
        t.clearSnapshot();
      }
      function eU(t) {
        t.clearMeasurements();
      }
      function eW(t) {
        t.isLayoutDirty = !1;
      }
      function eI(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function ez(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eH(t) {
        t.resolveTargetDelta();
      }
      function e$(t) {
        t.calcProjection();
      }
      function eG(t) {
        t.resetSkewAndRotation();
      }
      function e_(t) {
        t.removeLeadSnapshot();
      }
      function eX(t, e, i) {
        (t.translate = (0, tg.t)(e.translate, 0, i)),
          (t.scale = (0, tg.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eY(t, e, i, s) {
        (t.min = (0, tg.t)(e.min, i.min, s)),
          (t.max = (0, tg.t)(e.max, i.max, s));
      }
      function eZ(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eJ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eQ = (t) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eq = eQ('applewebkit/') && !eQ('chrome/') ? Math.round : q.Z;
      function e0(t) {
        (t.min = eq(t.min)), (t.max = eq(t.max));
      }
      function e1(t, e, i) {
        return (
          'position' === t ||
          ('preserve-aspect' === t && !(0.2 >= Math.abs(eg(e) - eg(i))))
        );
      }
      function e2(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let e5 = eK({
          attachResizeListener: (t, e) => (0, tC.E)(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        e3 = { current: void 0 },
        e9 = eK({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!e3.current) {
              let t = new e5({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (e3.current = t);
            }
            return e3.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: (t) =>
            'fixed' === window.getComputedStyle(t).position,
        }),
        e7 = {
          ...i(83582).H,
          pan: { Feature: tI },
          drag: { Feature: tU, ProjectionNode: e9, MeasureLayout: tq },
          layout: { ProjectionNode: e9, MeasureLayout: tq },
        };
      var e8 = i(34565),
        e4 = (0, s.Gp)((t, e) => {
          var i;
          let {
              className: s,
              as: a,
              item: u,
              state: h,
              classNames: c,
              isDisabled: p,
              listRef: m,
              slots: f,
              motionProps: g,
              disableAnimation: y,
              disableCursorAnimation: b,
              shouldSelectOnPressUp: x,
              onClick: P,
              ...w
            } = t,
            { key: T } = u,
            D = (0, o.gy)(e),
            S = a || (t.href ? 'a' : 'button'),
            {
              tabProps: V,
              isSelected: N,
              isDisabled: F,
              isPressed: O,
            } = (function (t, e, i) {
              var s;
              let o,
                { key: r, isDisabled: n, shouldSelectOnPressUp: a } = t,
                { selectionManager: u, selectedKey: h } = e,
                c = r === h,
                p = n || e.isDisabled || e.selectionManager.isDisabled(r),
                { itemProps: m, isPressed: f } = (0, Y.C)({
                  selectionManager: u,
                  key: r,
                  ref: i,
                  isDisabled: p,
                  shouldSelectOnPressUp: a,
                  linkBehavior: 'selection',
                }),
                g = l(e, r, 'tab'),
                y = l(e, r, 'tabpanel'),
                { tabIndex: b } = m,
                x = e.collection.getItem(r),
                P = (function (t, e = {}) {
                  let { labelable: i, isLink: s, propNames: o } = e,
                    r = {};
                  for (let e in t)
                    Object.prototype.hasOwnProperty.call(t, e) &&
                      (C.has(e) ||
                        (i && j.has(e)) ||
                        (s && K.has(e)) ||
                        (null == o ? void 0 : o.has(e)) ||
                        B.test(e)) &&
                      (r[e] = t[e]);
                  return r;
                })(null == x ? void 0 : x.props, { labelable: !0 });
              return (
                delete P.id,
                {
                  tabProps: v(
                    P,
                    ((s = null == x ? void 0 : x.props),
                    (o = (0, d.useContext)(_)),
                    {
                      href: (null == s ? void 0 : s.href)
                        ? o.useHref(null == s ? void 0 : s.href)
                        : void 0,
                      target: null == s ? void 0 : s.target,
                      rel: null == s ? void 0 : s.rel,
                      download: null == s ? void 0 : s.download,
                      ping: null == s ? void 0 : s.ping,
                      referrerPolicy: null == s ? void 0 : s.referrerPolicy,
                    }),
                    m,
                    {
                      id: g,
                      'aria-selected': c,
                      'aria-disabled': p || void 0,
                      'aria-controls': c ? y : void 0,
                      tabIndex: p ? void 0 : b,
                      role: 'tab',
                    },
                  ),
                  isSelected: c,
                  isDisabled: p,
                  isPressed: f,
                }
              );
            })({ key: T, isDisabled: p, shouldSelectOnPressUp: x }, h, D);
          null == t.children && delete V['aria-controls'];
          let U = p || F,
            { focusProps: W, isFocused: I, isFocusVisible: z } = (0, A.F)(),
            { hoverProps: H, isHovered: $ } = (0, Z.X)({ isDisabled: U }),
            G = (0, r.W)(null == c ? void 0 : c.tab, s),
            [, X] = (function (t = {}) {
              let { rerender: e = !1, delay: i = 0 } = t,
                s = (0, d.useRef)(!1),
                [o, r] = (0, d.useState)(!1);
              return (
                (0, d.useEffect)(() => {
                  s.current = !0;
                  let t = null;
                  return (
                    e &&
                      (i > 0
                        ? (t = setTimeout(() => {
                            r(!0);
                          }, i))
                        : r(!0)),
                    () => {
                      (s.current = !1), e && r(!1), t && clearTimeout(t);
                    }
                  );
                }, [e]),
                [(0, d.useCallback)(() => s.current, []), o]
              );
            })({ rerender: !0 });
          return (0, E.jsxs)(S, {
            ref: D,
            'data-disabled': (0, R.PB)(F),
            'data-focus': (0, R.PB)(I),
            'data-focus-visible': (0, R.PB)(z),
            'data-hover': (0, R.PB)($),
            'data-hover-unselected': (0, R.PB)(($ || O) && !N),
            'data-pressed': (0, R.PB)(O),
            'data-selected': (0, R.PB)(N),
            'data-slot': 'tab',
            ...(0, n.d)(
              V,
              U ? {} : { ...W, ...H },
              (0, L.z)(w, {
                enabled: 'string' == typeof S,
                omitPropNames: new Set(['title']),
              }),
              {
                onClick: () => {
                  (0, M.t)(P, V.onClick),
                    (null == D ? void 0 : D.current) &&
                      (null == m ? void 0 : m.current) &&
                      (0, k.Z)(D.current, {
                        scrollMode: 'if-needed',
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'end',
                        boundary: null == m ? void 0 : m.current,
                      });
                },
              },
            ),
            className: null == (i = f.tab) ? void 0 : i.call(f, { class: G }),
            title: null == w ? void 0 : w.titleValue,
            type: 'button' === S ? 'button' : void 0,
            children: [
              N && !y && !b && X
                ? (0, E.jsx)(J.X, {
                    features: e7,
                    children: (0, E.jsx)(e8.m.span, {
                      className: f.cursor({
                        class: null == c ? void 0 : c.cursor,
                      }),
                      'data-slot': 'cursor',
                      layoutDependency: !1,
                      layoutId: 'cursor',
                      transition: {
                        type: 'spring',
                        bounce: 0.15,
                        duration: 0.5,
                      },
                      ...g,
                    }),
                  })
                : null,
              (0, E.jsx)('div', {
                className: f.tabContent({
                  class: null == c ? void 0 : c.tabContent,
                }),
                'data-slot': 'tabContent',
                children: u.rendered,
              }),
            ],
          });
        });
      e4.displayName = 'NextUI.Tab';
      var e6 = i(12094),
        it = i(22226),
        ie = i(2068),
        ii = i(21616),
        is = (0, ie.tv)({
          slots: {
            base: 'inline-flex',
            tabList: [
              'flex',
              'p-1',
              'h-fit',
              'gap-2',
              'items-center',
              'flex-nowrap',
              'overflow-x-scroll',
              'scrollbar-hide',
              'bg-default-100',
            ],
            tab: [
              'z-0',
              'w-full',
              'px-3',
              'py-1',
              'flex',
              'group',
              'relative',
              'justify-center',
              'items-center',
              'outline-none',
              'cursor-pointer',
              'transition-opacity',
              'tap-highlight-transparent',
              'data-[disabled=true]:cursor-not-allowed',
              'data-[disabled=true]:opacity-30',
              'data-[hover-unselected=true]:opacity-disabled',
              ...ii.Dh,
            ],
            tabContent: [
              'relative',
              'z-10',
              'text-inherit',
              'whitespace-nowrap',
              'transition-colors',
              'text-default-500',
              'group-data-[selected=true]:text-foreground',
            ],
            cursor: ['absolute', 'z-0', 'bg-white'],
            panel: [
              'py-3',
              'px-1',
              'outline-none',
              'data-[inert=true]:hidden',
              ...ii.Dh,
            ],
            wrapper: [],
          },
          variants: {
            variant: {
              solid: { cursor: 'inset-0' },
              light: {
                tabList: 'bg-transparent dark:bg-transparent',
                cursor: 'inset-0',
              },
              underlined: {
                tabList: 'bg-transparent dark:bg-transparent',
                cursor:
                  'h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
              },
              bordered: {
                tabList:
                  'bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm',
                cursor: 'inset-0',
              },
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
              sm: {
                tabList: 'rounded-medium',
                tab: 'h-7 text-tiny rounded-small',
                cursor: 'rounded-small',
              },
              md: {
                tabList: 'rounded-medium',
                tab: 'h-8 text-small rounded-small',
                cursor: 'rounded-small',
              },
              lg: {
                tabList: 'rounded-large',
                tab: 'h-9 text-medium rounded-medium',
                cursor: 'rounded-medium',
              },
            },
            radius: {
              none: {
                tabList: 'rounded-none',
                tab: 'rounded-none',
                cursor: 'rounded-none',
              },
              sm: {
                tabList: 'rounded-medium',
                tab: 'rounded-small',
                cursor: 'rounded-small',
              },
              md: {
                tabList: 'rounded-medium',
                tab: 'rounded-small',
                cursor: 'rounded-small',
              },
              lg: {
                tabList: 'rounded-large',
                tab: 'rounded-medium',
                cursor: 'rounded-medium',
              },
              full: {
                tabList: 'rounded-full',
                tab: 'rounded-full',
                cursor: 'rounded-full',
              },
            },
            fullWidth: { true: { base: 'w-full', tabList: 'w-full' } },
            isDisabled: {
              true: { tabList: 'opacity-disabled pointer-events-none' },
            },
            disableAnimation: {
              true: { tab: 'transition-none', tabContent: 'transition-none' },
            },
            placement: {
              top: {},
              start: {
                tabList: 'flex-col',
                panel: 'py-0 px-3',
                wrapper: 'flex',
              },
              end: {
                tabList: 'flex-col',
                panel: 'py-0 px-3',
                wrapper: 'flex flex-row-reverse',
              },
              bottom: { wrapper: 'flex flex-col-reverse' },
            },
          },
          defaultVariants: {
            color: 'default',
            variant: 'solid',
            size: 'md',
            fullWidth: !1,
            isDisabled: !1,
          },
          compoundVariants: [
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'default',
              class: {
                cursor: ['bg-background', 'dark:bg-default', 'shadow-small'],
                tabContent:
                  'group-data-[selected=true]:text-default-foreground',
              },
            },
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'primary',
              class: {
                cursor: it.J.solid.primary,
                tabContent:
                  'group-data-[selected=true]:text-primary-foreground',
              },
            },
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'secondary',
              class: {
                cursor: it.J.solid.secondary,
                tabContent:
                  'group-data-[selected=true]:text-secondary-foreground',
              },
            },
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'success',
              class: {
                cursor: it.J.solid.success,
                tabContent:
                  'group-data-[selected=true]:text-success-foreground',
              },
            },
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'warning',
              class: {
                cursor: it.J.solid.warning,
                tabContent:
                  'group-data-[selected=true]:text-warning-foreground',
              },
            },
            {
              variant: ['solid', 'bordered', 'light'],
              color: 'danger',
              class: {
                cursor: it.J.solid.danger,
                tabContent: 'group-data-[selected=true]:text-danger-foreground',
              },
            },
            {
              variant: 'underlined',
              color: 'default',
              class: {
                cursor: 'bg-foreground',
                tabContent: 'group-data-[selected=true]:text-foreground',
              },
            },
            {
              variant: 'underlined',
              color: 'primary',
              class: {
                cursor: 'bg-primary',
                tabContent: 'group-data-[selected=true]:text-primary',
              },
            },
            {
              variant: 'underlined',
              color: 'secondary',
              class: {
                cursor: 'bg-secondary',
                tabContent: 'group-data-[selected=true]:text-secondary',
              },
            },
            {
              variant: 'underlined',
              color: 'success',
              class: {
                cursor: 'bg-success',
                tabContent: 'group-data-[selected=true]:text-success',
              },
            },
            {
              variant: 'underlined',
              color: 'warning',
              class: {
                cursor: 'bg-warning',
                tabContent: 'group-data-[selected=true]:text-warning',
              },
            },
            {
              variant: 'underlined',
              color: 'danger',
              class: {
                cursor: 'bg-danger',
                tabContent: 'group-data-[selected=true]:text-danger',
              },
            },
            {
              disableAnimation: !0,
              variant: 'underlined',
              class: {
                tab: [
                  "after:content-['']",
                  'after:absolute',
                  'after:bottom-0',
                  'after:h-[2px]',
                  'after:w-[80%]',
                  'after:opacity-0',
                  'after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
                  'data-[selected=true]:after:opacity-100',
                ],
              },
            },
            {
              disableAnimation: !0,
              color: 'default',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-default data-[selected=true]:text-default-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'primary',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'secondary',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'success',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-success data-[selected=true]:text-success-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'warning',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'danger',
              variant: ['solid', 'bordered', 'light'],
              class: {
                tab: 'data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground',
              },
            },
            {
              disableAnimation: !0,
              color: 'default',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-foreground' },
            },
            {
              disableAnimation: !0,
              color: 'primary',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-primary' },
            },
            {
              disableAnimation: !0,
              color: 'secondary',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-secondary' },
            },
            {
              disableAnimation: !0,
              color: 'success',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-success' },
            },
            {
              disableAnimation: !0,
              color: 'warning',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-warning' },
            },
            {
              disableAnimation: !0,
              color: 'danger',
              variant: 'underlined',
              class: { tab: 'data-[selected=true]:after:bg-danger' },
            },
          ],
          compoundSlots: [
            {
              variant: 'underlined',
              slots: ['tab', 'tabList', 'cursor'],
              class: ['rounded-none'],
            },
          ],
        }),
        io = i(36222);
      class ir {
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(t) {
          let e = this.keyMap.get(t);
          return e ? e.prevKey : null;
        }
        getKeyAfter(t) {
          let e = this.keyMap.get(t);
          return e ? e.nextKey : null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(t) {
          return this.keyMap.get(t);
        }
        at(t) {
          let e = [...this.getKeys()];
          return this.getItem(e[t]);
        }
        getChildren(t) {
          let e = this.keyMap.get(t);
          return (null == e ? void 0 : e.childNodes) || [];
        }
        constructor(t) {
          let e;
          (this.keyMap = new Map()), (this.iterable = t);
          let i = (t) => {
            if (
              (this.keyMap.set(t.key, t), t.childNodes && 'section' === t.type)
            )
              for (let e of t.childNodes) i(e);
          };
          for (let e of t) i(e);
          let s = 0;
          for (let [t, i] of this.keyMap)
            e
              ? ((e.nextKey = t), (i.prevKey = e.key))
              : ((this.firstKey = t), (i.prevKey = void 0)),
              'item' === i.type && (i.index = s++),
              ((e = i).nextKey = void 0);
          this.lastKey = null == e ? void 0 : e.key;
        }
      }
      var ia = i(75125),
        il = i(62490),
        id = i(34921),
        iu = i(41821);
      function ih(t, e) {
        let i = null;
        if (t) {
          for (i = t.getFirstKey(); e.has(i) && i !== t.getLastKey(); )
            i = t.getKeyAfter(i);
          e.has(i) && i === t.getLastKey() && (i = t.getFirstKey());
        }
        return i;
      }
      class ic {
        getKeyLeftOf(t) {
          return this.flipDirection
            ? this.getNextKey(t)
            : this.getPreviousKey(t);
        }
        getKeyRightOf(t) {
          return this.flipDirection
            ? this.getPreviousKey(t)
            : this.getNextKey(t);
        }
        getKeyAbove(t) {
          return this.getPreviousKey(t);
        }
        getKeyBelow(t) {
          return this.getNextKey(t);
        }
        isDisabled(t) {
          var e, i;
          return (
            this.disabledKeys.has(t) ||
            !!(null === (i = this.collection.getItem(t)) || void 0 === i
              ? void 0
              : null === (e = i.props) || void 0 === e
                ? void 0
                : e.isDisabled)
          );
        }
        getFirstKey() {
          let t = this.collection.getFirstKey();
          return null != t && this.isDisabled(t) && (t = this.getNextKey(t)), t;
        }
        getLastKey() {
          let t = this.collection.getLastKey();
          return (
            null != t && this.isDisabled(t) && (t = this.getPreviousKey(t)), t
          );
        }
        getNextKey(t) {
          do
            null == (t = this.collection.getKeyAfter(t)) &&
              (t = this.collection.getFirstKey());
          while (this.isDisabled(t));
          return t;
        }
        getPreviousKey(t) {
          do
            null == (t = this.collection.getKeyBefore(t)) &&
              (t = this.collection.getLastKey());
          while (this.isDisabled(t));
          return t;
        }
        constructor(t, e, i, s = new Set()) {
          (this.collection = t),
            (this.flipDirection = 'rtl' === e && 'horizontal' === i),
            (this.disabledKeys = s);
        }
      }
      var ip = i(34909),
        im = i(7291);
      let ig = (0, d.createContext)(null);
      var iv = i(9033);
      let iy = (t) => !t.isLayoutDirty && t.willUpdate(!1),
        ib = (t) => !0 === t,
        ix = (t) => ib(!0 === t) || 'id' === t,
        iP = (t) => {
          let { children: e, id: i, inherit: s = !0 } = t,
            o = (0, d.useContext)(tH.p),
            r = (0, d.useContext)(ig),
            [n, a] = (function () {
              let t = (function () {
                  let t = (0, d.useRef)(!1);
                  return (
                    (0, iv.L)(
                      () => (
                        (t.current = !0),
                        () => {
                          t.current = !1;
                        }
                      ),
                      [],
                    ),
                    t
                  );
                })(),
                [e, i] = (0, d.useState)(0),
                s = (0, d.useCallback)(() => {
                  t.current && i(e + 1);
                }, [e]);
              return [(0, d.useCallback)(() => ta.Wi.postRender(s), [s]), e];
            })(),
            l = (0, d.useRef)(null),
            u = o.id || r;
          null === l.current &&
            (ix(s) && u && (i = i ? u + '-' + i : u),
            (l.current = {
              id: i,
              group:
                (ib(s) && o.group) ||
                (function () {
                  let t = new Set(),
                    e = new WeakMap(),
                    i = () => t.forEach(iy);
                  return {
                    add: (s) => {
                      t.add(s), e.set(s, s.addEventListener('willUpdate', i));
                    },
                    remove: (s) => {
                      t.delete(s);
                      let o = e.get(s);
                      o && (o(), e.delete(s)), i();
                    },
                    dirty: i,
                  };
                })(),
            }));
          let h = (0, d.useMemo)(() => ({ ...l.current, forceRender: n }), [a]);
          return (0, E.jsx)(tH.p.Provider, { value: h, children: e });
        };
      function iw(t, e) {
        let {
            Component: i,
            values: l,
            state: u,
            destroyInactiveTabPanel: h,
            getBaseProps: c,
            getTabListProps: p,
            getWrapperProps: g,
          } = (function (t) {
            var e, i, l;
            let u = (0, e6.w)(),
              [h, c] = (0, s.oe)(t, is.variantKeys),
              {
                ref: p,
                as: g,
                className: y,
                classNames: b,
                children: x,
                disableCursorAnimation: P,
                motionProps: w,
                isVertical: T = !1,
                shouldSelectOnPressUp: D = !0,
                destroyInactiveTabPanel: A = !0,
                ...E
              } = h,
              S = g || 'div',
              R = 'string' == typeof S,
              M = (0, o.gy)(p),
              k =
                null !=
                  (i =
                    null != (e = null == t ? void 0 : t.disableAnimation)
                      ? e
                      : null == u
                        ? void 0
                        : u.disableAnimation) && i,
              C = (function (t) {
                var e;
                let i = (function (t) {
                    var e;
                    let [i, s] = (0, iu.z)(
                        t.selectedKey,
                        null !== (e = t.defaultSelectedKey) && void 0 !== e
                          ? e
                          : null,
                        t.onSelectionChange,
                      ),
                      o = (0, d.useMemo)(() => (null != i ? [i] : []), [i]),
                      {
                        collection: r,
                        disabledKeys: n,
                        selectionManager: a,
                      } = (function (t) {
                        let { filter: e } = t,
                          i = (0, ia.q)(t),
                          s = (0, d.useMemo)(
                            () =>
                              t.disabledKeys
                                ? new Set(t.disabledKeys)
                                : new Set(),
                            [t.disabledKeys],
                          ),
                          o = (0, d.useCallback)(
                            (t) => new ir(e ? e(t) : t),
                            [e],
                          ),
                          r = (0, d.useMemo)(
                            () => ({
                              suppressTextValueWarning:
                                t.suppressTextValueWarning,
                            }),
                            [t.suppressTextValueWarning],
                          ),
                          n = (0, id.K)(t, o, r),
                          a = (0, d.useMemo)(() => new il.Z(n, i), [n, i]),
                          l = (0, d.useRef)(null);
                        return (
                          (0, d.useEffect)(() => {
                            if (
                              null != i.focusedKey &&
                              !n.getItem(i.focusedKey)
                            ) {
                              let t;
                              let e = l.current.getItem(i.focusedKey),
                                s = [...l.current.getKeys()]
                                  .map((t) => {
                                    let e = l.current.getItem(t);
                                    return 'item' === e.type ? e : null;
                                  })
                                  .filter((t) => null !== t),
                                o = [...n.getKeys()]
                                  .map((t) => {
                                    let e = n.getItem(t);
                                    return 'item' === e.type ? e : null;
                                  })
                                  .filter((t) => null !== t),
                                r = s.length - o.length,
                                d = Math.min(
                                  r > 1
                                    ? Math.max(e.index - r + 1, 0)
                                    : e.index,
                                  o.length - 1,
                                ),
                                u = !1;
                              for (; d >= 0; ) {
                                if (!a.isDisabled(o[d].key)) {
                                  t = o[d];
                                  break;
                                }
                                d < o.length - 1 && !u
                                  ? d++
                                  : ((u = !0),
                                    d > e.index && (d = e.index),
                                    d--);
                              }
                              i.setFocusedKey(t ? t.key : null);
                            }
                            l.current = n;
                          }, [n, a, i, i.focusedKey]),
                          {
                            collection: n,
                            disabledKeys: s,
                            selectionManager: a,
                          }
                        );
                      })({
                        ...t,
                        selectionMode: 'single',
                        disallowEmptySelection: !0,
                        allowDuplicateSelectionEvents: !0,
                        selectedKeys: o,
                        onSelectionChange: (e) => {
                          var o;
                          let r =
                            null !== (o = e.values().next().value) &&
                            void 0 !== o
                              ? o
                              : null;
                          r === i &&
                            t.onSelectionChange &&
                            t.onSelectionChange(r),
                            s(r);
                        },
                      }),
                      l = null != i ? r.getItem(i) : null;
                    return {
                      collection: r,
                      disabledKeys: n,
                      selectionManager: a,
                      selectedKey: i,
                      setSelectedKey: s,
                      selectedItem: l,
                    };
                  })({
                    ...t,
                    suppressTextValueWarning: !0,
                    defaultSelectedKey:
                      null !== (e = t.defaultSelectedKey) && void 0 !== e
                        ? e
                        : ih(
                            t.collection,
                            t.disabledKeys
                              ? new Set(t.disabledKeys)
                              : new Set(),
                          ),
                  }),
                  { selectionManager: s, collection: o, selectedKey: r } = i,
                  n = (0, d.useRef)(r);
                return (
                  (0, d.useEffect)(() => {
                    let t = r;
                    (s.isEmpty || !o.getItem(t)) &&
                      null != (t = ih(o, i.disabledKeys)) &&
                      s.setSelectedKeys([t]),
                      ((null == t || null != s.focusedKey) &&
                        (s.isFocused || t === n.current)) ||
                        s.setFocusedKey(t),
                      (n.current = t);
                  }),
                  { ...i, isDisabled: t.isDisabled || !1 }
                );
              })({ children: x, ...E }),
              { tabListProps: j } = (function (t, e, i) {
                let {
                    orientation: s = 'horizontal',
                    keyboardActivation: o = 'automatic',
                  } = t,
                  { collection: r, selectionManager: n, disabledKeys: l } = e,
                  { direction: u } = (0, ip.j)(),
                  h = (0, d.useMemo)(() => new ic(r, u, s, l), [r, l, s, u]),
                  { collectionProps: c } = (0, im.g)({
                    ref: i,
                    selectionManager: n,
                    keyboardDelegate: h,
                    selectOnFocus: 'automatic' === o,
                    disallowEmptySelection: !0,
                    scrollRef: i,
                    linkBehavior: 'selection',
                  }),
                  p = m();
                return (
                  a.set(e, p),
                  {
                    tabListProps: {
                      ...v(c, f({ ...t, id: p })),
                      role: 'tablist',
                      'aria-orientation': s,
                      tabIndex: void 0,
                    },
                  }
                );
              })(E, C, M),
              K = (0, d.useMemo)(
                () =>
                  is({
                    ...c,
                    className: y,
                    disableAnimation: k,
                    ...(T ? { placement: 'start' } : {}),
                  }),
                [(0, io.Xx)(c), y, k, T],
              ),
              B = (0, r.W)(null == b ? void 0 : b.base, y),
              V = (0, d.useMemo)(
                () => ({
                  state: C,
                  slots: K,
                  classNames: b,
                  motionProps: w,
                  disableAnimation: k,
                  listRef: M,
                  shouldSelectOnPressUp: D,
                  disableCursorAnimation: P,
                  isDisabled: null == t ? void 0 : t.isDisabled,
                }),
                [C, K, M, w, k, P, D, null == t ? void 0 : t.isDisabled, b],
              ),
              N = (0, d.useCallback)(
                (t) => ({
                  'data-slot': 'base',
                  className: K.base({
                    class: (0, r.W)(B, null == t ? void 0 : t.className),
                  }),
                  ...(0, n.d)((0, L.z)(E, { enabled: R }), t),
                }),
                [B, E, K],
              ),
              F = null != (l = c.placement) ? l : T ? 'start' : 'top',
              O = (0, d.useCallback)(
                (t) => ({
                  'data-slot': 'tabWrapper',
                  className: K.wrapper({
                    class: (0, r.W)(
                      null == b ? void 0 : b.wrapper,
                      null == t ? void 0 : t.className,
                    ),
                  }),
                  'data-placement': F,
                  'data-vertical':
                    T || 'start' === F || 'end' === F
                      ? 'vertical'
                      : 'horizontal',
                }),
                [b, K, F, T],
              ),
              U = (0, d.useCallback)(
                (t) => ({
                  ref: M,
                  'data-slot': 'tabList',
                  className: K.tabList({
                    class: (0, r.W)(
                      null == b ? void 0 : b.tabList,
                      null == t ? void 0 : t.className,
                    ),
                  }),
                  ...(0, n.d)(j, t),
                }),
                [M, j, b, K],
              );
            return {
              Component: S,
              domRef: M,
              state: C,
              values: V,
              destroyInactiveTabPanel: A,
              getBaseProps: N,
              getTabListProps: U,
              getWrapperProps: O,
            };
          })({ ...t, ref: e }),
          y = (0, d.useId)(),
          b = !t.disableAnimation && !t.disableCursorAnimation,
          x = {
            state: u,
            listRef: l.listRef,
            slots: l.slots,
            classNames: l.classNames,
            isDisabled: l.isDisabled,
            motionProps: l.motionProps,
            disableAnimation: l.disableAnimation,
            shouldSelectOnPressUp: l.shouldSelectOnPressUp,
            disableCursorAnimation: l.disableCursorAnimation,
          },
          P = [...u.collection].map((t) =>
            (0, E.jsx)(e4, { item: t, ...x, ...t.props }, t.key),
          ),
          w = (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsx)('div', {
                ...c(),
                children: (0, E.jsx)(i, {
                  ...p(),
                  children: b ? (0, E.jsx)(iP, { id: y, children: P }) : P,
                }),
              }),
              [...u.collection].map((t) =>
                (0, E.jsx)(
                  S,
                  {
                    classNames: l.classNames,
                    destroyInactiveTabPanel: h,
                    slots: l.slots,
                    state: l.state,
                    tabKey: t.key,
                  },
                  t.key,
                ),
              ),
            ],
          });
        return 'placement' in t || 'isVertical' in t
          ? (0, E.jsx)('div', { ...g(), children: w })
          : w;
      }
      var iT = (0, s.Gp)(iw);
      iw.displayName = 'NextUI.Tabs';
    },
    34191: function (t, e, i) {
      i.d(e, {
        r: function () {
          return s;
        },
      });
      var s = i(89200).c;
    },
    49998: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      let s = (t) => 'object' == typeof t && null != t && 1 === t.nodeType,
        o = (t, e) => (!e || 'hidden' !== t) && 'visible' !== t && 'clip' !== t,
        r = (t, e) => {
          if (
            t.clientHeight < t.scrollHeight ||
            t.clientWidth < t.scrollWidth
          ) {
            let i = getComputedStyle(t, null);
            return (
              o(i.overflowY, e) ||
              o(i.overflowX, e) ||
              ((t) => {
                let e = ((t) => {
                  if (!t.ownerDocument || !t.ownerDocument.defaultView)
                    return null;
                  try {
                    return t.ownerDocument.defaultView.frameElement;
                  } catch (t) {
                    return null;
                  }
                })(t);
                return (
                  !!e &&
                  (e.clientHeight < t.scrollHeight ||
                    e.clientWidth < t.scrollWidth)
                );
              })(t)
            );
          }
          return !1;
        },
        n = (t, e, i, s, o, r, n, a) =>
          (r < t && n > e) || (r > t && n < e)
            ? 0
            : (r <= t && a <= i) || (n >= e && a >= i)
              ? r - t - s
              : (n > e && a < i) || (r < t && a > i)
                ? n - e + o
                : 0,
        a = (t) => {
          let e = t.parentElement;
          return null == e ? t.getRootNode().host || null : e;
        },
        l = (t, e) => {
          var i, o, l, d;
          if ('undefined' == typeof document) return [];
          let {
              scrollMode: u,
              block: h,
              inline: c,
              boundary: p,
              skipOverflowHiddenElements: m,
            } = e,
            f = 'function' == typeof p ? p : (t) => t !== p;
          if (!s(t)) throw TypeError('Invalid target');
          let g = document.scrollingElement || document.documentElement,
            v = [],
            y = t;
          for (; s(y) && f(y); ) {
            if ((y = a(y)) === g) {
              v.push(y);
              break;
            }
            (null != y &&
              y === document.body &&
              r(y) &&
              !r(document.documentElement)) ||
              (null != y && r(y, m) && v.push(y));
          }
          let b =
              null !=
              (o = null == (i = window.visualViewport) ? void 0 : i.width)
                ? o
                : innerWidth,
            x =
              null !=
              (d = null == (l = window.visualViewport) ? void 0 : l.height)
                ? d
                : innerHeight,
            { scrollX: P, scrollY: w } = window,
            {
              height: T,
              width: D,
              top: A,
              right: E,
              bottom: S,
              left: L,
            } = t.getBoundingClientRect(),
            {
              top: R,
              right: M,
              bottom: k,
              left: C,
            } = ((t) => {
              let e = window.getComputedStyle(t);
              return {
                top: parseFloat(e.scrollMarginTop) || 0,
                right: parseFloat(e.scrollMarginRight) || 0,
                bottom: parseFloat(e.scrollMarginBottom) || 0,
                left: parseFloat(e.scrollMarginLeft) || 0,
              };
            })(t),
            j =
              'start' === h || 'nearest' === h
                ? A - R
                : 'end' === h
                  ? S + k
                  : A + T / 2 - R + k,
            K =
              'center' === c ? L + D / 2 - C + M : 'end' === c ? E + M : L - C,
            B = [];
          for (let t = 0; t < v.length; t++) {
            let e = v[t],
              {
                height: i,
                width: s,
                top: o,
                right: r,
                bottom: a,
                left: l,
              } = e.getBoundingClientRect();
            if (
              'if-needed' === u &&
              A >= 0 &&
              L >= 0 &&
              S <= x &&
              E <= b &&
              A >= o &&
              S <= a &&
              L >= l &&
              E <= r
            )
              break;
            let d = getComputedStyle(e),
              p = parseInt(d.borderLeftWidth, 10),
              m = parseInt(d.borderTopWidth, 10),
              f = parseInt(d.borderRightWidth, 10),
              y = parseInt(d.borderBottomWidth, 10),
              R = 0,
              M = 0,
              k =
                'offsetWidth' in e ? e.offsetWidth - e.clientWidth - p - f : 0,
              C =
                'offsetHeight' in e
                  ? e.offsetHeight - e.clientHeight - m - y
                  : 0,
              V =
                'offsetWidth' in e
                  ? 0 === e.offsetWidth
                    ? 0
                    : s / e.offsetWidth
                  : 0,
              N =
                'offsetHeight' in e
                  ? 0 === e.offsetHeight
                    ? 0
                    : i / e.offsetHeight
                  : 0;
            if (g === e)
              (R =
                'start' === h
                  ? j
                  : 'end' === h
                    ? j - x
                    : 'nearest' === h
                      ? n(w, w + x, x, m, y, w + j, w + j + T, T)
                      : j - x / 2),
                (M =
                  'start' === c
                    ? K
                    : 'center' === c
                      ? K - b / 2
                      : 'end' === c
                        ? K - b
                        : n(P, P + b, b, p, f, P + K, P + K + D, D)),
                (R = Math.max(0, R + w)),
                (M = Math.max(0, M + P));
            else {
              (R =
                'start' === h
                  ? j - o - m
                  : 'end' === h
                    ? j - a + y + C
                    : 'nearest' === h
                      ? n(o, a, i, m, y + C, j, j + T, T)
                      : j - (o + i / 2) + C / 2),
                (M =
                  'start' === c
                    ? K - l - p
                    : 'center' === c
                      ? K - (l + s / 2) + k / 2
                      : 'end' === c
                        ? K - r + f + k
                        : n(l, r, s, p, f + k, K, K + D, D));
              let { scrollLeft: t, scrollTop: d } = e;
              (R =
                0 === N
                  ? 0
                  : Math.max(
                      0,
                      Math.min(d + R / N, e.scrollHeight - i / N + C),
                    )),
                (M =
                  0 === V
                    ? 0
                    : Math.max(
                        0,
                        Math.min(t + M / V, e.scrollWidth - s / V + k),
                      )),
                (j += d - R),
                (K += t - M);
            }
            B.push({ el: e, top: R, left: M });
          }
          return B;
        },
        d = (t) =>
          !1 === t
            ? { block: 'end', inline: 'nearest' }
            : t === Object(t) && 0 !== Object.keys(t).length
              ? t
              : { block: 'start', inline: 'nearest' };
      function u(t, e) {
        if (
          !t.isConnected ||
          !((t) => {
            let e = t;
            for (; e && e.parentNode; ) {
              if (e.parentNode === document) return !0;
              e =
                e.parentNode instanceof ShadowRoot
                  ? e.parentNode.host
                  : e.parentNode;
            }
            return !1;
          })(t)
        )
          return;
        if ('object' == typeof e && 'function' == typeof e.behavior)
          return e.behavior(l(t, e));
        let i = 'boolean' == typeof e || null == e ? void 0 : e.behavior;
        for (let { el: s, top: o, left: r } of l(t, d(e)))
          s.scroll({ top: o, left: r, behavior: i });
      }
    },
  },
]);
