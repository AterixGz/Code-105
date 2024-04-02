
const bubbleSort = {
    sort: function(arr) {
        console.time();
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        console.timeEnd();
        
        return arr;
    }
};

const insertionSort = {
    sort: function(arr) {
        console.time();
        const n = arr.length;
        
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        
        console.timeEnd();
        return arr;
    }
};

const shellSort = {
    sort: function(arr) {
        console.time();
        const n = arr.length;
        let gap = Math.floor(n / 2);
        
        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j = i;
                
                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        
        console.timeEnd();
        return arr;
    }
};

let data = document.getElementById("data")
let result = document.getElementById("result")
let resultaftersort = document.getElementById("resultAfterSort")
let sucdata = parseFloat(data.value)
let info = []

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
    for (let i = 0; i < 10; i++) {
          let randomnumber = Math.floor(Math.random()*100)
          info.push(randomnumber)
        }
        result.innerHTML = "ข้อมูล : "+info
    }

  function bubble(){
      console.log(bubbleSort.sort(info))
      resultaftersort.innerHTML = "BubbleSort : "+info
    }
    function insertion(){
        console.log(insertionSort.sort(info))
        resultaftersort.innerHTML = "InsertionSort : "+info
    }
    function shell(){
        console.log(shellSort.sort(info))
        resultaftersort.innerHTML = "ShellSort : "+info
  }

// // ตัวอย่างการใช้งาน
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Bubble Sort:", bubbleSort.sort(arr));
// console.log("Insertion Sort:", insertionSort.sort(arr));
// console.log("Shell Sort:", shellSort.sort(arr));
