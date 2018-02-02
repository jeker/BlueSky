

import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate: [],
    isLoading: false,
    isLoadMore: false,
    isRefreshing: false,
    //noMore: false,
};

let newReducer = (state = initialState, action) => {
    // console.log(action)

    switch (action.type) {
        case types.FETCH_ARTICLE_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading,
            })

        case types.RECEIVE_ARTICLE_LIST:
            // console.log(action);
            return Object.assign({}, state, {
                isRefreshing: false,
                isLoadMore:false,
                isLoading: false,
                // isLoading: state.articleList[action.typeId] === undefined
                ClassDate: state.isLoadMore ? loadMore(state, action) : refresh(state, action),
            })
        default:
            return state;
    }
}

function refresh(state, action) {
  //  state.articleList[action.typeId] = action.articleList;
   state.articleList = action.articleList;
    return state.articleList;
}

// function loadMore(state, action) {
//
//     // console.log('loadMore=action.classList[0].title====:' + action.classList);
//     // console.log('loadMore=state.ClassDate[0].title====:' + state.ClassDate);
//     state.ClassDate = state.ClassDate.concat(action.classList);
//     return state.ClassDate;
// }


function loadMore(state, action) {
    // state.articleList[action.typeId] = concatFilterDuplicate(
    //     state.articleList[action.typeId],
    //     action.articleList
    // );
    // return state.articleList;


    state.ClassDate = concatFilterDuplicate(
        state.articleList,
        action.articleList
    );

    return state.ClassDate;

}

/**
 * filter duplicate data when loading more.
 * 过滤重复数据,第一页和第二页可能有重复飞数据
 */
function concatFilterDuplicate(list1, list2) {
    const set = new Set(list1.map(item => item.id));
    const filterList2 = [];
    const length = list2.length;
    for (let i = 0; i < length; i++) {
        if (!set.has(list2[i].id)) {
            filterList2.push(list2[i]);
        }
    }
    return list1.concat(filterList2);
}




export default newReducer;
