console.log('Array Implementation')

class MyArray{
  //This is the constructor
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
  }

  pop(){
    let popped = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return popped;
  }

  delete(index){
    if(index > this.length || index < 0){
      return "Invalid Index "+ index;
    }
    let deletedItem = this.data[index];
    delete this.data[index];
    this.length--;
    this.shiftIndexesLeft(index);
    return deletedItem;
  }

  add(index,item){
    if(index < 0){
      return "Invalid Index "+ index;
    }
    this.shiftIndexesRight(index);
    this.data[index] = item;
     this.length++;
  }

  shiftIndexesLeft(index){
    for(var i=index;i<this.length;i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[i];
  }

  shiftIndexesRight(index){
    if(index > (this.length -1) ){
      let counter = this.length;
      while(counter < index){
        this.data[counter] = "";
        counter++;
        this.length++;
      }
    }
    else if (index < (this.length-1)){
      for(let i=(this.length-1);i>=index;i--){
        this.data[i+1] = this.data[i];
      }
     
    }
  }
}

const newArray = new MyArray();

console.log(newArray);
newArray.push("Arnab");
console.log(newArray);
newArray.push("Biswa");
newArray.push("Somnath");
newArray.push("Shilpa");
console.log(newArray);
//newArray.pop();
//console.log(newArray)
console.log(newArray.delete(5));
console.log(newArray);
newArray.add(2,"Sanjay");
console.log(newArray);
newArray.add(10,"Pradeep");
console.log(newArray);
newArray.add(0,"Ryan");
console.log(newArray);
