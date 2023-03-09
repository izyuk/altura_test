import { createContext, useState } from 'react';
import {PortalAndContextProps} from "@/interfaces";

const AppContext = createContext(null);

function Context({ children }: PortalAndContextProps) {
  const [message, setMessage] = useState('');

  return (
    <AppContext.Provider value={{ message, setMessage }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;