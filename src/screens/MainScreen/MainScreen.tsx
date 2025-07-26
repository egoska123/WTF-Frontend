// src/screens/MainScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Keyboard,
  ScrollView,
  Text,
  ImageSourcePropType,
} from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import TeamCardSmall, { TeamCardSmallProps } from '../../components/TeamCardSmall/TeamCardSmall';
import { tabs } from '../../constants/Text/MainScreenText';
import TeamCardSmallMocks from '../../mocks/TeamCardSmallMocks';
import fallback from '../../../assets/images/fallback.png';
import styles from './MainScreen.styles';
import UserCardSmallMocks from '../../mocks/UserCardSmallMocks';
import UserCardSmall, { UserCardSmallProps } from '../../components/UserCardSmall/UserCardSmall';
import VacancyCardSmallMocks from '../../mocks/VacancyCardSmallMocks';
import VacancyCardSmall from '../../components/VacancyCardSmall/VacancyCardSmall';
import ProjectCardSmallMocks from '../../mocks/ProjectCardSmallMocks';
import ProjectCardSmall from '../../components/ProjectCardSmall/ProjectCardSmall';

export default function MainScreen() {
  const [searchInfo, setSearchInfo] = useState('');
  const [showFilt, setShowFilt] = useState(false);
  const [tab, setTab] = useState<'user'|'team'|'job'|'project'>('user');

  return (
    <View style={styles.container}>
      {/* Шапка с инпутом и табами */}
      <SearchInput
        value={searchInfo}
        onChangeText={setSearchInfo}
        hasFilters
        onFilterPress={() => setShowFilt(f => !f)}
      />
      <SegmentedControl
        options={tabs}
        value={tab}
        onChange={setTab}
      />

      {/* ==== ЧЕТЫРЕ НЕЗАВИСИМЫХ ScrollView ==== */}
      {/* В каждом scrollView включён onTouchStart dismiss, keyboardDismissMode */}
      {tab === 'team' && (
        <ScrollView
          contentContainerStyle={styles.cardsContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          onTouchStart={() => Keyboard.dismiss()} 
        >
          {TeamCardSmallMocks.map((props: Omit<TeamCardSmallProps, 'fallbackAvatar'>, idx: number) => (
            <View key={idx} >
              <TeamCardSmall
                {...props}
                fallbackAvatar={fallback as ImageSourcePropType}
              />
            </View>
          ))}
        </ScrollView>
      )}

      {tab === 'user' && (
        <ScrollView
          contentContainerStyle={styles.cardsContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          onTouchStart={() => Keyboard.dismiss()}
        >
          {UserCardSmallMocks.map((props: Omit<UserCardSmallProps, 'fallbackAvatar'>, idx: number) => (
            <View key={idx} >
              <UserCardSmall
                {...props}
                fallbackAvatar={fallback as ImageSourcePropType}
              />
            </View>
          ))}
        </ScrollView>
      )}

      {tab === 'job' && (
        <ScrollView
          contentContainerStyle={styles.cardsContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          onTouchStart={() => Keyboard.dismiss()}
        >
          {VacancyCardSmallMocks.map((props, idx) => (
            <View key={idx} >
              <VacancyCardSmall
                {...props}
                fallbackAvatar={fallback}
              />
            </View>
          ))}
        </ScrollView>
      )}

      {tab === 'project' && (
        <ScrollView
          contentContainerStyle={styles.cardsContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          onTouchStart={() => Keyboard.dismiss()}
        >
          {ProjectCardSmallMocks.map((props, idx) => (
            <ProjectCardSmall
              key={idx}
              {...props}
              fallbackAvatar={fallback as ImageSourcePropType}
            />
        ))}
        </ScrollView>
      )}
    </View>
  );
}
