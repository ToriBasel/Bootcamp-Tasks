divBy7 = (num) => num % 7 === 0;
has7 = (num) => (num + '').split('').includes('7');

boom = (n) => {
  for (let i = 0; i <= n; i++) {
    if (divBy7(i)) {
      if (has7(i)) {
        console.log(' BOOM-BOOM,');
      } else {
        console.log(' BOOM,');
      }
    } else {
      console.log(` ${i},`);
    }
  }
};

boom(20);