{

// Destructuring --> Two Types
// 1. Object destructuring and 2. Array destructuring


// Object
const user = {
    id: 401,
    name: {
        firstName: 'Samiul',
        lastName: 'Sakib'
    },
    contactNo: '01700000000',
    address: 'Bangladesh'
}

const { id : studentId, name: {lastName} } = user; // cannot assign data type, just name alias or rename the value name


// Array

const myFriends = ['Monica', 'Luis', 'Lara', 'Rachel']

    const [, , bestFriend, ...rest] = myFriends; // " ,, that means ignore, and ...rest means rest of value "


}