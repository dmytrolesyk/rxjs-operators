import Rx from 'rxjs'

// reduce
// Equivalent to array.prototype.reduce
// Aggregate all the elements of an observable after it completes

// scan
// every time the source observable emits, aggregate all the values so far and emit the aggregated value

Rx.Observable
  .interval(200)
  .take(10)
  // .reduce((acc, val) => acc + val, 0)
  .scan((acc, val) => acc + val, 0)
  .subscribe(console.log)