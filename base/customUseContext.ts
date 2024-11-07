import {storesContext} from "../store/RootStore.ts";
import React from "react";

export const useRootStore = () => React.useContext(storesContext);
