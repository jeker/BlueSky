/**
 * Created by ljunb on 16/5/25.
 * 根reducer
 */
import { combineReducers } from 'redux';
import Home from './homeReducer';
import nearbyReducer from './nearbyReducer';
import houseReducer from './houseReducer';
import newReducer from './newReducer';
import newTypeReducer from './newTypeReducer';


// import HousingLoanPage from './housingLoanReducer';
// import PurchaseCarPage from './purchaseCarReducer';
// import DetailPage from './detailPageReducer';


// export default rootReducer = combineReducers({
//     Home,
//     // HousingLoanPage,
//
// })


export default function getReducers(navReducer) {
    return combineReducers({
        Home,
        nearbyReducer,
        houseReducer,
        newReducer,
        newTypeReducer,
        nav: navReducer
    });
}
