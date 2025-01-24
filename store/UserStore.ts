import { makeAutoObservable } from "mobx";
import UserService from "../domain/services/UserService.ts";
import User, {UserParams} from "../domain/entities/User.ts";
import { RealmRepository } from "../domain/repositories/LocalStorageRepository.ts";
import {RealmClient} from "../infrastructure/RealmClient.ts";

const USER_STORAGE_KEY: string = "Users";

export default class UserStore {
    users: Array<UserParams>;
    isLoading: boolean;

    private userService: UserService;
    private localRepository: RealmRepository;

    constructor() {
        this.users = new Array<UserParams>();
        this.isLoading = false;

        makeAutoObservable(this);

        this.userService = new UserService();
        this.localRepository = new RealmRepository(User.UserSchemaName);
    }

    async addUser(record: UserParams): Promise<void> {
        this.setLoadingState(true);
        await this.localRepository.setItem(record);
        await this.getUsers();
        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async getUsers(): Promise<void> {
        let users = await this.localRepository.getItems();
        this.setLoadingState(true);

        if (users.length > 0) {
            this.setUsers(users);
            this.setLoadingState(false);
            return;
        }

        let usersParams = await this.userService.getUsers();
        await this.localRepository.setItems(usersParams);
        this.setUsers(usersParams)

        setTimeout(() => this.setLoadingState(false), 1000);
    }

    async refreshUsers(): Promise<void> {
        await this.localRepository.removeAll();
        await this.getUsers()
    }

    private setUsers = (users: UserParams[]) => this.users = users;

    private setLoadingState = (flag: boolean) => this.isLoading = flag;
}
