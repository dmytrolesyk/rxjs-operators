import Rx from 'rxjs';

// delay
// Emits values from the source observable only after a specified duration has passed
// Duration is specified as a number

// delayWhen
// like delay
// instead of a number, a method which returns the duration of the delay is provided


// Rx.Observable
//   .of(42)
//   .do(() => console.log('What is the meaning of life, the universe, and everything?'))
//   .delay(5000)
//   .do(() => console.log('Come on! You know this one!'))
//   .delay(5000)
//   .subscribe(console.log)

console.log('STARTING')
Rx.Observable
  .range(1, 9)
  .delayWhen(n => Rx.Observable.timer(n * 1000))
  .subscribe(console.log)