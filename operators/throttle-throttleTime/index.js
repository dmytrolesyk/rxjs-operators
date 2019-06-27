import Rx from 'rxjs';
import { fromStdIn } from '../../utility';

// throttle
// Does not emit anything until a duration of time, specified by the provided observable, has passed between source emissions

// Only emits the latest value
// Metaphor: Someone who is looking for deals on an online store. They find the best deal and then wait 5 minutes to see if a better one appears. 
  // If a better deal comes, they forget the last one and 5 minutes before doing anything
  // If one doesn't they make the purchse (emission)
  // Thy purchasing activity is throttled by the frequency of new deals

// throttleTime
// Like throttle, except duration is determined by a specified number and not an observable

// fromStdIn()
// Rx.Observable.interval(500)
//   .throttleTime(1000)
//   .subscribe(console.log)

fromStdIn()
  .throttle(
    () => fromStdIn().filter(key => key === 'p')
  )
  .subscribe(console.log)