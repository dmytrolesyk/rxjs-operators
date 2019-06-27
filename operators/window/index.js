import Rx from 'rxjs';
import { fromStdIn } from '../../utility';

// window
// All emissions within a specified window of time are bundled into an observable 
// A provided observable indicates when to 'close' the window


  // windowCount
  // Like window, but shifts to the next window when the current window has accuulted a specified number of values

  // windowTime
  // Like window, but shifts to the next window after the current window has been opendedfor a specified amount of time

  // windowToggle
  // Like window, but takes two observables - one which opens a window and another which closes it
  // Closing obervable is a factory function like bufferToggle

  // windowWhen
  // like window, but opening observable is a factory function


Rx.Observable
  .interval(100)
  // .window(
  //   Rx.Observable.interval(1000)
  // )
    // .windowCount(10)
    // .windowTime(1000)
    // .windowToggle(
    //   fromStdIn().filter(key => key === 'o'),
    //   () => fromStdIn().filter(key => key === 'c')
    // )
    .windowWhen(
      () => fromStdIn().filter(key => key === 'p')
    )
    .concatMap(o => o.toArray())
    .subscribe(console.log)