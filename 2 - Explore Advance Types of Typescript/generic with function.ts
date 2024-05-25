{
//


    // Generic with Function

    const createArray = ( param : string ) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>( param : T ) : T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Who are you?')

    //`````````//
    interface UserG {id: number, name: string}

    const resGenericWithObject = createArrayWithGeneric<UserG>({id: 401, name: 'Sakib'})


    // Create Tuple with Generic

    const createGenericTuple = <T, Q>(param1: T, param2: Q) : [T,Q] => {
        return [param1, param2]
    }

    const tuple1 = createGenericTuple<number, string>(22, 'Tuple')
    const tuple2 = createGenericTuple<number, {name: string}>(30, {name: 'Tuple Name'})


    // 

    const addCourseToStudent = <T>(student : T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Mr." , age: 24, devTools: "NLWD"})
    const student2 = addCourseToStudent({name: "Mrs.", profession: "MERN Stack Developer"})

//
}