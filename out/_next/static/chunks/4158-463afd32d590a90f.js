'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4158],
  {
    65262: function (e, t, n) {
      n.d(t, {
        l: function () {
          return l;
        },
      });
      var i = n(53640);
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          t.forEach((t) =>
            (function (e, t) {
              if (null != e) {
                if ((0, i.mf)(e)) {
                  e(t);
                  return;
                }
                try {
                  e.current = t;
                } catch (n) {
                  throw Error(
                    "Cannot assign value '"
                      .concat(t, "' to ref '")
                      .concat(e, "'"),
                  );
                }
              }
            })(t, e),
          );
        };
      }
    },
    31887: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
        x: function () {
          return l;
        },
      });
      var i = (e) =>
          (null == e ? void 0 : e.length) <= 4
            ? e
            : null == e
              ? void 0
              : e.slice(0, 3),
        l = (...e) => {
          let t = ' ';
          for (let n of e)
            if ('string' == typeof n && n.length > 0) {
              t = n;
              break;
            }
          return t;
        };
    },
    1144: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(20357),
        l = {};
      function r(e, t, ...n) {
        var o;
        let s = t ? ` [${t}]` : ' ',
          a = `[Next UI]${s}: ${e}`;
        if (
          'undefined' != typeof console &&
          !l[a] &&
          ((l[a] = !0),
          (null == (o = null == i ? void 0 : i.env) ? void 0 : o.NODE_ENV) !==
            'production')
        )
          return console.warn(a, n);
      }
    },
    46896: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      var i = n(2265),
        l = (null == globalThis ? void 0 : globalThis.document)
          ? i.useLayoutEffect
          : i.useEffect;
    },
    21166: function (e, t, n) {
      function i(e) {
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
      function l(e) {
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
      function r(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, {
        Q: function () {
          return x;
        },
      });
      let o = r(function () {
          return l(/^Mac/i);
        }),
        s = r(function () {
          return l(/^iPhone/i);
        }),
        a = r(function () {
          return l(/^iPad/i) || (o() && navigator.maxTouchPoints > 1);
        }),
        u = r(function () {
          return s() || a();
        });
      r(function () {
        return o() || u();
      }),
        r(function () {
          return i(/AppleWebKit/i) && !c();
        });
      let c = r(function () {
          return i(/Chrome/i);
        }),
        d = r(function () {
          return i(/Android/i);
        });
      r(function () {
        return i(/Firefox/i);
      });
      let f = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        v = (e) =>
          e && 'window' in e && e.window === e ? e : f(e).defaultView || window;
      var h = n(2265);
      let y = new Set(),
        p = new Map(),
        g = !1,
        m = !1;
      function b(e, t) {
        for (let n of y) n(e, t);
      }
      function w(e) {
        (g = !0),
          e.metaKey ||
            (!o() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            b('keyboard', e);
      }
      function S(e) {
        ('mousedown' === e.type || 'pointerdown' === e.type) &&
          ((g = !0), b('pointer', e));
      }
      function E(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (d() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          (g = !0);
      }
      function K(e) {
        e.target !== window &&
          e.target !== document &&
          (g || m || b('virtual', e), (g = !1), (m = !1));
      }
      function M() {
        (g = !1), (m = !0);
      }
      function k(e) {
        if ('undefined' == typeof window || p.get(v(e))) return;
        let t = v(e),
          n = f(e),
          i = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (g = !0), i.apply(this, arguments);
        }),
          n.addEventListener('keydown', w, !0),
          n.addEventListener('keyup', w, !0),
          n.addEventListener('click', E, !0),
          t.addEventListener('focus', K, !0),
          t.addEventListener('blur', M, !1),
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
              I(e);
            },
            { once: !0 },
          ),
          p.set(t, { focus: i });
      }
      let I = (e, t) => {
        let n = v(e),
          i = f(e);
        t && i.removeEventListener('DOMContentLoaded', t),
          p.has(n) &&
            ((n.HTMLElement.prototype.focus = p.get(n).focus),
            i.removeEventListener('keydown', w, !0),
            i.removeEventListener('keyup', w, !0),
            i.removeEventListener('click', E, !0),
            n.removeEventListener('focus', K, !0),
            n.removeEventListener('blur', M, !1),
            'undefined' != typeof PointerEvent
              ? (i.removeEventListener('pointerdown', S, !0),
                i.removeEventListener('pointermove', S, !0),
                i.removeEventListener('pointerup', S, !0))
              : (i.removeEventListener('mousedown', S, !0),
                i.removeEventListener('mousemove', S, !0),
                i.removeEventListener('mouseup', S, !0)),
            p.delete(n));
      };
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let n = f(void 0);
          'loading' !== n.readyState
            ? k(void 0)
            : ((t = () => {
                k(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => I(e, t);
        })();
      let L = 'undefined' != typeof document ? h.useLayoutEffect : () => {};
      function C(e) {
        let t = (0, h.useRef)(null);
        return (
          L(() => {
            t.current = e;
          }, [e]),
          (0, h.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      function x(e, t, n) {
        let { validationBehavior: i, focus: l } = e;
        L(() => {
          if ('native' === i && (null == n ? void 0 : n.current)) {
            var e;
            let i,
              l = t.realtimeValidation.isInvalid
                ? t.realtimeValidation.validationErrors.join(' ') ||
                  'Invalid value.'
                : '';
            n.current.setCustomValidity(l),
              n.current.hasAttribute('title') || (n.current.title = ''),
              t.realtimeValidation.isInvalid ||
                t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: {
                    badInput: (i = e.validity).badInput,
                    customError: i.customError,
                    patternMismatch: i.patternMismatch,
                    rangeOverflow: i.rangeOverflow,
                    rangeUnderflow: i.rangeUnderflow,
                    stepMismatch: i.stepMismatch,
                    tooLong: i.tooLong,
                    tooShort: i.tooShort,
                    typeMismatch: i.typeMismatch,
                    valueMissing: i.valueMissing,
                    valid: i.valid,
                  },
                  validationErrors: e.validationMessage
                    ? [e.validationMessage]
                    : [],
                });
          }
        });
        let r = C(() => {
            t.resetValidation();
          }),
          o = C((e) => {
            var i, r;
            t.displayValidation.isInvalid || t.commitValidation();
            let o =
              null == n
                ? void 0
                : null === (i = n.current) || void 0 === i
                  ? void 0
                  : i.form;
            !e.defaultPrevented &&
              n &&
              o &&
              (function (e) {
                for (let t = 0; t < e.elements.length; t++) {
                  let n = e.elements[t];
                  if (!n.validity.valid) return n;
                }
                return null;
              })(o) === n.current &&
              (l ? l() : null === (r = n.current) || void 0 === r || r.focus(),
              b('keyboard', null)),
              e.preventDefault();
          }),
          s = C(() => {
            t.commitValidation();
          });
        (0, h.useEffect)(() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return (
            e.addEventListener('invalid', o),
            e.addEventListener('change', s),
            null == t || t.addEventListener('reset', r),
            () => {
              e.removeEventListener('invalid', o),
                e.removeEventListener('change', s),
                null == t || t.removeEventListener('reset', r);
            }
          );
        }, [n, o, s, r, i]);
      }
    },
    34909: function (e, t, n) {
      n.d(t, {
        j: function () {
          return v;
        },
      });
      let i = new Set([
          'Arab',
          'Syrc',
          'Samr',
          'Mand',
          'Thaa',
          'Mend',
          'Nkoo',
          'Adlm',
          'Rohg',
          'Hebr',
        ]),
        l = new Set([
          'ae',
          'ar',
          'arc',
          'bcc',
          'bqi',
          'ckb',
          'dv',
          'fa',
          'glk',
          'he',
          'ku',
          'mzn',
          'nqo',
          'pnb',
          'ps',
          'sd',
          'ug',
          'ur',
          'yi',
        ]);
      var r = n(2265),
        o = n(73165);
      let s = Symbol.for('react-aria.i18n.locale');
      function a() {
        let e =
          ('undefined' != typeof window && window[s]) ||
          ('undefined' != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          'en-US';
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch (t) {
          e = 'en-US';
        }
        return {
          locale: e,
          direction: !(function (e) {
            if (Intl.Locale) {
              let t = new Intl.Locale(e).maximize(),
                n =
                  'function' == typeof t.getTextInfo
                    ? t.getTextInfo()
                    : t.textInfo;
              if (n) return 'rtl' === n.direction;
              if (t.script) return i.has(t.script);
            }
            let t = e.split('-')[0];
            return l.has(t);
          })(e)
            ? 'ltr'
            : 'rtl',
        };
      }
      let u = a(),
        c = new Set();
      function d() {
        for (let e of ((u = a()), c)) e(u);
      }
      let f = r.createContext(null);
      function v() {
        let e = (function () {
          let e = (0, o.Av)(),
            [t, n] = (0, r.useState)(u);
          return ((0, r.useEffect)(
            () => (
              0 === c.size && window.addEventListener('languagechange', d),
              c.add(n),
              () => {
                c.delete(n),
                  0 === c.size &&
                    window.removeEventListener('languagechange', d);
              }
            ),
            [],
          ),
          e)
            ? { locale: 'en-US', direction: 'ltr' }
            : t;
        })();
        return (0, r.useContext)(f) || e;
      }
    },
    8381: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(45668),
        l = n(2265);
      function r(e) {
        let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o,
          } = e,
          s = (0, l.useRef)({ isFocusWithin: !1 }),
          a = (0, l.useCallback)(
            (e) => {
              s.current.isFocusWithin &&
                !e.currentTarget.contains(e.relatedTarget) &&
                ((s.current.isFocusWithin = !1), n && n(e), o && o(!1));
            },
            [n, o, s],
          ),
          u = (0, i.d)(a),
          c = (0, l.useCallback)(
            (e) => {
              s.current.isFocusWithin ||
                document.activeElement !== e.target ||
                (r && r(e), o && o(!0), (s.current.isFocusWithin = !0), u(e));
            },
            [r, o, u],
          );
        return t
          ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
          : { focusWithinProps: { onFocus: c, onBlur: a } };
      }
    },
    45668: function (e, t, n) {
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var i = n(2265),
        l = n(94922),
        r = n(99688);
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
        let t = (0, i.useRef)({ isFocused: !1, observer: null });
        (0, l.b)(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (0, r.i)((t) => {
          null == e || e(t);
        });
        return (0, i.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let i = e.target;
              i.addEventListener(
                'focusout',
                (e) => {
                  (t.current.isFocused = !1),
                    i.disabled && n(new o('blur', e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 },
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && i.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let n =
                      i === document.activeElement
                        ? null
                        : document.activeElement;
                    i.dispatchEvent(
                      new FocusEvent('blur', { relatedTarget: n }),
                    ),
                      i.dispatchEvent(
                        new FocusEvent('focusout', {
                          bubbles: !0,
                          relatedTarget: n,
                        }),
                      );
                  }
                })),
                t.current.observer.observe(i, {
                  attributes: !0,
                  attributeFilter: ['disabled'],
                });
            }
          },
          [n],
        );
      }
    },
    53058: function (e, t, n) {
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var i = n(57736);
      function l(e) {
        let {
          id: t,
          label: n,
          'aria-labelledby': l,
          'aria-label': r,
          labelElementType: o = 'label',
        } = e;
        t = (0, i.Me)(t);
        let s = (0, i.Me)(),
          a = {};
        return (
          n
            ? ((l = l ? `${s} ${l}` : s),
              (a = { id: s, htmlFor: 'label' === o ? t : void 0 }))
            : l ||
              r ||
              console.warn(
                'If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility',
              ),
          {
            labelProps: a,
            fieldProps: (function (e, t) {
              let { id: n, 'aria-label': l, 'aria-labelledby': r } = e;
              return (
                (n = (0, i.Me)(n)),
                r && l
                  ? (r = [...new Set([n, ...r.trim().split(/\s+/)])].join(' '))
                  : r && (r = r.trim().split(/\s+/).join(' ')),
                { id: n, 'aria-label': l, 'aria-labelledby': r }
              );
            })({ id: t, 'aria-label': r, 'aria-labelledby': l }),
          }
        );
      }
    },
    57736: function (e, t, n) {
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
      var i = n(2265);
      let l = 'undefined' != typeof document ? i.useLayoutEffect : () => {};
      function r(e) {
        let t = (0, i.useRef)(null);
        return (
          l(() => {
            t.current = e;
          }, [e]),
          (0, i.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      var o = n(73165);
      let s = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        a = new Map();
      function u(e) {
        let [t, n] = (0, i.useState)(e),
          r = (0, i.useRef)(null),
          u = (0, o.gP)(t),
          c = (0, i.useCallback)((e) => {
            r.current = e;
          }, []);
        return (
          s && a.set(u, c),
          l(
            () => () => {
              a.delete(u);
            },
            [u],
          ),
          (0, i.useEffect)(() => {
            let e = r.current;
            e && ((r.current = null), n(e));
          }),
          u
        );
      }
      function c(e, t) {
        if (e === t) return e;
        let n = a.get(e);
        if (n) return n(t), t;
        let i = a.get(t);
        return i ? (i(e), e) : t;
      }
      function d(e = []) {
        let t = u(),
          [n, o] = (function (e) {
            let [t, n] = (0, i.useState)(e),
              o = (0, i.useRef)(null),
              s = r(() => {
                if (!o.current) return;
                let e = o.current.next();
                if (e.done) {
                  o.current = null;
                  return;
                }
                t === e.value ? s() : n(e.value);
              });
            l(() => {
              o.current && s();
            });
            let a = r((e) => {
              (o.current = e(t)), s();
            });
            return [t, a];
          })(t),
          s = (0, i.useCallback)(() => {
            o(function* () {
              yield t, yield document.getElementById(t) ? t : void 0;
            });
          }, [t, o]);
        return l(s, [t, s, ...e]), n;
      }
    },
    52897: function (e, t, n) {
      function i(e, t) {
        return 'function' == typeof t.getChildren
          ? t.getChildren(e.key)
          : e.childNodes;
      }
      function l(e) {
        return r(e, 0);
      }
      function r(e, t) {
        if (t < 0) return;
        let n = 0;
        for (let i of e) {
          if (n === t) return i;
          n++;
        }
      }
      function o(e) {
        let t;
        for (let n of e) t = n;
        return t;
      }
      function s(e, t, n) {
        if (t.parentKey === n.parentKey) return t.index - n.index;
        let i = [...a(e, t), t],
          l = [...a(e, n), n],
          r = i.slice(0, l.length).findIndex((e, t) => e !== l[t]);
        return -1 !== r
          ? ((t = i[r]), (n = l[r]), t.index - n.index)
          : i.findIndex((e) => e === n) >= 0
            ? 1
            : (l.findIndex((e) => e === t), -1);
      }
      function a(e, t) {
        let n = [];
        for (; (null == t ? void 0 : t.parentKey) != null; )
          n.unshift((t = e.getItem(t.parentKey)));
        return n;
      }
      n.d(t, {
        Em: function () {
          return r;
        },
        _P: function () {
          return i;
        },
        eg: function () {
          return s;
        },
        l8: function () {
          return l;
        },
        s: function () {
          return o;
        },
      });
    },
    34921: function (e, t, n) {
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var i = n(2265);
      class l {
        build(e, t) {
          return (this.context = t), r(() => this.iterateCollection(e));
        }
        *iterateCollection(e) {
          let { children: t, items: n } = e;
          if ('function' == typeof t) {
            if (!n)
              throw Error(
                'props.children was a function but props.items is missing',
              );
            for (let n of e.items)
              yield* this.getFullNode({ value: n }, { renderer: t });
          } else {
            let e = [];
            i.Children.forEach(t, (t) => {
              e.push(t);
            });
            let n = 0;
            for (let t of e)
              for (let e of this.getFullNode({ element: t, index: n }, {}))
                n++, yield e;
          }
        }
        getKey(e, t, n, i) {
          if (null != e.key) return e.key;
          if ('cell' === t.type && null != t.key) return `${i}${t.key}`;
          let l = t.value;
          if (null != l) {
            var r;
            let e = null !== (r = l.key) && void 0 !== r ? r : l.id;
            if (null == e) throw Error('No key found for item');
            return e;
          }
          return i ? `${i}.${t.index}` : `$.${t.index}`;
        }
        getChildState(e, t) {
          return { renderer: t.renderer || e.renderer };
        }
        *getFullNode(e, t, n, l) {
          let s = e.element;
          if (!s && e.value && t && t.renderer) {
            let n = this.cache.get(e.value);
            if (
              n &&
              (!n.shouldInvalidate || !n.shouldInvalidate(this.context))
            ) {
              (n.index = e.index), (n.parentKey = l ? l.key : null), yield n;
              return;
            }
            s = t.renderer(e.value);
          }
          if (i.isValidElement(s)) {
            let i = s.type;
            if (
              'function' != typeof i &&
              'function' != typeof i.getCollectionNode
            ) {
              let e = 'function' == typeof s.type ? s.type.name : s.type;
              throw Error(`Unknown element <${e}> in collection.`);
            }
            let r = i.getCollectionNode(s.props, this.context),
              a = e.index,
              u = r.next();
            for (; !u.done && u.value; ) {
              let i = u.value;
              e.index = a;
              let c = i.key;
              c || (c = i.element ? null : this.getKey(s, e, t, n));
              let d = [
                ...this.getFullNode(
                  {
                    ...i,
                    key: c,
                    index: a,
                    wrapper: (function (e, t) {
                      return e && t ? (n) => e(t(n)) : e || t || void 0;
                    })(e.wrapper, i.wrapper),
                  },
                  this.getChildState(t, i),
                  n ? `${n}${s.key}` : s.key,
                  l,
                ),
              ];
              for (let t of d) {
                if (
                  ((t.value = i.value || e.value),
                  t.value && this.cache.set(t.value, t),
                  e.type && t.type !== e.type)
                )
                  throw Error(
                    `Unsupported type <${o(t.type)}> in <${o(l.type)}>. Only <${o(e.type)}> is supported.`,
                  );
                a++, yield t;
              }
              u = r.next(d);
            }
            return;
          }
          if (null == e.key) return;
          let a = this,
            u = {
              type: e.type,
              props: e.props,
              key: e.key,
              parentKey: l ? l.key : null,
              value: e.value,
              level: l ? l.level + 1 : 0,
              index: e.index,
              rendered: e.rendered,
              textValue: e.textValue,
              'aria-label': e['aria-label'],
              wrapper: e.wrapper,
              shouldInvalidate: e.shouldInvalidate,
              hasChildNodes: e.hasChildNodes,
              childNodes: r(function* () {
                if (!e.hasChildNodes) return;
                let n = 0;
                for (let i of e.childNodes())
                  for (let e of (null != i.key && (i.key = `${u.key}${i.key}`),
                  (i.index = n),
                  a.getFullNode(i, a.getChildState(t, i), u.key, u)))
                    n++, yield e;
              }),
            };
          yield u;
        }
        constructor() {
          this.cache = new WeakMap();
        }
      }
      function r(e) {
        let t = [],
          n = null;
        return {
          *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let i of (n || (n = e()), n)) t.push(i), yield i;
          },
        };
      }
      function o(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      function s(e, t, n) {
        let r = (0, i.useMemo)(() => new l(), []),
          { children: o, items: s, collection: a } = e;
        return (0, i.useMemo)(
          () => a || t(r.build({ children: o, items: s }, n)),
          [r, o, s, a, n, t],
        );
      }
    },
    56804: function (e, t, n) {
      n.d(t, {
        PS: function () {
          return o;
        },
        Q3: function () {
          return u;
        },
        tL: function () {
          return a;
        },
      });
      var i = n(2265);
      let l = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0,
        },
        r = { ...l, customError: !0, valid: !1 },
        o = { isInvalid: !1, validationDetails: l, validationErrors: [] },
        s = (0, i.createContext)({}),
        a = '__formValidationState' + Date.now();
      function u(e) {
        if (e[a]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: i,
            resetValidation: l,
            commitValidation: r,
          } = e[a];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: i,
            resetValidation: l,
            commitValidation: r,
          };
        }
        return (function (e) {
          let {
            isInvalid: t,
            validationState: n,
            name: l,
            value: a,
            builtinValidation: u,
            validate: v,
            validationBehavior: h = 'aria',
          } = e;
          n && (t || (t = 'invalid' === n));
          let y =
              void 0 !== t
                ? { isInvalid: t, validationErrors: [], validationDetails: r }
                : null,
            p = (0, i.useMemo)(
              () =>
                d(
                  (function (e, t) {
                    if ('function' == typeof e) {
                      let n = e(t);
                      if (n && 'boolean' != typeof n) return c(n);
                    }
                    return [];
                  })(v, a),
                ),
              [v, a],
            );
          (null == u ? void 0 : u.validationDetails.valid) && (u = null);
          let g = (0, i.useContext)(s),
            m = (0, i.useMemo)(
              () =>
                l
                  ? Array.isArray(l)
                    ? l.flatMap((e) => c(g[e]))
                    : c(g[l])
                  : [],
              [g, l],
            ),
            [b, w] = (0, i.useState)(g),
            [S, E] = (0, i.useState)(!1);
          g !== b && (w(g), E(!1));
          let K = (0, i.useMemo)(() => d(S ? [] : m), [S, m]),
            M = (0, i.useRef)(o),
            [k, I] = (0, i.useState)(o),
            L = (0, i.useRef)(o),
            [C, x] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              if (!C) return;
              x(!1);
              let e = p || u || M.current;
              f(e, L.current) || ((L.current = e), I(e));
            }),
            {
              realtimeValidation: y || K || p || u || o,
              displayValidation:
                'native' === h ? y || K || k : y || K || p || u || k,
              updateValidation(e) {
                'aria' !== h || f(k, e) ? (M.current = e) : I(e);
              },
              resetValidation() {
                f(o, L.current) || ((L.current = o), I(o)),
                  'native' === h && x(!1),
                  E(!0);
              },
              commitValidation() {
                'native' === h && x(!0), E(!0);
              },
            }
          );
        })(e);
      }
      function c(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function d(e) {
        return e.length
          ? { isInvalid: !0, validationErrors: e, validationDetails: r }
          : null;
      }
      function f(e, t) {
        return (
          e === t ||
          (e &&
            t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, n) => e === t.validationErrors[n]) &&
            Object.entries(e.validationDetails).every(
              ([e, n]) => t.validationDetails[e] === n,
            ))
        );
      }
    },
    91980: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      class i extends Set {
        constructor(e, t, n) {
          super(e),
            e instanceof i
              ? ((this.anchorKey = t || e.anchorKey),
                (this.currentKey = n || e.currentKey))
              : ((this.anchorKey = t), (this.currentKey = n));
        }
      }
    },
    62490: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(91980),
        l = n(52897);
      class r {
        get selectionMode() {
          return this.state.selectionMode;
        }
        get disallowEmptySelection() {
          return this.state.disallowEmptySelection;
        }
        get selectionBehavior() {
          return this.state.selectionBehavior;
        }
        setSelectionBehavior(e) {
          this.state.setSelectionBehavior(e);
        }
        get isFocused() {
          return this.state.isFocused;
        }
        setFocused(e) {
          this.state.setFocused(e);
        }
        get focusedKey() {
          return this.state.focusedKey;
        }
        get childFocusStrategy() {
          return this.state.childFocusStrategy;
        }
        setFocusedKey(e, t) {
          (null == e || this.collection.getItem(e)) &&
            this.state.setFocusedKey(e, t);
        }
        get selectedKeys() {
          return 'all' === this.state.selectedKeys
            ? new Set(this.getSelectAllKeys())
            : this.state.selectedKeys;
        }
        get rawSelection() {
          return this.state.selectedKeys;
        }
        isSelected(e) {
          return (
            'none' !== this.state.selectionMode &&
            ((e = this.getKey(e)),
            'all' === this.state.selectedKeys
              ? this.canSelectItem(e)
              : this.state.selectedKeys.has(e))
          );
        }
        get isEmpty() {
          return (
            'all' !== this.state.selectedKeys &&
            0 === this.state.selectedKeys.size
          );
        }
        get isSelectAll() {
          if (this.isEmpty) return !1;
          if ('all' === this.state.selectedKeys) return !0;
          if (null != this._isSelectAll) return this._isSelectAll;
          let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
          return (
            (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll
          );
        }
        get firstSelectedKey() {
          let e = null;
          for (let t of this.state.selectedKeys) {
            let n = this.collection.getItem(t);
            (!e || (n && 0 > (0, l.eg)(this.collection, n, e))) && (e = n);
          }
          return null == e ? void 0 : e.key;
        }
        get lastSelectedKey() {
          let e = null;
          for (let t of this.state.selectedKeys) {
            let n = this.collection.getItem(t);
            (!e || (n && (0, l.eg)(this.collection, n, e) > 0)) && (e = n);
          }
          return null == e ? void 0 : e.key;
        }
        get disabledKeys() {
          return this.state.disabledKeys;
        }
        get disabledBehavior() {
          return this.state.disabledBehavior;
        }
        extendSelection(e) {
          let t;
          if ('none' !== this.selectionMode) {
            if ('single' === this.selectionMode) {
              this.replaceSelection(e);
              return;
            }
            if (((e = this.getKey(e)), 'all' === this.state.selectedKeys))
              t = new i.Y([e], e, e);
            else {
              let n = this.state.selectedKeys,
                l = n.anchorKey || e;
              for (let r of ((t = new i.Y(n, l, e)),
              this.getKeyRange(l, n.currentKey || e)))
                t.delete(r);
              for (let n of this.getKeyRange(e, l))
                this.canSelectItem(n) && t.add(n);
            }
            this.state.setSelectedKeys(t);
          }
        }
        getKeyRange(e, t) {
          let n = this.collection.getItem(e),
            i = this.collection.getItem(t);
          return n && i
            ? 0 >= (0, l.eg)(this.collection, n, i)
              ? this.getKeyRangeInternal(e, t)
              : this.getKeyRangeInternal(t, e)
            : [];
        }
        getKeyRangeInternal(e, t) {
          let n = [],
            i = e;
          for (; i; ) {
            let e = this.collection.getItem(i);
            if (
              (((e && 'item' === e.type) ||
                ('cell' === e.type && this.allowsCellSelection)) &&
                n.push(i),
              i === t)
            )
              return n;
            i = this.collection.getKeyAfter(i);
          }
          return [];
        }
        getKey(e) {
          let t = this.collection.getItem(e);
          if (!t || ('cell' === t.type && this.allowsCellSelection)) return e;
          for (; 'item' !== t.type && null != t.parentKey; )
            t = this.collection.getItem(t.parentKey);
          return t && 'item' === t.type ? t.key : null;
        }
        toggleSelection(e) {
          if ('none' === this.selectionMode) return;
          if ('single' === this.selectionMode && !this.isSelected(e)) {
            this.replaceSelection(e);
            return;
          }
          if (null == (e = this.getKey(e))) return;
          let t = new i.Y(
            'all' === this.state.selectedKeys
              ? this.getSelectAllKeys()
              : this.state.selectedKeys,
          );
          t.has(e)
            ? t.delete(e)
            : this.canSelectItem(e) &&
              (t.add(e), (t.anchorKey = e), (t.currentKey = e)),
            (this.disallowEmptySelection && 0 === t.size) ||
              this.state.setSelectedKeys(t);
        }
        replaceSelection(e) {
          if ('none' === this.selectionMode || null == (e = this.getKey(e)))
            return;
          let t = this.canSelectItem(e) ? new i.Y([e], e, e) : new i.Y();
          this.state.setSelectedKeys(t);
        }
        setSelectedKeys(e) {
          if ('none' === this.selectionMode) return;
          let t = new i.Y();
          for (let n of e)
            if (
              null != (n = this.getKey(n)) &&
              (t.add(n), 'single' === this.selectionMode)
            )
              break;
          this.state.setSelectedKeys(t);
        }
        getSelectAllKeys() {
          let e = [],
            t = (n) => {
              for (; null != n; ) {
                if (this.canSelectItem(n)) {
                  let i = this.collection.getItem(n);
                  'item' === i.type && e.push(n),
                    i.hasChildNodes &&
                      (this.allowsCellSelection || 'item' !== i.type) &&
                      t((0, l.l8)((0, l._P)(i, this.collection)).key);
                }
                n = this.collection.getKeyAfter(n);
              }
            };
          return t(this.collection.getFirstKey()), e;
        }
        selectAll() {
          this.isSelectAll ||
            'multiple' !== this.selectionMode ||
            this.state.setSelectedKeys('all');
        }
        clearSelection() {
          !this.disallowEmptySelection &&
            ('all' === this.state.selectedKeys ||
              this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new i.Y());
        }
        toggleSelectAll() {
          this.isSelectAll ? this.clearSelection() : this.selectAll();
        }
        select(e, t) {
          'none' !== this.selectionMode &&
            ('single' === this.selectionMode
              ? this.isSelected(e) && !this.disallowEmptySelection
                ? this.toggleSelection(e)
                : this.replaceSelection(e)
              : 'toggle' === this.selectionBehavior ||
                  (t &&
                    ('touch' === t.pointerType || 'virtual' === t.pointerType))
                ? this.toggleSelection(e)
                : this.replaceSelection(e));
        }
        isSelectionEqual(e) {
          if (e === this.state.selectedKeys) return !0;
          let t = this.selectedKeys;
          if (e.size !== t.size) return !1;
          for (let n of e) if (!t.has(n)) return !1;
          for (let n of t) if (!e.has(n)) return !1;
          return !0;
        }
        canSelectItem(e) {
          var t;
          if (
            'none' === this.state.selectionMode ||
            this.state.disabledKeys.has(e)
          )
            return !1;
          let n = this.collection.getItem(e);
          return (
            !!n &&
            (null == n ||
              null === (t = n.props) ||
              void 0 === t ||
              !t.isDisabled) &&
            ('cell' !== n.type || !!this.allowsCellSelection)
          );
        }
        isDisabled(e) {
          var t, n;
          return (
            'all' === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
              !!(null === (n = this.collection.getItem(e)) || void 0 === n
                ? void 0
                : null === (t = n.props) || void 0 === t
                  ? void 0
                  : t.isDisabled))
          );
        }
        isLink(e) {
          var t, n;
          return !!(null === (n = this.collection.getItem(e)) || void 0 === n
            ? void 0
            : null === (t = n.props) || void 0 === t
              ? void 0
              : t.href);
        }
        getItemProps(e) {
          var t;
          return null === (t = this.collection.getItem(e)) || void 0 === t
            ? void 0
            : t.props;
        }
        constructor(e, t, n) {
          var i;
          (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection =
              null !== (i = null == n ? void 0 : n.allowsCellSelection) &&
              void 0 !== i &&
              i),
            (this._isSelectAll = null);
        }
      }
    },
    75125: function (e, t, n) {
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var i = n(91980),
        l = n(41821),
        r = n(2265);
      function o(e) {
        let {
            selectionMode: t = 'none',
            disallowEmptySelection: n,
            allowDuplicateSelectionEvents: o,
            selectionBehavior: a = 'toggle',
            disabledBehavior: u = 'all',
          } = e,
          c = (0, r.useRef)(!1),
          [, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          v = (0, r.useRef)(null),
          [, h] = (0, r.useState)(null),
          y = (0, r.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]),
          p = (0, r.useMemo)(
            () => s(e.defaultSelectedKeys, new i.Y()),
            [e.defaultSelectedKeys],
          ),
          [g, m] = (0, l.z)(y, p, e.onSelectionChange),
          b = (0, r.useMemo)(
            () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
            [e.disabledKeys],
          ),
          [w, S] = (0, r.useState)(a);
        'replace' === a &&
          'toggle' === w &&
          'object' == typeof g &&
          0 === g.size &&
          S('replace');
        let E = (0, r.useRef)(a);
        return (
          (0, r.useEffect)(() => {
            a !== E.current && (S(a), (E.current = a));
          }, [a]),
          {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: w,
            setSelectionBehavior: S,
            get isFocused() {
              return c.current;
            },
            setFocused(e) {
              (c.current = e), d(e);
            },
            get focusedKey() {
              return f.current;
            },
            get childFocusStrategy() {
              return v.current;
            },
            setFocusedKey(e, t = 'first') {
              (f.current = e), (v.current = t), h(e);
            },
            selectedKeys: g,
            setSelectedKeys(e) {
              (o ||
                !(function (e, t) {
                  if (e.size !== t.size) return !1;
                  for (let n of e) if (!t.has(n)) return !1;
                  return !0;
                })(e, g)) &&
                m(e);
            },
            disabledKeys: b,
            disabledBehavior: u,
          }
        );
      }
      function s(e, t) {
        return e ? ('all' === e ? 'all' : new i.Y(e)) : t;
      }
    },
    41821: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var i = n(2265);
      function l(e, t, n) {
        let [l, r] = (0, i.useState)(e || t),
          o = (0, i.useRef)(void 0 !== e),
          s = void 0 !== e;
        (0, i.useEffect)(() => {
          let e = o.current;
          e !== s &&
            console.warn(
              `WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${s ? 'controlled' : 'uncontrolled'}.`,
            ),
            (o.current = s);
        }, [s]);
        let a = s ? e : l,
          u = (0, i.useCallback)(
            (e, ...t) => {
              let i = (e, ...t) => {
                n && !Object.is(a, e) && n(e, ...t), s || (a = e);
              };
              'function' == typeof e
                ? (console.warn(
                    'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
                  ),
                  r((n, ...l) => {
                    let r = e(s ? a : n, ...l);
                    return (i(r, ...t), s) ? n : r;
                  }))
                : (s || r(e), i(e, ...t));
            },
            [s, a, n],
          );
        return [a, u];
      }
    },
  },
]);
