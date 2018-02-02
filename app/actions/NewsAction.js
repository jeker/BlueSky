/**
 * Created by jeker on 17-9-30.
 * 房贷新闻 测试
 */

import * as types from './actionTypes';
import Util from '../common/utils';



export let newsAction = (isRefreshing,isLoading,typeId, isLoadMore, page) => {
    // let URL = 'http://route.showapi.com/582-2?typeId=1&page=1&showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f';
    let URL = 'http://route.showapi.com/582-2?typeId=';
    URL += typeId+'&page=';
    URL += page;
    URL += '&showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f';
    console.log('URL=typeId======:' + typeId);
    console.log('page=====:' + page);
    console.log('新闻URL=======:' + URL);
    return dispatch => {
        dispatch(feachArticleList(isLoadMore, isRefreshing, isLoading));
        return Util.get(URL,(response) => {
            console.log('新闻数据-----：' + response.showapi_res_body.pagebean.contentlist);
            //var isExistData = (response.root.list.length == 0) ? true : false;
            //var isExistData =(response.showapi_res_body.pagebean.allPages >=page ) ? true : false; 这里可通过判断是否等于最大页数,兰判断数据是否还有
            dispatch(receiveArticleList(response, typeId));
        },(error) => {
            console.log('新闻数据error==>' + error);
            dispatch(receiveArticleList([]));
        });
    }
}


let feachArticleList = (isLoadMore, isRefreshing, isLoading) => {
    return {
        type: types.FETCH_ARTICLE_LIST,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
        //isNoData: isNoData,
    }
}


let receiveArticleList = (response,typeId) => {
    return {
        type: types.RECEIVE_ARTICLE_LIST,
        articleList: response.showapi_res_body.pagebean.contentlist,
        typeId:typeId,
        // isNoData: isExistData,
    }
}
