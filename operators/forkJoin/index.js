import Rx from 'rxjs';

// Very useful and intuitive
// Runs a number of observables, waits until they all finish, then bundles the result and emits
// Forking - the process of running all the observables at once
// Joining - the process of combining the results

// If any of the child observables throws an error, forkJoin will throw an error
// Useful for when you need the results of all of a number of sequential API calls, or none at all

// Resolves a very common web development use case - when we need to make a number of API calls and wait until they all come back

const friendAPI = Rx.Observable.timer(1000).mapTo({ name: 'Hank' });
// const preferencesAPI = Rx.Observable.timer(1700).mapTo({ theme: 'dark' });
const preferencesAPI = Rx.Observable
  .timer(1700)
  .mapTo(Rx.Observable.throw())
  .concatAll();

Rx.Observable.forkJoin(
  friendAPI,
  preferencesAPI,
)
  .subscribe(console.log)