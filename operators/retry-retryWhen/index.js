import Rx from 'rxjs';

// retry
// If the source observable throws an error, suppress the error and try again a specified number of times
// Number of repititions is specified by a provided number
// Has no effect if the source never errors

// retryWhen
// Like retry, but retries the source when provided observable emits

const buggyAPI = Rx.Observable
  .timer(2000)
  .do(() => console.log('You called the buggy API!'))
  .do(() => { throw new Error() });

buggyAPI
  // .retry(3)
  .retryWhen(() => Rx.Observable.interval(1000))
  .subscribe(console.log)
