let arrayNumber = [],
  evenResult = 1,
  oddResult = 0,
  number,
  interval;

function getValues() {
  for (let i = 0; i < 4; i++) {
    number = +prompt("Enter the number");
    if (number % 2 == 0) {
      evenResult *= number;
    } else {
      oddResult += number;
    }
  }
  getResults();
}

getValues();

function getResults() {
  interval = evenResult - oddResult;
  for (let i = interval; i >= 2; i--) {
    if (i % 2 == 0) {
      arrayNumber.push(i);
    }
  }
}

alert(`Odd Result : ${oddResult}
Even Result : ${evenResult}
interval : ${interval}
Out Put : ${arrayNumber.join(",")}`);
