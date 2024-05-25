{

    // Getter and Setter

    class BankAccount {
        public readonly id : number;
        public name : string;
        protected _balance : number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // Setter 
        set deposit(amount : number){
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount : number){
        //     this._balance = this._balance + amount;
        // }

        // Getter
        get balance(){
            return this._balance;
        }

        // public getBalance () {
        //     return this._balance;
        // }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 2000);
    // goribManusherAccount.addDeposit(20);

    goribManusherAccount.deposit = 500;

    // const myBalance = goribManusherAccount.getBalance();

    const myBalance = goribManusherAccount.balance;

    console.log(myBalance);








}