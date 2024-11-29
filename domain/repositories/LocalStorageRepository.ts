import LocalClient from "../../base/LocalClient.ts";

export default class LocalRepository<T> {
	localClient: LocalClient;
	tableName: string;
	constructor(tableName: string) {
		this.localClient = new LocalClient();
		this.tableName = tableName;
	}
	getItems = async () => {
		return await this.localClient.get<T>(this.tableName);
	};
	setItems = async (data: T) => {
		return await this.localClient.set(this.tableName, data);
	};
	removeAll = async () => {
		return await this.localClient.removeTable(this.tableName);
	};
}
