{
    // Inheritance in OOP

    class Person {
        name : string;
        age : number;
        address : string;

        constructor(name : string, age : number, address : string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        takeSleep(sleepOfHours : number){
            console.log(`${this.name} will take sleep ${sleepOfHours}!`);
        }
    }

    class Student extends Person {
        constructor(name : string, age : number, address : string){
            super(name, age, address);
        }
    }

    const student1 = new Student("Mr. Student", 24 , "Bangladesh")
    student1.name;
    student1.takeSleep(8)


    class Teacher extends Person {
        designation : string;

        constructor(name : string, age : number, address : string, designation : string){
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfHours : number){
            console.log(`${this.name} will take class ${numOfHours}!`);
        }
    }

    const teacher1 = new Teacher("Mr. Teacher", 42, "Bangladesh", "Professor");
    teacher1.name;
    teacher1.takeClass(4);





}