// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 을 작성하세요.
// 투 포인터
function solution(arr) {
  // const merged = [...test[0], ...test[1]];
  // merged.sort((a, b) => a - b);
  // return merged;
  let answer = [];
  const n = arr[0].length;
  const m = arr[1].length;
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < n && pointer2 < m) {
    if (arr[0][pointer1] <= arr[1][pointer2]) {
      answer.push(arr[0][pointer1]);
      pointer1++;
    } else {
      answer.push(arr[1][pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < n) {
    answer.push(arr[0][pointer1]);
    pointer1++;
  }
  while (pointer2 < m) {
    answer.push(arr[1][pointer2]);
    pointer2++;
  }
  return answer;
}

const inputs = [
  [
    [1, 3, 5],
    [2, 3, 6, 7, 9],
  ],
];
const expected = [[1, 2, 3, 3, 5, 6, 7, 9]];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
