import Rx from 'rxjs';

// Equivalent to Array.prototype.every
// Creates an observable which emits true if each element emitted by the source observable passed a provided predicate function
// Only emits after the source observable completes

Rx.Observable
  .range(1, 9)
  .map(n => n*2)
  .every(n => n % 2 === 0)
  .subscribe(console.log)