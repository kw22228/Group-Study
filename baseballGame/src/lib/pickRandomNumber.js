//while
// const pickRandomNumber = (length) => {
//   const list = [];

//   for (let i = 0; i < length; i++) {
//     let random = 0;
//     while (true) {
//       random = Math.floor(Math.random() * 9 + 1);
//       if (!list.includes(random)) break;
//     }
//     list.push(random)
//   }

//   return list.join('');
// };

// const pickRandomNumber2 = (ran) => {
//   const arr = [];
//   for (let i = 0; i < ran; i++) {
//     if (arr.length === ran) {
//       return arr.join('');
//     }else{
//     const value = Math.floor(Math.random() * 9 + 1);
//     arr.push(value);
//     arr.forEach((v) => {
//       v === value;
//       continue;
//     });
//   }
//     }
//     });
//   }
// };

/*
    [] 3 -> [3]
    [3] 2 -> [3, 2]
    [3, 2] 2 -> [3, 2] 3 -> [3, 2] 5 -> [3, 2, 5]

*/

//// 세훈 ///////

// const n = 3;

// function solution(n) {
//   const arr = [];

//   for (let i = 1; i <= 3; i++) {
//     while (true) {
//       const random = Math.floor(Math.random() * 9 + 1);
//       if (arr.includes(random) == true) {
//       } else {
//         arr.push(random);
//         break;
//       }
//     }
//   }
//   return arr;
// }

// console.log(solution(n));
