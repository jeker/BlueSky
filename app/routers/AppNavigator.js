import React, {PureComponent}from 'react';
import  {StackNavigator, TabNavigator, TabBarBottom} from  'react-navigation';

import HomeScene from  '../containers/Home/HomeScene.js';
import NearbyScene from '../containers/Nearby/NearbyScene.js';
import OrderScene from '../containers/Order/OrderScene.js';
import MineScene from '../containers/Mine/MineScene.js';
import HouseScene from '../containers/News/HouseScene.js';
import NewsDetail from '../containers/News/NewsDetail.js';
import NewsScene from '../containers/News/NewsScene.js';


import color from '../widget/color'
import TabBarItem from  '../widget/TabBarItem'




const Tab = TabNavigator(
    {
        HomeScene: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/pfb_tabbar_homepage.png')}
                        selectedImage={require('../img/tabbar/pfb_tabbar_homepage_selected.png')}
                    />
                )
            }),

        },

        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/pfb_tabbar_merchant.png')}
                        selectedImage={require('../img/tabbar/pfb_tabbar_merchant_selected.png')}
                    />
                )
            }),
        },

        Order:{
            screen:OrderScene,
            navigationOptions:({ navigation }) =>({
                tabBarLabel:'订单',
                tabBarIcon:({focused , tintColor} ) =>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/pfb_tabbar_order.png')}
                        selectedImage={require('../img/tabbar/pfb_tabbar_order_selected.png')}
                    />
                )
            }),
        },

        Mine:{
            screen:MineScene,
            navigationOptions:({ navigation }) =>({
                tabBarLabel:'我的',
                tabBarIcon:({focused , tintColor} ) =>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/pfb_tabbar_mine.png')}
                        selectedImage={require('../img/tabbar/pfb_tabbar_mine_selected.png')}
                    />
                )
            }),
        }

    },

    {  // 设置第二个参数,导航条显示的位置等参数
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,// 切换页面时显示动画
        lazy: true,
        // animationEnabled: false, // 切换页面时不显示动画
        // tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        // swipeEnabled: false, // 禁止左右滑动
        // backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转

        // drawerWidth: 220, // 抽屉宽
        // drawerPosition: 'left', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件

        tabBarOptions: {
            activeTintColor: color.theme, //文字和图片选中颜色
            inactiveTintColor: '#979797', //文字和图片默认颜色
            style: {backgroundColor: '#ffffff'}, //tabBar的背景颜色
           // inactiveBackgroundColor: '#fff', // 未选中背景颜色
           //  activeBackgroundColor: '#f5f5f5', // 选中背景颜色
           //  initialRouteName: MinePage, // 默认页面组件
           //  showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
           //  indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            labelStyle: {
                fontSize: 12, // 设置TabBar文字大小
            },
        },
    }
);


const AppNavigator = StackNavigator(
    {
        Tab: {screen: Tab},
        House: { screen: HouseScene },
        News: { screen: NewsScene },
        NewsDetail: { screen: NewsDetail },
        // web: {screen: WebScreen},

    },
    {

        navigationOptions: {

            headerBackTitle: null,
            showIcon: true,
            headerTintColor: '#333333',

        },
    }
);


export {
    AppNavigator
};

//export default  AppNavigator;