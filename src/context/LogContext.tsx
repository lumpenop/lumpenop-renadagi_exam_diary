import React, {createContext, useState} from 'react';

interface LogConTextValue {
  text: string;
  setContextText: (value: string) => void;
}

interface Props {
  children: JSX.Element;
}

const LogContext = createContext<LogConTextValue | null>(null);

export const LogContextProvider = ({children}: Props) => {
  const [text, setText] = useState('');

  const setContextText = (value: string) => {
    setText(value);
  };

  if (!LogContext) {
    return null;
  }

  return (
    <LogContext.Provider value={{text, setContextText}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
