import Rx from 'rxjs';

// race
// Waits until once observable from a group of provided observables emits, discard everything else

// Subsequent emissions from the 'winner' will be emitted while the 'losers' of the race will be ignored

const apiA = Rx.Observable
  .timer(3000, 100)
  .map(n => `API A => ${n}`)

const apiB = Rx.Observable
  .timer(2000, 100)
  .map(n => `API B => ${n}`)


Rx.Observable.race(
  apiA,
  apiB
)
  .subscribe(console.log)
