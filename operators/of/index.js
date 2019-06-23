import Rx from 'rxjs';

// Takes any number of arguments and returns an observable that emits them one after the other

Rx.Observable.of(1, 2, 3, 'Four', [5, 6, 7])
  .subscribe(console.log)