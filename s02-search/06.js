// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
function solution(arrs) {
  const hsums = Array.from({ length: 5 }, () => 0);
  const vsums = Array.from({ length: 5 }, () => 0);
  const xsums = Array.from({ length: 2 }, () => 0);
  for (let i = 0; i < arrs.length; i++) {
    hsums[0] += arrs[0][i];
    hsums[1] += arrs[1][i];
    hsums[2] += arrs[2][i];
    hsums[3] += arrs[3][i];
    hsums[4] += arrs[4][i];
    vsums[0] += arrs[i][0];
    vsums[1] += arrs[i][1];
    vsums[2] += arrs[i][2];
    vsums[3] += arrs[i][3];
    vsums[4] += arrs[i][4];
    xsums[0] += arrs[i][i];
    xsums[1] += arrs[Math.abs(i - 4)][i];
  }
  const sums = hsums.concat(vsums, xsums);
  const max = Math.max(...sums);
  return max;

  // const n = arrs.length;
  // const hsums = Array.from({ length: n }, () => 0);
  // const vsums = Array.from({ length: n }, () => 0);
  // let mainDiagSum = 0;
  // let antiDiagSum = 0;

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     hsums[i] += arrs[i][j]; // 행 합
  //     vsums[j] += arrs[i][j]; // 열 합
  //     if (i === j) mainDiagSum += arrs[i][j]; // 주 대각선 합
  //     if (i + j === n - 1) antiDiagSum += arrs[i][j]; // 반대 대각선 합
  //   }
  // }

  // const max = Math.max(...hsums, ...vsums, mainDiagSum, antiDiagSum);
  // return max;
}

const inputs = [
  [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ],
];
const expected = [155];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
