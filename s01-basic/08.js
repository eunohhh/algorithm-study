// 일곱 난쟁이
// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
// 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난
// 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을
// 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시
// 오.
function solution(arr){
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        return arr;
      }
    }
  }
}

const inputs = [[20, 7, 23, 19, 10, 15, 25, 8, 13]];
const expected = [[20, 7, 23, 19, 10, 8, 13]];

function test(inputs, expected){
  const solved = inputs.map((input) => solution(input));
  if(JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`)
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`)
  }
}
test(inputs, expected)