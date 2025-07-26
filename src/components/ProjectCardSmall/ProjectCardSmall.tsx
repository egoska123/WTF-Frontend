// src/components/UserCardSmall/UserCardSmall.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import styles from './ProjectCardSmall.styles';
import useImageFallback from '../../hooks/useImageFallback';
import IconUser from '../../../assets/icons/IconUser';

export interface ProjectCardSmallProps {
  avatarUri?: string;
  fallbackAvatar?: ImageSourcePropType;
  ProjectName: string;
  description: string;
  participants: number,
}

const ProjectCardSmall: React.FC<ProjectCardSmallProps> = ({
  avatarUri,
  fallbackAvatar,
  ProjectName,
  description,
  participants,
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
                <Text style={styles.title}>{ProjectName}</Text>
            </View>
            <View style={styles.participants}>
                <Text style={styles.participantsNum}>{participants}</Text>
                <View style={styles.iconUser}>
                    <IconUser size={20} color="#FFF" />
                </View>
            </View>
        </View>
        <View style={styles.content}>
            <Text numberOfLines={3}  ellipsizeMode="tail" style={styles.subtitle}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectCardSmall;
