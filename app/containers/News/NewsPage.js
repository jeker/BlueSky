/**
 * Created by jeker on 17-10-9.
 */

import React, {PropTypes, PureComponent, Component} from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';



import color from '../../widget/color'
import  Loading from '../../widget/Loading'
import  ListViewFooter from '../../widget/ListViewFooter'
import screen from '../../common/screen'
import { getArticleList, getTypeName } from '../../common/ItemsUtil';

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
let page = 1;
let typeId = 0;
const pages = [];

class NewsPage extends Component {

    constructor(props) {
        super(props);

        this._renderRow = this.renderRow.bind(this);
        // this._renderFooter = this._renderFooter.bind(this);
        // this._onRefresh = this._onRefresh.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2,
            }),
            typeIds: [0,1,2,3],
            typeList: {}
        };
    }


    componentDidMount() {

        console.log('componentDidMount=====:');
      //  console.log('news===isLoading==:' + this.props.newReducer.isLoading);
      //   const NewState = this.props.newReducer;
      //   console.log('NewState=====:' + NewState.isLoading);
      //
      //
      //   const NewtypeState = this.props.newTypeReducer;
      //   console.log('NewtypeState=====:' + NewtypeState.isLoading);

        // const NewsAction = this.props;
        // console.log('NewsAction=====:' + NewsAction);
        //
        // const NewsTypeAction = this.props;
        // console.log('NewsTypeAction=====:' + NewsTypeAction);


        const {NewState}   = this.props; //大小写要严格一样和NewsScene中的97行
        console.log('HomeState==2===:' + NewState.newReducer.isLoading);

        //const {NewState}   = this.props;
        console.log('HomeState==3===:' + NewState.newTypeReducer.isLoading);
        //
        InteractionManager.runAfterInteractions(() => {
            this.requestData();
        })

    }

    requestData() {

        const typeIds =this.state.typeIds;
        console.log('typeIds=====:' + typeIds);

        const { newsAction } = this.props;
        console.log('newsAction=====:' + newsAction);
        newsAction.newsAction(isRefreshing, isLoading, typeId, isLoadMore, page);
       //  typeIds.forEach((typeId) => {
       //      //readActions.requestArticleList(false, true, typeId);
       //      newsAction.newsAction(isRefreshing, isLoading, typeId, isLoadMore, page);
       //      pages.push(1);
       //  });


        const { newsTypeAction } = this.props;
        console.log('newsTypeAction=====:' + newsTypeAction);
        newsTypeAction.newsTypeAction(isLoading);

        const {NewState}   = this.props;
        let typeList = NewState.newTypeReducer.typeList;
        console.log('typeList====:' + typeList);
        this.setState({
            typeList
        })

    }


    render() {

        // const NewState = this.props.newReducer;
        // console.log('NewState=render====:' + NewState.isLoading);
        // let classList = NewState.ClassDate;
        // console.log('NewState=ClassDate====:' + NewState.ClassDate.toString());

        const {NewState}   = this.props;
        let classList = NewState.newReducer.ClassDate;
        console.log('classList==2hjhj===:' + classList);


        let titles = ['享美食', '住酒店', '爱玩乐', '全部']

        const content =this.state.typeIds.map(
            (typeId,i) => {
                console.log('typeId====---hj--->:' + typeId);
                //console.log('typeId====---hj2--->:' + NewState.newReducer.ClassDate);
                const typeView =(
                    <View key={typeId} tabLabel={titles[i]} style={styles.base}>
                        {

                        this.renderContent(this.state.dataSource.cloneWithRows(getArticleList(NewState.newReducer.ClassDate[typeId])), typeId)
                        }
                    </View>
                    //<Text   key={i}  tabLabel={titles[i]}  KKK/>
                );
                return typeView;
         }

        );



        return (
            <ScrollableTabView  // ScrollableTabView 的使用参考 http://www.jianshu.com/p/b7788c3d106e
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
            >
                {content}

            </ScrollableTabView>

        );

    }


    renderContent = (dataSource, typeId) => {
        const {NewState}   = this.props;
        if (NewState.newReducer.isLoading) {
            return <Loading />;
        }
        // const isEmpty =
        //     read.articleList[typeId] === undefined ||
        //     read.articleList[typeId].length === 0;
        // if (isEmpty) {
        //     return (
        //         <EmptyView read={read} tyepId={typeId} onRefresh={this.onRefresh} />
        //     );
        // }
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this._renderRow}
                initialListSize={25}
                enableEmptySections={true}
                // onScroll={this._onScroll()}
                // onEndReached={this._onEndReach.bind(this)}
                // onEndReachedThreshold={25}
                // renderFooter={this._renderFooter.bind(this)}
                style={{height: screen.height - 40 - 64}}
                // refreshControl={
                //     <RefreshControl
                //         refreshing={HouseState.isRefreshing}
                //         onRefresh={this._onRefresh.bind(this)}
                //         title="正在加载中..."
                //         color="#ccc"
                //     />
                //
                // }

            />
        );
    };

    renderRow(article) {
        return (
            <View style={styles.container}>
                <Text style={styles.container2}  numberOfLines={2}>{article.title}</Text>

            </View>
        );
    }

    _onScroll() {
        if (!isLoadMore) isLoadMore = true;
    }

// 上拉刷新
    _onEndReach() {
        InteractionManager.runAfterInteractions(
            () => {
                console.log('_onEndReach=====:上拉刷新函数执行了');
                const NewsAction = this.props;
                isLoadMore = true;
                isLoading = false;
                isRefreshing = false;
                page++;
                NewsAction.newsAction(isRefreshing, isLoading, typeId, isLoadMore, page);
            }
        )
    }

    _onRefresh() {
        //if (isLoadMore) {
        console.log('_onRefresh=====:下拉刷新函数执行了');
        const NewsAction = this.props;
        isLoadMore = false;
        isRefreshing = true;
        isLoading = false;
        page = 1;
        NewsAction.newsAction(isRefreshing, isLoading, typeId, isLoadMore, page);
        //}

    }

    //listView  底部
    _renderFooter() {
        const NewState = this.props.newReducer;
        return <ListViewFooter
            title={(NewState.isNoData) ? '没有更多数据了' : '正在加载更多...'}
            type={(NewState.isNoData) ? 'NoData' : 'HasData'}
        />

    }
}


// define your styles
const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    container2: {
        flex: 1,
        backgroundColor: color.theme,
        fontSize: 14,
        color: 'white'
    },
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});

//HomePage.propTypes = propTypes;

export  default NewsPage;