import { Link } from 'umi';
import { Dropdown } from '@douyinfe/semi-ui';
import { QRCode } from 'antd';

import {CommentOutlined, ShareAltOutlined, WeiboOutlined, WechatOutlined, LinkOutlined} from '@ant-design/icons';
import "@/styles/global.less"
import "@/pages/insight/index.less";
import React, {useEffect, useState} from 'react';
import {GetArticleList} from "@/services/articles/article";
import Header from "@/components/Header";


export default  function HomePage () {
    const [insightList, setInsightList] = useState<API.Article[]>([])

    useEffect(() => {
        document.title = '栗 · 思考';

        insightList.length == 0 && GetArticleList({
            category: "insight",
            page:1,
            size:20,
        }).then((res) => {
            setInsightList(res.data? res.data:[])
            console.log("请求返回值",  insightList)
        });
    });

    const InsightArticlesComponents = insightList.map(insight=>
        <div key={insight.id}  className="item">
            <div><h4><Link to="/detail?title=america-history.html"> {insight.title} </Link></h4></div>
            <div><p>{insight.brief}阅读全文</p></div>
            <div>
                    <span>2023年12月31日 11点39分</span>&nbsp;&nbsp;
                    <span><CommentOutlined />&nbsp;{insight.comment_nums}条评价</span>&nbsp;&nbsp;
                    <span><ShareAltOutlined />&nbsp;
                        <Dropdown
                            render={
                                <Dropdown.Menu>
                                    <Dropdown.Item><LinkOutlined />&nbsp;复制链接</Dropdown.Item>
                                    <Dropdown.Item><WeiboOutlined />&nbsp;新浪微博</Dropdown.Item>
                                    <Dropdown.Item><WechatOutlined />&nbsp;微信扫一扫</Dropdown.Item>
                                    <div style={{marginLeft:18,marginTop:5, marginBottom:10}}>
                                        <QRCode
                                            size={90}
                                            iconSize={80/4}
                                            value="https://ant.design/"
                                            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                        />
                                    </div>
                                </Dropdown.Menu>
                            }
                        >
                        {insight.share_nums}分享
                        </Dropdown>
                        </span>
                </div>
        </div>
    );

    return (
        <div className="app">
            <Header />
            <div className="content" >
                {InsightArticlesComponents}
                <div className="copyright"><span>京ICP备2021005198号-1 @copyright 栗</span></div>
            </div>
        </div>
    );
};



