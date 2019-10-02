import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDark, setDark] = useLocalStorage('darken', false);

  useEffect(() => {
    if (isDark){
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return [isDark, setDark];

}

export default useDarkMode;
