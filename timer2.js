const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, CIAO!")
    process.exit();
  } else if (key === "b") {
    process.stdout.write('\x07');
  } else if (key < 0 || isNaN(key)) {
    console.log("Please input a valid number");
  } else {
    console.log(`Setting the timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000)
  }
});
