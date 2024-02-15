import React, { useState, useRef, useEffect } from 'react';
import {Tag } from 'antd';
import {useParams} from 'umi';
import {BackTop} from '@douyinfe/semi-ui';

import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
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

import {GetArticleList} from "@/services/articles/article";

import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import SomeLikes from "@/components/Somelikes"
import Catalogue from "@/components/Catalogue"
import Qrcode from "@/components/Qrcode"
import SideBar from "@/components/SideBar";

import "@/styles/global.less"
import "@/pages/content/index.less";


export default function HomePage() {
    const editor_ref = useRef<Editor>(null);
    const chartOptions = {minWidth: 100, maxWidth: 600, minHeight: 100, maxHeight: 300};// Markdown中的图表配置项


    const [loading, setLoading] = useState(true);

    const urlParams  = useParams();
    const queryID = urlParams.id ? urlParams.id?.split(".")[0] : "1"
    const id = parseInt(queryID, 10)

    const [article, setArticle] = useState<API.Article>({});
    useEffect(() => {
        const articleParams = {category: "", page:1, size:1}
        GetArticleList(articleParams).then((res) => {
            const art = res.data? res.data[0]: {}
            document.title = (art.title ? art.title : "") + " - 栗·YLeseclaireurs - 博客"
            setArticle(art)
            setLoading(false)
        });
    }, [id]);

    return (
        <>
            <Qrcode/>
            <SideBar/>
            <div className="app">
                <div className="content">
                    <BackTop/>
                    <h2 style={{marginTop: 20}}>{article.title}</h2>
                    <span className="tag"><Tag style={{color: "#999"}} color="rgba(0,0,0,.05)">原创</Tag><a className="author">栗·Leseclaireurs</a> <span> 2023-12-05 19:34 发表于北京 </span></span>
                    {!loading && <Viewer ref={editor_ref} initialValue={article.content} plugins={[
                        [codeSyntaxHighlightPlugin, {highlighter: Prism}],
                        umlPlugin,
                        [chartPlugin, chartOptions],
                        tableMergedCellPlugin,
                    ]}/>}
                    <Comments/>
                    <Catalogue />
                    <SomeLikes />
                    <Footer />
                </div>
            </div>
        </>
    );
}
