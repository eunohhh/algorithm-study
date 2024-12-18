// 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
function solution(arr) {
  let max = {
    value: 0,
    origin: 0,
  };
  arr.forEach((num) => {
    const array = [...String(num)];
    const sum = array.reduce((acc, cur) => acc + Number(cur), 0);
    if (max.value === sum && max.origin < num) {
      max.value = sum;
      max.origin = num;
    } else if (max.value < sum) {
      max.value = sum;
      max.origin = num;
    }
  });
  return max.origin;
}

// function solution(arr){
//   let answer, max=Number.MIN_SAFE_INTEGER;
//   for(let x of arr){
//       let sum=0, tmp=x;
//       while(tmp){
//           sum+=(tmp%10);
//           tmp=Math.floor(tmp/10);
//       }
//       if(sum>max){
//           max=sum;
//           answer=x;
//       }
//       else if(sum===max){
//           if(x>answer) answer=x;
//       }
//   }
//   return answer;
// }

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

const inputs = [[128, 460, 603, 40, 521, 137, 123]];
const expected = [137];

function test(inputs, expected) {
  const solved = inputs.map((input) => solution(input));
  if (JSON.stringify(solved) === JSON.stringify(expected)) {
    console.log(`정답입니다. 출력 ${solved}`);
  } else {
    console.log(`오답입니다. 예상 ${expected}, 출력 ${solved}`);
  }
}
test(inputs, expected);
