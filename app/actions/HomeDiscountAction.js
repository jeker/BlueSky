/**
 * Created by jeker on 17-9-30.
 */

import * as types from './actionTypes';
import Util from '../common/utils';


export let homeDiscountAction = (isNoData,isLoadMore, isRefreshing, isLoading, page) => {
    // let URL = 'http://api.coins.app887.com/api/Articles.action?keyword=&kind=&npc=0&opc=25&type=%E6%88%BF%E4%BA%A7&uid=1994';
    let URL = 'http://api.coins.app887.com/api/Articles.action?keyword=&kind=&npc=';
    URL += page;
    URL += '&opc=25&type=%E6%88%BF%E4%BA%A7&uid=1994';
    // console.log('URL=======:' + URL);
    // console.log('page=====:' + page);
    console.log('房屋贷款URL=======:' + URL);
    return dispatch => {
        dispatch(feachDiscountList(isNoData,isLoadMore, isRefreshing, isLoading));
        return Util.get(URL,(response) => {
            console.log('房屋贷款数据-----：' + response.root.list);
            var isExistData = (response.root.list.length == 0) ? true : false;
            dispatch(receiveClassList(response, isExistData));
        },(error) => {
            console.log('分类数据error==>' + error);
            dispatch(receiveClassList([]));
        });
    }
}


let feachDiscountList = (isNoData, isLoadMore, isRefreshing, isLoading) => {
    return {
        type: types.FETCH_HOME_DICOUNT_LIST,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
        isNoData: isNoData,
    }
}


let receiveClassList = (response, isExistData) => {
    return {
        type: types.RECEIVE_HOME_DICOUNT_LIST,
        classList: response.root.list,
        isNoData: isExistData,
    }
}
