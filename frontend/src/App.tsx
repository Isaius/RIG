import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './store/ducks/rootReducer';

import Dashboard from './components/Dashboard';

function App() {
  
  const store = createStore(rootReducer);
  
  return (
    <Provider store={store}>
      <h1>Random Item Generator</h1>
     <Dashboard />
    </Provider>
  );
}

export default App;
