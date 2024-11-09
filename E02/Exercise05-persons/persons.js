function Person(name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;

    this.increaseAge = function() {
        this.age++;
    };
}

const person1 = new Person("Alam", 29, "123-456-7890", "alam@example.com");
const person2 = new Person("Babul", 25, "987-654-3210", "babul@example.com");
const person3 = new Person("Mamun", 35, "111-222-3333", "mamun@example.com");

person1.increaseAge();
person2.increaseAge();
person3.increaseAge();

console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log("Person 3:", person3);
