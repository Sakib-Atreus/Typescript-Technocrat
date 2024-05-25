{
    // Static in OOP

    class Counter {
        // count : number = 0;
        static count: number = 0;

        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        
        // increment() {
        //     return (this.count = this.count + 1);
        // }

        static decrement(){
            return (Counter.count = Counter.count - 1);
        }
    }

    // const instance1 = new Counter(); // --> different memory 
    console.log(Counter.increment());

    // const instance2 = new Counter(); // --> different memory
    console.log(Counter.increment());

    console.log(Counter.increment());
    console.log(Counter.decrement());







}