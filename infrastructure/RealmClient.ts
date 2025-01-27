import Realm from 'realm';
import User from "../domain/entities/User.ts";

export const RealmClient = new Realm({schema: [User], schemaVersion: 2});
