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
    backgroundColor: '#F2F1F0',
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
    backgroundColor: '#4285F4',
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
    backgroundColor: '#4285F4',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#282B33',
  },
  textCont: {
    flexDirection: 'column',
    gap: 6,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
   title: {
    color: '#282B33',            // var(--text-Primary, #282B33)
    fontFamily: 'Raleway',       // font‑family: Raleway
    fontSize: 16,                // font-size: 16px
    fontWeight: '600',           // font-weight: 600
    lineHeight: 20,              // line-height: 125% ≈ 20px
    letterSpacing: -0.408,       // letter-spacing: -0.408px
  },

  subtitle: {
    color: '#767982',            // var(--text-Secondary, #767982)
    fontFamily: 'Raleway',       // font‑family: Raleway
    fontSize: 14,                // font-size: 14px
    fontWeight: '500',           // font-weight: 500
    lineHeight: 14,              // line-height: 100% = 14px
    letterSpacing: -0.408,       // letter-spacing: -0.408px
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
    backgroundColor: '#FFF',
  },
  roleText: {
    color: '#282B33',
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
  participants: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  participantsNum: {
    color: '#282B33',           // var(--text-Primary, #282B33)
    fontFamily: 'Raleway',      // font‑family: Raleway
    fontSize: 20,               // font‑size: 20px
    fontWeight: '600',          // font‑weight: 600
    lineHeight: 20,             // line‑height: 100% от fontSize = 20px
    letterSpacing: -0.408, 
  },
});
