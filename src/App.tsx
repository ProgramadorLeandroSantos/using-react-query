import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { List,Bottom } from './components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <List />
        <Bottom/>
      </SafeAreaView>
  );
}
export default App;
