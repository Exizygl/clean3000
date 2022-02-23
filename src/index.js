import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';
import NotFound from './NotFound';
import AvisDePassage from './components/AvisDePassage';



const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pour pouvoir utiliser Redux Devtools 
);

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/avis' element={<AvisDePassage />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
