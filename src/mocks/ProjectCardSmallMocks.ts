import { ProjectCardSmallProps } from "../components/ProjectCardSmall/ProjectCardSmall";

// Убираем из пропсов только fallbackAvatar, его мы подставим при рендере
const ProjectCardSmallMocks: Omit<ProjectCardSmallProps, 'fallbackAvatar'>[] = [
  {
    avatarUri: 'https://i.pravatar.cc/80?img=21',
    ProjectName: 'AI Research Lab',
    description: 'Хотите с нуля создать собственный стартап и довести его до реализации? Или у вас уже есть сформулированная идея, но вы не знаете, что делать дальше? Тогда вам необходимо принять участие в акселерационной программе КубГУ "БизнесКуб".',
    participants: 12,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=34',
    ProjectName: 'GreenEnergy',
    description: 'Разработка решений для возобновляемой энергетики.',
    participants: 8,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=56',
    ProjectName: 'SpaceXplore',
    description: 'Проект по моделированию полётов на Марс.',
    participants: 5,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=21',
    ProjectName: 'AI Research Lab',
    description: 'Исследовательский проект по нейронным сетям и машинному обучению.',
    participants: 12,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=34',
    ProjectName: 'GreenEnergy',
    description: 'Разработка решений для возобновляемой энергетики.',
    participants: 8,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=56',
    ProjectName: 'SpaceXplore',
    description: 'Проект по моделированию полётов на Марс.',
    participants: 5,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=21',
    ProjectName: 'AI Research Lab',
    description: 'Исследовательский проект по нейронным сетям и машинному обучению.',
    participants: 12,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=34',
    ProjectName: 'GreenEnergy',
    description: 'Разработка решений для возобновляемой энергетики.',
    participants: 8,
  },
  {
    avatarUri: 'https://i.pravatar.cc/80?img=56',
    ProjectName: 'SpaceXplore',
    description: 'Проект по моделированию полётов на Марс.',
    participants: 5,
  },
];

export default ProjectCardSmallMocks;
