import { Link } from 'umi';
import { Dropdown } from '@douyinfe/semi-ui';
import { QRCode } from 'antd';

import {CommentOutlined, ShareAltOutlined, WeiboOutlined, WechatOutlined, LinkOutlined} from '@ant-design/icons';
import "@/styles/global.less"
import "@/pages/arch/index.less";
import React, {useEffect, useState} from 'react';
import {GetArticleList} from "@/services/articles/article";
import Header from "@/components/Header";

export default  function HomePage () {
    const [archList, setArchList] = useState<API.Article[]>([])

    useEffect(() => {
        document.title = '栗 · 架构';

        const params = {
            category: "arch",
            page:1,
            size:20,
        }
        archList.length == 0 && GetArticleList(params).then((res) => {
            setArchList(res.data? res.data:[])
            console.log("请求返回值",  archList)
        });
    });

    const ArchArticlesComponents = archList.map(arch =>
        <div key={arch.id}  className="item">
            <h4><Link to="/detail"> {arch.title} </Link></h4>
            <div><p>{arch.brief}<Link to="/detail"> 阅读全文</Link></p></div>
            <div className="inter-box">
                <span>2023年12月31日 11点39分</span>&nbsp;&nbsp;
                <span><Link to="/detail?title=america-history.html"><CommentOutlined />&nbsp;{arch.comment_nums}条评价</Link></span>&nbsp;&nbsp;
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
                    {arch.share_nums}分享
                    </Dropdown>
                </span>
            </div>
        </div>
    );

    return (
        <>
            <div className="app">
                <Header />
                <div className="content" >
                    {ArchArticlesComponents}
                    <div className="copyright"><span>京ICP备2021005198号-1 @copyright 栗</span></div>
                </div>
            </div>
        </>
    );
};



