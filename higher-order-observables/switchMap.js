import Rx from 'rxjs';

// const clockObservable = clickObservable
//   .map(
//     click => Rx.Observable.interval(1000)
//   )
//   .switch()
//   // is SWITCHMAP

// switchap = map ... + ... switch
// In on operation - moving to higher order and then flattening back

const clickObservable = Rx.Observable
  .fromEvent(document, 'click')

// const clockObservable = clickObservable
//   .switchMap(
//     click => Rx.Observable.interval(1000)
//   )

// clockObservable.subscribe(console.log);


const performRequest = () => fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(res => console.log(res))

const responsesObservable = clickObservable
  .switchMap(() => performRequest())

responsesObservable.subscribe(console.log)