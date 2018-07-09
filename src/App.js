import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducerItems from './reducers/items';
import Router from './Router';
import './styles.css';
import 'normalize.css';

const store = createStore(reducerItems);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
