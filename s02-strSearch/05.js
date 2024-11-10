// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
// 오. 단 반복횟수가 1인 경우 생략합니다.
function solution(str) {
  let answer = '';
  let cnt = 1;
  str = str + ' '; // 마지막 문자까지 처리하기 위해 문자열에 빈칸 추가

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1])
      cnt++; // 연속 문자일 경우 카운트 증가
    else {
      answer += str[i]; // 연속이 끝나면 현재 문자 추가
      if (cnt > 1) answer += String(cnt); // 카운트가 1 이상일 때만 추가
      cnt = 1; // 카운트 초기화
    }
  }
  return answer;
}

const inputs = ['KKHSSSSSSSE'];
const expected = ['K2HS7E'];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
