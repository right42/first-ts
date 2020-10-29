class Shape {
    private _vertices: number = 3;

    getVertices(){
        return this._vertices;
    }

    setVertices(vertices: number){
        this._vertices = vertices;
    }
}

class Car {
    constructor(private carName: string) {}

    get carname(): string {
        console.log('called getter');
        return this.carName;
    }

    set carname(carName: string) {
        console.log('called setter');
        this.carName = carName;
    }
}

let car: Car = new Car('sonata');
console.log(car.carname);
car.carname = 'ccc';


