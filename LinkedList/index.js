// กำหนดคลาสสำหรับโหนดของ LinkedList
class Node {
    constructor(data) {
        this.data = data; // ข้อมูลที่จะเก็บในโหนด
        this.next = null; // การชี้ไปยังโหนดถัดไปใน LinkedList
    }
}

// กำหนดคลาสสำหรับ LinkedList
class LinkedList {
    constructor() {
        this.head = null; // โหนดแรกของ LinkedList
        this.size = 0; // ขนาดของ LinkedList
    }

    // เพิ่มโหนดใหม่ที่สุดของ LinkedList
    add(data) {
        const newNode = new Node(data); // สร้างโหนดใหม่
        
        // ถ้า LinkedList ยังว่างอยู่
        if (!this.head) {
            this.head = newNode; // ตั้งโหนดแรกเป็นโหนดใหม่
        } else {
            let current = this.head;

            // หาโหนดสุดท้ายใน LinkedList
            while (current.next) {
                current = current.next;
            }

            // เชื่อมโหนดใหม่กับโหนดสุดท้าย
            current.next = newNode;
        }
        this.size++; // เพิ่มขนาดของ LinkedList
    }

    // แสดงข้อมูลทั้งหมดใน LinkedList
    display() {
        let current = this.head;

        // วน loop เพื่อแสดงข้อมูลในโหนดทุกโหนด
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// ตัวอย่างการใช้งาน LinkedList
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

// แสดงข้อมูลทั้งหมดใน LinkedList
linkedList.display();
