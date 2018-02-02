import React, {PureComponent,Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ListView,
    Image,
    StatusBar,
    FlatList,
    TextInput
} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import color from '../../widget/color'
import screen from '../../common/screen'
import NavigationItem from '../../widget/NavigationItem'
import {Heading1, Heading2, Paragraph} from '../../widget/Text'
import NewsPage  from  './NewsPage.js'
import * as NewsAction from '../../actions/NewsAction'

import * as NewsTypeAction from '../../actions/NewsTypeAction'

/**
 * new  测试页面
 */

class NewsScene extends Component {

//设置头部标题栏(action bar)的相关属性
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <TouchableOpacity style={styles.searchBar}>

                <TextInput
                    ref={(ref) => {
                        this.textInput = ref;
                    }}
                    style={styles.textInput}
                    placeholder="找附近的吃喝玩乐"
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    numberOfLines={30}
                    // multiline
                    // autoFocus
                    // onChangeText={(text) => {
                    //     feedbackText = text;
                    // }}
                />
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon}/>

            </TouchableOpacity>
        ),

        headerLeft: (
            <NavigationItem
                icon={require('../../img/Public/icon_food_merchant_address.png')}
                iconStyle={{height: 16, width: 13,margin:5}}
                title='房贷 测试 '
                titleStyle={{color: '#333333',margin:5}}
                onPress={() => {

                }}
            />
        ),


        headerStyle: {backgroundColor: color.background},
    })

    render() {
        return (
            <NewsPage {...this.props} />
        );
    }

}



// 写法一
// export default connect(
//     state => ({
//         newReducer: state.newReducer,
//         newTypeReducer: state.newTypeReducer
//     }),
//     dispatch => bindActionCreators(NewsAction,NewsTypeAction, dispatch),
//    // dispatch => bindActionCreators(NewsTypeAction, dispatch)
// )(NewsScene);


const mapStateToProps = (state) => {

    const  NewState  =  state;
    console.log('newState===0==:' + NewState);
    return {
        NewState
    };
};

// mapDispatchToProps 将需要绑定的响应事件注入到组件上 可参考 http://blog.csdn.net/genius_yym/article/details/64130120
const mapDispatchToProps = (dispatch) => {
    // readActions 这个将需要绑定的响应事件注入到组件上 传给Main组件,这个组件能获取到请求的action
    const newsAction = bindActionCreators(NewsAction, dispatch);
    const newsTypeAction = bindActionCreators(NewsTypeAction, dispatch);
    return {
        newsAction,
        newsTypeAction,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScene);

const styles = StyleSheet.create(
    {


        searchBar: {
            width: screen.width * 0.65,
            height: 35,
            borderRadius: 19,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor: color.border,
            alignSelf: 'flex-end',
            marginRight: 20,

        },

        textInput: {
            flex:1,
            fontSize: 12,
            textAlign: 'center'

        },


        searchIcon: {
            width: 20,
            height: 20,
            margin: 5,
        },


        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },

        note_txt: {
            fontSize: 24,
            textAlign: 'center'
        },

    }
);

