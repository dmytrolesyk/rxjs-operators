import Rx from 'rxjs';

// Unsubscribes from the previous inner observable and switches to the next inner observable

// const numbObservables = Rx.Observable
//   .interval(1000)
//   .take(4)

// const stringObservable = numbObservables.map(n => `hello ${n}`);

// const higherOrderObservable = numbObservables
//   .map(n => Rx.Observable.of(n + 1))

// higherOrderObservable.subscribe(
//   obs => obs.subscribe(console.log)
// );

const clickObservable = Rx.Observable
  .fromEvent(document, 'click')

const clockObservable = clickObservable
  .map(
    click => Rx.Observable.interval(1000)
  )
  .switch() // Previous inner observable will be unsubscribed
  
// clockObservable.subscribe(
//     clock => clock.subscribe(console.log)
//   )

clockObservable.subscribe(console.log)




// flattening 
// Observable<Observable<T>> ---> Observable<T>

