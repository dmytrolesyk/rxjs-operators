import Rx from 'rxjs';

// A static operator
// Creates an observable which completes immediately and returns no values
// Useful for testing, corner cases

// Rx.Observable
//   .empty()
//   .subscribe(a => console.log('EMMITTT', a))

// No result, cause our empty does not emit anything, lol

Rx.Observable
  .empty()
  .subscribe({
    next: a => console.log('EMMITTT', a),
    complete: a => console.log('COMPLEEAAAATEEE', a)
  })

// Completes instantly so the complete handler works