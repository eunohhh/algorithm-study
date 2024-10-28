// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 회수 1 2 3 4 5
// A의 정보 2 3 3 1 3
// B의 정보 1 1 2 2 3
// 승자 A B A B D
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
// 을 작성하세요.
function solution([aArr, bArr]) {
  return aArr.map((a, i) => {
    const b = bArr[i];
    if (a === b) return 'D'; // 비기는 경우
    if (
      (a === 1 && b === 3) || // 가위가 보를 이기는 경우
      (a === 2 && b === 1) || // 바위가 가위를 이기는 경우
      (a === 3 && b === 2) // 보가 바위를 이기는 경우
    ) {
      return 'A';
    } else {
      return 'B';
    }
  });
}

const inputs = [
  [
    [2, 3, 3, 1, 3],
    [1, 1, 2, 2, 3],
  ],
];
const expected = [['A', 'B', 'A', 'B', 'D']];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
