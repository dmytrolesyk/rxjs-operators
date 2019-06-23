import Rx from 'rxjs';

// Roughly equivalent to array.prototype.find
// From your observable you're gonna get the first value that matches a predicate
// Creates an observable which completes as soon as the source observable emits an acceptable value
// Useful for extracting a value from an observable that will not complete, or that will take a long time to complete

Rx.Observable
  .interval(1000)
  .first(n => n === 3)
  .subscribe(console.log)