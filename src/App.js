import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB-mFyV4X1wjW3PUIGn4e1NVhqWjqSardk",
      authDomain: "manager2-a5859.firebaseapp.com",
      databaseURL: "https://manager2-a5859.firebaseio.com",
      projectId: "manager2-a5859",
      storageBucket: "",
      messagingSenderId: "5514722978"
    };

    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
