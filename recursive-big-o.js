function sheepCount(sheep) {
    if(sheep === 0){
        return;
    }
    console.log(sheep + '' + '-' + 'Another sheep jumps over the fence');
    sheepCount(sheep - 1);
}

sheepCount(3);

function doubleArray(array) {
    if(!array.length){
        return [];
    }
        return [array[0] * 2, ...doubleArray(array.slice(1))];
}

console.log(doubleArray([1,2,3]));

function reverseString(string) {
    if(!string.length){
        return '';
    }
    return string[string.length -1] + reverseString(string.slice(0,string.length-1));
}

console.log(reverseString('reverse'));

function nthNumber(number) {
    if(number === 0){
        return number;
    }
    return number + nthNumber(number-1);
}

console.log(nthNumber(9));

function splitter(str, separator) {
  if(str.search(separator) === -1){
    return [str];
  }

  return [str.slice(0, str.indexOf(separator)), ...splitter(str.slice(str.indexOf(separator)+1, str.length), separator)];

}

console.log(splitter("the quick brown fox", "o"));

function decimalToBinary(input){
  if(input <= 0){
    return '';
  }
  let binaryRep = Math.floor(input % 2);
  return decimalToBinary(Math.floor(input / 2)) + binaryRep;
}

console.log(decimalToBinary(25));

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n-1);
  }
  
  console.log(factorial(4)); 
  
  function fibonacci(n) {
    if (n <= 2) {
      return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
  console.log(fibonacci(8));
  // east start with e   ast 
  //                     a   st 
  //                         t   s   
  //                     s   ta 
  //                         a   t   
  //                     t   sa 
  //                         a   s 
  
  // combination = east, eats, esta, esat, etsa, etas. 
  
  // word[0] + (word[1] + word[2] + word[3])
  //         + (word[i] + word[i +n].... +word[word.length])
  //         +((word[i+1] + word[i +2].... +word[word.length]))
  
  function anagrams(word) {
      
      let multiAnagrams =[];
  
      if(word.length === 1) {
          multiAnagrams.push(word); 
          return multiAnagrams
      }
  
      for(let i=0; i< word.length; i++) {
          const firstChar = word[i]; 
          const charsLeft = word.substring(0,i) + word.substring(i+1); 
          const innerAnagrams = anagrams(charsLeft); 
  
          for(let j=0; j < innerAnagrams.length; j++){
              multiAnagrams.push(firstChar + innerAnagrams[j]);
          }
      }
      console.log(multiAnagrams.length); 
      return multiAnagrams; 
  }
  
  console.log(anagrams('east'));
  