interface UserInterface { 
    name: string;
    height: number;
}

interface Pet {
    name: string;
    species?: string;
}


const userObj: UserInterface = {name : 'test', height : 177};
const puppy: Pet = {name : 'happy'};

const pet2: Pet = userObj;
// const userObj2: UserInterface = pet;
// error

interface Color {
    R: number;
    G: number;
    B: number;
}

let colorObj: Color = {
    R : 255,
    G : 255,
    B : 255
};