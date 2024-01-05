import { defineConfig } from "umi";
import routes from './routes';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
    routes: routes,
    npmClient: 'npm',
    proxy: proxy['dev'],
});
