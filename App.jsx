import React from 'react';
import { StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import reducers from './src/reducers';
import AppContainer from './src/routes';

const ConnectedApp = connect(null, null)(AppContainer);

export default function App() {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <Provider store={createStore(applyMiddleware(thunk))}>
      <ConnectedApp />
    </Provider>
  );
}
