import Rx from 'rxjs';

// Use kind of like concat family, but concat is interested in order of the observables and their respective completion, 
// merge is not interested in this, it does not care when they complete and it doesn't wait for one to complete
// before starting to emit things from another

// merge
// Creates new observable which combines the source and provided observable
// Works like concat, but all observables are subscribed to at once
// Does not wait for previous observable to complete to start the next one
// Hard to determine post-merge what the source was

// mergeAll
// Merges all provided observables

// mergeMap
// If the source observable emits observables, continuously subscribe to those and emit any value that comes from any of them

const bluePostFeed = Rx.Observable
  .interval(1000)
  .map(n => `Blue Post Article #${n}`);

const redHeraldFeed = Rx.Observable
  .interval(1500)
  .map(n => `Red Herald Article #${n}`);

const greenTribuneFeed = Rx.Observable
  .interval(1650)
  .map(n => `Green Tribune Article #${n}`);



// bluePostFeed
//   .merge(redHeraldFeed)
//   .subscribe(console.log)

// Rx.Observable.of(
//   bluePostFeed,
//   redHeraldFeed,
//   greenTribuneFeed,
// )
//   .mergeAll()
//   .subscribe(console.log)

const config = {
  blue: bluePostFeed,
  red: redHeraldFeed,
  green: greenTribuneFeed,
}

Rx.Observable.from(Object.keys(config))
  .mergeMap(key => config[key])
  .subscribe(console.log)