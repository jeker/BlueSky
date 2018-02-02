/**
 * Created by jeker on 17-10-9.
 */

import React, {PropTypes, PureComponent, Component} from 'react';


import color from '../../widget/color'

import  Loading from '../../widget/Loading'
import  ListViewFooter from '../../widget/ListViewFooter'
import screen from '../../common/screen'

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


class NearbyPage extends Component {

    constructor(props) {
        super(props);

        this._renderRow = this.renderRow.bind(this);
        // this._renderFooter = this._renderFooter.bind(this);
        // this._onRefresh = this._onRefresh.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2,
            }),
        };
    }


    componentDidMount() {

        console.log('page=====:' + 2222);
        console.log('House===kk==:' + this.props.houseReducer.isLoading);

        const HouseState = this.props.houseReducer;
        console.log('HouseState=====:' + HouseState.isLoading);


        InteractionManager.runAfterInteractions(() => {
            this.requestData();
        })

    }

    requestData() {
        const NewsHouseAction = this.props;
        console.log('NewsHouseAction=====:' + NewsHouseAction);
        NewsHouseAction.newsHouseAction(isNoData, isLoadMore, isRefreshing, isLoading, page);
    }


    render() {

        const HouseState = this.props.houseReducer;
        console.log('HouseState=render====:' + HouseState.isLoading);
        let classList = HouseState.ClassDate;
        console.log('HouseState=ClassDate====:' + HouseState.ClassDate);


        return (
            <View style={styles.container}>

                {HouseState.isLoading ? <Loading /> :

                    <ListView
                        dataSource={ this.state.dataSource.cloneWithRows(classList) }
                        renderRow={this._renderRow}
                        initialListSize={25}
                        enableEmptySections={true}
                        // onScroll={this._onScroll()}
                        onEndReached={this._onEndReach.bind(this)}
                        onEndReachedThreshold={25}
                        renderFooter={this._renderFooter.bind(this)}
                        style={{height: screen.height - 40 - 64}}
                        refreshControl={
                            <RefreshControl
                                refreshing={HouseState.isRefreshing}
                                onRefresh={this._onRefresh.bind(this)}
                                title="正在加载中..."
                                color="#ccc"
                            />

                        }

                    />

                }

            </View>

        );

    }

    renderRow(rowDate, rowID) {


        return (
            <View style={styles.container}>
                <Text numberOfLines={2}>{rowDate.title}</Text>
                <Text style={styles.note_txt}>
                    this is Homsecen for HomePage !
                </Text>
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
                const NewsHouseAction = this.props;
                isLoadMore = true;
                isLoading = false;
                isRefreshing = false;
                page++;
                NewsHouseAction.newsHouseAction(isNoData, isLoadMore, isRefreshing, isLoading, page);
            }
        )
    }

    _onRefresh() {
        //if (isLoadMore) {
        console.log('_onRefresh=====:下拉刷新函数执行了');
        const NewsHouseAction = this.props;
        isLoadMore = false;
        isRefreshing = true;
        isLoading = false;
        page = 0;
        NewsHouseAction.newsHouseAction(isNoData, isLoadMore, isRefreshing, isLoading, page);
        //}

    }

    //listView  底部
    _renderFooter() {
        const HouseState = this.props.houseReducer;
        return <ListViewFooter
            title={(HouseState.isNoData) ? '没有更多数据了' : '正在加载更多...'}
            type={(HouseState.isNoData) ? 'NoData' : 'HasData'}
        />

    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 2,
        borderColor: color.border,
        backgroundColor: color.theme
    },
});

//HomePage.propTypes = propTypes;

export  default NearbyPage;