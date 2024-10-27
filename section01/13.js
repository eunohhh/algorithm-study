// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로
// 변환하여 출력하는 프로그램을 작성하세요.
function solution(word) {
  const filtered = [...word].map((character) =>
    character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase(),
  );
  const answer = filtered.join('');
  return answer;
}

const inputs = ['StuDY'];
const expected = ['sTUdy'];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
