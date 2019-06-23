import Rx from 'rxjs'
import { fromStdIn } from '../../utility'

// Emits the latest value from the source observable at a specified interval

// Useful if the frequency at which new elements are added, and the frequency at which you need to access elements, vary greatly

// We are only interested in pulling values every, say, 3 seconds

fromStdIn()
  .sample(Rx.Observable.interval(2000))
  .subscribe(console.log)