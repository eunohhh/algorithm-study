// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.
function solution(str){
  return str.replaceAll('A', '#');
}

const inputs = ['BANANA'];
const expected = ['B#N#N#'];

function test(inputs, expected){
  const solved = inputs.map((input) => solution(input));
  if(JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`)
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`)
  }
}
test(inputs, expected)