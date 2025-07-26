// src/components/UserCardSmall/UserCardSmall.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import styles from './UserCardSmall.styles';
import useImageFallback from '../../hooks/useImageFallback';
import IconChat from '../../../assets/icons/IconChat';

export interface UserCardSmallProps {
  avatarUri?: string;
  fallbackAvatar?: ImageSourcePropType;
  Name: string;
  roles: string[];
}

const GAP = 10; // px между бейджами

const UserCardSmall: React.FC<UserCardSmallProps> = ({
  avatarUri,
  fallbackAvatar,
  Name,
  roles,
}) => {
  const { source, onError } = useImageFallback(avatarUri, fallbackAvatar);

  const [containerWidth, setContainerWidth] = useState(0);
  // ширины бейджей ролей, индекс roles.length зарезервирован под "+N"
  const [badgeWidths, setBadgeWidths] = useState<number[]>(
    Array(roles.length + 1).fill(0)
  );
  // сколько бейджей физически влезает
  const [fitCount, setFitCount] = useState(roles.length);

  // замер ширины контейнера
  const onContainerLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  // замер ширины каждого бейджа
  const onBadgeLayout = (idx: number) => (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setBadgeWidths(ws => {
      if (ws[idx] === w) return ws;
      const next = [...ws];
      next[idx] = w;
      return next;
    });
  };

  // пересчитываем, сколько бейджей влезет
  useEffect(() => {
    if (containerWidth === 0) return;
    // ждём, когда промеряются все реальные бейджи
    if (badgeWidths.slice(0, roles.length).some(w => w === 0)) return;

    let acc = 0;
    let count = 0;

    for (let i = 0; i < roles.length; i++) {
      const w = badgeWidths[i] + GAP;
      if (acc + w <= containerWidth) {
        acc += w;
        count++;
      } else {
        break;
      }
    }

    setFitCount(count);
  }, [containerWidth, badgeWidths, roles.length]);

  const hasOverflow = roles.length > fitCount;
  // если переполнение, резервируем последний слот для "+N"
  const displayRoles = hasOverflow
    ? // берем первые fitCount−1 ролей и потом +N
      roles.slice(0, Math.max(0, fitCount - 1))
    : roles;
  const extraCount = hasOverflow
    ? roles.length - (fitCount - 1)
    : 0;

  return (
    <View style={styles.card}>
      <View style={styles.lpart}>
        <Image
          source={source}
          onError={onError}
          style={styles.avatar}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <View  style={styles.textCont}>
            <Text style={styles.title}>{Name}</Text>
            <Text style={styles.subtitle}>Возможные роли в команде</Text>
          </View>
          <View style={styles.chatIcon}>
            <IconChat size={24} color="#FFFFFF" />
          </View>
        </View>

        <View
          style={styles.rolesRow}
          onLayout={onContainerLayout}
        >
          {displayRoles.map((r, i) => (
            <View
              key={r + i}
              style={styles.roleBadge}
              onLayout={onBadgeLayout(i)}
            >
              <Text style={styles.roleText}>{r}</Text>
            </View>
          ))}

          {hasOverflow && (
            <View
              style={styles.roleBadge}
              onLayout={onBadgeLayout(roles.length)}
            >
              <Text style={styles.roleText}>+{extraCount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserCardSmall;
