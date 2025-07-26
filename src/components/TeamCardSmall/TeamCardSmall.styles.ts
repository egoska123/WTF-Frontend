// src/components/TeamCardSmall/TeamCardSmall.styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    alignItems: 'flex-start',
    gap: 8,                       // RN 0.71+ поддерживает gap
    borderRadius: 16,
    backgroundColor: '#4285F4',
  },
  lpart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  chatIcon: {
    display: 'flex',
    padding: 6,
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconUser: {
    display: "flex",
    width: 20,
    height: 20,
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#282B33',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  subtitle: {
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
  },
  rolesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 10,
    marginTop: 4,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  roleText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
  members: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  countText: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
});
