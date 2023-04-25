import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export type LogConTextValueType = {
  logs: LogsType[];
  onCreate: ({title, body, date}: OnCreateType) => void;
};

interface Props {
  children: JSX.Element;
}

const LogContext = createContext<LogConTextValueType | null>(null);

export type LogsType = {
  id: string;
  title: string;
  body: string;
  date: string;
};
type OnCreateType = Pick<LogsType, 'title' | 'body' | 'date'>;

export const LogContextProvider = ({children}: Props) => {
  const item = Array.from({length: 10}).map((_, index) => {
    return {
      id: uuidv4(),
      title: `Log ${index}`,
      body: `Log ${index}`,
      date: new Date().toISOString(),
    };
  });
  const [logs, setLogs] = useState<LogsType[]>(item);

  const onCreate = ({title, body, date}: OnCreateType) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  if (!LogContext) {
    return null;
  }

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
