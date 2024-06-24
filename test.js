const radash = require('radash');
const flat = radash.flat;

const splitRareUtxosByValue = (utxos, amount, chunks) => {
  const sats = flat(utxos.map((v) => v.sats));
  let ranges = [];
  console.log(sats);
  const totalRanges = [];
  let totalSize = 0;
  for (let i = 0; i < sats.length; i++) {
    const item = sats[i];
    console.log('index', i);
    const { size, start, offset } = item;
    totalSize += size;
    if (totalSize > amount) {
      const dis = totalSize - amount;
      const others = size - dis;
      ranges.push({
        start,
        size: others,
        offset,
      });
      totalRanges.push(ranges);
      if (dis < amount) {
        ranges = [
          {
            start: start + others,
            size: dis,
            offset: offset + others,
          },
        ];
        totalSize = dis;
      } else {
        const othersChunks = Math.floor(dis / amount);
        const othersDis = dis % amount;
        for (let j = 0; j < othersChunks; j++) {
          totalRanges.push([
            {
              start: start + others + j * amount,
              size: amount,
              offset: offset + others + j * amount,
            },
          ]);
          ranges = [];
          totalSize = 0;
        }
        if (othersDis > 0) {
          console.log(start);
          console.log(start + others + othersChunks * amount);
          ranges = [
            {
              start: start + others + othersChunks * amount,
              size: othersDis,
              offset: offset + others + othersChunks * amount,
            },
          ];
          totalSize = othersDis;
        }
      }
    } else {
      ranges.push({
        start,
        size,
        offset,
      });
    }
  }
  console.log('ranges', ranges);
  return totalRanges;
};

const utxosData = [
  {
    sats: [
      {
        start: 1000,
        size: 1060,
        offset: 6,
      },
      {
        start: 2080,
        size: 1030,
        offset: 1996,
      },
      {
        start: 4080,
        size: 10,
        offset: 6000,
      },
    ],
  },
];

console.log(splitRareUtxosByValue(utxosData, 500));
