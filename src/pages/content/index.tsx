import React, { useState, useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';

import "@/styles/global.less"
import "@/pages/content/index.less";


import Prism from 'prismjs';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCellPlugin from '@toast-ui/editor-plugin-table-merged-cell';
import chartPlugin from '@toast-ui/editor-plugin-chart';
import umlPlugin from '@toast-ui/editor-plugin-uml';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import { Link } from 'umi';


import {GetArticleDetail, GetArticleList} from "@/services/articles/article";

import { data} from "@/pages/content/data";
import {List} from 'antd';

import {BackTop} from '@douyinfe/semi-ui';
import { IconArrowUp } from '@douyinfe/semi-icons';
import Comments from "@/components/Comments";
import Header from "@/components/Header";


export default function DetailPage() {
    // 页面数据获取
    const params = {
        id:1
    };
    const [article, setArticle] = useState<API.Article>({});
    const [loading, setLoading] = useState(false);
    const editor_ref = useRef<Editor>(null);

    useEffect(() => {
        document.title = '你读过最有力量的一段文字是什么？';

        const params = {
            id:1
        }
        Object.keys(article).length === 0 && GetArticleDetail(params).then((res) => {
            setArticle(res.data? res.data: {})
            setLoading(true)
            document.title = article.title ? article.title: "111"
            console.log("请求返回值",  article)
        });
    });

    // Markdown中的图表配置项
    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300,
    };


    return (
        <>
            <div className="app">
                <Header />
                <div className="content">
                    <BackTop /> {/*https://semi.design/zh-CN/navigation/backtop*/}
                    <h2>{article.title}</h2>
                    <span className="tag"><a className="author">栗·YLeseclaireurs</a> <span > 2023-12-05 19:34 发表于北京 </span></span>
                    {loading && <Viewer
                        ref={editor_ref}
                        initialValue={article.content}
                        plugins={[
                            [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                            umlPlugin,
                            [chartPlugin, chartOptions],
                            tableMergedCellPlugin,
                        ]}
                    />}
                    <Comments/>
                    <div className="page_up_down">
                        <div className="topic">读书会 · 目录 · 12篇</div>
                        <div className="album_read_bd">
                            <span className="album_read_nav_item album_read_nav_prev">
                                <Link to="/">
                                    <span  className="album_read_nav_inner">
                                        <span className="album_read_nav_btn">《上一篇</span>
                                        <span className="album_read_nav_btn">假期准备读的2本书</span>
                                    </span>
                                </Link>
                            </span>
                            <span className="album_read_nav_item album_read_nav_next">
                                <Link to="/">
                                    <span className="album_read_nav_inner">
                                        <span className="album_read_nav_btn">下一篇》</span>
                                        <span className="album_read_nav_btn">11月读的2本书</span>
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="some_likes">
                        <div className="function_hd js_related_title">喜欢此内容的人还喜欢</div>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={<span>{item.desc}</span>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className="copyright"><span>京ICP备2021005198号-1 @copyright 栗</span></div>
                </div>
            </div>
        </>
    );
}
