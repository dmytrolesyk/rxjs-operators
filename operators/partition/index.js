import Rx from 'rxjs';

// Freaky mixture of filter and group by
// Separtes stream into two groups - one that passes the predicate, and one that does not

// FUN PART
// Partition does not return an observable - returns two observable

const [evens, odds] = Rx.Observable
  .range(1, 20)
  .partition(n => n % 2 === 0)

evens.subscribe(console.log);
odds.subscribe(console.log);