// src/components/SoonEvents/SoonEvents.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './SoonEvents.styles';
import { Entypo } from '@expo/vector-icons'; // для «...» меню

// Описание одной карточки события
export interface SoonEvent {
  /** Цвет точки рядом с датой (любой валидный CSS-цвет или hex) */
  color: string;
  /** Если диапазон: "1–2 февраля", иначе singleDate не используется */
  dateRange?: string;
  /** Если одно число: "5 февраля" */
  singleDate?: string;
  /** Заголовок события */
  title: string;
  /** Текст начала, например "Начало в 14:00 по МСК" */
  time: string;
}

export interface SoonEventsProps {
  /** Список ближайших событий */
  events: SoonEvent[];
}

const SoonEvents: React.FC<SoonEventsProps> = ({ events }) => {
  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <View style={styles.line} />
        <Text style={styles.headerText}>Ближайшие события</Text>
        <View style={styles.line} />
      </View>

      {/* Список событий */}
      <FlatList
        data={events}
        keyExtractor={(_, idx) => String(idx)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
};

interface EventCardProps {
  event: SoonEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const dateText = event.dateRange ?? event.singleDate ?? '';
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.dateRow}>
        <View style={[styles.dot, { backgroundColor: event.color }]}>
            <View style={styles.dotInner} />
        </View>
        <Text style={styles.dateText}>{dateText}</Text>
        <TouchableOpacity style={styles.menuBtn}>
          <Entypo name="dots-three-horizontal" size={14} color="#8F9BB3" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.time}>{event.time}</Text>
    </TouchableOpacity>
  );
};

export default SoonEvents;
