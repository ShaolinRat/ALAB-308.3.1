// Part 1

for (let i = 0; i <= 100; i++) {
    let res = "";
    if (i % 3 == 0) {
      res += "Fizz ";
    }
    if (i % 5 == 0) {
      res += "Buzz";
    }
  
    console.log(res || i);
  }
  
  let k = 0;
  
  // Part 2
  
  let prime = false;
  let n = 94;
  let i = n;
  
  while (prime == false) {
    if (i === 2 || i === 3) {
      prime = true;
      console.log(`${i} is a prime number.`);
    } else if ((i + 1) % 6 !== 0 && (i - 1) % 6 !== 0) {
      i += 1;
    } else {
      let isPrime = true;
      for (let k = 2; k <= Math.sqrt(i); k++) {
        if (i % k === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime == true) {
        prime = true;
        if (i === n) {
          console.log(`${i} is a prime number.`);
        } else {
          console.log(`The prime number following ${n} is ${i}.`);
        }
      } else {
        i += 1;
      }
    }
  }
  
  // Part 3
  
  let cvsString =
    "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
  
  let initialArray = cvsString.split("\n");
  
  for (let i = 0; i < initialArray.length - 1; i++) {
    stringArray = initialArray[i].split(",");
    console.log(stringArray);
  }