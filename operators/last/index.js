import Rx from 'rxjs'

// Returns the last element of a source observable to pass a predicate, after that observable completes
// Unlike first, source must complete
// If source never completes, last never emits

Rx.Observable
  .interval(100)
  .take(19)
  .last(n => n%3 === 0)
  .subscribe(console.log)