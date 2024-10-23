(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1447],
  {
    43094: function () {},
    95856: function () {},
    69159: function () {},
    2594: function () {},
    46601: function () {},
    89214: function () {},
    52361: function () {},
    94616: function () {},
    65703: function (t, e, n) {
      'use strict';
      n.d(e, {
        b8: function () {
          return P;
        },
        ty: function () {
          return S;
        },
        tg: function () {
          return z;
        },
        tq: function () {
          return y;
        },
        vv: function () {
          return N;
        },
        Hj: function () {
          return v;
        },
        sl: function () {
          return f;
        },
        EI: function () {
          return b;
        },
        pN: function () {
          return A;
        },
        QU: function () {
          return O;
        },
        jq: function () {
          return E;
        },
        Sf: function () {
          return F;
        },
        Zs: function () {
          return m;
        },
        zU: function () {
          return c;
        },
        UZ: function () {
          return x;
        },
        ek: function () {
          return T;
        },
        SL: function () {
          return K;
        },
        s1: function () {
          return l;
        },
        lk: function () {
          return _;
        },
        Ru: function () {
          return H;
        },
        V0: function () {
          return U;
        },
        AU: function () {
          return d;
        },
        Rw: function () {
          return M;
        },
        Ro: function () {
          return u;
        },
        zO: function () {
          return Z;
        },
        sQ: function () {
          return w;
        },
        bA: function () {
          return W;
        },
        MZ: function () {
          return R;
        },
        cF: function () {
          return h;
        },
        yr: function () {
          return C;
        },
        F_: function () {
          return D;
        },
        wt: function () {
          return B;
        },
        Iu: function () {
          return I;
        },
        lI: function () {
          return j.lI;
        },
        Ol: function () {
          return G.Ol;
        },
        wC: function () {
          return p;
        },
        wB: function () {
          return k;
        },
        n3: function () {
          return g;
        },
        UK: function () {
          return L;
        },
      });
      var r = n(69077),
        i = n(65647),
        s = n(38472),
        a = n(24842);
      let o = async function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { timeout: 1e4 },
            {
              publicKey: n,
              connected: o,
              network: u,
              disconnect: c,
            } = a.$.getState(),
            { signature: d, reset: l, setSignature: h } = i.Ee.getState(),
            { headers: p = {}, method: f = 'GET', data: g, formData: v } = e,
            y = ''
              .concat('https://apiprd.ordx.market')
              .concat('testnet' === u ? '/testnet' : '')
              .concat(t);
          if (
            (location.hostname.indexOf('test') > -1
              ? (y = y.replace('apiprd', 'apitest'))
              : location.hostname.indexOf('dev') > -1 &&
                (y = y.replace('apiprd', 'apidev')),
            'GET' === f)
          ) {
            let t = new URLSearchParams((0, r.$B)(g));
            y += '?'.concat(t);
          } else 'POST' === f && v && (e.data = v);
          o && d && ((p.Publickey = n), (p.Signature = d)), (e.headers = p);
          let x = await (0, s.Z)(y, e);
          if ((console.log(x), (null == x ? void 0 : x.data.code) === -1)) {
            var m;
            throw (
              ((null == x ? void 0 : x.data.msg) ===
                'api signature verification failed' ||
                null == x ||
                x.data.msg,
              null == x
                ? void 0
                : null === (m = x.data) || void 0 === m
                  ? void 0
                  : m.msg)
            );
          }
          return null == x ? void 0 : x.data;
        },
        u = async (t) => {
          let {
            address: e,
            assets_type: n,
            assets_name: r,
            type: i,
            utxo: s,
            offset: a,
            size: u,
            category: c,
          } = t;
          return await o('/ordx/GetAddressOrdxAssets', {
            data: {
              address: e,
              offset: a,
              size: u,
              type: i,
              assets_type: n,
              assets_name: r,
              category: c,
              utxo: s,
            },
          });
        },
        c = async (t) => {
          let { assets_name: e, assets_type: n } = t;
          return await o('/ordx/GetAssetsSummary', {
            data: { assets_name: e, assets_type: n },
          });
        },
        d = async (t) => {
          let {
            assets_name: e,
            assets_type: n,
            offset: r,
            size: i,
            sort: s = 0,
            type: a = 1,
            category: u,
            address: c,
            hide_locked: d,
          } = t;
          return await o('/ordx/GetOrders', {
            data: {
              assets_name: e,
              assets_type: n,
              offset: r,
              size: i,
              sort: s,
              type: a,
              address: c,
              category: u,
              hide_locked: d,
            },
          });
        },
        l = async (t) => {
          let {
            assets_name: e,
            assets_type: n,
            offset: r,
            size: i,
            sort: s = 0,
            address: a,
            filter: u,
          } = t;
          return await o('/ordx/GetHistory', {
            data: {
              assets_name: e,
              assets_type: n,
              offset: r,
              size: i,
              sort: s,
              address: a,
              filter: u,
            },
          });
        },
        h = async (t) => {
          let {
            assets_type: e = '',
            interval: n = 1,
            top_count: r = 20,
            top_name: i = '',
            sort_field: s = '',
            sort_order: a = 0,
          } = t;
          return await o('/ordx/GetTopAssets', {
            data: {
              assets_type: e,
              interval: 0 === n ? void 0 : n,
              top_count: r,
              top_name: i,
              sort_field: s,
              sort_order: a,
            },
          });
        },
        p = async (t) => {
          let { address: e, orders: n } = t;
          return await o('/ordx/SubmitBatchOrders', {
            method: 'POST',
            data: { address: e, order_query: n },
          });
        },
        f = async (t) => {
          let { address: e, order_id: n } = t;
          return await o('/ordx/CancelOrder', {
            method: 'POST',
            data: { address: e, order_id: n },
          });
        },
        g = async (t) => {
          let { address: e, order_id: n } = t;
          return await o('/ordx/UnlockOrder', {
            method: 'POST',
            data: { address: e, order_id: n },
          });
        },
        v = async (t) => {
          let { address: e, order_id: n, raw: r } = t;
          return await o('/ordx/BuyOrder', {
            method: 'POST',
            data: { address: e, order_id: n, raw: r },
          });
        },
        y = async (t) => {
          let { address: e, order_ids: n, raw: r } = t;
          return await o('/ordx/BulkBuyOrder', {
            method: 'POST',
            data: { address: e, order_ids: n, raw: r },
          });
        },
        x = async () => await o('/ordx/GetBTCPrice', {}),
        m = async (t) => {
          let { assets_name: e, assets_type: n } = t;
          return await o('/ordx/GetAssetsAnalytics', {
            data: { assets_name: e, assets_type: n },
          });
        },
        w = async () => await o('/ordx/GetRecommendedFees'),
        T = async (t) => {
          let {
            address: e,
            offset: n,
            size: r,
            sort_field: i,
            sort_order: s,
          } = t;
          return await o('/ordx/GetChargedTaskList', {
            data: {
              address: e,
              offset: n,
              size: r,
              sort_field: i,
              sort_order: s,
            },
          });
        },
        S = async (t) => {
          let { address: e, fees: n, parameters: r, txid: i, type: s } = t;
          return await o('/ordx/AddOrderTask', {
            method: 'POST',
            data: { address: e, fees: n, parameters: r, txid: i, type: s },
          });
        },
        P = async (t) => {
          let { address: e, txid: n, record_data: r } = t,
            i = new FormData();
          return (
            i.append('address', e),
            i.append('txid', n),
            i.append('record_data', r),
            await o('/ordx/AddMintRecord', { method: 'POST', formData: i })
          );
        },
        b = async (t) => {
          let { address: e, txid: n } = t;
          return await o('/ordx/DeleteMintRecord', {
            method: 'POST',
            data: { address: e, txid: n },
          });
        },
        I = async (t) => {
          let { address: e, orderIds: n } = t;
          return await o('/ordx/LockBulkOrder', {
            method: 'POST',
            data: { address: e, order_id: n },
          });
        },
        k = async (t) => {
          let { address: e, orderIds: n } = t;
          return await o('/ordx/UnlockBulkOrder', {
            method: 'POST',
            data: { address: e, order_id: n },
          });
        },
        N = async (t) => {
          let {
            address: e,
            publickey: n,
            order_ids: r,
            fee_rate_tier: i,
            receiver_address: s,
          } = t;
          return await o('/ordx/BulkBuyingThirdOrder', {
            method: 'POST',
            data: {
              address: e,
              publickey: n,
              order_ids: r,
              fee_rate_tier: i,
              receiver_address: s,
            },
          });
        },
        E = async (t) =>
          await o('/ordx/GetAddressAssetsValue', { data: { address: t } }),
        O = async (t) =>
          await o('/ordx/GetAddressAssetsSummary', { data: { address: t } }),
        A = async (t, e) =>
          await o('/ordx/GetAddressAssetsList', {
            data: { address: t, assets_type: e },
          }),
        _ = async (t) => {
          let { address: e, parameters: n, type: r } = t;
          return await o('/ordx/GetLastOrderTaskByParameters', {
            method: 'POST',
            data: { address: e, parameters: n, type: r },
          });
        },
        U = async (t) => {
          let {
            address: e,
            offset: n,
            size: r,
            sort_field: i,
            sort_order: s,
          } = t;
          return await o('/ordx/GetOrderTaskList', {
            data: {
              address: e,
              offset: n,
              size: r,
              sort_field: i,
              sort_order: s,
            },
          });
        },
        K = async (t) => {
          let { address: e, project_id: n } = t;
          return await o('/ordx/GetFeeDiscount', {
            data: { address: e, project_id: n },
          });
        },
        H = async (t) => {
          let { name: e } = t;
          return await o('/ordx/GetNameCategoryList', {
            data: { name_set: e },
          });
        },
        B = async (t) => {
          let { address: e, value: n = 600, network: r } = t,
            i = ''
              .concat('https://apiprd.sat20.org')
              .concat(
                'testnet' === r ? '/testnet4' : '/mainnet',
                '/utxo/address/',
              )
              .concat(e, '/')
              .concat(n);
          return (await fetch(i)).json();
        },
        F = async () =>
          (await fetch('/version.txt?t='.concat(+new Date()))).text(),
        W = async (t) => {
          let { address: e, network: n } = t,
            r = ''
              .concat('https://apiprd.sat20.org')
              .concat(
                'testnet' === n ? '/testnet4' : '/mainnet',
                '/exotic/address/',
              )
              .concat(e);
          return (await fetch(r)).json();
        },
        M = async (t) => {
          let {
              address: e,
              tickerOrAssetsType: n,
              network: r,
              start: i,
              limit: s,
            } = t,
            a = ''
              .concat('https://apiprd.sat20.org')
              .concat(
                'testnet' === r ? '/testnet4' : '/mainnet',
                '/address/utxolist/',
              )
              .concat(e, '/')
              .concat(n, '?start=')
              .concat(i, '&limit=')
              .concat(s);
          return (await fetch(a)).json();
        },
        Z = async (t) => {
          let { address: e, network: n } = t,
            r = ''
              .concat('https://apiprd.sat20.org')
              .concat(
                'testnet' === n ? '/testnet4' : '/mainnet',
                '/address/summary/',
              )
              .concat(e);
          return (await fetch(r)).json();
        },
        R = async (t) => {
          let { address: e, sats: n, network: r } = t,
            i = ''
              .concat('https://apiprd.sat20.org')
              .concat(
                'testnet' === r ? '/testnet4' : '/mainnet',
                '/sat/FindSatsInAddress',
              );
          return (
            await fetch(i, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ address: e, sats: n }),
            })
          ).json();
        },
        z = async (t) => {
          let { address: e } = t;
          return await o('/sat20twitter/bindaccount', {
            method: 'POST',
            data: { address: e },
          });
        },
        C = async (t) => {
          let { address: e } = t;
          return await o('/sat20twitter/getaccountinfo', {
            data: { address: e },
          });
        },
        L = async (t) => {
          let { address: e, activity_name: n, result: r, activity_id: i } = t;
          return await o('/sat20twitter/updateactivity', {
            method: 'POST',
            data: { address: e, activity_name: n, result: r, activity_id: i },
          });
        },
        D = async (t) => {
          let { address: e, activity_id: n } = t;
          return await o('/sat20twitter/verifyactivity', {
            data: { address: e, activity_id: n },
          });
        };
      n(33612);
      var j = n(83887),
        G = n(81782);
      n(77497);
    },
    33612: function (t, e, n) {
      'use strict';
      var r = n(69077);
      let i = async (t, e) => {
          let n = (0, r.Gg)({ network: e, path: 'api/tx/'.concat(t, '/hex') });
          return await fetch(n)
            .then((t) => t.text())
            .then((t) => {
              if ('Transaction not found' === t)
                throw Error(
                  'Some error happened when finding BTC to pay. Please try again later.',
                );
              return t;
            });
        },
        s = async (t, e) => {
          let n = (0, r.Gg)({ network: e, path: 'api/tx' }),
            i = await fetch(n, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ hex: t }),
            });
          return await i.text();
        };
      e.Z = { getTxHex: i, pushTx: s };
    },
    81782: function (t, e, n) {
      'use strict';
      n.d(e, {
        Ol: function () {
          return a;
        },
      });
      var r = n(91617),
        i = n(77634),
        s = n(83887);
      let a = {
        useSatTypes: (t) => {
          let { network: e } = t,
            {
              data: n,
              error: i,
              isLoading: a,
            } = (0, r.ZP)(
              'ordx-utxo-satstype-'.concat(e),
              () => s.lI.getSatTypes({ network: e }),
              { keepPreviousData: !0 },
            );
          return { data: n, error: i, isLoading: a };
        },
        useBtcHeight: (t) => {
          let {
            data: e,
            error: n,
            isLoading: i,
          } = (0, r.ZP)(
            'height-'.concat(t),
            () => s.lI.getBestHeight({ network: t }),
            { refreshInterval: 3e5 },
          );
          return { data: e, error: n, isLoading: i };
        },
        useOrdxInfo: (t) => {
          let { tick: e, network: n } = t,
            {
              data: r,
              error: a,
              isMutating: o,
              trigger: u,
              reset: c,
            } = (0, i.Z)('ord2-info-'.concat(e, '-').concat(n), () =>
              s.lI.getOrdxInfo({ tick: e, network: n }),
            );
          return { data: r, trigger: u, reset: c, error: a, isLoading: o };
        },
        useNsListStatus: (t) => {
          let { tick: e, network: n } = t,
            {
              data: i,
              error: a,
              isLoading: o,
            } = (0, r.ZP)('ord2-info-'.concat(e, '-').concat(n), () =>
              s.lI.getNsListStatus({ tick: e, network: n }),
            );
          return { data: i, error: a, isLoading: o };
        },
      };
    },
    83887: function (t, e, n) {
      'use strict';
      n.d(e, {
        lI: function () {
          return o;
        },
      });
      var r = n(38472),
        i = n(33612);
      let s = (t, e) => (
        (t = ''
          .concat('https://apiprd.sat20.org')
          .concat('testnet' === e ? '/testnet4' : '/mainnet', '/')
          .concat(t)),
        console.log('hostname', location.hostname),
        location.hostname.indexOf('test') > -1
          ? (t = t.replace('apiprd', 'apidev'))
          : location.hostname.indexOf('dev') > -1 &&
            (t = t.replace('apiprd', 'apidev')),
        t
      );
      async function a(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 2e3,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30;
        try {
          let s = await i.Z.getTxHex(t, e);
          if (s)
            return (
              console.log('getTxStatus succeeded, stopping poll.'),
              console.log(s),
              s
            );
          if (r > 0)
            return (
              console.log('getTxStatus returned no result, retrying...'),
              new Promise((i) => {
                setTimeout(() => i(a(t, e, n, r - 1)), n);
              })
            );
          throw Error('Maximum retry attempts exceeded');
        } catch (i) {
          if (r > 0)
            return (
              console.error('getTxStatus failed, retrying...'),
              new Promise((i) => {
                setTimeout(() => i(a(t, e, n, r - 1)), n);
              })
            );
          throw Error('Maximum retry attempts exceeded');
        }
      }
      let o = {
        getOrdxStatusList: async (t) => {
          let { data: e } = await r.Z.get(
            s(
              'tick/status?start='.concat(t.start, '&limit=').concat(t.limit),
              t.network,
            ),
          );
          return e;
        },
        health: async (t) => {
          let { network: e } = t,
            { data: n } = await r.Z.get(s('health', e));
          return n;
        },
        getOrdxInfo: async (t) => {
          let { tick: e, network: n } = t,
            { data: i } = await r.Z.get(s('tick/info/'.concat(e), n), {
              timeout: 1e4,
            });
          return i;
        },
        getOrdxSummary: async (t) => {
          let { address: e, network: n } = t,
            { data: i } = await r.Z.get(s('address/summary/'.concat(e), n));
          return i;
        },
        getOrdxTickHolders: async (t) => {
          let { tick: e, network: n, start: i, limit: a } = t,
            { data: o } = await r.Z.get(
              s(
                'tick/holders/'
                  .concat(e, '?start=')
                  .concat(i, '&limit=')
                  .concat(a),
                n,
              ),
            );
          return o;
        },
        getOrdxAddressHistory: async (t) => {
          let { address: e, ticker: n, network: i, start: a, limit: o } = t,
            { data: u } = await r.Z.get(
              s(
                'address/history/'
                  .concat(e, '/')
                  .concat(n, '?start=')
                  .concat(a, '&limit=')
                  .concat(o),
                i,
              ),
            );
          return u;
        },
        getOrdxAddressHolders: async (t) => {
          let { address: e, ticker: n, network: i, start: a, limit: o } = t,
            { data: u } = await r.Z.get(
              s(
                'address/utxolist/'
                  .concat(e, '/')
                  .concat(n, '?start=')
                  .concat(a, '&limit=')
                  .concat(o),
                i,
              ),
            );
          return u;
        },
        getOrdxTickHistory: async (t) => {
          let { start: e, limit: n, ticker: i, network: a } = t,
            { data: o } = await r.Z.get(
              s(
                'tick/history/'
                  .concat(i, '?start=')
                  .concat(e, '&limit=')
                  .concat(n),
                a,
              ),
            );
          return o;
        },
        getUtxoByValue: async (t) => {
          let { address: e, value: n = 600, network: i } = t,
            { data: a } = await r.Z.get(
              s('utxo/address/'.concat(e, '/').concat(n), i),
            );
          return a;
        },
        savePaidOrder: async (t) => {
          let { key: e, content: n, network: i } = t,
            { data: a } = await r.Z.post(
              s('v1/indexer/tx/putkv/'.concat(e), i),
              { key: e, content: JSON.stringify(n) },
            );
          return a;
        },
        getInscriptiontInfo: async (t) => {
          let { inscriptionId: e, network: n } = t,
            { data: i } = await r.Z.get(s('mint/details/'.concat(e), n));
          return i;
        },
        getAppVersion: async () => {
          let { data: t } = await r.Z.get('/version.txt');
          return t;
        },
        getTxStatus: async (t) => {
          let { txid: e, network: n } = t,
            { data: i } = await r.Z.get(
              'https://blockstream.info/'
                .concat('testnet' === n ? 'testnet/' : '', 'api/tx/')
                .concat(e),
            );
          return i;
        },
        getSats: async (t) => {
          let { address: e, network: n } = t,
            { data: i } = await r.Z.get(s('exotic/address/'.concat(e), n));
          return i;
        },
        getSplittedSats: async (t) => {
          let { ticker: e, network: n } = t,
            { data: i } = await r.Z.get(
              s('splittedInscriptions/'.concat(e), n),
            );
          return i;
        },
        getAssetByUtxo: async (t) => {
          let { utxo: e, network: n } = t,
            { data: i } = await r.Z.get(s('utxo/abbrassets/'.concat(e), n));
          return i;
        },
        getSeedByUtxo: async (t) => {
          let { utxo: e, network: n } = t,
            { data: i } = await r.Z.get(s('utxo/seed/'.concat(e), n));
          return i;
        },
        getUtxoByType: async (t) => {
          let { address: e, type: n, network: i } = t,
            { data: a } = await r.Z.get(
              s('exotic/address/'.concat(e, '/').concat(n), i),
            );
          return a;
        },
        getSatsByAddress: async (t) => {
          let { address: e, sats: n, network: i } = t,
            { data: a } = await r.Z.post(s('sat/FindSatsInAddress', i), {
              address: e,
              sats: n,
            });
          return a;
        },
        getSatsByUtxo: async (t) => {
          let { utxo: e, network: n } = t,
            { data: i } = await r.Z.get(s('exotic/utxo/'.concat(e), n));
          return i;
        },
        getSatTypes: async (t) => {
          let { network: e } = t,
            { data: n } = await r.Z.get(s('info/satributes', e));
          return n;
        },
        getUtxo: async (t) => {
          let { utxo: e, network: n } = t,
            { data: i } = await r.Z.get(s('utxo/assets/'.concat(e), n));
          return i;
        },
        pollGetTxStatus: a,
        exoticUtxo: async (t) => {
          let { utxo: e, network: n } = t,
            { data: i } = await r.Z.get(s('exotic/utxo/'.concat(e), n), {
              timeout: 1e4,
            });
          return i;
        },
        getHeightInfo: async (t) => {
          let { height: e, network: n } = t,
            { data: i } = await r.Z.get(s('height/'.concat(e), n));
          return i;
        },
        getNsListByAddress: async (t) => {
          let { address: e, network: n, limit: i = 100 } = t,
            { data: a } = await r.Z.get(
              s('ns/address/'.concat(e, '?start=0&limit=').concat(i), n),
              { timeout: 1e4 },
            );
          return a;
        },
        getNsName: async (t) => {
          let { name: e, network: n } = t,
            { data: i } = await r.Z.get(s('ns/name/'.concat(e), n));
          return i;
        },
        checkNsNames: async (t) => {
          let { names: e, network: n } = t,
            { data: i } = await r.Z.post(s('ns/check', n), { Names: e });
          return i;
        },
        getBestHeight: async (t) => {
          let { network: e } = t,
            { data: n } = await r.Z.get(s('bestheight', e));
          return n;
        },
        getTickerPermission: async (t) => {
          let { address: e, ticker: n, network: i } = t,
            { data: a } = await r.Z.get(
              s('mint/permission/'.concat(n, '/').concat(e), i),
            );
          return a;
        },
        pushTx: async (t) => {
          let { hex: e, network: n } = t,
            { data: i } = await r.Z.post(s('btc/tx', n), { SignedTxHex: e });
          if (0 === i.code) return i.data;
          throw Error(i.msg);
        },
        getTickDeploy: async (t) => {
          let { tick: e, address: n, network: i } = t,
            { data: a } = await r.Z.get(
              s('deploy/'.concat(e, '/').concat(n), i),
              { timeout: 1e4 },
            );
          return a;
        },
        fetchChainFeeRate: async (t) => {
          let { data: e } = await r.Z.get(
            s('extension/default/fee-summary', t),
          );
          return e;
        },
        getTxHex: async (t) => {
          let { txid: e, network: n } = t,
            { data: i } = await r.Z.get(s('btc/rawtx/'.concat(e), n));
          return i;
        },
        getNsListStatus: async (t) => {
          let { network: e } = t,
            { data: n } = await r.Z.get(s('ns/status?start=0&limit=1', e), {
              timeout: 1e4,
            });
          return n;
        },
        getAllUtxos: async (t) => {
          let { address: e, network: n } = t,
            { data: i } = await r.Z.get(s('allutxos/address/'.concat(e), n));
          return i;
        },
        getOrdinalsAssets: async (t) => {
          let { address: e, network: n } = t,
            { data: i } = await r.Z.get(
              'https://'
                .concat(
                  'testnet' === n ? 'testnet4' : 'mainnet',
                  '-ordinals.sat20.org/address/',
                )
                .concat(e),
              {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
              },
            );
          return i;
        },
      };
    },
    81822: function (t, e, n) {
      'use strict';
      n.d(e, {
        V4: function () {
          return i;
        },
        pz: function () {
          return r;
        },
      });
      let r = 600,
        i = 131;
    },
    59430: function (t, e, n) {
      'use strict';
      n.d(e, {
        Ay: function () {
          return i.Ay;
        },
        Ec: function () {
          return i.Ec;
        },
        NH: function () {
          return i.NH;
        },
        QV: function () {
          return r.QV;
        },
        S2: function () {
          return i.S2;
        },
        Us: function () {
          return i.Us;
        },
        cq: function () {
          return r.cq;
        },
        g: function () {
          return i.g;
        },
        hw: function () {
          return i.hw;
        },
        pz: function () {
          return s.pz;
        },
        s8: function () {
          return i.s8;
        },
        t2: function () {
          return i.t2;
        },
        zU: function () {
          return r.zU;
        },
      });
      var r = n(14498),
        i = n(69077),
        s = n(81822);
    },
    19271: function (t, e, n) {
      'use strict';
      n.d(e, {
        H: function () {
          return u;
        },
      });
      var r = n(53031),
        i = n.n(r);
      class s {
        async setItem(t, e) {
          return i().setItem(t, e);
        }
        async getItem(t) {
          return i().getItem(t);
        }
        async removeItem(t) {
          return i().removeItem(t);
        }
      }
      let a = new s();
      class o {
        constructor() {
          (this.storage = a),
            (this.storage_key = 'inscribe_order_history'),
            (this.setList = async (t) => {
              let e = JSON.stringify(t);
              return this.storage.setItem(this.storage_key, e);
            }),
            (this.getList = async () => {
              let t = await this.storage.getItem(this.storage_key);
              try {
                if (t) return JSON.parse(t);
                return [];
              } catch (t) {
                return [];
              }
            }),
            (this.addItem = async (t) => {
              let e = await this.getList();
              return e.push(t), this.setList(e);
            });
        }
      }
      let u = new o();
    },
    46002: function (t, e, n) {
      'use strict';
      n.d(e, {
        Ay: function () {
          return c;
        },
        M5: function () {
          return l;
        },
        g: function () {
          return d;
        },
        hw: function () {
          return h;
        },
        u4: function () {
          return u;
        },
      });
      var r = n(81822),
        i = n(3442),
        s = n(14498),
        a = n(24842),
        o = n(9109).Buffer;
      function u(t) {
        let [e, n] = t.split(':');
        return { txid: e, vout: parseInt(n) };
      }
      function c(t) {
        'string' == typeof t && (t = t.trim()),
          isNaN(Number(t)) &&
            (console.warn('Input is not a valid number, defaulting to 0'),
            (t = 0));
        let e = Number(t);
        return (
          e < 0 &&
            (console.warn(
              'Input must be a non-negative number, defaulting to 0',
            ),
            (e = 0)),
          (e = Math.round(e)) / 1e8
        );
      }
      function d(t) {
        'string' == typeof t && (t = t.trim()),
          isNaN(Number(t)) &&
            (console.warn('Input is not a valid number, defaulting to 0'),
            (t = 0));
        let e = Number(t);
        return (
          e < 0 &&
            (console.warn(
              'Input must be a non-negative number, defaulting to 0',
            ),
            (e = 0)),
          Math.round(1e8 * e)
        );
      }
      function l(t) {
        let {
            utxos: e,
            address: n,
            network: a,
            estimateFee: u,
            feeRate: c,
            outputLenght: d,
          } = t,
          l = e.map(function (t) {
            return {
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                script: o.from((0, i.kd)(n), 'hex'),
                value: t.value,
              },
            };
          }),
          h = e.reduce((t, e) => t + e.value, 0),
          p = h - r.pz * d - u;
        console.log('calcDummyUtxosVsize', h, p);
        let f = [{ address: n, value: p }];
        for (let t = 0; t < d - 1; t++) f.push({ address: n, value: r.pz });
        return (
          !(function (t) {
            let { inputs: e, outputs: n, network: r } = t,
              i = (0, s.Jh)('testnet' === r ? s.td.TESTNET : s.td.MAINNET),
              a = new s.zO.Psbt({ network: i });
            e.forEach(function (t) {
              a.addInput(t);
            }),
              n.forEach(function (t) {
                a.addOutput(t);
              }),
              console.log('virtualPsbt', a),
              (function (t, e) {
                let n = (0, s.Jh)(
                    'testnet' === e ? s.td.TESTNET : s.td.MAINNET,
                  ),
                  r = s.zO.Psbt.fromHex(t, { network: n })
                    .data.globalMap.unsignedTx.toBuffer()
                    .toString('hex');
                console.log(
                  'virtualSize',
                  s.zO.Transaction.fromBuffer(o.from(r, 'hex')).virtualSize(),
                );
              })(a.toHex(), r);
          })({ inputs: l, outputs: f, network: a }),
          u
        );
      }
      async function h(t) {
        let { btcWallet: e } = a.$.getState();
        if (!e) throw Error('No wallet connected');
        let n = await e.signPsbt(t.toHex()),
          r = await e.pushPsbt(n);
        console.log('pushedTxId', r);
        try {
          return JSON.parse(r);
        } catch (t) {
          return r;
        }
      }
    },
    69077: function (t, e, n) {
      'use strict';
      n.d(e, {
        g: function () {
          return r.g;
        },
        c8: function () {
          return l;
        },
        Us: function () {
          return y;
        },
        Ec: function () {
          return v;
        },
        S2: function () {
          return g;
        },
        YU: function () {
          return h;
        },
        s8: function () {
          return x;
        },
        N: function () {
          return A;
        },
        Gg: function () {
          return w;
        },
        PS: function () {
          return m;
        },
        ZN: function () {
          return p;
        },
        vW: function () {
          return b;
        },
        t2: function () {
          return I;
        },
        NH: function () {
          return k;
        },
        $B: function () {
          return N;
        },
        a: function () {
          return T;
        },
        Ay: function () {
          return r.Ay;
        },
        hw: function () {
          return r.hw;
        },
        T1: function () {
          return f;
        },
        ic: function () {
          return E;
        },
      });
      var r = n(46002),
        i = n(3442),
        s = n(18182),
        a = n(24842),
        o = n(81822),
        u = n(14498),
        c = n(65703),
        d = n(9109).Buffer;
      async function l(t) {
        let { inscriptionUtxos: e, network: n, address: i, unit: a } = t;
        console.log('build batch sell order params', e, n, i);
        let d = (0, u.Jh)('testnet' === n ? u.td.TESTNET : u.td.MAINNET),
          l = new u.zO.Psbt({ network: d });
        for (let t = 0; t < e.length; t++) {
          let { utxo: d, price: h } = e[t];
          console.log(d, h);
          let { txid: p, vout: f } = (0, r.u4)(d),
            [g, v] = await (0, s.vU)(c.lI.getTxHex)({ txid: p, network: n });
          if (g) throw g;
          let y = u.zO.Transaction.fromHex(v.data);
          console.log(y);
          let x = {
            hash: p,
            index: f,
            witnessUtxo: y.outs[f],
            sighashType: o.V4,
          };
          l.addInput(x),
            l.addOutput({
              address: i,
              value: 'btc' === a ? (0, r.g)(h) : Number(h),
            });
        }
        return console.log(l), l.toHex();
      }
      async function h(t) {
        let {
            inscriptionUtxos: e,
            utxos: n,
            oneOutput: r,
            addresses: i,
            feeRate: s,
          } = t,
          {
            btcWallet: o,
            network: c,
            address: d,
            publicKey: l,
          } = a.$.getState(),
          h = e.length,
          p = [];
        p =
          1 === i.length ? Array.from({ length: h }).fill(i[0]) : i.slice(0, h);
        let f = [],
          g = [],
          v = 0;
        for (let t = 0; t < h; t++) {
          let n = e[t],
            [i, s] = n.utxo.split(':');
          f.push({ txid: i, vout: parseInt(s), value: n.value }),
            (v += n.value),
            r || g.push({ address: p[t], value: n.value });
        }
        return (
          r && g.push({ address: p[0], value: v }),
          f.push(...n),
          await (0, u.cq)({
            utxos: f,
            outputs: g,
            feeRate: s,
            network: c,
            address: d,
            publicKey: l,
            suitable: !0,
          })
        );
      }
      async function p(t) {
        let {
            inscriptionUtxos: e,
            utxos: n,
            oneOutput: r,
            addresses: i,
            feeRate: s,
          } = t,
          {
            btcWallet: o,
            network: c,
            address: d,
            publicKey: l,
          } = a.$.getState(),
          h = e.length,
          p = [];
        p =
          1 === i.length ? Array.from({ length: h }).fill(i[0]) : i.slice(0, h);
        let f = [],
          g = [],
          v = 0;
        for (let t = 0; t < h; t++) {
          let n = e[t],
            [i, s] = n.utxo.split(':');
          f.push({ txid: i, vout: parseInt(s), value: n.value }),
            (v += n.value),
            r || g.push({ address: p[t], value: n.value });
        }
        return (
          r && g.push({ address: p[0], value: v }),
          f.push(...n),
          await (0, u.y4)({
            utxos: f,
            outputs: g,
            feeRate: s,
            network: c,
            address: d,
            publicKey: l,
            suitable: !0,
          })
        );
      }
      let f = (t, e) => {
          console.log('split batch signed psbt', t);
          let n = (0, u.Jh)('testnet' === e ? u.td.TESTNET : u.td.MAINNET),
            r = u.zO.Psbt.fromHex(t, { network: n }),
            { inputCount: i } = r,
            s = [];
          for (let t = 0; t < i; t++) {
            let e = new u.zO.Psbt({ network: n }),
              i = {
                hash: r.txInputs[t].hash,
                index: r.txInputs[t].index,
                witnessUtxo: r.data.inputs[t].witnessUtxo,
                finalScriptWitness: r.data.inputs[t].finalScriptWitness,
              },
              a = r.txOutputs[t];
            e.addInput(i), e.addOutput(a), s.push(e.toHex());
          }
          return s;
        },
        g = async (t) => {
          let { utxos: e, feeRate: n, num: r = 2 } = t,
            {
              btcWallet: i,
              publicKey: s,
              address: c,
              network: d,
            } = a.$.getState(),
            l = [];
          for (let t = 0; t < r; t++) l.push({ address: c, value: o.pz });
          let h = await (0, u.cq)({
              utxos: e,
              outputs: l,
              feeRate: n,
              network: d,
              address: c,
              publicKey: s,
            }),
            p = [],
            f = {},
            g = await (null == i ? void 0 : i.signPsbt(h.toHex()));
          if (g) {
            let t = await (null == i ? void 0 : i.pushPsbt(g));
            if (t)
              try {
                t = JSON.parse(t);
              } catch (t) {
                console.log(t);
              }
            for (let e = 0; e < r; e++)
              p.push({ txid: t, vout: 0, value: o.pz });
            f = {
              txid: t,
              vout: h.txOutputs.length - 1,
              value: h.txOutputs[h.txOutputs.length - 1].value,
            };
          }
          return (
            console.log(p), console.log(f), { balanceUtxo: f, dummyUtxos: p }
          );
        },
        v = async (t) => {
          let { order_ids: e, fee_rate_tier: n } = t,
            {
              btcWallet: r,
              network: i,
              address: s,
              publicKey: o,
            } = a.$.getState(),
            d = await (0, c.vv)({
              address: s,
              publickey: o,
              order_ids: e,
              fee_rate_tier: n,
              receiver_address: s,
            }),
            l = (0, u.Jh)('testnet' === i ? u.td.TESTNET : u.td.MAINNET);
          if ((null == d ? void 0 : d.code) === 200 && r && d.data) {
            let t = d.data,
              e = await r.signPsbt(t);
            return (
              console.log('signed', e),
              u.zO.Psbt.fromHex(e, { network: l }).extractTransaction().toHex()
            );
          }
          throw Error(
            (null == d ? void 0 : d.msg) || 'Failed to build third order',
          );
        },
        y = async (t) => {
          let {
              raws: e,
              utxos: n,
              serviceFee: r,
              feeRate: s,
              dummyUtxos: c,
            } = t,
            {
              btcWallet: l,
              network: h,
              address: p,
              publicKey: f,
            } = a.$.getState(),
            g =
              'testnet' === h
                ? 'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep'
                : 'bc1pwdm870vha822ux4084dxsh899apan7ugwj6f4yu9ntzrk7sled7q06ck8a',
            v = (0, u.Jh)('testnet' === h ? u.td.TESTNET : u.td.MAINNET),
            y = (0, u.pB)({ utxos: n, address: p, publicKey: f }),
            x = c.map((t) => ({
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                script: d.from((0, i.kd)(p), 'hex'),
                value: t.value,
              },
              sighashType: u.zO.Transaction.SIGHASH_ALL,
            })),
            m = new u.YW({
              address: p,
              network: 'testnet' == h ? u.td.TESTNET : u.td.MAINNET,
              feeRate: s,
            });
          console.log(y),
            m.setEnableRBF(!1),
            x.forEach((t) => {
              m.addPsbtInput(t);
            });
          let w = [],
            T = [],
            S = [];
          for (let t = 0; t < e.length; t++) {
            let { raw: n } = e[t],
              r = u.zO.Psbt.fromHex(n, { network: v }),
              i = {
                hash: r.txInputs[0].hash,
                index: r.txInputs[0].index,
                witnessUtxo: r.data.inputs[0].witnessUtxo,
                finalScriptWitness: r.data.inputs[0].finalScriptWitness,
              };
            console.log(i), w.push(i);
            let s = { address: p, value: r.data.inputs[0].witnessUtxo.value };
            T.push(s);
            let a = r.txOutputs[0];
            S.push(a);
          }
          w.forEach((t) => {
            m.addPsbtInput(t);
          });
          let P = c.reduce((t, e) => t + e.value, 0);
          m.addOutput(p, P),
            T.forEach((t) => {
              m.addOutput(t.address, t.value);
            }),
            S.forEach((t) => {
              m.addOutput(t.address, t.value, t.script);
            }),
            r && g && m.addOutput(g, r);
          for (let t = 0; t < c.length; t++) m.addOutput(p, o.pz);
          await m.addSufficientUtxosForFee(y, { suitable: !0 }), console.log(m);
          let b = m.toPsbt();
          if ((console.log(b), !l)) throw Error('Wallet not initialized');
          let I = await l.signPsbt(b.toHex());
          console.log('signed', I);
          let k = u.zO.Psbt.fromHex(I, { network: v }).extractTransaction();
          return console.log(k), k.toHex();
        },
        x = async (t) => {
          let {
              raws: e,
              utxos: n,
              serviceFee: r,
              feeRate: s,
              dummyUtxos: c,
            } = t,
            {
              btcWallet: l,
              network: h,
              address: p,
              publicKey: f,
            } = a.$.getState(),
            g =
              'testnet' === h
                ? 'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep'
                : 'bc1pwdm870vha822ux4084dxsh899apan7ugwj6f4yu9ntzrk7sled7q06ck8a',
            v = (0, u.Jh)('testnet' === h ? u.td.TESTNET : u.td.MAINNET),
            y = (0, u.pB)({ utxos: n, address: p, publicKey: f }),
            x = c.map((t) => ({
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                script: d.from((0, i.kd)(p), 'hex'),
                value: t.value,
              },
              sighashType: u.zO.Transaction.SIGHASH_ALL,
            })),
            m = new u.YW({
              address: p,
              network: 'testnet' == h ? u.td.TESTNET : u.td.MAINNET,
              feeRate: s,
            });
          m.setEnableRBF(!1),
            x.forEach((t) => {
              m.addPsbtInput(t);
            });
          let w = [],
            T = [],
            S = [];
          for (let t = 0; t < e.length; t++) {
            let { raw: n } = e[t],
              r = u.zO.Psbt.fromHex(n, { network: v }),
              i = {
                hash: r.txInputs[0].hash,
                index: r.txInputs[0].index,
                witnessUtxo: r.data.inputs[0].witnessUtxo,
                finalScriptWitness: r.data.inputs[0].finalScriptWitness,
              };
            w.push(i);
            let s = { address: p, value: r.data.inputs[0].witnessUtxo.value };
            T.push(s);
            let a = r.txOutputs[0];
            S.push(a);
          }
          w.forEach((t) => {
            m.addPsbtInput(t);
          });
          let P = c.reduce((t, e) => t + e.value, 0);
          m.addOutput(p, P),
            T.forEach((t) => {
              m.addOutput(t.address, t.value);
            }),
            S.forEach((t) => {
              m.addOutput(t.address, t.value, t.script);
            }),
            r && g && m.addOutput(g, r);
          for (let t = 0; t < c.length; t++) m.addOutput(p, o.pz);
          return (
            await m.addSufficientUtxosForFee(y, { suitable: !1 }),
            console.log(m),
            await m.calNetworkFee()
          );
        },
        m = (t) => {
          let { network: e, path: n, locale: r } = t,
            i =
              'testnet' === e
                ? 'https://ord-testnet4.sat20.org'
                : 'https://ord-mainnet.sat20.org';
          return r && (i += '/'.concat(r)), n && (i += '/'.concat(n)), i;
        },
        w = (t) => {
          let { network: e, path: n, locale: r } = t,
            i = 'https://mempool.space';
          return (
            r && (i += '/'.concat(r)),
            'testnet' === e && (i += '/testnet4'),
            n && (i += '/'.concat(n)),
            i
          );
        },
        T = (t, e) => w({ network: e, path: 'tx/'.concat(t) });
      var S = n(59887),
        P = n(27498);
      n(75683);
      let b = (t, e) => {
          var n;
          return (
            (null === (n = { ns: { un: 'Pure Name' } }[e]) || void 0 === n
              ? void 0
              : n[t]) || t
          );
        },
        I = (t) => {
          if (void 0 !== t) return { btc: 'PN-btc' }[t] || t;
        },
        k = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '*****';
          return 'string' == typeof t && t
            ? ''
                .concat(null == t ? void 0 : t.substring(0, e))
                .concat(n)
                .concat(
                  null == t
                    ? void 0
                    : t.substring((null == t ? void 0 : t.length) - e),
                )
            : '';
        },
        N = (t) => {
          let e = { ...t };
          return (
            Object.keys(e).forEach((t) => {
              ('' === e[t] ||
                void 0 === e[t] ||
                null === e[t] ||
                'null' === e[t] ||
                'undefined' === e[t] ||
                'NaN' === e[t] ||
                (isNaN(e[t]) && 'number' == typeof e[t])) &&
                delete e[t];
            }),
            e
          );
        };
      function E(t) {
        var e;
        return null == t
          ? void 0
          : null === (e = t.toString()) || void 0 === e
            ? void 0
            : e.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      let O = async (t, e) => {
          let n = 'height-time-'.concat(t),
            r = sessionStorage.getItem(n);
          if (r) return +r;
          let { info: i } = await c.lI.getHeightInfo({ height: t, network: e }),
            s = 1e3 * ((null == i ? void 0 : i.timestamp) || 0);
          return s && sessionStorage.setItem(n, s.toString()), s;
        },
        A = async (t) => {
          let { height: e, start: n, end: r, network: i } = t;
          try {
            let t = +new Date(),
              s = t,
              a = t;
            if (n && n < e) s = await O(n, i);
            else {
              let r = n - e;
              s = (0, S.I)(t, { minutes: 10 * r });
            }
            if (r && r < e) a = await O(r, i);
            else {
              let n = Math.ceil(r - e);
              a = (0, S.I)(t, { minutes: 10 * n });
            }
            return {
              start: (0, P.WU)(new Date(s), 'yyyy-MM-dd HH:mm'),
              end: (0, P.WU)(new Date(a), 'yyyy-MM-dd HH:mm'),
            };
          } catch (t) {
            return console.log(t), { start: void 0, end: void 0 };
          }
        };
    },
    91848: function (t, e, n) {
      'use strict';
      n.d(e, {
        DL: function () {
          return m;
        },
        EP: function () {
          return A;
        },
        Lk: function () {
          return u;
        },
        vE: function () {
          return o;
        },
        yw: function () {
          return d;
        },
        PS: function () {
          return h;
        },
        P6: function () {
          return c;
        },
        gU: function () {
          return l;
        },
      });
      var r,
        i,
        s,
        a,
        o = {};
      n.r(o),
        n.d(o, {
          rn: function () {
            return v;
          },
          zO: function () {
            return p;
          },
          b1: function () {
            return g;
          },
        });
      var u = {};
      n.r(u),
        n.d(u, {
          addressToScriptPk: function () {
            return b;
          },
          decodeAddress: function () {
            return k;
          },
          getAddressType: function () {
            return E;
          },
          isValidAddress: function () {
            return I;
          },
          publicKeyToAddress: function () {
            return S;
          },
          publicKeyToPayment: function () {
            return T;
          },
          publicKeyToScriptPk: function () {
            return P;
          },
          scriptPkToAddress: function () {
            return O;
          },
        });
      var c = {};
      n.r(c),
        n.d(c, {
          amountToSaothis: function () {
            return X;
          },
          satoshisToAmount: function () {
            return V;
          },
          schnorrValidator: function () {
            return G;
          },
          toXOnly: function () {
            return L;
          },
          tweakSigner: function () {
            return D;
          },
          validator: function () {
            return j;
          },
        });
      var d = {};
      n.r(d),
        n.d(d, {
          genPsbtOfBIP322Simple: function () {
            return Y;
          },
          getSignatureFromPsbtOfBIP322Simple: function () {
            return $;
          },
          signMessageOfBIP322Simple: function () {
            return Q;
          },
          signMessageOfDeterministicECDSA: function () {
            return tu;
          },
          signMessageOfECDSA: function () {
            return th;
          },
          verifyMessageOfBIP322Simple: function () {
            return te;
          },
          verifyMessageOfECDSA: function () {
            return tp;
          },
        });
      var l = {};
      n.r(l),
        n.d(l, {
          Q: function () {
            return tO;
          },
        });
      var h = {};
      n.r(h),
        n.d(h, {
          Nc: function () {
            return t_;
          },
        });
      var p = n(66798),
        f = n(43682),
        g = n(9478);
      p.initEccLib(g);
      var v = (0, f.ZP)(g),
        y =
          (((r = {})[(r.MAINNET = 0)] = 'MAINNET'),
          (r[(r.TESTNET = 1)] = 'TESTNET'),
          (r[(r.REGTEST = 2)] = 'REGTEST'),
          r);
      function x(t) {
        return t === y.MAINNET
          ? p.networks.bitcoin
          : t === y.TESTNET
            ? p.networks.testnet
            : p.networks.regtest;
      }
      var m =
          (((i = {})[(i.P2PKH = 0)] = 'P2PKH'),
          (i[(i.P2WPKH = 1)] = 'P2WPKH'),
          (i[(i.P2TR = 2)] = 'P2TR'),
          (i[(i.P2SH_P2WPKH = 3)] = 'P2SH_P2WPKH'),
          (i[(i.M44_P2WPKH = 4)] = 'M44_P2WPKH'),
          (i[(i.M44_P2TR = 5)] = 'M44_P2TR'),
          (i[(i.P2WSH = 6)] = 'P2WSH'),
          (i[(i.P2SH = 7)] = 'P2SH'),
          (i[(i.UNKNOWN = 8)] = 'UNKNOWN'),
          i),
        w = n(9109).Buffer;
      function T(t, e, n) {
        var r = x(n);
        if (!t) return null;
        var i = w.from(t, 'hex');
        if (e === m.P2PKH) return p.payments.p2pkh({ pubkey: i, network: r });
        if (e === m.P2WPKH || e === m.M44_P2WPKH)
          return p.payments.p2wpkh({ pubkey: i, network: r });
        if (e === m.P2TR || e === m.M44_P2TR)
          return p.payments.p2tr({
            internalPubkey: i.slice(1, 33),
            network: r,
          });
        if (e === m.P2SH_P2WPKH) {
          var s = p.payments.p2wpkh({ pubkey: i, network: r });
          return p.payments.p2sh({ pubkey: i, network: r, redeem: s });
        }
      }
      function S(t, e, n) {
        var r = T(t, e, n);
        return r && r.address ? r.address : '';
      }
      function P(t, e, n) {
        return T(t, e, n).output.toString('hex');
      }
      function b(t, e) {
        var n = x(e);
        return p.address.toOutputScript(t, n);
      }
      function I(t, e) {
        var n;
        void 0 === e && (e = y.MAINNET);
        try {
          p.address.toOutputScript(t, x(e));
        } catch (t) {
          n = t;
        }
        return !n;
      }
      function k(t) {
        var e,
          n,
          r,
          i,
          s = p.networks.bitcoin,
          a = p.networks.testnet,
          o = p.networks.regtest;
        if (t.startsWith('bc1') || t.startsWith('tb1') || t.startsWith('bcrt1'))
          try {
            return (
              (n = p.address.fromBech32(t)).prefix === s.bech32
                ? (r = y.MAINNET)
                : n.prefix === a.bech32
                  ? (r = y.TESTNET)
                  : n.prefix === o.bech32 && (r = y.REGTEST),
              0 === n.version
                ? 20 === n.data.length
                  ? (i = m.P2WPKH)
                  : 32 === n.data.length && (i = m.P2WSH)
                : 1 === n.version && 32 === n.data.length && (i = m.P2TR),
              { networkType: r, addressType: i, dust: N(i) }
            );
          } catch (t) {}
        else
          try {
            return (
              (e = p.address.fromBase58Check(t)).version === s.pubKeyHash
                ? ((r = y.MAINNET), (i = m.P2PKH))
                : e.version === a.pubKeyHash
                  ? ((r = y.TESTNET), (i = m.P2PKH))
                  : e.version === o.pubKeyHash
                    ? ((r = y.REGTEST), (i = m.P2PKH))
                    : e.version === s.scriptHash
                      ? ((r = y.MAINNET), (i = m.P2SH_P2WPKH))
                      : e.version === a.scriptHash
                        ? ((r = y.TESTNET), (i = m.P2SH_P2WPKH))
                        : e.version === o.scriptHash &&
                          ((r = y.REGTEST), (i = m.P2SH_P2WPKH)),
              { networkType: r, addressType: i, dust: N(i) }
            );
          } catch (t) {}
        return { networkType: y.MAINNET, addressType: m.UNKNOWN, dust: 546 };
      }
      function N(t) {
        return t === m.P2WPKH || t === m.M44_P2WPKH
          ? 294
          : t === m.P2TR || t === m.M44_P2TR
            ? 330
            : 546;
      }
      function E(t, e) {
        return void 0 === e && (e = y.MAINNET), k(t).addressType;
      }
      function O(t, e) {
        void 0 === e && (e = y.MAINNET);
        var n = x(e);
        try {
          return p.address.fromOutputScript(
            'string' == typeof t ? w.from(t, 'hex') : t,
            n,
          );
        } catch (t) {
          return '';
        }
      }
      var A = 546,
        _ = n(23668),
        U = n(79431),
        K = n(54566),
        H = n.n(K),
        B = n(50992),
        F = n(49191),
        W = n(19886),
        M = n(47881),
        Z = n(36731),
        R = n(70367),
        z = n(19449),
        C = n(9109).Buffer,
        L = function (t) {
          return 32 === t.length ? t : t.slice(1, 33);
        };
      function D(t, e) {
        void 0 === e && (e = {});
        var n,
          r,
          i = t.privateKey;
        if (!i) throw Error('Private key is required for tweaking signer!');
        3 === t.publicKey[0] && (i = g.privateNegate(i));
        var s = g.privateAdd(
          i,
          ((n = L(t.publicKey)),
          (r = e.tweakHash),
          p.crypto.taggedHash('TapTweak', C.concat(r ? [n, r] : [n]))),
        );
        if (!s) throw Error('Invalid tweaked private key!');
        return v.fromPrivateKey(C.from(s), { network: e.network });
      }
      var j = function (t, e, n) {
          return v.fromPublicKey(t).verify(e, n);
        },
        G = function (t, e, n) {
          return v.fromPublicKey(t).verifySchnorr(e, n);
        };
      function V(t) {
        return new z.Z(t).dividedBy(1e8).toFixed(8);
      }
      function X(t) {
        return new z.Z(t).multipliedBy(1e8).toNumber();
      }
      var q = n(9109).Buffer;
      function J(t) {
        var e = p.crypto.sha256,
          n = e(q.from('BIP0322-signed-message'));
        return e(q.concat([n, n, q.from(t)])).toString('hex');
      }
      function Y(t) {
        var e = t.message,
          n = t.address,
          r = t.networkType,
          i = b(n, r),
          s = E(n, r);
        if (!1 == [m.P2WPKH, m.P2TR, m.M44_P2WPKH, m.M44_P2TR].includes(s))
          throw Error('Not support address type to sign');
        var a = q.from(
            '0000000000000000000000000000000000000000000000000000000000000000',
            'hex',
          ),
          o = q.concat([q.from('0020', 'hex'), q.from(J(e), 'hex')]),
          u = new p.Transaction();
        (u.version = 0), u.addInput(a, 4294967295, 0, o), u.addOutput(i, 0);
        var c = new p.Psbt();
        return (
          c.setVersion(0),
          c.addInput({
            hash: u.getHash(),
            index: 0,
            sequence: 0,
            witnessUtxo: { script: i, value: 0 },
          }),
          c.addOutput({ script: q.from('6a', 'hex'), value: 0 }),
          c
        );
      }
      function $(t) {
        var e = t.extractTransaction(),
          n = (0, R.encode)(e.ins[0].witness.length);
        return q
          .concat(
            [n].concat(
              e.ins[0].witness.map(function (t) {
                return q.concat([(0, R.encode)(t.byteLength), t]);
              }),
            ),
          )
          .toString('base64');
      }
      function Q(t) {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = (0, _.Z)(
          H().mark(function t(e) {
            var n, r, i, s, a;
            return H().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.message),
                      (r = e.address),
                      (i = e.networkType),
                      (s = e.wallet),
                      (a = Y({ message: n, address: r, networkType: i })),
                      (t.next = 4),
                      s.signPsbt(a)
                    );
                  case 4:
                    return t.abrupt('return', $(a));
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function te(t, e, n, r) {
        void 0 === r && (r = y.MAINNET);
        var i,
          s,
          a,
          o,
          u,
          c,
          d,
          l,
          h,
          f,
          g,
          v,
          w,
          T,
          S,
          P,
          b,
          I,
          k,
          N = E(t, r);
        return N === m.P2WPKH || N === m.M44_P2WPKH
          ? (void 0 === (i = r) && (i = y.MAINNET),
            (s = x(i)),
            (a = p.address.toOutputScript(t, s)),
            (o = q.from(
              '0000000000000000000000000000000000000000000000000000000000000000',
              'hex',
            )),
            (u = q.concat([q.from('0020', 'hex'), q.from(J(e), 'hex')])),
            ((c = new p.Transaction()).version = 0),
            c.addInput(o, 4294967295, 0, u),
            c.addOutput(a, 0),
            (d = q.from(n, 'base64')),
            (l = p.script.decompile(d.slice(1))),
            (h = new p.Psbt()).setVersion(0),
            h.addInput({
              hash: c.getHash(),
              index: 0,
              sequence: 0,
              witnessUtxo: { script: a, value: 0 },
            }),
            h.addOutput({ script: q.from('6a', 'hex'), value: 0 }),
            h.updateInput(0, {
              partialSig: [{ pubkey: l[1], signature: l[0] }],
            }),
            h.validateSignaturesOfAllInputs(j))
          : (N === m.P2TR || N === m.M44_P2TR) &&
              (void 0 === (f = r) && (f = y.MAINNET),
              (g = x(f)),
              (v = p.address.toOutputScript(t, g)),
              (w = q.from(
                '0000000000000000000000000000000000000000000000000000000000000000',
                'hex',
              )),
              (T = q.concat([q.from('0020', 'hex'), q.from(J(e), 'hex')])),
              ((S = new p.Transaction()).version = 0),
              S.addInput(w, 4294967295, 0, T),
              S.addOutput(v, 0),
              (P = q.from(n, 'base64')),
              (b = p.script.decompile(P.slice(1))[0]),
              (I = q.from('02' + v.subarray(2).toString('hex'), 'hex')),
              (k = new p.Psbt()).setVersion(0),
              k.addInput({
                hash: S.getHash(),
                index: 0,
                sequence: 0,
                witnessUtxo: { script: v, value: 0 },
              }),
              k.addOutput({ script: q.from('6a', 'hex'), value: 0 }),
              G(I, k.__CACHE.__TX.hashForWitnessV1(0, [v], [0], 0), b));
      }
      var tn = n(93557),
        tr = n(80543),
        ti = n(91316),
        ts = n(9109).Buffer;
      ti.P6.hmacSha256Sync = function (t) {
        for (
          var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        return tn.b(tr.JQ, t, (e = ti.P6).concatBytes.apply(e, r));
      };
      var ta = ts.from('Bitcoin Signed Message:\n');
      function to(t) {
        var e;
        return (
          t < 253
            ? (e = ts.alloc(1)).writeUInt8(t, 0)
            : t < 65536
              ? ((e = ts.alloc(3)).writeUInt8(253, 0), e.writeUInt16LE(t, 1))
              : t < 4294967296
                ? ((e = ts.alloc(5)).writeUInt8(254, 0), e.writeUInt32LE(t, 1))
                : ((e = ts.alloc(9)).writeUInt8(255, 0),
                  e.writeInt32LE(-1 & t, 1),
                  e.writeUInt32LE(Math.floor(t / 4294967296), 5)),
          e
        );
      }
      function tu(t, e) {
        var n,
          r,
          i,
          s,
          a =
            ((n = to(ta.length)),
            (i = to((r = ts.from(e)).length)),
            (s = ts.concat([n, ta, i, r])),
            p.crypto.hash256(s)),
          o = ti.kS(ts.from(a), t.privateKey.toString('hex'), {
            canonical: !0,
            recovered: !0,
            der: !1,
          }),
          u = o[0];
        return (function (t, e, n) {
          if (!(0 === t || 1 === t || 2 === t || 3 === t))
            throw Error('i must be equal to 0, 1, 2, or 3');
          var r = t + 27 + 4;
          return (
            n || (r -= 4), ts.concat([Uint8Array.of(r), Uint8Array.from(e)])
          );
        })(o[1], u, !0).toString('base64');
      }
      var tc = n(9055),
        td = n.n(tc),
        tl = n(9109).Buffer;
      function th(t, e) {
        return new (td().Message)(e).sign(new (td().PrivateKey)(t.privateKey));
      }
      function tp(t, e, n) {
        var r = new (td().Message)(e),
          i = td().crypto.Signature.fromCompact(tl.from(n, 'base64')),
          s = r.magicHash(),
          a = new (td().crypto.ECDSA)();
        (a.hashbuf = s), (a.sig = i);
        var o = a.toPublicKey();
        return (
          new (td().PublicKey)(
            Object.assign({}, o.toObject(), { compressed: !0 }),
          ).toString() == t && td().crypto.ECDSA.verify(s, i, o)
        );
      }
      var tf = n(9109).Buffer,
        tg = 'Simple Key Pair',
        tv = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this) || this).type = tg),
              (n.network = p.networks.bitcoin),
              (n.wallets = []),
              e && n.deserialize(e),
              n
            );
          }
          (0, U.Z)(e, t);
          var n,
            r,
            i,
            s,
            a,
            o,
            u,
            c,
            d,
            l = e.prototype;
          return (
            (l.serialize =
              ((n = (0, _.Z)(
                H().mark(function t() {
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              'return',
                              this.wallets.map(function (t) {
                                return t.privateKey.toString('hex');
                              }),
                            );
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function () {
                return n.apply(this, arguments);
              })),
            (l.deserialize =
              ((r = (0, _.Z)(
                H().mark(function t(e) {
                  var n;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (n = e),
                              (this.wallets = n.map(function (t) {
                                var e;
                                return (
                                  (e =
                                    64 === t.length
                                      ? tf.from(t, 'hex')
                                      : (0, M.decode)(t).slice(1, 33)),
                                  v.fromPrivateKey(e)
                                );
                              }));
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t) {
                return r.apply(this, arguments);
              })),
            (l.addAccounts =
              ((i = (0, _.Z)(
                H().mark(function t(e) {
                  var n, r, i;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            for (
                              void 0 === e && (e = 1), n = [], r = 0;
                              r < e;
                              r++
                            )
                              n.push(v.makeRandom());
                            return (
                              (this.wallets = this.wallets.concat(n)),
                              (i = n.map(function (t) {
                                return t.publicKey.toString('hex');
                              })),
                              t.abrupt('return', i)
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t) {
                return i.apply(this, arguments);
              })),
            (l.getAccounts =
              ((s = (0, _.Z)(
                H().mark(function t() {
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              'return',
                              this.wallets.map(function (t) {
                                return t.publicKey.toString('hex');
                              }),
                            );
                          case 1:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function () {
                return s.apply(this, arguments);
              })),
            (l.signTransaction =
              ((a = (0, _.Z)(
                H().mark(function t(e, n, r) {
                  var i = this;
                  return H().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n.forEach(function (t) {
                              var n = i._getPrivateKeyFor(t.publicKey);
                              if (
                                (0, W.isTaprootInput)(e.data.inputs[t.index]) &&
                                !t.disableTweakSigner
                              ) {
                                var s = D(n, r);
                                e.signInput(t.index, s, t.sighashTypes);
                              } else e.signInput(t.index, n, t.sighashTypes);
                            }),
                            t.abrupt('return', e)
                          );
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function (t, e, n) {
                return a.apply(this, arguments);
              })),
            (l.signMessage =
              ((o = (0, _.Z)(
                H().mark(function t(e, n) {
                  var r;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = this._getPrivateKeyFor(e)),
                              t.abrupt('return', tu(r, n))
                            );
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t, e) {
                return o.apply(this, arguments);
              })),
            (l.verifyMessage =
              ((u = (0, _.Z)(
                H().mark(function t(e, n, r) {
                  return H().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt('return', tp(e, n, r));
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              )),
              function (t, e, n) {
                return u.apply(this, arguments);
              })),
            (l.signData =
              ((c = (0, _.Z)(
                H().mark(function t(e, n, r) {
                  var i;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (void 0 === r && (r = 'ecdsa'),
                              (i = this._getPrivateKeyFor(e)),
                              'ecdsa' !== r)
                            ) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt(
                              'return',
                              i.sign(tf.from(n, 'hex')).toString('hex'),
                            );
                          case 6:
                            if ('schnorr' !== r) {
                              t.next = 10;
                              break;
                            }
                            return t.abrupt(
                              'return',
                              i.signSchnorr(tf.from(n, 'hex')).toString('hex'),
                            );
                          case 10:
                            throw Error('Not support type');
                          case 11:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t, e, n) {
                return c.apply(this, arguments);
              })),
            (l._getPrivateKeyFor = function (t) {
              if (!t) throw Error('Must specify publicKey.');
              return this._getWalletForAccount(t);
            }),
            (l.exportAccount =
              ((d = (0, _.Z)(
                H().mark(function t(e) {
                  var n;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = this._getWalletForAccount(e)),
                              t.abrupt('return', n.privateKey.toString('hex'))
                            );
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t) {
                return d.apply(this, arguments);
              })),
            (l.removeAccount = function (t) {
              if (
                !this.wallets
                  .map(function (t) {
                    return t.publicKey.toString('hex');
                  })
                  .includes(t)
              )
                throw Error('PublicKey ' + t + ' not found in this keyring');
              this.wallets = this.wallets.filter(function (e) {
                return e.publicKey.toString('hex') !== t;
              });
            }),
            (l._getWalletForAccount = function (t) {
              var e = this.wallets.find(function (e) {
                return e.publicKey.toString('hex') == t;
              });
              if (!e)
                throw Error(
                  'Simple Keyring - Unable to find matching publicKey.',
                );
              return e;
            }),
            e
          );
        })(Z.EventEmitter);
      function ty(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      tv.type = tg;
      var tx = "m/44'/0'/0'/0",
        tm = 'HD Key Tree';
      (function (t) {
        function e(e) {
          var n;
          return (
            ((n = t.call(this, null) || this).type = tm),
            (n.mnemonic = null),
            (n.xpriv = null),
            (n.network = p.networks.bitcoin),
            (n.hdPath = tx),
            (n.root = null),
            (n.wallets = []),
            (n._index2wallet = {}),
            (n.activeIndexes = []),
            (n.page = 0),
            (n.perPage = 5),
            e && n.deserialize(e),
            n
          );
        }
        (0, U.Z)(e, t);
        var n,
          r,
          i,
          s,
          a = e.prototype;
        return (
          (a.serialize =
            ((n = (0, _.Z)(
              H().mark(function t() {
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt('return', {
                            mnemonic: this.mnemonic,
                            xpriv: this.xpriv,
                            activeIndexes: this.activeIndexes,
                            hdPath: this.hdPath,
                            passphrase: this.passphrase,
                          });
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return n.apply(this, arguments);
            })),
          (a.deserialize =
            ((r = (0, _.Z)(
              H().mark(function t(e) {
                var n;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((void 0 === e && (e = {}), !this.root)) {
                            t.next = 3;
                            break;
                          }
                          throw Error(
                            'Btc-Hd-Keyring: Secret recovery phrase already provided',
                          );
                        case 3:
                          (n = e),
                            (this.wallets = []),
                            (this.mnemonic = null),
                            (this.xpriv = null),
                            (this.root = null),
                            (this.hdPath = n.hdPath || tx),
                            n.passphrase && (this.passphrase = n.passphrase),
                            n.mnemonic
                              ? this.initFromMnemonic(n.mnemonic)
                              : n.xpriv && this.initFromXpriv(n.xpriv),
                            n.activeIndexes &&
                              this.activeAccounts(n.activeIndexes);
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return r.apply(this, arguments);
            })),
          (a.initFromXpriv = function (t) {
            if (this.root)
              throw Error(
                'Btc-Hd-Keyring: Secret recovery phrase already provided',
              );
            (this.xpriv = t),
              (this._index2wallet = {}),
              (this.hdWallet = F.fromJSON({ xpriv: t })),
              (this.root = this.hdWallet);
          }),
          (a.initFromMnemonic = function (t) {
            if (this.root)
              throw Error(
                'Btc-Hd-Keyring: Secret recovery phrase already provided',
              );
            (this.mnemonic = t), (this._index2wallet = {});
            var e = B.Z1(t, this.passphrase);
            (this.hdWallet = F.fromMasterSeed(e)),
              (this.root = this.hdWallet.derive(this.hdPath));
          }),
          (a.changeHdPath = function (t) {
            if (!this.mnemonic) throw Error('Btc-Hd-Keyring: Not support');
            (this.hdPath = t), (this.root = this.hdWallet.derive(this.hdPath));
            var e = this.activeIndexes;
            (this._index2wallet = {}),
              (this.activeIndexes = []),
              (this.wallets = []),
              this.activeAccounts(e);
          }),
          (a.getAccountByHdPath = function (t, e) {
            if (!this.mnemonic) throw Error('Btc-Hd-Keyring: Not support');
            var n = this.hdWallet.derive(t).deriveChild(e);
            return v
              .fromPrivateKey(n.privateKey, { network: this.network })
              .publicKey.toString('hex');
          }),
          (a.addAccounts = function (t) {
            void 0 === t && (t = 1);
            for (var e = t, n = 0, r = []; e; ) {
              var i = this._addressFromIndex(n)[1];
              this.wallets.includes(i)
                ? n++
                : (this.wallets.push(i),
                  r.push(i),
                  this.activeIndexes.push(n),
                  e--);
            }
            return Promise.resolve(
              r.map(function (t) {
                return t.publicKey.toString('hex');
              }),
            );
          }),
          (a.activeAccounts = function (t) {
            for (
              var e,
                n = [],
                r = (function (t, e) {
                  var n =
                    ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                    t['@@iterator'];
                  if (n) return (n = n.call(t)).next.bind(n);
                  if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return ty(t, void 0);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ('Object' === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          'Map' === n || 'Set' === n)
                        )
                          return Array.from(t);
                        if (
                          'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return ty(t, void 0);
                      }
                    })(t))
                  ) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                      return r >= t.length
                        ? { done: !0 }
                        : { done: !1, value: t[r++] };
                    };
                  }
                  throw TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  );
                })(t);
              !(e = r()).done;

            ) {
              var i = e.value,
                s = this._addressFromIndex(i),
                a = s[0],
                o = s[1];
              this.wallets.push(o), this.activeIndexes.push(i), n.push(a);
            }
            return n;
          }),
          (a.getFirstPage = function () {
            return (this.page = 0), this.__getPage(1);
          }),
          (a.getNextPage = function () {
            return this.__getPage(1);
          }),
          (a.getPreviousPage = function () {
            return this.__getPage(-1);
          }),
          (a.getAddresses = function (t, e) {
            for (var n = [], r = t; r < e; r++) {
              var i = this._addressFromIndex(r)[0];
              n.push({ address: i, index: r + 1 });
            }
            return n;
          }),
          (a.__getPage =
            ((i = (0, _.Z)(
              H().mark(function t(e) {
                var n, r, i, s, a;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          for (
                            this.page += e,
                              (!this.page || this.page <= 0) && (this.page = 1),
                              r =
                                (n = (this.page - 1) * this.perPage) +
                                this.perPage,
                              i = [],
                              s = n;
                            s < r;
                            s++
                          )
                            (a = this._addressFromIndex(s)[0]),
                              i.push({ address: a, index: s + 1 });
                          return t.abrupt('return', i);
                        case 7:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return i.apply(this, arguments);
            })),
          (a.getAccounts =
            ((s = (0, _.Z)(
              H().mark(function t() {
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            'return',
                            this.wallets.map(function (t) {
                              return t.publicKey.toString('hex');
                            }),
                          );
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return s.apply(this, arguments);
            })),
          (a.getIndexByAddress = function (t) {
            for (var e in this._index2wallet)
              if (this._index2wallet[e][0] === t) return Number(e);
            return null;
          }),
          (a._addressFromIndex = function (t) {
            if (!this._index2wallet[t]) {
              var e = this.root.deriveChild(t),
                n = v.fromPrivateKey(e.privateKey, { network: this.network }),
                r = n.publicKey.toString('hex');
              this._index2wallet[t] = [r, n];
            }
            return this._index2wallet[t];
          }),
          e
        );
      })(tv).type = tm;
      var tw = n(30621),
        tT = n.n(tw),
        tS = n(42034),
        tP = n(9109).Buffer;
      function tb(t, e) {
        var n =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (t) {
              if ('string' == typeof t) return tI(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ('Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n)
              )
                return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tI(t, void 0);
            }
          })(t)) ||
          (e && t && 'number' == typeof t.length)
        ) {
          n && (t = n);
          var r = 0;
          return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
          };
        }
        throw TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function tI(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var tk = 'Keystone';
      (function (t) {
        function e(e) {
          var n;
          return (
            ((n = t.call(this) || this).type = tk),
            (n.mfp = ''),
            (n.keys = []),
            (n.activeIndexes = []),
            (n.root = null),
            (n.page = 0),
            (n.perPage = 5),
            (n.origin = 'UniSat Wallet'),
            e && n.deserialize(e),
            n
          );
        }
        (0, U.Z)(e, t);
        var n,
          r,
          i,
          s,
          a,
          o,
          u,
          c,
          d,
          l,
          h,
          f,
          g,
          v,
          y,
          x,
          m = e.prototype;
        return (
          (m.initFromUR =
            ((n = (0, _.Z)(
              H().mark(function t(e, n) {
                var r;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = new (tT())({
                              origin: this.origin,
                            }).parseAccount(new tw.UR(tP.from(n, 'hex'), e))),
                            (t.next = 4),
                            this.deserialize({
                              mfp: r.masterFingerprint,
                              keys: r.keys.map(function (t) {
                                return {
                                  path: t.path,
                                  extendedPublicKey: t.extendedPublicKey,
                                };
                              }),
                            })
                          );
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t, e) {
              return n.apply(this, arguments);
            })),
          (m.getHardenedPath = function (t) {
            return t.split('/').slice(0, 4).join('/');
          }),
          (m.getHDPublicKey = function (t) {
            var e = this.getHardenedPath(t),
              n = this.keys.find(function (t) {
                return t.path === e;
              });
            if (!n) throw Error('Invalid path');
            return new (td().HDPublicKey)(n.extendedPublicKey);
          }),
          (m.getDefaultHdPath = function () {
            return "m/44'/0'/0'/0";
          }),
          (m.initRoot = function () {
            var t;
            this.root = this.getHDPublicKey(
              null != (t = this.hdPath) ? t : this.getDefaultHdPath(),
            );
          }),
          (m.deserialize =
            ((r = (0, _.Z)(
              H().mark(function t(e) {
                var n;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (this.mfp = e.mfp),
                            (this.keys = e.keys),
                            (this.hdPath =
                              null != (n = e.hdPath)
                                ? n
                                : this.getDefaultHdPath()),
                            (this.activeIndexes = e.activeIndexes
                              ? [].concat(e.activeIndexes)
                              : []),
                            this.initRoot(),
                            null !== e.hdPath &&
                              void 0 !== e.hdPath &&
                              e.hdPath.length >= 13 &&
                              '1' === e.hdPath[e.hdPath.length - 1] &&
                              (this.root = this.root.derive('m/1'));
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return r.apply(this, arguments);
            })),
          (m.serialize =
            ((i = (0, _.Z)(
              H().mark(function t() {
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt('return', {
                            mfp: this.mfp,
                            keys: this.keys,
                            hdPath: this.hdPath,
                            activeIndexes: this.activeIndexes,
                          });
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return i.apply(this, arguments);
            })),
          (m.addAccounts =
            ((s = (0, _.Z)(
              H().mark(function t(e) {
                var n, r, i, s;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          for (
                            void 0 === e && (e = 1), n = e, r = 0, i = [];
                            n;

                          )
                            this.activeIndexes.includes(r)
                              ? r++
                              : ((s = this.getWalletByIndex(r)),
                                i.push(s.publicKey),
                                this.activeIndexes.push(r),
                                n--);
                          return t.abrupt('return', Promise.resolve(i));
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return s.apply(this, arguments);
            })),
          (m.addChangeAddressAccounts =
            ((a = (0, _.Z)(
              H().mark(function t(e) {
                var n, r, i, s;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          for (
                            void 0 === e && (e = 1), n = e, r = 0, i = [];
                            n;

                          )
                            this.activeIndexes.includes(r)
                              ? r++
                              : ((s = this.getChangeAddressWalletByIndex(r)),
                                i.push(s.publicKey),
                                this.activeIndexes.push(r),
                                n--);
                          return t.abrupt('return', Promise.resolve(i));
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return a.apply(this, arguments);
            })),
          (m.getAccounts =
            ((o = (0, _.Z)(
              H().mark(function t() {
                var e = this;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !(
                              null !== this.hdPath &&
                              void 0 !== this.hdPath &&
                              this.hdPath.length >= 13 &&
                              '1' === this.hdPath[this.hdPath.length - 1]
                            )
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            this.activeIndexes.map(function (t) {
                              return e.root
                                .derive('m/' + t)
                                .publicKey.toString('hex');
                            }),
                          );
                        case 2:
                          return t.abrupt(
                            'return',
                            this.activeIndexes.map(function (t) {
                              return e.getWalletByIndex(t).publicKey;
                            }),
                          );
                        case 3:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return o.apply(this, arguments);
            })),
          (m.getAccounts2 =
            ((u = (0, _.Z)(
              H().mark(function t() {
                var e = this;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            'return',
                            this.activeIndexes.map(function (t) {
                              var n = e.root.derive('m/' + t);
                              return {
                                index: t,
                                path: e.hdPath + '/' + t,
                                publicKey: n.publicKey.toString('hex'),
                              };
                            }),
                          );
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return u.apply(this, arguments);
            })),
          (m.getAccountsWithBrand =
            ((c = (0, _.Z)(
              H().mark(function t() {
                var e = this;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            'return',
                            this.activeIndexes.map(function (t) {
                              return {
                                address: e.getWalletByIndex(t).publicKey,
                                index: t,
                              };
                            }),
                          );
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function () {
              return c.apply(this, arguments);
            })),
          (m.getWalletByIndex = function (t) {
            var e = this.root.derive('m/0/' + t);
            return {
              index: t,
              path: this.hdPath + '/' + t,
              publicKey: e.publicKey.toString('hex'),
            };
          }),
          (m.getChangeAddressWalletByIndex = function (t) {
            var e = this.root.derive('m/1/' + t);
            return {
              index: t,
              path: this.hdPath + '/' + t,
              publicKey: e.publicKey.toString('hex'),
            };
          }),
          (m.removeAccount = function (t) {
            var e = this,
              n = this.activeIndexes.findIndex(function (n) {
                return e.getWalletByIndex(n).publicKey === t;
              });
            -1 !== n && this.activeIndexes.splice(n, 1);
          }),
          (m.exportAccount =
            ((d = (0, _.Z)(
              H().mark(function t(e) {
                return H().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        throw Error('Not supported');
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t) {
              return d.apply(this, arguments);
            })),
          (m.getFirstPage = function () {
            return (this.page = 0), this.getPage(1);
          }),
          (m.getNextPage = function () {
            return this.getPage(1);
          }),
          (m.getPreviousPage = function () {
            return this.getPage(-1);
          }),
          (m.getAddresses = function (t, e) {
            for (var n = [], r = t; r < e; r++) {
              var i = this.getWalletByIndex(r);
              n.push({ address: i.publicKey, index: r + 1 });
            }
            return n;
          }),
          (m.getPage =
            ((l = (0, _.Z)(
              H().mark(function t(e) {
                var n, r, i, s, a;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          for (
                            this.page += e,
                              (!this.page || this.page <= 0) && (this.page = 1),
                              r =
                                (n = (this.page - 1) * this.perPage) +
                                this.perPage,
                              i = [],
                              s = n;
                            s < r;
                            s++
                          )
                            (a = this.getWalletByIndex(s)),
                              i.push({ address: a.publicKey, index: s + 1 });
                          return t.abrupt('return', i);
                        case 7:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return l.apply(this, arguments);
            })),
          (m.activeAccounts = function (t) {
            for (var e, n = [], r = tb(t); !(e = r()).done; ) {
              var i = e.value,
                s = this.getWalletByIndex(i);
              this.activeIndexes.includes(i) || this.activeIndexes.push(i),
                n.push(s.publicKey);
            }
            return n;
          }),
          (m.changeHdPath = function (t) {
            (this.hdPath = t),
              this.initRoot(),
              this.activeAccounts(this.activeIndexes);
          }),
          (m.changeChangeAddressHdPath = function (t) {
            (this.hdPath = t),
              (this.root = this.getHDPublicKey(
                null != (e = this.hdPath) ? e : this.getDefaultHdPath(),
              )),
              (this.root = this.root.derive('m/1')),
              (this.activeIndexes = []);
            for (
              var e, n, r = [], i = tb(this.activeIndexes);
              !(n = i()).done;

            ) {
              var s = n.value,
                a = this.getChangeAddressWalletByIndex(s);
              this.activeIndexes.includes(s) || this.activeIndexes.push(s),
                r.push(a.publicKey);
            }
            return r;
          }),
          (m.getAccountByHdPath = function (t, e) {
            return "m/44'/0'/0'/1" === t
              ? this.getHDPublicKey(t)
                  .derive('m/1/' + e)
                  .publicKey.toString('hex')
              : this.getHDPublicKey(t)
                  .derive('m/0/' + e)
                  .publicKey.toString('hex');
          }),
          (m.getChangeAddressAccountByHdPath = function (t, e) {
            return this.getHDPublicKey(t)
              .derive('m/1/' + e)
              .publicKey.toString('hex');
          }),
          (m.genSignPsbtUr =
            ((h = (0, _.Z)(
              H().mark(function t(e) {
                var n, r;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = p.Psbt.fromHex(e)),
                            (r = new (tT())({
                              origin: this.origin,
                            }).btc.generatePSBT(n.data.toBuffer())),
                            t.abrupt('return', {
                              type: r.type,
                              cbor: r.cbor.toString('hex'),
                            })
                          );
                        case 4:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t) {
              return h.apply(this, arguments);
            })),
          (m.parseSignPsbtUr =
            ((f = (0, _.Z)(
              H().mark(function t(e, n) {
                var r;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = new (tT())({ origin: this.origin })),
                            t.abrupt(
                              'return',
                              r.btc.parsePSBT(new tw.UR(tP.from(n, 'hex'), e)),
                            )
                          );
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t, e) {
              return f.apply(this, arguments);
            })),
          (m.genSignMsgUr =
            ((g = (0, _.Z)(
              H().mark(function t(e, n) {
                var r,
                  i,
                  s,
                  a,
                  o = this;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((r = new (tT())({ origin: this.origin })),
                            void 0 !==
                              (i = this.activeIndexes.find(function (t) {
                                return o.getWalletByIndex(t).publicKey === e;
                              })))
                          ) {
                            t.next = 4;
                            break;
                          }
                          throw Error('publicKey not found');
                        case 4:
                          return (
                            (s = tS.uuid.v4()),
                            (a = r.btc.generateSignRequest({
                              requestId: s,
                              signData: tP.from(n).toString('hex'),
                              dataType: tw.KeystoneBitcoinSDK.DataType.message,
                              accounts: [
                                { path: this.hdPath + '/' + i, xfp: this.mfp },
                              ],
                              origin: this.origin,
                            })),
                            t.abrupt('return', {
                              requestId: s,
                              type: a.type,
                              cbor: a.cbor.toString('hex'),
                            })
                          );
                        case 7:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t, e) {
              return g.apply(this, arguments);
            })),
          (m.parseSignMsgUr =
            ((v = (0, _.Z)(
              H().mark(function t(e, n) {
                var r;
                return H().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = new (tT())({ origin: this.origin })),
                            t.abrupt(
                              'return',
                              r.btc.parseSignature(
                                new tw.UR(tP.from(n, 'hex'), e),
                              ),
                            )
                          );
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                );
              }),
            )),
            function (t, e) {
              return v.apply(this, arguments);
            })),
          (m.signMessage =
            ((y = (0, _.Z)(
              H().mark(function t(e, n) {
                return H().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          'return',
                          'Signing Message with Keystone should use genSignMsgUr and parseSignMsgUr',
                        );
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t, e) {
              return y.apply(this, arguments);
            })),
          (m.verifyMessage =
            ((x = (0, _.Z)(
              H().mark(function t(e, n, r) {
                return H().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', tp(e, n, r));
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )),
            function (t, e, n) {
              return x.apply(this, arguments);
            })),
          e
        );
      })(Z.EventEmitter).type = tk;
      var tN =
        (((s = {})[(s.UNKNOWN = -1)] = 'UNKNOWN'),
        (s[(s.INSUFFICIENT_BTC_UTXO = -2)] = 'INSUFFICIENT_BTC_UTXO'),
        (s[(s.INSUFFICIENT_ASSET_UTXO = -3)] = 'INSUFFICIENT_ASSET_UTXO'),
        (s[(s.NOT_SAFE_UTXOS = -4)] = 'NOT_SAFE_UTXOS'),
        (s[(s.ASSET_MAYBE_LOST = -5)] = 'ASSET_MAYBE_LOST'),
        s);
      ((a = {})[tN.UNKNOWN] = 'Unknown error'),
        (a[tN.INSUFFICIENT_BTC_UTXO] = 'Insufficient btc utxo'),
        (a[tN.INSUFFICIENT_ASSET_UTXO] = 'Insufficient asset utxo'),
        (a[tN.NOT_SAFE_UTXOS] = 'Not safe utxos'),
        (a[tN.ASSET_MAYBE_LOST] = 'Asset maybe lost');
      var tE = n(9109).Buffer,
        tO = (function () {
          function t(t, e, n) {
            void 0 === e && (e = y.MAINNET), void 0 === n && (n = m.P2WPKH);
            var r = x(e),
              i = v.fromWIF(t, r);
            (this.keyring = new tv([i.privateKey.toString('hex')])),
              this.keyring.addAccounts(1),
              (this.pubkey = i.publicKey.toString('hex')),
              (this.address = S(this.pubkey, n, e)),
              (this.network = r),
              (this.networkType = e),
              (this.addressType = n);
          }
          t.fromRandom = function (e, n) {
            void 0 === e && (e = m.P2WPKH), void 0 === n && (n = y.MAINNET);
            var r = x(n);
            return new t(v.makeRandom({ network: r }).toWIF(), n, e);
          };
          var e,
            n,
            r,
            i,
            s = t.prototype;
          return (
            (s.getNetworkType = function () {
              return this.networkType;
            }),
            (s.formatOptionsToSignInputs =
              ((e = (0, _.Z)(
                H().mark(function t(e, n) {
                  var r,
                    i,
                    s,
                    a,
                    o,
                    u = this;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = this.address),
                              (t.next = 3),
                              this.getPublicKey()
                            );
                          case 3:
                            return (
                              (i = t.sent),
                              (s = []),
                              n && n.toSignInputs
                                ? (s = n.toSignInputs.map(function (t) {
                                    var e,
                                      n = Number(t.index);
                                    if (isNaN(n))
                                      throw Error(
                                        'invalid index in toSignInput',
                                      );
                                    if (!t.address && !t.publicKey)
                                      throw Error(
                                        'no address or public key in toSignInput',
                                      );
                                    if (t.address && t.address != r)
                                      throw Error(
                                        'invalid address in toSignInput',
                                      );
                                    if (t.publicKey && t.publicKey != i)
                                      throw Error(
                                        'invalid public key in toSignInput',
                                      );
                                    var s =
                                      null == (e = t.sighashTypes)
                                        ? void 0
                                        : e.map(Number);
                                    if (null != s && s.some(isNaN))
                                      throw Error(
                                        'invalid sighash type in toSignInput',
                                      );
                                    return {
                                      index: n,
                                      publicKey: i,
                                      sighashTypes: s,
                                      disableTweakSigner: t.disableTweakSigner,
                                    };
                                  }))
                                : ((a = x(this.getNetworkType())),
                                  (o =
                                    'string' == typeof e
                                      ? p.Psbt.fromHex(e, { network: a })
                                      : e).data.inputs.forEach(function (t, e) {
                                    var n = null;
                                    if (t.witnessUtxo)
                                      (n = t.witnessUtxo.script),
                                        t.witnessUtxo.value;
                                    else if (t.nonWitnessUtxo) {
                                      var a = p.Transaction.fromBuffer(
                                        t.nonWitnessUtxo,
                                      ).outs[o.txInputs[e].index];
                                      (n = a.script), a.value;
                                    }
                                    var c =
                                      t.finalScriptSig || t.finalScriptWitness;
                                    if (n && !c) {
                                      var d = O(n, u.networkType);
                                      r === d &&
                                        s.push({
                                          index: e,
                                          publicKey: i,
                                          sighashTypes: t.sighashType
                                            ? [t.sighashType]
                                            : void 0,
                                        });
                                    }
                                  })),
                              t.abrupt('return', s)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t, n) {
                return e.apply(this, arguments);
              })),
            (s.signPsbt =
              ((n = (0, _.Z)(
                H().mark(function t(e, n) {
                  var r,
                    i,
                    s = this;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = n || {
                                autoFinalized: !0,
                                toSignInputs: [],
                              }),
                              (t.next = 3),
                              this.formatOptionsToSignInputs(e, n)
                            );
                          case 3:
                            if (0 != (i = t.sent).length) {
                              t.next = 6;
                              break;
                            }
                            throw Error('no input to sign');
                          case 6:
                            return (
                              e.data.inputs.forEach(function (t, e) {
                                var n = !(
                                    t.finalScriptSig || t.finalScriptWitness
                                  ),
                                  r =
                                    s.addressType === m.P2TR ||
                                    s.addressType === m.M44_P2TR,
                                  i = !t.tapInternalKey;
                                if (n && r && i) {
                                  var a,
                                    o = L(tE.from(s.pubkey, 'hex')),
                                    u = p.payments.p2tr({
                                      internalPubkey: o,
                                      network: x(s.networkType),
                                    }).output;
                                  (null == (a = t.witnessUtxo)
                                    ? void 0
                                    : a.script.toString('hex')) ==
                                    (null == u ? void 0 : u.toString('hex')) &&
                                    (t.tapInternalKey = o);
                                }
                              }),
                              (t.next = 9),
                              this.keyring.signTransaction(e, i)
                            );
                          case 9:
                            return (
                              (e = t.sent),
                              r.autoFinalized &&
                                i.forEach(function (t) {
                                  e.finalizeInput(t.index);
                                }),
                              t.abrupt('return', e)
                            );
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t, e) {
                return n.apply(this, arguments);
              })),
            (s.getPublicKey =
              ((r = (0, _.Z)(
                H().mark(function t() {
                  var e;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this.keyring.getAccounts();
                          case 2:
                            return (e = t.sent), t.abrupt('return', e[0]);
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function () {
                return r.apply(this, arguments);
              })),
            (s.signMessage =
              ((i = (0, _.Z)(
                H().mark(function t(e, n) {
                  var r;
                  return H().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('bip322-simple' !== n) {
                              t.next = 6;
                              break;
                            }
                            return (
                              (t.next = 3),
                              Q({
                                message: e,
                                address: this.address,
                                networkType: this.networkType,
                                wallet: this,
                              })
                            );
                          case 3:
                          case 11:
                            return t.abrupt('return', t.sent);
                          case 6:
                            return (t.next = 8), this.getPublicKey();
                          case 8:
                            return (
                              (r = t.sent),
                              (t.next = 11),
                              this.keyring.signMessage(r, e)
                            );
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    this,
                  );
                }),
              )),
              function (t, e) {
                return i.apply(this, arguments);
              })),
            t
          );
        })();
      function tA(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n(9109).Buffer;
      var t_ = {
        hasAtomicalsFT: function (t) {
          return !!t.find(function (t) {
            return t.atomicals.find(function (t) {
              return 'FT' === t.type;
            });
          });
        },
        hasAtomicalsNFT: function (t) {
          return !!t.find(function (t) {
            return t.atomicals.find(function (t) {
              return 'NFT' === t.type;
            });
          });
        },
        hasAtomicals: function (t) {
          return !!t.find(function (t) {
            return t.atomicals.length > 0;
          });
        },
        hasInscription: function (t) {
          return !!t.find(function (t) {
            return t.inscriptions.length > 0;
          });
        },
        hasAnyAssets: function (t) {
          return !!t.find(function (t) {
            return t.inscriptions.length > 0 || t.atomicals.length > 0;
          });
        },
        selectBtcUtxos: function (t, e) {
          for (
            var n,
              r = [],
              i = [],
              s = 0,
              a = (function (t, e) {
                var n =
                  ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                  Array.isArray(t) ||
                  (n = (function (t, e) {
                    if (t) {
                      if ('string' == typeof t) return tA(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ('Object' === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        'Map' === n || 'Set' === n)
                      )
                        return Array.from(t);
                      if (
                        'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return tA(t, void 0);
                    }
                  })(t))
                ) {
                  n && (t = n);
                  var r = 0;
                  return function () {
                    return r >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[r++] };
                  };
                }
                throw TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })(t);
            !(n = a()).done;

          ) {
            var o = n.value;
            s < e ? ((s += o.satoshis), r.push(o)) : i.push(o);
          }
          return { selectedUtxos: r, remainingUtxos: i };
        },
        getAddedVirtualSize: function (t) {
          if (t === m.P2WPKH || t === m.M44_P2WPKH) return 68;
          if (t === m.P2TR || t === m.M44_P2TR) return 57.5;
          if (t === m.P2PKH) return 149;
          if (t === m.P2SH_P2WPKH) return 92;
          throw Error('unknown address type');
        },
        getUtxoDust: function (t) {
          return t === m.P2WPKH || t === m.M44_P2WPKH
            ? 294
            : t === m.P2TR || t === m.M44_P2TR
              ? 330
              : 546;
        },
        getAddressUtxoDust: function (t, e) {
          return void 0 === e && (e = y.MAINNET), k(t).dust;
        },
      };
      n(9109).Buffer, n(9109).Buffer, n(37263), n(9109).Buffer, n(9109).Buffer;
    },
    70362: function (t, e, n) {
      'use strict';
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(91848);
      let i = r.vE.zO;
      r.vE.rn;
    },
    14498: function (t, e, n) {
      'use strict';
      n.d(e, {
        td: function () {
          return c.td;
        },
        YW: function () {
          return p;
        },
        zO: function () {
          return d.z;
        },
        cq: function () {
          return f.cq;
        },
        QV: function () {
          return f.QV;
        },
        pB: function () {
          return a.pB;
        },
        zU: function () {
          return a.zU;
        },
        y4: function () {
          return f.y4;
        },
        Sd: function () {
          return f.Sd;
        },
        Jh: function () {
          return c.Jh;
        },
      });
      var r,
        i,
        s = n(91848),
        a = n(16691);
      ((r = i || (i = {}))[(r.UNKNOWN = -1)] = 'UNKNOWN'),
        (r[(r.INSUFFICIENT_BTC_UTXO = -2)] = 'INSUFFICIENT_BTC_UTXO'),
        (r[(r.INSUFFICIENT_ASSET_UTXO = -3)] = 'INSUFFICIENT_ASSET_UTXO'),
        (r[(r.NOT_SAFE_UTXOS = -4)] = 'NOT_SAFE_UTXOS'),
        (r[(r.ASSET_MAYBE_LOST = -5)] = 'ASSET_MAYBE_LOST');
      let o = {
        [-1]: 'Unknown error',
        [-2]: 'Insufficient btc utxo',
        [-3]: 'Insufficient asset utxo',
        [-4]: 'Not safe utxos',
        [-5]: 'Asset maybe lost',
      };
      class u extends Error {
        constructor(t, e = o[t] || 'Unknown error') {
          super(e),
            (this.code = -1),
            (this.code = t),
            Object.setPrototypeOf(this, u.prototype);
        }
      }
      var c = n(3842),
        d = n(70362),
        l = n(9109).Buffer;
      function h(t) {
        if (t.addressType === s.DL.P2TR || t.addressType === s.DL.M44_P2TR)
          return {
            data: {
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                value: t.satoshis,
                script: l.from(t.scriptPk, 'hex'),
              },
              tapInternalKey: s.P6.toXOnly(l.from(t.pubkey, 'hex')),
            },
            utxo: t,
          };
        if (
          t.addressType === s.DL.P2WPKH ||
          t.addressType === s.DL.M44_P2WPKH ||
          t.addressType === s.DL.P2PKH
        )
          return {
            data: {
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                value: t.satoshis,
                script: l.from(t.scriptPk, 'hex'),
              },
            },
            utxo: t,
          };
        {
          let e = d.z.payments.p2wpkh({ pubkey: l.from(t.pubkey, 'hex') });
          return {
            data: {
              hash: t.txid,
              index: t.vout,
              witnessUtxo: {
                value: t.satoshis,
                script: l.from(t.scriptPk, 'hex'),
              },
              redeemScript: e.output,
            },
            utxo: t,
          };
        }
      }
      class p {
        setNetworkType(t) {
          this.networkType = t;
        }
        setEnableRBF(t) {
          this.enableRBF = t;
        }
        setFeeRate(t) {
          this.feeRate = t;
        }
        setChangeAddress(t) {
          this.changedAddress = t;
        }
        addInput(t) {
          this.utxos.push(t), this.inputs.push(h(t));
        }
        addPsbtInput(t) {
          let e = (0, a.rX)([t])[0];
          this.utxos.push(e), this.inputs.push({ data: t, utxo: e });
        }
        removeLastInput() {
          (this.utxos = this.utxos.slice(0, -1)),
            (this.inputs = this.inputs.slice(0, -1));
        }
        getTotalInput() {
          return (
            console.log(this.inputs),
            this.inputs.reduce((t, e) => t + e.data.witnessUtxo.value, 0)
          );
        }
        getTotalOutput() {
          return this.outputs.reduce((t, e) => t + e.value, 0);
        }
        getUnspent() {
          return this.getTotalInput() - this.getTotalOutput();
        }
        async calNetworkFee() {
          let t = (await this.createEstimatePsbt())
            .extractTransaction(!0)
            .virtualSize();
          return (
            console.log('txSize', t),
            console.log('txSize', this.feeRate),
            Math.ceil(t * this.feeRate)
          );
        }
        addOutput(t, e, n) {
          this.outputs.push({ address: t, script: n, value: e });
        }
        getOutput(t) {
          return this.outputs[t];
        }
        addChangeOutput(t) {
          this.outputs.push({ address: this.changedAddress, value: t }),
            (this.changeOutputIndex = this.outputs.length - 1);
        }
        getChangeOutput() {
          return this.outputs[this.changeOutputIndex];
        }
        getChangeAmount() {
          let t = this.getChangeOutput();
          return t ? t.value : 0;
        }
        removeChangeOutput() {
          this.outputs.splice(this.changeOutputIndex, 1),
            (this.changeOutputIndex = -1);
        }
        removeRecentOutputs(t) {
          this.outputs.splice(-t);
        }
        toPsbt() {
          let t = (0, c.Jh)(this.networkType),
            e = new d.z.Psbt({ network: t });
          return (
            this.inputs.forEach((t, n) => {
              t.utxo.addressType === s.DL.P2PKH &&
                (e.__CACHE.__UNSAFE_SIGN_NONSEGWIT = !0),
                e.data.addInput(t.data),
                this.enableRBF && e.setInputSequence(n, 4294967293);
            }),
            this.outputs.forEach((t) => {
              e.addOutput(t);
            }),
            e
          );
        }
        clone() {
          let t = new p({
            address: this.changedAddress,
            network: this.networkType,
            feeRate: this.feeRate,
          });
          return (
            t.setEnableRBF(this.enableRBF),
            (t.utxos = this.utxos.map((t) => Object.assign({}, t))),
            (t.inputs = this.inputs.map((t) => t)),
            (t.outputs = this.outputs.map((t) => t)),
            t
          );
        }
        async createEstimatePsbt() {
          let t = s.gU.Q.fromRandom(
              this.inputs[0].utxo.addressType,
              this.networkType,
            ),
            e = s.Lk.addressToScriptPk(t.address, this.networkType).toString(
              'hex',
            ),
            n = this.clone();
          n.utxos.forEach((n) => {
            (n.pubkey = t.pubkey), (n.scriptPk = e);
          }),
            (n.inputs = []),
            n.utxos.forEach((t) => {
              let e = h(t);
              n.inputs.push(e);
            });
          let r = n.toPsbt(),
            i = n.inputs.map((e, n) => ({ index: n, publicKey: t.pubkey }));
          return await t.signPsbt(r, { autoFinalized: !0, toSignInputs: i }), r;
        }
        selectSuitableBtcUtxos() {
          let t = this.getTotalInput(),
            e = this.getTotalOutput() + this._cacheNetworkFee;
          if (t < e) {
            let { selectedUtxos: n, remainingUtxos: r } =
              s.PS.Nc.selectBtcUtxos(this._cacheBtcUtxos, e - t);
            if (0 == n.length) throw new u(i.INSUFFICIENT_BTC_UTXO);
            n.forEach((t) => {
              this.addInput(t),
                this._cacheToSignInputs.push({
                  index: this.inputs.length - 1,
                  publicKey: t.pubkey,
                }),
                (this._cacheNetworkFee +=
                  s.PS.Nc.getAddedVirtualSize(t.addressType) * this.feeRate);
            }),
              (this._cacheBtcUtxos = r),
              this.selectSuitableBtcUtxos();
          }
        }
        selectBtcUtxos() {
          if (0 == this._cacheBtcUtxos.length)
            throw new u(i.INSUFFICIENT_BTC_UTXO);
          this._cacheBtcUtxos.forEach((t) => {
            this.addInput(t),
              this._cacheToSignInputs.push({
                index: this.inputs.length - 1,
                publicKey: t.pubkey,
              }),
              (this._cacheNetworkFee +=
                s.PS.Nc.getAddedVirtualSize(t.addressType) * this.feeRate);
          });
        }
        async addSufficientUtxosForFee(t) {
          let { forceAsFee: e = !1, suitable: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (t.length > 0) {
            this._cacheBtcUtxos = t;
            let e = Object.assign({}, t[0]);
            (e.satoshis = 21e14), this.addInput(e), this.addChangeOutput(0);
            let r = await this.calNetworkFee(),
              i = s.PS.Nc.getAddedVirtualSize(e.addressType);
            (this._cacheNetworkFee = r - i * this.feeRate),
              this.removeLastInput(),
              n ? this.selectSuitableBtcUtxos() : this.selectBtcUtxos();
          } else {
            if (e || this.getTotalInput() < this.getTotalOutput())
              throw new u(i.INSUFFICIENT_BTC_UTXO);
            this._cacheNetworkFee = await this.calNetworkFee();
          }
          let r =
            this.getTotalInput() -
            this.getTotalOutput() -
            Math.ceil(this._cacheNetworkFee);
          return (
            r > s.EP
              ? (this.removeChangeOutput(), this.addChangeOutput(r))
              : this.removeChangeOutput(),
            this._cacheToSignInputs
          );
        }
        async dumpTx(t) {
          let e = t.extractTransaction(),
            n = t.getFeeRate();
          console.log(
            '\n=============================================================================================\nSummary\n  txid:     '
              .concat(e.getId(), '\n  Size:     ')
              .concat(e.byteLength(), '\n  Fee Paid: ')
              .concat(t.getFee(), '\n  Fee Rate: ')
              .concat(n, ' sat/vB\n  Detail:   ')
              .concat(t.txInputs.length, ' Inputs, ')
              .concat(
                t.txOutputs.length,
                ' Outputs\n----------------------------------------------------------------------------------------------\nInputs\n',
              )
              .concat(
                this.inputs
                  .map((t, e) =>
                    '\n=>'
                      .concat(e, ' ')
                      .concat(
                        t.data.witnessUtxo.value,
                        ' Sats\n        lock-size: ',
                      )
                      .concat(
                        t.data.witnessUtxo.script.length,
                        '\n        via ',
                      )
                      .concat(t.data.hash, ' [')
                      .concat(t.data.index, ']\n'),
                  )
                  .join(''),
                '\ntotal: ',
              )
              .concat(
                this.getTotalInput(),
                ' Sats\n----------------------------------------------------------------------------------------------\nOutputs\n',
              )
              .concat(
                this.outputs
                  .map((t, e) =>
                    '\n=>'
                      .concat(e, ' ')
                      .concat(t.address, ' ')
                      .concat(t.value, ' Sats'),
                  )
                  .join(''),
                '\n\ntotal: ',
              )
              .concat(
                this.getTotalOutput(),
                ' Sats\n=============================================================================================\n    ',
              ),
          );
        }
        constructor({ address: t, network: e, feeRate: n }) {
          (this.utxos = []),
            (this.inputs = []),
            (this.outputs = []),
            (this.changeOutputIndex = -1),
            (this.enableRBF = !0),
            (this._cacheNetworkFee = 0),
            (this._cacheBtcUtxos = []),
            (this._cacheToSignInputs = []),
            (this.changedAddress = t),
            (this.networkType = e),
            (this.feeRate = n);
        }
      }
      var f = n(3442);
    },
    3842: function (t, e, n) {
      'use strict';
      n.d(e, {
        Jh: function () {
          return a;
        },
        td: function () {
          return i;
        },
      });
      var r,
        i,
        s = n(91848);
      function a(t) {
        return 0 === t
          ? s.vE.zO.networks.bitcoin
          : 1 === t
            ? s.vE.zO.networks.testnet
            : s.vE.zO.networks.regtest;
      }
      ((r = i || (i = {}))[(r.MAINNET = 0)] = 'MAINNET'),
        (r[(r.TESTNET = 1)] = 'TESTNET'),
        (r[(r.REGTEST = 2)] = 'REGTEST');
    },
    3442: function (t, e, n) {
      'use strict';
      n.d(e, {
        QV: function () {
          return c;
        },
        Sd: function () {
          return u;
        },
        cq: function () {
          return d;
        },
        kd: function () {
          return o;
        },
        y4: function () {
          return l;
        },
      });
      var r = n(14498),
        i = n(16691),
        s = n(77497),
        a = n(66798);
      function o(t) {
        var e;
        return null === (e = s.Xf.fmt.toAsm(s.kL.toScriptPubKey(t))) ||
          void 0 === e
          ? void 0
          : e[0];
      }
      function u(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'mainnet';
        try {
          let n = a.address.fromBech32(t),
            r =
              ('bc' === n.prefix && 'testnet' !== e) ||
              ('tb' === n.prefix && 'testnet' === e),
            i = 1 === n.version;
          return console.log(r), console.log(i), r && i;
        } catch (t) {
          return console.error(t), !1;
        }
      }
      async function c(t) {
        let {
            utxos: e,
            outputs: n,
            feeRate: s,
            network: a,
            address: o,
            publicKey: u,
            suitable: c = !0,
          } = t,
          d = (0, i.pB)({ utxos: e, address: o, publicKey: u }),
          l = new r.YW({
            address: o,
            network: 'testnet' == a ? r.td.TESTNET : r.td.MAINNET,
            feeRate: s,
          });
        return (
          l.setEnableRBF(!0),
          n.forEach((t) => {
            l.addOutput(t.address, t.value, t.script);
          }),
          console.log(d),
          await l.addSufficientUtxosForFee(d, { suitable: c }),
          await l.calNetworkFee()
        );
      }
      async function d(t) {
        let {
            utxos: e,
            outputs: n,
            feeRate: s,
            network: a,
            address: o,
            publicKey: u,
            suitable: c = !0,
          } = t,
          d = (0, i.pB)({ utxos: e, address: o, publicKey: u }),
          l = new r.YW({
            address: o,
            network: 'testnet' == a ? r.td.TESTNET : r.td.MAINNET,
            feeRate: s,
          });
        return (
          console.log(d),
          l.setEnableRBF(!0),
          n.forEach((t) => {
            l.addOutput(t.address, t.value, t.script);
          }),
          await l.addSufficientUtxosForFee(d, { suitable: c }),
          l.toPsbt()
        );
      }
      async function l(t) {
        let {
            utxos: e,
            outputs: n,
            feeRate: s,
            network: a,
            address: o,
            publicKey: u,
            suitable: c = !0,
          } = t,
          d = (0, i.pB)({ utxos: e, address: o, publicKey: u }),
          l = new r.YW({
            address: o,
            network: 'testnet' == a ? r.td.TESTNET : r.td.MAINNET,
            feeRate: s,
          });
        return (
          console.log(d),
          l.setEnableRBF(!0),
          n.forEach((t) => {
            l.addOutput(t.address, t.value, t.script);
          }),
          await l.addSufficientUtxosForFee(d, { suitable: c }),
          l
        );
      }
    },
    16691: function (t, e, n) {
      'use strict';
      n.d(e, {
        pB: function () {
          return o;
        },
        rX: function () {
          return u;
        },
        zU: function () {
          return c;
        },
      });
      var r,
        i,
        s = n(77497);
      n(62124),
        n(9109).Buffer,
        ((r = i || (i = {}))[(r.P2PKH = 0)] = 'P2PKH'),
        (r[(r.P2WPKH = 1)] = 'P2WPKH'),
        (r[(r.P2TR = 2)] = 'P2TR'),
        (r[(r.P2SH_P2WPKH = 3)] = 'P2SH_P2WPKH'),
        (r[(r.M44_P2WPKH = 4)] = 'M44_P2WPKH'),
        (r[(r.M44_P2TR = 5)] = 'M44_P2TR'),
        (r[(r.P2WSH = 6)] = 'P2WSH'),
        (r[(r.P2SH = 7)] = 'P2SH'),
        (r[(r.UNKNOWN = 8)] = 'UNKNOWN');
      let a = (t) => {
          var e;
          return null === (e = s.Xf.fmt.toAsm(s.kL.toScriptPubKey(t))) ||
            void 0 === e
            ? void 0
            : e[0];
        },
        o = (t) => {
          let { utxos: e, address: n, publicKey: r, addressType: i = 2 } = t;
          return e.map((t) => ({
            txid: t.txid,
            vout: t.vout,
            satoshis: t.value,
            addressType: i,
            pubkey: r,
            scriptPk: a(n),
            inscriptions: [],
            atomicals: [],
          }));
        },
        u = (t) =>
          t.map((t) => ({
            txid: t.hash,
            vout: t.index,
            satoshis: t.witnessUtxo.value,
            scriptPk: t.witnessUtxo.script.toString('hex'),
            pubkey: '',
            addressType: 2,
            inscriptions: [],
            atomicals: [],
          })),
        c = function (t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let r = structuredClone(t),
            i = [],
            s = 0;
          for (let t = 0; t < r.length; t++) {
            let a = r[t];
            if (
              -1 ===
                n.findIndex((t) => t.txid === a.txid && t.vout === a.vout) &&
              (i.push(a), (s += a.value) >= e)
            )
              break;
          }
          return { utxos: i, total: s };
        };
    },
    65647: function (t, e, n) {
      'use strict';
      n.d(e, {
        Ny: function () {
          return v;
        },
        cp: function () {
          return u;
        },
        Ee: function () {
          return c;
        },
        IV: function () {
          return y;
        },
        Lq: function () {
          return p;
        },
        JU: function () {
          return o;
        },
        YL: function () {
          return g;
        },
      });
      var r = n(39099),
        i = n(89291),
        s = n(57603),
        a = n(69077);
      let o = (0, r.Ue)()(
          (0, i.mW)((t, e) => ({
            unit: 'sats',
            amountUnit: 'btc',
            assets_type: '',
            assets_name: '',
            list: [],
            changePrice(n, r) {
              let {
                list: i,
                assets_type: o,
                amountUnit: u,
                unit: c,
                assets_name: d,
              } = e();
              i.find((t) => t.utxo === n);
              let l = [];
              for (let t = 0; t < i.length; t++) {
                let e = i[t];
                if (e.utxo === n) {
                  var h, p, f, g;
                  let t = 0;
                  if (
                    ((t =
                      'ns' === o
                        ? 1
                        : 'exotic' === o
                          ? (null === (p = e.assets_list) || void 0 === p
                              ? void 0
                              : null ===
                                    (h = p.find(
                                      (t) => 'exotic' === t.assets_type,
                                    )) || void 0 === h
                                ? void 0
                                : h.amount) || 0
                          : (null === (g = e.assets_list) || void 0 === g
                              ? void 0
                              : null ===
                                    (f = g.find((t) => t.assets_name === d)) ||
                                  void 0 === f
                                ? void 0
                                : f.amount) || 0),
                    '' === r || isNaN(Number(r)))
                  )
                    (e.unit_price = ''), (e.price = '');
                  else {
                    let n = 'btc' === c ? (0, a.g)(r).toString() : r,
                      i = new s.t(n).mul(new s.t(t)).toNumber();
                    (i = Math.ceil(i).toString()),
                      (i =
                        'btc' === u ? (0, a.Ay)(i.toString()).toString() : i),
                      (e.unit_price = n),
                      (e.price = i);
                  }
                }
                l.push(e);
              }
              t({ list: l });
            },
            changeAssetsName(e) {
              t({ assets_name: e });
            },
            changeAssetsType(e) {
              t({ assets_type: e });
            },
            changeStatus(n, r) {
              let { list: i } = e();
              t({
                list: i.map((t) => (t.utxo === n ? { ...t, status: r } : t)),
              });
            },
            changeUnit(n) {
              let {
                  list: r,
                  assets_type: i,
                  amountUnit: o,
                  assets_name: u,
                } = e(),
                c = r.map((t) => {
                  var e, r, c, d;
                  let l =
                      'btc' === n
                        ? (0, a.Ay)(t.unit_price).toString()
                        : (0, a.g)(t.unit_price).toString(),
                    h = 0;
                  h =
                    'ns' === i
                      ? 1
                      : 'exotic' === i
                        ? (null === (r = t.assets_list) || void 0 === r
                            ? void 0
                            : null ===
                                  (e = r.find(
                                    (t) => 'exotic' === t.assets_type,
                                  )) || void 0 === e
                              ? void 0
                              : e.amount) || 0
                        : (null === (d = t.assets_list) || void 0 === d
                            ? void 0
                            : null ===
                                  (c = d.find((t) => t.assets_name === u)) ||
                                void 0 === c
                              ? void 0
                              : c.amount) || 0;
                  let p = 'btc' === n ? (0, a.g)(l).toString() : l,
                    f = new s.t(p).mul(new s.t(h)).toString();
                  return (
                    (f = 'btc' === o ? (0, a.Ay)(f).toString() : f),
                    { ...t, unit_price: l, price: f }
                  );
                });
              t({ unit: n, list: c });
            },
            changeAmountUnit(n) {
              let { list: r } = e(),
                i = r.map((t) => ({
                  ...t,
                  price:
                    'btc' === n
                      ? (0, a.Ay)(t.price).toString()
                      : (0, a.g)(t.price).toString(),
                }));
              t({ amountUnit: n, list: i });
            },
            add: (n) => {
              let { list: r, assets_type: i, assets_name: o } = e();
              if (!r.find((t) => t.utxo === n.utxo)) {
                var u, c, d, l;
                let e = 0;
                e =
                  'ns' === i
                    ? 1
                    : 'exotic' === i
                      ? (null === (c = n.assets_list) || void 0 === c
                          ? void 0
                          : null ===
                                (u = c.find(
                                  (t) => 'exotic' === t.assets_type,
                                )) || void 0 === u
                            ? void 0
                            : u.amount) || 0
                      : (null === (l = n.assets_list) || void 0 === l
                          ? void 0
                          : null === (d = l.find((t) => t.assets_name === o)) ||
                              void 0 === d
                            ? void 0
                            : d.amount) || 0;
                let r = new s.t(n.unit_price).mul(new s.t(e)).toString();
                (r = (0, a.Ay)(r).toString()),
                  t((t) => ({ list: [...t.list, { ...n, price: r }] }));
              }
            },
            remove: (e) => {
              t((t) => ({ list: t.list.filter((t) => t.utxo !== e) }));
            },
            reset: () => {
              t({
                assets_name: '',
                assets_type: '',
                unit: 'sats',
                amountUnit: 'btc',
                list: [],
              });
            },
          })),
        ),
        u = (0, r.Ue)()(
          (0, i.mW)((t, e) => ({
            list: [],
            setList: (e) => {
              t({ list: e });
            },
            changePrice(n, r) {
              let { list: i } = e();
              t({
                list: i.map((t) => (t.utxo === n ? { ...t, price: r } : t)),
              });
            },
            changeStatus(n, r) {
              let { list: i } = e();
              t({
                list: i.map((t) => (t.utxo === n ? { ...t, status: r } : t)),
              });
            },
            add: (n) => {
              let { list: r } = e();
              !r.find((t) => t.utxo === n.utxo) &&
                r.length < 32 &&
                t((t) => ({ list: [...t.list, n] }));
            },
            remove: (e) => {
              t((t) => ({ list: t.list.filter((t) => t.utxo !== e) }));
            },
            reset: () => {
              t({ list: [] });
            },
          })),
        ),
        c = (0, r.Ue)()(
          (0, i.mW)(
            (0, i.tJ)(
              (t) => ({
                feeRate: { value: 1, type: 'custom' },
                network: 'livenet',
                btcHeight: 0,
                runtimeEnv: 'dev',
                btcPrice: 0,
                appVersion: 0,
                signature: '',
                setEnv: (e) => {
                  t({ runtimeEnv: e });
                },
                changeNetwork: (e) => {
                  t({ network: e });
                },
                setAppVersion: (e) => {
                  t({ appVersion: e });
                },
                setSignature: (e) => {
                  t({ signature: e });
                },
                setFeeRate: (e) => {
                  t({ feeRate: e });
                },
                setBtcPrice: (e) => {
                  t({ btcPrice: e });
                },
                setHeight: (e) => {
                  t({ btcHeight: e });
                },
                reset: () => {
                  t({
                    btcHeight: 0,
                    feeRate: { value: 1, type: 'custom' },
                    appVersion: 0,
                  });
                },
              }),
              {
                name: 'common-store',
                partialize: (t) =>
                  Object.fromEntries(
                    Object.entries(t).filter((t) => {
                      let [e] = t;
                      return ['signature'].includes(e);
                    }),
                  ),
              },
            ),
          ),
        );
      var d = n(19271),
        l = n(37342),
        h = n(18182);
      let p = (0, r.Ue)()(
        (0, i.mW)((t, e) => ({
          list: [],
          saveLength: 0,
          setList: (e) => {
            t({ list: e });
          },
          add: (n) => {
            t({ list: [...e().list, n] });
          },
          addLocalOrders: (n) => {
            let r = [...e().list, ...n];
            console.log('newList', (r = (0, l.Tw)(r, (t) => t.orderId))),
              t({ list: r });
          },
          checkAllList: () => {
            let n = e().list.length,
              r = [];
            for (let t = 0; t < n; t++) {
              let n = e().list[t],
                i = Date.now() - n.createAt;
              if (
                (console.log('dis', i),
                ['pending', 'inscribe_success', 'timeout'].includes(n.status) &&
                  i > 6048e5)
              ) {
                console.log('超时订单', n.orderId);
                continue;
              }
              'pending' === n.status &&
                i > 3e5 &&
                ((n.status = 'timeout'), (n.inscription = {}), (n.files = [])),
                r.push(n);
            }
            t({ list: r });
          },
          addSucccessTxid: (n, r) => {
            t({
              list: e().list.map((t) => (t.orderId === n && (t.txid = r), t)),
            });
          },
          addTxidToInscription: (n, r, i) => {
            t({
              list: e().list.map(
                (t) => (t.orderId === n && (t.inscription.txid = i), t),
              ),
            });
          },
          setCommitTx: (n, r) => {
            t({
              list: e().list.map(
                (t) => (t.orderId === n && (t.commitTx = r), t),
              ),
            });
          },
          changeInscriptionStatus: async (n, r, i) => {
            let s = e().list.map(
              (t) => (t.orderId === n && (t.inscription.status = i), t),
            );
            await d.H.setList(s), t({ list: s });
          },
          changeStatus: async (n, r) => {
            let i = e().list.map((t) => (t.orderId === n && (t.status = r), t));
            await (0, h.vU)(d.H.setList)(i), t({ list: i });
          },
          savePaidOrder: async (n, r) => {
            let { list: i, saveLength: s } = e(),
              a = i.filter(
                (t) =>
                  'inscribe_fail' == t.status || 'commit_error' == t.status,
              );
            a.length && s !== a.length && t({ saveLength: a.length });
          },
          findOrder: (t) => e().list.find((e) => e.orderId === t),
          reset: () => {
            t({ list: [], saveLength: 0 });
          },
        })),
      );
      var f = n(59430);
      let g = (0, r.Ue)()(
          (0, i.mW)((t, e) => ({
            list: [],
            setList: (e) => {
              (0, l.DY)(e, (t) => t.value, !0), t({ list: e });
            },
            add: (n) => {
              let r = e().list;
              r.push(n), (0, l.DY)(r, (t) => t.value, !0), t({ list: r });
            },
            remove: (n) => {
              t({ list: e().list.filter((t) => t.utxo !== n) });
            },
            removeUtxos: (n) => {
              console.log('source Utxos', n);
              let r = e().list.filter(
                (t) => !n.find((e) => e.txid === t.txid && e.vout === t.vout),
              );
              console.log('removeUtxos', r), t({ list: r });
            },
            getUnspendUtxos: () => {
              let { list: t } = e();
              return [
                ...t.filter(
                  (t) => 'unspend' === t.status && 'local' !== t.location,
                ),
                ...t.filter(
                  (t) => 'unspend' === t.status && 'local' === t.location,
                ),
              ];
            },
            changeUtxosStatus: (n, r) => {
              t({
                list: e().list.map(
                  (t) => (
                    n.find((e) => e.utxo === t.utxo) && (t.status = r), t
                  ),
                ),
              });
            },
            selectUtxosByAmount: (n) => {
              let { list: r } = e(),
                i = r.filter(
                  (t) => 'unspend' === t.status && 'local' !== t.location,
                ),
                s = i.filter((t) => t.value >= n),
                a = [];
              return (
                (a = s.length ? [s[s.length - 1]] : (0, f.zU)(i, n).utxos),
                t({ list: r }),
                a
              );
            },
            reset: () => {
              t({ list: [] });
            },
          })),
        ),
        v = (0, r.Ue)()(
          (0, i.mW)((t) => ({
            name: '',
            action: 'create',
            content: '',
            inscriptionId: '',
            setInscriptionId: (e) => t({ inscriptionId: e }),
            setName: (e) => t({ name: e }),
            setAction: (e) => t({ action: e }),
            setContent: (e) => t({ content: e }),
            reset: () => {
              t({ name: '', action: 'create', content: '' });
            },
          })),
        ),
        y = (0, r.Ue)()(
          (0, i.mW)((t) => ({
            inscribeData: {},
            setData: (e) => t(() => ({ inscribeData: e })),
            reset: () => {
              t({ inscribeData: {} });
            },
          })),
        );
    },
  },
]);
