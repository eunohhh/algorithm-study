// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만
// 듭니다.
// 만약 “tge0a1h205er
// ”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205
// 이 됩니다.
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
function solution(str) {
  const numbers = str.replace(/[a-zA-z]/g, '');
  return Number(numbers);
}

const inputs = ['g0en2T0s8eSoft'];
const expected = [208];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
