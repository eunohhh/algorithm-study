// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)
function solution(arr) {
  return arr.reduce(
    (acc, cur, index) => (arr[index - 1] < cur ? (acc = [...acc, cur]) : acc),
    [arr[0]],
  );
}

const inputs = [[7, 3, 9, 5, 6, 12]];
const expected = [[7, 9, 6, 12]];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
