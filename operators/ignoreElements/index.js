import Rx from 'rxjs'

// Doesn't emit any values from source observable, but does emit an error or complete state from the source
// Usage is obscure

const delayedError = Rx.Observable.throw('Error occurred').delay(1500)

console.log('Interval has started!')
Rx.Observable
  .interval(100)
  .merge(delayedError)
  .do(console.log)
  .take(30)
  .ignoreElements()
  .subscribe({
    next: v => console.log(v),
    complete: () => console.log('COMPLEEETE'),
    error: e => console.log(e),
  })
