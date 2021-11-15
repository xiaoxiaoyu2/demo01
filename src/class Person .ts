class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) { // 构造函数constructor
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log(this.name)
    }
}

class Student extends Person { }
class Teacher extends Person { }

const stu = new Student("zhang", 18);
const tea = new Teacher("lisi", 23);
tea.bark();

class Animal {
    constructor(private name: string, private age: number) {
    }
    getName() {
        return this.name
    }
    setName(value: string) {
        if (value.length <= 6) {
            return this.name = value
        }
    }

    getAge() {
        return this.age
    }
    setAge(value: number) {
        if (value >= 0) {
            return this.age = value
        }
    }
}

const dog=new Animal("旺财",5);
dog.setAge(3);
dog.setName(" 玛玛哈哈");
console.log(dog);
