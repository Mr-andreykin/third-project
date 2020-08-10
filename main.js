// 1 - ое задание
let prime = 1;
let primeArr = [];

while (prime <= 100) {
    if (prime == 1) {
        primeArr.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (prime % i !== 0 ){
            i += 1;
            result +=1;
            } 
        if (result == prime) {
            primeArr.push(result);
        }
    }
    prime += 1;
}

console.log(primeArr);

// 2 -ое задание
let a = -1;
do {
    a += 1;
    if (a === 0) {
        console.log(a, " - это ноль");
    } else if (a % 2 ===0) {
        console.log(a, " - это четное число");
    } else {
        console.log(a, " - это нечетное число");
    }
} while (a < 10);

//3 - е задание
for (let i = 0; i < 9; i++, console.log(i)) {}

//4 - ое задание
x
xx
xxx
xxxx
xxxxx

// 5 - е задание 
let arr = [];
let end = 0;
while (end < 20){
    end++;
    arr.push('x');
    console.log(arr);
}