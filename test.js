const radash = require('radash');
const flat = radash.flat;

const splitUtxosByValue = (utxos, amount, chunks) => {
  const sats = flat(utxos.map((v) => v.sats));
  let ranges = [];
  console.log(sats);
  const totalRanges = [];
  let totalSize = 0;
  for (let i = 0; i < sats.length; i++) {
    const item = sats[i];
    console.log('index', i);
    const { size, start } = item;
    console.log(start, size);
    totalSize += size;
    if (totalSize > amount && totalRanges.length < chunks) {
      const dis = totalSize - amount;
      const others = size - dis;
      console.log(dis, others);
      ranges.push({
        start,
        size: others,
      });
      totalRanges.push(ranges);
      if (dis < amount) {
        ranges = [
          {
            start: start + others,
            size: dis,
          },
        ];
        totalSize = dis;
      } else {
        const othersChunks = Math.floor(dis / amount);
        const othersDis = dis % amount;
        for (let j = 0; j < othersChunks; j++) {
          if (totalRanges.length < chunks) {
            totalRanges.push([
              {
                start: start + others + j * amount,
                size: amount,
              },
            ]);
          }
        }
        if (othersDis > 0) {
          if (totalRanges.length < chunks) {
            ranges = [
              {
                start: start + others + othersChunks * amount,
                size: othersDis,
              },
            ];
            totalSize = othersDis;
          }
        }
      }
    } else if (totalRanges.length < chunks) {
      ranges.push({
        start,
        size,
      });
    }
  }
  return totalRanges;
};

const utxosData = [
  {
    sats: [
      {
        start: 1000,
        size: 1060,
      },
      {
        start: 2000,
        size: 300,
      },
    ],
  },
  {
    sats: [
      {
        start: 6000,
        size: 222,
      },
      {
        start: 7000,
        size: 700,
      },
    ],
  },
];

console.log(splitUtxosByValue(utxosData, 300, 6));
