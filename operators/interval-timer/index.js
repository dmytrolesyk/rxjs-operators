import Rx from 'rxjs';

// interval (duration)
// Emits a value each time the specified duration passes

// timer (duration, [interval])
// Emits once after the specified duration has passed
// If a second argument is provided, it will then emit each time that interval passes, indefinetely

// const ticker = Rx.Observable.interval(2000);
// ticker.subscribe(v => console.log(`A: ${v}`))

// setTimeout(() => ticker.subscribe(v => console.log(`B: ${v}`)), 1000)

const stopWatch = Rx.Observable.timer(5000, 500)

stopWatch.subscribe(v => console.log("A", v))