import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PontosDeColeta from './src/components/PontosDeColeta';

export default function App() {
  return (

<PontosDeColeta></PontosDeColeta>

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
