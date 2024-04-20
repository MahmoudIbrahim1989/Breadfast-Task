// App.tsx
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreenComponent from './screens/splashScreen';
import HomeScreen from './screens/homeScreen';
import PostsDetails from './screens/postsDetailsScreen';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000);
  }, []);

  return isSplashVisible ? (
    <SplashScreenComponent />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PostDetails" component={PostsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
