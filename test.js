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

function convertHexToLittleEndianInteger(hexString) {
  // 1. 验证16进制字符串长度，确保为8个字符
  // if (hexString.length !== 8 || !/^[0-9A-Fa-f]+$/.test(hexString)) {
  //   throw new Error('Invalid hex string for a 32-bit unsigned integer.');
  // }

  // 2. 创建一个4字节的ArrayBuffer
  const buffer = new ArrayBuffer(4);

  // 3. 创建DataView来操作ArrayBuffer
  const view = new DataView(buffer);

  // 4. 将16进制字符串转换为整数，并以小端格式写入
  // 首先，需要将16进制字符串转换为大写，然后转换为10进制整数
  const value = parseInt(hexString, 16);
  view.setUint32(0, value, true);

  // 5. 读取数值
  const integerValue = view.getUint32(0, true);

  // 返回转换后的数值
  return integerValue;
}

// 使用示例
const hexString = '28a00000'; // 16进制字符串示例
const integerValue = convertHexToLittleEndianInteger(hexString);
console.log(integerValue); // 输出：305419896（即0x12345678）
