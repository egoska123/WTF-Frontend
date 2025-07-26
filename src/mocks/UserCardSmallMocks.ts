// src/mocks/UserCardSmallMocks.ts
import { ImageSourcePropType } from 'react-native';
import { UserCardSmallProps } from '../components/UserCardSmall/UserCardSmall';

// Здесь не указываем fallbackAvatar — его мы передаём при рендере
const UserCardSmallMocks: Omit<UserCardSmallProps, 'fallbackAvatar'>[] = [
  {
    avatarUri: 'https://i.pravatar.cc/150?img=10',
    Name: 'Дубко Максим',
    roles: ['UI/UX Дизайнер'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=12',
    Name: 'Ступин Игорь',
    roles: ['Back-end'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=5',
    Name: 'Кан Александра',
    roles: ['Project‑manager'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=20',
    Name: 'Зайцева Анастасия',
    roles: ['Аналитик', 'Front-end'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=30',
    Name: 'Рогов Иван',
    roles: ['Back-end', 'DevOps', 'Fullstack', 'UI/UX Дизайнер'],
  },
  {
    // симулируем невалидный URL — покажется ваш fallback
    avatarUri: 'https://example.com/broken.jpg',
    Name: 'Клочкова Софья',
    roles: ['Аналитик', 'Fullstack', 'Back-end', 'Project‑manager', 'QA'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=10',
    Name: 'Дубко Максим',
    roles: ['UI/UX Дизайнер'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=12',
    Name: 'Ступин Игорь',
    roles: ['Back-end'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=5',
    Name: 'Кан Александра',
    roles: ['Project‑manager'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=20',
    Name: 'Зайцева Анастасия',
    roles: ['Аналитик', 'Front-end'],
  },
  {
    avatarUri: 'https://i.pravatar.cc/150?img=30',
    Name: 'Рогов Иван',
    roles: ['Back-end', 'DevOps', 'Fullstack', 'UI/UX Дизайнер'],
  },
  {
    // симулируем невалидный URL — покажется ваш fallback
    avatarUri: 'https://example.com/broken.jpg',
    Name: 'Клочкова Софья',
    roles: ['Аналитик', 'Fullstack', 'Back-end', 'Project‑manager', 'QA'],
  },
];

export default UserCardSmallMocks;
