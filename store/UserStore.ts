import { makeAutoObservable } from "mobx";
import UserService from "../domain/services/UserService.ts";
import User from "../domain/entities/User.ts";
import LocalRepository from "../domain/repositories/LocalStorageRepository.ts";

const USER_STORAGE_KEY: string = "Users";

export default class UserStore {
    users: Array<User>;
    isLoading: boolean;

    private userService: UserService;
    private localRepository: LocalRepository<Array<User>>;

    constructor() {
        this.users = new Array<User>();
        this.isLoading = false;

        makeAutoObservable(this);

        this.userService = new UserService();
        this.localRepository = new LocalRepository<Array<User>>(USER_STORAGE_KEY);
    }

    async addUser(record: User): Promise<void> {
        this.setLoadingState(true);
        this.users.push(record);
        await this.localRepository.setItems(this.users)
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async removeUser(record: User): Promise<void> {
        this.setLoadingState(true);
        let userToRemove = this.users.filter(user => user.id === record.id);
        let indexToRemove = this.users.findIndex(user => user.id === record.id);
        console.log(userToRemove);

        if (indexToRemove !== - 1) {
            this.users.splice(indexToRemove, 1);
        }
        console.log(this.users);

        await this.localRepository.setItems(this.users)
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async getUsers(): Promise<void> {
        let users = await this.localRepository.getItems();
        this.setLoadingState(true);
        if (users !== null) {
            this.setUsers(users)
            this.setLoadingState(false);
            return;
        }

        this.setLoadingState(true);
        this.setUsers(await this.userService.getUsers())
        await this.localRepository.setItems(this.users);
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async refreshUsers(): Promise<void> {
        await this.localRepository.removeAll();
        await this.getUsers()
    }

    private setUsers = (users: User[]) => this.users = users;

    private setLoadingState = (flag: boolean) => this.isLoading = flag;
}
