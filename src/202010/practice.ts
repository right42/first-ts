const message: string = 'hello world';
console.log(message);

let done: boolean = true;
done = false;

let numbers : number[] = [1, 2, 3];
numbers.push(4);


let mightBeUndefined: string | undefined = undefined;
mightBeUndefined = '1';
mightBeUndefined = undefined;

let nullableNumber: number | null = null;
nullableNumber = null;
nullableNumber = 1234;


let color: 'red' | 'blue' | 'yellow' = 'red';
color = 'blue';

function sum(a: number, b: number){
    return a + b;
}

sum(1, 4);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, curr) => {
        return acc += curr;
    }, 0);
}

sumArray(numbers);

function returnNothing(): void {
    console.log('this function return nothing');   
}

returnNothing();