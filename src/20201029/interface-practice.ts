interface AnimalInterface {
    legs: number;
}

class Rabit implements AnimalInterface {
    legs: number = 2;   
}

class Point {
    constructor(public x: number, public y: number) {}
}

interface Point3d extends Point {
    z: number;
}

const point3d: Point3d = {
    x: 1, y: 2, z: 3
}