(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5314],
  {
    82894: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 17982));
    },
    17982: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          default: function () {
            return i;
          },
        });
      var r = e(57437),
        c = e(24842),
        s = e(27517);
      function i(n) {
        let { children: t } = n,
          { balance: e, address: i, network: u } = (0, c.$)((n) => n);
        return (0, r.jsx)('section', {
          children: (0, r.jsx)(s.j, {
            className: 'mx-auto mt-20 block',
            children: t,
          }),
        });
      }
    },
    27517: function (n, t, e) {
      'use strict';
      e.d(t, {
        j: function () {
          return u;
        },
      });
      var r = e(57437),
        c = e(41733),
        s = e(24842);
      e(2265);
      var i = e(90089);
      let u = (n) => {
        var t;
        let { children: e, className: u, text: l, keepStyle: o } = n;
        null == e || null === (t = e.props) || void 0 === t || t.onClick;
        let { t: a } = (0, i.$G)(),
          { connected: d, setModalVisible: f } = (0, s.$)((n) => n);
        return d || o
          ? (0, r.jsx)(r.Fragment, { children: e })
          : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(c.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => f(!0),
                radius: 'sm',
                className: u,
                color: 'primary',
                children: l || a('buttons.connect'),
              }),
            });
      };
    },
  },
  function (n) {
    n.O(0, [3911, 2971, 7023, 1744], function () {
      return n((n.s = 82894));
    }),
      (_N_E = n.O());
  },
]);
