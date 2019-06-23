import Rx from 'rxjs';
import { fromStdIn } from '../../utility'

// Backwards of take

// skip
// Ignores the first few elements of a source observable

// skipWhile
// Ignores elements from a source observable until a provided predicate function returns false

// skipUntil
// Ignores elements from a srouce observable until a provided observable emits a value

// console.log('INPUT IS OFFICIALLY BEING ACCEPTED')
// fromStdIn()
//   .skip(10)
//   .take(5)
//   .subscribe(console.log)

// console.log('INPUT IS OFFICIALLY BEING ACCEPTED')
// fromStdIn()
//   .skipWhile(v => v !== 'g')
//   .subscribe(console.log)

// console.log('INPUT IS OFFICIALLY IN 2 SECONDS')
// fromStdIn()
//   .skipUntil(Rx.Observable.timer(2000))
//   .subscribe(console.log)


const countDown = Rx.Observable
  .range(1,9)
  .delayWhen(n => Rx.Observable.timer(n * 1000))
  .map(n => `You can start typing in ${Math.ceil((1-n/10)*10)} seconds`)

fromStdIn()
  .skipUntil(Rx.Observable.timer(10000))
  .merge(countDown)
  .subscribe(console.log)