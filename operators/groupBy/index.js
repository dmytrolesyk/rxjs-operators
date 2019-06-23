import Rx from 'rxjs'

// After the source observable completes...
  // Separate all the emitted values into groups based on an accessor
  // Emit each of those groups as an observable

Rx.Observable
  .range(1, 20)
  .groupBy(n => n % 3)
  .mergeMap(nGroup => nGroup.toArray())
  .subscribe(console.log)