console.log('Reverse String');

function reverseString(item){

  if(!item || item.length < 2 || typeof item !== 'string'){
    return item;
  }
  //var strArray = item.split('');
  var reversedString = '';
  const backWards = [];
  //var j=0;
  for(let i=(item.length-1);i>=0;i--){
    reversedString+=item[i];
    backWards.push(item[i]);

  }
 // console.log(strArray);
 // console.log(reversedString);
  return backWards.join('');

}

//reverseString('Arnab');
 reverseString('My name is Arnab');
// reverseString('M');
// reverseString('12345');

function reverse2(item){
  return item.split('').reverse().join('');

}

reverse2("this is using inbuilt function");


const reverse3 = item => [...item].reverse().join('');

reverse3("This is using lambda");