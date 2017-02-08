"use strict";

class Animal {
  eat() {
    console.log("om om om");
  }
}

class Dog extends Animal {
  // By extending Animal class, it inherits all methods from 
  // the Animal class
}

const d = new Dog();
d.eat();