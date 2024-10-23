'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8791],
  {
    7291: function (e, t, n) {
      n.d(t, {
        g: function () {
          return P;
        },
      });
      var r = n(64913),
        o = n(2265),
        i = n(54887),
        l = n(26538);
      let s = [
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
        a =
          s.join(':not([hidden]),') +
          ',[tabindex]:not([disabled]):not([hidden])';
      s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let u = s.join(':not([hidden]):not([tabindex="-1"]),');
      class c {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new d({ scopeRef: e });
          r.addChild(o),
            (o.parent = r),
            this.fastMap.set(e, o),
            n && (o.nodeToRestore = n);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              (function (e, t) {
                return !!e && !!t && t.some((t) => t.contains(e));
              })(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n &&
            (n.removeChild(t),
            r.size > 0 && r.forEach((e) => n && n.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let n = new c();
          for (let r of this.traverse())
            n.addTreeNode(
              r.scopeRef,
              null !==
                (t =
                  null === (e = r.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              r.nodeToRestore,
            );
          return n;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new d({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class d {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      new c();
      var f = n(7860),
        p = n(45134),
        g = n(69735),
        y = n(84988);
      function v(e, t, n, r) {
        let i = (0, y.i)(n),
          l = null == n;
        (0, o.useEffect)(() => {
          if (l || !e.current) return;
          let n = e.current;
          return (
            n.addEventListener(t, i, r),
            () => {
              n.removeEventListener(t, i, r);
            }
          );
        }, [e, t, r, l, i]);
      }
      var m = n(6675);
      function T(e, t) {
        let n = h(e, t, 'left'),
          r = h(e, t, 'top'),
          o = t.offsetWidth,
          i = t.offsetHeight,
          l = e.scrollLeft,
          s = e.scrollTop,
          { borderTopWidth: a, borderLeftWidth: u } = getComputedStyle(e),
          c = e.scrollLeft + parseInt(u, 10),
          d = e.scrollTop + parseInt(a, 10),
          f = c + e.clientWidth,
          p = d + e.clientHeight;
        n <= l ? (l = n - parseInt(u, 10)) : n + o > f && (l += n + o - f),
          r <= d ? (s = r - parseInt(a, 10)) : r + i > p && (s += r + i - p),
          (e.scrollLeft = l),
          (e.scrollTop = s);
      }
      function h(e, t, n) {
        let r = 'left' === n ? 'offsetLeft' : 'offsetTop',
          o = 0;
        for (; t.offsetParent && ((o += t[r]), t.offsetParent !== e); ) {
          if (t.offsetParent.contains(e)) {
            o -= e[r];
            break;
          }
          t = t.offsetParent;
        }
        return o;
      }
      function E(e, t) {
        if (document.contains(e)) {
          let l = document.scrollingElement || document.documentElement;
          if ('hidden' === window.getComputedStyle(l).overflow)
            for (let t of (function (e, t) {
              let n = [];
              for (; e && e !== document.documentElement; )
                (0, m.a)(e, void 0) && n.push(e), (e = e.parentElement);
              return n;
            })(e))
              T(t, e);
          else {
            var n, r, o, i;
            let { left: l, top: s } = e.getBoundingClientRect();
            null == e ||
              null === (n = e.scrollIntoView) ||
              void 0 === n ||
              n.call(e, { block: 'nearest' });
            let { left: a, top: u } = e.getBoundingClientRect();
            (Math.abs(l - a) > 1 || Math.abs(s - u) > 1) &&
              (null == t ||
                null === (o = t.containingElement) ||
                void 0 === o ||
                null === (r = o.scrollIntoView) ||
                void 0 === r ||
                r.call(o, { block: 'center', inline: 'center' }),
              null === (i = e.scrollIntoView) ||
                void 0 === i ||
                i.call(e, { block: 'nearest' }));
          }
        }
      }
      var b = n(35181),
        K = n(4808),
        w = n(34909);
      function P(e) {
        let t,
          {
            selectionManager: n,
            keyboardDelegate: s,
            ref: c,
            autoFocus: d = !1,
            shouldFocusWrap: y = !1,
            disallowEmptySelection: m = !1,
            disallowSelectAll: h = !1,
            selectOnFocus: P = 'replace' === n.selectionBehavior,
            disallowTypeAhead: k = !1,
            shouldUseVirtualFocus: S,
            allowsTabNavigation: L = !1,
            isVirtualized: M,
            scrollRef: A = c,
            linkBehavior: D = 'action',
          } = e,
          { direction: C } = (0, w.j)(),
          F = (0, p.tv)(),
          O = (0, o.useRef)({ top: 0, left: 0 });
        v(
          A,
          'scroll',
          M
            ? null
            : () => {
                O.current = {
                  top: A.current.scrollTop,
                  left: A.current.scrollLeft,
                };
              },
        );
        let R = (0, o.useRef)(d);
        (0, o.useEffect)(() => {
          if (R.current) {
            let e = null;
            'first' === d && (e = s.getFirstKey()),
              'last' === d && (e = s.getLastKey());
            let t = n.selectedKeys;
            if (t.size) {
              for (let r of t)
                if (n.canSelectItem(r)) {
                  e = r;
                  break;
                }
            }
            n.setFocused(!0),
              n.setFocusedKey(e),
              null != e || S || (0, f.e)(c.current);
          }
        }, []);
        let I = (0, o.useRef)(n.focusedKey);
        (0, o.useEffect)(() => {
          if (
            n.isFocused &&
            null != n.focusedKey &&
            (n.focusedKey !== I.current || R.current) &&
            (null == A ? void 0 : A.current)
          ) {
            let e = (0, K.Jz)(),
              t = c.current.querySelector(
                `[data-key="${CSS.escape(n.focusedKey.toString())}"]`,
              );
            if (!t) return;
            ('keyboard' === e || R.current) &&
              (T(A.current, t),
              'virtual' !== e && E(t, { containingElement: c.current }));
          }
          !S &&
            n.isFocused &&
            null == n.focusedKey &&
            null != I.current &&
            (0, f.e)(c.current),
            (I.current = n.focusedKey),
            (R.current = !1);
        }),
          v(c, 'react-aria-focus-scope-restore', (e) => {
            e.preventDefault(), n.setFocused(!0);
          });
        let N = {
            onKeyDown: (e) => {
              var t, o, d, f, p, v, T, E, b, K;
              if (
                (e.altKey && 'Tab' === e.key && e.preventDefault(),
                !c.current.contains(e.target))
              )
                return;
              let w = (t, o) => {
                if (null != t) {
                  if (n.isLink(t) && 'selection' === D && P && !(0, r.F)(e)) {
                    (0, i.flushSync)(() => {
                      n.setFocusedKey(t, o);
                    });
                    let r = A.current.querySelector(
                        `[data-key="${CSS.escape(t.toString())}"]`,
                      ),
                      l = n.getItemProps(t);
                    F.open(r, e, l.href, l.routerOptions);
                    return;
                  }
                  n.setFocusedKey(t, o),
                    (n.isLink(t) && 'override' === D) ||
                      (e.shiftKey && 'multiple' === n.selectionMode
                        ? n.extendSelection(t)
                        : P && !(0, r.F)(e) && n.replaceSelection(t));
                }
              };
              switch (e.key) {
                case 'ArrowDown':
                  if (s.getKeyBelow) {
                    e.preventDefault();
                    let r =
                      null != n.focusedKey
                        ? s.getKeyBelow(n.focusedKey)
                        : null === (t = s.getFirstKey) || void 0 === t
                          ? void 0
                          : t.call(s);
                    null == r &&
                      y &&
                      (r =
                        null === (o = s.getFirstKey) || void 0 === o
                          ? void 0
                          : o.call(s, n.focusedKey)),
                      w(r);
                  }
                  break;
                case 'ArrowUp':
                  if (s.getKeyAbove) {
                    e.preventDefault();
                    let t =
                      null != n.focusedKey
                        ? s.getKeyAbove(n.focusedKey)
                        : null === (d = s.getLastKey) || void 0 === d
                          ? void 0
                          : d.call(s);
                    null == t &&
                      y &&
                      (t =
                        null === (f = s.getLastKey) || void 0 === f
                          ? void 0
                          : f.call(s, n.focusedKey)),
                      w(t);
                  }
                  break;
                case 'ArrowLeft':
                  if (s.getKeyLeftOf) {
                    e.preventDefault();
                    let t = s.getKeyLeftOf(n.focusedKey);
                    null == t &&
                      y &&
                      (t =
                        'rtl' === C
                          ? null === (p = s.getFirstKey) || void 0 === p
                            ? void 0
                            : p.call(s, n.focusedKey)
                          : null === (v = s.getLastKey) || void 0 === v
                            ? void 0
                            : v.call(s, n.focusedKey)),
                      w(t, 'rtl' === C ? 'first' : 'last');
                  }
                  break;
                case 'ArrowRight':
                  if (s.getKeyRightOf) {
                    e.preventDefault();
                    let t = s.getKeyRightOf(n.focusedKey);
                    null == t &&
                      y &&
                      (t =
                        'rtl' === C
                          ? null === (T = s.getLastKey) || void 0 === T
                            ? void 0
                            : T.call(s, n.focusedKey)
                          : null === (E = s.getFirstKey) || void 0 === E
                            ? void 0
                            : E.call(s, n.focusedKey)),
                      w(t, 'rtl' === C ? 'last' : 'first');
                  }
                  break;
                case 'Home':
                  if (s.getFirstKey) {
                    e.preventDefault();
                    let t = s.getFirstKey(n.focusedKey, (0, r.y)(e));
                    n.setFocusedKey(t),
                      (0, r.y)(e) &&
                      e.shiftKey &&
                      'multiple' === n.selectionMode
                        ? n.extendSelection(t)
                        : P && n.replaceSelection(t);
                  }
                  break;
                case 'End':
                  if (s.getLastKey) {
                    e.preventDefault();
                    let t = s.getLastKey(n.focusedKey, (0, r.y)(e));
                    n.setFocusedKey(t),
                      (0, r.y)(e) &&
                      e.shiftKey &&
                      'multiple' === n.selectionMode
                        ? n.extendSelection(t)
                        : P && n.replaceSelection(t);
                  }
                  break;
                case 'PageDown':
                  s.getKeyPageBelow &&
                    (e.preventDefault(), w(s.getKeyPageBelow(n.focusedKey)));
                  break;
                case 'PageUp':
                  s.getKeyPageAbove &&
                    (e.preventDefault(), w(s.getKeyPageAbove(n.focusedKey)));
                  break;
                case 'a':
                  (0, r.y)(e) &&
                    'multiple' === n.selectionMode &&
                    !0 !== h &&
                    (e.preventDefault(), n.selectAll());
                  break;
                case 'Escape':
                  m ||
                    0 === n.selectedKeys.size ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    n.clearSelection());
                  break;
                case 'Tab':
                  if (!L) {
                    if (e.shiftKey) c.current.focus();
                    else {
                      let e, t;
                      let n,
                        r,
                        o =
                          ((b = c.current),
                          (e = (K = { tabbable: !0 }).tabbable ? u : a),
                          (t = (0, l.r)(b).createTreeWalker(
                            b,
                            NodeFilter.SHOW_ELEMENT,
                            {
                              acceptNode(t) {
                                var n;
                                return (
                                  null == K
                                    ? void 0
                                    : null === (n = K.from) || void 0 === n
                                      ? void 0
                                      : n.contains(t)
                                )
                                  ? NodeFilter.FILTER_REJECT
                                  : t.matches(e) &&
                                      (function e(t, n) {
                                        return (
                                          '#comment' !== t.nodeName &&
                                          (function (e) {
                                            let t = (0, l.k)(e);
                                            if (
                                              !(e instanceof t.HTMLElement) &&
                                              !(e instanceof t.SVGElement)
                                            )
                                              return !1;
                                            let { display: n, visibility: r } =
                                                e.style,
                                              o =
                                                'none' !== n &&
                                                'hidden' !== r &&
                                                'collapse' !== r;
                                            if (o) {
                                              let { getComputedStyle: t } =
                                                  e.ownerDocument.defaultView,
                                                { display: n, visibility: r } =
                                                  t(e);
                                              o =
                                                'none' !== n &&
                                                'hidden' !== r &&
                                                'collapse' !== r;
                                            }
                                            return o;
                                          })(t) &&
                                          !t.hasAttribute('hidden') &&
                                          !t.hasAttribute(
                                            'data-react-aria-prevent-focus',
                                          ) &&
                                          ('DETAILS' !== t.nodeName ||
                                            !n ||
                                            'SUMMARY' === n.nodeName ||
                                            t.hasAttribute('open')) &&
                                          (!t.parentElement ||
                                            e(t.parentElement, t))
                                        );
                                      })(t) &&
                                      (!(null == K ? void 0 : K.accept) ||
                                        K.accept(t))
                                    ? NodeFilter.FILTER_ACCEPT
                                    : NodeFilter.FILTER_SKIP;
                              },
                            },
                          )),
                          (null == K ? void 0 : K.from) &&
                            (t.currentNode = K.from),
                          t);
                      do (r = o.lastChild()) && (n = r);
                      while (r);
                      n && !n.contains(document.activeElement) && (0, g.A)(n);
                    }
                  }
              }
            },
            onFocus: (e) => {
              if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return;
              }
              if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                  var t, r;
                  let o = (e) => {
                      null != e &&
                        (n.setFocusedKey(e), P && n.replaceSelection(e));
                    },
                    i = e.relatedTarget;
                  i &&
                  e.currentTarget.compareDocumentPosition(i) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                    ? o(
                        null !== (t = n.lastSelectedKey) && void 0 !== t
                          ? t
                          : s.getLastKey(),
                      )
                    : o(
                        null !== (r = n.firstSelectedKey) && void 0 !== r
                          ? r
                          : s.getFirstKey(),
                      );
                } else
                  M ||
                    ((A.current.scrollTop = O.current.top),
                    (A.current.scrollLeft = O.current.left));
                if (null != n.focusedKey) {
                  let e = A.current.querySelector(
                    `[data-key="${CSS.escape(n.focusedKey.toString())}"]`,
                  );
                  e &&
                    (e.contains(document.activeElement) || (0, g.A)(e),
                    'keyboard' === (0, K.Jz)() &&
                      E(e, { containingElement: c.current }));
                }
              }
            },
            onBlur: (e) => {
              e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1);
            },
            onMouseDown(e) {
              A.current === e.target && e.preventDefault();
            },
          },
          { typeSelectProps: x } = (function (e) {
            let {
                keyboardDelegate: t,
                selectionManager: n,
                onTypeSelect: r,
              } = e,
              i = (0, o.useRef)({ search: '', timeout: null }).current;
            return {
              typeSelectProps: {
                onKeyDownCapture: t.getKeyForSearch
                  ? (e) => {
                      var o;
                      let l =
                        1 !== (o = e.key).length && /^[A-Z]/i.test(o) ? '' : o;
                      if (
                        !l ||
                        e.ctrlKey ||
                        e.metaKey ||
                        !e.currentTarget.contains(e.target)
                      )
                        return;
                      ' ' !== l ||
                        !(i.search.trim().length > 0) ||
                        (e.preventDefault(),
                        'continuePropagation' in e || e.stopPropagation()),
                        (i.search += l);
                      let s = t.getKeyForSearch(i.search, n.focusedKey);
                      null == s && (s = t.getKeyForSearch(i.search)),
                        null != s && (n.setFocusedKey(s), r && r(s)),
                        clearTimeout(i.timeout),
                        (i.timeout = setTimeout(() => {
                          i.search = '';
                        }, 1e3));
                    }
                  : null,
              },
            };
          })({ keyboardDelegate: s, selectionManager: n });
        return (
          k || (N = (0, b.d)(x, N)),
          S || (t = null == n.focusedKey ? 0 : -1),
          { collectionProps: { ...N, tabIndex: t } }
        );
      }
    },
    37190: function (e, t, n) {
      n.d(t, {
        C: function () {
          return V;
        },
      });
      var r = n(64913),
        o = n(7860),
        i = n(45134),
        l = n(35181),
        s = n(46107),
        a = n(26538),
        u = n(4265);
      let c = 'default',
        d = '',
        f = new WeakMap();
      function p(e) {
        if ((0, s.gn)()) {
          if ('default' === c) {
            let t = (0, a.r)(e);
            (d = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          c = 'disabled';
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (f.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
      }
      function g(e) {
        if ((0, s.gn)())
          'disabled' === c &&
            ((c = 'restoring'),
            setTimeout(() => {
              (0, u.Q)(() => {
                if ('restoring' === c) {
                  let t = (0, a.r)(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = d || ''),
                    (d = ''),
                    (c = 'default');
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          f.has(e)
        ) {
          let t = f.get(e);
          'none' === e.style.userSelect && (e.style.userSelect = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            f.delete(e);
        }
      }
      var y = n(2265);
      let v = y.createContext({ register: () => {} });
      v.displayName = 'PressResponderContext';
      var m = n(52396),
        T = n(49994),
        h = n(93936),
        E = n(3263);
      function b() {
        let e = (0, y.useRef)(new Map()),
          t = (0, y.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once)
              ? (...t) => {
                  e.current.delete(r), r(...t);
                }
              : r;
            e.current.set(r, { type: n, eventTarget: t, fn: i, options: o }),
              t.addEventListener(n, r, o);
          }, []),
          n = (0, y.useCallback)((t, n, r, o) => {
            var i;
            let l =
              (null === (i = e.current.get(r)) || void 0 === i
                ? void 0
                : i.fn) || r;
            t.removeEventListener(n, l, o), e.current.delete(r);
          }, []),
          r = (0, y.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options);
            });
          }, [n]);
        return (
          (0, y.useEffect)(() => r, [r]),
          {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r,
          }
        );
      }
      var K = n(84988),
        w = n(22591),
        P = n(98459),
        k = n(69735),
        S = new WeakMap();
      class L {
        continuePropagation() {
          (0, h._)(this, S, !1);
        }
        get shouldStopPropagation() {
          return (0, m._)(this, S);
        }
        constructor(e, t, n, r) {
          var o;
          (0, T._)(this, S, { writable: !0, value: void 0 }),
            (0, h._)(this, S, !0);
          let i =
              null !== (o = null == r ? void 0 : r.target) && void 0 !== o
                ? o
                : n.currentTarget,
            l = null == i ? void 0 : i.getBoundingClientRect(),
            s,
            a = 0,
            u,
            c = null;
          null != n.clientX &&
            null != n.clientY &&
            ((u = n.clientX), (c = n.clientY)),
            l &&
              (null != u && null != c
                ? ((s = u - l.left), (a = c - l.top))
                : ((s = l.width / 2), (a = l.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = s),
            (this.y = a);
        }
      }
      let M = Symbol('linkClicked');
      function A(e) {
        let {
            onPress: t,
            onPressChange: n,
            onPressStart: r,
            onPressEnd: o,
            onPressUp: u,
            isDisabled: c,
            isPressed: d,
            preventFocusOnPress: f,
            shouldCancelOnPointerExit: m,
            allowTextSelectionOnPress: T,
            ref: h,
            ...S
          } = (function (e) {
            var t;
            let n = (0, y.useContext)(v);
            if (n) {
              let { register: t, ...r } = n;
              (e = (0, l.d)(r, e)), t();
            }
            return (
              (t = e.ref),
              (0, E.b)(() => {
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
          [A, H] = (0, y.useState)(!1),
          z = (0, y.useRef)({
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
          { addGlobalListener: U, removeAllGlobalListeners: B } = b(),
          V = (0, K.i)((e, t) => {
            let o = z.current;
            if (c || o.didFirePressStart) return !1;
            let i = !0;
            if (((o.isTriggeringEvent = !0), r)) {
              let n = new L('pressstart', t, e);
              r(n), (i = n.shouldStopPropagation);
            }
            return (
              n && n(!0),
              (o.isTriggeringEvent = !1),
              (o.didFirePressStart = !0),
              H(!0),
              i
            );
          }),
          W = (0, K.i)((e, r, i = !0) => {
            let l = z.current;
            if (!l.didFirePressStart) return !1;
            (l.ignoreClickAfterPress = !0),
              (l.didFirePressStart = !1),
              (l.isTriggeringEvent = !0);
            let s = !0;
            if (o) {
              let t = new L('pressend', r, e);
              o(t), (s = t.shouldStopPropagation);
            }
            if ((n && n(!1), H(!1), t && i && !c)) {
              let n = new L('press', r, e);
              t(n), s && (s = n.shouldStopPropagation);
            }
            return (l.isTriggeringEvent = !1), s;
          }),
          _ = (0, K.i)((e, t) => {
            let n = z.current;
            if (c) return !1;
            if (u) {
              n.isTriggeringEvent = !0;
              let r = new L('pressup', t, e);
              return u(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
          }),
          G = (0, K.i)((e) => {
            let t = z.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                W(R(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              B(),
              T || g(t.target));
          }),
          Y = (0, K.i)((e) => {
            m && G(e);
          }),
          X = (0, y.useMemo)(() => {
            let e = z.current,
              t = {
                onKeyDown(t) {
                  if (
                    C(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var r;
                    x(t.target, t.key) && t.preventDefault();
                    let o = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (o = V(t, 'keyboard'));
                      let r = t.currentTarget;
                      U(
                        (0, a.r)(t.currentTarget),
                        'keyup',
                        (0, w.t)((t) => {
                          C(t, r) &&
                            !t.repeat &&
                            r.contains(t.target) &&
                            e.target &&
                            _(R(e.target, t), 'keyboard');
                        }, n),
                        !0,
                      );
                    }
                    o && t.stopPropagation(),
                      t.metaKey &&
                        (0, s.V5)() &&
                        (null === (r = e.metaKeyEvents) ||
                          void 0 === r ||
                          r.set(t.key, t.nativeEvent));
                  } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !i.nG.isOpening
                  ) {
                    let n = !0;
                    if (
                      (c && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType ||
                          (0, P.Z)(t.nativeEvent)))
                    ) {
                      c || f || (0, k.A)(t.currentTarget);
                      let e = V(t, 'virtual'),
                        r = _(t, 'virtual'),
                        o = W(t, 'virtual');
                      n = e && r && o;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      n && t.stopPropagation();
                  }
                },
              },
              n = (t) => {
                var n, r, o;
                if (e.isPressed && e.target && C(t, e.target)) {
                  x(t.target, t.key) && t.preventDefault();
                  let n = t.target;
                  W(R(e.target, t), 'keyboard', e.target.contains(n)),
                    B(),
                    'Enter' !== t.key &&
                      D(e.target) &&
                      e.target.contains(n) &&
                      !t[M] &&
                      ((t[M] = !0), (0, i.nG)(e.target, t, !1)),
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
                    null === (o = e.target) ||
                      void 0 === o ||
                      o.dispatchEvent(new KeyboardEvent('keyup', n));
                }
              };
            if ('undefined' != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if ((0, P.c)(t.nativeEvent)) {
                  e.pointerType = 'virtual';
                  return;
                }
                N(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let i = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  c || f || (0, k.A)(t.currentTarget),
                  T || p(e.target),
                  (i = V(t, e.pointerType)),
                  U((0, a.r)(t.currentTarget), 'pointermove', n, !1),
                  U((0, a.r)(t.currentTarget), 'pointerup', r, !1),
                  U((0, a.r)(t.currentTarget), 'pointercancel', o, !1)),
                  i && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (N(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    I(t, t.currentTarget) &&
                    _(t, e.pointerType || t.pointerType);
                });
              let n = (t) => {
                  t.pointerId === e.activePointerId &&
                    (e.target && I(t, e.target)
                      ? e.isOverTarget ||
                        null == e.pointerType ||
                        ((e.isOverTarget = !0),
                        V(R(e.target, t), e.pointerType))
                      : e.target &&
                        e.isOverTarget &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        W(R(e.target, t), e.pointerType, !1),
                        Y(t)));
                },
                r = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (I(t, e.target) && null != e.pointerType
                      ? W(R(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        W(R(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    B(),
                    T || g(e.target));
                },
                o = (e) => {
                  G(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && G(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (N(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = (0, P.Z)(t.nativeEvent)
                      ? 'virtual'
                      : 'mouse'),
                    c || f || (0, k.A)(t.currentTarget),
                    V(t, e.pointerType) && t.stopPropagation(),
                    U((0, a.r)(t.currentTarget), 'mouseup', n, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (n = V(t, e.pointerType))),
                    n && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (n = W(t, e.pointerType, !1)),
                    Y(t)),
                    n && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    _(t, e.pointerType || 'mouse');
                });
              let n = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), B(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && I(t, e.target) && null != e.pointerType
                    ? W(R(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      W(R(e.target, t), e.pointerType, !1),
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
                  c || f || (0, k.A)(t.currentTarget),
                  T || p(e.target),
                  V(O(e.target, t), e.pointerType) && t.stopPropagation(),
                  U((0, a.k)(t.currentTarget), 'scroll', r, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = F(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && I(n, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0),
                      (r = V(O(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (r = W(O(e.target, t), e.pointerType, !1)),
                      Y(O(e.target, t))),
                    r && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = F(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && I(n, t.currentTarget) && null != e.pointerType
                    ? (_(O(e.target, t), e.pointerType),
                      (r = W(O(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (r = W(O(e.target, t), e.pointerType, !1)),
                    r && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !T && g(e.target),
                    B();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && G(O(e.target, t)));
                });
              let r = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  G({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && G(e);
              };
            }
            return t;
          }, [U, c, f, B, T, G, Y, W, V, _]);
        return (
          (0, y.useEffect)(
            () => () => {
              var e;
              T ||
                g(null !== (e = z.current.target) && void 0 !== e ? e : void 0);
            },
            [T],
          ),
          { isPressed: d || A, pressProps: (0, l.d)(S, X) }
        );
      }
      function D(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function C(e, t) {
        let { key: n, code: r } = e,
          o = t.getAttribute('role');
        return (
          ('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === r) &&
          !(
            (t instanceof (0, a.k)(t).HTMLInputElement && !z(t, n)) ||
            t instanceof (0, a.k)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === o || (!o && D(t))) && 'Enter' !== n)
        );
      }
      function F(e, t) {
        let n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if (r.identifier === t) return r;
        }
        return null;
      }
      function O(e, t) {
        let n = 0,
          r = 0;
        return (
          t.targetTouches &&
            1 === t.targetTouches.length &&
            ((n = t.targetTouches[0].clientX),
            (r = t.targetTouches[0].clientY)),
          {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: n,
            clientY: r,
          }
        );
      }
      function R(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r,
        };
      }
      function I(e, t) {
        let n,
          r,
          o = t.getBoundingClientRect(),
          i =
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
          !(o.left > i.right) &&
          !(i.left > o.right) &&
          !(o.top > i.bottom) &&
          !(i.top > o.bottom)
        );
      }
      function N(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
      }
      function x(e, t) {
        return e instanceof HTMLInputElement
          ? !z(e, t)
          : e instanceof HTMLButtonElement
            ? 'submit' !== e.type && 'reset' !== e.type
            : !D(e);
      }
      let H = new Set([
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
      function z(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type
          ? ' ' === t
          : H.has(e.type);
      }
      let U = 0,
        B = new Map();
      function V(e) {
        let {
            selectionManager: t,
            key: n,
            ref: s,
            shouldSelectOnPressUp: a,
            shouldUseVirtualFocus: u,
            focus: c,
            isDisabled: d,
            onAction: f,
            allowsDifferentPressOrigin: p,
            linkBehavior: g = 'action',
          } = e,
          v = (0, i.tv)(),
          m = (e) => {
            if ('keyboard' === e.pointerType && (0, r.F)(e))
              t.toggleSelection(n);
            else {
              if ('none' === t.selectionMode) return;
              if (t.isLink(n)) {
                if ('selection' === g) {
                  let r = t.getItemProps(n);
                  v.open(s.current, e, r.href, r.routerOptions),
                    t.setSelectedKeys(t.selectedKeys);
                  return;
                }
                if ('override' === g || 'none' === g) return;
              }
              'single' === t.selectionMode
                ? t.isSelected(n) && !t.disallowEmptySelection
                  ? t.toggleSelection(n)
                  : t.replaceSelection(n)
                : e && e.shiftKey
                  ? t.extendSelection(n)
                  : 'toggle' === t.selectionBehavior ||
                      (e &&
                        ((0, r.y)(e) ||
                          'touch' === e.pointerType ||
                          'virtual' === e.pointerType))
                    ? t.toggleSelection(n)
                    : t.replaceSelection(n);
            }
          };
        (0, y.useEffect)(() => {
          n === t.focusedKey &&
            t.isFocused &&
            !u &&
            (c
              ? c()
              : document.activeElement !== s.current && (0, o.e)(s.current));
        }, [s, n, t.focusedKey, t.childFocusStrategy, t.isFocused, u]),
          (d = d || t.isDisabled(n));
        let T = {};
        u || d
          ? d &&
            (T.onMouseDown = (e) => {
              e.preventDefault();
            })
          : (T = {
              tabIndex: n === t.focusedKey ? 0 : -1,
              onFocus(e) {
                e.target === s.current && t.setFocusedKey(n);
              },
            });
        let h = t.isLink(n) && 'override' === g,
          K = t.isLink(n) && 'selection' !== g && 'none' !== g,
          w = !d && t.canSelectItem(n) && !h,
          P = (f || K) && !d,
          k = P && ('replace' === t.selectionBehavior ? !w : !w || t.isEmpty),
          S = P && w && 'replace' === t.selectionBehavior,
          L = k || S,
          M = (0, y.useRef)(null),
          D = L && w,
          C = (0, y.useRef)(!1),
          F = (0, y.useRef)(!1),
          O = (e) => {
            if ((f && f(), K)) {
              let r = t.getItemProps(n);
              v.open(s.current, e, r.href, r.routerOptions);
            }
          },
          R = {};
        a
          ? ((R.onPressStart = (e) => {
              (M.current = e.pointerType),
                (C.current = D),
                'keyboard' === e.pointerType && (!L || _()) && m(e);
            }),
            p
              ? ((R.onPressUp = k
                  ? null
                  : (e) => {
                      'keyboard' !== e.pointerType && w && m(e);
                    }),
                (R.onPress = k ? O : null))
              : (R.onPress = (e) => {
                  k || (S && 'mouse' !== e.pointerType)
                    ? ('keyboard' !== e.pointerType || W()) && O(e)
                    : 'keyboard' !== e.pointerType && w && m(e);
                }))
          : ((R.onPressStart = (e) => {
              (M.current = e.pointerType),
                (C.current = D),
                (F.current = k),
                w &&
                  (('mouse' === e.pointerType && !k) ||
                    ('keyboard' === e.pointerType && (!P || _()))) &&
                  m(e);
            }),
            (R.onPress = (e) => {
              ('touch' === e.pointerType ||
                'pen' === e.pointerType ||
                'virtual' === e.pointerType ||
                ('keyboard' === e.pointerType && L && W()) ||
                ('mouse' === e.pointerType && F.current)) &&
                (L ? O(e) : w && m(e));
            })),
          (T['data-key'] = n),
          (R.preventFocusOnPress = u);
        let { pressProps: I, isPressed: N } = A(R),
          x = S
            ? (e) => {
                'mouse' === M.current &&
                  (e.stopPropagation(), e.preventDefault(), O(e));
              }
            : void 0,
          { longPressProps: H } = (function (e) {
            let {
                isDisabled: t,
                onLongPressStart: n,
                onLongPressEnd: r,
                onLongPress: o,
                threshold: i = 500,
                accessibilityDescription: s,
              } = e,
              a = (0, y.useRef)(void 0),
              { addGlobalListener: u, removeGlobalListener: c } = b(),
              { pressProps: d } = A({
                isDisabled: t,
                onPressStart(e) {
                  if (
                    (e.continuePropagation(),
                    ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                      (n && n({ ...e, type: 'longpressstart' }),
                      (a.current = setTimeout(() => {
                        e.target.dispatchEvent(
                          new PointerEvent('pointercancel', { bubbles: !0 }),
                        ),
                          o && o({ ...e, type: 'longpress' }),
                          (a.current = void 0);
                      }, i)),
                      'touch' === e.pointerType))
                  ) {
                    let t = (e) => {
                      e.preventDefault();
                    };
                    u(e.target, 'contextmenu', t, { once: !0 }),
                      u(
                        window,
                        'pointerup',
                        () => {
                          setTimeout(() => {
                            c(e.target, 'contextmenu', t);
                          }, 30);
                        },
                        { once: !0 },
                      );
                  }
                },
                onPressEnd(e) {
                  a.current && clearTimeout(a.current),
                    r &&
                      ('mouse' === e.pointerType ||
                        'touch' === e.pointerType) &&
                      r({ ...e, type: 'longpressend' });
                },
              }),
              f = (function (e) {
                let [t, n] = (0, y.useState)();
                return (
                  (0, E.b)(() => {
                    if (!e) return;
                    let t = B.get(e);
                    if (t) n(t.element.id);
                    else {
                      let r = `react-aria-description-${U++}`;
                      n(r);
                      let o = document.createElement('div');
                      (o.id = r),
                        (o.style.display = 'none'),
                        (o.textContent = e),
                        document.body.appendChild(o),
                        (t = { refCount: 0, element: o }),
                        B.set(e, t);
                    }
                    return (
                      t.refCount++,
                      () => {
                        t &&
                          0 == --t.refCount &&
                          (t.element.remove(), B.delete(e));
                      }
                    );
                  }, [e]),
                  { 'aria-describedby': e ? t : void 0 }
                );
              })(o && !t ? s : void 0);
            return { longPressProps: (0, l.d)(d, f) };
          })({
            isDisabled: !D,
            onLongPress(e) {
              'touch' === e.pointerType &&
                (m(e), t.setSelectionBehavior('toggle'));
            },
          }),
          z = t.isLink(n)
            ? (e) => {
                i.nG.isOpening || e.preventDefault();
              }
            : void 0;
        return {
          itemProps: (0, l.d)(T, w || k ? I : {}, D ? H : {}, {
            onDoubleClick: x,
            onDragStartCapture: (e) => {
              'touch' === M.current && C.current && e.preventDefault();
            },
            onClick: z,
          }),
          isPressed: N,
          isSelected: t.isSelected(n),
          isFocused: t.isFocused && t.focusedKey === n,
          isDisabled: d,
          allowsSelection: w,
          hasAction: L,
        };
      }
      function W() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === 'Enter';
      }
      function _() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === ' ' ||
          (null == e ? void 0 : e.code) === 'Space'
        );
      }
    },
    64913: function (e, t, n) {
      n.d(t, {
        F: function () {
          return o;
        },
        y: function () {
          return i;
        },
      });
      var r = n(46107);
      function o(e) {
        return (0, r.ad)() ? e.altKey : e.ctrlKey;
      }
      function i(e) {
        return (0, r.V5)() ? e.metaKey : e.ctrlKey;
      }
    },
    7860: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var r = n(26538),
        o = n(4265),
        i = n(69735),
        l = n(4808);
      function s(e) {
        let t = (0, r.r)(e);
        if ('virtual' === (0, l.Jz)()) {
          let n = t.activeElement;
          (0, o.Q)(() => {
            t.activeElement === n && e.isConnected && (0, i.A)(e);
          });
        } else (0, i.A)(e);
      }
    },
    4808: function (e, t, n) {
      n.d(t, {
        Jz: function () {
          return h;
        },
      });
      var r = n(46107),
        o = n(98459),
        i = n(26538);
      n(2265);
      let l = null,
        s = new Set(),
        a = new Map(),
        u = !1,
        c = !1;
      function d(e, t) {
        for (let n of s) n(e, t);
      }
      function f(e) {
        (u = !0),
          e.metaKey ||
            (!(0, r.V5)() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((l = 'keyboard'), d('keyboard', e));
      }
      function p(e) {
        (l = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((u = !0), d('pointer', e));
      }
      function g(e) {
        (0, o.Z)(e) && ((u = !0), (l = 'virtual'));
      }
      function y(e) {
        e.target !== window &&
          e.target !== document &&
          (u || c || ((l = 'virtual'), d('virtual', e)), (u = !1), (c = !1));
      }
      function v() {
        (u = !1), (c = !0);
      }
      function m(e) {
        if ('undefined' == typeof window || a.get((0, i.k)(e))) return;
        let t = (0, i.k)(e),
          n = (0, i.r)(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (u = !0), r.apply(this, arguments);
        }),
          n.addEventListener('keydown', f, !0),
          n.addEventListener('keyup', f, !0),
          n.addEventListener('click', g, !0),
          t.addEventListener('focus', y, !0),
          t.addEventListener('blur', v, !1),
          'undefined' != typeof PointerEvent
            ? (n.addEventListener('pointerdown', p, !0),
              n.addEventListener('pointermove', p, !0),
              n.addEventListener('pointerup', p, !0))
            : (n.addEventListener('mousedown', p, !0),
              n.addEventListener('mousemove', p, !0),
              n.addEventListener('mouseup', p, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              T(e);
            },
            { once: !0 },
          ),
          a.set(t, { focus: r });
      }
      let T = (e, t) => {
        let n = (0, i.k)(e),
          r = (0, i.r)(e);
        t && r.removeEventListener('DOMContentLoaded', t),
          a.has(n) &&
            ((n.HTMLElement.prototype.focus = a.get(n).focus),
            r.removeEventListener('keydown', f, !0),
            r.removeEventListener('keyup', f, !0),
            r.removeEventListener('click', g, !0),
            n.removeEventListener('focus', y, !0),
            n.removeEventListener('blur', v, !1),
            'undefined' != typeof PointerEvent
              ? (r.removeEventListener('pointerdown', p, !0),
                r.removeEventListener('pointermove', p, !0),
                r.removeEventListener('pointerup', p, !0))
              : (r.removeEventListener('mousedown', p, !0),
                r.removeEventListener('mousemove', p, !0),
                r.removeEventListener('mouseup', p, !0)),
            a.delete(n));
      };
      function h() {
        return l;
      }
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let n = (0, i.r)(void 0);
          'loading' !== n.readyState
            ? m(void 0)
            : ((t = () => {
                m(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => T(e, t);
        })();
    },
    22591: function (e, t, n) {
      n.d(t, {
        t: function () {
          return r;
        },
      });
      function r(...e) {
        return (...t) => {
          for (let n of e) 'function' == typeof n && n(...t);
        };
      }
    },
    26538: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
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
        o = (e) =>
          e && 'window' in e && e.window === e ? e : r(e).defaultView || window;
    },
    69735: function (e, t, n) {
      function r(e) {
        if (
          (function () {
            if (null == o) {
              o = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (o = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return o;
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
      n.d(t, {
        A: function () {
          return r;
        },
      });
      let o = null;
    },
    6675: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      function r(e, t) {
        let n = window.getComputedStyle(e),
          r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return (
          r &&
            t &&
            (r =
              e.scrollHeight !== e.clientHeight ||
              e.scrollWidth !== e.clientWidth),
          r
        );
      }
    },
    98459: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
        c: function () {
          return i;
        },
      });
      var r = n(46107);
      function o(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          ((0, r.Dt)() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function i(e) {
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
    35181: function (e, t, n) {
      n.d(t, {
        d: function () {
          return l;
        },
      });
      var r = n(22591);
      n(2265),
        'undefined' != typeof window &&
          window.document &&
          window.document.createElement;
      let o = new Map();
      var i = n(44839);
      function l(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let l = e[n];
          for (let e in l) {
            let n = t[e],
              s = l[e];
            'function' == typeof n &&
            'function' == typeof s &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (0, r.t)(n, s))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof s
                ? (t[e] = (0, i.Z)(n, s))
                : 'id' === e && n && s
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let n = o.get(e);
                      if (n) return n(t), t;
                      let r = o.get(t);
                      return r ? (r(e), e) : t;
                    })(n, s))
                  : (t[e] = void 0 !== s ? s : n);
          }
        }
        return t;
      }
    },
    45134: function (e, t, n) {
      n.d(t, {
        nG: function () {
          return a;
        },
        tv: function () {
          return s;
        },
      });
      var r = n(69735),
        o = n(46107),
        i = n(2265);
      let l = (0, i.createContext)({
        isNative: !0,
        open: function (e, t) {
          !(function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute('data-href')) {
              let n = document.createElement('a');
              (n.href = e.getAttribute('data-href')),
                e.hasAttribute('data-target') &&
                  (n.target = e.getAttribute('data-target')),
                e.hasAttribute('data-rel') &&
                  (n.rel = e.getAttribute('data-rel')),
                e.hasAttribute('data-download') &&
                  (n.download = e.getAttribute('data-download')),
                e.hasAttribute('data-ping') &&
                  (n.ping = e.getAttribute('data-ping')),
                e.hasAttribute('data-referrer-policy') &&
                  (n.referrerPolicy = e.getAttribute('data-referrer-policy')),
                e.appendChild(n),
                t(n),
                e.removeChild(n);
            }
          })(e, (e) => a(e, t));
        },
        useHref: (e) => e,
      });
      function s() {
        return (0, i.useContext)(l);
      }
      function a(e, t, n = !0) {
        var i, l;
        let { metaKey: s, ctrlKey: u, altKey: c, shiftKey: d } = t;
        (0, o.vU)() &&
          (null === (l = window.event) || void 0 === l
            ? void 0
            : null === (i = l.type) || void 0 === i
              ? void 0
              : i.startsWith('key')) &&
          '_blank' === e.target &&
          ((0, o.V5)() ? (s = !0) : (u = !0));
        let f =
          (0, o.Pf)() && (0, o.V5)() && !(0, o.zc)()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: s,
                ctrlKey: u,
                altKey: c,
                shiftKey: d,
              })
            : new MouseEvent('click', {
                metaKey: s,
                ctrlKey: u,
                altKey: c,
                shiftKey: d,
                bubbles: !0,
                cancelable: !0,
              });
        (a.isOpening = n), (0, r.A)(e), e.dispatchEvent(f), (a.isOpening = !1);
      }
      a.isOpening = !1;
    },
    46107: function (e, t, n) {
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
      function o(e) {
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
      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, {
        Dt: function () {
          return p;
        },
        Pf: function () {
          return d;
        },
        V5: function () {
          return l;
        },
        ad: function () {
          return c;
        },
        gn: function () {
          return u;
        },
        vU: function () {
          return g;
        },
        zc: function () {
          return a;
        },
      });
      let l = i(function () {
          return o(/^Mac/i);
        }),
        s = i(function () {
          return o(/^iPhone/i);
        }),
        a = i(function () {
          return o(/^iPad/i) || (l() && navigator.maxTouchPoints > 1);
        }),
        u = i(function () {
          return s() || a();
        }),
        c = i(function () {
          return l() || u();
        }),
        d = i(function () {
          return r(/AppleWebKit/i) && !f();
        }),
        f = i(function () {
          return r(/Chrome/i);
        }),
        p = i(function () {
          return r(/Android/i);
        }),
        g = i(function () {
          return r(/Firefox/i);
        });
    },
    4265: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return l;
        },
      });
      let r = new Map(),
        o = new Set();
      function i() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let i = r.get(n.target);
          if (
            i &&
            (i.delete(n.propertyName),
            0 === i.size &&
              (n.target.removeEventListener('transitioncancel', t),
              r.delete(n.target)),
            0 === r.size)
          ) {
            for (let e of o) e();
            o.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let o = r.get(n.target);
          o ||
            ((o = new Set()),
            r.set(n.target, o),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            o.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function l(e) {
        requestAnimationFrame(() => {
          0 === r.size ? e() : o.add(e);
        });
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? i()
          : document.addEventListener('DOMContentLoaded', i));
    },
    84988: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(3263),
        o = n(2265);
      function i(e) {
        let t = (0, o.useRef)(null);
        return (
          (0, r.b)(() => {
            t.current = e;
          }, [e]),
          (0, o.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
    },
    3263: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265);
      let o = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
    },
  },
]);
