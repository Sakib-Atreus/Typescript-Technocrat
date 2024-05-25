{
 //


    // Interface

    // Using Interface with Object type
    // We can use just only for Object with Interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: string;
    }

    interface RollNo1 extends User1 {
        roll: number;
    }

    interface RollNo2 extends User2 {
        rollNumber: number;
    }

    const student1 : RollNo1 = {
        name: 'Sakib',
        age: 24,
        roll: 401,
    }

    // Array Type

    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number 
        // index type number for that we can use number
    }

    // Function Type 

    type Add1 = (num1 : number, num2 : number) => number

    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add : Add2 = (num1, num2) => num1 + num2;

    add(7,2)




 //
}