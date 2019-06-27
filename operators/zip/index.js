import Rx from 'rxjs';

// Takes a bunch of observables and bundles their latest emissions into a single observable
// Indexes of the emissions must match
// Zipped observable will emit at the pace of the slowest ancestor

const slowNumberObservable = Rx.Observable.interval(100);
const slowSquareObservable = Rx.Observable.interval(350).map(n => n*n);

// slowNumberObservable.subscribe(console.log);
// slowSquareObservable.subscribe(console.log);


Rx.Observable.zip(
  slowNumberObservable,
  slowSquareObservable,
)
  .subscribe(console.log)
