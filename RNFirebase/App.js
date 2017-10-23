import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import Main from './src';

const store = configureStore();

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Main {...this.props} />
      </Provider>
    );
  }
}
