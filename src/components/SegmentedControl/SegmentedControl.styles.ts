import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    // можно задать свои отступы по бокам
    paddingHorizontal: 4,
  },
  item: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#767982', // var(--text-Secondary)
  },
  textActive: {
    color: '#1A1918', // var(--Core-black)
  },
  baseLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#D9D9D9',
    borderRadius: 1,
  },
  slider: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#282B33', // var(--text-Primary)
    borderRadius: 2,
  },
});
