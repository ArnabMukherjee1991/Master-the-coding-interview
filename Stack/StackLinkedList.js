console.log("Implementation of Stack");

class Node{
  constructor(item){
    //console.log("Within Node constructor");
    this.item = item ;
    this.next = null;
  }

}
class Stack{
  constructor(item){
    //console.log("within Stack constructor");
    this.top = new Node(item);
    //this.tail = this.head;
    this.length = 1;
    
  }

  //Add to the beginning to the list
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop(){
    if(this.top === null){
      //console.log("Error!!!...Stack underflow");
      return "Error!!!...Stack underflow";
    }
    const popped = this.top;
    this.top = this.top.next;
    this.length--;
    return popped.item;

  }

  peek(){
    if(this.top === null){
      return "Error!!!...Stack Underflow";
    }
    return this.top.item;

  }

  lookUp(){
    if(this.length === 0){
      return "No item available";
    }
    let pointer = this.top;
    while(pointer !== null){
      console.log(pointer.item);
      pointer = pointer.next;
    }

  }

}

myStack = new Stack("Arnab");

myStack.push(1);
myStack.push("Shilpa");
myStack.lookUp();

console.log("Popped item " + myStack.pop());
myStack.lookUp();
console.log(myStack);
console.log("Peeking " + myStack.peek());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
//console.log(myStack.pop());
myStack.pop();
console.log(myStack);
myStack.push("Sanjay");
console.log(myStack);
myStack.push("Pradeep");
myStack.lookUp();
console.log(myStack);



