// src/components/ChatMini/ChatMini.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './ChatMini.styles';
import useImageFallback from '../../hooks/useImageFallback';

export interface ChatMiniProps {
  /** URL аватарки */
  avatarUri?: string;
  /** Локальная заглушка (require) */
  fallbackAvatar?: ImageSourcePropType;
  /** Название чата или пользователя */
  chatName: string;
  /** Последнее сообщение или подпись */
  lastMessage: string;
  /** Необязательный счётчик непрочитанных */
  unreadMessage?: number;
}

const ChatMini: React.FC<ChatMiniProps> = ({
  avatarUri,
  fallbackAvatar,
  chatName,
  lastMessage,
  unreadMessage,
}) => {
  const { source, onError } = useImageFallback(avatarUri, fallbackAvatar);

  return (
    <View style={styles.card}>
      <View style={styles.avatarWrapper}>
        <Image
          source={source}
          onError={onError}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {chatName}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subtitle}>
          {lastMessage}
        </Text>
      </View>
      {unreadMessage != null && unreadMessage > 0 && (
        <View style={styles.unread}>
          <Text style={styles.unreadText}>{unreadMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default ChatMini;
