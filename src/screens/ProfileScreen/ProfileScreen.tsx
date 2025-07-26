import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './ProfileScreen.styles';

// замените на свой локальный путь к аватарке
const AVATAR = require('../../../assets/images/fallback.png');

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Верхний баннер */}
        <View style={styles.banner} />

        {/* Аватар */}
        <View style={styles.avatarWrapper}>
          <Image source={AVATAR} style={styles.avatar} />
        </View>

        {/* Имя и email */}
        <Text style={styles.name}>Иванов Иван</Text>
        <Text style={styles.email}>ivanov@example.com</Text>

        {/* Меню */}
        <View style={styles.menu}>
          <MenuItem
            icon="person-outline"
            label="Персональные данные"
            onPress={() => {}}
          />
          <MenuItem
            icon="group-outline"
            label="Мои команды"
            onPress={() => {}}
          />
          <MenuItem
            icon="support-agent"
            label="Тех. поддержка"
            onPress={() => {}}
          />
          <MenuItem
            icon="help-outline"
            label="Вопросы о WTF"
            onPress={() => {}}
          />
        </View>

        {/* Выход */}
        <TouchableOpacity style={styles.logout} onPress={() => {}}>
          <MaterialIcons name="logout" size={20} color="#E53935" />
          <Text style={styles.logoutText}>Выйти из аккаунта</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

interface MenuItemProps {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  label: string;
  onPress: () => void;
}
function MenuItem({ icon, label, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#282B33" />
      <Text style={styles.menuLabel}>{label}</Text>
      <MaterialIcons name="chevron-right" size={24} color="#767982" />
    </TouchableOpacity>
  );
}
