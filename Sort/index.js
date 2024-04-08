class BubbleSort {
    sort(arr) {
        console.time();
        const bub = [...arr]; // สร้างอาร์เรย์ใหม่เพื่อทำการจัดเก็บข้อมูลในการเรียงลำดับ
        const n = bub.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (bub[j] > bub[j + 1]) {
                    // Swap bub[j] and bub[j+1]
                    [bub[j], bub[j + 1]] = [bub[j + 1], bub[j]];
                }
            }
        }
        console.timeEnd();
        return bub;
    }
}

class InsertionSort {
    sort(arr) {
        console.time();
        const sortedArr = [...arr]; // สร้างอาร์เรย์ใหม่เพื่อทำการจัดเก็บข้อมูลในการเรียงลำดับ
        const n = sortedArr.length;
        
        for (let i = 1; i < n; i++) {
            let key = sortedArr[i];
            let j = i - 1;
            
            while (j >= 0 && sortedArr[j] > key) {
                sortedArr[j + 1] = sortedArr[j];
                j--;
            }
            sortedArr[j + 1] = key;
        }
        
        console.timeEnd();
        return sortedArr;
    }
}

class ShellSort {
    sort(arr) {
        console.time();
        const sortedArr = [...arr]; // สร้างอาร์เรย์ใหม่เพื่อทำการจัดเก็บข้อมูลในการเรียงลำดับ
        const n = sortedArr.length;
        let gap = Math.floor(n / 2);
        
        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let temp = sortedArr[i];
                let j = i;
                
                while (j >= gap && sortedArr[j - gap] > temp) {
                    sortedArr[j] = sortedArr[j - gap];
                    j -= gap;
                }
                sortedArr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        
        console.timeEnd();
        return sortedArr;
    }
}

let data = document.getElementById("data")
let result = document.getElementById("result")
let resultaftersort = document.getElementById("resultAfterSort")
let sucdata = parseFloat(data.value)
let info = [] 
let bubbleSort = new BubbleSort();
let insertionSort = new InsertionSort();
let shellSort = new ShellSort();

function add(){
    info.push(parseFloat(data.value))
    console.log(parseFloat(data.value))
    data.value = ""
    result.innerHTML = "ข้อมูล : "+info
}
function remove(){
    info.pop(data.value)
    console.log(info)
    result.innerHTML = "ข้อมูล : "+info
}

function removeAll(){
    info = []
    data.value = ""
    result.innerHTML = ""
    resultaftersort.innerHTML = ""
}

function randomNumber(){
    info = [];
    for (let i = 0; i < 10; i++) {
        let randomnumber = Math.floor(Math.random()*100)
        info.push(randomnumber)
    }
    result.innerHTML = "ข้อมูล : "+info
}

function bubble(){
    console.log("---BubbleSort---")
    const sortedArr = bubbleSort.sort(info);
    resultaftersort.innerHTML = "BubbleSort : "+sortedArr.join(", ");
    console.log(info)
    console.log(sortedArr.join(", "))
}
function insertion(){
    console.log("---InsertionSort---")
    const sortedArr = insertionSort.sort(info);
    resultaftersort.innerHTML = "InsertionSort : "+sortedArr.join(", ");
    console.log(info)
    console.log(sortedArr.join(", "))
}
function shell(){
    console.log("---ShellSort---")
    const sortedArr = shellSort.sort(info);
    resultaftersort.innerHTML = "ShellSort : "+sortedArr.join(", ");
    console.log(info)
    console.log(sortedArr.join(", "))
}