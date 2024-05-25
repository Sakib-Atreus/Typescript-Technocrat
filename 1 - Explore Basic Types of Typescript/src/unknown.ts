{


    // Nullable Type

    const searchValue = (value: string | null) => {
        if(value){
            console.log('Searching...');
        }else{
            console.log('There is no value!');
        }
    }

    searchValue(null);
    searchValue('Sakib');

    // Unknown Type
    // That means : we can't know what type of value assign

    const speedInMeterPerSecond = ( value : unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = ( value * 1000 ) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if(typeof value === 'string'){
            const [result, unit] = value.split(" ");
            const convertedSpeed = ( parseFloat(result) * 1000 ) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }else{
            console.log('Wrong Input');
        }
    }

    speedInMeterPerSecond('2200 kmh^-1');
    speedInMeterPerSecond(null)
    speedInMeterPerSecond(1100)


    // Never type
    // That type means : doesn't return any value, they just throw a error

    const throwError = (msg : string) : never => {
        throw new Error(msg);
    }

    throwError('Mushkil se error ho gaya!!!')





}