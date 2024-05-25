{


    // Spread Operator

    // spread operator means : array er moddhe thaka onek gulo value k alada kore chinno kore fela

    const bros1: string[] = ['Samiul', 'Sanvi', 'Sunny']
    const bros2: string[] = ['Rudro', 'Mahin', 'Shanto']
    bros1.push(...bros2) // spread

    console.log(bros1);


    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        nextjs: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    console.log(mentorList);



}