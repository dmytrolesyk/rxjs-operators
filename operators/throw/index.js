import Rx from 'rxjs';

// Creates an observable which immediately enters an error state while emitting no values
// Useful for testing error handling

Rx.Observable
  .throw('Error occurred')
  .subscribe({
    next: n => console.log('N value was emitted', n),
    error: error => console.log(error),
  })