import Rx from 'rxjs';

const sourceObservable = Rx.Observable
  .interval(500)
  .take(10)

// const resultObservable = sourceObservable
//   .mergeMap(x => Rx.Observable.of(x * 10));
const resultObservable = sourceObservable
  .mergeMap(x => {
    if (x % 2 === 0) {
      return Rx.Observable.of(x * 10);
    }
    return Rx.Observable.empty()
  });

resultObservable.subscribe(console.log)