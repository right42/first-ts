function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b,
    };
}

const merged = merge({foo : 1}, {bar : 2});

console.log(merged);
