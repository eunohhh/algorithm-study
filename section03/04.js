// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요.
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
// 문자열의 길이는 100을 넘지 않는다.
function solution([str, t]) {
  const arr = str.split('');
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let distance = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === t) distance.push(Math.abs(j - i));
    }
    answer.push(Math.min(...distance));
  }
  return answer;

  // let answer = [];
  // let p = 1000;
  // for (let x of str) {
  //   if (x === t) {
  //     p = 0;
  //     answer.push(p);
  //   } else {
  //     p++;
  //     answer.push(p);
  //   }
  // }
  // p = 1000;
  // for (let i = str.length - 1; i >= 0; i--) {
  //   if (str[i] === t) p = 0;
  //   else {
  //     p++;
  //     answer[i] = Math.min(answer[i], p);
  //   }
  // }
  // return answer;
}

const inputs = [['teachermode', 'e']];
const expected = [[1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
