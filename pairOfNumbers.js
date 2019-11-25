function pairOfNumber(input) {
    const {length: inputLength} = input;
    for(let i = 0; i < inputLength; i++){
      for(let j = 0; j < inputLength; j++){
        if(i == j){
          continue;
        }
        console.log(`[${array[i]},${array[j]}]`);
      }
    }
  }
  
  pairOfNumber([1,2,3,4,5,6,7,8,9,10])