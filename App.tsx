import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter_18pt-Regular.ttf'),
    'Raleway': require('./assets/fonts/Raleway-Regular.ttf')
  });

  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
