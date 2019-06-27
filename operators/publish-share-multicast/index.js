import Rx from 'rxjs';

// publish
// Returns an observable with a special method, connect
  // Works similar to subject
// Unlike normal observable published observable does not start executing code as soon as it is subscribed to
  // Multiple subscribers can subscribe and all get identical data!
// To start the functioning of the observable, like  normal observable responding to subscribe, call connect

// share
// Like publish, but connect is omitted
// Observablestarts executing code as soon as it is subscribed to, but does not start a new thread upon the 2nd subscription, 3d subscription and so on
// Useful for a long-lived process that gradually returns values, like a notification service with many widgets subscribed to it

// multicast
// Like publish, but returns a Subject instead of an observable with a special property
// BehaviorSubject, ReplaySubject and others can be used
const shared = new Rx.BehaviorSubject(-1);

const currencyTicker = Rx.Observable
  .interval(1000)
  .do(() => console.log('PINGED'))
  .map(n => `Currency Info #${n}`)
  // .publish()
  // .share()
  .multicast(shared)

currencyTicker.subscribe(i => console.log('LEFT WIDGET', i));
setTimeout(() => currencyTicker.subscribe(i => console.log('RIGHT WIDGET', i)), 3000);

currencyTicker.connect();