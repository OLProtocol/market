(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    46385: function (n, e, r) {
      Promise.resolve().then(r.bind(r, 62446));
    },
    62446: function (n, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return u;
          },
        });
      var t = r(57437),
        i = r(2265);
      function u(n) {
        let { error: e, reset: r } = n;
        return (
          (0, i.useEffect)(() => {
            console.error(e);
          }, [e]),
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsx)('h2', { children: 'Something went wrong!' }),
              (0, t.jsx)('button', {
                onClick: () => r(),
                children: 'Try again',
              }),
            ],
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [2971, 7023, 1744], function () {
      return n((n.s = 46385));
    }),
      (_N_E = n.O());
  },
]);
