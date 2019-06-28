import Rx from 'rxjs';

const clickObservable = Rx.Observable.fromEvent(document, 'click');
const clockObservable = Rx.Observable.interval(1000);

const resultObservable = clockObservable
  .window(clickObservable)
  .map(o => o.count())
  .switch()

resultObservable
  .subscribe(console.log)

