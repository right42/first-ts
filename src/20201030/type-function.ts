type Sum = (sumFirst:number, sumSecond: number) => number;
type Multiply = (mulFirst: number, mulSecond: number) => number;

let sumFunc: Sum = function(n: number, n2: number): number {
    return n + n2;
}

let mulFunc: Multiply = function(n: number, n2: number): number {
    return n * n2;
}

sumFunc = mulFunc;

interface Animal { animalProp: string };
interface Dog extends Animal { dogProp: number };

let f = (animal: Animal) => animal.animalProp;
let g = (dog: Dog) => { console.log(dog.dogProp) };

// f = g;
// error 

type Login = (id: string) => string;
type LoginWithToken = (id: string, token: string) => string;

let login: Login = (id: string) => id;
let loginWithToken: LoginWithToken = login;

// login = loginWithToken;
// error