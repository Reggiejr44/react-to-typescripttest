//arguments object - no longer bound with arrow functions 

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


// this keyword -no longer bound 

const user = {
    name: 'Prince',
    cities: ['Atlanta', 'San Diego', 'Valdosta'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [4, 5, 6, 7],
    multiplyBy: 5,

    multiply() {
    
    return this.numbers.map((number) => this.multiplyBy * number);

   }
};

console.log(multiplier.multiply());