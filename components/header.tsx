import React from 'react';
import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface PageHeaderProps {
  title: string;
  subPage: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subPage}) => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {subPage && (
        <Pressable onPress={onBack}>
          <Image
            tintColor={'#fff'}
            style={styles.backColor}
            source={require('../assets/images/leftArrow.png')}
          />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2171EC',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 35,
  },
  headerTitle: {
    color: '#fff',
  },
  backColor: {
    width: 20,
    height: 20,
    marginEnd: 15,
  },
});

export default PageHeader;
