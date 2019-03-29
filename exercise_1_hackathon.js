// Create the Person class using a function
var Person = function(name, age){
    this.name=name;
    this.age=age;
    this.describe = function(){
        return this.name + ", " + this.age + " years old";
    }
}
var jack = new Person("Taylor", 29);
var jill = new Person("Joe", 25);
console.log(Taylor.describe());
console.log(Joe.describe());
