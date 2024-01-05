import { defineConfig } from "umi";
import routes from './routes';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
    routes: routes,
    npmClient: 'npm',
    proxy: proxy['dev'],
    favicons: [
        // 完整地址
        'https://zh.wikipedia.org/static/favicon/wikipedia.ico',
        // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
        //'/favicon.png'
    ]

});
