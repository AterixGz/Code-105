// main.js
const bubbleSort = {
    sort: function(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }

        return arr;
    }
};

const insertionSort = {
    sort: function(arr) {
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

        return arr;
    }
};

const shellSort = {
    sort: function(arr) {
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

        return arr;
    }
};

// ตัวอย่างการใช้งาน
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort.sort(arr));
console.log("Insertion Sort:", insertionSort.sort(arr));
console.log("Shell Sort:", shellSort.sort(arr));
