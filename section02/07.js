// 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
// 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개
// 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
function solution(arrs) {
  let count = 0;
  for (let i = 0; i < arrs.length; i++) {
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    for (let j = 0; j < arrs.length; j++) {
      if (arrs[i + 1]?.[j]) south = arrs[i + 1][j];
      if (arrs[i - 1]?.[j]) north = arrs[i - 1][j];
      if (arrs[i]?.[j + 1]) east = arrs[i][j + 1];
      if (arrs[i]?.[j - 1]) west = arrs[i][j - 1];
      const temp = [arrs[i][j], north, south, east, west];
      const max = Math.max(...temp);
      if (max === arrs[i][j]) count++;
      north = south = east = west = 0;
    }
  }
  return count;

  // let count = 0;
  // const n = arrs.length;

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     // 상하좌우 값 가져오기, 범위를 넘어가는 경우 0으로 설정
  //     const north = i > 0 ? arrs[i - 1][j] : 0;
  //     const south = i < n - 1 ? arrs[i + 1][j] : 0;
  //     const west = j > 0 ? arrs[i][j - 1] : 0;
  //     const east = j < n - 1 ? arrs[i][j + 1] : 0;

  //     // 현재 위치가 상하좌우 값보다 큰지 확인
  //     if (
  //       arrs[i][j] > north &&
  //       arrs[i][j] > south &&
  //       arrs[i][j] > east &&
  //       arrs[i][j] > west
  //     ) {
  //       count++;
  //     }
  //   }
  // }

  // return count;
}

const inputs = [
  [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ],
];
const expected = [10];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
