{


    // Type Alias


    // Same value type just declare one time reuse by it calling

    type Student = {
        name: string;
        age: number;
        contactNo: string;
        address: string;
    }

    const student1: Student = {
        name: 'Sakib',
        age: 24,
        contactNo: '01700000000',
        address: 'BD'
    }

    const student2: Student = {
        name: 'Sanvi',
        age: 25,
        contactNo: '01900000000',
        address: 'AUS'
    }

    const student3 : Student = {
        name: 'Sunny',
        age: 26,
        contactNo: '01600000000',
        address: 'USA'
    }



    type userName = string;
    type isAdmin = boolean;
    
    const firstUser : userName = 'Rudro';
    const whoAreYou : isAdmin = true;

    // type alias using in a function
    type Add = ( num1 : number, num2 : number) => number;

    const add : Add = (num1, num2) => num1+num2;



}