{
    // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

    function findLargestNumber(numbers: number[]): number{
        if(numbers.length === 0){
            throw new Error("Your given array is empty!")
        }

        let largestNumber = numbers[0];
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] > largestNumber){
                largestNumber = numbers[i];
            }
        }
        return largestNumber;
    }

    const numbersOfArray = [2,8,17,15,24,6,12];
    const largestNumberOfArray = findLargestNumber(numbersOfArray);
    console.log(largestNumberOfArray);

}