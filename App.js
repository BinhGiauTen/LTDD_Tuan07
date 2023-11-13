import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenRegister from './views/ScreenRegister';
import ScreenLogin from './views/ScreenLogin';

export default function App() {
  return (
    // <ScreenRegister/>
    <ScreenLogin/>
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
