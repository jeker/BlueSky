/**
 * Created by jeker on 17-9-30.
 * 房贷新闻 测试
 */

import * as types from './actionTypes';
import Util from '../common/utils';


//新闻type
export let newsTypeAction = (isLoading) => {
    let URL = 'http://route.showapi.com/582-1?showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f';
    console.log('新闻分类URL=======:' + URL);
    return dispatch => {
        dispatch(feachTypeList( isLoading));
        return Util.get(URL,(response) => {
            console.log('新闻分类数据-----：' + response.showapi_res_body.typeList);
            dispatch(receiveTypeList(response));
        },(error) => {
            console.log('新闻分类数据error==>' + error);
            dispatch(receiveTypeList([]));
        });
    }
}


let feachTypeList = ( isLoading) => {
    return {
        type: types.FETCH_TYPE_LIST,
        isLoading: isLoading,
    }
}


let receiveTypeList = (response) => {
    return {
        type: types.RECEIVE_TYPE_LIST,
        articleList: response.showapi_res_body.typeList,
    }
}
