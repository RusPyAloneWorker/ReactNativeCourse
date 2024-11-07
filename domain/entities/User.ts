export default class User {
    id: number =  7;
    email: string = "";
    first_name: string = "";
    last_name: string = "";
    avatar: string = "";

    constructor(data: any) {
        this.id = data.id;
        this.email = data.email;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.avatar = data.avatar;
    }
}
