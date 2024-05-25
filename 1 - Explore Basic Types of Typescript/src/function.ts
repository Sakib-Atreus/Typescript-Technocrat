{


// Function Type --> Two Types 
// --> 
// Normal Function & Arrow Function

// Normal Function
function add(num1 : number , num2 : number) : number  {
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}

add(2, 7)

// Arrow Function
const addArrow = ( num1 : number , num2 : number ) : number => num1 + num2;

addArrow(7, 2)


// Object --> Function  ==>  Method 

const poorUser = {
    name: 'Sakib',
    balance: 0,
    addBalance(newBalance : number) : string {
        return `My new balance is : ${this.balance + newBalance}`;
    }
}
// poorUser.addBalance(1000)
console.log(poorUser.addBalance(1000));


// Callback function
const arr : number[] = [1,2,3,4]

const newArray : number[] = arr.map((element : number) : number => element * element)


console.log(newArray);




}