import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {CommentLoad} from '../../controller/commentLoad';
import {SliderImp} from '../../controller/slider';

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

/***
 * To test out just copy this component and render in you root component
 */
export class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);
    const testarr = [];
    for (i = 0; i < 10; i++) {
      testarr.push({
        type: 'NORMAL',
        item: {
          name: 'JOKERRRRR....',
          joker:
            'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
          post:
            'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
          like:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHxOe2W29BSgYLUIZ6-b7LQ-ERGmOivpXHju7Px3C0cx-ya_9ww',
          comment:
            'https://imageog.flaticon.com/icons/png/512/25/25663.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
          testArr: [
            'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
            'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
            'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
            'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
            'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
            'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
            'https://images.news18.com/ibnlive/uploads/2019/01/heath-ledger-joker.jpg',
            'https://www.indiewire.com/wp-content/uploads/2017/07/batman.jpg',
          ],
        },
      });
    }
    let {width} = Dimensions.get('window');

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the height and width for that type on given object
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      index => {
        return ViewTypes.FULL;
      },
      (type, dim) => {
        switch (type) {
          case 'NORMAL':
            dim.width = width;
            dim.height = 350;
          default:
            dim.width = width;
            dim.height = 350;
        }
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
    this.state = {
      dataProvider: dataProvider.cloneWithRows(testarr),
      flag: 0,
    };
  }
  _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      name: 'Joker' + i;
    }
    return arr;
  }
  func() {
    Alert.alert('NO');
  }
  //Given type and data return the view component
  _rowRenderer = (type, data) => {
    const {name, joker, description, post, like, comment, testArr} = data.item;
    //You can return any view here, CellContainer has no special significance
    return (
      <View>
        <View style={styles.outerContainer}>
          <Image
            style={[styles.circle, styles.outerContainerView]}
            source={{uri: joker}}
          />
          <Text style={styles.outerContainerText}>{name}</Text>
        </View>
        <View style={[styles.sliderStyle, styles.post]}>
          <SliderImp arr={testArr}></SliderImp>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity activeOpacity={0.8}>
            <Icon name="dislike" size={25} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Comment')}>
            <Icon name="comment" size={25} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.border} />
      </View>
    );
  };

  render() {
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}
const styles = {
  icon: {flexDirection: 'row', marginTop: 10},
  setWidth: {backgroundColor: 'red', width: 70, height: 70},
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00a1f1',
  },
  containerGridLeft: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffbb00',
  },
  containerGridRight: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7cbb00',
  },
  circle: {
    width: 35,
    height: 30,
    borderRadius: 35 / 2, // also 100 works.FUCKKK.WHY?
  },
  outerContainerText: {
    paddingLeft: 8,
    flex: 10,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  cotainer: {height: 450, flex: 1},
  outerContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
  outerContainerView: {
    flex: 1,
    margin: 8,
  },
  post: {width: this.width, height: 255},
  beforeButton: {width: 120},
  afterButton: {width: 120, paddingLeft: 10},

  likeComment: {
    flex: 1,
    flexDirection: 'row',
    textAlignVertical: 'top',
    padding: 15,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    textAlignVertical: 'top',
    paddingTop: 9,
    justifyContent: 'center',
    opacity: 0.6,
  },
  likeImg: {width: 25, height: 25, paddingLeft: 8},
  commentImg: {width: 25, height: 25, paddingLeft: 18},
  line: {backgroundColor: 'black', height: 10, paddingTop: 20, opacity: 0.6},
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    marginTop: 8,
    marginBottom: 5,
    shadowColor: 'red',
    shadowOpacity: 1.0,
  },
  sliderStyle: {height: 15, paddingBottom: 10},
};
