// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
function solution(n){
  let answer = 0;
  for(let i = 1; i <= n; i++){
    answer += i
  }
  return answer;
}

const inputs = [6, 10];
const expected = [21, 55];

function test(inputs, expected){
  const solved = inputs.map((input) => solution(input));
  if(JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`)
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`)
  }
}
test(inputs, expected)