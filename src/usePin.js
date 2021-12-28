
import { useState } from 'react';

export default function usePin() {
  const getPin = () => {
    const pin = localStorage.getItem('pin');
    return pin
  };

  const [pin, setPin] = useState(getPin());

  const savePin = pin => {
    localStorage.setItem('pin', pin);
    setPin(pin);
  };

  return [pin, savePin];
}
