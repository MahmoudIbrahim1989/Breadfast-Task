import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import PageHeader from '../components/header';
import axios from 'axios';
// Define the type of myData
type MyData = {
  // Define the structure of myData here
  id: number;

  user_id: string;
  avatar: string;

  title: string;
  body: string;
};

interface Comments {
  id: number;
  name: string;
  user_id: string;
  avatar: string;
  body: string;
}

const PostsDetails: React.FC = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const screenWidth = Dimensions.get('window').width;
  type ParamList = {
    PostDetails: {myData: MyData};
    // Define other screens and their respective params if needed
  };

  // Inside your component
  const route = useRoute<RouteProp<ParamList, 'PostDetails'>>();
  const {myData} = route.params || {};

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        'https://gorest.co.in/public/v2/comments',
      );
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const renderPostItem = ({item}: {item: Comments}) => {
    return (
      <Pressable>
        <View style={styles.commentsContainer}>
          <Image
            source={require('../assets/images/male.png')}
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <Text style={styles.userName}> {item.name}</Text>
            <Text numberOfLines={2}>{item.body}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={
        {
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: '#F1F5F9',
        }
      }>
      <StatusBar translucent backgroundColor="transparent" />

      <PageHeader subPage title="Post Details" />

      <FlatList
        ListHeaderComponent={
          <View style={styles.postContainer}>
            <Image
              source={require('../assets/images/male.png')}
              style={styles.avatar}
            />
            <View style={styles.postContent}>
              <Text style={styles.userName}>{myData.user_id}</Text>
              <Text style={styles.postTitle}>{myData.title}</Text>
              <Text>{myData.body}</Text>
            </View>
          </View>
        }
        data={comments}
        renderItem={renderPostItem}
        contentContainerStyle={{
          width: screenWidth,
          paddingStart: 20,
          paddingEnd: 20,
          marginTop: 20,
          paddingBottom: 100,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    padding: 10,

    borderRadius: 10,
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    marginBottom: 20,
    paddingBottom: 15,
  },
  commentsContainer: {
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

export default PostsDetails;
