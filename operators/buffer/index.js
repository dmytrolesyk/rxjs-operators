import Rx from 'rxjs';
import { fromStdIn } from '../../utility';

// buffer
// Collects values from source observable until provided observable emits
// Provided observable can emit anything
// Collected values are emitted as an array
// As soon as buffer has emitted, it starts buffering again immediately

// bufferCount
// Like buffer, but waits until a specified number of values are emitted from source before emitting buffered values

// bufferTime
// Like buffer, but waits a specified amount of time before emitting buffered values

// bufferToggle
// Like buffer, but takes two arguments - an opening and closing observable
  // Closing observable is provided a factory function
// Buffer starts a buffer when opening observable emits
// Emits values when closing observable emits
// Can have multiple buffers going simultaneously

// bufferWhen
// Like bufferToggle, but requires no opening observable
// Like buffer, but factory function is provided instead of observable

fromStdIn()
  // .buffer(
  //   fromStdIn().filter(key => key === 'p')
  // )
  // .bufferCount(10)
  // .bufferTime(2000)
  // .bufferToggle(
  //   fromStdIn().filter(key => key === 'p'),
  //   () => fromStdIn().filter(key => key === 'o'),
  // )
  .bufferWhen(
    () => Rx.Observable.timer(1000)
  )
  .subscribe(console.log)