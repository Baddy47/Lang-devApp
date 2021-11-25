import reportWebVitals from './reportWebVitals';
import state from './redux/State';
import {rerenderEntireTree} from "./Render";
import './index.css';

rerenderEntireTree(state);

reportWebVitals();
