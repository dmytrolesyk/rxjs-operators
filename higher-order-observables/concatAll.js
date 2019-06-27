import Rx from 'rxjs';

// Just mergeAll(1)


const clickObservable = Rx.Observable
  .fromEvent(document, 'click')

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000).take(5))
  .mergeAll(1)

clockObservable.subscribe(console.log);

// If we have mergeAll(1) and click multiple times, it will remember our clicks and spawn that many observables
// howerver, they will be subscribed to one after another - waits for the compoletion of one observables, goes to the next

/*
---------+----------+----------------------------+--+------------------------->
          \          \
           -0-1-2-3-4 -0-1-2-3-4-5-6

           mergeAll(1)

------------0-1-2-3-405162738495-----------------0-1-2-3-4---0-1-2-3-4-------->
*/

// So, it puts one inner observable after the other - that is the idea of concatenation


// concatAll() === mergeAll(1) LITERALLY!!!

// Wait for one inner observable to stop and put the next inner observable after it