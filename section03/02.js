// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES"
// , 아니면 “NO"를 출력하는 프로그램을
// 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들의 무시합니다.
function solution(str) {
  let answer = 'YES';
  const replaced = str.toLowerCase().replace(/[^a-zA-z]/g, '');
  const reversed = replaced.split('').reverse().join('');
  if (replaced !== reversed) answer = 'NO';
  return answer;
}

const inputs = ['found7,time:study;Yduts;emit,7Dnuof'];
const expected = ['YES'];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
