// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
function solution(n){
  let answer = Math.min(...n);
  return answer;
}

const inputs = [[5, 3, 7, 11, 2, 15, 17]];
const expected = [2];

function test(inputs, expected){
  const solved = inputs.map((input) => solution(input));
  if(JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`)
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`)
  }
}
test(inputs, expected)