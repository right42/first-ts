const enum ProgrammingLangauge {
    JAVA,
    JAVASCRIPT
};

let programmingLangauge: ProgrammingLangauge = ProgrammingLangauge.JAVA;

console.log(programmingLangauge);

enum ShapeType {
    Circle,
    Square
};

type Circle = {
    type: ShapeType.Circle;
    radios: number;
}

type Square = {
    kind: ShapeType.Square;
    maxLength: number;
}

let circle: Circle = {
    radios : 123,
    type : ShapeType.Circle
}

console.log(circle.type);
