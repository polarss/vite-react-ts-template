import 'tailwindcss/tailwind.css';
import './style/global.less';

import { createRoot } from 'react-dom/client';

import App from './components/Home';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
