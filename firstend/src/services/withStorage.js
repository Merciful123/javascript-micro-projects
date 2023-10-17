import React, {useState} from "react";

const withStorage = Component => props => {
  const [isAvailable, setisAvailable] = useState(false);

  const isStorageAvailable = () => {
    try {
      if (!isAvailable) {
        localStorage.setItem("_isStorageAvailable_", "0");
        localStorage.removeItem("_isStorageAvailable_");
        setisAvailable(true);
      }
      return true;
    } catch {
      setisAvailable(false);
      console.log("Local Storage is not available!");
      return false;
    }
  };

  const onSave = (key, value) => {
    if (isStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  };

  const onRead = key => {
    if (isStorageAvailable()) {
      const getValue = localStorage.getItem(key);
      return getValue ? JSON.parse(getValue) : [];
    }

    return [];
  };

  return <Component {...props} save={onSave} read={onRead} />;
};

export default withStorage;
