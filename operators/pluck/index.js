import Rx from 'rxjs';

// Used to map an observable of similar objects to a single property of those objects
// A string, not a function, is provided

const friendsAPI = Rx.Observable
  .interval(1000)
  .map(i => ({ name: `Friend #${i}`, mutualFriends: i *2 + 1}))
  .pluck('name')
  .subscribe(console.log)
