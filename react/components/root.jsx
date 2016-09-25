import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app_container';

const Root = ({store}) => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
);

export default Root;
