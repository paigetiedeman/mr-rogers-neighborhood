// Describe rogerReplace()

//Test: 
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"


// Business Logic


function rogerReplace(number){
  const three = "Won't you be my neighbor?"
  const two = "Boop!"
  const one = "Beep!"
  let numberString = number.toString();
  const numberArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberString[i].includes(3)) {
      numberArray.push(three);
    } else if (i == 2 && !numberString[i].includes(3)) {
      numberArray.push(two);
    } else if (i == 1 && !numberString[i].includes(3) && !numberString[i].includes(2)) {
      numberArray.push(one);
    } else {
      numberArray.push(i)
    }
  }
  return numberArray;
}

// UI Logic