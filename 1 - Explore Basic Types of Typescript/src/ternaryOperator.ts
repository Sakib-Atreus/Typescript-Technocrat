{


    // Ternary Operator || Optional Chaining || Nullish Coalescing
    
    const age: number = 24;

    if(age >= 18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }


    //  Using Ternary 

    const isAdult = age >=18 ? "Adult" : "You are a child";
    console.log({isAdult});


    // Nullish Coalescing Operator 

    // Using for null or undefined value
    // Null / Undefined --> Decision Making

    const isAuthenticate = null;

    const result1 = isAuthenticate ?? "Guest"; // using nullish coalescing

    const result2 = isAuthenticate ? isAuthenticate : "Guest"; // not perfect for empty string

    console.log({result1}, {result2});


    // Optional Chaining

    type User = {
        name : string;
        age?: number;
    }

    const user : User = { 
        name: "Sakib",
    }

    const userAge = user?.age ?? "Age not defined";
    console.log({userAge});







}