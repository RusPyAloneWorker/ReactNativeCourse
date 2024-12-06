import axios from "axios";
import User from "../entities/User.ts";

export default class UserRepository {
    private axiosInstance = axios.create({ baseURL: 'https://reqres.in/api/' });

    async getUsers(): Promise<Array<User>> {
        const response = await this.axiosInstance.get("/users?page=2");

	    return response.data.data.map((userData: any) => new User(userData));
    }
}
