function reverseNumber(number) {
  const signNumber = Math.sign(number);
  const stringNumber = String(number);
  let reveredNum = "";

  if (signNumber === 1) {
    for (let i = stringNumber.length - 1; i >= 0; i--) {
      reveredNum += stringNumber[i];
    }  
    return reveredNum;
  } else {
    let fLetter = stringNumber.at(0);
    for (let i = stringNumber.length - 1; i >= 1; i--) {
      
      reveredNum += stringNumber[i];
    }  
    return fLetter + reveredNum;
  }

}

console.log(reverseNumber(-1234))

