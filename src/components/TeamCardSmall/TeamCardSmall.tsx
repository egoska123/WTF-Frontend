// src/components/TeamCardSmall/TeamCardSmall.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import styles from './TeamCardSmall.styles';
import useImageFallback from '../../hooks/useImageFallback';
import IconUser from '../../../assets/icons/IconUser';
import IconChat from '../../../assets/icons/IconChat';

export interface TeamCardSmallProps {
  avatarUri?: string;
  fallbackAvatar?: ImageSourcePropType;
  teamName: string;
  subtitle: string;
  roles: string[];
  memberCount: number;
}

const TeamCardSmall: React.FC<TeamCardSmallProps> = ({
  avatarUri,
  fallbackAvatar,
  teamName,
  subtitle,
  roles,
  memberCount,
}) => {
  const { source, onError } = useImageFallback(avatarUri, fallbackAvatar);

  const [rolesWidth, setRolesWidth] = useState(0);
  const GAP = 10; // расстояние между бейджами

  // массив ширин: для каждой роли + для "+N"
  const [badgeWidths, setBadgeWidths] = useState<number[]>(
    Array(roles.length + 1).fill(0)
  );
  const [visibleCount, setVisibleCount] = useState(roles.length);

  // считаем, сколько бейджей влезет в 2 строки
  useEffect(() => {
    if (rolesWidth === 0) return;
    // ждём, пока все реальные роли и "+N" измерятся
    if (badgeWidths.slice(0, roles.length).some(w => w === 0)) return;

    let rows = 1;
    let acc = 0;
    let count = 0;

    // пробегаем реальные роли
    for (let i = 0; i < roles.length; i++) {
      const w = badgeWidths[i] + GAP;
      if (acc + w > rolesWidth) {
        if (rows === 1) {
          rows = 2;
          acc = w;
        } else {
          break;
        }
      } else {
        acc += w;
      }
      count++;
    }

    // попробуем вставить "+N"
    const extra = roles.length - count;
    if (extra > 0) {
      const plusWidth = badgeWidths[roles.length] + GAP;
      if (acc + plusWidth > rolesWidth && rows === 2) {
        // не помещается, не добавляем "+N"
      } else {
        // влезает
        count++;
      }
    }

    setVisibleCount(count);
  }, [rolesWidth, badgeWidths, roles.length]);

  const onRolesLayout = (e: LayoutChangeEvent) => {
    setRolesWidth(e.nativeEvent.layout.width);
  };

  const onBadgeLayout = (idx: number) => (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setBadgeWidths(ws => {
      if (ws[idx] === w) return ws;
      const next = [...ws];
      next[idx] = w;
      return next;
    });
  };

  const extraCount = roles.length - visibleCount + (roles.length === visibleCount ? 0 : 1);

  return (
    <View style={styles.card}>
      <View style={styles.lpart}>
        <Image
          source={source}
          onError={onError}
          style={styles.avatar}
        />
        <View style={styles.members}>
          <Text style={styles.countText}>{memberCount}</Text>
          <View style={styles.iconUser}>
            <IconUser size={20} color="#282B33" />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <View>
            <Text style={styles.title}>{teamName}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.chatIcon}>
            <IconChat size={24} color="#282B33" />
          </View>
        </View>

        <View
          style={styles.rolesRow}
          onLayout={onRolesLayout}
        >
          {roles.slice(0, visibleCount - (extraCount > 0 ? 1 : 0)).map((r, i) => (
            <View
              key={r + i}
              style={styles.roleBadge}
              onLayout={onBadgeLayout(i)}
            >
              <Text style={styles.roleText}>{r}</Text>
            </View>
          ))}
          {extraCount > 0 && (
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

export default TeamCardSmall;
