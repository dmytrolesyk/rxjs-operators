import Rx from 'rxjs'

// Loosely equivalent to Array.prototype.concat
// Creates an observable which emits all values from a source observable, then emits all values from a provided observable

Rx.Observable
  // .range(1, 10)
  .interval(100)
  .take(20)
  .concat(Rx.Observable.interval(100).map(i => `#${i}`))
  .subscribe(console.log)

// The trick with interval - it emits anyway
// Concat works specifically with async data - we don't even know we are waiting for the completion of interval observable to trigger the second one