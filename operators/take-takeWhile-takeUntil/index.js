import Rx from 'rxjs';

// take
// Emits only the first x few values of the observable

// takeWhile
// Like take, but emits values from the source only until a provided predicate returns false
// Passing values subsuquent to the first failing value will not be emitted

// takeUntil 
// Like take, but emits values from the source observable only until provided observable emits
// common example - timer

// Rx.Observable
//   .interval(1000)
//   .take(5)
//   .subscribe(console.log)

// Rx.Observable
//   .interval(1000)
//   .takeWhile(n => n < 7)
//   .subscribe(console.log)

  Rx.Observable
  .interval(1000)
  .takeUntil(Rx.Observable.timer(5000))
  .subscribe(console.log)