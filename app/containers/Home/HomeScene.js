import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList} from 'react-native';

import color from '../../widget/color'
import screen from '../../common/screen'
import NavigationItem from '../../widget/NavigationItem'

import showShort from '../../common/ToastUtil'

import {Heading1, Heading2, Paragraph} from '../../widget/Text'

import  HomePage from './HomePage'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeAction from '../../actions/HomeDiscountAction'


class HomeScene extends Component {


    constructor(props){
        super(props)
    }


//设置头部标题栏(action bar)的相关属性

    static navigationOptions = ({navigation}) => ({

        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon}/>
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/Home/icon_navigationItem_message_white.png')}
                onPress={() => {
                    showShort.showLong('click  butom!', false);
                    console.log('NavigationItem===click==:');
                }}
            />
        ),
        headerLeft: (
            <NavigationItem
                title='福州'
                titleStyle={{color: 'white'}}
                onPress={() => {

                }}
            />
        ),
        headerStyle: {backgroundColor: color.theme}, //设置头部背景颜色
        // headerStyle: { backgroundColor: color.theme ,height:50}, //设置头部背景颜色
    })




    // _onPressItem = () => {
    //     console.log('_onPressItem=====:');
    //     const { navigate } = this.props.navigation;
    //     console.log('navigate=====:'+navigate);
    //     navigate('NewsDetail');
    //     // this.props.navigation.navigate('House');
    // };



    render() {

        // const { HomeState } = this.props.Home;
        // console.log('HomeState===hj==:' + HomeState);
        // console.log('HomeState===hj2==:' + this.props.Home.isLoading);

        // const { navigate } = this.props.navigation;
        // console.log('navigate===hj==:'+navigate);
        // this.props.navigation.navigate('NewsDetail');

        return (
            <HomePage {...this.props} />
        );

    }

}



/**
 * 告知HousingLoanContainer 对 state 中的各种状态干兴趣
 * 包括 HousingLoanPage.ClassDate
 * isLoading: true,
 isLoadMore: false,
 isRefreshing: false,
 isNoData: false, 中的各种状态
 *
 */
// export default connect((state) => {
//
//     const { HomeState } = state;
//     return {
//         HomeState
//     }
// })(HomeScene);


//  mapStateToProps 将需要的state的节点注入到与此视图数据相关的组件上
const mapStateToProps = (state) => {

    console.log('state=====:' + state);
    //const {HomeState}   =  state; // HomeState 中不能加{} 原因未知
     const  HomeState  =  state;
    console.log('HomeState===0==:' + HomeState);
    return {
        HomeState
    };
};

// mapDispatchToProps 将需要绑定的响应事件注入到组件上 可参考 http://blog.csdn.net/genius_yym/article/details/64130120
const mapDispatchToProps = (dispatch) => {
    // readActions 这个将需要绑定的响应事件注入到组件上 传给Main组件,这个组件能获取到请求的action
    const readActions = bindActionCreators(HomeAction, dispatch);
    return {
        readActions
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);

// 写法2
// export default connect(state => ({
//         Home: state.Home  // 此写法更明确我值只关心Homerender  中的home  state属性
//     }), mapDispatchToProps)(HomeScene);



// 写法一
// export default connect(
//     state => ({
//         Home: state.Home
//     }),
//     dispatch => bindActionCreators(HomeAction, dispatch)
// )(HomeScene);






// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    // recommendHeader: {
    //     height: 35,
    //     justifyContent: 'center',
    //     borderWidth: screen.onePixel,
    //     borderColor: color.border,
    //     paddingVertical: 8,
    //     paddingLeft: 20,
    //     backgroundColor: 'white'
    // },


    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});

//export  default HomeScene;