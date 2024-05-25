{
    // Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
    
    function reverseArray<T>(inputArray: T[]): T[] {
        const reversed: T[] = [];
        for(let i = inputArray.length - 1; i >= 0; i--){
            reversed.push(inputArray[i])
        }
        return reversed;
    }

    const givenStringArray = ["apple", "banana", "cherry"];
    const reverseStringArray = reverseArray(givenStringArray);
    console.log(reverseStringArray);

    const givenNumberArray = [10, 20, 30];
    const reverseNumberArray = reverseArray(givenNumberArray);
    console.log(reverseNumberArray);


    // Using reverse function

    function reversedArray<T>(inputArray: T[]) : T[] {
        return inputArray.reverse();
    }

    console.log(reverseArray(givenStringArray));
    console.log(reverseArray(givenNumberArray));


}