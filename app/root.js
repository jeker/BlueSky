import React, {PureComponent}from 'react';
import { Provider ,connect } from 'react-redux';
//import configureStore from './store/configure-store';
// import App from './app';
// import store from './store/store';

import getStore from './store/store';

import { addNavigationHelpers } from "react-navigation";


import { AppNavigator } from './routers/AppNavigator';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};


const mapStateToProps = (state) => ({
    nav: state.nav
});


class App extends PureComponent {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}




// const Root = () =>
//     (<Provider store={store}>
//         <App />
//     </Provider>);

// export default Root;