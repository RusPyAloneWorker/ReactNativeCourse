import AsyncLocalClient from "../../infrastructure/AsyncLocalClient.ts";
import {RealmClient} from "../../infrastructure/RealmClient.ts";
import User, {UserParams} from "../entities/User.ts";

export class RealmRepository {
	localClient: AsyncLocalClient;
	tableName: string;
	constructor(tableName: string) {
		this.localClient = new AsyncLocalClient();
		this.tableName = tableName;
	}
	getItems = async (): Promise<User[]> => {
		let realmUsers = RealmClient.objects(User.UserSchemaName);
		console.log(realmUsers)
		return JSON.parse(JSON.stringify(realmUsers));
	};
	setItems = async (data: Array<UserParams>) => {
		console.log("Why im here?");

		RealmClient.write(() => {
			try {
				data.forEach((userParams) => {
					let user = new User(RealmClient, userParams);
					RealmClient.create(User.UserSchemaName, user);
					// console.log('User created:', user);
				})
			} catch (error: any) {
				console.error('Error creating user:', error.message);
			}
		})
	};
	setItem = async (data: UserParams) => {
		RealmClient.write(() => {
			try {
				let user = new User(RealmClient, data);
				RealmClient.create(User.UserSchemaName, user);
				console.log('!!!!!User created:', user);
			} catch (error: any) {
				console.error('Error creating user:', error.message);
			}
		})
	};
	removeAll = async () => {
		try {
			RealmClient.write(() => RealmClient.deleteAll());
		}
		catch (e: any){
			console.log(e.message)
		}
	};
}
