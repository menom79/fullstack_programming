const fs = require('fs');

// Read numbers from file and calculate sum
fs.readFile('numbers.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const numbersArray = data.split(',').map(Number);
  const sum = numbersArray.reduce((acc, num) => acc + num, 0);

  console.log('Reading file and calculating sum...');
  console.log('Sum is', sum + '.');
});
