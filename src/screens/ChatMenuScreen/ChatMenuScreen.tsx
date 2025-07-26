// src/screens/ChatMenuScreen.tsx
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';
import ScrollableTabs from '../../components/ScrollableTabs/ScrollableTabs';
import ChatMini from '../../components/ChatMini/ChatMini';
import fallback from '../../../assets/images/fallback.png';

import { chatTabs } from '../../constants/Text/ChatMenuText';
import ChatMiniMocks from '../../mocks/ChatMiniMocks';
import TeamChatMiniMocks from '../../mocks/TeamChatMiniMocks';
import UserChatMiniMocks from '../../mocks/UserChatMiniMocks';
import EmployerChatMiniMocks from '../../mocks/EmployerChatMiniMocks';

import styles from './ChatMenuScreen.styles';

type TabValue = 'all' | 'teams' | 'users' | 'jobs';

export default function ChatMenuScreen() {
  const [searchInfo, setSearchInfo] = useState('');
  const [active, setActive] = useState<TabValue>('all');

  // Выбираем набор моков в зависимости от активной вкладки
  const dataMap: Record<TabValue, typeof ChatMiniMocks> = {
    all:   ChatMiniMocks,
    teams: TeamChatMiniMocks,
    users: UserChatMiniMocks,
    jobs:  EmployerChatMiniMocks,
  };
  const items = dataMap[active];

  return (
    <View style={styles.container}>
      {/* Поисковая строка */}
      <SearchInput
        value={searchInfo}
        onChangeText={setSearchInfo}
        fallbackAvatar={fallback}  // если вы используете fallback внутри компонента
      />

      {/* Скроллируемые табы */}
      <View style={styles.scrollableTabs}>
        <ScrollableTabs
          options={chatTabs}
          activeValue={active}
          onChange={(v) => setActive(v as TabValue)}
        />
      </View>

      {/* Список чатов */}
      <ScrollView contentContainerStyle={styles.scrollview}>
        {items.map((props, idx) => (
          <TouchableOpacity key={idx} activeOpacity={0.7}>
            <ChatMini
              {...props}
              fallbackAvatar={fallback}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
