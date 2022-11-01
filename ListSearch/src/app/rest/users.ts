export class Users {
    id: string;
    username:string;
    password:string;
    email:string;
    mobile:string;

    constructor (id:any,username:any,password:any,email:any,mobile:any ){

        this.id= id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile =mobile;
    }
}