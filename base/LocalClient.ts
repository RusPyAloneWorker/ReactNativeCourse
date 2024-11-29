import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalClient {
	async get<T> (tableName: string): Promise<T | null> {
		const data = await AsyncStorage.getItem(tableName);
		return data ? JSON.parse(data) as T : null;
	};
	async set<T> (tableName: string, data: T): Promise<void> {
		return await AsyncStorage.setItem(tableName, JSON.stringify(data));
	};
	async removeTable(tableName: string): Promise<void> {
		return await AsyncStorage.removeItem(tableName);
	};
}
