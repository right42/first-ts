class Counter {
    static count: number = 0;

    static plusCount() {
        Counter.count += 1;
    }

    static getCount(){
        return Counter.count;
    }
}

console.log(Counter.count);
Counter.plusCount();
console.log(Counter.getCount());
