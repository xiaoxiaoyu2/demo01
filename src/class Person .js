class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
class Student extends Person {
}
class Teacher extends Person {
}
const stu = new Student("zhang", 18);
const tea = new Teacher("lisi", 23);
tea.bark();
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        if (value.length <= 6) {
            return this.name = value;
        }
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        if (value >= 0) {
            return this.age = value;
        }
    }
}
const dog = new Animal("旺财", 5);
dog.setAge(3);
dog.setName("玛玛哈哈");
console.log(dog);
//# sourceMappingURL=class%20Person%20.js.map