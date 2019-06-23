import Rx from 'rxjs';

// Creates an observable that, if the source observable completes before emitting any value, emits the provided value
// Has no effect if the source observable emitted any values

Rx.Observable
  .empty()
  .defaultIfEmpty(42)
  .subscribe(a => console.log('Where is the value???', a))