import * as React from 'react';
import {createRoot} from 'react-dom/client';
import MainPage from './pages/MainPage';

var container = document.createElement('div');
document.body.appendChild(container);
var root = createRoot(container);

root.render(<MainPage />);