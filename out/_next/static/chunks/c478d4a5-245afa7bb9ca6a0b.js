'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1645],
  {
    77497: function (e, t, r) {
      r.d(t, {
        Ep: function () {
          return i5;
        },
        Tx: function () {
          return iR;
        },
        Uw: function () {
          return i6;
        },
        Xf: function () {
          return eO;
        },
        kL: function () {
          return iD;
        },
      });
      var n,
        i,
        s,
        a,
        o,
        u,
        l,
        f = function (e, t = !0) {
          if (e.destroyed) throw Error('Hash instance has been destroyed');
          if (t && e.finished)
            throw Error('Hash#digest() has already been called');
        },
        h = function (e, t) {
          !(function (e, ...t) {
            if (!(e instanceof Uint8Array))
              throw TypeError('Expected Uint8Array');
            if (t.length > 0 && !t.includes(e.length))
              throw TypeError(
                `Expected Uint8Array of length ${t}, not of length=${e.length}`,
              );
          })(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              `digestInto() expects output buffer of length at least ${r}`,
            );
        };
      let d = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        c = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function p(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
              return new TextEncoder().encode(e);
            })(e)),
          !(e instanceof Uint8Array))
        )
          throw TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      let g = class {
        clone() {
          return this._cloneInto();
        }
      };
      function m(e) {
        let t = (t) => e().update(p(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      let y = class extends g {
          constructor(e, t, r, n) {
            super(),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = r),
              (this.isLE = n),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(e)),
              (this.view = d(this.buffer));
          }
          update(e) {
            f(this);
            let { view: t, buffer: r, blockLen: n } = this,
              i = (e = p(e)).length;
            for (let s = 0; s < i; ) {
              let a = Math.min(n - this.pos, i - s);
              if (a === n) {
                let t = d(e);
                for (; n <= i - s; s += n) this.process(t, s);
                continue;
              }
              r.set(e.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === n && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            f(this), h(e, this), (this.finished = !0);
            let { buffer: t, view: r, blockLen: n, isLE: i } = this,
              { pos: s } = this;
            (t[s++] = 128),
              this.buffer.subarray(s).fill(0),
              this.padOffset > n - s && (this.process(r, 0), (s = 0));
            for (let e = s; e < n; e++) t[e] = 0;
            !(function (e, t, r, n) {
              if ('function' == typeof e.setBigUint64)
                return e.setBigUint64(t, r, n);
              let i = BigInt(32),
                s = BigInt(4294967295),
                a = Number((r >> i) & s),
                o = Number(r & s),
                u = n ? 4 : 0,
                l = n ? 0 : 4;
              e.setUint32(t + u, a, n), e.setUint32(t + l, o, n);
            })(r, n - 8, BigInt(8 * this.length), i),
              this.process(r, 0);
            let a = d(e),
              o = this.outputLen;
            if (o % 4)
              throw Error('_sha2: outputLen should be aligned to 32bit');
            let u = o / 4,
              l = this.get();
            if (u > l.length) throw Error('_sha2: outputLen bigger than state');
            for (let e = 0; e < u; e++) a.setUint32(4 * e, l[e], i);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: r,
              length: n,
              finished: i,
              destroyed: s,
              pos: a,
            } = this;
            return (
              (e.length = n),
              (e.pos = a),
              (e.finished = i),
              (e.destroyed = s),
              n % t && e.buffer.set(r),
              e
            );
          }
        },
        b = (e, t, r) => (e & t) ^ (~e & r),
        v = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        w = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        _ = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        x = new Uint32Array(64),
        E = class extends y {
          constructor() {
            super(64, 32, 8, !1),
              (this.A = 0 | _[0]),
              (this.B = 0 | _[1]),
              (this.C = 0 | _[2]),
              (this.D = 0 | _[3]),
              (this.E = 0 | _[4]),
              (this.F = 0 | _[5]),
              (this.G = 0 | _[6]),
              (this.H = 0 | _[7]);
          }
          get() {
            let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
            return [e, t, r, n, i, s, a, o];
          }
          set(e, t, r, n, i, s, a, o) {
            (this.A = 0 | e),
              (this.B = 0 | t),
              (this.C = 0 | r),
              (this.D = 0 | n),
              (this.E = 0 | i),
              (this.F = 0 | s),
              (this.G = 0 | a),
              (this.H = 0 | o);
          }
          process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) x[r] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
              let t = x[e - 15],
                r = x[e - 2],
                n = c(t, 7) ^ c(t, 18) ^ (t >>> 3),
                i = c(r, 17) ^ c(r, 19) ^ (r >>> 10);
              x[e] = (i + x[e - 7] + n + x[e - 16]) | 0;
            }
            let { A: r, B: n, C: i, D: s, E: a, F: o, G: u, H: l } = this;
            for (let e = 0; e < 64; e++) {
              let t =
                  (l +
                    (c(a, 6) ^ c(a, 11) ^ c(a, 25)) +
                    b(a, o, u) +
                    w[e] +
                    x[e]) |
                  0,
                f = ((c(r, 2) ^ c(r, 13) ^ c(r, 22)) + v(r, n, i)) | 0;
              (l = u),
                (u = o),
                (o = a),
                (a = (s + t) | 0),
                (s = i),
                (i = n),
                (n = r),
                (r = (t + f) | 0);
            }
            (r = (r + this.A) | 0),
              (n = (n + this.B) | 0),
              (i = (i + this.C) | 0),
              (s = (s + this.D) | 0),
              (a = (a + this.E) | 0),
              (o = (o + this.F) | 0),
              (u = (u + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(r, n, i, s, a, o, u, l);
          }
          roundClean() {
            x.fill(0);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
          }
        },
        S = class extends E {
          constructor() {
            super(),
              (this.A = -1056596264),
              (this.B = 914150663),
              (this.C = 812702999),
              (this.D = -150054599),
              (this.E = -4191439),
              (this.F = 1750603025),
              (this.G = 1694076839),
              (this.H = -1090891868),
              (this.outputLen = 28);
          }
        },
        O = m(() => new E());
      m(() => new S());
      let { getRandomValues: A } = crypto ?? globalThis.crypto ?? window.crypto;
      function k(e) {
        let t,
          r = 0,
          n = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
        for (t = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      let I = new TextEncoder(),
        P = [
          {
            name: 'base58',
            charset:
              '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          },
        ];
      function B(e) {
        for (let t of P) if (t.name === e) return t.charset;
        throw TypeError('Charset does not exist: ' + e);
      }
      let U = function (e, t, r = !1) {
          'string' == typeof e && (e = I.encode(e));
          let n = B(t),
            i = n.length,
            s = [],
            a = '',
            o,
            u = 0,
            l,
            f;
          for (o = 0; o < e.length; o++)
            for (
              u = 0, l = e[o], a += l > 0 || (a.length ^ o) > 0 ? '' : '1';
              u in s || l > 0;

            )
              (l = ((f = (f = s[u]) > 0 ? 256 * f + l : l) / i) | 0),
                (s[u] = f % i),
                u++;
          for (; u-- > 0; ) a += n[s[u]];
          return r && a.length % 4 > 0 ? a + '='.repeat(4 - (a.length % 4)) : a;
        },
        T = function (e, t) {
          let r = B(t),
            n = r.length,
            i = [],
            s = [];
          e = e.replace('=', '');
          let a,
            o = 0,
            u,
            l;
          for (a = 0; a < e.length; a++) {
            if (((o = 0), (u = r.indexOf(e[a])) < 0))
              throw Error(`Character range out of bounds: ${u}`);
            for (u > 0 || (s.length ^ a) > 0 || s.push(0); o in i || u > 0; )
              (u = (l = (l = i[o]) > 0 ? l * n + u : u) >> 8),
                (i[o] = l % 256),
                o++;
          }
          for (; o-- > 0; ) s.push(i[o]);
          return new Uint8Array(s);
        },
        C = (e) =>
          U(
            (function (e) {
              let t = O(O(e));
              return k([e, t.slice(0, 4)]);
            })(e),
            'base58',
          ),
        N = (e) =>
          (function (e) {
            let t = e.slice(0, -4),
              r = e.slice(-4);
            if (O(O(t)).slice(0, 4).toString() !== r.toString())
              throw Error('Invalid checksum!');
            return t;
          })(T(e, 'base58')),
        L = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
        Z = [996825010, 642813549, 513874426, 1027748829, 705979059],
        R = [
          { version: 0, name: 'bech32', const: 1 },
          { version: 1, name: 'bech32m', const: 734539939 },
        ];
      function j(e) {
        let t = 1;
        for (let r = 0; r < e.length; ++r) {
          let n = t >> 25;
          t = ((33554431 & t) << 5) ^ e[r];
          for (let e = 0; e < 5; ++e) ((n >> e) & 1) != 0 && (t ^= Z[e]);
        }
        return t;
      }
      function H(e) {
        let t;
        let r = [];
        for (t = 0; t < e.length; ++t) r.push(e.charCodeAt(t) >> 5);
        for (r.push(0), t = 0; t < e.length; ++t) r.push(31 & e.charCodeAt(t));
        return r;
      }
      function $(e, t, r, n = !0) {
        let i = [],
          s = 0,
          a = 0,
          o = (1 << r) - 1,
          u = (1 << (t + r - 1)) - 1;
        for (let n of e) {
          if (n < 0 || n >> t > 0)
            throw Error(
              'Failed to perform base conversion. Invalid value: ' + String(n),
            );
          for (s = ((s << t) | n) & u, a += t; a >= r; )
            (a -= r), i.push((s >> a) & o);
        }
        if (n) a > 0 && i.push((s << (r - a)) & o);
        else if (a >= t || ((s << (r - a)) & o) > 0)
          throw Error('Failed to perform base conversion. Invalid Size!');
        return i;
      }
      function D(e) {
        let t = (e = e.toLowerCase()).split('1', 1)[0],
          [r, n] = (function (e) {
            if (
              !(function (e) {
                let t, r;
                let n = !1,
                  i = !1;
                for (t = 0; t < e.length; ++t) {
                  if ((r = e.charCodeAt(t)) < 33 || r > 126) return !1;
                  r >= 97 && r <= 122 && (n = !0),
                    r >= 65 && r <= 90 && (i = !0);
                }
                return !n || !i;
              })(e)
            )
              throw Error('Encoded string goes out of bounds!');
            if (
              !(function (e) {
                let t = e.lastIndexOf('1');
                return !(t < 1 || t + 7 > e.length || e.length > 90);
              })((e = e.toLowerCase()))
            )
              throw Error('Encoded string has invalid separator!');
            let t = [],
              r = e.lastIndexOf('1'),
              n = e.substring(0, r);
            for (let n = r + 1; n < e.length; ++n) {
              let r = L.indexOf(e.charAt(n));
              if (-1 === r)
                throw Error('Character idx out of bounds: ' + String(n));
              t.push(r);
            }
            let i = R.find((e) => e.version === t[0]) ?? R[0];
            if (j(H(n).concat(t)) !== i.const)
              throw Error('Checksum verification failed!');
            return [n, t.slice(0, t.length - 6)];
          })(e),
          i = $(n.slice(1), 5, 8, !1),
          s = i.length;
        switch (!0) {
          case t !== r:
            throw Error('Returned hrp string is invalid.');
          case null === i || s < 2 || s > 40:
            throw Error('Decoded string is invalid or out of spec.');
          case n[0] > 16:
            throw Error('Returned version bit is out of range.');
          default:
            return Uint8Array.from(i);
        }
      }
      let z = function (e, t = 'bc', r = 0) {
          let n = (function (e, t, r) {
            let n = t.concat(
                (function (e, t, r) {
                  let n =
                      j(H(e).concat(t).concat([0, 0, 0, 0, 0, 0])) ^ r.const,
                    i = [];
                  for (let e = 0; e < 6; ++e) i.push((n >> (5 * (5 - e))) & 31);
                  return i;
                })(e, t, r),
              ),
              i = e + '1';
            for (let e = 0; e < n.length; ++e) i += L.charAt(n[e]);
            return i;
          })(
            t,
            [r, ...$([...e], 8, 5)],
            R.find((e) => e.version === r) ?? R[0],
          );
          return D(n), n;
        },
        V = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
        F = new TextEncoder();
      function K(e, t = !1, r = !0) {
        'string' == typeof e && (e = F.encode(e));
        let n = t ? q : V,
          i = '',
          s = 0,
          a = 0;
        for (let t = 0; t < e.length; t++)
          for (a = (a << 8) | e[t], s += 8; s >= 6; )
            (s -= 6), (i += n[(a >> s) & 63]);
        if (s > 0)
          for (a <<= 6 - s, i += n[63 & a]; s < 6; )
            (i += r ? '=' : ''), (s += 2);
        return i;
      }
      function M(e, t = !1) {
        let r =
            t || e.includes('-') || e.includes('_') ? q.split('') : V.split(''),
          n = (e = e.replace(/=+$/, '')).split(''),
          i = 0,
          s = 0,
          a = [];
        for (let e = 0; e < n.length; e++) {
          let t = n[e],
            o = r.indexOf(t);
          if (-1 === o) throw Error('Invalid character: ' + t);
          (i += 6),
            (s <<= 6),
            (s |= o),
            i >= 8 && ((i -= 8), a.push((s >>> i) & 255));
        }
        return new Uint8Array(a);
      }
      let G = (e) => K(e, !0, !1),
        W = (e) => M(e, !0),
        Y = BigInt(0),
        J = BigInt(255),
        Q = BigInt(256),
        X = new TextEncoder(),
        ee = new TextDecoder();
      function et(e) {
        return X.encode(e);
      }
      function er(e) {
        return ee.decode(e);
      }
      let en = class e extends Uint8Array {
        static {
          this.num = ei;
        }
        static {
          this.big = ea;
        }
        static {
          this.bin = es;
        }
        static {
          this.raw = eo;
        }
        static {
          this.str = eu;
        }
        static {
          this.hex = el;
        }
        static {
          this.bytes = ef;
        }
        static {
          this.json = eh;
        }
        static {
          this.base64 = ed;
        }
        static {
          this.b64url = ec;
        }
        static {
          this.bech32 = ep;
        }
        static {
          this.b58chk = eg;
        }
        static {
          this.encode = et;
        }
        static {
          this.decode = er;
        }
        static random(t = 32) {
          return new e(
            (function (e = 32) {
              if ('function' == typeof A)
                return crypto.getRandomValues(new Uint8Array(e));
              throw Error('Crypto module missing getRandomValues!');
            })(t),
            t,
          );
        }
        constructor(e, t, r) {
          super(
            (function (e, t, r) {
              if (e instanceof ArrayBuffer) return new Uint8Array(e);
              if (e instanceof Uint8Array)
                return (function (e, t, r = 'be') {
                  void 0 === t && (t = e.length),
                    (function (e, t) {
                      if (e.length > t)
                        throw TypeError(
                          `Data is larger than array size: ${e.length} > ${t}`,
                        );
                    })(e, t);
                  let n = new Uint8Array(t).fill(0),
                    i = 'be' === r ? 0 : t - e.length;
                  return n.set(e, i), n;
                })(e, t, r);
              if ('string' == typeof e)
                return (function (e, t, r = 'le') {
                  t = (function (e, t) {
                    !(function (e) {
                      if (null !== e.match(/[^a-fA-f0-9]/))
                        throw TypeError(
                          'Invalid characters in hex string: ' + e,
                        );
                      if (e.length % 2 != 0)
                        throw Error(
                          `Length of hex string is invalid: ${e.length}`,
                        );
                    })(e);
                    let r = e.length / 2;
                    if ((void 0 === t && (t = r), r > t))
                      throw TypeError(
                        `Hex string is larger than array size: ${r} > ${t}`,
                      );
                    return t;
                  })(e, t);
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (let t = 0; t < e.length; t += 2) {
                    let r = parseInt(e.substring(t, t + 2), 16);
                    n ? s.setUint8(a++, r) : s.setUint8(a--, r);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('bigint' == typeof e)
                return (function (e, t, r = 'be') {
                  void 0 === t &&
                    (t = (function (e) {
                      if (e <= 255n) return 1;
                      if (e <= 65535n) return 2;
                      if (e <= 4294967295n) return 4;
                      if (e <= 0xffffffffffffffffn) return 8;
                      if (e <= 0xffffffffffffffffffffffffffffffffn) return 16;
                      if (
                        e <=
                        0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn
                      )
                        return 32;
                      throw TypeError(
                        'Must specify a fixed buffer size for bigints greater than 32 bytes.',
                      );
                    })(e));
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (; e > Y; ) {
                    let t = e & J,
                      r = Number(t);
                    n ? s.setUint8(a++, r) : s.setUint8(a--, r),
                      (e = (e - t) / Q);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('number' == typeof e)
                return (function (e, t, r = 'be') {
                  void 0 === t &&
                    (t = (function (e) {
                      if (e <= 255) return 1;
                      if (e <= 65535) return 2;
                      if (e <= 4294967295) return 4;
                      throw TypeError(
                        'Numbers larger than 4 bytes must specify a fixed size!',
                      );
                    })(e));
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (; e > 0; ) {
                    let t = 255 & e;
                    n ? s.setUint8(a++, e) : s.setUint8(a--, e),
                      (e = (e - t) / 256);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('boolean' == typeof e) return Uint8Array.of(e ? 1 : 0);
              throw TypeError('Unsupported format:' + String(typeof e));
            })(e, t, r),
          );
        }
        get arr() {
          return [...this];
        }
        get num() {
          return this.toNum();
        }
        get big() {
          return this.toBig();
        }
        get str() {
          return this.toStr();
        }
        get hex() {
          return this.toHex();
        }
        get raw() {
          return new Uint8Array(this);
        }
        get bin() {
          return this.toBin();
        }
        get b58chk() {
          return this.tob58chk();
        }
        get base64() {
          return this.toBase64();
        }
        get b64url() {
          return this.toB64url();
        }
        get digest() {
          return this.toHash();
        }
        get id() {
          return this.toHash().hex;
        }
        get stream() {
          return new em(this);
        }
        toNum(e = 'be') {
          return (function (e) {
            let t = 0;
            for (let r = e.length - 1; r >= 0; r--)
              !(function (e) {
                if (e > Number.MAX_SAFE_INTEGER)
                  throw TypeError('Number exceeds safe bounds!');
              })((t = 256 * t + e[r]));
            return t;
          })('be' === e ? this.reverse() : this);
        }
        toBin() {
          return (function (e) {
            let t = Array(8 * e.length),
              r = 0;
            for (let n of e) {
              if (n > 255)
                throw Error(
                  `Invalid byte value: ${n}. Byte values must be between 0 and 255.`,
                );
              for (let e = 7; e >= 0; e--, r++) t[r] = (n >> e) & 1;
            }
            return t.join('');
          })(this);
        }
        toBig(e = 'be') {
          return (function (e) {
            let t = BigInt(0);
            for (let r = e.length - 1; r >= 0; r--) t = t * Q + BigInt(e[r]);
            return BigInt(t);
          })('be' === e ? this.reverse() : this);
        }
        toHash() {
          return new e(O(this));
        }
        toJson() {
          return JSON.parse(er(this));
        }
        toBech32(e, t = 0) {
          return z(this, e, t);
        }
        toStr() {
          return er(this);
        }
        toHex() {
          return (function (e) {
            let t = '';
            for (let r = 0; r < e.length; r++)
              t += e[r].toString(16).padStart(2, '0');
            return t;
          })(this);
        }
        toBytes() {
          return new Uint8Array(this);
        }
        tob58chk() {
          return C(this);
        }
        toBase64() {
          return K(this);
        }
        toB64url() {
          return G(this);
        }
        prepend(t) {
          return e.join([e.bytes(t), this]);
        }
        append(t) {
          return e.join([this, e.bytes(t)]);
        }
        slice(t, r) {
          return new e(new Uint8Array(this).slice(t, r));
        }
        subarray(t, r) {
          return new e(new Uint8Array(this).subarray(t, r));
        }
        reverse() {
          return new e(new Uint8Array(this).reverse());
        }
        write(t, r) {
          let n = e.bytes(t);
          this.set(n, r);
        }
        prefixSize(t) {
          let r = e.varInt(this.length, t);
          return e.join([r, this]);
        }
        static from(t) {
          return new e(Uint8Array.from(t));
        }
        static of(...t) {
          return new e(Uint8Array.of(...t));
        }
        static join(t) {
          let r = k(t.map((t) => e.bytes(t)));
          return new e(r);
        }
        static varInt(t, r) {
          if (t < 253) return e.num(t, 1);
          if (t < 65536) return e.of(253, ...e.num(t, 2, r));
          if (t < 4294967296) return e.of(254, ...e.num(t, 4, r));
          if (0x10000000000000000n > BigInt(t))
            return e.of(255, ...e.num(t, 8, r));
          throw Error(`Value is too large: ${t}`);
        }
      };
      function ei(e, t, r) {
        return new en(e, t, r);
      }
      function es(e, t, r) {
        return new en(
          (function (e) {
            let t = e.split('').map(Number);
            if (t.length % 8 != 0)
              throw Error(`Binary array is invalid length: ${e.length}`);
            let r = new Uint8Array(t.length / 8);
            for (let e = 0, n = 0; e < t.length; e += 8, n++) {
              let i = 0;
              for (let r = 0; r < 8; r++) i |= t[e + r] << (7 - r);
              r[n] = i;
            }
            return r;
          })(e),
          t,
          r,
        );
      }
      function ea(e, t, r) {
        return new en(e, t, r);
      }
      function eo(e, t, r) {
        return new en(e, t, r);
      }
      function eu(e, t, r) {
        return new en(et(e), t, r);
      }
      function el(e, t, r) {
        return new en(e, t, r);
      }
      function ef(e, t, r) {
        return new en(e, t, r);
      }
      function eh(e) {
        return new en(
          et(JSON.stringify(e, (e, t) => ('bigint' == typeof t ? `${t}n` : t))),
        );
      }
      function ed(e) {
        return new en(M(e));
      }
      function ec(e) {
        return new en(W(e));
      }
      function ep(e) {
        return new en(D(e));
      }
      function eg(e) {
        return new en(N(e));
      }
      let em = class {
        constructor(e) {
          (this.data = en.bytes(e)), (this.size = this.data.length);
        }
        peek(e) {
          if (e > this.size)
            throw Error(`Size greater than stream: ${e} > ${this.size}`);
          return new en(this.data.slice(0, e));
        }
        read(e) {
          e = e ?? this.readSize();
          let t = this.peek(e);
          return (
            (this.data = this.data.slice(e)), (this.size = this.data.length), t
          );
        }
        readSize(e) {
          let t = this.read(1).num;
          switch (!0) {
            case t >= 0 && t < 253:
              return t;
            case 253 === t:
              return this.read(2).toNum(e);
            case 254 === t:
              return this.read(4).toNum(e);
            case 255 === t:
              return this.read(8).toNum(e);
            default:
              throw Error(`Varint is out of range: ${t}`);
          }
        }
      };
      function ey(e, t) {
        let r = en.bytes(e);
        if (r.length !== t)
          throw Error(`Invalid input size: ${r.hex} !== ${t}`);
      }
      function eb(e, t) {
        if (!t) return !1;
        throw Error(e);
      }
      function ev(e, ...t) {
        let r = en.str(e).digest.raw,
          n = t.map((e) => en.bytes(e));
        return en.join([r, r, en.join(n)]).digest;
      }
      let ew = {
        OP_0: 0,
        OP_PUSHDATA1: 76,
        OP_PUSHDATA2: 77,
        OP_PUSHDATA4: 78,
        OP_1NEGATE: 79,
        OP_SUCCESS80: 80,
        OP_1: 81,
        OP_2: 82,
        OP_3: 83,
        OP_4: 84,
        OP_5: 85,
        OP_6: 86,
        OP_7: 87,
        OP_8: 88,
        OP_9: 89,
        OP_10: 90,
        OP_11: 91,
        OP_12: 92,
        OP_13: 93,
        OP_14: 94,
        OP_15: 95,
        OP_16: 96,
        OP_NOP: 97,
        OP_SUCCESS98: 98,
        OP_IF: 99,
        OP_NOTIF: 100,
        OP_ELSE: 103,
        OP_ENDIF: 104,
        OP_VERIFY: 105,
        OP_RETURN: 106,
        OP_TOALTSTACK: 107,
        OP_FROMALTSTACK: 108,
        OP_2DROP: 109,
        OP_2DUP: 110,
        OP_3DUP: 111,
        OP_2OVER: 112,
        OP_2ROT: 113,
        OP_2SWAP: 114,
        OP_IFDUP: 115,
        OP_DEPTH: 116,
        OP_DROP: 117,
        OP_DUP: 118,
        OP_NIP: 119,
        OP_OVER: 120,
        OP_PICK: 121,
        OP_ROLL: 122,
        OP_ROT: 123,
        OP_SWAP: 124,
        OP_TUCK: 125,
        OP_SUCCESS126: 126,
        OP_SUCCESS127: 127,
        OP_SUCCESS128: 128,
        OP_SUCCESS129: 129,
        OP_SIZE: 130,
        OP_SUCCESS131: 131,
        OP_SUCCESS132: 132,
        OP_SUCCESS133: 133,
        OP_SUCCESS134: 134,
        OP_EQUAL: 135,
        OP_EQUALVERIFY: 136,
        OP_SUCCESS137: 137,
        OP_SUCCESS138: 138,
        OP_1ADD: 139,
        OP_1SUB: 140,
        OP_SUCCESS141: 141,
        OP_SUCCESS142: 142,
        OP_NEGATE: 143,
        OP_ABS: 144,
        OP_NOT: 145,
        OP_0NOTEQUAL: 146,
        OP_ADD: 147,
        OP_SUB: 148,
        OP_SUCCESS149: 149,
        OP_SUCCESS150: 150,
        OP_SUCCESS151: 151,
        OP_SUCCESS152: 152,
        OP_SUCCESS153: 153,
        OP_BOOLAND: 154,
        OP_BOOLOR: 155,
        OP_NUMEQUAL: 156,
        OP_NUMEQUALVERIFY: 157,
        OP_NUMNOTEQUAL: 158,
        OP_LESSTHAN: 159,
        OP_GREATERTHAN: 160,
        OP_LESSTHANOREQUAL: 161,
        OP_GREATERTHANOREQUAL: 162,
        OP_MIN: 163,
        OP_MAX: 164,
        OP_WITHIN: 165,
        OP_RIPEMD160: 166,
        OP_SHA1: 167,
        OP_SHA256: 168,
        OP_HASH160: 169,
        OP_HASH256: 170,
        OP_CODESEPARATOR: 171,
        OP_CHECKSIG: 172,
        OP_CHECKSIGVERIFY: 173,
        OP_CHECKMULTISIG: 174,
        OP_CHECKMULTISIGVERIFY: 175,
        OP_NOP1: 176,
        OP_CHECKLOCKTIMEVERIFY: 177,
        OP_CHECKSEQUENCEVERIFY: 178,
        OP_NOP4: 179,
        OP_NOP5: 180,
        OP_NOP6: 181,
        OP_NOP7: 182,
        OP_NOP8: 183,
        OP_NOP9: 184,
        OP_NOP10: 185,
        OP_CHECKSIGADD: 186,
      };
      function e_(e) {
        return (
          'string' == typeof e && e.length % 2 == 0 && /[0-9a-fA-F]/.test(e)
        );
      }
      function ex(e) {
        return e_(e) || e instanceof Uint8Array;
      }
      function eE(e = [], t = !0) {
        let r = en.num(0);
        return (
          Array.isArray(e) &&
            (r = en.raw(
              (function e(t) {
                let r = [];
                for (let n of t)
                  r.push(
                    (function (t) {
                      let r = new Uint8Array();
                      if ('string' == typeof t) {
                        if (t.startsWith('OP_'))
                          return en.num(
                            (function (e) {
                              for (let [t, r] of Object.entries(ew))
                                if (t === e) return Number(r);
                              throw Error('OPCODE not found:' + e);
                            })(t),
                            1,
                          );
                        r = e_(t) ? en.hex(t) : en.str(t);
                      } else if (1 === (r = en.bytes(t)).length && r[0] <= 16)
                        return 0 !== r[0] && (r[0] += 80), r;
                      return r.length > 520
                        ? e(
                            (function (e) {
                              let t = [],
                                r = new em(e);
                              for (; r.size > 520; ) t.push(r.read(520));
                              return t.push(r.read(r.size)), t;
                            })(r),
                          )
                        : en.join([
                            (function (e) {
                              let t = en.num(76, 1),
                                r = en.num(77, 1);
                              switch (!0) {
                                case e <= 75:
                                  return en.num(e);
                                case e > 75 && e < 256:
                                  return en.join([t, en.num(e, 1, 'le')]);
                                case e >= 256 && e <= 520:
                                  return en.join([r, en.num(e, 2, 'le')]);
                                default:
                                  throw Error(
                                    'Invalid word size:' + e.toString(),
                                  );
                              }
                            })(r.length),
                            r,
                          ]);
                    })(n),
                  );
                return r.length > 0 ? en.join(r) : new Uint8Array();
              })(e),
            )),
          e_(e) && (r = en.hex(e)),
          e instanceof Uint8Array && (r = en.raw(e)),
          t && (r = r.prefixSize('le')),
          r
        );
      }
      function eS(e, t = !1) {
        let r = en.bytes(e);
        if (t) {
          let e = r.stream.readSize('le');
          if ((r = r.slice(1)).length !== e)
            throw Error(
              `Varint does not match stream size: ${e} !== ${r.length}`,
            );
        }
        return (function (e) {
          let t, r, n;
          let i = new em(e),
            s = [],
            a = i.size,
            o = 0;
          for (; o < a; )
            switch (
              ((r = (function (e) {
                switch (!0) {
                  case 0 === e:
                    return 'opcode';
                  case e >= 1 && e <= 75:
                    return 'varint';
                  case 76 === e:
                    return 'pushdata1';
                  case 77 === e:
                    return 'pushdata2';
                  case 78 === e:
                    return 'pushdata4';
                  case e <= 254:
                    return 'opcode';
                  default:
                    throw Error(`Invalid word range: ${e}`);
                }
              })((t = i.read(1).num))),
              o++,
              r)
            ) {
              case 'varint':
                s.push(i.read(t).hex), (o += t);
                break;
              case 'pushdata1':
                (n = i.read(1).reverse().num),
                  s.push(i.read(n).hex),
                  (o += n + 1);
                break;
              case 'pushdata2':
                (n = i.read(2).reverse().num),
                  s.push(i.read(n).hex),
                  (o += n + 2);
                break;
              case 'pushdata4':
                (n = i.read(4).reverse().num),
                  s.push(i.read(n).hex),
                  (o += n + 4);
                break;
              case 'opcode':
                if (
                  !(function (e) {
                    switch (!0) {
                      case 'number' != typeof e:
                        return !1;
                      case 0 === e:
                        return !0;
                      case [].includes(e):
                        return !1;
                      case 75 < e && e < 254:
                        return !0;
                      default:
                        return !1;
                    }
                  })(t)
                )
                  throw Error(`Invalid OPCODE: ${t}`);
                s.push(
                  (function (e) {
                    if (e > 186 && e < 255) return 'OP_SUCCESS' + String(e);
                    for (let [t, r] of Object.entries(ew))
                      if (r === e) return t;
                    throw Error('OPCODE not found:' + String(e));
                  })(t),
                );
                break;
              default:
                throw Error(`Word type undefined: ${t}`);
            }
          return s;
        })(r);
      }
      let eO = {
        encode: eE,
        decode: eS,
        fmt: {
          toAsm: function (e, t) {
            if (
              (Array.isArray(e) && (e = eE(e, t)),
              e instanceof Uint8Array || e_(e))
            )
              return eS(e, t);
            throw Error('Invalid format: ' + String(typeof e));
          },
          toBytes: function (e, t) {
            if (
              ((e instanceof Uint8Array || e_(e)) && (e = eS(e, t)),
              Array.isArray(e))
            )
              return eE(e, t);
            throw Error('Invalid format: ' + String(typeof e));
          },
          toParam: function (e) {
            if (!Array.isArray(e)) return en.bytes(e);
            throw Error('Invalid format: ' + String(typeof e));
          },
        },
      };
      function eA(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function ek(e, ...t) {
        if (!(e instanceof Uint8Array)) throw TypeError('Expected Uint8Array');
        if (t.length > 0 && !t.includes(e.length))
          throw TypeError(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`,
          );
      }
      var eI = function (e) {
          if ('function' != typeof e || 'function' != typeof e.create)
            throw Error('Hash should be wrapped by utils.wrapConstructor');
          eA(e.outputLen), eA(e.blockLen);
        },
        eP = function (e, t = !0) {
          if (e.destroyed) throw Error('Hash instance has been destroyed');
          if (t && e.finished)
            throw Error('Hash#digest() has already been called');
        },
        eB = function (e, t) {
          ek(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              `digestInto() expects output buffer of length at least ${r}`,
            );
        };
      let eU =
          'object' == typeof globalThis && 'crypto' in globalThis
            ? globalThis.crypto
            : void 0,
        eT = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        eC = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function eN(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
              return new TextEncoder().encode(e);
            })(e)),
          !(e instanceof Uint8Array))
        )
          throw TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      let eL = class {
        clone() {
          return this._cloneInto();
        }
      };
      function eZ(e) {
        let t = (t) => e().update(eN(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function eR(e = 32) {
        if (eU && 'function' == typeof eU.getRandomValues)
          return eU.getRandomValues(new Uint8Array(e));
        throw Error('crypto.getRandomValues must be defined');
      }
      let ej = class extends eL {
          constructor(e, t, r, n) {
            super(),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = r),
              (this.isLE = n),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(e)),
              (this.view = eT(this.buffer));
          }
          update(e) {
            eP(this);
            let { view: t, buffer: r, blockLen: n } = this,
              i = (e = eN(e)).length;
            for (let s = 0; s < i; ) {
              let a = Math.min(n - this.pos, i - s);
              if (a === n) {
                let t = eT(e);
                for (; n <= i - s; s += n) this.process(t, s);
                continue;
              }
              r.set(e.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === n && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            eP(this), eB(e, this), (this.finished = !0);
            let { buffer: t, view: r, blockLen: n, isLE: i } = this,
              { pos: s } = this;
            (t[s++] = 128),
              this.buffer.subarray(s).fill(0),
              this.padOffset > n - s && (this.process(r, 0), (s = 0));
            for (let e = s; e < n; e++) t[e] = 0;
            !(function (e, t, r, n) {
              if ('function' == typeof e.setBigUint64)
                return e.setBigUint64(t, r, n);
              let i = BigInt(32),
                s = BigInt(4294967295),
                a = Number((r >> i) & s),
                o = Number(r & s),
                u = n ? 4 : 0,
                l = n ? 0 : 4;
              e.setUint32(t + u, a, n), e.setUint32(t + l, o, n);
            })(r, n - 8, BigInt(8 * this.length), i),
              this.process(r, 0);
            let a = eT(e),
              o = this.outputLen;
            if (o % 4)
              throw Error('_sha2: outputLen should be aligned to 32bit');
            let u = o / 4,
              l = this.get();
            if (u > l.length) throw Error('_sha2: outputLen bigger than state');
            for (let e = 0; e < u; e++) a.setUint32(4 * e, l[e], i);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: r,
              length: n,
              finished: i,
              destroyed: s,
              pos: a,
            } = this;
            return (
              (e.length = n),
              (e.pos = a),
              (e.finished = i),
              (e.destroyed = s),
              n % t && e.buffer.set(r),
              e
            );
          }
        },
        eH = (e, t, r) => (e & t) ^ (~e & r),
        e$ = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        eD = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        ez = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        eV = new Uint32Array(64),
        eq = class extends ej {
          constructor() {
            super(64, 32, 8, !1),
              (this.A = 0 | ez[0]),
              (this.B = 0 | ez[1]),
              (this.C = 0 | ez[2]),
              (this.D = 0 | ez[3]),
              (this.E = 0 | ez[4]),
              (this.F = 0 | ez[5]),
              (this.G = 0 | ez[6]),
              (this.H = 0 | ez[7]);
          }
          get() {
            let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
            return [e, t, r, n, i, s, a, o];
          }
          set(e, t, r, n, i, s, a, o) {
            (this.A = 0 | e),
              (this.B = 0 | t),
              (this.C = 0 | r),
              (this.D = 0 | n),
              (this.E = 0 | i),
              (this.F = 0 | s),
              (this.G = 0 | a),
              (this.H = 0 | o);
          }
          process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) eV[r] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
              let t = eV[e - 15],
                r = eV[e - 2],
                n = eC(t, 7) ^ eC(t, 18) ^ (t >>> 3),
                i = eC(r, 17) ^ eC(r, 19) ^ (r >>> 10);
              eV[e] = (i + eV[e - 7] + n + eV[e - 16]) | 0;
            }
            let { A: r, B: n, C: i, D: s, E: a, F: o, G: u, H: l } = this;
            for (let e = 0; e < 64; e++) {
              let t =
                  (l +
                    (eC(a, 6) ^ eC(a, 11) ^ eC(a, 25)) +
                    eH(a, o, u) +
                    eD[e] +
                    eV[e]) |
                  0,
                f = ((eC(r, 2) ^ eC(r, 13) ^ eC(r, 22)) + e$(r, n, i)) | 0;
              (l = u),
                (u = o),
                (o = a),
                (a = (s + t) | 0),
                (s = i),
                (i = n),
                (n = r),
                (r = (t + f) | 0);
            }
            (r = (r + this.A) | 0),
              (n = (n + this.B) | 0),
              (i = (i + this.C) | 0),
              (s = (s + this.D) | 0),
              (a = (a + this.E) | 0),
              (o = (o + this.F) | 0),
              (u = (u + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(r, n, i, s, a, o, u, l);
          }
          roundClean() {
            eV.fill(0);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
          }
        },
        eF = class extends eq {
          constructor() {
            super(),
              (this.A = -1056596264),
              (this.B = 914150663),
              (this.C = 812702999),
              (this.D = -150054599),
              (this.E = -4191439),
              (this.F = 1750603025),
              (this.G = 1694076839),
              (this.H = -1090891868),
              (this.outputLen = 28);
          }
        },
        eK = eZ(() => new eq());
      eZ(() => new eF());
      let eM = BigInt(0),
        eG = BigInt(1),
        eW = BigInt(2),
        eY = (e) => e instanceof Uint8Array,
        eJ = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, '0'),
        );
      function eQ(e) {
        if (!eY(e)) throw Error('Uint8Array expected');
        let t = '';
        for (let r = 0; r < e.length; r++) t += eJ[e[r]];
        return t;
      }
      function eX(e) {
        let t = e.toString(16);
        return 1 & t.length ? `0${t}` : t;
      }
      function e0(e) {
        if ('string' != typeof e)
          throw Error('hex string expected, got ' + typeof e);
        return BigInt('' === e ? '0' : `0x${e}`);
      }
      function e1(e) {
        if ('string' != typeof e)
          throw Error('hex string expected, got ' + typeof e);
        if (e.length % 2)
          throw Error('hex string is invalid: unpadded ' + e.length);
        let t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          let n = 2 * r,
            i = Number.parseInt(e.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error('invalid byte sequence');
          t[r] = i;
        }
        return t;
      }
      function e2(e) {
        return e0(eQ(e));
      }
      function e3(e) {
        if (!eY(e)) throw Error('Uint8Array expected');
        return e0(eQ(Uint8Array.from(e).reverse()));
      }
      let e8 = (e, t) => e1(e.toString(16).padStart(2 * t, '0')),
        e4 = (e, t) => e8(e, t).reverse();
      function e5(e, t, r) {
        let n;
        if ('string' == typeof t)
          try {
            n = e1(t);
          } catch (r) {
            throw Error(
              `${e} must be valid hex string, got "${t}". Cause: ${r}`,
            );
          }
        else if (eY(t)) n = Uint8Array.from(t);
        else throw Error(`${e} must be hex string or Uint8Array`);
        let i = n.length;
        if ('number' == typeof r && i !== r)
          throw Error(`${e} expected ${r} bytes, got ${i}`);
        return n;
      }
      function e6(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            if (!eY(e)) throw Error('Uint8Array expected');
            t.set(e, r), (r += e.length);
          }),
          t
        );
      }
      let e9 = (e) => (eW << BigInt(e - 1)) - eG,
        e7 = (e) => new Uint8Array(e),
        te = (e) => Uint8Array.from(e);
      function tt(e, t, r) {
        if ('number' != typeof e || e < 2)
          throw Error('hashLen must be a number');
        if ('number' != typeof t || t < 2)
          throw Error('qByteLen must be a number');
        if ('function' != typeof r) throw Error('hmacFn must be a function');
        let n = e7(e),
          i = e7(e),
          s = 0,
          a = () => {
            n.fill(1), i.fill(0), (s = 0);
          },
          o = (...e) => r(i, n, ...e),
          u = (e = e7()) => {
            (i = o(te([0]), e)),
              (n = o()),
              0 !== e.length && ((i = o(te([1]), e)), (n = o()));
          },
          l = () => {
            if (s++ >= 1e3) throw Error('drbg: tried 1000 values');
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (n = o()).slice();
              r.push(t), (e += n.length);
            }
            return e6(...r);
          };
        return (e, t) => {
          let r;
          for (a(), u(e); !(r = t(l())); ) u();
          return a(), r;
        };
      }
      let tr = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function tn(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = tr[r];
          if ('function' != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let s = e[t];
          if ((!n || void 0 !== s) && !i(s, e))
            throw Error(
              `Invalid param ${String(t)}=${s} (${typeof s}), expected ${r}`,
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      var ti = Object.freeze({
        __proto__: null,
        bitGet: (e, t) => (e >> BigInt(t)) & 1n,
        bitLen: function (e) {
          let t;
          for (t = 0; e > 0n; e >>= eG, t += 1);
          return t;
        },
        bitMask: e9,
        bitSet: (e, t, r) => e | ((r ? eG : eM) << BigInt(t)),
        bytesToHex: eQ,
        bytesToNumberBE: e2,
        bytesToNumberLE: e3,
        concatBytes: e6,
        createHmacDrbg: tt,
        ensureBytes: e5,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        hexToBytes: e1,
        hexToNumber: e0,
        numberToBytesBE: e8,
        numberToBytesLE: e4,
        numberToHexUnpadded: eX,
        numberToVarBytesBE: (e) => e1(eX(e)),
        utf8ToBytes: function (e) {
          if ('string' != typeof e)
            throw Error(`utf8ToBytes expected string, got ${typeof e}`);
          return new TextEncoder().encode(e);
        },
        validateObject: tn,
      });
      let ts = BigInt(0),
        ta = BigInt(1),
        to = BigInt(2),
        tu = BigInt(3),
        tl = BigInt(4),
        tf = BigInt(5),
        th = BigInt(8);
      function td(e, t) {
        let r = e % t;
        return r >= ts ? r : t + r;
      }
      function tc(e, t, r) {
        let n = e;
        for (; t-- > ts; ) (n *= n), (n %= r);
        return n;
      }
      function tp(e, t) {
        if (e === ts || t <= ts)
          throw Error(
            `invert: expected positive integers, got n=${e} mod=${t}`,
          );
        let r = td(e, t),
          n = t,
          i = ts,
          s = ta;
        for (; r !== ts; ) {
          let e = n / r,
            t = n % r,
            a = i - s * e;
          (n = r), (r = t), (i = s), (s = a);
        }
        if (n !== ta) throw Error('invert: does not exist');
        return td(i, t);
      }
      BigInt(9), BigInt(16);
      let tg = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function tm(e) {
        return tn(
          e,
          tg.reduce((e, t) => ((e[t] = 'function'), e), {
            ORDER: 'bigint',
            MASK: 'bigint',
            BYTES: 'isSafeInteger',
            BITS: 'isSafeInteger',
          }),
        );
      }
      function ty(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function tb(e, t, r = !1, n = {}) {
        if (e <= ts) throw Error(`Expected Fp ORDER > 0, got ${e}`);
        let { nBitLength: i, nByteLength: s } = ty(e, t);
        if (s > 2048)
          throw Error('Field lengths over 2048 bytes are not supported');
        let a = (function (e) {
            if (e % tl === tu) {
              let t = (e + ta) / tl;
              return function (e, r) {
                let n = e.pow(r, t);
                if (!e.eql(e.sqr(n), r)) throw Error('Cannot find square root');
                return n;
              };
            }
            if (e % th === tf) {
              let t = (e - tf) / th;
              return function (e, r) {
                let n = e.mul(r, to),
                  i = e.pow(n, t),
                  s = e.mul(r, i),
                  a = e.mul(e.mul(s, to), i),
                  o = e.mul(s, e.sub(a, e.ONE));
                if (!e.eql(e.sqr(o), r)) throw Error('Cannot find square root');
                return o;
              };
            }
            return (function (e) {
              let t, r, n;
              let i = (e - ta) / to;
              for (t = e - ta, r = 0; t % to === ts; t /= to, r++);
              for (
                n = to;
                n < e &&
                (function (e, t, r) {
                  if (r <= ts || t < ts)
                    throw Error('Expected power/modulo > 0');
                  if (r === ta) return ts;
                  let n = ta;
                  for (; t > ts; )
                    t & ta && (n = (n * e) % r), (e = (e * e) % r), (t >>= ta);
                  return n;
                })(n, i, e) !==
                  e - ta;
                n++
              );
              if (1 === r) {
                let t = (e + ta) / tl;
                return function (e, r) {
                  let n = e.pow(r, t);
                  if (!e.eql(e.sqr(n), r))
                    throw Error('Cannot find square root');
                  return n;
                };
              }
              let s = (t + ta) / to;
              return function (e, a) {
                if (e.pow(a, i) === e.neg(e.ONE))
                  throw Error('Cannot find square root');
                let o = r,
                  u = e.pow(e.mul(e.ONE, n), t),
                  l = e.pow(a, s),
                  f = e.pow(a, t);
                for (; !e.eql(f, e.ONE); ) {
                  if (e.eql(f, e.ZERO)) return e.ZERO;
                  let t = 1;
                  for (let r = e.sqr(f); t < o && !e.eql(r, e.ONE); t++)
                    r = e.sqr(r);
                  let r = e.pow(u, ta << BigInt(o - t - 1));
                  (u = e.sqr(r)), (l = e.mul(l, r)), (f = e.mul(f, u)), (o = t);
                }
                return l;
              };
            })(e);
          })(e),
          o = Object.freeze({
            ORDER: e,
            BITS: i,
            BYTES: s,
            MASK: e9(i),
            ZERO: ts,
            ONE: ta,
            create: (t) => td(t, e),
            isValid: (t) => {
              if ('bigint' != typeof t)
                throw Error(
                  `Invalid field element: expected bigint, got ${typeof t}`,
                );
              return ts <= t && t < e;
            },
            is0: (e) => e === ts,
            isOdd: (e) => (e & ta) === ta,
            neg: (t) => td(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => td(t * t, e),
            add: (t, r) => td(t + r, e),
            sub: (t, r) => td(t - r, e),
            mul: (t, r) => td(t * r, e),
            pow: (e, t) =>
              (function (e, t, r) {
                if (r < ts) throw Error('Expected power > 0');
                if (r === ts) return e.ONE;
                if (r === ta) return t;
                let n = e.ONE,
                  i = t;
                for (; r > ts; )
                  r & ta && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= ta);
                return n;
              })(o, e, t),
            div: (t, r) => td(t * tp(r, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => tp(t, e),
            sqrt: n.sqrt || ((e) => a(o, e)),
            invertBatch: (e) =>
              (function (e, t) {
                let r = Array(t.length),
                  n = t.reduce(
                    (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
                    e.ONE,
                  ),
                  i = e.inv(n);
                return (
                  t.reduceRight(
                    (t, n, i) =>
                      e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
                    i,
                  ),
                  r
                );
              })(o, e),
            cmov: (e, t, r) => (r ? t : e),
            toBytes: (e) => (r ? e4(e, s) : e8(e, s)),
            fromBytes: (e) => {
              if (e.length !== s)
                throw Error(`Fp.fromBytes: expected ${s}, got ${e.length}`);
              return r ? e3(e) : e2(e);
            },
          });
        return Object.freeze(o);
      }
      let tv = BigInt(0),
        tw = BigInt(1);
      function t_(e) {
        return (
          tm(e.Fp),
          tn(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' },
          ),
          Object.freeze({ ...ty(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      let { bytesToNumberBE: tx, hexToBytes: tE } = ti,
        tS = {
          Err: class extends Error {
            constructor(e = '') {
              super(e);
            }
          },
          _parseInt(e) {
            let { Err: t } = tS;
            if (e.length < 2 || 2 !== e[0])
              throw new t('Invalid signature integer tag');
            let r = e[1],
              n = e.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new t('Invalid signature integer: wrong length');
            if (0 === n[0] && n[1] <= 127)
              throw new t('Invalid signature integer: trailing length');
            return { d: tx(n), l: e.subarray(r + 2) };
          },
          toSig(e) {
            let { Err: t } = tS,
              r = 'string' == typeof e ? tE(e) : e;
            if (!(r instanceof Uint8Array)) throw Error('ui8a expected');
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new t('Invalid signature tag');
            if (r[1] !== n - 2)
              throw new t('Invalid signature: incorrect length');
            let { d: i, l: s } = tS._parseInt(r.subarray(2)),
              { d: a, l: o } = tS._parseInt(s);
            if (o.length)
              throw new t('Invalid signature: left bytes after parsing');
            return { r: i, s: a };
          },
          hexFromSig(e) {
            let t = (e) => (Number.parseInt(e[0], 16) >= 8 ? '00' + e : e),
              r = (e) => {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t;
              },
              n = t(r(e.s)),
              i = t(r(e.r)),
              s = n.length / 2,
              a = i.length / 2,
              o = r(s),
              u = r(a);
            return `30${r(a + s + 4)}02${u}${i}02${o}${n}`;
          },
        },
        tO = BigInt(0),
        tA = BigInt(1),
        tk = BigInt(2),
        tI = BigInt(3),
        tP = BigInt(4),
        tB = class extends eL {
          constructor(e, t) {
            super(), (this.finished = !1), (this.destroyed = !1), eI(e);
            let r = eN(t);
            if (
              ((this.iHash = e.create()),
              'function' != typeof this.iHash.update)
            )
              throw TypeError(
                'Expected instance of class which extends utils.Hash',
              );
            (this.blockLen = this.iHash.blockLen),
              (this.outputLen = this.iHash.outputLen);
            let n = this.blockLen,
              i = new Uint8Array(n);
            i.set(r.length > n ? e.create().update(r).digest() : r);
            for (let e = 0; e < i.length; e++) i[e] ^= 54;
            this.iHash.update(i), (this.oHash = e.create());
            for (let e = 0; e < i.length; e++) i[e] ^= 106;
            this.oHash.update(i), i.fill(0);
          }
          update(e) {
            return eP(this), this.iHash.update(e), this;
          }
          digestInto(e) {
            eP(this),
              ek(e, this.outputLen),
              (this.finished = !0),
              this.iHash.digestInto(e),
              this.oHash.update(e),
              this.oHash.digestInto(e),
              this.destroy();
          }
          digest() {
            let e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e;
          }
          _cloneInto(e) {
            e || (e = Object.create(Object.getPrototypeOf(this), {}));
            let {
              oHash: t,
              iHash: r,
              finished: n,
              destroyed: i,
              blockLen: s,
              outputLen: a,
            } = this;
            return (
              (e.finished = n),
              (e.destroyed = i),
              (e.blockLen = s),
              (e.outputLen = a),
              (e.oHash = t._cloneInto(e.oHash)),
              (e.iHash = r._cloneInto(e.iHash)),
              e
            );
          }
          destroy() {
            (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
          }
        },
        tU = (e, t, r) => new tB(e, t).update(r).digest();
      tU.create = (e, t) => new tB(e, t);
      let tT = BigInt(
          '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f',
        ),
        tC = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
        ),
        tN = BigInt(1),
        tL = BigInt(2),
        tZ = (e, t) => (e + t / tL) / t;
      function tR(e) {
        let t = BigInt(3),
          r = BigInt(6),
          n = BigInt(11),
          i = BigInt(22),
          s = BigInt(23),
          a = BigInt(44),
          o = BigInt(88),
          u = (e * e * e) % tT,
          l = (u * u * e) % tT,
          f = (tc(l, t, tT) * l) % tT,
          h = (tc(f, t, tT) * l) % tT,
          d = (tc(h, tL, tT) * u) % tT,
          c = (tc(d, n, tT) * d) % tT,
          p = (tc(c, i, tT) * c) % tT,
          g = (tc(p, a, tT) * p) % tT,
          m = (tc(g, o, tT) * g) % tT,
          y = (tc(m, a, tT) * p) % tT,
          b = (tc(y, t, tT) * l) % tT,
          v = (tc(b, s, tT) * c) % tT,
          w = (tc(v, r, tT) * u) % tT,
          _ = tc(w, tL, tT);
        if (!tj.eql(tj.sqr(_), e)) throw Error('Cannot find square root');
        return _;
      }
      let tj = tb(tT, void 0, void 0, { sqrt: tR }),
        tH = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = t_(e);
                  return (
                    tn(
                      t,
                      {
                        hash: 'hash',
                        hmac: 'function',
                        randomBytes: 'function',
                      },
                      {
                        bits2int: 'function',
                        bits2int_modN: 'function',
                        lowS: 'boolean',
                      },
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(e) {
                return td(e, n);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: u,
                  weierstrassEquation: l,
                  isWithinCurveOrder: f,
                } = (function (e) {
                  let t = (function (e) {
                      let t = t_(e);
                      tn(
                        t,
                        { a: 'field', b: 'field' },
                        {
                          allowedPrivateKeyLengths: 'array',
                          wrapPrivateKey: 'boolean',
                          isTorsionFree: 'function',
                          clearCofactor: 'function',
                          allowInfinityPoint: 'boolean',
                          fromBytes: 'function',
                          toBytes: 'function',
                        },
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            'Endomorphism can only be defined for Koblitz curves that have a=0',
                          );
                        if (
                          'object' != typeof r ||
                          'bigint' != typeof r.beta ||
                          'function' != typeof r.splitScalar
                        )
                          throw Error(
                            'Expected endomorphism with beta: bigint and splitScalar: function',
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = t,
                    n =
                      t.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return e6(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y),
                        );
                      }),
                    i =
                      t.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: n, b: i } = t,
                      s = r.sqr(e),
                      a = r.mul(s, e);
                    return r.add(r.add(a, r.mul(e, n)), i);
                  }
                  function a(e) {
                    return 'bigint' == typeof e && tO < e && e < t.n;
                  }
                  function o(e) {
                    if (!a(e))
                      throw Error(
                        'Expected valid bigint: 0 < bigint < curve.n',
                      );
                  }
                  function u(e) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: s,
                      n: a,
                    } = t;
                    if (n && 'bigint' != typeof e) {
                      if (
                        (e instanceof Uint8Array && (e = eQ(e)),
                        'string' != typeof e || !n.includes(e.length))
                      )
                        throw Error('Invalid key');
                      e = e.padStart(2 * i, '0');
                    }
                    try {
                      r =
                        'bigint' == typeof e ? e : e2(e5('private key', e, i));
                    } catch (t) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof e}`,
                      );
                    }
                    return s && (r = td(r, a)), o(r), r;
                  }
                  let l = new Map();
                  function f(e) {
                    if (!(e instanceof h))
                      throw Error('ProjectivePoint expected');
                  }
                  class h {
                    constructor(e, t, n) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        null == e || !r.isValid(e))
                      )
                        throw Error('x required');
                      if (null == t || !r.isValid(t)) throw Error('y required');
                      if (null == n || !r.isValid(n)) throw Error('z required');
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error('invalid affine point');
                      if (e instanceof h)
                        throw Error('projective point not allowed');
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? h.ZERO : new h(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(h.fromAffine);
                    }
                    static fromHex(e) {
                      let t = h.fromAffine(i(e5('pointHex', e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return h.BASE.multiply(u(e));
                    }
                    _setWindowSize(e) {
                      (this._WINDOW_SIZE = e), l.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (t.allowInfinityPoint) return;
                        throw Error('bad point: ZERO');
                      }
                      let { x: e, y: n } = this.toAffine();
                      if (!r.isValid(e) || !r.isValid(n))
                        throw Error('bad point: x or y not FE');
                      let i = r.sqr(n),
                        a = s(e);
                      if (!r.eql(i, a))
                        throw Error('bad point: equation left != right');
                      if (!this.isTorsionFree())
                        throw Error('bad point: not in prime-order subgroup');
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      f(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: s, py: a, pz: o } = e,
                        u = r.eql(r.mul(t, o), r.mul(s, i)),
                        l = r.eql(r.mul(n, o), r.mul(a, i));
                      return u && l;
                    }
                    negate() {
                      return new h(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: n } = t,
                        i = r.mul(n, tI),
                        { px: s, py: a, pz: o } = this,
                        u = r.ZERO,
                        l = r.ZERO,
                        f = r.ZERO,
                        d = r.mul(s, s),
                        c = r.mul(a, a),
                        p = r.mul(o, o),
                        g = r.mul(s, a);
                      return (
                        (g = r.add(g, g)),
                        (f = r.mul(s, o)),
                        (f = r.add(f, f)),
                        (u = r.mul(e, f)),
                        (l = r.mul(i, p)),
                        (l = r.add(u, l)),
                        (u = r.sub(c, l)),
                        (l = r.add(c, l)),
                        (l = r.mul(u, l)),
                        (u = r.mul(g, u)),
                        (f = r.mul(i, f)),
                        (p = r.mul(e, p)),
                        (g = r.sub(d, p)),
                        (g = r.mul(e, g)),
                        (g = r.add(g, f)),
                        (f = r.add(d, d)),
                        (d = r.add(f, d)),
                        (d = r.add(d, p)),
                        (d = r.mul(d, g)),
                        (l = r.add(l, d)),
                        (p = r.mul(a, o)),
                        (p = r.add(p, p)),
                        (d = r.mul(p, g)),
                        (u = r.sub(u, d)),
                        (f = r.mul(p, c)),
                        (f = r.add(f, f)),
                        new h(u, l, (f = r.add(f, f)))
                      );
                    }
                    add(e) {
                      f(e);
                      let { px: n, py: i, pz: s } = this,
                        { px: a, py: o, pz: u } = e,
                        l = r.ZERO,
                        d = r.ZERO,
                        c = r.ZERO,
                        p = t.a,
                        g = r.mul(t.b, tI),
                        m = r.mul(n, a),
                        y = r.mul(i, o),
                        b = r.mul(s, u),
                        v = r.add(n, i),
                        w = r.add(a, o);
                      (v = r.mul(v, w)),
                        (w = r.add(m, y)),
                        (v = r.sub(v, w)),
                        (w = r.add(n, s));
                      let _ = r.add(a, u);
                      return (
                        (w = r.mul(w, _)),
                        (_ = r.add(m, b)),
                        (w = r.sub(w, _)),
                        (_ = r.add(i, s)),
                        (l = r.add(o, u)),
                        (_ = r.mul(_, l)),
                        (l = r.add(y, b)),
                        (_ = r.sub(_, l)),
                        (c = r.mul(p, w)),
                        (l = r.mul(g, b)),
                        (c = r.add(l, c)),
                        (l = r.sub(y, c)),
                        (c = r.add(y, c)),
                        (d = r.mul(l, c)),
                        (y = r.add(m, m)),
                        (y = r.add(y, m)),
                        (b = r.mul(p, b)),
                        (w = r.mul(g, w)),
                        (y = r.add(y, b)),
                        (b = r.sub(m, b)),
                        (b = r.mul(p, b)),
                        (w = r.add(w, b)),
                        (m = r.mul(y, w)),
                        (d = r.add(d, m)),
                        (m = r.mul(_, w)),
                        (l = r.mul(v, l)),
                        (l = r.sub(l, m)),
                        (m = r.mul(v, y)),
                        (c = r.mul(_, c)),
                        new h(l, d, (c = r.add(c, m)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(e) {
                      return c.wNAFCached(this, l, e, (e) => {
                        let t = r.invertBatch(e.map((e) => e.pz));
                        return e
                          .map((e, r) => e.toAffine(t[r]))
                          .map(h.fromAffine);
                      });
                    }
                    multiplyUnsafe(e) {
                      let n = h.ZERO;
                      if (e === tO) return n;
                      if ((o(e), e === tA)) return this;
                      let { endo: i } = t;
                      if (!i) return c.unsafeLadder(this, e);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: u,
                          k2: l,
                        } = i.splitScalar(e),
                        f = n,
                        d = n,
                        p = this;
                      for (; a > tO || l > tO; )
                        a & tA && (f = f.add(p)),
                          l & tA && (d = d.add(p)),
                          (p = p.double()),
                          (a >>= tA),
                          (l >>= tA);
                      return (
                        s && (f = f.negate()),
                        u && (d = d.negate()),
                        (d = new h(r.mul(d.px, i.beta), d.py, d.pz)),
                        f.add(d)
                      );
                    }
                    multiply(e) {
                      let n, i;
                      o(e);
                      let { endo: s } = t;
                      if (s) {
                        let {
                            k1neg: t,
                            k1: a,
                            k2neg: o,
                            k2: u,
                          } = s.splitScalar(e),
                          { p: l, f: f } = this.wNAF(a),
                          { p: d, f: p } = this.wNAF(u);
                        (l = c.constTimeNegate(t, l)),
                          (d = c.constTimeNegate(o, d)),
                          (d = new h(r.mul(d.px, s.beta), d.py, d.pz)),
                          (n = l.add(d)),
                          (i = f.add(p));
                      } else {
                        let { p: t, f: r } = this.wNAF(e);
                        (n = t), (i = r);
                      }
                      return h.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = h.BASE,
                        i = (e, t) =>
                          t !== tO && t !== tA && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        s = i(this, t).add(i(e, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(e) {
                      let { px: t, py: n, pz: i } = this,
                        s = this.is0();
                      null == e && (e = s ? r.ONE : r.inv(i));
                      let a = r.mul(t, e),
                        o = r.mul(n, e),
                        u = r.mul(i, e);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(u, r.ONE)) throw Error('invZ was invalid');
                      return { x: a, y: o };
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: r } = t;
                      if (e === tA) return !0;
                      if (r) return r(h, this);
                      throw Error(
                        'isTorsionFree() has not been declared for the elliptic curve',
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: r } = t;
                      return e === tA
                        ? this
                        : r
                          ? r(h, this)
                          : this.multiplyUnsafe(t.h);
                    }
                    toRawBytes(e = !0) {
                      return this.assertValidity(), n(h, this, e);
                    }
                    toHex(e = !0) {
                      return eQ(this.toRawBytes(e));
                    }
                  }
                  (h.BASE = new h(t.Gx, t.Gy, r.ONE)),
                    (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
                  let d = t.nBitLength,
                    c = (function (e, t) {
                      let r = (e, t) => {
                          let r = t.negate();
                          return e ? r : t;
                        },
                        n = (e) => ({
                          windows: Math.ceil(t / e) + 1,
                          windowSize: 2 ** (e - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(t, r) {
                          let n = e.ZERO,
                            i = t;
                          for (; r > tv; )
                            r & tw && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= tw);
                          return n;
                        },
                        precomputeWindow(e, t) {
                          let { windows: r, windowSize: i } = n(t),
                            s = [],
                            a = e,
                            o = a;
                          for (let e = 0; e < r; e++) {
                            (o = a), s.push(o);
                            for (let e = 1; e < i; e++)
                              (o = o.add(a)), s.push(o);
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(t, i, s) {
                          let { windows: a, windowSize: o } = n(t),
                            u = e.ZERO,
                            l = e.BASE,
                            f = BigInt(2 ** t - 1),
                            h = 2 ** t,
                            d = BigInt(t);
                          for (let e = 0; e < a; e++) {
                            let t = e * o,
                              n = Number(s & f);
                            (s >>= d), n > o && ((n -= h), (s += tw));
                            let a = t + Math.abs(n) - 1,
                              c = e % 2 != 0,
                              p = n < 0;
                            0 === n
                              ? (l = l.add(r(c, i[t])))
                              : (u = u.add(r(p, i[a])));
                          }
                          return { p: u, f: l };
                        },
                        wNAFCached(e, t, r, n) {
                          let i = e._WINDOW_SIZE || 1,
                            s = t.get(e);
                          return (
                            s ||
                              ((s = this.precomputeWindow(e, i)),
                              1 !== i && t.set(e, n(s))),
                            this.wNAF(i, s, r)
                          );
                        },
                      };
                    })(h, t.endo ? Math.ceil(d / 2) : d);
                  return {
                    CURVE: t,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: u,
                    weierstrassEquation: s,
                    isWithinCurveOrder: a,
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      s = r.toBytes(i.x);
                    return n
                      ? e6(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                      : e6(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      a = e.subarray(1);
                    if (t === i && (2 === n || 3 === n)) {
                      let e = e2(a);
                      if (!(tO < e && e < r.ORDER))
                        throw Error('Point is not on curve');
                      let t = l(e),
                        i = r.sqrt(t);
                      return (
                        ((1 & n) == 1) != ((i & tA) === tA) && (i = r.neg(i)),
                        { x: e, y: i }
                      );
                    }
                    if (t === s && 4 === n)
                      return {
                        x: r.fromBytes(a.subarray(0, r.BYTES)),
                        y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${t} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`,
                    );
                  },
                }),
                h = (e) => eQ(e8(e, t.nByteLength)),
                d = (e, t, r) => e2(e.slice(t, r));
              class c {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new c(
                    d((e = e5('compactSignature', e, 2 * r)), 0, r),
                    d(e, r, 2 * r),
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = tS.toSig(e5('DER', e));
                  return new c(t, r);
                }
                assertValidity() {
                  if (!f(this.r)) throw Error('r must be 0 < r < CURVE.n');
                  if (!f(this.s)) throw Error('s must be 0 < s < CURVE.n');
                }
                addRecoveryBit(e) {
                  return new c(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s, recovery: u } = this,
                    l = m(e5('msgHash', e));
                  if (null == u || ![0, 1, 2, 3].includes(u))
                    throw Error('recovery id invalid');
                  let f = 2 === u || 3 === u ? i + t.n : i;
                  if (f >= r.ORDER) throw Error('recovery id 2 or 3 invalid');
                  let d = (1 & u) == 0 ? '02' : '03',
                    c = o.fromHex(d + h(f)),
                    p = tp(f, n),
                    g = a(-l * p),
                    y = a(s * p),
                    b = o.BASE.multiplyAndAddUnsafe(c, g, y);
                  if (!b) throw Error('point at infinify');
                  return b.assertValidity(), b;
                }
                hasHighS() {
                  return this.s > n >> tA;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new c(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return e1(this.toDERHex());
                }
                toDERHex() {
                  return tS.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return e1(this.toCompactHex());
                }
                toCompactHex() {
                  return h(this.r) + h(this.s);
                }
              }
              function p(e) {
                let t = e instanceof Uint8Array,
                  r = 'string' == typeof e,
                  n = (t || r) && e.length;
                return t
                  ? n === i || n === s
                  : r
                    ? n === 2 * i || n === 2 * s
                    : e instanceof o;
              }
              let g =
                  t.bits2int ||
                  function (e) {
                    let r = e2(e),
                      n = 8 * e.length - t.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                m =
                  t.bits2int_modN ||
                  function (e) {
                    return a(g(e));
                  },
                y = e9(t.nBitLength);
              function b(e) {
                if ('bigint' != typeof e) throw Error('bigint expected');
                if (!(tO <= e && e < y))
                  throw Error(`bigint expected < 2^${t.nBitLength}`);
                return e8(e, t.nByteLength);
              }
              let v = { lowS: t.lowS, prehash: !1 },
                w = { lowS: t.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return o.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (p(e)) throw Error('first arg must be private key');
                    if (!p(t)) throw Error('second arg must be public key');
                    return o.fromHex(t).multiply(u(e)).toRawBytes(r);
                  },
                  sign: function (e, i, s = v) {
                    let { seed: l, k2sig: h } = (function (e, i, s = v) {
                      if (['recovered', 'canonical'].some((e) => e in s))
                        throw Error('sign() legacy options not supported');
                      let { hash: l, randomBytes: h } = t,
                        { lowS: d, prehash: p, extraEntropy: y } = s;
                      null == d && (d = !0),
                        (e = e5('msgHash', e)),
                        p && (e = e5('prehashed msgHash', l(e)));
                      let w = m(e),
                        _ = u(i),
                        x = [b(_), b(w)];
                      if (null != y) {
                        let e = !0 === y ? h(r.BYTES) : y;
                        x.push(e5('extraEntropy', e, r.BYTES));
                      }
                      return {
                        seed: e6(...x),
                        k2sig: function (e) {
                          let t = g(e);
                          if (!f(t)) return;
                          let r = tp(t, n),
                            i = o.BASE.multiply(t).toAffine(),
                            s = a(i.x);
                          if (s === tO) return;
                          let u = a(r * a(w + s * _));
                          if (u === tO) return;
                          let l = (i.x === s ? 0 : 2) | Number(i.y & tA),
                            h = u;
                          if (d && u > n >> tA)
                            (h = u > n >> tA ? a(-u) : u), (l ^= 1);
                          return new c(s, h, l);
                        },
                      };
                    })(e, i, s);
                    return tt(t.hash.outputLen, t.nByteLength, t.hmac)(l, h);
                  },
                  verify: function (e, r, i, s = w) {
                    let u, l;
                    if (
                      ((r = e5('msgHash', r)),
                      (i = e5('publicKey', i)),
                      'strict' in s)
                    )
                      throw Error('options.strict was renamed to lowS');
                    let { lowS: f, prehash: h } = s;
                    try {
                      if ('string' == typeof e || e instanceof Uint8Array)
                        try {
                          l = c.fromDER(e);
                        } catch (t) {
                          if (!(t instanceof tS.Err)) throw t;
                          l = c.fromCompact(e);
                        }
                      else if (
                        'object' == typeof e &&
                        'bigint' == typeof e.r &&
                        'bigint' == typeof e.s
                      ) {
                        let { r: t, s: r } = e;
                        l = new c(t, r);
                      } else throw Error('PARSE');
                      u = o.fromHex(i);
                    } catch (e) {
                      if ('PARSE' === e.message)
                        throw Error(
                          'signature must be Signature instance, Uint8Array or hex string',
                        );
                      return !1;
                    }
                    if (f && l.hasHighS()) return !1;
                    h && (r = t.hash(r));
                    let { r: d, s: p } = l,
                      g = m(r),
                      y = tp(p, n),
                      b = a(g * y),
                      v = a(d * y),
                      _ = o.BASE.multiplyAndAddUnsafe(u, b, v)?.toAffine();
                    return !!_ && a(_.x) === d;
                  },
                  ProjectivePoint: o,
                  Signature: c,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return u(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: u,
                    randomPrivateKey: () =>
                      e8(
                        (function (e, t, r = !1) {
                          let n = (e = e5('privateHash', e)).length,
                            i = ty(t).nByteLength + 8;
                          if (i < 24 || n < i || n > 1024)
                            throw Error(
                              `hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${n}`,
                            );
                          return td(r ? e3(e) : e2(e), t - ta) + ta;
                        })(t.randomBytes(r.BYTES + 8), n),
                        t.nByteLength,
                      ),
                    precompute: (e = 8, t = o.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) =>
                tU(
                  t,
                  e,
                  (function (...e) {
                    if (!e.every((e) => e instanceof Uint8Array))
                      throw Error('Uint8Array list expected');
                    if (1 === e.length) return e[0];
                    let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
                    for (let r = 0, n = 0; r < e.length; r++) {
                      let i = e[r];
                      t.set(i, n), (n += i.length);
                    }
                    return t;
                  })(...r),
                ),
              randomBytes: eR,
            });
          return Object.freeze({ ...r(t), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: tj,
            n: tC,
            Gx: BigInt(
              '55066263022277343669578718895168534326250603453777594175500187360389116729240',
            ),
            Gy: BigInt(
              '32670510020758816978083085130507043184471273380659243275938904335757337482424',
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
              ),
              splitScalar: (e) => {
                let t = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                  r = -tN * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                  n = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                  i = BigInt('0x100000000000000000000000000000000'),
                  s = tZ(t * e, tC),
                  a = tZ(-r * e, tC),
                  o = td(e - s * t - a * n, tC),
                  u = td(-s * r - a * t, tC),
                  l = o > i,
                  f = u > i;
                if ((l && (o = tC - o), f && (u = tC - u), o > i || u > i))
                  throw Error('splitScalar: Endomorphism failed, k=' + e);
                return { k1neg: l, k1: o, k2neg: f, k2: u };
              },
            },
          },
          eK,
        ),
        t$ = BigInt(0),
        tD = (e) => 'bigint' == typeof e && t$ < e && e < tT,
        tz = (e) => 'bigint' == typeof e && t$ < e && e < tC,
        tV = {},
        tq = (e) => e.toRawBytes(!0).slice(1),
        tF = (e) => e8(e, 32),
        tK = (e) => td(e, tT),
        tM = (e) => td(e, tC),
        tG = tH.ProjectivePoint,
        tW = (e, t, r) => tG.BASE.multiplyAndAddUnsafe(e, t, r);
      tH.utils.randomPrivateKey;
      let tY = (function (e, t) {
          let r = t.map((e) => Array.from(e).reverse());
          return (t, n) => {
            let [i, s, a, o] = r.map((r) =>
              r.reduce((r, n) => e.add(e.mul(r, t), n)),
            );
            return (
              (t = e.div(i, s)), (n = e.mul(n, e.div(a, o))), { x: t, y: n }
            );
          };
        })(
          tj,
          [
            [
              '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
              '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
              '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
              '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
            ],
            [
              '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
              '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
              '0x0000000000000000000000000000000000000000000000000000000000000001',
            ],
            [
              '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
              '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
              '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
              '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
            ],
            [
              '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
              '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
              '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
              '0x0000000000000000000000000000000000000000000000000000000000000001',
            ],
          ].map((e) => e.map((e) => BigInt(e))),
        ),
        tJ = (function (e, t) {
          if ((tm(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)))
            throw Error('mapToCurveSimpleSWU: invalid opts');
          let r = (function (e, t) {
            let r = e.ORDER,
              n = tO;
            for (let e = r - tA; e % tk === tO; e /= tk) n += tA;
            let i = n,
              s = (r - tA) / tk ** i,
              a = (s - tA) / tk,
              o = tk ** i - tA,
              u = tk ** (i - tA),
              l = e.pow(t, s),
              f = e.pow(t, (s + tA) / tk),
              h = (t, r) => {
                let n = l,
                  s = e.pow(r, o),
                  h = e.sqr(s);
                h = e.mul(h, r);
                let d = e.mul(t, h);
                (d = e.pow(d, a)),
                  (d = e.mul(d, s)),
                  (s = e.mul(d, r)),
                  (h = e.mul(d, t));
                let c = e.mul(h, s);
                d = e.pow(c, u);
                let p = e.eql(d, e.ONE);
                (s = e.mul(h, f)),
                  (d = e.mul(c, n)),
                  (h = e.cmov(s, h, p)),
                  (c = e.cmov(d, c, p));
                for (let t = i; t > 1; t--) {
                  let r = tk ** (t - tk),
                    i = e.pow(c, r),
                    a = e.eql(i, e.ONE);
                  (s = e.mul(h, n)),
                    (n = e.mul(n, n)),
                    (i = e.mul(c, n)),
                    (h = e.cmov(s, h, a)),
                    (c = e.cmov(i, c, a));
                }
                return { isValid: p, value: h };
              };
            if (e.ORDER % tP === tI) {
              let r = (e.ORDER - tI) / tP,
                n = e.sqrt(e.neg(t));
              h = (t, i) => {
                let s = e.sqr(i),
                  a = e.mul(t, i);
                s = e.mul(s, a);
                let o = e.pow(s, r);
                o = e.mul(o, a);
                let u = e.mul(o, n),
                  l = e.mul(e.sqr(o), i),
                  f = e.eql(l, t),
                  h = e.cmov(u, o, f);
                return { isValid: f, value: h };
              };
            }
            return h;
          })(e, t.Z);
          if (!e.isOdd) throw Error('Fp.isOdd is not implemented!');
          return (n) => {
            let i, s, a, o, u, l, f, h;
            (i = e.sqr(n)),
              (i = e.mul(i, t.Z)),
              (s = e.sqr(i)),
              (s = e.add(s, i)),
              (a = e.add(s, e.ONE)),
              (a = e.mul(a, t.B)),
              (o = e.cmov(t.Z, e.neg(s), !e.eql(s, e.ZERO))),
              (o = e.mul(o, t.A)),
              (s = e.sqr(a)),
              (l = e.sqr(o)),
              (u = e.mul(l, t.A)),
              (s = e.add(s, u)),
              (s = e.mul(s, a)),
              (l = e.mul(l, o)),
              (u = e.mul(l, t.B)),
              (s = e.add(s, u)),
              (f = e.mul(i, a));
            let { isValid: d, value: c } = r(s, l);
            (h = e.mul(i, n)),
              (h = e.mul(h, c)),
              (f = e.cmov(f, a, d)),
              (h = e.cmov(h, c, d));
            let p = e.isOdd(n) === e.isOdd(h);
            return (h = e.cmov(e.neg(h), h, p)), { x: (f = e.div(f, o)), y: h };
          };
        })(tj, {
          A: BigInt(
            '0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533',
          ),
          B: BigInt('1771'),
          Z: tj.create(BigInt('-11')),
        });
      !(function (e, t, r) {
        if ('function' != typeof t) throw Error('mapToCurve() must be defined');
      })(
        tH.ProjectivePoint,
        (e) => {
          let { x: t, y: r } = tJ(tj.create(e[0]));
          return tY(t, r);
        },
        tj.ORDER,
      );
      var tQ = function (e, t = !0) {
          if (e.destroyed) throw Error('Hash instance has been destroyed');
          if (t && e.finished)
            throw Error('Hash#digest() has already been called');
        },
        tX = function (e, t) {
          !(function (e, ...t) {
            if (!(e instanceof Uint8Array))
              throw TypeError('Expected Uint8Array');
            if (t.length > 0 && !t.includes(e.length))
              throw TypeError(
                `Expected Uint8Array of length ${t}, not of length=${e.length}`,
              );
          })(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              `digestInto() expects output buffer of length at least ${r}`,
            );
        };
      let t0 = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        t1 = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function t2(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
              return new TextEncoder().encode(e);
            })(e)),
          !(e instanceof Uint8Array))
        )
          throw TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      let t3 = class {
        clone() {
          return this._cloneInto();
        }
      };
      function t8(e) {
        let t = (t) => e().update(t2(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      let t4 = class extends t3 {
          constructor(e, t, r, n) {
            super(),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = r),
              (this.isLE = n),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(e)),
              (this.view = t0(this.buffer));
          }
          update(e) {
            tQ(this);
            let { view: t, buffer: r, blockLen: n } = this,
              i = (e = t2(e)).length;
            for (let s = 0; s < i; ) {
              let a = Math.min(n - this.pos, i - s);
              if (a === n) {
                let t = t0(e);
                for (; n <= i - s; s += n) this.process(t, s);
                continue;
              }
              r.set(e.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === n && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            tQ(this), tX(e, this), (this.finished = !0);
            let { buffer: t, view: r, blockLen: n, isLE: i } = this,
              { pos: s } = this;
            (t[s++] = 128),
              this.buffer.subarray(s).fill(0),
              this.padOffset > n - s && (this.process(r, 0), (s = 0));
            for (let e = s; e < n; e++) t[e] = 0;
            !(function (e, t, r, n) {
              if ('function' == typeof e.setBigUint64)
                return e.setBigUint64(t, r, n);
              let i = BigInt(32),
                s = BigInt(4294967295),
                a = Number((r >> i) & s),
                o = Number(r & s),
                u = n ? 4 : 0,
                l = n ? 0 : 4;
              e.setUint32(t + u, a, n), e.setUint32(t + l, o, n);
            })(r, n - 8, BigInt(8 * this.length), i),
              this.process(r, 0);
            let a = t0(e),
              o = this.outputLen;
            if (o % 4)
              throw Error('_sha2: outputLen should be aligned to 32bit');
            let u = o / 4,
              l = this.get();
            if (u > l.length) throw Error('_sha2: outputLen bigger than state');
            for (let e = 0; e < u; e++) a.setUint32(4 * e, l[e], i);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: r,
              length: n,
              finished: i,
              destroyed: s,
              pos: a,
            } = this;
            return (
              (e.length = n),
              (e.pos = a),
              (e.finished = i),
              (e.destroyed = s),
              n % t && e.buffer.set(r),
              e
            );
          }
        },
        t5 = (e, t, r) => (e & t) ^ (~e & r),
        t6 = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        t9 = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        t7 = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        re = new Uint32Array(64),
        rt = class extends t4 {
          constructor() {
            super(64, 32, 8, !1),
              (this.A = 0 | t7[0]),
              (this.B = 0 | t7[1]),
              (this.C = 0 | t7[2]),
              (this.D = 0 | t7[3]),
              (this.E = 0 | t7[4]),
              (this.F = 0 | t7[5]),
              (this.G = 0 | t7[6]),
              (this.H = 0 | t7[7]);
          }
          get() {
            let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
            return [e, t, r, n, i, s, a, o];
          }
          set(e, t, r, n, i, s, a, o) {
            (this.A = 0 | e),
              (this.B = 0 | t),
              (this.C = 0 | r),
              (this.D = 0 | n),
              (this.E = 0 | i),
              (this.F = 0 | s),
              (this.G = 0 | a),
              (this.H = 0 | o);
          }
          process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) re[r] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
              let t = re[e - 15],
                r = re[e - 2],
                n = t1(t, 7) ^ t1(t, 18) ^ (t >>> 3),
                i = t1(r, 17) ^ t1(r, 19) ^ (r >>> 10);
              re[e] = (i + re[e - 7] + n + re[e - 16]) | 0;
            }
            let { A: r, B: n, C: i, D: s, E: a, F: o, G: u, H: l } = this;
            for (let e = 0; e < 64; e++) {
              let t =
                  (l +
                    (t1(a, 6) ^ t1(a, 11) ^ t1(a, 25)) +
                    t5(a, o, u) +
                    t9[e] +
                    re[e]) |
                  0,
                f = ((t1(r, 2) ^ t1(r, 13) ^ t1(r, 22)) + t6(r, n, i)) | 0;
              (l = u),
                (u = o),
                (o = a),
                (a = (s + t) | 0),
                (s = i),
                (i = n),
                (n = r),
                (r = (t + f) | 0);
            }
            (r = (r + this.A) | 0),
              (n = (n + this.B) | 0),
              (i = (i + this.C) | 0),
              (s = (s + this.D) | 0),
              (a = (a + this.E) | 0),
              (o = (o + this.F) | 0),
              (u = (u + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(r, n, i, s, a, o, u, l);
          }
          roundClean() {
            re.fill(0);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
          }
        },
        rr = class extends rt {
          constructor() {
            super(),
              (this.A = -1056596264),
              (this.B = 914150663),
              (this.C = 812702999),
              (this.D = -150054599),
              (this.E = -4191439),
              (this.F = 1750603025),
              (this.G = 1694076839),
              (this.H = -1090891868),
              (this.outputLen = 28);
          }
        },
        rn = t8(() => new rt());
      t8(() => new rr());
      let { getRandomValues: ri } =
        crypto ?? globalThis.crypto ?? window.crypto;
      function rs(e) {
        let t,
          r = 0,
          n = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
        for (t = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      let ra = new TextEncoder(),
        ro = [
          {
            name: 'base58',
            charset:
              '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          },
        ];
      function ru(e) {
        for (let t of ro) if (t.name === e) return t.charset;
        throw TypeError('Charset does not exist: ' + e);
      }
      let rl = function (e, t, r = !1) {
          'string' == typeof e && (e = ra.encode(e));
          let n = ru(t),
            i = n.length,
            s = [],
            a = '',
            o,
            u = 0,
            l,
            f;
          for (o = 0; o < e.length; o++)
            for (
              u = 0, l = e[o], a += l > 0 || (a.length ^ o) > 0 ? '' : '1';
              u in s || l > 0;

            )
              (l = ((f = (f = s[u]) > 0 ? 256 * f + l : l) / i) | 0),
                (s[u] = f % i),
                u++;
          for (; u-- > 0; ) a += n[s[u]];
          return r && a.length % 4 > 0 ? a + '='.repeat(4 - (a.length % 4)) : a;
        },
        rf = function (e, t) {
          let r = ru(t),
            n = r.length,
            i = [],
            s = [];
          e = e.replace('=', '');
          let a,
            o = 0,
            u,
            l;
          for (a = 0; a < e.length; a++) {
            if (((o = 0), (u = r.indexOf(e[a])) < 0))
              throw Error(`Character range out of bounds: ${u}`);
            for (u > 0 || (s.length ^ a) > 0 || s.push(0); o in i || u > 0; )
              (u = (l = (l = i[o]) > 0 ? l * n + u : u) >> 8),
                (i[o] = l % 256),
                o++;
          }
          for (; o-- > 0; ) s.push(i[o]);
          return new Uint8Array(s);
        },
        rh = (e) =>
          rl(
            (function (e) {
              let t = rn(rn(e));
              return rs([e, t.slice(0, 4)]);
            })(e),
            'base58',
          ),
        rd = (e) =>
          (function (e) {
            let t = e.slice(0, -4),
              r = e.slice(-4);
            if (rn(rn(t)).slice(0, 4).toString() !== r.toString())
              throw Error('Invalid checksum!');
            return t;
          })(rf(e, 'base58')),
        rc = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
        rp = [996825010, 642813549, 513874426, 1027748829, 705979059],
        rg = [
          { version: 0, name: 'bech32', const: 1 },
          { version: 1, name: 'bech32m', const: 734539939 },
        ];
      function rm(e) {
        let t = 1;
        for (let r = 0; r < e.length; ++r) {
          let n = t >> 25;
          t = ((33554431 & t) << 5) ^ e[r];
          for (let e = 0; e < 5; ++e) ((n >> e) & 1) != 0 && (t ^= rp[e]);
        }
        return t;
      }
      function ry(e) {
        let t;
        let r = [];
        for (t = 0; t < e.length; ++t) r.push(e.charCodeAt(t) >> 5);
        for (r.push(0), t = 0; t < e.length; ++t) r.push(31 & e.charCodeAt(t));
        return r;
      }
      function rb(e, t, r, n = !0) {
        let i = [],
          s = 0,
          a = 0,
          o = (1 << r) - 1,
          u = (1 << (t + r - 1)) - 1;
        for (let n of e) {
          if (n < 0 || n >> t > 0)
            throw Error(
              'Failed to perform base conversion. Invalid value: ' + String(n),
            );
          for (s = ((s << t) | n) & u, a += t; a >= r; )
            (a -= r), i.push((s >> a) & o);
        }
        if (n) a > 0 && i.push((s << (r - a)) & o);
        else if (a >= t || ((s << (r - a)) & o) > 0)
          throw Error('Failed to perform base conversion. Invalid Size!');
        return i;
      }
      function rv(e) {
        let t = (e = e.toLowerCase()).split('1', 1)[0],
          [r, n] = (function (e) {
            if (
              !(function (e) {
                let t, r;
                let n = !1,
                  i = !1;
                for (t = 0; t < e.length; ++t) {
                  if ((r = e.charCodeAt(t)) < 33 || r > 126) return !1;
                  r >= 97 && r <= 122 && (n = !0),
                    r >= 65 && r <= 90 && (i = !0);
                }
                return !n || !i;
              })(e)
            )
              throw Error('Encoded string goes out of bounds!');
            if (
              !(function (e) {
                let t = e.lastIndexOf('1');
                return !(t < 1 || t + 7 > e.length || e.length > 90);
              })((e = e.toLowerCase()))
            )
              throw Error('Encoded string has invalid separator!');
            let t = [],
              r = e.lastIndexOf('1'),
              n = e.substring(0, r);
            for (let n = r + 1; n < e.length; ++n) {
              let r = rc.indexOf(e.charAt(n));
              if (-1 === r)
                throw Error('Character idx out of bounds: ' + String(n));
              t.push(r);
            }
            let i = rg.find((e) => e.version === t[0]) ?? rg[0];
            if (rm(ry(n).concat(t)) !== i.const)
              throw Error('Checksum verification failed!');
            return [n, t.slice(0, t.length - 6)];
          })(e),
          i = rb(n.slice(1), 5, 8, !1),
          s = i.length;
        switch (!0) {
          case t !== r:
            throw Error('Returned hrp string is invalid.');
          case null === i || s < 2 || s > 40:
            throw Error('Decoded string is invalid or out of spec.');
          case n[0] > 16:
            throw Error('Returned version bit is out of range.');
          default:
            return Uint8Array.from(i);
        }
      }
      let rw = function (e, t = 'bc', r = 0) {
          let n = (function (e, t, r) {
            let n = t.concat(
                (function (e, t, r) {
                  let n =
                      rm(ry(e).concat(t).concat([0, 0, 0, 0, 0, 0])) ^ r.const,
                    i = [];
                  for (let e = 0; e < 6; ++e) i.push((n >> (5 * (5 - e))) & 31);
                  return i;
                })(e, t, r),
              ),
              i = e + '1';
            for (let e = 0; e < n.length; ++e) i += rc.charAt(n[e]);
            return i;
          })(
            t,
            [r, ...rb([...e], 8, 5)],
            rg.find((e) => e.version === r) ?? rg[0],
          );
          return rv(n), n;
        },
        r_ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        rx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
        rE = new TextEncoder();
      function rS(e, t = !1, r = !0) {
        'string' == typeof e && (e = rE.encode(e));
        let n = t ? rx : r_,
          i = '',
          s = 0,
          a = 0;
        for (let t = 0; t < e.length; t++)
          for (a = (a << 8) | e[t], s += 8; s >= 6; )
            (s -= 6), (i += n[(a >> s) & 63]);
        if (s > 0)
          for (a <<= 6 - s, i += n[63 & a]; s < 6; )
            (i += r ? '=' : ''), (s += 2);
        return i;
      }
      function rO(e, t = !1) {
        let r =
            t || e.includes('-') || e.includes('_')
              ? rx.split('')
              : r_.split(''),
          n = (e = e.replace(/=+$/, '')).split(''),
          i = 0,
          s = 0,
          a = [];
        for (let e = 0; e < n.length; e++) {
          let t = n[e],
            o = r.indexOf(t);
          if (-1 === o) throw Error('Invalid character: ' + t);
          (i += 6),
            (s <<= 6),
            (s |= o),
            i >= 8 && ((i -= 8), a.push((s >>> i) & 255));
        }
        return new Uint8Array(a);
      }
      let rA = (e) => rS(e, !0, !1),
        rk = (e) => rO(e, !0),
        rI = BigInt(0),
        rP = BigInt(255),
        rB = BigInt(256),
        rU = new TextEncoder(),
        rT = new TextDecoder();
      function rC(e) {
        return rU.encode(e);
      }
      function rN(e) {
        return rT.decode(e);
      }
      class rL extends Uint8Array {
        static {
          this.num = rZ;
        }
        static {
          this.big = rj;
        }
        static {
          this.bin = rR;
        }
        static {
          this.raw = rH;
        }
        static {
          this.str = r$;
        }
        static {
          this.hex = rD;
        }
        static {
          this.bytes = rz;
        }
        static {
          this.json = rV;
        }
        static {
          this.base64 = rq;
        }
        static {
          this.b64url = rF;
        }
        static {
          this.bech32 = rK;
        }
        static {
          this.b58chk = rM;
        }
        static {
          this.encode = rC;
        }
        static {
          this.decode = rN;
        }
        static random(e = 32) {
          return new rL(
            (function (e = 32) {
              if ('function' == typeof ri)
                return crypto.getRandomValues(new Uint8Array(e));
              throw Error('Crypto module missing getRandomValues!');
            })(e),
            e,
          );
        }
        constructor(e, t, r) {
          super(
            (function (e, t, r) {
              if (e instanceof ArrayBuffer) return new Uint8Array(e);
              if (e instanceof Uint8Array)
                return (function (e, t, r = 'be') {
                  void 0 === t && (t = e.length),
                    (function (e, t) {
                      if (e.length > t)
                        throw TypeError(
                          `Data is larger than array size: ${e.length} > ${t}`,
                        );
                    })(e, t);
                  let n = new Uint8Array(t).fill(0),
                    i = 'be' === r ? 0 : t - e.length;
                  return n.set(e, i), n;
                })(e, t, r);
              if ('string' == typeof e)
                return (function (e, t, r = 'le') {
                  t = (function (e, t) {
                    !(function (e) {
                      if (null !== e.match(/[^a-fA-f0-9]/))
                        throw TypeError(
                          'Invalid characters in hex string: ' + e,
                        );
                      if (e.length % 2 != 0)
                        throw Error(
                          `Length of hex string is invalid: ${e.length}`,
                        );
                    })(e);
                    let r = e.length / 2;
                    if ((void 0 === t && (t = r), r > t))
                      throw TypeError(
                        `Hex string is larger than array size: ${r} > ${t}`,
                      );
                    return t;
                  })(e, t);
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (let t = 0; t < e.length; t += 2) {
                    let r = parseInt(e.substring(t, t + 2), 16);
                    n ? s.setUint8(a++, r) : s.setUint8(a--, r);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('bigint' == typeof e)
                return (function (e, t, r = 'be') {
                  void 0 === t &&
                    (t = (function (e) {
                      if (e <= 255n) return 1;
                      if (e <= 65535n) return 2;
                      if (e <= 4294967295n) return 4;
                      if (e <= 0xffffffffffffffffn) return 8;
                      if (e <= 0xffffffffffffffffffffffffffffffffn) return 16;
                      if (
                        e <=
                        0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn
                      )
                        return 32;
                      throw TypeError(
                        'Must specify a fixed buffer size for bigints greater than 32 bytes.',
                      );
                    })(e));
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (; e > rI; ) {
                    let t = e & rP,
                      r = Number(t);
                    n ? s.setUint8(a++, r) : s.setUint8(a--, r),
                      (e = (e - t) / rB);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('number' == typeof e)
                return (function (e, t, r = 'be') {
                  void 0 === t &&
                    (t = (function (e) {
                      if (e <= 255) return 1;
                      if (e <= 65535) return 2;
                      if (e <= 4294967295) return 4;
                      throw TypeError(
                        'Numbers larger than 4 bytes must specify a fixed size!',
                      );
                    })(e));
                  let n = 'le' === r,
                    i = new ArrayBuffer(t),
                    s = new DataView(i),
                    a = n ? 0 : t - 1;
                  for (; e > 0; ) {
                    let t = 255 & e;
                    n ? s.setUint8(a++, e) : s.setUint8(a--, e),
                      (e = (e - t) / 256);
                  }
                  return new Uint8Array(i);
                })(e, t, r);
              if ('boolean' == typeof e) return Uint8Array.of(e ? 1 : 0);
              throw TypeError('Unsupported format:' + String(typeof e));
            })(e, t, r),
          );
        }
        get arr() {
          return [...this];
        }
        get num() {
          return this.toNum();
        }
        get big() {
          return this.toBig();
        }
        get str() {
          return this.toStr();
        }
        get hex() {
          return this.toHex();
        }
        get raw() {
          return new Uint8Array(this);
        }
        get bin() {
          return this.toBin();
        }
        get b58chk() {
          return this.tob58chk();
        }
        get base64() {
          return this.toBase64();
        }
        get b64url() {
          return this.toB64url();
        }
        get digest() {
          return this.toHash();
        }
        get id() {
          return this.toHash().hex;
        }
        get stream() {
          return new rG(this);
        }
        toNum(e = 'be') {
          return (function (e) {
            let t = 0;
            for (let r = e.length - 1; r >= 0; r--)
              !(function (e) {
                if (e > Number.MAX_SAFE_INTEGER)
                  throw TypeError('Number exceeds safe bounds!');
              })((t = 256 * t + e[r]));
            return t;
          })('be' === e ? this.reverse() : this);
        }
        toBin() {
          return (function (e) {
            let t = Array(8 * e.length),
              r = 0;
            for (let n of e) {
              if (n > 255)
                throw Error(
                  `Invalid byte value: ${n}. Byte values must be between 0 and 255.`,
                );
              for (let e = 7; e >= 0; e--, r++) t[r] = (n >> e) & 1;
            }
            return t.join('');
          })(this);
        }
        toBig(e = 'be') {
          return (function (e) {
            let t = BigInt(0);
            for (let r = e.length - 1; r >= 0; r--) t = t * rB + BigInt(e[r]);
            return BigInt(t);
          })('be' === e ? this.reverse() : this);
        }
        toHash() {
          return new rL(rn(this));
        }
        toJson() {
          return JSON.parse(rN(this));
        }
        toBech32(e, t = 0) {
          return rw(this, e, t);
        }
        toStr() {
          return rN(this);
        }
        toHex() {
          return (function (e) {
            let t = '';
            for (let r = 0; r < e.length; r++)
              t += e[r].toString(16).padStart(2, '0');
            return t;
          })(this);
        }
        toBytes() {
          return new Uint8Array(this);
        }
        tob58chk() {
          return rh(this);
        }
        toBase64() {
          return rS(this);
        }
        toB64url() {
          return rA(this);
        }
        prepend(e) {
          return rL.join([rL.bytes(e), this]);
        }
        append(e) {
          return rL.join([this, rL.bytes(e)]);
        }
        slice(e, t) {
          return new rL(new Uint8Array(this).slice(e, t));
        }
        subarray(e, t) {
          return new rL(new Uint8Array(this).subarray(e, t));
        }
        reverse() {
          return new rL(new Uint8Array(this).reverse());
        }
        write(e, t) {
          let r = rL.bytes(e);
          this.set(r, t);
        }
        prefixSize(e) {
          let t = rL.varInt(this.length, e);
          return rL.join([t, this]);
        }
        static from(e) {
          return new rL(Uint8Array.from(e));
        }
        static of(...e) {
          return new rL(Uint8Array.of(...e));
        }
        static join(e) {
          let t = rs(e.map((e) => rL.bytes(e)));
          return new rL(t);
        }
        static varInt(e, t) {
          if (e < 253) return rL.num(e, 1);
          if (e < 65536) return rL.of(253, ...rL.num(e, 2, t));
          if (e < 4294967296) return rL.of(254, ...rL.num(e, 4, t));
          if (0x10000000000000000n > BigInt(e))
            return rL.of(255, ...rL.num(e, 8, t));
          throw Error(`Value is too large: ${e}`);
        }
      }
      function rZ(e, t, r) {
        return new rL(e, t, r);
      }
      function rR(e, t, r) {
        return new rL(
          (function (e) {
            let t = e.split('').map(Number);
            if (t.length % 8 != 0)
              throw Error(`Binary array is invalid length: ${e.length}`);
            let r = new Uint8Array(t.length / 8);
            for (let e = 0, n = 0; e < t.length; e += 8, n++) {
              let i = 0;
              for (let r = 0; r < 8; r++) i |= t[e + r] << (7 - r);
              r[n] = i;
            }
            return r;
          })(e),
          t,
          r,
        );
      }
      function rj(e, t, r) {
        return new rL(e, t, r);
      }
      function rH(e, t, r) {
        return new rL(e, t, r);
      }
      function r$(e, t, r) {
        return new rL(rC(e), t, r);
      }
      function rD(e, t, r) {
        return new rL(e, t, r);
      }
      function rz(e, t, r) {
        return new rL(e, t, r);
      }
      function rV(e) {
        return new rL(
          rC(JSON.stringify(e, (e, t) => ('bigint' == typeof t ? `${t}n` : t))),
        );
      }
      function rq(e) {
        return new rL(rO(e));
      }
      function rF(e) {
        return new rL(rk(e));
      }
      function rK(e) {
        return new rL(rv(e));
      }
      function rM(e) {
        return new rL(rd(e));
      }
      class rG {
        constructor(e) {
          (this.data = rL.bytes(e)), (this.size = this.data.length);
        }
        peek(e) {
          if (e > this.size)
            throw Error(`Size greater than stream: ${e} > ${this.size}`);
          return new rL(this.data.slice(0, e));
        }
        read(e) {
          e = e ?? this.readSize();
          let t = this.peek(e);
          return (
            (this.data = this.data.slice(e)), (this.size = this.data.length), t
          );
        }
        readSize(e) {
          let t = this.read(1).num;
          switch (!0) {
            case t >= 0 && t < 253:
              return t;
            case 253 === t:
              return this.read(2).toNum(e);
            case 254 === t:
              return this.read(4).toNum(e);
            case 255 === t:
              return this.read(8).toNum(e);
            default:
              throw Error(`Varint is out of range: ${t}`);
          }
        }
      }
      let rW = tH.CURVE,
        rY = rW.n,
        rJ = rW.p,
        rQ = { x: rW.Gx, y: rW.Gy },
        rX = BigInt(0),
        r0 = BigInt(1),
        r1 = {
          N: rY,
          P: rJ,
          G: rQ,
          _0n: rX,
          _1n: r0,
          _2n: BigInt(2),
          _3n: BigInt(3),
          _4n: BigInt(4),
        },
        r2 = tb(rY, 32, !0),
        r3 = (e) => td(e, rY);
      function r8(e, t = !1) {
        if (!t) return !1;
        throw Error(e);
      }
      function r4(e) {
        return rL.random(e);
      }
      var r5 = Object.freeze({
        __proto__: null,
        fail: r8,
        mod_bytes: function (e) {
          let t = rL.bytes(e).big;
          return rL.big(r3(t), 32);
        },
        random: r4,
      });
      let { N: r6, P: r9, _0n: r7 } = r1,
        ne = tH.ProjectivePoint;
      class nt extends Uint8Array {
        static {
          this.N = tH.CURVE.n;
        }
        static mod(e) {
          return new nt(e);
        }
        static is_valid(e, t) {
          var r;
          return (
            ('bigint' == typeof (r = rL.bytes(e, 32).big) &&
              r7 < r &&
              r < r6) ||
              r8('x value is not in the field!', t),
            !0
          );
        }
        constructor(e) {
          let t = (function (e) {
            if (e instanceof nt) return e.big;
            if (e instanceof nr) return e.x.big;
            if (e instanceof Uint8Array) return rL.raw(e).big;
            if ('string' == typeof e) return rL.hex(e).big;
            if ('number' == typeof e) return rL.num(e).big;
            if ('bigint' == typeof e) return BigInt(e);
            throw TypeError('Invalid input type:' + typeof e);
          })(e);
          (t = r3(t)), nt.is_valid(t, !0), super(rL.big(t, 32), 32);
        }
        get buff() {
          return new rL(this);
        }
        get raw() {
          return this.buff.raw;
        }
        get big() {
          return this.buff.big;
        }
        get hex() {
          return this.buff.hex;
        }
        get point() {
          return this.generate();
        }
        get hasOddY() {
          return this.point.hasOddY;
        }
        get negated() {
          return this.hasOddY ? this.negate() : this;
        }
        gt(e) {
          return new nt(e).big > this.big;
        }
        lt(e) {
          return new nt(e).big < this.big;
        }
        eq(e) {
          return new nt(e).big === this.big;
        }
        ne(e) {
          return new nt(e).big !== this.big;
        }
        add(e) {
          let t = nt.mod(e);
          return new nt(r2.add(this.big, t.big));
        }
        sub(e) {
          let t = nt.mod(e);
          return new nt(r2.sub(this.big, t.big));
        }
        mul(e) {
          let t = nt.mod(e);
          return new nt(r2.mul(this.big, t.big));
        }
        pow(e) {
          let t = nt.mod(e);
          return new nt(r2.pow(this.big, t.big));
        }
        div(e) {
          let t = nt.mod(e);
          return new nt(r2.div(this.big, t.big));
        }
        negate() {
          return new nt(nt.N - this.big);
        }
        generate() {
          let e = tH.ProjectivePoint.BASE.multiply(this.big);
          return nr.import(e);
        }
      }
      class nr {
        static {
          this.P = r1.P;
        }
        static {
          this.G = r1.G;
        }
        static {
          this.base = tH.ProjectivePoint.BASE;
        }
        static from_x(e) {
          let t = (function (e) {
            if (e instanceof nt) return e.point.buff;
            if (e instanceof nr) return e.buff;
            if (e instanceof Uint8Array || 'string' == typeof e)
              return rL.bytes(e);
            if ('number' == typeof e || 'bigint' == typeof e)
              return rL.bytes(e, 32);
            throw TypeError(`Unknown type: ${typeof e}`);
          })(e);
          32 === t.length && (t = t.prepend(2)),
            (function (e, t, r) {
              let n = rL.bytes(e);
              33 === n.length ||
                r8(`Invalid byte size: ${n.hex} !== 33`, void 0);
            })(t, 0);
          let r = ne.fromHex(t.hex);
          return r.assertValidity(), new nr(r.x, r.y);
        }
        static generate(e) {
          let t = nt.mod(e),
            r = nr.base.multiply(t.big);
          return nr.import(r);
        }
        static import(e) {
          let t =
            e instanceof nr ? { x: e.x.big, y: e.y.big } : { x: e.x, y: e.y };
          return new nr(t.x, t.y);
        }
        constructor(e, t) {
          (this._p = new ne(e, t, 1n)), this.p.assertValidity();
        }
        get p() {
          return this._p;
        }
        get x() {
          return rL.big(this.p.x, 32);
        }
        get y() {
          return rL.big(this.p.y, 32);
        }
        get buff() {
          return rL.raw(this.p.toRawBytes(!0));
        }
        get raw() {
          return this.buff.raw;
        }
        get hex() {
          return this.buff.hex;
        }
        get hasEvenY() {
          return this.p.hasEvenY();
        }
        get hasOddY() {
          return !this.p.hasEvenY();
        }
        eq(e) {
          let t = e instanceof nr ? e : nr.from_x(e);
          return this.x.big === t.x.big && this.y.big === t.y.big;
        }
        add(e) {
          return e instanceof nr
            ? nr.import(this.p.add(e.p))
            : nr.import(this.p.add(nr.generate(e).p));
        }
        sub(e) {
          return e instanceof nr
            ? nr.import(this.p.subtract(e.p))
            : nr.import(this.p.subtract(nr.generate(e).p));
        }
        mul(e) {
          return e instanceof nr
            ? nr.import(this.p.multiply(e.x.big))
            : nr.import(this.p.multiply(nt.mod(e).big));
        }
        negate() {
          return nr.import(this.p.negate());
        }
      }
      function nn(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function ni(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error('Expected Uint8Array');
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`,
          );
      }
      var ns = function (e) {
          if ('function' != typeof e || 'function' != typeof e.create)
            throw Error('Hash should be wrapped by utils.wrapConstructor');
          nn(e.outputLen), nn(e.blockLen);
        },
        na = function (e, t = !0) {
          if (e.destroyed) throw Error('Hash instance has been destroyed');
          if (t && e.finished)
            throw Error('Hash#digest() has already been called');
        },
        no = function (e, t) {
          ni(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              `digestInto() expects output buffer of length at least ${r}`,
            );
        };
      let nu = (e) => e instanceof Uint8Array,
        nl = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        nf = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function nh(e) {
        if (
          ('string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !nu(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      class nd {
        clone() {
          return this._cloneInto();
        }
      }
      function nc(e) {
        let t = (t) => e().update(nh(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      class np extends nd {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = nl(this.buffer));
        }
        update(e) {
          na(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = nh(e)).length;
          for (let s = 0; s < i; ) {
            let a = Math.min(n - this.pos, i - s);
            if (a === n) {
              let t = nl(e);
              for (; n <= i - s; s += n) this.process(t, s);
              continue;
            }
            r.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          na(this), no(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > n - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ('function' == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(4294967295),
              a = Number((r >> i) & s),
              o = Number(r & s),
              u = n ? 4 : 0,
              l = n ? 0 : 4;
            e.setUint32(t + u, a, n), e.setUint32(t + l, o, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let a = nl(e),
            o = this.outputLen;
          if (o % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let u = o / 4,
            l = this.get();
          if (u > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < u; e++) a.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let ng = (e, t, r) => (e & t) ^ (~e & r),
        nm = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        ny = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        nb = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        nv = new Uint32Array(64);
      class nw extends np {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | nb[0]),
            (this.B = 0 | nb[1]),
            (this.C = 0 | nb[2]),
            (this.D = 0 | nb[3]),
            (this.E = 0 | nb[4]),
            (this.F = 0 | nb[5]),
            (this.G = 0 | nb[6]),
            (this.H = 0 | nb[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) nv[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = nv[e - 15],
              r = nv[e - 2],
              n = nf(t, 7) ^ nf(t, 18) ^ (t >>> 3),
              i = nf(r, 17) ^ nf(r, 19) ^ (r >>> 10);
            nv[e] = (i + nv[e - 7] + n + nv[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: s, E: a, F: o, G: u, H: l } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (l +
                  (nf(a, 6) ^ nf(a, 11) ^ nf(a, 25)) +
                  ng(a, o, u) +
                  ny[e] +
                  nv[e]) |
                0,
              f = ((nf(r, 2) ^ nf(r, 13) ^ nf(r, 22)) + nm(r, n, i)) | 0;
            (l = u),
              (u = o),
              (o = a),
              (a = (s + t) | 0),
              (s = i),
              (i = n),
              (n = r),
              (r = (t + f) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (u = (u + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, n, i, s, a, o, u, l);
        }
        roundClean() {
          nv.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      class n_ extends nw {
        constructor() {
          super(),
            (this.A = -1056596264),
            (this.B = 914150663),
            (this.C = 812702999),
            (this.D = -150054599),
            (this.E = -4191439),
            (this.F = 1750603025),
            (this.G = 1694076839),
            (this.H = -1090891868),
            (this.outputLen = 28);
        }
      }
      let nx = nc(() => new nw());
      nc(() => new n_());
      let nE = BigInt(4294967296 - 1),
        nS = BigInt(32);
      var nO = {
        split: function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: s, l: a } = (function (e, t = !1) {
              return t
                ? { h: Number(e & nE), l: Number((e >> nS) & nE) }
                : { h: 0 | Number((e >> nS) & nE), l: 0 | Number(e & nE) };
            })(e[i], t);
            [r[i], n[i]] = [s, a];
          }
          return [r, n];
        },
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        add: function (e, t, r, n) {
          let i = (t >>> 0) + (n >>> 0);
          return { h: (e + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, n) => (t + r + n + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, n, i, s) =>
          (t + r + n + i + s + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, n, i) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      };
      let [nA, nk] = nO.split(
          [
            '0x428a2f98d728ae22',
            '0x7137449123ef65cd',
            '0xb5c0fbcfec4d3b2f',
            '0xe9b5dba58189dbbc',
            '0x3956c25bf348b538',
            '0x59f111f1b605d019',
            '0x923f82a4af194f9b',
            '0xab1c5ed5da6d8118',
            '0xd807aa98a3030242',
            '0x12835b0145706fbe',
            '0x243185be4ee4b28c',
            '0x550c7dc3d5ffb4e2',
            '0x72be5d74f27b896f',
            '0x80deb1fe3b1696b1',
            '0x9bdc06a725c71235',
            '0xc19bf174cf692694',
            '0xe49b69c19ef14ad2',
            '0xefbe4786384f25e3',
            '0x0fc19dc68b8cd5b5',
            '0x240ca1cc77ac9c65',
            '0x2de92c6f592b0275',
            '0x4a7484aa6ea6e483',
            '0x5cb0a9dcbd41fbd4',
            '0x76f988da831153b5',
            '0x983e5152ee66dfab',
            '0xa831c66d2db43210',
            '0xb00327c898fb213f',
            '0xbf597fc7beef0ee4',
            '0xc6e00bf33da88fc2',
            '0xd5a79147930aa725',
            '0x06ca6351e003826f',
            '0x142929670a0e6e70',
            '0x27b70a8546d22ffc',
            '0x2e1b21385c26c926',
            '0x4d2c6dfc5ac42aed',
            '0x53380d139d95b3df',
            '0x650a73548baf63de',
            '0x766a0abb3c77b2a8',
            '0x81c2c92e47edaee6',
            '0x92722c851482353b',
            '0xa2bfe8a14cf10364',
            '0xa81a664bbc423001',
            '0xc24b8b70d0f89791',
            '0xc76c51a30654be30',
            '0xd192e819d6ef5218',
            '0xd69906245565a910',
            '0xf40e35855771202a',
            '0x106aa07032bbd1b8',
            '0x19a4c116b8d2d0c8',
            '0x1e376c085141ab53',
            '0x2748774cdf8eeb99',
            '0x34b0bcb5e19b48a8',
            '0x391c0cb3c5c95a63',
            '0x4ed8aa4ae3418acb',
            '0x5b9cca4f7763e373',
            '0x682e6ff3d6b2b8a3',
            '0x748f82ee5defb2fc',
            '0x78a5636f43172f60',
            '0x84c87814a1f0ab72',
            '0x8cc702081a6439ec',
            '0x90befffa23631e28',
            '0xa4506cebde82bde9',
            '0xbef9a3f7b2c67915',
            '0xc67178f2e372532b',
            '0xca273eceea26619c',
            '0xd186b8c721c0c207',
            '0xeada7dd6cde0eb1e',
            '0xf57d4f7fee6ed178',
            '0x06f067aa72176fba',
            '0x0a637dc5a2c898a6',
            '0x113f9804bef90dae',
            '0x1b710b35131c471b',
            '0x28db77f523047d84',
            '0x32caab7b40c72493',
            '0x3c9ebe0a15c9bebc',
            '0x431d67c49c100d4c',
            '0x4cc5d4becb3e42b6',
            '0x597f299cfc657e2a',
            '0x5fcb6fab3ad6faec',
            '0x6c44198c4a475817',
          ].map((e) => BigInt(e)),
        ),
        nI = new Uint32Array(80),
        nP = new Uint32Array(80);
      class nB extends np {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: a,
            Dl: o,
            Eh: u,
            El: l,
            Fh: f,
            Fl: h,
            Gh: d,
            Gl: c,
            Hh: p,
            Hl: g,
          } = this;
          return [e, t, r, n, i, s, a, o, u, l, f, h, d, c, p, g];
        }
        set(e, t, r, n, i, s, a, o, u, l, f, h, d, c, p, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | u),
            (this.El = 0 | l),
            (this.Fh = 0 | f),
            (this.Fl = 0 | h),
            (this.Gh = 0 | d),
            (this.Gl = 0 | c),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (nI[r] = e.getUint32(t)), (nP[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | nI[e - 15],
              r = 0 | nP[e - 15],
              n = nO.rotrSH(t, r, 1) ^ nO.rotrSH(t, r, 8) ^ nO.shrSH(t, r, 7),
              i = nO.rotrSL(t, r, 1) ^ nO.rotrSL(t, r, 8) ^ nO.shrSL(t, r, 7),
              s = 0 | nI[e - 2],
              a = 0 | nP[e - 2],
              o = nO.rotrSH(s, a, 19) ^ nO.rotrBH(s, a, 61) ^ nO.shrSH(s, a, 6),
              u = nO.rotrSL(s, a, 19) ^ nO.rotrBL(s, a, 61) ^ nO.shrSL(s, a, 6),
              l = nO.add4L(i, u, nP[e - 7], nP[e - 16]),
              f = nO.add4H(l, n, o, nI[e - 7], nI[e - 16]);
            (nI[e] = 0 | f), (nP[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: s,
            Ch: a,
            Cl: o,
            Dh: u,
            Dl: l,
            Eh: f,
            El: h,
            Fh: d,
            Fl: c,
            Gh: p,
            Gl: g,
            Hh: m,
            Hl: y,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                nO.rotrSH(f, h, 14) ^ nO.rotrSH(f, h, 18) ^ nO.rotrBH(f, h, 41),
              b =
                nO.rotrSL(f, h, 14) ^ nO.rotrSL(f, h, 18) ^ nO.rotrBL(f, h, 41),
              v = (f & d) ^ (~f & p),
              w = (h & c) ^ (~h & g),
              _ = nO.add5L(y, b, w, nk[e], nP[e]),
              x = nO.add5H(_, m, t, v, nA[e], nI[e]),
              E = 0 | _,
              S =
                nO.rotrSH(r, n, 28) ^ nO.rotrBH(r, n, 34) ^ nO.rotrBH(r, n, 39),
              O =
                nO.rotrSL(r, n, 28) ^ nO.rotrBL(r, n, 34) ^ nO.rotrBL(r, n, 39),
              A = (r & i) ^ (r & a) ^ (i & a),
              k = (n & s) ^ (n & o) ^ (s & o);
            (m = 0 | p),
              (y = 0 | g),
              (p = 0 | d),
              (g = 0 | c),
              (d = 0 | f),
              (c = 0 | h),
              ({ h: f, l: h } = nO.add(0 | u, 0 | l, 0 | x, 0 | E)),
              (u = 0 | a),
              (l = 0 | o),
              (a = 0 | i),
              (o = 0 | s),
              (i = 0 | r),
              (s = 0 | n);
            let I = nO.add3L(E, O, k);
            (r = nO.add3H(I, x, S, A)), (n = 0 | I);
          }
          ({ h: r, l: n } = nO.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: s } = nO.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)),
            ({ h: a, l: o } = nO.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)),
            ({ h: u, l: l } = nO.add(0 | this.Dh, 0 | this.Dl, 0 | u, 0 | l)),
            ({ h: f, l: h } = nO.add(0 | this.Eh, 0 | this.El, 0 | f, 0 | h)),
            ({ h: d, l: c } = nO.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | c)),
            ({ h: p, l: g } = nO.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
            ({ h: m, l: y } = nO.add(0 | this.Hh, 0 | this.Hl, 0 | m, 0 | y)),
            this.set(r, n, i, s, a, o, u, l, f, h, d, c, p, g, m, y);
        }
        roundClean() {
          nI.fill(0), nP.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class nU extends nB {
        constructor() {
          super(),
            (this.Ah = -1942145080),
            (this.Al = 424955298),
            (this.Bh = 1944164710),
            (this.Bl = -1982016298),
            (this.Ch = 502970286),
            (this.Cl = 855612546),
            (this.Dh = 1738396948),
            (this.Dl = 1479516111),
            (this.Eh = 258812777),
            (this.El = 2077511080),
            (this.Fh = 2011393907),
            (this.Fl = 79989058),
            (this.Gh = 1067287976),
            (this.Gl = 1780299464),
            (this.Hh = 286451373),
            (this.Hl = -1848208735),
            (this.outputLen = 28);
        }
      }
      class nT extends nB {
        constructor() {
          super(),
            (this.Ah = 573645204),
            (this.Al = -64227540),
            (this.Bh = -1621794909),
            (this.Bl = -934517566),
            (this.Ch = 596883563),
            (this.Cl = 1867755857),
            (this.Dh = -1774684391),
            (this.Dl = 1497426621),
            (this.Eh = -1775747358),
            (this.El = -1467023389),
            (this.Fh = -1101128155),
            (this.Fl = 1401305490),
            (this.Gh = 721525244),
            (this.Gl = 746961066),
            (this.Hh = 246885852),
            (this.Hl = -2117784414),
            (this.outputLen = 32);
        }
      }
      class nC extends nB {
        constructor() {
          super(),
            (this.Ah = -876896931),
            (this.Al = -1056596264),
            (this.Bh = 1654270250),
            (this.Bl = 914150663),
            (this.Ch = -1856437926),
            (this.Cl = 812702999),
            (this.Dh = 355462360),
            (this.Dl = -150054599),
            (this.Eh = 1731405415),
            (this.El = -4191439),
            (this.Fh = -1900787065),
            (this.Fl = 1750603025),
            (this.Gh = -619958771),
            (this.Gl = 1694076839),
            (this.Hh = 1203062813),
            (this.Hl = -1090891868),
            (this.outputLen = 48);
        }
      }
      let nN = nc(() => new nB());
      nc(() => new nU()), nc(() => new nT()), nc(() => new nC());
      let nL = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        nZ = Uint8Array.from({ length: 16 }, (e, t) => t),
        nR = nZ.map((e) => (9 * e + 5) % 16),
        nj = [nZ],
        nH = [nR];
      for (let e = 0; e < 4; e++)
        for (let t of [nj, nH]) t.push(t[e].map((e) => nL[e]));
      let n$ = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        nD = nj.map((e, t) => e.map((e) => n$[t][e])),
        nz = nH.map((e, t) => e.map((e) => n$[t][e])),
        nV = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        nq = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        nF = (e, t) => (e << t) | (e >>> (32 - t));
      function nK(e, t, r, n) {
        return 0 === e
          ? t ^ r ^ n
          : 1 === e
            ? (t & r) | (~t & n)
            : 2 === e
              ? (t | ~r) ^ n
              : 3 === e
                ? (t & n) | (r & ~n)
                : t ^ (r | ~n);
      }
      let nM = new Uint32Array(16);
      class nG extends np {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          let { h0: e, h1: t, h2: r, h3: n, h4: i } = this;
          return [e, t, r, n, i];
        }
        set(e, t, r, n, i) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | i);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) nM[r] = e.getUint32(t, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            s = i,
            a = 0 | this.h2,
            o = a,
            u = 0 | this.h3,
            l = u,
            f = 0 | this.h4,
            h = f;
          for (let e = 0; e < 5; e++) {
            let t = 4 - e,
              d = nV[e],
              c = nq[e],
              p = nj[e],
              g = nH[e],
              m = nD[e],
              y = nz[e];
            for (let t = 0; t < 16; t++) {
              let n = (nF(r + nK(e, i, a, u) + nM[p[t]] + d, m[t]) + f) | 0;
              (r = f), (f = u), (u = 0 | nF(a, 10)), (a = i), (i = n);
            }
            for (let e = 0; e < 16; e++) {
              let r = (nF(n + nK(t, s, o, l) + nM[g[e]] + c, y[e]) + h) | 0;
              (n = h), (h = l), (l = 0 | nF(o, 10)), (o = s), (s = r);
            }
          }
          this.set(
            (this.h1 + a + l) | 0,
            (this.h2 + u + h) | 0,
            (this.h3 + f + n) | 0,
            (this.h4 + r + s) | 0,
            (this.h0 + i + o) | 0,
          );
        }
        roundClean() {
          nM.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      let nW = nc(() => new nG());
      class nY extends nd {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), ns(e);
          let r = nh(t);
          if (
            ((this.iHash = e.create()), 'function' != typeof this.iHash.update)
          )
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return na(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          na(this),
            ni(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let nJ = (e, t, r) => new nY(e, t).update(r).digest();
      function nQ(e) {
        let t = rL.bytes(e);
        return rL.raw(nx(nx(t)));
      }
      function nX(e) {
        let t = rL.bytes(e);
        return rL.raw(nW(nx(t)));
      }
      function n0(e) {
        return nt.mod(e).buff;
      }
      function n1(e, t = !1) {
        let r = nt.mod(e).point;
        return t ? r.x : r.buff;
      }
      function n2(e, t) {
        let r = nr.from_x(t),
          n = nt.mod(e);
        return r.mul(n).buff;
      }
      nJ.create = (e, t) => new nY(e, t);
      var n3 = Object.freeze({
        __proto__: null,
        genSecretKey: function (e = 32) {
          return n0(r4(e));
        },
        getPublicKey: n1,
        getSecretKey: n0,
        getSharedCode: function (e, t, r = 'ecdh/code') {
          let n = (function (e) {
              let t = rL.str(e).digest;
              return rL.join([t, t]);
            })(r),
            i = n0(e),
            s = n1(i),
            a = rL.bytes(t),
            o = n2(i, a),
            u = [s.hex, a.hex];
          return (
            u.sort(),
            (function (e, t) {
              let r = rL.bytes(e),
                n = rL.bytes(t);
              return rL.raw(nJ(nN, r, n));
            })(o, rL.join([n, ...u]))
          );
        },
        getSharedKey: n2,
        is_even_pub: function (e) {
          let t = rL.bytes(e);
          switch (!0) {
            case 32 === t.length:
            case 33 === t.length && 2 === t[0]:
              return !0;
            case 33 === t.length && 3 === t[0]:
              return !1;
            default:
              throw TypeError(`Invalid public key: ${t.hex}`);
          }
        },
        xonly_pub: function (e) {
          let t = rL.bytes(e);
          switch (t.length) {
            case 32:
              return t;
            case 33:
              return t.slice(1, 33);
            default:
              throw Error(`Invalid key length: ${t.length}`);
          }
        },
      });
      rL.random(32);
      let n8 = { ...n3, ...r5 };
      function n4(e) {
        let t = en.bytes(e);
        return ey(t, 33), nX(t);
      }
      function n5(e) {
        return nX(eO.fmt.toBytes(e, !1));
      }
      function n6(e) {
        return (function (e) {
          let t = rL.bytes(e);
          return rL.raw(nx(t));
        })(eO.fmt.toBytes(e, !1));
      }
      function n9(e, t = 'main') {
        for (let r of 'main' === t ? ['1'] : ['m', 'n'])
          if (e.startsWith(r)) return !0;
        return !1;
      }
      function n7(e, t = 'main') {
        let r = en.bytes(e),
          n = 'main' === t ? en.num(0) : en.num(111);
        return ey(e, 20), r.prepend(n).tob58chk();
      }
      let ie = {
        check: n9,
        encode: n7,
        decode: function (e, t = 'main') {
          if (!n9(e, t)) throw TypeError('Invalid p2pkh address!');
          return en.b58chk(e).slice(1);
        },
        hash: n4,
        scriptPubKey: function (e) {
          let t = en.bytes(e);
          return (
            ey(t, 20),
            ['OP_DUP', 'OP_HASH160', t.hex, 'OP_EQUALVERIFY', 'OP_CHECKSIG']
          );
        },
        fromPubKey: function (e, t) {
          return n7(n4(e), t);
        },
      };
      function it(e, t = 'main') {
        for (let r of 'main' === t ? ['3'] : ['2'])
          if (e.startsWith(r)) return !0;
        return !1;
      }
      function ir(e, t = 'main') {
        let r = 'main' === t ? en.num(5) : en.num(196),
          n = en.bytes(e);
        return ey(n, 20), n.prepend(r).tob58chk();
      }
      let ii = {
          check: it,
          encode: ir,
          decode: function (e, t = 'main') {
            if (!it(e, t))
              throw TypeError(`Invalid p2sh address for network ${t}:` + e);
            return en.b58chk(e).slice(1);
          },
          hash: n5,
          scriptPubKey: function (e) {
            return ['OP_HASH160', en.bytes(e).hex, 'OP_EQUAL'];
          },
          fromScript: function (e, t) {
            return ir(n5(e), t);
          },
        },
        is = { main: 'bc', testnet: 'tb', signet: 'tb', regtest: 'bcrt' },
        ia = ['bc1q', 'tb1q', 'bcrt1q'];
      function io(e) {
        for (let t of ia) if (e.startsWith(t)) return !0;
        return !1;
      }
      function iu(e, t = 'main') {
        let r = is[t],
          n = en.bytes(e);
        return ey(n, 20), n.toBech32(r, 0);
      }
      let il = {
          check: io,
          encode: iu,
          decode: function (e) {
            if (!io(e)) throw TypeError('Invalid segwit address!');
            return en.bech32(e);
          },
          hash: n4,
          scriptPubKey: function (e) {
            let t = en.bytes(e);
            return ey(t, 20), ['OP_0', t.hex];
          },
          fromPubKey: function (e, t) {
            return iu(n4(e), t);
          },
        },
        ih = ['bc1q', 'tb1q', 'bcrt1q'];
      function id(e) {
        for (let t of ih) if (e.startsWith(t)) return !0;
        return !1;
      }
      function ic(e, t = 'main') {
        let r = is[t],
          n = en.bytes(e);
        return ey(n, 32), n.toBech32(r, 0);
      }
      let ip = {
        check: id,
        encode: ic,
        decode: function (e) {
          if (!id(e)) throw TypeError('Invalid segwit address!');
          return en.bech32(e);
        },
        hash: n6,
        scriptPubKey: function (e) {
          let t = en.bytes(e);
          return ey(t, 32), ['OP_0', t.hex];
        },
        fromScript: function (e, t) {
          return ic(n6(e), t);
        },
      };
      function ig(e) {
        let t = en.bytes(e);
        return t.length > 32 ? t.slice(1, 33) : t;
      }
      let im = ['bc1p', 'tb1p', 'bcrt1p'];
      function iy(e) {
        for (let t of im) if (e.startsWith(t)) return !0;
        return !1;
      }
      function ib(e, t = 'main') {
        let r = is[t],
          n = en.bytes(e);
        return ey(n, 32), n.toBech32(r, 1);
      }
      let iv = {
          check: iy,
          encode: ib,
          decode: function (e) {
            if (!iy(e)) throw TypeError('Invalid taproot address!');
            return en.bech32(e);
          },
          scriptPubKey: function (e) {
            let t = en.bytes(e);
            return ey(t, 32), ['OP_1', t.hex];
          },
          fromPubKey: function (e, t) {
            return ib(ig(e), t);
          },
        },
        iw = { version: 2, vin: [], vout: [], locktime: 0 },
        i_ = { scriptSig: [], sequence: 4294967293, witness: [] },
        ix = { value: 0n, scriptPubKey: [] };
      function iE(e) {
        let t = { ...iw, ...e };
        return (
          (t.vin = t.vin.map((e) => ({ ...i_, ...e }))),
          (t.vout = t.vout.map((e) => ({ ...ix, ...e }))),
          t
        );
      }
      function iS(e, t) {
        let { version: r, vin: n, vout: i, locktime: s } = iE(e),
          a =
            !0 !== t &&
            (function (e) {
              for (let t of e) {
                let { witness: e } = t;
                if (
                  'string' == typeof e ||
                  e instanceof Uint8Array ||
                  (Array.isArray(e) && e.length > 0)
                )
                  return !0;
              }
              return !1;
            })(n),
          o = [iO(r)];
        for (let e of (a && o.push(en.hex('0001')),
        o.push(
          (function (e) {
            let t = [en.varInt(e.length, 'le')];
            for (let r of e) {
              let { txid: e, vout: n, scriptSig: i, sequence: s } = r;
              t.push(iA(e)), t.push(ik(n)), t.push(eE(i, !0)), t.push(iI(s));
            }
            return en.join(t);
          })(n),
        ),
        o.push(
          (function (e) {
            let t = [en.varInt(e.length, 'le')];
            for (let r of e)
              t.push(
                (function (e) {
                  let { value: t, scriptPubKey: r } = e,
                    n = [];
                  return n.push(iP(t)), n.push(eE(r, !0)), en.join(n);
                })(r),
              );
            return en.join(t);
          })(i),
        ),
        n))
          a &&
            o.push(
              (function (e = []) {
                let t = [];
                if (!Array.isArray(e)) return en.bytes(e);
                {
                  let r = en.varInt(e.length);
                  for (let n of (t.push(r), e))
                    t.push(
                      !(function (e) {
                        if (Array.isArray(e)) return 0 === e.length;
                        if ('string' == typeof e && '' === e) return !0;
                        let t = en.bytes(e);
                        return 1 === t.length && 0 === t[0];
                      })(n)
                        ? eE(n, !0)
                        : new en(0),
                    );
                  return en.join(t);
                }
              })(e.witness),
            );
        return o.push(iB(s)), en.join(o);
      }
      function iO(e) {
        return en.num(e, 4).reverse();
      }
      function iA(e) {
        return en.hex(e, 32).reverse();
      }
      function ik(e) {
        return en.num(e, 4).reverse();
      }
      function iI(e) {
        if ('string' == typeof e) return en.hex(e, 4).reverse();
        if ('number' == typeof e) return en.num(e, 4).reverse();
        throw Error('Unrecognized format: ' + String(e));
      }
      function iP(e) {
        if ('number' == typeof e) {
          if (e % 1 != 0) throw Error('Value must be an integer:' + String(e));
          return en.num(e, 8).reverse();
        }
        return en.big(e, 8).reverse();
      }
      function iB(e) {
        if ('string' == typeof e) return en.hex(e, 4);
        if ('number' == typeof e) return en.num(e, 4).reverse();
        throw Error('Unrecognized format: ' + String(e));
      }
      function iU(e) {
        'string' == typeof e && (e = en.hex(e).raw);
        let t = new em(e),
          r = t.read(4).reverse().toNum(),
          n = (function (e) {
            let [t, r] = [...e.peek(2)];
            if (0 === t) {
              if ((e.read(2), 1 === r)) return !0;
              throw Error(`Invalid witness flag: ${r}`);
            }
            return !1;
          })(t),
          i = (function (e) {
            let t = [],
              r = e.readSize('le');
            for (let n = 0; n < r; n++)
              t.push({
                txid: e.read(32).reverse().toHex(),
                vout: e.read(4).reverse().toNum(),
                scriptSig: iC(e, !0),
                sequence: e.read(4).reverse().toHex(),
                witness: [],
              });
            return t;
          })(t),
          s = (function (e) {
            let t = [],
              r = e.readSize('le');
            for (let n = 0; n < r; n++)
              t.push({
                value: e.read(8).reverse().big,
                scriptPubKey: iC(e, !0),
              });
            return t;
          })(t);
        if (n)
          for (let e of i)
            e.witness = (function (e) {
              let t = [],
                r = e.readSize();
              for (let n = 0; n < r; n++) {
                let r = iT(e, !0);
                t.push(r ?? '');
              }
              return t;
            })(t);
        return {
          version: r,
          vin: i,
          vout: s,
          locktime: t.read(4).reverse().toNum(),
        };
      }
      function iT(e, t) {
        let r = !0 === t ? e.readSize('le') : e.size;
        return r > 0 ? e.read(r).hex : null;
      }
      function iC(e, t) {
        let r = iT(e, t);
        return null !== r ? r : [];
      }
      let iN = {
          toBytes: function (e) {
            if (ex(e)) return iU(e), en.bytes(e);
            if ('object' == typeof e) return iS(e);
            throw Error('Invalid format: ' + String(typeof e));
          },
          toJson: function (e) {
            if (ex(e)) return iU(e);
            if ('object' == typeof e && !(e instanceof Uint8Array))
              return iS(e), iE(e);
            throw Error('Invalid format: ' + String(typeof e));
          },
        },
        iL = [
          ['p2pkh', /^76a914(?<hash>\w{40})88ac$/],
          ['p2sh', /^a914(?<hash>\w{40})87$/],
          ['p2w-pkh', /^0014(?<hash>\w{40})$/],
          ['p2w-sh', /^0020(?<hash>\w{64})$/],
          ['p2tr', /^5120(?<hash>\w{64})$/],
        ],
        iZ = [
          192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218,
          220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246,
          248, 250, 252, 254, 102, 126, 128, 132, 150, 152, 186, 188, 190,
        ],
        iR = {
          create: iE,
          encode: iS,
          decode: iU,
          fmt: iN,
          util: {
            getTxSize: function (e) {
              let t = iN.toJson(e),
                r = iS(t, !0).length,
                n = iS(t, !1).length,
                i = 3 * r + n;
              return {
                size: n,
                bsize: r,
                vsize: Math.floor(i / 4) + (i % 4 > 0 ? 1 : 0),
                weight: i,
              };
            },
            getTxid: function (e) {
              return nQ(iS(iN.toJson(e), !0)).reverse().hex;
            },
            readScriptPubKey: function (e) {
              let t = eO.fmt.toBytes(e, !1).hex;
              for (let [e, r] of iL) {
                let { groups: n } = r.exec(t) ?? {},
                  { hash: i } = n ?? {};
                if (e_(i)) return { type: e, data: en.hex(i) };
              }
              return { type: 'raw', data: en.hex(t) };
            },
            readWitness: function (e = []) {
              let t, r;
              let n = [...e],
                i = (e_((t = n.at(-1))) && (t = en.hex(t)),
                n.length > 1 && t instanceof Uint8Array && 80 === t[0])
                  ? (n.pop(), en.raw(t))
                  : null;
              return {
                annex: i,
                cblock: (e_((r = n.at(-1))) && (r = en.hex(r)),
                n.length > 1 &&
                  r instanceof Uint8Array &&
                  r.length > 32 &&
                  iZ.includes(254 & r[0]))
                  ? (n.pop(), en.raw(r))
                  : null,
                script: (function (e) {
                  if (e.length > 1) {
                    let t = e.at(-1);
                    try {
                      let r = eO.fmt.toBytes(t);
                      return e.pop(), r;
                    } catch (e) {}
                  }
                  return null;
                })(n),
                params: (function (e) {
                  let t = [];
                  for (let r of e)
                    if (
                      e_(r) ||
                      r instanceof Uint8Array ||
                      'number' == typeof r
                    )
                      t.push(en.bytes(r));
                    else throw Error('unrecognized value: ' + String(r));
                  return t;
                })(n),
              };
            },
          },
        },
        ij = [
          ['1', 'p2pkh', 'main', 20, 'base58'],
          ['3', 'p2sh', 'main', 20, 'base58'],
          ['m', 'p2pkh', 'testnet', 20, 'base58'],
          ['n', 'p2pkh', 'testnet', 20, 'base58'],
          ['2', 'p2sh', 'testnet', 20, 'base58'],
          ['bc1q', 'p2w-pkh', 'main', 20, 'bech32'],
          ['tb1q', 'p2w-pkh', 'testnet', 20, 'bech32'],
          ['bcrt1q', 'p2w-pkh', 'regtest', 20, 'bech32'],
          ['bc1q', 'p2w-sh', 'main', 32, 'bech32'],
          ['tb1q', 'p2w-sh', 'testnet', 32, 'bech32'],
          ['bcrt1q', 'p2w-sh', 'regtest', 32, 'bech32'],
          ['bc1p', 'p2tr', 'main', 32, 'bech32m'],
          ['tb1p', 'p2tr', 'testnet', 32, 'bech32m'],
          ['bcrt1p', 'p2tr', 'regtest', 32, 'bech32m'],
        ];
      function iH(e) {
        switch (e) {
          case 'p2pkh':
            return ie;
          case 'p2sh':
            return ii;
          case 'p2w-pkh':
            return il;
          case 'p2w-sh':
            return ip;
          case 'p2tr':
            return iv;
          default:
            throw Error('Invalid address type: ' + e);
        }
      }
      function i$(e) {
        let [t, r, n] = (function (e) {
            for (let t of ij) {
              let [r, n, i, s, a] = t;
              if (
                e.startsWith(r) &&
                (function (e, t) {
                  switch (t) {
                    case 'base58':
                      return en.b58chk(e).slice(1);
                    case 'bech32':
                    case 'bech32m':
                      return en.bech32(e);
                    default:
                      throw Error('Invalid address format: ' + t);
                  }
                })(e, a).length === s
              )
                return t;
            }
            throw Error('Invalid address: ' + e);
          })(e),
          i = iH(r),
          s = i.decode(e, n),
          a = i.scriptPubKey(s);
        return { prefix: t, type: r, network: n, data: s, script: a };
      }
      let iD = {
          p2pkh: ie,
          p2sh: ii,
          p2wpkh: il,
          p2wsh: ip,
          p2tr: iv,
          decode: i$,
          fromScriptPubKey: function (e, t) {
            let { type: r, data: n } = iR.util.readScriptPubKey(e);
            return iH(r).encode(n, t);
          },
          toScriptPubKey: function (e) {
            let { script: t } = i$(e);
            return eO.fmt.toAsm(t, !1);
          },
        },
        iz = [1, 2, 3];
      function iV(e, t, r = {}) {
        let { sigflag: n = 1 } = r,
          i = (128 & n) == 128,
          s = n % 128;
        if (!iz.includes(s)) throw Error('Invalid hash type: ' + String(n));
        let { version: a, vin: o, vout: u, locktime: l } = iR.fmt.toJson(e),
          { txid: f, vout: h, prevout: d, sequence: c } = o[t],
          { value: p } = d ?? {};
        if (void 0 === p) throw Error('Prevout value is empty!');
        let g = r.script;
        if (void 0 === g && void 0 !== r.pubkey) {
          let e = nX(r.pubkey);
          g = `76a914${e.hex}88ac`;
        }
        if (void 0 === g) throw Error('No pubkey / script has been set!');
        if (eO.fmt.toAsm(g).includes('OP_CODESEPARATOR'))
          throw Error(
            'This library does not currently support the use of OP_CODESEPARATOR in segwit scripts.',
          );
        let m = [
          iO(a),
          (function (e, t) {
            if (!0 === t) return en.num(0, 32);
            let r = [];
            for (let { txid: t, vout: n } of e) r.push(iA(t)), r.push(ik(n));
            return nQ(en.join(r));
          })(o, i),
          (function (e, t, r) {
            if (r || 1 !== t) return en.num(0, 32);
            let n = [];
            for (let { sequence: t } of e) n.push(iI(t));
            return nQ(en.join(n));
          })(o, s, i),
          iA(f),
          ik(h),
          eO.encode(g, !0),
          iP(p),
          iI(c),
          (function (e, t, r) {
            let n = [];
            if (1 === r) {
              for (let { value: t, scriptPubKey: r } of e)
                n.push(iP(t)), n.push(eO.encode(r, !0));
              return nQ(en.join(n));
            }
            if (3 === r && t < e.length) {
              let { value: r, scriptPubKey: i } = e[t];
              return n.push(iP(r)), n.push(eO.encode(i, !0)), nQ(en.join(n));
            }
            return en.num(0, 32);
          })(u, t, s),
          iB(l),
          en.num(n, 4).reverse(),
        ];
        return nQ(en.join(m));
      }
      let iq = [0, 1, 2, 3, 129, 130, 131];
      function iF(e, t, r = {}) {
        var n;
        let {
            extension: i,
            sigflag: s = 0,
            extflag: a = 0,
            key_version: o = 0,
            separator_pos: u = 4294967295,
          } = r,
          { version: l, vin: f, vout: h, locktime: d } = iR.fmt.toJson(e);
        if (t >= f.length) throw Error('Index out of bounds: ' + String(t));
        if (!iq.includes(s)) throw Error('Invalid hash type: ' + String(s));
        if (a < 0 || a > 127)
          throw Error('Extention flag out of range: ' + String(a));
        let { txid: c, vout: p, sequence: g, witness: m = [] } = f[t],
          y = (128 & s) == 128,
          b = (function (e) {
            if (void 0 === e || e.length < 2) return;
            let t = e.at(-1);
            if (
              ('string' == typeof t && (t = en.hex(t)),
              t instanceof Uint8Array && 80 === t[0])
            )
              return en.raw(t).prefixSize('be').digest;
          })(m),
          v = void 0 !== b ? 1 : 0,
          w = void 0 !== i ? 1 : 0,
          _ = en.str('TapSighash').digest,
          x = [_, _, en.num(0, 1), en.num(s, 1), iO(l), iB(d)];
        if (!y) {
          let e = f.map((e) => iK(e));
          x.push(
            (function (e) {
              let t = [];
              for (let { txid: r, vout: n } of e) t.push(iA(r)), t.push(ik(n));
              return en.join(t).digest;
            })(f),
            (function (e) {
              let t = [];
              for (let { value: r } of e) t.push(iP(r));
              return en.join(t).digest;
            })(e),
            (function (e) {
              let t = [];
              for (let { scriptPubKey: r } of e) t.push(eE(r, !0));
              return en.join(t).digest;
            })(e),
            (function (e) {
              let t = [];
              for (let { sequence: r } of e) t.push(iI(r));
              return en.join(t).digest;
            })(f),
          );
        }
        if (
          (((3 & s) < 2 || (3 & s) > 3) &&
            x.push(
              (function (e) {
                let t = [];
                for (let { value: r, scriptPubKey: n } of e)
                  t.push(iP(r)), t.push(eO.encode(n, !0));
                return en.join(t).digest;
              })(h),
            ),
          x.push(en.num((a + w) * 2 + v, 1)),
          y)
        ) {
          let { value: e, scriptPubKey: r } = iK(f[t]);
          x.push(iA(c), ik(p), iP(e), eO.encode(r, !0), iI(g));
        } else x.push(en.num(t, 4).reverse());
        return (
          void 0 !== b && x.push(b),
          (3 & s) == 3 &&
            x.push(
              ((n = h[t]),
              en.join([iP(n.value), eO.encode(n.scriptPubKey, !0)]).digest),
            ),
          void 0 !== i && x.push(en.bytes(i), en.num(o), en.num(u, 4)),
          en.join(x).digest
        );
      }
      function iK(e) {
        if (void 0 === e.prevout)
          throw Error('Prevout data missing for input: ' + String(e.txid));
        return e.prevout;
      }
      function iM(e) {
        let t = en.str(e).digest;
        return en.join([t, t]);
      }
      function iG(e, t = 192) {
        return en.join([
          iM('TapLeaf'),
          (function (e = 192) {
            return 254 & e;
          })(t),
          en.bytes(e),
        ]).digest.hex;
      }
      function iW(e, t) {
        return (
          t < e && ([e, t] = [t, e]),
          en.join([iM('TapBranch'), en.hex(e).raw, en.hex(t).raw]).digest.hex
        );
      }
      function iY(e, t, r = []) {
        let n = [],
          i = [];
        if (e.length < 1) throw Error('Tree is empty!');
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          if (Array.isArray(s)) {
            let [e, i, a] = iY(s, t);
            for (let s of ((t = i), n.push(e), a)) r.push(s);
          } else n.push(s);
        }
        if (1 === n.length) return [n[0], t, r];
        n.sort(), n.length % 2 != 0 && n.push(n[n.length - 1]);
        for (let e = 0; e < n.length - 1; e += 2) {
          let s = iW(n[e], n[e + 1]);
          i.push(s),
            'string' == typeof t &&
              (t === n[e]
                ? (r.push(n[e + 1]), (t = s))
                : t === n[e + 1] && (r.push(n[e]), (t = s)));
        }
        return iY(i, t, r);
      }
      function iJ(e, t = new Uint8Array(), r = !1) {
        let n = r ? new nt(e).point.x.raw : ig(e);
        return en.join([iM('TapTweak'), n, en.bytes(t)]).digest;
      }
      function iQ(e, t, r = !1) {
        void 0 === t && (t = new Uint8Array());
        let n = en.bytes(e),
          i = iJ(e, t, r);
        return r ? iX(n, i) : i0(n, i);
      }
      function iX(e, t) {
        let r = new nt(e);
        return r.point.hasOddY && (r = r.negate()), en.raw(r.add(t).raw);
      }
      function i0(e, t) {
        e = ig(e);
        let r = nr.from_x(e).add(t);
        return en.raw(r.raw);
      }
      let i1 = (function () {
        let e = en.hex(
          '0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
        );
        return nr.from_x(e.digest).x;
      })();
      function i2(e, t = {}) {
        let { isPrivate: r = !1, tree: n = [], version: i = 192 } = t,
          s = r ? n8.getPublicKey(e, !0) : ig(e),
          { target: a } = t;
        void 0 !== a && (a = en.bytes(a).hex);
        let o,
          u = [];
        if (n.length > 0) {
          let [t, i, s] = iY(n, a);
          (u = s), (o = iQ(e, t, r));
        } else o = void 0 !== a ? iQ(e, a, r) : iQ(e, void 0, r);
        let l = r ? n8.getPublicKey(o)[0] : o[0],
          f = [en.num(i + i4(l)), s];
        u.length > 0 && u.forEach((e) => f.push(en.hex(e)));
        let h = en.join(f);
        if (void 0 !== a && !i3(o, a, h, t))
          throw Error('Path checking failed! Unable to generate path.');
        return [ig(o).hex, h.hex];
      }
      function i3(e, t, r, n = {}) {
        let { isPrivate: i = !1, throws: s = !1 } = n,
          { parity: a, paths: o, intkey: u } = i8(r),
          l = i ? n8.getPublicKey(e, !0) : ig(e),
          f = en.join([a, l]);
        if (33 !== f.length) return eb('Invalid tapkey: ' + f.hex, s);
        let h = en.bytes(t).hex;
        for (let e of o) h = iW(h, e);
        let d = iQ(u, h);
        return en.raw(d).hex === en.raw(f).hex;
      }
      function i8(e) {
        let t = new em(en.bytes(e)),
          r = t.read(1).num,
          n = t.read(32),
          [i, s] = r % 2 == 0 ? [r, 2] : [r - 1, 3],
          a = [];
        for (; t.size >= 32; ) a.push(t.read(32).hex);
        if (0 !== t.size)
          throw Error('Non-empty buffer on control block: ' + String(t));
        return { intkey: n, paths: a, parity: s, version: i };
      }
      function i4(e = 2) {
        if (0 === e || 1 === e) return e;
        if (2 === e || '02' === e) return 0;
        if (3 === e || '03' === e) return 1;
        throw Error('Invalid parity bit: ' + String(e));
      }
      let i5 = {
          segwit: {
            hash: iV,
            sign: function (e, t, r, n = {}) {
              let { sigflag: i = 1 } = n,
                s = iV(t, r, n),
                a = tH.sign(s, e).toDERRawBytes(!0);
              return en.join([a, i]);
            },
            verify: function (e, t, r = {}) {
              let n = iR.fmt.toJson(e),
                { throws: i = !1 } = r,
                { witness: s = [] } = n.vin[t],
                { script: a, params: o } = iR.util.readWitness(s),
                u = null;
              if (o.length < 1)
                return eb('Invalid witness data: ' + String(s), i);
              if (
                (void 0 === r.script && null !== a && (r.script = a),
                void 0 !== r.pubkey)
              )
                u = en.bytes(r.pubkey);
              else {
                if (!(o.length > 1) || 33 !== o[1].length)
                  return eb('No pubkey provided!', i);
                u = en.bytes(o[1]);
              }
              let l = eO.fmt.toParam(o[0]),
                f = l.slice(0, -1),
                h = l.slice(-1)[0],
                d = iV(n, t, { ...r, sigflag: h });
              return !!tH.verify(f, d, u) || eb('Invalid signature!', i);
            },
          },
          taproot: {
            hash: iF,
            sign: function (e, t, r, n = {}) {
              let { sigflag: i = 0 } = n,
                s = (function (e, t, r = en.random(32)) {
                  let n = en.bytes(t),
                    i = new nt(e),
                    s = i.point,
                    a = s.hasEvenY ? i.big : i.negated.big,
                    o = a ^ ev('BIP0340/aux', en.bytes(r)).big,
                    u = new nt(ev('BIP0340/nonce', o, s.x.raw, n)),
                    l = u.point,
                    f = l.hasEvenY ? u.big : u.negated.big,
                    h = new nt(ev('BIP0340/challenge', l.x.raw, s.x.raw, n)),
                    d = new nt(f + h.big * a);
                  return en.join([l.x.raw, d.raw]);
                })(e, iF(t, r, n));
              return 0 === i ? en.raw(s) : en.join([s, i]);
            },
            verify: function (e, t, r = {}) {
              let n;
              let i = iR.fmt.toJson(e),
                { throws: s = !1 } = r,
                { prevout: a, witness: o = [] } = i.vin[t],
                { cblock: u, script: l, params: f } = iR.util.readWitness(o);
              if (f.length < 1)
                return eb('Invalid witness data: ' + String(o), s);
              let { scriptPubKey: h } = a ?? {};
              if (void 0 === h) return eb('Prevout scriptPubKey is empty!', s);
              let { type: d, data: c } = iR.util.readScriptPubKey(h);
              if ('p2tr' !== d)
                return eb(
                  'Prevout script is not a valid taproot output:' + c.hex,
                  s,
                );
              if (32 !== c.length)
                return eb('Invalid tapkey length: ' + String(c.length), s);
              if (null !== u && null !== l) {
                let e = iG(l, 254 & u[0]);
                if (((r.extension = e), !i3(c, e, u, { throws: s })))
                  return eb('cblock verification failed!', s);
              }
              n =
                void 0 !== r.pubkey
                  ? en.bytes(r.pubkey)
                  : f.length > 1 && 32 === f[1].length
                    ? en.bytes(f[1])
                    : en.bytes(c);
              let p = new em(eO.fmt.toParam(f[0])),
                g = p.read(64).raw;
              return 1 === p.size &&
                ((r.sigflag = p.read(1).num), 0 === r.sigflag)
                ? eb('0x00 is not a valid appended sigflag!', s)
                : !!(function (e, t, r, n = !1) {
                    let i = nr.from_x(ig(r)),
                      s = en.bytes(t),
                      a = en.bytes(e).stream;
                    a.size < 64 &&
                      eb('Signature length is too small: ' + String(a.size), n);
                    let o = a.read(32);
                    o.big >
                      0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn &&
                      eb('Signature r value greater than field size!', n);
                    let u = a.read(32);
                    u.big >
                      0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n &&
                      eb('Signature s value greater than curve order!', n);
                    let l = new nt(ev('BIP0340/challenge', o.raw, i.x.raw, s)),
                      f = new nt(u).point,
                      h = i.mul(l.big),
                      d = f.sub(h);
                    return (
                      d.hasOddY &&
                        eb('Signature R value has odd Y coordinate!', n),
                      0n === d.x.big && eb('Signature R value is infinite!', n),
                      d.x.big === o.big
                    );
                  })(g, iF(i, t, r), n, s) || eb('Invalid signature!', s);
            },
          },
        },
        i6 = {
          getPubKey: function (e, t = {}) {
            return i2(e, { ...t, isPrivate: !1 });
          },
          getSecKey: function (e, t = {}) {
            return i2(e, { ...t, isPrivate: !0 });
          },
          encodeScript: function (e, t) {
            return iG(eO.fmt.toBytes(e), t);
          },
          checkPath: i3,
          tree: {
            getTag: iM,
            getLeaf: iG,
            getBranch: iW,
            getRoot: function (e) {
              return en.hex(iY(e)[0]);
            },
          },
          tweak: {
            getPubKey: function (e, t) {
              return iQ(e, t);
            },
            getSecKey: function (e, t) {
              return iQ(e, t, !0);
            },
            getTweak: iJ,
            tweakSecKey: iX,
            tweakPubKey: i0,
          },
          util: { readCtrlBlock: i8, readParityBit: i4 },
          SCRIPT_PUBKEY: i1,
        };
      ((n = a || (a = {})).assertEqual = (e) => e),
        (n.assertIs = function (e) {}),
        (n.assertNever = function (e) {
          throw Error();
        }),
        (n.arrayToEnum = (e) => {
          let t = {};
          for (let r of e) t[r] = r;
          return t;
        }),
        (n.getValidEnumValues = (e) => {
          let t = n.objectKeys(e).filter((t) => 'number' != typeof e[e[t]]),
            r = {};
          for (let n of t) r[n] = e[n];
          return n.objectValues(r);
        }),
        (n.objectValues = (e) =>
          n.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (n.objectKeys =
          'function' == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                let t = [];
                for (let r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
              }),
        (n.find = (e, t) => {
          for (let r of e) if (t(r)) return r;
        }),
        (n.isInteger =
          'function' == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) =>
                'number' == typeof e && isFinite(e) && Math.floor(e) === e),
        (n.joinValues = function (e, t = ' | ') {
          return e.map((e) => ('string' == typeof e ? `'${e}'` : e)).join(t);
        }),
        (n.jsonStringifyReplacer = (e, t) =>
          'bigint' == typeof t ? t.toString() : t),
        ((o || (o = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let i9 = a.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        i7 = (e) => {
          switch (typeof e) {
            case 'undefined':
              return i9.undefined;
            case 'string':
              return i9.string;
            case 'number':
              return isNaN(e) ? i9.nan : i9.number;
            case 'boolean':
              return i9.boolean;
            case 'function':
              return i9.function;
            case 'bigint':
              return i9.bigint;
            case 'symbol':
              return i9.symbol;
            case 'object':
              if (Array.isArray(e)) return i9.array;
              if (null === e) return i9.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return i9.promise;
              if ('undefined' != typeof Map && e instanceof Map) return i9.map;
              if ('undefined' != typeof Set && e instanceof Set) return i9.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return i9.date;
              return i9.object;
            default:
              return i9.unknown;
          }
        },
        se = a.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class st extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            n = (e) => {
              for (let i of e.issues)
                if ('invalid_union' === i.code) i.unionErrors.map(n);
                else if ('invalid_return_type' === i.code) n(i.returnTypeError);
                else if ('invalid_arguments' === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(t(i));
                else {
                  let e = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    n === i.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(i)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      n++;
                  }
                }
            };
          return n(this), r;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, a.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : r.push(e(n));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      st.create = (e) => new st(e);
      let sr = (e, t) => {
          let r;
          switch (e.code) {
            case se.invalid_type:
              r =
                e.received === i9.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case se.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, a.jsonStringifyReplacer)}`;
              break;
            case se.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${a.joinValues(e.keys, ', ')}`;
              break;
            case se.invalid_union:
              r = 'Invalid input';
              break;
            case se.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${a.joinValues(e.options)}`;
              break;
            case se.invalid_enum_value:
              r = `Invalid enum value. Expected ${a.joinValues(e.options)}, received '${e.received}'`;
              break;
            case se.invalid_arguments:
              r = 'Invalid function arguments';
              break;
            case se.invalid_return_type:
              r = 'Invalid function return type';
              break;
            case se.invalid_date:
              r = 'Invalid date';
              break;
            case se.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : a.assertNever(e.validation)
                : (r =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case se.too_small:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                      : 'date' === e.type
                        ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                        : 'Invalid input';
              break;
            case se.too_big:
              r =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                      : 'bigint' === e.type
                        ? `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                        : 'date' === e.type
                          ? `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`
                          : 'Invalid input';
              break;
            case se.custom:
              r = 'Invalid input';
              break;
            case se.invalid_intersection_types:
              r = 'Intersection results could not be merged';
              break;
            case se.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case se.not_finite:
              r = 'Number must be finite';
              break;
            default:
              (r = t.defaultError), a.assertNever(e);
          }
          return { message: r };
        },
        sn = sr;
      function si() {
        return sn;
      }
      let ss = (e) => {
        let { data: t, path: r, errorMaps: n, issueData: i } = e,
          s = [...r, ...(i.path || [])],
          a = { ...i, path: s },
          o = '';
        for (let e of n
          .filter((e) => !!e)
          .slice()
          .reverse())
          o = e(a, { data: t, defaultError: o }).message;
        return { ...i, path: s, message: i.message || o };
      };
      function sa(e, t) {
        let r = ss({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            si(),
            sr,
          ].filter((e) => !!e),
        });
        e.common.issues.push(r);
      }
      class so {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let r = [];
          for (let n of t) {
            if ('aborted' === n.status) return su;
            'dirty' === n.status && e.dirty(), r.push(n.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) r.push({ key: await e.key, value: await e.value });
          return so.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ('aborted' === t.status || 'aborted' === i.status) return su;
            'dirty' === t.status && e.dirty(),
              'dirty' === i.status && e.dirty(),
              (void 0 !== i.value || n.alwaysSet) && (r[t.value] = i.value);
          }
          return { status: e.value, value: r };
        }
      }
      let su = Object.freeze({ status: 'aborted' }),
        sl = (e) => ({ status: 'dirty', value: e }),
        sf = (e) => ({ status: 'valid', value: e }),
        sh = (e) => 'aborted' === e.status,
        sd = (e) => 'dirty' === e.status,
        sc = (e) => 'valid' === e.status,
        sp = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      ((i = u || (u = {})).errToObj = (e) =>
        'string' == typeof e ? { message: e } : e || {}),
        (i.toString = (e) =>
          'string' == typeof e ? e : null == e ? void 0 : e.message);
      class sg {
        constructor(e, t, r, n) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let sm = (e, t) => {
        if (sc(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new st(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function sy(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: n,
          description: i,
        } = e;
        if (t && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (e, t) =>
                'invalid_type' !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                    ? { message: null != n ? n : t.defaultError }
                    : { message: null != r ? r : t.defaultError },
              description: i,
            };
      }
      class sb {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return i7(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: i7(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new so(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: i7(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (sp(t)) throw Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let n = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i7(e),
            },
            i = this._parseSync({ data: e, path: n.path, parent: n });
          return sm(n, i);
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i7(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return sm(r, await (sp(n) ? n : Promise.resolve(n)));
        }
        refine(e, t) {
          let r = (e) =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
                ? t(e)
                : t;
          return this._refinement((t, n) => {
            let i = e(t),
              s = () => n.addIssue({ code: se.custom, ...r(t) });
            return 'undefined' != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (s(), !1))
              : !!i || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, n) =>
              !!e(r) || (n.addIssue('function' == typeof t ? t(r, n) : t), !1),
          );
        }
        _refinement(e) {
          return new s3({
            schema: this,
            typeName: l.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return s8.create(this, this._def);
        }
        nullable() {
          return s4.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return s$.create(this, this._def);
        }
        promise() {
          return s2.create(this, this._def);
        }
        or(e) {
          return sz.create([this, e], this._def);
        }
        and(e) {
          return sF.create(this, e, this._def);
        }
        transform(e) {
          return new s3({
            ...sy(this._def),
            schema: this,
            typeName: l.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new s5({
            ...sy(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: l.ZodDefault,
          });
        }
        brand() {
          return new ae({
            typeName: l.ZodBranded,
            type: this,
            ...sy(this._def),
          });
        }
        catch(e) {
          return new s6({
            ...sy(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: l.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return at.create(this, e);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let sv = /^c[^\s-]{8,}$/i,
        sw = /^[a-z][a-z0-9]*$/,
        s_ = /[0-9A-HJKMNP-TV-Z]{26}/,
        sx =
          /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        sE =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
        sS = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
        sO =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        sA =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        sk = (e) =>
          e.precision
            ? e.offset
              ? RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
                )
              : RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`,
                )
            : 0 === e.precision
              ? e.offset
                ? RegExp(
                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$',
                  )
                : RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
              : e.offset
                ? RegExp(
                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$',
                  )
                : RegExp(
                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$',
                  );
      class sI extends sb {
        constructor() {
          super(...arguments),
            (this._regex = (e, t, r) =>
              this.refinement((t) => e.test(t), {
                validation: t,
                code: se.invalid_string,
                ...u.errToObj(r),
              })),
            (this.nonempty = (e) => this.min(1, u.errToObj(e))),
            (this.trim = () =>
              new sI({
                ...this._def,
                checks: [...this._def.checks, { kind: 'trim' }],
              })),
            (this.toLowerCase = () =>
              new sI({
                ...this._def,
                checks: [...this._def.checks, { kind: 'toLowerCase' }],
              })),
            (this.toUpperCase = () =>
              new sI({
                ...this._def,
                checks: [...this._def.checks, { kind: 'toUpperCase' }],
              }));
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== i9.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.string,
                received: t.parsedType,
              }),
              su
            );
          }
          let r = new so();
          for (let s of this._def.checks)
            if ('min' === s.kind)
              e.data.length < s.value &&
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.too_small,
                  minimum: s.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                r.dirty());
            else if ('max' === s.kind)
              e.data.length > s.value &&
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.too_big,
                  maximum: s.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                r.dirty());
            else if ('length' === s.kind) {
              let n = e.data.length > s.value,
                i = e.data.length < s.value;
              (n || i) &&
                ((t = this._getOrReturnCtx(e, t)),
                n
                  ? sa(t, {
                      code: se.too_big,
                      maximum: s.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    })
                  : i &&
                    sa(t, {
                      code: se.too_small,
                      minimum: s.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    }),
                r.dirty());
            } else if ('email' === s.kind)
              sE.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'email',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('emoji' === s.kind)
              sS.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'emoji',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('uuid' === s.kind)
              sx.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'uuid',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('cuid' === s.kind)
              sv.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'cuid',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('cuid2' === s.kind)
              sw.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'cuid2',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('ulid' === s.kind)
              s_.test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'ulid',
                  code: se.invalid_string,
                  message: s.message,
                }),
                r.dirty());
            else if ('url' === s.kind)
              try {
                new URL(e.data);
              } catch (n) {
                sa((t = this._getOrReturnCtx(e, t)), {
                  validation: 'url',
                  code: se.invalid_string,
                  message: s.message,
                }),
                  r.dirty();
              }
            else if ('regex' === s.kind)
              (s.regex.lastIndex = 0),
                s.regex.test(e.data) ||
                  (sa((t = this._getOrReturnCtx(e, t)), {
                    validation: 'regex',
                    code: se.invalid_string,
                    message: s.message,
                  }),
                  r.dirty());
            else if ('trim' === s.kind) e.data = e.data.trim();
            else if ('includes' === s.kind)
              e.data.includes(s.value, s.position) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                r.dirty());
            else if ('toLowerCase' === s.kind) e.data = e.data.toLowerCase();
            else if ('toUpperCase' === s.kind) e.data = e.data.toUpperCase();
            else if ('startsWith' === s.kind)
              e.data.startsWith(s.value) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.invalid_string,
                  validation: { startsWith: s.value },
                  message: s.message,
                }),
                r.dirty());
            else if ('endsWith' === s.kind)
              e.data.endsWith(s.value) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.invalid_string,
                  validation: { endsWith: s.value },
                  message: s.message,
                }),
                r.dirty());
            else if ('datetime' === s.kind)
              sk(s).test(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.invalid_string,
                  validation: 'datetime',
                  message: s.message,
                }),
                r.dirty());
            else if ('ip' === s.kind) {
              var n, i;
              (n = e.data),
                (('v4' === (i = s.version) || !i) && sO.test(n)) ||
                  (('v6' === i || !i) && sA.test(n)) ||
                  (sa((t = this._getOrReturnCtx(e, t)), {
                    validation: 'ip',
                    code: se.invalid_string,
                    message: s.message,
                  }),
                  r.dirty());
            } else a.assertNever(s);
          return { status: r.value, value: e.data };
        }
        _addCheck(e) {
          return new sI({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...u.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...u.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...u.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...u.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...u.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...u.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...u.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...u.errToObj(e) });
        }
        datetime(e) {
          var t;
          return 'string' == typeof e
            ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                ...u.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...u.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...u.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...u.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...u.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...u.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...u.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...u.errToObj(t) });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => 'datetime' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => 'uuid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => 'ip' === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      sI.create = (e) => {
        var t;
        return new sI({
          checks: [],
          typeName: l.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...sy(e),
        });
      };
      class sP extends sb {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== i9.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.number,
                received: t.parsedType,
              }),
              su
            );
          }
          let r = new so();
          for (let n of this._def.checks)
            'int' === n.kind
              ? a.isInteger(e.data) ||
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: n.message,
                }),
                r.dirty())
              : 'min' === n.kind
                ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                  (sa((t = this._getOrReturnCtx(e, t)), {
                    code: se.too_small,
                    minimum: n.value,
                    type: 'number',
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : 'max' === n.kind
                  ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                    (sa((t = this._getOrReturnCtx(e, t)), {
                      code: se.too_big,
                      maximum: n.value,
                      type: 'number',
                      inclusive: n.inclusive,
                      exact: !1,
                      message: n.message,
                    }),
                    r.dirty())
                  : 'multipleOf' === n.kind
                    ? 0 !==
                        (function (e, t) {
                          let r = (e.toString().split('.')[1] || '').length,
                            n = (t.toString().split('.')[1] || '').length,
                            i = r > n ? r : n;
                          return (
                            (parseInt(e.toFixed(i).replace('.', '')) %
                              parseInt(t.toFixed(i).replace('.', ''))) /
                            Math.pow(10, i)
                          );
                        })(e.data, n.value) &&
                      (sa((t = this._getOrReturnCtx(e, t)), {
                        code: se.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : 'finite' === n.kind
                      ? Number.isFinite(e.data) ||
                        (sa((t = this._getOrReturnCtx(e, t)), {
                          code: se.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : a.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, u.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, u.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, u.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, u.toString(t));
        }
        setLimit(e, t, r, n) {
          return new sP({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: u.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new sP({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: u.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: u.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: u.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: u.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: u.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: u.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: u.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: u.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: u.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              'int' === e.kind ||
              ('multipleOf' === e.kind && a.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              'finite' === r.kind ||
              'int' === r.kind ||
              'multipleOf' === r.kind
            )
              return !0;
            'min' === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : 'max' === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      sP.create = (e) =>
        new sP({
          checks: [],
          typeName: l.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...sy(e),
        });
      class sB extends sb {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== i9.bigint)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.bigint,
                received: t.parsedType,
              }),
              su
            );
          }
          let r = new so();
          for (let n of this._def.checks)
            'min' === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.too_small,
                  type: 'bigint',
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : 'max' === n.kind
                ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                  (sa((t = this._getOrReturnCtx(e, t)), {
                    code: se.too_big,
                    type: 'bigint',
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : 'multipleOf' === n.kind
                  ? e.data % n.value !== BigInt(0) &&
                    (sa((t = this._getOrReturnCtx(e, t)), {
                      code: se.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : a.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, u.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, u.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, u.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, u.toString(t));
        }
        setLimit(e, t, r, n) {
          return new sB({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: u.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new sB({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: u.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: u.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: u.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: u.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: u.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      sB.create = (e) => {
        var t;
        return new sB({
          checks: [],
          typeName: l.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...sy(e),
        });
      };
      class sU extends sb {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== i9.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.boolean,
                received: t.parsedType,
              }),
              su
            );
          }
          return sf(e.data);
        }
      }
      sU.create = (e) =>
        new sU({
          typeName: l.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...sy(e),
        });
      class sT extends sb {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== i9.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.date,
                received: t.parsedType,
              }),
              su
            );
          }
          if (isNaN(e.data.getTime()))
            return sa(this._getOrReturnCtx(e), { code: se.invalid_date }), su;
          let r = new so();
          for (let n of this._def.checks)
            'min' === n.kind
              ? e.data.getTime() < n.value &&
                (sa((t = this._getOrReturnCtx(e, t)), {
                  code: se.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: 'date',
                }),
                r.dirty())
              : 'max' === n.kind
                ? e.data.getTime() > n.value &&
                  (sa((t = this._getOrReturnCtx(e, t)), {
                    code: se.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: 'date',
                  }),
                  r.dirty())
                : a.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new sT({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: u.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: u.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      sT.create = (e) =>
        new sT({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: l.ZodDate,
          ...sy(e),
        });
      class sC extends sb {
        _parse(e) {
          if (this._getType(e) !== i9.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.symbol,
                received: t.parsedType,
              }),
              su
            );
          }
          return sf(e.data);
        }
      }
      sC.create = (e) => new sC({ typeName: l.ZodSymbol, ...sy(e) });
      class sN extends sb {
        _parse(e) {
          if (this._getType(e) !== i9.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.undefined,
                received: t.parsedType,
              }),
              su
            );
          }
          return sf(e.data);
        }
      }
      sN.create = (e) => new sN({ typeName: l.ZodUndefined, ...sy(e) });
      class sL extends sb {
        _parse(e) {
          if (this._getType(e) !== i9.null) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.null,
                received: t.parsedType,
              }),
              su
            );
          }
          return sf(e.data);
        }
      }
      sL.create = (e) => new sL({ typeName: l.ZodNull, ...sy(e) });
      class sZ extends sb {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return sf(e.data);
        }
      }
      sZ.create = (e) => new sZ({ typeName: l.ZodAny, ...sy(e) });
      class sR extends sb {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return sf(e.data);
        }
      }
      sR.create = (e) => new sR({ typeName: l.ZodUnknown, ...sy(e) });
      class sj extends sb {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            sa(t, {
              code: se.invalid_type,
              expected: i9.never,
              received: t.parsedType,
            }),
            su
          );
        }
      }
      sj.create = (e) => new sj({ typeName: l.ZodNever, ...sy(e) });
      class sH extends sb {
        _parse(e) {
          if (this._getType(e) !== i9.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.void,
                received: t.parsedType,
              }),
              su
            );
          }
          return sf(e.data);
        }
      }
      sH.create = (e) => new sH({ typeName: l.ZodVoid, ...sy(e) });
      class s$ extends sb {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== i9.array)
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.array,
                received: t.parsedType,
              }),
              su
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (sa(t, {
                code: e ? se.too_big : se.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (sa(t, {
                code: se.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (sa(t, {
                code: se.too_big,
                maximum: n.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                n.type._parseAsync(new sg(t, e, t.path, r)),
              ),
            ).then((e) => so.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            n.type._parseSync(new sg(t, e, t.path, r)),
          );
          return so.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new s$({
            ...this._def,
            minLength: { value: e, message: u.toString(t) },
          });
        }
        max(e, t) {
          return new s$({
            ...this._def,
            maxLength: { value: e, message: u.toString(t) },
          });
        }
        length(e, t) {
          return new s$({
            ...this._def,
            exactLength: { value: e, message: u.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      s$.create = (e, t) =>
        new s$({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: l.ZodArray,
          ...sy(t),
        });
      class sD extends sb {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = a.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== i9.object) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.object,
                received: t.parsedType,
              }),
              su
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: i } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof sj &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in r.data) i.includes(e) || s.push(e);
          let a = [];
          for (let e of i) {
            let t = n[e],
              i = r.data[e];
            a.push({
              key: { status: 'valid', value: e },
              value: t._parse(new sg(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof sj) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of s)
                a.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: r.data[e] },
                });
            else if ('strict' === e)
              s.length > 0 &&
                (sa(r, { code: se.unrecognized_keys, keys: s }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.',
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let n = r.data[t];
              a.push({
                key: { status: 'valid', value: t },
                value: e._parse(new sg(r, n, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of a) {
                    let r = await t.key;
                    e.push({
                      key: r,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => so.mergeObjectSync(t, e))
            : so.mergeObjectSync(t, a);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return new sD({
            ...this._def,
            unknownKeys: 'strict',
            ...(void 0 !== e
              ? {
                  errorMap: (t, r) => {
                    var n, i, s, a;
                    let o =
                      null !==
                        (s =
                          null === (i = (n = this._def).errorMap) ||
                          void 0 === i
                            ? void 0
                            : i.call(n, t, r).message) && void 0 !== s
                        ? s
                        : r.defaultError;
                    return 'unrecognized_keys' === t.code
                      ? {
                          message:
                            null !== (a = u.errToObj(e).message) && void 0 !== a
                              ? a
                              : o,
                        }
                      : { message: o };
                  },
                }
              : {}),
          });
        }
        strip() {
          return new sD({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new sD({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new sD({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new sD({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: l.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new sD({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            a.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new sD({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new sD({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof sD) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = s8.create(e(i));
              }
              return new sD({ ...t._def, shape: () => r });
            }
            return t instanceof s$
              ? new s$({ ...t._def, type: e(t.element) })
              : t instanceof s8
                ? s8.create(e(t.unwrap()))
                : t instanceof s4
                  ? s4.create(e(t.unwrap()))
                  : t instanceof sK
                    ? sK.create(t.items.map((t) => e(t)))
                    : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
            }),
            new sD({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof s8; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new sD({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return sX(a.objectKeys(this.shape));
        }
      }
      (sD.create = (e, t) =>
        new sD({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: sj.create(),
          typeName: l.ZodObject,
          ...sy(t),
        })),
        (sD.strictCreate = (e, t) =>
          new sD({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: sj.create(),
            typeName: l.ZodObject,
            ...sy(t),
          })),
        (sD.lazycreate = (e, t) =>
          new sD({
            shape: e,
            unknownKeys: 'strip',
            catchall: sj.create(),
            typeName: l.ZodObject,
            ...sy(t),
          }));
      class sz extends sb {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              }),
            ).then(function (e) {
              for (let t of e) if ('valid' === t.result.status) return t.result;
              for (let r of e)
                if ('dirty' === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new st(e.ctx.common.issues));
              return sa(t, { code: se.invalid_union, unionErrors: r }), su;
            });
          {
            let e;
            let n = [];
            for (let i of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = i._parseSync({ data: t.data, path: t.path, parent: r });
              if ('valid' === s.status) return s;
              'dirty' !== s.status || e || (e = { result: s, ctx: r }),
                r.common.issues.length && n.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let i = n.map((e) => new st(e));
            return sa(t, { code: se.invalid_union, unionErrors: i }), su;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      sz.create = (e, t) =>
        new sz({ options: e, typeName: l.ZodUnion, ...sy(t) });
      let sV = (e) => {
        if (e instanceof sJ) return sV(e.schema);
        if (e instanceof s3) return sV(e.innerType());
        if (e instanceof sQ) return [e.value];
        if (e instanceof s0) return e.options;
        if (e instanceof s1) return Object.keys(e.enum);
        if (e instanceof s5) return sV(e._def.innerType);
        if (e instanceof sN) return [void 0];
        else if (e instanceof sL) return [null];
        else return null;
      };
      class sq extends sb {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i9.object)
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.object,
                received: t.parsedType,
              }),
              su
            );
          let r = this.discriminator,
            n = t.data[r],
            i = this.optionsMap.get(n);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (sa(t, {
                code: se.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              su);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let n = new Map();
          for (let r of t) {
            let t = sV(r.shape[e]);
            if (!t)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let i of t) {
              if (n.has(i))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(i)}`,
                );
              n.set(i, r);
            }
          }
          return new sq({
            typeName: l.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...sy(r),
          });
        }
      }
      class sF extends sb {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (sh(e) || sh(n)) return su;
              let i = (function e(t, r) {
                let n = i7(t),
                  i = i7(r);
                if (t === r) return { valid: !0, data: t };
                if (n === i9.object && i === i9.object) {
                  let n = a.objectKeys(r),
                    i = a.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    s = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === i9.array && i === i9.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let s = e(t[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                return n === i9.date && i === i9.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, n.value);
              return i.valid
                ? ((sd(e) || sd(n)) && t.dirty(),
                  { status: t.value, value: i.data })
                : (sa(r, { code: se.invalid_intersection_types }), su);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              );
        }
      }
      sF.create = (e, t, r) =>
        new sF({ left: e, right: t, typeName: l.ZodIntersection, ...sy(r) });
      class sK extends sb {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i9.array)
            return (
              sa(r, {
                code: se.invalid_type,
                expected: i9.array,
                received: r.parsedType,
              }),
              su
            );
          if (r.data.length < this._def.items.length)
            return (
              sa(r, {
                code: se.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              su
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (sa(r, {
              code: se.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new sg(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => so.mergeArray(t, e))
            : so.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new sK({ ...this._def, rest: e });
        }
      }
      sK.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new sK({ items: e, typeName: l.ZodTuple, rest: null, ...sy(t) });
      };
      class sM extends sb {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i9.object)
            return (
              sa(r, {
                code: se.invalid_type,
                expected: i9.object,
                received: r.parsedType,
              }),
              su
            );
          let n = [],
            i = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: i._parse(new sg(r, e, r.path, e)),
              value: s._parse(new sg(r, r.data[e], r.path, e)),
            });
          return r.common.async
            ? so.mergeObjectAsync(t, n)
            : so.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new sM(
            t instanceof sb
              ? { keyType: e, valueType: t, typeName: l.ZodRecord, ...sy(r) }
              : {
                  keyType: sI.create(),
                  valueType: e,
                  typeName: l.ZodRecord,
                  ...sy(t),
                },
          );
        }
      }
      class sG extends sb {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i9.map)
            return (
              sa(r, {
                code: se.invalid_type,
                expected: i9.map,
                received: r.parsedType,
              }),
              su
            );
          let n = this._def.keyType,
            i = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], s) => ({
              key: n._parse(new sg(r, e, r.path, [s, 'key'])),
              value: i._parse(new sg(r, t, r.path, [s, 'value'])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ('aborted' === n.status || 'aborted' === i.status) return su;
                ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                  e.set(n.value, i.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of s) {
              let n = r.key,
                i = r.value;
              if ('aborted' === n.status || 'aborted' === i.status) return su;
              ('dirty' === n.status || 'dirty' === i.status) && t.dirty(),
                e.set(n.value, i.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      sG.create = (e, t, r) =>
        new sG({ valueType: t, keyType: e, typeName: l.ZodMap, ...sy(r) });
      class sW extends sb {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i9.set)
            return (
              sa(r, {
                code: se.invalid_type,
                expected: i9.set,
                received: r.parsedType,
              }),
              su
            );
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (sa(r, {
              code: se.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (sa(r, {
                code: se.too_big,
                maximum: n.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty());
          let i = this._def.valueType;
          function s(e) {
            let r = new Set();
            for (let n of e) {
              if ('aborted' === n.status) return su;
              'dirty' === n.status && t.dirty(), r.add(n.value);
            }
            return { status: t.value, value: r };
          }
          let a = [...r.data.values()].map((e, t) =>
            i._parse(new sg(r, e, r.path, t)),
          );
          return r.common.async ? Promise.all(a).then((e) => s(e)) : s(a);
        }
        min(e, t) {
          return new sW({
            ...this._def,
            minSize: { value: e, message: u.toString(t) },
          });
        }
        max(e, t) {
          return new sW({
            ...this._def,
            maxSize: { value: e, message: u.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      sW.create = (e, t) =>
        new sW({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: l.ZodSet,
          ...sy(t),
        });
      class sY extends sb {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i9.function)
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.function,
                received: t.parsedType,
              }),
              su
            );
          function r(e, r) {
            return ss({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                si(),
                sr,
              ].filter((e) => !!e),
              issueData: { code: se.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return ss({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                si(),
                sr,
              ].filter((e) => !!e),
              issueData: { code: se.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          return this._def.returns instanceof s2
            ? sf(async (...e) => {
                let t = new st([]),
                  a = await this._def.args.parseAsync(e, i).catch((n) => {
                    throw (t.addIssue(r(e, n)), t);
                  }),
                  o = await s(...a);
                return await this._def.returns._def.type
                  .parseAsync(o, i)
                  .catch((e) => {
                    throw (t.addIssue(n(o, e)), t);
                  });
              })
            : sf((...e) => {
                let t = this._def.args.safeParse(e, i);
                if (!t.success) throw new st([r(e, t.error)]);
                let a = s(...t.data),
                  o = this._def.returns.safeParse(a, i);
                if (!o.success) throw new st([n(a, o.error)]);
                return o.data;
              });
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new sY({ ...this._def, args: sK.create(e).rest(sR.create()) });
        }
        returns(e) {
          return new sY({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new sY({
            args: e || sK.create([]).rest(sR.create()),
            returns: t || sR.create(),
            typeName: l.ZodFunction,
            ...sy(r),
          });
        }
      }
      class sJ extends sb {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      sJ.create = (e, t) =>
        new sJ({ getter: e, typeName: l.ZodLazy, ...sy(t) });
      class sQ extends sb {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                received: t.data,
                code: se.invalid_literal,
                expected: this._def.value,
              }),
              su
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function sX(e, t) {
        return new s0({ values: e, typeName: l.ZodEnum, ...sy(t) });
      }
      sQ.create = (e, t) =>
        new sQ({ value: e, typeName: l.ZodLiteral, ...sy(t) });
      class s0 extends sb {
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              sa(t, {
                expected: a.joinValues(r),
                received: t.parsedType,
                code: se.invalid_type,
              }),
              su
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              sa(t, {
                received: t.data,
                code: se.invalid_enum_value,
                options: r,
              }),
              su
            );
          }
          return sf(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return s0.create(e);
        }
        exclude(e) {
          return s0.create(this.options.filter((t) => !e.includes(t)));
        }
      }
      s0.create = sX;
      class s1 extends sb {
        _parse(e) {
          let t = a.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== i9.string && r.parsedType !== i9.number) {
            let e = a.objectValues(t);
            return (
              sa(r, {
                expected: a.joinValues(e),
                received: r.parsedType,
                code: se.invalid_type,
              }),
              su
            );
          }
          if (-1 === t.indexOf(e.data)) {
            let e = a.objectValues(t);
            return (
              sa(r, {
                received: r.data,
                code: se.invalid_enum_value,
                options: e,
              }),
              su
            );
          }
          return sf(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      s1.create = (e, t) =>
        new s1({ values: e, typeName: l.ZodNativeEnum, ...sy(t) });
      class s2 extends sb {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== i9.promise && !1 === t.common.async
            ? (sa(t, {
                code: se.invalid_type,
                expected: i9.promise,
                received: t.parsedType,
              }),
              su)
            : sf(
                (t.parsedType === i9.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  }),
                ),
              );
        }
      }
      s2.create = (e, t) =>
        new s2({ type: e, typeName: l.ZodPromise, ...sy(t) });
      class s3 extends sb {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === l.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null;
          if ('preprocess' === n.type) {
            let e = n.transform(r.data);
            return r.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r,
                  }),
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
          }
          let i = {
            addIssue: (e) => {
              sa(r, e), e.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return r.path;
            },
          };
          if (((i.addIssue = i.addIssue.bind(i)), 'refinement' === n.type)) {
            let e = (e) => {
              let t = n.refinement(e, i);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  'aborted' === r.status
                    ? su
                    : ('dirty' === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      }))),
                );
            {
              let n = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === n.status
                ? su
                : ('dirty' === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
          }
          if ('transform' === n.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  sc(e)
                    ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e,
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!sc(e)) return e;
              let s = n.transform(e.value, i);
              if (s instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: s };
            }
          }
          a.assertNever(n);
        }
      }
      (s3.create = (e, t, r) =>
        new s3({ schema: e, typeName: l.ZodEffects, effect: t, ...sy(r) })),
        (s3.createWithPreprocess = (e, t, r) =>
          new s3({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: l.ZodEffects,
            ...sy(r),
          }));
      class s8 extends sb {
        _parse(e) {
          return this._getType(e) === i9.undefined
            ? sf(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      s8.create = (e, t) =>
        new s8({ innerType: e, typeName: l.ZodOptional, ...sy(t) });
      class s4 extends sb {
        _parse(e) {
          return this._getType(e) === i9.null
            ? sf(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      s4.create = (e, t) =>
        new s4({ innerType: e, typeName: l.ZodNullable, ...sy(t) });
      class s5 extends sb {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === i9.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      s5.create = (e, t) =>
        new s5({
          innerType: e,
          typeName: l.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...sy(t),
        });
      class s6 extends sb {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return sp(n)
            ? n.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new st(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new st(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      s6.create = (e, t) =>
        new s6({
          innerType: e,
          typeName: l.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...sy(t),
        });
      class s9 extends sb {
        _parse(e) {
          if (this._getType(e) !== i9.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              sa(t, {
                code: se.invalid_type,
                expected: i9.nan,
                received: t.parsedType,
              }),
              su
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      s9.create = (e) => new s9({ typeName: l.ZodNaN, ...sy(e) });
      let s7 = Symbol('zod_brand');
      class ae extends sb {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class at extends sb {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return 'aborted' === e.status
                ? su
                : 'dirty' === e.status
                  ? (t.dirty(), sl(e.value))
                  : this._def.out._parseAsync({
                      data: e.value,
                      path: r.path,
                      parent: r,
                    });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return 'aborted' === e.status
              ? su
              : 'dirty' === e.status
                ? (t.dirty(), { status: 'dirty', value: e.value })
                : this._def.out._parseSync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
          }
        }
        static create(e, t) {
          return new at({ in: e, out: t, typeName: l.ZodPipeline });
        }
      }
      let ar = (e, t = {}, r) =>
          e
            ? sZ.create().superRefine((n, i) => {
                var s, a;
                if (!e(n)) {
                  let e =
                      'function' == typeof t
                        ? t(n)
                        : 'string' == typeof t
                          ? { message: t }
                          : t,
                    o =
                      null ===
                        (a = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                      void 0 === a ||
                      a;
                  i.addIssue({
                    code: 'custom',
                    ...('string' == typeof e ? { message: e } : e),
                    fatal: o,
                  });
                }
              })
            : sZ.create(),
        an = { object: sD.lazycreate };
      ((s = l || (l = {})).ZodString = 'ZodString'),
        (s.ZodNumber = 'ZodNumber'),
        (s.ZodNaN = 'ZodNaN'),
        (s.ZodBigInt = 'ZodBigInt'),
        (s.ZodBoolean = 'ZodBoolean'),
        (s.ZodDate = 'ZodDate'),
        (s.ZodSymbol = 'ZodSymbol'),
        (s.ZodUndefined = 'ZodUndefined'),
        (s.ZodNull = 'ZodNull'),
        (s.ZodAny = 'ZodAny'),
        (s.ZodUnknown = 'ZodUnknown'),
        (s.ZodNever = 'ZodNever'),
        (s.ZodVoid = 'ZodVoid'),
        (s.ZodArray = 'ZodArray'),
        (s.ZodObject = 'ZodObject'),
        (s.ZodUnion = 'ZodUnion'),
        (s.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (s.ZodIntersection = 'ZodIntersection'),
        (s.ZodTuple = 'ZodTuple'),
        (s.ZodRecord = 'ZodRecord'),
        (s.ZodMap = 'ZodMap'),
        (s.ZodSet = 'ZodSet'),
        (s.ZodFunction = 'ZodFunction'),
        (s.ZodLazy = 'ZodLazy'),
        (s.ZodLiteral = 'ZodLiteral'),
        (s.ZodEnum = 'ZodEnum'),
        (s.ZodEffects = 'ZodEffects'),
        (s.ZodNativeEnum = 'ZodNativeEnum'),
        (s.ZodOptional = 'ZodOptional'),
        (s.ZodNullable = 'ZodNullable'),
        (s.ZodDefault = 'ZodDefault'),
        (s.ZodCatch = 'ZodCatch'),
        (s.ZodPromise = 'ZodPromise'),
        (s.ZodBranded = 'ZodBranded'),
        (s.ZodPipeline = 'ZodPipeline');
      let ai = sI.create,
        as = sP.create,
        aa = s9.create,
        ao = sB.create,
        au = sU.create,
        al = sT.create,
        af = sC.create,
        ah = sN.create,
        ad = sL.create,
        ac = sZ.create,
        ap = sR.create,
        ag = sj.create,
        am = sH.create,
        ay = s$.create,
        ab = sD.create,
        av = sD.strictCreate,
        aw = sz.create,
        a_ = sq.create,
        ax = sF.create,
        aE = sK.create,
        aS = sM.create,
        aO = sG.create,
        aA = sW.create,
        ak = sY.create,
        aI = sJ.create,
        aP = sQ.create,
        aB = s0.create,
        aU = s1.create,
        aT = s2.create,
        aC = s3.create,
        aN = s8.create,
        aL = s4.create,
        aZ = s3.createWithPreprocess,
        aR = at.create;
      var aj = Object.freeze({
        __proto__: null,
        defaultErrorMap: sr,
        setErrorMap: function (e) {
          sn = e;
        },
        getErrorMap: si,
        makeIssue: ss,
        EMPTY_PATH: [],
        addIssueToContext: sa,
        ParseStatus: so,
        INVALID: su,
        DIRTY: sl,
        OK: sf,
        isAborted: sh,
        isDirty: sd,
        isValid: sc,
        isAsync: sp,
        get util() {
          return a;
        },
        get objectUtil() {
          return o;
        },
        ZodParsedType: i9,
        getParsedType: i7,
        ZodType: sb,
        ZodString: sI,
        ZodNumber: sP,
        ZodBigInt: sB,
        ZodBoolean: sU,
        ZodDate: sT,
        ZodSymbol: sC,
        ZodUndefined: sN,
        ZodNull: sL,
        ZodAny: sZ,
        ZodUnknown: sR,
        ZodNever: sj,
        ZodVoid: sH,
        ZodArray: s$,
        ZodObject: sD,
        ZodUnion: sz,
        ZodDiscriminatedUnion: sq,
        ZodIntersection: sF,
        ZodTuple: sK,
        ZodRecord: sM,
        ZodMap: sG,
        ZodSet: sW,
        ZodFunction: sY,
        ZodLazy: sJ,
        ZodLiteral: sQ,
        ZodEnum: s0,
        ZodNativeEnum: s1,
        ZodPromise: s2,
        ZodEffects: s3,
        ZodTransformer: s3,
        ZodOptional: s8,
        ZodNullable: s4,
        ZodDefault: s5,
        ZodCatch: s6,
        ZodNaN: s9,
        BRAND: s7,
        ZodBranded: ae,
        ZodPipeline: at,
        custom: ar,
        Schema: sb,
        ZodSchema: sb,
        late: an,
        get ZodFirstPartyTypeKind() {
          return l;
        },
        coerce: {
          string: (e) => sI.create({ ...e, coerce: !0 }),
          number: (e) => sP.create({ ...e, coerce: !0 }),
          boolean: (e) => sU.create({ ...e, coerce: !0 }),
          bigint: (e) => sB.create({ ...e, coerce: !0 }),
          date: (e) => sT.create({ ...e, coerce: !0 }),
        },
        any: ac,
        array: ay,
        bigint: ao,
        boolean: au,
        date: al,
        discriminatedUnion: a_,
        effect: aC,
        enum: aB,
        function: ak,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
          ar((t) => t instanceof e, t),
        intersection: ax,
        lazy: aI,
        literal: aP,
        map: aO,
        nan: aa,
        nativeEnum: aU,
        never: ag,
        null: ad,
        nullable: aL,
        number: as,
        object: ab,
        oboolean: () => au().optional(),
        onumber: () => as().optional(),
        optional: aN,
        ostring: () => ai().optional(),
        pipeline: aR,
        preprocess: aZ,
        promise: aT,
        record: aS,
        set: aA,
        strictObject: av,
        string: ai,
        symbol: af,
        transformer: aC,
        tuple: aE,
        undefined: ah,
        union: aw,
        unknown: ap,
        void: am,
        NEVER: su,
        ZodIssueCode: se,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
        ZodError: st,
      });
      let aH = aj.string().regex(/^[a-fA-F0-9]$/),
        a$ = aj.string().regex(/^[a-fA-F0-9]{64}$/),
        aD = aj.number().min(0).max(4294967295),
        az = aj.bigint(),
        aV = aj.instanceof(Uint8Array),
        aq = aj.union([aH, aD, aj.string(), aV]).array(),
        aF = aj.union([aq, aH, aV]),
        aK = aj.array(aF),
        aM = aj.object({ value: aj.union([aD, az]), scriptPubKey: aF }),
        aG = aj.object({
          txid: a$,
          vout: aD,
          scriptSig: aF,
          sequence: aD,
          prevout: aM.optional(),
          witness: aK,
        });
      aj.object({
        version: aD,
        vin: aj.array(aG),
        vout: aj.array(aM),
        locktime: aD,
      });
    },
  },
]);
