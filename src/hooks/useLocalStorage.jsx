import { useState, useEffect } from 'react';
import defaultContacts from '../data/data.json';


export default function useLocaStorage(key) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultContacts;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
