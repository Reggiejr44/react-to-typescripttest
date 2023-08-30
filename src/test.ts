export {};

function welcomePerson(person: Person) {
  console.log(`Hey ${person.firstName} ${person.lastName}`);
  return `Hey ${person.firstName} ${person.lastName}`;
}

const Pdawg = {
  firstName: "Reginald",
  lastName: "Prince"
};

welcomePerson(Pdawg);

interface Person {
  firstName: string;
  lastName: string;
}