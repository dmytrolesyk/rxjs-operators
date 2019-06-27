import Rx from 'rxjs';
import { fromStdIn } from '../../utility';

// Creates new observable that combines emissions from the source observable with the ltest value from a provided observable
// For example, every time the user's device orientation changes, you also wanna know what the latest application they had open was

// Subscribers are notified only when the source observable emits, but get both values
  // No notification is received when the provided observable emits

// Source observable sets the schedule of how ofter the subscriber processes the data


Rx.Observable
  .interval(1000)
  .withLatestFrom( fromStdIn() )
  .subscribe(console.log)