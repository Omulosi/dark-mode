import React, { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key)?
      JSON.parse(localStorage.getItem(key)):
      initialValue
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
