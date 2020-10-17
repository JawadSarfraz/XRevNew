import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {HomeScreen} from './controller/home';
import {RecycleTestComponent} from './controller/recyclerView';
import {SettingsScreen} from './controller/test';
import {LoginView} from './controller/login';
import {SignUp} from './controller/signup';
import {Swipe} from './controller/swipe';
import {CommentLoad} from './controller/commentLoad';
import {SliderImp} from './controller/slider';
import {StackNav} from './controller/stackNavigation';
import {postSignup} from './controller/postSignup';
import {UploadPicture} from './controller/uploadPicture';
import {CameraDemo} from './controller/cameraDemo';
import {AmazonDemo} from './controller/amazonDemo';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    CreatePost: postSignup,
    ListShow: RecycleTestComponent,
    PostUser: SettingsScreen,
    Login: LoginView,
    SignUp: SignUp,
    Swiper: Swipe,
    Comment: CommentLoad,
    Slider: SliderImp,
    Pict: UploadPicture,
    StackNavigation: StackNav,
    C: CameraDemo,
    A: AmazonDemo,
  },
  {
    initialRouteName: 'CreatePost',
  },
);

export default createAppContainer(TabNavigator);
