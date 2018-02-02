

import * as types from '../actions/actionTypes';

const initialState = {
    typeList: {},
    isLoading: false,
};

let newTypeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_TYPE_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            })

        case types.RECEIVE_TYPE_LIST:
            // console.log(action);
            return Object.assign({}, state, {
                isLoading: false,
                typeList: action.typeList,
            })
        default:
            return state;
    }
}

export default newTypeReducer;
