let user: {
    readonly name: string,
    age?: number
};

user = {
    name : 'test'
}

console.log(user.name);


const sumFunction: (a: number, b: number) => number = (a, b) => a + b;

console.log(sumFunction(1, 2));

type MinusFunction = (a: number, b: number) => number;
const minusFuction: MinusFunction = (a, b) => a - b;

console.log(minusFuction(5, 3));

function greetings(name: string = 'john'): void {
    console.log(`hello ${name}`);
}

greetings('dev');
greetings();


function stringOrNumber(value: number, returnString: boolean = false): string | number {
    if(returnString) {
        value.toString();
    }
    return value;
}

stringOrNumber(1, true);
stringOrNumber(4);