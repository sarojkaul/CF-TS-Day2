var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobtitle) {
        this.name = "";
        this.age = "";
        this.jobtitle = "";
        this.name = name;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    Person.prototype.text = function () {
        return "My name is " + this.name + " I am " + this.age + " years old, and I am a " + this.jobtitle;
    };
    return Person;
}());
var sentence = new Person("Daniel", 29, "Automation");
console.log(sentence.text());
// ############### Always look out in the decleration for string "" and Number #############
// ############### Extending the previous class ###################
var ExtendPerson = /** @class */ (function (_super) {
    __extends(ExtendPerson, _super);
    function ExtendPerson(name, age, jobtitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobtitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    ExtendPerson.prototype.extendedText = function () {
        return _super.prototype.text.call(this) + " and i get about " + this.salary + " Euro and work in " + this.jobLocation;
    };
    return ExtendPerson;
}(Person));
var sentence2 = new ExtendPerson("Daniel", 29, "Automationtechinician", 6000, "Graz");
console.log(sentence2.extendedText());
