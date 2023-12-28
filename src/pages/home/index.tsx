import styles from "@/pages/content/index.less";
import { Avatar, List,Timeline } from 'antd';
export default  function HomePage () {
    const data = [
        {
            href:"/detail",
            children: '一个大龄技术总监，居然辞去百万年薪，卖水果去了...',
            desc: '经典书籍推荐',
        },
        {
            href:"/detail",
            children: '《非暴力沟通》：先爱自己，而后再爱人',
            desc: '架构师之路',
        },
        {
            href:"/detail",
            children: '推荐终身成长必看的5本好书',
            desc: '书研说',
        },
        {
            href:"/detail",
            children: '推荐5本让人相见恨晚的高分神作！',
            desc: '读书会',
        },
        {
            href:"/detail",
            children: '一个大龄技术总监，居然辞去百万年薪，卖水果去了...',
            desc: '经典书籍推荐',
        },
        {
            href:"/detail",
            children: '《非暴力沟通》：先爱自己，而后再爱人',
            desc: '架构师之路',
        },
        {
            href:"/detail",
            children: '推荐终身成长必看的5本好书',
            desc: '书研说',
        },
        {
            href:"/detail",
            children: '推荐5本让人相见恨晚的高分神作！',
            desc: '读书会',
        }
    ];

    return (
      <div className={styles.app}>
          <div className={styles.content}>
              <ul>
                  <li></li>
              </ul>
          </div>
      </div>
  );
};
