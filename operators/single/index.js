import Rx from 'rxjs'

// Emits just one value which passed a predicate function, after the source observable completes

// ...Almost just like operator 'first'
// BUT!
// If more than one value passes the predicate, an error will be thrown

Rx.Observable
  .range(1, 3)
  .single(n => n%2 === 0)
  .subscribe(console.log)