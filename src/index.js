import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


