import UserRepository from "../repositories/UserRepository.ts";
import User, {UserParams} from "../entities/User.ts";

export default class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() : Promise<UserParams[]> {
        return await this.userRepository.getUsers();
    }
}
