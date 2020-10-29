interface Person {
    name: string,
    age?: number
}

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name : '사람',
    age : 22
};

const expert: Developer = {
    name : '개발자',
    skills : ['spring', 'typescript', 'react']
}

const people: Person[] = [person, expert];

