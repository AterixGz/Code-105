class Node {
    constructor(data) {
        this.data = data; // ข้อมูลที่เก็บในโหนด
        this.next = null; // ตัวแปร next เก็บอ้างอิงไปยังโหนดถัดไป
    }
}
class LinkedList {
    constructor() {
        this.head = null; // ตัวแปร head เก็บโหนดแรกของ Linked List
    }
    // เพิ่มเมธอดในคลาส LinkedList เพื่อเพิ่มข้อมูลจากด้านหลังสุดของ Linked List
    // 1
    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    // 2
    // เพิ่มเมธอดในคลาส LinkedList เพื่อลบและคืนค่าข้อมูลจากด้านหลังสุดของ Linked List
    pop() {
        if (!this.head) {
            return null; // Linked List ว่างเปล่า
        }
        if (!this.head.next) {
            const deletedData = this.head.data;
            this.head = null;
            return deletedData;
        }
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.data;
    }
    // 3
    // ค้นหาโหนดที่มีข้อมูลเป็นค่าที่กำหนด และคืนค่าโหนดนั้นหากพบ หรือคืนค่า null หากไม่พบ
    find(data) {
        let current = this.head;
        let found = false;

        while (current !== null) {
            if (current.data === data) {
                alert(`มี ${data} อยู่ใน Linkedlist`)
                found = true;
                break;
            }
            current = current.next;
        }

        if (!found) {
            alert(`ไม่มี ${data} อยู่ใน Linkedlist`)
        }
        
        return null;
    }
    // 4
    // ลบโหนดที่มีข้อมูลเป็นค่าที่กำหนด
    delete(data) {
        if (!this.head) {
            return; // Linked List ว่างเปล่า
        }
        if (this.head.data === data) {
            this.head = this.head.next; // ลบโหนดแรก
            return;
        }
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.data === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
    }
    // 5
    // แทรกโหนดใหม่หลังจากโหนดที่มีข้อมูลเป็น data
    insertAfter(data, newData) {
        const newNode = new Node(newData);
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }
    // 6
    // เปลี่ยนข้อมูลของโหนดที่มีข้อมูลเป็น oldData เป็นข้อมูลใหม่ newData
    set(oldData, newData) {
        let current = this.head;
        while (current !== null) {
            if (current.data === oldData) {
                current.data = newData;
                return;
            }
            current = current.next;
        }
    }
    // 7
    // เพิ่มโหนดใหม่เป็นโหนดแรกของ Linked List
    unshift(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    // 8
    // ลบโหนดที่ตำแหน่งแรกของ Linked List และคืนค่าข้อมูลของโหนดที่ถูกลบ
    shift() {
        if (!this.head) {
            return null; // Linked List ว่างเปล่า
        }
        const deletedData = this.head.data;
        this.head = this.head.next;
        return deletedData;
    }
    // 9
    // แสดงข้อมูลทั้งหมดใน Linked List
    displayList() {
        let current = this.head;
        result.innerHTML = "ข้อมูลใน LinkedList : "
        while (current !== null) {
            result.innerHTML += current.data + " ==> "
            current = current.next;
        }
        result.innerHTML += null
        data.value = ""
        dataRef.value = ""
    }
    // 10
    deleteAllData() {
        this.head = null; // กำหนดให้ head เป็น null เพื่อลบข้อมูลทั้งหมดใน Linked List
    }
}


let data = document.getElementById("data")
let dataRef = document.getElementById("dataRef")
let result = document.getElementById("result")
sucdata = parseFloat(data.value)
// สร้าง Linked List ใหม่
const linkedList = new LinkedList();

linkedList.displayList()

// button
function push() {
    linkedList.push(parseFloat(data.value))
    linkedList.displayList()
}
function pop() {
    linkedList.pop()
    linkedList.displayList()
}
function find() {
    linkedList.find(parseFloat(data.value))
    linkedList.displayList()
}
function set() {
    linkedList.set(parseFloat(dataRef.value), parseFloat(data.value))
    linkedList.displayList()
}
function deleteData() {
    linkedList.delete(parseFloat(data.value))
    linkedList.displayList()
}
function displays() {
    linkedList.displays()
    linkedList.displayList()
}
function unshift() {
    linkedList.unshift(parseFloat(data.value))
    linkedList.displayList()
}
function shift() {
    linkedList.shift()
    linkedList.displayList()
}
function insert() {
    linkedList.insertAfter(parseFloat(dataRef.value), parseFloat(data.value))
    linkedList.displayList()
}
function deleteAllData() {
    linkedList.deleteAllData()
    linkedList.displayList()
}





