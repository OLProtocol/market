'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9508],
  {
    43512: function (t, e, n) {
      n.d(e, {
        $6: function () {
          return Z;
        },
        $p: function () {
          return n$;
        },
        Aw: function () {
          return rC;
        },
        Cd: function () {
          return r7;
        },
        Cm: function () {
          return I;
        },
        Dk: function () {
          return X;
        },
        E9: function () {
          return tq;
        },
        Ee: function () {
          return io;
        },
        F6: function () {
          return tM;
        },
        G$: function () {
          return nh;
        },
        G0: function () {
          return rp;
        },
        GL: function () {
          return V;
        },
        GZ: function () {
          return rZ;
        },
        I8: function () {
          return tC;
        },
        L1: function () {
          return n2;
        },
        N1: function () {
          return nk;
        },
        NB: function () {
          return rA;
        },
        O4: function () {
          return tI;
        },
        Oi: function () {
          return nJ;
        },
        Pj: function () {
          return ie;
        },
        R: function () {
          return eA;
        },
        RV: function () {
          return r1;
        },
        Rr: function () {
          return W;
        },
        Rx: function () {
          return eb;
        },
        UL: function () {
          return ic;
        },
        V1: function () {
          return t0;
        },
        Vl: function () {
          return tD;
        },
        Xz: function () {
          return iw;
        },
        YR: function () {
          return ne;
        },
        ZA: function () {
          return ir;
        },
        _O: function () {
          return tL;
        },
        aH: function () {
          return iu;
        },
        b_: function () {
          return it;
        },
        bn: function () {
          return C;
        },
        gz: function () {
          return e0;
        },
        h0: function () {
          return j;
        },
        iM: function () {
          return R;
        },
        jU: function () {
          return nq;
        },
        jd: function () {
          return rG;
        },
        jf: function () {
          return tJ;
        },
        k9: function () {
          return ii;
        },
        lu: function () {
          return eO;
        },
        mN: function () {
          return tX;
        },
        mg: function () {
          return il;
        },
        o6: function () {
          return eT;
        },
        qA: function () {
          return eR;
        },
        s$: function () {
          return r8;
        },
        ux: function () {
          return id;
        },
        x1: function () {
          return ia;
        },
        xA: function () {
          return rN;
        },
        xv: function () {
          return ih;
        },
        y$: function () {
          return is;
        },
      });
      var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        h,
        p,
        d,
        f,
        v,
        y,
        g,
        m,
        E,
        x,
        b,
        T,
        P,
        S,
        N,
        w,
        k,
        M,
        C,
        _,
        A,
        R,
        O,
        L,
        I,
        D,
        G,
        F,
        B,
        U,
        V,
        Y,
        z,
        j,
        W,
        X,
        Z,
        H = n(11735),
        q = n(36393),
        K = n(49644),
        J = n(81519),
        $ = n(53340),
        Q = n(99660),
        tt = n(8238),
        te = n(50023),
        tn = n(8318),
        tr = n(18133),
        ti = n(56756),
        to = n(29185),
        ta = n(51559),
        ts = n(35263),
        tl = n(90510),
        tu = n(29801),
        tc = n(94994),
        th = n(37953),
        tp = n(19545),
        td = n(61442),
        tf = n(91766),
        tv = n(96503),
        ty = n(53767),
        tg = n(17981),
        tm = n(44028),
        tE = n(44619),
        tx = n(7403),
        tb = n(63984),
        tT = n(6205),
        tP = n(84763),
        tS = n(60914),
        tN = n(58794),
        tw =
          ('undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : 'undefined' != typeof self && self,
          { exports: {} });
      (r = function () {
        function t(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function e(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }
        var n = function (t) {
          void 0 === t && (t = 9),
            (this._maxEntries = Math.max(4, t)),
            (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
            this.clear();
        };
        function r(t, e) {
          i(t, 0, t.children.length, e, t);
        }
        function i(t, e, n, r, i) {
          i || (i = p(null)),
            (i.minX = 1 / 0),
            (i.minY = 1 / 0),
            (i.maxX = -1 / 0),
            (i.maxY = -1 / 0);
          for (var a = e; a < n; a++) {
            var s = t.children[a];
            o(i, t.leaf ? r(s) : s);
          }
          return i;
        }
        function o(t, e) {
          return (
            (t.minX = Math.min(t.minX, e.minX)),
            (t.minY = Math.min(t.minY, e.minY)),
            (t.maxX = Math.max(t.maxX, e.maxX)),
            (t.maxY = Math.max(t.maxY, e.maxY)),
            t
          );
        }
        function a(t, e) {
          return t.minX - e.minX;
        }
        function s(t, e) {
          return t.minY - e.minY;
        }
        function l(t) {
          return (t.maxX - t.minX) * (t.maxY - t.minY);
        }
        function u(t) {
          return t.maxX - t.minX + (t.maxY - t.minY);
        }
        function c(t, e) {
          return (
            t.minX <= e.minX &&
            t.minY <= e.minY &&
            e.maxX <= t.maxX &&
            e.maxY <= t.maxY
          );
        }
        function h(t, e) {
          return (
            e.minX <= t.maxX &&
            e.minY <= t.maxY &&
            e.maxX >= t.minX &&
            e.maxY >= t.minY
          );
        }
        function p(t) {
          return {
            children: t,
            height: 1,
            leaf: !0,
            minX: 1 / 0,
            minY: 1 / 0,
            maxX: -1 / 0,
            maxY: -1 / 0,
          };
        }
        function d(n, r, i, o, a) {
          for (var s = [r, i]; s.length; )
            if (!((i = s.pop()) - (r = s.pop()) <= o)) {
              var l = r + Math.ceil((i - r) / o / 2) * o;
              (function e(n, r, i, o, a) {
                for (; o > i; ) {
                  if (o - i > 600) {
                    var s = o - i + 1,
                      l = r - i + 1,
                      u = Math.log(s),
                      c = 0.5 * Math.exp((2 * u) / 3),
                      h =
                        0.5 *
                        Math.sqrt((u * c * (s - c)) / s) *
                        (l - s / 2 < 0 ? -1 : 1),
                      p = Math.max(i, Math.floor(r - (l * c) / s + h)),
                      d = Math.min(o, Math.floor(r + ((s - l) * c) / s + h));
                    e(n, r, p, d, a);
                  }
                  var f = n[r],
                    v = i,
                    y = o;
                  for (t(n, i, r), a(n[o], f) > 0 && t(n, i, o); v < y; ) {
                    for (t(n, v, y), v++, y--; 0 > a(n[v], f); ) v++;
                    for (; a(n[y], f) > 0; ) y--;
                  }
                  0 === a(n[i], f) ? t(n, i, y) : t(n, ++y, o),
                    y <= r && (i = y + 1),
                    r <= y && (o = y - 1);
                }
              })(n, l, r || 0, i || n.length - 1, a || e),
                s.push(r, l, l, i);
            }
        }
        return (
          (n.prototype.all = function () {
            return this._all(this.data, []);
          }),
          (n.prototype.search = function (t) {
            var e = this.data,
              n = [];
            if (!h(t, e)) return n;
            for (var r = this.toBBox, i = []; e; ) {
              for (var o = 0; o < e.children.length; o++) {
                var a = e.children[o],
                  s = e.leaf ? r(a) : a;
                h(t, s) &&
                  (e.leaf ? n.push(a) : c(t, s) ? this._all(a, n) : i.push(a));
              }
              e = i.pop();
            }
            return n;
          }),
          (n.prototype.collides = function (t) {
            var e = this.data;
            if (!h(t, e)) return !1;
            for (var n = []; e; ) {
              for (var r = 0; r < e.children.length; r++) {
                var i = e.children[r],
                  o = e.leaf ? this.toBBox(i) : i;
                if (h(t, o)) {
                  if (e.leaf || c(t, o)) return !0;
                  n.push(i);
                }
              }
              e = n.pop();
            }
            return !1;
          }),
          (n.prototype.load = function (t) {
            if (!(t && t.length)) return this;
            if (t.length < this._minEntries) {
              for (var e = 0; e < t.length; e++) this.insert(t[e]);
              return this;
            }
            var n = this._build(t.slice(), 0, t.length - 1, 0);
            if (this.data.children.length) {
              if (this.data.height === n.height) this._splitRoot(this.data, n);
              else {
                if (this.data.height < n.height) {
                  var r = this.data;
                  (this.data = n), (n = r);
                }
                this._insert(n, this.data.height - n.height - 1, !0);
              }
            } else this.data = n;
            return this;
          }),
          (n.prototype.insert = function (t) {
            return t && this._insert(t, this.data.height - 1), this;
          }),
          (n.prototype.clear = function () {
            return (this.data = p([])), this;
          }),
          (n.prototype.remove = function (t, e) {
            if (!t) return this;
            for (
              var n, r, i, o = this.data, a = this.toBBox(t), s = [], l = [];
              o || s.length;

            ) {
              if (
                (o ||
                  ((o = s.pop()),
                  (r = s[s.length - 1]),
                  (n = l.pop()),
                  (i = !0)),
                o.leaf)
              ) {
                var u = (function (t, e, n) {
                  if (!n) return e.indexOf(t);
                  for (var r = 0; r < e.length; r++) if (n(t, e[r])) return r;
                  return -1;
                })(t, o.children, e);
                if (-1 !== u) {
                  o.children.splice(u, 1), s.push(o), this._condense(s);
                  break;
                }
              }
              !i && !o.leaf && c(o, a)
                ? (s.push(o), l.push(n), (n = 0), (r = o), (o = o.children[0]))
                : r
                  ? (n++, (o = r.children[n]), (i = !1))
                  : (o = null);
            }
            return this;
          }),
          (n.prototype.toBBox = function (t) {
            return t;
          }),
          (n.prototype.compareMinX = function (t, e) {
            return t.minX - e.minX;
          }),
          (n.prototype.compareMinY = function (t, e) {
            return t.minY - e.minY;
          }),
          (n.prototype.toJSON = function () {
            return this.data;
          }),
          (n.prototype.fromJSON = function (t) {
            return (this.data = t), this;
          }),
          (n.prototype._all = function (t, e) {
            for (var n = []; t; )
              t.leaf
                ? e.push.apply(e, t.children)
                : n.push.apply(n, t.children),
                (t = n.pop());
            return e;
          }),
          (n.prototype._build = function (t, e, n, i) {
            var o,
              a = n - e + 1,
              s = this._maxEntries;
            if (a <= s) return r((o = p(t.slice(e, n + 1))), this.toBBox), o;
            i ||
              ((i = Math.ceil(Math.log(a) / Math.log(s))),
              (s = Math.ceil(a / Math.pow(s, i - 1)))),
              ((o = p([])).leaf = !1),
              (o.height = i);
            var l = Math.ceil(a / s),
              u = l * Math.ceil(Math.sqrt(s));
            d(t, e, n, u, this.compareMinX);
            for (var c = e; c <= n; c += u) {
              var h = Math.min(c + u - 1, n);
              d(t, c, h, l, this.compareMinY);
              for (var f = c; f <= h; f += l) {
                var v = Math.min(f + l - 1, h);
                o.children.push(this._build(t, f, v, i - 1));
              }
            }
            return r(o, this.toBBox), o;
          }),
          (n.prototype._chooseSubtree = function (t, e, n, r) {
            for (; r.push(e), !e.leaf && r.length - 1 !== n; ) {
              for (
                var i = 1 / 0, o = 1 / 0, a = void 0, s = 0;
                s < e.children.length;
                s++
              ) {
                var u = e.children[s],
                  c = l(u),
                  h =
                    (Math.max(u.maxX, t.maxX) - Math.min(u.minX, t.minX)) *
                      (Math.max(u.maxY, t.maxY) - Math.min(u.minY, t.minY)) -
                    c;
                h < o
                  ? ((o = h), (i = c < i ? c : i), (a = u))
                  : h === o && c < i && ((i = c), (a = u));
              }
              e = a || e.children[0];
            }
            return e;
          }),
          (n.prototype._insert = function (t, e, n) {
            var r = n ? t : this.toBBox(t),
              i = [],
              a = this._chooseSubtree(r, this.data, e, i);
            for (a.children.push(t), o(a, r); e >= 0; )
              if (i[e].children.length > this._maxEntries)
                this._split(i, e), e--;
              else break;
            this._adjustParentBBoxes(r, i, e);
          }),
          (n.prototype._split = function (t, e) {
            var n = t[e],
              i = n.children.length,
              o = this._minEntries;
            this._chooseSplitAxis(n, o, i);
            var a = this._chooseSplitIndex(n, o, i),
              s = p(n.children.splice(a, n.children.length - a));
            (s.height = n.height),
              (s.leaf = n.leaf),
              r(n, this.toBBox),
              r(s, this.toBBox),
              e ? t[e - 1].children.push(s) : this._splitRoot(n, s);
          }),
          (n.prototype._splitRoot = function (t, e) {
            (this.data = p([t, e])),
              (this.data.height = t.height + 1),
              (this.data.leaf = !1),
              r(this.data, this.toBBox);
          }),
          (n.prototype._chooseSplitIndex = function (t, e, n) {
            for (var r, o = 1 / 0, a = 1 / 0, s = e; s <= n - e; s++) {
              var u = i(t, 0, s, this.toBBox),
                c = i(t, s, n, this.toBBox),
                h = (function (t, e) {
                  var n = Math.max(t.minX, e.minX),
                    r = Math.max(t.minY, e.minY);
                  return (
                    Math.max(0, Math.min(t.maxX, e.maxX) - n) *
                    Math.max(0, Math.min(t.maxY, e.maxY) - r)
                  );
                })(u, c),
                p = l(u) + l(c);
              h < o
                ? ((o = h), (r = s), (a = p < a ? p : a))
                : h === o && p < a && ((a = p), (r = s));
            }
            return r || n - e;
          }),
          (n.prototype._chooseSplitAxis = function (t, e, n) {
            var r = t.leaf ? this.compareMinX : a,
              i = t.leaf ? this.compareMinY : s;
            this._allDistMargin(t, e, n, r) < this._allDistMargin(t, e, n, i) &&
              t.children.sort(r);
          }),
          (n.prototype._allDistMargin = function (t, e, n, r) {
            t.children.sort(r);
            for (
              var a = this.toBBox,
                s = i(t, 0, e, a),
                l = i(t, n - e, n, a),
                c = u(s) + u(l),
                h = e;
              h < n - e;
              h++
            ) {
              var p = t.children[h];
              o(s, t.leaf ? a(p) : p), (c += u(s));
            }
            for (var d = n - e - 1; d >= e; d--) {
              var f = t.children[d];
              o(l, t.leaf ? a(f) : f), (c += u(l));
            }
            return c;
          }),
          (n.prototype._adjustParentBBoxes = function (t, e, n) {
            for (var r = n; r >= 0; r--) o(e[r], t);
          }),
          (n.prototype._condense = function (t) {
            for (var e = t.length - 1, n = void 0; e >= 0; e--)
              0 === t[e].children.length
                ? e > 0
                  ? (n = t[e - 1].children).splice(n.indexOf(t[e]), 1)
                  : this.clear()
                : r(t[e], this.toBBox);
          }),
          n
        );
      }),
        (tw.exports = r());
      var tk = tw.exports;
      ((i = C || (C = {})).GROUP = 'g'),
        (i.CIRCLE = 'circle'),
        (i.ELLIPSE = 'ellipse'),
        (i.IMAGE = 'image'),
        (i.RECT = 'rect'),
        (i.LINE = 'line'),
        (i.POLYLINE = 'polyline'),
        (i.POLYGON = 'polygon'),
        (i.TEXT = 'text'),
        (i.PATH = 'path'),
        (i.HTML = 'html'),
        (i.MESH = 'mesh'),
        ((o = _ || (_ = {}))[(o.ZERO = 0)] = 'ZERO'),
        (o[(o.NEGATIVE_ONE = 1)] = 'NEGATIVE_ONE');
      var tM = (function () {
          function t() {
            this.plugins = [];
          }
          return (
            (t.prototype.addRenderingPlugin = function (t) {
              this.plugins.push(t), this.context.renderingPlugins.push(t);
            }),
            (t.prototype.removeAllRenderingPlugins = function () {
              var t = this;
              this.plugins.forEach(function (e) {
                var n = t.context.renderingPlugins.indexOf(e);
                n >= 0 && t.context.renderingPlugins.splice(n, 1);
              });
            }),
            t
          );
        })(),
        tC = (function () {
          function t(t) {
            (this.clipSpaceNearZ = _.NEGATIVE_ONE),
              (this.plugins = []),
              (this.config = (0, H.__assign)(
                {
                  enableDirtyCheck: !0,
                  enableCulling: !1,
                  enableAutoRendering: !0,
                  enableDirtyRectangleRendering: !0,
                  enableDirtyRectangleRenderingDebug: !1,
                  enableSizeAttenuation: !0,
                },
                t,
              ));
          }
          return (
            (t.prototype.registerPlugin = function (t) {
              -1 ===
                this.plugins.findIndex(function (e) {
                  return e === t;
                }) && this.plugins.push(t);
            }),
            (t.prototype.unregisterPlugin = function (t) {
              var e = this.plugins.findIndex(function (e) {
                return e === t;
              });
              e > -1 && this.plugins.splice(e, 1);
            }),
            (t.prototype.getPlugins = function () {
              return this.plugins;
            }),
            (t.prototype.getPlugin = function (t) {
              return this.plugins.find(function (e) {
                return e.name === t;
              });
            }),
            (t.prototype.getConfig = function () {
              return this.config;
            }),
            (t.prototype.setConfig = function (t) {
              Object.assign(this.config, t);
            }),
            t
          );
        })();
      function t_(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function tA(t, e, n) {
        return (
          (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t
        );
      }
      function tR(t, e, n) {
        return (
          (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t
        );
      }
      function tO(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
      }
      function tL(t) {
        return void 0 === t ? 0 : t > 360 || t < -360 ? t % 360 : t;
      }
      function tI(t, e, n) {
        return (void 0 === e && (e = 0),
        void 0 === n && (n = 0),
        Array.isArray(t) && 3 === t.length)
          ? K.d9(t)
          : (0, tn.Z)(t)
            ? K.al(t, e, n)
            : K.al(t[0], t[1] || e, t[2] || n);
      }
      function tD(t) {
        return (Math.PI / 180) * t;
      }
      function tG(t) {
        return (180 / Math.PI) * t;
      }
      function tF(t, e) {
        var n, r, i, o, a, s, l, u, c, h, p, d, f, v, y, g, m;
        return (
          16 === e.length
            ? ((i = 0.5 * Math.PI),
              (a = (o = (0, H.__read)(J.getScaling(K.Ue(), e), 3))[0]),
              (s = o[1]),
              (l = o[2]),
              (u = Math.asin(-e[2] / a)) < i
                ? u > -i
                  ? ((n = Math.atan2(e[6] / s, e[10] / l)),
                    (r = Math.atan2(e[1] / a, e[0] / a)))
                  : ((r = 0), (n = -Math.atan2(e[4] / s, e[5] / s)))
                : ((r = 0), (n = Math.atan2(e[4] / s, e[5] / s))),
              (t[0] = n),
              (t[1] = u),
              (t[2] = r))
            : ((c = e[0]),
              (h = e[1]),
              (p = e[2]),
              (d = e[3]),
              (g = c * c + (f = h * h) + (v = p * p) + (y = d * d)),
              (m = c * d - h * p) > 0.499995 * g
                ? ((t[0] = Math.PI / 2),
                  (t[1] = 2 * Math.atan2(h, c)),
                  (t[2] = 0))
                : m < -0.499995 * g
                  ? ((t[0] = -Math.PI / 2),
                    (t[1] = 2 * Math.atan2(h, c)),
                    (t[2] = 0))
                  : ((t[0] = Math.asin(2 * (c * p - d * h))),
                    (t[1] = Math.atan2(2 * (c * d + h * p), 1 - 2 * (v + y))),
                    (t[2] = Math.atan2(2 * (c * h + p * d), 1 - 2 * (f + v))))),
          t
        );
      }
      function tB(t) {
        var e = t[0],
          n = t[1],
          r = t[3],
          i = t[4],
          o = Math.sqrt(e * e + n * n),
          a = Math.sqrt(r * r + i * i);
        e * i - n * r < 0 && (e < i ? (o = -o) : (a = -a)),
          o && ((e *= 1 / o), (n *= 1 / o)),
          a && ((r *= 1 / a), (i *= 1 / a));
        var s = tG(Math.atan2(n, e));
        return [t[6], t[7], o, a, s];
      }
      var tU = J.create(),
        tV = J.create(),
        tY = Q.Ue(),
        tz = [K.Ue(), K.Ue(), K.Ue()],
        tj = K.Ue();
      function tW(t, e, n, r, i) {
        (t[0] = e[0] * r + n[0] * i),
          (t[1] = e[1] * r + n[1] * i),
          (t[2] = e[2] * r + n[2] * i);
      }
      var tX = (function () {
          function t() {
            (this.center = [0, 0, 0]),
              (this.halfExtents = [0, 0, 0]),
              (this.min = [0, 0, 0]),
              (this.max = [0, 0, 0]);
          }
          return (
            (t.isEmpty = function (t) {
              return (
                !t ||
                (0 === t.halfExtents[0] &&
                  0 === t.halfExtents[1] &&
                  0 === t.halfExtents[2])
              );
            }),
            (t.prototype.update = function (t, e) {
              t_(this.center, t),
                t_(this.halfExtents, e),
                tA(this.min, this.center, this.halfExtents),
                tR(this.max, this.center, this.halfExtents);
            }),
            (t.prototype.setMinMax = function (t, e) {
              tR(this.center, e, t),
                tO(this.center, this.center, 0.5),
                tA(this.halfExtents, e, t),
                tO(this.halfExtents, this.halfExtents, 0.5),
                t_(this.min, t),
                t_(this.max, e);
            }),
            (t.prototype.getMin = function () {
              return this.min;
            }),
            (t.prototype.getMax = function () {
              return this.max;
            }),
            (t.prototype.add = function (e) {
              if (!t.isEmpty(e)) {
                if (t.isEmpty(this)) {
                  this.setMinMax(e.getMin(), e.getMax());
                  return;
                }
                var n = this.center,
                  r = n[0],
                  i = n[1],
                  o = n[2],
                  a = this.halfExtents,
                  s = a[0],
                  l = a[1],
                  u = a[2],
                  c = r - s,
                  h = r + s,
                  p = i - l,
                  d = i + l,
                  f = o - u,
                  v = o + u,
                  y = e.center,
                  g = y[0],
                  m = y[1],
                  E = y[2],
                  x = e.halfExtents,
                  b = x[0],
                  T = x[1],
                  P = x[2],
                  S = g - b,
                  N = g + b,
                  w = m - T,
                  k = m + T,
                  M = E - P,
                  C = E + P;
                S < c && (c = S),
                  N > h && (h = N),
                  w < p && (p = w),
                  k > d && (d = k),
                  M < f && (f = M),
                  C > v && (v = C),
                  (n[0] = (c + h) * 0.5),
                  (n[1] = (p + d) * 0.5),
                  (n[2] = (f + v) * 0.5),
                  (a[0] = (h - c) * 0.5),
                  (a[1] = (d - p) * 0.5),
                  (a[2] = (v - f) * 0.5),
                  (this.min[0] = c),
                  (this.min[1] = p),
                  (this.min[2] = f),
                  (this.max[0] = h),
                  (this.max[1] = d),
                  (this.max[2] = v);
              }
            }),
            (t.prototype.setFromTransformedAABB = function (t, e) {
              var n = this.center,
                r = this.halfExtents,
                i = t.center,
                o = t.halfExtents,
                a = e[0],
                s = e[4],
                l = e[8],
                u = e[1],
                c = e[5],
                h = e[9],
                p = e[2],
                d = e[6],
                f = e[10],
                v = Math.abs(a),
                y = Math.abs(s),
                g = Math.abs(l),
                m = Math.abs(u),
                E = Math.abs(c),
                x = Math.abs(h),
                b = Math.abs(p),
                T = Math.abs(d),
                P = Math.abs(f);
              (n[0] = e[12] + a * i[0] + s * i[1] + l * i[2]),
                (n[1] = e[13] + u * i[0] + c * i[1] + h * i[2]),
                (n[2] = e[14] + p * i[0] + d * i[1] + f * i[2]),
                (r[0] = v * o[0] + y * o[1] + g * o[2]),
                (r[1] = m * o[0] + E * o[1] + x * o[2]),
                (r[2] = b * o[0] + T * o[1] + P * o[2]),
                tA(this.min, n, r),
                tR(this.max, n, r);
            }),
            (t.prototype.intersects = function (t) {
              var e = this.getMax(),
                n = this.getMin(),
                r = t.getMax(),
                i = t.getMin();
              return (
                n[0] <= r[0] &&
                e[0] >= i[0] &&
                n[1] <= r[1] &&
                e[1] >= i[1] &&
                n[2] <= r[2] &&
                e[2] >= i[2]
              );
            }),
            (t.prototype.intersection = function (e) {
              if (!this.intersects(e)) return null;
              var n,
                r,
                i,
                o,
                a,
                s,
                l = new t(),
                u =
                  ((n = [0, 0, 0]),
                  (r = this.getMin()),
                  (i = e.getMin()),
                  (n[0] = Math.max(r[0], i[0])),
                  (n[1] = Math.max(r[1], i[1])),
                  (n[2] = Math.max(r[2], i[2])),
                  n),
                c =
                  ((o = [0, 0, 0]),
                  (a = this.getMax()),
                  (s = e.getMax()),
                  (o[0] = Math.min(a[0], s[0])),
                  (o[1] = Math.min(a[1], s[1])),
                  (o[2] = Math.min(a[2], s[2])),
                  o);
              return l.setMinMax(u, c), l;
            }),
            (t.prototype.getNegativeFarPoint = function (t) {
              if (273 === t.pnVertexFlag) return t_([0, 0, 0], this.min);
              if (272 === t.pnVertexFlag)
                return [this.min[0], this.min[1], this.max[2]];
              if (257 === t.pnVertexFlag)
                return [this.min[0], this.max[1], this.min[2]];
              if (256 === t.pnVertexFlag)
                return [this.min[0], this.max[1], this.max[2]];
              if (17 === t.pnVertexFlag)
                return [this.max[0], this.min[1], this.min[2]];
              if (16 === t.pnVertexFlag)
                return [this.max[0], this.min[1], this.max[2]];
              if (1 === t.pnVertexFlag)
                return [this.max[0], this.max[1], this.min[2]];
              else return [this.max[0], this.max[1], this.max[2]];
            }),
            (t.prototype.getPositiveFarPoint = function (t) {
              if (273 === t.pnVertexFlag) return t_([0, 0, 0], this.max);
              if (272 === t.pnVertexFlag)
                return [this.max[0], this.max[1], this.min[2]];
              if (257 === t.pnVertexFlag)
                return [this.max[0], this.min[1], this.max[2]];
              if (256 === t.pnVertexFlag)
                return [this.max[0], this.min[1], this.min[2]];
              if (17 === t.pnVertexFlag)
                return [this.min[0], this.max[1], this.max[2]];
              if (16 === t.pnVertexFlag)
                return [this.min[0], this.max[1], this.min[2]];
              if (1 === t.pnVertexFlag)
                return [this.min[0], this.min[1], this.max[2]];
              else return [this.min[0], this.min[1], this.min[2]];
            }),
            t
          );
        })(),
        tZ = (function () {
          function t(t, e) {
            (this.distance = t || 0),
              (this.normal = e || K.al(0, 1, 0)),
              this.updatePNVertexFlag();
          }
          return (
            (t.prototype.updatePNVertexFlag = function () {
              this.pnVertexFlag =
                (Number(this.normal[0] >= 0) << 8) +
                (Number(this.normal[1] >= 0) << 4) +
                Number(this.normal[2] >= 0);
            }),
            (t.prototype.distanceToPoint = function (t) {
              return K.AK(t, this.normal) - this.distance;
            }),
            (t.prototype.normalize = function () {
              var t = 1 / K.Zh(this.normal);
              K.bA(this.normal, this.normal, t), (this.distance *= t);
            }),
            (t.prototype.intersectsLine = function (t, e, n) {
              var r = this.distanceToPoint(t),
                i = r / (r - this.distanceToPoint(e)),
                o = i >= 0 && i <= 1;
              return o && n && K.t7(n, t, e, i), o;
            }),
            t
          );
        })();
      ((a = A || (A = {}))[(a.OUTSIDE = 4294967295)] = 'OUTSIDE'),
        (a[(a.INSIDE = 0)] = 'INSIDE'),
        (a[(a.INDETERMINATE = 2147483647)] = 'INDETERMINATE');
      var tH = (function () {
          function t(t) {
            if (((this.planes = []), t)) this.planes = t;
            else for (var e = 0; e < 6; e++) this.planes.push(new tZ());
          }
          return (
            (t.prototype.extractFromVPMatrix = function (t) {
              var e = (0, H.__read)(t, 16),
                n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                s = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                h = e[9],
                p = e[10],
                d = e[11],
                f = e[12],
                v = e[13],
                y = e[14],
                g = e[15];
              K.t8(this.planes[0].normal, o - n, u - a, d - c),
                (this.planes[0].distance = g - f),
                K.t8(this.planes[1].normal, o + n, u + a, d + c),
                (this.planes[1].distance = g + f),
                K.t8(this.planes[2].normal, o + r, u + s, d + h),
                (this.planes[2].distance = g + v),
                K.t8(this.planes[3].normal, o - r, u - s, d - h),
                (this.planes[3].distance = g - v),
                K.t8(this.planes[4].normal, o - i, u - l, d - p),
                (this.planes[4].distance = g - y),
                K.t8(this.planes[5].normal, o + i, u + l, d + p),
                (this.planes[5].distance = g + y),
                this.planes.forEach(function (t) {
                  t.normalize(), t.updatePNVertexFlag();
                });
            }),
            t
          );
        })(),
        tq = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this.x = 0),
              (this.y = 0),
              (this.x = t),
              (this.y = e);
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y);
            }),
            (t.prototype.copyFrom = function (t) {
              (this.x = t.x), (this.y = t.y);
            }),
            t
          );
        })(),
        tK = (function () {
          function t(t, e, n, r) {
            (this.x = t),
              (this.y = e),
              (this.width = n),
              (this.height = r),
              (this.left = t),
              (this.right = t + n),
              (this.top = e),
              (this.bottom = e + r);
          }
          return (
            (t.fromRect = function (e) {
              return new t(e.x, e.y, e.width, e.height);
            }),
            (t.applyTransform = function (e, n) {
              var r = Q.al(e.x, e.y, 0, 1),
                i = Q.al(e.x + e.width, e.y, 0, 1),
                o = Q.al(e.x, e.y + e.height, 0, 1),
                a = Q.al(e.x + e.width, e.y + e.height, 0, 1),
                s = Q.Ue(),
                l = Q.Ue(),
                u = Q.Ue(),
                c = Q.Ue();
              Q.fF(s, r, n), Q.fF(l, i, n), Q.fF(u, o, n), Q.fF(c, a, n);
              var h = Math.min(s[0], l[0], u[0], c[0]),
                p = Math.min(s[1], l[1], u[1], c[1]),
                d = Math.max(s[0], l[0], u[0], c[0]),
                f = Math.max(s[1], l[1], u[1], c[1]);
              return t.fromRect({ x: h, y: p, width: d - h, height: f - p });
            }),
            (t.prototype.toJSON = function () {}),
            t
          );
        })(),
        tJ = 'Method not implemented.',
        t$ = 'Use document.documentElement instead.';
      ((s = R || (R = {}))[(s.ORBITING = 0)] = 'ORBITING'),
        (s[(s.EXPLORING = 1)] = 'EXPLORING'),
        (s[(s.TRACKING = 2)] = 'TRACKING'),
        ((l = O || (O = {}))[(l.DEFAULT = 0)] = 'DEFAULT'),
        (l[(l.ROTATIONAL = 1)] = 'ROTATIONAL'),
        (l[(l.TRANSLATIONAL = 2)] = 'TRANSLATIONAL'),
        (l[(l.CINEMATIC = 3)] = 'CINEMATIC'),
        ((u = L || (L = {}))[(u.ORTHOGRAPHIC = 0)] = 'ORTHOGRAPHIC'),
        (u[(u.PERSPECTIVE = 1)] = 'PERSPECTIVE');
      var tQ = { UPDATED: 'updated' },
        t0 = (function () {
          function t() {
            (this.clipSpaceNearZ = _.NEGATIVE_ONE),
              (this.eventEmitter = new q.Z()),
              (this.matrix = J.create()),
              (this.right = K.al(1, 0, 0)),
              (this.up = K.al(0, 1, 0)),
              (this.forward = K.al(0, 0, 1)),
              (this.position = K.al(0, 0, 1)),
              (this.focalPoint = K.al(0, 0, 0)),
              (this.distanceVector = K.al(0, 0, -1)),
              (this.distance = 1),
              (this.azimuth = 0),
              (this.elevation = 0),
              (this.roll = 0),
              (this.relAzimuth = 0),
              (this.relElevation = 0),
              (this.relRoll = 0),
              (this.dollyingStep = 0),
              (this.maxDistance = 1 / 0),
              (this.minDistance = -1 / 0),
              (this.zoom = 1),
              (this.rotateWorld = !1),
              (this.fov = 30),
              (this.near = 0.1),
              (this.far = 1e3),
              (this.aspect = 1),
              (this.projectionMatrix = J.create()),
              (this.projectionMatrixInverse = J.create()),
              (this.jitteredProjectionMatrix = void 0),
              (this.enableUpdate = !0),
              (this.type = R.EXPLORING),
              (this.trackingMode = O.DEFAULT),
              (this.projectionMode = L.PERSPECTIVE),
              (this.frustum = new tH()),
              (this.orthoMatrix = J.create());
          }
          return (
            (t.prototype.isOrtho = function () {
              return this.projectionMode === L.ORTHOGRAPHIC;
            }),
            (t.prototype.getProjectionMode = function () {
              return this.projectionMode;
            }),
            (t.prototype.getPerspective = function () {
              return this.jitteredProjectionMatrix || this.projectionMatrix;
            }),
            (t.prototype.getPerspectiveInverse = function () {
              return this.projectionMatrixInverse;
            }),
            (t.prototype.getFrustum = function () {
              return this.frustum;
            }),
            (t.prototype.getPosition = function () {
              return this.position;
            }),
            (t.prototype.getFocalPoint = function () {
              return this.focalPoint;
            }),
            (t.prototype.getDollyingStep = function () {
              return this.dollyingStep;
            }),
            (t.prototype.getNear = function () {
              return this.near;
            }),
            (t.prototype.getFar = function () {
              return this.far;
            }),
            (t.prototype.getZoom = function () {
              return this.zoom;
            }),
            (t.prototype.getOrthoMatrix = function () {
              return this.orthoMatrix;
            }),
            (t.prototype.getView = function () {
              return this.view;
            }),
            (t.prototype.setEnableUpdate = function (t) {
              this.enableUpdate = t;
            }),
            (t.prototype.setType = function (t, e) {
              return (
                (this.type = t),
                this.type === R.EXPLORING
                  ? this.setWorldRotation(!0)
                  : this.setWorldRotation(!1),
                this._getAngles(),
                this.type === R.TRACKING &&
                  void 0 !== e &&
                  this.setTrackingMode(e),
                this
              );
            }),
            (t.prototype.setProjectionMode = function (t) {
              return (this.projectionMode = t), this;
            }),
            (t.prototype.setTrackingMode = function (t) {
              if (this.type !== R.TRACKING)
                throw Error(
                  'Impossible to set a tracking mode if the camera is not of tracking type',
                );
              return (this.trackingMode = t), this;
            }),
            (t.prototype.setWorldRotation = function (t) {
              return (this.rotateWorld = t), this._getAngles(), this;
            }),
            (t.prototype.getViewTransform = function () {
              return J.invert(J.create(), this.matrix);
            }),
            (t.prototype.getWorldTransform = function () {
              return this.matrix;
            }),
            (t.prototype.jitterProjectionMatrix = function (t, e) {
              var n = J.fromTranslation(J.create(), [t, e, 0]);
              this.jitteredProjectionMatrix = J.multiply(
                J.create(),
                n,
                this.projectionMatrix,
              );
            }),
            (t.prototype.clearJitterProjectionMatrix = function () {
              this.jitteredProjectionMatrix = void 0;
            }),
            (t.prototype.setMatrix = function (t) {
              return (this.matrix = t), this._update(), this;
            }),
            (t.prototype.setProjectionMatrix = function (t) {
              this.projectionMatrix = t;
            }),
            (t.prototype.setFov = function (t) {
              return (
                this.setPerspective(this.near, this.far, t, this.aspect), this
              );
            }),
            (t.prototype.setAspect = function (t) {
              return (
                this.setPerspective(this.near, this.far, this.fov, t), this
              );
            }),
            (t.prototype.setNear = function (t) {
              return (
                this.projectionMode === L.PERSPECTIVE
                  ? this.setPerspective(t, this.far, this.fov, this.aspect)
                  : this.setOrthographic(
                      this.left,
                      this.rright,
                      this.top,
                      this.bottom,
                      t,
                      this.far,
                    ),
                this
              );
            }),
            (t.prototype.setFar = function (t) {
              return (
                this.projectionMode === L.PERSPECTIVE
                  ? this.setPerspective(this.near, t, this.fov, this.aspect)
                  : this.setOrthographic(
                      this.left,
                      this.rright,
                      this.top,
                      this.bottom,
                      this.near,
                      t,
                    ),
                this
              );
            }),
            (t.prototype.setViewOffset = function (t, e, n, r, i, o) {
              return (
                (this.aspect = t / e),
                void 0 === this.view &&
                  (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1,
                  }),
                (this.view.enabled = !0),
                (this.view.fullWidth = t),
                (this.view.fullHeight = e),
                (this.view.offsetX = n),
                (this.view.offsetY = r),
                (this.view.width = i),
                (this.view.height = o),
                this.projectionMode === L.PERSPECTIVE
                  ? this.setPerspective(
                      this.near,
                      this.far,
                      this.fov,
                      this.aspect,
                    )
                  : this.setOrthographic(
                      this.left,
                      this.rright,
                      this.top,
                      this.bottom,
                      this.near,
                      this.far,
                    ),
                this
              );
            }),
            (t.prototype.clearViewOffset = function () {
              return (
                void 0 !== this.view && (this.view.enabled = !1),
                this.projectionMode === L.PERSPECTIVE
                  ? this.setPerspective(
                      this.near,
                      this.far,
                      this.fov,
                      this.aspect,
                    )
                  : this.setOrthographic(
                      this.left,
                      this.rright,
                      this.top,
                      this.bottom,
                      this.near,
                      this.far,
                    ),
                this
              );
            }),
            (t.prototype.setZoom = function (t) {
              return (
                (this.zoom = t),
                this.projectionMode === L.ORTHOGRAPHIC
                  ? this.setOrthographic(
                      this.left,
                      this.rright,
                      this.top,
                      this.bottom,
                      this.near,
                      this.far,
                    )
                  : this.projectionMode === L.PERSPECTIVE &&
                    this.setPerspective(
                      this.near,
                      this.far,
                      this.fov,
                      this.aspect,
                    ),
                this
              );
            }),
            (t.prototype.setZoomByViewportPoint = function (t, e) {
              var n = this.canvas.viewport2Canvas({ x: e[0], y: e[1] }),
                r = n.x,
                i = n.y,
                o = this.roll;
              this.rotate(0, 0, -o),
                this.setPosition(r, i),
                this.setFocalPoint(r, i),
                this.setZoom(t),
                this.rotate(0, 0, o);
              var a = this.canvas.viewport2Canvas({ x: e[0], y: e[1] }),
                s = a.x,
                l = a.y,
                u = K.al(s - r, l - i, 0),
                c = K.AK(u, this.right) / K.kE(this.right),
                h = K.AK(u, this.up) / K.kE(this.up),
                p = (0, H.__read)(this.getPosition(), 2),
                d = p[0],
                f = p[1],
                v = (0, H.__read)(this.getFocalPoint(), 2),
                y = v[0],
                g = v[1];
              return (
                this.setPosition(d - c, f - h),
                this.setFocalPoint(y - c, g - h),
                this
              );
            }),
            (t.prototype.setPerspective = function (t, e, n, r) {
              (this.projectionMode = L.PERSPECTIVE),
                (this.fov = n),
                (this.near = t),
                (this.far = e),
                (this.aspect = r);
              var i,
                o,
                a,
                s,
                l,
                u,
                c,
                h,
                p,
                d = (this.near * Math.tan(tD(0.5 * this.fov))) / this.zoom,
                f = 2 * d,
                v = this.aspect * f,
                y = -0.5 * v;
              if (
                null === (p = this.view) || void 0 === p ? void 0 : p.enabled
              ) {
                var g = this.view.fullWidth,
                  m = this.view.fullHeight;
                (y += (this.view.offsetX * v) / g),
                  (d -= (this.view.offsetY * f) / m),
                  (v *= this.view.width / g),
                  (f *= this.view.height / m);
              }
              return (
                (i = this.projectionMatrix),
                (o = y),
                (a = y + v),
                (s = d - f),
                (l = d),
                (u = this.far),
                this.clipSpaceNearZ === _.ZERO
                  ? ((c = -u / (u - t)), (h = (-u * t) / (u - t)))
                  : ((c = -(u + t) / (u - t)), (h = (-2 * u * t) / (u - t))),
                (i[0] = (2 * t) / (a - o)),
                (i[1] = 0),
                (i[2] = 0),
                (i[3] = 0),
                (i[4] = 0),
                (i[5] = (2 * t) / (s - l)),
                (i[6] = 0),
                (i[7] = 0),
                (i[8] = (a + o) / (a - o)),
                (i[9] = (s + l) / (s - l)),
                (i[10] = c),
                (i[11] = -1),
                (i[12] = 0),
                (i[13] = 0),
                (i[14] = h),
                (i[15] = 0),
                J.invert(this.projectionMatrixInverse, this.projectionMatrix),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.setOrthographic = function (t, e, n, r, i, o) {
              (this.projectionMode = L.ORTHOGRAPHIC),
                (this.rright = e),
                (this.left = t),
                (this.top = n),
                (this.bottom = r),
                (this.near = i),
                (this.far = o);
              var a,
                s = (this.rright - this.left) / (2 * this.zoom),
                l = (this.top - this.bottom) / (2 * this.zoom),
                u = (this.rright + this.left) / 2,
                c = (this.top + this.bottom) / 2,
                h = u - s,
                p = u + s,
                d = c + l,
                f = c - l;
              if (
                null === (a = this.view) || void 0 === a ? void 0 : a.enabled
              ) {
                var v =
                    (this.rright - this.left) / this.view.fullWidth / this.zoom,
                  y =
                    (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                (h += v * this.view.offsetX),
                  (p = h + v * this.view.width),
                  (d -= y * this.view.offsetY),
                  (f = d - y * this.view.height);
              }
              return (
                this.clipSpaceNearZ === _.NEGATIVE_ONE
                  ? J.ortho(this.projectionMatrix, h, p, d, f, i, o)
                  : J.orthoZO(this.projectionMatrix, h, p, d, f, i, o),
                J.invert(this.projectionMatrixInverse, this.projectionMatrix),
                this._getOrthoMatrix(),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.setPosition = function (t, e, n) {
              void 0 === e && (e = this.position[1]),
                void 0 === n && (n = this.position[2]);
              var r = tI(t, e, n);
              return (
                this._setPosition(r),
                this.setFocalPoint(this.focalPoint),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.setFocalPoint = function (t, e, n) {
              void 0 === e && (e = this.focalPoint[1]),
                void 0 === n && (n = this.focalPoint[2]);
              var r = K.al(0, 1, 0);
              if (
                ((this.focalPoint = tI(t, e, n)),
                this.trackingMode === O.CINEMATIC)
              ) {
                var i = K.$X(K.Ue(), this.focalPoint, this.position);
                (t = i[0]), (e = i[1]), (n = i[2]);
                var o = tG(Math.asin(e / K.kE(i))),
                  a = 90 + tG(Math.atan2(n, t)),
                  s = J.create();
                J.rotateY(s, s, tD(a)),
                  J.rotateX(s, s, tD(o)),
                  (r = K.fF(K.Ue(), [0, 1, 0], s));
              }
              return (
                J.invert(
                  this.matrix,
                  J.lookAt(J.create(), this.position, this.focalPoint, r),
                ),
                this._getAxes(),
                this._getDistance(),
                this._getAngles(),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.getDistance = function () {
              return this.distance;
            }),
            (t.prototype.getDistanceVector = function () {
              return this.distanceVector;
            }),
            (t.prototype.setDistance = function (t) {
              if (this.distance === t || t < 0) return this;
              (this.distance = t),
                this.distance < 2e-4 && (this.distance = 2e-4),
                (this.dollyingStep = this.distance / 100);
              var e = K.Ue();
              t = this.distance;
              var n = this.forward,
                r = this.focalPoint;
              return (
                (e[0] = t * n[0] + r[0]),
                (e[1] = t * n[1] + r[1]),
                (e[2] = t * n[2] + r[2]),
                this._setPosition(e),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.setMaxDistance = function (t) {
              return (this.maxDistance = t), this;
            }),
            (t.prototype.setMinDistance = function (t) {
              return (this.minDistance = t), this;
            }),
            (t.prototype.setAzimuth = function (t) {
              return (
                (this.azimuth = tL(t)),
                this.computeMatrix(),
                this._getAxes(),
                this.type === R.ORBITING || this.type === R.EXPLORING
                  ? this._getPosition()
                  : this.type === R.TRACKING && this._getFocalPoint(),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.getAzimuth = function () {
              return this.azimuth;
            }),
            (t.prototype.setElevation = function (t) {
              return (
                (this.elevation = tL(t)),
                this.computeMatrix(),
                this._getAxes(),
                this.type === R.ORBITING || this.type === R.EXPLORING
                  ? this._getPosition()
                  : this.type === R.TRACKING && this._getFocalPoint(),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.getElevation = function () {
              return this.elevation;
            }),
            (t.prototype.setRoll = function (t) {
              return (
                (this.roll = tL(t)),
                this.computeMatrix(),
                this._getAxes(),
                this.type === R.ORBITING || this.type === R.EXPLORING
                  ? this._getPosition()
                  : this.type === R.TRACKING && this._getFocalPoint(),
                this.triggerUpdate(),
                this
              );
            }),
            (t.prototype.getRoll = function () {
              return this.roll;
            }),
            (t.prototype._update = function () {
              this._getAxes(),
                this._getPosition(),
                this._getDistance(),
                this._getAngles(),
                this._getOrthoMatrix(),
                this.triggerUpdate();
            }),
            (t.prototype.computeMatrix = function () {
              var t = tt.yY(tt.Ue(), [0, 0, 1], tD(this.roll));
              J.identity(this.matrix);
              var e = tt.yY(
                  tt.Ue(),
                  [1, 0, 0],
                  tD(
                    ((this.rotateWorld && this.type !== R.TRACKING) ||
                    this.type === R.TRACKING
                      ? 1
                      : -1) * this.elevation,
                  ),
                ),
                n = tt.yY(
                  tt.Ue(),
                  [0, 1, 0],
                  tD(
                    ((this.rotateWorld && this.type !== R.TRACKING) ||
                    this.type === R.TRACKING
                      ? 1
                      : -1) * this.azimuth,
                  ),
                ),
                r = tt.Jp(tt.Ue(), n, e);
              r = tt.Jp(tt.Ue(), r, t);
              var i = J.fromQuat(J.create(), r);
              this.type === R.ORBITING || this.type === R.EXPLORING
                ? (J.translate(this.matrix, this.matrix, this.focalPoint),
                  J.multiply(this.matrix, this.matrix, i),
                  J.translate(this.matrix, this.matrix, [0, 0, this.distance]))
                : this.type === R.TRACKING &&
                  (J.translate(this.matrix, this.matrix, this.position),
                  J.multiply(this.matrix, this.matrix, i));
            }),
            (t.prototype._setPosition = function (t, e, n) {
              this.position = tI(t, e, n);
              var r = this.matrix;
              (r[12] = this.position[0]),
                (r[13] = this.position[1]),
                (r[14] = this.position[2]),
                (r[15] = 1),
                this._getOrthoMatrix();
            }),
            (t.prototype._getAxes = function () {
              K.JG(this.right, tI(Q.fF(Q.Ue(), [1, 0, 0, 0], this.matrix))),
                K.JG(this.up, tI(Q.fF(Q.Ue(), [0, 1, 0, 0], this.matrix))),
                K.JG(this.forward, tI(Q.fF(Q.Ue(), [0, 0, 1, 0], this.matrix))),
                K.Fv(this.right, this.right),
                K.Fv(this.up, this.up),
                K.Fv(this.forward, this.forward);
            }),
            (t.prototype._getAngles = function () {
              var t = this.distanceVector[0],
                e = this.distanceVector[1],
                n = this.distanceVector[2],
                r = K.kE(this.distanceVector);
              if (0 === r) {
                (this.elevation = 0), (this.azimuth = 0);
                return;
              }
              this.type === R.TRACKING
                ? ((this.elevation = tG(Math.asin(e / r))),
                  (this.azimuth = tG(Math.atan2(-t, -n))))
                : this.rotateWorld
                  ? ((this.elevation = tG(Math.asin(e / r))),
                    (this.azimuth = tG(Math.atan2(-t, -n))))
                  : ((this.elevation = -tG(Math.asin(e / r))),
                    (this.azimuth = -tG(Math.atan2(-t, -n))));
            }),
            (t.prototype._getPosition = function () {
              K.JG(this.position, tI(Q.fF(Q.Ue(), [0, 0, 0, 1], this.matrix))),
                this._getDistance();
            }),
            (t.prototype._getFocalPoint = function () {
              K.kK(
                this.distanceVector,
                [0, 0, -this.distance],
                $.xO($.Ue(), this.matrix),
              ),
                K.IH(this.focalPoint, this.position, this.distanceVector),
                this._getDistance();
            }),
            (t.prototype._getDistance = function () {
              (this.distanceVector = K.$X(
                K.Ue(),
                this.focalPoint,
                this.position,
              )),
                (this.distance = K.kE(this.distanceVector)),
                (this.dollyingStep = this.distance / 100);
            }),
            (t.prototype._getOrthoMatrix = function () {
              if (this.projectionMode === L.ORTHOGRAPHIC) {
                var t = this.position,
                  e = tt.yY(tt.Ue(), [0, 0, 1], (-this.roll * Math.PI) / 180);
                J.fromRotationTranslationScaleOrigin(
                  this.orthoMatrix,
                  e,
                  K.al(
                    (this.rright - this.left) / 2 - t[0],
                    (this.top - this.bottom) / 2 - t[1],
                    0,
                  ),
                  K.al(this.zoom, this.zoom, 1),
                  t,
                );
              }
            }),
            (t.prototype.triggerUpdate = function () {
              if (this.enableUpdate) {
                var t = this.getViewTransform(),
                  e = J.multiply(J.create(), this.getPerspective(), t);
                this.getFrustum().extractFromVPMatrix(e),
                  this.eventEmitter.emit(tQ.UPDATED);
              }
            }),
            (t.prototype.rotate = function (t, e, n) {
              throw Error(tJ);
            }),
            (t.prototype.pan = function (t, e) {
              throw Error(tJ);
            }),
            (t.prototype.dolly = function (t) {
              throw Error(tJ);
            }),
            (t.prototype.createLandmark = function (t, e) {
              throw Error(tJ);
            }),
            (t.prototype.gotoLandmark = function (t, e) {
              throw Error(tJ);
            }),
            (t.prototype.cancelLandmarkAnimation = function () {
              throw Error(tJ);
            }),
            t
          );
        })();
      function t1(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw TypeError('Expected a function');
        var n = function () {
          for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
          var o = e ? e.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(o)) return a.get(o);
          var s = t.apply(this, r);
          return (n.cache = a.set(o, s) || a), s;
        };
        return (n.cache = new (t1.Cache || Map)()), n;
      }
      (t1.Cache = Map),
        ((c = I || (I = {}))[(c.kUnknown = 0)] = 'kUnknown'),
        (c[(c.kNumber = 1)] = 'kNumber'),
        (c[(c.kPercentage = 2)] = 'kPercentage'),
        (c[(c.kEms = 3)] = 'kEms'),
        (c[(c.kPixels = 4)] = 'kPixels'),
        (c[(c.kRems = 5)] = 'kRems'),
        (c[(c.kDegrees = 6)] = 'kDegrees'),
        (c[(c.kRadians = 7)] = 'kRadians'),
        (c[(c.kGradians = 8)] = 'kGradians'),
        (c[(c.kTurns = 9)] = 'kTurns'),
        (c[(c.kMilliseconds = 10)] = 'kMilliseconds'),
        (c[(c.kSeconds = 11)] = 'kSeconds'),
        (c[(c.kInteger = 12)] = 'kInteger'),
        ((h = D || (D = {}))[(h.kUNumber = 0)] = 'kUNumber'),
        (h[(h.kUPercent = 1)] = 'kUPercent'),
        (h[(h.kULength = 2)] = 'kULength'),
        (h[(h.kUAngle = 3)] = 'kUAngle'),
        (h[(h.kUTime = 4)] = 'kUTime'),
        (h[(h.kUOther = 5)] = 'kUOther'),
        ((p = G || (G = {}))[(p.kAll = 0)] = 'kAll'),
        (p[(p.kNonNegative = 1)] = 'kNonNegative'),
        (p[(p.kInteger = 2)] = 'kInteger'),
        (p[(p.kNonNegativeInteger = 3)] = 'kNonNegativeInteger'),
        (p[(p.kPositiveInteger = 4)] = 'kPositiveInteger'),
        ((d = F || (F = {}))[(d.kYes = 0)] = 'kYes'),
        (d[(d.kNo = 1)] = 'kNo'),
        ((f = B || (B = {}))[(f.kYes = 0)] = 'kYes'),
        (f[(f.kNo = 1)] = 'kNo');
      var t2 = [
        { name: 'em', unit_type: I.kEms },
        { name: 'px', unit_type: I.kPixels },
        { name: 'deg', unit_type: I.kDegrees },
        { name: 'rad', unit_type: I.kRadians },
        { name: 'grad', unit_type: I.kGradians },
        { name: 'ms', unit_type: I.kMilliseconds },
        { name: 's', unit_type: I.kSeconds },
        { name: 'rem', unit_type: I.kRems },
        { name: 'turn', unit_type: I.kTurns },
      ];
      ((v = U || (U = {}))[(v.kUnknownType = 0)] = 'kUnknownType'),
        (v[(v.kUnparsedType = 1)] = 'kUnparsedType'),
        (v[(v.kKeywordType = 2)] = 'kKeywordType'),
        (v[(v.kUnitType = 3)] = 'kUnitType'),
        (v[(v.kSumType = 4)] = 'kSumType'),
        (v[(v.kProductType = 5)] = 'kProductType'),
        (v[(v.kNegateType = 6)] = 'kNegateType'),
        (v[(v.kInvertType = 7)] = 'kInvertType'),
        (v[(v.kMinType = 8)] = 'kMinType'),
        (v[(v.kMaxType = 9)] = 'kMaxType'),
        (v[(v.kClampType = 10)] = 'kClampType'),
        (v[(v.kTransformType = 11)] = 'kTransformType'),
        (v[(v.kPositionType = 12)] = 'kPositionType'),
        (v[(v.kURLImageType = 13)] = 'kURLImageType'),
        (v[(v.kColorType = 14)] = 'kColorType'),
        (v[(v.kUnsupportedColorType = 15)] = 'kUnsupportedColorType');
      var t3 = function (t) {
          switch (t) {
            case I.kNumber:
            case I.kInteger:
              return D.kUNumber;
            case I.kPercentage:
              return D.kUPercent;
            case I.kPixels:
              return D.kULength;
            case I.kMilliseconds:
            case I.kSeconds:
              return D.kUTime;
            case I.kDegrees:
            case I.kRadians:
            case I.kGradians:
            case I.kTurns:
              return D.kUAngle;
            default:
              return D.kUOther;
          }
        },
        t5 = function (t) {
          switch (t) {
            case D.kUNumber:
              return I.kNumber;
            case D.kULength:
              return I.kPixels;
            case D.kUPercent:
              return I.kPercentage;
            case D.kUTime:
              return I.kSeconds;
            case D.kUAngle:
              return I.kDegrees;
            default:
              return I.kUnknown;
          }
        },
        t4 = function (t) {
          var e = 1;
          switch (t) {
            case I.kPixels:
            case I.kDegrees:
            case I.kSeconds:
              break;
            case I.kMilliseconds:
              e = 0.001;
              break;
            case I.kRadians:
              e = 180 / Math.PI;
              break;
            case I.kGradians:
              e = 0.9;
              break;
            case I.kTurns:
              e = 360;
          }
          return e;
        },
        t9 = function (t) {
          switch (t) {
            case I.kNumber:
            case I.kInteger:
              break;
            case I.kPercentage:
              return '%';
            case I.kEms:
              return 'em';
            case I.kRems:
              return 'rem';
            case I.kPixels:
              return 'px';
            case I.kDegrees:
              return 'deg';
            case I.kRadians:
              return 'rad';
            case I.kGradians:
              return 'grad';
            case I.kMilliseconds:
              return 'ms';
            case I.kSeconds:
              return 's';
            case I.kTurns:
              return 'turn';
          }
          return '';
        },
        t6 = (function () {
          function t() {}
          return (
            (t.isAngle = function (t) {
              return (
                t === I.kDegrees ||
                t === I.kRadians ||
                t === I.kGradians ||
                t === I.kTurns
              );
            }),
            (t.isLength = function (t) {
              return t >= I.kEms && t < I.kDegrees;
            }),
            (t.isRelativeUnit = function (t) {
              return t === I.kPercentage || t === I.kEms || t === I.kRems;
            }),
            (t.isTime = function (t) {
              return t === I.kSeconds || t === I.kMilliseconds;
            }),
            (t.prototype.toString = function () {
              return this.buildCSSText(F.kNo, B.kNo, '');
            }),
            (t.prototype.isNumericValue = function () {
              return (
                this.getType() >= U.kUnitType && this.getType() <= U.kClampType
              );
            }),
            t
          );
        })(),
        t8 = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.colorSpace = e), n;
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.getType = function () {
              return U.kColorType;
            }),
            (e.prototype.to = function (t) {
              return this;
            }),
            e
          );
        })(t6);
      ((y = V || (V = {}))[(y.Constant = 0)] = 'Constant'),
        (y[(y.LinearGradient = 1)] = 'LinearGradient'),
        (y[(y.RadialGradient = 2)] = 'RadialGradient');
      var t7 = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.type = e), (r.value = n), r;
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.clone = function () {
              return new e(this.type, this.value);
            }),
            (e.prototype.buildCSSText = function (t, e, n) {
              return n;
            }),
            (e.prototype.getType = function () {
              return U.kColorType;
            }),
            e
          );
        })(t6),
        et = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.value = e), n;
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.clone = function () {
              return new e(this.value);
            }),
            (e.prototype.getType = function () {
              return U.kKeywordType;
            }),
            (e.prototype.buildCSSText = function (t, e, n) {
              return n + this.value;
            }),
            e
          );
        })(t6),
        ee = t1(function (t) {
          return (
            void 0 === t && (t = ''),
            t.replace(/-([a-z])/g, function (t) {
              return t[1].toUpperCase();
            })
          );
        }),
        en = function (t) {
          return t
            .split('')
            .map(function (t, e) {
              return t.toUpperCase() === t
                ? ''.concat(0 !== e ? '-' : '').concat(t.toLowerCase())
                : t;
            })
            .join('');
        };
      function er(t) {
        return 'function' == typeof t;
      }
      var ei = {
          d: { alias: 'path' },
          strokeDasharray: { alias: 'lineDash' },
          strokeWidth: { alias: 'lineWidth' },
          textAnchor: { alias: 'textAlign' },
          src: { alias: 'img' },
        },
        eo = t1(function (t) {
          var e = ee(t),
            n = ei[e];
          return (null == n ? void 0 : n.alias) || e;
        }),
        ea = function (t, e) {
          void 0 === e && (e = '');
          var n = '';
          return (
            Number.isFinite(t)
              ? ((function (t) {
                  if (!t) throw Error();
                })(Number.isNaN(t)),
                (n = 'NaN'))
              : (n = t > 0 ? 'infinity' : '-infinity'),
            n + e
          );
        },
        es = function (t) {
          return t5(t3(t));
        },
        el = (function (t) {
          function e(e, n) {
            void 0 === n && (n = I.kNumber);
            var r,
              i,
              o = t.call(this) || this;
            return (
              (i =
                'string' == typeof n
                  ? (r = n)
                    ? 'number' === r
                      ? I.kNumber
                      : 'percent' === r || '%' === r
                        ? I.kPercentage
                        : t2.find(function (t) {
                            return t.name === r;
                          }).unit_type
                    : I.kUnknown
                  : n),
              (o.unit = i),
              (o.value = e),
              o
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.clone = function () {
              return new e(this.value, this.unit);
            }),
            (e.prototype.equals = function (t) {
              return this.value === t.value && this.unit === t.unit;
            }),
            (e.prototype.getType = function () {
              return U.kUnitType;
            }),
            (e.prototype.convertTo = function (t) {
              if (this.unit === t) return new e(this.value, this.unit);
              var n = es(this.unit);
              if (n !== es(t) || n === I.kUnknown) return null;
              var r = t4(this.unit) / t4(t);
              return new e(this.value * r, t);
            }),
            (e.prototype.buildCSSText = function (t, e, n) {
              var r;
              switch (this.unit) {
                case I.kUnknown:
                  break;
                case I.kInteger:
                  r = Number(this.value).toFixed(0);
                  break;
                case I.kNumber:
                case I.kPercentage:
                case I.kEms:
                case I.kRems:
                case I.kPixels:
                case I.kDegrees:
                case I.kRadians:
                case I.kGradians:
                case I.kMilliseconds:
                case I.kSeconds:
                case I.kTurns:
                  var i = this.value,
                    o = t9(this.unit);
                  if (i < -999999 || i > 999999) {
                    var a = t9(this.unit);
                    r =
                      !Number.isFinite(i) || Number.isNaN(i)
                        ? ea(i, a)
                        : i + (a || '');
                  } else r = ''.concat(i).concat(o);
              }
              return n + r;
            }),
            e
          );
        })(t6),
        eu = new el(0, 'px');
      new el(1, 'px');
      var ec = new el(0, 'deg'),
        eh = (function (t) {
          function e(e, n, r, i, o) {
            void 0 === i && (i = 1), void 0 === o && (o = !1);
            var a = t.call(this, 'rgb') || this;
            return (
              (a.r = e), (a.g = n), (a.b = r), (a.alpha = i), (a.isNone = o), a
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.clone = function () {
              return new e(this.r, this.g, this.b, this.alpha);
            }),
            (e.prototype.buildCSSText = function (t, e, n) {
              return (
                n +
                'rgba('
                  .concat(this.r, ',')
                  .concat(this.g, ',')
                  .concat(this.b, ',')
                  .concat(this.alpha, ')')
              );
            }),
            e
          );
        })(t8),
        ep = new et('unset'),
        ed = {
          '': ep,
          unset: ep,
          initial: new et('initial'),
          inherit: new et('inherit'),
        },
        ef = function (t) {
          return ed[t] || (ed[t] = new et(t)), ed[t];
        },
        ev = new eh(0, 0, 0, 0, !0),
        ey = new eh(0, 0, 0, 0),
        eg = t1(
          function (t, e, n, r) {
            return new eh(t, e, n, r);
          },
          function (t, e, n, r) {
            return 'rgba('
              .concat(t, ',')
              .concat(e, ',')
              .concat(n, ',')
              .concat(r, ')');
          },
        ),
        em = function (t, e) {
          return void 0 === e && (e = I.kNumber), new el(t, e);
        };
      new el(50, '%'),
        ((g = Y || (Y = {}))[(g.Standard = 0)] = 'Standard'),
        ((m = z || (z = {}))[(m.ADDED = 0)] = 'ADDED'),
        (m[(m.REMOVED = 1)] = 'REMOVED'),
        (m[(m.Z_INDEX_CHANGED = 2)] = 'Z_INDEX_CHANGED');
      var eE = {
        absolutePath: [],
        hasArc: !1,
        segments: [],
        polygons: [],
        polylines: [],
        curve: null,
        totalLength: 0,
        rect: new tK(0, 0, 0, 0),
      };
      ((E = j || (j = {})).COORDINATE = '<coordinate>'),
        (E.COLOR = '<color>'),
        (E.PAINT = '<paint>'),
        (E.NUMBER = '<number>'),
        (E.ANGLE = '<angle>'),
        (E.OPACITY_VALUE = '<opacity-value>'),
        (E.SHADOW_BLUR = '<shadow-blur>'),
        (E.LENGTH = '<length>'),
        (E.PERCENTAGE = '<percentage>'),
        (E.LENGTH_PERCENTAGE = '<length> | <percentage>'),
        (E.LENGTH_PERCENTAGE_12 = '[<length> | <percentage>]{1,2}'),
        (E.LENGTH_PERCENTAGE_14 = '[<length> | <percentage>]{1,4}'),
        (E.LIST_OF_POINTS = '<list-of-points>'),
        (E.PATH = '<path>'),
        (E.FILTER = '<filter>'),
        (E.Z_INDEX = '<z-index>'),
        (E.OFFSET_DISTANCE = '<offset-distance>'),
        (E.DEFINED_PATH = '<defined-path>'),
        (E.MARKER = '<marker>'),
        (E.TRANSFORM = '<transform>'),
        (E.TRANSFORM_ORIGIN = '<transform-origin>'),
        (E.TEXT = '<text>'),
        (E.TEXT_TRANSFORM = '<text-transform>');
      var ex = (function () {
        var t = {
            linearGradient: /^(linear\-gradient)/i,
            repeatingLinearGradient: /^(repeating\-linear\-gradient)/i,
            radialGradient: /^(radial\-gradient)/i,
            repeatingRadialGradient: /^(repeating\-radial\-gradient)/i,
            conicGradient: /^(conic\-gradient)/i,
            sideOrCorner:
              /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
            extentKeywords:
              /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
            positionKeywords: /^(left|center|right|top|bottom)/i,
            pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
            percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
            emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
            angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
            startCall: /^\(/,
            endCall: /^\)/,
            comma: /^,/,
            hexColor: /^\#([0-9a-fA-F]+)/,
            literalColor: /^([a-zA-Z]+)/,
            rgbColor: /^rgb/i,
            rgbaColor: /^rgba/i,
            number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
          },
          e = '';
        function n(t) {
          throw Error(e + ': ' + t);
        }
        function r() {
          return (
            i('linear-gradient', t.linearGradient, a) ||
            i('repeating-linear-gradient', t.repeatingLinearGradient, a) ||
            i('radial-gradient', t.radialGradient, s) ||
            i('repeating-radial-gradient', t.repeatingRadialGradient, s) ||
            i('conic-gradient', t.conicGradient, s)
          );
        }
        function i(e, r, i) {
          return o(r, function (r) {
            var o = i();
            return (
              o && !m(t.comma) && n('Missing comma before color stops'),
              { type: e, orientation: o, colorStops: p(d) }
            );
          });
        }
        function o(e, r) {
          var i = m(e);
          if (i) {
            m(t.startCall) || n('Missing (');
            var o = r(i);
            return m(t.endCall) || n('Missing )'), o;
          }
        }
        function a() {
          return (
            g('directional', t.sideOrCorner, 1) || g('angular', t.angleValue, 1)
          );
        }
        function s() {
          var n,
            r,
            i = l();
          return (
            i &&
              ((n = []).push(i),
              (r = e),
              m(t.comma) && ((i = l()) ? n.push(i) : (e = r))),
            n
          );
        }
        function l() {
          var t,
            e,
            n =
              ((t = g('shape', /^(circle)/i, 0)) && (t.style = y() || u()),
              t ||
                ((e = g('shape', /^(ellipse)/i, 0)) && (e.style = v() || u()),
                e));
          if (n) n.at = c();
          else {
            var r = u();
            if (r) {
              n = r;
              var i = c();
              i && (n.at = i);
            } else {
              var o = h();
              o && (n = { type: 'default-radial', at: o });
            }
          }
          return n;
        }
        function u() {
          return g('extent-keyword', t.extentKeywords, 1);
        }
        function c() {
          if (g('position', /^at/, 0)) {
            var t = h();
            return t || n('Missing positioning value'), t;
          }
        }
        function h() {
          var t = { x: v(), y: v() };
          if (t.x || t.y) return { type: 'position', value: t };
        }
        function p(e) {
          var r = e(),
            i = [];
          if (r)
            for (i.push(r); m(t.comma); )
              (r = e()) ? i.push(r) : n('One extra comma');
          return i;
        }
        function d() {
          var e =
            g('hex', t.hexColor, 1) ||
            o(t.rgbaColor, function () {
              return { type: 'rgba', value: p(f) };
            }) ||
            o(t.rgbColor, function () {
              return { type: 'rgb', value: p(f) };
            }) ||
            g('literal', t.literalColor, 0);
          return e || n('Expected color definition'), (e.length = v()), e;
        }
        function f() {
          return m(t.number)[1];
        }
        function v() {
          return (
            g('%', t.percentageValue, 1) ||
            g('position-keyword', t.positionKeywords, 1) ||
            y()
          );
        }
        function y() {
          return g('px', t.pixelValue, 1) || g('em', t.emValue, 1);
        }
        function g(t, e, n) {
          var r = m(e);
          if (r) return { type: t, value: r[n] };
        }
        function m(t) {
          var n = /^[\n\r\t\s]+/.exec(e);
          n && E(n[0].length);
          var r = t.exec(e);
          return r && E(r[0].length), r;
        }
        function E(t) {
          e = e.substring(t);
        }
        return function (t) {
          var i;
          return (
            (e = t), (i = p(r)), e.length > 0 && n('Invalid input not EOF'), i
          );
        };
      })();
      function eb(t, e, n, r) {
        var i = tD(r.value),
          o = 0 + e / 2,
          a = 0 + n / 2,
          s = Math.abs(e * Math.cos(i)) + Math.abs(n * Math.sin(i));
        return {
          x1: t[0] + o - (Math.cos(i) * s) / 2,
          y1: t[1] + a - (Math.sin(i) * s) / 2,
          x2: t[0] + o + (Math.cos(i) * s) / 2,
          y2: t[1] + a + (Math.sin(i) * s) / 2,
        };
      }
      function eT(t, e, n, r, i, o) {
        var a = r.value,
          s = i.value;
        r.unit === I.kPercentage && (a = (r.value / 100) * e),
          i.unit === I.kPercentage && (s = (i.value / 100) * n);
        var l = Math.max(
          (0, tr.y)([0, 0], [a, s]),
          (0, tr.y)([0, n], [a, s]),
          (0, tr.y)([e, n], [a, s]),
          (0, tr.y)([e, 0], [a, s]),
        );
        return (
          o &&
            (o instanceof el
              ? (l = o.value)
              : o instanceof et &&
                ('closest-side' === o.value
                  ? (l = Math.min(a, e - a, s, n - s))
                  : 'farthest-side' === o.value
                    ? (l = Math.max(a, e - a, s, n - s))
                    : 'closest-corner' === o.value &&
                      (l = Math.min(
                        (0, tr.y)([0, 0], [a, s]),
                        (0, tr.y)([0, n], [a, s]),
                        (0, tr.y)([e, n], [a, s]),
                        (0, tr.y)([e, 0], [a, s]),
                      )))),
          { x: a + t[0], y: s + t[1], r: l }
        );
      }
      var eP = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
        eS = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
        eN = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
        ew = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
        ek = {
          left: 180,
          top: -90,
          bottom: 90,
          right: 0,
          'left top': 225,
          'top left': 225,
          'left bottom': 135,
          'bottom left': 135,
          'right top': -45,
          'top right': -45,
          'right bottom': 45,
          'bottom right': 45,
        },
        eM = t1(function (t) {
          return em(
            'angular' === t.type ? Number(t.value) : ek[t.value] || 0,
            'deg',
          );
        }),
        eC = t1(function (t) {
          var e = 50,
            n = 50,
            r = '%',
            i = '%';
          if ((null == t ? void 0 : t.type) === 'position') {
            var o = t.value,
              a = o.x,
              s = o.y;
            (null == a ? void 0 : a.type) === 'position-keyword' &&
              ('left' === a.value
                ? (e = 0)
                : 'center' === a.value
                  ? (e = 50)
                  : 'right' === a.value
                    ? (e = 100)
                    : 'top' === a.value
                      ? (n = 0)
                      : 'bottom' === a.value && (n = 100)),
              (null == s ? void 0 : s.type) === 'position-keyword' &&
                ('left' === s.value
                  ? (e = 0)
                  : 'center' === s.value
                    ? (n = 50)
                    : 'right' === s.value
                      ? (e = 100)
                      : 'top' === s.value
                        ? (n = 0)
                        : 'bottom' === s.value && (n = 100)),
              ((null == a ? void 0 : a.type) === 'px' ||
                (null == a ? void 0 : a.type) === '%' ||
                (null == a ? void 0 : a.type) === 'em') &&
                ((r = null == a ? void 0 : a.type), (e = Number(a.value))),
              ((null == s ? void 0 : s.type) === 'px' ||
                (null == s ? void 0 : s.type) === '%' ||
                (null == s ? void 0 : s.type) === 'em') &&
                ((i = null == s ? void 0 : s.type), (n = Number(s.value)));
          }
          return { cx: em(e, r), cy: em(n, i) };
        }),
        e_ = t1(function (t) {
          if (t.indexOf('linear') > -1 || t.indexOf('radial') > -1) {
            var e;
            return ex(t).map(function (t) {
              var e = t.type,
                n = t.orientation,
                r = t.colorStops;
              !(function (t) {
                var e,
                  n,
                  r,
                  i = t.length;
                (t[i - 1].length =
                  null !== (e = t[i - 1].length) && void 0 !== e
                    ? e
                    : { type: '%', value: '100' }),
                  i > 1 &&
                    (t[0].length =
                      null !== (n = t[0].length) && void 0 !== n
                        ? n
                        : { type: '%', value: '0' });
                for (
                  var o = 0, a = Number(t[0].length.value), s = 1;
                  s < i;
                  s++
                ) {
                  var l =
                    null === (r = t[s].length) || void 0 === r
                      ? void 0
                      : r.value;
                  if (!(0, ti.Z)(l) && !(0, ti.Z)(a)) {
                    for (var u = 1; u < s - o; u++)
                      t[o + u].length = {
                        type: '%',
                        value: ''.concat(a + ((Number(l) - a) * u) / (s - o)),
                      };
                    (o = s), (a = Number(l));
                  }
                }
              })(r);
              var i = r.map(function (t) {
                var e, n;
                return {
                  offset: em(Number(t.length.value), '%'),
                  color:
                    ((e = t.type),
                    (n = t.value),
                    'hex' === e
                      ? '#'.concat(n)
                      : 'literal' === e
                        ? n
                        : 'rgb' === e
                          ? 'rgb('.concat(n.join(','), ')')
                          : 'rgba('.concat(n.join(','), ')')),
                };
              });
              if ('linear-gradient' === e)
                return new t7(V.LinearGradient, {
                  angle: n ? eM(n) : ec,
                  steps: i,
                });
              if (
                'radial-gradient' === e &&
                (n || (n = [{ type: 'shape', value: 'circle' }]),
                'shape' === n[0].type && 'circle' === n[0].value)
              ) {
                var o = eC(n[0].at),
                  a = o.cx,
                  s = o.cy,
                  l = void 0;
                if (n[0].style) {
                  var u = n[0].style,
                    c = u.type,
                    h = u.value;
                  l = 'extent-keyword' === c ? ef(h) : em(h, c);
                }
                return new t7(V.RadialGradient, {
                  cx: a,
                  cy: s,
                  size: l,
                  steps: i,
                });
              }
            });
          }
          var n = t[0];
          if ('(' === t[1] || '(' === t[2]) {
            if ('l' === n) {
              var r = eP.exec(t);
              if (r) {
                var i =
                  (null === (e = r[2].match(ew)) || void 0 === e
                    ? void 0
                    : e.map(function (t) {
                        return t.split(':');
                      })) || [];
                return [
                  new t7(V.LinearGradient, {
                    angle: em(parseFloat(r[1]), 'deg'),
                    steps: i.map(function (t) {
                      var e = (0, H.__read)(t, 2),
                        n = e[0],
                        r = e[1];
                      return { offset: em(100 * Number(n), '%'), color: r };
                    }),
                  }),
                ];
              }
            } else if ('r' === n) {
              var o = (function (t) {
                var e,
                  n = eS.exec(t);
                if (n) {
                  var r =
                    (null === (e = n[4].match(ew)) || void 0 === e
                      ? void 0
                      : e.map(function (t) {
                          return t.split(':');
                        })) || [];
                  return {
                    cx: em(50, '%'),
                    cy: em(50, '%'),
                    steps: r.map(function (t) {
                      var e = (0, H.__read)(t, 2),
                        n = e[0],
                        r = e[1];
                      return { offset: em(100 * Number(n), '%'), color: r };
                    }),
                  };
                }
                return null;
              })(t);
              if (o) {
                if (!(0, to.Z)(o)) return [new t7(V.RadialGradient, o)];
                t = o;
              }
            } else if ('p' === n)
              return (function (t) {
                var e = eN.exec(t);
                if (e) {
                  var n = e[1],
                    r = e[2];
                  switch (n) {
                    case 'a':
                      n = 'repeat';
                      break;
                    case 'x':
                      n = 'repeat-x';
                      break;
                    case 'y':
                      n = 'repeat-y';
                      break;
                    default:
                      n = 'no-repeat';
                  }
                  return { image: r, repetition: n };
                }
                return null;
              })(t);
          }
        });
      function eA(t) {
        return t && !!t.image;
      }
      function eR(t) {
        return t && !(0, ti.Z)(t.r) && !(0, ti.Z)(t.g) && !(0, ti.Z)(t.b);
      }
      var eO = t1(function (t) {
        if (eA(t)) return (0, H.__assign)({ repetition: 'repeat' }, t);
        if (((0, ti.Z)(t) && (t = ''), 'transparent' === t)) return ey;
        if ('currentColor' === t) t = 'black';
        else if ('none' === t) return ev;
        var e = e_(t);
        if (e) return e;
        var n = tS.ZP(t),
          r = [0, 0, 0, 0];
        return (
          null !== n &&
            ((r[0] = n.r || 0),
            (r[1] = n.g || 0),
            (r[2] = n.b || 0),
            (r[3] = n.opacity)),
          eg.apply(void 0, (0, H.__spreadArray)([], (0, H.__read)(r), !1))
        );
      });
      function eL(t, e) {
        if (eR(t) && eR(e))
          return [
            [Number(t.r), Number(t.g), Number(t.b), Number(t.alpha)],
            [Number(e.r), Number(e.g), Number(e.b), Number(e.alpha)],
            function (t) {
              var e = t.slice();
              if (e[3])
                for (var n = 0; n < 3; n++)
                  e[n] = Math.round((0, ta.Z)(e[n], 0, 255));
              return (
                (e[3] = (0, ta.Z)(e[3], 0, 1)), 'rgba('.concat(e.join(','), ')')
              );
            },
          ];
      }
      function eI(t, e) {
        if ((0, ti.Z)(e)) return em(0, 'px');
        if (isFinite(Number((e = ''.concat(e).trim().toLowerCase())))) {
          if ('px'.search(t) >= 0) return em(Number(e), 'px');
          if ('deg'.search(t) >= 0) return em(Number(e), 'deg');
        }
        var n = [];
        e = e.replace(t, function (t) {
          return n.push(t), 'U' + t;
        });
        var r = 'U(' + t.source + ')';
        return n.map(function (t) {
          return em(
            Number(
              e.replace(RegExp('U' + t, 'g'), '').replace(RegExp(r, 'g'), '*0'),
            ),
            t,
          );
        })[0];
      }
      var eD = function (t) {
          return eI(/px/g, t);
        },
        eG = t1(eD);
      t1(function (t) {
        return eI(RegExp('%', 'g'), t);
      });
      var eF = function (t) {
          return (0, tn.Z)(t) || isFinite(Number(t))
            ? em(Number(t) || 0, 'px')
            : eI(RegExp('px|%|em|rem', 'g'), t);
        },
        eB = t1(eF),
        eU = function (t) {
          return eI(RegExp('deg|rad|grad|turn', 'g'), t);
        },
        eV = t1(eU);
      function eY(t) {
        var e = 0;
        return (
          t.unit === I.kDegrees
            ? (e = t.value)
            : t.unit === I.kRadians
              ? (e = tG(Number(t.value)))
              : t.unit === I.kTurns && (e = 360 * Number(t.value)),
          e
        );
      }
      function ez(t, e) {
        var n;
        return (Array.isArray(t)
          ? (n = t.map(function (t) {
              return Number(t);
            }))
          : (0, to.Z)(t)
            ? (n = t.split(' ').map(function (t) {
                return Number(t);
              }))
            : (0, tn.Z)(t) && (n = [t]),
        2 === e)
          ? 1 === n.length
            ? [n[0], n[0]]
            : [n[0], n[1]]
          : 1 === n.length
            ? [n[0], n[0], n[0], n[0]]
            : 2 === n.length
              ? [n[0], n[1], n[0], n[1]]
              : 3 === n.length
                ? [n[0], n[1], n[2], n[1]]
                : [n[0], n[1], n[2], n[3]];
      }
      function ej(t) {
        return (0, to.Z)(t)
          ? t.split(' ').map(function (t) {
              return eB(t);
            })
          : t.map(function (t) {
              return eB(t.toString());
            });
      }
      function eW(t, e, n, r) {
        if ((void 0 === r && (r = !1), t.unit === I.kPixels))
          return Number(t.value);
        if (t.unit === I.kPercentage && n) {
          var i =
            n.nodeName === C.GROUP ? n.getLocalBounds() : n.getGeometryBounds();
          return (r ? i.min[e] : 0) + (t.value / 100) * i.halfExtents[e] * 2;
        }
        return 0;
      }
      var eX = [
        'blur',
        'brightness',
        'drop-shadow',
        'contrast',
        'grayscale',
        'sepia',
        'saturate',
        'hue-rotate',
        'invert',
      ];
      function eZ(t) {
        if ((void 0 === t && (t = ''), 'none' === (t = t.toLowerCase().trim())))
          return [];
        for (
          var e, n = /\s*([\w-]+)\(([^)]*)\)/g, r = [], i = 0;
          (e = n.exec(t)) && e.index === i;

        )
          if (
            ((i = e.index + e[0].length),
            eX.indexOf(e[1]) > -1 &&
              r.push({
                name: e[1],
                params: e[2].split(' ').map(function (t) {
                  return eI(/deg|rad|grad|turn|px|%/g, t) || eO(t);
                }),
              }),
            n.lastIndex === t.length)
          )
            return r;
        return [];
      }
      function eH(t) {
        return t.toString();
      }
      var eq = function (t) {
          return 'number' == typeof t
            ? em(t)
            : /^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)
              ? em(Number(t))
              : em(0);
        },
        eK = t1(eq);
      function eJ(t, e) {
        return [t, e, eH];
      }
      function e$(t, e) {
        return function (n, r) {
          return [
            n,
            r,
            function (n) {
              return eH((0, ta.Z)(n, t, e));
            },
          ];
        };
      }
      function eQ(t, e) {
        if (t.length === e.length)
          return [
            t,
            e,
            function (t) {
              return t;
            },
          ];
      }
      function e0(t) {
        return (
          0 === t.parsedStyle.d.totalLength &&
            (t.parsedStyle.d.totalLength = (0, ts.D)(
              t.parsedStyle.d.absolutePath,
            )),
          t.parsedStyle.d.totalLength
        );
      }
      function e1(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function e2(t, e) {
        var n = t.prePoint,
          r = t.currentPoint,
          i = t.nextPoint,
          o = Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2),
          a = Math.pow(r[0] - i[0], 2) + Math.pow(r[1] - i[1], 2),
          s = Math.acos(
            (o + a - (Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2))) /
              (2 * Math.sqrt(o) * Math.sqrt(a)),
          );
        if (!s || 0 === Math.sin(s) || (0, tc.Z)(s, 0))
          return { xExtra: 0, yExtra: 0 };
        var l = Math.abs(Math.atan2(i[1] - r[1], i[0] - r[0])),
          u = Math.abs(Math.atan2(i[0] - r[0], i[1] - r[1]));
        return {
          xExtra:
            (e / 2) *
              (1 / Math.sin(s / 2)) *
              Math.cos(s / 2 - (l = l > Math.PI / 2 ? Math.PI - l : l)) -
              e / 2 || 0,
          yExtra:
            (e / 2) *
              (1 / Math.sin(s / 2)) *
              Math.cos((u = u > Math.PI / 2 ? Math.PI - u : u) - s / 2) -
              e / 2 || 0,
        };
      }
      function e3(t, e) {
        return [e[0] + (e[0] - t[0]), e[1] + (e[1] - t[1])];
      }
      t1(function (t) {
        return (0, to.Z)(t) ? t.split(' ').map(eK) : t.map(eK);
      });
      var e5 = function (t, e) {
          var n = t.x * e.x + t.y * e.y,
            r = Math.sqrt(
              (Math.pow(t.x, 2) + Math.pow(t.y, 2)) *
                (Math.pow(e.x, 2) + Math.pow(e.y, 2)),
            );
          return (t.x * e.y - t.y * e.x < 0 ? -1 : 1) * Math.acos(n / r);
        },
        e4 = function (t, e, n, r, i, o, a, s) {
          (e = Math.abs(e)), (n = Math.abs(n));
          var l = tD((r = (0, th.Z)(r, 360)));
          if (t.x === a.x && t.y === a.y)
            return { x: t.x, y: t.y, ellipticalArcAngle: 0 };
          if (0 === e || 0 === n) return { x: 0, y: 0, ellipticalArcAngle: 0 };
          var u = (t.x - a.x) / 2,
            c = (t.y - a.y) / 2,
            h = {
              x: Math.cos(l) * u + Math.sin(l) * c,
              y: -Math.sin(l) * u + Math.cos(l) * c,
            },
            p =
              Math.pow(h.x, 2) / Math.pow(e, 2) +
              Math.pow(h.y, 2) / Math.pow(n, 2);
          p > 1 && ((e = Math.sqrt(p) * e), (n = Math.sqrt(p) * n));
          var d =
              (Math.pow(e, 2) * Math.pow(n, 2) -
                Math.pow(e, 2) * Math.pow(h.y, 2) -
                Math.pow(n, 2) * Math.pow(h.x, 2)) /
              (Math.pow(e, 2) * Math.pow(h.y, 2) +
                Math.pow(n, 2) * Math.pow(h.x, 2)),
            f = (i !== o ? 1 : -1) * Math.sqrt((d = d < 0 ? 0 : d)),
            v = { x: ((e * h.y) / n) * f, y: (-(n * h.x) / e) * f },
            y = {
              x: Math.cos(l) * v.x - Math.sin(l) * v.y + (t.x + a.x) / 2,
              y: Math.sin(l) * v.x + Math.cos(l) * v.y + (t.y + a.y) / 2,
            },
            g = { x: (h.x - v.x) / e, y: (h.y - v.y) / n },
            m = e5({ x: 1, y: 0 }, g),
            E = e5(g, { x: (-h.x - v.x) / e, y: (-h.y - v.y) / n });
          !o && E > 0 ? (E -= 2 * Math.PI) : o && E < 0 && (E += 2 * Math.PI);
          var x = m + (E %= 2 * Math.PI) * s,
            b = e * Math.cos(x),
            T = n * Math.sin(x);
          return {
            x: Math.cos(l) * b - Math.sin(l) * T + y.x,
            y: Math.sin(l) * b + Math.cos(l) * T + y.y,
            ellipticalArcStartAngle: m,
            ellipticalArcEndAngle: m + E,
            ellipticalArcAngle: x,
            ellipticalArcCenter: y,
            resultantRx: e,
            resultantRy: n,
          };
        };
      function e9(t, e, n) {
        void 0 === n && (n = !0);
        var r = t.arcParams,
          i = r.rx,
          o = void 0 === i ? 0 : i,
          a = r.ry,
          s = void 0 === a ? 0 : a,
          l = r.xRotation,
          u = r.arcFlag,
          c = r.sweepFlag,
          h = e4(
            { x: t.prePoint[0], y: t.prePoint[1] },
            o,
            s,
            l,
            !!u,
            !!c,
            { x: t.currentPoint[0], y: t.currentPoint[1] },
            e,
          ),
          p = e4(
            { x: t.prePoint[0], y: t.prePoint[1] },
            o,
            s,
            l,
            !!u,
            !!c,
            { x: t.currentPoint[0], y: t.currentPoint[1] },
            n ? e + 0.005 : e - 0.005,
          ),
          d = p.x - h.x,
          f = p.y - h.y,
          v = Math.sqrt(d * d + f * f);
        return { x: -d / v, y: -f / v };
      }
      function e6(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function e8(t, e) {
        return e6(t) * e6(e)
          ? (t[0] * e[0] + t[1] * e[1]) / (e6(t) * e6(e))
          : 1;
      }
      function e7(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(e8(t, e));
      }
      function nt(t, e, n, r) {
        var i = ((-1 + Math.sqrt(2)) / 3) * 4,
          o = t * i,
          a = e * i,
          s = n - t,
          l = n + t,
          u = r - e,
          c = r + e;
        return [
          ['M', s, r],
          ['C', s, r - a, n - o, u, n, u],
          ['C', n + o, u, l, r - a, l, r],
          ['C', l, r + a, n + o, c, n, c],
          ['C', n - o, c, s, r + a, s, r],
          ['Z'],
        ];
      }
      function ne(t, e) {
        void 0 === e && (e = t.getLocalTransform());
        var n,
          r,
          i,
          o,
          a,
          s = [];
        switch (t.nodeName) {
          case C.LINE:
            var l = t.parsedStyle,
              u = l.x1,
              c = l.y1,
              h = l.x2,
              p = l.y2;
            s = [
              ['M', void 0 === u ? 0 : u, void 0 === c ? 0 : c],
              ['L', void 0 === h ? 0 : h, void 0 === p ? 0 : p],
            ];
            break;
          case C.CIRCLE:
            var d = t.parsedStyle,
              f = d.r,
              v = void 0 === f ? 0 : f,
              y = d.cx,
              g = void 0 === y ? 0 : y,
              m = d.cy,
              E = void 0 === m ? 0 : m;
            s = nt(v, v, g, E);
            break;
          case C.ELLIPSE:
            var x = t.parsedStyle,
              b = x.rx,
              T = x.ry,
              P = x.cx,
              g = void 0 === P ? 0 : P,
              S = x.cy,
              E = void 0 === S ? 0 : S;
            s = nt(void 0 === b ? 0 : b, void 0 === T ? 0 : T, g, E);
            break;
          case C.POLYLINE:
          case C.POLYGON:
            (n = t.parsedStyle.points.points),
              (r = t.nodeName === C.POLYGON),
              (i = n.map(function (t, e) {
                return [0 === e ? 'M' : 'L', t[0], t[1]];
              })),
              r && i.push(['Z']),
              (s = i);
            break;
          case C.RECT:
            var N = t.parsedStyle,
              w = N.width,
              k = void 0 === w ? 0 : w,
              M = N.height,
              _ = void 0 === M ? 0 : M,
              A = N.x,
              R = N.y,
              O = N.radius;
            s = (function (t, e, n, r, i) {
              if (i) {
                var o = (0, H.__read)(i, 4),
                  a = o[0],
                  s = o[1],
                  l = o[2],
                  u = o[3],
                  c = t > 0 ? 1 : -1,
                  h = e > 0 ? 1 : -1,
                  p = c + h !== 0 ? 1 : 0;
                return [
                  ['M', c * a + n, r],
                  ['L', t - c * s + n, r],
                  s ? ['A', s, s, 0, 0, p, t + n, h * s + r] : null,
                  ['L', t + n, e - h * l + r],
                  l ? ['A', l, l, 0, 0, p, t + n - c * l, e + r] : null,
                  ['L', n + c * u, e + r],
                  u ? ['A', u, u, 0, 0, p, n, e + r - h * u] : null,
                  ['L', n, h * a + r],
                  a ? ['A', a, a, 0, 0, p, c * a + n, r] : null,
                  ['Z'],
                ].filter(function (t) {
                  return t;
                });
              }
              return [
                ['M', n, r],
                ['L', n + t, r],
                ['L', n + t, r + e],
                ['L', n, r + e],
                ['Z'],
              ];
            })(
              k,
              _,
              void 0 === A ? 0 : A,
              void 0 === R ? 0 : R,
              O &&
                O.some(function (t) {
                  return 0 !== t;
                }) &&
                O.map(function (t) {
                  return (0, ta.Z)(
                    t,
                    0,
                    Math.min(Math.abs(k) / 2, Math.abs(_) / 2),
                  );
                }),
            );
            break;
          case C.PATH:
            var L = t.parsedStyle.d.absolutePath;
            s = (0, H.__spreadArray)([], (0, H.__read)(L), !1);
        }
        if (s.length)
          return (
            (o = s),
            (a = e),
            o.reduce(function (t, e) {
              var n = '';
              if ('M' === e[0] || 'L' === e[0]) {
                var r = K.al(e[1], e[2], 0);
                a && K.fF(r, r, a),
                  (n = ''.concat(e[0]).concat(r[0], ',').concat(r[1]));
              } else if ('Z' === e[0]) n = e[0];
              else if ('C' === e[0]) {
                var i = K.al(e[1], e[2], 0),
                  o = K.al(e[3], e[4], 0),
                  s = K.al(e[5], e[6], 0);
                a && (K.fF(i, i, a), K.fF(o, o, a), K.fF(s, s, a)),
                  (n = ''
                    .concat(e[0])
                    .concat(i[0], ',')
                    .concat(i[1], ',')
                    .concat(o[0], ',')
                    .concat(o[1], ',')
                    .concat(s[0], ',')
                    .concat(s[1]));
              } else if ('A' === e[0]) {
                var l = K.al(e[6], e[7], 0);
                a && K.fF(l, l, a),
                  (n = ''
                    .concat(e[0])
                    .concat(e[1], ',')
                    .concat(e[2], ',')
                    .concat(e[3], ',')
                    .concat(e[4], ',')
                    .concat(e[5], ',')
                    .concat(l[0], ',')
                    .concat(l[1]));
              } else if ('Q' === e[0]) {
                var i = K.al(e[1], e[2], 0),
                  o = K.al(e[3], e[4], 0);
                a && (K.fF(i, i, a), K.fF(o, o, a)),
                  (n = ''
                    .concat(e[0])
                    .concat(e[1], ',')
                    .concat(e[2], ',')
                    .concat(e[3], ',')
                    .concat(e[4], '}'));
              }
              return t + n;
            }, '')
          );
      }
      var nn = function (t) {
          if ('' === t || (Array.isArray(t) && 0 === t.length))
            return {
              absolutePath: [],
              hasArc: !1,
              segments: [],
              polygons: [],
              polylines: [],
              curve: null,
              totalLength: 0,
              rect: { x: 0, y: 0, width: 0, height: 0 },
            };
          try {
            e = (0, tp.A)(t);
          } catch (n) {
            (e = (0, tp.A)('')),
              console.error('[g]: Invalid SVG Path definition: '.concat(t));
          }
          !(function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e - 1],
                r = t[e];
              if ('M' === r[0] && n) {
                var i = n[0],
                  o = [r[1], r[2]],
                  a = void 0;
                'L' === i || 'M' === i
                  ? (a = [n[1], n[2]])
                  : ('C' === i || 'A' === i || 'Q' === i) &&
                    (a = [n[n.length - 2], n[n.length - 1]]),
                  a && e1(o, a) && (t.splice(e, 1), e--);
              }
            }
          })(e);
          var e,
            n = (function (t) {
              for (var e = !1, n = t.length, r = 0; r < n; r++) {
                var i = t[r][0];
                if ('C' === i || 'A' === i || 'Q' === i) {
                  e = !0;
                  break;
                }
              }
              return e;
            })(e),
            r = (function (t) {
              for (var e = [], n = [], r = [], i = 0; i < t.length; i++) {
                var o = t[i],
                  a = o[0];
                'M' === a
                  ? (r.length && (n.push(r), (r = [])), r.push([o[1], o[2]]))
                  : 'Z' === a
                    ? r.length && (e.push(r), (r = []))
                    : r.push([o[1], o[2]]);
              }
              return r.length > 0 && n.push(r), { polygons: e, polylines: n };
            })(e),
            i = r.polygons,
            o = r.polylines,
            a = (function (t) {
              for (
                var e = [],
                  n = null,
                  r = null,
                  i = null,
                  o = 0,
                  a = t.length,
                  s = 0;
                s < a;
                s++
              ) {
                var l = t[s];
                r = t[s + 1];
                var u = l[0],
                  c = {
                    command: u,
                    prePoint: n,
                    params: l,
                    startTangent: null,
                    endTangent: null,
                    currentPoint: null,
                    nextPoint: null,
                    arcParams: null,
                    box: null,
                    cubicParams: null,
                  };
                switch (u) {
                  case 'M':
                    (i = [l[1], l[2]]), (o = s);
                    break;
                  case 'A':
                    var h = (function (t, e) {
                      var n = e[1],
                        r = e[2],
                        i = (0, th.Z)(tD(e[3]), 2 * Math.PI),
                        o = e[4],
                        a = e[5],
                        s = t[0],
                        l = t[1],
                        u = e[6],
                        c = e[7],
                        h =
                          (Math.cos(i) * (s - u)) / 2 +
                          (Math.sin(i) * (l - c)) / 2,
                        p =
                          (-1 * Math.sin(i) * (s - u)) / 2 +
                          (Math.cos(i) * (l - c)) / 2,
                        d = (h * h) / (n * n) + (p * p) / (r * r);
                      d > 1 && ((n *= Math.sqrt(d)), (r *= Math.sqrt(d)));
                      var f = n * n * (p * p) + r * r * (h * h),
                        v = f ? Math.sqrt((n * n * (r * r) - f) / f) : 1;
                      o === a && (v *= -1), isNaN(v) && (v = 0);
                      var y = r ? (v * n * p) / r : 0,
                        g = n ? (-(v * r) * h) / n : 0,
                        m = (s + u) / 2 + Math.cos(i) * y - Math.sin(i) * g,
                        E = (l + c) / 2 + Math.sin(i) * y + Math.cos(i) * g,
                        x = [(h - y) / n, (p - g) / r],
                        b = [(-1 * h - y) / n, (-1 * p - g) / r],
                        T = e7([1, 0], x),
                        P = e7(x, b);
                      return (
                        -1 >= e8(x, b) && (P = Math.PI),
                        e8(x, b) >= 1 && (P = 0),
                        0 === a && P > 0 && (P -= 2 * Math.PI),
                        1 === a && P < 0 && (P += 2 * Math.PI),
                        {
                          cx: m,
                          cy: E,
                          rx: e1(t, [u, c]) ? 0 : n,
                          ry: e1(t, [u, c]) ? 0 : r,
                          startAngle: T,
                          endAngle: T + P,
                          xRotation: i,
                          arcFlag: o,
                          sweepFlag: a,
                        }
                      );
                    })(n, l);
                    c.arcParams = h;
                }
                if ('Z' === u) (n = i), (r = t[o + 1]);
                else {
                  var p = l.length;
                  n = [l[p - 2], l[p - 1]];
                }
                r && 'Z' === r[0] && ((r = t[o]), e[o] && (e[o].prePoint = n)),
                  (c.currentPoint = n),
                  e[o] &&
                    e1(n, e[o].currentPoint) &&
                    (e[o].prePoint = c.prePoint);
                var d = r ? [r[r.length - 2], r[r.length - 1]] : null;
                c.nextPoint = d;
                var f = c.prePoint;
                if (['L', 'H', 'V'].includes(u))
                  (c.startTangent = [f[0] - n[0], f[1] - n[1]]),
                    (c.endTangent = [n[0] - f[0], n[1] - f[1]]);
                else if ('Q' === u) {
                  var v = [l[1], l[2]];
                  (c.startTangent = [f[0] - v[0], f[1] - v[1]]),
                    (c.endTangent = [n[0] - v[0], n[1] - v[1]]);
                } else if ('T' === u) {
                  var y = e[s - 1],
                    v = e3(y.currentPoint, f);
                  'Q' === y.command
                    ? ((c.command = 'Q'),
                      (c.startTangent = [f[0] - v[0], f[1] - v[1]]),
                      (c.endTangent = [n[0] - v[0], n[1] - v[1]]))
                    : ((c.command = 'TL'),
                      (c.startTangent = [f[0] - n[0], f[1] - n[1]]),
                      (c.endTangent = [n[0] - f[0], n[1] - f[1]]));
                } else if ('C' === u) {
                  var g = [l[1], l[2]],
                    m = [l[3], l[4]];
                  (c.startTangent = [f[0] - g[0], f[1] - g[1]]),
                    (c.endTangent = [n[0] - m[0], n[1] - m[1]]),
                    0 === c.startTangent[0] &&
                      0 === c.startTangent[1] &&
                      (c.startTangent = [g[0] - m[0], g[1] - m[1]]),
                    0 === c.endTangent[0] &&
                      0 === c.endTangent[1] &&
                      (c.endTangent = [m[0] - g[0], m[1] - g[1]]);
                } else if ('S' === u) {
                  var y = e[s - 1],
                    g = e3(y.currentPoint, f),
                    m = [l[1], l[2]];
                  'C' === y.command
                    ? ((c.command = 'C'),
                      (c.startTangent = [f[0] - g[0], f[1] - g[1]]))
                    : ((c.command = 'SQ'),
                      (c.startTangent = [f[0] - m[0], f[1] - m[1]])),
                    (c.endTangent = [n[0] - m[0], n[1] - m[1]]);
                } else if ('A' === u) {
                  var E = e9(c, 0),
                    x = E.x,
                    b = E.y,
                    T = e9(c, 1, !1),
                    P = T.x,
                    S = T.y;
                  (c.startTangent = [x, b]), (c.endTangent = [P, S]);
                }
                e.push(c);
              }
              return e;
            })(e),
            s = (function (t, e) {
              for (var n = [], r = [], i = [], o = 0; o < t.length; o++) {
                var a = t[o],
                  s = a.currentPoint,
                  l = a.params,
                  u = a.prePoint,
                  c = void 0;
                switch (a.command) {
                  case 'Q':
                    c = (0, tN.x4)(u[0], u[1], l[1], l[2], l[3], l[4]);
                    break;
                  case 'C':
                    c = (0, tN.l5)(
                      u[0],
                      u[1],
                      l[1],
                      l[2],
                      l[3],
                      l[4],
                      l[5],
                      l[6],
                    );
                    break;
                  case 'A':
                    var h = a.arcParams;
                    c = (0, tN.vp)(
                      h.cx,
                      h.cy,
                      h.rx,
                      h.ry,
                      h.xRotation,
                      h.startAngle,
                      h.endAngle,
                    );
                    break;
                  default:
                    n.push(s[0]), r.push(s[1]);
                }
                c &&
                  ((a.box = c),
                  n.push(c.x, c.x + c.width),
                  r.push(c.y, c.y + c.height));
              }
              (n = n.filter(function (t) {
                return !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0;
              })),
                (r = r.filter(function (t) {
                  return !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0;
                }));
              var p = (0, tl.Z)(n),
                d = (0, tl.Z)(r),
                f = (0, tu.Z)(n),
                v = (0, tu.Z)(r);
              if (0 === i.length)
                return { x: p, y: d, width: f - p, height: v - d };
              for (var o = 0; o < i.length; o++) {
                var a = i[o],
                  s = a.currentPoint;
                s[0] === p
                  ? (p -= e2(a, 0).xExtra)
                  : s[0] === f && (f += e2(a, 0).xExtra),
                  s[1] === d
                    ? (d -= e2(a, e).yExtra)
                    : s[1] === v && (v += e2(a, e).yExtra);
              }
              return { x: p, y: d, width: f - p, height: v - d };
            })(a, 0),
            l = s.x,
            u = s.y,
            c = s.width,
            h = s.height;
          return {
            absolutePath: e,
            hasArc: n,
            segments: a,
            polygons: i,
            polylines: o,
            totalLength: 0,
            rect: {
              x: Number.isFinite(l) ? l : 0,
              y: Number.isFinite(u) ? u : 0,
              width: Number.isFinite(c) ? c : 0,
              height: Number.isFinite(h) ? h : 0,
            },
          };
        },
        nr = t1(nn);
      function ni(t) {
        return (0, to.Z)(t) ? nr(t) : nn(t);
      }
      function no(t, e, n) {
        var r = t.curve,
          i = e.curve;
        (r && 0 !== r.length) ||
          ((r = (0, td.Y)(t.absolutePath, !1)), (t.curve = r)),
          (i && 0 !== i.length) ||
            ((i = (0, td.Y)(e.absolutePath, !1)), (e.curve = i));
        var o = [r, i];
        r.length !== i.length && (o = (0, tf.x)(r, i));
        var a =
          (0, tv.b)(o[0]) !== (0, tv.b)(o[1])
            ? (0, ty.G)(o[0])
            : (0, tg.U)(o[0]);
        return [
          a,
          (0, tm.g)(o[1], a),
          function (t) {
            return t;
          },
        ];
      }
      function na(t, e) {
        return {
          points: (0, to.Z)(t)
            ? t.split(' ').map(function (t) {
                var e = (0, H.__read)(t.split(','), 2),
                  n = e[0],
                  r = e[1];
                return [Number(n), Number(r)];
              })
            : t,
          totalLength: 0,
          segments: [],
        };
      }
      function ns(t, e) {
        return [
          t.points,
          e.points,
          function (t) {
            return t;
          },
        ];
      }
      function nl(t) {
        return function (e) {
          var n = 0;
          return t.map(function (t) {
            return null === t ? e[n++] : t;
          });
        };
      }
      function nu(t) {
        return t;
      }
      var nc = {
        matrix: [
          'NNNNNN',
          [null, null, 0, 0, null, null, 0, 0, 0, 0, 1, 0, null, null, 0, 1],
          nu,
        ],
        matrix3d: ['NNNNNNNNNNNNNNNN', nu],
        rotate: ['A'],
        rotatex: ['A'],
        rotatey: ['A'],
        rotatez: ['A'],
        rotate3d: ['NNNA'],
        perspective: ['L'],
        scale: ['Nn', nl([null, null, new el(1)]), nu],
        scalex: ['N', nl([null, new el(1), new el(1)]), nl([null, new el(1)])],
        scaley: ['N', nl([new el(1), null, new el(1)]), nl([new el(1), null])],
        scalez: ['N', nl([new el(1), new el(1), null])],
        scale3d: ['NNN', nu],
        skew: ['Aa', null, nu],
        skewx: ['A', null, nl([null, ec])],
        skewy: ['A', null, nl([ec, null])],
        translate: ['Tt', nl([null, null, eu]), nu],
        translatex: ['T', nl([null, eu, eu]), nl([null, eu])],
        translatey: ['T', nl([eu, null, eu]), nl([eu, null])],
        translatez: ['L', nl([eu, eu, null])],
        translate3d: ['TTL', nu],
      };
      function nh(t) {
        if ('none' === (t = (t || 'none').toLowerCase().trim())) return [];
        for (
          var e, n = /\s*(\w+)\(([^)]*)\)/g, r = [], i = 0;
          (e = n.exec(t)) && e.index === i;

        ) {
          i = e.index + e[0].length;
          var o = e[1],
            a = nc[o];
          if (!a) break;
          var s = e[2].split(','),
            l = a[0];
          if (l.length < s.length) break;
          for (var u = [], c = 0; c < l.length; c++) {
            var h = s[c],
              p = l[c],
              d = void 0;
            if (
              void 0 ===
              (d = h
                ? {
                    A: function (t) {
                      return '0' === t.trim() ? ec : eV(t);
                    },
                    N: eK,
                    T: eB,
                    L: eG,
                  }[p.toUpperCase()](h)
                : { a: ec, n: u[0], t: eu }[p])
            )
              return [];
            u.push(d);
          }
          if ((r.push({ t: o, d: u }), n.lastIndex === t.length)) return r;
        }
        return [];
      }
      function np(t) {
        if ('none' === (t = (t || 'none').toLowerCase().trim())) return [];
        for (
          var e, n = /\s*(\w+)\(([^)]*)\)/g, r = [], i = 0;
          (e = n.exec(t)) && e.index === i;

        ) {
          i = e.index + e[0].length;
          var o = e[1],
            a = nc[o];
          if (!a) break;
          var s = e[2].split(','),
            l = a[0];
          if (l.length < s.length) break;
          for (var u = [], c = 0; c < l.length; c++) {
            var h = s[c],
              p = l[c],
              d = void 0;
            if (
              void 0 ===
              (d = h
                ? {
                    A: function (t) {
                      return '0' === t.trim() ? ec : eU(t);
                    },
                    N: eq,
                    T: eF,
                    L: eD,
                  }[p.toUpperCase()](h)
                : { a: ec, n: u[0], t: eu }[p])
            )
              return [];
            u.push(d);
          }
          if ((r.push({ t: o, d: u }), n.lastIndex === t.length)) return r;
        }
        return [];
      }
      function nd(t) {
        switch (t.t) {
          case 'rotatex':
            return [
              1,
              0,
              0,
              0,
              0,
              Math.cos((i = tD(eY(t.d[0])))),
              Math.sin(i),
              0,
              0,
              -Math.sin(i),
              Math.cos(i),
              0,
              0,
              0,
              0,
              1,
            ];
          case 'rotatey':
            return [
              Math.cos((i = tD(eY(t.d[0])))),
              0,
              -Math.sin(i),
              0,
              0,
              1,
              0,
              0,
              Math.sin(i),
              0,
              Math.cos(i),
              0,
              0,
              0,
              0,
              1,
            ];
          case 'rotate':
          case 'rotatez':
            return [
              Math.cos((i = tD(eY(t.d[0])))),
              Math.sin(i),
              0,
              0,
              -Math.sin(i),
              Math.cos(i),
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'rotate3d':
            (e = t.d[0].value),
              (n = t.d[1].value),
              (r = t.d[2].value),
              (i = tD(eY(t.d[3])));
            var e,
              n,
              r,
              i,
              o = e * e + n * n + r * r;
            if (0 === o) (e = 1), (n = 0), (r = 0);
            else if (1 !== o) {
              var a = Math.sqrt(o);
              (e /= a), (n /= a), (r /= a);
            }
            var s = Math.sin(i / 2),
              l = s * Math.cos(i / 2),
              u = s * s;
            return [
              1 - 2 * (n * n + r * r) * u,
              2 * (e * n * u + r * l),
              2 * (e * r * u - n * l),
              0,
              2 * (e * n * u - r * l),
              1 - 2 * (e * e + r * r) * u,
              2 * (n * r * u + e * l),
              0,
              2 * (e * r * u + n * l),
              2 * (n * r * u - e * l),
              1 - 2 * (e * e + n * n) * u,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'scale':
            return [
              t.d[0].value,
              0,
              0,
              0,
              0,
              t.d[1].value,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'scalex':
            return [t.d[0].value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          case 'scaley':
            return [1, 0, 0, 0, 0, t.d[0].value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          case 'scalez':
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0].value, 0, 0, 0, 0, 1];
          case 'scale3d':
            return [
              t.d[0].value,
              0,
              0,
              0,
              0,
              t.d[1].value,
              0,
              0,
              0,
              0,
              t.d[2].value,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'skew':
            var c = tD(eY(t.d[0]));
            return [
              1,
              Math.tan(tD(eY(t.d[1]))),
              0,
              0,
              Math.tan(c),
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'skewx':
            return [
              1,
              0,
              0,
              0,
              Math.tan((i = tD(eY(t.d[0])))),
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'skewy':
            return [
              1,
              Math.tan((i = tD(eY(t.d[0])))),
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ];
          case 'translate':
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              (e = eW(t.d[0], 0, null) || 0),
              (n = eW(t.d[1], 0, null) || 0),
              0,
              1,
            ];
          case 'translatex':
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              (e = eW(t.d[0], 0, null) || 0),
              0,
              0,
              1,
            ];
          case 'translatey':
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              (n = eW(t.d[0], 0, null) || 0),
              0,
              1,
            ];
          case 'translatez':
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              (r = eW(t.d[0], 0, null) || 0),
              1,
            ];
          case 'translate3d':
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              (e = eW(t.d[0], 0, null) || 0),
              (n = eW(t.d[1], 0, null) || 0),
              (r = eW(t.d[2], 0, null) || 0),
              1,
            ];
          case 'perspective':
            var h = eW(t.d[0], 0, null) || 0;
            return [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              h ? -1 / h : 0,
              0,
              0,
              0,
              1,
            ];
          case 'matrix':
            return [
              t.d[0].value,
              t.d[1].value,
              0,
              0,
              t.d[2].value,
              t.d[3].value,
              0,
              0,
              0,
              0,
              1,
              0,
              t.d[4].value,
              t.d[5].value,
              0,
              1,
            ];
          case 'matrix3d':
            return t.d.map(function (t) {
              return t.value;
            });
        }
      }
      function nf(t, e) {
        return [
          t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3],
          t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3],
          t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3],
          t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3],
          t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7],
          t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7],
          t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7],
          t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7],
          t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11],
          t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11],
          t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11],
          t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11],
          t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15],
          t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15],
          t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15],
          t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15],
        ];
      }
      function nv(t) {
        var e = [0, 0, 0],
          n = [1, 1, 1],
          r = [0, 0, 0],
          i = [0, 0, 0, 1],
          o = [0, 0, 0, 1];
        return (
          !(function (t, e, n, r, i, o) {
            if (
              !(
                !(function (t, e) {
                  var n = e[15];
                  if (0 === n) return !1;
                  for (var r = 1 / n, i = 0; i < 16; i++) t[i] = e[i] * r;
                  return !0;
                })(tU, t) ||
                (J.copy(tV, tU),
                (tV[3] = 0),
                (tV[7] = 0),
                (tV[11] = 0),
                (tV[15] = 1),
                1e-8 > Math.abs(J.determinant(tV)))
              )
            ) {
              var a = tU[3],
                s = tU[7],
                l = tU[11],
                u = tU[12],
                c = tU[13],
                h = tU[14],
                p = tU[15];
              if (0 !== a || 0 !== s || 0 !== l) {
                if (
                  ((tY[0] = a),
                  (tY[1] = s),
                  (tY[2] = l),
                  (tY[3] = p),
                  !J.invert(tV, tV))
                )
                  return;
                J.transpose(tV, tV), Q.fF(i, tY, tV);
              } else (i[0] = i[1] = i[2] = 0), (i[3] = 1);
              if (
                ((e[0] = u),
                (e[1] = c),
                (e[2] = h),
                (tz[0][0] = tU[0]),
                (tz[0][1] = tU[1]),
                (tz[0][2] = tU[2]),
                (tz[1][0] = tU[4]),
                (tz[1][1] = tU[5]),
                (tz[1][2] = tU[6]),
                (tz[2][0] = tU[8]),
                (tz[2][1] = tU[9]),
                (tz[2][2] = tU[10]),
                (n[0] = K.kE(tz[0])),
                K.Fv(tz[0], tz[0]),
                (r[0] = K.AK(tz[0], tz[1])),
                tW(tz[1], tz[1], tz[0], 1, -r[0]),
                (n[1] = K.kE(tz[1])),
                K.Fv(tz[1], tz[1]),
                (r[0] /= n[1]),
                (r[1] = K.AK(tz[0], tz[2])),
                tW(tz[2], tz[2], tz[0], 1, -r[1]),
                (r[2] = K.AK(tz[1], tz[2])),
                tW(tz[2], tz[2], tz[1], 1, -r[2]),
                (n[2] = K.kE(tz[2])),
                K.Fv(tz[2], tz[2]),
                (r[1] /= n[2]),
                (r[2] /= n[2]),
                K.kC(tj, tz[1], tz[2]),
                0 > K.AK(tz[0], tj))
              )
                for (var d = 0; d < 3; d++)
                  (n[d] *= -1),
                    (tz[d][0] *= -1),
                    (tz[d][1] *= -1),
                    (tz[d][2] *= -1);
              (o[0] =
                0.5 *
                Math.sqrt(Math.max(1 + tz[0][0] - tz[1][1] - tz[2][2], 0))),
                (o[1] =
                  0.5 *
                  Math.sqrt(Math.max(1 - tz[0][0] + tz[1][1] - tz[2][2], 0))),
                (o[2] =
                  0.5 *
                  Math.sqrt(Math.max(1 - tz[0][0] - tz[1][1] + tz[2][2], 0))),
                (o[3] =
                  0.5 *
                  Math.sqrt(Math.max(1 + tz[0][0] + tz[1][1] + tz[2][2], 0))),
                tz[2][1] > tz[1][2] && (o[0] = -o[0]),
                tz[0][2] > tz[2][0] && (o[1] = -o[1]),
                tz[1][0] > tz[0][1] && (o[2] = -o[2]);
            }
          })(
            0 === t.length
              ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
              : t.map(nd).reduce(nf),
            e,
            n,
            r,
            i,
            o,
          ),
          [[e, n, r, o, i]]
        );
      }
      var ny = (function () {
        function t(t, e) {
          for (
            var n = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
              ],
              r = 0;
            r < 4;
            r++
          )
            for (var i = 0; i < 4; i++)
              for (var o = 0; o < 4; o++) n[r][i] += e[r][o] * t[o][i];
          return n;
        }
        return function (e, n, r, i, o) {
          for (
            var a,
              s = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
              ],
              l = 0;
            l < 4;
            l++
          )
            s[l][3] = o[l];
          for (var l = 0; l < 3; l++)
            for (var u = 0; u < 3; u++) s[3][l] += e[u] * s[u][l];
          var c = i[0],
            h = i[1],
            p = i[2],
            d = i[3],
            f = [
              [1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [0, 0, 0, 1],
            ];
          (f[0][0] = 1 - 2 * (h * h + p * p)),
            (f[0][1] = 2 * (c * h - p * d)),
            (f[0][2] = 2 * (c * p + h * d)),
            (f[1][0] = 2 * (c * h + p * d)),
            (f[1][1] = 1 - 2 * (c * c + p * p)),
            (f[1][2] = 2 * (h * p - c * d)),
            (f[2][0] = 2 * (c * p - h * d)),
            (f[2][1] = 2 * (h * p + c * d)),
            (f[2][2] = 1 - 2 * (c * c + h * h)),
            (s = t(s, f));
          var v = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
          ];
          r[2] && ((v[2][1] = r[2]), (s = t(s, v))),
            r[1] && ((v[2][1] = 0), (v[2][0] = r[0]), (s = t(s, v))),
            r[0] && ((v[2][0] = 0), (v[1][0] = r[0]), (s = t(s, v)));
          for (var l = 0; l < 3; l++)
            for (var u = 0; u < 3; u++) s[l][u] *= n[l];
          return 0 == (a = s)[0][2] &&
            0 == a[0][3] &&
            0 == a[1][2] &&
            0 == a[1][3] &&
            0 == a[2][0] &&
            0 == a[2][1] &&
            1 == a[2][2] &&
            0 == a[2][3] &&
            0 == a[3][2] &&
            1 == a[3][3]
            ? [s[0][0], s[0][1], s[1][0], s[1][1], s[3][0], s[3][1]]
            : s[0].concat(s[1], s[2], s[3]);
        };
      })();
      function ng(t) {
        return t.toFixed(6).replace('.000000', '');
      }
      function nm(t, e) {
        var n, r;
        return (t.decompositionPair !== e &&
          ((t.decompositionPair = e), (n = nv(t))),
        e.decompositionPair !== t && ((e.decompositionPair = t), (r = nv(e))),
        null === n[0] || null === r[0])
          ? [
              [!1],
              [!0],
              function (n) {
                return n ? e[0].d : t[0].d;
              },
            ]
          : (n[0].push(0),
            r[0].push(1),
            [
              n,
              r,
              function (t) {
                var e = (function (t, e, n) {
                  var r = (function (t, e) {
                    for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[r];
                    return n;
                  })(t, e);
                  r = (0, ta.Z)(r, -1, 1);
                  var i = [];
                  if (1 === r) i = t;
                  else
                    for (
                      var o = Math.acos(r),
                        a = (1 * Math.sin(n * o)) / Math.sqrt(1 - r * r),
                        s = 0;
                      s < 4;
                      s++
                    )
                      i.push(t[s] * (Math.cos(n * o) - r * a) + e[s] * a);
                  return i;
                })(n[0][3], r[0][3], t[5]);
                return ny(t[0], t[1], t[2], e, t[4]).map(ng).join(',');
              },
            ]);
      }
      function nE(t) {
        return t.replace(/[xy]/, '');
      }
      function nx(t) {
        return t.replace(/(x|y|z|3d)?$/, '3d');
      }
      function nb(t, e, n) {
        var r = !1;
        if (!t.length || !e.length) {
          t.length || ((r = !0), (t = e), (e = []));
          for (var i = 0; i < t.length; i++)
            !(function (n) {
              var r = t[n],
                i = r.t,
                o = r.d,
                a = 'scale' === i.substring(0, 5) ? 1 : 0;
              e.push({
                t: i,
                d: o.map(function (t) {
                  return 'number' == typeof t ? em(a) : em(a, t.unit);
                }),
              });
            })(i);
        }
        var o = [],
          a = [],
          s = [];
        if (t.length !== e.length) {
          var l = nm(t, e);
          (o = [l[0]]), (a = [l[1]]), (s = [['matrix', [l[2]]]]);
        } else
          for (var i = 0; i < t.length; i++) {
            var u = t[i].t,
              c = e[i].t,
              h = t[i].d,
              p = e[i].d,
              d = nc[u],
              f = nc[c],
              v = void 0;
            if (
              ('perspective' === u && 'perspective' === c) ||
              (('matrix' === u || 'matrix3d' === u) &&
                ('matrix' === c || 'matrix3d' === c))
            ) {
              var l = nm([t[i]], [e[i]]);
              o.push(l[0]), a.push(l[1]), s.push(['matrix', [l[2]]]);
              continue;
            }
            if (u === c) v = u;
            else if (d[2] && f[2] && nE(u) === nE(c))
              (v = nE(u)), (h = d[2](h)), (p = f[2](p));
            else if (d[1] && f[1] && nx(u) === nx(c))
              (v = nx(u)), (h = d[1](h)), (p = f[1](p));
            else {
              var l = nm(t, e);
              (o = [l[0]]), (a = [l[1]]), (s = [['matrix', [l[2]]]]);
              break;
            }
            for (var y = [], g = [], m = [], E = 0; E < h.length; E++) {
              var l = (function (t, e, n, r, i) {
                void 0 === i && (i = 0);
                var o = '',
                  a = t.value || 0,
                  s = e.value || 0,
                  l = es(t.unit),
                  u = t.convertTo(l),
                  c = e.convertTo(l);
                return (
                  u && c
                    ? ((a = u.value), (s = c.value), (o = t9(t.unit)))
                    : (el.isLength(t.unit) || el.isLength(e.unit)) &&
                      ((a = eW(t, i, n)), (s = eW(e, i, n)), (o = 'px')),
                  [
                    a,
                    s,
                    function (t) {
                      return r && (t = Math.max(t, 0)), t + o;
                    },
                  ]
                );
              })(h[E], p[E], n, !1, E);
              (y[E] = l[0]), (g[E] = l[1]), m.push(l[2]);
            }
            o.push(y), a.push(g), s.push([v, m]);
          }
        if (r) {
          var x = o;
          (o = a), (a = x);
        }
        return [
          o,
          a,
          function (t) {
            return t
              .map(function (t, e) {
                var n = t
                  .map(function (t, n) {
                    return s[e][1][n](t);
                  })
                  .join(',');
                return (
                  'matrix' === s[e][0] &&
                    16 === n.split(',').length &&
                    (s[e][0] = 'matrix3d'),
                  'matrix3d' === s[e][0] &&
                    6 === n.split(',').length &&
                    (s[e][0] = 'matrix'),
                  s[e][0] + '(' + n + ')'
                );
              })
              .join(' ');
          },
        ];
      }
      var nT = t1(function (t) {
          if (!(0, to.Z)(t)) return [em(t[0] || 0, 'px'), em(t[1] || 0, 'px')];
          if ('text-anchor' === t) return [em(0, 'px'), em(0, 'px')];
          var e = t.split(' ');
          return (1 === e.length &&
            ('top' === e[0] || 'bottom' === e[0]
              ? ((e[1] = e[0]), (e[0] = 'center'))
              : (e[1] = 'center')),
          2 !== e.length)
            ? null
            : [eB(nS(e[0])), eB(nS(e[1]))];
        }),
        nP = function (t) {
          if (!(0, to.Z)(t)) return [em(t[0] || 0, 'px'), em(t[1] || 0, 'px')];
          if ('text-anchor' === t) return [em(0, 'px'), em(0, 'px')];
          var e = t.split(' ');
          return (1 === e.length &&
            ('top' === e[0] || 'bottom' === e[0]
              ? ((e[1] = e[0]), (e[0] = 'center'))
              : (e[1] = 'center')),
          2 !== e.length)
            ? null
            : [eF(nS(e[0])), eF(nS(e[1]))];
        };
      function nS(t) {
        return 'center' === t
          ? '50%'
          : 'left' === t || 'top' === t
            ? '0%'
            : 'right' === t || 'bottom' === t
              ? '100%'
              : t;
      }
      var nN = [
          { n: 'display', k: ['none'] },
          { n: 'opacity', int: !0, inh: !0, d: '1', syntax: j.OPACITY_VALUE },
          {
            n: 'fillOpacity',
            int: !0,
            inh: !0,
            d: '1',
            syntax: j.OPACITY_VALUE,
          },
          {
            n: 'strokeOpacity',
            int: !0,
            inh: !0,
            d: '1',
            syntax: j.OPACITY_VALUE,
          },
          { n: 'fill', int: !0, k: ['none'], d: 'none', syntax: j.PAINT },
          { n: 'fillRule', k: ['nonzero', 'evenodd'], d: 'nonzero' },
          {
            n: 'stroke',
            int: !0,
            k: ['none'],
            d: 'none',
            syntax: j.PAINT,
            l: !0,
          },
          { n: 'shadowType', k: ['inner', 'outer', 'both'], d: 'outer', l: !0 },
          { n: 'shadowColor', int: !0, syntax: j.COLOR },
          {
            n: 'shadowOffsetX',
            int: !0,
            l: !0,
            d: '0',
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'shadowOffsetY',
            int: !0,
            l: !0,
            d: '0',
            syntax: j.LENGTH_PERCENTAGE,
          },
          { n: 'shadowBlur', int: !0, l: !0, d: '0', syntax: j.SHADOW_BLUR },
          {
            n: 'lineWidth',
            int: !0,
            inh: !0,
            d: '1',
            l: !0,
            a: ['strokeWidth'],
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'increasedLineWidthForHitTesting',
            inh: !0,
            d: '0',
            l: !0,
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'lineJoin',
            inh: !0,
            l: !0,
            a: ['strokeLinejoin'],
            k: ['miter', 'bevel', 'round'],
            d: 'miter',
          },
          {
            n: 'lineCap',
            inh: !0,
            l: !0,
            a: ['strokeLinecap'],
            k: ['butt', 'round', 'square'],
            d: 'butt',
          },
          {
            n: 'lineDash',
            int: !0,
            inh: !0,
            k: ['none'],
            a: ['strokeDasharray'],
            syntax: j.LENGTH_PERCENTAGE_12,
          },
          {
            n: 'lineDashOffset',
            int: !0,
            inh: !0,
            d: '0',
            a: ['strokeDashoffset'],
            syntax: j.LENGTH_PERCENTAGE,
          },
          { n: 'offsetPath', syntax: j.DEFINED_PATH },
          { n: 'offsetDistance', int: !0, syntax: j.OFFSET_DISTANCE },
          { n: 'dx', int: !0, l: !0, d: '0', syntax: j.LENGTH_PERCENTAGE },
          { n: 'dy', int: !0, l: !0, d: '0', syntax: j.LENGTH_PERCENTAGE },
          {
            n: 'zIndex',
            ind: !0,
            int: !0,
            d: '0',
            k: ['auto'],
            syntax: j.Z_INDEX,
          },
          {
            n: 'visibility',
            k: ['visible', 'hidden'],
            ind: !0,
            inh: !0,
            int: !0,
            d: 'visible',
          },
          {
            n: 'pointerEvents',
            inh: !0,
            k: [
              'none',
              'auto',
              'stroke',
              'fill',
              'painted',
              'visible',
              'visiblestroke',
              'visiblefill',
              'visiblepainted',
              'all',
            ],
            d: 'auto',
          },
          {
            n: 'filter',
            ind: !0,
            l: !0,
            k: ['none'],
            d: 'none',
            syntax: j.FILTER,
          },
          { n: 'clipPath', syntax: j.DEFINED_PATH },
          { n: 'textPath', syntax: j.DEFINED_PATH },
          { n: 'textPathSide', k: ['left', 'right'], d: 'left' },
          {
            n: 'textPathStartOffset',
            l: !0,
            d: '0',
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'transform',
            p: 100,
            int: !0,
            k: ['none'],
            d: 'none',
            syntax: j.TRANSFORM,
          },
          {
            n: 'transformOrigin',
            p: 100,
            d: '0 0',
            l: !0,
            syntax: j.TRANSFORM_ORIGIN,
          },
          { n: 'cx', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          { n: 'cy', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          { n: 'cz', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          { n: 'r', int: !0, l: !0, d: '0', syntax: j.LENGTH_PERCENTAGE },
          { n: 'rx', int: !0, l: !0, d: '0', syntax: j.LENGTH_PERCENTAGE },
          { n: 'ry', int: !0, l: !0, d: '0', syntax: j.LENGTH_PERCENTAGE },
          { n: 'x', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          { n: 'y', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          { n: 'z', int: !0, l: !0, d: '0', syntax: j.COORDINATE },
          {
            n: 'width',
            int: !0,
            l: !0,
            k: ['auto', 'fit-content', 'min-content', 'max-content'],
            d: '0',
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'height',
            int: !0,
            l: !0,
            k: ['auto', 'fit-content', 'min-content', 'max-content'],
            d: '0',
            syntax: j.LENGTH_PERCENTAGE,
          },
          {
            n: 'radius',
            int: !0,
            l: !0,
            d: '0',
            syntax: j.LENGTH_PERCENTAGE_14,
          },
          { n: 'x1', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'y1', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'z1', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'x2', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'y2', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'z2', int: !0, l: !0, syntax: j.COORDINATE },
          { n: 'd', int: !0, l: !0, d: '', syntax: j.PATH, p: 50 },
          { n: 'points', int: !0, l: !0, syntax: j.LIST_OF_POINTS, p: 50 },
          { n: 'text', l: !0, d: '', syntax: j.TEXT, p: 50 },
          {
            n: 'textTransform',
            l: !0,
            inh: !0,
            k: ['capitalize', 'uppercase', 'lowercase', 'none'],
            d: 'none',
            syntax: j.TEXT_TRANSFORM,
            p: 51,
          },
          { n: 'font', l: !0 },
          {
            n: 'fontSize',
            int: !0,
            inh: !0,
            d: '16px',
            l: !0,
            syntax: j.LENGTH_PERCENTAGE,
          },
          { n: 'fontFamily', l: !0, inh: !0, d: 'sans-serif' },
          {
            n: 'fontStyle',
            l: !0,
            inh: !0,
            k: ['normal', 'italic', 'oblique'],
            d: 'normal',
          },
          {
            n: 'fontWeight',
            l: !0,
            inh: !0,
            k: ['normal', 'bold', 'bolder', 'lighter'],
            d: 'normal',
          },
          {
            n: 'fontVariant',
            l: !0,
            inh: !0,
            k: ['normal', 'small-caps'],
            d: 'normal',
          },
          { n: 'lineHeight', l: !0, syntax: j.LENGTH, int: !0, d: '0' },
          { n: 'letterSpacing', l: !0, syntax: j.LENGTH, int: !0, d: '0' },
          {
            n: 'miterLimit',
            l: !0,
            syntax: j.NUMBER,
            d: function (t) {
              return t === C.PATH || t === C.POLYGON || t === C.POLYLINE
                ? '4'
                : '10';
            },
          },
          { n: 'wordWrap', l: !0 },
          { n: 'wordWrapWidth', l: !0 },
          { n: 'maxLines', l: !0 },
          { n: 'textOverflow', l: !0, d: 'clip' },
          { n: 'leading', l: !0 },
          {
            n: 'textBaseline',
            l: !0,
            inh: !0,
            k: [
              'top',
              'hanging',
              'middle',
              'alphabetic',
              'ideographic',
              'bottom',
            ],
            d: 'alphabetic',
          },
          {
            n: 'textAlign',
            l: !0,
            inh: !0,
            k: ['start', 'center', 'middle', 'end', 'left', 'right'],
            d: 'start',
          },
          { n: 'markerStart', syntax: j.MARKER },
          { n: 'markerEnd', syntax: j.MARKER },
          { n: 'markerMid', syntax: j.MARKER },
          { n: 'markerStartOffset', syntax: j.LENGTH, l: !0, int: !0, d: '0' },
          { n: 'markerEndOffset', syntax: j.LENGTH, l: !0, int: !0, d: '0' },
        ],
        nw = nN
          .filter(function (t) {
            return !!t.l;
          })
          .map(function (t) {
            return t.n;
          }),
        nk = {},
        nM = new WeakMap(),
        nC = function (t, e) {
          var n = nM.get(t);
          return !n || 0 === n.length || n.includes(e);
        },
        n_ = (function () {
          function t(t) {
            var e = this;
            (this.runtime = t),
              nN.forEach(function (t) {
                e.registerMetadata(t);
              });
          }
          return (
            (t.prototype.registerMetadata = function (t) {
              (0, H.__spreadArray)([t.n], (0, H.__read)(t.a || []), !1).forEach(
                function (e) {
                  nk[e] = t;
                },
              );
            }),
            (t.prototype.unregisterMetadata = function (t) {
              delete nk[t];
            }),
            (t.prototype.getPropertySyntax = function (t) {
              return this.runtime.CSSPropertySyntaxFactory[t];
            }),
            (t.prototype.processProperties = function (t, e, n) {
              var r = this;
              if (
                (void 0 === n &&
                  (n = {
                    skipUpdateAttribute: !1,
                    skipParse: !1,
                    forceUpdateGeometry: !1,
                    usedAttributes: [],
                    memoize: !0,
                  }),
                this.runtime.enableCSSParsing)
              ) {
                var i = n.skipUpdateAttribute,
                  o = n.skipParse,
                  a = n.forceUpdateGeometry,
                  s = n.usedAttributes,
                  l = n.memoize,
                  u = a,
                  c = Object.keys(e);
                c.forEach(function (n) {
                  var r;
                  i || (t.attributes[n] = e[n]),
                    !u &&
                      (null === (r = nk[n]) || void 0 === r ? void 0 : r.l) &&
                      (u = !0);
                }),
                  o ||
                    c.forEach(function (e) {
                      t.computedStyle[e] = r.parseProperty(
                        e,
                        t.attributes[e],
                        t,
                        l,
                      );
                    }),
                  (null == s ? void 0 : s.length) &&
                    (c = Array.from(new Set(c.concat(s)))),
                  c.forEach(function (e) {
                    e in t.computedStyle &&
                      (t.parsedStyle[e] = r.computeProperty(
                        e,
                        t.computedStyle[e],
                        t,
                        l,
                      ));
                  }),
                  u &&
                    ((t.geometry.dirty = !0),
                    (t.renderable.boundsDirty = !0),
                    (t.renderable.renderBoundsDirty = !0),
                    n.forceUpdateGeometry ||
                      this.runtime.sceneGraphService.dirtifyToRoot(t)),
                  c.forEach(function (e) {
                    e in t.parsedStyle && r.postProcessProperty(e, t, c);
                  }),
                  this.runtime.enableCSSParsing &&
                    t.children.length &&
                    c.forEach(function (e) {
                      e in t.parsedStyle &&
                        r.isPropertyInheritable(e) &&
                        t.children.forEach(function (t) {
                          t.internalSetAttribute(e, null, {
                            skipUpdateAttribute: !0,
                            skipParse: !0,
                          });
                        });
                    });
              } else {
                Object.assign(t.attributes, e);
                var h = Object.keys(e),
                  p = t.parsedStyle.clipPath,
                  d = t.parsedStyle.offsetPath;
                t.parsedStyle = Object.assign(t.parsedStyle, e);
                var f = !!n.forceUpdateGeometry;
                if (!f) {
                  for (var v = 0; v < nw.length; v++)
                    if (nw[v] in e) {
                      f = !0;
                      break;
                    }
                }
                e.fill && (t.parsedStyle.fill = eO(e.fill)),
                  e.stroke && (t.parsedStyle.stroke = eO(e.stroke)),
                  e.shadowColor &&
                    (t.parsedStyle.shadowColor = eO(e.shadowColor)),
                  e.filter && (t.parsedStyle.filter = eZ(e.filter)),
                  (0, ti.Z)(e.radius) ||
                    (t.parsedStyle.radius = ez(e.radius, 4)),
                  (0, ti.Z)(e.lineDash) ||
                    (t.parsedStyle.lineDash = ez(e.lineDash, 2)),
                  e.points && (t.parsedStyle.points = na(e.points)),
                  '' === e.d && (t.parsedStyle.d = (0, H.__assign)({}, eE)),
                  e.d && (t.parsedStyle.d = ni(e.d)),
                  e.textTransform &&
                    this.runtime.CSSPropertySyntaxFactory[
                      '<text-transform>'
                    ].calculator(
                      null,
                      null,
                      { value: e.textTransform },
                      t,
                      null,
                    ),
                  (0, tE.Z)(e.clipPath) ||
                    this.runtime.CSSPropertySyntaxFactory[
                      '<defined-path>'
                    ].calculator('clipPath', p, e.clipPath, t, this.runtime),
                  e.offsetPath &&
                    this.runtime.CSSPropertySyntaxFactory[
                      '<defined-path>'
                    ].calculator(
                      'offsetPath',
                      d,
                      e.offsetPath,
                      t,
                      this.runtime,
                    ),
                  e.transform && (t.parsedStyle.transform = nh(e.transform)),
                  e.transformOrigin &&
                    (t.parsedStyle.transformOrigin = nT(e.transformOrigin)),
                  e.markerStart &&
                    (t.parsedStyle.markerStart =
                      this.runtime.CSSPropertySyntaxFactory[
                        '<marker>'
                      ].calculator(
                        null,
                        e.markerStart,
                        e.markerStart,
                        null,
                        null,
                      )),
                  e.markerEnd &&
                    (t.parsedStyle.markerEnd =
                      this.runtime.CSSPropertySyntaxFactory[
                        '<marker>'
                      ].calculator(null, e.markerEnd, e.markerEnd, null, null)),
                  e.markerMid &&
                    (t.parsedStyle.markerMid =
                      this.runtime.CSSPropertySyntaxFactory[
                        '<marker>'
                      ].calculator('', e.markerMid, e.markerMid, null, null)),
                  (0, ti.Z)(e.zIndex) ||
                    this.runtime.CSSPropertySyntaxFactory[
                      '<z-index>'
                    ].postProcessor(t, h),
                  (0, ti.Z)(e.offsetDistance) ||
                    this.runtime.CSSPropertySyntaxFactory[
                      '<offset-distance>'
                    ].postProcessor(t, h),
                  e.transform &&
                    this.runtime.CSSPropertySyntaxFactory[
                      '<transform>'
                    ].postProcessor(t, h),
                  e.transformOrigin &&
                    this.runtime.CSSPropertySyntaxFactory[
                      '<transform-origin>'
                    ].postProcessor(t, h),
                  f &&
                    ((t.geometry.dirty = !0),
                    (t.renderable.boundsDirty = !0),
                    (t.renderable.renderBoundsDirty = !0),
                    n.forceUpdateGeometry ||
                      this.runtime.sceneGraphService.dirtifyToRoot(t));
              }
            }),
            (t.prototype.parseProperty = function (t, e, n, r) {
              var i = nk[t],
                o = e;
              if (
                (('' === e || (0, ti.Z)(e)) && (e = 'unset'),
                'unset' === e || 'initial' === e || 'inherit' === e)
              )
                o = ef(e);
              else if (i) {
                var a = i.k,
                  s = i.syntax,
                  l = s && this.getPropertySyntax(s);
                a && a.indexOf(e) > -1
                  ? (o = ef(e))
                  : l &&
                    (!r && l.parserUnmemoize
                      ? (o = l.parserUnmemoize(e, n))
                      : l.parser && (o = l.parser(e, n)));
              }
              return o;
            }),
            (t.prototype.computeProperty = function (t, e, n, r) {
              var i = nk[t],
                o = 'g-root' === n.id,
                a = e;
              if (i) {
                var s = i.syntax,
                  l = i.inh,
                  u = i.d;
                if (e instanceof et) {
                  var c = e.value;
                  if (
                    ('unset' === c && (c = l && !o ? 'inherit' : 'initial'),
                    'initial' === c)
                  )
                    (0, ti.Z)(u) ||
                      (e = this.parseProperty(
                        t,
                        er(u) ? u(n.nodeName) : u,
                        n,
                        r,
                      ));
                  else if ('inherit' === c) {
                    var h = this.tryToResolveProperty(n, t, { inherited: !0 });
                    return (0, ti.Z)(h)
                      ? void this.addUnresolveProperty(n, t)
                      : h;
                  }
                }
                var p = s && this.getPropertySyntax(s);
                if (p && p.calculator) {
                  var d = n.parsedStyle[t];
                  a = p.calculator(t, d, e, n, this.runtime);
                } else a = e instanceof et ? e.value : e;
              }
              return a;
            }),
            (t.prototype.postProcessProperty = function (t, e, n) {
              var r = nk[t];
              if (r && r.syntax) {
                var i = r.syntax && this.getPropertySyntax(r.syntax);
                i && i.postProcessor && i.postProcessor(e, n);
              }
            }),
            (t.prototype.addUnresolveProperty = function (t, e) {
              var n = nM.get(t);
              n || (nM.set(t, []), (n = nM.get(t))),
                -1 === n.indexOf(e) && n.push(e);
            }),
            (t.prototype.tryToResolveProperty = function (t, e, n) {
              if (
                (void 0 === n && (n = {}),
                n.inherited && t.parentElement && nC(t.parentElement, e))
              ) {
                var r = t.parentElement.parsedStyle[e];
                if ('unset' !== r && 'initial' !== r && 'inherit' !== r)
                  return r;
              }
            }),
            (t.prototype.recalc = function (t) {
              var e = nM.get(t);
              if (e && e.length) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.attributes[e];
                }),
                  this.processProperties(t, n),
                  nM.delete(t);
              }
            }),
            (t.prototype.updateGeometry = function (t) {
              var e = t.nodeName,
                n = this.runtime.geometryUpdaterFactory[e];
              if (n) {
                var r = t.geometry;
                r.contentBounds || (r.contentBounds = new tX()),
                  r.renderBounds || (r.renderBounds = new tX());
                var i = t.parsedStyle,
                  o = n.update(i, t),
                  a = o.cx,
                  s = o.cy,
                  l = o.cz,
                  u = o.hwidth,
                  c = void 0 === u ? 0 : u,
                  h = o.hheight,
                  p = void 0 === h ? 0 : h,
                  d = o.hdepth,
                  f = [Math.abs(c), Math.abs(p), void 0 === d ? 0 : d],
                  v = i.stroke,
                  y = i.lineWidth,
                  g = i.increasedLineWidthForHitTesting,
                  m = i.shadowType,
                  E = void 0 === m ? 'outer' : m,
                  x = i.shadowColor,
                  b = i.filter,
                  T = i.transformOrigin,
                  P = [
                    void 0 === a ? 0 : a,
                    void 0 === s ? 0 : s,
                    void 0 === l ? 0 : l,
                  ];
                r.contentBounds.update(P, f);
                var S =
                  e === C.POLYLINE || e === C.POLYGON || e === C.PATH
                    ? Math.SQRT2
                    : 0.5;
                if (v && !v.isNone) {
                  var N =
                    (((void 0 === y ? 1 : y) || 0) +
                      ((void 0 === g ? 0 : g) || 0)) *
                    S;
                  (f[0] += N), (f[1] += N);
                }
                if ((r.renderBounds.update(P, f), x && E && 'inner' !== E)) {
                  var w = r.renderBounds,
                    k = w.min,
                    M = w.max,
                    _ = i.shadowBlur,
                    A = i.shadowOffsetX,
                    R = i.shadowOffsetY,
                    O = _ || 0,
                    L = A || 0,
                    I = R || 0,
                    D = k[0] - O + L,
                    G = M[0] + O + L,
                    F = k[1] - O + I,
                    B = M[1] + O + I;
                  (k[0] = Math.min(k[0], D)),
                    (M[0] = Math.max(M[0], G)),
                    (k[1] = Math.min(k[1], F)),
                    (M[1] = Math.max(M[1], B)),
                    r.renderBounds.setMinMax(k, M);
                }
                (void 0 === b ? [] : b).forEach(function (t) {
                  var e = t.name,
                    n = t.params;
                  if ('blur' === e) {
                    var i = n[0].value;
                    r.renderBounds.update(
                      r.renderBounds.center,
                      tR(
                        r.renderBounds.halfExtents,
                        r.renderBounds.halfExtents,
                        [i, i, 0],
                      ),
                    );
                  } else if ('drop-shadow' === e) {
                    var o = n[0].value,
                      a = n[1].value,
                      s = n[2].value,
                      l = r.renderBounds,
                      u = l.min,
                      c = l.max,
                      h = u[0] - s + o,
                      p = c[0] + s + o,
                      d = u[1] - s + a,
                      f = c[1] + s + a;
                    (u[0] = Math.min(u[0], h)),
                      (c[0] = Math.max(c[0], p)),
                      (u[1] = Math.min(u[1], d)),
                      (c[1] = Math.max(c[1], f)),
                      r.renderBounds.setMinMax(u, c);
                  }
                }),
                  (t.geometry.dirty = !1);
                var U = p < 0,
                  V = (c < 0 ? -1 : 1) * (T ? eW(T[0], 0, t, !0) : 0),
                  Y = (U ? -1 : 1) * (T ? eW(T[1], 1, t, !0) : 0);
                (V || Y) && t.setOrigin(V, Y);
              }
            }),
            (t.prototype.updateSizeAttenuation = function (t, e) {
              t.style.isSizeAttenuation
                ? (t.style.rawLineWidth ||
                    (t.style.rawLineWidth = t.style.lineWidth),
                  (t.style.lineWidth = (t.style.rawLineWidth || 1) / e),
                  t.nodeName === C.CIRCLE &&
                    (t.style.rawR || (t.style.rawR = t.style.r),
                    (t.style.r = (t.style.rawR || 1) / e)))
                : (t.style.rawLineWidth &&
                    ((t.style.lineWidth = t.style.rawLineWidth),
                    delete t.style.rawLineWidth),
                  t.nodeName === C.CIRCLE &&
                    t.style.rawR &&
                    ((t.style.r = t.style.rawR), delete t.style.rawR));
            }),
            (t.prototype.isPropertyInheritable = function (t) {
              var e = nk[t];
              return !!e && e.inh;
            }),
            t
          );
        })(),
        nA = (function () {
          function t() {
            (this.parser = eV),
              (this.parserUnmemoize = eU),
              (this.parserWithCSSDisabled = null),
              (this.mixer = eJ);
          }
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              return eY(n);
            }),
            t
          );
        })(),
        nR = (function () {
          function t() {}
          return (
            (t.prototype.calculator = function (t, e, n, r, i) {
              return (
                n instanceof et && (n = null),
                i.sceneGraphService.updateDisplayObjectDependency(t, e, n, r),
                'clipPath' === t &&
                  r.forEach(function (t) {
                    0 === t.childNodes.length &&
                      i.sceneGraphService.dirtifyToRoot(t);
                  }),
                n
              );
            }),
            t
          );
        })(),
        nO = (function () {
          function t() {
            (this.parser = eO),
              (this.parserWithCSSDisabled = eO),
              (this.mixer = eL);
          }
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              return n instanceof et ? ('none' === n.value ? ev : ey) : n;
            }),
            t
          );
        })(),
        nL = (function () {
          function t() {
            this.parser = eZ;
          }
          return (
            (t.prototype.calculator = function (t, e, n) {
              return n instanceof et ? [] : n;
            }),
            t
          );
        })();
      function nI(t) {
        var e = t.parsedStyle.fontSize;
        return (0, ti.Z)(e) ? null : e;
      }
      var nD = (function () {
          function t() {
            (this.parser = eB),
              (this.parserUnmemoize = eF),
              (this.parserWithCSSDisabled = null),
              (this.mixer = eJ);
          }
          return (
            (t.prototype.calculator = function (t, e, n, r, i) {
              if ((0, tn.Z)(n)) return n;
              if (!el.isRelativeUnit(n.unit)) return n.value;
              var o,
                a = i.styleValueRegistry;
              if (n.unit === I.kPercentage) return 0;
              if (n.unit === I.kEms) {
                if (r.parentNode) {
                  var s = nI(r.parentNode);
                  if (s) return s * n.value;
                  a.addUnresolveProperty(r, t);
                } else a.addUnresolveProperty(r, t);
                return 0;
              }
              if (n.unit === I.kRems) {
                if (
                  null === (o = null == r ? void 0 : r.ownerDocument) ||
                  void 0 === o
                    ? void 0
                    : o.documentElement
                ) {
                  var s = nI(r.ownerDocument.documentElement);
                  if (s) return s * n.value;
                  a.addUnresolveProperty(r, t);
                } else a.addUnresolveProperty(r, t);
                return 0;
              }
            }),
            t
          );
        })(),
        nG = (function () {
          function t() {
            this.mixer = eQ;
          }
          return (
            (t.prototype.parser = function (t) {
              var e = ej((0, tn.Z)(t) ? [t] : t);
              return 1 === e.length ? [e[0], e[0]] : [e[0], e[1]];
            }),
            (t.prototype.calculator = function (t, e, n) {
              return n.map(function (t) {
                return t.value;
              });
            }),
            t
          );
        })(),
        nF = (function () {
          function t() {
            this.mixer = eQ;
          }
          return (
            (t.prototype.parser = function (t) {
              var e = ej((0, tn.Z)(t) ? [t] : t);
              return 1 === e.length
                ? [e[0], e[0], e[0], e[0]]
                : 2 === e.length
                  ? [e[0], e[1], e[0], e[1]]
                  : 3 === e.length
                    ? [e[0], e[1], e[2], e[1]]
                    : [e[0], e[1], e[2], e[3]];
            }),
            (t.prototype.calculator = function (t, e, n) {
              return n.map(function (t) {
                return t.value;
              });
            }),
            t
          );
        })(),
        nB = (function () {
          function t() {}
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              n instanceof et && (n = null);
              var i = null == n ? void 0 : n.cloneNode(!0);
              return i && (i.style.isMarker = !0), i;
            }),
            t
          );
        })(),
        nU = (function () {
          function t() {
            (this.mixer = eJ),
              (this.parser = eK),
              (this.parserUnmemoize = eq),
              (this.parserWithCSSDisabled = null);
          }
          return (
            (t.prototype.calculator = function (t, e, n) {
              return n.value;
            }),
            t
          );
        })(),
        nV = (function () {
          function t() {
            (this.parser = eK),
              (this.parserUnmemoize = eq),
              (this.parserWithCSSDisabled = null),
              (this.mixer = e$(0, 1));
          }
          return (
            (t.prototype.calculator = function (t, e, n) {
              return n.value;
            }),
            (t.prototype.postProcessor = function (t) {
              var e = t.parsedStyle,
                n = e.offsetPath,
                r = e.offsetDistance;
              if (n) {
                var i = n.nodeName;
                if (i === C.LINE || i === C.PATH || i === C.POLYLINE) {
                  var o = n.getPoint(r);
                  o && t.setLocalPosition(o.x, o.y);
                }
              }
            }),
            t
          );
        })(),
        nY = (function () {
          function t() {
            (this.parser = eK),
              (this.parserUnmemoize = eq),
              (this.parserWithCSSDisabled = null),
              (this.mixer = e$(0, 1));
          }
          return (
            (t.prototype.calculator = function (t, e, n) {
              return n.value;
            }),
            t
          );
        })(),
        nz = (function () {
          function t() {
            (this.parser = ni),
              (this.parserWithCSSDisabled = ni),
              (this.mixer = no);
          }
          return (
            (t.prototype.calculator = function (t, e, n) {
              return n instanceof et && 'unset' === n.value
                ? {
                    absolutePath: [],
                    hasArc: !1,
                    segments: [],
                    polygons: [],
                    polylines: [],
                    curve: null,
                    totalLength: 0,
                    rect: new tK(0, 0, 0, 0),
                  }
                : n;
            }),
            t
          );
        })(),
        nj = (function (t) {
          function e() {
            var e =
              t.apply(
                this,
                (0, H.__spreadArray)([], (0, H.__read)(arguments), !1),
              ) || this;
            return (e.mixer = e$(0, 1 / 0)), e;
          }
          return (0, H.__extends)(e, t), e;
        })(nD),
        nW = (function () {
          function t() {}
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              return n instanceof et
                ? 'unset' === n.value
                  ? ''
                  : n.value
                : ''.concat(n);
            }),
            (t.prototype.postProcessor = function (t) {
              t.nodeValue = ''.concat(t.parsedStyle.text) || '';
            }),
            t
          );
        })(),
        nX = (function () {
          function t() {}
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              var i = r.getAttribute('text');
              if (i) {
                var o = i;
                'capitalize' === n.value
                  ? (o = i.charAt(0).toUpperCase() + i.slice(1))
                  : 'lowercase' === n.value
                    ? (o = i.toLowerCase())
                    : 'uppercase' === n.value && (o = i.toUpperCase()),
                  (r.parsedStyle.text = o);
              }
              return n.value;
            }),
            t
          );
        })(),
        nZ = {},
        nH = 0,
        nq = 'undefined' != typeof window && void 0 !== window.document;
      function nK(t, e) {
        var n = Number(t.parsedStyle.zIndex || 0),
          r = Number(e.parsedStyle.zIndex || 0);
        if (n === r) {
          var i = t.parentNode;
          if (i) {
            var o = i.childNodes || [];
            return o.indexOf(t) - o.indexOf(e);
          }
        }
        return n - r;
      }
      function nJ(t) {
        var e,
          n = t;
        do {
          if (
            null === (e = n.parsedStyle) || void 0 === e ? void 0 : e.clipPath
          )
            return n;
          n = n.parentElement;
        } while (null !== n);
        return null;
      }
      function n$(t, e, n) {
        nq &&
          t.style &&
          ((t.style.width = e + 'px'), (t.style.height = n + 'px'));
      }
      function nQ(t, e) {
        if (nq)
          return document.defaultView
            .getComputedStyle(t, null)
            .getPropertyValue(e);
      }
      var n0 = {
          touchstart: 'pointerdown',
          touchend: 'pointerup',
          touchendoutside: 'pointerupoutside',
          touchmove: 'pointermove',
          touchcancel: 'pointercancel',
        },
        n1 =
          'object' == typeof performance && performance.now
            ? performance
            : Date;
      function n2(t, e, n) {
        void 0 === t && (t = 'auto');
        var r = !1,
          i = !1,
          o = !!e && !e.isNone,
          a = !!n && !n.isNone;
        return (
          'visiblepainted' === t || 'painted' === t || 'auto' === t
            ? ((r = o), (i = a))
            : 'visiblefill' === t || 'fill' === t
              ? (r = !0)
              : 'visiblestroke' === t || 'stroke' === t
                ? (i = !0)
                : ('visible' === t || 'all' === t) && ((r = !0), (i = !0)),
          [r, i]
        );
      }
      var n3 = 1,
        n5 =
          'object' == typeof self && self.self == self
            ? self
            : 'object' == typeof n.g && n.g.global == n.g
              ? n.g
              : {},
        n4 = Date.now(),
        n9 = {},
        n6 = Date.now(),
        n8 = function (t) {
          if ('function' != typeof t) throw TypeError(t + ' is not a function');
          var e = Date.now(),
            n = e - n6,
            r = n3++;
          return (
            (n9[r] = t),
            Object.keys(n9).length > 1 ||
              setTimeout(
                function () {
                  n6 = e;
                  var t = n9;
                  (n9 = {}),
                    Object.keys(t).forEach(function (e) {
                      return t[e](
                        n5.performance &&
                          'function' == typeof n5.performance.now
                          ? n5.performance.now()
                          : Date.now() - n4,
                      );
                    });
                },
                n > 16 ? 0 : 16 - n,
              ),
            r
          );
        },
        n7 = function (t) {
          return 'string' != typeof t
            ? n8
            : '' === t
              ? n5.requestAnimationFrame
              : n5[t + 'RequestAnimationFrame'];
        },
        rt = (function (t, e) {
          for (var n = 0; void 0 !== t[n]; ) {
            if (e(t[n])) return t[n];
            n += 1;
          }
        })(['', 'webkit', 'moz', 'ms', 'o'], function (t) {
          return !!n7(t);
        }),
        re = n7(rt),
        rn =
          'string' != typeof rt
            ? function (t) {
                delete n9[t];
              }
            : '' === rt
              ? n5.cancelAnimationFrame
              : n5[rt + 'CancelAnimationFrame'] ||
                n5[rt + 'CancelRequestAnimationFrame'];
      (n5.requestAnimationFrame = re), (n5.cancelAnimationFrame = rn);
      var rr = (function () {
          function t() {
            this.callbacks = [];
          }
          return (
            (t.prototype.getCallbacksNum = function () {
              return this.callbacks.length;
            }),
            (t.prototype.tapPromise = function (t, e) {
              this.callbacks.push(e);
            }),
            (t.prototype.promise = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return Promise.all(
                this.callbacks.map(function (e) {
                  return e.apply(
                    void 0,
                    (0, H.__spreadArray)([], (0, H.__read)(t), !1),
                  );
                }),
              );
            }),
            t
          );
        })(),
        ri = (function () {
          function t() {
            this.callbacks = [];
          }
          return (
            (t.prototype.tapPromise = function (t, e) {
              this.callbacks.push(e);
            }),
            (t.prototype.promise = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return (0, H.__awaiter)(this, void 0, void 0, function () {
                var e, n, r;
                return (0, H.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!this.callbacks.length) return [3, 6];
                      return [
                        4,
                        (r = this.callbacks)[0].apply(
                          r,
                          (0, H.__spreadArray)([], (0, H.__read)(t), !1),
                        ),
                      ];
                    case 1:
                      (e = i.sent()), (n = 0), (i.label = 2);
                    case 2:
                      if (!(n < this.callbacks.length - 1)) return [3, 5];
                      return [4, (0, this.callbacks[n])(e)];
                    case 3:
                      (e = i.sent()), (i.label = 4);
                    case 4:
                      return n++, [3, 2];
                    case 5:
                      return [2, e];
                    case 6:
                      return [2, null];
                  }
                });
              });
            }),
            t
          );
        })(),
        ro = (function () {
          function t() {
            this.callbacks = [];
          }
          return (
            (t.prototype.tap = function (t, e) {
              this.callbacks.push(e);
            }),
            (t.prototype.call = function () {
              var t = arguments;
              this.callbacks.forEach(function (e) {
                e.apply(void 0, t);
              });
            }),
            t
          );
        })(),
        ra = (function () {
          function t() {
            this.callbacks = [];
          }
          return (
            (t.prototype.tap = function (t, e) {
              this.callbacks.push(e);
            }),
            (t.prototype.call = function () {
              if (this.callbacks.length) {
                for (
                  var t = arguments,
                    e = this.callbacks[0].apply(void 0, t),
                    n = 0;
                  n < this.callbacks.length - 1;
                  n++
                )
                  e = (0, this.callbacks[n])(e);
                return e;
              }
              return null;
            }),
            t
          );
        })(),
        rs = [
          'serif',
          'sans-serif',
          'monospace',
          'cursive',
          'fantasy',
          'system-ui',
        ],
        rl = /([\"\'])[^\'\"]+\1/;
      function ru(t, e, n) {
        return J.identity(t), (t[4] = Math.tan(e)), (t[1] = Math.tan(n)), t;
      }
      var rc = J.create(),
        rh = J.create();
      function rp(t, e) {
        if (t.length) {
          var n = J.identity(rc);
          t.forEach(function (t) {
            var e = t.t,
              r = t.d;
            if ('scale' === e) {
              var i = (null == r
                ? void 0
                : r.map(function (t) {
                    return Math.max(t.value, 1e-5);
                  })) || [1, 1];
              J.fromScaling(rh, [i[0], i[1], 1]);
            } else if ('scalex' === e) {
              var i = (null == r
                ? void 0
                : r.map(function (t) {
                    return Math.max(t.value, 1e-5);
                  })) || [1];
              J.fromScaling(rh, [i[0], 1, 1]);
            } else if ('scaley' === e) {
              var i = (null == r
                ? void 0
                : r.map(function (t) {
                    return Math.max(t.value, 1e-5);
                  })) || [1];
              J.fromScaling(rh, [1, i[0], 1]);
            } else if ('scalez' === e) {
              var i = (null == r
                ? void 0
                : r.map(function (t) {
                    return Math.max(t.value, 1e-5);
                  })) || [1];
              J.fromScaling(rh, [1, 1, i[0]]);
            } else if ('scale3d' === e) {
              var i = (null == r
                ? void 0
                : r.map(function (t) {
                    return Math.max(t.value, 1e-5);
                  })) || [1, 1, 1];
              J.fromScaling(rh, [i[0], i[1], i[2]]);
            } else if ('translate' === e) {
              var o = r || [eu, eu];
              J.fromTranslation(rh, [o[0].value, o[1].value, 0]);
            } else if ('translatex' === e) {
              var o = r || [eu];
              J.fromTranslation(rh, [o[0].value, 0, 0]);
            } else if ('translatey' === e) {
              var o = r || [eu];
              J.fromTranslation(rh, [0, o[0].value, 0]);
            } else if ('translatez' === e) {
              var o = r || [eu];
              J.fromTranslation(rh, [0, 0, o[0].value]);
            } else if ('translate3d' === e) {
              var o = r || [eu, eu, eu];
              J.fromTranslation(rh, [o[0].value, o[1].value, o[2].value]);
            } else if ('rotate' === e) {
              var a = r || [ec];
              J.fromZRotation(rh, tD(eY(a[0])));
            } else if ('rotatex' === e) {
              var a = r || [ec];
              J.fromXRotation(rh, tD(eY(a[0])));
            } else if ('rotatey' === e) {
              var a = r || [ec];
              J.fromYRotation(rh, tD(eY(a[0])));
            } else if ('rotatez' === e) {
              var a = r || [ec];
              J.fromZRotation(rh, tD(eY(a[0])));
            } else if ('rotate3d' === e) {
              var a = r || [eu, eu, eu, ec];
              J.fromRotation(rh, tD(eY(a[3])), [
                a[0].value,
                a[1].value,
                a[2].value,
              ]);
            } else if ('skew' === e) {
              var s = (null == r
                ? void 0
                : r.map(function (t) {
                    return t.value;
                  })) || [0, 0];
              ru(rh, tD(s[0]), tD(s[1]));
            } else if ('skewx' === e) {
              var s = (null == r
                ? void 0
                : r.map(function (t) {
                    return t.value;
                  })) || [0];
              ru(rh, tD(s[0]), 0);
            } else if ('skewy' === e) {
              var s = (null == r
                ? void 0
                : r.map(function (t) {
                    return t.value;
                  })) || [0];
              ru(rh, 0, tD(s[0]));
            } else if ('matrix' === e) {
              var l = (0, H.__read)(
                  r.map(function (t) {
                    return t.value;
                  }),
                  6,
                ),
                u = l[0],
                c = l[1],
                h = l[2],
                p = l[3],
                d = l[4],
                f = l[5];
              J.set(rh, u, c, 0, 0, h, p, 0, 0, 0, 0, 1, 0, d, f, 0, 1);
            } else
              'matrix3d' === e &&
                J.set.apply(
                  J,
                  (0, H.__spreadArray)(
                    [rh],
                    (0, H.__read)(
                      r.map(function (t) {
                        return t.value;
                      }),
                    ),
                    !1,
                  ),
                );
            J.mul(n, n, rh);
          }),
            e.setLocalTransform(n);
        } else e.resetLocalTransform();
        return e.getLocalTransform();
      }
      var rd = (function () {
          function t() {
            (this.parser = nh),
              (this.parserUnmemoize = np),
              (this.parserWithCSSDisabled = np),
              (this.mixer = nb);
          }
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              return n instanceof et ? [] : n;
            }),
            (t.prototype.postProcessor = function (t) {
              rp(t.parsedStyle.transform, t);
            }),
            t
          );
        })(),
        rf = (function () {
          function t() {
            (this.parser = nT), (this.parserUnmemoize = nP);
          }
          return (
            (t.prototype.postProcessor = function (t) {
              var e = t.parsedStyle.transformOrigin;
              e[0].unit === I.kPixels && e[1].unit === I.kPixels
                ? t.setOrigin(e[0].value, e[1].value)
                : t.getGeometryBounds();
            }),
            t
          );
        })(),
        rv = (function () {
          function t() {
            (this.parser = eK), (this.parserUnmemoize = eq);
          }
          return (
            (t.prototype.calculator = function (t, e, n, r) {
              return n.value;
            }),
            (t.prototype.postProcessor = function (t) {
              if (t.parentNode) {
                var e = t.parentNode,
                  n = e.renderable,
                  r = e.sortable;
                n && (n.dirty = !0),
                  r && ((r.dirty = !0), (r.dirtyReason = z.Z_INDEX_CHANGED));
              }
            }),
            t
          );
        })(),
        ry = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t, e) {
              var n = t.cx,
                r = t.cy,
                i = t.r,
                o = void 0 === i ? 0 : i;
              return {
                cx: void 0 === n ? 0 : n,
                cy: void 0 === r ? 0 : r,
                hwidth: o,
                hheight: o,
              };
            }),
            t
          );
        })(),
        rg = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t, e) {
              var n = t.cx,
                r = t.cy,
                i = t.rx,
                o = t.ry;
              return {
                cx: void 0 === n ? 0 : n,
                cy: void 0 === r ? 0 : r,
                hwidth: void 0 === i ? 0 : i,
                hheight: void 0 === o ? 0 : o,
              };
            }),
            t
          );
        })(),
        rm = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t) {
              var e = t.x1,
                n = t.y1,
                r = t.x2,
                i = t.y2,
                o = Math.min(e, r),
                a = Math.min(n, i),
                s = (Math.max(e, r) - o) / 2,
                l = (Math.max(n, i) - a) / 2;
              return { cx: o + s, cy: a + l, hwidth: s, hheight: l };
            }),
            t
          );
        })(),
        rE = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t) {
              var e = t.d.rect,
                n = e.x,
                r = e.y,
                i = e.width,
                o = e.height,
                a = i / 2,
                s = o / 2;
              return { cx: n + a, cy: r + s, hwidth: a, hheight: s };
            }),
            t
          );
        })(),
        rx = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t) {
              if (t.points && (0, tx.Z)(t.points.points)) {
                var e = t.points.points,
                  n = Math.min.apply(
                    Math,
                    (0, H.__spreadArray)(
                      [],
                      (0, H.__read)(
                        e.map(function (t) {
                          return t[0];
                        }),
                      ),
                      !1,
                    ),
                  ),
                  r = Math.max.apply(
                    Math,
                    (0, H.__spreadArray)(
                      [],
                      (0, H.__read)(
                        e.map(function (t) {
                          return t[0];
                        }),
                      ),
                      !1,
                    ),
                  ),
                  i = Math.min.apply(
                    Math,
                    (0, H.__spreadArray)(
                      [],
                      (0, H.__read)(
                        e.map(function (t) {
                          return t[1];
                        }),
                      ),
                      !1,
                    ),
                  ),
                  o = Math.max.apply(
                    Math,
                    (0, H.__spreadArray)(
                      [],
                      (0, H.__read)(
                        e.map(function (t) {
                          return t[1];
                        }),
                      ),
                      !1,
                    ),
                  ),
                  a = (r - n) / 2,
                  s = (o - i) / 2;
                return { cx: n + a, cy: i + s, hwidth: a, hheight: s };
              }
              return { cx: 0, cy: 0, hwidth: 0, hheight: 0 };
            }),
            t
          );
        })(),
        rb = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t, e) {
              var n = t.x,
                r = t.y,
                i = t.src,
                o = t.width,
                a = t.height,
                s = void 0 === o ? 0 : o,
                l = void 0 === a ? 0 : a;
              return (
                !i ||
                  (0, to.Z)(i) ||
                  (s || ((s = i.width), (t.width = s)),
                  l || ((l = i.height), (t.height = l))),
                {
                  cx: (void 0 === n ? 0 : n) + s / 2,
                  cy: (void 0 === r ? 0 : r) + l / 2,
                  hwidth: s / 2,
                  hheight: l / 2,
                }
              );
            }),
            t
          );
        })(),
        rT = (function () {
          function t(t) {
            this.globalRuntime = t;
          }
          return (
            (t.prototype.isReadyToMeasure = function (t, e) {
              var n = t.text,
                r = t.textAlign,
                i = t.textBaseline,
                o = t.fontSize,
                a = t.fontStyle,
                s = t.fontWeight,
                l = t.fontVariant,
                u = t.lineWidth;
              return rZ.enableCSSParsing
                ? n && o && a && s && l && r && i && !(0, ti.Z)(u)
                : n;
            }),
            (t.prototype.update = function (t, e) {
              var n,
                r,
                i = t.text,
                o = t.textAlign,
                a = void 0 === o ? 'start' : o,
                s = t.lineWidth,
                l = void 0 === s ? 1 : s,
                u = t.textBaseline,
                c = void 0 === u ? 'alphabetic' : u,
                h = t.dx,
                p = void 0 === h ? 0 : h,
                d = t.dy,
                f = void 0 === d ? 0 : d,
                v = t.x,
                y = t.y;
              if (!this.isReadyToMeasure(t, e))
                return (
                  (t.metrics = {
                    font: '',
                    width: 0,
                    height: 0,
                    lines: [],
                    lineWidths: [],
                    lineHeight: 0,
                    maxLineWidth: 0,
                    fontProperties: { ascent: 0, descent: 0, fontSize: 0 },
                    lineMetrics: [],
                  }),
                  { hwidth: 0, hheight: 0, cx: 0, cy: 0 }
                );
              var g = (
                  (null ===
                    (r =
                      null === (n = null == e ? void 0 : e.ownerDocument) ||
                      void 0 === n
                        ? void 0
                        : n.defaultView) || void 0 === r
                    ? void 0
                    : r.getConfig()) || {}
                ).offscreenCanvas,
                m = this.globalRuntime.textService.measureText(i, t, g);
              t.metrics = m;
              var E = m.width,
                x = m.height,
                b = m.lineHeight,
                T = m.fontProperties,
                P = E / 2,
                S = x / 2,
                N = (void 0 === v ? 0 : v) + P;
              'center' === a || 'middle' === a
                ? (N += l / 2 - P)
                : ('right' === a || 'end' === a) && (N += l - 2 * P);
              var w = (void 0 === y ? 0 : y) - S;
              return (
                'middle' === c
                  ? (w += S)
                  : 'top' === c || 'hanging' === c
                    ? (w += 2 * S)
                    : 'alphabetic' === c
                      ? (w += this.globalRuntime.enableCSSParsing
                          ? b - T.ascent
                          : 0)
                      : ('bottom' === c || 'ideographic' === c) && (w += 0),
                p && (N += p),
                f && (w += f),
                { cx: N, cy: w, hwidth: P, hheight: S }
              );
            }),
            t
          );
        })(),
        rP = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t, e) {
              return { cx: 0, cy: 0, hwidth: 0, hheight: 0 };
            }),
            t
          );
        })(),
        rS = (function () {
          function t() {}
          return (
            (t.prototype.update = function (t, e) {
              var n = t.x,
                r = t.y,
                i = t.width,
                o = void 0 === i ? 0 : i,
                a = t.height,
                s = void 0 === a ? 0 : a;
              return {
                cx: (void 0 === n ? 0 : n) + o / 2,
                cy: (void 0 === r ? 0 : r) + s / 2,
                hwidth: o / 2,
                hheight: s / 2,
              };
            }),
            t
          );
        })(),
        rN = (function () {
          function t(e) {
            (this.eventPhase = t.prototype.NONE),
              (this.bubbles = !0),
              (this.cancelBubble = !0),
              (this.cancelable = !1),
              (this.defaultPrevented = !1),
              (this.propagationStopped = !1),
              (this.propagationImmediatelyStopped = !1),
              (this.layer = new tq()),
              (this.page = new tq()),
              (this.canvas = new tq()),
              (this.viewport = new tq()),
              (this.composed = !1),
              (this.NONE = 0),
              (this.CAPTURING_PHASE = 1),
              (this.AT_TARGET = 2),
              (this.BUBBLING_PHASE = 3),
              (this.manager = e);
          }
          return (
            Object.defineProperty(t.prototype, 'name', {
              get: function () {
                return this.type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'layerX', {
              get: function () {
                return this.layer.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'layerY', {
              get: function () {
                return this.layer.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pageX', {
              get: function () {
                return this.page.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pageY', {
              get: function () {
                return this.page.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'x', {
              get: function () {
                return this.canvas.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'y', {
              get: function () {
                return this.canvas.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'canvasX', {
              get: function () {
                return this.canvas.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'canvasY', {
              get: function () {
                return this.canvas.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'viewportX', {
              get: function () {
                return this.viewport.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'viewportY', {
              get: function () {
                return this.viewport.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.composedPath = function () {
              return (
                this.manager &&
                  (!this.path || this.path[0] !== this.target) &&
                  (this.path = this.target
                    ? this.manager.propagationPath(this.target)
                    : []),
                this.path
              );
            }),
            Object.defineProperty(t.prototype, 'propagationPath', {
              get: function () {
                return this.composedPath();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.preventDefault = function () {
              this.nativeEvent instanceof Event &&
                this.nativeEvent.cancelable &&
                this.nativeEvent.preventDefault(),
                (this.defaultPrevented = !0);
            }),
            (t.prototype.stopImmediatePropagation = function () {
              this.propagationImmediatelyStopped = !0;
            }),
            (t.prototype.stopPropagation = function () {
              this.propagationStopped = !0;
            }),
            (t.prototype.initEvent = function () {}),
            (t.prototype.initUIEvent = function () {}),
            (t.prototype.clone = function () {
              throw Error(tJ);
            }),
            t
          );
        })(),
        rw = (function (t) {
          function e() {
            var e =
              t.apply(
                this,
                (0, H.__spreadArray)([], (0, H.__read)(arguments), !1),
              ) || this;
            return (
              (e.client = new tq()),
              (e.movement = new tq()),
              (e.offset = new tq()),
              (e.global = new tq()),
              (e.screen = new tq()),
              e
            );
          }
          return (
            (0, H.__extends)(e, t),
            Object.defineProperty(e.prototype, 'clientX', {
              get: function () {
                return this.client.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'clientY', {
              get: function () {
                return this.client.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'movementX', {
              get: function () {
                return this.movement.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'movementY', {
              get: function () {
                return this.movement.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'offsetX', {
              get: function () {
                return this.offset.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'offsetY', {
              get: function () {
                return this.offset.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'globalX', {
              get: function () {
                return this.global.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'globalY', {
              get: function () {
                return this.global.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'screenX', {
              get: function () {
                return this.screen.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'screenY', {
              get: function () {
                return this.screen.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getModifierState = function (t) {
              return (
                'getModifierState' in this.nativeEvent &&
                this.nativeEvent.getModifierState(t)
              );
            }),
            (e.prototype.initMouseEvent = function () {
              throw Error(tJ);
            }),
            e
          );
        })(rN),
        rk = (function (t) {
          function e() {
            var e =
              t.apply(
                this,
                (0, H.__spreadArray)([], (0, H.__read)(arguments), !1),
              ) || this;
            return (e.width = 0), (e.height = 0), (e.isPrimary = !1), e;
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.getCoalescedEvents = function () {
              return 'pointermove' === this.type ||
                'mousemove' === this.type ||
                'touchmove' === this.type
                ? [this]
                : [];
            }),
            (e.prototype.getPredictedEvents = function () {
              throw Error('getPredictedEvents is not supported!');
            }),
            (e.prototype.clone = function () {
              return this.manager.clonePointerEvent(this);
            }),
            e
          );
        })(rw),
        rM = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.clone = function () {
              return this.manager.cloneWheelEvent(this);
            }),
            e
          );
        })(rw),
        rC = (function (t) {
          function e(e, n) {
            var r = t.call(this, null) || this;
            return (r.type = e), (r.detail = n), Object.assign(r, n), r;
          }
          return (0, H.__extends)(e, t), e;
        })(rN),
        r_ = (function () {
          function t() {
            this.emitter = new q.Z();
          }
          return (
            (t.prototype.on = function (t, e, n) {
              return this.addEventListener(t, e, n), this;
            }),
            (t.prototype.addEventListener = function (t, e, n) {
              var r = ((0, tb.Z)(n) && n) || ((0, tT.Z)(n) && n.capture),
                i = (0, tT.Z)(n) && n.once,
                o = er(e) ? void 0 : e,
                a = !1,
                s = '';
              if (t.indexOf(':') > -1) {
                var l = (0, H.__read)(t.split(':'), 2),
                  u = l[0];
                (t = l[1]), (s = u), (a = !0);
              }
              if (
                ((t = r ? ''.concat(t, 'capture') : t),
                (e = er(e) ? e : e.handleEvent),
                a)
              ) {
                var c = e;
                e = function () {
                  for (var t, e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  (null === (t = e[0].target) || void 0 === t
                    ? void 0
                    : t.name) === s &&
                    c.apply(
                      void 0,
                      (0, H.__spreadArray)([], (0, H.__read)(e), !1),
                    );
                };
              }
              return (
                i ? this.emitter.once(t, e, o) : this.emitter.on(t, e, o), this
              );
            }),
            (t.prototype.off = function (t, e, n) {
              return (
                t
                  ? this.removeEventListener(t, e, n)
                  : this.removeAllEventListeners(),
                this
              );
            }),
            (t.prototype.removeAllEventListeners = function () {
              this.emitter.removeAllListeners();
            }),
            (t.prototype.removeEventListener = function (t, e, n) {
              var r = ((0, tb.Z)(n) && n) || ((0, tT.Z)(n) && n.capture),
                i = er(e) ? void 0 : e;
              return (
                (t = r ? ''.concat(t, 'capture') : t),
                (e = er(e) ? e : null == e ? void 0 : e.handleEvent),
                this.emitter.off(t, e, i),
                this
              );
            }),
            (t.prototype.emit = function (t, e) {
              this.dispatchEvent(new rC(t, e));
            }),
            (t.prototype.dispatchEvent = function (t, e) {
              var n, r, i;
              if ((void 0 === e && (e = !1), !t.type))
                throw Error(
                  'DisplayObject cannot propagate events outside of the Federated Events API',
                );
              if (
                (i = this.document
                  ? this
                  : this.defaultView
                    ? this.defaultView
                    : null === (n = this.ownerDocument) || void 0 === n
                      ? void 0
                      : n.defaultView)
              ) {
                if (((t.manager = i.getEventService() || null), !t.manager))
                  return !1;
                (t.defaultPrevented = !1),
                  (t.path = []),
                  e || (t.target = this),
                  null === (r = t.manager) ||
                    void 0 === r ||
                    r.dispatchEvent(t, t.type, e);
              }
              return !t.defaultPrevented;
            }),
            t
          );
        })(),
        rA = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.shadow = !1),
              (e.ownerDocument = null),
              (e.isConnected = !1),
              (e.baseURI = ''),
              (e.childNodes = []),
              (e.nodeType = 0),
              (e.nodeName = ''),
              (e.nodeValue = null),
              (e.parentNode = null),
              e
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.isNode = function (t) {
              return !!t.childNodes;
            }),
            Object.defineProperty(e.prototype, 'textContent', {
              get: function () {
                var t,
                  e,
                  n = '';
                this.nodeName === C.TEXT && (n += this.style.text);
                try {
                  for (
                    var r = (0, H.__values)(this.childNodes), i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    var o = i.value;
                    o.nodeName === C.TEXT
                      ? (n += o.nodeValue)
                      : (n += o.textContent);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return n;
              },
              set: function (t) {
                var e = this;
                this.childNodes.slice().forEach(function (t) {
                  e.removeChild(t);
                }),
                  this.nodeName === C.TEXT && (this.style.text = ''.concat(t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getRootNode = function (t) {
              return (void 0 === t && (t = {}), this.parentNode)
                ? this.parentNode.getRootNode(t)
                : t.composed && this.host
                  ? this.host.getRootNode(t)
                  : this;
            }),
            (e.prototype.hasChildNodes = function () {
              return this.childNodes.length > 0;
            }),
            (e.prototype.isDefaultNamespace = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.lookupNamespaceURI = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.lookupPrefix = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.normalize = function () {
              throw Error(tJ);
            }),
            (e.prototype.isEqualNode = function (t) {
              return this === t;
            }),
            (e.prototype.isSameNode = function (t) {
              return this.isEqualNode(t);
            }),
            Object.defineProperty(e.prototype, 'parent', {
              get: function () {
                return this.parentNode;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'parentElement', {
              get: function () {
                return null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'nextSibling', {
              get: function () {
                return null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'previousSibling', {
              get: function () {
                return null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'firstChild', {
              get: function () {
                return this.childNodes.length > 0 ? this.childNodes[0] : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'lastChild', {
              get: function () {
                return this.childNodes.length > 0
                  ? this.childNodes[this.childNodes.length - 1]
                  : null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.compareDocumentPosition = function (t) {
              if (t === this) return 0;
              for (
                var n, r = t, i = this, o = [r], a = [i];
                null !== (n = r.parentNode) && void 0 !== n ? n : i.parentNode;

              )
                (r = r.parentNode ? (o.push(r.parentNode), r.parentNode) : r),
                  (i = i.parentNode ? (a.push(i.parentNode), i.parentNode) : i);
              if (r !== i)
                return (
                  e.DOCUMENT_POSITION_DISCONNECTED |
                  e.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC |
                  e.DOCUMENT_POSITION_PRECEDING
                );
              var s = o.length > a.length ? o : a,
                l = s === o ? a : o;
              if (s[s.length - l.length] === l[0])
                return s === o
                  ? e.DOCUMENT_POSITION_CONTAINED_BY |
                      e.DOCUMENT_POSITION_FOLLOWING
                  : e.DOCUMENT_POSITION_CONTAINS |
                      e.DOCUMENT_POSITION_PRECEDING;
              for (var u = s.length - l.length, c = l.length - 1; c >= 0; c--) {
                var h = l[c],
                  p = s[u + c];
                if (p !== h) {
                  var d = h.parentNode.childNodes;
                  if (d.indexOf(h) < d.indexOf(p)) {
                    if (l === o) return e.DOCUMENT_POSITION_PRECEDING;
                    break;
                  }
                  if (s === o) return e.DOCUMENT_POSITION_PRECEDING;
                  break;
                }
              }
              return e.DOCUMENT_POSITION_FOLLOWING;
            }),
            (e.prototype.contain = function (t) {
              return this.contains(t);
            }),
            (e.prototype.contains = function (t) {
              for (var e = t; e && this !== e; ) e = e.parentNode;
              return !!e;
            }),
            (e.prototype.getAncestor = function (t) {
              for (var e = this; t > 0 && e; ) (e = e.parentNode), t--;
              return e;
            }),
            (e.prototype.forEach = function (t, e) {
              void 0 === e && (e = !1),
                t(this) ||
                  (e ? this.childNodes.slice() : this.childNodes).forEach(
                    function (e) {
                      e.forEach(t);
                    },
                  );
            }),
            (e.DOCUMENT_POSITION_DISCONNECTED = 1),
            (e.DOCUMENT_POSITION_PRECEDING = 2),
            (e.DOCUMENT_POSITION_FOLLOWING = 4),
            (e.DOCUMENT_POSITION_CONTAINS = 8),
            (e.DOCUMENT_POSITION_CONTAINED_BY = 16),
            (e.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32),
            e
          );
        })(r_),
        rR = (function () {
          function t(t, e) {
            var n = this;
            (this.globalRuntime = t),
              (this.context = e),
              (this.emitter = new q.Z()),
              (this.nativeHTMLMap = new WeakMap()),
              (this.cursor = 'default'),
              (this.mappingTable = {}),
              (this.mappingState = { trackingData: {} }),
              (this.eventPool = new Map()),
              (this.tmpMatrix = J.create()),
              (this.tmpVec3 = K.Ue()),
              (this.onPointerDown = function (t) {
                var e = n.createPointerEvent(t);
                if (
                  (n.dispatchEvent(e, 'pointerdown'), 'touch' === e.pointerType)
                )
                  n.dispatchEvent(e, 'touchstart');
                else if ('mouse' === e.pointerType || 'pen' === e.pointerType) {
                  var r = 2 === e.button;
                  n.dispatchEvent(e, r ? 'rightdown' : 'mousedown');
                }
                (n.trackingData(t.pointerId).pressTargetsByButton[t.button] =
                  e.composedPath()),
                  n.freeEvent(e);
              }),
              (this.onPointerUp = function (t) {
                var e,
                  r = n1.now(),
                  i = n.createPointerEvent(
                    t,
                    void 0,
                    void 0,
                    n.context.config.alwaysTriggerPointerEventOnCanvas
                      ? n.rootTarget
                      : void 0,
                  );
                if (
                  (n.dispatchEvent(i, 'pointerup'), 'touch' === i.pointerType)
                )
                  n.dispatchEvent(i, 'touchend');
                else if ('mouse' === i.pointerType || 'pen' === i.pointerType) {
                  var o = 2 === i.button;
                  n.dispatchEvent(i, o ? 'rightup' : 'mouseup');
                }
                var a = n.trackingData(t.pointerId),
                  s = n.findMountedTarget(a.pressTargetsByButton[t.button]),
                  l = s;
                if (s && !i.composedPath().includes(s)) {
                  for (var u = s; u && !i.composedPath().includes(u); ) {
                    if (
                      ((i.currentTarget = u),
                      n.notifyTarget(i, 'pointerupoutside'),
                      'touch' === i.pointerType)
                    )
                      n.notifyTarget(i, 'touchendoutside');
                    else if (
                      'mouse' === i.pointerType ||
                      'pen' === i.pointerType
                    ) {
                      var o = 2 === i.button;
                      n.notifyTarget(
                        i,
                        o ? 'rightupoutside' : 'mouseupoutside',
                      );
                    }
                    rA.isNode(u) && (u = u.parentNode);
                  }
                  delete a.pressTargetsByButton[t.button], (l = u);
                }
                if (l) {
                  var c = n.clonePointerEvent(i, 'click');
                  (c.target = l),
                    (c.path = []),
                    a.clicksByButton[t.button] ||
                      (a.clicksByButton[t.button] = {
                        clickCount: 0,
                        target: c.target,
                        timeStamp: r,
                      });
                  var h =
                      n.context.renderingContext.root.ownerDocument.defaultView,
                    p = a.clicksByButton[t.button];
                  p.target === c.target && r - p.timeStamp < h.dblClickSpeed
                    ? ++p.clickCount
                    : (p.clickCount = 1),
                    (p.target = c.target),
                    (p.timeStamp = r),
                    (c.detail = p.clickCount),
                    (null === (e = i.detail) || void 0 === e
                      ? void 0
                      : e.preventClick) ||
                      (n.context.config.useNativeClickEvent ||
                        ('mouse' !== c.pointerType &&
                          'touch' !== c.pointerType) ||
                        n.dispatchEvent(c, 'click'),
                      n.dispatchEvent(c, 'pointertap')),
                    n.freeEvent(c);
                }
                n.freeEvent(i);
              }),
              (this.onPointerMove = function (t) {
                var e = n.createPointerEvent(
                    t,
                    void 0,
                    void 0,
                    n.context.config.alwaysTriggerPointerEventOnCanvas
                      ? n.rootTarget
                      : void 0,
                  ),
                  r = 'mouse' === e.pointerType || 'pen' === e.pointerType,
                  i = n.trackingData(t.pointerId),
                  o = n.findMountedTarget(i.overTargets);
                if (i.overTargets && o !== e.target) {
                  var a = 'mousemove' === t.type ? 'mouseout' : 'pointerout',
                    s = n.createPointerEvent(t, a, o || void 0);
                  if (
                    (n.dispatchEvent(s, 'pointerout'),
                    r && n.dispatchEvent(s, 'mouseout'),
                    !e.composedPath().includes(o))
                  ) {
                    var l = n.createPointerEvent(
                      t,
                      'pointerleave',
                      o || void 0,
                    );
                    for (
                      l.eventPhase = l.AT_TARGET;
                      l.target && !e.composedPath().includes(l.target);

                    )
                      (l.currentTarget = l.target),
                        n.notifyTarget(l),
                        r && n.notifyTarget(l, 'mouseleave'),
                        rA.isNode(l.target) && (l.target = l.target.parentNode);
                    n.freeEvent(l);
                  }
                  n.freeEvent(s);
                }
                if (o !== e.target) {
                  var u = 'mousemove' === t.type ? 'mouseover' : 'pointerover',
                    c = n.clonePointerEvent(e, u);
                  n.dispatchEvent(c, 'pointerover'),
                    r && n.dispatchEvent(c, 'mouseover');
                  for (
                    var h = o && rA.isNode(o) && o.parentNode;
                    h &&
                    h !==
                      (rA.isNode(n.rootTarget) && n.rootTarget.parentNode) &&
                    h !== e.target;

                  )
                    h = h.parentNode;
                  if (
                    !h ||
                    h === (rA.isNode(n.rootTarget) && n.rootTarget.parentNode)
                  ) {
                    var p = n.clonePointerEvent(e, 'pointerenter');
                    for (
                      p.eventPhase = p.AT_TARGET;
                      p.target &&
                      p.target !== o &&
                      p.target !==
                        (rA.isNode(n.rootTarget) && n.rootTarget.parentNode);

                    )
                      (p.currentTarget = p.target),
                        n.notifyTarget(p),
                        r && n.notifyTarget(p, 'mouseenter'),
                        rA.isNode(p.target) && (p.target = p.target.parentNode);
                    n.freeEvent(p);
                  }
                  n.freeEvent(c);
                }
                n.dispatchEvent(e, 'pointermove'),
                  'touch' === e.pointerType && n.dispatchEvent(e, 'touchmove'),
                  r &&
                    (n.dispatchEvent(e, 'mousemove'),
                    (n.cursor = n.getCursor(e.target))),
                  (i.overTargets = e.composedPath()),
                  n.freeEvent(e);
              }),
              (this.onPointerOut = function (t) {
                var e = n.trackingData(t.pointerId);
                if (e.overTargets) {
                  var r = 'mouse' === t.pointerType || 'pen' === t.pointerType,
                    i = n.findMountedTarget(e.overTargets),
                    o = n.createPointerEvent(t, 'pointerout', i || void 0);
                  n.dispatchEvent(o), r && n.dispatchEvent(o, 'mouseout');
                  var a = n.createPointerEvent(t, 'pointerleave', i || void 0);
                  for (
                    a.eventPhase = a.AT_TARGET;
                    a.target &&
                    a.target !==
                      (rA.isNode(n.rootTarget) && n.rootTarget.parentNode);

                  )
                    (a.currentTarget = a.target),
                      n.notifyTarget(a),
                      r && n.notifyTarget(a, 'mouseleave'),
                      rA.isNode(a.target) && (a.target = a.target.parentNode);
                  (e.overTargets = null), n.freeEvent(o), n.freeEvent(a);
                }
                n.cursor = null;
              }),
              (this.onPointerOver = function (t) {
                var e = n.trackingData(t.pointerId),
                  r = n.createPointerEvent(t),
                  i = 'mouse' === r.pointerType || 'pen' === r.pointerType;
                n.dispatchEvent(r, 'pointerover'),
                  i && n.dispatchEvent(r, 'mouseover'),
                  'mouse' === r.pointerType &&
                    (n.cursor = n.getCursor(r.target));
                var o = n.clonePointerEvent(r, 'pointerenter');
                for (
                  o.eventPhase = o.AT_TARGET;
                  o.target &&
                  o.target !==
                    (rA.isNode(n.rootTarget) && n.rootTarget.parentNode);

                )
                  (o.currentTarget = o.target),
                    n.notifyTarget(o),
                    i && n.notifyTarget(o, 'mouseenter'),
                    rA.isNode(o.target) && (o.target = o.target.parentNode);
                (e.overTargets = r.composedPath()),
                  n.freeEvent(r),
                  n.freeEvent(o);
              }),
              (this.onPointerUpOutside = function (t) {
                var e = n.trackingData(t.pointerId),
                  r = n.findMountedTarget(e.pressTargetsByButton[t.button]),
                  i = n.createPointerEvent(t);
                if (r) {
                  for (var o = r; o; )
                    (i.currentTarget = o),
                      n.notifyTarget(i, 'pointerupoutside'),
                      'touch' === i.pointerType ||
                        (('mouse' === i.pointerType ||
                          'pen' === i.pointerType) &&
                          n.notifyTarget(
                            i,
                            2 === i.button
                              ? 'rightupoutside'
                              : 'mouseupoutside',
                          )),
                      rA.isNode(o) && (o = o.parentNode);
                  delete e.pressTargetsByButton[t.button];
                }
                n.freeEvent(i);
              }),
              (this.onWheel = function (t) {
                var e = n.createWheelEvent(t);
                n.dispatchEvent(e), n.freeEvent(e);
              }),
              (this.onClick = function (t) {
                if (n.context.config.useNativeClickEvent) {
                  var e = n.createPointerEvent(t);
                  n.dispatchEvent(e), n.freeEvent(e);
                }
              }),
              (this.onPointerCancel = function (t) {
                var e = n.createPointerEvent(
                  t,
                  void 0,
                  void 0,
                  n.context.config.alwaysTriggerPointerEventOnCanvas
                    ? n.rootTarget
                    : void 0,
                );
                n.dispatchEvent(e), n.freeEvent(e);
              });
          }
          return (
            (t.prototype.init = function () {
              (this.rootTarget = this.context.renderingContext.root.parentNode),
                this.addEventMapping('pointerdown', this.onPointerDown),
                this.addEventMapping('pointerup', this.onPointerUp),
                this.addEventMapping('pointermove', this.onPointerMove),
                this.addEventMapping('pointerout', this.onPointerOut),
                this.addEventMapping('pointerleave', this.onPointerOut),
                this.addEventMapping('pointercancel', this.onPointerCancel),
                this.addEventMapping('pointerover', this.onPointerOver),
                this.addEventMapping(
                  'pointerupoutside',
                  this.onPointerUpOutside,
                ),
                this.addEventMapping('wheel', this.onWheel),
                this.addEventMapping('click', this.onClick);
            }),
            (t.prototype.destroy = function () {
              this.emitter.removeAllListeners(),
                (this.mappingTable = {}),
                (this.mappingState = {}),
                this.eventPool.clear();
            }),
            (t.prototype.getScale = function () {
              var t = this.context.contextService.getBoundingClientRect(),
                e = 1,
                n = 1,
                r = this.context.contextService.getDomElement();
              if (r && t) {
                var i = r.offsetWidth,
                  o = r.offsetHeight;
                i && o && ((e = t.width / i), (n = t.height / o));
              }
              return { scaleX: e, scaleY: n, bbox: t };
            }),
            (t.prototype.client2Viewport = function (t) {
              var e = this.getScale(),
                n = e.scaleX,
                r = e.scaleY,
                i = e.bbox;
              return new tq(
                (t.x - ((null == i ? void 0 : i.left) || 0)) / n,
                (t.y - ((null == i ? void 0 : i.top) || 0)) / r,
              );
            }),
            (t.prototype.viewport2Client = function (t) {
              var e = this.getScale(),
                n = e.scaleX,
                r = e.scaleY,
                i = e.bbox;
              return new tq(
                (t.x + ((null == i ? void 0 : i.left) || 0)) * n,
                (t.y + ((null == i ? void 0 : i.top) || 0)) * r,
              );
            }),
            (t.prototype.viewport2Canvas = function (t) {
              var e = t.x,
                n = t.y,
                r = this.rootTarget.defaultView.getCamera(),
                i = this.context.config,
                o = i.width,
                a = i.height,
                s = r.getPerspectiveInverse(),
                l = r.getWorldTransform(),
                u = J.multiply(this.tmpMatrix, l, s),
                c = K.t8(this.tmpVec3, (e / o) * 2 - 1, (1 - n / a) * 2 - 1, 0);
              return K.fF(c, c, u), new tq(c[0], c[1]);
            }),
            (t.prototype.canvas2Viewport = function (t) {
              var e = this.rootTarget.defaultView.getCamera(),
                n = e.getPerspective(),
                r = e.getViewTransform(),
                i = J.multiply(this.tmpMatrix, n, r),
                o = K.t8(this.tmpVec3, t.x, t.y, 0);
              K.fF(this.tmpVec3, this.tmpVec3, i);
              var a = this.context.config,
                s = a.width,
                l = a.height;
              return new tq(((o[0] + 1) / 2) * s, (1 - (o[1] + 1) / 2) * l);
            }),
            (t.prototype.setPickHandler = function (t) {
              this.pickHandler = t;
            }),
            (t.prototype.addEventMapping = function (t, e) {
              this.mappingTable[t] || (this.mappingTable[t] = []),
                this.mappingTable[t].push({ fn: e, priority: 0 }),
                this.mappingTable[t].sort(function (t, e) {
                  return t.priority - e.priority;
                });
            }),
            (t.prototype.mapEvent = function (t) {
              if (this.rootTarget) {
                var e = this.mappingTable[t.type];
                if (e) for (var n = 0, r = e.length; n < r; n++) e[n].fn(t);
                else
                  console.warn(
                    '[EventService]: Event mapping not defined for '.concat(
                      t.type,
                    ),
                  );
              }
            }),
            (t.prototype.dispatchEvent = function (t, e, n) {
              if (n) {
                t.eventPhase = t.AT_TARGET;
                var r = this.rootTarget.defaultView || null;
                (t.currentTarget = r), this.notifyListeners(t, e);
              } else
                (t.propagationStopped = !1),
                  (t.propagationImmediatelyStopped = !1),
                  this.propagate(t, e);
              this.emitter.emit(e || t.type, t);
            }),
            (t.prototype.propagate = function (t, e) {
              if (t.target) {
                var n = t.composedPath();
                t.eventPhase = t.CAPTURING_PHASE;
                for (var r = n.length - 1; r >= 1; r--)
                  if (
                    ((t.currentTarget = n[r]),
                    this.notifyTarget(t, e),
                    t.propagationStopped || t.propagationImmediatelyStopped)
                  )
                    return;
                if (
                  ((t.eventPhase = t.AT_TARGET),
                  (t.currentTarget = t.target),
                  this.notifyTarget(t, e),
                  !t.propagationStopped && !t.propagationImmediatelyStopped)
                ) {
                  var i = n.indexOf(t.currentTarget);
                  t.eventPhase = t.BUBBLING_PHASE;
                  for (var r = i + 1; r < n.length; r++)
                    if (
                      ((t.currentTarget = n[r]),
                      this.notifyTarget(t, e),
                      t.propagationStopped || t.propagationImmediatelyStopped)
                    )
                      return;
                }
              }
            }),
            (t.prototype.propagationPath = function (t) {
              var e = [t],
                n = this.rootTarget.defaultView || null;
              if (n && n === t) return e.unshift(n.document), e;
              for (var r = 0; r < 2048 && t !== this.rootTarget; r++)
                rA.isNode(t) &&
                  t.parentNode &&
                  (e.push(t.parentNode), (t = t.parentNode));
              return n && e.push(n), e;
            }),
            (t.prototype.hitTest = function (t) {
              var e = t.viewportX,
                n = t.viewportY,
                r = this.context.config,
                i = r.width,
                o = r.height,
                a = r.disableHitTesting;
              return e < 0 || n < 0 || e > i || n > o
                ? null
                : (!a && this.pickHandler(t)) || this.rootTarget || null;
            }),
            (t.prototype.isNativeEventFromCanvas = function (t, e) {
              var n = null == e ? void 0 : e.target;
              if (
                ((null == n ? void 0 : n.shadowRoot) &&
                  (n = e.composedPath()[0]),
                n)
              ) {
                if (n === t) return !0;
                if (t && t.contains) return t.contains(n);
              }
              return (
                null != e &&
                !!e.composedPath &&
                e.composedPath().indexOf(t) > -1
              );
            }),
            (t.prototype.getExistedHTML = function (t) {
              var e, n;
              if (t.nativeEvent.composedPath)
                try {
                  for (
                    var r = (0, H.__values)(t.nativeEvent.composedPath()),
                      i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    var o = i.value,
                      a = this.nativeHTMLMap.get(o);
                    if (a) return a;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              return null;
            }),
            (t.prototype.pickTarget = function (t) {
              return this.hitTest({
                clientX: t.clientX,
                clientY: t.clientY,
                viewportX: t.viewportX,
                viewportY: t.viewportY,
                x: t.canvasX,
                y: t.canvasY,
              });
            }),
            (t.prototype.createPointerEvent = function (t, e, n, r) {
              var i = this.allocateEvent(rk);
              this.copyPointerData(t, i),
                this.copyMouseData(t, i),
                this.copyData(t, i),
                (i.nativeEvent = t.nativeEvent),
                (i.originalEvent = t);
              var o = this.getExistedHTML(i),
                a = this.context.contextService.getDomElement();
              return (
                (i.target =
                  null != n
                    ? n
                    : o ||
                      (this.isNativeEventFromCanvas(a, i.nativeEvent) &&
                        this.pickTarget(i)) ||
                      r),
                'string' == typeof e && (i.type = e),
                i
              );
            }),
            (t.prototype.createWheelEvent = function (t) {
              var e = this.allocateEvent(rM);
              this.copyWheelData(t, e),
                this.copyMouseData(t, e),
                this.copyData(t, e),
                (e.nativeEvent = t.nativeEvent),
                (e.originalEvent = t);
              var n = this.getExistedHTML(e),
                r = this.context.contextService.getDomElement();
              return (
                (e.target =
                  n ||
                  (this.isNativeEventFromCanvas(r, e.nativeEvent) &&
                    this.pickTarget(e))),
                e
              );
            }),
            (t.prototype.trackingData = function (t) {
              return (
                this.mappingState.trackingData[t] ||
                  (this.mappingState.trackingData[t] = {
                    pressTargetsByButton: {},
                    clicksByButton: {},
                    overTarget: null,
                  }),
                this.mappingState.trackingData[t]
              );
            }),
            (t.prototype.cloneWheelEvent = function (t) {
              var e = this.allocateEvent(rM);
              return (
                (e.nativeEvent = t.nativeEvent),
                (e.originalEvent = t.originalEvent),
                this.copyWheelData(t, e),
                this.copyMouseData(t, e),
                this.copyData(t, e),
                (e.target = t.target),
                (e.path = t.composedPath().slice()),
                (e.type = t.type),
                e
              );
            }),
            (t.prototype.clonePointerEvent = function (t, e) {
              var n = this.allocateEvent(rk);
              return (
                (n.nativeEvent = t.nativeEvent),
                (n.originalEvent = t.originalEvent),
                this.copyPointerData(t, n),
                this.copyMouseData(t, n),
                this.copyData(t, n),
                (n.target = t.target),
                (n.path = t.composedPath().slice()),
                (n.type = null != e ? e : n.type),
                n
              );
            }),
            (t.prototype.copyPointerData = function (t, e) {
              (e.pointerId = t.pointerId),
                (e.width = t.width),
                (e.height = t.height),
                (e.isPrimary = t.isPrimary),
                (e.pointerType = t.pointerType),
                (e.pressure = t.pressure),
                (e.tangentialPressure = t.tangentialPressure),
                (e.tiltX = t.tiltX),
                (e.tiltY = t.tiltY),
                (e.twist = t.twist);
            }),
            (t.prototype.copyMouseData = function (t, e) {
              (e.altKey = t.altKey),
                (e.button = t.button),
                (e.buttons = t.buttons),
                (e.ctrlKey = t.ctrlKey),
                (e.metaKey = t.metaKey),
                (e.shiftKey = t.shiftKey),
                e.client.copyFrom(t.client),
                e.movement.copyFrom(t.movement),
                e.canvas.copyFrom(t.canvas),
                e.screen.copyFrom(t.screen),
                e.global.copyFrom(t.global),
                e.offset.copyFrom(t.offset);
            }),
            (t.prototype.copyWheelData = function (t, e) {
              (e.deltaMode = t.deltaMode),
                (e.deltaX = t.deltaX),
                (e.deltaY = t.deltaY),
                (e.deltaZ = t.deltaZ);
            }),
            (t.prototype.copyData = function (t, e) {
              (e.isTrusted = t.isTrusted),
                (e.timeStamp = n1.now()),
                (e.type = t.type),
                (e.detail = t.detail),
                (e.view = t.view),
                e.page.copyFrom(t.page),
                e.viewport.copyFrom(t.viewport);
            }),
            (t.prototype.allocateEvent = function (t) {
              this.eventPool.has(t) || this.eventPool.set(t, []);
              var e = this.eventPool.get(t).pop() || new t(this);
              return (
                (e.eventPhase = e.NONE),
                (e.currentTarget = null),
                (e.path = []),
                (e.target = null),
                e
              );
            }),
            (t.prototype.freeEvent = function (t) {
              if (t.manager !== this)
                throw Error(
                  'It is illegal to free an event not managed by this EventBoundary!',
                );
              var e = t.constructor;
              this.eventPool.has(e) || this.eventPool.set(e, []),
                this.eventPool.get(e).push(t);
            }),
            (t.prototype.notifyTarget = function (t, e) {
              e = null != e ? e : t.type;
              var n =
                t.eventPhase === t.CAPTURING_PHASE ||
                t.eventPhase === t.AT_TARGET
                  ? ''.concat(e, 'capture')
                  : e;
              this.notifyListeners(t, n),
                t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e);
            }),
            (t.prototype.notifyListeners = function (t, e) {
              var n = t.currentTarget.emitter,
                r = n._events[e];
              if (r) {
                if ('fn' in r)
                  r.once && n.removeListener(e, r.fn, void 0, !0),
                    r.fn.call(t.currentTarget || r.context, t);
                else
                  for (
                    var i = 0;
                    i < r.length && !t.propagationImmediatelyStopped;
                    i++
                  )
                    r[i].once && n.removeListener(e, r[i].fn, void 0, !0),
                      r[i].fn.call(t.currentTarget || r[i].context, t);
              }
            }),
            (t.prototype.findMountedTarget = function (t) {
              if (!t) return null;
              for (var e = t[t.length - 1], n = t.length - 2; n >= 0; n--) {
                var r = t[n];
                if (
                  r === this.rootTarget ||
                  (rA.isNode(r) && r.parentNode === e)
                )
                  e = t[n];
                else break;
              }
              return e;
            }),
            (t.prototype.getCursor = function (t) {
              for (var e = t; e; ) {
                var n = !!e.getAttribute && e.getAttribute('cursor');
                if (n) return n;
                e = rA.isNode(e) && e.parentNode;
              }
            }),
            t
          );
        })(),
        rO = (function () {
          function t() {}
          return (
            (t.prototype.getOrCreateCanvas = function (t, e) {
              if (this.canvas) return this.canvas;
              if (t || rZ.offscreenCanvas)
                (this.canvas = t || rZ.offscreenCanvas),
                  (this.context = this.canvas.getContext(
                    '2d',
                    (0, H.__assign)({ willReadFrequently: !0 }, e),
                  ));
              else
                try {
                  (this.canvas = new window.OffscreenCanvas(0, 0)),
                    (this.context = this.canvas.getContext(
                      '2d',
                      (0, H.__assign)({ willReadFrequently: !0 }, e),
                    )),
                    (this.context && this.context.measureText) ||
                      ((this.canvas = document.createElement('canvas')),
                      (this.context = this.canvas.getContext('2d')));
                } catch (t) {
                  (this.canvas = document.createElement('canvas')),
                    (this.context = this.canvas.getContext(
                      '2d',
                      (0, H.__assign)({ willReadFrequently: !0 }, e),
                    ));
                }
              return (
                (this.canvas.width = 10), (this.canvas.height = 10), this.canvas
              );
            }),
            (t.prototype.getOrCreateContext = function (t, e) {
              return this.context || this.getOrCreateCanvas(t, e), this.context;
            }),
            t
          );
        })();
      ((x = W || (W = {}))[(x.CAMERA_CHANGED = 0)] = 'CAMERA_CHANGED'),
        (x[(x.DISPLAY_OBJECT_CHANGED = 1)] = 'DISPLAY_OBJECT_CHANGED'),
        (x[(x.NONE = 2)] = 'NONE');
      var rL = (function () {
          function t(t, e) {
            (this.globalRuntime = t),
              (this.context = e),
              (this.inited = !1),
              (this.stats = { total: 0, rendered: 0 }),
              (this.zIndexCounter = 0),
              (this.hooks = {
                init: new ro(),
                initAsync: new rr(),
                dirtycheck: new ra(),
                cull: new ra(),
                beginFrame: new ro(),
                beforeRender: new ro(),
                render: new ro(),
                afterRender: new ro(),
                endFrame: new ro(),
                destroy: new ro(),
                pick: new ri(),
                pickSync: new ra(),
                pointerDown: new ro(),
                pointerUp: new ro(),
                pointerMove: new ro(),
                pointerOut: new ro(),
                pointerOver: new ro(),
                pointerWheel: new ro(),
                pointerCancel: new ro(),
                click: new ro(),
              });
          }
          return (
            (t.prototype.init = function (t) {
              var e = this,
                n = (0, H.__assign)(
                  (0, H.__assign)({}, this.globalRuntime),
                  this.context,
                );
              this.context.renderingPlugins.forEach(function (t) {
                t.apply(n, e.globalRuntime);
              }),
                this.hooks.init.call(),
                0 === this.hooks.initAsync.getCallbacksNum()
                  ? ((this.inited = !0), t())
                  : this.hooks.initAsync.promise().then(function () {
                      (e.inited = !0), t();
                    });
            }),
            (t.prototype.getStats = function () {
              return this.stats;
            }),
            (t.prototype.disableDirtyRectangleRendering = function () {
              return (
                !this.context.config.renderer.getConfig()
                  .enableDirtyRectangleRendering ||
                this.context.renderingContext.renderReasons.has(
                  W.CAMERA_CHANGED,
                )
              );
            }),
            (t.prototype.render = function (t, e, n) {
              var r = this;
              (this.stats.total = 0),
                (this.stats.rendered = 0),
                (this.zIndexCounter = 0);
              var i = this.context.renderingContext;
              if (
                (this.globalRuntime.sceneGraphService.syncHierarchy(i.root),
                this.globalRuntime.sceneGraphService.triggerPendingEvents(),
                i.renderReasons.size && this.inited)
              ) {
                i.dirtyRectangleRenderingDisabled =
                  this.disableDirtyRectangleRendering();
                var o =
                    1 === i.renderReasons.size &&
                    i.renderReasons.has(W.CAMERA_CHANGED),
                  a = !t.disableRenderHooks || !(t.disableRenderHooks && o);
                a && this.renderDisplayObject(i.root, t, i),
                  this.hooks.beginFrame.call(e),
                  a &&
                    i.renderListCurrentFrame.forEach(function (t) {
                      r.hooks.beforeRender.call(t),
                        r.hooks.render.call(t),
                        r.hooks.afterRender.call(t);
                    }),
                  this.hooks.endFrame.call(e),
                  (i.renderListCurrentFrame = []),
                  i.renderReasons.clear(),
                  n();
              }
            }),
            (t.prototype.renderDisplayObject = function (t, e, n) {
              var r = this,
                i = e.renderer.getConfig(),
                o = i.enableDirtyCheck,
                a = i.enableCulling;
              this.globalRuntime.enableCSSParsing &&
                this.globalRuntime.styleValueRegistry.recalc(t);
              var s = t.renderable,
                l = o
                  ? s.dirty || n.dirtyRectangleRenderingDisabled
                    ? t
                    : null
                  : t;
              if (l) {
                var u = a ? this.hooks.cull.call(l, this.context.camera) : l;
                u && (this.stats.rendered++, n.renderListCurrentFrame.push(u));
              }
              (t.renderable.dirty = !1),
                (t.sortable.renderOrder = this.zIndexCounter++),
                this.stats.total++;
              var c = t.sortable;
              c.dirty &&
                (this.sort(t, c),
                (c.dirty = !1),
                (c.dirtyChildren = []),
                (c.dirtyReason = void 0)),
                (c.sorted || t.childNodes).forEach(function (t) {
                  r.renderDisplayObject(t, e, n);
                });
            }),
            (t.prototype.sort = function (t, e) {
              e.sorted && e.dirtyReason !== z.Z_INDEX_CHANGED
                ? e.dirtyChildren.forEach(function (n) {
                    if (-1 === t.childNodes.indexOf(n)) {
                      var r = e.sorted.indexOf(n);
                      r >= 0 && e.sorted.splice(r, 1);
                    } else if (0 === e.sorted.length) e.sorted.push(n);
                    else {
                      var i = (function (t, e) {
                        for (var n = 0, r = t.length; n < r; ) {
                          var i = (n + r) >>> 1;
                          0 > nK(t[i], e) ? (n = i + 1) : (r = i);
                        }
                        return n;
                      })(e.sorted, n);
                      e.sorted.splice(i, 0, n);
                    }
                  })
                : (e.sorted = t.childNodes.slice().sort(nK));
            }),
            (t.prototype.destroy = function () {
              (this.inited = !1),
                this.hooks.destroy.call(),
                this.globalRuntime.sceneGraphService.clearPendingEvents();
            }),
            (t.prototype.dirtify = function () {
              this.context.renderingContext.renderReasons.add(
                W.DISPLAY_OBJECT_CHANGED,
              );
            }),
            t
          );
        })(),
        rI = /\[\s*(.*)=(.*)\s*\]/,
        rD = (function () {
          function t() {}
          return (
            (t.prototype.selectOne = function (t, e) {
              var n = this;
              if (t.startsWith('.'))
                return e.find(function (e) {
                  return (
                    ((null == e ? void 0 : e.classList) || []).indexOf(
                      n.getIdOrClassname(t),
                    ) > -1
                  );
                });
              if (t.startsWith('#'))
                return e.find(function (e) {
                  return e.id === n.getIdOrClassname(t);
                });
              if (!t.startsWith('['))
                return e.find(function (n) {
                  return e !== n && n.nodeName === t;
                });
              var r = this.getAttribute(t),
                i = r.name,
                o = r.value;
              return i
                ? e.find(function (t) {
                    return (
                      e !== t &&
                      ('name' === i
                        ? t.name === o
                        : n.attributeToString(t, i) === o)
                    );
                  })
                : null;
            }),
            (t.prototype.selectAll = function (t, e) {
              var n = this;
              if (t.startsWith('.'))
                return e.findAll(function (r) {
                  return (
                    e !== r &&
                    ((null == r ? void 0 : r.classList) || []).indexOf(
                      n.getIdOrClassname(t),
                    ) > -1
                  );
                });
              if (t.startsWith('#'))
                return e.findAll(function (r) {
                  return e !== r && r.id === n.getIdOrClassname(t);
                });
              if (!t.startsWith('['))
                return e.findAll(function (n) {
                  return e !== n && n.nodeName === t;
                });
              var r = this.getAttribute(t),
                i = r.name,
                o = r.value;
              return i
                ? e.findAll(function (t) {
                    return (
                      e !== t &&
                      ('name' === i
                        ? t.name === o
                        : n.attributeToString(t, i) === o)
                    );
                  })
                : [];
            }),
            (t.prototype.is = function (t, e) {
              if (t.startsWith('.'))
                return e.className === this.getIdOrClassname(t);
              if (t.startsWith('#')) return e.id === this.getIdOrClassname(t);
              if (!t.startsWith('[')) return e.nodeName === t;
              var n = this.getAttribute(t),
                r = n.name,
                i = n.value;
              return 'name' === r
                ? e.name === i
                : this.attributeToString(e, r) === i;
            }),
            (t.prototype.getIdOrClassname = function (t) {
              return t.substring(1);
            }),
            (t.prototype.getAttribute = function (t) {
              var e = t.match(rI),
                n = '',
                r = '';
              return (
                e &&
                  e.length > 2 &&
                  ((n = e[1].replace(/"/g, '')), (r = e[2].replace(/"/g, ''))),
                { name: n, value: r }
              );
            }),
            (t.prototype.attributeToString = function (t, e) {
              if (!t.getAttribute) return '';
              var n = t.getAttribute(e);
              return (0, ti.Z)(n) ? '' : n.toString ? n.toString() : '';
            }),
            t
          );
        })(),
        rG = (function (t) {
          function e(e, n, r, i, o, a, s, l) {
            var u = t.call(this, null) || this;
            return (
              (u.relatedNode = n),
              (u.prevValue = r),
              (u.newValue = i),
              (u.attrName = o),
              (u.attrChange = a),
              (u.prevParsedValue = s),
              (u.newParsedValue = l),
              (u.type = e),
              u
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.ADDITION = 2),
            (e.MODIFICATION = 1),
            (e.REMOVAL = 3),
            e
          );
        })(rN);
      function rF(t) {
        var e = t.renderable;
        e && ((e.renderBoundsDirty = !0), (e.boundsDirty = !0));
      }
      ((b = X || (X = {})).REPARENT = 'reparent'),
        (b.DESTROY = 'destroy'),
        (b.ATTR_MODIFIED = 'DOMAttrModified'),
        (b.INSERTED = 'DOMNodeInserted'),
        (b.REMOVED = 'removed'),
        (b.MOUNTED = 'DOMNodeInsertedIntoDocument'),
        (b.UNMOUNTED = 'DOMNodeRemovedFromDocument'),
        (b.BOUNDS_CHANGED = 'bounds-changed'),
        (b.CULLED = 'culled');
      var rB = new rG(X.REPARENT, null, '', '', '', 0, '', ''),
        rU = (function () {
          function t(t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              h,
              p,
              d = this;
            (this.runtime = t),
              (this.pendingEvents = []),
              (this.boundsChangedEvent = new rC(X.BOUNDS_CHANGED)),
              (this.rotate =
                ((e = tt.Ue()),
                function (t, n, r, i, o) {
                  void 0 === r && (r = 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = !0),
                    'number' == typeof n && (n = K.al(n, r, i));
                  var a = t.transformable;
                  if (null !== t.parentNode && t.parentNode.transformable) {
                    var s = tt.Ue();
                    tt.Su(s, n[0], n[1], n[2]);
                    var l = d.getRotation(t),
                      u = d.getRotation(t.parentNode);
                    tt.JG(e, u),
                      tt.U_(e, e),
                      tt.Jp(s, e, s),
                      tt.Jp(a.localRotation, s, l),
                      tt.Fv(a.localRotation, a.localRotation),
                      o && d.dirtifyLocal(t, a);
                  } else d.rotateLocal(t, n);
                })),
              (this.rotateLocal =
                ((n = tt.Ue()),
                function (t, e, r, i, o) {
                  void 0 === r && (r = 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = !0),
                    'number' == typeof e && (e = K.al(e, r, i));
                  var a = t.transformable;
                  tt.Su(n, e[0], e[1], e[2]),
                    tt.dC(a.localRotation, a.localRotation, n),
                    o && d.dirtifyLocal(t, a);
                })),
              (this.setEulerAngles =
                ((r = tt.Ue()),
                function (t, e, n, i, o) {
                  void 0 === n && (n = 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = !0),
                    'number' == typeof e && (e = K.al(e, n, i));
                  var a = t.transformable;
                  if (null !== t.parentNode && t.parentNode.transformable) {
                    tt.Su(a.localRotation, e[0], e[1], e[2]);
                    var s = d.getRotation(t.parentNode);
                    tt.JG(r, tt.U_(tt.Ue(), s)),
                      tt.dC(a.localRotation, a.localRotation, r),
                      o && d.dirtifyLocal(t, a);
                  } else d.setLocalEulerAngles(t, e);
                })),
              (this.translateLocal = function (t, e, n, r, i) {
                void 0 === n && (n = 0),
                  void 0 === r && (r = 0),
                  void 0 === i && (i = !0),
                  'number' == typeof e && (e = K.al(e, n, r));
                var o = t.transformable;
                !K.fS(e, K.Ue()) &&
                  (K.VC(e, e, o.localRotation),
                  K.IH(o.localPosition, o.localPosition, e),
                  i && d.dirtifyLocal(t, o));
              }),
              (this.setPosition =
                ((i = J.create()),
                (o = K.Ue()),
                function (t, e, n) {
                  void 0 === n && (n = !0);
                  var r = t.transformable;
                  if (
                    ((o[0] = e[0]),
                    (o[1] = e[1]),
                    (o[2] = e[2] || 0),
                    !K.fS(d.getPosition(t), o))
                  ) {
                    if (
                      (K.JG(r.position, o),
                      null !== t.parentNode && t.parentNode.transformable)
                    ) {
                      var a = t.parentNode.transformable;
                      J.copy(i, a.worldTransform),
                        J.invert(i, i),
                        K.fF(r.localPosition, o, i);
                    } else K.JG(r.localPosition, o);
                    n && d.dirtifyLocal(t, r);
                  }
                })),
              (this.setLocalPosition =
                ((a = K.Ue()),
                function (t, e, n) {
                  void 0 === n && (n = !0);
                  var r = t.transformable;
                  (a[0] = e[0]),
                    (a[1] = e[1]),
                    (a[2] = e[2] || 0),
                    !K.fS(r.localPosition, a) &&
                      (K.JG(r.localPosition, a), n && d.dirtifyLocal(t, r));
                })),
              (this.translate =
                ((s = K.Ue()),
                (l = K.Ue()),
                (u = K.Ue()),
                function (t, e, n, r, i) {
                  void 0 === n && (n = 0),
                    void 0 === r && (r = 0),
                    void 0 === i && (i = !0),
                    'number' == typeof e && (e = K.t8(l, e, n, r)),
                    K.fS(e, s) ||
                      (K.IH(u, d.getPosition(t), e), d.setPosition(t, u, i));
                })),
              (this.setRotation = function () {
                var t = tt.Ue();
                return function (e, n, r, i, o, a) {
                  void 0 === a && (a = !0);
                  var s = e.transformable;
                  if (
                    ('number' == typeof n && (n = tt.al(n, r, i, o)),
                    null !== e.parentNode && e.parentNode.transformable)
                  ) {
                    var l = d.getRotation(e.parentNode);
                    tt.JG(t, l),
                      tt.U_(t, t),
                      tt.Jp(s.localRotation, t, n),
                      tt.Fv(s.localRotation, s.localRotation),
                      a && d.dirtifyLocal(e, s);
                  } else d.setLocalRotation(e, n);
                };
              }),
              (this.displayObjectDependencyMap = new WeakMap()),
              (this.calcLocalTransform =
                ((c = J.create()),
                (h = K.Ue()),
                (p = tt.al(0, 0, 0, 1)),
                function (t) {
                  if (0 !== t.localSkew[0] || 0 !== t.localSkew[1]) {
                    if (
                      (J.fromRotationTranslationScaleOrigin(
                        t.localTransform,
                        t.localRotation,
                        t.localPosition,
                        K.al(1, 1, 1),
                        t.origin,
                      ),
                      0 !== t.localSkew[0] || 0 !== t.localSkew[1])
                    ) {
                      var e = J.identity(c);
                      (e[4] = Math.tan(t.localSkew[0])),
                        (e[1] = Math.tan(t.localSkew[1])),
                        J.multiply(t.localTransform, t.localTransform, e);
                    }
                    var n = J.fromRotationTranslationScaleOrigin(
                      c,
                      p,
                      h,
                      t.localScale,
                      t.origin,
                    );
                    J.multiply(t.localTransform, t.localTransform, n);
                  } else
                    J.fromRotationTranslationScaleOrigin(
                      t.localTransform,
                      t.localRotation,
                      t.localPosition,
                      t.localScale,
                      t.origin,
                    );
                }));
          }
          return (
            (t.prototype.matches = function (t, e) {
              return this.runtime.sceneGraphSelector.is(t, e);
            }),
            (t.prototype.querySelector = function (t, e) {
              return this.runtime.sceneGraphSelector.selectOne(t, e);
            }),
            (t.prototype.querySelectorAll = function (t, e) {
              return this.runtime.sceneGraphSelector.selectAll(t, e);
            }),
            (t.prototype.attach = function (t, e, n) {
              var r,
                i = !1;
              t.parentNode && ((i = t.parentNode !== e), this.detach(t)),
                (t.parentNode = e),
                (0, ti.Z)(n)
                  ? t.parentNode.childNodes.push(t)
                  : t.parentNode.childNodes.splice(n, 0, t);
              var o = e.sortable;
              ((null === (r = null == o ? void 0 : o.sorted) || void 0 === r
                ? void 0
                : r.length) ||
                t.parsedStyle.zIndex) &&
                (-1 === o.dirtyChildren.indexOf(t) && o.dirtyChildren.push(t),
                (o.dirty = !0),
                (o.dirtyReason = z.ADDED));
              var a = t.transformable;
              a && this.dirtifyWorld(t, a),
                a.frozen && this.unfreezeParentToRoot(t),
                i && t.dispatchEvent(rB);
            }),
            (t.prototype.detach = function (t) {
              var e, n;
              if (t.parentNode) {
                var r = t.transformable,
                  i = t.parentNode.sortable;
                ((null === (e = null == i ? void 0 : i.sorted) || void 0 === e
                  ? void 0
                  : e.length) ||
                  (null === (n = t.style) || void 0 === n
                    ? void 0
                    : n.zIndex)) &&
                  (-1 === i.dirtyChildren.indexOf(t) && i.dirtyChildren.push(t),
                  (i.dirty = !0),
                  (i.dirtyReason = z.REMOVED));
                var o = t.parentNode.childNodes.indexOf(t);
                o > -1 && t.parentNode.childNodes.splice(o, 1),
                  r && this.dirtifyWorld(t, r),
                  (t.parentNode = null);
              }
            }),
            (t.prototype.getOrigin = function (t) {
              return t.getGeometryBounds(), t.transformable.origin;
            }),
            (t.prototype.setOrigin = function (t, e, n, r) {
              void 0 === n && (n = 0),
                void 0 === r && (r = 0),
                'number' == typeof e && (e = [e, n, r]);
              var i = t.transformable;
              if (
                e[0] !== i.origin[0] ||
                e[1] !== i.origin[1] ||
                e[2] !== i.origin[2]
              ) {
                var o = i.origin;
                (o[0] = e[0]),
                  (o[1] = e[1]),
                  (o[2] = e[2] || 0),
                  this.dirtifyLocal(t, i);
              }
            }),
            (t.prototype.setLocalEulerAngles = function (t, e, n, r, i) {
              void 0 === n && (n = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                'number' == typeof e && (e = K.al(e, n, r));
              var o = t.transformable;
              tt.Su(o.localRotation, e[0], e[1], e[2]),
                i && this.dirtifyLocal(t, o);
            }),
            (t.prototype.scaleLocal = function (t, e, n) {
              void 0 === n && (n = !0);
              var r = t.transformable;
              K.Jp(r.localScale, r.localScale, K.al(e[0], e[1], e[2] || 1)),
                n && this.dirtifyLocal(t, r);
            }),
            (t.prototype.setLocalScale = function (t, e, n) {
              void 0 === n && (n = !0);
              var r = t.transformable,
                i = K.al(e[0], e[1], e[2] || r.localScale[2]);
              !K.fS(i, r.localScale) &&
                (K.JG(r.localScale, i), n && this.dirtifyLocal(t, r));
            }),
            (t.prototype.setLocalRotation = function (t, e, n, r, i, o) {
              void 0 === o && (o = !0),
                'number' == typeof e && (e = tt.al(e, n, r, i));
              var a = t.transformable;
              tt.JG(a.localRotation, e), o && this.dirtifyLocal(t, a);
            }),
            (t.prototype.setLocalSkew = function (t, e, n) {
              'number' == typeof e && (e = te.al(e, n));
              var r = t.transformable;
              te.JG(r.localSkew, e), this.dirtifyLocal(t, r);
            }),
            (t.prototype.dirtifyLocal = function (t, e) {
              e.localDirtyFlag ||
                ((e.localDirtyFlag = !0),
                e.dirtyFlag || this.dirtifyWorld(t, e));
            }),
            (t.prototype.dirtifyWorld = function (t, e) {
              e.dirtyFlag || this.unfreezeParentToRoot(t),
                this.dirtifyWorldInternal(t, e),
                this.dirtifyToRoot(t, !0);
            }),
            (t.prototype.triggerPendingEvents = function () {
              var t = this,
                e = new Set(),
                n = function (n, r) {
                  n.isConnected &&
                    !e.has(n.entity) &&
                    ((t.boundsChangedEvent.detail = r),
                    (t.boundsChangedEvent.target = n),
                    n.isMutationObserved
                      ? n.dispatchEvent(t.boundsChangedEvent)
                      : n.ownerDocument.defaultView.dispatchEvent(
                          t.boundsChangedEvent,
                          !0,
                        ),
                    e.add(n.entity));
                };
              this.pendingEvents.forEach(function (t) {
                var e = (0, H.__read)(t, 2),
                  r = e[0],
                  i = e[1];
                i.affectChildren
                  ? r.forEach(function (t) {
                      n(t, i);
                    })
                  : n(r, i);
              }),
                this.clearPendingEvents(),
                e.clear();
            }),
            (t.prototype.clearPendingEvents = function () {
              this.pendingEvents = [];
            }),
            (t.prototype.dirtifyToRoot = function (t, e) {
              void 0 === e && (e = !1);
              var n = t;
              for (n.renderable && (n.renderable.dirty = !0); n; )
                rF(n), (n = n.parentNode);
              e &&
                t.forEach(function (t) {
                  rF(t);
                }),
                this.informDependentDisplayObjects(t),
                this.pendingEvents.push([t, { affectChildren: e }]);
            }),
            (t.prototype.updateDisplayObjectDependency = function (t, e, n, r) {
              if (e && e !== n) {
                var i = this.displayObjectDependencyMap.get(e);
                if (i && i[t]) {
                  var o = i[t].indexOf(r);
                  i[t].splice(o, 1);
                }
              }
              if (n) {
                var a = this.displayObjectDependencyMap.get(n);
                a ||
                  (this.displayObjectDependencyMap.set(n, {}),
                  (a = this.displayObjectDependencyMap.get(n))),
                  a[t] || (a[t] = []),
                  a[t].push(r);
              }
            }),
            (t.prototype.informDependentDisplayObjects = function (t) {
              var e = this,
                n = this.displayObjectDependencyMap.get(t);
              n &&
                Object.keys(n).forEach(function (t) {
                  n[t].forEach(function (n) {
                    e.dirtifyToRoot(n, !0),
                      n.dispatchEvent(
                        new rG(
                          X.ATTR_MODIFIED,
                          n,
                          e,
                          e,
                          t,
                          rG.MODIFICATION,
                          e,
                          e,
                        ),
                      ),
                      n.isCustomElement &&
                        n.isConnected &&
                        n.attributeChangedCallback &&
                        n.attributeChangedCallback(t, e, e);
                  });
                });
            }),
            (t.prototype.getPosition = function (t) {
              var e = t.transformable;
              return J.getTranslation(e.position, this.getWorldTransform(t, e));
            }),
            (t.prototype.getRotation = function (t) {
              var e = t.transformable;
              return J.getRotation(e.rotation, this.getWorldTransform(t, e));
            }),
            (t.prototype.getScale = function (t) {
              var e = t.transformable;
              return J.getScaling(e.scaling, this.getWorldTransform(t, e));
            }),
            (t.prototype.getWorldTransform = function (t, e) {
              return (
                void 0 === e && (e = t.transformable),
                (e.localDirtyFlag || e.dirtyFlag) &&
                  (t.parentNode &&
                    t.parentNode.transformable &&
                    this.getWorldTransform(t.parentNode),
                  this.sync(t, e)),
                e.worldTransform
              );
            }),
            (t.prototype.getLocalPosition = function (t) {
              return t.transformable.localPosition;
            }),
            (t.prototype.getLocalRotation = function (t) {
              return t.transformable.localRotation;
            }),
            (t.prototype.getLocalScale = function (t) {
              return t.transformable.localScale;
            }),
            (t.prototype.getLocalSkew = function (t) {
              return t.transformable.localSkew;
            }),
            (t.prototype.getLocalTransform = function (t) {
              var e = t.transformable;
              return (
                e.localDirtyFlag &&
                  (this.calcLocalTransform(e), (e.localDirtyFlag = !1)),
                e.localTransform
              );
            }),
            (t.prototype.setLocalTransform = function (t, e) {
              var n = J.getTranslation(K.Ue(), e),
                r = J.getRotation(tt.Ue(), e),
                i = J.getScaling(K.Ue(), e);
              this.setLocalScale(t, i, !1),
                this.setLocalPosition(t, n, !1),
                this.setLocalRotation(t, r, void 0, void 0, void 0, !1),
                this.dirtifyLocal(t, t.transformable);
            }),
            (t.prototype.resetLocalTransform = function (t) {
              this.setLocalScale(t, [1, 1, 1]),
                this.setLocalPosition(t, [0, 0, 0]),
                this.setLocalEulerAngles(t, [0, 0, 0]),
                this.setLocalSkew(t, [0, 0]);
            }),
            (t.prototype.getTransformedGeometryBounds = function (t, e, n) {
              void 0 === e && (e = !1);
              var r = this.getGeometryBounds(t, e);
              if (tX.isEmpty(r)) return null;
              var i = n || new tX();
              return i.setFromTransformedAABB(r, this.getWorldTransform(t)), i;
            }),
            (t.prototype.getGeometryBounds = function (t, e) {
              void 0 === e && (e = !1);
              var n = t.geometry;
              return (
                n.dirty && rZ.styleValueRegistry.updateGeometry(t),
                (e ? n.renderBounds : n.contentBounds || null) || new tX()
              );
            }),
            (t.prototype.getBounds = function (t, e) {
              var n = this;
              void 0 === e && (e = !1);
              var r = t.renderable;
              if (!r.boundsDirty && !e && r.bounds) return r.bounds;
              if (!r.renderBoundsDirty && e && r.renderBounds)
                return r.renderBounds;
              var i = e ? r.renderBounds : r.bounds,
                o = this.getTransformedGeometryBounds(t, e, i);
              if (
                (t.childNodes.forEach(function (t) {
                  var r = n.getBounds(t, e);
                  r &&
                    (o
                      ? o.add(r)
                      : (o = i || new tX()).update(r.center, r.halfExtents));
                }),
                o || (o = new tX()),
                e)
              ) {
                var a = nJ(t);
                if (a) {
                  var s = a.parsedStyle.clipPath.getBounds(e);
                  o
                    ? s && (o = s.intersection(o))
                    : o.update(s.center, s.halfExtents);
                }
              }
              return (
                e
                  ? ((r.renderBounds = o), (r.renderBoundsDirty = !1))
                  : ((r.bounds = o), (r.boundsDirty = !1)),
                o
              );
            }),
            (t.prototype.getLocalBounds = function (t) {
              if (t.parentNode) {
                var e = J.create();
                t.parentNode.transformable &&
                  (e = J.invert(
                    J.create(),
                    this.getWorldTransform(t.parentNode),
                  ));
                var n = this.getBounds(t);
                if (!tX.isEmpty(n)) {
                  var r = new tX();
                  return r.setFromTransformedAABB(n, e), r;
                }
              }
              return this.getBounds(t);
            }),
            (t.prototype.getBoundingClientRect = function (t) {
              var e,
                n,
                r,
                i = this.getGeometryBounds(t);
              tX.isEmpty(i) ||
                (r = new tX()).setFromTransformedAABB(
                  i,
                  this.getWorldTransform(t),
                );
              var o =
                null ===
                  (n =
                    null === (e = t.ownerDocument) || void 0 === e
                      ? void 0
                      : e.defaultView) || void 0 === n
                  ? void 0
                  : n.getContextService().getBoundingClientRect();
              if (r) {
                var a = (0, H.__read)(r.getMin(), 2),
                  s = a[0],
                  l = a[1],
                  u = (0, H.__read)(r.getMax(), 2),
                  c = u[0],
                  h = u[1];
                return new tK(
                  s + ((null == o ? void 0 : o.left) || 0),
                  l + ((null == o ? void 0 : o.top) || 0),
                  c - s,
                  h - l,
                );
              }
              return new tK(
                (null == o ? void 0 : o.left) || 0,
                (null == o ? void 0 : o.top) || 0,
                0,
                0,
              );
            }),
            (t.prototype.dirtifyWorldInternal = function (t, e) {
              var n = this;
              if (!e.dirtyFlag) {
                (e.dirtyFlag = !0),
                  (e.frozen = !1),
                  t.childNodes.forEach(function (t) {
                    var e = t.transformable;
                    e.dirtyFlag || n.dirtifyWorldInternal(t, e);
                  });
                var r = t.renderable;
                r &&
                  ((r.renderBoundsDirty = !0),
                  (r.boundsDirty = !0),
                  (r.dirty = !0));
              }
            }),
            (t.prototype.syncHierarchy = function (t) {
              var e = t.transformable;
              if (!e.frozen) {
                (e.frozen = !0),
                  (e.localDirtyFlag || e.dirtyFlag) && this.sync(t, e);
                for (var n = t.childNodes, r = 0; r < n.length; r++)
                  this.syncHierarchy(n[r]);
              }
            }),
            (t.prototype.sync = function (t, e) {
              if (
                (e.localDirtyFlag &&
                  (this.calcLocalTransform(e), (e.localDirtyFlag = !1)),
                e.dirtyFlag)
              ) {
                var n = t.parentNode,
                  r = n && n.transformable;
                null !== n && r
                  ? J.multiply(
                      e.worldTransform,
                      r.worldTransform,
                      e.localTransform,
                    )
                  : J.copy(e.worldTransform, e.localTransform),
                  (e.dirtyFlag = !1);
              }
            }),
            (t.prototype.unfreezeParentToRoot = function (t) {
              for (var e = t.parentNode; e; ) {
                var n = e.transformable;
                n && (n.frozen = !1), (e = e.parentNode);
              }
            }),
            t
          );
        })(),
        rV = [10, 13],
        rY = [
          9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202,
          8287, 12288,
        ],
        rz =
          /[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff!"#$%&'()*+,-./:;]/,
        rj = new RegExp(
          ''
            .concat(
              /[!%),.:;?\]}¢°·'""†‡›℃∶、。〃〆〕〗〞﹚﹜！＂％＇），．：；？！］｝～]/
                .source,
              '|',
            )
            .concat(
              /[!),.:;?\]}¢·–—'"•"、。〆〞〕〉》」︰︱︲︳﹐﹑﹒﹓﹔﹕﹖﹘﹚﹜！），．：；？︶︸︺︼︾﹀﹂﹗］｜｝､]/
                .source,
              '|',
            )
            .concat(
              /[)\]｝〕〉》」』】〙〗〟'"｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠–〜?!‼⁇⁈⁉・、:;,。.]/
                .source,
              '|',
            )
            .concat(
              /[!%),.:;?\]}¢°'"†‡℃〆〈《「『〕！％），．：；？］｝]/.source,
            ),
        ),
        rW = new RegExp(
          ''
            .concat(/[$(£¥·'"〈《「『【〔〖〝﹙﹛＄（．［｛￡￥]/.source, '|')
            .concat(
              /[([{£¥'"‵〈《「『〔〝︴﹙﹛（｛︵︷︹︻︽︿﹁﹃﹏]/.source,
              '|',
            )
            .concat(/[([｛〔〈《「『【〘〖〝'"｟«—...‥〳〴〵]/.source, '|')
            .concat(/[$([{£¥'"々〇〉》」〔＄（［｛｠￥￦#]/.source),
        ),
        rX = (function () {
          function t(t) {
            var e = this;
            (this.runtime = t),
              (this.fontMetricsCache = {}),
              (this.shouldBreakByKinsokuShorui = function (t, n) {
                return (
                  !e.isBreakingSpace(n) && !!(t && (rW.exec(n) || rj.exec(t)))
                );
              }),
              (this.trimByKinsokuShorui = function (t) {
                var e = (0, H.__spreadArray)([], (0, H.__read)(t), !1),
                  n = e[e.length - 2];
                if (!n) return t;
                var r = n[n.length - 1];
                return (
                  (e[e.length - 2] = n.slice(0, -1)),
                  (e[e.length - 1] = r + e[e.length - 1]),
                  e
                );
              });
          }
          return (
            (t.prototype.measureFont = function (t, e) {
              if (this.fontMetricsCache[t]) return this.fontMetricsCache[t];
              var n = { ascent: 0, descent: 0, fontSize: 0 },
                r = this.runtime.offscreenCanvasCreator.getOrCreateCanvas(e),
                i = this.runtime.offscreenCanvasCreator.getOrCreateContext(e, {
                  willReadFrequently: !0,
                });
              i.font = t;
              var o = '|\xc9q\xc5M',
                a = Math.ceil(i.measureText(o).width),
                s = Math.ceil(i.measureText('M').width),
                l = 2 * s;
              (s = (1.4 * s) | 0),
                (r.width = a),
                (r.height = l),
                (i.fillStyle = '#f00'),
                i.fillRect(0, 0, a, l),
                (i.font = t),
                (i.textBaseline = 'alphabetic'),
                (i.fillStyle = '#000'),
                i.fillText(o, 0, s);
              var u = i.getImageData(0, 0, a || 1, l || 1).data,
                c = u.length,
                h = 4 * a,
                p = 0,
                d = 0,
                f = !1;
              for (p = 0; p < s; ++p) {
                for (var v = 0; v < h; v += 4)
                  if (255 !== u[d + v]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d += h;
              }
              for (n.ascent = s - p, d = c - h, f = !1, p = l; p > s; --p) {
                for (var v = 0; v < h; v += 4)
                  if (255 !== u[d + v]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d -= h;
              }
              return (
                (n.descent = p - s),
                (n.fontSize = n.ascent + n.descent),
                (this.fontMetricsCache[t] = n),
                n
              );
            }),
            (t.prototype.measureText = function (t, e, n) {
              var r = e.fontSize,
                i = void 0 === r ? 16 : r,
                o = e.wordWrap,
                a = e.lineHeight,
                s = e.lineWidth,
                l = void 0 === s ? 1 : s,
                u = e.textBaseline,
                c = void 0 === u ? 'alphabetic' : u,
                h = e.textAlign,
                p = void 0 === h ? 'start' : h,
                d = e.letterSpacing,
                f = void 0 === d ? 0 : d,
                v = e.textPath;
              e.textPathSide, e.textPathStartOffset;
              var y = e.leading,
                g = void 0 === y ? 0 : y,
                m = (function (t) {
                  for (
                    var e = t.fontSize,
                      n = void 0 === e ? 16 : e,
                      r = t.fontFamily,
                      i = t.fontStyle,
                      o = t.fontVariant,
                      a = t.fontWeight,
                      s = ((0, tn.Z)(n) && ''.concat(n, 'px')) || '16px',
                      l = (void 0 === r ? 'sans-serif' : r).split(','),
                      u = l.length - 1;
                    u >= 0;
                    u--
                  ) {
                    var c = l[u].trim();
                    !rl.test(c) &&
                      0 > rs.indexOf(c) &&
                      (c = '"'.concat(c, '"')),
                      (l[u] = c);
                  }
                  return ''
                    .concat(void 0 === i ? 'normal' : i, ' ')
                    .concat(void 0 === o ? 'normal' : o, ' ')
                    .concat(void 0 === a ? 'normal' : a, ' ')
                    .concat(s, ' ')
                    .concat(l.join(','));
                })(e),
                E = this.measureFont(m, n);
              0 === E.fontSize && ((E.fontSize = i), (E.ascent = i));
              var x = this.runtime.offscreenCanvasCreator.getOrCreateContext(n);
              (x.font = m), (e.isOverflowing = !1);
              var b = (void 0 !== o && o ? this.wordWrap(t, e, n) : t).split(
                  /(?:\r\n|\r|\n)/,
                ),
                T = Array(b.length),
                P = 0;
              if (v) {
                v.getTotalLength();
                for (var S = 0; S < b.length; S++)
                  var N = x.measureText(b[S]).width + (b[S].length - 1) * f;
              } else {
                for (var S = 0; S < b.length; S++) {
                  var w = x.measureText(b[S]).width + (b[S].length - 1) * f;
                  (T[S] = w), (P = Math.max(P, w));
                }
                var N = P + l,
                  k = a || E.fontSize + l,
                  M = Math.max(k, E.fontSize + l) + (b.length - 1) * (k + g);
                k += g;
                var C = 0;
                return (
                  'middle' === c
                    ? (C = -M / 2)
                    : 'bottom' === c ||
                        'alphabetic' === c ||
                        'ideographic' === c
                      ? (C = -M)
                      : ('top' === c || 'hanging' === c) && (C = 0),
                  {
                    font: m,
                    width: N,
                    height: M,
                    lines: b,
                    lineWidths: T,
                    lineHeight: k,
                    maxLineWidth: P,
                    fontProperties: E,
                    lineMetrics: T.map(function (t, e) {
                      var n = 0;
                      return (
                        'center' === p || 'middle' === p
                          ? (n -= t / 2)
                          : ('right' === p || 'end' === p) && (n -= t),
                        new tK(n - l / 2, C + e * k, t + l, k)
                      );
                    }),
                  }
                );
              }
            }),
            (t.prototype.setGraphemeOnPath = function () {}),
            (t.prototype.wordWrap = function (t, e, n) {
              var r = this,
                i = e.wordWrapWidth,
                o = e.letterSpacing,
                a = void 0 === o ? 0 : o,
                s = e.maxLines,
                l = void 0 === s ? 1 / 0 : s,
                u = e.textOverflow,
                c = this.runtime.offscreenCanvasCreator.getOrCreateContext(n),
                h = (void 0 === i ? 0 : i) + a,
                p = '';
              'ellipsis' === u ? (p = '...') : u && 'clip' !== u && (p = u);
              for (
                var d = [],
                  f = 0,
                  v = 0,
                  y = {},
                  g = function (t) {
                    return r.getFromCache(t, a, y, c);
                  },
                  m = Array.from(p).reduce(function (t, e) {
                    return t + g(e);
                  }, 0),
                  E = Array.from(t),
                  x = 0;
                x < E.length;
                x++
              ) {
                var b = E[x],
                  T = t[x - 1],
                  P = t[x + 1],
                  S = g(b);
                if (this.isNewline(b)) {
                  if (++f >= l) {
                    e.isOverflowing = !0;
                    break;
                  }
                  (v = 0), (d[f] = '');
                  continue;
                }
                if (v > 0 && v + S > h) {
                  if (f + 1 >= l) {
                    if (((e.isOverflowing = !0), m > 0 && m <= h)) {
                      for (
                        var N = d[f].length, w = 0, k = N, M = 0;
                        M < N;
                        M++
                      ) {
                        var C = g(d[f][M]);
                        if (w + C + m > h) {
                          k = M;
                          break;
                        }
                        w += C;
                      }
                      d[f] = (d[f] || '').slice(0, k) + p;
                    }
                    break;
                  }
                  if (((v = 0), (d[++f] = ''), this.isBreakingSpace(b)))
                    continue;
                  this.canBreakInLastChar(b) ||
                    ((d = this.trimToBreakable(d)),
                    (v = this.sumTextWidthByCache(d[f] || '', y))),
                    this.shouldBreakByKinsokuShorui(b, P) &&
                      ((d = this.trimByKinsokuShorui(d)), (v += g(T || '')));
                }
                (v += S), (d[f] = (d[f] || '') + b);
              }
              return d.join('\n');
            }),
            (t.prototype.isBreakingSpace = function (t) {
              return 'string' == typeof t && rY.indexOf(t.charCodeAt(0)) >= 0;
            }),
            (t.prototype.isNewline = function (t) {
              return 'string' == typeof t && rV.indexOf(t.charCodeAt(0)) >= 0;
            }),
            (t.prototype.trimToBreakable = function (t) {
              var e = (0, H.__spreadArray)([], (0, H.__read)(t), !1),
                n = e[e.length - 2],
                r = this.findBreakableIndex(n);
              if (-1 === r || !n) return e;
              var i = n.slice(r, r + 1),
                o = this.isBreakingSpace(i);
              return (
                (e[e.length - 1] += n.slice(r + 1, n.length)),
                (e[e.length - 2] = n.slice(0, r + (o ? 0 : 1))),
                e
              );
            }),
            (t.prototype.canBreakInLastChar = function (t) {
              return !(t && rz.test(t));
            }),
            (t.prototype.sumTextWidthByCache = function (t, e) {
              return t.split('').reduce(function (t, n) {
                if (!e[n]) throw Error('cannot count the word without cache');
                return t + e[n];
              }, 0);
            }),
            (t.prototype.findBreakableIndex = function (t) {
              for (var e = t.length - 1; e >= 0; e--)
                if (!rz.test(t[e])) return e;
              return -1;
            }),
            (t.prototype.getFromCache = function (t, e, n, r) {
              var i = n[t];
              if ('number' != typeof i) {
                var o = t.length * e;
                (i = r.measureText(t).width + o), (n[t] = i);
              }
              return i;
            }),
            t
          );
        })(),
        rZ = {},
        rH =
          ((P = new rb()),
          (S = new rx()),
          ((T = {})[C.CIRCLE] = new ry()),
          (T[C.ELLIPSE] = new rg()),
          (T[C.RECT] = P),
          (T[C.IMAGE] = P),
          (T[C.GROUP] = new rP()),
          (T[C.LINE] = new rm()),
          (T[C.TEXT] = new rT(rZ)),
          (T[C.POLYLINE] = S),
          (T[C.POLYGON] = S),
          (T[C.PATH] = new rE()),
          (T[C.HTML] = new rS()),
          (T[C.MESH] = null),
          T),
        rq =
          ((w = new nO()),
          (k = new nD()),
          ((N = {})[j.PERCENTAGE] = null),
          (N[j.NUMBER] = new nU()),
          (N[j.ANGLE] = new nA()),
          (N[j.DEFINED_PATH] = new nR()),
          (N[j.PAINT] = w),
          (N[j.COLOR] = w),
          (N[j.FILTER] = new nL()),
          (N[j.LENGTH] = k),
          (N[j.LENGTH_PERCENTAGE] = k),
          (N[j.LENGTH_PERCENTAGE_12] = new nG()),
          (N[j.LENGTH_PERCENTAGE_14] = new nF()),
          (N[j.COORDINATE] = new nD()),
          (N[j.OFFSET_DISTANCE] = new nV()),
          (N[j.OPACITY_VALUE] = new nY()),
          (N[j.PATH] = new nz()),
          (N[j.LIST_OF_POINTS] = new (function () {
            (this.parser = na), (this.mixer = ns);
          })()),
          (N[j.SHADOW_BLUR] = new nj()),
          (N[j.TEXT] = new nW()),
          (N[j.TEXT_TRANSFORM] = new nX()),
          (N[j.TRANSFORM] = new rd()),
          (N[j.TRANSFORM_ORIGIN] = new rf()),
          (N[j.Z_INDEX] = new rv()),
          (N[j.MARKER] = new nB()),
          N);
      (rZ.CameraContribution = t0),
        (rZ.AnimationTimeline = null),
        (rZ.EasingFunction = null),
        (rZ.offscreenCanvasCreator = new rO()),
        (rZ.sceneGraphSelector = new rD()),
        (rZ.sceneGraphService = new rU(rZ)),
        (rZ.textService = new rX(rZ)),
        (rZ.geometryUpdaterFactory = rH),
        (rZ.CSSPropertySyntaxFactory = rq),
        (rZ.styleValueRegistry = new n_(rZ)),
        (rZ.layoutRegistry = null),
        (rZ.globalThis =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
                ? window
                : void 0 !== n.g
                  ? n.g
                  : {}),
        (rZ.enableCSSParsing = !1),
        (rZ.enableDataset = !1),
        (rZ.enableStyleSyntax = !0),
        (rZ.enableAttributeDashCased = !1),
        (rZ.enableSizeAttenuation = !1);
      var rK = 0,
        rJ = new rG(X.INSERTED, null, '', '', '', 0, '', ''),
        r$ = new rG(X.REMOVED, null, '', '', '', 0, '', ''),
        rQ = new rC(X.DESTROY),
        r0 = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.entity = rK++),
              (e.renderable = {
                bounds: void 0,
                boundsDirty: !0,
                renderBounds: void 0,
                renderBoundsDirty: !0,
                dirtyRenderBounds: void 0,
                dirty: !1,
              }),
              (e.cullable = {
                strategy: Y.Standard,
                visibilityPlaneMask: -1,
                visible: !0,
                enable: !0,
              }),
              (e.transformable = {
                dirtyFlag: !1,
                localDirtyFlag: !1,
                frozen: !1,
                localPosition: [0, 0, 0],
                localRotation: [0, 0, 0, 1],
                localScale: [1, 1, 1],
                localTransform: [
                  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                ],
                localSkew: [0, 0],
                position: [0, 0, 0],
                rotation: [0, 0, 0, 1],
                scaling: [1, 1, 1],
                worldTransform: [
                  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                ],
                origin: [0, 0, 0],
              }),
              (e.sortable = {
                dirty: !1,
                sorted: void 0,
                renderOrder: 0,
                dirtyChildren: [],
                dirtyReason: void 0,
              }),
              (e.geometry = {
                contentBounds: void 0,
                renderBounds: void 0,
                dirty: !0,
              }),
              (e.rBushNode = { aabb: void 0 }),
              (e.namespaceURI = 'g'),
              (e.scrollLeft = 0),
              (e.scrollTop = 0),
              (e.clientTop = 0),
              (e.clientLeft = 0),
              (e.destroyed = !1),
              (e.style = {}),
              (e.computedStyle = rZ.enableCSSParsing
                ? {
                    opacity: ep,
                    fillOpacity: ep,
                    strokeOpacity: ep,
                    fill: ep,
                    stroke: ep,
                    transform: ep,
                    transformOrigin: ep,
                    visibility: ep,
                    pointerEvents: ep,
                    lineWidth: ep,
                    lineCap: ep,
                    lineJoin: ep,
                    increasedLineWidthForHitTesting: ep,
                    fontSize: ep,
                    fontFamily: ep,
                    fontStyle: ep,
                    fontWeight: ep,
                    fontVariant: ep,
                    textAlign: ep,
                    textBaseline: ep,
                    textTransform: ep,
                    zIndex: ep,
                    filter: ep,
                    shadowType: ep,
                  }
                : null),
              (e.parsedStyle = {}),
              (e.attributes = {}),
              e
            );
          }
          return (
            (0, H.__extends)(e, t),
            Object.defineProperty(e.prototype, 'className', {
              get: function () {
                return this.getAttribute('class') || '';
              },
              set: function (t) {
                this.setAttribute('class', t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'classList', {
              get: function () {
                return this.className.split(' ').filter(function (t) {
                  return '' !== t;
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'tagName', {
              get: function () {
                return this.nodeName;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'children', {
              get: function () {
                return this.childNodes;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'childElementCount', {
              get: function () {
                return this.childNodes.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'firstElementChild', {
              get: function () {
                return this.firstChild;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'lastElementChild', {
              get: function () {
                return this.lastChild;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'parentElement', {
              get: function () {
                return this.parentNode;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'nextSibling', {
              get: function () {
                if (this.parentNode) {
                  var t = this.parentNode.childNodes.indexOf(this);
                  return this.parentNode.childNodes[t + 1] || null;
                }
                return null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'previousSibling', {
              get: function () {
                if (this.parentNode) {
                  var t = this.parentNode.childNodes.indexOf(this);
                  return this.parentNode.childNodes[t - 1] || null;
                }
                return null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.cloneNode = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.appendChild = function (t, e) {
              var n;
              if (t.destroyed)
                throw Error('Cannot append a destroyed element.');
              return (
                rZ.sceneGraphService.attach(t, this, e),
                (null === (n = this.ownerDocument) || void 0 === n
                  ? void 0
                  : n.defaultView) &&
                  this.ownerDocument.defaultView.mountChildren(t),
                this.isMutationObserved &&
                  ((rJ.relatedNode = this), t.dispatchEvent(rJ)),
                t
              );
            }),
            (e.prototype.insertBefore = function (t, e) {
              if (e) {
                t.parentElement && t.parentElement.removeChild(t);
                var n = this.childNodes.indexOf(e);
                -1 === n ? this.appendChild(t) : this.appendChild(t, n);
              } else this.appendChild(t);
              return t;
            }),
            (e.prototype.replaceChild = function (t, e) {
              var n = this.childNodes.indexOf(e);
              return this.removeChild(e), this.appendChild(t, n), e;
            }),
            (e.prototype.removeChild = function (t) {
              var e;
              return (
                (r$.relatedNode = this),
                t.dispatchEvent(r$),
                (null === (e = t.ownerDocument) || void 0 === e
                  ? void 0
                  : e.defaultView) &&
                  t.ownerDocument.defaultView.unmountChildren(t),
                rZ.sceneGraphService.detach(t),
                t
              );
            }),
            (e.prototype.removeChildren = function () {
              for (var t = this.childNodes.length - 1; t >= 0; t--) {
                var e = this.childNodes[t];
                this.removeChild(e);
              }
            }),
            (e.prototype.destroyChildren = function () {
              for (var t = this.childNodes.length - 1; t >= 0; t--) {
                var e = this.childNodes[t];
                e.childNodes.length && e.destroyChildren(), e.destroy();
              }
            }),
            (e.prototype.matches = function (t) {
              return rZ.sceneGraphService.matches(t, this);
            }),
            (e.prototype.getElementById = function (t) {
              return rZ.sceneGraphService.querySelector('#'.concat(t), this);
            }),
            (e.prototype.getElementsByName = function (t) {
              return rZ.sceneGraphService.querySelectorAll(
                '[name="'.concat(t, '"]'),
                this,
              );
            }),
            (e.prototype.getElementsByClassName = function (t) {
              return rZ.sceneGraphService.querySelectorAll('.'.concat(t), this);
            }),
            (e.prototype.getElementsByTagName = function (t) {
              return rZ.sceneGraphService.querySelectorAll(t, this);
            }),
            (e.prototype.querySelector = function (t) {
              return rZ.sceneGraphService.querySelector(t, this);
            }),
            (e.prototype.querySelectorAll = function (t) {
              return rZ.sceneGraphService.querySelectorAll(t, this);
            }),
            (e.prototype.closest = function (t) {
              var e = this;
              do {
                if (rZ.sceneGraphService.matches(t, e)) return e;
                e = e.parentElement;
              } while (null !== e);
              return null;
            }),
            (e.prototype.find = function (t) {
              var e = this,
                n = null;
              return (
                this.forEach(function (r) {
                  return !!(r !== e && t(r)) && ((n = r), !0);
                }),
                n
              );
            }),
            (e.prototype.findAll = function (t) {
              var e = this,
                n = [];
              return (
                this.forEach(function (r) {
                  r !== e && t(r) && n.push(r);
                }),
                n
              );
            }),
            (e.prototype.after = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              if (this.parentNode) {
                var r = this.parentNode.childNodes.indexOf(this);
                e.forEach(function (e, n) {
                  var i;
                  return null === (i = t.parentNode) || void 0 === i
                    ? void 0
                    : i.appendChild(e, r + n + 1);
                });
              }
            }),
            (e.prototype.before = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              if (this.parentNode) {
                var n = this.parentNode.childNodes.indexOf(this),
                  r = (0, H.__read)(t),
                  i = r[0],
                  o = r.slice(1);
                this.parentNode.appendChild(i, n),
                  i.after.apply(
                    i,
                    (0, H.__spreadArray)([], (0, H.__read)(o), !1),
                  );
              }
            }),
            (e.prototype.replaceWith = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.after.apply(
                this,
                (0, H.__spreadArray)([], (0, H.__read)(t), !1),
              ),
                this.remove();
            }),
            (e.prototype.append = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              e.forEach(function (e) {
                return t.appendChild(e);
              });
            }),
            (e.prototype.prepend = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              e.forEach(function (e, n) {
                return t.appendChild(e, n);
              });
            }),
            (e.prototype.replaceChildren = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              for (; this.childNodes.length && this.firstChild; )
                this.removeChild(this.firstChild);
              this.append.apply(
                this,
                (0, H.__spreadArray)([], (0, H.__read)(t), !1),
              );
            }),
            (e.prototype.remove = function () {
              return this.parentNode ? this.parentNode.removeChild(this) : this;
            }),
            (e.prototype.destroy = function () {
              this.dispatchEvent(rQ),
                this.remove(),
                this.emitter.removeAllListeners(),
                (this.destroyed = !0);
            }),
            (e.prototype.getGeometryBounds = function () {
              return rZ.sceneGraphService.getGeometryBounds(this);
            }),
            (e.prototype.getRenderBounds = function () {
              return rZ.sceneGraphService.getBounds(this, !0);
            }),
            (e.prototype.getBounds = function () {
              return rZ.sceneGraphService.getBounds(this);
            }),
            (e.prototype.getLocalBounds = function () {
              return rZ.sceneGraphService.getLocalBounds(this);
            }),
            (e.prototype.getBoundingClientRect = function () {
              return rZ.sceneGraphService.getBoundingClientRect(this);
            }),
            (e.prototype.getClientRects = function () {
              return [this.getBoundingClientRect()];
            }),
            (e.prototype.computedStyleMap = function () {
              return new Map(Object.entries(this.computedStyle));
            }),
            (e.prototype.getAttributeNames = function () {
              return Object.keys(this.attributes);
            }),
            (e.prototype.getAttribute = function (t) {
              if ('symbol' == typeof t)
                return rZ.enableCSSParsing ? null : void 0;
              var e = this.attributes[t];
              if (void 0 !== e) return e;
              if (rZ.enableAttributeDashCased) {
                var n = eo(t);
                e = this.attributes[n];
              }
              return rZ.enableCSSParsing && (0, ti.Z)(e) ? null : e;
            }),
            (e.prototype.hasAttribute = function (t) {
              return this.getAttributeNames().includes(t);
            }),
            (e.prototype.hasAttributes = function () {
              return !!this.getAttributeNames().length;
            }),
            (e.prototype.removeAttribute = function (t) {
              this.setAttribute(t, null), delete this.attributes[t];
            }),
            (e.prototype.setAttribute = function (t, e, n, r) {
              this.attributes[t] = e;
            }),
            (e.prototype.getAttributeNS = function (t, e) {
              throw Error(tJ);
            }),
            (e.prototype.getAttributeNode = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.getAttributeNodeNS = function (t, e) {
              throw Error(tJ);
            }),
            (e.prototype.hasAttributeNS = function (t, e) {
              throw Error(tJ);
            }),
            (e.prototype.removeAttributeNS = function (t, e) {
              throw Error(tJ);
            }),
            (e.prototype.removeAttributeNode = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.setAttributeNS = function (t, e, n) {
              throw Error(tJ);
            }),
            (e.prototype.setAttributeNode = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.setAttributeNodeNS = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.toggleAttribute = function (t, e) {
              throw Error(tJ);
            }),
            e
          );
        })(rA);
      function r1(t) {
        return !!(null == t ? void 0 : t.nodeName);
      }
      var r2 = rZ.globalThis.Proxy ? rZ.globalThis.Proxy : function () {},
        r3 = new rG(
          X.ATTR_MODIFIED,
          null,
          null,
          null,
          null,
          rG.MODIFICATION,
          null,
          null,
        ),
        r5 = {
          opacity: '',
          fillOpacity: '',
          strokeOpacity: '',
          fill: '',
          stroke: '',
          transform: '',
          transformOrigin: '',
          visibility: '',
          pointerEvents: '',
          lineWidth: '',
          lineCap: '',
          lineJoin: '',
          increasedLineWidthForHitTesting: '',
          fontSize: '',
          fontFamily: '',
          fontStyle: '',
          fontWeight: '',
          fontVariant: '',
          textAlign: '',
          textBaseline: '',
          textTransform: '',
          zIndex: '',
          filter: '',
          shadowType: '',
        },
        r4 = {
          fill: ev,
          stroke: ev,
          transform: [],
          zIndex: 0,
          filter: [],
          shadowType: 'outer',
          miterLimit: 10,
        },
        r9 = (0, H.__spreadArray)(
          (0, H.__spreadArray)(
            [],
            (0, H.__read)([
              'opacity',
              'fillOpacity',
              'strokeOpacity',
              'transformOrigin',
              'visibility',
              'pointerEvents',
              'lineWidth',
              'lineCap',
              'lineJoin',
              'increasedLineWidthForHitTesting',
            ]),
            !1,
          ),
          [
            'fontSize',
            'fontFamily',
            'fontStyle',
            'fontWeight',
            'fontVariant',
            'textAlign',
            'textBaseline',
            'textTransform',
          ],
          !1,
        ),
        r6 = 'data-',
        r8 = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.isCustomElement = !1),
              (n.isMutationObserved = !1),
              (n.activeAnimations = []),
              (n.config = e),
              (n.id = n.config.id || ''),
              (n.name = n.config.name || ''),
              (n.config.className || n.config.class) &&
                (n.className = n.config.className || n.config.class),
              (n.nodeName = n.config.type || C.GROUP),
              rZ.enableCSSParsing
                ? (Object.assign(n.attributes, r5),
                  Object.assign(n.parsedStyle, r4, n.config.initialParsedStyle))
                : n.config.initialParsedStyle &&
                  Object.assign(n.parsedStyle, n.config.initialParsedStyle),
              n.initAttributes(n.config.style),
              rZ.enableDataset &&
                (n.dataset = new r2(
                  {},
                  {
                    get: function (t, e) {
                      var r = ''.concat(r6).concat(en(e));
                      return void 0 !== t[r] ? t[r] : n.getAttribute(r);
                    },
                    set: function (t, e, r) {
                      return n.setAttribute(''.concat(r6).concat(en(e)), r), !0;
                    },
                  },
                )),
              rZ.enableStyleSyntax &&
                (n.style = new r2(
                  {
                    setProperty: function (t, e) {
                      n.setAttribute(t, e);
                    },
                    getPropertyValue: function (t) {
                      return n.getAttribute(t);
                    },
                    removeProperty: function (t) {
                      n.removeAttribute(t);
                    },
                    item: function () {
                      return '';
                    },
                  },
                  {
                    get: function (t, e) {
                      return void 0 !== t[e] ? t[e] : n.getAttribute(e);
                    },
                    set: function (t, e, r) {
                      return n.setAttribute(e, r), !0;
                    },
                  },
                )),
              n
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this.getAnimations().forEach(function (t) {
                  t.cancel();
                });
            }),
            (e.prototype.cloneNode = function (t, e) {
              var n = (0, H.__assign)({}, this.attributes);
              for (var r in n) {
                var i = n[r];
                r1(i) &&
                  'clipPath' !== r &&
                  'offsetPath' !== r &&
                  'textPath' !== r &&
                  (n[r] = i.cloneNode(t)),
                  e && (n[r] = e(r, i));
              }
              var o = new this.constructor({
                id: this.id,
                name: this.name,
                className: this.name,
                interactive: this.interactive,
                style: n,
              });
              return (
                o.setLocalTransform(this.getLocalTransform()),
                t &&
                  this.children.forEach(function (e) {
                    if (!e.style.isMarker) {
                      var n = e.cloneNode(t);
                      o.appendChild(n);
                    }
                  }),
                o
              );
            }),
            (e.prototype.initAttributes = function (t) {
              void 0 === t && (t = {});
              var e = this.renderable,
                n = { forceUpdateGeometry: !0 };
              rZ.enableCSSParsing && (n.usedAttributes = r9);
              var r = t;
              if (rZ.enableAttributeDashCased)
                for (var i in ((r = {}), t)) r[eo(i)] = t[i];
              rZ.styleValueRegistry.processProperties(this, r, n),
                (e.dirty = !0);
            }),
            (e.prototype.setAttribute = function (e, n, r, i) {
              void 0 === r && (r = !1),
                void 0 === i && (i = !0),
                rZ.enableAttributeDashCased && (e = eo(e)),
                !(0, tE.Z)(n) &&
                  (r || n !== this.attributes[e]) &&
                  (this.internalSetAttribute(e, n, { memoize: i }),
                  t.prototype.setAttribute.call(this, e, n));
            }),
            (e.prototype.internalSetAttribute = function (t, e, n) {
              void 0 === n && (n = {});
              var r,
                i = this.renderable,
                o = this.attributes[t],
                a = this.parsedStyle[t];
              rZ.styleValueRegistry.processProperties(
                this,
                (((r = {})[t] = e), r),
                n,
              ),
                (i.dirty = !0);
              var s = this.parsedStyle[t];
              this.isConnected &&
                ((r3.relatedNode = this),
                (r3.prevValue = o),
                (r3.newValue = e),
                (r3.attrName = t),
                (r3.prevParsedValue = a),
                (r3.newParsedValue = s),
                this.isMutationObserved
                  ? this.dispatchEvent(r3)
                  : ((r3.target = this),
                    this.ownerDocument.defaultView.dispatchEvent(r3, !0))),
                ((this.isCustomElement && this.isConnected) ||
                  !this.isCustomElement) &&
                  this.attributeChangedCallback &&
                  this.attributeChangedCallback(t, o, e, a, s);
            }),
            (e.prototype.getBBox = function () {
              var t = this.getBounds(),
                e = (0, H.__read)(t.getMin(), 2),
                n = e[0],
                r = e[1],
                i = (0, H.__read)(t.getMax(), 2);
              return new tK(n, r, i[0] - n, i[1] - r);
            }),
            (e.prototype.setOrigin = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                rZ.sceneGraphService.setOrigin(this, tI(t, e, n)),
                this
              );
            }),
            (e.prototype.getOrigin = function () {
              return rZ.sceneGraphService.getOrigin(this);
            }),
            (e.prototype.setPosition = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                rZ.sceneGraphService.setPosition(this, tI(t, e, n)),
                this
              );
            }),
            (e.prototype.setLocalPosition = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                rZ.sceneGraphService.setLocalPosition(this, tI(t, e, n)),
                this
              );
            }),
            (e.prototype.translate = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                rZ.sceneGraphService.translate(this, tI(t, e, n)),
                this
              );
            }),
            (e.prototype.translateLocal = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                rZ.sceneGraphService.translateLocal(this, tI(t, e, n)),
                this
              );
            }),
            (e.prototype.getPosition = function () {
              return rZ.sceneGraphService.getPosition(this);
            }),
            (e.prototype.getLocalPosition = function () {
              return rZ.sceneGraphService.getLocalPosition(this);
            }),
            (e.prototype.scale = function (t, e, n) {
              return this.scaleLocal(t, e, n);
            }),
            (e.prototype.scaleLocal = function (t, e, n) {
              return (
                'number' == typeof t &&
                  ((e = e || t), (n = n || t), (t = tI(t, e, n))),
                rZ.sceneGraphService.scaleLocal(this, t),
                this
              );
            }),
            (e.prototype.setLocalScale = function (t, e, n) {
              return (
                'number' == typeof t &&
                  ((e = e || t), (n = n || t), (t = tI(t, e, n))),
                rZ.sceneGraphService.setLocalScale(this, t),
                this
              );
            }),
            (e.prototype.getLocalScale = function () {
              return rZ.sceneGraphService.getLocalScale(this);
            }),
            (e.prototype.getScale = function () {
              return rZ.sceneGraphService.getScale(this);
            }),
            (e.prototype.getEulerAngles = function () {
              return tG(
                (0, H.__read)(
                  tF(K.Ue(), rZ.sceneGraphService.getWorldTransform(this)),
                  3,
                )[2],
              );
            }),
            (e.prototype.getLocalEulerAngles = function () {
              return tG(
                (0, H.__read)(
                  tF(K.Ue(), rZ.sceneGraphService.getLocalRotation(this)),
                  3,
                )[2],
              );
            }),
            (e.prototype.setEulerAngles = function (t) {
              return rZ.sceneGraphService.setEulerAngles(this, 0, 0, t), this;
            }),
            (e.prototype.setLocalEulerAngles = function (t) {
              return (
                rZ.sceneGraphService.setLocalEulerAngles(this, 0, 0, t), this
              );
            }),
            (e.prototype.rotateLocal = function (t, e, n) {
              return (
                (0, ti.Z)(e) && (0, ti.Z)(n)
                  ? rZ.sceneGraphService.rotateLocal(this, 0, 0, t)
                  : rZ.sceneGraphService.rotateLocal(this, t, e, n),
                this
              );
            }),
            (e.prototype.rotate = function (t, e, n) {
              return (
                (0, ti.Z)(e) && (0, ti.Z)(n)
                  ? rZ.sceneGraphService.rotate(this, 0, 0, t)
                  : rZ.sceneGraphService.rotate(this, t, e, n),
                this
              );
            }),
            (e.prototype.setRotation = function (t, e, n, r) {
              return rZ.sceneGraphService.setRotation(this, t, e, n, r), this;
            }),
            (e.prototype.setLocalRotation = function (t, e, n, r) {
              return (
                rZ.sceneGraphService.setLocalRotation(this, t, e, n, r), this
              );
            }),
            (e.prototype.setLocalSkew = function (t, e) {
              return rZ.sceneGraphService.setLocalSkew(this, t, e), this;
            }),
            (e.prototype.getRotation = function () {
              return rZ.sceneGraphService.getRotation(this);
            }),
            (e.prototype.getLocalRotation = function () {
              return rZ.sceneGraphService.getLocalRotation(this);
            }),
            (e.prototype.getLocalSkew = function () {
              return rZ.sceneGraphService.getLocalSkew(this);
            }),
            (e.prototype.getLocalTransform = function () {
              return rZ.sceneGraphService.getLocalTransform(this);
            }),
            (e.prototype.getWorldTransform = function () {
              return rZ.sceneGraphService.getWorldTransform(this);
            }),
            (e.prototype.setLocalTransform = function (t) {
              return rZ.sceneGraphService.setLocalTransform(this, t), this;
            }),
            (e.prototype.resetLocalTransform = function () {
              rZ.sceneGraphService.resetLocalTransform(this);
            }),
            (e.prototype.getAnimations = function () {
              return this.activeAnimations;
            }),
            (e.prototype.animate = function (t, e) {
              var n,
                r =
                  null === (n = this.ownerDocument) || void 0 === n
                    ? void 0
                    : n.timeline;
              return r ? r.play(this, t, e) : null;
            }),
            (e.prototype.isVisible = function () {
              var t, e;
              return rZ.enableCSSParsing
                ? (null === (t = this.parsedStyle) || void 0 === t
                    ? void 0
                    : t.visibility) === 'visible'
                : (null === (e = this.parsedStyle) || void 0 === e
                    ? void 0
                    : e.visibility) !== 'hidden';
            }),
            Object.defineProperty(e.prototype, 'interactive', {
              get: function () {
                return this.isInteractive();
              },
              set: function (t) {
                this.style.pointerEvents = t ? 'auto' : 'none';
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.isInteractive = function () {
              var t;
              return (
                (null === (t = this.parsedStyle) || void 0 === t
                  ? void 0
                  : t.pointerEvents) !== 'none'
              );
            }),
            (e.prototype.isCulled = function () {
              return !!(
                this.cullable &&
                this.cullable.enable &&
                !this.cullable.visible
              );
            }),
            (e.prototype.toFront = function () {
              return (
                this.parentNode &&
                  (this.style.zIndex =
                    Math.max.apply(
                      Math,
                      (0, H.__spreadArray)(
                        [],
                        (0, H.__read)(
                          this.parentNode.children.map(function (t) {
                            return Number(t.style.zIndex);
                          }),
                        ),
                        !1,
                      ),
                    ) + 1),
                this
              );
            }),
            (e.prototype.toBack = function () {
              return (
                this.parentNode &&
                  (this.style.zIndex =
                    Math.min.apply(
                      Math,
                      (0, H.__spreadArray)(
                        [],
                        (0, H.__read)(
                          this.parentNode.children.map(function (t) {
                            return Number(t.style.zIndex);
                          }),
                        ),
                        !1,
                      ),
                    ) - 1),
                this
              );
            }),
            (e.prototype.getConfig = function () {
              return this.config;
            }),
            (e.prototype.attr = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              var r = (0, H.__read)(e, 2),
                i = r[0],
                o = r[1];
              return i
                ? (0, tT.Z)(i)
                  ? (Object.keys(i).forEach(function (e) {
                      t.setAttribute(e, i[e]);
                    }),
                    this)
                  : 2 === e.length
                    ? (this.setAttribute(i, o), this)
                    : this.attributes[i]
                : this.attributes;
            }),
            (e.prototype.getMatrix = function (t) {
              var e,
                n,
                r,
                i = t || this.getWorldTransform(),
                o = (0, H.__read)(J.getTranslation(K.Ue(), i), 2),
                a = o[0],
                s = o[1],
                l = (0, H.__read)(J.getScaling(K.Ue(), i), 2),
                u = l[0],
                c = l[1],
                h = J.getRotation(tt.Ue(), i),
                p = (0, H.__read)(tF(K.Ue(), h), 3),
                d = p[0],
                f = p[2];
              return (
                (n = Math.cos((e = d || f))),
                (r = Math.sin(e)),
                $.al(u * n, c * r, 0, -u * r, c * n, 0, a, s, 1)
              );
            }),
            (e.prototype.getLocalMatrix = function () {
              return this.getMatrix(this.getLocalTransform());
            }),
            (e.prototype.setMatrix = function (t) {
              var e = (0, H.__read)(tB(t), 5),
                n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4];
              this.setEulerAngles(a).setPosition(n, r).setLocalScale(i, o);
            }),
            (e.prototype.setLocalMatrix = function (t) {
              var e = (0, H.__read)(tB(t), 5),
                n = e[0],
                r = e[1],
                i = e[2],
                o = e[3],
                a = e[4];
              this.setLocalEulerAngles(a)
                .setLocalPosition(n, r)
                .setLocalScale(i, o);
            }),
            (e.prototype.show = function () {
              rZ.enableCSSParsing
                ? (this.style.visibility = 'visible')
                : this.forEach(function (t) {
                    t.style.visibility = 'visible';
                  });
            }),
            (e.prototype.hide = function () {
              rZ.enableCSSParsing
                ? (this.style.visibility = 'hidden')
                : this.forEach(function (t) {
                    t.style.visibility = 'hidden';
                  });
            }),
            (e.prototype.getCount = function () {
              return this.childElementCount;
            }),
            (e.prototype.getParent = function () {
              return this.parentElement;
            }),
            (e.prototype.getChildren = function () {
              return this.children;
            }),
            (e.prototype.getFirst = function () {
              return this.firstElementChild;
            }),
            (e.prototype.getLast = function () {
              return this.lastElementChild;
            }),
            (e.prototype.getChildByIndex = function (t) {
              return this.children[t] || null;
            }),
            (e.prototype.add = function (t, e) {
              return this.appendChild(t, e);
            }),
            (e.prototype.set = function (t, e) {
              this.config[t] = e;
            }),
            (e.prototype.get = function (t) {
              return this.config[t];
            }),
            (e.prototype.moveTo = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                this.setPosition(t, e, n),
                this
              );
            }),
            (e.prototype.move = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                this.setPosition(t, e, n),
                this
              );
            }),
            (e.prototype.setZIndex = function (t) {
              return (this.style.zIndex = t), this;
            }),
            e
          );
        })(r0),
        r7 = (function (t) {
          function e(e) {
            return (
              void 0 === e && (e = {}),
              t.call(this, (0, H.__assign)({ type: C.CIRCLE }, e)) || this
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        it = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this,
              r = e.style,
              i = (0, H.__rest)(e, ['style']);
            return (
              ((n =
                t.call(
                  this,
                  (0, H.__assign)(
                    { style: (rZ.enableCSSParsing, (0, H.__assign)({}, r)) },
                    i,
                  ),
                ) || this).isCustomElement = !0),
              n
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        ie = (function (t) {
          function e(e) {
            return (
              void 0 === e && (e = {}),
              t.call(this, (0, H.__assign)({ type: C.ELLIPSE }, e)) || this
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        ir = (function (t) {
          function e(e) {
            return (
              void 0 === e && (e = {}),
              t.call(this, (0, H.__assign)({ type: C.GROUP }, e)) || this
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        ii = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this,
              r = e.style,
              i = (0, H.__rest)(e, ['style']);
            return (
              ((n =
                t.call(
                  this,
                  (0, H.__assign)(
                    {
                      type: C.HTML,
                      style: rZ.enableCSSParsing
                        ? (0, H.__assign)(
                            {
                              x: '',
                              y: '',
                              width: 'auto',
                              height: 'auto',
                              innerHTML: '',
                            },
                            r,
                          )
                        : (0, H.__assign)({}, r),
                    },
                    i,
                  ),
                ) || this).cullable.enable = !1),
              n
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.getDomElement = function () {
              return this.parsedStyle.$el;
            }),
            (e.prototype.getClientRects = function () {
              return [this.getBoundingClientRect()];
            }),
            (e.prototype.getLocalBounds = function () {
              if (this.parentNode) {
                var t = J.invert(
                    J.create(),
                    this.parentNode.getWorldTransform(),
                  ),
                  e = this.getBounds();
                if (!tX.isEmpty(e)) {
                  var n = new tX();
                  return n.setFromTransformedAABB(e, t), n;
                }
              }
              return this.getBounds();
            }),
            e
          );
        })(r8),
        io = (function (t) {
          function e(e) {
            return (
              void 0 === e && (e = {}),
              t.call(this, (0, H.__assign)({ type: C.IMAGE }, e)) || this
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        ia = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this,
              r = e.style,
              i = (0, H.__rest)(e, ['style']);
            ((n =
              t.call(
                this,
                (0, H.__assign)(
                  {
                    type: C.LINE,
                    style: (0, H.__assign)(
                      { x1: 0, y1: 0, x2: 0, y2: 0, z1: 0, z2: 0 },
                      r,
                    ),
                  },
                  i,
                ),
              ) || this).markerStartAngle = 0),
              (n.markerEndAngle = 0);
            var o = n.parsedStyle,
              a = o.markerStart,
              s = o.markerEnd;
            return (
              a &&
                r1(a) &&
                ((n.markerStartAngle = a.getLocalEulerAngles()),
                n.appendChild(a)),
              s &&
                r1(s) &&
                ((n.markerEndAngle = s.getLocalEulerAngles()),
                n.appendChild(s)),
              n.transformMarker(!0),
              n.transformMarker(!1),
              n
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.attributeChangedCallback = function (t, e, n, r, i) {
              'x1' === t ||
              'y1' === t ||
              'x2' === t ||
              'y2' === t ||
              'markerStartOffset' === t ||
              'markerEndOffset' === t
                ? (this.transformMarker(!0), this.transformMarker(!1))
                : 'markerStart' === t
                  ? (r && r1(r) && ((this.markerStartAngle = 0), r.remove()),
                    i &&
                      r1(i) &&
                      ((this.markerStartAngle = i.getLocalEulerAngles()),
                      this.appendChild(i),
                      this.transformMarker(!0)))
                  : 'markerEnd' === t &&
                    (r && r1(r) && ((this.markerEndAngle = 0), r.remove()),
                    i &&
                      r1(i) &&
                      ((this.markerEndAngle = i.getLocalEulerAngles()),
                      this.appendChild(i),
                      this.transformMarker(!1)));
            }),
            (e.prototype.transformMarker = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s = this.parsedStyle,
                l = s.markerStart,
                u = s.markerEnd,
                c = s.markerStartOffset,
                h = s.markerEndOffset,
                p = s.x1,
                d = s.x2,
                f = s.y1,
                v = s.y2,
                y = t ? l : u;
              if (y && r1(y)) {
                var g = 0;
                t
                  ? ((r = p),
                    (i = f),
                    (e = d - p),
                    (n = v - f),
                    (o = c || 0),
                    (a = this.markerStartAngle))
                  : ((r = d),
                    (i = v),
                    (e = p - d),
                    (n = f - v),
                    (o = h || 0),
                    (a = this.markerEndAngle)),
                  (g = Math.atan2(n, e)),
                  y.setLocalEulerAngles((180 * g) / Math.PI + a),
                  y.setLocalPosition(r + Math.cos(g) * o, i + Math.sin(g) * o);
              }
            }),
            (e.prototype.getPoint = function (t, e) {
              void 0 === e && (e = !1);
              var n = this.parsedStyle,
                r = n.x1,
                i = n.y1,
                o = n.x2,
                a = n.y2,
                s = (0, tN.U4)(r, i, o, a, t),
                l = s.x,
                u = s.y,
                c = K.fF(
                  K.Ue(),
                  K.al(l, u, 0),
                  e ? this.getWorldTransform() : this.getLocalTransform(),
                );
              return new tq(c[0], c[1]);
            }),
            (e.prototype.getPointAtLength = function (t, e) {
              return (
                void 0 === e && (e = !1),
                this.getPoint(t / this.getTotalLength(), e)
              );
            }),
            (e.prototype.getTotalLength = function () {
              var t = this.parsedStyle,
                e = t.x1,
                n = t.y1,
                r = t.x2,
                i = t.y2;
              return (0, tN.Xk)(e, n, r, i);
            }),
            e
          );
        })(r8),
        is = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this,
              r = e.style,
              i = (0, H.__rest)(e, ['style']);
            ((n =
              t.call(
                this,
                (0, H.__assign)(
                  {
                    type: C.PATH,
                    style: rZ.enableCSSParsing
                      ? (0, H.__assign)({ d: '', miterLimit: '' }, r)
                      : (0, H.__assign)({}, r),
                    initialParsedStyle: rZ.enableCSSParsing
                      ? null
                      : { miterLimit: 4, d: (0, H.__assign)({}, eE) },
                  },
                  i,
                ),
              ) || this).markerStartAngle = 0),
              (n.markerEndAngle = 0),
              (n.markerMidList = []);
            var o = n.parsedStyle,
              a = o.markerStart,
              s = o.markerEnd,
              l = o.markerMid;
            return (
              a &&
                r1(a) &&
                ((n.markerStartAngle = a.getLocalEulerAngles()),
                n.appendChild(a)),
              l && r1(l) && n.placeMarkerMid(l),
              s &&
                r1(s) &&
                ((n.markerEndAngle = s.getLocalEulerAngles()),
                n.appendChild(s)),
              n.transformMarker(!0),
              n.transformMarker(!1),
              n
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.attributeChangedCallback = function (t, e, n, r, i) {
              'd' === t
                ? (this.transformMarker(!0),
                  this.transformMarker(!1),
                  this.placeMarkerMid(this.parsedStyle.markerMid))
                : 'markerStartOffset' === t || 'markerEndOffset' === t
                  ? (this.transformMarker(!0), this.transformMarker(!1))
                  : 'markerStart' === t
                    ? (r && r1(r) && ((this.markerStartAngle = 0), r.remove()),
                      i &&
                        r1(i) &&
                        ((this.markerStartAngle = i.getLocalEulerAngles()),
                        this.appendChild(i),
                        this.transformMarker(!0)))
                    : 'markerEnd' === t
                      ? (r && r1(r) && ((this.markerEndAngle = 0), r.remove()),
                        i &&
                          r1(i) &&
                          ((this.markerEndAngle = i.getLocalEulerAngles()),
                          this.appendChild(i),
                          this.transformMarker(!1)))
                      : 'markerMid' === t && this.placeMarkerMid(i);
            }),
            (e.prototype.transformMarker = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s = this.parsedStyle,
                l = s.markerStart,
                u = s.markerEnd,
                c = s.markerStartOffset,
                h = s.markerEndOffset,
                p = t ? l : u;
              if (p && r1(p)) {
                var d = 0;
                if (t) {
                  var f = (0, H.__read)(this.getStartTangent(), 2),
                    v = f[0],
                    y = f[1];
                  (r = y[0]),
                    (i = y[1]),
                    (e = v[0] - y[0]),
                    (n = v[1] - y[1]),
                    (o = c || 0),
                    (a = this.markerStartAngle);
                } else {
                  var g = (0, H.__read)(this.getEndTangent(), 2),
                    v = g[0],
                    y = g[1];
                  (r = y[0]),
                    (i = y[1]),
                    (e = v[0] - y[0]),
                    (n = v[1] - y[1]),
                    (o = h || 0),
                    (a = this.markerEndAngle);
                }
                (d = Math.atan2(n, e)),
                  p.setLocalEulerAngles((180 * d) / Math.PI + a),
                  p.setLocalPosition(r + Math.cos(d) * o, i + Math.sin(d) * o);
              }
            }),
            (e.prototype.placeMarkerMid = function (t) {
              var e = this.parsedStyle.d.segments;
              if (
                (this.markerMidList.forEach(function (t) {
                  t.remove();
                }),
                t && r1(t))
              )
                for (var n = 1; n < e.length - 1; n++) {
                  var r = (0, H.__read)(e[n].currentPoint, 2),
                    i = r[0],
                    o = r[1],
                    a = 1 === n ? t : t.cloneNode(!0);
                  this.markerMidList.push(a),
                    this.appendChild(a),
                    a.setLocalPosition(i, o);
                }
            }),
            (e.prototype.getTotalLength = function () {
              return e0(this);
            }),
            (e.prototype.getPointAtLength = function (t, e) {
              void 0 === e && (e = !1);
              var n = this.parsedStyle.d.absolutePath,
                r = (0, tP.r)(n, t),
                i = r.x,
                o = r.y,
                a = K.fF(
                  K.Ue(),
                  K.al(i, o, 0),
                  e ? this.getWorldTransform() : this.getLocalTransform(),
                );
              return new tq(a[0], a[1]);
            }),
            (e.prototype.getPoint = function (t, e) {
              return (
                void 0 === e && (e = !1), this.getPointAtLength(t * e0(this), e)
              );
            }),
            (e.prototype.getStartTangent = function () {
              var t = this.parsedStyle.d.segments,
                e = [];
              if (t.length > 1) {
                var n = t[0].currentPoint,
                  r = t[1].currentPoint,
                  i = t[1].startTangent;
                (e = []),
                  i ? e.push([n[0] - i[0], n[1] - i[1]]) : e.push([r[0], r[1]]),
                  e.push([n[0], n[1]]);
              }
              return e;
            }),
            (e.prototype.getEndTangent = function () {
              var t = this.parsedStyle.d.segments,
                e = t.length,
                n = [];
              if (e > 1) {
                var r = t[e - 2].currentPoint,
                  i = t[e - 1].currentPoint,
                  o = t[e - 1].endTangent;
                (n = []),
                  o ? n.push([i[0] - o[0], i[1] - o[1]]) : n.push([r[0], r[1]]),
                  n.push([i[0], i[1]]);
              }
              return n;
            }),
            e
          );
        })(r8),
        il = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = this,
              r = e.style,
              i = (0, H.__rest)(e, ['style']);
            ((n =
              t.call(
                this,
                (0, H.__assign)(
                  {
                    type: C.POLYGON,
                    style: rZ.enableCSSParsing
                      ? (0, H.__assign)(
                          { points: '', miterLimit: '', isClosed: !0 },
                          r,
                        )
                      : (0, H.__assign)({}, r),
                    initialParsedStyle: rZ.enableCSSParsing
                      ? null
                      : {
                          points: { points: [], totalLength: 0, segments: [] },
                          miterLimit: 4,
                          isClosed: !0,
                        },
                  },
                  i,
                ),
              ) || this).markerStartAngle = 0),
              (n.markerEndAngle = 0),
              (n.markerMidList = []);
            var o = n.parsedStyle,
              a = o.markerStart,
              s = o.markerEnd,
              l = o.markerMid;
            return (
              a &&
                r1(a) &&
                ((n.markerStartAngle = a.getLocalEulerAngles()),
                n.appendChild(a)),
              l && r1(l) && n.placeMarkerMid(l),
              s &&
                r1(s) &&
                ((n.markerEndAngle = s.getLocalEulerAngles()),
                n.appendChild(s)),
              n.transformMarker(!0),
              n.transformMarker(!1),
              n
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.attributeChangedCallback = function (t, e, n, r, i) {
              'points' === t
                ? (this.transformMarker(!0),
                  this.transformMarker(!1),
                  this.placeMarkerMid(this.parsedStyle.markerMid))
                : 'markerStartOffset' === t || 'markerEndOffset' === t
                  ? (this.transformMarker(!0), this.transformMarker(!1))
                  : 'markerStart' === t
                    ? (r && r1(r) && ((this.markerStartAngle = 0), r.remove()),
                      i &&
                        r1(i) &&
                        ((this.markerStartAngle = i.getLocalEulerAngles()),
                        this.appendChild(i),
                        this.transformMarker(!0)))
                    : 'markerEnd' === t
                      ? (r && r1(r) && ((this.markerEndAngle = 0), r.remove()),
                        i &&
                          r1(i) &&
                          ((this.markerEndAngle = i.getLocalEulerAngles()),
                          this.appendChild(i),
                          this.transformMarker(!1)))
                      : 'markerMid' === t && this.placeMarkerMid(i);
            }),
            (e.prototype.transformMarker = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s = this.parsedStyle,
                l = s.markerStart,
                u = s.markerEnd,
                c = s.markerStartOffset,
                h = s.markerEndOffset,
                p = (s.points || {}).points,
                d = t ? l : u;
              if (d && r1(d) && p) {
                var f = 0;
                if (((r = p[0][0]), (i = p[0][1]), t))
                  (e = p[1][0] - p[0][0]),
                    (n = p[1][1] - p[0][1]),
                    (o = c || 0),
                    (a = this.markerStartAngle);
                else {
                  var v = p.length;
                  this.parsedStyle.isClosed
                    ? ((e = p[v - 1][0] - p[0][0]), (n = p[v - 1][1] - p[0][1]))
                    : ((r = p[v - 1][0]),
                      (i = p[v - 1][1]),
                      (e = p[v - 2][0] - p[v - 1][0]),
                      (n = p[v - 2][1] - p[v - 1][1])),
                    (o = h || 0),
                    (a = this.markerEndAngle);
                }
                (f = Math.atan2(n, e)),
                  d.setLocalEulerAngles((180 * f) / Math.PI + a),
                  d.setLocalPosition(r + Math.cos(f) * o, i + Math.sin(f) * o);
              }
            }),
            (e.prototype.placeMarkerMid = function (t) {
              var e = (this.parsedStyle.points || {}).points;
              if (
                (this.markerMidList.forEach(function (t) {
                  t.remove();
                }),
                (this.markerMidList = []),
                t && r1(t) && e)
              )
                for (
                  var n = 1;
                  n < (this.parsedStyle.isClosed ? e.length : e.length - 1);
                  n++
                ) {
                  var r = e[n][0],
                    i = e[n][1],
                    o = 1 === n ? t : t.cloneNode(!0);
                  this.markerMidList.push(o),
                    this.appendChild(o),
                    o.setLocalPosition(r, i);
                }
            }),
            e
          );
        })(r8),
        iu = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = e.style,
              r = (0, H.__rest)(e, ['style']);
            return (
              t.call(
                this,
                (0, H.__assign)(
                  {
                    type: C.POLYLINE,
                    style: rZ.enableCSSParsing
                      ? (0, H.__assign)(
                          { points: '', miterLimit: '', isClosed: !1 },
                          n,
                        )
                      : (0, H.__assign)({}, n),
                    initialParsedStyle: rZ.enableCSSParsing
                      ? null
                      : {
                          points: { points: [], totalLength: 0, segments: [] },
                          miterLimit: 4,
                          isClosed: !1,
                        },
                  },
                  r,
                ),
              ) || this
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.getTotalLength = function () {
              return (
                0 === this.parsedStyle.points.totalLength &&
                  (this.parsedStyle.points.totalLength = (0, tN.hE)(
                    this.parsedStyle.points.points,
                  )),
                this.parsedStyle.points.totalLength
              );
            }),
            (e.prototype.getPointAtLength = function (t, e) {
              return (
                void 0 === e && (e = !1),
                this.getPoint(t / this.getTotalLength(), e)
              );
            }),
            (e.prototype.getPoint = function (t, e) {
              void 0 === e && (e = !1);
              var n = this.parsedStyle.points.points;
              if (0 === this.parsedStyle.points.segments.length) {
                var r,
                  i,
                  o = [],
                  a = 0,
                  s = this.getTotalLength();
                n.forEach(function (t, e) {
                  n[e + 1] &&
                    (((r = [0, 0])[0] = a / s),
                    (i = (0, tN.Xk)(t[0], t[1], n[e + 1][0], n[e + 1][1])),
                    (a += i),
                    (r[1] = a / s),
                    o.push(r));
                }),
                  (this.parsedStyle.points.segments = o);
              }
              var l = 0,
                u = 0;
              this.parsedStyle.points.segments.forEach(function (e, n) {
                t >= e[0] &&
                  t <= e[1] &&
                  ((l = (t - e[0]) / (e[1] - e[0])), (u = n));
              });
              var c = (0, tN.U4)(n[u][0], n[u][1], n[u + 1][0], n[u + 1][1], l),
                h = c.x,
                p = c.y,
                d = K.fF(
                  K.Ue(),
                  K.al(h, p, 0),
                  e ? this.getWorldTransform() : this.getLocalTransform(),
                );
              return new tq(d[0], d[1]);
            }),
            (e.prototype.getStartTangent = function () {
              var t = this.parsedStyle.points.points,
                e = [];
              return e.push([t[1][0], t[1][1]]), e.push([t[0][0], t[0][1]]), e;
            }),
            (e.prototype.getEndTangent = function () {
              var t = this.parsedStyle.points.points,
                e = t.length - 1,
                n = [];
              return (
                n.push([t[e - 1][0], t[e - 1][1]]),
                n.push([t[e][0], t[e][1]]),
                n
              );
            }),
            e
          );
        })(il),
        ic = (function (t) {
          function e(e) {
            return (
              void 0 === e && (e = {}),
              t.call(this, (0, H.__assign)({ type: C.RECT }, e)) || this
            );
          }
          return (0, H.__extends)(e, t), e;
        })(r8),
        ih = (function (t) {
          function e(e) {
            void 0 === e && (e = {});
            var n = e.style,
              r = (0, H.__rest)(e, ['style']);
            return (
              t.call(
                this,
                (0, H.__assign)(
                  {
                    type: C.TEXT,
                    style: rZ.enableCSSParsing
                      ? (0, H.__assign)(
                          {
                            x: '',
                            y: '',
                            text: '',
                            fontSize: '',
                            fontFamily: '',
                            fontStyle: '',
                            fontWeight: '',
                            fontVariant: '',
                            textAlign: '',
                            textBaseline: '',
                            textTransform: '',
                            fill: 'black',
                            letterSpacing: '',
                            lineHeight: '',
                            miterLimit: '',
                            wordWrap: !1,
                            wordWrapWidth: 0,
                            leading: 0,
                            dx: '',
                            dy: '',
                          },
                          n,
                        )
                      : (0, H.__assign)({ fill: 'black' }, n),
                  },
                  r,
                ),
              ) || this
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.getComputedTextLength = function () {
              var t;
              return (
                this.getGeometryBounds(),
                (null === (t = this.parsedStyle.metrics) || void 0 === t
                  ? void 0
                  : t.maxLineWidth) || 0
              );
            }),
            (e.prototype.getLineBoundingRects = function () {
              var t;
              return (
                this.getGeometryBounds(),
                (null === (t = this.parsedStyle.metrics) || void 0 === t
                  ? void 0
                  : t.lineMetrics) || []
              );
            }),
            (e.prototype.isOverflowing = function () {
              return this.getGeometryBounds(), !!this.parsedStyle.isOverflowing;
            }),
            e
          );
        })(r8),
        ip = (function () {
          function t() {
            (this.registry = {}),
              this.define(C.CIRCLE, r7),
              this.define(C.ELLIPSE, ie),
              this.define(C.RECT, ic),
              this.define(C.IMAGE, io),
              this.define(C.LINE, ia),
              this.define(C.GROUP, ir),
              this.define(C.PATH, is),
              this.define(C.POLYGON, il),
              this.define(C.POLYLINE, iu),
              this.define(C.TEXT, ih),
              this.define(C.HTML, ii);
          }
          return (
            (t.prototype.define = function (t, e) {
              this.registry[t] = e;
            }),
            (t.prototype.get = function (t) {
              return this.registry[t];
            }),
            t
          );
        })(),
        id = {
          number: function (t) {
            return new el(t);
          },
          percent: function (t) {
            return new el(t, '%');
          },
          px: function (t) {
            return new el(t, 'px');
          },
          em: function (t) {
            return new el(t, 'em');
          },
          rem: function (t) {
            return new el(t, 'rem');
          },
          deg: function (t) {
            return new el(t, 'deg');
          },
          grad: function (t) {
            return new el(t, 'grad');
          },
          rad: function (t) {
            return new el(t, 'rad');
          },
          turn: function (t) {
            return new el(t, 'turn');
          },
          s: function (t) {
            return new el(t, 's');
          },
          ms: function (t) {
            return new el(t, 'ms');
          },
          registerProperty: function (t) {
            var e = t.name,
              n = t.inherits,
              r = t.interpolable,
              i = t.initialValue,
              o = t.syntax;
            rZ.styleValueRegistry.registerMetadata({
              n: e,
              inh: n,
              int: r,
              d: i,
              syntax: o,
            });
          },
          registerLayout: function (t, e) {
            rZ.layoutRegistry.registerLayout(t, e);
          },
        },
        iv = (function (t) {
          function e() {
            var e = t.call(this) || this;
            (e.defaultView = null),
              (e.ownerDocument = null),
              (e.nodeName = 'document');
            try {
              e.timeline = new rZ.AnimationTimeline(e);
            } catch (t) {}
            var n = {};
            return (
              nN.forEach(function (t) {
                var e = t.n,
                  r = t.inh,
                  i = t.d;
                r && i && (n[e] = er(i) ? i(C.GROUP) : i);
              }),
              (e.documentElement = new ir({ id: 'g-root', style: n })),
              (e.documentElement.ownerDocument = e),
              (e.documentElement.parentNode = e),
              (e.childNodes = [e.documentElement]),
              e
            );
          }
          return (
            (0, H.__extends)(e, t),
            Object.defineProperty(e.prototype, 'children', {
              get: function () {
                return this.childNodes;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'childElementCount', {
              get: function () {
                return this.childNodes.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'firstElementChild', {
              get: function () {
                return this.firstChild;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'lastElementChild', {
              get: function () {
                return this.lastChild;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.createElement = function (t, e) {
              if ('svg' === t) return this.documentElement;
              var n = this.defaultView.customElements.get(t);
              n ||
                (console.warn('Unsupported tagName: ', t),
                (n = 'tspan' === t ? ih : ir));
              var r = new n(e);
              return (r.ownerDocument = this), r;
            }),
            (e.prototype.createElementNS = function (t, e, n) {
              return this.createElement(e, n);
            }),
            (e.prototype.cloneNode = function (t) {
              throw Error(tJ);
            }),
            (e.prototype.destroy = function () {
              try {
                this.documentElement.destroyChildren(), this.timeline.destroy();
              } catch (t) {}
            }),
            (e.prototype.elementsFromBBox = function (t, e, n, r) {
              var i = this.defaultView.context.rBushRoot.search({
                  minX: t,
                  minY: e,
                  maxX: n,
                  maxY: r,
                }),
                o = [];
              return (
                i.forEach(function (t) {
                  var e = t.displayObject,
                    n = e.parsedStyle.pointerEvents,
                    r = [
                      'auto',
                      'visiblepainted',
                      'visiblefill',
                      'visiblestroke',
                      'visible',
                    ].includes(void 0 === n ? 'auto' : n);
                  (!r || (r && e.isVisible())) &&
                    !e.isCulled() &&
                    e.isInteractive() &&
                    o.push(e);
                }),
                o.sort(function (t, e) {
                  return e.sortable.renderOrder - t.sortable.renderOrder;
                }),
                o
              );
            }),
            (e.prototype.elementFromPointSync = function (t, e) {
              var n = this.defaultView.canvas2Viewport({ x: t, y: e }),
                r = n.x,
                i = n.y,
                o = this.defaultView.getConfig(),
                a = o.width,
                s = o.height;
              if (r < 0 || i < 0 || r > a || i > s) return null;
              var l = this.defaultView.viewport2Client({ x: r, y: i }),
                u = l.x,
                c = l.y,
                h = this.defaultView
                  .getRenderingService()
                  .hooks.pickSync.call({
                    topmost: !0,
                    position: {
                      x: t,
                      y: e,
                      viewportX: r,
                      viewportY: i,
                      clientX: u,
                      clientY: c,
                    },
                    picked: [],
                  }).picked;
              return (h && h[0]) || this.documentElement;
            }),
            (e.prototype.elementFromPoint = function (t, e) {
              return (0, H.__awaiter)(this, void 0, void 0, function () {
                var n, r, i, o, a, s, l, u, c, h;
                return (0, H.__generator)(this, function (p) {
                  switch (p.label) {
                    case 0:
                      if (
                        ((r = (n = this.defaultView.canvas2Viewport({
                          x: t,
                          y: e,
                        })).x),
                        (i = n.y),
                        (a = (o = this.defaultView.getConfig()).width),
                        (s = o.height),
                        r < 0 || i < 0 || r > a || i > s)
                      )
                        return [2, null];
                      return (
                        (u = (l = this.defaultView.viewport2Client({
                          x: r,
                          y: i,
                        })).x),
                        (c = l.y),
                        [
                          4,
                          this.defaultView
                            .getRenderingService()
                            .hooks.pick.promise({
                              topmost: !0,
                              position: {
                                x: t,
                                y: e,
                                viewportX: r,
                                viewportY: i,
                                clientX: u,
                                clientY: c,
                              },
                              picked: [],
                            }),
                        ]
                      );
                    case 1:
                      return [
                        2,
                        ((h = p.sent().picked) && h[0]) || this.documentElement,
                      ];
                  }
                });
              });
            }),
            (e.prototype.elementsFromPointSync = function (t, e) {
              var n = this.defaultView.canvas2Viewport({ x: t, y: e }),
                r = n.x,
                i = n.y,
                o = this.defaultView.getConfig(),
                a = o.width,
                s = o.height;
              if (r < 0 || i < 0 || r > a || i > s) return [];
              var l = this.defaultView.viewport2Client({ x: r, y: i }),
                u = l.x,
                c = l.y,
                h = this.defaultView
                  .getRenderingService()
                  .hooks.pickSync.call({
                    topmost: !1,
                    position: {
                      x: t,
                      y: e,
                      viewportX: r,
                      viewportY: i,
                      clientX: u,
                      clientY: c,
                    },
                    picked: [],
                  }).picked;
              return (
                h[h.length - 1] !== this.documentElement &&
                  h.push(this.documentElement),
                h
              );
            }),
            (e.prototype.elementsFromPoint = function (t, e) {
              return (0, H.__awaiter)(this, void 0, void 0, function () {
                var n, r, i, o, a, s, l, u, c, h;
                return (0, H.__generator)(this, function (p) {
                  switch (p.label) {
                    case 0:
                      if (
                        ((r = (n = this.defaultView.canvas2Viewport({
                          x: t,
                          y: e,
                        })).x),
                        (i = n.y),
                        (a = (o = this.defaultView.getConfig()).width),
                        (s = o.height),
                        r < 0 || i < 0 || r > a || i > s)
                      )
                        return [2, []];
                      return (
                        (u = (l = this.defaultView.viewport2Client({
                          x: r,
                          y: i,
                        })).x),
                        (c = l.y),
                        [
                          4,
                          this.defaultView
                            .getRenderingService()
                            .hooks.pick.promise({
                              topmost: !1,
                              position: {
                                x: t,
                                y: e,
                                viewportX: r,
                                viewportY: i,
                                clientX: u,
                                clientY: c,
                              },
                              picked: [],
                            }),
                        ]
                      );
                    case 1:
                      return (
                        (h = p.sent().picked)[h.length - 1] !==
                          this.documentElement && h.push(this.documentElement),
                        [2, h]
                      );
                  }
                });
              });
            }),
            (e.prototype.appendChild = function (t, e) {
              throw Error(t$);
            }),
            (e.prototype.insertBefore = function (t, e) {
              throw Error(t$);
            }),
            (e.prototype.removeChild = function (t, e) {
              throw Error(t$);
            }),
            (e.prototype.replaceChild = function (t, e, n) {
              throw Error(t$);
            }),
            (e.prototype.append = function () {
              throw Error(t$);
            }),
            (e.prototype.prepend = function () {
              throw Error(t$);
            }),
            (e.prototype.getElementById = function (t) {
              return this.documentElement.getElementById(t);
            }),
            (e.prototype.getElementsByName = function (t) {
              return this.documentElement.getElementsByName(t);
            }),
            (e.prototype.getElementsByTagName = function (t) {
              return this.documentElement.getElementsByTagName(t);
            }),
            (e.prototype.getElementsByClassName = function (t) {
              return this.documentElement.getElementsByClassName(t);
            }),
            (e.prototype.querySelector = function (t) {
              return this.documentElement.querySelector(t);
            }),
            (e.prototype.querySelectorAll = function (t) {
              return this.documentElement.querySelectorAll(t);
            }),
            (e.prototype.find = function (t) {
              return this.documentElement.find(t);
            }),
            (e.prototype.findAll = function (t) {
              return this.documentElement.findAll(t);
            }),
            e
          );
        })(rA),
        iy = (function () {
          function t(t) {
            this.strategies = t;
          }
          return (
            (t.prototype.apply = function (e) {
              var n = e.camera,
                r = e.renderingService,
                i = e.renderingContext,
                o = this.strategies;
              r.hooks.cull.tap(t.tag, function (t) {
                if (t) {
                  var e = t.cullable;
                  return (0 === o.length
                    ? (e.visible = i.unculledEntities.indexOf(t.entity) > -1)
                    : (e.visible = o.every(function (e) {
                        return e.isVisible(n, t);
                      })),
                  !t.isCulled() && t.isVisible())
                    ? t
                    : (t.dispatchEvent(new rC(X.CULLED)), null);
                }
                return t;
              }),
                r.hooks.afterRender.tap(t.tag, function (t) {
                  t.cullable.visibilityPlaneMask = -1;
                });
            }),
            (t.tag = 'Culling'),
            t
          );
        })(),
        ig = (function () {
          function t() {
            var t = this;
            (this.autoPreventDefault = !1),
              (this.rootPointerEvent = new rk(null)),
              (this.rootWheelEvent = new rM(null)),
              (this.onPointerMove = function (e) {
                var n,
                  r,
                  i,
                  o,
                  a =
                    null ===
                      (o =
                        null === (i = t.context.renderingContext.root) ||
                        void 0 === i
                          ? void 0
                          : i.ownerDocument) || void 0 === o
                      ? void 0
                      : o.defaultView;
                if (!a.supportsTouchEvents || 'touch' !== e.pointerType) {
                  var s = t.normalizeToPointerEvent(e, a);
                  try {
                    for (
                      var l = (0, H.__values)(s), u = l.next();
                      !u.done;
                      u = l.next()
                    ) {
                      var c = u.value,
                        h = t.bootstrapEvent(t.rootPointerEvent, c, a, e);
                      t.context.eventService.mapEvent(h);
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      u && !u.done && (r = l.return) && r.call(l);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  t.setCursor(t.context.eventService.cursor);
                }
              }),
              (this.onClick = function (e) {
                var n,
                  r,
                  i,
                  o,
                  a =
                    null ===
                      (o =
                        null === (i = t.context.renderingContext.root) ||
                        void 0 === i
                          ? void 0
                          : i.ownerDocument) || void 0 === o
                      ? void 0
                      : o.defaultView,
                  s = t.normalizeToPointerEvent(e, a);
                try {
                  for (
                    var l = (0, H.__values)(s), u = l.next();
                    !u.done;
                    u = l.next()
                  ) {
                    var c = u.value,
                      h = t.bootstrapEvent(t.rootPointerEvent, c, a, e);
                    t.context.eventService.mapEvent(h);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    u && !u.done && (r = l.return) && r.call(l);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                t.setCursor(t.context.eventService.cursor);
              });
          }
          return (
            (t.prototype.apply = function (e) {
              var n = this;
              this.context = e;
              var r = e.renderingService,
                i =
                  this.context.renderingContext.root.ownerDocument.defaultView;
              this.context.eventService.setPickHandler(function (t) {
                return (
                  n.context.renderingService.hooks.pickSync.call({
                    position: t,
                    picked: [],
                    topmost: !0,
                  }).picked[0] || null
                );
              }),
                r.hooks.pointerWheel.tap(t.tag, function (t) {
                  var e = n.normalizeWheelEvent(t);
                  n.context.eventService.mapEvent(e);
                }),
                r.hooks.pointerDown.tap(t.tag, function (t) {
                  if (!i.supportsTouchEvents || 'touch' !== t.pointerType) {
                    var e,
                      r,
                      o = n.normalizeToPointerEvent(t, i);
                    n.autoPreventDefault &&
                      o[0].isNormalized &&
                      (t.cancelable || !('cancelable' in t)) &&
                      t.preventDefault();
                    try {
                      for (
                        var a = (0, H.__values)(o), s = a.next();
                        !s.done;
                        s = a.next()
                      ) {
                        var l = s.value,
                          u = n.bootstrapEvent(n.rootPointerEvent, l, i, t);
                        n.context.eventService.mapEvent(u);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        s && !s.done && (r = a.return) && r.call(a);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    n.setCursor(n.context.eventService.cursor);
                  }
                }),
                r.hooks.pointerUp.tap(t.tag, function (t) {
                  if (!i.supportsTouchEvents || 'touch' !== t.pointerType) {
                    var e,
                      r,
                      o = n.context.contextService.getDomElement(),
                      a = n.context.eventService.isNativeEventFromCanvas(o, t)
                        ? ''
                        : 'outside',
                      s = n.normalizeToPointerEvent(t, i);
                    try {
                      for (
                        var l = (0, H.__values)(s), u = l.next();
                        !u.done;
                        u = l.next()
                      ) {
                        var c = u.value,
                          h = n.bootstrapEvent(n.rootPointerEvent, c, i, t);
                        (h.type += a), n.context.eventService.mapEvent(h);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        u && !u.done && (r = l.return) && r.call(l);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    n.setCursor(n.context.eventService.cursor);
                  }
                }),
                r.hooks.pointerMove.tap(t.tag, this.onPointerMove),
                r.hooks.pointerOver.tap(t.tag, this.onPointerMove),
                r.hooks.pointerOut.tap(t.tag, this.onPointerMove),
                r.hooks.click.tap(t.tag, this.onClick),
                r.hooks.pointerCancel.tap(t.tag, function (t) {
                  var e,
                    r,
                    o = n.normalizeToPointerEvent(t, i);
                  try {
                    for (
                      var a = (0, H.__values)(o), s = a.next();
                      !s.done;
                      s = a.next()
                    ) {
                      var l = s.value,
                        u = n.bootstrapEvent(n.rootPointerEvent, l, i, t);
                      n.context.eventService.mapEvent(u);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      s && !s.done && (r = a.return) && r.call(a);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  n.setCursor(n.context.eventService.cursor);
                });
            }),
            (t.prototype.bootstrapEvent = function (t, e, n, r) {
              (t.view = n),
                (t.originalEvent = null),
                (t.nativeEvent = r),
                (t.pointerId = e.pointerId),
                (t.width = e.width),
                (t.height = e.height),
                (t.isPrimary = e.isPrimary),
                (t.pointerType = e.pointerType),
                (t.pressure = e.pressure),
                (t.tangentialPressure = e.tangentialPressure),
                (t.tiltX = e.tiltX),
                (t.tiltY = e.tiltY),
                (t.twist = e.twist),
                this.transferMouseData(t, e);
              var i = this.context.eventService.client2Viewport({
                  x: e.clientX,
                  y: e.clientY,
                }),
                o = i.x,
                a = i.y;
              (t.viewport.x = o), (t.viewport.y = a);
              var s = this.context.eventService.viewport2Canvas(t.viewport),
                l = s.x,
                u = s.y;
              return (
                (t.canvas.x = l),
                (t.canvas.y = u),
                t.global.copyFrom(t.canvas),
                t.offset.copyFrom(t.canvas),
                (t.isTrusted = r.isTrusted),
                'pointerleave' === t.type && (t.type = 'pointerout'),
                t.type.startsWith('mouse') &&
                  (t.type = t.type.replace('mouse', 'pointer')),
                t.type.startsWith('touch') && (t.type = n0[t.type] || t.type),
                t
              );
            }),
            (t.prototype.normalizeWheelEvent = function (t) {
              var e = this.rootWheelEvent;
              this.transferMouseData(e, t),
                (e.deltaMode = t.deltaMode),
                (e.deltaX = t.deltaX),
                (e.deltaY = t.deltaY),
                (e.deltaZ = t.deltaZ);
              var n = this.context.eventService.client2Viewport({
                  x: t.clientX,
                  y: t.clientY,
                }),
                r = n.x,
                i = n.y;
              (e.viewport.x = r), (e.viewport.y = i);
              var o = this.context.eventService.viewport2Canvas(e.viewport),
                a = o.x,
                s = o.y;
              return (
                (e.canvas.x = a),
                (e.canvas.y = s),
                e.global.copyFrom(e.canvas),
                e.offset.copyFrom(e.canvas),
                (e.nativeEvent = t),
                (e.type = t.type),
                e
              );
            }),
            (t.prototype.transferMouseData = function (t, e) {
              (t.isTrusted = e.isTrusted),
                (t.srcElement = e.srcElement),
                (t.timeStamp = n1.now()),
                (t.type = e.type),
                (t.altKey = e.altKey),
                (t.metaKey = e.metaKey),
                (t.shiftKey = e.shiftKey),
                (t.ctrlKey = e.ctrlKey),
                (t.button = e.button),
                (t.buttons = e.buttons),
                (t.client.x = e.clientX),
                (t.client.y = e.clientY),
                (t.movement.x = e.movementX),
                (t.movement.y = e.movementY),
                (t.page.x = e.pageX),
                (t.page.y = e.pageY),
                (t.screen.x = e.screenX),
                (t.screen.y = e.screenY),
                (t.relatedTarget = null);
            }),
            (t.prototype.setCursor = function (t) {
              this.context.contextService.applyCursorStyle(
                t || this.context.config.cursor || 'default',
              );
            }),
            (t.prototype.normalizeToPointerEvent = function (t, e) {
              var n = [];
              if (e.isTouchEvent(t))
                for (var r = 0; r < t.changedTouches.length; r++) {
                  var i = t.changedTouches[r];
                  (0, tE.Z)(i.button) && (i.button = 0),
                    (0, tE.Z)(i.buttons) && (i.buttons = 1),
                    (0, tE.Z)(i.isPrimary) &&
                      (i.isPrimary =
                        1 === t.touches.length && 'touchstart' === t.type),
                    (0, tE.Z)(i.width) && (i.width = i.radiusX || 1),
                    (0, tE.Z)(i.height) && (i.height = i.radiusY || 1),
                    (0, tE.Z)(i.tiltX) && (i.tiltX = 0),
                    (0, tE.Z)(i.tiltY) && (i.tiltY = 0),
                    (0, tE.Z)(i.pointerType) && (i.pointerType = 'touch'),
                    (0, tE.Z)(i.pointerId) && (i.pointerId = i.identifier || 0),
                    (0, tE.Z)(i.pressure) && (i.pressure = i.force || 0.5),
                    (0, tE.Z)(i.twist) && (i.twist = 0),
                    (0, tE.Z)(i.tangentialPressure) &&
                      (i.tangentialPressure = 0),
                    (i.isNormalized = !0),
                    (i.type = t.type),
                    n.push(i);
                }
              else
                e.isMouseEvent(t) &&
                  ((0, tE.Z)(t.isPrimary) && (t.isPrimary = !0),
                  (0, tE.Z)(t.width) && (t.width = 1),
                  (0, tE.Z)(t.height) && (t.height = 1),
                  (0, tE.Z)(t.tiltX) && (t.tiltX = 0),
                  (0, tE.Z)(t.tiltY) && (t.tiltY = 0),
                  (0, tE.Z)(t.pointerType) && (t.pointerType = 'mouse'),
                  (0, tE.Z)(t.pointerId) && (t.pointerId = 1),
                  (0, tE.Z)(t.pressure) && (t.pressure = 0.5),
                  (0, tE.Z)(t.twist) && (t.twist = 0),
                  (0, tE.Z)(t.tangentialPressure) && (t.tangentialPressure = 0),
                  (t.isNormalized = !0)),
                  n.push(t);
              return n;
            }),
            (t.tag = 'Event'),
            t
          );
        })(),
        im = [
          C.CIRCLE,
          C.ELLIPSE,
          C.IMAGE,
          C.RECT,
          C.LINE,
          C.POLYLINE,
          C.POLYGON,
          C.TEXT,
          C.PATH,
          C.HTML,
        ],
        iE = (function () {
          function t() {}
          return (
            (t.prototype.isVisible = function (t, e) {
              var n,
                r,
                i = e.cullable;
              if (!i.enable) return !0;
              var o = e.getRenderBounds();
              if (tX.isEmpty(o)) return !1;
              var a = t.getFrustum(),
                s =
                  null ===
                    (r =
                      null === (n = e.parentNode) || void 0 === n
                        ? void 0
                        : n.cullable) || void 0 === r
                    ? void 0
                    : r.visibilityPlaneMask;
              return (
                (i.visibilityPlaneMask = this.computeVisibilityWithPlaneMask(
                  e,
                  o,
                  s || A.INDETERMINATE,
                  a.planes,
                )),
                (i.visible = i.visibilityPlaneMask !== A.OUTSIDE),
                i.visible
              );
            }),
            (t.prototype.computeVisibilityWithPlaneMask = function (
              t,
              e,
              n,
              r,
            ) {
              if (n === A.OUTSIDE || n === A.INSIDE) return n;
              for (
                var i = A.INSIDE,
                  o = im.indexOf(t.nodeName) > -1,
                  a = 0,
                  s = r.length;
                a < s;
                ++a
              ) {
                var l = 1 << a;
                if ((n & l) != 0 && (!o || (4 !== a && 5 !== a))) {
                  var u = r[a],
                    c = u.normal,
                    h = u.distance;
                  if (K.AK(c, e.getPositiveFarPoint(r[a])) + h < 0)
                    return A.OUTSIDE;
                  K.AK(c, e.getNegativeFarPoint(r[a])) + h < 0 && (i |= l);
                }
              }
              return i;
            }),
            t
          );
        })(),
        ix = (function () {
          function t() {
            (this.toSync = new Set()),
              (this.isFirstTimeRendering = !0),
              (this.syncing = !1),
              (this.isFirstTimeRenderingFinished = !1);
          }
          return (
            (t.prototype.apply = function (e) {
              var n,
                r = this,
                i = e.renderingService,
                o = e.renderingContext,
                a = e.rBushRoot,
                s = o.root.ownerDocument.defaultView;
              this.rBush = a;
              var l = function (t) {
                  (t.target.renderable.dirty = !0), i.dirtify();
                },
                u = function (t) {
                  var e = t.detail.affectChildren,
                    n = t.target;
                  e &&
                    n.forEach(function (t) {
                      r.toSync.add(t);
                    });
                  for (var o = n; o; )
                    o.renderable && r.toSync.add(o), (o = o.parentElement);
                  i.dirtify();
                },
                c = function (t) {
                  var e = t.target;
                  rZ.enableSizeAttenuation &&
                    rZ.styleValueRegistry.updateSizeAttenuation(
                      e,
                      s.getCamera().getZoom(),
                    ),
                    rZ.enableCSSParsing && rZ.styleValueRegistry.recalc(e),
                    rZ.sceneGraphService.dirtifyToRoot(e),
                    i.dirtify();
                },
                h = function (t) {
                  var e = t.target,
                    n = e.rBushNode;
                  n.aabb && r.rBush.remove(n.aabb),
                    r.toSync.delete(e),
                    rZ.sceneGraphService.dirtifyToRoot(e),
                    i.dirtify();
                };
              i.hooks.init.tap(t.tag, function () {
                s.addEventListener(X.MOUNTED, c),
                  s.addEventListener(X.UNMOUNTED, h),
                  s.addEventListener(X.ATTR_MODIFIED, l),
                  s.addEventListener(X.BOUNDS_CHANGED, u);
              }),
                i.hooks.destroy.tap(t.tag, function () {
                  s.removeEventListener(X.MOUNTED, c),
                    s.removeEventListener(X.UNMOUNTED, h),
                    s.removeEventListener(X.ATTR_MODIFIED, l),
                    s.removeEventListener(X.BOUNDS_CHANGED, u),
                    r.toSync.clear();
                });
              var p =
                null !== (n = rZ.globalThis.requestIdleCallback) && void 0 !== n
                  ? n
                  : re.bind(rZ.globalThis);
              i.hooks.endFrame.tap(t.tag, function () {
                r.isFirstTimeRendering
                  ? ((r.isFirstTimeRendering = !1),
                    (r.syncing = !0),
                    p(function () {
                      r.syncRTree(!0), (r.isFirstTimeRenderingFinished = !0);
                    }))
                  : r.syncRTree();
              });
            }),
            (t.prototype.syncRTree = function (t) {
              var e = this;
              if (
                (void 0 === t && (t = !1),
                t || (!this.syncing && 0 !== this.toSync.size))
              ) {
                this.syncing = !0;
                var n = [];
                Array.from(this.toSync)
                  .filter(function (t) {
                    return t.isConnected;
                  })
                  .forEach(function (r) {
                    var i = r.rBushNode;
                    i && i.aabb && e.rBush.remove(i.aabb);
                    var o = r.getRenderBounds();
                    if (o) {
                      var a = r.renderable;
                      t &&
                        (a.dirtyRenderBounds ||
                          (a.dirtyRenderBounds = new tX()),
                        a.dirtyRenderBounds.update(o.center, o.halfExtents));
                      var s = (0, H.__read)(o.getMin(), 2),
                        l = s[0],
                        u = s[1],
                        c = (0, H.__read)(o.getMax(), 2),
                        h = c[0],
                        p = c[1];
                      i.aabb || (i.aabb = {}),
                        (i.aabb.displayObject = r),
                        (i.aabb.minX = l),
                        (i.aabb.minY = u),
                        (i.aabb.maxX = h),
                        (i.aabb.maxY = p);
                    }
                    !i.aabb ||
                      isNaN(i.aabb.maxX) ||
                      isNaN(i.aabb.maxX) ||
                      isNaN(i.aabb.minX) ||
                      isNaN(i.aabb.minY) ||
                      n.push(i.aabb);
                  }),
                  this.rBush.load(n),
                  (n.length = 0),
                  this.toSync.clear(),
                  (this.syncing = !1);
              }
            }),
            (t.tag = 'Prepare'),
            t
          );
        })();
      ((M = Z || (Z = {})).READY = 'ready'),
        (M.BEFORE_RENDER = 'beforerender'),
        (M.RERENDER = 'rerender'),
        (M.AFTER_RENDER = 'afterrender'),
        (M.BEFORE_DESTROY = 'beforedestroy'),
        (M.AFTER_DESTROY = 'afterdestroy'),
        (M.RESIZE = 'resize'),
        (M.DIRTY_RECTANGLE = 'dirtyrectangle'),
        (M.RENDERER_CHANGED = 'rendererchanged');
      var ib = new rC(X.MOUNTED),
        iT = new rC(X.UNMOUNTED),
        iP = new rC(Z.BEFORE_RENDER),
        iS = new rC(Z.RERENDER),
        iN = new rC(Z.AFTER_RENDER),
        iw = (function (t) {
          function e(e) {
            var n,
              r,
              i = t.call(this) || this;
            (i.Element = r8),
              (i.inited = !1),
              (i.context = {}),
              (i.document = new iv()),
              (i.document.defaultView = i),
              (i.customElements = new ip());
            var o = e.container,
              a = e.canvas,
              s = e.offscreenCanvas,
              l = e.width,
              u = e.height,
              c = e.devicePixelRatio,
              h = e.renderer,
              p = e.background,
              d = e.cursor,
              f = e.document,
              v = e.requestAnimationFrame,
              y = e.cancelAnimationFrame,
              g = e.createImage,
              m = e.supportsPointerEvents,
              E = e.supportsTouchEvents,
              x = e.supportsCSSTransform,
              b = e.supportsMutipleCanvasesInOneContainer,
              T = e.useNativeClickEvent,
              P = e.alwaysTriggerPointerEventOnCanvas,
              S = e.isTouchEvent,
              N = e.isMouseEvent,
              w = e.dblClickSpeed;
            b ||
              (function (t, e) {
                if (t) {
                  var n = 'string' == typeof t ? t : t.id || nH++;
                  nZ[n] && nZ[n].destroy(), (nZ[n] = e);
                }
              })(o, i);
            var k = l,
              M = u,
              C = c;
            return (
              a &&
                ((C =
                  (C = c || (nq && window.devicePixelRatio) || 1) >= 1
                    ? Math.ceil(C)
                    : 1),
                (k =
                  l ||
                  ('auto' === (n = nQ(a, 'width'))
                    ? a.offsetWidth
                    : parseFloat(n)) ||
                  a.width / C),
                (M =
                  u ||
                  ('auto' === (r = nQ(a, 'height'))
                    ? a.offsetHeight
                    : parseFloat(r)) ||
                  a.height / C)),
              s && (rZ.offscreenCanvas = s),
              (i.devicePixelRatio = C),
              (i.requestAnimationFrame =
                null != v ? v : re.bind(rZ.globalThis)),
              (i.cancelAnimationFrame = null != y ? y : rn.bind(rZ.globalThis)),
              (i.supportsTouchEvents =
                null != E ? E : 'ontouchstart' in rZ.globalThis),
              (i.supportsPointerEvents =
                null != m ? m : !!rZ.globalThis.PointerEvent),
              (i.isTouchEvent =
                null != S
                  ? S
                  : function (t) {
                      return (
                        i.supportsTouchEvents &&
                        t instanceof rZ.globalThis.TouchEvent
                      );
                    }),
              (i.isMouseEvent =
                null != N
                  ? N
                  : function (t) {
                      return (
                        !rZ.globalThis.MouseEvent ||
                        (t instanceof rZ.globalThis.MouseEvent &&
                          (!i.supportsPointerEvents ||
                            !(t instanceof rZ.globalThis.PointerEvent)))
                      );
                    }),
              (i.dblClickSpeed = null != w ? w : 200),
              i.initRenderingContext({
                container: o,
                canvas: a,
                width: k,
                height: M,
                renderer: h,
                offscreenCanvas: s,
                devicePixelRatio: C,
                cursor: d || 'default',
                background: p || 'transparent',
                createImage: g,
                document: f,
                supportsCSSTransform: x,
                useNativeClickEvent: T,
                alwaysTriggerPointerEventOnCanvas: P,
              }),
              i.initDefaultCamera(k, M, h.clipSpaceNearZ),
              i.initRenderer(h, !0),
              i
            );
          }
          return (
            (0, H.__extends)(e, t),
            (e.prototype.initRenderingContext = function (t) {
              (this.context.config = t),
                (this.context.renderingContext = {
                  root: this.document.documentElement,
                  renderListCurrentFrame: [],
                  unculledEntities: [],
                  renderReasons: new Set(),
                  force: !1,
                  dirty: !1,
                });
            }),
            (e.prototype.initDefaultCamera = function (t, e, n) {
              var r = this,
                i = new rZ.CameraContribution();
              (i.clipSpaceNearZ = n),
                i
                  .setType(R.EXPLORING, O.DEFAULT)
                  .setPosition(t / 2, e / 2, 500)
                  .setFocalPoint(t / 2, e / 2, 0)
                  .setOrthographic(-(t / 2), t / 2, e / 2, -(e / 2), 0.1, 1e3),
                (i.canvas = this),
                i.eventEmitter.on(tQ.UPDATED, function () {
                  r.context.renderingContext.renderReasons.add(
                    W.CAMERA_CHANGED,
                  ),
                    rZ.enableSizeAttenuation &&
                      r.getConfig().renderer.getConfig()
                        .enableSizeAttenuation &&
                      r.updateSizeAttenuation();
                }),
                (this.context.camera = i);
            }),
            (e.prototype.updateSizeAttenuation = function () {
              var t = this.getCamera().getZoom();
              this.document.documentElement.forEach(function (e) {
                rZ.styleValueRegistry.updateSizeAttenuation(e, t);
              });
            }),
            (e.prototype.getConfig = function () {
              return this.context.config;
            }),
            (e.prototype.getRoot = function () {
              return this.document.documentElement;
            }),
            (e.prototype.getCamera = function () {
              return this.context.camera;
            }),
            (e.prototype.getContextService = function () {
              return this.context.contextService;
            }),
            (e.prototype.getEventService = function () {
              return this.context.eventService;
            }),
            (e.prototype.getRenderingService = function () {
              return this.context.renderingService;
            }),
            (e.prototype.getRenderingContext = function () {
              return this.context.renderingContext;
            }),
            (e.prototype.getStats = function () {
              return this.getRenderingService().getStats();
            }),
            Object.defineProperty(e.prototype, 'ready', {
              get: function () {
                var t = this;
                return (
                  !this.readyPromise &&
                    ((this.readyPromise = new Promise(function (e) {
                      t.resolveReadyPromise = function () {
                        e(t);
                      };
                    })),
                    this.inited && this.resolveReadyPromise()),
                  this.readyPromise
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.destroy = function (t, e) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !1),
                e || this.dispatchEvent(new rC(Z.BEFORE_DESTROY)),
                this.frameId &&
                  (
                    this.getConfig().cancelAnimationFrame ||
                    cancelAnimationFrame
                  )(this.frameId);
              var n = this.getRoot();
              this.unmountChildren(n),
                t &&
                  (this.document.destroy(), this.getEventService().destroy()),
                this.getRenderingService().destroy(),
                this.getContextService().destroy(),
                t &&
                  this.context.rBushRoot &&
                  (this.context.rBushRoot.clear(),
                  (this.context.rBushRoot = null),
                  (this.context.renderingContext.root = null)),
                e || this.dispatchEvent(new rC(Z.AFTER_DESTROY));
            }),
            (e.prototype.changeSize = function (t, e) {
              this.resize(t, e);
            }),
            (e.prototype.resize = function (t, e) {
              var n = this.context.config;
              (n.width = t),
                (n.height = e),
                this.getContextService().resize(t, e);
              var r = this.context.camera,
                i = r.getProjectionMode();
              r.setPosition(t / 2, e / 2, 500).setFocalPoint(t / 2, e / 2, 0),
                i === L.ORTHOGRAPHIC
                  ? r.setOrthographic(
                      -(t / 2),
                      t / 2,
                      e / 2,
                      -(e / 2),
                      r.getNear(),
                      r.getFar(),
                    )
                  : r.setAspect(t / e),
                this.dispatchEvent(new rC(Z.RESIZE, { width: t, height: e }));
            }),
            (e.prototype.appendChild = function (t, e) {
              return this.document.documentElement.appendChild(t, e);
            }),
            (e.prototype.insertBefore = function (t, e) {
              return this.document.documentElement.insertBefore(t, e);
            }),
            (e.prototype.removeChild = function (t) {
              return this.document.documentElement.removeChild(t);
            }),
            (e.prototype.removeChildren = function () {
              this.document.documentElement.removeChildren();
            }),
            (e.prototype.destroyChildren = function () {
              this.document.documentElement.destroyChildren();
            }),
            (e.prototype.render = function (t) {
              var e = this;
              t && ((iP.detail = t), (iN.detail = t)),
                this.dispatchEvent(iP),
                this.getRenderingService().render(
                  this.getConfig(),
                  t,
                  function () {
                    e.dispatchEvent(iS);
                  },
                ),
                this.dispatchEvent(iN);
            }),
            (e.prototype.run = function () {
              var t = this,
                e = function (n, r) {
                  t.render(r), (t.frameId = t.requestAnimationFrame(e));
                };
              e();
            }),
            (e.prototype.initRenderer = function (t, e) {
              var n = this;
              if ((void 0 === e && (e = !1), !t))
                throw Error('Renderer is required.');
              (this.inited = !1),
                (this.readyPromise = void 0),
                (this.context.rBushRoot = new tk()),
                (this.context.renderingPlugins = []),
                this.context.renderingPlugins.push(
                  new ig(),
                  new ix(),
                  new iy([new iE()]),
                ),
                this.loadRendererContainerModule(t),
                (this.context.contextService = new this.context.ContextService(
                  (0, H.__assign)((0, H.__assign)({}, rZ), this.context),
                )),
                (this.context.renderingService = new rL(rZ, this.context)),
                (this.context.eventService = new rR(rZ, this.context)),
                this.context.eventService.init(),
                this.context.contextService.init
                  ? (this.context.contextService.init(),
                    this.initRenderingService(t, e, !0))
                  : this.context.contextService.initAsync().then(function () {
                      n.initRenderingService(t, e);
                    });
            }),
            (e.prototype.initRenderingService = function (t, e, n) {
              var r = this;
              void 0 === e && (e = !1),
                void 0 === n && (n = !1),
                this.context.renderingService.init(function () {
                  (r.inited = !0),
                    e
                      ? n
                        ? r.requestAnimationFrame(function () {
                            r.dispatchEvent(new rC(Z.READY));
                          })
                        : r.dispatchEvent(new rC(Z.READY))
                      : r.dispatchEvent(new rC(Z.RENDERER_CHANGED)),
                    r.readyPromise && r.resolveReadyPromise(),
                    e ||
                      r.getRoot().forEach(function (t) {
                        var e = t.renderable;
                        e &&
                          ((e.renderBoundsDirty = !0),
                          (e.boundsDirty = !0),
                          (e.dirty = !0));
                      }),
                    r.mountChildren(r.getRoot()),
                    t.getConfig().enableAutoRendering && r.run();
                });
            }),
            (e.prototype.loadRendererContainerModule = function (t) {
              var e = this;
              t.getPlugins().forEach(function (t) {
                (t.context = e.context), t.init(rZ);
              });
            }),
            (e.prototype.setRenderer = function (t) {
              var e = this.getConfig();
              if (e.renderer !== t) {
                var n = e.renderer;
                (e.renderer = t),
                  this.destroy(!1, !0),
                  (0, H.__spreadArray)(
                    [],
                    (0, H.__read)(null == n ? void 0 : n.getPlugins()),
                    !1,
                  )
                    .reverse()
                    .forEach(function (t) {
                      t.destroy(rZ);
                    }),
                  this.initRenderer(t);
              }
            }),
            (e.prototype.setCursor = function (t) {
              (this.getConfig().cursor = t),
                this.getContextService().applyCursorStyle(t);
            }),
            (e.prototype.unmountChildren = function (t) {
              var e = this;
              t.childNodes.forEach(function (t) {
                e.unmountChildren(t);
              }),
                this.inited &&
                  (t.isMutationObserved
                    ? t.dispatchEvent(iT)
                    : ((iT.target = t), this.dispatchEvent(iT, !0)),
                  t !== this.document.documentElement &&
                    (t.ownerDocument = null),
                  (t.isConnected = !1)),
                t.isCustomElement &&
                  t.disconnectedCallback &&
                  t.disconnectedCallback();
            }),
            (e.prototype.mountChildren = function (t) {
              var e = this;
              this.inited
                ? t.isConnected ||
                  ((t.ownerDocument = this.document),
                  (t.isConnected = !0),
                  t.isMutationObserved
                    ? t.dispatchEvent(ib)
                    : ((ib.target = t), this.dispatchEvent(ib, !0)))
                : console.warn(
                    "[g]: You are trying to call `canvas.appendChild` before canvas' initialization finished. You can either await `canvas.ready` or listen to `CanvasEvent.READY` manually.",
                    'appended child: ',
                    t.nodeName,
                  ),
                t.childNodes.forEach(function (t) {
                  e.mountChildren(t);
                }),
                t.isCustomElement &&
                  t.connectedCallback &&
                  t.connectedCallback();
            }),
            (e.prototype.client2Viewport = function (t) {
              return this.getEventService().client2Viewport(t);
            }),
            (e.prototype.viewport2Client = function (t) {
              return this.getEventService().viewport2Client(t);
            }),
            (e.prototype.viewport2Canvas = function (t) {
              return this.getEventService().viewport2Canvas(t);
            }),
            (e.prototype.canvas2Viewport = function (t) {
              return this.getEventService().canvas2Viewport(t);
            }),
            (e.prototype.getPointByClient = function (t, e) {
              return this.client2Viewport({ x: t, y: e });
            }),
            (e.prototype.getClientByPoint = function (t, e) {
              return this.viewport2Client({ x: t, y: e });
            }),
            e
          );
        })(r_);
    },
  },
]);
