{
    // instanceof Guard

    class Animal {
        name: string;
        species: string;

        constructor(name : string, species : string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I am making sound!");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBark(){
             console.log("I am Barking!");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }

        makeMeaw(){
             console.log("I am Meawing!");
        }
    }


    // smart way to handle and we are using for that function

    const isDog = (animal : Animal) : animal is Dog  => {
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }else{
            animal.makeSound();
        }
    }

    const dog1 = new Dog("Mr. Dog", "dog");
    const cat1 = new Cat("Mr. Cat", "cat");


    getAnimal(cat1)







}