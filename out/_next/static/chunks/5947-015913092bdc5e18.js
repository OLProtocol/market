'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5947],
  {
    62575: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = a(2265),
        n = a(56800),
        o = a.n(n),
        s = a(38750),
        l = a(8390),
        i = a(70142),
        c = a(65360),
        d = a(2330),
        u = a(35413);
      let m = (e) => {
        let {
          componentCls: t,
          margin: a,
          marginXS: r,
          marginXL: n,
          fontSize: o,
          lineHeight: s,
        } = e;
        return {
          [t]: {
            marginInline: r,
            fontSize: o,
            lineHeight: s,
            textAlign: 'center',
            [''.concat(t, '-image')]: {
              height: e.emptyImgHeight,
              marginBottom: r,
              opacity: e.opacityImage,
              img: { height: '100%' },
              svg: { maxWidth: '100%', height: '100%', margin: 'auto' },
            },
            [''.concat(t, '-description')]: { color: e.colorTextDescription },
            [''.concat(t, '-footer')]: { marginTop: a },
            '&-normal': {
              marginBlock: n,
              color: e.colorTextDescription,
              [''.concat(t, '-description')]: { color: e.colorTextDescription },
              [''.concat(t, '-image')]: { height: e.emptyImgHeightMD },
            },
            '&-small': {
              marginBlock: r,
              color: e.colorTextDescription,
              [''.concat(t, '-image')]: { height: e.emptyImgHeightSM },
            },
          },
        };
      };
      var f = (0, d.I$)('Empty', (e) => {
          let { componentCls: t, controlHeightLG: a, calc: r } = e;
          return [
            m(
              (0, u.IX)(e, {
                emptyImgCls: ''.concat(t, '-img'),
                emptyImgHeight: r(a).mul(2.5).equal(),
                emptyImgHeightMD: a,
                emptyImgHeightSM: r(a).mul(0.875).equal(),
              }),
            ),
          ];
        }),
        v = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (a[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var n = 0, r = Object.getOwnPropertySymbols(e);
              n < r.length;
              n++
            )
              0 > t.indexOf(r[n]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (a[r[n]] = e[r[n]]);
          return a;
        };
      let g = r.createElement(() => {
          let [, e] = (0, c.ZP)(),
            t = new i.C(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {};
          return r.createElement(
            'svg',
            {
              style: t,
              width: '184',
              height: '152',
              viewBox: '0 0 184 152',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('title', null, 'empty image'),
            r.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              r.createElement(
                'g',
                { transform: 'translate(24 31.67)' },
                r.createElement('ellipse', {
                  fillOpacity: '.8',
                  fill: '#F5F5F7',
                  cx: '67.797',
                  cy: '106.89',
                  rx: '67.797',
                  ry: '12.668',
                }),
                r.createElement('path', {
                  d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                  fill: '#AEB8C2',
                }),
                r.createElement('path', {
                  d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  fill: 'url(#linearGradient-1)',
                  transform: 'translate(13.56)',
                }),
                r.createElement('path', {
                  d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                  fill: '#F5F5F7',
                }),
                r.createElement('path', {
                  d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                  fill: '#DCE0E6',
                }),
              ),
              r.createElement('path', {
                d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                fill: '#DCE0E6',
              }),
              r.createElement(
                'g',
                { transform: 'translate(149.65 15.383)', fill: '#FFF' },
                r.createElement('ellipse', {
                  cx: '20.654',
                  cy: '3.167',
                  rx: '2.849',
                  ry: '2.815',
                }),
                r.createElement('path', {
                  d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
                }),
              ),
            ),
          );
        }, null),
        p = r.createElement(() => {
          let [, e] = (0, c.ZP)(),
            {
              colorFill: t,
              colorFillTertiary: a,
              colorFillQuaternary: n,
              colorBgContainer: o,
            } = e,
            {
              borderColor: s,
              shadowColor: l,
              contentColor: d,
            } = (0, r.useMemo)(
              () => ({
                borderColor: new i.C(t).onBackground(o).toHexShortString(),
                shadowColor: new i.C(a).onBackground(o).toHexShortString(),
                contentColor: new i.C(n).onBackground(o).toHexShortString(),
              }),
              [t, a, n, o],
            );
          return r.createElement(
            'svg',
            {
              width: '64',
              height: '41',
              viewBox: '0 0 64 41',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('title', null, 'Simple Empty'),
            r.createElement(
              'g',
              {
                transform: 'translate(0 1)',
                fill: 'none',
                fillRule: 'evenodd',
              },
              r.createElement('ellipse', {
                fill: l,
                cx: '32',
                cy: '33',
                rx: '32',
                ry: '7',
              }),
              r.createElement(
                'g',
                { fillRule: 'nonzero', stroke: s },
                r.createElement('path', {
                  d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                }),
                r.createElement('path', {
                  d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                  fill: d,
                }),
              ),
            ),
          );
        }, null),
        h = (e) => {
          var {
              className: t,
              rootClassName: a,
              prefixCls: n,
              image: i = g,
              description: c,
              children: d,
              imageStyle: u,
              style: m,
            } = e,
            h = v(e, [
              'className',
              'rootClassName',
              'prefixCls',
              'image',
              'description',
              'children',
              'imageStyle',
              'style',
            ]);
          let { getPrefixCls: w, direction: b, empty: x } = r.useContext(s.E_),
            y = w('empty', n),
            [E, C, S] = f(y),
            [N] = (0, l.Z)('Empty'),
            P = void 0 !== c ? c : null == N ? void 0 : N.description,
            I = null;
          return (
            (I =
              'string' == typeof i
                ? r.createElement('img', {
                    alt: 'string' == typeof P ? P : 'empty',
                    src: i,
                  })
                : i),
            E(
              r.createElement(
                'div',
                Object.assign(
                  {
                    className: o()(
                      C,
                      S,
                      y,
                      null == x ? void 0 : x.className,
                      {
                        [''.concat(y, '-normal')]: i === p,
                        [''.concat(y, '-rtl')]: 'rtl' === b,
                      },
                      t,
                      a,
                    ),
                    style: Object.assign(
                      Object.assign({}, null == x ? void 0 : x.style),
                      m,
                    ),
                  },
                  h,
                ),
                r.createElement(
                  'div',
                  { className: ''.concat(y, '-image'), style: u },
                  I,
                ),
                P &&
                  r.createElement(
                    'div',
                    { className: ''.concat(y, '-description') },
                    P,
                  ),
                d &&
                  r.createElement(
                    'div',
                    { className: ''.concat(y, '-footer') },
                    d,
                  ),
              ),
            )
          );
        };
      (h.PRESENTED_IMAGE_DEFAULT = g), (h.PRESENTED_IMAGE_SIMPLE = p);
      var w = h;
    },
    68937: function (e, t, a) {
      a.d(t, {
        i: function () {
          return c;
        },
      });
      var r = a(66265),
        n = a(55971),
        o = a(26242),
        s = a(65263),
        l = a(57437),
        i = (0, n.Gp)((e, t) => {
          var a;
          let { as: n, className: i, children: c, ...d } = e,
            u = (0, o.gy)(t),
            { slots: m, classNames: f } = (0, r.R)(),
            v = (0, s.W)(null == f ? void 0 : f.footer, i);
          return (0, l.jsx)(n || 'div', {
            ref: u,
            className:
              null == (a = m.footer) ? void 0 : a.call(m, { class: v }),
            ...d,
            children: c,
          });
        });
      i.displayName = 'NextUI.CardFooter';
      var c = i;
    },
    99717: function (e, t, a) {
      a.d(t, {
        g: function () {
          return K;
        },
      });
      var r,
        n = a(55971),
        o = a(26242),
        s = a(57437),
        l = (0, n.Gp)((e, t) => {
          let { as: a, activePage: r, ...n } = e,
            l = (0, o.gy)(t);
          return (0, s.jsx)(a || 'span', {
            ref: l,
            'aria-hidden': !0,
            ...n,
            children: r,
          });
        });
      l.displayName = 'NextUI.PaginationCursor';
      var i = a(2265),
        c = a(53640),
        d = a(65263),
        u = a(22171),
        m = a(277),
        f = a(5722),
        v = a(75300),
        g = a(98647),
        p = a(83892),
        h = a(25829),
        w = (0, n.Gp)((e, t) => {
          let {
            Component: a,
            children: r,
            getItemProps: n,
          } = (function (e) {
            let {
                as: t,
                ref: a,
                value: r,
                children: n,
                isActive: s,
                isDisabled: l,
                onPress: w,
                onClick: b,
                getAriaLabel: x,
                className: y,
                ...E
              } = e,
              C = !!(null == e ? void 0 : e.href),
              S = t || C ? 'a' : 'li',
              N = 'string' == typeof S,
              P = (0, o.gy)(a),
              I = (0, u.tv)(),
              A = (0, i.useMemo)(
                () =>
                  s
                    ? ''.concat(null == x ? void 0 : x(r), ' active')
                    : null == x
                      ? void 0
                      : x(r),
                [r, s],
              ),
              { isPressed: j, pressProps: k } = (0, g.r)({
                isDisabled: l,
                onPress: w,
              }),
              { focusProps: T, isFocused: L, isFocusVisible: M } = (0, h.F)({}),
              { isHovered: z, hoverProps: B } = (0, p.X)({ isDisabled: l });
            return {
              Component: S,
              children: n,
              ariaLabel: A,
              isFocused: L,
              isFocusVisible: M,
              getItemProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ref: P,
                  role: 'button',
                  tabIndex: l ? -1 : 0,
                  'aria-label': A,
                  'aria-current': (0, c.PB)(s),
                  'aria-disabled': (0, c.PB)(l),
                  'data-disabled': (0, c.PB)(l),
                  'data-active': (0, c.PB)(s),
                  'data-focus': (0, c.PB)(L),
                  'data-hover': (0, c.PB)(z),
                  'data-pressed': (0, c.PB)(j),
                  'data-focus-visible': (0, c.PB)(M),
                  ...(0, m.d)(e, k, T, B, (0, v.z)(E, { enabled: N })),
                  className: (0, d.W)(y, e.className),
                  onClick: (t) => {
                    (0, f.t)(null == k ? void 0 : k.onClick, b)(t),
                      !I.isNative &&
                        t.currentTarget instanceof HTMLAnchorElement &&
                        t.currentTarget.href &&
                        !t.isDefaultPrevented() &&
                        (0, u.b0)(t.currentTarget, t) &&
                        e.href &&
                        (t.preventDefault(),
                        I.open(t.currentTarget, t, e.href, e.routerOptions));
                  },
                };
              },
            };
          })({ ...e, ref: t });
          return (0, s.jsx)(a, { ...n(), children: r });
        });
      w.displayName = 'NextUI.PaginationItem';
      var b = a(36222);
      let x = new Set([
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
        y = new Set([
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
      var E = a(73165);
      let C = Symbol.for('react-aria.i18n.locale');
      function S() {
        let e =
          ('undefined' != typeof window && window[C]) ||
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
                a =
                  'function' == typeof t.getTextInfo
                    ? t.getTextInfo()
                    : t.textInfo;
              if (a) return 'rtl' === a.direction;
              if (t.script) return x.has(t.script);
            }
            let t = e.split('-')[0];
            return y.has(t);
          })(e)
            ? 'ltr'
            : 'rtl',
        };
      }
      let N = S(),
        P = new Set();
      function I() {
        for (let e of ((N = S()), P)) e(N);
      }
      let A = i.createContext(null);
      function j() {
        let e = (function () {
          let e = (0, E.Av)(),
            [t, a] = (0, i.useState)(N);
          return ((0, i.useEffect)(
            () => (
              0 === P.size && window.addEventListener('languagechange', I),
              P.add(a),
              () => {
                P.delete(a),
                  0 === P.size &&
                    window.removeEventListener('languagechange', I);
              }
            ),
            [],
          ),
          e)
            ? { locale: 'en-US', direction: 'ltr' }
            : t;
        })();
        return (0, i.useContext)(A) || e;
      }
      let k = new Set([
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
        T = new Set([
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
        ]),
        L = Symbol.for('react-aria.i18n.locale');
      function M() {
        let e =
          ('undefined' != typeof window && window[L]) ||
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
                a =
                  'function' == typeof t.getTextInfo
                    ? t.getTextInfo()
                    : t.textInfo;
              if (a) return 'rtl' === a.direction;
              if (t.script) return k.has(t.script);
            }
            let t = e.split('-')[0];
            return T.has(t);
          })(e)
            ? 'ltr'
            : 'rtl',
        };
      }
      let z = M(),
        B = new Set();
      function D() {
        for (let e of ((z = M()), B)) e(z);
      }
      let H = i.createContext(null);
      var O = a(34140),
        R =
          (((r = R || {}).DOTS = 'dots'),
          (r.PREV = 'prev'),
          (r.NEXT = 'next'),
          r),
        V = a(12094),
        F = a(49998),
        W = a(22226),
        J = a(2068),
        X = a(21616),
        U = (0, J.tv)({
          slots: {
            base: ['p-2.5', '-m-2.5', 'overflow-x-scroll', 'scrollbar-hide'],
            wrapper: [
              'flex',
              'flex-nowrap',
              'h-fit',
              'max-w-fit',
              'relative',
              'gap-1',
              'items-center',
              'overflow-visible',
            ],
            item: ['tap-highlight-transparent', 'select-none', 'touch-none'],
            prev: '',
            next: '',
            cursor: [
              'absolute',
              'flex',
              'overflow-visible',
              'items-center',
              'justify-center',
              'origin-center',
              'left-0',
              'select-none',
              'touch-none',
              'pointer-events-none',
              'z-20',
            ],
            forwardIcon: [
              'hidden',
              'group-hover:block',
              'group-data-[focus-visible=true]:block',
              'data-[before=true]:rotate-180',
            ],
            ellipsis:
              'group-hover:hidden group-data-[focus-visible=true]:hidden',
            chevronNext: 'rotate-180',
          },
          variants: {
            variant: {
              bordered: {
                item: [
                  'border-medium',
                  'border-default',
                  'bg-transparent',
                  'data-[hover=true]:bg-default-100',
                ],
              },
              light: { item: 'bg-transparent' },
              flat: {},
              faded: { item: ['border-medium', 'border-default'] },
            },
            color: {
              default: { cursor: W.J.solid.default },
              primary: { cursor: W.J.solid.primary },
              secondary: { cursor: W.J.solid.secondary },
              success: { cursor: W.J.solid.success },
              warning: { cursor: W.J.solid.warning },
              danger: { cursor: W.J.solid.danger },
            },
            size: { sm: {}, md: {}, lg: {} },
            radius: { none: {}, sm: {}, md: {}, lg: {}, full: {} },
            isCompact: {
              true: {
                wrapper: 'gap-0 shadow-sm',
                item: [
                  'shadow-none',
                  'first-of-type:rounded-e-none',
                  'last-of-type:rounded-s-none',
                  '[&:not(:first-of-type):not(:last-of-type)]:rounded-none',
                ],
                prev: '!rounded-e-none',
                next: '!rounded-s-none',
              },
            },
            isDisabled: {
              true: { base: 'opacity-disabled pointer-events-none' },
            },
            showShadow: { true: {} },
            disableCursorAnimation: { true: { cursor: 'hidden' } },
            disableAnimation: {
              true: { item: 'transition-none', cursor: 'transition-none' },
              false: {
                item: [
                  'data-[pressed=true]:scale-[0.97]',
                  'transition-transform-background',
                ],
                cursor: [
                  'data-[moving=true]:transition-transform',
                  '!data-[moving=true]:duration-300',
                  'opacity-0',
                  'data-[moving]:opacity-100',
                ],
              },
            },
          },
          defaultVariants: {
            variant: 'flat',
            color: 'primary',
            size: 'md',
            radius: 'md',
            isCompact: !1,
            isDisabled: !1,
            showShadow: !1,
            disableCursorAnimation: !1,
          },
          compoundVariants: [
            {
              showShadow: !0,
              color: 'default',
              class: { cursor: [W.J.shadow.default, 'shadow-md'] },
            },
            {
              showShadow: !0,
              color: 'primary',
              class: { cursor: [W.J.shadow.primary, 'shadow-md'] },
            },
            {
              showShadow: !0,
              color: 'secondary',
              class: { cursor: [W.J.shadow.secondary, 'shadow-md'] },
            },
            {
              showShadow: !0,
              color: 'success',
              class: { cursor: [W.J.shadow.success, 'shadow-md'] },
            },
            {
              showShadow: !0,
              color: 'warning',
              class: { cursor: [W.J.shadow.warning, 'shadow-md'] },
            },
            {
              showShadow: !0,
              color: 'danger',
              class: { cursor: [W.J.shadow.danger, 'shadow-md'] },
            },
            {
              isCompact: !0,
              variant: 'bordered',
              class: {
                item: '[&:not(:first-of-type)]:ms-[calc(theme(borderWidth.2)*-1)]',
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'default',
              class: {
                item: [
                  'data-[active=true]:bg-default-400',
                  'data-[active=true]:border-default-400',
                  'data-[active=true]:text-default-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'primary',
              class: {
                item: [
                  'data-[active=true]:bg-primary',
                  'data-[active=true]:border-primary',
                  'data-[active=true]:text-primary-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'secondary',
              class: {
                item: [
                  'data-[active=true]:bg-secondary',
                  'data-[active=true]:border-secondary',
                  'data-[active=true]:text-secondary-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'success',
              class: {
                item: [
                  'data-[active=true]:bg-success',
                  'data-[active=true]:border-success',
                  'data-[active=true]:text-success-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'warning',
              class: {
                item: [
                  'data-[active=true]:bg-warning',
                  'data-[active=true]:border-warning',
                  'data-[active=true]:text-warning-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              color: 'danger',
              class: {
                item: [
                  'data-[active=true]:bg-danger',
                  'data-[active=true]:border-danger',
                  'data-[active=true]:text-danger-foreground',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'default',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-default/50',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'primary',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-primary/40',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'secondary',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-secondary/40',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'success',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-success/40',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'warning',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-warning/40',
                ],
              },
            },
            {
              disableCursorAnimation: !0,
              showShadow: !0,
              color: 'danger',
              class: {
                item: [
                  'data-[active=true]:shadow-md',
                  'data-[active=true]:shadow-danger/40',
                ],
              },
            },
          ],
          compoundSlots: [
            {
              slots: ['item', 'prev', 'next'],
              class: [
                'flex',
                'flex-wrap',
                'truncate',
                'box-border',
                'outline-none',
                'items-center',
                'justify-center',
                'text-default-foreground',
                ...X.Dh,
                'data-[disabled=true]:text-default-300',
                'data-[disabled=true]:pointer-events-none',
              ],
            },
            {
              slots: ['item', 'prev', 'next'],
              variant: ['flat', 'bordered', 'faded'],
              class: ['shadow-sm'],
            },
            {
              slots: ['item', 'prev', 'next'],
              variant: 'flat',
              class: [
                'bg-default-100',
                '[&[data-hover=true]:not([data-active=true])]:bg-default-200',
                'active:bg-default-300',
              ],
            },
            {
              slots: ['item', 'prev', 'next'],
              variant: 'faded',
              class: [
                'bg-default-50',
                '[&[data-hover=true]:not([data-active=true])]:bg-default-100',
                'active:bg-default-200',
              ],
            },
            {
              slots: ['item', 'prev', 'next'],
              variant: 'light',
              class: [
                '[&[data-hover=true]:not([data-active=true])]:bg-default-100',
                'active:bg-default-200',
              ],
            },
            {
              slots: ['item', 'cursor', 'prev', 'next'],
              size: 'sm',
              class: 'min-w-8 w-8 h-8 text-tiny',
            },
            {
              slots: ['item', 'cursor', 'prev', 'next'],
              size: 'md',
              class: 'min-w-9 w-9 h-9 text-small',
            },
            {
              slots: ['item', 'cursor', 'prev', 'next'],
              size: 'lg',
              class: 'min-w-10 w-10 h-10 text-medium',
            },
            {
              slots: ['wrapper', 'item', 'cursor', 'prev', 'next'],
              radius: 'none',
              class: 'rounded-none',
            },
            {
              slots: ['wrapper', 'item', 'cursor', 'prev', 'next'],
              radius: 'sm',
              class: 'rounded-small',
            },
            {
              slots: ['wrapper', 'item', 'cursor', 'prev', 'next'],
              radius: 'md',
              class: 'rounded-medium',
            },
            {
              slots: ['wrapper', 'item', 'cursor', 'prev', 'next'],
              radius: 'lg',
              class: 'rounded-large',
            },
            {
              slots: ['wrapper', 'item', 'cursor', 'prev', 'next'],
              radius: 'full',
              class: 'rounded-full',
            },
          ],
        }),
        _ = (e) =>
          (0, s.jsx)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            focusable: 'false',
            height: '1em',
            role: 'presentation',
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: (0, s.jsx)('path', {
              d: 'M15.5 19l-7-7 7-7',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.5',
            }),
          }),
        G = (e) =>
          (0, s.jsxs)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            height: '1em',
            shapeRendering: 'geometricPrecision',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: [
              (0, s.jsx)('circle', {
                cx: '12',
                cy: '12',
                fill: 'currentColor',
                r: '1',
              }),
              (0, s.jsx)('circle', {
                cx: '19',
                cy: '12',
                fill: 'currentColor',
                r: '1',
              }),
              (0, s.jsx)('circle', {
                cx: '5',
                cy: '12',
                fill: 'currentColor',
                r: '1',
              }),
            ],
          }),
        q = (e) =>
          (0, s.jsxs)('svg', {
            'aria-hidden': 'true',
            fill: 'none',
            focusable: 'false',
            height: '1em',
            role: 'presentation',
            shapeRendering: 'geometricPrecision',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            viewBox: '0 0 24 24',
            width: '1em',
            ...e,
            children: [
              (0, s.jsx)('path', { d: 'M13 17l5-5-5-5' }),
              (0, s.jsx)('path', { d: 'M6 17l5-5-5-5' }),
            ],
          }),
        Z = (0, n.Gp)((e, t) => {
          let {
              Component: a,
              dotsJump: r,
              slots: u,
              classNames: m,
              total: f,
              range: v,
              loop: g,
              activePage: p,
              disableCursorAnimation: h,
              disableAnimation: x,
              renderItem: y,
              onNext: C,
              onPrevious: S,
              setPage: N,
              getItemAriaLabel: P,
              getItemRef: I,
              getBaseProps: A,
              getWrapperProps: k,
              getItemProps: T,
              getCursorProps: L,
            } = (function (e) {
              var t, a, r, s;
              let l = (0, V.w)(),
                [u, m] = (0, n.oe)(e, U.variantKeys),
                {
                  as: f,
                  ref: v,
                  classNames: g,
                  dotsJump: p = 5,
                  loop: h = !1,
                  showControls: w = !1,
                  total: x = 1,
                  initialPage: y = 1,
                  page: C,
                  siblings: S,
                  boundaries: N,
                  onChange: P,
                  className: I,
                  renderItem: A,
                  getItemAriaLabel: k,
                  ...T
                } = u,
                L = (0, o.gy)(v),
                M = (0, i.useRef)(null),
                W = (0, i.useRef)(),
                J = (0, i.useRef)(),
                { direction: X } = j(),
                _ = 'rtl' === X,
                G =
                  null !=
                    (a =
                      null != (t = null == e ? void 0 : e.disableAnimation)
                        ? t
                        : null == l
                          ? void 0
                          : l.disableAnimation) && a,
                q =
                  null !=
                    (s =
                      null !=
                      (r = null == e ? void 0 : e.disableCursorAnimation)
                        ? r
                        : G) && s;
              function Z() {
                return W.current || (W.current = new Map()), W.current;
              }
              function K(e, t) {
                let a = Z();
                e ? a.set(t, e) : a.delete(t);
              }
              let {
                  range: $,
                  activePage: Q,
                  setPage: Y,
                  previous: ee,
                  next: et,
                  first: ea,
                  last: er,
                } = (function (e) {
                  let t;
                  let {
                      page: a,
                      total: r,
                      siblings: n = 1,
                      boundaries: o = 1,
                      initialPage: s = 1,
                      showControls: l = !1,
                      onChange: c,
                    } = e,
                    [d, u] = (0, i.useState)(a || s),
                    { direction: m } =
                      ((t = (function () {
                        let e = (0, E.Av)(),
                          [t, a] = (0, i.useState)(z);
                        return ((0, i.useEffect)(
                          () => (
                            0 === B.size &&
                              window.addEventListener('languagechange', D),
                            B.add(a),
                            () => {
                              B.delete(a),
                                0 === B.size &&
                                  window.removeEventListener(
                                    'languagechange',
                                    D,
                                  );
                            }
                          ),
                          [],
                        ),
                        e)
                          ? { locale: 'en-US', direction: 'ltr' }
                          : t;
                      })()),
                      (0, i.useContext)(H) || t),
                    f = 'rtl' === m,
                    v = (e) => {
                      u(e), c && c(e);
                    };
                  (0, i.useEffect)(() => {
                    a && a !== d && u(a);
                  }, [a]);
                  let g = (0, i.useCallback)(
                      (e) => {
                        e <= 0 ? v(1) : e > r ? v(r) : v(e);
                      },
                      [r, d, v],
                    ),
                    p = (0, i.useCallback)(
                      (e) =>
                        l
                          ? f
                            ? ['next', ...e, 'prev']
                            : ['prev', ...e, 'next']
                          : e,
                      [f, l],
                    );
                  return {
                    range: (0, i.useMemo)(() => {
                      if (2 * n + 3 + 2 * o >= r) return p((0, O.w6)(1, r));
                      let e = Math.max(d - n, o),
                        t = Math.min(d + n, r - o),
                        a = e > o + 2,
                        s = t < r - (o + 1);
                      if (!a && s) {
                        let e = 2 * n + o + 2;
                        return p([
                          ...(0, O.w6)(1, e),
                          'dots',
                          ...(0, O.w6)(r - (o - 1), r),
                        ]);
                      }
                      if (a && !s) {
                        let e = o + 1 + 2 * n;
                        return p([
                          ...(0, O.w6)(1, o),
                          'dots',
                          ...(0, O.w6)(r - e, r),
                        ]);
                      }
                      return p([
                        ...(0, O.w6)(1, o),
                        'dots',
                        ...(0, O.w6)(e, t),
                        'dots',
                        ...(0, O.w6)(r - o + 1, r),
                      ]);
                    }, [r, d, n, o, p]),
                    activePage: d,
                    setPage: g,
                    next: () => (f ? g(d - 1) : g(d + 1)),
                    previous: () => (f ? g(d + 1) : g(d - 1)),
                    first: () => (f ? g(r) : g(1)),
                    last: () => (f ? g(1) : g(r)),
                  };
                })({
                  page: C,
                  total: x,
                  initialPage: y,
                  siblings: S,
                  boundaries: N,
                  showControls: w,
                  onChange: P,
                }),
                en = (0, i.useRef)(Q);
              (0, i.useEffect)(() => {
                Q &&
                  !G &&
                  (function (e, t) {
                    let a = Z().get(e);
                    if (!a || !M.current) return;
                    J.current && clearTimeout(J.current),
                      (0, F.Z)(a, {
                        scrollMode: 'always',
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start',
                        boundary: L.current,
                      });
                    let { offsetLeft: r } = a;
                    if (t) {
                      M.current.setAttribute('data-moving', 'false'),
                        (M.current.style.transform = 'translateX('.concat(
                          r,
                          'px) scale(1)',
                        ));
                      return;
                    }
                    M.current.setAttribute('data-moving', 'true'),
                      (M.current.style.transform = 'translateX('.concat(
                        r,
                        'px) scale(1.1)',
                      )),
                      (J.current = setTimeout(() => {
                        M.current &&
                          (M.current.style.transform = 'translateX('.concat(
                            r,
                            'px) scale(1)',
                          )),
                          (J.current = setTimeout(() => {
                            var e;
                            null == (e = M.current) ||
                              e.setAttribute('data-moving', 'false'),
                              J.current && clearTimeout(J.current);
                          }, 300));
                      }, 300));
                  })(Q, Q === en.current),
                  (en.current = Q);
              }, [Q, G, q, e.dotsJump, e.isCompact, e.showControls]);
              let eo = (0, i.useMemo)(
                  () =>
                    U({ ...m, disableAnimation: G, disableCursorAnimation: q }),
                  [(0, b.Xx)(m), q, G],
                ),
                es = (0, d.W)(null == g ? void 0 : g.base, I);
              return {
                Component: f || 'nav',
                showControls: w,
                dotsJump: p,
                slots: eo,
                classNames: g,
                loop: h,
                total: x,
                range: $,
                activePage: Q,
                getItemRef: K,
                disableAnimation: G,
                disableCursorAnimation: q,
                setPage: Y,
                onPrevious: () => (h && Q === (_ ? x : 1) ? er() : ee()),
                onNext: () => (h && Q === (_ ? 1 : x) ? ea() : et()),
                renderItem: A,
                getBaseProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    ref: L,
                    role: 'navigation',
                    'aria-label': e['aria-label'] || 'pagination navigation',
                    'data-slot': 'base',
                    'data-controls': (0, c.PB)(w),
                    'data-loop': (0, c.PB)(h),
                    'data-dots-jump': p,
                    'data-total': x,
                    'data-active-page': Q,
                    className: eo.base({
                      class: (0, d.W)(es, null == e ? void 0 : e.className),
                    }),
                    ...T,
                  };
                },
                getWrapperProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    'data-slot': 'wrapper',
                    className: eo.wrapper({
                      class: (0, d.W)(
                        null == g ? void 0 : g.wrapper,
                        null == e ? void 0 : e.className,
                      ),
                    }),
                  };
                },
                getItemProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    ref: (t) => K(t, e.value),
                    'data-slot': 'item',
                    isActive: e.value === Q,
                    className: eo.item({
                      class: (0, d.W)(
                        null == g ? void 0 : g.item,
                        null == e ? void 0 : e.className,
                      ),
                    }),
                    onPress: () => {
                      e.value !== Q && Y(e.value);
                    },
                  };
                },
                getCursorProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    ref: M,
                    activePage: Q,
                    'data-slot': 'cursor',
                    className: eo.cursor({
                      class: (0, d.W)(
                        null == g ? void 0 : g.cursor,
                        null == e ? void 0 : e.className,
                      ),
                    }),
                  };
                },
                getItemAriaLabel: (e) => {
                  if (e) {
                    if (k) return k(e);
                    switch (e) {
                      case R.DOTS:
                        return 'dots element';
                      case R.PREV:
                        return 'previous page button';
                      case R.NEXT:
                        return 'next page button';
                      case 'first':
                        return 'first page button';
                      case 'last':
                        return 'last page button';
                      default:
                        return 'pagination item '.concat(e);
                    }
                  }
                },
              };
            })({ ...e, ref: t }),
            { direction: M } = j(),
            W = 'rtl' === M,
            J = (0, i.useCallback)(
              (e, t) => {
                let a = t < v.indexOf(p);
                if (y && 'function' == typeof y) {
                  let n = 'number' == typeof e ? e : t;
                  e === R.NEXT && (n = p + 1),
                    e === R.PREV && (n = p - 1),
                    e === R.DOTS &&
                      (n = a
                        ? p - r >= 1
                          ? p - r
                          : 1
                        : p + r <= f
                          ? p + r
                          : f);
                  let o = {
                    [R.PREV]: (0, s.jsx)(_, {}),
                    [R.NEXT]: (0, s.jsx)(_, {
                      className: u.chevronNext({
                        class: null == m ? void 0 : m.chevronNext,
                      }),
                    }),
                    [R.DOTS]: (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(G, {
                          className:
                            null == u
                              ? void 0
                              : u.ellipsis({
                                  class: null == m ? void 0 : m.ellipsis,
                                }),
                        }),
                        (0, s.jsx)(q, {
                          className:
                            null == u
                              ? void 0
                              : u.forwardIcon({
                                  class: null == m ? void 0 : m.forwardIcon,
                                }),
                          'data-before': (0, c.PB)(a),
                        }),
                      ],
                    }),
                  };
                  return y({
                    value: e,
                    index: t,
                    key: ''.concat(e, '-').concat(t),
                    page: n,
                    total: f,
                    children: 'number' == typeof e ? e : o[e],
                    activePage: p,
                    dotsJump: r,
                    isBefore: a,
                    isActive: e === p,
                    isPrevious: e === p - 1,
                    isNext: e === p + 1,
                    isFirst: 1 === e,
                    isLast: e === f,
                    onNext: C,
                    onPrevious: S,
                    setPage: N,
                    onPress: () => N(n),
                    ref: 'number' == typeof e ? (t) => I(t, e) : void 0,
                    className: u.item({ class: null == m ? void 0 : m.item }),
                    getAriaLabel: P,
                  });
                }
                return e === R.PREV
                  ? (0, s.jsx)(
                      w,
                      {
                        className: u.prev({
                          class: null == m ? void 0 : m.prev,
                        }),
                        'data-slot': 'prev',
                        getAriaLabel: P,
                        isDisabled: !g && p === (W ? f : 1),
                        value: e,
                        onPress: S,
                        children: (0, s.jsx)(_, {}),
                      },
                      R.PREV,
                    )
                  : e === R.NEXT
                    ? (0, s.jsx)(
                        w,
                        {
                          className: u.next({
                            class: (0, d.W)(null == m ? void 0 : m.next),
                          }),
                          'data-slot': 'next',
                          getAriaLabel: P,
                          isDisabled: !g && p === (W ? 1 : f),
                          value: e,
                          onPress: C,
                          children: (0, s.jsx)(_, {
                            className: u.chevronNext({
                              class: null == m ? void 0 : m.chevronNext,
                            }),
                          }),
                        },
                        R.NEXT,
                      )
                    : e === R.DOTS
                      ? (0, s.jsxs)(
                          w,
                          {
                            className: u.item({
                              class: (0, d.W)(
                                null == m ? void 0 : m.item,
                                'group',
                              ),
                            }),
                            'data-slot': 'item',
                            getAriaLabel: P,
                            value: e,
                            onPress: () =>
                              a
                                ? N(p - r >= 1 ? p - r : 1)
                                : N(p + r <= f ? p + r : f),
                            children: [
                              (0, s.jsx)(G, {
                                className:
                                  null == u
                                    ? void 0
                                    : u.ellipsis({
                                        class: null == m ? void 0 : m.ellipsis,
                                      }),
                              }),
                              (0, s.jsx)(q, {
                                className:
                                  null == u
                                    ? void 0
                                    : u.forwardIcon({
                                        class:
                                          null == m ? void 0 : m.forwardIcon,
                                      }),
                                'data-before': (0, c.PB)(W ? !a : a),
                              }),
                            ],
                          },
                          R.DOTS + a,
                        )
                      : (0, i.createElement)(
                          w,
                          { ...T({ value: e }), key: e, getAriaLabel: P },
                          e,
                        );
              },
              [W, p, r, T, g, v, y, u, m, f],
            );
          return (0, s.jsx)(a, {
            ...A(),
            children: (0, s.jsxs)('ul', {
              ...k(),
              children: [!h && !x && (0, s.jsx)(l, { ...L() }), v.map(J)],
            }),
          });
        });
      Z.displayName = 'NextUI.Pagination';
      var K = Z;
    },
  },
]);
