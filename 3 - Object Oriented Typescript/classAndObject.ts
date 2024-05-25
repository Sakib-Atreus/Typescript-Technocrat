{

    // Class in OOP

    class Animal {
        /*
        name : string;
        species : string;
        sound : string; */  // For use parameter properties we don't need any initialize, they can auto initialized

        // Now use Parameter Properties ( public ) in constructor

        constructor(public name : string, public species : string, public sound : string){
            /*
            this.name = name;
            this.species = species;
            this.sound = sound; */ // And also we don't call this method for using parameter properties
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}!`);
        }
    }

    const dog = new Animal("German Shepyrd Bhai", "Dog", "Ghew Ghew");
    const cat = new Animal("Persian Bhai", "Cat", "Meaw Meaw");

    cat.makeSound();
    console.log(dog.name);



}