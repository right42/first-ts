class NothingImportant {
    name: string;
    readonly number: number;
    constructor(name: string){
       this.name = name;
       this.number = 22;
    }

    showInfo(): void{
        console.log(`name : ${this.name}, number : ${this.number}`);
    }
}

const nothingImportant: NothingImportant = new NothingImportant('test');

nothingImportant.showInfo();
