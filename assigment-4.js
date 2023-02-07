//  ............... quistion - 1 complete 100%.

// Descriptions : A function is written called 'mindGame',where the parameter is multiplide by 3,then added 10, then divided by 2 and finally substracted by 5.
      function mindGame(number){   
      let multiplicationBy3 = number * 3;
      let add10 = multiplicationBy3 + 10;
      let devidedBy2 = add10 / 2;
      let decrease5 = devidedBy2 - 5;
      if(typeof number !== 'number' || number.length == 0 || number < 0){
        return 'please provide valid input'
      }
      else{
        return decrease5;
      }
    }; 
    const result = mindGame(16);
    console.log(result);  

 
// .........quistion-2.........
//   Descriptions : A function is written called evenOdd,that takes a string as input and outputs odd or even based on how many characters you input in parameter.
 function evenOdd(str){
    if(typeof str !== 'string' || str.length == 0){
          return 'please provide valid input';
    }
    else if(typeof str == 'string' && str.length % 2 == 1){
        return 'odd';    
    }
    else {
        typeof str == 'string' && str.length % 2 == 0
         return 'even';
    }
    
 };
  let myInput = evenOdd('allahu');
 console.log(myInput);

//   quistion - 3......
//  Descriptions : A function is written called 'isLGSeven',It returns the difference between the input value and 7.If the difference is less than 7,It will returns the value of difference, otherwise it returns double the input value.
 function isLGSeven(theNumber){
    let deffirenceBetween = theNumber - 7;
     if(typeof theNumber !== 'number' || theNumber.length == 0){
         return 'please provide valid input';
     }
    else if(deffirenceBetween < 7){
        return deffirenceBetween;
    }
    else{
        let doubleOfInput = theNumber * 2;
        return doubleOfInput;
    }
}
const myValue = isLGSeven(150);
console.log(myValue);


// quistion - 4........
// Descriptions : A function is written called 'findingBadData' this function can count how many negative elements are available in a array. 
    function  findingBadData(givenValus){
     let negativeElements = 0;
    for(let i = 0; i < givenValus.length; i++){
      const element = givenValus[i];
   if(element < 0 ){
       negativeElements++;
   }     
   }
      return negativeElements;     
};   
const myNumbers =[16, -33, -90, -56, 98, -90, -67, 55, 89, -34, 78, -67];
const results = findingBadData(myNumbers);
console.log(results);







// quistion -5 ..............
// Descriptions : A function is written called 'gemsToDiamond': Here is the code to convert 3 persons gems to Diamonds .If the total Diamonds are double of 1k,then subtrac 2k from the total amount and you will get what you have.
 function gemsToDiamond(person1, person2, person3){
    const person1GemPower = 21;
    const person2GemPower = 32;
    const person3GemPower = 43;
    const person1Diamond = person1 * person1GemPower;
    const person2Diamond = person2 * person2GemPower;
    const person3Diamond = person3 * person3GemPower;
   const totalDiamonds = person1Diamond + person2Diamond + person3Diamond;
   if(typeof person1, typeof person2, typeof person3 !== 'number'){
        return 'please provide valid input';
   }
    else if(totalDiamonds > 1000 * 2){ 
        let ourDiamonds = totalDiamonds - 2000;
        return ourDiamonds;
    }
    else{
        return totalDiamonds;
    }
};
const friendsAllGems = gemsToDiamond(100,5,1);
console.log(friendsAllGems);