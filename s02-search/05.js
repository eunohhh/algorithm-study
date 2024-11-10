// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.
function solution(arr) {
  const copied = [...arr];
  copied.sort((a, b) => b - a);

  const rankMap = new Map();
  copied.forEach((score, index) => {
    if (!rankMap.has(score)) {
      rankMap.set(score, index + 1); // 점수에 해당하는 등수를 저장
    }
  });

  return arr.map((score) => rankMap.get(score));
}

const inputs = [[87, 89, 92, 100, 76]];
const expected = [[4, 3, 2, 1, 5]];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
