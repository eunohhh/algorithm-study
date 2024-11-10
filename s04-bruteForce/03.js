// 멘토링
// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니
// 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의
// 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서
// 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지
// 출력하는 프로그램을 작성하세요.
// 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일
// 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
// 만약 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이
// 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다
function solution(test) {
  let answer = 0;
  const testCount = test.length;
  const studentCount = test[0].length;

  // 1, 2번 for는 학생 4 x 4 즉 16번의 경우를 테스트하기 위해 반복(시작은 1로함. 0번 학생은 없으므로)
  // i가 멘토, j가 멘티가 될 가능성이 있는 모든 경우를 탐색하기 위해 두 중첩 루프를 사용합니다.
  for (let i = 1; i <= studentCount; i++) {
    for (let j = 1; j <= studentCount; j++) {
      // 16회 중에서 카운트 해야하므로 count 변수 초기화
      // count는 현재 학생 쌍이 몇 번의 테스트에서 멘토 조건을 만족하는지를 세는 변수입니다.
      let count = 0;
      // 3번 for는 시험 회수만큼 반복
      for (let k = 0; k < testCount; k++) {
        // pi와 pj 변수는 각각 현재 테스트에서 i와 j의 등수를 나타냅니다.
        let pi = 0;
        let pj = 0;
        // 4번 for는 학생 수 만큼 반복(여기서는 프로그래밍 상 인덱스로 접근해야하므로 0부터 시작)
        // 각 경우의 수가 일치하는 경우 등수(s)에 할당
        for (let s = 0; s < studentCount; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        // 앞쪽 학생의 등수가 더 앞서면(작으면) 카운트 추가
        if (pi < pj) count++;
      }
      // count === testCount 조건 확인: 모든 테스트에서 A의 등수가 B보다 높았다면 count는 testCount와 같습니다.
      if (count === testCount) answer++;
    }
  }
  return answer;
}

// for (let i = 1; i <= studentCount; i++) {   // i는 멘토 후보
//   for (let j = 1; j <= studentCount; j++) { // j는 멘티 후보
//     let count = 0;                          // 멘토가 멘티보다 등수가 높았던 테스트 횟수
//     for (let k = 0; k < testCount; k++) {   // 각 테스트에서 멘토와 멘티의 등수 비교
//       let pi = 0, pj = 0;                   // 현재 테스트에서 멘토와 멘티의 등수
//       for (let s = 0; s < studentCount; s++) {
//         if (test[k][s] === i) pi = s;       // i의 등수 저장
//         if (test[k][s] === j) pj = s;       // j의 등수 저장
//       }
//       if (pi < pj) count++;                 // 멘토의 등수가 더 높으면 count 증가
//     }
//     if (count === testCount) answer++;      // 모든 테스트에서 멘토 조건 충족 시 answer 증가
//   }
// }

const inputs = [
  [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ],
];
const expected = [3];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
