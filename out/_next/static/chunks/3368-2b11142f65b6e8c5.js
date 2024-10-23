'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3368],
  {
    75945: function (e, t, r) {
      r.d(t, {
        j: function () {
          return l;
        },
      });
      var n = r(75300),
        o = (0, r(2068).tv)({
          base: 'shrink-0 bg-divider border-none',
          variants: {
            orientation: {
              horizontal: 'w-full h-divider',
              vertical: 'h-full w-divider',
            },
          },
          defaultVariants: { orientation: 'horizontal' },
        }),
        a = r(2265),
        u = r(55971),
        s = r(57437),
        i = (0, u.Gp)((e, t) => {
          let { Component: r, getDividerProps: u } = (function (e) {
            var t;
            let r, u;
            let { as: s, className: i, orientation: l, ...d } = e,
              c = s || 'hr';
            'hr' === c && 'vertical' === l && (c = 'div');
            let { separatorProps: f } =
                ((t = {
                  elementType: 'string' == typeof c ? c : 'hr',
                  orientation: l,
                }),
                (u = (0, n.z)(t, {
                  enabled: 'string' == typeof t.elementType,
                })),
                ('vertical' === t.orientation && (r = 'vertical'),
                'hr' !== t.elementType)
                  ? {
                      separatorProps: {
                        ...u,
                        role: 'separator',
                        'aria-orientation': r,
                      },
                    }
                  : { separatorProps: u }),
              p = (0, a.useMemo)(
                () => o({ orientation: l, className: i }),
                [l, i],
              );
            return {
              Component: c,
              getDividerProps: (0, a.useCallback)(
                (e = {}) => ({
                  className: p,
                  role: 'separator',
                  'data-orientation': l,
                  ...f,
                  ...d,
                  ...e,
                }),
                [p, l, f, d],
              ),
            };
          })({ ...e });
          return (0, s.jsx)(r, { ref: t, ...u() });
        });
      i.displayName = 'NextUI.Divider';
      var l = i;
    },
    74654: function (e, t, r) {
      r.d(t, {
        S: function () {
          return x;
        },
      });
      var n = r(2265),
        o = r(73699),
        a = r(23663),
        u = new WeakMap(),
        s = [],
        i = r(277),
        l = r(46896),
        d = r(57420),
        c = r(26242),
        f = r(41821),
        p = r(25829),
        g = r(64292),
        v = r(3832),
        m = r(84511),
        b = r(12094),
        y = r(55971),
        h = r(93261),
        E = r(30256),
        w = r(36222),
        T = r(65263),
        P = r(53640);
      function x(e) {
        var t, r, x;
        let L = (0, b.w)(),
          [C, k] = (0, y.oe)(e, h.v.variantKeys),
          {
            as: D,
            ref: M,
            children: A,
            state: S,
            triggerRef: N,
            scrollRef: R,
            defaultOpen: B,
            onOpenChange: F,
            isOpen: K,
            isNonModal: O = !0,
            shouldFlip: I = !0,
            containerPadding: W = 12,
            shouldBlockScroll: z = !1,
            isDismissable: H = !0,
            shouldCloseOnBlur: j,
            portalContainer: _,
            updatePositionDeps: U,
            dialogProps: G,
            placement: V = 'top',
            triggerType: Y = 'dialog',
            showArrow: X = !1,
            offset: q = 7,
            crossOffset: Z = 0,
            boundaryElement: J,
            isKeyboardDismissDisabled: $,
            shouldCloseOnInteractOutside: Q,
            motionProps: ee,
            className: et,
            classNames: er,
            onClose: en,
            ...eo
          } = C,
          ea = (0, c.gy)(M),
          eu = (0, n.useRef)(null),
          es = (0, n.useRef)(!1),
          ei = N || eu,
          el =
            null !=
              (r =
                null != (t = e.disableAnimation)
                  ? t
                  : null == L
                    ? void 0
                    : L.disableAnimation) && r,
          ed = (function (e) {
            let [t, r] = (0, f.z)(
                e.isOpen,
                e.defaultOpen || !1,
                e.onOpenChange,
              ),
              o = (0, n.useCallback)(() => {
                r(!0);
              }, [r]),
              a = (0, n.useCallback)(() => {
                r(!1);
              }, [r]),
              u = (0, n.useCallback)(() => {
                r(!t);
              }, [r, t]);
            return { isOpen: t, setOpen: r, open: o, close: a, toggle: u };
          })({
            isOpen: K,
            defaultOpen: B,
            onOpenChange: (e) => {
              null == F || F(e), e || null == en || en();
            },
          }),
          ec = S || ed,
          {
            popoverProps: ef,
            underlayProps: ep,
            placement: eg,
          } = (function (e, t) {
            let {
                triggerRef: r,
                popoverRef: c,
                showArrow: f,
                offset: p = 7,
                crossOffset: g = 0,
                scrollRef: v,
                shouldFlip: m,
                boundaryElement: b,
                isDismissable: y = !0,
                shouldCloseOnBlur: h = !0,
                placement: E = 'top',
                containerPadding: w,
                shouldCloseOnInteractOutside: T,
                isNonModal: P,
                isKeyboardDismissDisabled: x,
                updatePositionDeps: L = [],
                ...C
              } = e,
              k = null == P || P,
              { overlayProps: D, underlayProps: M } = (0, d.S)(
                {
                  isOpen: t.isOpen,
                  onClose: t.close,
                  shouldCloseOnBlur: h,
                  isDismissable: y,
                  isKeyboardDismissDisabled: x,
                  shouldCloseOnInteractOutside:
                    T ||
                    ((e) => {
                      var t;
                      return !(null == (t = r.current)
                        ? void 0
                        : t.contains(e));
                    }),
                  disableOutsideEvents: !k,
                },
                c,
              ),
              {
                overlayProps: A,
                arrowProps: S,
                placement: N,
                updatePosition: R,
              } = (0, o.t)({
                ...C,
                shouldFlip: m,
                crossOffset: g,
                targetRef: r,
                overlayRef: c,
                isOpen: t.isOpen,
                scrollRef: v,
                boundaryElement: b,
                containerPadding: w,
                placement: (0, a.Yx)(E),
                offset: f ? p + 3 : p,
                onClose: k ? t.close : () => {},
              });
            return (
              (0, l.G)(() => {
                L.length && R();
              }, L),
              (0, n.useEffect)(() => {
                if (t.isOpen && !k && c.current)
                  return (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : document.body,
                      r = new Set(e),
                      n = new Set(),
                      o = (e) => {
                        for (let t of e.querySelectorAll(
                          '[data-live-announcer], [data-react-aria-top-layer]',
                        ))
                          r.add(t);
                        let t = (e) => {
                            let t = e.parentElement;
                            if (
                              r.has(e) ||
                              (n.has(t) && 'row' !== t.getAttribute('role'))
                            )
                              return NodeFilter.FILTER_REJECT;
                            for (let t of r)
                              if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                            return NodeFilter.FILTER_ACCEPT;
                          },
                          o = document.createTreeWalker(
                            e,
                            NodeFilter.SHOW_ELEMENT,
                            { acceptNode: t },
                          ),
                          u = t(e);
                        if (
                          (u === NodeFilter.FILTER_ACCEPT && a(e),
                          u !== NodeFilter.FILTER_REJECT)
                        ) {
                          let e = o.nextNode();
                          for (; null != e; ) a(e), (e = o.nextNode());
                        }
                      },
                      a = (e) => {
                        var t;
                        let r = null != (t = u.get(e)) ? t : 0;
                        ('true' !== e.getAttribute('aria-hidden') || 0 !== r) &&
                          (0 === r && e.setAttribute('aria-hidden', 'true'),
                          n.add(e),
                          u.set(e, r + 1));
                      };
                    s.length && s[s.length - 1].disconnect(), o(t);
                    let i = new MutationObserver((e) => {
                      for (let t of e)
                        if (
                          'childList' === t.type &&
                          0 !== t.addedNodes.length &&
                          ![...r, ...n].some((e) => e.contains(t.target))
                        ) {
                          for (let e of t.removedNodes)
                            e instanceof Element && (r.delete(e), n.delete(e));
                          for (let e of t.addedNodes)
                            (e instanceof HTMLElement ||
                              e instanceof SVGElement) &&
                            ('true' === e.dataset.liveAnnouncer ||
                              'true' === e.dataset.reactAriaTopLayer)
                              ? r.add(e)
                              : e instanceof Element && o(e);
                        }
                    });
                    i.observe(t, { childList: !0, subtree: !0 });
                    let l = {
                      observe() {
                        i.observe(t, { childList: !0, subtree: !0 });
                      },
                      disconnect() {
                        i.disconnect();
                      },
                    };
                    return (
                      s.push(l),
                      () => {
                        for (let e of (i.disconnect(), n)) {
                          let t = u.get(e);
                          null != t &&
                            (1 === t
                              ? (e.removeAttribute('aria-hidden'), u.delete(e))
                              : u.set(e, t - 1));
                        }
                        l === s[s.length - 1]
                          ? (s.pop(), s.length && s[s.length - 1].observe())
                          : s.splice(s.indexOf(l), 1);
                      }
                    );
                  })([c.current]);
              }, [k, t.isOpen, c]),
              {
                popoverProps: (0, i.d)(D, A),
                arrowProps: S,
                underlayProps: M,
                placement: N,
              }
            );
          })(
            {
              triggerRef: ei,
              isNonModal: O,
              popoverRef: ea,
              placement: V,
              offset: q,
              scrollRef: R,
              isDismissable: H,
              shouldCloseOnBlur: j,
              boundaryElement: J,
              crossOffset: Z,
              shouldFlip: I,
              containerPadding: W,
              updatePositionDeps: U,
              isKeyboardDismissDisabled: $,
              shouldCloseOnInteractOutside: Q,
            },
            ec,
          ),
          { triggerProps: ev } = (function (e, t, r) {
            let o,
              { type: a } = e,
              { isOpen: u } = t;
            (0, n.useEffect)(() => {
              r && r.current && (0, g.v).set(r.current, t.close);
            }),
              'menu' === a ? (o = !0) : 'listbox' === a && (o = 'listbox');
            let s = (0, v.Me)();
            return {
              triggerProps: {
                'aria-haspopup': o,
                'aria-expanded': u,
                'aria-controls': u ? s : null,
                onPress: t.toggle,
              },
              overlayProps: { id: s },
            };
          })({ type: Y }, ec, ei),
          { isFocusVisible: em, isFocused: eb, focusProps: ey } = (0, p.F)(),
          eh = (0, n.useMemo)(() => (0, h.v)({ ...k }), [(0, w.Xx)(k)]),
          eE = (0, T.W)(null == er ? void 0 : er.base, et),
          ew = (0, n.useCallback)(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                'data-slot': 'content',
                'data-open': (0, P.PB)(ec.isOpen),
                'data-arrow': (0, P.PB)(X),
                'data-placement': (0, a.sK)(eg, V),
                className: eh.content({
                  class: (0, T.W)(
                    null == er ? void 0 : er.content,
                    e.className,
                  ),
                }),
              };
            },
            [eh, ec.isOpen, X, eg, V, er],
          ),
          eT = (0, n.useMemo)(() => ((0, a.Yv)(eg, V) && eg) || V, [eg, V]),
          eP = (0, n.useCallback)(
            (t) => {
              var r;
              let n;
              return (
                'touch' === t.pointerType &&
                ((null == e ? void 0 : e.backdrop) === 'blur' ||
                  (null == e ? void 0 : e.backdrop) === 'opaque')
                  ? (n = setTimeout(() => {
                      es.current = !0;
                    }, 100))
                  : (es.current = !0),
                null == (r = ev.onPress) || r.call(ev, t),
                () => {
                  clearTimeout(n);
                }
              );
            },
            [null == ev ? void 0 : ev.onPress],
          ),
          ex = (0, n.useCallback)(
            function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { isDisabled: r, ...n } = e;
              return {
                'data-slot': 'trigger',
                ...(0, i.d)({ 'aria-haspopup': 'dialog' }, ev, n),
                onPress: eP,
                isDisabled: r,
                className: eh.trigger({
                  class: (0, T.W)(
                    null == er ? void 0 : er.trigger,
                    e.className,
                  ),
                  isTriggerDisabled: r,
                }),
                ref: (0, E.l)(t, ei),
              };
            },
            [ec, ev, eP, ei],
          ),
          eL = (0, n.useCallback)(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                'data-slot': 'backdrop',
                className: eh.backdrop({
                  class: null == er ? void 0 : er.backdrop,
                }),
                onClick: (e) => {
                  if (!es.current) {
                    e.preventDefault();
                    return;
                  }
                  ec.close(), (es.current = !1);
                },
                ...ep,
                ...e,
              };
            },
            [eh, ec.isOpen, er, ep],
          );
        return (
          (0, m.t)({ isDisabled: !(z && ec.isOpen) }),
          {
            state: ec,
            Component: D || 'div',
            children: A,
            classNames: er,
            showArrow: X,
            triggerRef: ei,
            placement: eT,
            isNonModal: O,
            popoverRef: ea,
            portalContainer: _,
            isOpen: ec.isOpen,
            onClose: ec.close,
            disableAnimation: el,
            backdrop: null != (x = e.backdrop) ? x : 'transparent',
            motionProps: ee,
            getBackdropProps: eL,
            getPopoverProps: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                ref: ea,
                ...(0, i.d)(ef, eo, e),
                style: (0, i.d)(ef.style, eo.style, e.style),
              };
            },
            getTriggerProps: ex,
            getDialogProps: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                'data-slot': 'base',
                'data-open': (0, P.PB)(ec.isOpen),
                'data-focus': (0, P.PB)(eb),
                'data-arrow': (0, P.PB)(X),
                'data-focus-visible': (0, P.PB)(em),
                'data-placement': (0, a.sK)(eg, V),
                ...(0, i.d)(ey, G, e),
                className: eh.base({ class: (0, T.W)(eE) }),
                style: { outline: 'none' },
              };
            },
            getContentProps: ew,
          }
        );
      }
    },
    28120: function (e, t, r) {
      r.d(t, {
        D9: function () {
          return u;
        },
        Dk: function () {
          return s;
        },
        GI: function () {
          return a;
        },
      });
      var n = r(2068),
        o = r(21616),
        a = (0, n.tv)({
          slots: {
            base: 'w-full relative flex flex-col gap-1 p-1',
            list: 'w-full flex flex-col gap-0.5 outline-none',
            emptyContent: [
              'h-10',
              'px-2',
              'py-1.5',
              'w-full',
              'h-full',
              'text-foreground-400',
              'text-start',
            ],
          },
        }),
        u = (0, n.tv)({
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
              'subpixel-antialiased',
              'outline-none',
              'cursor-pointer',
              'tap-highlight-transparent',
              ...o.Dh,
              'data-[focus-visible=true]:dark:ring-offset-background-content1',
            ],
            wrapper: 'w-full flex flex-col items-start justify-center',
            title: 'flex-1 text-small font-normal',
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
                base: [
                  'border-small border-transparent hover:border-default data-[hover=true]:bg-default-100',
                  'data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100',
                ],
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
            showDivider: {
              true: {
                base: [
                  'mb-1.5',
                  "after:content-['']",
                  'after:absolute',
                  'after:-bottom-1',
                  'after:left-0',
                  'after:right-0',
                  'after:h-divider',
                  'after:bg-divider',
                ],
              },
              false: {},
            },
            isDisabled: {
              true: { base: 'opacity-disabled pointer-events-none' },
            },
            disableAnimation: {
              true: {},
              false: { base: 'data-[hover=true]:transition-colors' },
            },
          },
          defaultVariants: {
            variant: 'solid',
            color: 'default',
            showDivider: !1,
          },
          compoundVariants: [
            {
              variant: 'solid',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:bg-default',
                  'data-[hover=true]:text-default-foreground',
                  'data-[selectable=true]:focus:bg-default',
                  'data-[selectable=true]:focus:text-default-foreground',
                ],
              },
            },
            {
              variant: 'solid',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
                  'data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground',
                ],
              },
            },
            {
              variant: 'solid',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
                  'data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground',
                ],
              },
            },
            {
              variant: 'solid',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
                  'data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground',
                ],
              },
            },
            {
              variant: 'solid',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
                  'data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground',
                ],
              },
            },
            {
              variant: 'solid',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
                  'data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground',
                  'data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
                  'data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
                  'data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
                  'data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
                  'data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground',
                ],
              },
            },
            {
              variant: 'shadow',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
                  'data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:border-default',
                  'data-[selectable=true]:focus:border-default',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:border-primary data-[hover=true]:text-primary',
                  'data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:border-secondary data-[hover=true]:text-secondary',
                  'data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:border-success data-[hover=true]:text-success',
                  'data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:border-warning data-[hover=true]:text-warning',
                  'data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning',
                ],
              },
            },
            {
              variant: 'bordered',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:border-danger data-[hover=true]:text-danger',
                  'data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:bg-default/40',
                  'data-[hover=true]:text-default-foreground',
                  'data-[selectable=true]:focus:bg-default/40',
                  'data-[selectable=true]:focus:text-default-foreground',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary',
                  'data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary',
                  'data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:bg-success/20 data-[hover=true]:text-success',
                  'data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning',
                  'data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning',
                ],
              },
            },
            {
              variant: 'flat',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger',
                  'data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:text-default-foreground',
                  'data-[selectable=true]:focus:text-default-foreground',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:text-primary',
                  'data-[selectable=true]:focus:text-primary',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:text-secondary',
                  'data-[selectable=true]:focus:text-secondary',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:text-success',
                  'data-[selectable=true]:focus:text-success',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:text-warning',
                  'data-[selectable=true]:focus:text-warning',
                ],
              },
            },
            {
              variant: 'faded',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:text-danger',
                  'data-[selectable=true]:focus:text-danger',
                ],
              },
            },
            {
              variant: 'light',
              color: 'default',
              class: {
                base: [
                  'data-[hover=true]:text-default-500',
                  'data-[selectable=true]:focus:text-default-500',
                ],
              },
            },
            {
              variant: 'light',
              color: 'primary',
              class: {
                base: [
                  'data-[hover=true]:text-primary',
                  'data-[selectable=true]:focus:text-primary',
                ],
              },
            },
            {
              variant: 'light',
              color: 'secondary',
              class: {
                base: [
                  'data-[hover=true]:text-secondary',
                  'data-[selectable=true]:focus:text-secondary',
                ],
              },
            },
            {
              variant: 'light',
              color: 'success',
              class: {
                base: [
                  'data-[hover=true]:text-success',
                  'data-[selectable=true]:focus:text-success',
                ],
              },
            },
            {
              variant: 'light',
              color: 'warning',
              class: {
                base: [
                  'data-[hover=true]:text-warning',
                  'data-[selectable=true]:focus:text-warning',
                ],
              },
            },
            {
              variant: 'light',
              color: 'danger',
              class: {
                base: [
                  'data-[hover=true]:text-danger',
                  'data-[selectable=true]:focus:text-danger',
                ],
              },
            },
          ],
        }),
        s = (0, n.tv)({
          slots: {
            base: 'relative mb-2',
            heading: 'pl-1 text-tiny text-foreground-500',
            group: 'data-[has-title=true]:pt-1',
            divider: 'mt-2',
          },
        });
    },
    57420: function (e, t, r) {
      r.d(t, {
        S: function () {
          return d;
        },
      });
      var n = r(27546),
        o = r(99688),
        a = r(73070),
        u = r(2265);
      function s(e, t) {
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
      var i = r(8381),
        l = [];
      function d(e, t) {
        let {
          disableOutsideEvents: r = !0,
          isDismissable: d = !1,
          isKeyboardDismissDisabled: c = !1,
          isOpen: f,
          onClose: p,
          shouldCloseOnBlur: g,
          shouldCloseOnInteractOutside: v,
        } = e;
        (0, u.useEffect)(
          () => (
            f && l.push(t),
            () => {
              let e = l.indexOf(t);
              e >= 0 && l.splice(e, 1);
            }
          ),
          [f, t],
        );
        let m = () => {
          l[l.length - 1] === t && p && p();
        };
        !(function (e) {
          let {
              ref: t,
              onInteractOutside: r,
              isDisabled: n,
              onInteractOutsideStart: i,
            } = e,
            l = (0, u.useRef)({
              isPointerDown: !1,
              ignoreEmulatedMouseEvents: !1,
            }),
            d = (0, o.i)((e) => {
              r && s(e, t) && (i && i(e), (l.current.isPointerDown = !0));
            }),
            c = (0, o.i)((e) => {
              r && r(e);
            });
          (0, u.useEffect)(() => {
            let e = l.current;
            if (n) return;
            let r = t.current,
              o = (0, a.r)(r);
            if ('undefined' != typeof PointerEvent) {
              let r = (r) => {
                e.isPointerDown && s(r, t) && c(r), (e.isPointerDown = !1);
              };
              return (
                o.addEventListener('pointerdown', d, !0),
                o.addEventListener('pointerup', r, !0),
                () => {
                  o.removeEventListener('pointerdown', d, !0),
                    o.removeEventListener('pointerup', r, !0);
                }
              );
            }
            {
              let r = (r) => {
                  e.ignoreEmulatedMouseEvents
                    ? (e.ignoreEmulatedMouseEvents = !1)
                    : e.isPointerDown && s(r, t) && c(r),
                    (e.isPointerDown = !1);
                },
                n = (r) => {
                  (e.ignoreEmulatedMouseEvents = !0),
                    e.isPointerDown && s(r, t) && c(r),
                    (e.isPointerDown = !1);
                };
              return (
                o.addEventListener('mousedown', d, !0),
                o.addEventListener('mouseup', r, !0),
                o.addEventListener('touchstart', d, !0),
                o.addEventListener('touchend', n, !0),
                () => {
                  o.removeEventListener('mousedown', d, !0),
                    o.removeEventListener('mouseup', r, !0),
                    o.removeEventListener('touchstart', d, !0),
                    o.removeEventListener('touchend', n, !0);
                }
              );
            }
          }, [t, n, d, c]);
        })({
          isDisabled: !(d && f),
          onInteractOutside: (e) => {
            'touch' === e.pointerType &&
              (!v || v(e.target)) &&
              (l[l.length - 1] === t &&
                r &&
                (e.stopPropagation(), e.preventDefault()),
              m());
          },
          onInteractOutsideStart: (e) => {
            (!v || v(e.target)) &&
              (l[l.length - 1] === t &&
                r &&
                (e.stopPropagation(), e.preventDefault()),
              'touch' !== e.pointerType && m());
          },
          ref: t,
        });
        let { focusWithinProps: b } = (0, i.L)({
          isDisabled: !g,
          onBlurWithin: (e) => {
            !(!e.relatedTarget || (0, n.cW)(e.relatedTarget)) &&
              (!v || v(e.relatedTarget)) &&
              m();
          },
        });
        return {
          overlayProps: {
            onKeyDown: (e) => {
              'Escape' !== e.key ||
                c ||
                e.nativeEvent.isComposing ||
                (e.stopPropagation(), e.preventDefault(), m());
            },
            ...b,
          },
          underlayProps: {
            onPointerDown: (e) => {
              e.target === e.currentTarget && e.preventDefault();
            },
          },
        };
      }
    },
    98347: function (e, t, r) {
      r.d(t, {
        d: function () {
          return l;
        },
      });
      var n = r(2265);
      let o = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        a = (n.createContext(o), n.createContext(!1));
      function u() {
        return !1;
      }
      function s() {
        return !0;
      }
      function i(e) {
        return () => {};
      }
      function l() {
        return (
          !('function' == typeof n.useSyncExternalStore
            ? n.useSyncExternalStore(i, u, s)
            : (0, n.useContext)(a)) &&
          'undefined' != typeof window &&
          window.screen.width <= 700
        );
      }
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement,
        new WeakMap(),
        n.useId;
    },
    25359: function (e, t, r) {
      r.d(t, {
        R: function () {
          return U;
        },
      });
      var n = r(2265);
      let o = 'undefined' != typeof document ? n.useLayoutEffect : () => {};
      function a(e) {
        let t = (0, n.useRef)(null);
        return (
          o(() => {
            t.current = e;
          }, [e]),
          (0, n.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
      var u = r(73165);
      let s = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        i = new Map(),
        l = new Set(['id']),
        d = new Set([
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-details',
        ]),
        c = new Set([
          'href',
          'hrefLang',
          'target',
          'rel',
          'download',
          'ping',
          'referrerPolicy',
        ]),
        f = /^(data-.*)$/,
        p = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        g = (e) =>
          e && 'window' in e && e.window === e ? e : p(e).defaultView || window,
        v = new Map(),
        m = new Set();
      function b() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let n = v.get(r.target);
          if (
            n &&
            (n.delete(r.propertyName),
            0 === n.size &&
              (r.target.removeEventListener('transitioncancel', t),
              v.delete(r.target)),
            0 === v.size)
          ) {
            for (let e of m) e();
            m.clear();
          }
        };
        document.body.addEventListener('transitionrun', (r) => {
          if (!e(r) || !r.target) return;
          let n = v.get(r.target);
          n ||
            ((n = new Set()),
            v.set(r.target, n),
            r.target.addEventListener('transitioncancel', t, { once: !0 })),
            n.add(r.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      function y(e) {
        if (
          (function () {
            if (null == h) {
              h = !1;
              try {
                document.createElement('div').focus({
                  get preventScroll() {
                    return (h = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return h;
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
          ? b()
          : document.addEventListener('DOMContentLoaded', b));
      let h = null;
      function E(e) {
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
      function w(e) {
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
      function T(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      let P = T(function () {
          return w(/^Mac/i);
        }),
        x = T(function () {
          return w(/^iPhone/i);
        }),
        L = T(function () {
          return w(/^iPad/i) || (P() && navigator.maxTouchPoints > 1);
        }),
        C = T(function () {
          return x() || L();
        });
      T(function () {
        return P() || C();
      }),
        T(function () {
          return E(/AppleWebKit/i) && !k();
        });
      let k = T(function () {
          return E(/Chrome/i);
        }),
        D = T(function () {
          return E(/Android/i);
        });
      T(function () {
        return E(/Firefox/i);
      });
      let M = null,
        A = new Set(),
        S = new Map(),
        N = !1,
        R = !1;
      function B(e, t) {
        for (let r of A) r(e, t);
      }
      function F(e) {
        (N = !0),
          e.metaKey ||
            (!P() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((M = 'keyboard'), B('keyboard', e));
      }
      function K(e) {
        (M = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((N = !0), B('pointer', e));
      }
      function O(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (D() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((N = !0), (M = 'virtual'));
      }
      function I(e) {
        e.target !== window &&
          e.target !== document &&
          (N || R || ((M = 'virtual'), B('virtual', e)), (N = !1), (R = !1));
      }
      function W() {
        (N = !1), (R = !0);
      }
      function z(e) {
        if ('undefined' == typeof window || S.get(g(e))) return;
        let t = g(e),
          r = p(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (N = !0), n.apply(this, arguments);
        }),
          r.addEventListener('keydown', F, !0),
          r.addEventListener('keyup', F, !0),
          r.addEventListener('click', O, !0),
          t.addEventListener('focus', I, !0),
          t.addEventListener('blur', W, !1),
          'undefined' != typeof PointerEvent
            ? (r.addEventListener('pointerdown', K, !0),
              r.addEventListener('pointermove', K, !0),
              r.addEventListener('pointerup', K, !0))
            : (r.addEventListener('mousedown', K, !0),
              r.addEventListener('mousemove', K, !0),
              r.addEventListener('mouseup', K, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              H(e);
            },
            { once: !0 },
          ),
          S.set(t, { focus: n });
      }
      let H = (e, t) => {
        let r = g(e),
          n = p(e);
        t && n.removeEventListener('DOMContentLoaded', t),
          S.has(r) &&
            ((r.HTMLElement.prototype.focus = S.get(r).focus),
            n.removeEventListener('keydown', F, !0),
            n.removeEventListener('keyup', F, !0),
            n.removeEventListener('click', O, !0),
            r.removeEventListener('focus', I, !0),
            r.removeEventListener('blur', W, !1),
            'undefined' != typeof PointerEvent
              ? (n.removeEventListener('pointerdown', K, !0),
                n.removeEventListener('pointermove', K, !0),
                n.removeEventListener('pointerup', K, !0))
              : (n.removeEventListener('mousedown', K, !0),
                n.removeEventListener('mousemove', K, !0),
                n.removeEventListener('mouseup', K, !0)),
            S.delete(r));
      };
      function j(e) {
        let t = p(e);
        if ('virtual' === M) {
          var r;
          let n = t.activeElement;
          (r = () => {
            t.activeElement === n && e.isConnected && y(e);
          }),
            requestAnimationFrame(() => {
              0 === v.size ? r() : m.add(r);
            });
        } else y(e);
      }
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let r = p(void 0);
          'loading' !== r.readyState
            ? z(void 0)
            : ((t = () => {
                z(void 0);
              }),
              r.addEventListener('DOMContentLoaded', t)),
            () => H(e, t);
        })(),
        r(54887);
      let _ = n.createContext(null);
      function U(e, t) {
        let r,
          p,
          { role: g = 'dialog' } = e,
          v = (function (e = []) {
            let t = (function (e) {
                let [t, r] = (0, n.useState)(void 0),
                  a = (0, n.useRef)(null),
                  l = (0, u.gP)(t),
                  d = (0, n.useCallback)((e) => {
                    a.current = e;
                  }, []);
                return (
                  s && i.set(l, d),
                  o(
                    () => () => {
                      i.delete(l);
                    },
                    [l],
                  ),
                  (0, n.useEffect)(() => {
                    let e = a.current;
                    e && ((a.current = null), r(e));
                  }),
                  l
                );
              })(),
              [r, l] = (function (e) {
                let [t, r] = (0, n.useState)(e),
                  u = (0, n.useRef)(null),
                  s = a(() => {
                    if (!u.current) return;
                    let e = u.current.next();
                    if (e.done) {
                      u.current = null;
                      return;
                    }
                    t === e.value ? s() : r(e.value);
                  });
                o(() => {
                  u.current && s();
                });
                let i = a((e) => {
                  (u.current = e(t)), s();
                });
                return [t, i];
              })(t),
              d = (0, n.useCallback)(() => {
                l(function* () {
                  yield t, yield document.getElementById(t) ? t : void 0;
                });
              }, [t, l]);
            return o(d, [t, d, ...e]), r;
          })();
        v = e['aria-label'] ? void 0 : v;
        let m = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
              j(t.current);
              let e = setTimeout(() => {
                document.activeElement === t.current &&
                  ((m.current = !0),
                  t.current && (t.current.blur(), j(t.current)),
                  (m.current = !1));
              }, 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [t]),
          o(() => {
            null == p || p(!0);
          }, [
            (p = null == (r = (0, n.useContext)(_)) ? void 0 : r.setContain),
          ]),
          {
            dialogProps: {
              ...(function (e, t = {}) {
                let { labelable: r, isLink: n, propNames: o } = t,
                  a = {};
                for (let t in e)
                  Object.prototype.hasOwnProperty.call(e, t) &&
                    (l.has(t) ||
                      (r && d.has(t)) ||
                      (n && c.has(t)) ||
                      (null == o ? void 0 : o.has(t)) ||
                      f.test(t)) &&
                    (a[t] = e[t]);
                return a;
              })(e, { labelable: !0 }),
              role: g,
              tabIndex: -1,
              'aria-labelledby': e['aria-labelledby'] || v,
              onBlur: (e) => {
                m.current && e.stopPropagation();
              },
            },
            titleProps: { id: v },
          }
        );
      }
    },
    27546: function (e, t, r) {
      r.d(t, {
        MT: function () {
          return l;
        },
        cW: function () {
          return b;
        },
      });
      var n = r(31417),
        o = r(84267),
        a = r(82679),
        u = r(2265);
      let s = u.createContext(null),
        i = null;
      function l(e) {
        let t,
          r,
          { children: n, contain: l, restoreFocus: d, autoFocus: c } = e,
          f = (0, u.useRef)(null),
          b = (0, u.useRef)(null),
          T = (0, u.useRef)([]),
          { parentNode: L } = (0, u.useContext)(s) || {},
          C = (0, u.useMemo)(() => new P({ scopeRef: T }), [T]);
        (0, a.b)(() => {
          let e = L || x.root;
          if (x.getTreeNode(e.scopeRef) && i && !y(i, e.scopeRef)) {
            let t = x.getTreeNode(i);
            t && (e = t);
          }
          e.addChild(C), x.addNode(C);
        }, [C, L]),
          (0, a.b)(() => {
            let e = x.getTreeNode(T);
            e && (e.contain = !!l);
          }, [l]),
          (0, a.b)(() => {
            var e;
            let t =
                null === (e = f.current) || void 0 === e
                  ? void 0
                  : e.nextSibling,
              r = [];
            for (; t && t !== b.current; ) r.push(t), (t = t.nextSibling);
            T.current = r;
          }, [n]),
          (0, a.b)(() => {
            if (d || l) return;
            let e = T.current,
              t = (0, o.r)(e ? e[0] : void 0),
              r = (e) => {
                let t = e.target;
                v(t, T.current) ? (i = T) : m(t) || (i = null);
              };
            return (
              t.addEventListener('focusin', r, !1),
              null == e ||
                e.forEach((e) => e.addEventListener('focusin', r, !1)),
              () => {
                t.removeEventListener('focusin', r, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener('focusin', r, !1));
              }
            );
          }, [T, d, l]),
          (t = (0, u.useRef)()),
          (r = (0, u.useRef)()),
          (0, a.b)(() => {
            let e = T.current;
            if (!l) {
              r.current &&
                (cancelAnimationFrame(r.current), (r.current = void 0));
              return;
            }
            let n = (0, o.r)(e ? e[0] : void 0),
              a = (e) => {
                if (
                  'Tab' !== e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  !g(T) ||
                  e.isComposing
                )
                  return;
                let t = n.activeElement,
                  r = T.current;
                if (!r || !v(t, r)) return;
                let o = w(p(r), { tabbable: !0 }, r);
                if (!t) return;
                o.currentNode = t;
                let a = e.shiftKey ? o.previousNode() : o.nextNode();
                a ||
                  ((o.currentNode = e.shiftKey
                    ? r[r.length - 1].nextElementSibling
                    : r[0].previousElementSibling),
                  (a = e.shiftKey ? o.previousNode() : o.nextNode())),
                  e.preventDefault(),
                  a && h(a, !0);
              },
              u = (e) => {
                (!i || y(i, T)) && v(e.target, T.current)
                  ? ((i = T), (t.current = e.target))
                  : g(T) && !m(e.target, T)
                    ? t.current
                      ? t.current.focus()
                      : i && i.current && E(i.current)
                    : g(T) && (t.current = e.target);
              },
              s = (e) => {
                r.current && cancelAnimationFrame(r.current),
                  (r.current = requestAnimationFrame(() => {
                    if (n.activeElement && g(T) && !m(n.activeElement, T)) {
                      if (((i = T), n.body.contains(e.target))) {
                        var r;
                        (t.current = e.target),
                          null === (r = t.current) || void 0 === r || r.focus();
                      } else i.current && E(i.current);
                    }
                  }));
              };
            return (
              n.addEventListener('keydown', a, !1),
              n.addEventListener('focusin', u, !1),
              null == e ||
                e.forEach((e) => e.addEventListener('focusin', u, !1)),
              null == e ||
                e.forEach((e) => e.addEventListener('focusout', s, !1)),
              () => {
                n.removeEventListener('keydown', a, !1),
                  n.removeEventListener('focusin', u, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener('focusin', u, !1)),
                  null == e ||
                    e.forEach((e) => e.removeEventListener('focusout', s, !1));
              }
            );
          }, [T, l]),
          (0, a.b)(
            () => () => {
              r.current && cancelAnimationFrame(r.current);
            },
            [r],
          ),
          (function (e, t, r) {
            let n = (0, u.useRef)(
              'undefined' != typeof document
                ? (0, o.r)(e.current ? e.current[0] : void 0).activeElement
                : null,
            );
            (0, a.b)(() => {
              let n = e.current,
                a = (0, o.r)(n ? n[0] : void 0);
              if (!t || r) return;
              let u = () => {
                (!i || y(i, e)) && v(a.activeElement, e.current) && (i = e);
              };
              return (
                a.addEventListener('focusin', u, !1),
                null == n ||
                  n.forEach((e) => e.addEventListener('focusin', u, !1)),
                () => {
                  a.removeEventListener('focusin', u, !1),
                    null == n ||
                      n.forEach((e) => e.removeEventListener('focusin', u, !1));
                }
              );
            }, [e, r]),
              (0, a.b)(() => {
                let n = (0, o.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let a = (t) => {
                  if (
                    'Tab' !== t.key ||
                    t.altKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    !g(e) ||
                    t.isComposing
                  )
                    return;
                  let r = n.activeElement;
                  if (!v(r, e.current)) return;
                  let o = x.getTreeNode(e);
                  if (!o) return;
                  let a = o.nodeToRestore,
                    u = w(n.body, { tabbable: !0 });
                  u.currentNode = r;
                  let s = t.shiftKey ? u.previousNode() : u.nextNode();
                  if (
                    ((a && n.body.contains(a) && a !== n.body) ||
                      ((a = void 0), (o.nodeToRestore = void 0)),
                    (!s || !v(s, e.current)) && a)
                  ) {
                    u.currentNode = a;
                    do s = t.shiftKey ? u.previousNode() : u.nextNode();
                    while (v(s, e.current));
                    (t.preventDefault(), t.stopPropagation(), s)
                      ? h(s, !0)
                      : m(a)
                        ? h(a, !0)
                        : r.blur();
                  }
                };
                return (
                  r || n.addEventListener('keydown', a, !0),
                  () => {
                    r || n.removeEventListener('keydown', a, !0);
                  }
                );
              }, [e, t, r]),
              (0, a.b)(() => {
                var r;
                let a = (0, o.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let u = x.getTreeNode(e);
                if (u)
                  return (
                    (u.nodeToRestore =
                      null !== (r = n.current) && void 0 !== r ? r : void 0),
                    () => {
                      let r = x.getTreeNode(e);
                      if (!r) return;
                      let n = r.nodeToRestore;
                      if (
                        t &&
                        n &&
                        (v(a.activeElement, e.current) ||
                          (a.activeElement === a.body &&
                            (function (e) {
                              let t = x.getTreeNode(i);
                              for (; t && t.scopeRef !== e; ) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent;
                              }
                              return (null == t ? void 0 : t.scopeRef) === e;
                            })(e)))
                      ) {
                        let t = x.clone();
                        requestAnimationFrame(() => {
                          if (a.activeElement === a.body) {
                            let r = t.getTreeNode(e);
                            for (; r; ) {
                              if (
                                r.nodeToRestore &&
                                r.nodeToRestore.isConnected
                              ) {
                                h(r.nodeToRestore);
                                return;
                              }
                              r = r.parent;
                            }
                            for (r = t.getTreeNode(e); r; ) {
                              if (
                                r.scopeRef &&
                                r.scopeRef.current &&
                                x.getTreeNode(r.scopeRef)
                              ) {
                                E(r.scopeRef.current, !0);
                                return;
                              }
                              r = r.parent;
                            }
                          }
                        });
                      }
                    }
                  );
              }, [e, t]);
          })(T, d, l),
          (function (e, t) {
            let r = u.useRef(t);
            (0, u.useEffect)(() => {
              r.current &&
                ((i = e),
                !v(
                  (0, o.r)(e.current ? e.current[0] : void 0).activeElement,
                  i.current,
                ) &&
                  e.current &&
                  E(e.current)),
                (r.current = !1);
            }, [e]);
          })(T, c),
          (0, u.useEffect)(() => {
            let e = (0, o.r)(T.current ? T.current[0] : void 0).activeElement,
              t = null;
            if (v(e, T.current)) {
              for (let r of x.traverse())
                r.scopeRef && v(e, r.scopeRef.current) && (t = r);
              t === x.getTreeNode(T) && (i = t.scopeRef);
            }
          }, [T]),
          (0, a.b)(
            () => () => {
              var e, t, r;
              let n =
                null !==
                  (r =
                    null === (t = x.getTreeNode(T)) || void 0 === t
                      ? void 0
                      : null === (e = t.parent) || void 0 === e
                        ? void 0
                        : e.scopeRef) && void 0 !== r
                  ? r
                  : null;
              (T === i || y(T, i)) && (!n || x.getTreeNode(n)) && (i = n),
                x.removeTreeNode(T);
            },
            [T],
          );
        let k = (0, u.useMemo)(
            () => ({
              focusNext(e = {}) {
                let t = T.current,
                  { from: r, tabbable: n, wrap: a, accept: u } = e,
                  s = r || (0, o.r)(t[0]).activeElement,
                  i = t[0].previousElementSibling,
                  l = w(p(t), { tabbable: n, accept: u }, t);
                l.currentNode = v(s, t) ? s : i;
                let d = l.nextNode();
                return (
                  !d && a && ((l.currentNode = i), (d = l.nextNode())),
                  d && h(d, !0),
                  d
                );
              },
              focusPrevious(e = {}) {
                let t = T.current,
                  { from: r, tabbable: n, wrap: a, accept: u } = e,
                  s = r || (0, o.r)(t[0]).activeElement,
                  i = t[t.length - 1].nextElementSibling,
                  l = w(p(t), { tabbable: n, accept: u }, t);
                l.currentNode = v(s, t) ? s : i;
                let d = l.previousNode();
                return (
                  !d && a && ((l.currentNode = i), (d = l.previousNode())),
                  d && h(d, !0),
                  d
                );
              },
              focusFirst(e = {}) {
                let t = T.current,
                  { tabbable: r, accept: n } = e,
                  o = w(p(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[0].previousElementSibling;
                let a = o.nextNode();
                return a && h(a, !0), a;
              },
              focusLast(e = {}) {
                let t = T.current,
                  { tabbable: r, accept: n } = e,
                  o = w(p(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[t.length - 1].nextElementSibling;
                let a = o.previousNode();
                return a && h(a, !0), a;
              },
            }),
            [],
          ),
          D = (0, u.useMemo)(
            () => ({ focusManager: k, parentNode: C }),
            [C, k],
          );
        return u.createElement(
          s.Provider,
          { value: D },
          u.createElement('span', {
            'data-focus-scope-start': !0,
            hidden: !0,
            ref: f,
          }),
          n,
          u.createElement('span', {
            'data-focus-scope-end': !0,
            hidden: !0,
            ref: b,
          }),
        );
      }
      let d = [
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
        c =
          d.join(':not([hidden]),') +
          ',[tabindex]:not([disabled]):not([hidden])';
      d.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let f = d.join(':not([hidden]):not([tabindex="-1"]),');
      function p(e) {
        return e[0].parentElement;
      }
      function g(e) {
        let t = x.getTreeNode(i);
        for (; t && t.scopeRef !== e; ) {
          if (t.contain) return !1;
          t = t.parent;
        }
        return !0;
      }
      function v(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      function m(e, t = null) {
        if (e instanceof Element && e.closest('[data-react-aria-top-layer]'))
          return !0;
        for (let { scopeRef: r } of x.traverse(x.getTreeNode(t)))
          if (r && v(e, r.current)) return !0;
        return !1;
      }
      function b(e) {
        return m(e, i);
      }
      function y(e, t) {
        var r;
        let n =
          null === (r = x.getTreeNode(t)) || void 0 === r ? void 0 : r.parent;
        for (; n; ) {
          if (n.scopeRef === e) return !0;
          n = n.parent;
        }
        return !1;
      }
      function h(e, t = !1) {
        if (null == e || t) {
          if (null != e)
            try {
              e.focus();
            } catch (e) {}
        } else
          try {
            (0, n.e)(e);
          } catch (e) {}
      }
      function E(e, t = !0) {
        let r = e[0].previousElementSibling,
          n = p(e),
          o = w(n, { tabbable: t }, e);
        o.currentNode = r;
        let a = o.nextNode();
        t &&
          !a &&
          (((o = w((n = p(e)), { tabbable: !1 }, e)).currentNode = r),
          (a = o.nextNode())),
          h(a);
      }
      function w(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? f : c,
          a = (0, o.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var a;
              return (
                null == t
                  ? void 0
                  : null === (a = t.from) || void 0 === a
                    ? void 0
                    : a.contains(e)
              )
                ? NodeFilter.FILTER_REJECT
                : e.matches(n) &&
                    (function e(t, r) {
                      return (
                        '#comment' !== t.nodeName &&
                        (function (e) {
                          let t = (0, o.k)(e);
                          if (
                            !(e instanceof t.HTMLElement) &&
                            !(e instanceof t.SVGElement)
                          )
                            return !1;
                          let { display: r, visibility: n } = e.style,
                            a =
                              'none' !== r &&
                              'hidden' !== n &&
                              'collapse' !== n;
                          if (a) {
                            let { getComputedStyle: t } =
                                e.ownerDocument.defaultView,
                              { display: r, visibility: n } = t(e);
                            a =
                              'none' !== r &&
                              'hidden' !== n &&
                              'collapse' !== n;
                          }
                          return a;
                        })(t) &&
                        !t.hasAttribute('hidden') &&
                        !t.hasAttribute('data-react-aria-prevent-focus') &&
                        ('DETAILS' !== t.nodeName ||
                          !r ||
                          'SUMMARY' === r.nodeName ||
                          t.hasAttribute('open')) &&
                        (!t.parentElement || e(t.parentElement, t))
                      );
                    })(e) &&
                    (!r || v(e, r)) &&
                    (!(null == t ? void 0 : t.accept) || t.accept(e))
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a;
      }
      class T {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new P({ scopeRef: e });
          n.addChild(o),
            (o.parent = n),
            this.fastMap.set(e, o),
            r && (o.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              v(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r &&
            (r.removeChild(t),
            n.size > 0 && n.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new T();
          for (let n of this.traverse())
            r.addTreeNode(
              n.scopeRef,
              null !==
                (t =
                  null === (e = n.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              n.nodeToRestore,
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new P({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class P {
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
      let x = new T();
    },
    95729: function (e, t, r) {
      r.d(t, {
        E: function () {
          return w;
        },
        Kf: function () {
          return P;
        },
        _w: function () {
          return T;
        },
      });
      var n = r(2446),
        o = r(45057),
        a = r(73070),
        u = r(2265),
        s = r(73165);
      let i = null,
        l = new Set(),
        d = new Map(),
        c = !1,
        f = !1;
      function p(e, t) {
        for (let r of l) r(e, t);
      }
      function g(e) {
        (c = !0),
          e.metaKey ||
            (!(0, n.V5)() && e.altKey) ||
            e.ctrlKey ||
            'Control' === e.key ||
            'Shift' === e.key ||
            'Meta' === e.key ||
            ((i = 'keyboard'), p('keyboard', e));
      }
      function v(e) {
        (i = 'pointer'),
          ('mousedown' === e.type || 'pointerdown' === e.type) &&
            ((c = !0), p('pointer', e));
      }
      function m(e) {
        (0, o.Z)(e) && ((c = !0), (i = 'virtual'));
      }
      function b(e) {
        e.target !== window &&
          e.target !== document &&
          (c || f || ((i = 'virtual'), p('virtual', e)), (c = !1), (f = !1));
      }
      function y() {
        (c = !1), (f = !0);
      }
      function h(e) {
        if ('undefined' == typeof window || d.get((0, a.k)(e))) return;
        let t = (0, a.k)(e),
          r = (0, a.r)(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (c = !0), n.apply(this, arguments);
        }),
          r.addEventListener('keydown', g, !0),
          r.addEventListener('keyup', g, !0),
          r.addEventListener('click', m, !0),
          t.addEventListener('focus', b, !0),
          t.addEventListener('blur', y, !1),
          'undefined' != typeof PointerEvent
            ? (r.addEventListener('pointerdown', v, !0),
              r.addEventListener('pointermove', v, !0),
              r.addEventListener('pointerup', v, !0))
            : (r.addEventListener('mousedown', v, !0),
              r.addEventListener('mousemove', v, !0),
              r.addEventListener('mouseup', v, !0)),
          t.addEventListener(
            'beforeunload',
            () => {
              E(e);
            },
            { once: !0 },
          ),
          d.set(t, { focus: n });
      }
      let E = (e, t) => {
        let r = (0, a.k)(e),
          n = (0, a.r)(e);
        t && n.removeEventListener('DOMContentLoaded', t),
          d.has(r) &&
            ((r.HTMLElement.prototype.focus = d.get(r).focus),
            n.removeEventListener('keydown', g, !0),
            n.removeEventListener('keyup', g, !0),
            n.removeEventListener('click', m, !0),
            r.removeEventListener('focus', b, !0),
            r.removeEventListener('blur', y, !1),
            'undefined' != typeof PointerEvent
              ? (n.removeEventListener('pointerdown', v, !0),
                n.removeEventListener('pointermove', v, !0),
                n.removeEventListener('pointerup', v, !0))
              : (n.removeEventListener('mousedown', v, !0),
                n.removeEventListener('mousemove', v, !0),
                n.removeEventListener('mouseup', v, !0)),
            d.delete(r));
      };
      function w() {
        return 'pointer' !== i;
      }
      function T(e) {
        (i = e), p(e, null);
      }
      function P() {
        h();
        let [e, t] = (0, u.useState)(i);
        return (
          (0, u.useEffect)(() => {
            let e = () => {
              t(i);
            };
            return (
              l.add(e),
              () => {
                l.delete(e);
              }
            );
          }, []),
          (0, s.Av)() ? null : e
        );
      }
      'undefined' != typeof document &&
        (function (e) {
          let t;
          let r = (0, a.r)(void 0);
          'loading' !== r.readyState
            ? h(void 0)
            : ((t = () => {
                h(void 0);
              }),
              r.addEventListener('DOMContentLoaded', t)),
            () => E(e, t);
        })();
    },
    42795: function (e, t, r) {
      r.d(t, {
        u: function () {
          return eo;
        },
      });
      var n = {};
      n = {
        'ar-AE': {
          longPressMessage: `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`,
        },
        'bg-BG': {
          longPressMessage: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`,
        },
        'cs-CZ': {
          longPressMessage: `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`,
        },
        'da-DK': {
          longPressMessage: `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`,
        },
        'de-DE': {
          longPressMessage: `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`,
        },
        'el-GR': {
          longPressMessage: `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`,
        },
        'en-US': {
          longPressMessage: 'Long press or press Alt + ArrowDown to open menu',
        },
        'es-ES': {
          longPressMessage: `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`,
        },
        'et-EE': {
          longPressMessage: `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`,
        },
        'fi-FI': {
          longPressMessage: `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`,
        },
        'fr-FR': {
          longPressMessage: `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`,
        },
        'he-IL': {
          longPressMessage: `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
        },
        'hr-HR': {
          longPressMessage:
            'Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika',
        },
        'hu-HU': {
          longPressMessage: `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`,
        },
        'it-IT': {
          longPressMessage: `Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`,
        },
        'ja-JP': {
          longPressMessage: `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`,
        },
        'ko-KR': {
          longPressMessage: `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`,
        },
        'lt-LT': {
          longPressMessage: `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`,
        },
        'lv-LV': {
          longPressMessage: `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`,
        },
        'nb-NO': {
          longPressMessage: `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`,
        },
        'nl-NL': {
          longPressMessage:
            'Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen',
        },
        'pl-PL': {
          longPressMessage: `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`,
        },
        'pt-BR': {
          longPressMessage:
            'Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu',
        },
        'pt-PT': {
          longPressMessage:
            'Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu',
        },
        'ro-RO': {
          longPressMessage: `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`,
        },
        'ru-RU': {
          longPressMessage: `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`,
        },
        'sk-SK': {
          longPressMessage: `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`,
        },
        'sl-SI': {
          longPressMessage: `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`,
        },
        'sr-SP': {
          longPressMessage:
            'Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni',
        },
        'sv-SE': {
          longPressMessage: `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`,
        },
        'tr-TR': {
          longPressMessage: `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`,
        },
        'uk-UA': {
          longPressMessage: `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`,
        },
        'zh-CN': {
          longPressMessage: `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`,
        },
        'zh-TW': {
          longPressMessage: `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`,
        },
      };
      var o = r(84040),
        a = r(79822);
      function u(e) {
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
      function s(e) {
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
      let l = i(function () {
          return s(/^Mac/i);
        }),
        d = i(function () {
          return s(/^iPhone/i);
        }),
        c = i(function () {
          return s(/^iPad/i) || (l() && navigator.maxTouchPoints > 1);
        }),
        f = i(function () {
          return d() || c();
        });
      i(function () {
        return l() || f();
      });
      let p = i(function () {
          return u(/AppleWebKit/i) && !g();
        }),
        g = i(function () {
          return u(/Chrome/i);
        }),
        v = i(function () {
          return u(/Android/i);
        }),
        m = i(function () {
          return u(/Firefox/i);
        }),
        b = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        y = (e) =>
          e && 'window' in e && e.window === e ? e : b(e).defaultView || window,
        h = new Map(),
        E = new Set();
      function w() {
        if ('undefined' == typeof window) return;
        function e(e) {
          return 'propertyName' in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let n = h.get(r.target);
          if (
            n &&
            (n.delete(r.propertyName),
            0 === n.size &&
              (r.target.removeEventListener('transitioncancel', t),
              h.delete(r.target)),
            0 === h.size)
          ) {
            for (let e of E) e();
            E.clear();
          }
        };
        document.body.addEventListener('transitionrun', (r) => {
          if (!e(r) || !r.target) return;
          let n = h.get(r.target);
          n ||
            ((n = new Set()),
            h.set(r.target, n),
            r.target.addEventListener('transitioncancel', t, { once: !0 })),
            n.add(r.propertyName);
        }),
          document.body.addEventListener('transitionend', t);
      }
      'undefined' != typeof document &&
        ('loading' !== document.readyState
          ? w()
          : document.addEventListener('DOMContentLoaded', w));
      let T = 'default',
        P = '',
        x = new WeakMap();
      function L(e) {
        if (f()) {
          if ('default' === T) {
            let t = b(e);
            (P = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = 'none');
          }
          T = 'disabled';
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (x.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
      }
      function C(e) {
        if (f())
          'disabled' === T &&
            ((T = 'restoring'),
            setTimeout(() => {
              var t;
              (t = () => {
                if ('restoring' === T) {
                  let t = b(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = P || ''),
                    (P = ''),
                    (T = 'default');
                }
              }),
                requestAnimationFrame(() => {
                  0 === h.size ? t() : E.add(t);
                });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          x.has(e)
        ) {
          let t = x.get(e);
          'none' === e.style.userSelect && (e.style.userSelect = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            x.delete(e);
        }
      }
      var k = r(2265);
      let D = k.createContext({ register: () => {} });
      D.displayName = 'PressResponderContext';
      var M = r(52396),
        A = r(49994),
        S = r(93936);
      function N(...e) {
        return (...t) => {
          for (let r of e) 'function' == typeof r && r(...t);
        };
      }
      var R = r(44839);
      function B(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              a = n[e];
            'function' == typeof r &&
            'function' == typeof a &&
            'o' === e[0] &&
            'n' === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = N(r, a))
              : ('className' === e || 'UNSAFE_className' === e) &&
                  'string' == typeof r &&
                  'string' == typeof a
                ? (t[e] = (0, R.Z)(r, a))
                : 'id' === e && r && a
                  ? (t.id = (0, o.ur)(r, a))
                  : (t[e] = void 0 !== a ? a : r);
          }
        }
        return t;
      }
      var F = r(11264);
      function K() {
        let e = (0, k.useRef)(new Map()),
          t = (0, k.useCallback)((t, r, n, o) => {
            let a = (null == o ? void 0 : o.once)
              ? (...t) => {
                  e.current.delete(n), n(...t);
                }
              : n;
            e.current.set(n, { type: r, eventTarget: t, fn: a, options: o }),
              t.addEventListener(r, n, o);
          }, []),
          r = (0, k.useCallback)((t, r, n, o) => {
            var a;
            let u =
              (null === (a = e.current.get(n)) || void 0 === a
                ? void 0
                : a.fn) || n;
            t.removeEventListener(r, u, o), e.current.delete(n);
          }, []),
          n = (0, k.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options);
            });
          }, [r]);
        return (
          (0, k.useEffect)(() => n, [n]),
          {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n,
          }
        );
      }
      function O(e) {
        let t = (0, k.useRef)(null);
        return (
          (0, F.b)(() => {
            t.current = e;
          }, [e]),
          (0, k.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
      function I(e) {
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
      let W = null;
      function z(e, t, r = !0) {
        var n, o;
        let { metaKey: a, ctrlKey: u, altKey: s, shiftKey: i } = t;
        m() &&
          (null === (o = window.event) || void 0 === o
            ? void 0
            : null === (n = o.type) || void 0 === n
              ? void 0
              : n.startsWith('key')) &&
          '_blank' === e.target &&
          (l() ? (a = !0) : (u = !0));
        let d =
          p() && l() && !c()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: a,
                ctrlKey: u,
                altKey: s,
                shiftKey: i,
              })
            : new MouseEvent('click', {
                metaKey: a,
                ctrlKey: u,
                altKey: s,
                shiftKey: i,
                bubbles: !0,
                cancelable: !0,
              });
        (z.isOpening = r), I(e), e.dispatchEvent(d), (z.isOpening = !1);
      }
      function H(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          (v() && e.pointerType
            ? 'click' === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      z.isOpening = !1;
      var j = new WeakMap();
      class _ {
        continuePropagation() {
          (0, S._)(this, j, !1);
        }
        get shouldStopPropagation() {
          return (0, M._)(this, j);
        }
        constructor(e, t, r, n) {
          var o;
          (0, A._)(this, j, { writable: !0, value: void 0 }),
            (0, S._)(this, j, !0);
          let a =
              null !== (o = null == n ? void 0 : n.target) && void 0 !== o
                ? o
                : r.currentTarget,
            u = null == a ? void 0 : a.getBoundingClientRect(),
            s,
            i = 0,
            l,
            d = null;
          null != r.clientX &&
            null != r.clientY &&
            ((l = r.clientX), (d = r.clientY)),
            u &&
              (null != l && null != d
                ? ((s = l - u.left), (i = d - u.top))
                : ((s = u.width / 2), (i = u.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = s),
            (this.y = i);
        }
      }
      let U = Symbol('linkClicked');
      function G(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function V(e, t) {
        let { key: r, code: n } = e,
          o = t.getAttribute('role');
        return (
          ('Enter' === r || ' ' === r || 'Spacebar' === r || 'Space' === n) &&
          !(
            (t instanceof y(t).HTMLInputElement && !ee(t, r)) ||
            t instanceof y(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === o || (!o && G(t))) && 'Enter' !== r)
        );
      }
      function Y(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function X(e, t) {
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
      function q(e, t) {
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
      function Z(e, t) {
        let r,
          n,
          o = t.getBoundingClientRect(),
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
          !(o.left > a.right) &&
          !(a.left > o.right) &&
          !(o.top > a.bottom) &&
          !(a.top > o.bottom)
        );
      }
      function J(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
      }
      function $(e, t) {
        return e instanceof HTMLInputElement
          ? !ee(e, t)
          : e instanceof HTMLButtonElement
            ? 'submit' !== e.type && 'reset' !== e.type
            : !G(e);
      }
      let Q = new Set([
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
      function ee(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type
          ? ' ' === t
          : Q.has(e.type);
      }
      let et = 0,
        er = new Map(),
        en = new WeakMap();
      function eo(e, t, r) {
        var u;
        let { type: s = 'menu', isDisabled: i, trigger: d = 'press' } = e,
          c = (0, o.Me)(),
          { triggerProps: f, overlayProps: p } = (function (e, t, r) {
            let n,
              { type: a } = e,
              { isOpen: u } = t;
            (0, k.useEffect)(() => {
              r && r.current && en.set(r.current, t.close);
            }),
              'menu' === a ? (n = !0) : 'listbox' === a && (n = 'listbox');
            let s = (0, o.Me)();
            return {
              triggerProps: {
                'aria-haspopup': n,
                'aria-expanded': u,
                'aria-controls': u ? s : null,
                onPress: t.toggle,
              },
              overlayProps: { id: s },
            };
          })({ type: s }, t, r),
          { longPressProps: g } = (function (e) {
            let {
                isDisabled: t,
                onLongPressStart: r,
                onLongPressEnd: n,
                onLongPress: o,
                threshold: a = 500,
                accessibilityDescription: u,
              } = e,
              s = (0, k.useRef)(void 0),
              { addGlobalListener: i, removeGlobalListener: d } = K(),
              { pressProps: c } = (function (e) {
                let {
                    onPress: t,
                    onPressChange: r,
                    onPressStart: n,
                    onPressEnd: o,
                    onPressUp: a,
                    isDisabled: u,
                    isPressed: s,
                    preventFocusOnPress: i,
                    shouldCancelOnPointerExit: d,
                    allowTextSelectionOnPress: c,
                    ref: f,
                    ...p
                  } = (function (e) {
                    var t;
                    let r = (0, k.useContext)(D);
                    if (r) {
                      let { register: t, ...n } = r;
                      (e = B(n, e)), t();
                    }
                    return (
                      (t = e.ref),
                      (0, F.b)(() => {
                        if (r && r.ref && t)
                          return (
                            (r.ref.current = t.current),
                            () => {
                              r.ref && (r.ref.current = null);
                            }
                          );
                      }),
                      e
                    );
                  })(e),
                  [g, m] = (0, k.useState)(!1),
                  h = (0, k.useRef)({
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
                  { addGlobalListener: E, removeAllGlobalListeners: w } = K(),
                  T = O((e, t) => {
                    let o = h.current;
                    if (u || o.didFirePressStart) return !1;
                    let a = !0;
                    if (((o.isTriggeringEvent = !0), n)) {
                      let r = new _('pressstart', t, e);
                      n(r), (a = r.shouldStopPropagation);
                    }
                    return (
                      r && r(!0),
                      (o.isTriggeringEvent = !1),
                      (o.didFirePressStart = !0),
                      m(!0),
                      a
                    );
                  }),
                  P = O((e, n, a = !0) => {
                    let s = h.current;
                    if (!s.didFirePressStart) return !1;
                    (s.ignoreClickAfterPress = !0),
                      (s.didFirePressStart = !1),
                      (s.isTriggeringEvent = !0);
                    let i = !0;
                    if (o) {
                      let t = new _('pressend', n, e);
                      o(t), (i = t.shouldStopPropagation);
                    }
                    if ((r && r(!1), m(!1), t && a && !u)) {
                      let r = new _('press', n, e);
                      t(r), i && (i = r.shouldStopPropagation);
                    }
                    return (s.isTriggeringEvent = !1), i;
                  }),
                  x = O((e, t) => {
                    let r = h.current;
                    if (u) return !1;
                    if (a) {
                      r.isTriggeringEvent = !0;
                      let n = new _('pressup', t, e);
                      return (
                        a(n),
                        (r.isTriggeringEvent = !1),
                        n.shouldStopPropagation
                      );
                    }
                    return !0;
                  }),
                  M = O((e) => {
                    let t = h.current;
                    t.isPressed &&
                      t.target &&
                      (t.isOverTarget &&
                        null != t.pointerType &&
                        P(q(t.target, e), t.pointerType, !1),
                      (t.isPressed = !1),
                      (t.isOverTarget = !1),
                      (t.activePointerId = null),
                      (t.pointerType = null),
                      w(),
                      c || C(t.target));
                  }),
                  A = O((e) => {
                    d && M(e);
                  }),
                  S = (0, k.useMemo)(() => {
                    let e = h.current,
                      t = {
                        onKeyDown(t) {
                          if (
                            V(t.nativeEvent, t.currentTarget) &&
                            t.currentTarget.contains(t.target)
                          ) {
                            var n;
                            $(t.target, t.key) && t.preventDefault();
                            let o = !0;
                            if (!e.isPressed && !t.repeat) {
                              (e.target = t.currentTarget),
                                (e.isPressed = !0),
                                (o = T(t, 'keyboard'));
                              let n = t.currentTarget;
                              E(
                                b(t.currentTarget),
                                'keyup',
                                N((t) => {
                                  V(t, n) &&
                                    !t.repeat &&
                                    n.contains(t.target) &&
                                    e.target &&
                                    x(q(e.target, t), 'keyboard');
                                }, r),
                                !0,
                              );
                            }
                            o && t.stopPropagation(),
                              t.metaKey &&
                                l() &&
                                (null === (n = e.metaKeyEvents) ||
                                  void 0 === n ||
                                  n.set(t.key, t.nativeEvent));
                          } else
                            'Meta' === t.key && (e.metaKeyEvents = new Map());
                        },
                        onClick(t) {
                          if (
                            (!t || t.currentTarget.contains(t.target)) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !z.isOpening
                          ) {
                            let r = !0;
                            if (
                              (u && t.preventDefault(),
                              !e.ignoreClickAfterPress &&
                                !e.ignoreEmulatedMouseEvents &&
                                !e.isPressed &&
                                ('virtual' === e.pointerType ||
                                  H(t.nativeEvent)))
                            ) {
                              u || i || I(t.currentTarget);
                              let e = T(t, 'virtual'),
                                n = x(t, 'virtual'),
                                o = P(t, 'virtual');
                              r = e && n && o;
                            }
                            (e.ignoreEmulatedMouseEvents = !1),
                              (e.ignoreClickAfterPress = !1),
                              r && t.stopPropagation();
                          }
                        },
                      },
                      r = (t) => {
                        var r, n, o;
                        if (e.isPressed && e.target && V(t, e.target)) {
                          $(t.target, t.key) && t.preventDefault();
                          let r = t.target;
                          P(q(e.target, t), 'keyboard', e.target.contains(r)),
                            w(),
                            'Enter' !== t.key &&
                              G(e.target) &&
                              e.target.contains(r) &&
                              !t[U] &&
                              ((t[U] = !0), z(e.target, t, !1)),
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
                          for (let r of ((e.metaKeyEvents = void 0),
                          t.values()))
                            null === (o = e.target) ||
                              void 0 === o ||
                              o.dispatchEvent(new KeyboardEvent('keyup', r));
                        }
                      };
                    if ('undefined' != typeof PointerEvent) {
                      (t.onPointerDown = (t) => {
                        var a;
                        if (
                          0 !== t.button ||
                          !t.currentTarget.contains(t.target)
                        )
                          return;
                        if (
                          ((a = t.nativeEvent),
                          (!v() && 0 === a.width && 0 === a.height) ||
                            (1 === a.width &&
                              1 === a.height &&
                              0 === a.pressure &&
                              0 === a.detail &&
                              'mouse' === a.pointerType))
                        ) {
                          e.pointerType = 'virtual';
                          return;
                        }
                        J(t.currentTarget) && t.preventDefault(),
                          (e.pointerType = t.pointerType);
                        let s = !0;
                        e.isPressed ||
                          ((e.isPressed = !0),
                          (e.isOverTarget = !0),
                          (e.activePointerId = t.pointerId),
                          (e.target = t.currentTarget),
                          u || i || I(t.currentTarget),
                          c || L(e.target),
                          (s = T(t, e.pointerType)),
                          E(b(t.currentTarget), 'pointermove', r, !1),
                          E(b(t.currentTarget), 'pointerup', n, !1),
                          E(b(t.currentTarget), 'pointercancel', o, !1)),
                          s && t.stopPropagation();
                      }),
                        (t.onMouseDown = (e) => {
                          e.currentTarget.contains(e.target) &&
                            0 === e.button &&
                            (J(e.currentTarget) && e.preventDefault(),
                            e.stopPropagation());
                        }),
                        (t.onPointerUp = (t) => {
                          t.currentTarget.contains(t.target) &&
                            'virtual' !== e.pointerType &&
                            0 === t.button &&
                            Z(t, t.currentTarget) &&
                            x(t, e.pointerType || t.pointerType);
                        });
                      let r = (t) => {
                          t.pointerId === e.activePointerId &&
                            (e.target && Z(t, e.target)
                              ? e.isOverTarget ||
                                null == e.pointerType ||
                                ((e.isOverTarget = !0),
                                T(q(e.target, t), e.pointerType))
                              : e.target &&
                                e.isOverTarget &&
                                null != e.pointerType &&
                                ((e.isOverTarget = !1),
                                P(q(e.target, t), e.pointerType, !1),
                                A(t)));
                        },
                        n = (t) => {
                          t.pointerId === e.activePointerId &&
                            e.isPressed &&
                            0 === t.button &&
                            e.target &&
                            (Z(t, e.target) && null != e.pointerType
                              ? P(q(e.target, t), e.pointerType)
                              : e.isOverTarget &&
                                null != e.pointerType &&
                                P(q(e.target, t), e.pointerType, !1),
                            (e.isPressed = !1),
                            (e.isOverTarget = !1),
                            (e.activePointerId = null),
                            (e.pointerType = null),
                            w(),
                            c || C(e.target));
                        },
                        o = (e) => {
                          M(e);
                        };
                      t.onDragStart = (e) => {
                        e.currentTarget.contains(e.target) && M(e);
                      };
                    } else {
                      (t.onMouseDown = (t) => {
                        if (
                          0 === t.button &&
                          t.currentTarget.contains(t.target)
                        ) {
                          if (
                            (J(t.currentTarget) && t.preventDefault(),
                            e.ignoreEmulatedMouseEvents)
                          ) {
                            t.stopPropagation();
                            return;
                          }
                          (e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.target = t.currentTarget),
                            (e.pointerType = H(t.nativeEvent)
                              ? 'virtual'
                              : 'mouse'),
                            u || i || I(t.currentTarget),
                            T(t, e.pointerType) && t.stopPropagation(),
                            E(b(t.currentTarget), 'mouseup', r, !1);
                        }
                      }),
                        (t.onMouseEnter = (t) => {
                          if (!t.currentTarget.contains(t.target)) return;
                          let r = !0;
                          e.isPressed &&
                            !e.ignoreEmulatedMouseEvents &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), (r = T(t, e.pointerType))),
                            r && t.stopPropagation();
                        }),
                        (t.onMouseLeave = (t) => {
                          if (!t.currentTarget.contains(t.target)) return;
                          let r = !0;
                          e.isPressed &&
                            !e.ignoreEmulatedMouseEvents &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1),
                            (r = P(t, e.pointerType, !1)),
                            A(t)),
                            r && t.stopPropagation();
                        }),
                        (t.onMouseUp = (t) => {
                          t.currentTarget.contains(t.target) &&
                            !e.ignoreEmulatedMouseEvents &&
                            0 === t.button &&
                            x(t, e.pointerType || 'mouse');
                        });
                      let r = (t) => {
                        if (0 === t.button) {
                          if (
                            ((e.isPressed = !1),
                            w(),
                            e.ignoreEmulatedMouseEvents)
                          ) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return;
                          }
                          e.target && Z(t, e.target) && null != e.pointerType
                            ? P(q(e.target, t), e.pointerType)
                            : e.target &&
                              e.isOverTarget &&
                              null != e.pointerType &&
                              P(q(e.target, t), e.pointerType, !1),
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
                          u || i || I(t.currentTarget),
                          c || L(e.target),
                          T(X(e.target, t), e.pointerType) &&
                            t.stopPropagation(),
                          E(y(t.currentTarget), 'scroll', n, !0));
                      }),
                        (t.onTouchMove = (t) => {
                          if (!t.currentTarget.contains(t.target)) return;
                          if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                          }
                          let r = Y(t.nativeEvent, e.activePointerId),
                            n = !0;
                          r && Z(r, t.currentTarget)
                            ? e.isOverTarget ||
                              null == e.pointerType ||
                              ((e.isOverTarget = !0),
                              (n = T(X(e.target, t), e.pointerType)))
                            : e.isOverTarget &&
                              null != e.pointerType &&
                              ((e.isOverTarget = !1),
                              (n = P(X(e.target, t), e.pointerType, !1)),
                              A(X(e.target, t))),
                            n && t.stopPropagation();
                        }),
                        (t.onTouchEnd = (t) => {
                          if (!t.currentTarget.contains(t.target)) return;
                          if (!e.isPressed) {
                            t.stopPropagation();
                            return;
                          }
                          let r = Y(t.nativeEvent, e.activePointerId),
                            n = !0;
                          r && Z(r, t.currentTarget) && null != e.pointerType
                            ? (x(X(e.target, t), e.pointerType),
                              (n = P(X(e.target, t), e.pointerType)))
                            : e.isOverTarget &&
                              null != e.pointerType &&
                              (n = P(X(e.target, t), e.pointerType, !1)),
                            n && t.stopPropagation(),
                            (e.isPressed = !1),
                            (e.activePointerId = null),
                            (e.isOverTarget = !1),
                            (e.ignoreEmulatedMouseEvents = !0),
                            e.target && !c && C(e.target),
                            w();
                        }),
                        (t.onTouchCancel = (t) => {
                          t.currentTarget.contains(t.target) &&
                            (t.stopPropagation(),
                            e.isPressed && M(X(e.target, t)));
                        });
                      let n = (t) => {
                        e.isPressed &&
                          t.target.contains(e.target) &&
                          M({
                            currentTarget: e.target,
                            shiftKey: !1,
                            ctrlKey: !1,
                            metaKey: !1,
                            altKey: !1,
                          });
                      };
                      t.onDragStart = (e) => {
                        e.currentTarget.contains(e.target) && M(e);
                      };
                    }
                    return t;
                  }, [E, u, i, w, c, M, A, P, T, x]);
                return (
                  (0, k.useEffect)(
                    () => () => {
                      var e;
                      c ||
                        C(
                          null !== (e = h.current.target) && void 0 !== e
                            ? e
                            : void 0,
                        );
                    },
                    [c],
                  ),
                  { isPressed: s || g, pressProps: B(p, S) }
                );
              })({
                isDisabled: t,
                onPressStart(e) {
                  if (
                    (e.continuePropagation(),
                    ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                      (r && r({ ...e, type: 'longpressstart' }),
                      (s.current = setTimeout(() => {
                        e.target.dispatchEvent(
                          new PointerEvent('pointercancel', { bubbles: !0 }),
                        ),
                          o && o({ ...e, type: 'longpress' }),
                          (s.current = void 0);
                      }, a)),
                      'touch' === e.pointerType))
                  ) {
                    let t = (e) => {
                      e.preventDefault();
                    };
                    i(e.target, 'contextmenu', t, { once: !0 }),
                      i(
                        window,
                        'pointerup',
                        () => {
                          setTimeout(() => {
                            d(e.target, 'contextmenu', t);
                          }, 30);
                        },
                        { once: !0 },
                      );
                  }
                },
                onPressEnd(e) {
                  s.current && clearTimeout(s.current),
                    n &&
                      ('mouse' === e.pointerType ||
                        'touch' === e.pointerType) &&
                      n({ ...e, type: 'longpressend' });
                },
              });
            return {
              longPressProps: B(
                c,
                (function (e) {
                  let [t, r] = (0, k.useState)();
                  return (
                    (0, F.b)(() => {
                      if (!e) return;
                      let t = er.get(e);
                      if (t) r(t.element.id);
                      else {
                        let n = `react-aria-description-${et++}`;
                        r(n);
                        let o = document.createElement('div');
                        (o.id = n),
                          (o.style.display = 'none'),
                          (o.textContent = e),
                          document.body.appendChild(o),
                          (t = { refCount: 0, element: o }),
                          er.set(e, t);
                      }
                      return (
                        t.refCount++,
                        () => {
                          t &&
                            0 == --t.refCount &&
                            (t.element.remove(), er.delete(e));
                        }
                      );
                    }, [e]),
                    { 'aria-describedby': e ? t : void 0 }
                  );
                })(o && !t ? u : void 0),
              ),
            };
          })({
            isDisabled: i || 'longPress' !== d,
            accessibilityDescription: (0, a.q)(
              (u = n) && u.__esModule ? u.default : u,
              '@react-aria/menu',
            ).format('longPressMessage'),
            onLongPressStart() {
              t.close();
            },
            onLongPress() {
              t.open('first');
            },
          });
        return (
          delete f.onPress,
          {
            menuTriggerProps: {
              ...f,
              ...('press' === d
                ? {
                    onPressStart(e) {
                      'touch' === e.pointerType ||
                        'keyboard' === e.pointerType ||
                        i ||
                        t.open('virtual' === e.pointerType ? 'first' : null);
                    },
                    onPress(e) {
                      'touch' !== e.pointerType || i || t.toggle();
                    },
                  }
                : g),
              id: c,
              onKeyDown: (e) => {
                if (!i && ('longPress' !== d || e.altKey) && r && r.current)
                  switch (e.key) {
                    case 'Enter':
                    case ' ':
                      if ('longPress' === d) return;
                    case 'ArrowDown':
                      'continuePropagation' in e || e.stopPropagation(),
                        e.preventDefault(),
                        t.toggle('first');
                      break;
                    case 'ArrowUp':
                      'continuePropagation' in e || e.stopPropagation(),
                        e.preventDefault(),
                        t.toggle('last');
                      break;
                    default:
                      'continuePropagation' in e && e.continuePropagation();
                  }
              },
            },
            menuProps: {
              ...p,
              'aria-labelledby': c,
              autoFocus: t.focusStrategy || !0,
              onClose: t.close,
            },
          }
        );
      }
    },
    84040: function (e, t, r) {
      r.d(t, {
        Me: function () {
          return i;
        },
        ur: function () {
          return l;
        },
      });
      var n = r(11264),
        o = r(2265),
        a = r(73165);
      let u = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        s = new Map();
      function i(e) {
        let [t, r] = (0, o.useState)(e),
          i = (0, o.useRef)(null),
          l = (0, a.gP)(t),
          d = (0, o.useCallback)((e) => {
            i.current = e;
          }, []);
        return (
          u && s.set(l, d),
          (0, n.b)(
            () => () => {
              s.delete(l);
            },
            [l],
          ),
          (0, o.useEffect)(() => {
            let e = i.current;
            e && ((i.current = null), r(e));
          }),
          l
        );
      }
      function l(e, t) {
        if (e === t) return e;
        let r = s.get(e);
        if (r) return r(t), t;
        let n = s.get(t);
        return n ? (n(e), e) : t;
      }
    },
    11264: function (e, t, r) {
      r.d(t, {
        b: function () {
          return o;
        },
      });
      var n = r(2265);
      let o = 'undefined' != typeof document ? n.useLayoutEffect : () => {};
    },
    43737: function (e, t, r) {
      r.d(t, {
        U: function () {
          return p;
        },
      });
      var n = {};
      n = {
        'ar-AE': { dismiss: `\u{62A}\u{62C}\u{627}\u{647}\u{644}` },
        'bg-BG': {
          dismiss: `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`,
        },
        'cs-CZ': { dismiss: 'Odstranit' },
        'da-DK': { dismiss: 'Luk' },
        'de-DE': { dismiss: `Schlie\xdfen` },
        'el-GR': {
          dismiss: `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`,
        },
        'en-US': { dismiss: 'Dismiss' },
        'es-ES': { dismiss: 'Descartar' },
        'et-EE': { dismiss: `L\xf5peta` },
        'fi-FI': { dismiss: `Hylk\xe4\xe4` },
        'fr-FR': { dismiss: 'Rejeter' },
        'he-IL': { dismiss: `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}` },
        'hr-HR': { dismiss: 'Odbaci' },
        'hu-HU': { dismiss: `Elutas\xedt\xe1s` },
        'it-IT': { dismiss: 'Ignora' },
        'ja-JP': { dismiss: `\u{9589}\u{3058}\u{308B}` },
        'ko-KR': { dismiss: `\u{BB34}\u{C2DC}` },
        'lt-LT': { dismiss: 'Atmesti' },
        'lv-LV': { dismiss: `Ner\u{101}d\u{12B}t` },
        'nb-NO': { dismiss: 'Lukk' },
        'nl-NL': { dismiss: 'Negeren' },
        'pl-PL': { dismiss: 'Zignoruj' },
        'pt-BR': { dismiss: 'Descartar' },
        'pt-PT': { dismiss: 'Dispensar' },
        'ro-RO': { dismiss: 'Revocare' },
        'ru-RU': {
          dismiss: `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`,
        },
        'sk-SK': { dismiss: `Zru\u{161}i\u{165}` },
        'sl-SI': { dismiss: 'Opusti' },
        'sr-SP': { dismiss: 'Odbaci' },
        'sv-SE': { dismiss: 'Avvisa' },
        'tr-TR': { dismiss: 'Kapat' },
        'uk-UA': {
          dismiss: `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`,
        },
        'zh-CN': { dismiss: `\u{53D6}\u{6D88}` },
        'zh-TW': { dismiss: `\u{95DC}\u{9589}` },
      };
      var o = r(2265),
        a = r(3832),
        u = r(79822);
      'undefined' != typeof window &&
        window.document &&
        window.document.createElement;
      let s = new Map();
      var i = r(44839);
      let l = 'undefined' != typeof document ? o.useLayoutEffect : () => {};
      class d {
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
      let c = {
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
      function f(e) {
        let {
            children: t,
            elementType: r = 'div',
            isFocusable: n,
            style: a,
            ...u
          } = e,
          { visuallyHiddenProps: f } = (function (e = {}) {
            let { style: t, isFocusable: r } = e,
              [n, a] = (0, o.useState)(!1),
              { focusWithinProps: u } = (function (e) {
                let t,
                  r,
                  {
                    isDisabled: n,
                    onBlurWithin: a,
                    onFocusWithin: u,
                    onFocusWithinChange: s,
                  } = e,
                  i = (0, o.useRef)({ isFocusWithin: !1 }),
                  c = (0, o.useCallback)(
                    (e) => {
                      i.current.isFocusWithin &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((i.current.isFocusWithin = !1), a && a(e), s && s(!1));
                    },
                    [a, s, i],
                  ),
                  f =
                    ((t = (0, o.useRef)({ isFocused: !1, observer: null })),
                    l(() => {
                      let e = t.current;
                      return () => {
                        e.observer &&
                          (e.observer.disconnect(), (e.observer = null));
                      };
                    }, []),
                    (r = (function (e) {
                      let t = (0, o.useRef)(null);
                      return (
                        l(() => {
                          t.current = e;
                        }, [e]),
                        (0, o.useCallback)((...e) => {
                          let r = t.current;
                          return null == r ? void 0 : r(...e);
                        }, [])
                      );
                    })((e) => {
                      null == c || c(e);
                    })),
                    (0, o.useCallback)(
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
                                n.disabled && r(new d('blur', e)),
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
                  p = (0, o.useCallback)(
                    (e) => {
                      i.current.isFocusWithin ||
                        document.activeElement !== e.target ||
                        (u && u(e),
                        s && s(!0),
                        (i.current.isFocusWithin = !0),
                        f(e));
                    },
                    [u, s, f],
                  );
                return n
                  ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                  : { focusWithinProps: { onFocus: p, onBlur: c } };
              })({ isDisabled: !r, onFocusWithinChange: (e) => a(e) }),
              s = (0, o.useMemo)(() => (n ? t : t ? { ...c, ...t } : c), [n]);
            return { visuallyHiddenProps: { ...u, style: s } };
          })(e);
        return o.createElement(
          r,
          (function (...e) {
            let t = { ...e[0] };
            for (let r = 1; r < e.length; r++) {
              let n = e[r];
              for (let e in n) {
                let r = t[e],
                  o = n[e];
                'function' == typeof r &&
                'function' == typeof o &&
                'o' === e[0] &&
                'n' === e[1] &&
                e.charCodeAt(2) >= 65 &&
                90 >= e.charCodeAt(2)
                  ? (t[e] = (function (...e) {
                      return (...t) => {
                        for (let r of e) 'function' == typeof r && r(...t);
                      };
                    })(r, o))
                  : ('className' === e || 'UNSAFE_className' === e) &&
                      'string' == typeof r &&
                      'string' == typeof o
                    ? (t[e] = (0, i.Z)(r, o))
                    : 'id' === e && r && o
                      ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let r = s.get(e);
                          if (r) return r(t), t;
                          let n = s.get(t);
                          return n ? (n(e), e) : t;
                        })(r, o))
                      : (t[e] = void 0 !== o ? o : r);
              }
            }
            return t;
          })(u, f),
          t,
        );
      }
      function p(e) {
        var t;
        let { onDismiss: r, ...s } = e,
          i = (function (e, t) {
            let { id: r, 'aria-label': n, 'aria-labelledby': o } = e;
            return (
              (r = (0, a.Me)(r)),
              o && n
                ? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(' '))
                : o && (o = o.trim().split(/\s+/).join(' ')),
              n || o || !t || (n = t),
              { id: r, 'aria-label': n, 'aria-labelledby': o }
            );
          })(
            s,
            (0, u.q)(
              (t = n) && t.__esModule ? t.default : t,
              '@react-aria/overlays',
            ).format('dismiss'),
          );
        return o.createElement(
          f,
          null,
          o.createElement('button', {
            ...i,
            tabIndex: -1,
            onClick: () => {
              r && r();
            },
            style: { width: 1, height: 1 },
          }),
        );
      }
    },
    92608: function (e, t, r) {
      r.d(t, {
        aV: function () {
          return f;
        },
        Bq: function () {
          return p;
        },
      });
      var n = r(2265);
      let o = (0, n.createContext)({}),
        a = n.createContext({ register: () => {} });
      function u({ children: e }) {
        let t = (0, n.useMemo)(() => ({ register: () => {} }), []);
        return n.createElement(a.Provider, { value: t }, e);
      }
      a.displayName = 'PressResponderContext';
      var s = r(78953),
        i = r(54887),
        l = r(73165),
        d = r(77594);
      let c = n.createContext(null);
      function f(e) {
        var t;
        let r = (0, l.Av)(),
          { portalContainer: a = r ? null : document.body, isExiting: d } = e,
          [f, p] = (0, n.useState)(!1),
          g = (0, n.useMemo)(() => ({ contain: f, setContain: p }), [f, p]),
          { getContainer: v } =
            null !== (t = (0, n.useContext)(o)) && void 0 !== t ? t : {};
        if ((!e.portalContainer && v && (a = v()), !a)) return null;
        let m = e.children;
        return (
          e.disableFocusManagement ||
            (m = n.createElement(
              s.MT,
              { restoreFocus: !0, contain: f && !d },
              m,
            )),
          (m = n.createElement(
            c.Provider,
            { value: g },
            n.createElement(u, null, m),
          )),
          i.createPortal(m, a)
        );
      }
      function p() {
        let e = (0, n.useContext)(c),
          t = null == e ? void 0 : e.setContain;
        (0, d.b)(() => {
          null == t || t(!0);
        }, [t]);
      }
    },
    3832: function (e, t, r) {
      r.d(t, {
        Me: function () {
          return i;
        },
      });
      var n = r(77594),
        o = r(2265),
        a = r(73165);
      let u = !!(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        ),
        s = new Map();
      function i(e) {
        let [t, r] = (0, o.useState)(e),
          i = (0, o.useRef)(null),
          l = (0, a.gP)(t),
          d = (0, o.useCallback)((e) => {
            i.current = e;
          }, []);
        return (
          u && s.set(l, d),
          (0, n.b)(
            () => () => {
              s.delete(l);
            },
            [l],
          ),
          (0, o.useEffect)(() => {
            let e = i.current;
            e && ((i.current = null), r(e));
          }),
          l
        );
      }
    },
    30256: function (e, t, r) {
      r.d(t, {
        l: function () {
          return n;
        },
      });
      function n(...e) {
        return 1 === e.length
          ? e[0]
          : (t) => {
              for (let r of e)
                'function' == typeof r ? r(t) : null != r && (r.current = t);
            };
      }
    },
    75699: function (e, t, r) {
      r.d(t, {
        W: function () {
          return a;
        },
      });
      var n = r(89259),
        o = r(2265);
      function a(e) {
        let t = (0, n.d)(e),
          [r, a] = (0, o.useState)(null),
          [u, s] = (0, o.useState)([]),
          i = () => {
            s([]), t.close();
          };
        return {
          focusStrategy: r,
          ...t,
          open(e = null) {
            a(e), t.open();
          },
          toggle(e = null) {
            a(e), t.toggle();
          },
          close() {
            i();
          },
          expandedKeysStack: u,
          openSubmenu: (e, t) => {
            s((r) => (t > r.length ? r : [...r.slice(0, t), e]));
          },
          closeSubmenu: (e, t) => {
            s((r) => (r[t] === e ? r.slice(0, t) : r));
          },
        };
      }
    },
  },
]);
