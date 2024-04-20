import {MyData} from './models';
export type RootStackParamList = {
  Home: undefined;
  PostDetails: {postId: number; myData: MyData}; // Remove ? to make it mandatory
};
