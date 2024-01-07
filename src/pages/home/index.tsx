import { Link } from 'umi';
import { List, Layout } from 'antd';

import "@/styles/global.less"
import "@/pages/home/index.less";
import React, {useEffect, useRef, useState} from 'react';
import Comments from "@/components/Comments";
import {GetArticleList} from "@/services/articles/article";
import {Editor, Viewer} from "@toast-ui/react-editor";

import Prism from "prismjs";
import umlPlugin from "@toast-ui/editor-plugin-uml";
import chartPlugin from "@toast-ui/editor-plugin-chart";
import tableMergedCellPlugin from "@toast-ui/editor-plugin-table-merged-cell";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";

import {data} from "@/pages/content/data";
import Header from "@/components/Header";

export default  function HomePage () {
    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState<API.Article>({})

    document.title = "栗·YLeseclaireurs"

    useEffect(() => {
        const articleParams = {
            category: "",
            page:1,
            size:1,
        }
        Object.keys(article).length === 0 && GetArticleList(articleParams).then((res) => {
            setArticle(res.data? res.data[0]: {})
            setLoading(true)
        });
    });

    // Markdown中的图表配置项
    const editor_ref = useRef<Editor>(null);
    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300,
    };

    return (
        <div className="app">
            <Header name="home" />
            <div className="content" >
                <h2>{article.title}</h2>
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
    );
};



