(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2745],
  {
    85169: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return u;
        },
        f: function () {
          return c;
        },
      });
      var r = n(2265);
      let o = ['light', 'dark'],
        i = '(prefers-color-scheme: dark)',
        a = 'undefined' == typeof window,
        s = (0, r.createContext)(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        u = () => {
          var e;
          return null !== (e = (0, r.useContext)(s)) && void 0 !== e ? e : l;
        },
        c = (e) =>
          (0, r.useContext)(s)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(f, e),
        d = ['light', 'dark'],
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: n = !0,
          enableColorScheme: a = !0,
          storageKey: l = 'theme',
          themes: u = d,
          defaultTheme: c = n ? 'system' : 'light',
          attribute: f = 'data-theme',
          value: v,
          children: y,
          nonce: b,
        }) => {
          let [x, w] = (0, r.useState)(() => g(l, c)),
            [k, S] = (0, r.useState)(() => g(l)),
            P = v ? Object.values(v) : u,
            E = (0, r.useCallback)((e) => {
              let r = e;
              if (!r) return;
              'system' === e && n && (r = m());
              let i = v ? v[r] : r,
                s = t ? h() : null,
                l = document.documentElement;
              if (
                ('class' === f
                  ? (l.classList.remove(...P), i && l.classList.add(i))
                  : i
                    ? l.setAttribute(f, i)
                    : l.removeAttribute(f),
                a)
              ) {
                let e = o.includes(c) ? c : null,
                  t = o.includes(r) ? r : e;
                l.style.colorScheme = t;
              }
              null == s || s();
            }, []),
            L = (0, r.useCallback)(
              (e) => {
                w(e);
                try {
                  localStorage.setItem(l, e);
                } catch (e) {}
              },
              [e],
            ),
            T = (0, r.useCallback)(
              (t) => {
                S(m(t)), 'system' === x && n && !e && E('system');
              },
              [x, e],
            );
          (0, r.useEffect)(() => {
            let e = window.matchMedia(i);
            return e.addListener(T), T(e), () => e.removeListener(T);
          }, [T]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                e.key === l && L(e.newValue || c);
              };
              return (
                window.addEventListener('storage', e),
                () => window.removeEventListener('storage', e)
              );
            }, [L]),
            (0, r.useEffect)(() => {
              E(null != e ? e : x);
            }, [e, x]);
          let C = (0, r.useMemo)(
            () => ({
              theme: x,
              setTheme: L,
              forcedTheme: e,
              resolvedTheme: 'system' === x ? k : x,
              themes: n ? [...u, 'system'] : u,
              systemTheme: n ? k : void 0,
            }),
            [x, L, e, k, n, u],
          );
          return r.createElement(
            s.Provider,
            { value: C },
            r.createElement(p, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: n,
              enableColorScheme: a,
              storageKey: l,
              themes: u,
              defaultTheme: c,
              attribute: f,
              value: v,
              children: y,
              attrs: P,
              nonce: b,
            }),
            y,
          );
        },
        p = (0, r.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: n,
            enableSystem: a,
            enableColorScheme: s,
            defaultTheme: l,
            value: u,
            attrs: c,
            nonce: d,
          }) => {
            let f = 'system' === l,
              p =
                'class' === n
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c.map((e) => `'${e}'`).join(',')});`
                  : `var d=document.documentElement,n='${n}',s='setAttribute';`,
              g = s
                ? o.includes(l) && l
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : '',
              h = (e, t = !1, r = !0) => {
                let i = u ? u[e] : e,
                  a = t ? e + "|| ''" : `'${i}'`,
                  l = '';
                return (
                  s &&
                    r &&
                    !t &&
                    o.includes(e) &&
                    (l += `d.style.colorScheme = '${e}';`),
                  'class' === n
                    ? (l += t || i ? `c.add(${a})` : 'null')
                    : i && (l += `d[s](n,${a})`),
                  l
                );
              },
              m = e
                ? `!function(){${p}${h(e)}}()`
                : a
                  ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h('dark')}}else{${h('light')}}}else if(e){${u ? `var x=${JSON.stringify(u)};` : ''}${h(u ? 'x[e]' : 'e', !0)}}${f ? '' : 'else{' + h(l, !1, !1) + '}'}${g}}catch(e){}}()`
                  : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${u ? `var x=${JSON.stringify(u)};` : ''}${h(u ? 'x[e]' : 'e', !0)}}else{${h(l, !1, !1)};}${g}}catch(t){}}();`;
            return r.createElement('script', {
              nonce: d,
              dangerouslySetInnerHTML: { __html: m },
            });
          },
          () => !0,
        ),
        g = (e, t) => {
          let n;
          if (!a) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        h = () => {
          let e = document.createElement('style');
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
              ),
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        m = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? 'dark' : 'light'
        );
    },
    57818: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(50551),
        o = n.n(r);
    },
    87138: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(231),
        o = n.n(r);
    },
    844: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'addLocale', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    25944: function (e, t, n) {
      'use strict';
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    231: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(51609),
        o = n(57437),
        i = r._(n(2265)),
        a = n(98016),
        s = n(18029),
        l = n(41142),
        u = n(43461),
        c = n(844),
        d = n(60291),
        f = n(44467),
        p = n(53106),
        g = n(25944),
        h = n(4897),
        m = n(51507),
        v = new Set();
      function y(e, t, n, r, o, i) {
        if ('undefined' != typeof window && (i || (0, s.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              '%' +
              n +
              '%' +
              (void 0 !== r.locale
                ? r.locale
                : 'locale' in e
                  ? e.locale
                  : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {},
          );
        }
      }
      function b(e) {
        return 'string' == typeof e ? e : (0, l.formatUrl)(e);
      }
      let x = i.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: l,
          as: v,
          children: x,
          prefetch: w = null,
          passHref: k,
          replace: S,
          shallow: P,
          scroll: E,
          locale: L,
          onClick: T,
          onMouseEnter: C,
          onTouchStart: N,
          legacyBehavior: O = !1,
          ...R
        } = e;
        (n = x),
          O &&
            ('string' == typeof n || 'number' == typeof n) &&
            (n = (0, o.jsx)('a', { children: n }));
        let j = i.default.useContext(d.RouterContext),
          K = i.default.useContext(f.AppRouterContext),
          M = null != j ? j : K,
          I = !j,
          A = !1 !== w,
          D = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
          { href: F, as: _ } = i.default.useMemo(() => {
            if (!j) {
              let e = b(l);
              return { href: e, as: v ? b(v) : e };
            }
            let [e, t] = (0, a.resolveHref)(j, l, !0);
            return { href: e, as: v ? (0, a.resolveHref)(j, v) : t || e };
          }, [j, l, v]),
          $ = i.default.useRef(F),
          B = i.default.useRef(_);
        O && (r = i.default.Children.only(n));
        let U = O ? r && 'object' == typeof r && r.ref : t,
          [z, W, H] = (0, p.useIntersection)({ rootMargin: '200px' }),
          V = i.default.useCallback(
            (e) => {
              (B.current !== _ || $.current !== F) &&
                (H(), (B.current = _), ($.current = F)),
                z(e),
                U &&
                  ('function' == typeof U
                    ? U(e)
                    : 'object' == typeof U && (U.current = e));
            },
            [_, U, F, H, z],
          );
        i.default.useEffect(() => {
          M && W && A && y(M, F, _, { locale: L }, { kind: D }, I);
        }, [_, F, W, L, A, null == j ? void 0 : j.locale, M, I, D]);
        let G = {
          ref: V,
          onClick(e) {
            O || 'function' != typeof T || T(e),
              O &&
                r.props &&
                'function' == typeof r.props.onClick &&
                r.props.onClick(e),
              M &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, a, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    'A' === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute('target');
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, s.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    'beforePopState' in t
                      ? t[o ? 'replace' : 'push'](n, r, {
                          shallow: a,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? 'replace' : 'push'](r || n, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, M, F, _, S, P, E, L, I);
          },
          onMouseEnter(e) {
            O || 'function' != typeof C || C(e),
              O &&
                r.props &&
                'function' == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              M &&
                (A || !I) &&
                y(
                  M,
                  F,
                  _,
                  { locale: L, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  I,
                );
          },
          onTouchStart: function (e) {
            O || 'function' != typeof N || N(e),
              O &&
                r.props &&
                'function' == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              M &&
                (A || !I) &&
                y(
                  M,
                  F,
                  _,
                  { locale: L, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  I,
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(_)) G.href = _;
        else if (!O || k || ('a' === r.type && !('href' in r.props))) {
          let e = void 0 !== L ? L : null == j ? void 0 : j.locale,
            t =
              (null == j ? void 0 : j.isLocaleDomain) &&
              (0, g.getDomainLocale)(
                _,
                e,
                null == j ? void 0 : j.locales,
                null == j ? void 0 : j.domainLocales,
              );
          G.href =
            t ||
            (0, h.addBasePath)(
              (0, c.addLocale)(_, e, null == j ? void 0 : j.defaultLocale),
            );
        }
        return O
          ? i.default.cloneElement(r, G)
          : (0, o.jsx)('a', { ...R, ...G, children: n });
      });
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    49189: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    98016: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(18323),
        o = n(41142),
        i = n(45519),
        a = n(43461),
        s = n(18157),
        l = n(18029),
        u = n(59195),
        c = n(80020);
      function d(e, t, n) {
        let d;
        let f = 'string' == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          g = p ? f.slice(p[0].length) : f;
        if ((g.split('?', 1)[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, a.normalizeRepeatedSlashes)(g);
          f = (p ? p[0] : '') + t;
        }
        if (!(0, l.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith('#') ? e.asPath : e.pathname, 'http://n');
        } catch (e) {
          d = new URL('/', 'http://n');
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
          let t = '';
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: s } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n,
              );
            a &&
              (t = (0, o.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, i.omit)(n, s),
              }));
          }
          let a =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [a, t || a] : a;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53106: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        o = n(49189),
        i = 'function' == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !i,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (i) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || '',
                      },
                      r = s.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = a.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      s.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), a.delete(r);
                        let e = s.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, f.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    50551: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(51609);
      n(57437), n(2265);
      let o = r._(n(40148));
      function i(e, t) {
        var n;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        'function' == typeof e && (r.loader = e);
        let i = { ...r, ...t };
        return (0, o.default)({
          ...i,
          modules: null == (n = i.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    81943: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, '\\$&') : e;
      }
    },
    10912: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'BailoutToCSR', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(55592);
      function o(e) {
        let { reason: t, children: n } = e;
        if ('undefined' == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    40148: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(57437),
        o = n(2265),
        i = n(10912),
        a = n(61481);
      function s(e) {
        return { default: e && 'default' in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...l, ...e },
            n = (0, o.lazy)(() => t.loader().then(s)),
            u = t.loading;
          function c(e) {
            let s = u
                ? (0, r.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      'undefined' == typeof window
                        ? (0, r.jsx)(a.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(i.BailoutToCSR, {
                    reason: 'next/dynamic',
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(o.Suspense, { fallback: s, children: l });
          }
          return (c.displayName = 'LoadableComponent'), c;
        };
    },
    61481: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'PreloadCss', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(57437),
        o = n(58512);
      function i(e) {
        let { moduleIds: t } = e;
        if ('undefined' != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)('next/dynamic css'),
          i = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files.filter((e) => e.endsWith('.css'));
            i.push(...t);
          }
        }
        return 0 === i.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: i.map((e) =>
                (0, r.jsx)(
                  'link',
                  {
                    precedence: 'dynamic',
                    rel: 'stylesheet',
                    href: n.assetPrefix + '/_next/' + encodeURI(e),
                    as: 'style',
                  },
                  e,
                ),
              ),
            });
      }
    },
    60291: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(51609)._(n(2265)).default.createContext(null);
    },
    41142: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let r = n(76720)._(n(18323)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: n } = e,
          i = e.protocol || '',
          a = e.pathname || '',
          s = e.hash || '',
          l = e.query || '',
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (u = t + e.host)
            : n &&
              ((u = t + (~n.indexOf(':') ? '[' + n + ']' : n)),
              e.port && (u += ':' + e.port)),
          l &&
            'object' == typeof l &&
            (l = String(r.urlQueryToSearchParams(l)));
        let c = e.search || (l && '?' + l) || '';
        return (
          i && !i.endsWith(':') && (i += ':'),
          e.slashes || ((!i || o.test(i)) && !1 !== u)
            ? ((u = '//' + (u || '')), a && '/' !== a[0] && (a = '/' + a))
            : u || (u = ''),
          s && '#' !== s[0] && (s = '#' + s),
          c && '?' !== c[0] && (c = '?' + c),
          '' +
            i +
            u +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace('#', '%23')) +
            s
        );
      }
      let a = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function s(e) {
        return i(e);
      }
    },
    59195: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(49089),
        o = n(28083);
    },
    80020: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(41533),
        o = n(63169);
      function i(e, t, n) {
        let i = '',
          a = (0, o.getRouteRegex)(e),
          s = a.groups,
          l = (t !== e ? (0, r.getRouteMatcher)(a)(t) : '') || n;
        i = e;
        let u = Object.keys(s);
        return (
          u.every((e) => {
            let t = l[e] || '',
              { repeat: n, optional: r } = s[e],
              o = '[' + (n ? '...' : '') + e + ']';
            return (
              r && (o = (t ? '' : '/') + '[' + o + ']'),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in l) &&
                (i =
                  i.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join('/')
                      : encodeURIComponent(t),
                  ) || '/')
            );
          }) || (i = ''),
          { params: u, result: i }
        );
      }
    },
    28083: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(82269),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    18029: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(43461),
        o = n(49404);
      function i(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    45519: function (e, t) {
      'use strict';
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'omit', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    18323: function (e, t) {
      'use strict';
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
                ? t[n].push(e)
                : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return 'string' != typeof e &&
          ('number' != typeof e || isNaN(e)) &&
          'boolean' != typeof e
          ? ''
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    41533: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(43461);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError('failed to decode param');
              }
            },
            a = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (a[e] = ~r.indexOf('/')
                  ? r.split('/').map((e) => i(e))
                  : t.repeat
                    ? [i(r)]
                    : i(r));
            }),
            a
          );
        };
      }
    },
    63169: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let r = n(82269),
        o = n(81943),
        i = n(67741);
      function a(e) {
        let t = e.startsWith('[') && e.endsWith(']');
        t && (e = e.slice(1, -1));
        let n = e.startsWith('...');
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function s(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split('/'),
          n = {},
          s = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: r, repeat: l } = a(i[1]);
                return (
                  (n[e] = { pos: s++, repeat: l, optional: r }),
                  '/' + (0, o.escapeStringRegexp)(t) + '([^/]+?)'
                );
              }
              if (!i) return '/' + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = a(i[1]);
                return (
                  (n[e] = { pos: s++, repeat: t, optional: r }),
                  t ? (r ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: n,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: n } = s(e);
        return { re: RegExp('^' + t + '(?:/)?$'), groups: n };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: s,
          } = e,
          { key: l, optional: u, repeat: c } = a(r),
          d = l.replace(/\W/g, '');
        s && (d = '' + s + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          s ? (i[d] = '' + s + l) : (i[d] = l);
        let p = t ? (0, o.escapeStringRegexp)(t) : '';
        return c
          ? u
            ? '(?:/' + p + '(?<' + d + '>.+?))?'
            : '/' + p + '(?<' + d + '>.+?)'
          : '/' + p + '(?<' + d + '>[^/]+?)';
      }
      function c(e, t) {
        let n;
        let a = (0, i.removeTrailingSlash)(e).slice(1).split('/'),
          s =
            ((n = 0),
            () => {
              let e = '',
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: a
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && i) {
                let [n] = e.split(i[0]);
                return u({
                  getSafeRouteKey: s,
                  interceptionMarker: n,
                  segment: i[1],
                  routeKeys: l,
                  keyPrefix: t ? 'nxtI' : void 0,
                });
              }
              return i
                ? u({
                    getSafeRouteKey: s,
                    segment: i[1],
                    routeKeys: l,
                    keyPrefix: t ? 'nxtP' : void 0,
                  })
                : '/' + (0, o.escapeStringRegexp)(e);
            })
            .join(''),
          routeKeys: l,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...l(e),
          namedRegex: '^' + n.namedParameterizedRoute + '(?:/)?$',
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = s(e),
          { catchAll: r = !0 } = t;
        if ('/' === n) return { namedRegex: '^/' + (r ? '.*' : '') + '$' };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: '^' + o + (r ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    49089: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getSortedRoutes', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split('/').filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = '/');
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf('[]'), 1),
            null !== this.restSlugName && t.splice(t.indexOf('[...]'), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf('[[...]]'), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh('' + e + t + '/'))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get('[]')
                  ._smoosh(e + '[' + this.slugName + ']/'),
              ),
            !this.placeholder)
          ) {
            let t = '/' === e ? '/' : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  '[[...' +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get('[...]')
                  ._smoosh(e + '[...' + this.restSlugName + ']/'),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get('[[...]]')
                  ._smoosh(e + '[[...' + this.optionalRestSlugName + ']]/'),
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error('Catch-all must be the last part of the URL.');
          let o = e[0];
          if (o.startsWith('[') && o.endsWith(']')) {
            let n = o.slice(1, -1),
              a = !1;
            if (
              (n.startsWith('[') &&
                n.endsWith(']') &&
                ((n = n.slice(1, -1)), (a = !0)),
              n.startsWith('...') && ((n = n.substring(3)), (r = !0)),
              n.startsWith('[') || n.endsWith(']'))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "').",
              );
            if (n.startsWith('.'))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "').",
              );
            function i(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "').",
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, '') === o.replace(/\W/g, ''))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                i(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = '[[...]]');
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                i(this.restSlugName, n), (this.restSlugName = n), (o = '[...]');
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              i(this.slugName, n), (this.slugName = n), (o = '[]');
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    43461: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return h;
          },
          PageNotFoundError: function () {
            return m;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function a() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + '//' + t + (n ? ':' + n : '');
      }
      function s() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split('?');
        return (
          t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (t[1] ? '?' + t.slice(1).join('?') : '')
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && u(n)) return r;
        if (!r)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.',
          );
        return r;
      }
      let f = 'undefined' != typeof performance,
        p =
          f &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (e) => 'function' == typeof performance[e],
          );
      class g extends Error {}
      class h extends Error {}
      class m extends Error {
        constructor(e) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + e + ' ' + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    86013: function () {},
    88961: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: 'normal',
        },
        className: '__className_d65c78',
        variable: '__variable_d65c78',
      };
    },
    85908: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return S;
        },
      });
      var r = n(57437),
        o = () =>
          (0, r.jsxs)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            height: '80%',
            role: 'presentation',
            viewBox: '0 0 24 24',
            width: '80%',
            children: [
              (0, r.jsx)('path', {
                d: 'M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z',
                fill: 'currentColor',
              }),
              (0, r.jsx)('path', {
                d: 'M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z',
                fill: 'currentColor',
              }),
            ],
          }),
        [i, a] = (0, n(37561).k)({ name: 'AvatarGroupContext', strict: !1 }),
        s = n(22226),
        l = n(2068),
        u = n(21616),
        c = (0, l.tv)({
          slots: {
            base: [
              'flex',
              'relative',
              'justify-center',
              'items-center',
              'box-border',
              'overflow-hidden',
              'align-middle',
              'text-white',
              'z-0',
              ...u.Dh,
            ],
            img: [
              'flex',
              'object-cover',
              'w-full',
              'h-full',
              'transition-opacity',
              '!duration-500',
              'opacity-0',
              'data-[loaded=true]:opacity-100',
            ],
            fallback: [...u.z6, 'flex', 'items-center', 'justify-center'],
            name: [...u.z6, 'font-normal', 'text-center', 'text-inherit'],
            icon: [
              ...u.z6,
              'flex',
              'items-center',
              'justify-center',
              'text-inherit',
              'w-full',
              'h-full',
            ],
          },
          variants: {
            size: {
              sm: { base: 'w-8 h-8 text-tiny' },
              md: { base: 'w-10 h-10 text-tiny' },
              lg: { base: 'w-14 h-14 text-small' },
            },
            color: {
              default: { base: s.J.solid.default },
              primary: { base: s.J.solid.primary },
              secondary: { base: s.J.solid.secondary },
              success: { base: s.J.solid.success },
              warning: { base: s.J.solid.warning },
              danger: { base: s.J.solid.danger },
            },
            radius: {
              none: { base: 'rounded-none' },
              sm: { base: 'rounded-small' },
              md: { base: 'rounded-medium' },
              lg: { base: 'rounded-large' },
              full: { base: 'rounded-full' },
            },
            isBordered: {
              true: {
                base: 'ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark',
              },
            },
            isDisabled: { true: { base: 'opacity-disabled' } },
            isInGroup: {
              true: {
                base: [
                  '-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform',
                  'data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3',
                ],
              },
            },
            isInGridGroup: {
              true: { base: 'm-0 data-[hover=true]:translate-x-0' },
            },
            disableAnimation: {
              true: { base: 'transition-none', img: 'transition-none' },
              false: {},
            },
          },
          defaultVariants: { size: 'md', color: 'default', radius: 'full' },
          compoundVariants: [
            {
              color: 'default',
              isBordered: !0,
              class: { base: 'ring-default' },
            },
            {
              color: 'primary',
              isBordered: !0,
              class: { base: 'ring-primary' },
            },
            {
              color: 'secondary',
              isBordered: !0,
              class: { base: 'ring-secondary' },
            },
            {
              color: 'success',
              isBordered: !0,
              class: { base: 'ring-success' },
            },
            {
              color: 'warning',
              isBordered: !0,
              class: { base: 'ring-warning' },
            },
            { color: 'danger', isBordered: !0, class: { base: 'ring-danger' } },
          ],
        });
      (0, l.tv)({
        slots: {
          base: 'flex items-center justify-center h-auto w-max',
          count: 'hover:-translate-x-0',
        },
        variants: { isGrid: { true: 'inline-grid grid-cols-4 gap-3' } },
      });
      var d = n(12094),
        f = n(277),
        p = n(26242),
        g = n(75300),
        h = n(31887),
        m = n(65263),
        v = n(53640),
        y = n(25829),
        b = n(2265),
        x = n(25137),
        w = n(83892),
        k = (0, n(55971).Gp)((e, t) => {
          let {
              Component: n,
              ImgComponent: i,
              src: s,
              icon: l = (0, r.jsx)(o, {}),
              alt: u,
              classNames: k,
              slots: S,
              name: P,
              showFallback: E,
              fallback: L,
              getInitials: T,
              getAvatarProps: C,
              getImageProps: N,
            } = (function () {
              var e, t, n, r, o, i, s;
              let l =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                u = (0, d.w)(),
                k = a(),
                S = !!k,
                {
                  as: P,
                  ref: E,
                  src: L,
                  name: T,
                  icon: C,
                  classNames: N,
                  fallback: O,
                  alt: R = T || 'avatar',
                  imgRef: j,
                  color: K = null != (e = null == k ? void 0 : k.color)
                    ? e
                    : 'default',
                  radius: M = null != (t = null == k ? void 0 : k.radius)
                    ? t
                    : 'full',
                  size: I = null != (n = null == k ? void 0 : k.size)
                    ? n
                    : 'md',
                  isBordered: A = null !=
                    (r = null == k ? void 0 : k.isBordered) && r,
                  isDisabled: D = null !=
                    (o = null == k ? void 0 : k.isDisabled) && o,
                  isFocusable: F = !1,
                  getInitials: _ = h.e,
                  ignoreFallback: $ = !1,
                  showFallback: B = !1,
                  ImgComponent: U = 'img',
                  imgProps: z,
                  className: W,
                  onError: H,
                  ...V
                } = l,
                G = P || 'span',
                q = (0, p.gy)(E),
                Y = (0, p.gy)(j),
                { isFocusVisible: J, isFocused: X, focusProps: Z } = (0, y.F)(),
                { isHovered: Q, hoverProps: ee } = (0, w.X)({ isDisabled: D }),
                et =
                  null !=
                    (s =
                      null != (i = l.disableAnimation)
                        ? i
                        : null == u
                          ? void 0
                          : u.disableAnimation) && s,
                en =
                  'loaded' ===
                  (0, x.d)({ src: L, onError: H, ignoreFallback: $ }),
                er = 'string' == typeof U,
                eo = (!L || !en) && B,
                ei = (0, b.useMemo)(() => {
                  var e;
                  return c({
                    color: K,
                    radius: M,
                    size: I,
                    isBordered: A,
                    isDisabled: D,
                    isInGroup: S,
                    disableAnimation: et,
                    isInGridGroup:
                      null != (e = null == k ? void 0 : k.isGrid) && e,
                  });
                }, [K, M, I, A, D, et, S, null == k ? void 0 : k.isGrid]),
                ea = (0, m.W)(null == N ? void 0 : N.base, W),
                es = (0, b.useMemo)(() => F || 'button' === P, [F, P]),
                el = (0, b.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: q,
                      tabIndex: es ? 0 : -1,
                      'data-hover': (0, v.PB)(Q),
                      'data-focus': (0, v.PB)(X),
                      'data-focus-visible': (0, v.PB)(J),
                      className: ei.base({
                        class: (0, m.W)(ea, null == e ? void 0 : e.className),
                      }),
                      ...(0, f.d)(V, ee, es ? Z : {}),
                    };
                  },
                  [es, ei, ea, Z, V],
                ),
                eu = (0, b.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: Y,
                      src: L,
                      'data-loaded': (0, v.PB)(en),
                      className: ei.img({ class: null == N ? void 0 : N.img }),
                      ...(0, f.d)(
                        z,
                        e,
                        (0, g.z)({ disableAnimation: et }, { enabled: er }),
                      ),
                    };
                  },
                  [ei, en, z, et, L, Y, er],
                );
              return {
                Component: G,
                ImgComponent: U,
                src: L,
                alt: R,
                icon: C,
                name: T,
                imgRef: Y,
                slots: ei,
                classNames: N,
                fallback: O,
                isImgLoaded: en,
                showFallback: eo,
                ignoreFallback: $,
                getInitials: _,
                getAvatarProps: el,
                getImageProps: eu,
              };
            })({ ...e, ref: t }),
            O = (0, b.useMemo)(
              () =>
                !E && s
                  ? null
                  : L
                    ? (0, r.jsx)('div', {
                        'aria-label': u,
                        className: S.fallback({
                          class: null == k ? void 0 : k.fallback,
                        }),
                        role: 'img',
                        children: L,
                      })
                    : P
                      ? (0, r.jsx)('span', {
                          'aria-label': u,
                          className: S.name({
                            class: null == k ? void 0 : k.name,
                          }),
                          role: 'img',
                          children: T(P),
                        })
                      : (0, r.jsx)('span', {
                          'aria-label': u,
                          className: S.icon({
                            class: null == k ? void 0 : k.icon,
                          }),
                          role: 'img',
                          children: l,
                        }),
              [E, s, L, P, k],
            );
          return (0, r.jsxs)(n, {
            ...C(),
            children: [s && (0, r.jsx)(i, { ...N(), alt: u }), O],
          });
        });
      k.displayName = 'NextUI.Avatar';
      var S = k;
    },
    92692: function (e, t, n) {
      'use strict';
      n.d(t, {
        S: function () {
          return l;
        },
      });
      var r = n(82962),
        o = n(55971),
        i = n(33822),
        a = n(57437),
        s = (0, o.Gp)((e, t) => {
          let { getMenuTriggerProps: n } = (0, r.t)(),
            { children: o, ...s } = e;
          return (0, a.jsx)(i.b, { ...n(s), children: o });
        });
      s.displayName = 'NextUI.DropdownTrigger';
      var l = s;
    },
    8178: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return v;
        },
      });
      var r = n(82962),
        o = n(12094),
        i = n(75699),
        a = n(42795),
        s = n(2068),
        l = n(21616),
        u = (0, s.tv)({ base: ['w-full', 'p-1', 'min-w-[200px]'] });
      (0, s.tv)({
        slots: {
          base: [
            'flex',
            'group',
            'gap-2',
            'items-center',
            'justify-between',
            'relative',
            'px-2',
            'py-1.5',
            'w-full',
            'h-full',
            'box-border',
            'rounded-small',
            'outline-none',
            'cursor-pointer',
            'tap-highlight-transparent',
            'data-[pressed=true]:opacity-70',
            ...l.Dh,
            'data-[focus-visible=true]:dark:ring-offset-background-content1',
          ],
          wrapper: 'w-full flex flex-col items-start justify-center',
          title: 'flex-1 text-small font-normal truncate',
          description: [
            'w-full',
            'text-tiny',
            'text-foreground-500',
            'group-hover:text-current',
          ],
          selectedIcon: ['text-inherit', 'w-3', 'h-3', 'flex-shrink-0'],
          shortcut: [
            'px-1',
            'py-0.5',
            'rounded',
            'font-sans',
            'text-foreground-500',
            'text-tiny',
            'border-small',
            'border-default-300',
            'group-hover:border-current',
          ],
        },
        variants: {
          variant: {
            solid: { base: '' },
            bordered: {
              base: 'border-medium border-transparent bg-transparent',
            },
            light: { base: 'bg-transparent' },
            faded: {
              base: 'border-small border-transparent hover:border-default data-[hover=true]:bg-default-100',
            },
            flat: { base: '' },
            shadow: { base: 'data-[hover=true]:shadow-lg' },
          },
          color: {
            default: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {},
          },
          isDisabled: {
            true: { base: 'opacity-disabled pointer-events-none' },
          },
          disableAnimation: { true: {}, false: {} },
        },
        defaultVariants: { variant: 'solid', color: 'default' },
        compoundVariants: [
          {
            variant: 'solid',
            color: 'default',
            class: {
              base: 'data-[hover=true]:bg-default data-[hover=true]:text-default-foreground',
            },
          },
          {
            variant: 'solid',
            color: 'primary',
            class: {
              base: 'data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
            },
          },
          {
            variant: 'solid',
            color: 'secondary',
            class: {
              base: 'data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
            },
          },
          {
            variant: 'solid',
            color: 'success',
            class: {
              base: 'data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
            },
          },
          {
            variant: 'solid',
            color: 'warning',
            class: {
              base: 'data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
            },
          },
          {
            variant: 'solid',
            color: 'danger',
            class: {
              base: 'data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'default',
            class: {
              base: 'data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'primary',
            class: {
              base: 'data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'secondary',
            class: {
              base: 'data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'success',
            class: {
              base: 'data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'warning',
            class: {
              base: 'data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
            },
          },
          {
            variant: 'shadow',
            color: 'danger',
            class: {
              base: 'data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
            },
          },
          {
            variant: 'bordered',
            color: 'default',
            class: { base: 'data-[hover=true]:border-default' },
          },
          {
            variant: 'bordered',
            color: 'primary',
            class: {
              base: 'data-[hover=true]:border-primary data-[hover=true]:text-primary',
            },
          },
          {
            variant: 'bordered',
            color: 'secondary',
            class: {
              base: 'data-[hover=true]:border-secondary data-[hover=true]:text-secondary',
            },
          },
          {
            variant: 'bordered',
            color: 'success',
            class: {
              base: 'data-[hover=true]:border-success data-[hover=true]:text-success',
            },
          },
          {
            variant: 'bordered',
            color: 'warning',
            class: {
              base: 'data-[hover=true]:border-warning data-[hover=true]:text-warning',
            },
          },
          {
            variant: 'bordered',
            color: 'danger',
            class: {
              base: 'data-[hover=true]:border-danger data-[hover=true]:text-danger',
            },
          },
          {
            variant: 'flat',
            color: 'default',
            class: {
              base: 'data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground',
            },
          },
          {
            variant: 'flat',
            color: 'primary',
            class: {
              base: 'data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary',
            },
          },
          {
            variant: 'flat',
            color: 'secondary',
            class: {
              base: 'data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary',
            },
          },
          {
            variant: 'flat',
            color: 'success',
            class: {
              base: 'data-[hover=true]:bg-success/20 data-[hover=true]:text-success ',
            },
          },
          {
            variant: 'flat',
            color: 'warning',
            class: {
              base: 'data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning',
            },
          },
          {
            variant: 'flat',
            color: 'danger',
            class: {
              base: 'data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger',
            },
          },
          {
            variant: 'faded',
            color: 'default',
            class: { base: 'data-[hover=true]:text-default-foreground' },
          },
          {
            variant: 'faded',
            color: 'primary',
            class: { base: 'data-[hover=true]:text-primary' },
          },
          {
            variant: 'faded',
            color: 'secondary',
            class: { base: 'data-[hover=true]:text-secondary' },
          },
          {
            variant: 'faded',
            color: 'success',
            class: { base: 'data-[hover=true]:text-success' },
          },
          {
            variant: 'faded',
            color: 'warning',
            class: { base: 'data-[hover=true]:text-warning' },
          },
          {
            variant: 'faded',
            color: 'danger',
            class: { base: 'data-[hover=true]:text-danger' },
          },
          {
            variant: 'light',
            color: 'default',
            class: { base: 'data-[hover=true]:text-default-500' },
          },
          {
            variant: 'light',
            color: 'primary',
            class: { base: 'data-[hover=true]:text-primary' },
          },
          {
            variant: 'light',
            color: 'secondary',
            class: { base: 'data-[hover=true]:text-secondary' },
          },
          {
            variant: 'light',
            color: 'success',
            class: { base: 'data-[hover=true]:text-success' },
          },
          {
            variant: 'light',
            color: 'warning',
            class: { base: 'data-[hover=true]:text-warning' },
          },
          {
            variant: 'light',
            color: 'danger',
            class: { base: 'data-[hover=true]:text-danger' },
          },
        ],
      }),
        (0, s.tv)({
          slots: {
            base: 'relative mb-2',
            heading: 'pl-1 text-tiny text-foreground-500',
            group: 'data-[has-title=true]:pt-1',
            divider: 'mt-2',
          },
        }),
        (0, s.tv)({ base: 'w-full flex flex-col gap-0.5 p-1' });
      var c = n(65263),
        d = n(65262),
        f = n(2265),
        p = n(277),
        g = n(86943),
        h = n(57437),
        m = (e) => {
          let { children: t, ...n } = e,
            s = (function (e) {
              var t;
              let n = (0, o.w)(),
                {
                  as: r,
                  triggerRef: s,
                  isOpen: l,
                  defaultOpen: g,
                  onOpenChange: h,
                  isDisabled: m,
                  type: v = 'menu',
                  trigger: y = 'press',
                  placement: b = 'bottom',
                  closeOnSelect: x = !0,
                  shouldBlockScroll: w = !0,
                  classNames: k,
                  disableAnimation: S = null !=
                    (t = null == n ? void 0 : n.disableAnimation) && t,
                  onClose: P,
                  className: E,
                  ...L
                } = e,
                T = (0, f.useRef)(null),
                C = s || T,
                N = (0, f.useRef)(null),
                O = (0, f.useRef)(null),
                R = (0, i.W)({
                  trigger: y,
                  isOpen: l,
                  defaultOpen: g,
                  onOpenChange: (e) => {
                    null == h || h(e), e || null == P || P();
                  },
                }),
                { menuTriggerProps: j, menuProps: K } = (0, a.u)(
                  { type: v, trigger: y, isDisabled: m },
                  R,
                  C,
                ),
                M = (0, f.useMemo)(() => u({ className: E }), [E]),
                I = (e) => {
                  (void 0 === e || e) && x && R.close();
                };
              return {
                Component: r || 'div',
                menuRef: N,
                menuProps: K,
                classNames: M,
                closeOnSelect: x,
                onClose: R.close,
                autoFocus: R.focusStrategy || !0,
                disableAnimation: S,
                getPopoverProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    state: R,
                    placement: b,
                    ref: O,
                    disableAnimation: S,
                    shouldBlockScroll: w,
                    scrollRef: N,
                    triggerRef: C,
                    ...(0, p.d)(L, e),
                    classNames: {
                      ...k,
                      ...e.classNames,
                      content: (0, c.W)(
                        M,
                        null == k ? void 0 : k.content,
                        e.className,
                      ),
                    },
                  };
                },
                getMenuProps: function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  return {
                    ref: (0, d.l)(t, N),
                    menuProps: K,
                    closeOnSelect: x,
                    ...(0, p.d)(e, {
                      onAction: (t) => {
                        var n, r;
                        let o =
                          null == (n = null == e ? void 0 : e.children)
                            ? void 0
                            : n.find((e) => e.key === t);
                        if (
                          (null == (r = null == o ? void 0 : o.props)
                            ? void 0
                            : r.closeOnSelect) === !1
                        ) {
                          I(!1);
                          return;
                        }
                        I(null == e ? void 0 : e.closeOnSelect);
                      },
                      onClose: R.close,
                    }),
                  };
                },
                getMenuTriggerProps: function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    { onPress: n, onPressStart: r, ...o } = j;
                  return {
                    ...(0, p.d)(o, { isDisabled: m }, e),
                    ref: (0, d.l)(t, T),
                  };
                },
              };
            })(n),
            [l, m] = f.Children.toArray(t);
          return (0, h.jsx)(r.K, {
            value: s,
            children: (0, h.jsxs)(g.j, {
              ...s.getPopoverProps(),
              children: [l, m],
            }),
          });
        };
      m.displayName = 'NextUI.Dropdown';
      var v = m;
    },
    72330: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return tJ;
        },
      });
      var r = n(82962),
        o = n(70480),
        i = n(27546),
        a = n(55971),
        s = n(57437);
      function l(e) {
        let { isSelected: t, disableAnimation: n, ...r } = e;
        return (0, s.jsx)('svg', {
          'aria-hidden': 'true',
          'data-selected': t,
          role: 'presentation',
          viewBox: '0 0 17 18',
          ...r,
          children: (0, s.jsx)('polyline', {
            fill: 'none',
            points: '1 9 7 14 15 4',
            stroke: 'currentColor',
            strokeDasharray: 22,
            strokeDashoffset: t ? 44 : 66,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 1.5,
            style: n ? {} : { transition: 'stroke-dashoffset 200ms ease' },
          }),
        });
      }
      var u = n(2265),
        c = n(28120),
        d = n(12094),
        f = n(25829),
        p = n(36222),
        g = n(65263),
        h = n(53640),
        m = n(60357),
        v = n(277);
      function y(e) {
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
      function b(e) {
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
      function x(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let w = x(function () {
          return b(/^Mac/i);
        }),
        k = x(function () {
          return b(/^iPhone/i);
        }),
        S = x(function () {
          return b(/^iPad/i) || (w() && navigator.maxTouchPoints > 1);
        }),
        P = x(function () {
          return k() || S();
        }),
        E = x(function () {
          return w() || P();
        }),
        L = x(function () {
          return y(/AppleWebKit/i) && !T();
        }),
        T = x(function () {
          return y(/Chrome/i);
        }),
        C = x(function () {
          return y(/Android/i);
        }),
        N = x(function () {
          return y(/Firefox/i);
        });
      function O(e) {
        return E() ? e.altKey : e.ctrlKey;
      }
      function R(e) {
        return w() ? e.metaKey : e.ctrlKey;
      }
      var j = n(54887);
      let K = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        M = (e) =>
          e && 'window' in e && e.window === e ? e : K(e).defaultView || window,
        I = [
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
        A =
          I.join(':not([hidden]),') +
          ',[tabindex]:not([disabled]):not([hidden])';
      I.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let D = I.join(':not([hidden]):not([tabindex="-1"]),');
      class F {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new _({ scopeRef: e });
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
          let n = new F();
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
            (this.root = new _({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class _ {
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
      new F();
      let $ = new Map(),
        B = new Set();
      function U() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let r = $.get(n.target);
          if (
            r &&
            (r.delete(n.propertyName),
            0 === r.size &&
              (n.target.removeEventListener('transitioncancel', t),
              $.delete(n.target)),
            0 === $.size)
          ) {
            for (let e of B) e();
            B.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let r = $.get(n.target);
          r ||
            ((r = new Set()),
            $.set(n.target, r),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            r.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function z(e) {
        if (
          (function () {
            if (null == W) {
              W = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (W = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return W;
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
          ? U()
          : document.addEventListener('DOMContentLoaded', U));
      let W = null;
      function H(e) {
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
      function V(e) {
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
      function G(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let q = G(function () {
          return V(/^Mac/i);
        }),
        Y = G(function () {
          return V(/^iPhone/i);
        }),
        J = G(function () {
          return V(/^iPad/i) || (q() && navigator.maxTouchPoints > 1);
        }),
        X = G(function () {
          return Y() || J();
        });
      G(function () {
        return q() || X();
      }),
        G(function () {
          return H(/AppleWebKit/i) && !Z();
        });
      let Z = G(function () {
          return H(/Chrome/i);
        }),
        Q = G(function () {
          return H(/Android/i);
        });
      G(function () {
        return H(/Firefox/i);
      });
      let ee = null,
        et = new Set(),
        en = new Map(),
        er = !1,
        eo = !1;
      function ei(e, t) {
        for (let n of et) n(e, t);
      }
      function ea(e) {
        (er = !0),
          e.metaKey ||
            (!q() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((ee = 'keyboard'), ei('keyboard', e));
      }
      function es(e) {
        (ee = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((er = !0), ei('pointer', e));
      }
      function el(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (Q() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((er = !0), (ee = 'virtual'));
      }
      function eu(e) {
        e.target !== window &&
          e.target !== document &&
          (er || eo || ((ee = 'virtual'), ei('virtual', e)),
          (er = !1),
          (eo = !1));
      }
      function ec() {
        (er = !1), (eo = !0);
      }
      function ed(e) {
        if ('undefined' == typeof window || en.get(M(e))) return;
        let t = M(e),
          n = K(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (er = !0), r.apply(this, arguments);
        }),
          n.addEventListener('keydown', ea, !0),
          n.addEventListener('keyup', ea, !0),
          n.addEventListener('click', el, !0),
          t.addEventListener('focus', eu, !0),
          t.addEventListener('blur', ec, !1),
          'undefined' != typeof PointerEvent
            ? (n.addEventListener('pointerdown', es, !0),
              n.addEventListener('pointermove', es, !0),
              n.addEventListener('pointerup', es, !0))
            : (n.addEventListener('mousedown', es, !0),
              n.addEventListener('mousemove', es, !0),
              n.addEventListener('mouseup', es, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              ef(e);
            },
            { once: !0 },
          ),
          en.set(t, { focus: r });
      }
      let ef = (e, t) => {
        let n = M(e),
          r = K(e);
        t && r.removeEventListener('DOMContentLoaded', t),
          en.has(n) &&
            ((n.HTMLElement.prototype.focus = en.get(n).focus),
            r.removeEventListener('keydown', ea, !0),
            r.removeEventListener('keyup', ea, !0),
            r.removeEventListener('click', el, !0),
            n.removeEventListener('focus', eu, !0),
            n.removeEventListener('blur', ec, !1),
            'undefined' != typeof PointerEvent
              ? (r.removeEventListener('pointerdown', es, !0),
                r.removeEventListener('pointermove', es, !0),
                r.removeEventListener('pointerup', es, !0))
              : (r.removeEventListener('mousedown', es, !0),
                r.removeEventListener('mousemove', es, !0),
                r.removeEventListener('mouseup', es, !0)),
            en.delete(n));
      };
      function ep(e) {
        let t = K(e);
        if ('virtual' === ee) {
          var n;
          let r = t.activeElement;
          (n = () => {
            t.activeElement === r && e.isConnected && z(e);
          }),
            requestAnimationFrame(() => {
              0 === $.size ? n() : B.add(n);
            });
        } else z(e);
      }
      function eg(e) {
        if (
          (function () {
            if (null == eh) {
              eh = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (eh = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return eh;
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
        (function (e) {
          let t;
          let n = K(void 0);
          'loading' !== n.readyState
            ? ed(void 0)
            : ((t = () => {
                ed(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => ef(e, t);
        })();
      let eh = null,
        em = (0, u.createContext)({
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
            })(e, (e) => ey(e, t));
          },
          useHref: (e) => e,
        });
      function ev() {
        return (0, u.useContext)(em);
      }
      function ey(e, t, n = !0) {
        var r, o;
        let { metaKey: i, ctrlKey: a, altKey: s, shiftKey: l } = t;
        N() &&
          (null === (o = window.event) || void 0 === o
            ? void 0
            : null === (r = o.type) || void 0 === r
              ? void 0
              : r.startsWith('key')) &&
          '_blank' === e.target &&
          (w() ? (i = !0) : (a = !0));
        let u =
          L() && w() && !S()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: i,
                ctrlKey: a,
                altKey: s,
                shiftKey: l,
              })
            : new MouseEvent('click', {
                metaKey: i,
                ctrlKey: a,
                altKey: s,
                shiftKey: l,
                bubbles: !0,
                cancelable: !0,
              });
        (ey.isOpening = n), eg(e), e.dispatchEvent(u), (ey.isOpening = !1);
      }
      ey.isOpening = !1;
      let eb = 'undefined' != typeof document ? u.useLayoutEffect : () => {};
      function ex(e) {
        let t = (0, u.useRef)(null);
        return (
          eb(() => {
            t.current = e;
          }, [e]),
          (0, u.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      function ew(e, t) {
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
      function ek(e, t) {
        let n = eS(e, t, 'left'),
          r = eS(e, t, 'top'),
          o = t.offsetWidth,
          i = t.offsetHeight,
          a = e.scrollLeft,
          s = e.scrollTop,
          { borderTopWidth: l, borderLeftWidth: u } = getComputedStyle(e),
          c = e.scrollLeft + parseInt(u, 10),
          d = e.scrollTop + parseInt(l, 10),
          f = c + e.clientWidth,
          p = d + e.clientHeight;
        n <= a ? (a = n - parseInt(u, 10)) : n + o > f && (a += n + o - f),
          r <= d ? (s = r - parseInt(l, 10)) : r + i > p && (s += r + i - p),
          (e.scrollLeft = a),
          (e.scrollTop = s);
      }
      function eS(e, t, n) {
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
      function eP(e, t) {
        if (document.contains(e)) {
          let a = document.scrollingElement || document.documentElement;
          if ('hidden' === window.getComputedStyle(a).overflow)
            for (let t of (function (e, t) {
              let n = [];
              for (; e && e !== document.documentElement; )
                ew(e, void 0) && n.push(e), (e = e.parentElement);
              return n;
            })(e))
              ek(t, e);
          else {
            var n, r, o, i;
            let { left: a, top: s } = e.getBoundingClientRect();
            null == e ||
              null === (n = e.scrollIntoView) ||
              void 0 === n ||
              n.call(e, { block: 'nearest' });
            let { left: l, top: u } = e.getBoundingClientRect();
            (Math.abs(a - l) > 1 || Math.abs(s - u) > 1) &&
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
      function eE(...e) {
        return (...t) => {
          for (let n of e) 'function' == typeof n && n(...t);
        };
      }
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let eL = new Map();
      var eT = n(44839);
      function eC(...e) {
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
              ? (t[e] = eE(n, o))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof n &&
                  'string' == typeof o
                ? (t[e] = (0, eT.Z)(n, o))
                : 'id' === e && n && o
                  ? (t.id = (function (e, t) {
                      if (e === t) return e;
                      let n = eL.get(e);
                      if (n) return n(t), t;
                      let r = eL.get(t);
                      return r ? (r(e), e) : t;
                    })(n, o))
                  : (t[e] = void 0 !== o ? o : n);
          }
        }
        return t;
      }
      function eN(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          (C() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      let eO = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        eR = (e) =>
          e && 'window' in e && e.window === e
            ? e
            : eO(e).defaultView || window,
        ej = null,
        eK = new Set(),
        eM = new Map(),
        eI = !1,
        eA = !1;
      function eD(e, t) {
        for (let n of eK) n(e, t);
      }
      function eF(e) {
        (eI = !0),
          e.metaKey ||
            (!w() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((ej = 'keyboard'), eD('keyboard', e));
      }
      function e_(e) {
        (ej = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((eI = !0), eD('pointer', e));
      }
      function e$(e) {
        eN(e) && ((eI = !0), (ej = 'virtual'));
      }
      function eB(e) {
        e.target !== window &&
          e.target !== document &&
          (eI || eA || ((ej = 'virtual'), eD('virtual', e)),
          (eI = !1),
          (eA = !1));
      }
      function eU() {
        (eI = !1), (eA = !0);
      }
      function ez(e) {
        if ('undefined' == typeof window || eM.get(eR(e))) return;
        let t = eR(e),
          n = eO(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (eI = !0), r.apply(this, arguments);
        }),
          n.addEventListener('keydown', eF, !0),
          n.addEventListener('keyup', eF, !0),
          n.addEventListener('click', e$, !0),
          t.addEventListener('focus', eB, !0),
          t.addEventListener('blur', eU, !1),
          'undefined' != typeof PointerEvent
            ? (n.addEventListener('pointerdown', e_, !0),
              n.addEventListener('pointermove', e_, !0),
              n.addEventListener('pointerup', e_, !0))
            : (n.addEventListener('mousedown', e_, !0),
              n.addEventListener('mousemove', e_, !0),
              n.addEventListener('mouseup', e_, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              eW(e);
            },
            { once: !0 },
          ),
          eM.set(t, { focus: r });
      }
      let eW = (e, t) => {
        let n = eR(e),
          r = eO(e);
        t && r.removeEventListener('DOMContentLoaded', t),
          eM.has(n) &&
            ((n.HTMLElement.prototype.focus = eM.get(n).focus),
            r.removeEventListener('keydown', eF, !0),
            r.removeEventListener('keyup', eF, !0),
            r.removeEventListener('click', e$, !0),
            n.removeEventListener('focus', eB, !0),
            n.removeEventListener('blur', eU, !1),
            'undefined' != typeof PointerEvent
              ? (r.removeEventListener('pointerdown', e_, !0),
                r.removeEventListener('pointermove', e_, !0),
                r.removeEventListener('pointerup', e_, !0))
              : (r.removeEventListener('mousedown', e_, !0),
                r.removeEventListener('mousemove', e_, !0),
                r.removeEventListener('mouseup', e_, !0)),
            eM.delete(n));
      };
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let n = eO(void 0);
          'loading' !== n.readyState
            ? ez(void 0)
            : ((t = () => {
                ez(void 0);
              }),
              n.addEventListener('DOMContentLoaded', t)),
            () => eW(e, t);
        })();
      let eH = new Set([
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
        eV = new Set([
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
      var eG = n(73165);
      let eq = Symbol.for('react-aria.i18n.locale');
      function eY() {
        let e =
          ('undefined' != typeof window && window[eq]) ||
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
              if (t.script) return eH.has(t.script);
            }
            let t = e.split('-')[0];
            return eV.has(t);
          })(e)
            ? 'ltr'
            : 'rtl',
        };
      }
      let eJ = eY(),
        eX = new Set();
      function eZ() {
        for (let e of ((eJ = eY()), eX)) e(eJ);
      }
      let eQ = u.createContext(null);
      function e0() {
        let e = (function () {
          let e = (0, eG.Av)(),
            [t, n] = (0, u.useState)(eJ);
          return ((0, u.useEffect)(
            () => (
              0 === eX.size && window.addEventListener('languagechange', eZ),
              eX.add(n),
              () => {
                eX.delete(n),
                  0 === eX.size &&
                    window.removeEventListener('languagechange', eZ);
              }
            ),
            [],
          ),
          e)
            ? { locale: 'en-US', direction: 'ltr' }
            : t;
        })();
        return (0, u.useContext)(eQ) || e;
      }
      class e1 {
        isDisabled(e) {
          var t;
          return (
            'all' === this.disabledBehavior &&
            ((null === (t = e.props) || void 0 === t ? void 0 : t.isDisabled) ||
              this.disabledKeys.has(e.key))
          );
        }
        getNextKey(e) {
          for (e = this.collection.getKeyAfter(e); null != e; ) {
            let t = this.collection.getItem(e);
            if ('item' === t.type && !this.isDisabled(t)) return e;
            e = this.collection.getKeyAfter(e);
          }
          return null;
        }
        getPreviousKey(e) {
          for (e = this.collection.getKeyBefore(e); null != e; ) {
            let t = this.collection.getItem(e);
            if ('item' === t.type && !this.isDisabled(t)) return e;
            e = this.collection.getKeyBefore(e);
          }
          return null;
        }
        findKey(e, t, n) {
          let r = this.getItem(e);
          if (!r) return null;
          let o = r.getBoundingClientRect();
          do (e = t(e)), (r = this.getItem(e));
          while (r && n(o, r.getBoundingClientRect()));
          return e;
        }
        isSameRow(e, t) {
          return e.top === t.top || e.left !== t.left;
        }
        isSameColumn(e, t) {
          return e.left === t.left || e.top !== t.top;
        }
        getKeyBelow(e) {
          return 'grid' === this.layout && 'vertical' === this.orientation
            ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow)
            : this.getNextKey(e);
        }
        getKeyAbove(e) {
          return 'grid' === this.layout && 'vertical' === this.orientation
            ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow)
            : this.getPreviousKey(e);
        }
        getNextColumn(e, t) {
          return t ? this.getPreviousKey(e) : this.getNextKey(e);
        }
        getKeyRightOf(e) {
          return 'grid' === this.layout
            ? 'vertical' === this.orientation
              ? this.getNextColumn(e, 'rtl' === this.direction)
              : this.findKey(
                  e,
                  (e) => this.getNextColumn(e, 'rtl' === this.direction),
                  this.isSameColumn,
                )
            : 'horizontal' === this.orientation
              ? this.getNextColumn(e, 'rtl' === this.direction)
              : null;
        }
        getKeyLeftOf(e) {
          return 'grid' === this.layout
            ? 'vertical' === this.orientation
              ? this.getNextColumn(e, 'ltr' === this.direction)
              : this.findKey(
                  e,
                  (e) => this.getNextColumn(e, 'ltr' === this.direction),
                  this.isSameColumn,
                )
            : 'horizontal' === this.orientation
              ? this.getNextColumn(e, 'ltr' === this.direction)
              : null;
        }
        getFirstKey() {
          let e = this.collection.getFirstKey();
          for (; null != e; ) {
            let t = this.collection.getItem(e);
            if ((null == t ? void 0 : t.type) === 'item' && !this.isDisabled(t))
              return e;
            e = this.collection.getKeyAfter(e);
          }
          return null;
        }
        getLastKey() {
          let e = this.collection.getLastKey();
          for (; null != e; ) {
            let t = this.collection.getItem(e);
            if ('item' === t.type && !this.isDisabled(t)) return e;
            e = this.collection.getKeyBefore(e);
          }
          return null;
        }
        getItem(e) {
          return null !== e
            ? this.ref.current.querySelector(
                `[data-key="${CSS.escape(e.toString())}"]`,
              )
            : null;
        }
        getKeyPageAbove(e) {
          let t = this.ref.current,
            n = this.getItem(e);
          if (!n) return null;
          if (!ew(t)) return this.getFirstKey();
          let r = t.getBoundingClientRect(),
            o = n.getBoundingClientRect();
          if ('horizontal' === this.orientation) {
            let i = r.x - t.scrollLeft,
              a = Math.max(0, o.x - i + o.width - r.width);
            for (; n && o.x - i > a; )
              o =
                null ==
                (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e))
                  ? void 0
                  : n.getBoundingClientRect();
          } else {
            let i = r.y - t.scrollTop,
              a = Math.max(0, o.y - i + o.height - r.height);
            for (; n && o.y - i > a; )
              o =
                null ==
                (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e))
                  ? void 0
                  : n.getBoundingClientRect();
          }
          return null != e ? e : this.getFirstKey();
        }
        getKeyPageBelow(e) {
          let t = this.ref.current,
            n = this.getItem(e);
          if (!n) return null;
          if (!ew(t)) return this.getLastKey();
          let r = t.getBoundingClientRect(),
            o = n.getBoundingClientRect();
          if ('horizontal' === this.orientation) {
            let i = r.x - t.scrollLeft,
              a = Math.min(t.scrollWidth, o.x - i - o.width + r.width);
            for (; n && o.x - i < a; )
              o =
                null ==
                (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e))
                  ? void 0
                  : n.getBoundingClientRect();
          } else {
            let i = r.y - t.scrollTop,
              a = Math.min(t.scrollHeight, o.y - i - o.height + r.height);
            for (; n && o.y - i < a; )
              o =
                null ==
                (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e))
                  ? void 0
                  : n.getBoundingClientRect();
          }
          return null != e ? e : this.getLastKey();
        }
        getKeyForSearch(e, t) {
          if (!this.collator) return null;
          let n = this.collection,
            r = t || this.getFirstKey();
          for (; null != r; ) {
            let t = n.getItem(r),
              o = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(o, e)) return r;
            r = this.getKeyBelow(r);
          }
          return null;
        }
        constructor(...e) {
          if (1 === e.length) {
            let t = e[0];
            (this.collection = t.collection),
              (this.ref = t.ref),
              (this.collator = t.collator),
              (this.disabledKeys = t.disabledKeys || new Set()),
              (this.disabledBehavior = t.disabledBehavior || 'all'),
              (this.orientation = t.orientation),
              (this.direction = t.direction),
              (this.layout = t.layout || 'stack');
          } else
            (this.collection = e[0]),
              (this.disabledKeys = e[1]),
              (this.ref = e[2]),
              (this.collator = e[3]),
              (this.layout = 'stack'),
              (this.orientation = 'vertical'),
              (this.disabledBehavior = 'all');
          'stack' === this.layout &&
            'vertical' === this.orientation &&
            ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
        }
      }
      let e2 = new Map();
      var e5 = new WeakMap(),
        e3 = n(22171),
        e4 = n(80612),
        e6 = n(5722);
      let e8 = new WeakMap();
      var e9 = n(98647),
        e7 = n(83892),
        te = n(95729);
      function tt(e) {
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
      var tn = n(45668),
        tr = n(73070);
      let to = new Map(),
        ti = new Set();
      function ta() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (n) => {
          if (!e(n) || !n.target) return;
          let r = to.get(n.target);
          if (
            r &&
            (r.delete(n.propertyName),
            0 === r.size &&
              (n.target.removeEventListener('transitioncancel', t),
              to.delete(n.target)),
            0 === to.size)
          ) {
            for (let e of ti) e();
            ti.clear();
          }
        };
        document.body.addEventListener('transitionrun', (n) => {
          if (!e(n) || !n.target) return;
          let r = to.get(n.target);
          r ||
            ((r = new Set()),
            to.set(n.target, r),
            n.target.addEventListener('transitioncancel', t, { once: !0 })),
            r.add(n.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? ta()
          : document.addEventListener('DOMContentLoaded', ta));
      let ts = 'default',
        tl = '',
        tu = new WeakMap();
      function tc(e) {
        if (P()) {
          if ('default' === ts) {
            let t = eO(e);
            (tl = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          ts = 'disabled';
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (tu.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
      }
      function td(e) {
        if (P())
          'disabled' === ts &&
            ((ts = 'restoring'),
            setTimeout(() => {
              var t;
              (t = () => {
                if ('restoring' === ts) {
                  let t = eO(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = tl || ''),
                    (tl = ''),
                    (ts = 'default');
                }
              }),
                requestAnimationFrame(() => {
                  0 === to.size ? t() : ti.add(t);
                });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          tu.has(e)
        ) {
          let t = tu.get(e);
          'none' === e.style.userSelect && (e.style.userSelect = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            tu.delete(e);
        }
      }
      let tf = u.createContext({ register: () => {} });
      tf.displayName = 'PressResponderContext';
      var tp = n(52396),
        tg = n(49994),
        th = n(93936);
      function tm() {
        let e = (0, u.useRef)(new Map()),
          t = (0, u.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once)
              ? (...t) => {
                  e.current.delete(r), r(...t);
                }
              : r;
            e.current.set(r, { type: n, eventTarget: t, fn: i, options: o }),
              t.addEventListener(n, r, o);
          }, []),
          n = (0, u.useCallback)((t, n, r, o) => {
            var i;
            let a =
              (null === (i = e.current.get(r)) || void 0 === i
                ? void 0
                : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r);
          }, []),
          r = (0, u.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options);
            });
          }, [n]);
        return (
          (0, u.useEffect)(() => r, [r]),
          {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r,
          }
        );
      }
      var tv = new WeakMap();
      class ty {
        continuePropagation() {
          (0, th._)(this, tv, !1);
        }
        get shouldStopPropagation() {
          return (0, tp._)(this, tv);
        }
        constructor(e, t, n, r) {
          var o;
          (0, tg._)(this, tv, { writable: !0, value: void 0 }),
            (0, th._)(this, tv, !0);
          let i =
              null !== (o = null == r ? void 0 : r.target) && void 0 !== o
                ? o
                : n.currentTarget,
            a = null == i ? void 0 : i.getBoundingClientRect(),
            s,
            l = 0,
            u,
            c = null;
          null != n.clientX &&
            null != n.clientY &&
            ((u = n.clientX), (c = n.clientY)),
            a &&
              (null != u && null != c
                ? ((s = u - a.left), (l = c - a.top))
                : ((s = a.width / 2), (l = a.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = s),
            (this.y = l);
        }
      }
      let tb = Symbol('linkClicked');
      function tx(e) {
        let {
            onPress: t,
            onPressChange: n,
            onPressStart: r,
            onPressEnd: o,
            onPressUp: i,
            isDisabled: a,
            isPressed: s,
            preventFocusOnPress: l,
            shouldCancelOnPointerExit: c,
            allowTextSelectionOnPress: d,
            ref: f,
            ...p
          } = (function (e) {
            var t;
            let n = (0, u.useContext)(tf);
            if (n) {
              let { register: t, ...r } = n;
              (e = eC(r, e)), t();
            }
            return (
              (t = e.ref),
              eb(() => {
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
          [g, h] = (0, u.useState)(!1),
          m = (0, u.useRef)({
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
          { addGlobalListener: v, removeAllGlobalListeners: y } = tm(),
          b = ex((e, t) => {
            let o = m.current;
            if (a || o.didFirePressStart) return !1;
            let i = !0;
            if (((o.isTriggeringEvent = !0), r)) {
              let n = new ty('pressstart', t, e);
              r(n), (i = n.shouldStopPropagation);
            }
            return (
              n && n(!0),
              (o.isTriggeringEvent = !1),
              (o.didFirePressStart = !0),
              h(!0),
              i
            );
          }),
          x = ex((e, r, i = !0) => {
            let s = m.current;
            if (!s.didFirePressStart) return !1;
            (s.ignoreClickAfterPress = !0),
              (s.didFirePressStart = !1),
              (s.isTriggeringEvent = !0);
            let l = !0;
            if (o) {
              let t = new ty('pressend', r, e);
              o(t), (l = t.shouldStopPropagation);
            }
            if ((n && n(!1), h(!1), t && i && !a)) {
              let n = new ty('press', r, e);
              t(n), l && (l = n.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), l;
          }),
          k = ex((e, t) => {
            let n = m.current;
            if (a) return !1;
            if (i) {
              n.isTriggeringEvent = !0;
              let r = new ty('pressup', t, e);
              return i(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
          }),
          S = ex((e) => {
            let t = m.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                x(tE(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              y(),
              d || td(t.target));
          }),
          P = ex((e) => {
            c && S(e);
          }),
          E = (0, u.useMemo)(() => {
            let e = m.current,
              t = {
                onKeyDown(t) {
                  if (
                    tk(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var r;
                    tC(t.target, t.key) && t.preventDefault();
                    let o = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (o = b(t, 'keyboard'));
                      let r = t.currentTarget;
                      v(
                        eO(t.currentTarget),
                        'keyup',
                        eE((t) => {
                          tk(t, r) &&
                            !t.repeat &&
                            r.contains(t.target) &&
                            e.target &&
                            k(tE(e.target, t), 'keyboard');
                        }, n),
                        !0,
                      );
                    }
                    o && t.stopPropagation(),
                      t.metaKey &&
                        w() &&
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
                    !ey.isOpening
                  ) {
                    let n = !0;
                    if (
                      (a && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType || eN(t.nativeEvent)))
                    ) {
                      a || l || eg(t.currentTarget);
                      let e = b(t, 'virtual'),
                        r = k(t, 'virtual'),
                        o = x(t, 'virtual');
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
                if (e.isPressed && e.target && tk(t, e.target)) {
                  tC(t.target, t.key) && t.preventDefault();
                  let n = t.target;
                  x(tE(e.target, t), 'keyboard', e.target.contains(n)),
                    y(),
                    'Enter' !== t.key &&
                      tw(e.target) &&
                      e.target.contains(n) &&
                      !t[tb] &&
                      ((t[tb] = !0), ey(e.target, t, !1)),
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
                var i;
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if (
                  ((i = t.nativeEvent),
                  (!C() && 0 === i.width && 0 === i.height) ||
                    (1 === i.width &&
                      1 === i.height &&
                      0 === i.pressure &&
                      0 === i.detail &&
                      'mouse' === i.pointerType))
                ) {
                  e.pointerType = 'virtual';
                  return;
                }
                tT(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let s = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  a || l || eg(t.currentTarget),
                  d || tc(e.target),
                  (s = b(t, e.pointerType)),
                  v(eO(t.currentTarget), 'pointermove', n, !1),
                  v(eO(t.currentTarget), 'pointerup', r, !1),
                  v(eO(t.currentTarget), 'pointercancel', o, !1)),
                  s && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (tT(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    tL(t, t.currentTarget) &&
                    k(t, e.pointerType || t.pointerType);
                });
              let n = (t) => {
                  t.pointerId === e.activePointerId &&
                    (e.target && tL(t, e.target)
                      ? e.isOverTarget ||
                        null == e.pointerType ||
                        ((e.isOverTarget = !0),
                        b(tE(e.target, t), e.pointerType))
                      : e.target &&
                        e.isOverTarget &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        x(tE(e.target, t), e.pointerType, !1),
                        P(t)));
                },
                r = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (tL(t, e.target) && null != e.pointerType
                      ? x(tE(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        x(tE(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    y(),
                    d || td(e.target));
                },
                o = (e) => {
                  S(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && S(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (tT(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = eN(t.nativeEvent) ? 'virtual' : 'mouse'),
                    a || l || eg(t.currentTarget),
                    b(t, e.pointerType) && t.stopPropagation(),
                    v(eO(t.currentTarget), 'mouseup', n, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (n = b(t, e.pointerType))),
                    n && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let n = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (n = x(t, e.pointerType, !1)),
                    P(t)),
                    n && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    k(t, e.pointerType || 'mouse');
                });
              let n = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), y(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && tL(t, e.target) && null != e.pointerType
                    ? x(tE(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      x(tE(e.target, t), e.pointerType, !1),
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
                  a || l || eg(t.currentTarget),
                  d || tc(e.target),
                  b(tP(e.target, t), e.pointerType) && t.stopPropagation(),
                  v(eR(t.currentTarget), 'scroll', r, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = tS(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && tL(n, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0),
                      (r = b(tP(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (r = x(tP(e.target, t), e.pointerType, !1)),
                      P(tP(e.target, t))),
                    r && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let n = tS(t.nativeEvent, e.activePointerId),
                    r = !0;
                  n && tL(n, t.currentTarget) && null != e.pointerType
                    ? (k(tP(e.target, t), e.pointerType),
                      (r = x(tP(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (r = x(tP(e.target, t), e.pointerType, !1)),
                    r && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !d && td(e.target),
                    y();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && S(tP(e.target, t)));
                });
              let r = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  S({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && S(e);
              };
            }
            return t;
          }, [v, a, l, y, d, S, P, x, b, k]);
        return (
          (0, u.useEffect)(
            () => () => {
              var e;
              d ||
                td(
                  null !== (e = m.current.target) && void 0 !== e ? e : void 0,
                );
            },
            [d],
          ),
          { isPressed: s || g, pressProps: eC(p, E) }
        );
      }
      function tw(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function tk(e, t) {
        let { key: n, code: r } = e,
          o = t.getAttribute('role');
        return (
          ('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === r) &&
          !(
            (t instanceof eR(t).HTMLInputElement && !tO(t, n)) ||
            t instanceof eR(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === o || (!o && tw(t))) && 'Enter' !== n)
        );
      }
      function tS(e, t) {
        let n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if (r.identifier === t) return r;
        }
        return null;
      }
      function tP(e, t) {
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
      function tE(e, t) {
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
      function tL(e, t) {
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
      function tT(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
      }
      function tC(e, t) {
        return e instanceof HTMLInputElement
          ? !tO(e, t)
          : e instanceof HTMLButtonElement
            ? 'submit' !== e.type && 'reset' !== e.type
            : !tw(e);
      }
      let tN = new Set([
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
      function tO(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type
          ? ' ' === t
          : tN.has(e.type);
      }
      let tR = 0,
        tj = new Map();
      function tK() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === 'Enter';
      }
      function tM() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === ' ' ||
          (null == e ? void 0 : e.code) === 'Space'
        );
      }
      var tI = n(98347),
        tA = n(75300),
        tD = (0, a.Gp)((e, t) => {
          let {
              Component: n,
              slots: r,
              classNames: o,
              rendered: i,
              shortcut: y,
              description: b,
              isSelectable: x,
              isSelected: w,
              isDisabled: k,
              selectedIcon: S,
              startContent: P,
              endContent: E,
              disableAnimation: L,
              hideSelectedIcon: T,
              getItemProps: C,
              getLabelProps: N,
              getDescriptionProps: j,
              getKeyboardShortcutProps: K,
              getSelectedIconProps: M,
            } = (function (e) {
              var t, n;
              let r = (0, d.w)(),
                [o, i] = (0, a.oe)(e, c.D9.variantKeys),
                {
                  as: s,
                  item: l,
                  state: y,
                  shortcut: b,
                  description: x,
                  startContent: w,
                  endContent: k,
                  isVirtualized: S,
                  selectedIcon: P,
                  className: E,
                  classNames: L,
                  onAction: T,
                  autoFocus: C,
                  onClick: N,
                  onPress: j,
                  onPressStart: K,
                  onPressUp: M,
                  onPressEnd: I,
                  onPressChange: A,
                  hideSelectedIcon: D = !1,
                  isReadOnly: F = !1,
                  closeOnSelect: _,
                  onClose: $,
                  ...B
                } = o,
                U =
                  null !=
                    (n =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == r
                          ? void 0
                          : r.disableAnimation) && n,
                z = (0, u.useRef)(null),
                W = s || ((null == B ? void 0 : B.href) ? 'a' : 'li'),
                H = 'string' == typeof W,
                { rendered: V, key: G } = l,
                q = y.disabledKeys.has(G) || e.isDisabled,
                Y = 'none' !== y.selectionManager.selectionMode,
                J = (0, tI.d)(),
                { isFocusVisible: X, focusProps: Z } = (0, f.F)({
                  autoFocus: C,
                }),
                {
                  isHovered: Q,
                  isPressed: ee,
                  isFocused: et,
                  isSelected: en,
                  menuItemProps: er,
                  labelProps: eo,
                  descriptionProps: ei,
                  keyboardShortcutProps: ea,
                } = (function (e, t, n) {
                  var r, o, i;
                  let {
                      key: a,
                      closeOnSelect: s,
                      isVirtualized: l,
                      'aria-haspopup': c,
                      onPressStart: d,
                      onPressUp: f,
                      onPress: p,
                      onPressChange: g,
                      onPressEnd: h,
                      onHoverStart: y,
                      onHoverChange: b,
                      onHoverEnd: x,
                      onKeyDown: w,
                      onKeyUp: k,
                      onFocus: S,
                      onFocusChange: P,
                      onBlur: E,
                      onClick: L,
                    } = e,
                    T = !!c,
                    C =
                      null != (r = e.isDisabled)
                        ? r
                        : t.selectionManager.isDisabled(a),
                    N =
                      null != (o = e.isSelected)
                        ? o
                        : t.selectionManager.isSelected(a),
                    j = e5.get(t),
                    K = t.collection.getItem(a),
                    M = e.onClose || j.onClose,
                    I = (0, e3.tv)(),
                    A = (t) => {
                      var n;
                      !T &&
                        ((null == (n = null == K ? void 0 : K.props)
                          ? void 0
                          : n.onAction) && K.props.onAction(),
                        e.onAction
                          ? e.onAction(a)
                          : j.onAction && j.onAction(a),
                        t.target instanceof HTMLAnchorElement &&
                          I.open(
                            t.target,
                            t,
                            K.props.href,
                            K.props.routerOptions,
                          ));
                    },
                    D = 'menuitem';
                  T ||
                    ('single' === t.selectionManager.selectionMode
                      ? (D = 'menuitemradio')
                      : 'multiple' !== t.selectionManager.selectionMode ||
                        (D = 'menuitemcheckbox'));
                  let F = (0, e4.mp)(),
                    _ = (0, e4.mp)(),
                    $ = (0, e4.mp)(),
                    B = {
                      'aria-disabled': C || void 0,
                      role: D,
                      'aria-label': e['aria-label'],
                      'aria-labelledby': F,
                      'aria-describedby':
                        [_, $].filter(Boolean).join(' ') || void 0,
                      'aria-controls': e['aria-controls'],
                      'aria-haspopup': c,
                      'aria-expanded': e['aria-expanded'],
                    };
                  'none' === t.selectionManager.selectionMode ||
                    T ||
                    (B['aria-checked'] = N),
                    l &&
                      ((B['aria-posinset'] = null == K ? void 0 : K.index),
                      (B['aria-setsize'] = (function (e) {
                        let t = e8.get(e);
                        if (null != t) return t;
                        t = 0;
                        let n = (r) => {
                          for (let o of r)
                            'section' === o.type
                              ? n(
                                  'function' == typeof e.getChildren
                                    ? e.getChildren(o.key)
                                    : o.childNodes,
                                )
                              : t++;
                        };
                        return n(e), e8.set(e, t), t;
                      })(t.collection)));
                  let { itemProps: U, isFocused: z } = (function (e) {
                      let {
                          selectionManager: t,
                          key: n,
                          ref: r,
                          shouldSelectOnPressUp: o,
                          shouldUseVirtualFocus: i,
                          focus: a,
                          isDisabled: s,
                          onAction: l,
                          allowsDifferentPressOrigin: c,
                          linkBehavior: d = 'action',
                        } = e,
                        f = ev(),
                        p = (e) => {
                          if ('keyboard' === e.pointerType && O(e))
                            t.toggleSelection(n);
                          else {
                            if ('none' === t.selectionMode) return;
                            if (t.isLink(n)) {
                              if ('selection' === d) {
                                let o = t.getItemProps(n);
                                f.open(r.current, e, o.href, o.routerOptions),
                                  t.setSelectedKeys(t.selectedKeys);
                                return;
                              }
                              if ('override' === d || 'none' === d) return;
                            }
                            'single' === t.selectionMode
                              ? t.isSelected(n) && !t.disallowEmptySelection
                                ? t.toggleSelection(n)
                                : t.replaceSelection(n)
                              : e && e.shiftKey
                                ? t.extendSelection(n)
                                : 'toggle' === t.selectionBehavior ||
                                    (e &&
                                      (R(e) ||
                                        'touch' === e.pointerType ||
                                        'virtual' === e.pointerType))
                                  ? t.toggleSelection(n)
                                  : t.replaceSelection(n);
                          }
                        };
                      (0, u.useEffect)(() => {
                        n === t.focusedKey &&
                          t.isFocused &&
                          !i &&
                          (a
                            ? a()
                            : document.activeElement !== r.current &&
                              ep(r.current));
                      }, [
                        r,
                        n,
                        t.focusedKey,
                        t.childFocusStrategy,
                        t.isFocused,
                        i,
                      ]),
                        (s = s || t.isDisabled(n));
                      let g = {};
                      i || s
                        ? s &&
                          (g.onMouseDown = (e) => {
                            e.preventDefault();
                          })
                        : (g = {
                            tabIndex: n === t.focusedKey ? 0 : -1,
                            onFocus(e) {
                              e.target === r.current && t.setFocusedKey(n);
                            },
                          });
                      let h = t.isLink(n) && 'override' === d,
                        m = t.isLink(n) && 'selection' !== d && 'none' !== d,
                        v = !s && t.canSelectItem(n) && !h,
                        y = (l || m) && !s,
                        b =
                          y &&
                          ('replace' === t.selectionBehavior
                            ? !v
                            : !v || t.isEmpty),
                        x = y && v && 'replace' === t.selectionBehavior,
                        w = b || x,
                        k = (0, u.useRef)(null),
                        S = w && v,
                        P = (0, u.useRef)(!1),
                        E = (0, u.useRef)(!1),
                        L = (e) => {
                          if ((l && l(), m)) {
                            let o = t.getItemProps(n);
                            f.open(r.current, e, o.href, o.routerOptions);
                          }
                        },
                        T = {};
                      o
                        ? ((T.onPressStart = (e) => {
                            (k.current = e.pointerType),
                              (P.current = S),
                              'keyboard' === e.pointerType &&
                                (!w || tM()) &&
                                p(e);
                          }),
                          c
                            ? ((T.onPressUp = b
                                ? null
                                : (e) => {
                                    'keyboard' !== e.pointerType && v && p(e);
                                  }),
                              (T.onPress = b ? L : null))
                            : (T.onPress = (e) => {
                                b || (x && 'mouse' !== e.pointerType)
                                  ? ('keyboard' !== e.pointerType || tK()) &&
                                    L(e)
                                  : 'keyboard' !== e.pointerType && v && p(e);
                              }))
                        : ((T.onPressStart = (e) => {
                            (k.current = e.pointerType),
                              (P.current = S),
                              (E.current = b),
                              v &&
                                (('mouse' === e.pointerType && !b) ||
                                  ('keyboard' === e.pointerType &&
                                    (!y || tM()))) &&
                                p(e);
                          }),
                          (T.onPress = (e) => {
                            ('touch' === e.pointerType ||
                              'pen' === e.pointerType ||
                              'virtual' === e.pointerType ||
                              ('keyboard' === e.pointerType && w && tK()) ||
                              ('mouse' === e.pointerType && E.current)) &&
                              (w ? L(e) : v && p(e));
                          })),
                        (g['data-key'] = n),
                        (T.preventFocusOnPress = i);
                      let { pressProps: C, isPressed: N } = tx(T),
                        j = x
                          ? (e) => {
                              'mouse' === k.current &&
                                (e.stopPropagation(), e.preventDefault(), L(e));
                            }
                          : void 0,
                        { longPressProps: K } = (function (e) {
                          let {
                              isDisabled: t,
                              onLongPressStart: n,
                              onLongPressEnd: r,
                              onLongPress: o,
                              threshold: i = 500,
                              accessibilityDescription: a,
                            } = e,
                            s = (0, u.useRef)(void 0),
                            { addGlobalListener: l, removeGlobalListener: c } =
                              tm(),
                            { pressProps: d } = tx({
                              isDisabled: t,
                              onPressStart(e) {
                                if (
                                  (e.continuePropagation(),
                                  ('mouse' === e.pointerType ||
                                    'touch' === e.pointerType) &&
                                    (n && n({ ...e, type: 'longpressstart' }),
                                    (s.current = setTimeout(() => {
                                      e.target.dispatchEvent(
                                        new PointerEvent('pointercancel', {
                                          bubbles: !0,
                                        }),
                                      ),
                                        o && o({ ...e, type: 'longpress' }),
                                        (s.current = void 0);
                                    }, i)),
                                    'touch' === e.pointerType))
                                ) {
                                  let t = (e) => {
                                    e.preventDefault();
                                  };
                                  l(e.target, 'contextmenu', t, { once: !0 }),
                                    l(
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
                                s.current && clearTimeout(s.current),
                                  r &&
                                    ('mouse' === e.pointerType ||
                                      'touch' === e.pointerType) &&
                                    r({ ...e, type: 'longpressend' });
                              },
                            });
                          return {
                            longPressProps: eC(
                              d,
                              (function (e) {
                                let [t, n] = (0, u.useState)();
                                return (
                                  eb(() => {
                                    if (!e) return;
                                    let t = tj.get(e);
                                    if (t) n(t.element.id);
                                    else {
                                      let r = `react-aria-description-${tR++}`;
                                      n(r);
                                      let o = document.createElement('div');
                                      (o.id = r),
                                        (o.style.display = 'none'),
                                        (o.textContent = e),
                                        document.body.appendChild(o),
                                        (t = { refCount: 0, element: o }),
                                        tj.set(e, t);
                                    }
                                    return (
                                      t.refCount++,
                                      () => {
                                        t &&
                                          0 == --t.refCount &&
                                          (t.element.remove(), tj.delete(e));
                                      }
                                    );
                                  }, [e]),
                                  { 'aria-describedby': e ? t : void 0 }
                                );
                              })(o && !t ? a : void 0),
                            ),
                          };
                        })({
                          isDisabled: !S,
                          onLongPress(e) {
                            'touch' === e.pointerType &&
                              (p(e), t.setSelectionBehavior('toggle'));
                          },
                        });
                      return {
                        itemProps: eC(g, v || b ? C : {}, S ? K : {}, {
                          onDoubleClick: j,
                          onDragStartCapture: (e) => {
                            'touch' === k.current &&
                              P.current &&
                              e.preventDefault();
                          },
                          onClick: t.isLink(n)
                            ? (e) => {
                                ey.isOpening || e.preventDefault();
                              }
                            : void 0,
                        }),
                        isPressed: N,
                        isSelected: t.isSelected(n),
                        isFocused: t.isFocused && t.focusedKey === n,
                        isDisabled: s,
                        allowsSelection: v,
                        hasAction: w,
                      };
                    })({
                      selectionManager: t.selectionManager,
                      key: a,
                      ref: n,
                      shouldSelectOnPressUp: !0,
                      allowsDifferentPressOrigin: !0,
                      linkBehavior: 'none',
                    }),
                    { pressProps: W, isPressed: H } = (0, e9.r)({
                      onPressStart: (e) => {
                        'keyboard' === e.pointerType && A(e), null == d || d(e);
                      },
                      onPress: p,
                      onPressUp: (e) => {
                        'keyboard' !== e.pointerType &&
                          (setTimeout(() => {
                            A(e);
                          }),
                          !T &&
                            M &&
                            (null != s
                              ? s
                              : 'multiple' !==
                                  t.selectionManager.selectionMode ||
                                t.selectionManager.isLink(a)) &&
                            setTimeout(() => {
                              null == M || M();
                            })),
                          null == f || f(e);
                      },
                      onPressChange: g,
                      onPressEnd: h,
                      isDisabled: C,
                    }),
                    { isHovered: V, hoverProps: G } = (0, e7.X)({
                      isDisabled: C,
                      onHoverStart(e) {
                        (0, te.E)() ||
                          (t.selectionManager.setFocused(!0),
                          t.selectionManager.setFocusedKey(a)),
                          null == y || y(e);
                      },
                      onHoverChange: b,
                      onHoverEnd: x,
                    }),
                    { keyboardProps: q } = {
                      keyboardProps: (i = {
                        onKeyDown: (e) => {
                          if (e.repeat) {
                            e.continuePropagation();
                            return;
                          }
                          switch (e.key) {
                            case ' ':
                              C ||
                                'none' !== t.selectionManager.selectionMode ||
                                T ||
                                !1 === s ||
                                !M ||
                                M();
                              break;
                            case 'Enter':
                              C || !1 === s || T || !M || M();
                              break;
                            default:
                              T || e.continuePropagation(), null == w || w(e);
                          }
                        },
                        onKeyUp: k,
                      }).isDisabled
                        ? {}
                        : {
                            onKeyDown: tt(i.onKeyDown),
                            onKeyUp: tt(i.onKeyUp),
                          },
                    },
                    { focusProps: Y } = (function (e) {
                      let {
                          isDisabled: t,
                          onFocus: n,
                          onBlur: r,
                          onFocusChange: o,
                        } = e,
                        i = (0, u.useCallback)(
                          (e) => {
                            if (e.target === e.currentTarget)
                              return r && r(e), o && o(!1), !0;
                          },
                          [r, o],
                        ),
                        a = (0, tn.d)(i),
                        s = (0, u.useCallback)(
                          (e) => {
                            let t = (0, tr.r)(e.target);
                            e.target === e.currentTarget &&
                              t.activeElement === e.target &&
                              (n && n(e), o && o(!0), a(e));
                          },
                          [o, n, a],
                        );
                      return {
                        focusProps: {
                          onFocus: !t && (n || o || r) ? s : void 0,
                          onBlur: !t && (r || o) ? i : void 0,
                        },
                      };
                    })({ onBlur: E, onFocus: S, onFocusChange: P }),
                    J = (0, m.z)(K.props);
                  delete J.id;
                  let X = (0, e3.eY)(K.props);
                  return {
                    menuItemProps: {
                      ...B,
                      ...(0, v.d)(
                        J,
                        X,
                        T ? { onFocus: U.onFocus } : U,
                        W,
                        G,
                        q,
                        Y,
                        { onClick: (0, e6.t)(L, W.onClick) },
                      ),
                      tabIndex: null != U.tabIndex ? -1 : void 0,
                    },
                    labelProps: { id: F },
                    descriptionProps: { id: _ },
                    keyboardShortcutProps: { id: $ },
                    isHovered: V,
                    isFocused: z,
                    isSelected: N,
                    isPressed: H,
                    isDisabled: C,
                  };
                })(
                  {
                    key: G,
                    onClose: $,
                    isDisabled: q,
                    onPress: j,
                    onClick: N,
                    onPressStart: K,
                    onPressUp: M,
                    onPressEnd: I,
                    onPressChange: A,
                    'aria-label': o['aria-label'],
                    closeOnSelect: _,
                    isVirtualized: S,
                    onAction: T,
                  },
                  y,
                  z,
                ),
                es = er,
                el = (0, u.useMemo)(
                  () => (0, c.D9)({ ...i, isDisabled: q, disableAnimation: U }),
                  [(0, p.Xx)(i), q, U],
                ),
                eu = (0, g.W)(null == L ? void 0 : L.base, E);
              F && (es = (0, p.Os)(es));
              let ec = (0, u.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    'aria-hidden': (0, h.PB)(!0),
                    'data-disabled': (0, h.PB)(q),
                    className: el.selectedIcon({
                      class: null == L ? void 0 : L.selectedIcon,
                    }),
                    ...e,
                  };
                },
                [q, el, L],
              );
              return {
                Component: W,
                domRef: z,
                slots: el,
                classNames: L,
                isSelectable: Y,
                isSelected: en,
                isDisabled: q,
                rendered: V,
                shortcut: b,
                description: x,
                startContent: w,
                endContent: k,
                selectedIcon: P,
                disableAnimation: U,
                getItemProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: z,
                    ...(0, v.d)(
                      F ? {} : Z,
                      (0, tA.z)(B, { enabled: H }),
                      es,
                      e,
                    ),
                    'data-focus': (0, h.PB)(et),
                    'data-selectable': (0, h.PB)(Y),
                    'data-hover': (0, h.PB)(J ? Q || ee : Q),
                    'data-disabled': (0, h.PB)(q),
                    'data-selected': (0, h.PB)(en),
                    'data-pressed': (0, h.PB)(ee),
                    'data-focus-visible': (0, h.PB)(X),
                    className: el.base({ class: (0, g.W)(eu, e.className) }),
                  };
                },
                getLabelProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...(0, v.d)(eo, e),
                    className: el.title({
                      class: null == L ? void 0 : L.title,
                    }),
                  };
                },
                hideSelectedIcon: D,
                getDescriptionProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...(0, v.d)(ei, e),
                    className: el.description({
                      class: null == L ? void 0 : L.description,
                    }),
                  };
                },
                getKeyboardShortcutProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...(0, v.d)(ea, e),
                    className: el.shortcut({
                      class: null == L ? void 0 : L.shortcut,
                    }),
                  };
                },
                getSelectedIconProps: ec,
              };
            })(e),
            I = (0, u.useMemo)(() => {
              let e = (0, s.jsx)(l, { disableAnimation: L, isSelected: w });
              return 'function' == typeof S
                ? S({ icon: e, isSelected: w, isDisabled: k })
                : S || e;
            }, [S, w, k, L]);
          return (0, s.jsxs)(n, {
            ...C(),
            children: [
              P,
              b
                ? (0, s.jsxs)('div', {
                    className: r.wrapper({
                      class: null == o ? void 0 : o.wrapper,
                    }),
                    children: [
                      (0, s.jsx)('span', { ...N(), children: i }),
                      (0, s.jsx)('span', { ...j(), children: b }),
                    ],
                  })
                : (0, s.jsx)('span', { ...N(), children: i }),
              y && (0, s.jsx)('kbd', { ...K(), children: y }),
              x && !T && (0, s.jsx)('span', { ...M(), children: I }),
              E,
            ],
          });
        });
      tD.displayName = 'NextUI.MenuItem';
      var tF = n(84040),
        t_ = n(75945),
        t$ = (0, a.Gp)((e, t) => {
          let {
              item: n,
              state: r,
              as: o,
              variant: i,
              color: a,
              disableAnimation: l,
              onAction: d,
              closeOnSelect: f,
              className: p,
              classNames: h,
              showDivider: m = !1,
              hideSelectedIcon: y,
              dividerProps: b = {},
              itemClasses: x,
              title: w,
              ...k
            } = e,
            S = (0, u.useMemo)(() => (0, c.Dk)(), []),
            P = (0, g.W)(null == h ? void 0 : h.base, p),
            E = (0, g.W)(
              null == h ? void 0 : h.divider,
              null == b ? void 0 : b.className,
            ),
            {
              itemProps: L,
              headingProps: T,
              groupProps: C,
            } = (function (e) {
              let { heading: t, 'aria-label': n } = e,
                r = (0, tF.Me)();
              return {
                itemProps: { role: 'presentation' },
                headingProps: t ? { id: r, role: 'presentation' } : {},
                groupProps: {
                  role: 'group',
                  'aria-label': n,
                  'aria-labelledby': t ? r : void 0,
                },
              };
            })({ heading: n.rendered, 'aria-label': n['aria-label'] });
          return (0, s.jsxs)(o || 'li', {
            'data-slot': 'base',
            ...(0, v.d)(L, k),
            className: S.base({ class: P }),
            children: [
              n.rendered &&
                (0, s.jsx)('span', {
                  ...T,
                  className: S.heading({
                    class: null == h ? void 0 : h.heading,
                  }),
                  'data-slot': 'heading',
                  children: n.rendered,
                }),
              (0, s.jsxs)('ul', {
                ...C,
                className: S.group({ class: null == h ? void 0 : h.group }),
                'data-has-title': !!n.rendered,
                'data-slot': 'group',
                children: [
                  [...n.childNodes].map((e) => {
                    let { key: t, props: n } = e,
                      o = (0, s.jsx)(
                        tD,
                        {
                          classNames: x,
                          closeOnSelect: f,
                          color: a,
                          disableAnimation: l,
                          hideSelectedIcon: y,
                          item: e,
                          state: r,
                          variant: i,
                          onAction: d,
                          ...n,
                        },
                        t,
                      );
                    return e.wrapper && (o = e.wrapper(o)), o;
                  }),
                  m &&
                    (0, s.jsx)(t_.j, {
                      as: 'li',
                      className: S.divider({ class: E }),
                      ...b,
                    }),
                ],
              }),
            ],
          });
        });
      t$.displayName = 'NextUI.MenuSection';
      class tB {
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(e) {
          let t = this.keyMap.get(e);
          return t ? t.prevKey : null;
        }
        getKeyAfter(e) {
          let t = this.keyMap.get(e);
          return t ? t.nextKey : null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(e) {
          return this.keyMap.get(e);
        }
        at(e) {
          let t = [...this.getKeys()];
          return this.getItem(t[e]);
        }
        constructor(e, { expandedKeys: t } = {}) {
          let n;
          (this.keyMap = new Map()), (this.iterable = e), (t = t || new Set());
          let r = (e) => {
            if (
              (this.keyMap.set(e.key, e),
              e.childNodes && ('section' === e.type || t.has(e.key)))
            )
              for (let t of e.childNodes) r(t);
          };
          for (let t of e) r(t);
          let o = 0;
          for (let [e, t] of this.keyMap)
            n
              ? ((n.nextKey = e), (t.prevKey = n.key))
              : ((this.firstKey = e), (t.prevKey = void 0)),
              'item' === t.type && (t.index = o++),
              ((n = t).nextKey = void 0);
          this.lastKey = null == n ? void 0 : n.key;
        }
      }
      var tU = n(75125),
        tz = n(62490),
        tW = n(34921),
        tH = n(41821),
        tV = n(26242);
      function tG(e, t) {
        let {
            Component: n,
            state: r,
            closeOnSelect: o,
            color: i,
            disableAnimation: a,
            hideSelectedIcon: l,
            hideEmptyContent: f,
            variant: p,
            onClose: h,
            onAction: y,
            topContent: b,
            bottomContent: x,
            itemClasses: w,
            getBaseProps: k,
            getListProps: S,
            getEmptyContentProps: P,
          } = (function (e) {
            var t;
            let n = (0, d.w)(),
              {
                as: r,
                ref: o,
                variant: i,
                color: a,
                children: s,
                disableAnimation: l = null !=
                  (t = null == n ? void 0 : n.disableAnimation) && t,
                onAction: f,
                closeOnSelect: p,
                itemClasses: h,
                className: y,
                state: b,
                topContent: x,
                bottomContent: w,
                hideEmptyContent: k = !1,
                hideSelectedIcon: S = !1,
                emptyContent: P = 'No items.',
                menuProps: E,
                onClose: L,
                classNames: T,
                ...C
              } = e,
              N = r || 'ul',
              I = (0, tV.gy)(o),
              F = 'string' == typeof N,
              _ = (function (e) {
                let { onExpandedChange: t } = e,
                  [n, r] = (0, tH.z)(
                    e.expandedKeys ? new Set(e.expandedKeys) : void 0,
                    e.defaultExpandedKeys
                      ? new Set(e.defaultExpandedKeys)
                      : new Set(),
                    t,
                  ),
                  o = (0, tU.q)(e),
                  i = (0, u.useMemo)(
                    () =>
                      e.disabledKeys ? new Set(e.disabledKeys) : new Set(),
                    [e.disabledKeys],
                  ),
                  a = (0, tW.K)(
                    e,
                    (0, u.useCallback)(
                      (e) => new tB(e, { expandedKeys: n }),
                      [n],
                    ),
                    null,
                  );
                return (
                  (0, u.useEffect)(() => {
                    null == o.focusedKey ||
                      a.getItem(o.focusedKey) ||
                      o.setFocusedKey(null);
                  }, [a, o.focusedKey]),
                  {
                    collection: a,
                    expandedKeys: n,
                    disabledKeys: i,
                    toggleKey: (e) => {
                      let t;
                      r(((t = new Set(n)).has(e) ? t.delete(e) : t.add(e), t));
                    },
                    setExpandedKeys: r,
                    selectionManager: new tz.Z(a, o),
                  }
                );
              })({ ...C, ...E, children: s }),
              $ = b || _,
              { menuProps: B } = (function (e, t, n) {
                let {
                  shouldFocusWrap: r = !0,
                  onKeyDown: o,
                  onKeyUp: i,
                  ...a
                } = e;
                e['aria-label'] ||
                  e['aria-labelledby'] ||
                  console.warn(
                    'An aria-label or aria-labelledby prop is required for accessibility.',
                  );
                let s = (0, m.z)(e, { labelable: !0 }),
                  { listProps: l } = (function (e) {
                    let {
                        selectionManager: t,
                        collection: n,
                        disabledKeys: r,
                        ref: o,
                        keyboardDelegate: i,
                      } = e,
                      a = (function (e) {
                        let { locale: t } = e0(),
                          n =
                            t +
                            (e
                              ? Object.entries(e)
                                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                                  .join()
                              : '');
                        if (e2.has(n)) return e2.get(n);
                        let r = new Intl.Collator(t, e);
                        return e2.set(n, r), r;
                      })({ usage: 'search', sensitivity: 'base' }),
                      s = t.disabledBehavior,
                      l = (0, u.useMemo)(
                        () =>
                          i ||
                          new e1({
                            collection: n,
                            disabledKeys: r,
                            disabledBehavior: s,
                            ref: o,
                            collator: a,
                          }),
                        [i, n, r, o, a, s],
                      ),
                      { collectionProps: c } = (function (e) {
                        var t, n, r;
                        let o,
                          i,
                          a,
                          {
                            selectionManager: s,
                            keyboardDelegate: l,
                            ref: c,
                            autoFocus: d = !1,
                            shouldFocusWrap: f = !1,
                            disallowEmptySelection: p = !1,
                            disallowSelectAll: g = !1,
                            selectOnFocus: h = 'replace' ===
                              s.selectionBehavior,
                            disallowTypeAhead: m = !1,
                            shouldUseVirtualFocus: v,
                            allowsTabNavigation: y = !1,
                            isVirtualized: b,
                            scrollRef: x = c,
                            linkBehavior: w = 'action',
                          } = e,
                          { direction: k } = e0(),
                          S = ev(),
                          P = (0, u.useRef)({ top: 0, left: 0 });
                        (t = 'scroll'),
                          (o = ex(
                            (n = b
                              ? null
                              : () => {
                                  P.current = {
                                    top: x.current.scrollTop,
                                    left: x.current.scrollLeft,
                                  };
                                }),
                          )),
                          (i = null == n),
                          (0, u.useEffect)(() => {
                            if (i || !x.current) return;
                            let e = x.current;
                            return (
                              e.addEventListener(t, o, void 0),
                              () => {
                                e.removeEventListener(t, o, r);
                              }
                            );
                          }, [x, t, r, i, o]);
                        let E = (0, u.useRef)(d);
                        (0, u.useEffect)(() => {
                          if (E.current) {
                            let e = null;
                            'first' === d && (e = l.getFirstKey()),
                              'last' === d && (e = l.getLastKey());
                            let t = s.selectedKeys;
                            if (t.size) {
                              for (let n of t)
                                if (s.canSelectItem(n)) {
                                  e = n;
                                  break;
                                }
                            }
                            s.setFocused(!0),
                              s.setFocusedKey(e),
                              null != e || v || ep(c.current);
                          }
                        }, []);
                        let L = (0, u.useRef)(s.focusedKey);
                        (0, u.useEffect)(() => {
                          let e = ej;
                          if (
                            s.isFocused &&
                            null != s.focusedKey &&
                            (null == x ? void 0 : x.current)
                          ) {
                            let t = x.current.querySelector(
                              `[data-key="${CSS.escape(s.focusedKey.toString())}"]`,
                            );
                            t &&
                              ('keyboard' === e || E.current) &&
                              (b || ek(x.current, t),
                              'virtual' !== e &&
                                eP(t, { containingElement: c.current }));
                          }
                          s.isFocused &&
                            null == s.focusedKey &&
                            null != L.current &&
                            ep(c.current),
                            (L.current = s.focusedKey),
                            (E.current = !1);
                        }, [b, x, s.focusedKey, s.isFocused, c]);
                        let T = {
                            onKeyDown: (e) => {
                              var t, n, r, o, i, a, u, d, m, v;
                              if (
                                (e.altKey &&
                                  'Tab' === e.key &&
                                  e.preventDefault(),
                                !c.current.contains(e.target))
                              )
                                return;
                              let b = (t, n) => {
                                if (null != t) {
                                  if (
                                    s.isLink(t) &&
                                    'selection' === w &&
                                    h &&
                                    !O(e)
                                  ) {
                                    (0, j.flushSync)(() => {
                                      s.setFocusedKey(t, n);
                                    });
                                    let r = x.current.querySelector(
                                        `[data-key="${CSS.escape(t.toString())}"]`,
                                      ),
                                      o = s.getItemProps(t);
                                    S.open(r, e, o.href, o.routerOptions);
                                    return;
                                  }
                                  s.setFocusedKey(t, n),
                                    (s.isLink(t) && 'override' === w) ||
                                      (e.shiftKey &&
                                      'multiple' === s.selectionMode
                                        ? s.extendSelection(t)
                                        : h && !O(e) && s.replaceSelection(t));
                                }
                              };
                              switch (e.key) {
                                case 'ArrowDown':
                                  if (l.getKeyBelow) {
                                    e.preventDefault();
                                    let r =
                                      null != s.focusedKey
                                        ? l.getKeyBelow(s.focusedKey)
                                        : null === (t = l.getFirstKey) ||
                                            void 0 === t
                                          ? void 0
                                          : t.call(l);
                                    null == r &&
                                      f &&
                                      (r =
                                        null === (n = l.getFirstKey) ||
                                        void 0 === n
                                          ? void 0
                                          : n.call(l, s.focusedKey)),
                                      b(r);
                                  }
                                  break;
                                case 'ArrowUp':
                                  if (l.getKeyAbove) {
                                    e.preventDefault();
                                    let t =
                                      null != s.focusedKey
                                        ? l.getKeyAbove(s.focusedKey)
                                        : null === (r = l.getLastKey) ||
                                            void 0 === r
                                          ? void 0
                                          : r.call(l);
                                    null == t &&
                                      f &&
                                      (t =
                                        null === (o = l.getLastKey) ||
                                        void 0 === o
                                          ? void 0
                                          : o.call(l, s.focusedKey)),
                                      b(t);
                                  }
                                  break;
                                case 'ArrowLeft':
                                  if (l.getKeyLeftOf) {
                                    e.preventDefault();
                                    let t = l.getKeyLeftOf(s.focusedKey);
                                    null == t &&
                                      f &&
                                      (t =
                                        'rtl' === k
                                          ? null === (i = l.getFirstKey) ||
                                            void 0 === i
                                            ? void 0
                                            : i.call(l, s.focusedKey)
                                          : null === (a = l.getLastKey) ||
                                              void 0 === a
                                            ? void 0
                                            : a.call(l, s.focusedKey)),
                                      b(t, 'rtl' === k ? 'first' : 'last');
                                  }
                                  break;
                                case 'ArrowRight':
                                  if (l.getKeyRightOf) {
                                    e.preventDefault();
                                    let t = l.getKeyRightOf(s.focusedKey);
                                    null == t &&
                                      f &&
                                      (t =
                                        'rtl' === k
                                          ? null === (u = l.getLastKey) ||
                                            void 0 === u
                                            ? void 0
                                            : u.call(l, s.focusedKey)
                                          : null === (d = l.getFirstKey) ||
                                              void 0 === d
                                            ? void 0
                                            : d.call(l, s.focusedKey)),
                                      b(t, 'rtl' === k ? 'last' : 'first');
                                  }
                                  break;
                                case 'Home':
                                  if (l.getFirstKey) {
                                    e.preventDefault();
                                    let t = l.getFirstKey(s.focusedKey, R(e));
                                    s.setFocusedKey(t),
                                      R(e) &&
                                      e.shiftKey &&
                                      'multiple' === s.selectionMode
                                        ? s.extendSelection(t)
                                        : h && s.replaceSelection(t);
                                  }
                                  break;
                                case 'End':
                                  if (l.getLastKey) {
                                    e.preventDefault();
                                    let t = l.getLastKey(s.focusedKey, R(e));
                                    s.setFocusedKey(t),
                                      R(e) &&
                                      e.shiftKey &&
                                      'multiple' === s.selectionMode
                                        ? s.extendSelection(t)
                                        : h && s.replaceSelection(t);
                                  }
                                  break;
                                case 'PageDown':
                                  l.getKeyPageBelow &&
                                    (e.preventDefault(),
                                    b(l.getKeyPageBelow(s.focusedKey)));
                                  break;
                                case 'PageUp':
                                  l.getKeyPageAbove &&
                                    (e.preventDefault(),
                                    b(l.getKeyPageAbove(s.focusedKey)));
                                  break;
                                case 'a':
                                  R(e) &&
                                    'multiple' === s.selectionMode &&
                                    !0 !== g &&
                                    (e.preventDefault(), s.selectAll());
                                  break;
                                case 'Escape':
                                  p ||
                                    0 === s.selectedKeys.size ||
                                    (e.stopPropagation(),
                                    e.preventDefault(),
                                    s.clearSelection());
                                  break;
                                case 'Tab':
                                  if (!y) {
                                    if (e.shiftKey) c.current.focus();
                                    else {
                                      let e, t;
                                      let n,
                                        r,
                                        o =
                                          ((m = c.current),
                                          (e = (v = { tabbable: !0 }).tabbable
                                            ? D
                                            : A),
                                          (t = K(m).createTreeWalker(
                                            m,
                                            NodeFilter.SHOW_ELEMENT,
                                            {
                                              acceptNode(t) {
                                                var n;
                                                return (
                                                  null == v
                                                    ? void 0
                                                    : null === (n = v.from) ||
                                                        void 0 === n
                                                      ? void 0
                                                      : n.contains(t)
                                                )
                                                  ? NodeFilter.FILTER_REJECT
                                                  : t.matches(e) &&
                                                      (function e(t, n) {
                                                        return (
                                                          '#comment' !==
                                                            t.nodeName &&
                                                          (function (e) {
                                                            let t = M(e);
                                                            if (
                                                              !(
                                                                e instanceof
                                                                t.HTMLElement
                                                              ) &&
                                                              !(
                                                                e instanceof
                                                                t.SVGElement
                                                              )
                                                            )
                                                              return !1;
                                                            let {
                                                                display: n,
                                                                visibility: r,
                                                              } = e.style,
                                                              o =
                                                                'none' !== n &&
                                                                'hidden' !==
                                                                  r &&
                                                                'collapse' !==
                                                                  r;
                                                            if (o) {
                                                              let {
                                                                  getComputedStyle:
                                                                    t,
                                                                } =
                                                                  e
                                                                    .ownerDocument
                                                                    .defaultView,
                                                                {
                                                                  display: n,
                                                                  visibility: r,
                                                                } = t(e);
                                                              o =
                                                                'none' !== n &&
                                                                'hidden' !==
                                                                  r &&
                                                                'collapse' !==
                                                                  r;
                                                            }
                                                            return o;
                                                          })(t) &&
                                                          !t.hasAttribute(
                                                            'hidden',
                                                          ) &&
                                                          !t.hasAttribute(
                                                            'data-react-aria-prevent-focus',
                                                          ) &&
                                                          ('DETAILS' !==
                                                            t.nodeName ||
                                                            !n ||
                                                            'SUMMARY' ===
                                                              n.nodeName ||
                                                            t.hasAttribute(
                                                              'open',
                                                            )) &&
                                                          (!t.parentElement ||
                                                            e(
                                                              t.parentElement,
                                                              t,
                                                            ))
                                                        );
                                                      })(t) &&
                                                      (!(null == v
                                                        ? void 0
                                                        : v.accept) ||
                                                        v.accept(t))
                                                    ? NodeFilter.FILTER_ACCEPT
                                                    : NodeFilter.FILTER_SKIP;
                                              },
                                            },
                                          )),
                                          (null == v ? void 0 : v.from) &&
                                            (t.currentNode = v.from),
                                          t);
                                      do (r = o.lastChild()) && (n = r);
                                      while (r);
                                      n &&
                                        !n.contains(document.activeElement) &&
                                        eg(n);
                                    }
                                  }
                              }
                            },
                            onFocus: (e) => {
                              if (s.isFocused) {
                                e.currentTarget.contains(e.target) ||
                                  s.setFocused(!1);
                                return;
                              }
                              if (e.currentTarget.contains(e.target)) {
                                if ((s.setFocused(!0), null == s.focusedKey)) {
                                  var t, n;
                                  let r = (e) => {
                                      null != e &&
                                        (s.setFocusedKey(e),
                                        h && s.replaceSelection(e));
                                    },
                                    o = e.relatedTarget;
                                  o &&
                                  e.currentTarget.compareDocumentPosition(o) &
                                    Node.DOCUMENT_POSITION_FOLLOWING
                                    ? r(
                                        null !== (t = s.lastSelectedKey) &&
                                          void 0 !== t
                                          ? t
                                          : l.getLastKey(),
                                      )
                                    : r(
                                        null !== (n = s.firstSelectedKey) &&
                                          void 0 !== n
                                          ? n
                                          : l.getFirstKey(),
                                      );
                                } else
                                  b ||
                                    ((x.current.scrollTop = P.current.top),
                                    (x.current.scrollLeft = P.current.left));
                                if (!b && null != s.focusedKey) {
                                  let e = x.current.querySelector(
                                    `[data-key="${CSS.escape(s.focusedKey.toString())}"]`,
                                  );
                                  e &&
                                    (e.contains(document.activeElement) ||
                                      eg(e),
                                    'keyboard' === ej &&
                                      eP(e, { containingElement: c.current }));
                                }
                              }
                            },
                            onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) ||
                                s.setFocused(!1);
                            },
                            onMouseDown(e) {
                              x.current === e.target && e.preventDefault();
                            },
                          },
                          { typeSelectProps: C } = (function (e) {
                            let {
                                keyboardDelegate: t,
                                selectionManager: n,
                                onTypeSelect: r,
                              } = e,
                              o = (0, u.useRef)({
                                search: '',
                                timeout: null,
                              }).current;
                            return {
                              typeSelectProps: {
                                onKeyDownCapture: t.getKeyForSearch
                                  ? (e) => {
                                      var i;
                                      let a =
                                        1 !== (i = e.key).length &&
                                        /^[A-Z]/i.test(i)
                                          ? ''
                                          : i;
                                      if (
                                        !a ||
                                        e.ctrlKey ||
                                        e.metaKey ||
                                        !e.currentTarget.contains(e.target)
                                      )
                                        return;
                                      ' ' !== a ||
                                        !(o.search.trim().length > 0) ||
                                        (e.preventDefault(),
                                        'continuePropagation' in e ||
                                          e.stopPropagation()),
                                        (o.search += a);
                                      let s = t.getKeyForSearch(
                                        o.search,
                                        n.focusedKey,
                                      );
                                      null == s &&
                                        (s = t.getKeyForSearch(o.search)),
                                        null != s &&
                                          (n.setFocusedKey(s), r && r(s)),
                                        clearTimeout(o.timeout),
                                        (o.timeout = setTimeout(() => {
                                          o.search = '';
                                        }, 1e3));
                                    }
                                  : null,
                              },
                            };
                          })({ keyboardDelegate: l, selectionManager: s });
                        return (
                          m || (T = eC(C, T)),
                          v || (a = null == s.focusedKey ? 0 : -1),
                          { collectionProps: { ...T, tabIndex: a } }
                        );
                      })({
                        ...e,
                        ref: o,
                        selectionManager: t,
                        keyboardDelegate: l,
                      });
                    return { listProps: c };
                  })({
                    ...a,
                    ref: n,
                    selectionManager: t.selectionManager,
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    shouldFocusWrap: r,
                    linkBehavior: 'override',
                  });
                return (
                  e5.set(t, { onClose: e.onClose, onAction: e.onAction }),
                  {
                    menuProps: (0, v.d)(
                      s,
                      { onKeyDown: o, onKeyUp: i },
                      {
                        role: 'menu',
                        ...l,
                        onKeyDown: (e) => {
                          'Escape' !== e.key && l.onKeyDown && l.onKeyDown(e);
                        },
                      },
                    ),
                  }
                );
              })({ ...C, ...E }, $, I),
              U = (0, u.useMemo)(() => (0, c.GI)({ className: y }), [y]),
              z = (0, g.W)(null == T ? void 0 : T.base, y);
            return {
              Component: N,
              state: $,
              variant: i,
              color: a,
              disableAnimation: l,
              onAction: f,
              onClose: L,
              topContent: x,
              bottomContent: w,
              closeOnSelect: p,
              className: y,
              itemClasses: h,
              getBaseProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ref: I,
                  'data-slot': 'base',
                  className: U.base({ class: z }),
                  ...(0, tA.z)(C, { enabled: F }),
                  ...e,
                };
              },
              getListProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  'data-slot': 'list',
                  className: U.list({ class: null == T ? void 0 : T.list }),
                  ...B,
                  ...e,
                };
              },
              hideEmptyContent: k,
              hideSelectedIcon: S,
              getEmptyContentProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  children: P,
                  className: U.emptyContent({
                    class: null == T ? void 0 : T.emptyContent,
                  }),
                  ...e,
                };
              },
            };
          })({ ...e, ref: t }),
          E = (0, s.jsxs)(n, {
            ...S(),
            children: [
              !r.collection.size &&
                !f &&
                (0, s.jsx)('li', { children: (0, s.jsx)('div', { ...P() }) }),
              [...r.collection].map((e) => {
                let t = {
                  closeOnSelect: o,
                  color: i,
                  disableAnimation: a,
                  item: e,
                  state: r,
                  variant: p,
                  onClose: h,
                  onAction: y,
                  hideSelectedIcon: l,
                  ...e.props,
                };
                if ('section' === e.type)
                  return (0, s.jsx)(t$, { ...t, itemClasses: w }, e.key);
                let n = (0, s.jsx)(tD, { ...t, classNames: w }, e.key);
                return e.wrapper && (n = e.wrapper(n)), n;
              }),
            ],
          });
        return (0, s.jsxs)('div', { ...k(), children: [b, E, x] });
      }
      var tq = (0, a.Gp)(tG);
      function tY(e, t) {
        let { getMenuProps: n } = (0, r.t)();
        return (0, s.jsx)(o.g, {
          children: (0, s.jsx)(i.MT, {
            contain: !0,
            restoreFocus: !0,
            children: (0, s.jsx)(tq, { ...n(e, t) }),
          }),
        });
      }
      tG.displayName = 'NextUI.Menu';
      var tJ = (0, a.Gp)(tY);
      tY.displayName = 'NextUI.DropdownMenu';
    },
    82962: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      var [r, o] = (0, n(37561).k)({
        name: 'DropdownContext',
        errorMessage:
          'useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`',
      });
    },
    77446: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return f;
        },
      });
      var r = n(55971),
        o = (0, n(2068).tv)({
          slots: {
            base: [
              'px-1.5',
              'py-0.5',
              'inline-flex',
              'space-x-0.5',
              'rtl:space-x-reverse',
              'items-center',
              'font-sans',
              'font-normal',
              'text-center',
              'text-small',
              'shadow-small',
              'bg-default-100',
              'text-foreground-600',
              'rounded-small',
            ],
            abbr: 'no-underline',
            content: '',
          },
          variants: {},
          defaultVariants: {},
        }),
        i = n(36222),
        a = n(65263),
        s = n(2265),
        l = {
          command: '⌘',
          shift: '⇧',
          ctrl: '⌃',
          option: '⌥',
          enter: '↵',
          delete: '⌫',
          escape: '⎋',
          tab: '⇥',
          capslock: '⇪',
          up: '↑',
          right: '→',
          down: '↓',
          left: '←',
          pageup: '⇞',
          pagedown: '⇟',
          home: '↖',
          end: '↘',
          help: '?',
          space: '␣',
        },
        u = {
          command: 'Command',
          shift: 'Shift',
          ctrl: 'Control',
          option: 'Option',
          enter: 'Enter',
          delete: 'Delete',
          escape: 'Escape',
          tab: 'Tab',
          capslock: 'Caps Lock',
          up: 'Up',
          right: 'Right',
          down: 'Down',
          left: 'Left',
          pageup: 'Page Up',
          pagedown: 'Page Down',
          home: 'Home',
          end: 'End',
          help: 'Help',
          space: 'Space',
        },
        c = n(57437),
        d = (0, r.Gp)((e, t) => {
          let {
              Component: n,
              children: d,
              slots: f,
              classNames: p,
              keysToRender: g,
              getKbdProps: h,
            } = (function (e) {
              let [t, n] = (0, r.oe)(e, o.variantKeys),
                {
                  as: l,
                  children: u,
                  className: c,
                  keys: d,
                  title: f,
                  classNames: p,
                  ...g
                } = t,
                h = (0, s.useMemo)(() => o({ ...n }), [(0, i.Xx)(n)]),
                m = (0, a.W)(null == p ? void 0 : p.base, c);
              return {
                Component: l || 'kbd',
                slots: h,
                classNames: p,
                title: f,
                children: u,
                keysToRender:
                  'string' == typeof d ? [d] : Array.isArray(d) ? d : [],
                getKbdProps: (e = {}) => ({
                  ...g,
                  ...e,
                  className: (0, a.W)(
                    h.base({ class: (0, a.W)(m, e.className) }),
                  ),
                }),
              };
            })({ ...e }),
            m = (0, s.useMemo)(
              () =>
                g.map((e) =>
                  (0, c.jsx)(
                    'abbr',
                    {
                      className: f.abbr({ class: null == p ? void 0 : p.abbr }),
                      title: u[e],
                      children: l[e],
                    },
                    e,
                  ),
                ),
              [g],
            );
          return (0, c.jsxs)(n, {
            ref: t,
            ...h(),
            children: [
              m,
              d &&
                (0, c.jsx)('span', {
                  className: f.content({
                    class: null == p ? void 0 : p.content,
                  }),
                  children: d,
                }),
            ],
          });
        });
      d.displayName = 'NextUI.Kbd';
      var f = d;
    },
    551: function (e, t, n) {
      'use strict';
      n.d(t, {
        O: function () {
          return w;
        },
      });
      var r = n(2068),
        o = n(21616),
        i = (0, r.tv)({
          base: [
            'relative inline-flex items-center outline-none tap-highlight-transparent',
            ...o.Dh,
          ],
          variants: {
            size: { sm: 'text-small', md: 'text-medium', lg: 'text-large' },
            color: {
              foreground: 'text-foreground',
              primary: 'text-primary',
              secondary: 'text-secondary',
              success: 'text-success',
              warning: 'text-warning',
              danger: 'text-danger',
            },
            underline: {
              none: 'no-underline',
              hover: 'hover:underline',
              always: 'underline',
              active: 'active:underline',
              focus: 'focus:underline',
            },
            isBlock: {
              true: [
                'px-2',
                'py-1',
                'hover:after:opacity-100',
                "after:content-['']",
                'after:inset-0',
                'after:opacity-0',
                'after:w-full',
                'after:h-full',
                'after:rounded-xl',
                'after:transition-background',
                'after:absolute',
              ],
              false:
                'hover:opacity-80 active:opacity-disabled transition-opacity',
            },
            isDisabled: {
              true: 'opacity-disabled cursor-default pointer-events-none',
            },
            disableAnimation: { true: 'after:transition-none transition-none' },
          },
          compoundVariants: [
            {
              isBlock: !0,
              color: 'foreground',
              class: 'hover:after:bg-foreground/10',
            },
            {
              isBlock: !0,
              color: 'primary',
              class: 'hover:after:bg-primary/20',
            },
            {
              isBlock: !0,
              color: 'secondary',
              class: 'hover:after:bg-secondary/20',
            },
            {
              isBlock: !0,
              color: 'success',
              class: 'hover:after:bg-success/20',
            },
            {
              isBlock: !0,
              color: 'warning',
              class: 'hover:after:bg-warning/20',
            },
            { isBlock: !0, color: 'danger', class: 'hover:after:bg-danger/20' },
            {
              underline: ['hover', 'always', 'active', 'focus'],
              class: 'underline-offset-4',
            },
          ],
          defaultVariants: {
            color: 'primary',
            size: 'md',
            isBlock: !1,
            underline: 'none',
            isDisabled: !1,
          },
        }),
        a = n(60357),
        s = n(277),
        l = n(22171),
        u = n(58936),
        c = n(98647),
        d = n(12094),
        f = n(55971),
        p = n(26242),
        g = n(25829),
        h = n(36222),
        m = n(53640),
        v = n(2265),
        y = n(57437),
        b = (e) =>
          (0, y.jsxs)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            focusable: 'false',
            height: '1em',
            shapeRendering: 'geometricPrecision',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: [
              (0, y.jsx)('path', {
                d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6',
              }),
              (0, y.jsx)('path', { d: 'M15 3h6v6' }),
              (0, y.jsx)('path', { d: 'M10 14L21 3' }),
            ],
          }),
        x = (0, f.Gp)((e, t) => {
          let {
            Component: n,
            children: r,
            showAnchorIcon: o,
            anchorIcon: x = (0, y.jsx)(b, {
              className: 'flex mx-1 text-current self-center',
            }),
            getLinkProps: w,
          } = (function (e) {
            var t, n, r, o;
            let y = (0, d.w)(),
              [b, x] = (0, f.oe)(e, i.variantKeys),
              {
                ref: w,
                as: k,
                children: S,
                anchorIcon: P,
                isExternal: E = !1,
                showAnchorIcon: L = !1,
                autoFocus: T = !1,
                className: C,
                onPress: N,
                onPressStart: O,
                onPressEnd: R,
                onClick: j,
                ...K
              } = b,
              M = (0, p.gy)(w),
              I =
                null !=
                  (n =
                    null != (t = null == e ? void 0 : e.disableAnimation)
                      ? t
                      : null == y
                        ? void 0
                        : y.disableAnimation) && n,
              { linkProps: A } = (function (e, t) {
                let {
                    elementType: n = 'a',
                    onPress: r,
                    onPressStart: o,
                    onPressEnd: i,
                    onClick: d,
                    isDisabled: f,
                    ...p
                  } = e,
                  g = {};
                'a' !== n && (g = { role: 'link', tabIndex: f ? void 0 : 0 });
                let { focusableProps: h } = (0, u.k)(e, t),
                  { pressProps: m, isPressed: v } = (0, c.r)({
                    onPress: r,
                    onPressStart: o,
                    onPressEnd: i,
                    isDisabled: f,
                    ref: t,
                  }),
                  y = (0, a.z)(p, { labelable: !0, isLink: 'a' === n }),
                  b = (0, s.d)(h, m),
                  x = (0, l.tv)(),
                  w = (0, l.eY)(e);
                return {
                  isPressed: v,
                  linkProps: (0, s.d)(y, w, {
                    ...b,
                    ...g,
                    'aria-disabled': f || void 0,
                    'aria-current': e['aria-current'],
                    onClick: (t) => {
                      var n;
                      null == (n = m.onClick) || n.call(m, t),
                        d && d(t),
                        !x.isNative &&
                          t.currentTarget instanceof HTMLAnchorElement &&
                          t.currentTarget.href &&
                          !t.isDefaultPrevented() &&
                          (0, l.b0)(t.currentTarget, t) &&
                          e.href &&
                          (t.preventDefault(),
                          x.open(t.currentTarget, t, e.href, e.routerOptions));
                    },
                  }),
                };
              })(
                {
                  ...K,
                  onPress: N,
                  onPressStart: O,
                  onPressEnd: R,
                  onClick: j,
                  isDisabled: e.isDisabled,
                  elementType: ''.concat(k),
                },
                M,
              ),
              {
                isFocused: D,
                isFocusVisible: F,
                focusProps: _,
              } = (0, g.F)({ autoFocus: T });
            E &&
              ((K.rel = null != (r = K.rel) ? r : 'noopener noreferrer'),
              (K.target = null != (o = K.target) ? o : '_blank'));
            let $ = (0, v.useMemo)(
              () => i({ ...x, disableAnimation: I, className: C }),
              [(0, h.Xx)(x), I, C],
            );
            return {
              Component: k || 'a',
              children: S,
              anchorIcon: P,
              showAnchorIcon: L,
              getLinkProps: (0, v.useCallback)(
                () => ({
                  ref: M,
                  className: $,
                  'data-focus': (0, m.PB)(D),
                  'data-disabled': (0, m.PB)(e.isDisabled),
                  'data-focus-visible': (0, m.PB)(F),
                  ...(0, s.d)(_, A, K),
                }),
                [$, D, F, _, A, K],
              ),
            };
          })({ ref: t, ...e });
          return (0, y.jsx)(n, {
            ...w(),
            children: (0, y.jsxs)(y.Fragment, { children: [r, o && x] }),
          });
        });
      x.displayName = 'NextUI.Link';
      var w = x;
    },
    2428: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return r;
        },
      });
      var r = n(89200).c;
    },
    47971: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return u;
        },
      });
      var r = n(8621),
        o = n(55971),
        i = n(26242),
        a = n(65263),
        s = n(57437),
        l = (0, o.Gp)((e, t) => {
          let { as: n, children: o, className: l, ...u } = e,
            { slots: c, classNames: d } = (0, r.v)(),
            f = (0, i.gy)(t);
          return (0, s.jsx)(n || 'footer', {
            ref: f,
            className: c.footer({
              class: (0, a.W)(null == d ? void 0 : d.footer, l),
            }),
            ...u,
            children: o,
          });
        });
      l.displayName = 'NextUI.ModalFooter';
      var u = l;
    },
    74744: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return v;
        },
      });
      var r = n(43773),
        o = n(5722),
        i = n(277),
        a = n(5150),
        s = n(55971),
        l = n(26242),
        u = n(65263),
        c = n(53640),
        d = n(18918),
        f = n(25829),
        p = n(83892),
        g = n(2265),
        h = n(57437),
        m = (0, s.Gp)((e, t) => {
          var n;
          let {
              as: s,
              icon: m,
              className: v,
              onChange: y,
              autoFocus: b,
              srOnlyText: x,
              ...w
            } = e,
            k = (0, l.gy)(t),
            {
              slots: S,
              classNames: P,
              isMenuOpen: E,
              setIsMenuOpen: L,
            } = (0, r.q)(),
            T = (0, d.l)({
              ...w,
              isSelected: E,
              onChange: (e) => {
                null == y || y(e), L(e);
              },
            }),
            { buttonProps: C, isPressed: N } = (function (e, t, n) {
              let { isSelected: r } = t,
                { isPressed: s, buttonProps: l } = (0, a.j)(
                  { ...e, onPress: (0, o.t)(t.toggle, e.onPress) },
                  n,
                );
              return {
                isPressed: s,
                buttonProps: (0, i.d)(l, { 'aria-pressed': r }),
              };
            })(e, T, k),
            { isFocusVisible: O, focusProps: R } = (0, f.F)({ autoFocus: b }),
            { isHovered: j, hoverProps: K } = (0, p.X)({}),
            M = (0, u.W)(null == P ? void 0 : P.toggle, v),
            I = (0, g.useMemo)(
              () =>
                'function' == typeof m
                  ? m(null != E && E)
                  : m ||
                    (0, h.jsx)('span', {
                      className: S.toggleIcon({
                        class: null == P ? void 0 : P.toggleIcon,
                      }),
                    }),
              [m, E, S.toggleIcon, null == P ? void 0 : P.toggleIcon],
            ),
            A = (0, g.useMemo)(
              () =>
                x ||
                (T.isSelected
                  ? 'close navigation menu'
                  : 'open navigation menu'),
              [x, E],
            );
          return (0, h.jsxs)(s || 'button', {
            ref: k,
            className:
              null == (n = S.toggle) ? void 0 : n.call(S, { class: M }),
            'data-focus-visible': (0, c.PB)(O),
            'data-hover': (0, c.PB)(j),
            'data-open': (0, c.PB)(E),
            'data-pressed': (0, c.PB)(N),
            ...(0, i.d)(C, R, K, w),
            children: [
              (0, h.jsx)('span', { className: S.srOnly(), children: A }),
              I,
            ],
          });
        });
      m.displayName = 'NextUI.NavbarMenuToggle';
      var v = m;
    },
    43773: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return r;
        },
        q: function () {
          return o;
        },
      });
      var [r, o] = (0, n(37561).k)({
        name: 'NavbarContext',
        strict: !0,
        errorMessage:
          'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
      });
    },
    25689: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return eu;
        },
      });
      var r,
        o,
        i,
        a,
        s,
        l,
        u,
        c = n(43773),
        d = {
          enter: {
            height: 'calc(100vh - var(--navbar-height))',
            transition: { duration: 0.3, easings: 'easeOut' },
          },
          exit: {
            height: 0,
            transition: { duration: 0.25, easings: 'easeIn' },
          },
        },
        f = n(55971),
        p = n(26242),
        g = n(65263),
        h = n(53640),
        m = n(34446),
        v = n(60980),
        y = n(83582),
        b = n(34565),
        x = n(277),
        w = n(2265),
        k = n(11735),
        S = 'right-scroll-bar-position',
        P = 'width-before-scroll-bar';
      function E(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var L = 'undefined' != typeof window ? w.useLayoutEffect : w.useEffect,
        T = new WeakMap(),
        C =
          (void 0 === r && (r = {}),
          ((void 0 === o &&
            (o = function (e) {
              return e;
            }),
          (i = []),
          (a = !1),
          (s = {
            read: function () {
              if (a)
                throw Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = o(e, a);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (a = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              a = !0;
              var t = [];
              if (i.length) {
                var n = i;
                (i = []), n.forEach(e), (t = i);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = (0, k.__assign)({ async: !0, ssr: !1 }, r)),
          s),
        N = function () {},
        O = w.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = w.useRef(null),
            s = w.useState({
              onScrollCapture: N,
              onWheelCapture: N,
              onTouchMoveCapture: N,
            }),
            l = s[0],
            u = s[1],
            c = e.forwardProps,
            d = e.children,
            f = e.className,
            p = e.removeScrollBar,
            g = e.enabled,
            h = e.shards,
            m = e.sideCar,
            v = e.noIsolation,
            y = e.inert,
            b = e.allowPinchZoom,
            x = e.as,
            S = e.gapMode,
            P = (0, k.__rest)(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            O =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return E(t, e);
                });
              }),
              ((o = (0, w.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              L(
                function () {
                  var e = T.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || E(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || E(e, o);
                      });
                  }
                  T.set(i, n);
                },
                [n],
              ),
              i),
            R = (0, k.__assign)((0, k.__assign)({}, P), l);
          return w.createElement(
            w.Fragment,
            null,
            g &&
              w.createElement(m, {
                sideCar: C,
                removeScrollBar: p,
                shards: h,
                noIsolation: v,
                inert: y,
                setCallbacks: u,
                allowPinchZoom: !!b,
                lockRef: a,
                gapMode: S,
              }),
            c
              ? w.cloneElement(
                  w.Children.only(d),
                  (0, k.__assign)((0, k.__assign)({}, R), { ref: O }),
                )
              : w.createElement(
                  void 0 === x ? 'div' : x,
                  (0, k.__assign)({}, R, { className: f, ref: O }),
                  d,
                ),
          );
        });
      (O.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (O.classNames = { fullWidth: P, zeroRight: S });
      var R = function (e) {
        var t = e.sideCar,
          n = (0, k.__rest)(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car',
          );
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return w.createElement(r, (0, k.__assign)({}, n));
      };
      R.isSideCarExport = !0;
      var j = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = u || n.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        K = function () {
          var e = j();
          return function (t, n) {
            w.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        M = function () {
          var e = K();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        I = { left: 0, top: 0, right: 0, gap: 0 },
        A = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        D = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [A(n), A(r), A(o)];
        },
        F = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return I;
          var t = D(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        _ = M(),
        $ = 'data-scroll-locked',
        B = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(s, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat($, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(i, 'px;\n    padding-right: ')
                      .concat(
                        a,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ',
                      )
                      .concat(s, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n &&
                    'padding-right: '.concat(s, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .',
              )
              .concat(S, ' {\n    right: ')
              .concat(s, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(P, ' {\n    margin-right: ')
              .concat(s, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(S, ' .')
              .concat(S, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(P, ' .')
              .concat(P, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat($, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(s, 'px;\n  }\n')
          );
        },
        U = function () {
          var e = parseInt(document.body.getAttribute($) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        z = function () {
          w.useEffect(function () {
            return (
              document.body.setAttribute($, (U() + 1).toString()),
              function () {
                var e = U() - 1;
                e <= 0
                  ? document.body.removeAttribute($)
                  : document.body.setAttribute($, e.toString());
              }
            );
          }, []);
        },
        W = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? 'margin' : r;
          z();
          var i = w.useMemo(
            function () {
              return F(o);
            },
            [o],
          );
          return w.createElement(_, {
            styles: B(i, !t, o, n ? '' : '!important'),
          });
        },
        H = !1;
      if ('undefined' != typeof window)
        try {
          var V = Object.defineProperty({}, 'passive', {
            get: function () {
              return (H = !0), !0;
            },
          });
          window.addEventListener('test', V, V),
            window.removeEventListener('test', V, V);
        } catch (e) {
          H = !1;
        }
      var G = !!H && { passive: !1 },
        q = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === n[t]
            )
          );
        },
        Y = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              J(e, r))
            ) {
              var o = X(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        J = function (e, t) {
          return 'v' === e ? q(t, 'overflowY') : q(t, 'overflowX');
        },
        X = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Z = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === i ? -1 : 1),
            s = a * r,
            l = n.target,
            u = t.contains(l),
            c = !1,
            d = s > 0,
            f = 0,
            p = 0;
          do {
            var g = X(e, l),
              h = g[0],
              m = g[1] - g[2] - a * h;
            (h || m) && J(e, l) && ((f += m), (p += h)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && s > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -s > p)) && (c = !0),
            c
          );
        },
        Q = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ee = function (e) {
          return [e.deltaX, e.deltaY];
        },
        et = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        en = 0,
        er = [],
        eo =
          ((l = function (e) {
            var t = w.useRef([]),
              n = w.useRef([0, 0]),
              r = w.useRef(),
              o = w.useState(en++)[0],
              i = w.useState(M)[0],
              a = w.useRef(e);
            w.useEffect(
              function () {
                a.current = e;
              },
              [e],
            ),
              w.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      'block-interactivity-'.concat(o),
                    );
                    var t = (0, k.__spreadArray)(
                      [e.lockRef.current],
                      (e.shards || []).map(et),
                      !0,
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          'allow-interactivity-'.concat(o),
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          'block-interactivity-'.concat(o),
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              'allow-interactivity-'.concat(o),
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards],
              );
            var s = w.useCallback(function (e, t) {
                if (
                  ('touches' in e && 2 === e.touches.length) ||
                  ('wheel' === e.type && e.ctrlKey)
                )
                  return !a.current.allowPinchZoom;
                var o,
                  i = Q(e),
                  s = n.current,
                  l = 'deltaX' in e ? e.deltaX : s[0] - i[0],
                  u = 'deltaY' in e ? e.deltaY : s[1] - i[1],
                  c = e.target,
                  d = Math.abs(l) > Math.abs(u) ? 'h' : 'v';
                if ('touches' in e && 'h' === d && 'range' === c.type)
                  return !1;
                var f = Y(d, c);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = Y(d, c))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    'changedTouches' in e &&
                    (l || u) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return Z(p, t, e, 'h' === p ? l : u, !0);
              }, []),
              l = w.useCallback(function (e) {
                if (er.length && er[er.length - 1] === i) {
                  var n = 'deltaY' in e ? ee(e) : Q(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(et)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              u = w.useCallback(function (e, n, r, o) {
                var i = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              c = w.useCallback(function (e) {
                (n.current = Q(e)), (r.current = void 0);
              }, []),
              d = w.useCallback(function (t) {
                u(t.type, ee(t), t.target, s(t, e.lockRef.current));
              }, []),
              f = w.useCallback(function (t) {
                u(t.type, Q(t), t.target, s(t, e.lockRef.current));
              }, []);
            w.useEffect(function () {
              return (
                er.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: f,
                }),
                document.addEventListener('wheel', l, G),
                document.addEventListener('touchmove', l, G),
                document.addEventListener('touchstart', c, G),
                function () {
                  (er = er.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener('wheel', l, G),
                    document.removeEventListener('touchmove', l, G),
                    document.removeEventListener('touchstart', c, G);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              g = e.inert;
            return w.createElement(
              w.Fragment,
              null,
              g
                ? w.createElement(i, {
                    styles: '\n  .block-interactivity-'
                      .concat(
                        o,
                        ' {pointer-events: none;}\n  .allow-interactivity-',
                      )
                      .concat(o, ' {pointer-events: all;}\n'),
                  })
                : null,
              p ? w.createElement(W, { gapMode: e.gapMode }) : null,
            );
          }),
          C.useMedium(l),
          R),
        ei = w.forwardRef(function (e, t) {
          return w.createElement(
            O,
            (0, k.__assign)({}, e, { ref: t, sideCar: eo }),
          );
        });
      ei.classNames = O.classNames;
      var ea = n(92608),
        es = n(57437),
        el = (0, f.Gp)((e, t) => {
          var n, r;
          let {
              className: o,
              children: i,
              portalContainer: a,
              motionProps: s,
              style: l,
              ...u
            } = e,
            f = (0, p.gy)(t),
            {
              slots: k,
              isMenuOpen: S,
              height: P,
              disableAnimation: E,
              classNames: L,
            } = (0, c.q)(),
            T = (0, g.W)(null == L ? void 0 : L.menu, o),
            C = (0, w.useCallback)(
              (e) => {
                let { children: t } = e;
                return (0, es.jsx)(ei, {
                  forwardProps: !0,
                  enabled: S,
                  removeScrollBar: !1,
                  children: t,
                });
              },
              [S],
            ),
            N = E
              ? (0, es.jsx)(C, {
                  children: (0, es.jsx)('ul', {
                    ref: f,
                    className:
                      null == (n = k.menu) ? void 0 : n.call(k, { class: T }),
                    'data-open': (0, h.PB)(S),
                    style: {
                      '--navbar-height':
                        'number' == typeof P ? ''.concat(P, 'px') : P,
                    },
                    ...u,
                    children: i,
                  }),
                })
              : (0, es.jsx)(m.M, {
                  mode: 'wait',
                  children: S
                    ? (0, es.jsx)(v.X, {
                        features: y.H,
                        children: (0, es.jsx)(C, {
                          children: (0, es.jsx)(b.m.ul, {
                            ref: f,
                            layoutScroll: !0,
                            animate: 'enter',
                            className:
                              null == (r = k.menu)
                                ? void 0
                                : r.call(k, { class: T }),
                            'data-open': (0, h.PB)(S),
                            exit: 'exit',
                            initial: 'exit',
                            style: {
                              '--navbar-height':
                                'number' == typeof P ? ''.concat(P, 'px') : P,
                              ...l,
                            },
                            variants: d,
                            ...(0, x.d)(s, u),
                            children: i,
                          }),
                        }),
                      })
                    : null,
                });
          return (0, es.jsx)(ea.aV, { portalContainer: a, children: N });
        });
      el.displayName = 'NextUI.NavbarMenu';
      var eu = el;
    },
    98319: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return c;
        },
      });
      var r = n(43773),
        o = n(55971),
        i = n(26242),
        a = n(65263),
        s = n(53640),
        l = n(57437),
        u = (0, o.Gp)((e, t) => {
          var n;
          let { as: o, className: u, children: c, isActive: d, ...f } = e,
            p = (0, i.gy)(t),
            { slots: g, classNames: h } = (0, r.q)(),
            m = (0, a.W)(null == h ? void 0 : h.item, u);
          return (0, l.jsx)(o || 'li', {
            ref: p,
            className: null == (n = g.item) ? void 0 : n.call(g, { class: m }),
            'data-active': (0, s.PB)(d),
            ...f,
            children: c,
          });
        });
      u.displayName = 'NextUI.NavbarItem';
      var c = u;
    },
    19862: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return T;
        },
      });
      var r = n(25689),
        o = n(79046),
        i = {
          visible: { y: 0, transition: { ease: o.Lj.easeOut } },
          hidden: { y: '-100%', transition: { ease: o.Lj.easeIn } },
        },
        a = n(12094),
        s = n(55971),
        l = n(2068),
        u = n(21616),
        c = (0, l.tv)({
          slots: {
            base: [
              'flex',
              'z-40',
              'w-full',
              'h-auto',
              'items-center',
              'justify-center',
              'data-[menu-open=true]:border-none',
            ],
            wrapper: [
              'z-40',
              'flex',
              'px-6',
              'gap-4',
              'w-full',
              'flex-row',
              'relative',
              'flex-nowrap',
              'items-center',
              'justify-between',
              'h-[var(--navbar-height)]',
            ],
            toggle: [
              'group',
              'flex',
              'items-center',
              'justify-center',
              'w-6',
              'h-full',
              'outline-none',
              'rounded-small',
              'tap-highlight-transparent',
              ...u.Dh,
            ],
            srOnly: ['sr-only'],
            toggleIcon: [
              'w-full',
              'h-full',
              'pointer-events-none',
              'flex',
              'flex-col',
              'items-center',
              'justify-center',
              'text-inherit',
              'group-data-[pressed=true]:opacity-70',
              'transition-opacity',
              "before:content-['']",
              'before:block',
              'before:h-px',
              'before:w-6',
              'before:bg-current',
              'before:transition-transform',
              'before:duration-150',
              'before:-translate-y-1',
              'before:rotate-0',
              'group-data-[open=true]:before:translate-y-px',
              'group-data-[open=true]:before:rotate-45',
              "after:content-['']",
              'after:block',
              'after:h-px',
              'after:w-6',
              'after:bg-current',
              'after:transition-transform',
              'after:duration-150',
              'after:translate-y-1',
              'after:rotate-0',
              'group-data-[open=true]:after:translate-y-0',
              'group-data-[open=true]:after:-rotate-45',
            ],
            brand: [
              'flex',
              'basis-0',
              'flex-row',
              'flex-grow',
              'flex-nowrap',
              'justify-start',
              'bg-transparent',
              'items-center',
              'no-underline',
              'text-medium',
              'whitespace-nowrap',
              'box-border',
            ],
            content: [
              'flex',
              'gap-4',
              'h-full',
              'flex-row',
              'flex-nowrap',
              'items-center',
              'data-[justify=start]:justify-start',
              'data-[justify=start]:flex-grow',
              'data-[justify=start]:basis-0',
              'data-[justify=center]:justify-center',
              'data-[justify=end]:justify-end',
              'data-[justify=end]:flex-grow',
              'data-[justify=end]:basis-0',
            ],
            item: [
              'text-medium',
              'whitespace-nowrap',
              'box-border',
              'list-none',
              'data-[active=true]:font-semibold',
            ],
            menu: [
              'z-30',
              'px-6',
              'pt-2',
              'fixed',
              'flex',
              'max-w-full',
              'top-[var(--navbar-height)]',
              'inset-x-0',
              'bottom-0',
              'w-screen',
              'flex-col',
              'gap-2',
              'overflow-y-auto',
            ],
            menuItem: ['text-large', 'data-[active=true]:font-semibold'],
          },
          variants: {
            position: {
              static: { base: 'static' },
              sticky: { base: 'sticky top-0 inset-x-0' },
            },
            maxWidth: {
              sm: { wrapper: 'max-w-[640px]' },
              md: { wrapper: 'max-w-[768px]' },
              lg: { wrapper: 'max-w-[1024px]' },
              xl: { wrapper: 'max-w-[1280px]' },
              '2xl': { wrapper: 'max-w-[1536px]' },
              full: { wrapper: 'max-w-full' },
            },
            hideOnScroll: { true: { base: ['sticky', 'top-0', 'inset-x-0'] } },
            isBordered: { true: { base: ['border-b', 'border-divider'] } },
            isBlurred: {
              false: { base: 'bg-background', menu: 'bg-background' },
              true: {
                base: [
                  'backdrop-blur-lg',
                  'data-[menu-open=true]:backdrop-blur-xl',
                  'backdrop-saturate-150',
                  'bg-background/70',
                ],
                menu: [
                  'backdrop-blur-xl',
                  'backdrop-saturate-150',
                  'bg-background/70',
                ],
              },
            },
            disableAnimation: {
              true: {
                menu: [
                  'hidden',
                  'h-[calc(100dvh_-_var(--navbar-height))]',
                  'data-[open=true]:flex',
                ],
              },
            },
          },
          defaultVariants: {
            maxWidth: 'lg',
            position: 'sticky',
            isBlurred: !0,
          },
        }),
        d = n(26242),
        f = n(36222),
        p = n(65263),
        g = n(53640),
        h = n(2265),
        m = n(277),
        v = 'undefined' != typeof window;
      function y(e) {
        return v
          ? e
            ? { x: e.scrollLeft, y: e.scrollTop }
            : { x: window.scrollX, y: window.scrollY }
          : { x: 0, y: 0 };
      }
      var b = (e) => {
          let { elementRef: t, delay: n = 30, callback: r, isEnabled: o } = e,
            i = (0, h.useRef)(
              o ? y(null == t ? void 0 : t.current) : { x: 0, y: 0 },
            ),
            a = (0, h.useRef)(null),
            s = (0, h.useCallback)(() => {
              let e = y(null == t ? void 0 : t.current);
              'function' == typeof r && r({ prevPos: i.current, currPos: e }),
                (i.current = e),
                (a.current = null);
            }, [r, t]);
          return (
            (0, h.useEffect)(() => {
              if (!o) return;
              let e = () => {
                  n
                    ? (a.current && clearTimeout(a.current),
                      (a.current = setTimeout(s, n)))
                    : s();
                },
                r = (null == t ? void 0 : t.current) || window;
              return (
                r.addEventListener('scroll', e),
                () => {
                  r.removeEventListener('scroll', e),
                    a.current && (clearTimeout(a.current), (a.current = null));
                }
              );
            }, [null == t ? void 0 : t.current, n, s, o]),
            i.current
          );
        },
        x = n(43773),
        w = n(37994),
        k = n(60980),
        S = n(83582),
        P = n(34565),
        E = n(57437),
        L = (0, s.Gp)((e, t) => {
          let { children: n, ...o } = e,
            l = (function (e) {
              var t, n;
              let r = (0, a.w)(),
                [o, i] = (0, s.oe)(e, c.variantKeys),
                {
                  ref: l,
                  as: u,
                  parentRef: v,
                  height: y = '4rem',
                  shouldHideOnScroll: x = !1,
                  disableScrollHandler: w = !1,
                  onScrollPositionChange: k,
                  isMenuOpen: S,
                  isMenuDefaultOpen: P,
                  onMenuOpenChange: E = () => {},
                  motionProps: L,
                  className: T,
                  classNames: C,
                  ...N
                } = o,
                O =
                  null !=
                    (n =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == r
                          ? void 0
                          : r.disableAnimation) && n,
                R = (0, d.gy)(l),
                j = (0, h.useRef)(0),
                K = (0, h.useRef)(0),
                [M, I] = (0, h.useState)(!1),
                [A, D] = (function (e, t, n) {
                  let [r, o] = (0, h.useState)(e || t),
                    i = (0, h.useRef)(void 0 !== e),
                    a = void 0 !== e;
                  (0, h.useEffect)(() => {
                    let e = i.current;
                    e !== a &&
                      console.warn(
                        `WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${a ? 'controlled' : 'uncontrolled'}.`,
                      ),
                      (i.current = a);
                  }, [a]);
                  let s = a ? e : r,
                    l = (0, h.useCallback)(
                      (e, ...t) => {
                        let r = (e, ...t) => {
                          n && !Object.is(s, e) && n(e, ...t), a || (s = e);
                        };
                        'function' == typeof e
                          ? (console.warn(
                              'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
                            ),
                            o((n, ...o) => {
                              let i = e(a ? s : n, ...o);
                              return (r(i, ...t), a) ? n : i;
                            }))
                          : (a || o(e), r(e, ...t));
                      },
                      [a, s, n],
                    );
                  return [s, l];
                })(
                  S,
                  null != P && P,
                  (0, h.useCallback)(
                    (e) => {
                      E(e || !1);
                    },
                    [E],
                  ),
                ),
                F = () => {
                  if (R.current) {
                    let e = R.current.offsetWidth;
                    e !== j.current && (j.current = e);
                  }
                };
              !(function (e) {
                let { ref: t, onResize: n } = e;
                (0, h.useEffect)(() => {
                  let e = null == t ? void 0 : t.current;
                  if (e) {
                    if (!(void 0 !== window.ResizeObserver))
                      return (
                        window.addEventListener('resize', n, !1),
                        () => {
                          window.removeEventListener('resize', n, !1);
                        }
                      );
                    {
                      let t = new window.ResizeObserver((e) => {
                        e.length && n();
                      });
                      return (
                        t.observe(e),
                        () => {
                          e && t.unobserve(e);
                        }
                      );
                    }
                  }
                }, [n, t]);
              })({
                ref: R,
                onResize: () => {
                  var e;
                  (null == (e = R.current) ? void 0 : e.offsetWidth) !==
                    j.current && (F(), D(!1));
                },
              }),
                (0, h.useEffect)(() => {
                  var e;
                  F(),
                    (K.current =
                      (null == (e = R.current) ? void 0 : e.offsetHeight) || 0);
                }, []);
              let _ = (0, h.useMemo)(
                  () => c({ ...i, disableAnimation: O, hideOnScroll: x }),
                  [(0, f.Xx)(i), O, x],
                ),
                $ = (0, p.W)(null == C ? void 0 : C.base, T);
              return (
                b({
                  elementRef: v,
                  isEnabled: x || !w,
                  callback: (e) => {
                    let { prevPos: t, currPos: n } = e;
                    null == k || k(n.y),
                      x &&
                        I((e) => {
                          let r = n.y > t.y && n.y > K.current;
                          return r !== e ? r : e;
                        });
                  },
                }),
                {
                  Component: u || 'nav',
                  slots: _,
                  domRef: R,
                  height: y,
                  isHidden: M,
                  disableAnimation: O,
                  shouldHideOnScroll: x,
                  isMenuOpen: A,
                  classNames: C,
                  setIsMenuOpen: D,
                  motionProps: L,
                  getBaseProps: function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ...(0, m.d)(N, e),
                      'data-hidden': (0, g.PB)(M),
                      'data-menu-open': (0, g.PB)(A),
                      ref: R,
                      className: _.base({
                        class: (0, p.W)($, null == e ? void 0 : e.className),
                      }),
                      style: {
                        '--navbar-height':
                          'number' == typeof y ? ''.concat(y, 'px') : y,
                        ...(null == N ? void 0 : N.style),
                        ...(null == e ? void 0 : e.style),
                      },
                    };
                  },
                  getWrapperProps: function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ...e,
                      'data-menu-open': (0, g.PB)(A),
                      className: _.wrapper({
                        class: (0, p.W)(
                          null == C ? void 0 : C.wrapper,
                          null == e ? void 0 : e.className,
                        ),
                      }),
                    };
                  },
                }
              );
            })({ ...o, ref: t }),
            u = l.Component,
            [v, y] = (0, w.N)(n, r.$),
            L = (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)('header', { ...l.getWrapperProps(), children: v }),
                y,
              ],
            });
          return (0, E.jsx)(x.V, {
            value: l,
            children: l.shouldHideOnScroll
              ? (0, E.jsx)(k.X, {
                  features: S.H,
                  children: (0, E.jsx)(P.m.nav, {
                    animate: l.isHidden ? 'hidden' : 'visible',
                    initial: !1,
                    variants: i,
                    ...(0, m.d)(l.getBaseProps(), l.motionProps),
                    children: L,
                  }),
                })
              : (0, E.jsx)(u, { ...l.getBaseProps(), children: L }),
          });
        });
      L.displayName = 'NextUI.Navbar';
      var T = L;
    },
    53891: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return u;
        },
      });
      var r = n(43773),
        o = n(55971),
        i = n(26242),
        a = n(65263),
        s = n(57437),
        l = (0, o.Gp)((e, t) => {
          var n;
          let {
              as: o,
              className: l,
              children: u,
              justify: c = 'start',
              ...d
            } = e,
            f = (0, i.gy)(t),
            { slots: p, classNames: g } = (0, r.q)(),
            h = (0, a.W)(null == g ? void 0 : g.content, l);
          return (0, s.jsx)(o || 'ul', {
            ref: f,
            className:
              null == (n = p.content) ? void 0 : n.call(p, { class: h }),
            'data-justify': c,
            ...d,
            children: u,
          });
        });
      l.displayName = 'NextUI.NavbarContent';
      var u = l;
    },
    68826: function (e, t, n) {
      'use strict';
      n.d(t, {
        h: function () {
          return c;
        },
      });
      var r = n(43773),
        o = n(55971),
        i = n(26242),
        a = n(65263),
        s = n(53640),
        l = n(57437),
        u = (0, o.Gp)((e, t) => {
          var n;
          let { className: o, children: u, isActive: c, ...d } = e,
            f = (0, i.gy)(t),
            { slots: p, isMenuOpen: g, classNames: h } = (0, r.q)(),
            m = (0, a.W)(null == h ? void 0 : h.menuItem, o);
          return (0, l.jsx)('li', {
            ref: f,
            className:
              null == (n = p.menuItem) ? void 0 : n.call(p, { class: m }),
            'data-active': (0, s.PB)(c),
            'data-open': (0, s.PB)(g),
            ...d,
            children: u,
          });
        });
      u.displayName = 'NextUI.NavbarMenuItem';
      var c = u;
    },
    86425: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r = n(43773),
        o = n(55971),
        i = n(26242),
        a = n(65263),
        s = n(57437),
        l = (0, o.Gp)((e, t) => {
          var n;
          let { as: o, className: l, children: u, ...c } = e,
            d = (0, i.gy)(t),
            { slots: f, classNames: p } = (0, r.q)(),
            g = (0, a.W)(null == p ? void 0 : p.brand, l);
          return (0, s.jsx)(o || 'div', {
            ref: d,
            className: null == (n = f.brand) ? void 0 : n.call(f, { class: g }),
            ...c,
            children: u,
          });
        });
      l.displayName = 'NextUI.NavbarBrand';
      var u = l;
    },
    70480: function (e, t, n) {
      'use strict';
      n.d(t, {
        g: function () {
          return h;
        },
      });
      var r = n(43783),
        o = n(2265),
        i = n(55971),
        a = n(43737),
        s = n(79046),
        l = n(60980),
        u = n(83582),
        c = n(34565),
        d = n(23663),
        f = n(25359),
        p = n(57437),
        g = (0, i.Gp)((e, t) => {
          let { as: n, children: i, className: g, ...h } = e,
            {
              Component: m,
              placement: v,
              backdrop: y,
              motionProps: b,
              disableAnimation: x,
              getPopoverProps: w,
              getDialogProps: k,
              getBackdropProps: S,
              getContentProps: P,
              isNonModal: E,
              onClose: L,
            } = (0, r.l)(),
            T = (0, o.useRef)(null),
            { dialogProps: C, titleProps: N } = (0, f.R)({}, T),
            O = k({ ref: T, ...C, ...h }),
            R = (0, p.jsxs)(p.Fragment, {
              children: [
                !E && (0, p.jsx)(a.U, { onDismiss: L }),
                (0, p.jsx)(n || m || 'div', {
                  ...O,
                  children: (0, p.jsx)('div', {
                    ...P({ className: g }),
                    children: 'function' == typeof i ? i(N) : i,
                  }),
                }),
                (0, p.jsx)(a.U, { onDismiss: L }),
              ],
            }),
            j = (0, o.useMemo)(
              () =>
                'transparent' === y
                  ? null
                  : x
                    ? (0, p.jsx)('div', { ...S() })
                    : (0, p.jsx)(l.X, {
                        features: u.H,
                        children: (0, p.jsx)(c.m.div, {
                          animate: 'enter',
                          exit: 'exit',
                          initial: 'exit',
                          variants: s.y7.fade,
                          ...S(),
                        }),
                      }),
              [y, x, S],
            ),
            K = x
              ? R
              : (0, p.jsx)(l.X, {
                  features: u.H,
                  children: (0, p.jsx)(c.m.div, {
                    animate: 'enter',
                    exit: 'exit',
                    initial: 'initial',
                    style: { ...(0, d.VS)('center' === v ? 'top' : v) },
                    variants: s.y7.scaleSpringOpacity,
                    ...b,
                    children: R,
                  }),
                });
          return (0, p.jsxs)('div', { ...w(), children: [j, K] });
        });
      g.displayName = 'NextUI.PopoverContent';
      var h = g;
    },
    86943: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return d;
        },
      });
      var r = n(43783),
        o = n(74654),
        i = n(2265),
        a = n(55971),
        s = n(92608),
        l = n(34446),
        u = n(57437),
        c = (0, a.Gp)((e, t) => {
          let { children: n, ...a } = e,
            c = (0, o.S)({ ...a, ref: t }),
            [d, f] = i.Children.toArray(n),
            p = (0, u.jsx)(s.aV, {
              portalContainer: c.portalContainer,
              children: f,
            });
          return (0, u.jsxs)(r.H, {
            value: c,
            children: [
              d,
              c.disableAnimation && c.isOpen
                ? p
                : (0, u.jsx)(l.M, { children: c.isOpen ? p : null }),
            ],
          });
        });
      c.displayName = 'NextUI.Popover';
      var d = c;
    },
    33822: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return f;
        },
      });
      var r = n(43783),
        o = n(2265),
        i = n(55971),
        a = n(37994),
        s = n(5150),
        l = n(41733),
        u = n(277),
        c = n(57437),
        d = (0, i.Gp)((e, t) => {
          let { triggerRef: n, getTriggerProps: i } = (0, r.l)(),
            { children: d, ...f } = e,
            p = (0, o.useMemo)(
              () =>
                'string' == typeof d
                  ? (0, c.jsx)('p', { children: d })
                  : o.Children.only(d),
              [d],
            ),
            {
              onPress: g,
              isDisabled: h,
              ...m
            } = (0, o.useMemo)(
              () => i((0, u.d)(f, p.props), p.ref),
              [i, p.props, f, p.ref],
            ),
            [, v] = (0, a.N)(d, l.A),
            { buttonProps: y } = (0, s.j)({ onPress: g, isDisabled: h }, n),
            b = (0, o.useMemo)(
              () => (null == v ? void 0 : v[0]) !== void 0,
              [v],
            );
          return (0, o.cloneElement)(
            p,
            (0, u.d)(m, b ? { onPress: g, isDisabled: h } : y),
          );
        });
      d.displayName = 'NextUI.PopoverTrigger';
      var f = d;
    },
    43783: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return r;
        },
        l: function () {
          return o;
        },
      });
      var [r, o] = (0, n(37561).k)({
        name: 'PopoverContext',
        errorMessage:
          'usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`',
      });
    },
    37994: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return o;
        },
      });
      var r = n(2265),
        o = (e, t) => {
          var n;
          let o = [];
          return [
            null ==
            (n = r.Children.map(e, (e) =>
              (0, r.isValidElement)(e) && e.type === t ? (o.push(e), null) : e,
            ))
              ? void 0
              : n.filter(Boolean),
            o.length >= 0 ? o : void 0,
          ];
        };
    },
    20092: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return x;
        },
      });
      var r = n(12094);
      let o = new Set([
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
        i = new Set([
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
      function a(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n =
              'function' == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return 'rtl' === n.direction;
          if (t.script) return o.has(t.script);
        }
        let t = e.split('-')[0];
        return i.has(t);
      }
      var s = n(2265),
        l = n(73165);
      let u = Symbol.for('react-aria.i18n.locale');
      function c() {
        let e =
          ('undefined' != typeof window && window[u]) ||
          ('undefined' != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          'en-US';
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch (t) {
          e = 'en-US';
        }
        return { locale: e, direction: a(e) ? 'rtl' : 'ltr' };
      }
      let d = c(),
        f = new Set();
      function p() {
        for (let e of ((d = c()), f)) e(d);
      }
      let g = s.createContext(null);
      function h(e) {
        let { locale: t, children: n } = e,
          r = (function () {
            let e = (0, l.Av)(),
              [t, n] = (0, s.useState)(d);
            return ((0, s.useEffect)(
              () => (
                0 === f.size && window.addEventListener('languagechange', p),
                f.add(n),
                () => {
                  f.delete(n),
                    0 === f.size &&
                      window.removeEventListener('languagechange', p);
                }
              ),
              [],
            ),
            e)
              ? { locale: 'en-US', direction: 'ltr' }
              : t;
          })(),
          o = s.useMemo(
            () => (t ? { locale: t, direction: a(t) ? 'rtl' : 'ltr' } : r),
            [r, t],
          );
        return s.createElement(g.Provider, { value: o }, n);
      }
      var m = n(22171),
        v = n(71671),
        y = n(565),
        b = n(57437),
        x = (e) => {
          let {
              children: t,
              navigate: n,
              useHref: o,
              disableAnimation: i = !1,
              disableRipple: a = !1,
              skipFramerMotionAnimations: l = i,
              validationBehavior: u = 'aria',
              locale: c = 'en-US',
              defaultDates: d,
              createCalendar: f,
              ...p
            } = e,
            g = t;
          n && (g = (0, b.jsx)(m.pG, { navigate: n, useHref: o, children: g }));
          let x = (0, s.useMemo)(
            () => (
              i && l && (y.c.skipAnimations = !0),
              {
                createCalendar: f,
                defaultDates: d,
                disableAnimation: i,
                disableRipple: a,
                validationBehavior: u,
              }
            ),
            [
              f,
              null == d ? void 0 : d.maxDate,
              null == d ? void 0 : d.minDate,
              i,
              a,
              u,
            ],
          );
          return (0, b.jsx)(r.a, {
            value: x,
            children: (0, b.jsx)(h, {
              locale: c,
              children: (0, b.jsx)(v.N3, { ...p, children: g }),
            }),
          });
        };
    },
    39166: function (e, t, n) {
      'use strict';
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(46896);
      function i(e, t = []) {
        let n = (0, r.useRef)(e);
        return (
          (0, o.G)(() => {
            n.current = e;
          }),
          (0, r.useCallback)((...e) => {
            var t;
            return null == (t = n.current) ? void 0 : t.call(n, ...e);
          }, t)
        );
      }
    },
    76801: function (e, t, n) {
      'use strict';
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(5722),
        o = n(2265),
        i = n(39166);
      function a(e = {}) {
        let {
            id: t,
            defaultOpen: n,
            isOpen: a,
            onClose: s,
            onOpen: l,
            onChange: u = () => {},
          } = e,
          c = (0, i.W)(l),
          d = (0, i.W)(s),
          [f, p] = (function (e, t, n) {
            let [r, i] = (0, o.useState)(e || t),
              a = (0, o.useRef)(void 0 !== e),
              s = void 0 !== e;
            (0, o.useEffect)(() => {
              let e = a.current;
              e !== s &&
                console.warn(
                  `WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${s ? 'controlled' : 'uncontrolled'}.`,
                ),
                (a.current = s);
            }, [s]);
            let l = s ? e : r,
              u = (0, o.useCallback)(
                (e, ...t) => {
                  let r = (e, ...t) => {
                    n && !Object.is(l, e) && n(e, ...t), s || (l = e);
                  };
                  'function' == typeof e
                    ? (console.warn(
                        'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
                      ),
                      i((n, ...o) => {
                        let i = e(s ? l : n, ...o);
                        return (r(i, ...t), s) ? n : i;
                      }))
                    : (s || i(e), r(e, ...t));
                },
                [s, l, n],
              );
            return [l, u];
          })(a, n || !1, u),
          g = (0, o.useId)(),
          h = t || g,
          m = void 0 !== a,
          v = (0, o.useCallback)(() => {
            m || p(!1), null == d || d();
          }, [m, d]),
          y = (0, o.useCallback)(() => {
            m || p(!0), null == c || c();
          }, [m, c]),
          b = (0, o.useCallback)(() => {
            (f ? v : y)();
          }, [f, y, v]);
        return {
          isOpen: !!f,
          onOpen: y,
          onClose: v,
          onOpenChange: b,
          isControlled: m,
          getButtonProps: (e = {}) => ({
            ...e,
            'aria-expanded': f,
            'aria-controls': h,
            onClick: (0, r.t)(e.onClick, b),
          }),
          getDisclosureProps: (e = {}) => ({ ...e, hidden: !f, id: h }),
        };
      }
    },
    18918: function (e, t, n) {
      'use strict';
      n.d(t, {
        l: function () {
          return o;
        },
      });
      var r = n(41821);
      function o(e = {}) {
        let { isReadOnly: t } = e,
          [n, o] = (0, r.z)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function (e) {
            t || o(e);
          },
          toggle: function () {
            t || o(!n);
          },
        };
      }
    },
    34583: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var r = n(82546),
        o = n(84179),
        i = [],
        a = i.forEach,
        s = i.slice,
        l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        u = function (e, t, n) {
          var r = n || {};
          r.path = r.path || '/';
          var o = encodeURIComponent(t),
            i = ''.concat(e, '=').concat(o);
          if (r.maxAge > 0) {
            var a = r.maxAge - 0;
            if (Number.isNaN(a)) throw Error('maxAge should be a Number');
            i += '; Max-Age='.concat(Math.floor(a));
          }
          if (r.domain) {
            if (!l.test(r.domain)) throw TypeError('option domain is invalid');
            i += '; Domain='.concat(r.domain);
          }
          if (r.path) {
            if (!l.test(r.path)) throw TypeError('option path is invalid');
            i += '; Path='.concat(r.path);
          }
          if (r.expires) {
            if ('function' != typeof r.expires.toUTCString)
              throw TypeError('option expires is invalid');
            i += '; Expires='.concat(r.expires.toUTCString());
          }
          if (
            (r.httpOnly && (i += '; HttpOnly'),
            r.secure && (i += '; Secure'),
            r.sameSite)
          )
            switch (
              'string' == typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
              case 'strict':
                i += '; SameSite=Strict';
                break;
              case 'lax':
                i += '; SameSite=Lax';
                break;
              case 'none':
                i += '; SameSite=None';
                break;
              default:
                throw TypeError('option sameSite is invalid');
            }
          return i;
        },
        c = {
          create: function (e, t, n, r) {
            var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { path: '/', sameSite: 'strict' };
            n &&
              ((o.expires = new Date()),
              o.expires.setTime(o.expires.getTime() + 6e4 * n)),
              r && (o.domain = r),
              (document.cookie = u(e, encodeURIComponent(t), o));
          },
          read: function (e) {
            for (
              var t = ''.concat(e, '='), n = document.cookie.split(';'), r = 0;
              r < n.length;
              r++
            ) {
              for (var o = n[r]; ' ' === o.charAt(0); )
                o = o.substring(1, o.length);
              if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
            }
            return null;
          },
          remove: function (e) {
            this.create(e, '', -1);
          },
        },
        d = {
          name: 'cookie',
          lookup: function (e) {
            var t;
            if (e.lookupCookie && 'undefined' != typeof document) {
              var n = c.read(e.lookupCookie);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupCookie &&
              'undefined' != typeof document &&
              c.create(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions,
              );
          },
        },
        f = {
          name: 'querystring',
          lookup: function (e) {
            var t;
            if ('undefined' != typeof window) {
              var n = window.location.search;
              !window.location.search &&
                window.location.hash &&
                window.location.hash.indexOf('?') > -1 &&
                (n = window.location.hash.substring(
                  window.location.hash.indexOf('?'),
                ));
              for (
                var r = n.substring(1).split('&'), o = 0;
                o < r.length;
                o++
              ) {
                var i = r[o].indexOf('=');
                i > 0 &&
                  r[o].substring(0, i) === e.lookupQuerystring &&
                  (t = r[o].substring(i + 1));
              }
            }
            return t;
          },
        },
        p = null,
        g = function () {
          if (null !== p) return p;
          try {
            p = 'undefined' !== window && null !== window.localStorage;
            var e = 'i18next.translate.boo';
            window.localStorage.setItem(e, 'foo'),
              window.localStorage.removeItem(e);
          } catch (e) {
            p = !1;
          }
          return p;
        },
        h = {
          name: 'localStorage',
          lookup: function (e) {
            var t;
            if (e.lookupLocalStorage && g()) {
              var n = window.localStorage.getItem(e.lookupLocalStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              g() &&
              window.localStorage.setItem(t.lookupLocalStorage, e);
          },
        },
        m = null,
        v = function () {
          if (null !== m) return m;
          try {
            m = 'undefined' !== window && null !== window.sessionStorage;
            var e = 'i18next.translate.boo';
            window.sessionStorage.setItem(e, 'foo'),
              window.sessionStorage.removeItem(e);
          } catch (e) {
            m = !1;
          }
          return m;
        },
        y = {
          name: 'sessionStorage',
          lookup: function (e) {
            var t;
            if (e.lookupSessionStorage && v()) {
              var n = window.sessionStorage.getItem(e.lookupSessionStorage);
              n && (t = n);
            }
            return t;
          },
          cacheUserLanguage: function (e, t) {
            t.lookupSessionStorage &&
              v() &&
              window.sessionStorage.setItem(t.lookupSessionStorage, e);
          },
        },
        b = {
          name: 'navigator',
          lookup: function (e) {
            var t = [];
            if ('undefined' != typeof navigator) {
              if (navigator.languages)
                for (var n = 0; n < navigator.languages.length; n++)
                  t.push(navigator.languages[n]);
              navigator.userLanguage && t.push(navigator.userLanguage),
                navigator.language && t.push(navigator.language);
            }
            return t.length > 0 ? t : void 0;
          },
        },
        x = {
          name: 'htmlTag',
          lookup: function (e) {
            var t,
              n =
                e.htmlTag ||
                ('undefined' != typeof document
                  ? document.documentElement
                  : null);
            return (
              n &&
                'function' == typeof n.getAttribute &&
                (t = n.getAttribute('lang')),
              t
            );
          },
        },
        w = {
          name: 'path',
          lookup: function (e) {
            var t;
            if ('undefined' != typeof window) {
              var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (n instanceof Array) {
                if ('number' == typeof e.lookupFromPathIndex) {
                  if ('string' != typeof n[e.lookupFromPathIndex]) return;
                  t = n[e.lookupFromPathIndex].replace('/', '');
                } else t = n[0].replace('/', '');
              }
            }
            return t;
          },
        },
        k = {
          name: 'subdomain',
          lookup: function (e) {
            var t =
                'number' == typeof e.lookupFromSubdomainIndex
                  ? e.lookupFromSubdomainIndex + 1
                  : 1,
              n =
                'undefined' != typeof window &&
                window.location &&
                window.location.hostname &&
                window.location.hostname.match(
                  /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
                );
            if (n) return n[t];
          },
        },
        S = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (0, r.Z)(this, e),
              (this.type = 'languageDetector'),
              (this.detectors = {}),
              this.init(t, n);
          }
          return (
            (0, o.Z)(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  (this.services = e || { languageUtils: {} }),
                    (this.options = (function (e) {
                      return (
                        a.call(s.call(arguments, 1), function (t) {
                          if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                        }),
                        e
                      );
                    })(t, this.options || {}, {
                      order: [
                        'querystring',
                        'cookie',
                        'localStorage',
                        'sessionStorage',
                        'navigator',
                        'htmlTag',
                      ],
                      lookupQuerystring: 'lng',
                      lookupCookie: 'i18next',
                      lookupLocalStorage: 'i18nextLng',
                      lookupSessionStorage: 'i18nextLng',
                      caches: ['localStorage'],
                      excludeCacheFor: ['cimode'],
                      convertDetectedLanguage: function (e) {
                        return e;
                      },
                    })),
                    'string' == typeof this.options.convertDetectedLanguage &&
                      this.options.convertDetectedLanguage.indexOf('15897') >
                        -1 &&
                      (this.options.convertDetectedLanguage = function (e) {
                        return e.replace('-', '_');
                      }),
                    this.options.lookupFromUrlIndex &&
                      (this.options.lookupFromPathIndex =
                        this.options.lookupFromUrlIndex),
                    (this.i18nOptions = n),
                    this.addDetector(d),
                    this.addDetector(f),
                    this.addDetector(h),
                    this.addDetector(y),
                    this.addDetector(b),
                    this.addDetector(x),
                    this.addDetector(w),
                    this.addDetector(k);
                },
              },
              {
                key: 'addDetector',
                value: function (e) {
                  return (this.detectors[e.name] = e), this;
                },
              },
              {
                key: 'detect',
                value: function (e) {
                  var t = this;
                  e || (e = this.options.order);
                  var n = [];
                  return (e.forEach(function (e) {
                    if (t.detectors[e]) {
                      var r = t.detectors[e].lookup(t.options);
                      r && 'string' == typeof r && (r = [r]),
                        r && (n = n.concat(r));
                    }
                  }),
                  (n = n.map(function (e) {
                    return t.options.convertDetectedLanguage(e);
                  })),
                  this.services.languageUtils.getBestMatchFromCodes)
                    ? n
                    : n.length > 0
                      ? n[0]
                      : null;
                },
              },
              {
                key: 'cacheUserLanguage',
                value: function (e, t) {
                  var n = this;
                  t || (t = this.options.caches),
                    t &&
                      ((this.options.excludeCacheFor &&
                        this.options.excludeCacheFor.indexOf(e) > -1) ||
                        t.forEach(function (t) {
                          n.detectors[t] &&
                            n.detectors[t].cacheUserLanguage(e, n.options);
                        }));
                },
              },
            ]),
            e
          );
        })();
      S.type = 'languageDetector';
    },
    46027: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return ee;
        },
      });
      let r = {
        type: 'logger',
        log(e) {
          this.output('log', e);
        },
        warn(e) {
          this.output('warn', e);
        },
        error(e) {
          this.output('error', e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class o {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || 'i18next:'),
            (this.logger = e || r),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, 'log', '', !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, 'warn', '', !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, 'error', '');
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ('string' == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new o(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new o(this.logger, e)
          );
        }
      }
      var i = new o();
      class a {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(' ').forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let e = 0; e < r; e++) t(...n);
            }),
            this.observers['*'] &&
              Array.from(this.observers['*'].entries()).forEach((t) => {
                let [r, o] = t;
                for (let t = 0; t < o; t++) r.apply(r, [e, ...n]);
              });
        }
      }
      let s = () => {
          let e, t;
          let n = new Promise((n, r) => {
            (e = n), (t = r);
          });
          return (n.resolve = e), (n.reject = t), n;
        },
        l = (e) => (null == e ? '' : '' + e),
        u = (e, t, n) => {
          e.forEach((e) => {
            t[e] && (n[e] = t[e]);
          });
        },
        c = /###/g,
        d = (e) => (e && e.indexOf('###') > -1 ? e.replace(c, '.') : e),
        f = (e) => !e || 'string' == typeof e,
        p = (e, t, n) => {
          let r = 'string' != typeof t ? t : t.split('.'),
            o = 0;
          for (; o < r.length - 1; ) {
            if (f(e)) return {};
            let t = d(r[o]);
            !e[t] && n && (e[t] = new n()),
              (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
              ++o;
          }
          return f(e) ? {} : { obj: e, k: d(r[o]) };
        },
        g = (e, t, n) => {
          let { obj: r, k: o } = p(e, t, Object);
          if (void 0 !== r || 1 === t.length) {
            r[o] = n;
            return;
          }
          let i = t[t.length - 1],
            a = t.slice(0, t.length - 1),
            s = p(e, a, Object);
          for (; void 0 === s.obj && a.length; )
            (i = `${a[a.length - 1]}.${i}`),
              (s = p(e, (a = a.slice(0, a.length - 1)), Object)) &&
                s.obj &&
                void 0 !== s.obj[`${s.k}.${i}`] &&
                (s.obj = void 0);
          s.obj[`${s.k}.${i}`] = n;
        },
        h = (e, t, n, r) => {
          let { obj: o, k: i } = p(e, t, Object);
          (o[i] = o[i] || []), o[i].push(n);
        },
        m = (e, t) => {
          let { obj: n, k: r } = p(e, t);
          if (n) return n[r];
        },
        v = (e, t, n) => {
          let r = m(e, n);
          return void 0 !== r ? r : m(t, n);
        },
        y = (e, t, n) => {
          for (let r in t)
            '__proto__' !== r &&
              'constructor' !== r &&
              (r in e
                ? 'string' == typeof e[r] ||
                  e[r] instanceof String ||
                  'string' == typeof t[r] ||
                  t[r] instanceof String
                  ? n && (e[r] = t[r])
                  : y(e[r], t[r], n)
                : (e[r] = t[r]));
          return e;
        },
        b = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      var x = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };
      let w = (e) =>
        'string' == typeof e ? e.replace(/[&<>"'\/]/g, (e) => x[e]) : e;
      class k {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, n),
            this.regExpQueue.push(e),
            n
          );
        }
      }
      let S = [' ', ',', '?', '!', ';'],
        P = new k(20),
        E = (e, t, n) => {
          (t = t || ''), (n = n || '');
          let r = S.filter((e) => 0 > t.indexOf(e) && 0 > n.indexOf(e));
          if (0 === r.length) return !0;
          let o = P.getRegExp(
              `(${r.map((e) => ('?' === e ? '\\?' : e)).join('|')})`,
            ),
            i = !o.test(e);
          if (!i) {
            let t = e.indexOf(n);
            t > 0 && !o.test(e.substring(0, t)) && (i = !0);
          }
          return i;
        },
        L = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : '.';
          if (!e) return;
          if (e[t]) return e[t];
          let r = t.split(n),
            o = e;
          for (let e = 0; e < r.length; ) {
            let t;
            if (!o || 'object' != typeof o) return;
            let i = '';
            for (let a = e; a < r.length; ++a)
              if ((a !== e && (i += n), (i += r[a]), void 0 !== (t = o[i]))) {
                if (
                  ['string', 'number', 'boolean'].indexOf(typeof t) > -1 &&
                  a < r.length - 1
                )
                  continue;
                e += a - e + 1;
                break;
              }
            o = t;
          }
          return o;
        },
        T = (e) => (e && e.indexOf('_') > 0 ? e.replace('_', '-') : e);
      class C extends a {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ['translation'], defaultNS: 'translation' };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = '.'),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            a =
              void 0 !== o.ignoreJSONStructure
                ? o.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf('.') > -1
            ? (r = e.split('.'))
            : ((r = [e, t]),
              n &&
                (Array.isArray(n)
                  ? r.push(...n)
                  : 'string' == typeof n && i
                    ? r.push(...n.split(i))
                    : r.push(n)));
          let s = m(this.data, r);
          return (!s &&
            !t &&
            !n &&
            e.indexOf('.') > -1 &&
            ((e = r[0]), (t = r[1]), (n = r.slice(2).join('.'))),
          s || !a || 'string' != typeof n)
            ? s
            : L(this.data && this.data[e] && this.data[e][t], n, i);
        }
        addResource(e, t, n, r) {
          let o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            a = [e, t];
          n && (a = a.concat(i ? n.split(i) : n)),
            e.indexOf('.') > -1 && ((a = e.split('.')), (r = t), (t = a[1])),
            this.addNamespaces(t),
            g(this.data, a, r),
            o.silent || this.emit('added', e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let r in n)
            ('string' == typeof n[r] || Array.isArray(n[r])) &&
              this.addResource(e, t, r, n[r], { silent: !0 });
          r.silent || this.emit('added', e, t, n);
        }
        addResourceBundle(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            a = [e, t];
          e.indexOf('.') > -1 &&
            ((a = e.split('.')), (r = n), (n = t), (t = a[1])),
            this.addNamespaces(t);
          let s = m(this.data, a) || {};
          i.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r ? y(s, n, o) : (s = { ...s, ...n }),
            g(this.data, a, s),
            i.silent || this.emit('added', e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit('removed', e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          'v1' === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0,
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var N = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, o) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, o));
            }),
            t
          );
        },
      };
      let O = {};
      class R extends a {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            u(
              [
                'resourceStore',
                'languageUtils',
                'pluralResolver',
                'interpolator',
                'backendConnector',
                'i18nFormat',
                'utils',
              ],
              e,
              this,
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = '.'),
            (this.logger = i.create('translator'));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ':');
          let r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            o = t.ns || this.options.defaultNS || [],
            i = n && e.indexOf(n) > -1,
            a =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !E(e, n, r);
          if (i && !a) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: o };
            let i = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(i[0]) > -1)) &&
              (o = i.shift()),
              (e = i.join(r));
          }
          return 'string' == typeof o && (o = [o]), { key: e, namespaces: o };
        }
        translate(e, t, n) {
          if (
            ('object' != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            'object' == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return '';
          Array.isArray(e) || (e = [String(e)]);
          let r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            o =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: i, namespaces: a } = this.extractFromKey(e[e.length - 1], t),
            s = a[a.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && 'cimode' === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: `${s}${e}${i}`,
                    usedKey: i,
                    exactUsedKey: i,
                    usedLng: l,
                    usedNS: s,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${s}${e}${i}`;
            }
            return r
              ? {
                  res: i,
                  usedKey: i,
                  exactUsedKey: i,
                  usedLng: l,
                  usedNS: s,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : i;
          }
          let c = this.resolve(e, t),
            d = c && c.res,
            f = (c && c.usedKey) || i,
            p = (c && c.exactUsedKey) || i,
            g = Object.prototype.toString.apply(d),
            h =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            v =
              'string' != typeof d &&
              'boolean' != typeof d &&
              'number' != typeof d;
          if (
            m &&
            d &&
            v &&
            0 >
              [
                '[object Number]',
                '[object Function]',
                '[object RegExp]',
              ].indexOf(g) &&
            !('string' == typeof h && Array.isArray(d))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  'accessing an object - but returnObjects options is not enabled!',
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(f, d, { ...t, ns: a })
                : `key '${i} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (o) {
              let e = Array.isArray(d),
                n = e ? [] : {},
                r = e ? p : f;
              for (let e in d)
                if (Object.prototype.hasOwnProperty.call(d, e)) {
                  let i = `${r}${o}${e}`;
                  (n[e] = this.translate(i, { ...t, joinArrays: !1, ns: a })),
                    n[e] === i && (n[e] = d[e]);
                }
              d = n;
            }
          } else if (m && 'string' == typeof h && Array.isArray(d))
            (d = d.join(h)) && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              a = !1,
              u = void 0 !== t.count && 'string' != typeof t.count,
              f = R.hasDefaultValue(t),
              p = u ? this.pluralResolver.getSuffix(l, t.count, t) : '',
              g =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : '',
              h =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (h && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${p}`] ||
                t[`defaultValue${g}`] ||
                t.defaultValue;
            !this.isValidLookup(d) && f && ((r = !0), (d = m)),
              this.isValidLookup(d) || ((a = !0), (d = i));
            let v =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                a
                  ? void 0
                  : d,
              y = f && m !== d && this.options.updateMissing;
            if (a || r || y) {
              if (
                (this.logger.log(
                  y ? 'updateKey' : 'missingKey',
                  l,
                  s,
                  i,
                  y ? m : d,
                ),
                o)
              ) {
                let e = this.resolve(i, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                  );
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language,
                );
              if ('fallback' === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                'all' === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language,
                    ))
                  : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let o = f && r !== d ? r : v;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, s, n, o, y, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, s, n, o, y, t),
                  this.emit('missingKey', e, s, n, d);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      h &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], i + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, i, m));
            }
            (d = this.extendTranslation(d, e, t, c, n)),
              a &&
                d === i &&
                this.options.appendNamespaceToMissingKey &&
                (d = `${s}:${i}`),
              (a || r) &&
                this.options.parseMissingKeyHandler &&
                (d =
                  'v1' !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${s}:${i}`
                          : i,
                        r ? d : void 0,
                      )
                    : this.options.parseMissingKeyHandler(d));
          }
          return r
            ? ((c.res = d), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : d;
        }
        extendTranslation(e, t, n, r, o) {
          var i = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r },
            );
          else if (!n.skipInterpolation) {
            let a;
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            let s =
              'string' == typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (s) {
              let t = e.match(this.interpolator.nestingRegexp);
              a = t && t.length;
            }
            let l = n.replace && 'string' != typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language || r.usedLng,
                n,
              )),
              s)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              a < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              'v1' !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = this.language || r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = Array(e), a = 0;
                      a < e;
                      a++
                    )
                      r[a] = arguments[a];
                    return o && o[0] === r[0] && !n.context
                      ? (i.logger.warn(
                          `It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`,
                        ),
                        null)
                      : i.translate(...r, t);
                  },
                  n,
                )),
              n.interpolation && this.interpolator.reset();
          }
          let a = n.postProcess || this.options.postProcess,
            s = 'string' == typeof a ? [a] : a;
          return (
            null != e &&
              s &&
              s.length &&
              !1 !== n.applyPostProcessor &&
              (e = N.handle(
                s,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this,
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            o,
            i,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            'string' == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let s = this.extractFromKey(e, a),
                l = s.key;
              n = l;
              let u = s.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== a.count && 'string' != typeof a.count,
                d =
                  c &&
                  !a.ordinal &&
                  0 === a.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                f =
                  void 0 !== a.context &&
                  ('string' == typeof a.context ||
                    'number' == typeof a.context) &&
                  '' !== a.context,
                p = a.lngs
                  ? a.lngs
                  : this.languageUtils.toResolveHierarchy(
                      a.lng || this.language,
                      a.fallbackLng,
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((i = e),
                  !O[`${p[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(i) &&
                    ((O[`${p[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${p.join(', ')}" won't get resolved as namespace "${i}" was not yet loaded`,
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                    )),
                  p.forEach((n) => {
                    let i;
                    if (this.isValidLookup(t)) return;
                    o = n;
                    let s = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(s, l, n, e, a);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, a.count, a));
                      let t = `${this.options.pluralSeparator}zero`,
                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (s.push(l + e),
                          a.ordinal &&
                            0 === e.indexOf(r) &&
                            s.push(
                              l + e.replace(r, this.options.pluralSeparator),
                            ),
                          d && s.push(l + t)),
                        f)
                      ) {
                        let n = `${l}${this.options.contextSeparator}${a.context}`;
                        s.push(n),
                          c &&
                            (s.push(n + e),
                            a.ordinal &&
                              0 === e.indexOf(r) &&
                              s.push(
                                n + e.replace(r, this.options.pluralSeparator),
                              ),
                            d && s.push(n + t));
                      }
                    }
                    for (; (i = s.pop()); )
                      this.isValidLookup(t) ||
                        ((r = i), (t = this.getResource(n, e, i, a)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && '' === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && 'string' != typeof e.replace,
            n = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (n.count = e.count),
            this.options.interpolation.defaultVariables &&
              (n = { ...this.options.interpolation.defaultVariables, ...n }),
            !t)
          )
            for (let e of ((n = { ...n }),
            [
              'defaultValue',
              'ordinal',
              'context',
              'replace',
              'lng',
              'lngs',
              'fallbackLng',
              'ns',
              'keySeparator',
              'nsSeparator',
              'returnObjects',
              'returnDetails',
              'joinArrays',
              'postProcess',
              'interpolation',
            ]))
              delete n[e];
          return n;
        }
        static hasDefaultValue(e) {
          let t = 'defaultValue';
          for (let n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      let j = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      class K {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = i.create('languageUtils'));
        }
        getScriptPartFromCode(e) {
          if (!(e = T(e)) || 0 > e.indexOf('-')) return null;
          let t = e.split('-');
          return 2 === t.length
            ? null
            : (t.pop(), 'x' === t[t.length - 1].toLowerCase())
              ? null
              : this.formatLanguageCode(t.join('-'));
        }
        getLanguagePartFromCode(e) {
          if (!(e = T(e)) || 0 > e.indexOf('-')) return e;
          let t = e.split('-');
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ('string' == typeof e && e.indexOf('-') > -1) {
            let t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
              n = e.split('-');
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                  ? ((n[0] = n[0].toLowerCase()),
                    (n[1] = n[1].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = j(n[1].toLowerCase())))
                  : 3 === n.length &&
                    ((n[0] = n[0].toLowerCase()),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    'sgn' !== n[0] &&
                      2 === n[2].length &&
                      (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = j(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 &&
                      (n[2] = j(n[2].toLowerCase()))),
              n.join('-')
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ('languageOnly' === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) &&
                  (t = n);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let n = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(n)) return (t = n);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === n ||
                      (!(0 > e.indexOf('-') && 0 > n.indexOf('-')) &&
                        ((e.indexOf('-') > 0 &&
                          0 > n.indexOf('-') &&
                          e.substring(0, e.indexOf('-')) === n) ||
                          (0 === e.indexOf(n) && n.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ('function' == typeof e && (e = e(t)),
            'string' == typeof e && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            o = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`,
                    ));
            };
          return (
            'string' == typeof e && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
              ? ('languageOnly' !== this.options.load &&
                  o(this.formatLanguageCode(e)),
                'languageOnly' !== this.options.load &&
                  'currentOnly' !== this.options.load &&
                  o(this.getScriptPartFromCode(e)),
                'currentOnly' !== this.options.load &&
                  o(this.getLanguagePartFromCode(e)))
              : 'string' == typeof e && o(this.formatLanguageCode(e)),
            n.forEach((e) => {
              0 > r.indexOf(e) && o(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let M = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        I = {
          1: (e) => Number(e > 1),
          2: (e) => Number(1 != e),
          3: (e) => 0,
          4: (e) =>
            Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          5: (e) =>
            Number(
              0 == e
                ? 0
                : 1 == e
                  ? 1
                  : 2 == e
                    ? 2
                    : e % 100 >= 3 && e % 100 <= 10
                      ? 3
                      : e % 100 >= 11
                        ? 4
                        : 5,
            ),
          6: (e) => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
          7: (e) =>
            Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          8: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
          9: (e) => Number(e >= 2),
          10: (e) =>
            Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
          11: (e) =>
            Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3,
            ),
          12: (e) => Number(e % 10 != 1 || e % 100 == 11),
          13: (e) => Number(0 !== e),
          14: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
          15: (e) =>
            Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          16: (e) => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
          17: (e) => Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
          18: (e) => Number(0 == e ? 0 : 1 == e ? 1 : 2),
          19: (e) =>
            Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3,
            ),
          20: (e) =>
            Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            ),
          21: (e) =>
            Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0,
            ),
          22: (e) =>
            Number(
              1 == e
                ? 0
                : 2 == e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3,
            ),
        },
        A = ['v1', 'v2', 'v3'],
        D = ['v4'],
        F = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        _ = () => {
          let e = {};
          return (
            M.forEach((t) => {
              t.lngs.forEach((n) => {
                e[n] = { numbers: t.nr, plurals: I[t.fc] };
              });
            }),
            e
          );
        };
      class $ {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = i.create('pluralResolver')),
            (!this.options.compatibilityJSON ||
              D.includes(this.options.compatibilityJSON)) &&
              ('undefined' == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = 'v3'),
              this.logger.error(
                'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
              )),
            (this.rules = _()),
            (this.pluralRulesCache = {});
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        clearCache() {
          this.pluralRulesCache = {};
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              let n = T('dev' === e ? 'en' : e),
                r = t.ordinal ? 'ordinal' : 'cardinal',
                o = JSON.stringify({ cleanedCode: n, type: r });
              if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
              let i = new Intl.PluralRules(n, { type: r });
              return (this.pluralRulesCache[o] = i), i;
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => F[e] - F[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ''}${e}`,
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${r.select(t)}`
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), '');
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = 'plural') : 1 === r && (r = ''));
          let o = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return 'v1' === this.options.compatibilityJSON
            ? 1 === r
              ? ''
              : 'number' == typeof r
                ? `_plural_${r.toString()}`
                : o()
            : 'v2' === this.options.compatibilityJSON ||
                (this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0])
              ? o()
              : this.options.prepend && n.toString()
                ? this.options.prepend + n.toString()
                : n.toString();
        }
        shouldUseIntlApi() {
          return !A.includes(this.options.compatibilityJSON);
        }
      }
      let B = function (e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : '.',
            o =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            i = v(e, t, n);
          return (
            !i &&
              o &&
              'string' == typeof n &&
              void 0 === (i = L(e, n, r)) &&
              (i = L(t, n, r)),
            i
          );
        },
        U = (e) => e.replace(/\$/g, '$$$$');
      class z {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = i.create('interpolator')),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let {
            escape: t,
            escapeValue: n,
            useRawValueToEscape: r,
            prefix: o,
            prefixEscaped: i,
            suffix: a,
            suffixEscaped: s,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: d,
            nestingPrefixEscaped: f,
            nestingSuffix: p,
            nestingSuffixEscaped: g,
            nestingOptionsSeparator: h,
            maxReplaces: m,
            alwaysFormat: v,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : w),
            (this.escapeValue = void 0 === n || n),
            (this.useRawValueToEscape = void 0 !== r && r),
            (this.prefix = o ? b(o) : i || '{{'),
            (this.suffix = a ? b(a) : s || '}}'),
            (this.formatSeparator = l || ','),
            (this.unescapePrefix = u ? '' : c || '-'),
            (this.unescapeSuffix = this.unescapePrefix ? '' : u || ''),
            (this.nestingPrefix = d ? b(d) : f || b('$t(')),
            (this.nestingSuffix = p ? b(p) : g || b(')')),
            (this.nestingOptionsSeparator = h || ','),
            (this.maxReplaces = m || 1e3),
            (this.alwaysFormat = void 0 !== v && v),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, 'g');
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
            ));
        }
        interpolate(e, t, n, r) {
          let o, i, a;
          let s =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {},
            u = (e) => {
              if (0 > e.indexOf(this.formatSeparator)) {
                let o = B(
                  t,
                  s,
                  e,
                  this.options.keySeparator,
                  this.options.ignoreJSONStructure,
                );
                return this.alwaysFormat
                  ? this.format(o, void 0, n, {
                      ...r,
                      ...t,
                      interpolationkey: e,
                    })
                  : o;
              }
              let o = e.split(this.formatSeparator),
                i = o.shift().trim(),
                a = o.join(this.formatSeparator).trim();
              return this.format(
                B(
                  t,
                  s,
                  i,
                  this.options.keySeparator,
                  this.options.ignoreJSONStructure,
                ),
                a,
                n,
                { ...r, ...t, interpolationkey: i },
              );
            };
          this.resetRegExp();
          let c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            d =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => U(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? U(this.escape(e)) : U(e)),
              },
            ].forEach((t) => {
              for (a = 0; (o = t.regex.exec(e)); ) {
                let n = o[1].trim();
                if (void 0 === (i = u(n))) {
                  if ('function' == typeof c) {
                    let t = c(e, o, r);
                    i = 'string' == typeof t ? t : '';
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    i = '';
                  else if (d) {
                    i = o[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${n} for interpolating ${e}`,
                    ),
                      (i = '');
                } else
                  'string' == typeof i ||
                    this.useRawValueToEscape ||
                    (i = l(i));
                let s = t.safeValue(i);
                if (
                  ((e = e.replace(o[0], s)),
                  d
                    ? ((t.regex.lastIndex += i.length),
                      (t.regex.lastIndex -= o[0].length))
                    : (t.regex.lastIndex = 0),
                  ++a >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            o,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a = (e, t) => {
              let n = this.nestingOptionsSeparator;
              if (0 > e.indexOf(n)) return e;
              let r = e.split(RegExp(`${n}[ ]*{`)),
                i = `{${r[1]}`;
              e = r[0];
              let a = (i = this.interpolate(i, o)).match(/'/g),
                s = i.match(/"/g);
              ((a && a.length % 2 == 0 && !s) || s.length % 2 != 0) &&
                (i = i.replace(/'/g, '"'));
              try {
                (o = JSON.parse(i)), t && (o = { ...t, ...o });
              } catch (t) {
                return (
                  this.logger.warn(
                    `failed parsing options string in nesting for key ${e}`,
                    t,
                  ),
                  `${e}${n}${i}`
                );
              }
              return (
                o.defaultValue &&
                  o.defaultValue.indexOf(this.prefix) > -1 &&
                  delete o.defaultValue,
                e
              );
            };
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let s = [];
            ((o =
              (o = { ...i }).replace && 'string' != typeof o.replace
                ? o.replace
                : o).applyPostProcessor = !1),
              delete o.defaultValue;
            let u = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              let e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (s = e), (u = !0);
            }
            if (
              (r = t(a.call(this, n[1].trim(), o), o)) &&
              n[0] === e &&
              'string' != typeof r
            )
              return r;
            'string' != typeof r && (r = l(r)),
              r ||
                (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                (r = '')),
              u &&
                (r = s.reduce(
                  (e, t) =>
                    this.format(e, t, i.lng, {
                      ...i,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim(),
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      let W = (e) => {
          let t = e.toLowerCase().trim(),
            n = {};
          if (e.indexOf('(') > -1) {
            let r = e.split('(');
            t = r[0].toLowerCase().trim();
            let o = r[1].substring(0, r[1].length - 1);
            'currency' === t && 0 > o.indexOf(':')
              ? n.currency || (n.currency = o.trim())
              : 'relativetime' === t && 0 > o.indexOf(':')
                ? n.range || (n.range = o.trim())
                : o.split(';').forEach((e) => {
                    if (e) {
                      let [t, ...r] = e.split(':'),
                        o = r
                          .join(':')
                          .trim()
                          .replace(/^'+|'+$/g, ''),
                        i = t.trim();
                      n[i] || (n[i] = o),
                        'false' === o && (n[i] = !1),
                        'true' === o && (n[i] = !0),
                        isNaN(o) || (n[i] = parseInt(o, 10));
                    }
                  });
          }
          return { formatName: t, formatOptions: n };
        },
        H = (e) => {
          let t = {};
          return (n, r, o) => {
            let i = o;
            o &&
              o.interpolationkey &&
              o.formatParams &&
              o.formatParams[o.interpolationkey] &&
              o[o.interpolationkey] &&
              (i = { ...i, [o.interpolationkey]: void 0 });
            let a = r + JSON.stringify(i),
              s = t[a];
            return s || ((s = e(T(r), o)), (t[a] = s)), s(n);
          };
        };
      class V {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = i.create('formatter')),
            (this.options = e),
            (this.formats = {
              number: H((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: H((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: 'currency' });
                return (e) => n.format(e);
              }),
              datetime: H((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: H((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || 'day');
              }),
              list: H((e, t) => {
                let n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator
            ? n.formatSeparator
            : n.formatSeparator || ',';
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = H(t);
        }
        format(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o = t.split(this.formatSeparator);
          if (
            o.length > 1 &&
            o[0].indexOf('(') > 1 &&
            0 > o[0].indexOf(')') &&
            o.find((e) => e.indexOf(')') > -1)
          ) {
            let e = o.findIndex((e) => e.indexOf(')') > -1);
            o[0] = [o[0], ...o.splice(1, e)].join(this.formatSeparator);
          }
          return o.reduce((e, t) => {
            let { formatName: o, formatOptions: i } = W(t);
            if (this.formats[o]) {
              let t = e;
              try {
                let a =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  s = a.locale || a.lng || r.locale || r.lng || n;
                t = this.formats[o](e, s, { ...i, ...r, ...a });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${o}`), e;
          }, e);
        }
      }
      let G = (e, t) => {
        void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--);
      };
      class q extends a {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = i.create('backendConnector')),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          let o = {},
            i = {},
            a = {},
            s = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                let a = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[a] = 2)
                  : this.state[a] < 0 ||
                    (1 === this.state[a]
                      ? void 0 === i[a] && (i[a] = !0)
                      : ((this.state[a] = 1),
                        (r = !1),
                        void 0 === i[a] && (i[a] = !0),
                        void 0 === o[a] && (o[a] = !0),
                        void 0 === s[t] && (s[t] = !0)));
              }),
                r || (a[e] = !0);
            }),
            (Object.keys(o).length || Object.keys(i).length) &&
              this.queue.push({
                pending: i,
                pendingCount: Object.keys(i).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(o),
              pending: Object.keys(i),
              toLoadLanguages: Object.keys(a),
              toLoadNamespaces: Object.keys(s),
            }
          );
        }
        loaded(e, t, n) {
          let r = e.split('|'),
            o = r[0],
            i = r[1];
          t && this.emit('failedLoading', o, i, t),
            !t &&
              n &&
              this.store.addResourceBundle(o, i, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2),
            t && n && (this.state[e] = 0);
          let a = {};
          this.queue.forEach((n) => {
            h(n.loaded, [o], i),
              G(n, e),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  a[e] || (a[e] = {});
                  let t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === a[e][t] && (a[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit('loaded', a),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            i = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return i(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: o,
              callback: i,
            });
            return;
          }
          this.readingCalls++;
          let a = (a, s) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (a && s && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * o, i);
                }, o);
                return;
              }
              i(a, s);
            },
            s = this.backend[n].bind(this.backend);
          if (2 === s.length) {
            try {
              let n = s(e, t);
              n && 'function' == typeof n.then
                ? n.then((e) => a(null, e)).catch(a)
                : a(null, n);
            } catch (e) {
              a(e);
            }
            return;
          }
          return s(e, t, a);
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                'No backend was added via i18next.use. Will not load resources.',
              ),
              r && r()
            );
          'string' == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            'string' == typeof t && (t = [t]);
          let o = this.queueLoad(e, t, n, r);
          if (!o.toLoad.length) return o.pending.length || r(), null;
          o.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            n = e.split('|'),
            r = n[0],
            o = n[1];
          this.read(r, o, 'read', void 0, void 0, (n, i) => {
            n &&
              this.logger.warn(
                `${t}loading namespace ${o} for language ${r} failed`,
                n,
              ),
              !n &&
                i &&
                this.logger.log(
                  `${t}loaded namespace ${o} for language ${r}`,
                  i,
                ),
              this.loaded(e, n, i);
          });
        }
        saveMissing(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
            );
            return;
          }
          if (null != n && '' !== n) {
            if (this.backend && this.backend.create) {
              let s = { ...i, isUpdate: o },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let o;
                  (o = 5 === l.length ? l(e, t, n, r, s) : l(e, t, n, r)) &&
                  'function' == typeof o.then
                    ? o.then((e) => a(null, e)).catch(a)
                    : a(null, o);
                } catch (e) {
                  a(e);
                }
              else l(e, t, n, r, a, s);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      let Y = () => ({
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: (e) => {
            let t = {};
            if (
              ('object' == typeof e[1] && (t = e[1]),
              'string' == typeof e[1] && (t.defaultValue = e[1]),
              'string' == typeof e[2] && (t.tDescription = e[2]),
              'object' == typeof e[2] || 'object' == typeof e[3])
            ) {
              let n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        }),
        J = (e) => (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf('cimode') &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        ),
        X = () => {},
        Z = (e) => {
          Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
            'function' == typeof e[t] && (e[t] = e[t].bind(e));
          });
        };
      class Q extends a {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = J(e)),
            (this.services = {}),
            (this.logger = i),
            (this.modules = { external: [] }),
            Z(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            'function' == typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ('string' == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf('translation') && (t.defaultNS = t.ns[0]));
          let r = Y();
          (this.options = { ...r, ...this.options, ...J(t) }),
            'v1' !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator);
          let o = (e) => (e ? ('function' == typeof e ? new e() : e) : null);
          if (!this.options.isClone) {
            let t;
            this.modules.logger
              ? i.init(o(this.modules.logger), this.options)
              : i.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : 'undefined' != typeof Intl && (t = V);
            let n = new K(this.options);
            this.store = new C(this.options.resources, this.options);
            let a = this.services;
            (a.logger = i),
              (a.resourceStore = this.store),
              (a.languageUtils = n),
              (a.pluralResolver = new $(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    r.interpolation.format) &&
                ((a.formatter = o(t)),
                a.formatter.init(a, this.options),
                (this.options.interpolation.format = a.formatter.format.bind(
                  a.formatter,
                ))),
              (a.interpolator = new z(this.options)),
              (a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (a.backendConnector = new q(
                o(this.modules.backend),
                a.resourceStore,
                a,
                this.options,
              )),
              a.backendConnector.on('*', function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((a.languageDetector = o(this.modules.languageDetector)),
                a.languageDetector.init &&
                  a.languageDetector.init(
                    a,
                    this.options.detection,
                    this.options,
                  )),
              this.modules.i18nFormat &&
                ((a.i18nFormat = o(this.modules.i18nFormat)),
                a.i18nFormat.init && a.i18nFormat.init(this)),
              (this.translator = new R(this.services, this.options)),
              this.translator.on('*', function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = X),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng,
            );
            e.length > 0 && 'dev' !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              'init: no languageDetector is used and no lng is defined',
            ),
            [
              'getResource',
              'hasResourceBundle',
              'getResourceBundle',
              'getDataByLanguage',
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              'addResource',
              'addResources',
              'addResourceBundle',
              'removeResourceBundle',
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let a = s(),
            l = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      'init: i18next is already initialized. You should call init just once!',
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log('initialized', this.options),
                  this.emit('initialized', this.options),
                  a.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                'v1' !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? l()
              : setTimeout(l, 0),
            a
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : X,
            n = t,
            r = 'string' == typeof e ? e : this.language;
          if (
            ('function' == typeof e && (n = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              r &&
              'cimode' === r.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return n();
            let e = [],
              t = (t) => {
                t &&
                  'cimode' !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      'cimode' !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            r
              ? t(r)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  n(e);
              });
          } else n(null);
        }
        reloadResources(e, t, n) {
          let r = s();
          return (
            'function' == typeof e && ((n = e), (e = void 0)),
            'function' == typeof t && ((n = t), (t = void 0)),
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = X),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw Error(
              'You are passing an undefined module! Please check the object you are passing to i18next.use()',
            );
          if (!e.type)
            throw Error(
              'You are passing a wrong module! Please check the object you are passing to i18next.use()',
            );
          return (
            'backend' === e.type && (this.modules.backend = e),
            ('logger' === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            'languageDetector' === e.type &&
              (this.modules.languageDetector = e),
            'i18nFormat' === e.type && (this.modules.i18nFormat = e),
            'postProcessor' === e.type && N.addPostProcessor(e),
            'formatter' === e.type && (this.modules.formatter = e),
            '3rdParty' === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(['cimode', 'dev'].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          let r = s();
          this.emit('languageChanging', e);
          let o = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            i = (e, i) => {
              i
                ? (o(i),
                  this.translator.changeLanguage(i),
                  (this.isLanguageChangingTo = void 0),
                  this.emit('languageChanged', i),
                  this.logger.log('languageChanged', i))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            a = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let n =
                'string' == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || o(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  i(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(a)
                  : this.services.languageDetector.detect(a)
                : a(e)
              : a(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          let o = function (e, t) {
            let i, a;
            if ('object' != typeof t) {
              for (
                var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), u = 2;
                u < s;
                u++
              )
                l[u - 2] = arguments[u];
              i = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else i = { ...t };
            (i.lng = i.lng || o.lng),
              (i.lngs = i.lngs || o.lngs),
              (i.ns = i.ns || o.ns),
              '' !== i.keyPrefix &&
                (i.keyPrefix = i.keyPrefix || n || o.keyPrefix);
            let c = r.options.keySeparator || '.';
            return (
              (a =
                i.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${i.keyPrefix}${c}${e}`)
                  : i.keyPrefix
                    ? `${i.keyPrefix}${c}${e}`
                    : e),
              r.t(a, i)
            );
          };
          return (
            'string' == typeof e ? (o.lng = e) : (o.lngs = e),
            (o.ns = t),
            (o.keyPrefix = n),
            o
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                'hasLoadedNamespace: i18next was not initialized',
                this.languages,
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                'hasLoadedNamespace: i18n.languages were undefined or empty',
                this.languages,
              ),
              !1
            );
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ('cimode' === n.toLowerCase()) return !0;
          let i = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 0 === n || 2 === n;
          };
          if (t.precheck) {
            let e = t.precheck(this, i);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(n, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (i(n, e) && (!r || i(o, e)))
          );
        }
        loadNamespaces(e, t) {
          let n = s();
          return this.options.ns
            ? ('string' == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let n = s();
          'string' == typeof e && (e = [e]);
          let r = this.options.preload || [],
            o = e.filter(
              (e) =>
                0 > r.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e),
            );
          return o.length
            ? ((this.options.preload = r.concat(o)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                'ar',
                'shu',
                'sqr',
                'ssh',
                'xaa',
                'yhd',
                'yud',
                'aao',
                'abh',
                'abv',
                'acm',
                'acq',
                'acw',
                'acx',
                'acy',
                'adf',
                'ads',
                'aeb',
                'aec',
                'afb',
                'ajp',
                'apc',
                'apd',
                'arb',
                'arq',
                'ars',
                'ary',
                'arz',
                'auz',
                'avl',
                'ayh',
                'ayl',
                'ayn',
                'ayp',
                'bbz',
                'pga',
                'he',
                'iw',
                'ps',
                'pbt',
                'pbu',
                'pst',
                'prp',
                'prd',
                'ug',
                'ur',
                'ydd',
                'yds',
                'yih',
                'ji',
                'yi',
                'hbo',
                'men',
                'xmn',
                'fa',
                'jpr',
                'peo',
                'pes',
                'prs',
                'dv',
                'sam',
                'ckb',
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new K(Y())
                ).getLanguagePartFromCode(e),
              ) > -1 || e.toLowerCase().indexOf('-arab') > 1
              ? 'rtl'
              : 'ltr'
            : 'rtl';
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new Q(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : X,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = { ...this.options, ...e, isClone: !0 },
            o = new Q(r);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (o.logger = o.logger.clone(e)),
            ['store', 'services', 'language'].forEach((e) => {
              o[e] = this[e];
            }),
            (o.services = { ...this.services }),
            (o.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            n &&
              ((o.store = new C(this.store.data, r)),
              (o.services.resourceStore = o.store)),
            (o.translator = new R(o.services, r)),
            o.translator.on('*', function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              o.emit(e, ...n);
            }),
            o.init(r, t),
            (o.translator.options = r),
            (o.translator.backendConnector.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            o
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let ee = Q.createInstance();
      (ee.createInstance = Q.createInstance),
        ee.createInstance,
        ee.dir,
        ee.init,
        ee.loadResources,
        ee.reloadResources,
        ee.use,
        ee.changeLanguage,
        ee.getFixedT,
        ee.t,
        ee.exists,
        ee.setDefaultNamespace,
        ee.hasLoadedNamespace,
        ee.loadNamespaces,
        ee.loadLanguages;
    },
  },
]);
