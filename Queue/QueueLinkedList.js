console.log("Implementation of Stack");

class Node{
  constructor(item){
    //console.log("Within Node constructor");
    this.item = item ;
    this.next = null;
    this.previous = null;
  }

}
class Queue{
  constructor(item){
    //console.log("within Stack constructor");
    this.head = new Node(item);
    this.tail = this.head;
    this.length = 1;
    
  }

  //Add to the beginning to the list
  enqueue(value){
    const newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
  else{
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    }
    this.length++;
  }

  dequeue(){
    if(this.tail === null){
      //this.head = this.tail;
      //console.log("Error!!!...Queue underflow");
      return "Error!!!...Queue underflow";
    }
    const popped = this.tail;
    this.tail = this.tail.previous;
    if(popped.previous === null){
      this.head = null;
    }
    else{
     this.tail.next = null;
    }
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
      return "Queue Empty";
    }
    let pointer = this.head;
    while(pointer !== null){
      console.log(pointer.item);
      pointer = pointer.next;
    }

  }
  isEmpty(){
    return this.length === 0;
  }

}

myQueue = new Queue("Arnab");

myQueue.enqueue("Shilpa");
myQueue.enqueue("Sanjay");
console.log(myQueue);
myQueue.lookUp();
//console.log("Dequeued "+ myQueue.dequeue());
//myQueue.lookUp();
myQueue.dequeue();
console.log(myQueue);
console.log("Dequeued "+ myQueue.dequeue());
console.log(myQueue);
console.log("Dequeued "+ myQueue.dequeue());
console.log(myQueue);
myQueue.dequeue();
myQueue.isEmpty();
myQueue.enqueue("Shilpa");
myQueue.enqueue("Pradeep");
myQueue.isEmpty();
myQueue.lookUp();
myQueue.dequeue();
console.log(myQueue);

// console.log("Popped item " + myStack.pop());
// myStack.lookUp();
// console.log(myStack);
// console.log("Peeking " + myStack.peek());
// console.log(myStack);
// console.log(myStack.pop());
// console.log(myStack.pop());
// //console.log(myStack.pop());
// myStack.pop();
// console.log(myStack);
// myStack.push("Sanjay");
// console.log(myStack);
// myStack.push("Pradeep");
// myStack.lookUp();
// console.log(myStack);



