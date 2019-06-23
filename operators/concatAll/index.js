import Rx from 'rxjs'
import { fromStdIn } from '../../utility'

// When a source observable emits other observables, subscribe to each one and emit its values
// Does not subscribe to one observable until the previous one completes

Rx.Observable.of(
  Rx.Observable.interval(1000).take(5),
  Rx.Observable.range(1, 3),
  fromStdIn(),
)
  .concatAll()
  .subscribe(console.log)