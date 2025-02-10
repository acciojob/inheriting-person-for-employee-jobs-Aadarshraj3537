// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Constructor function for Employee (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Ensure prototype inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

