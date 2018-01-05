/*****************************/
/* Object.create constructor */
/*****************************/
var Person = {
    constructor: function(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        return this;
    },

    greet: function() {
        console.log('*Obj.create()');
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
};

var user;
user = Object.create(Person).constructor('Dennis', 24, 'male');
user.greet();

/* inheritance object */
var DeveloperObj = Object.create(Person);
DeveloperObj.constructor = function(name, age, sex, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills;
    return this;
}
var webDeveloper = Object.create(DeveloperObj).constructor('Web dev Den', 24, 'male', ['html', 'css', 'js']);
console.log(webDeveloper.skills);
webDeveloper.develop = function() {
    console.log('Work!');
}
webDeveloper.develop();

/************************************/
/* es5 classic function constructor */
/************************************/
var Person2 = function(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.greet2 = function() {
        console.log('*classic constructor');
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
};

var person = new Person2('Jhon', 34, 'male');
person.greet2();

/* inheritance prototype */
var Developer = function(name, age, sex, skills) {
    Person2.apply(this, arguments);
    this.skills = skills || [];

    this.info = function() {
        console.log('Hey ' + this.name + '! ' + 'Your skills: ' + this.skills);
    }
};
// Developer.prototype = Object.create(Person2.prototype); // but we have Person2 constructor
// Developer.prototype.constructor = Developer; // now we have Developer constructor
var webDeveloper2 = new Developer('Andy', 45, 'male', ['php', 'vuejs']);
webDeveloper2.info();
console.log(webDeveloper2 instanceof Developer); // check if webDeveloper2 exemplar of class Developer - true
console.log(webDeveloper2 instanceof Person2); // check if webDeveloper2 exemplar of class Person - false if we don't use row #62

/****************************/
/*        es6 class         */
/****************************/
class Person3 {
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    greet3() {
        console.log('*ES6');
        console.log(this.name + ' ' + this.age + ' ' + this.sex);
    }
}

let person3 = new Person3('Bob', 24, 'male');

person3.greet3();