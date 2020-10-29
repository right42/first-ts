abstract class Animal {
    move(): void {
        console.log("roaming the earth....");
    }

    abstract makeSound(): void;
}

class Cat extends Animal {

    makeSound(): void {
        console.log('cat cat cat');
    }

}

class Dog extends Animal {
    makeSound(): void {
        console.log('dog dog dog');
    }
}


let dog: Animal = new Dog();
let cat: Animal = new Cat();

dog.makeSound();
cat.makeSound();
