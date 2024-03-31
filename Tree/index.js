// สร้าง constructor function สำหรับ Node
function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  // สร้าง constructor function สำหรับ Tree
  function BinaryTree() {
    this.root = null;
  }
  
  // เพิ่ม method เพื่อใส่โหนดใน Tree
  BinaryTree.prototype.insert = function(value) {
    var newNode = new TreeNode(value);
    
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  
  // เพิ่ม method เพื่อช่วยในการใส่โหนดใน Tree
  BinaryTree.prototype.insertNode = function(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // สร้าง instance ของ Tree
  var tree = new BinaryTree();

let data = document.getElementById("data")
let result = document.getElementById("result")
let info = []

  function add(){
    info.push(data.value)
    console.log(data.value)
    data.value = ""
    result.innerHTML = info
  }

  function insert(){
    for (const result of info) {
        tree.insert(result)
    }
    console.log(tree)
}

// tree.insert(10)
// tree.insert(1)
// tree.insert(20)
// tree.insert(30)
// tree.insert(5)
// tree.insert(8)
// console.log(tree)
