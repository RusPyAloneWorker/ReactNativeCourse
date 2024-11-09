import {makeAutoObservable} from "mobx";
import UserService from "../domain/services/UserService.ts";
import User from "../domain/entities/User.ts";

export default class UserStore {
    users: Array<User>;
    isLoading: boolean;

    private userService: UserService;

    constructor() {
        this.users = new Array<User>();
        this.isLoading = false;

        makeAutoObservable(this);

        this.userService = new UserService();
    }

    async addUser(record: User): Promise<void> {
        this.setLoadingState(true);
        this.users.push(record);
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async getUsers(): Promise<void> {
        this.setLoadingState(true);
        this.setUsers(await this.userService.getUsers())
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    private setUsers = (users: User[]) => this.users = users;

    private setLoadingState = (flag: boolean) => this.isLoading = flag;
}
