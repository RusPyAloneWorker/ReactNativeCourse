import UserStore from "./UserStore.ts";
import React from "react";

class RootStore {
    userStore: UserStore;

    constructor() {
        this.userStore = new UserStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
