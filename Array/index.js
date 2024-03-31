// 1. รับเลขจำนวนเต็มเก็บไว้ในตัวแปรอาร์เรย์
const numbers = [];
const numCount = parseInt(prompt("กรุณาใส่จำนวนตัวเลขที่ต้องการ:"));

for (let i = 0; i < numCount; i++) {
    const num = parseInt(prompt(`กรุณาใส่ตัวเลขที่ ${i + 1}:`));
    console.log(num)
    numbers.push(num);
}

// 2. แสดงข้อมูลภายในอาร์เรย์
console.log("ข้อมูลในอาร์เรย์:");
for (const num of numbers) {
    console.log(num);
}

// 3. คำนวณหาผลคูณของเลขคู่และผลคูณเลขคี่
let evenProduct = 1;
let oddProduct = 1;

for (const num of numbers) {
    if (num % 2 === 0) {
        evenProduct *= num;
    } else {
        oddProduct *= num;
    }
}

console.log(`ผลคูณของเลขคู่: ${evenProduct}`);
console.log(`ผลคูณของเลขคี่: ${oddProduct}`);
