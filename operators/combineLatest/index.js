import Rx from 'rxjs';

// Has a vibe similar to that of a zip operator

// Once each of the provided observable ahs emitted at least once, emit a bundle containing all the latest values
// After that, emit an updated bundle whenever any provided observable emits
// Works like zip, except indexes do not have to match
  // Moves faster than the pace of the slowest observable

const countryObs = Rx.Observable.fromEvent(document.getElementById('country'), 'change', e => e.target.value);

const cityObs = Rx.Observable.fromEvent(document.getElementById('city'), 'change', e => e.target.value);

Rx.Observable.combineLatest(countryObs, cityObs).subscribe(console.log);