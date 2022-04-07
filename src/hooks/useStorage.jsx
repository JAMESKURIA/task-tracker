import React from "react";
import { StorageContext } from "../components/StorageProvider";

const useStorage = () => {
  const { storage, state, dispatch } = React.useContext(StorageContext);
  return { storage, state, dispatch };
};

export default useStorage;
