// HomeScreen.tsx
import React from 'react';
import {View, StatusBar} from 'react-native';
import PostList from '../components/post';
import PageHeader from '../components/header';
const HomeScreen: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#F1F5F9',
      }}>
      <StatusBar barStyle={'light-content' }
 translucent backgroundColor="transparent"  />
      <PageHeader subPage={false} title="Posts" />
      <PostList />
    </View>
  );
};

export default HomeScreen;
