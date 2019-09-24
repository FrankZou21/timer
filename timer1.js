// node timer1.js 10 3 5 15 9 
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds
/*
No numbers are provided: 
Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: 
Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: 
Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/


const timer = function (arr) {
  if (arr === undefined) {
    return;
  }
  for (const element of arr) {
    let number = Number(element);
    if (number < 0 || isNaN(number)) {
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, number * 1000)
    }
  }
}

timer(process.argv.slice(2));