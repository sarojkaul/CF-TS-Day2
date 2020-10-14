class Person {
  name = "";
  age = "";
  jobtitle = "";

  constructor(name, age, jobtitle) {
    this.name = name;
    this.age = age;
    this.jobtitle = jobtitle;
  }

  text() {
    return `My name is ${this.name} I am ${this.age} years old, and I am a ${this.jobtitle}`;
  }
}

let sentence = new Person("Daniel", 29, "Automation");
console.log(sentence.text());
// ############### Always look out in the decleration for string "" and Number #############

// ############### Extending the previous class ###################
class ExtendPerson extends Person {
  salary;
  jobLocation;
  constructor(name, age, jobtitle, salary, jobLocation) {
    super(name, age, jobtitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }
  extendedText() {
    return `${super.text()} and i get about ${this.salary} Euro and work in ${
      this.jobLocation
    }`;
  }
}

let sentence2 = new ExtendPerson(
  "Daniel",
  29,
  "Automationtechinician",
  6000,
  "Graz"
);
console.log(sentence2.extendedText());
