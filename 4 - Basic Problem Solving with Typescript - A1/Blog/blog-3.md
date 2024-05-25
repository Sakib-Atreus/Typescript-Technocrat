## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

TypeScript's static type system provides developers with the ability to catch errors early in the development process, ensuring more robust and maintainable code. In this blog post, we'll explore why type guards are necessary in TypeScript and discuss various types of type guards and their use cases.

# Why Are Type Guards Necessary?

In TypeScript, variables can have multiple types, and their types may change at runtime. This can lead to unexpected behavior and runtime errors if not handled properly. Type guards allow developers to narrow down the type of a variable within a certain code block, providing stronger type safety and preventing runtime errors.

Here the example of code: 

        function findLength(value: string | string[]) {
            console.log(value.length); // Error: Property 'length' does not exist on type 'string | string[]'.
        }

In this example, TypeScript throws an error because the length property is not common to both string and string[] types. To address this issue, we can use type guards to narrow down the type of value within the function.

# Various Types of Type Guards

1. typeof Type Guard: The typeof operator allows developers to check the type of a variable at runtime. It can be used to differentiate between primitive types like string, number, boolean, and symbol. 

Here the example of code: 

        function printLength(value: string | string[]) {
            if (typeof value === "string") {
                console.log(value.length); // OK
            } else {
                console.log(value.length); // OK
            }
        }

2. instanceof Type Guard: The instanceof operator checks whether an object is an instance of a particular class or constructor function. It's useful for differentiating between objects of different classes.

Here the example of code: 

        class Dog {
            bark() {
                console.log("Woof!");
            }
        }

        class Cat {
            meow() {
                console.log("Meow!");
            }
        }

        function makeSound(animal: Dog | Cat) {
            if (animal instanceof Dog) {
                animal.bark(); // OK
            } else {
                animal.meow(); // OK
            }
        }

3. in Type Guard: The third type of type guard in TypeScript is the 'in' type guard. This allows you to define your own custom type guard functions that check if a value is of a certain type.

Here the example of code: 

        type NormalUser = {
            name: string;
        }

        type AdminUser = {
            name: string;
            role: "admin";
        }

        const getUser = (user: NormalUser | AdminUser) => {
            if("role" in user){
                console.log(`My name is ${user.name} and my role is ${user.role}`);
            }else{
                console.log(`My name is ${user.name}`);
            }
        }

Type guards are essential tools in TypeScript for handling dynamic typing and ensuring type safety in a dynamic runtime environment.