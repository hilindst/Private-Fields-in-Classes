class Person {
  // Write code here
  #id;
  #name;

  constructor (id) {
   const randomVal =Math.floor(Math.random()*id);
   this.#id = randomVal;
  }

  get getID(){
    return this.#id;
  }
}
const franny = new Person(123);
const zooey = new Person(456);
console.log(franny.getID);
console.log(zooey.getID);//generates a random integer value for each console.log, but fails test "Person Class › ID should be different for different Person instances"

module.exports = Person;
