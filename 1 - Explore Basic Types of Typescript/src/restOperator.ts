{

    // rest operator means : onek gulo element ek jaigai kore eksathe array banano

    const greetFriends = (...friends : string[]) => {

        friends.forEach((friend : string) => console.log(` Hi ${friend}`));
    }

    greetFriends('Abul', 'Kabul', 'Obul')





}