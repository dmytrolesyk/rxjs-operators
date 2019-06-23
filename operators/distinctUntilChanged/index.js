import Rx from 'rxjs';

// Creates an observable which only emits the latest value from the source observable if it is different than the one before it
// Useful for an observable than tends to emit the same value many times in a row

Rx.Observable
  .interval(200)
  .map(n => ~~(n/10))
  .distinctUntilChanged()
  .subscribe(console.log)