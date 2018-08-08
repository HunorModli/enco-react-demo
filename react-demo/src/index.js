//? node_modules:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";

//? styles:
import './styles/bootstrap.min.css';

//? components:
import Navbar from './components/Navbar';
import Counter from './components/Counter';

//? reducers: 
import combined from "./reducers/index";


// function reducer(state = initialState, action) {

//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }
console.log(combined);
const store = createStore(
  combined, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Navbar />
      <Counter />
    </React.Fragment>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
