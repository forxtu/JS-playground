// function People(age, sex){
// 	this.age = age;
// 	this.sex = sex;

// 	this.greeting = function(say){
// 		return say;
// 	};
// }

// var user1 = new People(15, "female");
// var user2 = new People(20, "male");

// console.log(user1.greeting("hi"));
// console.log(user2);


function Select(selector){
    this.elems = document.querySelectorAll(selector);  

    this.on = function(event, callback){
        for(var i = 0; i < this.elems.length; i++){
            this.elems[i].addEventListener(event, callback);
        }
    }
}

var elems = new Select(".elems");
var elems2 = new Select(".elems2");

elems.on("focus", function(){
    this.style.backgroundColor = "red";
    this.innerHTML = "unfocus me";
});
elems.on("blur", function(){
    this.style.backgroundColor = "green";
    this.innerHTML = "focus me";
});

elems2.on("click", function(){
    alert("Works!");
});