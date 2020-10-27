function double(str: string): string;
function double(num: number): number;

function double(arg: any) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`
    } else if (typeof arg === 'number') {
        return arg * 2;
    }
}

const num = double(3);
const str = double('s');

console.log(num);
console.log(str);
