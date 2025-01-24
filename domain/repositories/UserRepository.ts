import axios from "axios";
import {UserParams} from "../entities/User.ts";

export default class UserRepository {
    private axiosInstance = axios.create({ baseURL: 'https://reqres.in/api/' });

    async getUsers(): Promise<Array<UserParams>> {
        const response = await this.axiosInstance.get("/users?page=2");
	    return response.data.data.map((userData: UserParams) => userData);
    }
}
