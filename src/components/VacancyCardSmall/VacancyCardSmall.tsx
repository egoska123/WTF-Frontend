// src/components/UserCardSmall/UserCardSmall.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import styles from './VacancyCardSmall.styles';
import useImageFallback from '../../hooks/useImageFallback';

export interface VacancyCardSmallProps {
  avatarUri?: string;
  fallbackAvatar?: ImageSourcePropType;
  VacancyName: string;
  salary: string;
  companyInfo: string;
  geoVacancy: string;
}

const GAP = 10; // px между бейджами

const VacancyCardSmall: React.FC<VacancyCardSmallProps> = ({
  avatarUri,
  fallbackAvatar,
  VacancyName,
  salary,
  companyInfo,
  geoVacancy
}) => {
  const { source, onError } = useImageFallback(avatarUri, fallbackAvatar);

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
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{VacancyName}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{salary}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{companyInfo}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subtitle}>{geoVacancy}</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default VacancyCardSmall;
