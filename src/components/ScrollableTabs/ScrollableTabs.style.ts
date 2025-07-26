// src/components/ScrollableTabs/ScrollableTabs.styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  tab: {
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#4285F4',
    shadowColor: '#4285F4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2, // для Android
  },
  label: {
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
  labelActive: {
    color: '#FFFFFF',
  },
  labelInactive: {
    color: '#999EA4',
  },
});
