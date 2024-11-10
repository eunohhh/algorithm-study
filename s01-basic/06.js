// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들중 최소값을 찾는 프로그램을 작성하세요.
function solution(arr){
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for(let item of arr){
    if(item % 2 === 1){
      sum += item;
      if(min > item) min = item;
    }
  }
  answer = [sum, min]
  return answer;
}

const inputs = [[12, 77, 38, 41, 53, 92, 85]];
const expected = [[256, 41]];

function test(inputs, expected){
  const solved = inputs.map((input) => solution(input));
  if(JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`)
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`)
  }
}
test(inputs, expected)