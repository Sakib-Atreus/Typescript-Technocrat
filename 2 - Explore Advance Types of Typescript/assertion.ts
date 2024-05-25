{
    //


    // Type Assertion

    let anything : any; 
    
    anything = "Next Level Web Development";

    anything = 777;
    
    (anything as string).split(" ");
    (anything as number).toFixed(2);

    ////

    const KgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue
        }
        if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result1 = KgToGm(1000) as number;
    const result2 = KgToGm('1000') as string;

    ////

    type CustomError = {
        message: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }


    //
}