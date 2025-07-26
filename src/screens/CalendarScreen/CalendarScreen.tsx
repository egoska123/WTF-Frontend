import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './CalendarScreen.styles';
import Calendar from '../../components/Calendar/Calendar';
import CalendarMocks from '../../mocks/CalendarMocks';
import SoonEvents, { SoonEvent } from '../../components/SoonEvents/SoonEvents';
import SoonEventsMocks from '../../mocks/SoonEventsMocks';

export default function CalendarScreen() {

  const [current, setCurrent] = useState<{ year:number; month:number }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const events = SoonEventsMocks[current.month + 1] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.calendarText}>Календарь событий</Text>
      <Calendar 
        highlightDates={CalendarMocks}
        onMonthChange={(y, m) => setCurrent({ year: y, month: m })}
      />
      <View style={styles.screen}>
        <SoonEvents events={events} />
      </View>
    </View>
  );
} 
