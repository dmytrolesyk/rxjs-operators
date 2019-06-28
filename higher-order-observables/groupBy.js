import Rx from 'rxjs';

// Allows us to branch out from the source observable based on some key calculation on each value

Rx.Observable
  .interval(500)
  .take(5)
  .groupBy(x => x % 2)
  .mergeMap(obs => obs.toArray())
  .subscribe(console.log)