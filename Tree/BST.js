console.log("Implementation of BST");

class Node {
  constructor(value) {
    //console.log("Within Node constructor");
    this.value = value;
    this.left = null;
    this.right = null;
  }

}
class BST {
  constructor() {
    //console.log("within Stack constructor");
    this.root = null;
   }
   insert(value){
     const newNode = new Node(value);
     if(this.root == null){
      this.root = newNode;
     }
     else{
      let currentNode = this.root;
      
        while(true){
          if(value < currentNode.value){
            if(currentNode.left === null){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          }
            else{
              if(currentNode.right === null ){
                currentNode.right = newNode;
                return this;
              }
              currentNode = currentNode.right;
            }

          }
     }
   }      
   lookup(value){

   }
   
}
function traverse(node){
     const tree = {value : node.value};
     tree.left = node.left === null ? null:
     traverse(node.left);
     tree.right = node.right === null ? null:
     traverse(node.right);
     return tree;
      
   }
const bst= new BST();
//console.log(bst);
bst.insert(100);
bst.insert(50);
bst.insert(150);
bst.insert(20);
bst.insert(190);
bst.insert(70);
bst.insert(130);
//console.log(bst);
console.log(JSON.stringify(traverse(bst.root)));

  