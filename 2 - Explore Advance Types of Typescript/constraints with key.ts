{

    // Constraints with key

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"  // Manually

    type Owner2 = keyof Vehicle

    //////


    const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "Mr.",
        age: 24,
        address: "BD"
    }

    const car = {
        model: "Toyota 303s",
        year: 2018
    }

    const person = getPropertyValue(car, "model")


}