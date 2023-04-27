import React, {createContext, useState} from 'react';
import logStorage from 'src/storage/logStorage';
import {v4 as uuidv4} from 'uuid';
import logsStorage from 'src/storage/logStorage';

export type LogConTextValueType = {
  logs: LogType[];
  onCreate: ({title, body, date}: OnCreateType) => void;
  onModify: (modified: LogType) => void;
  onRemove: (id: string) => void;
};

interface Props {
  children: JSX.Element;
}

const LogContext = createContext<LogConTextValueType | null>(null);

export type LogType = {
  id: string;
  title: string;
  body: string;
  date: string;
};
type OnCreateType = Pick<LogType, 'title' | 'body' | 'date'>;

export const LogContextProvider = ({children}: Props) => {
  const initLogsRef = React.useRef<LogType[] | null>(null);
  const [logs, setLogs] = useState<LogType[]>([]);

  React.useEffect(() => {
    (async () => {
      const savedLogs = await logStorage.get();
      if (savedLogs) {
        initLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);
  React.useEffect(() => {
    if (logs === initLogsRef.current) {
      return;
    }
    logStorage.set(logs);
  }, [logs]);

  // const item = Array.from({length: 10}).map((_, index) => {
  //   return {
  //     id: uuidv4(),
  //     title: `Log ${index}`,
  //     body: `Log ${index}`,
  //     date: new Date().toISOString(),
  //   };
  // });

  const onModify = (modified: LogType) => {
    const nextLog = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLog);
  };
  const onRemove = (id: string) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

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
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
