import Rx from 'rxjs';


// conatMap = map ... + ... concatAll
// conatMap = map ... + ... mergeAll(1)

const clickObservable = Rx.Observable
  .fromEvent(document, 'click')


const performRequest = () => fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())

const responsesObservable = clickObservable
  .concatMap(
    click => performRequest(), 
    (click, response) => response.email, //result selector function, to pick sth
  )

responsesObservable.subscribe(console.log)

// As mergeMap with only one concurrency allowed at a time