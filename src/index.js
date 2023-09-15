import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Aos from 'aos';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

Aos.init({ duration: 1000, easing: 'ease', delay: 0, offset: 0 });
