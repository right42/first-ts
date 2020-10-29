type Programmer = { favoriteLangauge: string };
type BeerLover = { favoriteBeer: string };

let programmer: Programmer = {
    favoriteLangauge : 'java'
};

let beerLover: BeerLover = {
    favoriteBeer : 'beer'
};

type BeerLovingProgrammer = Programmer & BeerLover;

let beerLovingProgrammer: BeerLovingProgrammer = {
    favoriteBeer : 'beer',
    favoriteLangauge : 'typescript'
};

