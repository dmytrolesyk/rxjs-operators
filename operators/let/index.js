import Rx from 'rxjs';

// An operator, which returns an observable that replaces the current one
  // Receives the current observable as an argument
  // Generally used for tests

Rx.Observable
  .interval(1000)
  .let(source => Rx.Observable.interval(100))
  .subscribe(console.log)