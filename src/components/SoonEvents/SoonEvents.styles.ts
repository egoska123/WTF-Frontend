// src/components/SoonEvents/SoonEvents.styles.ts
import { StyleSheet, Dimensions } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1, // занимает всё свободное пространство
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#282B33',
  },
  headerText: {
    color: '#282B33',        // var(--text-Primary, #282B33)
    textAlign: 'center',     // text-align: center
    fontFamily: 'Raleway',   // font‑family: Raleway
    fontSize: 20,            // font‑size: 20px
    fontStyle: 'normal',     // font‑style: normal
    fontWeight: '600',       // font‑weight: 600
    lineHeight: 14, 
    marginHorizontal: 17,
  },
  listContent: {
    paddingBottom: 24,
  },

  // Карточка события
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'column',
    gap: 2,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 9.7,              // размер внешнего круга
    height: 9.7,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
     marginRight: 10,
  },
  dotInner: {
    width: 4.1,               // половина внешнего
    height: 4.1,
    borderRadius: 4,
    backgroundColor: '#fff', // белый внутренний кружок
  },
  dateText: {
    flex: 1,
    color: '#B0B3BB',      // var(--text-Quarternary, #B0B3BB)
    fontFamily: 'Raleway', // font-family: Raleway
    fontSize: 12,          // font-size: 12px
    fontStyle: 'normal',   // font-style: normal
    fontWeight: '600',     // font-weight: 600
    lineHeight: 14,
  },
  menuBtn: {
    padding: 4,
  },

  title: {
    color: '#282B33',        // var(--text-Primary, #282B33)
    fontFamily: 'Raleway',   // font-family: Raleway
    fontSize: 16,            // font-size: 16px
    fontStyle: 'normal',     // font-style: normal
    fontWeight: '600',       // font-weight: 600
    lineHeight: 19,          // line-height: 19px (≈118.75% of 16px)
    letterSpacing: 1, 
  },
  time: {
    color: '#8F9BB3',       // var(--text-Quarternary, #8F9BB3)
    fontFamily: 'Raleway',  // font-family: Raleway
    fontSize: 12,           // font-size: 12px
    fontStyle: 'normal',    // font-style: normal
    fontWeight: '400',      // font-weight: 400
    lineHeight: 14,         // line-height: 14px (≈116.667% of 12px)
    letterSpacing: 0.75, 
  },
});
