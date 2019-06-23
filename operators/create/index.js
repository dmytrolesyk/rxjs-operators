import Rx from 'rxjs';

// Creates a new observable which emits, completes and errors
// under custom circumstances

// Powerful, but executing too much code inside create is anti-pattern

const customObservable = Rx.Observable.create((observer) => {
  observer.next(42)
  // observer.complete()
  setInterval(() => observer.next('FLOON!'), 500)
  setTimeout(() => observer.complete(), 2500)
})

customObservable.subscribe({
  next: a => console.log('NEXT', a),
  complete: () => console.log('COMPLETE'),
})
