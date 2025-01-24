import Realm, {ObjectSchema} from 'realm';

export interface UserParams {
    id: number|null;
    first_name:string;
    last_name:string;
    avatar?:string|null;
    email?: string|null;
}

export default class User extends Realm.Object<User> implements UserParams {
    static UserSchemaName = "User"

    id: number;
    email: string | null | undefined;
    first_name: string;
    last_name: string;
    avatar: string | null | undefined;

    static schema: ObjectSchema = {
        name: this.UserSchemaName,
        properties: {
            id: 'int',
            email:  {type:'string', optional: true},
            first_name: 'string',
            last_name: 'string',
            avatar: {type:'string', optional: true},
        },
    };

    constructor(realm: Realm,
                {id, email, first_name, last_name, avatar}: UserParams)
    {
        if (id === null){
            id = Math.floor(Math.random() * (500 - 100) + 500);
        }

        super(realm, {id, email, first_name, last_name, avatar});
        if (!last_name || last_name.length === 0 || last_name === "")
            throw new Error("Last name is not defined.");

        if (!first_name || first_name.length === 0 || first_name === "")
            throw new Error("First name is not defined.");

        this.first_name = first_name;
        this.last_name = last_name;

        this.id = id;
        this.email = email;
        this.avatar = avatar;
    }
}
