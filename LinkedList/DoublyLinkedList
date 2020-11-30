console.log("Implementation of LinkedList");

class Node{
  constructor(item){
    this.item = item;
    this.next = null;
    this.previous = null;
  }

}
class LinkedList{
  constructor(node){
    this.head = node;
    this.tail = this.head;
    this.length = 1;
    
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next  = newNode;
    //Update pointer of new node to point to the previous tail
    newNode.previous = this.tail;
    this.tail = this.tail.next;

    this.length++;
  }
  //Add to the beginning to the list
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    //Update previous pointer to point to current head, and then make the new node as head
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }
//insert at index
  insert(value,index){
    const newNode = new Node(value);
    //if index is less than 0, add at start
    if(index < 0){
      this.prepend(value);
    }
    //if index is more than or equal to the length, add at end 
    else if(index >= this.length){
      this.append(value);
    }
    else if(index < this.length){
      //traverse to the node previous to the index
      let pointer = this.get(index-1);
      newNode.next = pointer.next;
      newNode.previous = pointer;
      pointer.next = newNode;
      this.length++;
    }
  }

  remove(index){
    
    let pointer = this.get(index-1);
    const deletedItem = pointer.next;
    pointer.next = pointer.next.next;
    pointer.next.previous = pointer;
    this.length--;
    return deletedItem;

  }

  traverse(){
    console.log("travesting this linkedlist .........")
    let node = this.head;
    let index = 0; 
    console.log("the head is "+ this.head.item);
    console.log("the tail is "+ this.tail.item);
    while(node !== null){
      console.log("Value at index ......."+ index + " is "+ node.item);
      if(node.previous !== null){
        console.log("Previous node is <-----"+ node.previous.item);
      }
      else{
        console.log("Previous node is <-----"+ node.previous);
      }
      if(node.next !== null){
      console.log("Next node is ------>"+ node.next.item);
      }else{
         console.log("Next node is ----->"+ null);
      }
      
      
      node = node.next;
      index++;
    }
    console.log("length is "+ this.length);
  }

  get(index){
    //if index is more than or length or size, return last value
    if(index >= this.length || index === (this.length - 1)){
      return this.tail;
    }else if(index <= 0){
      return this.head;
    }
    let counter = index;
    let pointer = this.head;
    while(counter > 0 && pointer !== null){
      pointer = pointer.next;
      counter--;
    }
    return pointer;
  }



}
myNode = new Node('Arnab');
myDoublyLinkedList = new LinkedList(myNode);
myDoublyLinkedList.append("Shilpa");
//myLinkedList.traverse();
myDoublyLinkedList.append("Sanjay");
myDoublyLinkedList.prepend("Pradeep");
myDoublyLinkedList.prepend("Michelle");
myDoublyLinkedList.append("Sounder");
//myDoublyLinkedList.traverse();

myDoublyLinkedList.insert("XY",3);
myDoublyLinkedList.insert("Shivam",-3);
// myLinkedList.traverse();
myDoublyLinkedList.insert("Urvashi",9);
// myLinkedList.traverse();
// //console.log(myLinkedList.get(7));
console.log(myDoublyLinkedList.remove(7));
myDoublyLinkedList.traverse();
//console.log(myDoublyLinkedList)

