// Can reassign and redefine Var
var nameVar = 'Prince';
var nameVar = 'Terrell';
console.log('nameVar', nameVar)

// Can reassign but not redefine let
let nameLet = 'Tiera';
nameLet = 'LaQuanda';
console.log('nameLet', nameLet)

// Can't reassign nor redefine const
const nameConst = 'Shaunda';
console.log('nameConst', nameConst)

//Var, Let, and Const are all function Scoped meaning you are not able to---> 
//access it directly because it is not available in the parent global scope
// function getPetName() {
//     const petName = 'Pippa';
//     return petName
// }


//creating a variable works 
// const petName = getPetName();
//not able to access pet name inside this scope due to --->
//being defined in the function 
// console.log(petName);

// Block scoping

const fullName = 'Reginald Prince';
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);


