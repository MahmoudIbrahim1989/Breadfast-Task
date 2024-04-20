// SplashScreen.tsx
import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar} from 'react-native';

const SplashScreenComponent: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={styles.imageContainer}
        source={require('../assets/images/bgSplash.png')}>
        <View style={styles.content}>
          <>
            <Text style={styles.mainTitle}>Welcome</Text>
          </>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    color: '#fff',
  },
});

export default SplashScreenComponent;
