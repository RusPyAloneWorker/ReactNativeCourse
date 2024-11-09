export default class User {
    id: number;
    email: string | null;
    first_name: string;
    last_name: string;
    avatar: string | null;

    constructor(data: any) {
        if (!data.last_name || data.last_name.length === 0 || data.last_name === "")
            throw new Error("Last name is not defined.");

        if (!data.first_name || data.first_name.length === 0 || data.first_name === "")
            throw new Error("First name is not defined.");

        this.first_name = data.first_name;
        this.last_name = data.last_name;

        this.id = data.id ?? Math.floor(Math.random() * 10);
        this.email = data.email;
        this.avatar = data.avatar;
    }
}
