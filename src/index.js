import dva from 'dva';
import { createBrowserHistory as createHistory } from "history";
import './index.css';

// 1. Initialize
const app = dva({ history: createHistory() });

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
