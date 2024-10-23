(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3415],
  {
    13773: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 34301));
    },
    34301: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return ts;
          },
        });
      var i = s(57437),
        l = s(55528),
        n = s(41733),
        a = s(72354),
        r = s(55448),
        o = s(2265),
        c = s(22671),
        d = s(44570),
        u = s(62121),
        m = s(10847),
        x = s(1271),
        h = s(24842),
        p = s(27517),
        f = s(52975),
        v = s(77497),
        g = s(96584),
        y = s(14498),
        j = s(46002),
        b = s(37342),
        N = s(34458),
        k = s(65647),
        w = s(65703);
      let S = s(75683),
        _ = (e) => {
          let t = JSON.stringify(
            e.map((e) => ({ start: e.start, size: e.size })),
          );
          try {
            let e = new TextEncoder().encode(t),
              s = S.createHash('sha256');
            return s.update(e), s.digest('hex').slice(0, 16);
          } catch (e) {
            return console.error('json.Marshal failed. ' + e), '0';
          }
        },
        M = (e, t, s) => {
          let i = (0, b.$H)(e.map((e) => e.sats)),
            l = [],
            n = [],
            a = 0;
          for (let e = 0; e < i.length; e++) {
            let { size: r, start: o } = i[e];
            if ((console.log(o, r), (a += r) > t && n.length < s)) {
              let e = a - t,
                i = r - e;
              if (
                (console.log(e, i),
                l.push({ start: o, size: i }),
                n.push(l),
                e < t)
              )
                (l = [{ start: o + i, size: e }]), (a = e);
              else {
                let r = Math.floor(e / t),
                  c = e % t;
                for (let e = 0; e < r; e++)
                  n.length < s && n.push([{ start: o + i + e * t, size: t }]);
                c > 0 &&
                  n.length < s &&
                  ((l = [{ start: o + i + r * t, size: c }]), (a = c));
              }
            } else n.length < s && l.push({ start: o, size: r });
          }
          return n;
        },
        I = (e, t) => {
          let s = (0, b.$H)(e.map((e) => e.sats)),
            i = [],
            l = [],
            n = 0;
          for (let e = 0; e < s.length; e++) {
            let a = s[e];
            console.log('index', e);
            let { size: r, start: o, offset: c } = a;
            if ((n += r) > t) {
              let e = n - t,
                s = r - e;
              if ((i.push({ start: o, size: s, offset: c }), l.push(i), e < t))
                (i = [{ start: o + s, size: e, offset: c + s }]), (n = e);
              else {
                let a = Math.floor(e / t),
                  r = e % t;
                for (let e = 0; e < a; e++)
                  l.push([
                    { start: o + s + e * t, size: t, offset: c + s + e * t },
                  ]),
                    (i = []),
                    (n = 0);
                r > 0 &&
                  (console.log(o),
                  console.log(o + s + a * t),
                  (i = [
                    { start: o + s + a * t, size: r, offset: c + s + a * t },
                  ]),
                  (n = r));
              }
            } else i.push({ start: o, size: r, offset: c });
          }
          return i.length > 0 && l.push(i), l;
        },
        C = async (e) => {
          let t = [];
          for (let s = 0; s < e.length; s++) {
            let i = e[s],
              l = {
                type: i.type,
                action: i.action,
                runeId: i.runeId,
                runeName: i.runeName,
                amount: i.amount,
                show: ''.concat(i.runeName, ' (').concat(i.amount, ')'),
              };
            t.push(l);
          }
          return t;
        },
        P = async (e) => {
          let t = [];
          for (let i = 0; i < e.length; i++) {
            let {
                type: l,
                value: n,
                name: a,
                ordxType: r,
                utxos: o,
                isSpecial: c,
                amount: d,
                offset: u,
              } = e[i],
              m = {
                type: l,
                name: a,
                originValue: n,
                ordxType: r,
                isSpecial: c,
                amount: d,
                offset: u,
                utxos: o,
              };
            if ('text' === l) {
              let e = null == n ? void 0 : n.trim();
              (m.mimetype = 'text/plain;charset=utf-8'),
                (m.show = e),
                (m.hex = U(e)),
                (m.sha256 = '');
            } else if ('brc20' === l)
              (m.mimetype = 'text/plain;charset=utf-8'),
                (m.show = n),
                (m.hex = U(n)),
                (m.sha256 = '');
            else if ('ordx_name' === l) {
              m.mimetype = 'text/plain;charset=utf-8';
              try {
                let e = JSON.parse(n);
                m.show = e.name || n;
              } catch (e) {
                m.show = n;
              }
              (m.hex = U(n)), (m.sha256 = '');
            } else if ('ordx' === l) {
              if (
                ((m.mimetype = 'text/plain;charset=utf-8'),
                (m.show = n[0]),
                (m.originValue = n[0]),
                (m.hex = U(n[0])),
                n.length > 1)
              ) {
                let e = n.find((e) => 'file' === e.type);
                'mint' === r
                  ? ((m.parent = null == e ? void 0 : e.value),
                    (m.parentHex = U(null == e ? void 0 : e.value)),
                    (m.parentMimeType = null == e ? void 0 : e.mimeType))
                  : ((m.fileHex = null == e ? void 0 : e.value),
                    (m.fileMimeType = null == e ? void 0 : e.mimeType),
                    (m.fileName = null == e ? void 0 : e.name),
                    (m.show += ';'.concat(null == e ? void 0 : e.name)));
                let t = n.find((e) => 'relateInscriptionId' === e.type);
                t && (m.relateInscriptionId = t.value);
              }
              m.sha256 = '';
              let e = JSON.parse(n[0]);
              (m.amt = Number(e.amt)), (m.op = e.op);
            } else if ('file' === l) {
              var s;
              let e = null === (s = n.type) || void 0 === s ? void 0 : s.trim();
              e.includes('text/plain') && (e += ';charset=utf-8');
              let t = await K(n),
                i = Y(t.substring(t.indexOf('base64,') + 7));
              (m.mimetype = e), (m.show = a);
              let l = await V(n);
              (m.sha256 = l.replace('0x', '')), (m.hex = i);
            }
            let x = Math.floor(23 + G(m.hex).length / 4);
            'ordx' === l && 'deploy' === r && m.fileHex
              ? (x += Math.floor(G(m.fileHex).length / 4))
              : 'ordx' === l &&
                'mint' === r &&
                m.parentHex &&
                (x += Math.floor(G(m.parentHex).length / 4)),
              (m.txsize = x),
              t.push(m);
          }
          return t;
        },
        A = (e, t, s) => {
          let i = N.XP.get_seckey(e),
            l = N.XP.get_pubkey(i, !0),
            n = new TextEncoder(),
            a = [];
          if ('ordx' === s.type && 'deploy' === s.ordxType && s.hasDeployFile)
            t.forEach((e) => {
              let t = G(e.fileHex),
                s = n.encode(e.fileMimeType),
                i = g.encode(JSON.parse(e.originValue));
              a.push(
                'OP_0',
                'OP_IF',
                n.encode('ord'),
                '01',
                s,
                '07',
                n.encode('ordx'),
                '05',
                i,
                'OP_0',
                t,
                'OP_ENDIF',
              );
            });
          else if ('ordx' === s.type && 'mint' === s.ordxType)
            t.forEach((e, t) => {
              let s = G(e.hex),
                i = n.encode(e.mimetype);
              if (e.parent) {
                let t = n.encode(e.parentMimeType),
                  s = G(e.parentHex),
                  i = g.encode(JSON.parse(e.originValue)),
                  l = e.offset || 0;
                a.push('OP_0', 'OP_IF', n.encode('ord'), '01', t),
                  l > 0 && a.push('02', Z(l)),
                  a.push(
                    '07',
                    n.encode('ordx'),
                    '05',
                    i,
                    'OP_0',
                    s,
                    'OP_ENDIF',
                  );
              } else if (e.relateInscriptionId) {
                let s = e.offset || 0,
                  i = H(e.relateInscriptionId),
                  l = JSON.parse(e.originValue),
                  r = g.encode(l);
                a.push('OP_0', 'OP_IF', n.encode('ord')),
                  s > 0 &&
                    ('28a' === Z(s) && console.log(t), a.push('02', Z(s))),
                  a.push('07', n.encode('ordx'), '05', r, '0B', i, 'OP_ENDIF');
              } else {
                let t = (null == e ? void 0 : e.offset) || 0;
                a.push('OP_0', 'OP_IF', n.encode('ord'), '01', i),
                  t > 0 && a.push('02', Z(t)),
                  a.push('OP_0', s, 'OP_ENDIF');
              }
            });
          else if ('blog' === s.type) {
            let e = t[0],
              i = H(s.relateInscriptionId),
              l = e.offset || 0,
              r = g.encode(s.blogMetadata);
            a.push('OP_0', 'OP_IF', n.encode('ord')),
              l > 0 && a.push('02', Z(l)),
              a.push('07', n.encode('sns'), '05', r, '0B', i, 'OP_ENDIF');
          } else
            t.forEach((e) => {
              let t = G(e.hex),
                s = n.encode(e.mimetype),
                i = e.offset || 0;
              a.push('OP_0', 'OP_IF', n.encode('ord'), '01', s),
                i > 0 && a.push('02', Z(i)),
                a.push('OP_0', t, 'OP_ENDIF');
            });
          return console.log('script', (a = [l, 'OP_CHECKSIG', ...a])), a;
        },
        O = (e) => {
          let { files: t, secret: s, network: i = 'main', metadata: l } = e,
            n = N.XP.get_seckey(s),
            a = N.XP.get_pubkey(n, !0),
            r = A(s, t, l),
            o = v.Uw.encodeScript(r),
            [c, d] = v.Uw.getPubKey(a, { target: o });
          console.log('leaf:', v.Xf.encode(r));
          let u = v.kL.p2tr.fromPubKey(c, i);
          return (
            console.log('network:', i),
            console.log('Inscription address: ', u),
            console.log('Tapkey:', c),
            {
              leaf: o,
              tapkey: c,
              cblock: d,
              inscriptionAddress: u,
              txsize: 97 + v.Xf.encode(r).length,
              status: 'pending',
              txid: '',
            }
          );
        },
        z = async (e) => {
          let {
              inscription: t,
              network: s,
              txid: i,
              vout: l,
              amount: n,
              feeRate: a,
              networkFee: r,
              fromAddress: o,
              secret: c,
              files: d,
              metadata: u,
            } = e,
            m = N.XP.get_seckey(c),
            x = N.XP.get_pubkey(m, !0),
            { cblock: h, tapkey: p, leaf: f } = t,
            g = [
              {
                value: Math.floor(n - r + (34 * d.length - 1) * a),
                scriptPubKey: v.kL.toScriptPubKey(o),
              },
            ],
            y = v.Tx.create({
              vin: [
                {
                  txid: i,
                  vout: l,
                  prevout: { value: n, scriptPubKey: ['OP_1', p] },
                },
              ],
              vout: g,
            }),
            j = v.Ep.taproot.sign(m, y, 0, { extension: f }),
            b = A(c, d, u);
          return (
            (y.vin[0].witness = [j, b, h]),
            console.log('Your txhex:', y),
            console.log(
              'isValid',
              v.Ep.taproot.verify(y, 0, { pubkey: x, throws: !0 }),
            ),
            console.log('Your txhex:', v.Tx.encode(y).hex),
            await w.lI.pushTx({ hex: v.Tx.encode(y).hex, network: s })
          );
        },
        E = async (e) => {
          let {
              inscription: t,
              network: s,
              txid: i,
              vout: l,
              amount: n,
              oneUtxo: a,
              tight: r,
              toAddresses: o,
              secret: c,
              files: d,
              metadata: u,
            } = e,
            m = N.XP.get_seckey(c),
            x = N.XP.get_pubkey(m, !0),
            { cblock: h, tapkey: p, leaf: f } = t,
            g = d.map((e, t) => {
              let s = (null == o ? void 0 : o.length) === 1 ? o[0] : o[t];
              return { value: e.amount, scriptPubKey: v.kL.toScriptPubKey(s) };
            }),
            y = d.reduce((e, t) => e + t.amount, 0);
          (a || r) &&
            (g = [
              {
                value: Math.max(330, y),
                scriptPubKey: v.kL.toScriptPubKey(o[0]),
              },
            ]);
          let j = v.Tx.create({
            vin: [
              {
                txid: i,
                vout: l,
                prevout: { value: n, scriptPubKey: ['OP_1', p] },
              },
            ],
            vout: g,
          });
          console.log('Your txhex:', j);
          let b = v.Ep.taproot.sign(m, j, 0, { extension: f }),
            k = A(c, d, u);
          return (
            (j.vin[0].witness = [b, k, h]),
            console.log('Your txhex:', j),
            console.log(
              'isValid',
              v.Ep.taproot.verify(j, 0, { pubkey: x, throws: !0 }),
            ),
            console.log('Your txhex:', v.Tx.encode(j).hex),
            await w.lI.pushTx({ hex: v.Tx.encode(j).hex, network: s })
          );
        },
        F = async (e) => {
          let {
            utxos: t,
            outputs: s,
            address: i,
            feeRate: l,
            network: n,
            publicKey: a,
          } = e;
          return (
            console.log('outputs', s),
            await (0, y.cq)({
              utxos: t,
              outputs: s,
              feeRate: l,
              network: n,
              address: i,
              publicKey: a,
              suitable: !0,
            })
          );
        },
        T = async (e, t) => {
          let { add: s, removeUtxos: i } = k.YL.getState();
          console.log('psbt', e), console.log(e.toHex());
          let l = await (0, j.hw)(e);
          return (
            e.txOutputs.length > 1 &&
              e.txOutputs.slice(1).forEach((e, i) => {
                e.address === t &&
                  s({
                    utxo: ''.concat(l, ':').concat(i + 1),
                    value: e.value,
                    status: 'unspend',
                    location: 'local',
                    sort: 1,
                    txid: l,
                    vout: i + 1,
                  });
              }),
            l
          );
        };
      var L = s(83912),
        R = s(9109).Buffer;
      function Z(e) {
        let t = new ArrayBuffer(4);
        new DataView(t).setUint32(0, e, !0);
        let s = Array.from(new Uint8Array(t))
          .map((e) => e.toString(16).padStart(2, '0'))
          .join('');
        return (s = s.replace(/0+$/, '')).length % 2 != 0 && (s += '0'), s;
      }
      function H(e) {
        var t;
        let s =
          null === (t = e.split('i0')[0].match(/.{2}/g)) || void 0 === t
            ? void 0
            : t.reverse().map((e) => parseInt(e, 16));
        return null == s
          ? void 0
          : s.map((e) => e.toString(16).padStart(2, '0')).join('');
      }
      function D(e) {
        let t = { ...e };
        return (
          Object.keys(t).forEach((e) => {
            ('' === t[e] ||
              void 0 === t[e] ||
              null === t[e] ||
              'null' === t[e] ||
              'undefined' === t[e] ||
              'NaN' === t[e] ||
              (isNaN(t[e]) && 'number' == typeof t[e])) &&
              delete t[e];
          }),
          t
        );
      }
      function U(e) {
        return [...new Uint8Array(new TextEncoder().encode(e))]
          .map((e) => e.toString(16).padStart(2, '0'))
          .join('');
      }
      function K(e) {
        return new Promise(function (t) {
          let s = new FileReader();
          (s.onloadend = function () {
            var e;
            t(
              null == s
                ? void 0
                : null === (e = s.result) || void 0 === e
                  ? void 0
                  : e.toString(),
            );
          }),
            s.readAsDataURL(e);
        });
      }
      async function $(e) {
        return window.crypto.subtle.digest('SHA-256', e);
      }
      async function V(e) {
        let t = await new Promise((t) => {
            let s = new FileReader();
            s.addEventListener('load', () => {
              t(s.result);
            }),
              s.readAsArrayBuffer(e);
          }),
          s = await $(
            (function (e) {
              let t = new R(e.byteLength),
                s = new Uint8Array(e);
              for (let e = 0; e < t.length; ++e) t[e] = s[e];
              return t;
            })(t),
          );
        return (
          '0x' +
          [...new Uint8Array(s)]
            .map((e) => e.toString(16).padStart(2, '0'))
            .join('')
        );
      }
      function Y(e) {
        let t = atob(e),
          s = '';
        for (let e = 0; e < t.length; e++) {
          let i = t.charCodeAt(e).toString(16);
          s += 2 === i.length ? i : '0' + i;
        }
        return s.toLowerCase();
      }
      function G(e) {
        return Uint8Array.from(e.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
      }
      function J(e) {
        return G(U(e)).length;
      }
      var X = s(90089),
        B = s(18182),
        q = s(66496),
        W = s(29629),
        Q = s(9139),
        ee = s(964),
        et = s(93908),
        es = s(64757),
        ei = s(71272),
        el = s(7337),
        en = s(19355),
        ea = s(69077);
      let er = (e) => {
        let { utxos: t, onChange: s } = e,
          [l, n] = (0, o.useState)(new Set([])),
          c = () => {
            var e;
            let i =
              null === (e = Array.from(l.values())) || void 0 === e
                ? void 0
                : e[0];
            if (i) {
              let e = t.find((e) => e.utxo === i);
              e && (null == s || s(e));
            }
          };
        return (
          (0, o.useEffect)(() => {
            c();
          }, [l]),
          (0, i.jsx)(a.w, {
            shadow: 'none',
            children: (0, i.jsx)(r.G, {
              children: (0, i.jsxs)(q.b, {
                'aria-label': 'Select Utoxs',
                selectionMode: 'single',
                color: 'primary',
                selectedKeys: l,
                onSelectionChange: (e) => {
                  var s, i;
                  let a =
                    null === (s = Array.from(l.values())) || void 0 === s
                      ? void 0
                      : s[0];
                  if (a) {
                    let e = t.find((e) => e.utxo === a);
                    if (
                      ((null == e
                        ? void 0
                        : null === (i = e.sats) || void 0 === i
                          ? void 0
                          : i[0].offset) || 0) >= 546
                    )
                      return;
                  }
                  n(e);
                },
                children: [
                  (0, i.jsx)(W.J, {
                    columns: [
                      { key: 'radio', label: '' },
                      { key: 'utxo', label: 'UTXO' },
                      { key: 'value', label: 'Sats' },
                      { key: 'sats', label: 'Rare Sats' },
                      { key: 'offset', label: 'Offset' },
                      { key: 'type', label: 'Type' },
                    ],
                    children: (e) =>
                      (0, i.jsx)(Q.j, { children: e.label }, e.key),
                  }),
                  (0, i.jsx)(ee.y, {
                    children: t.map((e) =>
                      (0, i.jsx)(
                        et.g,
                        {
                          children: (t) => {
                            let s = (0, es.sF)(e, t);
                            if ('radio' === t)
                              return (0, i.jsx)(ei.X, {
                                children: (0, i.jsx)(en.JO, {
                                  icon: l.has(e.utxo)
                                    ? 'solar:check-circle-bold-duotone'
                                    : 'solar:record-line-duotone',
                                  className: 'text-xl',
                                }),
                              });
                            if ('utxo' === t)
                              return (0, i.jsx)(ei.X, {
                                children: (0, i.jsx)(el.Z, {
                                  codeString: s,
                                  className: 'bg-transparent text-inherit',
                                  symbol: '',
                                  size: 'lg',
                                  variant: 'flat',
                                  children: (0, i.jsx)('span', {
                                    className: 'font-thin',
                                    children: (0, ea.NH)(s, 6),
                                  }),
                                }),
                              });
                            if ('sats' === t) {
                              let e = 0;
                              return (
                                void 0 !== s &&
                                  (e = s.reduce((e, t) => e + t.size, 0)),
                                (0, i.jsx)(ei.X, { children: e })
                              );
                            }
                            {
                              if ('offset' !== t)
                                return (0, i.jsx)(ei.X, { children: s });
                              let l = 0;
                              return (
                                e.sats && (l = e.sats[0].offset),
                                (0, i.jsx)(ei.X, { children: l })
                              );
                            }
                          },
                        },
                        e.utxo,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          })
        );
      };
      var eo = s(16463);
      let ec = (e) => {
        var t;
        let { onNext: s, onChange: l } = e,
          a = (0, eo.useSearchParams)().get('ticker') || '',
          { address: r, network: c, connected: d } = (0, h.$)(),
          { btcHeight: v } = (0, k.Ee)((e) => e),
          { t: g } = (0, X.$G)(),
          { selectUtxosByAmount: y } = (0, k.YL)(),
          [j, { set: N }] = (0, f.Z)({
            type: 'mint',
            mode: 'fair',
            tick: a,
            amount: 1,
            limit: 0,
            repeatMint: 1,
            relateInscriptionId: '',
            utxos: [],
          }),
          [S, _] = (0, o.useState)(!1),
          [M, I] = (0, o.useState)(!1),
          [C, P] = (0, o.useState)(!1),
          [A, O] = (0, o.useState)(''),
          [z, E] = (0, o.useState)(''),
          [F, T] = (0, o.useState)(!1),
          [L, R] = (0, o.useState)(!1),
          [Z, H] = (0, o.useState)(!1),
          [D, U] = (0, o.useState)([]),
          K = async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            T(!0);
            let [s, i] = await (0, B.vU)(w.lI.getOrdxInfo)({
                tick: e,
                network: c,
              }),
              [l, n] = await (0, B.vU)(w.lI.getTickerPermission)({
                ticker: e,
                network: c,
                address: r,
              });
            if (s || l)
              throw (
                (x.ZP.error({ message: g('notification.system_error') }),
                T(!1),
                s)
              );
            _(!0);
            let {
                ticker: a,
                limit: o = 0,
                max: d = 0,
                contenttype: u,
                rarity: m,
                selfmint: h = 0,
              } = i.data || {},
              p = [];
            if (a) {
              N('limit', o);
              let { amount: e = 0 } = n.data || {},
                s = o;
              d > 0 && (s = (0, b.VV)([s, d, e])),
                N('rarity', m),
                N('mintRarity', m);
              let i = 'unknow' !== m && 'common' !== m && !!m;
              if (
                (N('isSpecial', i),
                console.log('amount', s),
                t && N('amount', s),
                i)
              ) {
                var f;
                let [t, s] = await (0, B.vU)(w.lI.getUtxoByType)({
                  address: r,
                  type: m,
                  amount: e,
                  network: c,
                });
                if (t)
                  throw (
                    (x.ZP.error({ message: g('notification.system_error') }), t)
                  );
                p =
                  (null === (f = s.data) || void 0 === f
                    ? void 0
                    : f.map((e) => {
                        var t;
                        return {
                          ...e,
                          amount:
                            null === (t = e.sats) || void 0 === t
                              ? void 0
                              : t.reduce((e, t) => e + t.size, 0),
                        };
                      })) || [];
              }
              U(p);
            }
            return T(!1), [i.data, n.data, p];
          },
          $ = () => {
            let e = j.tick.replace(/[^\w\u4e00-\u9fa5]/g, '');
            return N('tick', e), e;
          },
          V = async () => {
            let e = $();
            if (!e) return !1;
            let t = J(e);
            if (t < 3 || 4 == t || t > 32)
              return E(g('pages.inscribe.ordx.error_1')), !1;
            try {
              var s, i;
              let t;
              R(!0);
              let [l, n, a] = await K(e);
              if (!l)
                return (
                  E(g('pages.inscribe.ordx.error_4', { tick: j.tick })), !1
                );
              let {
                  rarity: r,
                  startBlock: o,
                  endBlock: d,
                  limit: u,
                  contenttype: m,
                  inscriptionId: x,
                  max: h,
                  totalMinted: p,
                  delegate: f,
                  selfmint: k,
                } = l || {},
                S = (null == n ? void 0 : n.amount) || 0,
                _ = 'unknow' !== r && 'common' !== r && !!r,
                M = u || 0;
              h > 0 && ((t = (0, b.VV)([h, S])), (M = (0, b.VV)([M, h, S]))),
                R(!1);
              let I = 'Completed';
              if (
                (!_ && o < 0
                  ? h > 0 && p < h
                    ? (I = 'Minting')
                    : h < 0 && (I = 'Minting')
                  : _ && o < 0
                    ? h > 0
                      ? k > 0
                        ? (I = S > 0 ? 'Minting' : 'Project')
                        : p < h && (I = 'Minting')
                      : (I = 'Minting')
                    : o && d && v <= d && v >= o
                      ? h > 0
                        ? k > 0
                          ? (I = S > 0 ? 'Minting' : 'Project')
                          : p < h && (I = 'Minting')
                        : (I = 'Minting')
                      : (I = v < o ? 'Pending' : 'Completed'),
                console.log('status', I),
                _ && !a.length)
              )
                return E(''.concat(r, '类型的特殊聪数量不够')), !1;
              if ('Pending' === I)
                return (
                  E(g('pages.inscribe.ordx.error_6', { tick: j.tick })), !1
                );
              if ('Project' === I)
                return (
                  E(g('pages.inscribe.ordx.error_17', { tick: j.tick })), !1
                );
              if ('Completed' === I)
                return (
                  E(g('pages.inscribe.ordx.error_7', { tick: j.tick })), !1
                );
              if (j.amount > M)
                return E(g('pages.inscribe.ordx.error_5', { limit: M })), !1;
              if (void 0 !== t && Math.ceil(j.amount * j.repeatMint) > t)
                return E(g('pages.inscribe.ordx.error_5', { limit: t })), !1;
              if (
                _ &&
                Math.ceil(
                  ((null === (i = j.utxos) || void 0 === i
                    ? void 0
                    : null === (s = i[0]) || void 0 === s
                      ? void 0
                      : s.amount) || 0) / j.amount,
                ) > j.repeatMint
              )
                return E(g('pages.inscribe.ordx.error_19')), !1;
              if (
                (O(m),
                ('text/html' === m || f) &&
                  (N('relateInscriptionId', f || x), !_))
              ) {
                let e = Math.max(j.amount, 330) * j.repeatMint,
                  t = y(e);
                console.log('utxos', t);
                let s = t.reduce((e, t) => e + t.value, 0);
                if (!t.length || s < e)
                  return E(g('pages.inscribe.ordx.error_18')), !1;
                let i = await Promise.all(
                  t.map((e) => w.lI.exoticUtxo({ utxo: e.utxo, network: c })),
                );
                (i = i.map((e, s) => ({ ...e.data, ...t[s] }))), N('utxos', i);
              }
              return !0;
            } catch (e) {
              return R(!1), console.log('error', e), !1;
            }
          },
          Y = async () => {
            E(''), Z ? (T(!0), T(!1), null == s || s()) : H(await V());
          },
          G = async () => {
            let e = $();
            d && e && (P(!1), await K(e, !0), P(!0));
          },
          q = async (e) => {
            U([]),
              H(!1),
              E(''),
              P(!1),
              N('amount', 1),
              N('repeatMint', 1),
              N('relateInscriptionId', ''),
              N('utxos', []),
              N('tick', e.trim());
          },
          W = (0, o.useMemo)(() => !j.tick || !C, [j, C]),
          Q = (e) => {
            let t = isNaN(Number(e)) ? 0 : Number(e);
            console.log('amount', t),
              console.log('data.limit', j.limit),
              N('amount', Math.min(t, j.limit)),
              N('repeatMint', 1),
              H(!1);
          },
          ee = (0, o.useMemo)(() => 1e3, [j.isSpecial, j.utxos, j.amount]);
        return (
          (0, o.useEffect)(() => {
            H(!1);
          }, [j.repeatMint]),
          (0, o.useEffect)(() => {
            null == l || l(j);
          }, [j]),
          (0, o.useEffect)(() => {
            d && G();
          }, [d, a]),
          (0, i.jsxs)('div', {
            children: [
              (0, i.jsxs)('div', {
                className: 'mb-4',
                children: [
                  (0, i.jsxs)('div', {
                    className: 'flex items-center mb-4',
                    children: [
                      (0, i.jsx)('div', {
                        className: 'w-20 sm:w-52',
                        children: g('common.tick'),
                      }),
                      (0, i.jsx)(u.Y, {
                        value: j.tick,
                        className: 'flex-1',
                        onChange: (e) => {
                          q(e.target.value);
                        },
                        onBlur: () => {
                          G();
                        },
                        maxLength: 32,
                        type: 'text',
                        placeholder: g('pages.inscribe.ordx.tick_placeholder'),
                      }),
                    ],
                  }),
                  (0, i.jsxs)('div', {
                    className: 'flex items-center mb-4',
                    children: [
                      (0, i.jsx)('div', {
                        className: 'w-20 sm:w-52',
                        children: g('common.amount'),
                      }),
                      (0, i.jsx)(u.Y, {
                        type: 'number',
                        className: 'flex-1',
                        value:
                          null === (t = j.amount) || void 0 === t
                            ? void 0
                            : t.toString(),
                        isDisabled: L || j.isSpecial,
                        onChange: (e) => {
                          Q(e.target.value);
                        },
                        min: 1,
                      }),
                    ],
                  }),
                  j.isSpecial &&
                    D.length > 0 &&
                    (0, i.jsx)(er, {
                      utxos: D,
                      onChange: (e) => {
                        H(!1), console.log('utxo', e);
                        let t = e.utxo,
                          s = t.split(':')[0],
                          i = Number(t.split(':')[1]);
                        N('utxos', [{ ...e, txid: s, vout: i }]);
                        let l = Math.ceil(
                          (null == e ? void 0 : e.amount) / j.amount,
                        );
                        console.log('calcRepeat', l);
                        let n = Math.max(Math.min(l, 1e3), 1);
                        console.log('repeat', n), N('repeatMint', n);
                      },
                    }),
                  S &&
                    (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                        className: 'flex items-center mb-4',
                        children: [
                          (0, i.jsx)('div', {
                            className: 'w-52',
                            children: g('common.repeat_mint'),
                          }),
                          (0, i.jsx)('div', {
                            className: 'flex-1',
                            children: (0, i.jsxs)('div', {
                              className: 'flex gap-2 items-center',
                              children: [
                                (0, i.jsx)(u.Y, {
                                  type: 'number',
                                  value: j.repeatMint.toString(),
                                  isDisabled: j.isSpecial,
                                  onChange: (e) => {
                                    N(
                                      'repeatMint',
                                      isNaN(Number(e.target.value))
                                        ? 0
                                        : Math.min(Number(e.target.value), ee),
                                    );
                                  },
                                  min: 1,
                                  max: ee,
                                }),
                                (0, i.jsx)(m.L, {
                                  step: 1,
                                  maxValue: ee,
                                  minValue: 1,
                                  isDisabled: j.isSpecial,
                                  value: [j.repeatMint],
                                  className: 'max-w-md',
                                  onChange: (e) => {
                                    console.log(e),
                                      N('repeatMint', isNaN(e[0]) ? 0 : e[0]);
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              (0, i.jsx)('div', {
                className: 'w-60 mx-auto flex justify-center',
                children: (0, i.jsx)(p.j, {
                  children: (0, i.jsx)(n.A, {
                    isLoading: F || M,
                    isDisabled: W,
                    color: 'primary',
                    className: 'w-60',
                    onClick: Y,
                    children: Z ? g('buttons.next') : 'Check',
                  }),
                }),
              }),
              z &&
                (0, i.jsx)('div', {
                  className: 'mt-2 text-xl text-center text-red-500',
                  children: z,
                }),
            ],
          })
        );
      };
      var ed = s(70148),
        eu = s(75945),
        em = s(64621),
        ex = s(52551),
        eh = s(8127),
        ep = s(63632),
        ef = s(78288),
        ev = s(2090);
      let { Dragger: eg } = ev.default,
        ey = (e) => {
          var t, s;
          let { onNext: l, onChange: a } = e,
            { address: r, network: m, connected: v } = (0, h.$)(),
            { btcHeight: g } = (0, k.Ee)((e) => e),
            { t: y } = (0, X.$G)(),
            [j, b] = (0, o.useState)({ start: void 0, end: void 0 }),
            [N, { set: S }] = (0, f.Z)({
              type: 'deploy',
              mode: 'fair',
              tick: '',
              limitPerMint: 1e4,
              repeatMint: 1,
              block_start: 0,
              block_end: 0,
              rarity: '',
              trz: 0,
              selfmint: '0',
              max: '',
              file: '',
              relateInscriptionId: '',
              fileName: '',
              fileType: '',
              blockChecked: !0,
              rarityChecked: !1,
              cnChecked: !1,
              trzChecked: !1,
              isSpecial: !1,
              des: '',
            }),
            [_, M] = (0, o.useState)(''),
            [I, C] = (0, o.useState)(!1),
            [P, A] = (0, o.useState)(!1),
            [O, z] = (0, o.useState)(!1),
            [E, F] = (0, o.useState)([]),
            [T, L] = (0, o.useState)([]),
            { data: R } = w.Ol.useSatTypes({ network: m }),
            Z = (0, o.useMemo)(() => (null == R ? void 0 : R.data) || [], [R]),
            H = async (e) => {
              let { fileList: t } = e,
                s = t.map((e) => e.originFileObj),
                i = s[0];
              if (i) {
                let e = await K(i);
                S('file', Y(e.substring(e.indexOf('base64,') + 7))),
                  S('fileName', i.name),
                  i.type && S('fileType', i.type),
                  L(s),
                  F([]);
              }
            },
            D = async () => {
              S('file', ''), S('fileName', ''), S('fileType', '');
            },
            U = async (e) => {
              C(!0);
              let [t, s] = await (0, B.vU)(w.lI.getTickDeploy)({
                tick: e,
                address: r,
                network: m,
              });
              if (t)
                throw (
                  (x.ZP.error({ message: y('notification.system_error') }),
                  C(!1),
                  t)
                );
              return C(!1), s;
            },
            $ = async () => {
              if ((M(''), O)) C(!0), C(!1), null == l || l();
              else {
                if (!(await V())) return;
                z(!0);
              }
            },
            V = async () => {
              if ((M(''), void 0 === N.tick || '' === N.tick)) return !1;
              let e = J(N.tick);
              if (e < 3 || 4 == e || e > 32)
                return M(y('pages.inscribe.ordx.error_1')), !1;
              try {
                let e = await U(N.tick);
                if (0 !== e.code)
                  return (
                    M(y('pages.inscribe.ordx.error_3', { tick: N.tick })), !1
                  );
                if (N.blockChecked) {
                  if (N.block_start < et)
                    return (
                      M(y('pages.inscribe.ordx.error_9', { block: et })), !1
                    );
                  if (N.block_start >= N.block_end)
                    return M(y('pages.inscribe.ordx.error_10')), !1;
                }
                if (N.rarityChecked && !N.rarity)
                  return M(y('pages.inscribe.ordx.error_11')), !1;
                if (N.max && N.max < N.limitPerMint)
                  return M(y('pages.inscribe.ordx.error_16')), !1;
                if ('fair' === N.mode) {
                  if (!(N.blockChecked || N.rarityChecked))
                    return M(y('pages.inscribe.ordx.error_13')), !1;
                } else if ('project' === N.mode && !N.max)
                  return M(y('pages.inscribe.ordx.error_14')), !1;
                return !0;
              } catch (e) {
                return console.log('error', e), !1;
              }
            },
            G = async (e) => {
              S('tick', e.trim());
            },
            q = async () => {
              A(!1),
                S('tick', N.tick.replace(/[^\w\u4e00-\u9fa5]/g, '')),
                A(!0);
            },
            W = (e) => {
              S('rarity', e),
                'common' === e && e
                  ? S('limitPerMint', 1e4)
                  : S('limitPerMint', 1);
            },
            Q = (0, o.useMemo)(() => !N.tick || !P, [N, P]),
            ee = () => {
              (0, ea.N)({
                height: g,
                start: N.block_start,
                end: N.block_end,
                network: m,
              }).then(b);
            },
            et = (0, o.useMemo)(() => g + ('testnet' === m ? 10 : 1010), [g]);
          return (
            (0, o.useEffect)(() => {
              if (g) {
                let e = g + ('testnet' === m ? 10 : 1010),
                  t = g + 4320;
                S('block_start', e),
                  S('block_end', t),
                  (0, ea.N)({ height: g, start: e, end: t, network: m }).then(
                    b,
                  );
              }
            }, [g]),
            (0, o.useEffect)(() => {
              z(!1), null == a || a(N);
            }, [N]),
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsxs)('div', {
                  className: 'flex items-center mb-4',
                  children: [
                    (0, i.jsx)('div', {
                      className: 'w-20 sm:w-52',
                      children: y('pages.inscribe.ordx.deploy_mode'),
                    }),
                    (0, i.jsxs)(c.X, {
                      orientation: 'horizontal',
                      onValueChange: (e) => S('mode', e),
                      value: N.mode,
                      children: [
                        (0, i.jsx)(d.J, {
                          value: 'fair',
                          children: y('pages.inscribe.ordx.deploy_mode_fair'),
                        }),
                        (0, i.jsx)(d.J, {
                          value: 'project',
                          children: y(
                            'pages.inscribe.ordx.deploy_mode_project',
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)('div', {
                  className: 'mb-4',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'flex items-center mb-4',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'w-20 sm:w-52',
                          children: y('common.tick'),
                        }),
                        (0, i.jsx)(u.Y, {
                          value: N.tick,
                          className: 'flex-1',
                          onChange: (e) => {
                            G(e.target.value);
                          },
                          onBlur: () => {
                            q();
                          },
                          maxLength: 32,
                          type: 'text',
                          placeholder: y(
                            'pages.inscribe.ordx.tick_placeholder',
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'flex items-center mb-4',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'w-20 sm:w-52',
                          children: y('common.max'),
                        }),
                        (0, i.jsx)(u.Y, {
                          type: 'number',
                          className: 'flex-1',
                          value:
                            null === (t = N.max) || void 0 === t
                              ? void 0
                              : t.toString(),
                          onChange: (e) => {
                            S('max', e.target.value);
                          },
                          min: 0,
                        }),
                      ],
                    }),
                    'project' === N.mode &&
                      (0, i.jsxs)('div', {
                        className: 'flex items-center mb-4',
                        children: [
                          (0, i.jsx)('div', {
                            className: 'w-20 sm:w-52',
                            children: y('common.selfmint'),
                          }),
                          (0, i.jsx)(u.Y, {
                            type: 'number',
                            className: 'flex-1',
                            value:
                              null === (s = N.selfmint) || void 0 === s
                                ? void 0
                                : s.toString(),
                            onChange: (e) => {
                              let t = e.target.value;
                              t &&
                                (t = Math.max(
                                  (t = Math.min(
                                    (t = parseInt((t = t.replace('.', '')))),
                                    100,
                                  )),
                                  0,
                                )),
                                S('selfmint', t.toString());
                            },
                            endContent: '%',
                            max: 100,
                            min: 0,
                          }),
                        ],
                      }),
                    (0, i.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, i.jsxs)('div', {
                          className:
                            'flex mb-2 flex-col gap-2 sm:flex-row sm:items-center',
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'sm:w-52',
                              children: [
                                y('common.block'),
                                ' ',
                                (0, i.jsxs)('span', {
                                  className: 'text-xs',
                                  children: [
                                    '（',
                                    y('pages.inscribe.ordx.current_height', {
                                      height: g,
                                    }),
                                    '）',
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsxs)('div', {
                              className: 'flex-1 flex items-center',
                              children: [
                                (0, i.jsx)(ed.K, {
                                  isDisabled: 'fair' === N.mode,
                                  isSelected: N.blockChecked,
                                  onChange: (e) => {
                                    S('blockChecked', e.target.checked);
                                  },
                                }),
                                (0, i.jsxs)('div', {
                                  className: 'ml-2 flex-1 flex items-center',
                                  children: [
                                    (0, i.jsx)(u.Y, {
                                      type: 'number',
                                      value: N.block_start.toString(),
                                      className: 'flex-1',
                                      onBlur: ee,
                                      isDisabled: !N.blockChecked,
                                      placeholder: 'Block start',
                                      onChange: (e) =>
                                        S(
                                          'block_start',
                                          isNaN(Number(e.target.value))
                                            ? 0
                                            : Number(e.target.value),
                                        ),
                                      min: et,
                                    }),
                                    (0, i.jsx)(eu.j, { className: 'w-4 mx-4' }),
                                    (0, i.jsx)(u.Y, {
                                      type: 'number',
                                      value: N.block_end.toString(),
                                      isDisabled: !N.blockChecked,
                                      className: 'flex-1',
                                      onBlur: ee,
                                      placeholder: 'Block End',
                                      onChange: (e) =>
                                        S(
                                          'block_end',
                                          isNaN(Number(e.target.value))
                                            ? 0
                                            : Number(e.target.value),
                                        ),
                                      min: et,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        j.start &&
                          j.end &&
                          (0, i.jsx)('div', {
                            className: 'sm:ml-60 mb-2 text-xs text-gray-600',
                            children: y('pages.inscribe.ordx.block_helper', {
                              start: j.start,
                              end: j.end,
                            }),
                          }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'flex mb-2 flex-col gap-2 sm:flex-row sm:items-center',
                      children: [
                        (0, i.jsxs)('div', {
                          className: ' sm:w-52',
                          children: [
                            y('common.rarity'),
                            (0, i.jsx)(em.e, {
                              content: y('pages.inscribe.ordx.rarity_helper'),
                              triggerScaleOnOpen: !1,
                              children: (0, i.jsxs)('span', {
                                className: 'text-blue-500',
                                children: ['(sat', (0, i.jsx)(ef.Z, {}), ')'],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)('div', {
                          className: 'flex-1 flex items-center',
                          children: [
                            (0, i.jsx)(ed.K, {
                              isSelected: N.rarityChecked,
                              onChange: (e) => {
                                S('rarityChecked', e.target.checked);
                              },
                            }),
                            (0, i.jsx)('div', {
                              className: 'ml-2 flex-1',
                              children: (0, i.jsx)(ex.g, {
                                disabled: !N.rarityChecked,
                                placeholder: y('common.select_option'),
                                value: N.rarity,
                                onChange: (e) => W(e.target.value),
                                children: Z.map((e) =>
                                  (0, i.jsx)(
                                    eh.R,
                                    { value: e, children: e },
                                    e,
                                  ),
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'flex mb-2 flex-col gap-2 sm:flex-row sm:items-center',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'sm:w-52',
                          children: y('common.limit_per_mint'),
                        }),
                        (0, i.jsx)('div', {
                          className: 'flex-1',
                          children: (0, i.jsx)(u.Y, {
                            type: 'number',
                            value: N.limitPerMint.toString(),
                            onChange: (e) =>
                              S(
                                'limitPerMint',
                                isNaN(Number(e.target.value))
                                  ? 0
                                  : Number(e.target.value),
                              ),
                            min: 1,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'flex items-center  mb-4',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'w-20 sm:w-52',
                          children: y('common.description'),
                        }),
                        (0, i.jsx)('div', {
                          className: 'flex-1',
                          children: (0, i.jsx)(u.Y, {
                            type: 'text',
                            maxLength: 128,
                            value: N.des,
                            onChange: (e) => S('des', e.target.value),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'flex mb-2 flex-col gap-2 sm:flex-row sm:items-center',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'sm:w-52',
                          children: y('pages.inscribe.ordx.deploy_file'),
                        }),
                        (0, i.jsx)('div', {
                          className: 'flex-1',
                          children: (0, i.jsxs)(eg, {
                            maxCount: 1,
                            onRemove: D,
                            listType: 'picture',
                            beforeUpload: () => !1,
                            onChange: H,
                            children: [
                              (0, i.jsx)('p', {
                                className: 'ant-upload-drag-icon',
                                children: (0, i.jsx)(ep.Z, {}),
                              }),
                              (0, i.jsx)('p', {
                                className: 'dark:text-white break-all',
                                children: y(
                                  'pages.inscribe.files.upload_des_1',
                                ),
                              }),
                              (0, i.jsx)('p', {
                                className: 'dark:text-white break-all',
                                children: y(
                                  'pages.inscribe.files.upload_des_2',
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  className: 'w-60 mx-auto flex justify-center',
                  children: (0, i.jsx)(p.j, {
                    children: (0, i.jsx)(n.A, {
                      isLoading: I,
                      isDisabled: Q,
                      color: 'primary',
                      className: 'w-60',
                      onClick: $,
                      children: O ? y('buttons.next') : 'Check',
                    }),
                  }),
                }),
                _ &&
                  (0, i.jsx)('div', {
                    className: 'mt-2 text-xl text-center text-red-500',
                    children: _,
                  }),
              ],
            })
          );
        },
        ej = (e) => {
          let { onNext: t, onChange: s } = e,
            [l, n] = (0, o.useState)('mint'),
            { t: a } = (0, X.$G)();
          return (0, i.jsxs)('div', {
            className: 'p-4',
            children: [
              (0, i.jsx)('div', {
                className: 'mb-4 flex justify-center',
                children: (0, i.jsxs)(c.X, {
                  orientation: 'horizontal',
                  onValueChange: (e) => n(e),
                  value: l,
                  children: [
                    (0, i.jsx)(d.J, {
                      value: 'mint',
                      children: a('common.mint'),
                    }),
                    (0, i.jsx)(d.J, {
                      value: 'deploy',
                      children: a('common.deploy'),
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)('div', {
                children: [
                  'mint' === l && (0, i.jsx)(ec, { onNext: t, onChange: s }),
                  'deploy' === l && (0, i.jsx)(ey, { onNext: t, onChange: s }),
                ],
              }),
            ],
          });
        };
      var eb = s(72847);
      let eN = (e) => {
          let { onNext: t, onChange: s } = e,
            { t: l } = (0, X.$G)(),
            [a, r] = (0, o.useState)(''),
            [u, m] = (0, o.useState)(''),
            [x, { set: h }] = (0, f.Z)({ type: 'single', text: '', utxos: [] });
          return (
            (0, o.useEffect)(() => {
              null == s || s(x);
            }, [x]),
            (0, o.useEffect)(() => {
              if (a && u) {
                let [e, t] = a.split(':');
                h('utxos', [
                  { utxo: a, txid: e, vout: Number(t), value: Number(u) },
                ]);
              }
            }, [a, u]),
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsxs)('div', {
                  className: 'mb-4 text-center',
                  children: [
                    (0, i.jsx)('p', {
                      children: l('pages.inscribe.text.single_des'),
                    }),
                    (0, i.jsx)('p', {
                      children: l('pages.inscribe.text.bulk_des'),
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  className: 'mb-4 flex justify-center',
                  children: (0, i.jsxs)(c.X, {
                    onValueChange: (e) => h('type', e),
                    value: x.type,
                    orientation: 'horizontal',
                    children: [
                      (0, i.jsx)(d.J, {
                        value: 'single',
                        children: l('pages.inscribe.text.single'),
                      }),
                      (0, i.jsx)(d.J, {
                        value: 'bulk',
                        children: l('pages.inscribe.text.bulk'),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)('div', {
                  className: 'mb-2',
                  children: (0, i.jsx)(eb.Y, {
                    disableAnimation: !0,
                    disableAutosize: !0,
                    classNames: { input: 'resize-y min-h-[140px]' },
                    placeholder: l('pages.inscribe.text.textarea_placeholder'),
                    value: x.text,
                    onChange: (e) => h('text', e.target.value),
                  }),
                }),
                (0, i.jsx)(n.A, {
                  className: 'mx-auto block',
                  color: 'primary',
                  isDisabled: !x.text,
                  onClick: t,
                  children: l('buttons.next'),
                }),
              ],
            })
          );
        },
        { Dragger: ek } = ev.default,
        ew = (e) => {
          let { onChange: t } = e,
            [s, l] = (0, o.useState)([]),
            { t: n } = (0, X.$G)(),
            [a, r] = (0, o.useState)([]);
          return (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)('div', {
                className: 'mb-4 text-center',
                children: (0, i.jsx)('p', {
                  children: n('pages.inscribe.files.upload_title'),
                }),
              }),
              (0, i.jsx)('div', {
                className: 'mb-4',
                children: (0, i.jsxs)(ek, {
                  multiple: !0,
                  fileList: s,
                  onChange: (e) => {
                    let { file: s, fileList: i } = e,
                      n = i.map((e) => e.originFileObj);
                    null == t || t(n), r(n), l([]);
                  },
                  showUploadList: !1,
                  children: [
                    (0, i.jsx)('p', {
                      className: 'ant-upload-drag-icon',
                      children: (0, i.jsx)(ep.Z, {}),
                    }),
                    (0, i.jsx)('p', {
                      className: ' dark:text-white',
                      children: n('pages.inscribe.files.upload_des_1'),
                    }),
                    (0, i.jsx)('p', {
                      className: 'dark:text-white',
                      children: n('pages.inscribe.files.upload_des_2'),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        eS = (e) => {
          let { onNext: t, onChange: s } = e,
            { t: l } = (0, X.$G)(),
            { network: a } = (0, h.$)(),
            [r, c] = (0, o.useState)(''),
            [d, u] = (0, o.useState)(!1),
            [m, v] = (0, o.useState)(!1),
            [g, y] = (0, o.useState)([]),
            [j, { set: b }] = (0, f.Z)({
              type: 'mint',
              name: '',
              names: [],
              suffix: '',
            }),
            N = (0, o.useMemo)(
              () =>
                j.name
                  .split('\n')
                  .map((e) => e.trim())
                  .filter((e) => !!e),
              [j.name],
            ),
            k = async () => {
              let e = j.name
                .split('\n')
                .map((e) => e.trim())
                .filter((e) => !!e);
              if (0 === e.length) return !1;
              if (e.length > 1e3)
                return (
                  x.ZP.error({ message: l('pages.inscribe.name.error_3') }), !1
                );
              let t = [],
                s = [],
                i = [];
              for (let t = 0; t < e.length; t++) {
                let l = e[t],
                  n = J(l);
                n < 3 || n > 32
                  ? i.push(l)
                  : l.endsWith('.') ||
                      l.startsWith('.') ||
                      l.split('.').length > 2
                    ? i.push(l)
                    : s.includes(l) && i.push(l),
                  s.includes(l) || s.push(l);
              }
              if (i.length > 0) {
                let e = i
                  .map((e) => 'Name "'.concat(e, '" is not valid.'))
                  .join('\n');
                return y(i), c(e), !1;
              }
              v(!0), console.log(i);
              let [n, r] = await (0, B.vU)(w.lI.checkNsNames)({
                names: e,
                network: a,
              });
              if ((v(!1), n || !(null == r ? void 0 : r.data)))
                throw (
                  (x.ZP.error({ message: l('notification.system_error') }), n)
                );
              let o = (null == r ? void 0 : r.data) || [];
              if (
                ((i = o.filter((e) => -1 === e.result).map((e) => e.name)),
                (t = o.filter((e) => 1 === e.result).map((e) => e.name)),
                i.length > 0)
              ) {
                let e = i
                  .map((e) => 'Name "'.concat(e, '" is not valid.'))
                  .join('\n');
                return console.log(e), c(e), y(i), !1;
              }
              return (console.log(t), t.length > 0)
                ? (c(
                    t
                      .map((e) => 'Name "'.concat(e, '" is already taken.'))
                      .join('\n'),
                  ),
                  y(t),
                  !1)
                : (b('names', e), console.log(!0), !0);
            };
          (0, o.useMemo)(() => (j.suffix ? [j.suffix] : []), [j.suffix]);
          let S = async () => {
              c(''), d ? null == t || t() : u(await k());
            },
            _ = (e) => {
              b('name', e), u(!1);
            };
          return (
            (0, o.useEffect)(() => {
              null == s || s(j);
            }, [j]),
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)('div', {
                  className: 'text-center mb-2',
                  children: l('pages.inscribe.name.description_3'),
                }),
                (0, i.jsxs)('div', {
                  className: 'flex gap-2 mb-2',
                  children: [
                    (0, i.jsx)('a', {
                      href: '/files/5d.txt',
                      download: '5d.txt',
                      className:
                        'flex-1 h-20 bg-gray-600 flex justify-center items-center text-white text-lg rounded-md',
                      children: '5d',
                    }),
                    (0, i.jsx)('a', {
                      href: '/files/4l-btc.txt',
                      download: '4l-btc.txt',
                      className:
                        'flex-1 h-20 bg-gray-600 flex justify-center items-center text-white text-lg rounded-md',
                      children: '4l-btc',
                    }),
                  ],
                }),
                (0, i.jsxs)('div', {
                  className: 'mb-4 text-center',
                  children: [
                    (0, i.jsx)('p', {
                      children: l('pages.inscribe.name.description'),
                    }),
                    (0, i.jsx)('p', {
                      className: 'text-gray-500 whitespace-pre-line',
                      children: l('pages.inscribe.name.description_1'),
                    }),
                  ],
                }),
                (0, i.jsxs)('div', {
                  className: 'mb-4',
                  children: [
                    (0, i.jsx)('div', {
                      className: 'mb-2',
                      children: (0, i.jsx)(eb.Y, {
                        disableAnimation: !0,
                        disableAutosize: !0,
                        classNames: { input: 'resize-y min-h-[140px]' },
                        placeholder: l('pages.inscribe.name.name_placeholder'),
                        value: j.name,
                        onChange: (e) => _(e.target.value),
                      }),
                    }),
                    r &&
                      (0, i.jsx)('div', {
                        className:
                          'mb-2 text-xl text-center text-red-500 whitespace-pre-wrap overflow-y-auto max-h-40',
                        children: r,
                      }),
                  ],
                }),
                (0, i.jsxs)('div', {
                  className: 'w-60 mx-auto flex justify-center gap-4',
                  children: [
                    (0, i.jsx)(p.j, {
                      children: (0, i.jsxs)(n.A, {
                        className: 'mx-auto',
                        color: 'primary',
                        isLoading: m,
                        onClick: S,
                        children: [
                          d ? l('buttons.next') : 'Check',
                          ' （',
                          N.length,
                          '）',
                        ],
                      }),
                    }),
                    g.length > 0 &&
                      (0, i.jsx)(n.A, {
                        className: 'mx-auto ',
                        color: 'danger',
                        onClick: () => {
                          b(
                            'name',
                            j.name
                              .split('\n')
                              .map((e) => e.trim())
                              .filter((e) => !!e)
                              .filter((e) => !g.includes(e))
                              .join('\n'),
                          ),
                            y([]),
                            c(''),
                            u(!1);
                        },
                        children: 'Remove Error Name',
                      }),
                  ],
                }),
              ],
            })
          );
        },
        e_ = (e) => {
          let { label: t, value: s } = e;
          return (0, i.jsxs)('div', {
            className:
              'min-h-[4rem] flex rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 w-full',
            children: [
              (0, i.jsx)('div', {
                className:
                  'flex justify-center items-center bg-gray-300 dark:bg-gray-600 w-20',
                children: (0, i.jsx)('div', {
                  className:
                    'w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center',
                  children: t,
                }),
              }),
              (0, i.jsx)('div', {
                className: 'flex flex-1 items-center px-4 py-2 break-all',
                children: s,
              }),
            ],
          });
        },
        eM = (e) => {
          var t;
          let {
              list: s,
              type: l = 'text',
              metadata: a,
              onNext: r,
              onBack: c,
              onDiscount: d,
            } = e,
            { t: u } = (0, X.$G)(),
            { address: m } = (0, h.$)(),
            [p, f] = (0, o.useState)(!1),
            v = { rarepizza: 1 },
            g =
              null == a
                ? void 0
                : null === (t = a.tick) || void 0 === t
                  ? void 0
                  : t.toLowerCase(),
            y = async () => {
              var e;
              f(!0);
              let [t, s] = await (0, B.vU)(w.SL)({
                address: m,
                project_id: v[g] || 0,
              });
              if ((f(!1), t || (null == s ? void 0 : s.code) !== 200)) {
                x.ZP.error({ message: u('notification.system_error') }),
                  console.error(t);
                return;
              }
              let i =
                (null == s
                  ? void 0
                  : null === (e = s.data) || void 0 === e
                    ? void 0
                    : e.discount) || 0;
              null == d || d(i), null == r || r();
            };
          return (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)('div', {
                className: 'text-lg font-bold text-center',
                children: u('pages.inscribe.step_two.title'),
              }),
              (0, i.jsx)('div', {
                className: 'text-md text-center',
                children: u('pages.inscribe.step_two.des', {
                  num: s.length,
                  type: l,
                }),
              }),
              (0, i.jsx)('div', {
                className: 'max-h-[30rem] overflow-y-auto',
                children: (0, i.jsx)('div', {
                  className: 'w-full py-4 flex flex-col gap-4',
                  children: s.map((e, t) =>
                    (0, i.jsx)(e_, { label: t + 1, value: e.show }, t),
                  ),
                }),
              }),
              (0, i.jsxs)('div', {
                className: 'grid grid-cols-2 gap-4 ',
                children: [
                  (0, i.jsx)(n.A, {
                    size: 'md',
                    color: 'primary',
                    onClick: c,
                    children: u('buttons.back'),
                  }),
                  (0, i.jsx)(n.A, {
                    isLoading: p,
                    size: 'md',
                    color: 'secondary',
                    onClick: y,
                    children: u('buttons.next'),
                  }),
                ],
              }),
            ],
          });
        };
      var eI = s(91142),
        eC = s(34191);
      let eP = (e) => {
        let { label: t, value: s, hex: l, onRemove: a } = e;
        return (0, i.jsxs)('div', {
          className:
            'min-h-[3rem] flex rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 w-full',
          children: [
            (0, i.jsx)('div', {
              className: 'flex justify-center items-center  w-14',
              children: (0, i.jsx)('div', {
                className:
                  'w-6 h-6 bg-gray-400 dark:bg-gray-500 rounded-full flex justify-center items-center',
                children: t,
              }),
            }),
            (0, i.jsx)('div', {
              className: 'flex flex-1 text-sm items-center py-2 break-all',
              children: s,
            }),
            (0, i.jsxs)('div', {
              className: 'flex items-center pr-2',
              children: [
                !!l &&
                  (0, i.jsxs)('span', {
                    className: 'mr-2',
                    children: [G(l).length, ' B'],
                  }),
                (0, i.jsx)(n.A, {
                  onClick: a,
                  isIconOnly: !0,
                  children: (0, i.jsx)(en.JO, {
                    icon: 'mdi:close-circle',
                    className: 'text-lg',
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var eA = s(12583),
        eO = s(14110);
      let ez = (e) => {
        let {
            inscriptionSize: t,
            feeRate: s,
            serviceFee: l,
            totalFee: n,
            discount: a,
            discountServiceFee: r,
            totalInscriptionSize: c,
            discountTotalFee: d,
            networkFee: u,
            filesLength: m,
          } = e,
          { t: x } = (0, X.$G)();
        return (
          (0, o.useMemo)(() => {
            let e = t ? Math.max(Number('1000'), Math.ceil(0.1 * t)) : 0;
            return ''.concat(e, ' x ').concat(m, ' = ').concat(l);
          }, [t, l, m]),
          (0, i.jsxs)('div', {
            children: [
              s &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'flex justify-between',
                      children: [
                        (0, i.jsx)('div', {
                          children: x('pages.inscribe.fee.fee_rate'),
                        }),
                        (0, i.jsxs)('div', {
                          children: [
                            (0, i.jsx)('span', { children: s }),
                            ' ',
                            (0, i.jsx)('span', { children: ' sats/vB' }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(eO.Z, { style: { margin: '10px 0' } }),
                  ],
                }),
              !!c &&
                (0, i.jsxs)('div', {
                  className: 'flex justify-between mb-2',
                  children: [
                    (0, i.jsx)('div', {
                      children: x('pages.inscribe.fee.inscription_size'),
                    }),
                    (0, i.jsxs)('div', {
                      children: [
                        (0, i.jsx)('span', { children: c }),
                        (0, i.jsx)('span', { children: ' sats' }),
                      ],
                    }),
                  ],
                }),
              !!u &&
                (0, i.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, i.jsxs)('div', {
                      children: [
                        x('pages.inscribe.fee.network_fee'),
                        '(Submint&Reveal)',
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      children: [
                        (0, i.jsx)('span', { children: u }),
                        ' ',
                        (0, i.jsx)('span', { children: ' sats' }),
                      ],
                    }),
                  ],
                }),
              (0, i.jsx)(eO.Z, { style: { margin: '10px 0' } }),
              !!l &&
                (0, i.jsxs)('div', {
                  className: 'flex justify-between mb-2',
                  children: [
                    (0, i.jsxs)('div', {
                      children: [
                        x('pages.inscribe.fee.service_fee'),
                        '(orginal: ',
                        l,
                        ' sats, discount: ',
                        a,
                        '%)',
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      children: [
                        (0, i.jsx)('span', { children: r }),
                        ' ',
                        (0, i.jsx)('span', { children: ' sats' }),
                      ],
                    }),
                  ],
                }),
              !!n &&
                (0, i.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    (0, i.jsx)('div', {
                      children: x('pages.inscribe.fee.total_fee'),
                    }),
                    (0, i.jsxs)('div', {
                      children: [
                        (0, i.jsx)('span', { children: n }),
                        ' ',
                        (0, i.jsx)('span', { children: ' sats' }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      };
      var eE = s(66798),
        eF = s(9478),
        eT = s(43682),
        eL = s(9109).Buffer;
      let eR = (0, eT.ZP)(eF);
      function eZ(e) {
        return e.subarray(1, 33);
      }
      let eH = (e) => {
        let t =
          'mainnet' === e || 'livenet' === e
            ? eE.networks.bitcoin
            : eE.networks.testnet;
        return eR.makeRandom({ network: t }).toWIF();
      };
      class eD {
        signPsbt(e) {
          for (let t = 0; t < e.inputCount; t++) e.signInput(t, this.signer);
          return e.finalizeAllInputs(), e;
        }
        constructor(e) {
          var t;
          console.log('walletParam', e),
            (this.network =
              'livenet' === e.network || 'mainnet' === e.network
                ? eE.networks.bitcoin
                : eE.networks.testnet),
            console.log('this.network', this.network),
            (this.ecPair = eR.fromWIF(e.privateKey, this.network)),
            (this.signer = (function (e) {
              var t, s;
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                l = e.privateKey;
              if (!l)
                throw Error('Private key is required for tweaking signer!');
              let n = 3 === e.publicKey[0] ? eF.privateNegate(l) : l,
                a = eF.privateAdd(
                  n,
                  ((t = eZ(e.publicKey)),
                  (s = i.tweakHash),
                  eE.crypto.taggedHash('TapTweak', s ? eL.concat([t, s]) : t)),
                );
              if (!a) throw Error('Invalid tweaked private key!');
              return eR.fromPrivateKey(eL.from(a), { network: i.network });
            })(this.ecPair, { network: this.network }));
          let s = eE.payments.p2tr({
            pubkey: eZ(this.signer.publicKey),
            network: this.network,
          });
          (this.address = null !== (t = s.address) && void 0 !== t ? t : ''),
            (this.output = s.output);
        }
      }
      var eU = s(19271),
        eK = s(42163);
      let e$ = {
          networkFee: 0,
          serviceFee: 0,
          totalFee: 0,
          discountServiceFee: 0,
          totalInscriptionSize: 0,
        },
        eV = (e) => {
          let {
              list: t,
              type: s,
              ordxUtxo: l,
              onItemRemove: a,
              metadata: r,
              discount: c,
              onAddOrder: d,
              onRemoveAll: m,
            } = e,
            { t: v } = (0, X.$G)(),
            { feeRate: g, btcHeight: j, runtimeEnv: b } = (0, k.Ee)((e) => e),
            [N, w] = (0, o.useState)(''),
            { network: S, address: _, btcWallet: M, connector: I } = (0, h.$)(),
            [C, { set: P }] = (0, f.Z)({
              toSingleAddress: _,
              toMultipleAddresses: '',
            }),
            [A, z] = (0, o.useState)(!1),
            { add: E } = (0, k.Lq)((e) => e),
            [F, T] = (0, o.useState)(!1),
            [R, Z] = (0, o.useState)(!1),
            [H, D] = (0, o.useState)('single'),
            U = (0, o.useMemo)(() => t, [t]),
            K = (0, o.useMemo)(() => F, [F]),
            $ = (0, o.useCallback)(
              (e) => {
                for (let t of e)
                  if (!(0, y.Sd)(t, S))
                    return w(v('pages.inscribe.step_three.error_3')), !1;
                return !0;
              },
              [S, v],
            ),
            V = (0, o.useMemo)(
              () =>
                'single' === H
                  ? [C.toSingleAddress]
                  : C.toMultipleAddresses
                      .split('\n')
                      .map((e) => e.trim())
                      .filter((e) => '' !== e),
              [C.toMultipleAddresses, C.toSingleAddress, H],
            ),
            Y = (0, o.useMemo)(
              () =>
                'rune' === s
                  ? (U.length > 1 ? 2 : 1) * 330
                  : R
                    ? Math.max(330, U.length)
                    : U.reduce((e, t) => e + t.amount, 0),
              [U, R, s],
            ),
            G = async () => {
              let e, t;
              if (A) return;
              w('');
              let i = { ...e$ },
                l = L.XP.gen_seckey().reduce(
                  (e, t) => e + t.toString(16).padStart(2, '0'),
                  '',
                ),
                n = c,
                a = [],
                o = {},
                u = eH(S);
              if ('rune' === s) {
                a = U;
                let e = Math.ceil(130 * g.value);
                g.value,
                  (i.networkFee = (U.length - 1) * e),
                  1 === U.length && (i.networkFee = 0);
                let s = i.networkFee + Y,
                  l = 1e3 + Math.ceil(0.01 * Y);
                'name' === r.type && j <= 856e3 && (n = 100),
                  'dev' === b && (n = 100),
                  (i.serviceFee = Math.ceil(l)),
                  (i.discountServiceFee = Math.ceil((l * (100 - n)) / 100)),
                  (i.totalInscriptionSize = Y),
                  (i.totalFee = s),
                  (t = new eK.Runestone(
                    [],
                    (0, eK.none)(),
                    (0, eK.some)(new eK.RuneId(1, 0)),
                    (0, eK.some)(1),
                  )
                    .encipher()
                    .toString('hex'));
                let c = new eD({ network: S, privateKey: u });
                o.address = c.address;
              } else {
                e = O({
                  metadata: r,
                  secret: l,
                  files: (a = U.map((e, t) => ({
                    ...e,
                    amount: R ? 1 : e.amount,
                    offset: R ? t : e.offset,
                  }))),
                  network: S,
                  feeRate: g.value,
                });
                let t = K || R ? 1 : U.length;
                e.txsize;
                let s = e.txsize;
                i.networkFee = Math.ceil(
                  ((4 * (53 + 52 * t) + 1 * s) / 4) * g.value,
                );
                let o = i.networkFee + Y,
                  c = 1e3 + Math.ceil(0.01 * Y);
                'name' === r.type && j <= 856e3 && (n = 100),
                  (i.serviceFee = Math.ceil(c)),
                  (i.discountServiceFee = Math.ceil((c * (100 - n)) / 100)),
                  (i.totalInscriptionSize = Y),
                  (i.totalFee = o);
              }
              let m = (0, eA.Z)();
              if (0 === V.length) {
                w(v('pages.inscribe.step_three.error_1'));
                return;
              }
              if (!K && V.length > 1 && V.length !== U.length) {
                w(v('pages.inscribe.step_three.error_2'));
                return;
              }
              if (!$(V)) return;
              let h = {
                  orderId: m,
                  type: s,
                  inscription: e,
                  secret: l,
                  wifPrivateKey: u,
                  oneUtxo: K,
                  runeMetadata: o,
                  opReturnScript: t,
                  tight: R,
                  discount: n,
                  fee: i,
                  metadata: r,
                  toAddress: V,
                  feeRate: g.value,
                  files: a,
                  network: S,
                  status: 'pending',
                  createAt: Date.now().valueOf(),
                },
                [p] = await (0, B.vU)(eU.H.addItem)(h);
              if (p) {
                x.ZP.error({
                  message: v('pages.inscribe.step_three.error_5'),
                  description: p.message,
                });
                return;
              }
              E(h), null == d || d(h);
            },
            J = (0, o.useMemo)(
              () =>
                ['localhost', 'test'].some(
                  (e) => location.hostname.indexOf(e) > -1,
                ),
              [],
            ),
            q = (0, o.useCallback)(
              (e) =>
                e.fileHex
                  ? e.hex + e.fileHex
                  : e.parent
                    ? e.hex + e.parent
                    : e.hex,
              [],
            ),
            W = (0, o.useCallback)(() => {
              let e = C.toMultipleAddresses
                  .split('\n')
                  .map((e) => e.trim())
                  .filter((e) => '' !== e),
                s = t.length || 10,
                i = [];
              if (e.length < s) {
                for (let t = 0; t < s; t++) i.push(e[t % e.length]);
                P('toMultipleAddresses', i.join('\n'));
              }
            }, [C.toMultipleAddresses, t.length, P]);
          return (
            (0, o.useEffect)(() => {
              _ && P('toSingleAddress', _);
            }, [_, P]),
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsxs)('div', {
                  className: 'text-lg font-bold flex justify-between mb-2',
                  children: [
                    (0, i.jsxs)('span', {
                      children: [
                        t.length,
                        ' ',
                        v('pages.inscribe.step_three.items'),
                      ],
                    }),
                    (0, i.jsx)(n.A, {
                      size: 'sm',
                      onClick: m,
                      children: v('buttons.remove_all'),
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  className:
                    'max-h-[30rem] overflow-y-auto p-4 bg-gray-800 rounded-xl mb-4',
                  children: (0, i.jsx)('div', {
                    className: 'w-full py-4 flex flex-col gap-2',
                    children: t.map((e, t) =>
                      (0, i.jsx)(
                        eP,
                        {
                          onRemove: () => (null == a ? void 0 : a(t)),
                          label: t + 1,
                          hex: q(e),
                          value: e.show,
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, i.jsxs)(eI.n, {
                  'aria-label': 'address tabs',
                  disabledKeys: 'rune' === s ? ['multiple'] : [],
                  selectedKey: H,
                  onSelectionChange: (e) => D(e),
                  children: [
                    (0, i.jsxs)(
                      eC.r,
                      {
                        title: v('pages.inscribe.step_three.to_single'),
                        children: [
                          (0, i.jsx)('div', {
                            className: 'mb-4',
                            children: (0, i.jsx)(u.Y, {
                              placeholder: 'Basic usage',
                              value: C.toSingleAddress,
                              onChange: (e) =>
                                P('toSingleAddress', e.target.value),
                            }),
                          }),
                          U.length > 1 &&
                            J &&
                            'rune' !== s &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'mb-4',
                                  children: (0, i.jsx)(ed.K, {
                                    isSelected: F,
                                    onValueChange: (e) => T(e),
                                    children: v(
                                      'pages.inscribe.step_three.output_one_utxo',
                                    ),
                                  }),
                                }),
                                (0, i.jsx)('div', {
                                  className: 'mb-4',
                                  children: (0, i.jsx)(ed.K, {
                                    isSelected: R,
                                    onValueChange: (e) => Z(e),
                                    children: v(
                                      'pages.inscribe.step_three.tight_one_utxo',
                                    ),
                                  }),
                                }),
                              ],
                            }),
                        ],
                      },
                      'single',
                    ),
                    (0, i.jsx)(
                      eC.r,
                      {
                        title: v('pages.inscribe.step_three.to_multiple'),
                        children: (0, i.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'mb-2',
                              children: ['Multiple Address (', V.length, '):'],
                            }),
                            (0, i.jsx)(eb.Y, {
                              placeholder:
                                'Enter multiple addresses, one per line',
                              value: C.toMultipleAddresses,
                              onChange: (e) =>
                                P('toMultipleAddresses', e.target.value),
                              className: 'mb-2',
                            }),
                            (0, i.jsx)('div', {
                              className: 'flex',
                              children: (0, i.jsx)(n.A, {
                                color: 'primary',
                                onClick: W,
                                children: v(
                                  'pages.inscribe.step_three.cycle_fill',
                                  { len: t.length },
                                ),
                              }),
                            }),
                          ],
                        }),
                      },
                      'multiple',
                    ),
                  ],
                }),
                (0, i.jsx)('div', {
                  className: 'mb-4',
                  children: (0, i.jsx)('p', {
                    children: v('pages.inscribe.step_three.address_hint'),
                  }),
                }),
                (0, i.jsx)('div', {
                  children: (0, i.jsx)(ez, {
                    totalInscriptionSize: Y,
                    feeRate: g.value,
                    filesLength: U.length,
                  }),
                }),
                N &&
                  (0, i.jsx)('div', {
                    className: 'text-red-500 text-center my-2',
                    children: N,
                  }),
                (0, i.jsx)('div', {
                  className: 'w-60 mx-auto flex justify-center',
                  children: (0, i.jsx)(p.j, {
                    children: (0, i.jsx)(n.A, {
                      size: 'md',
                      isLoading: A,
                      color: 'primary',
                      onClick: G,
                      children: v('buttons.submit_payment'),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        eY = (e) => {
          let { onNext: t, onChange: s } = e,
            { t: l } = (0, X.$G)(),
            { network: a } = (0, h.$)(),
            [r, c] = (0, o.useState)(''),
            [d, x] = (0, o.useState)(!1),
            [v, g] = (0, o.useState)(!1),
            [y, j] = (0, o.useState)([]),
            [b, { set: N }] = (0, f.Z)({
              type: 'rune',
              action: 'mint',
              runeId: '1:0',
              runeName: 'UNCOMMON•GOODS',
              amount: '1',
              repeat: 1,
            }),
            k = async () => {
              null == t || t();
            };
          return (
            (0, o.useEffect)(() => {
              null == s || s(b);
            }, [b]),
            (0, i.jsxs)('div', {
              children: [
                (0, i.jsxs)('div', {
                  className: 'mb-4',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'flex items-center mb-4',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'w-20 sm:w-52',
                          children: l('common.tick'),
                        }),
                        (0, i.jsx)(u.Y, {
                          value: b.runeName,
                          isReadOnly: !0,
                          className: 'flex-1',
                          maxLength: 32,
                          type: 'text',
                          placeholder: l(
                            'pages.inscribe.ordx.tick_placeholder',
                          ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'flex items-center mb-4',
                      children: [
                        (0, i.jsx)('div', {
                          className: 'w-20 sm:w-52',
                          children: l('common.amount'),
                        }),
                        (0, i.jsx)(u.Y, {
                          type: 'number',
                          className: 'flex-1',
                          value: b.amount,
                          isReadOnly: !0,
                          min: 1,
                        }),
                      ],
                    }),
                    (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                        className: 'flex items-center mb-4',
                        children: [
                          (0, i.jsx)('div', {
                            className: 'w-52',
                            children: l('common.repeat_mint'),
                          }),
                          (0, i.jsx)('div', {
                            className: 'flex-1',
                            children: (0, i.jsxs)('div', {
                              className: 'flex gap-2 items-center',
                              children: [
                                (0, i.jsx)(u.Y, {
                                  type: 'number',
                                  value: b.repeat.toString(),
                                  isDisabled: b.isSpecial,
                                  onChange: (e) => {
                                    N(
                                      'repeat',
                                      isNaN(Number(e.target.value))
                                        ? 0
                                        : Math.min(Number(e.target.value), 24),
                                    );
                                  },
                                  min: 1,
                                  max: 24,
                                }),
                                (0, i.jsx)(m.L, {
                                  step: 1,
                                  maxValue: 24,
                                  minValue: 1,
                                  isDisabled: b.isSpecial,
                                  value: [b.repeat],
                                  className: 'max-w-md',
                                  onChange: (e) => {
                                    console.log(e),
                                      N('repeat', isNaN(e[0]) ? 0 : e[0]);
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)('div', {
                  className: 'w-60 mx-auto flex justify-center',
                  children: (0, i.jsx)(p.j, {
                    children: (0, i.jsx)(n.A, {
                      color: 'primary',
                      className: 'w-60',
                      onClick: k,
                      children: l('buttons.next'),
                    }),
                  }),
                }),
                r &&
                  (0, i.jsx)('div', {
                    className: 'mt-2 text-xl text-center text-red-500',
                    children: r,
                  }),
              ],
            })
          );
        };
      var eG = s(46807),
        eJ = s(31847),
        eX = s(583),
        eB = s(95256),
        eq = s(81887),
        eW = s(40884),
        eQ = s(68161),
        e0 = s(68457);
      let e1 = (e) => {
        let {
            label: t,
            value: s,
            status: l,
            address: n,
            txid: a,
            offset: r = 0,
          } = e,
          { t: c } = (0, X.$G)(),
          d = (0, o.useMemo)(() => ''.concat(a, 'i').concat(r), [a, r]);
        return (0, i.jsxs)('div', {
          className:
            'min-h-[4rem] flex  rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 w-full',
          children: [
            (0, i.jsx)('div', {
              className:
                'flex justify-center items-center bg-gray-300 dark:bg-gray-600 w-20',
              children: (0, i.jsx)('div', {
                className:
                  'w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center',
                children: t,
              }),
            }),
            (0, i.jsxs)('div', {
              className:
                'flex flex-1 flex-wrap items-center px-4 py-2  justify-between',
              children: [
                (0, i.jsxs)('div', {
                  children: [
                    (0, i.jsx)('div', {
                      className: 'break-all mb-1',
                      children: s,
                    }),
                    (0, i.jsx)('div', {
                      className: 'text-gray-500',
                      children: (0, ea.NH)(n, 10),
                    }),
                  ],
                }),
                a
                  ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(el.Z, {
                        codeString: d,
                        className:
                          'bg-transparent text-lg md:text-2xl font-thin items-center',
                        symbol: '',
                        variant: 'flat',
                        children: (0, i.jsxs)('div', {
                          className:
                            'flex flex-col justify-center items-center',
                          children: [
                            (0, i.jsx)('span', {
                              className: 'text-base font-thin text-slate-400',
                              children: c('common.inscription_id'),
                            }),
                            (0, i.jsx)('span', {
                              className: 'text-gray-500 text-sm',
                              children: (0, ea.NH)(d, 4),
                            }),
                          ],
                        }),
                      }),
                    })
                  : (0, i.jsx)('span', { className: 'ml-3', children: l }),
              ],
            }),
          ],
        });
      };
      var e2 = s(70362),
        e4 = s(3842),
        e3 = s(9109).Buffer;
      async function e5(e) {
        let {
          secret: t,
          network: s,
          opReturnScript: i,
          files: l,
          toAddress: n,
          feeRate: a,
          utxo: r,
        } = e;
        console.log('mintRune', t, s, i, l, n, a, r);
        let o = new eD({ network: s, privateKey: t }),
          c = Math.ceil(130 * a),
          d = (0, e4.Jh)('testnet' === s ? e4.td.TESTNET : e4.td.MAINNET),
          u = [],
          m = (e, t, s) => {
            let l = new e2.z.Psbt({ network: d });
            return (
              l.addInput({
                hash: e.txid,
                index: e.vout,
                witnessUtxo: { value: e.value, script: o.output },
                tapInternalKey: eZ(o.ecPair.publicKey),
              }),
              l.addOutput({ script: e3.from(i, 'hex'), value: 0 }),
              s > 0 && l.addOutput({ address: t, value: s }),
              l
            );
          };
        if (l.length < 3) {
          let e = m(r, n, 330),
            t = o.signPsbt(e);
          console.log('signedPsbt', t);
          let s = t.extractTransaction();
          u.push({ psbtHex: t.toHex(), hex: s.toHex(), id: s.getId() });
        } else {
          let e = r;
          console.log('parentUtxo', e);
          for (let t = 0; t < l.length - 1; t++) {
            let s = m(e, n, 0),
              i = e.value - c;
            t < l.length - 2
              ? s.addOutput({ address: o.address, value: i })
              : s.addOutput({ address: n, value: 330 });
            let a = o.signPsbt(s);
            console.log('signedPsbt', a);
            let r = a.extractTransaction();
            (e = { txid: r.getId(), vout: 1, value: i }),
              u.push({ psbtHex: a.toHex(), hex: r.toHex(), id: r.getId() });
          }
        }
        let { btcWallet: x } = h.$.getState();
        if (!x) throw Error('No wallet connected');
        let p = [];
        for (let e = 0; e < u.length; e++) {
          let t;
          let { psbtHex: s } = u[e];
          try {
            t = await x.pushPsbt(s);
          } catch (e) {
            if (-32603 !== e.code) throw e;
          }
          if (t)
            try {
              p.push(JSON.parse(t));
            } catch (e) {
              p.push(t);
            }
          await (0, B._v)(3e3);
        }
        return p[p.length - 1];
      }
      var e6 = s(9109).Buffer;
      let e7 = (e) => {
        var t, s, l, c;
        let { show: d, orderId: u, onClose: m, onFinished: f } = e,
          { t: v } = (0, X.$G)(),
          { list: g, getUnspendUtxos: j, add: N, removeUtxos: S } = (0, k.YL)(),
          [_, M] = (0, o.useState)(),
          [I, C] = (0, o.useState)(0),
          [P, A] = (0, o.useState)(),
          { feeRate: O } = (0, k.Ee)(),
          { address: L, publicKey: R, network: Z, connected: H } = (0, h.$)(),
          [D, U] = (0, o.useState)(!1),
          [K, $] = (0, o.useState)(0),
          {
            changeStatus: V,
            setCommitTx: Y,
            addSucccessTxid: G,
            findOrder: J,
          } = (0, k.Lq)((e) => e),
          q = [
            {
              title: (0, i.jsx)('div', {
                className: 'dark:text-white',
                children: v('pages.inscribe.pay.step_one.name'),
              }),
            },
            {
              title: (0, i.jsx)('div', {
                className: 'dark:text-white',
                children: v('pages.inscribe.pay.step_three.name'),
              }),
            },
            {
              title: (0, i.jsx)('div', {
                className: 'dark:text-white',
                children: v('pages.inscribe.pay.step_four.name'),
              }),
            },
          ],
          W = (0, o.useMemo)(() => 1592 * O.value, [O]),
          Q = (0, o.useMemo)(() => J(u), [u]),
          ee = (0, o.useMemo)(() => {
            let e = j();
            return L && (null == e ? void 0 : e.length) !== 0
              ? (0, b.Sm)(e, (e) => e.value)
              : 0;
          }, [g, L]),
          et = (0, o.useMemo)(() => {
            var e, t, s, i, l;
            let n = j(),
              a =
                (null == Q
                  ? void 0
                  : null === (e = Q.metadata) || void 0 === e
                    ? void 0
                    : e.utxos) || [],
              r = a.reduce(
                (e, t) => e + (null == t ? void 0 : t.value) || 0,
                0,
              ),
              o = n.filter(
                (e) =>
                  void 0 ==
                  a.find((t) => t.txid === e.txid && t.vout === e.vout),
              ),
              c = (0, b.Sm)(o, (e) => e.value),
              d =
                (null == Q
                  ? void 0
                  : null === (t = Q.fee) || void 0 === t
                    ? void 0
                    : t.discountServiceFee) || 0,
              u =
                (null == Q
                  ? void 0
                  : null === (s = Q.fee) || void 0 === s
                    ? void 0
                    : s.totalFee) || 0,
              m =
                (null == Q
                  ? void 0
                  : null === (i = Q.fee) || void 0 === i
                    ? void 0
                    : i.totalInscriptionSize) || 0;
            return (
              null == Q
                ? void 0
                : null === (l = Q.metadata) || void 0 === l
                  ? void 0
                  : l.isSpecial
            )
              ? c > u + d + W - m
              : c + r > u + d + W;
          }, [W, g, null == Q ? void 0 : Q.metadata, Q.fee]),
          es = (0, o.useMemo)(() => {
            var e, t, s, i, l, n, a;
            if (!et || !Q || !H) return null;
            let r =
                'testnet' === Z
                  ? 'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep'
                  : 'bc1pwdm870vha822ux4084dxsh899apan7ugwj6f4yu9ntzrk7sled7q06ck8a',
              o = j(),
              c =
                (null == Q
                  ? void 0
                  : null === (e = Q.metadata) || void 0 === e
                    ? void 0
                    : e.utxos) || [],
              d = c.reduce(
                (e, t) => e + (null == t ? void 0 : t.value) || 0,
                0,
              ),
              u = o.filter(
                (e) =>
                  void 0 ==
                  c.find((t) => t.txid === e.txid && t.vout === e.vout),
              ),
              m =
                (null == Q
                  ? void 0
                  : null === (t = Q.fee) || void 0 === t
                    ? void 0
                    : t.discountServiceFee) || 0,
              x =
                (null == Q
                  ? void 0
                  : null === (s = Q.fee) || void 0 === s
                    ? void 0
                    : s.totalFee) || 0,
              h =
                (null == Q
                  ? void 0
                  : null === (i = Q.fee) || void 0 === i
                    ? void 0
                    : i.totalInscriptionSize) || 0,
              p =
                (null == Q
                  ? void 0
                  : null === (l = Q.metadata) || void 0 === l
                    ? void 0
                    : l.isSpecial) || !1,
              f =
                (null == Q
                  ? void 0
                  : null === (n = Q.metadata) || void 0 === n
                    ? void 0
                    : n.specialOffsetAmount) || 0,
              v = c.map((e) => ({
                txid: e.txid,
                vout: e.vout,
                value: e.value,
              })),
              g = W + x - h,
              y = x + m + W,
              b = y;
            p ? (b = m + g) : d > y && d - y < 0 && (b = y),
              (b = Math.max(b, 1e3));
            let N = [];
            return (
              v.push(...u),
              f > 0 && p && N.push({ address: L, value: f }),
              console.log('order', Q),
              'rune' === Q.type
                ? (N.push({
                    script: e6.from(Q.opReturnScript, 'hex'),
                    value: 0,
                  }),
                  N.push({ address: Q.toAddress[0], value: 330 }),
                  Q.files.length > 1 &&
                    N.push({
                      address:
                        null == Q
                          ? void 0
                          : null === (a = Q.runeMetadata) || void 0 === a
                            ? void 0
                            : a.address,
                      value: x - 330,
                    }))
                : N.push({
                    address:
                      null == Q ? void 0 : Q.inscription.inscriptionAddress,
                    value: x,
                  }),
              p && d - x > 330 && N.push({ address: L, value: d - x }),
              m && r && N.push({ value: m, address: r }),
              [v, N]
            );
          }, [
            et,
            W,
            g,
            null == Q ? void 0 : Q.metadata,
            Q.fee,
            Q.toAddress,
            L,
            Q.type,
            Q.files,
            Q.runeMetadata,
            Q.opReturnScript,
          ]),
          ei = async () => {
            var e, t;
            if (
              (null == es
                ? void 0
                : null === (e = es[0]) || void 0 === e
                  ? void 0
                  : e.length) &&
              (null == es
                ? void 0
                : null === (t = es[1]) || void 0 === t
                  ? void 0
                  : t.length)
            ) {
              U(!0), console.log('psbtData', es);
              let e = {
                  address: L,
                  publicKey: R,
                  network: Z,
                  utxos: es[0],
                  outputs: es[1],
                  feeRate: O.value,
                  suitable: !0,
                },
                [t, s] = await (0, B.vU)(F)(e);
              console.log('psbt', s);
              let [i, l] = await (0, B.vU)(y.QV)(e);
              console.error(i), console.log('fee', l), A(s), M(l), U(!1);
            }
          };
        (0, o.useEffect)(() => {
          ei();
        }, [es]);
        let el = (0, o.useMemo)(() => {
            if (!Q) return 0;
            let { fee: e } = Q;
            return e.totalFee + e.discountServiceFee + (null != _ ? _ : W);
          }, [null == Q ? void 0 : Q.fee, _]),
          en = (0, o.useMemo)(() => {
            if (!Q) return 0;
            let { fee: e } = Q;
            return e.networkFee + (null != _ ? _ : W);
          }, [null == Q ? void 0 : Q.fee, _]),
          er = async () => {
            if (Q) {
              U(!0);
              try {
                var e;
                let t;
                let { fee: s, metadata: i } = Q;
                if (!P) return;
                let l =
                  null == es
                    ? void 0
                    : null === (e = es[0]) || void 0 === e
                      ? void 0
                      : e.slice(0, P.txInputs.length);
                console.log('psbt', P),
                  console.log('spendUtxos', l),
                  (t = await T(P, L));
                let n = 0;
                (null == i ? void 0 : i.specialOffsetAmount) > 0
                  ? (n = 1)
                  : 'rune' === Q.type && (n = 2);
                let a = { txid: t, vout: n, amount: s.totalFee };
                if (
                  ((null == l ? void 0 : l.length) && (S(l), console.log(g)),
                  'rune' === Q.type && 1 === Q.files.length)
                ) {
                  x.ZP.success({
                    message: 'Success',
                    description: 'Inscribe Success',
                  }),
                    Q.toAddress.forEach((e) => G(u, t)),
                    await V(u, 'inscribe_success'),
                    U(!1),
                    $(2),
                    null == f || f(''.concat(t, 'i0'));
                  return;
                }
                Y(u, a),
                  await V(u, 'paid'),
                  $(1),
                  await (0, B.vU)(w.b8)({
                    address: L,
                    txid: t,
                    record_data: JSON.stringify({ ...Q, commitTx: a }),
                  }),
                  U(!1),
                  setTimeout(() => {
                    ed();
                  }, 0);
              } catch (e) {
                U(!1),
                  console.error(e),
                  x.ZP.error({ message: e.message || JSON.stringify(e) });
              }
            }
          },
          eo = async () => {
            if (Q && Q.commitTx)
              try {
                var e;
                U(!0), console.log('order', Q);
                let { commitTx: t, fee: s } = Q,
                  i =
                    (null === (e = t.txid) || void 0 === e ? void 0 : e.data) ||
                    t.txid;
                await (0, B._v)(3e3),
                  console.log('feeNetwork', s),
                  await z({
                    secret: Q.secret,
                    network: Q.network,
                    inscription: Q.inscription,
                    files: Q.files,
                    metadata: Q.metadata,
                    txid: i,
                    networkFee: s.networkFee,
                    feeRate: Q.feeRate,
                    vout: t.vout,
                    amount: t.amount,
                    fromAddress: L,
                  }),
                  x.ZP.success({
                    message: 'Success',
                    description: 'return success',
                  }),
                  U(!1);
              } catch (e) {
                U(!1),
                  x.ZP.error({
                    message: 'error',
                    description: e.message || 'error',
                  }),
                  console.error(e);
              }
          },
          ec = async () => {
            await ed(!0);
          },
          ed = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (Q && Q.commitTx)
              try {
                var t;
                let e;
                U(!0), console.log('order', Q);
                let { commitTx: s, fee: i, oneUtxo: l, tight: n } = Q,
                  a =
                    (null === (t = s.txid) || void 0 === t ? void 0 : t.data) ||
                    s.txid;
                await (0, B._v)(6e3),
                  (e =
                    'rune' === Q.type
                      ? await e5({
                          secret: Q.wifPrivateKey,
                          network: Q.network,
                          opReturnScript: Q.opReturnScript,
                          files: Q.files,
                          toAddress: Q.toAddress[0],
                          feeRate: Q.feeRate,
                          utxo: {
                            txid: s.txid,
                            vout: s.vout,
                            value: s.amount - 330,
                          },
                        })
                      : await E({
                          secret: Q.secret,
                          oneUtxo: l,
                          tight: n,
                          network: Q.network,
                          inscription: Q.inscription,
                          files: Q.files,
                          metadata: Q.metadata,
                          txid: a,
                          vout: s.vout,
                          amount: s.amount,
                          toAddresses: Q.toAddress,
                        })),
                  Q.toAddress.forEach((t) => G(u, e)),
                  x.ZP.success({
                    message: 'Success',
                    description: 'Inscribe Success',
                  }),
                  await V(u, 'inscribe_success'),
                  await (0, B.vU)(w.EI)({ address: L, txid: a }),
                  U(!1),
                  $(2),
                  null == f || f(''.concat(e, 'i0'));
              } catch (t) {
                console.error(t),
                  e && C(I + 1),
                  U(!1),
                  await V(u, 'inscribe_fail'),
                  x.ZP.error({
                    message: 'Error',
                    description: t.message || 'error',
                  });
              }
          },
          em = () => {
            ('paid' === Q.status || 'inscribe_fail' === Q.status) && $(1),
              'inscribe_success' === Q.status && $(2);
          };
        (0, o.useEffect)(() => {
          let e = (e) => {
            e.preventDefault(), (e.returnValue = '');
          };
          return (
            D
              ? window.addEventListener('beforeunload', e)
              : window.removeEventListener('beforeunload', e),
            () => {
              window.removeEventListener('beforeunload', e);
            }
          );
        }, [D]),
          (0, o.useEffect)(() => {
            em();
          }, []);
        let ex = () => {
          D || null == m || m();
        };
        return (0, i.jsx)(eJ.R, {
          isDismissable: !1,
          size: '3xl',
          isOpen: d,
          classNames: { base: 'max-h-screen overflow-y-auto my-0 sm:my-0' },
          onClose: ex,
          children: (0, i.jsxs)(eX.A, {
            children: [
              (0, i.jsxs)(eB.k, {
                className: 'flex items-center',
                children: [
                  (0, i.jsx)('span', {
                    className: 'mr-2',
                    children: 'Inscribing Order',
                  }),
                  (0, i.jsx)(eQ.Z, { color: 'error', children: Q.network }),
                ],
              }),
              (0, i.jsxs)(eq.I, {
                children: [
                  (0, i.jsx)('div', {
                    className: 'mb-4',
                    children: (0, i.jsx)(e0.Z, { current: K, items: q }),
                  }),
                  (0, i.jsxs)('div', {
                    children: [
                      0 === K &&
                        'timeout' !== Q.status &&
                        (0, i.jsxs)('div', {
                          children: [
                            (0, i.jsx)('div', {
                              className: 'text-center mb-2 text-red-600',
                              children:
                                !et &&
                                ''.concat(
                                  v('notification.insufficient_balance'),
                                ),
                            }),
                            (0, i.jsxs)('div', {
                              className: 'text-center mb-4',
                              children: [
                                v('common.balance'),
                                ': ',
                                ee,
                                ' Sats',
                              ],
                            }),
                            (0, i.jsx)('div', {
                              className: 'flex justify-center',
                              children: (0, i.jsx)(p.j, {
                                children: (0, i.jsx)(n.A, {
                                  color: 'primary',
                                  isLoading: D,
                                  disabled: !et,
                                  onClick: er,
                                  children: v('buttons.pay_wallet'),
                                }),
                              }),
                            }),
                          ],
                        }),
                      1 === K &&
                        (0, i.jsxs)('div', {
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'text-center',
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'text-2xl font-bold',
                                  children: v(
                                    'pages.inscribe.pay.step_three.name',
                                  ),
                                }),
                                (0, i.jsx)('div', {
                                  className: 'text-sm text-gray-400',
                                  children: v(
                                    'pages.inscribe.pay.step_three.des',
                                  ),
                                }),
                                (0, i.jsx)('div', {
                                  className: 'text-sm text-red-400',
                                  children: v(
                                    'pages.inscribe.pay.step_three.hint',
                                  ),
                                }),
                              ],
                            }),
                            (0, i.jsxs)('div', {
                              className: 'flex justify-center mt-4 gap-4',
                              children: [
                                (0, i.jsx)(n.A, {
                                  color: 'primary',
                                  isLoading: D,
                                  onClick: ec,
                                  children: v('buttons.inscribe'),
                                }),
                                I > 10 &&
                                  (0, i.jsx)(n.A, {
                                    color: 'danger',
                                    isLoading: D,
                                    onClick: eo,
                                    children: '返回余额',
                                  }),
                              ],
                            }),
                            (0, i.jsx)('div', {
                              className: 'text-amber-400 text-base text-center',
                              children: v('pages.inscribe.order.continue'),
                            }),
                          ],
                        }),
                      2 === K &&
                        (0, i.jsxs)('div', {
                          children: [
                            (0, i.jsxs)('div', {
                              className: 'text-center mb-4',
                              children: [
                                (0, i.jsx)('div', {
                                  className: 'text-2xl font-bold',
                                  children: v(
                                    'pages.inscribe.pay.step_four.name',
                                  ),
                                }),
                                (0, i.jsx)('div', {
                                  className: 'text-sm text-gray-400',
                                  children: v(
                                    'pages.inscribe.pay.step_four.des',
                                  ),
                                }),
                              ],
                            }),
                            (0, i.jsx)('div', {
                              className: 'max-h-[20rem] overflow-y-auto',
                              children: (0, i.jsxs)('div', {
                                className: 'flex justify-between mb-4',
                                children: [
                                  (0, i.jsx)('div', {
                                    children: v(
                                      'pages.inscribe.pay.step_four.genesis_tx',
                                    ),
                                  }),
                                  (0, i.jsx)('a', {
                                    className: 'text-blue-500 underline',
                                    href: (0, ea.Gg)({
                                      network: Q.network,
                                      path: 'tx/'.concat(Q.txid),
                                    }),
                                    target: '_blank',
                                    children: (0, ea.NH)(Q.txid, 10),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)('div', {
                              className: 'flex justify-center mt-4',
                              children: (0, i.jsx)(n.A, {
                                color: 'primary',
                                isLoading: D,
                                size: 'lg',
                                onClick: ex,
                                children: v('buttons.close'),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, i.jsx)(ez, {
                    feeRate: O.value,
                    totalInscriptionSize: Q.fee.totalInscriptionSize,
                    serviceFee: Q.fee.serviceFee,
                    discount: null == Q ? void 0 : Q.discount,
                    discountServiceFee: Q.fee.discountServiceFee,
                    totalFee: el,
                    networkFee: en,
                  }),
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(eu.j, {}),
                      (0, i.jsx)(a.w, {
                        children: (0, i.jsxs)(r.G, {
                          children: [
                            (0, i.jsx)(eW.u, { children: 'Funding Account' }),
                            (0, i.jsxs)('div', {
                              className: 'flex justify-between',
                              children: [
                                (0, i.jsx)('div', {
                                  children: v('common.address'),
                                }),
                                (0, i.jsx)('a', {
                                  className: 'text-blue-500 underline ml-4',
                                  href:
                                    (c =
                                      null === (t = Q.inscription) ||
                                      void 0 === t
                                        ? void 0
                                        : t.inscriptionAddress) && Q.network
                                      ? (0, ea.Gg)({
                                          network: Q.network,
                                          path: 'address/'.concat(c),
                                        })
                                      : '',
                                  target: '_blank',
                                  children: (0, ea.NH)(
                                    null === (s = Q.inscription) || void 0 === s
                                      ? void 0
                                      : s.inscriptionAddress,
                                    10,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(eu.j, {}),
                  (0, i.jsx)('div', {
                    className: 'max-h-[20rem] overflow-y-auto',
                    children: (0, i.jsx)('div', {
                      className: 'mb-2 flex flex-col gap-2',
                      children:
                        null === (l = Q.files) || void 0 === l
                          ? void 0
                          : l.map((e, t) => {
                              var s;
                              return (0, i.jsx)(
                                e1,
                                {
                                  label: t + 1,
                                  txid: Q.txid,
                                  status: null == e ? void 0 : e.status,
                                  value: e.show,
                                  offset: e.offset,
                                  address:
                                    (null === (s = Q.toAddress) || void 0 === s
                                      ? void 0
                                      : s.length) > 1
                                      ? Q.toAddress[t]
                                      : Q.toAddress[0],
                                },
                                t,
                              );
                            }),
                    }),
                  }),
                  Q.createAt &&
                    (0, i.jsxs)('div', {
                      className: 'text-right text-sm text-gray-400',
                      children: [
                        v('pages.inscribe.pay.created_text'),
                        ' ',
                        new Date(Q.createAt).toLocaleString('af'),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      };
      var e8 = s(53031),
        e9 = s.n(e8);
      let te = (e) => {
          let { onOrderClick: t } = e,
            { t: s } = (0, X.$G)(),
            {
              list: l,
              checkAllList: n,
              addLocalOrders: a,
            } = (0, k.Lq)((e) => e),
            r = (e) => {
              let { orderId: s } = e,
                i = l.find((e) => e.orderId === s);
              i && (null == t || t(i));
            },
            c = [
              {
                title: s('pages.inscribe.order.id'),
                dataIndex: 'orderId',
                key: 'orderId',
                render: (e, t) => {
                  let { orderId: s } = t;
                  return (0, ea.NH)(s, 10);
                },
              },
              {
                title: s('pages.inscribe.order.status'),
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: s('pages.inscribe.order.created'),
                dataIndex: 'created',
                key: 'created',
                render: (e, t) => {
                  let { created: s } = t;
                  return new Date(s).toLocaleString('af');
                },
              },
            ],
            d = (0, o.useMemo)(
              () =>
                l.map((e) => ({
                  orderId: e.orderId,
                  status: e.status,
                  created: e.createAt,
                })),
              [l],
            ),
            u = async () => {
              let e = await eU.H.getList(),
                t = await e9().getItem('order-store');
              if (t) {
                var s;
                let i =
                  null === (s = JSON.parse(t).state) || void 0 === s
                    ? void 0
                    : s.list;
                (null == i ? void 0 : i.length) && (e = e.concat(i));
              }
              let i = e.length,
                l = [];
              for (let t = 0; t < i; t++) {
                let s = e[t],
                  i = Date.now() - s.createAt;
                ['pending', 'inscribe_success', 'timeout'].includes(s.status) &&
                  i > 6048e5 &&
                  console.log('超时订单', s.orderId),
                  'pending' === s.status && i > 3e5 && (s.status = 'timeout'),
                  l.push(s);
              }
              a(l), await eU.H.setList(l);
            };
          return (
            (0, o.useEffect)(() => {
              u();
            }, []),
            (0, i.jsxs)(q.b, {
              'aria-label': 'Example table with dynamic content',
              onRowAction: (e) => {
                let t = d.find((t) => t.orderId === e);
                t && r(t);
              },
              children: [
                (0, i.jsx)(W.J, {
                  columns: c,
                  children: (e) => (0, i.jsx)(Q.j, { children: e.key }, e.key),
                }),
                (0, i.jsx)(ee.y, {
                  items: d,
                  children: (e) =>
                    (0, i.jsx)(
                      et.g,
                      {
                        children: (t) =>
                          'orderId' === t
                            ? (0, i.jsx)(ei.X, {
                                children: (0, ea.NH)((0, es.sF)(e, t), 10),
                              })
                            : 'created' === t
                              ? (0, i.jsx)(ei.X, {
                                  children: new Date(
                                    (0, es.sF)(e, t),
                                  ).toLocaleString('af'),
                                })
                              : (0, i.jsx)(ei.X, {
                                  children: (0, es.sF)(e, t),
                                }),
                      },
                      e.orderId,
                    ),
                }),
              ],
            })
          );
        },
        tt = (e) => {
          let { onOrderClick: t } = e,
            { t: s } = (0, X.$G)(),
            [l, n] = (0, o.useState)('local'),
            { reset: a } = (0, k.Lq)((e) => e);
          return (
            s('pages.inscribe.order.local'), (0, i.jsx)(te, { onOrderClick: t })
          );
        };
      function ts() {
        let e = (0, eo.useSearchParams)(),
          t = (0, eo.useRouter)(),
          { inscribeData: s, reset: c } = (0, k.IV)(),
          { setInscriptionId: d } = (0, k.Ny)(),
          u = e.get('type') || 'ordx',
          m = e.get('source'),
          { t: x } = (0, X.$G)(),
          [h, p] = (0, o.useState)(0),
          [v, g] = (0, o.useState)({}),
          [y, j] = (0, o.useState)(1),
          [b, N] = (0, o.useState)(u),
          [w, S] = (0, o.useState)([]),
          [A, O] = (0, o.useState)(),
          [z, E] = (0, o.useState)(!1),
          [F, { set: T, clear: L, removeAt: R }] = (0, eG.Z)([]),
          [Z, { set: H, reset: U }] = (0, f.Z)({
            type: 'mint',
            tick: '',
            amount: 1,
            repeatMint: 1,
            limitPerMint: 1e4,
            block: '',
            relateInscriptionId: '',
            trz: 0,
            des: '',
            rarity: '',
            mintRarity: '',
            selfmint: '',
            max: '',
            file: '',
            fileName: '',
            fileType: '',
            rarityChecked: !1,
            regChecked: !1,
            blockChecked: !1,
            cnChecked: !1,
            trzChecked: !1,
            utxos: [],
            isSpecial: !1,
          }),
          [K, { set: $ }] = (0, f.Z)({
            type: 'mint',
            tick: '',
            amount: 1,
            repeatMint: 1,
            limitPerMint: 1,
            totalSupply: 21e6,
          }),
          [V, { set: Y, reset: G }] = (0, f.Z)({
            type: 'single',
            text: '',
            utxos: [],
          }),
          [J, { set: B, reset: q }] = (0, f.Z)({
            type: 'mint',
            name: '',
            names: [],
            suffix: '.ordx',
          }),
          [W, { set: Q, reset: ee }] = (0, f.Z)({
            type: 'rune',
            action: 'mint',
            runeId: '1:0',
            runeName: 'UNCOMMON•GOODS',
            amount: '1',
            repeat: 1,
          }),
          et = async () => {
            let e = [],
              { names: t } = J;
            if ('mint' === J.type)
              for (let s = 0; s < t.length; s++) {
                let i = t[s].toString().trim();
                e.push({
                  type: 'ordx_name',
                  name: 'mint',
                  amount: 330,
                  offset: 330 * s,
                  value: i,
                });
              }
            g({ type: 'name' }), T(await P(e)), j(2);
          },
          es = async () => {
            let e = [],
              t = !1,
              s = 0;
            if ('mint' === Z.type) {
              var i;
              let t = 0,
                l = [],
                n = Math.max(Z.amount, 330);
              (null === (i = Z.utxos) || void 0 === i ? void 0 : i.length) &&
                (l = Z.isSpecial ? I(Z.utxos, n) : M(Z.utxos, n, Z.repeatMint)),
                console.log('rangesArr', l);
              for (let i = 0; i < Z.repeatMint; i++) {
                let a = [],
                  r = Z.amount;
                Z.rarity &&
                  'common' !== Z.rarity &&
                  a.push('rar='.concat(Z.rarity)),
                  Z.trz > 0 && a.push('trz='.concat(Z.trz)),
                  a.length && a.join(';');
                let o = [
                  JSON.stringify(
                    D({
                      p: 'ordx',
                      op: 'mint',
                      tick: Z.tick.toString().trim(),
                      amt: r.toString(),
                    }),
                  ),
                ];
                if (l[i] && Z.isSpecial) {
                  console.log(
                    'amt',
                    (r = l[i].reduce((e, t) => e + t.size, 0)),
                  );
                  let e = l[i].length;
                  0 === i
                    ? ((n = l[i][e - 1].offset + l[i][e - 1].size),
                      l[i][0].offset >= 330 && (n -= s = l[i][0].offset))
                    : (n =
                        1 === e
                          ? l[i][0].size
                          : l[i][e - 1].offset -
                            l[i][0].offset +
                            l[i][e - 1].size),
                    console.log('amount', (n = Math.max(n, 330))),
                    (t = l[i][0].offset);
                }
                if (Z.relateInscriptionId) {
                  console.log('rangesArr', l[i]);
                  let e = _(l[i]);
                  o = [
                    JSON.stringify(
                      D({
                        p: 'ordx',
                        op: 'mint',
                        tick: Z.tick.toString().trim(),
                        amt: r.toString(),
                        desc: 'seed='.concat(e),
                      }),
                    ),
                    {
                      type: 'relateInscriptionId',
                      name: 'relateInscriptionId',
                      value: Z.relateInscriptionId,
                    },
                  ];
                }
                e.push({
                  type: 'ordx',
                  name: 'mint_'.concat(i),
                  ordxType: 'mint',
                  amount: n,
                  offset: t,
                  isSpecial: Z.isSpecial,
                  value: o,
                }),
                  (t += n);
              }
            } else if ('deploy' === Z.type) {
              let s;
              let i = [];
              Z.rarityChecked && Z.rarity && i.push('rar='.concat(Z.rarity)),
                Z.trzChecked && Z.trz && i.push('trz='.concat(Z.trz)),
                i.length && (s = i.join(';'));
              let l = [
                JSON.stringify(
                  D({
                    p: 'ordx',
                    op: 'deploy',
                    tick: Z.tick.toString().trim(),
                    max: Z.max ? Z.max : void 0,
                    selfmint:
                      Z.selfmint && '0' !== Z.selfmint
                        ? ''.concat(Z.selfmint, '%')
                        : void 0,
                    block: Z.blockChecked ? Z.block.toString() : void 0,
                    lim: Z.limitPerMint.toString(),
                    attr: s,
                    des: Z.des.toString(),
                  }),
                ),
              ];
              Z.file &&
                ((t = !0),
                l.push({
                  type: 'file',
                  name: Z.fileName,
                  value: Z.file,
                  mimeType: Z.fileType,
                })),
                e.push({
                  type: 'ordx',
                  amount: 330,
                  name: 'deploy_0',
                  ordxType: 'deploy',
                  value: l,
                });
            }
            g({
              type: e[0].type,
              hasDeployFile: t,
              tick: Z.tick,
              ordxType: e[0].ordxType,
              isSpecial: e[0].isSpecial,
              specialOffsetAmount: s,
              utxos: Z.utxos,
            }),
              console.log('specialOffsetAmount', s),
              s > 0 &&
                e.forEach((e) => {
                  e.offset = e.offset - s;
                });
            let l = await P(e);
            console.log(l), T(l), j(2);
          },
          ei = async () => {
            let e = [];
            console.log(V),
              'single' === V.type
                ? e.push({
                    type: 'text',
                    amount: 330,
                    value: V.text,
                    offset: 0,
                  })
                : V.text
                    .split('\n')
                    .map((e) => e.trim())
                    .filter((e) => !!e)
                    .forEach((t, s) => {
                      e.push({
                        type: 'text',
                        value: t,
                        amount: 330,
                        offset: 330 * s,
                      });
                    });
            let t = await P(e);
            console.log(V.utxos),
              g({ type: 'text', utxos: V.utxos }),
              T(t),
              j(2);
          },
          el = async (e) => {
            let t = e.map((e) => ({
              type: 'file',
              name: e.name,
              amount: 330,
              value: e,
            }));
            console.log(t), T(await P(t)), j(2);
          };
        (0, o.useEffect)(() => {
          let { relateInscriptionId: e, type: t, text: i, metadata: l } = s;
          ('blog' == t || 'text' == t) &&
            P([{ type: 'text', amount: 330, value: i, offset: 0 }]).then(
              (s) => {
                g({ type: t, relateInscriptionId: e, blogMetadata: l }),
                  T(s),
                  j(2);
              },
            );
        }, [s]);
        let en = async () => {
            if ('mint' === W.action) {
              let e = [];
              for (let t = 0; t < W.repeat; t++)
                e.push({
                  type: 'rune',
                  action: W.action,
                  runeId: W.runeId,
                  runeName: W.runeName,
                  amount: W.amount,
                });
              let t = await C(e);
              g({
                type: 'rune',
                runeId: W.runeId,
                runeName: W.runeName,
                amount: W.amount,
              }),
                console.log(t),
                T(t),
                j(2);
            }
          },
          ea = async (e) => {
            await R(e);
          },
          er = () => {
            L(), G(), q(), U(), ee(), g({});
          };
        (0, o.useEffect)(() => {
          0 === F.length && (j(1), G(), q(), U(), g({}));
        }, [F]);
        let ec = [
            { key: 'ordx', label: 'Ticker' },
            { key: 'name', label: x('pages.inscribe.name.title') },
            { key: 'text', label: x('pages.inscribe.text.name') },
            { key: 'files', label: x('pages.inscribe.files.name') },
            { key: 'rune', label: 'Rune' },
            { key: 'blog', label: x('common.my_blog') },
          ],
          ed = (e) => {
            'blog' === e ? t.push('/account?source=blog') : N(e);
          };
        return (0, i.jsx)('div', {
          className: 'py-4',
          children: (0, i.jsxs)('div', {
            className: 'flex flex-col max-w-[48rem] mx-auto pt-8',
            children: [
              (0, i.jsxs)('div', {
                className: '',
                children: [
                  (0, i.jsx)('div', {
                    className: 'flex justify-center mb-4',
                    children: (0, i.jsx)(l.g, {
                      children: ec.map((e) =>
                        (0, i.jsx)(
                          n.A,
                          {
                            color: b === e.key ? 'primary' : 'default',
                            onClick: () => ed(e.key),
                            children: e.label,
                          },
                          e.key,
                        ),
                      ),
                    }),
                  }),
                  (0, i.jsx)(a.w, {
                    className: 'mb-4',
                    children: (0, i.jsxs)(r.G, {
                      children: [
                        1 === y &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              'files' === b &&
                                (0, i.jsx)(ew, {
                                  onNext: () => {
                                    let e = [];
                                    w.forEach((t) => {
                                      e.push({
                                        type: 'file',
                                        name: t.name,
                                        value: t,
                                      });
                                    }),
                                      console.log(e);
                                  },
                                  onChange: el,
                                }),
                              'text' === b &&
                                (0, i.jsx)(eN, {
                                  onNext: ei,
                                  onChange: (e) => {
                                    Y('type', e.type),
                                      Y('text', e.text),
                                      Y('utxos', e.utxos);
                                  },
                                }),
                              'ordx' === b &&
                                (0, i.jsx)(ej, {
                                  onChange: (e) => {
                                    H('type', e.type),
                                      H('tick', e.tick),
                                      H('utxos', e.utxos),
                                      H('amount', e.amount),
                                      H('selfmint', e.selfmint),
                                      H('max', e.max),
                                      H(
                                        'relateInscriptionId',
                                        e.relateInscriptionId,
                                      ),
                                      H('isSpecial', e.isSpecial),
                                      H('file', e.file),
                                      H('fileName', e.fileName),
                                      H('fileType', e.fileType),
                                      H('repeatMint', e.repeatMint),
                                      H('limitPerMint', e.limitPerMint),
                                      H(
                                        'block',
                                        ''
                                          .concat(e.block_start, '-')
                                          .concat(e.block_end),
                                      ),
                                      H('trz', e.trz),
                                      H('rarity', e.rarity),
                                      H('des', e.des),
                                      H('rarityChecked', e.rarityChecked),
                                      H('trzChecked', e.trzChecked),
                                      H('blockChecked', e.blockChecked);
                                  },
                                  onNext: es,
                                }),
                              'name' === b &&
                                (0, i.jsx)(eS, {
                                  onChange: (e) => {
                                    B('type', e.type),
                                      B('name', e.name),
                                      B('names', e.names),
                                      B('suffix', e.suffix);
                                  },
                                  onNext: et,
                                }),
                              'rune' === b &&
                                (0, i.jsx)(eY, {
                                  onChange: (e) => {
                                    Q('action', e.action),
                                      Q('runeId', e.runeId),
                                      Q('runeName', e.runeName),
                                      Q('amount', e.amount),
                                      Q('repeat', e.repeat);
                                  },
                                  onNext: en,
                                }),
                            ],
                          }),
                        2 === y &&
                          (0, i.jsx)(eM, {
                            list: F,
                            type: b,
                            metadata: v,
                            onBack: () => {
                              j(1);
                            },
                            onNext: () => {
                              j(3);
                            },
                            onDiscount: (e) => {
                              p(e);
                            },
                          }),
                        3 === y &&
                          (0, i.jsx)(eV, {
                            metadata: v,
                            discount: h,
                            onItemRemove: ea,
                            onRemoveAll: () => {
                              er();
                            },
                            onAddOrder: (e) => {
                              O(e.orderId), E(!0);
                            },
                            list: F,
                            type: b,
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsx)('div', {
                    children: (0, i.jsx)(tt, {
                      onOrderClick: (e) => {
                        O(e.orderId), E(!0);
                      },
                    }),
                  }),
                ],
              }),
              A &&
                (0, i.jsx)(e7, {
                  show: z,
                  orderId: A,
                  onFinished: (e) => {
                    console.log(m, s),
                      'blog' === m && 'template' === s.mode && (d(e), t.back()),
                      er();
                  },
                  onClose: () => {
                    O(void 0), E(!1);
                  },
                }),
            ],
          }),
        });
      }
    },
    27517: function (e, t, s) {
      'use strict';
      s.d(t, {
        j: function () {
          return r;
        },
      });
      var i = s(57437),
        l = s(41733),
        n = s(24842);
      s(2265);
      var a = s(90089);
      let r = (e) => {
        var t;
        let { children: s, className: r, text: o, keepStyle: c } = e;
        null == s || null === (t = s.props) || void 0 === t || t.onClick;
        let { t: d } = (0, a.$G)(),
          { connected: u, setModalVisible: m } = (0, n.$)((e) => e);
        return u || c
          ? (0, i.jsx)(i.Fragment, { children: s })
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.A, {
                variant: 'ghost',
                size: 'md',
                onClick: () => m(!0),
                radius: 'sm',
                className: r,
                color: 'primary',
                children: o || d('buttons.connect'),
              }),
            });
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3121, 1866, 1645, 8218, 3911, 1277, 1271, 4158, 8791, 6425, 148, 9189,
        9544, 3368, 4621, 42, 8838, 6007, 9662, 6752, 3074, 7401, 1447, 2971,
        7023, 1744,
      ],
      function () {
        return e((e.s = 13773));
      },
    ),
      (_N_E = e.O());
  },
]);
