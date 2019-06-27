import Rx from 'rxjs';


// mergeMap = map ... + ... mergeAll

const clickObservable = Rx.Observable
  .fromEvent(document, 'click')


const performRequest = () => fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())

const responsesObservable = clickObservable
  .mergeMap(
    click => performRequest(), 
    (click, response) => response.email, //result selector function, to pick sth
    4 // max number of concurrently running/subscribed inner observables, just like in mergeAll
  )

responsesObservable.subscribe(console.log)