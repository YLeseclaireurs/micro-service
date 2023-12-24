import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
    return (
        <div className={styles.navs}>
            {/*<ul>
                <li><Link to="/"> 首页</Link></li>
                <li><Link  to="/docs"> Maps</Link></li>
                <li><a href="detail"> 栗</a></li>
            </ul>*/}
            <Outlet />
        </div>
    );
}
