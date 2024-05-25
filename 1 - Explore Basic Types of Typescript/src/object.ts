// Reference Type --> Object

const user : {
    firstName : string;
    middleName ?: string; // optional type
    lastName: string;
    // course: 'Programming Hero'; 
    readonly course: string; // type --> literal type; access modifier 
    isMarried: boolean; 
} = {
    firstName: 'Samiul',
    middleName: 'Islam',
    lastName: 'Sakib',
    course: 'Programming Hero',
    isMarried: false,
}

console.log(user);