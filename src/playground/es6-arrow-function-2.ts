
const add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(55, 1));


const user = {
    name: 'Prince',
    cities: ['Atlanta', 'San Diego', 'Valdosta'],
    printPlacesLived() {
        return this.cities.map((city: string) => this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [4, 5, 6, 7],
    multiplyBy: 5,

    multiply() {
    
    return this.numbers.map((number: number) => this.multiplyBy * number);

   }
};

console.log(multiplier.multiply());