class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countMember(){
        console.log('50 member are present');
    }

    register(){
        console.log(this.username+' is register');
    }
}

// let u = new User('sarvesh', 'sarvesh@gmail.com', '123');
// u.register();

User.countMember();

class Member extends User{
    constructor(username, email, password,members){
        super(username,email,password)
         this.members = members;
    }

    memberInfo(){
        console.log(this.username+' is permanent user');
    }
}

let m = new Member('test','test@gmail.com', '1234','permanent')
m.register()