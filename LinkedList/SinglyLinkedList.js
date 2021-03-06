console.log("Implementation of LinkedList");

class Node{
  constructor(item){
    this.item = item;
    this.next = null;
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
    this.tail = this.tail.next;
    this.length++;
  }
  //Add to the beginning to the list
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(value,index){
    const newNode = new Node(value);
    if(index < 0){
      this.prepend(value);
    }
    else if(index >= this.length){
      this.append(value);
    }
    else if(index < this.length){
      let pointer = this.get(index-1);
      newNode.next = pointer.next;
      pointer.next = newNode;
      this.length++;
    }
  }

  remove(index){
    
    let pointer = this.get(index-1);
    const deletedItem = pointer.next;
    pointer.next = pointer.next.next;
    this.length--;
    return deletedItem;

  }

  traverse(){
    console.log("travesting this linkedlist .........")
    let node = this.head;
    let index = 0; 
    while(node !== null){
      console.log("Value at index "+ index + " is "+ node.item);
      //console.log(node.next);
      node = node.next;
      index++;
    }
    console.log("length is "+ this.length);
  }

  get(index){
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

  reverse(){
    console.log("Start reverse.....")
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while(second !== null){
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head = first;
    this.tail.next = null;
    console.log(this)
    return this;
  }



}
myNode = new Node('Arnab');
myLinkedList = new LinkedList(myNode);
myLinkedList.append("Shilpa");
//myLinkedList.traverse();
myLinkedList.append("Sanjay");
myLinkedList.prepend("Pradeep");
myLinkedList.prepend("Michelle");
myLinkedList.insert("XY",6);
myLinkedList.insert("Shivam",-3);
myLinkedList.traverse();
myLinkedList.insert("Urvashi",3);
myLinkedList.traverse();
//console.log(myLinkedList.get(7));
console.log(myLinkedList.remove(3));
myLinkedList.traverse();
reversedList = myLinkedList.reverse();
reversedList.traverse();

