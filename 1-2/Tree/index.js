class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // เพิ่มโหนดใหม่ในต้นไม้แบบทวิภาค
  insert(data) {
    const newNode = new TreeNode(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
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

  // แสดงโหนดในต้นไม้แบบทวิภาคโดยใช้ Preorder traversal (NLR)
  preorder() {
    const result = [];
    this.preorderTraversal(this.root, result);
    return result;
  }

  preorderTraversal(node, result) {
    if (node !== null) {
      result.push(node.data);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
  }

  // แสดงโหนดในต้นไม้แบบทวิภาคโดยใช้ Inorder traversal (LNR)
  inorder() {
    const result = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  inorderTraversal(node, result) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }
  }

  // แสดงโหนดในต้นไม้แบบทวิภาคโดยใช้ Postorder traversal (LRN)
  postorder() {
    const result = [];
    this.postorderTraversal(this.root, result);
    return result;
  }

  postorderTraversal(node, result) {
    if (node !== null) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.data);
    }
  }
}


let data = document.getElementById("data");
let resultshow = document.getElementById("result")
let preOrder = document.getElementById("preOrder");
let inOrder = document.getElementById("inOrder");
let postOrder = document.getElementById("postOrder");
let sucdata = data.value
let inputtree = []
// สร้างต้นไม้แบบทวิภาค
const binaryTree = new BinaryTree();

function add() {
  binaryTree.insert(parseFloat(data.value));
  inputtree.push(parseFloat(data.value));
  resultshow.innerHTML = "ข้อมูลที่กรอก : " + inputtree
  data.value = ""
}

function result() {
  preOrder.innerHTML = "Preorder traversal:"+ binaryTree.preorder()
  inOrder.innerHTML = "Inorder traversal:"+ binaryTree.inorder()
  postOrder.innerHTML = "Postorder traversal:"+ binaryTree.postorder()
}

console.log(binaryTree)
// แสดงผลลัพธ์ของการท่องต้นไม้แบบ Preorder, Inorder, และ Postorder
