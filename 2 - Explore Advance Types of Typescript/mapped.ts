{
    // Mapped Types

    const arrOfNumbers: number[] = [1, 2, 4];

    // const arrOfStrings: string[] = ['1', '2', '4'];
    const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());

    console.log(arrOfStrings);


    type Area = {
        height: number;
        width: number;
    }

    type AreaString<T> = {
        [key in keyof T] : T[key];
    };

    const area1: AreaString<{ height: string; width: number}> = {
        height: '100',
        width: 50
    }




}