// src/components/ChatMini/ChatMini.styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    // вместо gap используем margin на детей
  },
  avatarWrapper: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#2275FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    flexShrink: 0,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#282B33',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
  subtitle: {
    marginTop: 4,
    color: '#767982',
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
  },
  unread: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  unreadText: {
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
  },
});
