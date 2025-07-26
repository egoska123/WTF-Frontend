import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    marginTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  navBtn: {
    padding: 6,
  },
  iconChevron: {
    width: 32,
    height: 32,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#282B33',
  },
  navText: {
    fontSize: 18,
    color: '#282B33',
  },
  textCont: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  headerTitle: {
    color: '#282B33',      // var(--text-Primary, #282B33)
    fontFamily: 'Raleway', // font‑family: Raleway
    fontSize: 20,          // font‑size: 20px
    fontStyle: 'normal',   // font‑style: normal
    fontWeight: '500',     // font‑weight: 500
    lineHeight: 16, 
  },
  headerYear: {
    color: '#767982',      // var(--text-Secondary, #767982)
    fontFamily: 'Raleway', // font‑family: Raleway
    fontSize: 12,          // font‑size: 12px
    fontStyle: 'normal',   // font‑style: normal
    fontWeight: '500',     // font‑weight: 500
    lineHeight: 16,  
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    // marginHorizontal: 12,
    marginBottom: 21,
  },
  weekDay: {
    width: '7.68%',
    textAlign: 'center',
    color: '#767982',         // var(--text-Secondary, #767982)
    fontFamily: 'Raleway',    // font-family: Raleway
    fontSize: 13,             // font-size: 13px
    fontStyle: 'normal',      // font-style: normal (по умолчанию)
    fontWeight: '500',        // font-weight: 500
    lineHeight: 16,  
  },
  sliderMask: {
    overflow: 'hidden',
  },
  weekRow: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
  },
  dayCell: {
    width: '7.68%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  dayText: {
    color: '#282B33',      // var(--text-Primary, #282B33)
    textAlign: 'center',   // text-align: center
    fontFamily: 'Raleway', // font-family: Raleway
    fontSize: 15,          // font-size: 15px
    fontStyle: 'normal',   // font-style: normal
    fontWeight: '700',     // font-weight: 700
    lineHeight: 20, 
  },
  otherDayText: {
    color: '#999EA4',      // var(--text-Tertiary, #999EA4)
    textAlign: 'center',   // text-align: center
    fontFamily: 'Raleway', // font-family: Raleway
    fontSize: 15,          // font-size: 15px
    fontStyle: 'normal',   // font-style: normal (по умолчанию)
    fontWeight: '700',     // font-weight: 700
    lineHeight: 20, 
  },
});
