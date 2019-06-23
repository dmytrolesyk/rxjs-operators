import Rx from 'rxjs';

// Creates an observable that only emits the latest value from the source
// observable if it passes a predicate function

Rx.Observable
  .interval(400)
  .filter(n => n%2 === 0)
  .subscribe(console.log)