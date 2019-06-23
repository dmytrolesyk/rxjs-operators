import Rx from 'rxjs';

// Creates an observable that synchronously emits length integers starting at start

const rangeObservable = Rx.Observable.range(0, 16);

rangeObservable
  .subscribe(e => console.log(`Range emitted ${e}`));
