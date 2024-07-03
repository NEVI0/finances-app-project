import 'react-native-gesture-handler';

import { useEffect } from 'react';
import { Text, View, LogBox  } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Button, Input } from './src/components';
import { theme } from './src/theme';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{height: 1200, gap: 64, paddingTop: 64, paddingHorizontal: 32, backgroundColor: theme.colors.container.main}}>
      <Text>fdfdsfsd</Text>

      <Input
        label="E-mail"
        placeholder="exemplo@gmail.com"
        icon="mail"
        // value="E-mail"
        // onChangeText="E-mail"
      />

      <Input
        label="Senha"
        icon="lock"
        type={{}}
        // value="E-mail"
        // onChangeText="E-mail"
      />

      <Button text={'Acessar minha conta'} icon={'log-in'} onPress={() => console.log('dfdfde')}/>
    </View>
  );
}

export default App;