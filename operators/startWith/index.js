import Rx from 'rxjs';

// Creates a new observable that emits a provided value, then emits values from the source observable
// Useful for asynchronous observables that may not return a value for some time

console.log('Made API request')
Rx.Observable
  .timer(4000, 500)
  .map(n => n + 1)
  .startWith(0)
  .subscribe(a => console.log('Request complete', a))
