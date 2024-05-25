{
    // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

    function filterEvenNumbers(numbers: number[]): number[] {
        if(numbers.length === 0){
            throw new Error("Your given array is empty!")
        }

        const evenNumber: number[] = [];
        for(const num of numbers){
            if(num % 2 === 0){
                evenNumber.push(num);
            }
        }
        return evenNumber;
    }

    const numbersOfArray = [1,2,3,4,5,6,7,8,9];

    const evenNumbersOfArray = filterEvenNumbers(numbersOfArray);
    console.log(evenNumbersOfArray);



    // We can use filter for find the even number of an array

    function filterEvenNumber(numbers: number[]): number[] {
        return numbers.filter(num => num % 2 === 0);
    }

    console.log(filterEvenNumber(numbersOfArray));

}