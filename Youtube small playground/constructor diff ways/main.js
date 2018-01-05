/* Object.create constructor */
var Person = {
    constructor: function(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        return this;
    },

    greet: function() {
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
}

var user,
    user2;

user = Object.create(Person).constructor('Dennis', 24, 'male');
user2 = Object.create(Person).constructor('Hanna', 23, 'female');
user.greet();
user2.greet();

/* es5 function constructor */
var Person2 = function(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.greet2 = function() {
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
}

var person = new Person2('Jhon', 34, 'male');
var person2 = new Person2('Alice', 23, 'female');

person.greet2();
person2.greet2();

/* es6 class */
class Person3 {
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    greet3() {
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
}

let person3 = new Person3('Bob', 24, 'male');

person3.greet3();