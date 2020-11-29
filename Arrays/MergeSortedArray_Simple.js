console.log('Merge sorted Array C  implememntation');

function mergeSortedArray(arr1,arr2){
  
  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length === 0){
    return arr1;
  }

  const mergedArray = new Array(arr1.length + arr2.length);
 
  let i= 0;
  let j = 0;
  let k = 0;
  while( k < mergedArray.length){
   if(i < arr1.length &&  j< arr2.length){
      if(arr1[i] <= arr2[j]){
      //console.log(arr1[i]);
       // console.log(i);
        mergedArray[k] = arr1[i];
        
        i++;
        k++;  
      }else if (arr1[i] >= arr2[j]){
      //console.log(arr1[j]);
       // console.log(j);
        mergedArray[k] = arr2[j];
        
        j++;
        k++;
      }
    }
    else if(i === arr1.length && j< arr2.length){
      mergedArray[k] = arr2[j];
      j++;
     k++;
    }
    else if(j === arr2.length && i< arr1.length){
      mergedArray[k] = arr1[i];
      i++;
      k++;
    }
    console.log('Value of i = '+ i);
    console.log('Value of j = '+ j);
  //  k++;
  }


  return mergedArray;

}

console.log(mergeSortedArray([1,3,4,6], [0,5,6,9,19]));

