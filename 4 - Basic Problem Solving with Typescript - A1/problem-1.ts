{
    // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

    function repeatString(stringInput: string, numberInput: number) : string{
        let countRepeat = '';
        for( let i = 0; i < numberInput; i++ ){
            countRepeat = countRepeat + stringInput;
        }
        return countRepeat;
    }

    const result = repeatString("Hello!", 3);
    console.log(result);

}