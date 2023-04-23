import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { List, Bottom } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const queryClient = new QueryClient();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <List />
        <Bottom />
      </SafeAreaView>
    </QueryClientProvider>

  );
}
export default App;
