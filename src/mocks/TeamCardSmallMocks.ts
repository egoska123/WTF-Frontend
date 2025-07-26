import { TeamCardSmallProps } from "../components/TeamCardSmall/TeamCardSmall";

const TeamCardSmallMocks: TeamCardSmallProps[] = [
  {
    avatarUri: 'https://i.pravatar.cc/80?img=12',
    teamName: 'Red Dragons',
    subtitle: 'Ищем Front‑end',
    roles: ['Front‑end', 'Back‑end', 'DevOps', 'QA', 'UI/UX'],
    memberCount: 5,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=25',
    teamName: 'Green Pythons',
    subtitle: 'Нужны Data‑аналитики',
    roles: ['Data Analyst', 'ML Engineer'],
    memberCount: 2,
  },
  {
    avatarUri: undefined, // чтобы продемонстрировать fallback
    teamName: 'Blue Whales',
    subtitle: 'Собираем Fullstack команду',
    roles: ['Fullstack', 'Frontend', 'Backend', 'DevOps', 'PM', 'Tester', 'Support'],
    memberCount: 7,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=48',
    teamName: 'Yellow Tigers',
    subtitle: 'Проектный менеджмент',
    roles: ['PM', 'Scrum Master', 'BA'],
    memberCount: 3,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=12',
    teamName: 'Red Dragons',
    subtitle: 'Ищем Front‑end',
    roles: ['Front‑end', 'Back‑end', 'DevOps', 'QA', 'UI/UX'],
    memberCount: 5,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=25',
    teamName: 'Green Pythons',
    subtitle: 'Нужны Data‑аналитики',
    roles: ['Data Analyst', 'ML Engineer'],
    memberCount: 2,
  },
  {
    avatarUri: undefined, // чтобы продемонстрировать fallback
    teamName: 'Blue Whales',
    subtitle: 'Собираем Fullstack команду',
    roles: ['Fullstack', 'Frontend', 'Backend', 'DevOps', 'PM', 'Tester', 'Support'],
    memberCount: 7,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=48',
    teamName: 'Yellow Tigers',
    subtitle: 'Проектный менеджмент',
    roles: ['PM', 'Scrum Master', 'BA'],
    memberCount: 3,
  },
];

export default TeamCardSmallMocks;
