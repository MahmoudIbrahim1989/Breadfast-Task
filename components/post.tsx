import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './types';

interface Post {
  id: number;
  user_id: string;
  avatar: string;
  title: string;
  body: string;
}

type PostListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PostDetails'
>;

const PostList: React.FC = () => {
  const navigation = useNavigation<PostListNavigationProp>();
  const [posts, setPosts] = useState<Post[]>([]);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://gorest.co.in/public/v2/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const renderPostItem = ({item}: {item: Post}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('PostDetails', {
            postId: item.id,
            myData: item,
          });
        }}>
        <View style={styles.postContainer}>
          <Image
            source={require('../assets/images/male.png')}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <Text style={styles.userName}>{item.user_id}</Text>
            <Text numberOfLines={1} style={styles.postTitle}>
              {item.title}
            </Text>
            <Text numberOfLines={2}>{item.body}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderPostItem}
      contentContainerStyle={{
        width: screenWidth,
        paddingStart: 20,
        paddingEnd: 20,
        marginTop: 20,
        paddingBottom: 100,
      }}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    marginBottom: 20,
    paddingBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postContent: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PostList;
