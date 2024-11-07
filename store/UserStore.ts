import {makeAutoObservable} from "mobx";
import UserService from "../domain/services/UserService.ts";
import User from "../domain/entities/User.ts";

export default class UserStore {
    users: Array<User>;
    isLoading: boolean;

    private userService: UserService;

    constructor() {
        makeAutoObservable(this);
        this.users = new Array<User>();
        this.isLoading = false;
        this.userService = new UserService();
    }

    async addUser(record: User): Promise<void> {
        this.users.push(record);
    }

    async getUsers(): Promise<void> {
        this.setLoadingState(true);
        this.isLoading = true;
        this.setUsers(await this.userService.getUsers())
        setTimeout(() => this.setLoadingState(false), 1000);
        console.log(this.users);
    }

    private setUsers = (users: User[]) => this.users = users;

    private setLoadingState = (flag: boolean) => this.isLoading = flag;
}
