import Rx from 'rxjs';

// Merges all of the inner observables concurrently

// Will not unsubscribe from the previous inner observable
// It will keep all the inner observables running

/*

---------+----------+---------------------------->
          \          \
           -0-1-2-3-4 -0-1-2-3-4-5-6

           mergeAll

------------0-1-2-3-405162738495----------------->

*/

const clickObservable = Rx.Observable
  .fromEvent(document, 'click')

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  .mergeAll(2) // max number of concurrently running observables

clockObservable.subscribe(console.log);
