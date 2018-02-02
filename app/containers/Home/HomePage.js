/**
 * Created by jeker on 17-10-9.
 */

import React, {PropTypes,PureComponent,Component} from 'react';


import  * as HomeDiscountAction  from '../../actions/HomeDiscountAction.js'

import color from '../../widget/color'


import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager,
    RefreshControl,
    ScrollView,
    Navigator,
} from 'react-native';


let isLoadMore = false;
let isRefreshing = false;
let isLoading = true;
let page = 0;
let isNoData = false;

// const propTypes = {
//     readActions: PropTypes.object,
//     HomeState: PropTypes.object.isRequired
// };

class  HomePage extends  Component{

    constructor(props){
        super(props)
    }


    componentDidMount() {

        // console.log('page=====:' + 123);

      //  console.log('Home===kk==:' + this.props.Home.isLoading);

        // const { HomeState } = this.props;
        // console.log('HomeState=====:' + HomeState.Home.isLoading);

        const {HomeState}   = this.props;
        console.log('HomeState==2===:' + HomeState.Home.isLoading);

        // const { readActions } = this.props;
        // console.log('readActions=====:' + readActions);
        // readActions.homeDiscountAction(isNoData,isLoadMore,isRefreshing,isLoading,page);


        // dispatch(HomeDiscountAction.homeDiscountAction(isNoData,isLoadMore,isRefreshing,isLoading,page));

        InteractionManager.runAfterInteractions(() =>{
            this.requestData();
        })

    }

    requestData() {
      // const {dispatch} = this.props
      //   dispatch(HomeDiscountAction.homeDiscountAction(isNoData,isLoadMore,isRefreshing,isLoading,page))

        // this.requestDiscount() //拉取优惠数据
        // this.requestRecommend() // 拉取推荐数据
        const { readActions } = this.props;
        console.log('readActions=====:' + readActions);
        readActions.homeDiscountAction(isNoData,isLoadMore,isRefreshing,isLoading,page);

    }

    _onPressItem = () => {
        console.log('_onPressItem=====:');
        const { navigate } = this.props.navigation;
        console.log('navigate=====:'+navigate);
        // navigate('NewsDetail');
        //navigate('House');
        navigate('News');

      //  NewsScene
       // this.props.navigation.navigate('House');
    };



    render() {

        const { HomeState } = this.props;
        console.log('this.props=====:' + HomeState.Home.isLoading);

        return (
            <View style={styles.container}>

                <Text style={styles.note_txt}>
                    this is Homsecen for HomePage !
                </Text>
                <TouchableOpacity  onPress={this._onPressItem}>
                    <Text style={styles.note_txt}>
                        this is btn !
                    </Text>
                </TouchableOpacity>

            </View>

        );

    }
}




// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
});

//HomePage.propTypes = propTypes;

export  default HomePage;