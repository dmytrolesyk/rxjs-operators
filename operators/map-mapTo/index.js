import Rx from 'rxjs';

// map
// Equivalent to JS Array.prototype.map

// mapTo
// Converts each emitted value into a new value, without ragar for the emitted value


const range = Rx.Observable.range(1, 9)

range
  .map(n => n*n)
  .subscribe(console.log)

const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
  .mapTo({ type: 'NOTIFICATION_ARRIVED' })
  .subscribe(console.log)