import React from "react";
import { StorageContext } from "../components/StorageProvider";

const useStorage = () => {
  return React.useContext(StorageContext);
};

export default useStorage;
