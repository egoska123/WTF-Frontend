import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 78,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  calendarText: {
    color: '#282B33',       // var(--text-Primary, #282B33)
    textAlign: 'center',    // text-align: center
    fontFamily: 'Raleway',  // font-family: Raleway
    fontSize: 24,           // font-size: 24px
    fontWeight: '500',      // font-weight: 500
    lineHeight: 20, 
  },
  screen: {
    flex: 1,
    width: '100%',
  }
});
