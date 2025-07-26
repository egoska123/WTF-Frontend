import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  banner: {
    width: '100%',
    height: width * 0.3,        // примерно 30% от ширины экрана
    backgroundColor: '#4285F4', // или ваш градиент
  },
  avatarWrapper: {
    marginTop: -40,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#FFF',
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 128,
    height: 128,
  },
  name: {
    marginTop: 12,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.408,
  },
  email: {
    marginTop: 4,
    color: '#494949',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: -0.408,
  },
  menu: {
    marginTop: 24,
    width: '90%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F2F1F0',
    marginBottom: 12,
  },
  menuLabel: {
    flex: 1,
    marginLeft: 12,
    color: '#282B33',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.408,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  logoutText: {
    marginLeft: 8,
    color: '#E53935',
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.408,
  },
});
