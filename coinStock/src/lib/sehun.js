const n = 3;

function solution(n) {
    const arr = [];

    for (let i = 1; i <= 3; i++) {
        while (true) {
            const random = Math.floor(Math.random() * 9 + 1);
            if (arr.includes(random) == true) {
            } else {
                arr.push(random);
                break;
            }
        }
    }
    return arr;
}

console.log(solution(n));
