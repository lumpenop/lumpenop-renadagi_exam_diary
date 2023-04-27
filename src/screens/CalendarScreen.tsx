import {format} from 'date-fns';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import CalendarView from 'src/components/CalendarView';
import FeedList from 'src/components/FeedList';
import LogContext from 'src/context/LogContext';

export type MarkedDatesType = {
  [index: string]: {marked: boolean};
};

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const logContext = useContext(LogContext);
  if (!logContext) {
    return null;
  }

  const {logs} = logContext;

  const markedDates = React.useMemo(() => {
    return logs.reduce((acc: MarkedDatesType, curr) => {
      const formattedDate = format(new Date(curr.date), 'yyyy-MM-dd');
      acc[formattedDate] = {marked: true};
      return acc;
    }, {});
  }, [logs]);

  const filteredLog = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLog}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
