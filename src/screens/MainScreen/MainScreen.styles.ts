import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 52,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 10,
    display: 'flex',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
  },
  link: {
    fontSize: 16,
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  cardsContent: {
    display: 'flex',
    gap: 10,
    paddingBottom: 10,
  },
  
});
