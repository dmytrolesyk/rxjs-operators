import Rx from 'rxjs';
import { fromStdIn } from '../../utility';

// debounce
// Like upside-down throttle
// Discard any values that are emitted within a specified period of time after the previous emission
// Like throttle but with an initial value
// Duration is specified by a provided observable

// debounceTime
// Duration is specified by a number


fromStdIn()
  // .debounce(
  //   () => Rx.Observable.timer(1000)
  // )
  .debounceTime(1000)
  .subscribe(console.log)