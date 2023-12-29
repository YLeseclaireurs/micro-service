import { Link } from 'umi';
import { Tabs, TabPane, Avatar} from '@douyinfe/semi-ui';
import { IconCopy,IconComment,IconLikeHeart } from '@douyinfe/semi-icons';
import { Image,Button, List, Skeleton,Timeline } from 'antd';
import { FlagOutlined,DribbbleOutlined,BulbOutlined,CommentOutlined,HeartOutlined,ShareAltOutlined } from '@ant-design/icons';
import styles from "@/pages/home/index.less";
import React, { useEffect, useState } from 'react';


export default  function HomePage () {

    const style = {
        backgroundColor: 'var(--semi-color-overlay-bg)',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const hover = (
        <div ><img style={style} src="data:image/jpeg;base64,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"></img></div>
    );
    return (
      <div className={styles.app}>
          <div className={styles.content}>
              <div className={styles.head}>
                  <div className={styles.box}>
                      <Avatar color="red" size="default" hoverMask={hover} alt='栗的博客'>栗</Avatar>
                      <span className={styles.sign}>&nbsp;&nbsp;<span className={styles.name}>栗</span> · 若能虚己以游世，其孰能害之</span><br/>
                  </div>
              </div>
              <Tabs>
                  <TabPane  tab={<span><FlagOutlined />&nbsp;首页</span>} itemKey="1">
                      {/*<div className={styles.preview}>
                          <Image.PreviewGroup
                              items={[
                                  'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                  'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                              ]}
                          >
                              <Image  src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"/>
                          </Image.PreviewGroup>
                      </div>*/}
                      <div>

                      </div>
                  </TabPane>
                  <TabPane tab={<span><DribbbleOutlined />&nbsp;架构</span>} itemKey="2">
                      <div  className={styles.item}>
                          <h3><Link to="/detail?title=america-history.html"> 美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？</Link></h3>
                          <div><p>越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…</p></div>
                          <div>
                              <span><CommentOutlined />&nbsp;210条评价</span>&nbsp;&nbsp;
                              <span><ShareAltOutlined />&nbsp;210分享</span>&nbsp;&nbsp;
                              <span><HeartOutlined />&nbsp;喜欢</span>
                          </div>
                      </div>
                      <div  className={styles.item}>
                          <h3><Link to="/detail?title=america-history.html"> 美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？</Link></h3>
                          <div><p>越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…</p></div>
                          <div>
                              <span><CommentOutlined />&nbsp;210条评价</span>&nbsp;&nbsp;
                              <span><ShareAltOutlined />&nbsp;210分享</span>&nbsp;&nbsp;
                              <span><HeartOutlined />&nbsp;喜欢</span>
                          </div>
                      </div>
                      <div  className={styles.item}>
                          <h3><Link to="/detail?title=america-history.html"> 美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？</Link></h3>
                          <div><p>越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…</p></div>
                          <div>
                              <span><CommentOutlined />&nbsp;210条评价</span>&nbsp;&nbsp;
                              <span><ShareAltOutlined />&nbsp;210分享</span>&nbsp;&nbsp;
                              <span><HeartOutlined />&nbsp;喜欢</span>
                          </div>
                      </div>
                  </TabPane>
                  <TabPane tab={<span><BulbOutlined />&nbsp;思考</span>} itemKey="3">
                      <div  className={styles.item}>
                          <h3><Link to="/detail?title=america-history.html"> 美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？</Link></h3>
                          <div><p>越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…</p></div>
                          <div>
                              <span><CommentOutlined />&nbsp;210条评价</span>&nbsp;&nbsp;
                              <span><ShareAltOutlined />&nbsp;210分享</span>&nbsp;&nbsp;
                              <span><HeartOutlined />&nbsp;喜欢</span>
                          </div>
                      </div>
                      <div  className={styles.item}>
                          <h3><Link to="/detail?title=america-history.html"> 美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？</Link></h3>
                          <div><p>越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…</p></div>
                          <div>
                              <span><CommentOutlined />&nbsp;210条评价</span>&nbsp;&nbsp;
                              <span><ShareAltOutlined />&nbsp;210分享</span>&nbsp;&nbsp;
                              <span><HeartOutlined />&nbsp;喜欢</span>
                          </div>
                      </div>
                  </TabPane>
              </Tabs>
          </div>
      </div>
  );
};



