class Triangle {
    vertices: number;
    
    constructor(){
        this.vertices = 3;
    }
}

let triangle: Triangle = new Triangle();
triangle.vertices;

class Account {
    constructor(protected username: string, private password: string){ }

    getPassword(){
        return this.password;
    }
}

class CarOwner extends Account {

    constructor(password: string) {
        super('carOwner', password);    
    }

    getUsername(){
        return this.username;
    }
}

let yoonha: CarOwner = new CarOwner('1234');
console.log(yoonha.getPassword());
console.log(yoonha.getUsername());

