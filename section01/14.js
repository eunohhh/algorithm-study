// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
function solution(arr) {
  let answer = '';
  let temp = '';
  for (item of arr) {
    if (temp.length < item.length) {
      answer = item;
      temp = item;
    } else temp = item;
  }
  return answer;
}

const inputs = [['teacher', 'time', 'student', 'beautiful', 'good']];
const expected = ['beautiful'];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
