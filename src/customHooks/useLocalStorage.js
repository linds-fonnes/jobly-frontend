import { useState, useEffect } from "react";

function useLocalStorage(key, firstVal = null) {
  const initialVal = localStorage.getItem(key) || firstVal;

  const [item, setItem] = useState(initialVal);

  useEffect(() => {
    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
