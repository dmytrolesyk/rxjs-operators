import Rx from 'rxjs';

// Converts an array, promise or iterator into an observable
  //*fromPromise can be used specifically for promises

const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21];

// Rx.Observable.from(fibonacciArray)
//   .subscribe(console.log);

const fibonacciPromise = new Promise(r => r(fibonacciArray));

// Rx.Observable.from(fibonacciPromise)
//   .subscribe(console.log)

function* fibonacciGenerator() {
  let a = 1, b = 1;
  while (true) {
    let c = a + b;
    yield c;
    a = b;
    b = c;
  }
}

Rx.Observable.from(fibonacciGenerator())
  .take(20)
  .subscribe(console.log)


