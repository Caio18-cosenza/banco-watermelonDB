import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style='light' translucent backgroundColor='transparent' />
      <Home />
    </>
  );
}
