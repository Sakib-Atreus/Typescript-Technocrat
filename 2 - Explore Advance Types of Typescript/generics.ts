{
    //

    // Generics Type

    

    type GenericArray<T> = Array<T>;

    // const RollNumber : number[] = [ 1, 2, 3 ]
    const rollNumber : GenericArray<number> = [ 2, 4, 6]

    const friends : GenericArray<string> = [ 'Mr. X', 'Mr. Y']



    //// Use Object with Generic
    const user : GenericArray<{name: string, age: number}> = [
        {
            name: 'Samiul',
            age: 24
        },
        {
            name: 'Sakib',
            age: 24
        }
    ]
    

    // Generic Tuple

    type GenericTuple<X, Y> = [X,Y]

    const person : GenericTuple<string, string> = ['Mrs, X', 'Mrs. Y']

    const userWithId : GenericTuple<number, {name: string, age: number}> = [
        1234,
        {
        name: 'Mr.',
        age: 24
        }
    ]




    //
}