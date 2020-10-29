interface Counter {
    (start: number): number;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { return start };
    counter.interval = 0;
    counter.reset = function(){ }

    return counter;
}

let c = getCounter();
c.reset();
c.interval;
c(1);