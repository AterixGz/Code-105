let data = [];
console.time();
 for (let i = 0; i < 500000; i++) {
    data.push(Math.floor(Math.random()*100));
 }
console.timeEnd();


function sumation1(n){
    let total = 0;
    for (let i = 0; i <= n ; i++) {
        total = total + i;
    }
    return total
}

function sumation2(n){
    return (n*(n+1))/2;
}

function sumation3(n){
    if(n==1) {
        return n;
    }
    else {
        return n+sumation3(n-1);
    }
}

let s1,s2,s3;

console.log("--sumation 1--")
console.time();
s1 = sumation1(50000)
console.timeEnd();
console.log("s1 = ",s1)

console.log("--sumation 2--")
console.time();
s2 = sumation1(50000)
console.timeEnd();
console.log("s2 = ",s2)

console.log("--sumation 3--")
console.time();
s3 = sumation1(50000)
console.timeEnd();
console.log("s3 = ",s3)