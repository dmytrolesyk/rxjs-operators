import Rx from 'rxjs'

// concatMap - is like more complicated version of concatAll
// Like map, but the value returned from the mutator must be an observable
// The observable returned from the mutator is subscribed to
  // results are passed to the next observer

// concatMapTo 
// Like concatMap, but maps to a constant observable, with no regards or the incoming values

Rx.Observable
  .interval(1000)
  // .concatMapTo(Rx.Observable.range(0, 6))
  .concatMap(n => Rx.Observable.range(0, n+1))
  .subscribe(console.log)
