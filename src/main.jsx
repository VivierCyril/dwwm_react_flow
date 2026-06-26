import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';
import './App.css';

const container = document.querySelector('#app');
const root = createRoot(container);

root.render(<App />);