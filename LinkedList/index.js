// Class - Node //
class Node{
    constructor(elem){

        // ตัวเก็บค่าของNode //

        this.element = elem;

        // ตัวเก็บค่าตัวถัดไป //

        this.next = null;
    }
}

// Class - Linklist //

class LinkedList{
    constructor(){
        this.firstNode = null;    
        this.lastNode = null;
        this.lenght = 0;
    }

// PUSH // เพิ่มเข้าลำดับสุดท้าย

    push(value) {
        const newNode = new Node(value);
        // จะแปลงค่า null เป็น True False //
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.lenght++;
        return this;
    }

// UNSHIFT //  เพิ่มเข้าลำดับแรก

    unshift(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;

        }
        else{
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.lenght++;
        return this
    }

// GET //  ดึงข้อมูลจาก index

    get (index){
        if(index < 0 || index >= this.lenght){
            return undefined
        }
        else{
            let curentNode = this.firstNode;
            for(let i = 0 ;i<index;i++){
                curentNode = curentNode.next;
            }
            return curentNode;
        }
    }

// Insert // แทรกข้อมูลลงใน index

    insert(index,value){
        //check index ไม่เกิน lenght//
        if(index < 0 || index > this.lenght){
            return false;
        }
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.lenght){
            return this.push(value);
        }
        const newNode = new Node(value);
        let beforeNode = this.get(index-1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.lenght++;
        return this;
    }

    // pop // เอาข้อมูลสุดท้ายออก
    pop(){
        if(this.lenght == 0){
            return undefined
        } 
        let curentNode = this.firstNode;
        let beforeNode = this.firstNode;
        while(curentNode.next != null){
            beforeNode = curentNode;
            curentNode = curentNode.next;
        }
        this.lastNode = beforeNode;
        this.lastNode.next = null;
        this.lenght--;
        if(this.lenght === 0){
            this.firstNode = null;
            this.lastNode = null;
        }
        return curentNode;
    }

    // shift // เอาข้อมูลแรกออก
    shift(){
        if(this.lenght === 0){
            return undefined;
        }
        let curentNode = this.firstNode;
        this.firstNode = this.firstNode.next;
        curentNode.next = null;
        this.lenght--;
        if(this.lenght === 0){
            this.lastNode = null;
        }
        return curentNode;
    }
    // remove // ลบข้อมูลออกจาก ลิงค์ลิสต์
    remove(index){
        if(index <0 || index >= this.lenght){
            return undefined;
        }
        if(index === 0){
            return this.shift();
        }
        if (index === this.lenght-1){
            return this.pop();
        }
        let beforeNode = this.get(index-1);
        let curentNode = beforeNode.next;
        beforeNode.next = curentNode.next;
        curentNode.next = null;
        this.lenght--;
        return curentNode;
    }
    // set // กำหนดลงข้อมูลลงไปใน INDEX
        set(index,value){
            if(index < 0 || index >= this.lenght){
                return false;
            }
           
            else{
                let temp = this.get (index);
                temp.element = value;
                return true;
            }
        }


}

// MAIN //
let d = document.getElementById("data");
let r = document.getElementById("result");
let a = document.getElementById("answer")
let mylist = new LinkedList();

// PUSH // เพิ่มเข้าลำดับสุดท้าย

function pushData(){
    mylist.push(d.value);
    displayData();
    d.value = "";
}

function displayData(){
    r.innerHTML = "";
    for(let i = 0; i < mylist.lenght; i++){
        let data = mylist.get(i);
        r.innerHTML += data.element + " ";
        if(i !== mylist.length - 1){
            r.innerHTML += "==> ";
        }
    }
}

// UNSHIFT //  เพิ่มเข้าลำดับแรก
function unshiftData(){
    mylist.unshift(d.value);
    displayData();
    d.value = "";
}

// GET //  ดึงข้อมูลจาก index
function getData(){
    let index = parseInt(d.value);
    if(isNaN(index)){
        a.innerHTML = "Invalid index";
        displayData();
        d.value = "";
        return;
    }
    let data = mylist.get(index);
    if(!data){
        a.innerHTML = "Index out of bounds";
        displayData();
        d.value = "";
        return;
    } else {
        a.innerHTML = "Data = " + data.element;
        displayData();
        d.value = "";
    }
}

// remove // ลบข้อมูลออกจาก ลิงค์ลิสต์
function removeData(){
    let index = parseInt(d.value);
    if(isNaN(index)){
        a.innerHTML = "Invalid index";
        displayData();
        d.value = "";
        return;
    }
    let removed = mylist.remove(index);
    if(removed === undefined){
        a.innerHTML = "Index out of bounds";
        displayData();
        d.value = "";
    } else {
    }
}
// shift // เอาข้อมูลแรกออก
function shiftData(){
    let removed = mylist.shift();
    if(removed === undefined){
        a.innerHTML = "List is empty";
    } else {
        displayData();
    }
}

// pop // เอาข้อมูลสุดท้ายออก
function popData(){
    let removed = mylist.pop();
    if(removed === undefined){
        a.innerHTML = "List is empty";
    } else {
        displayData();
    }
}

// Insert // แทรกข้อมูลลงใน index
function insertData(){
    let index = parseInt(prompt("เลือก data :"));
    if(isNaN(index)){
        a.innerHTML = "Invalid index";
        return;
    }
    let value = prompt("ใส่ค่า :");
    mylist.insert(index, value);
    displayData();
}
// set // กำหนดลงข้อมูลลงไปใน INDEX
function setData(){
    let index = parseInt(prompt("เลือก data :"));
    if(isNaN(index)){
        a.innerHTML = "Invalid index";
        return;
    }
    let value = prompt("ใส่ค่า :");
    if(mylist.set(index, value)){
        displayData();
    } else {
        a.innerHTML = "Index out of bounds";
    }
}



// function getData() {
//     let data = mylist.get(parseInt(d.value));
//     if (data === undefined) {
//         r.innerHTML = "index out of bounds";
//     } else {
//         r.innerHTML = "Data = " + data.element;
//     }
// }



