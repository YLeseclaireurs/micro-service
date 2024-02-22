import React, { useState, useRef, useEffect } from 'react';
import {Tag } from 'antd';
import {Link,useParams} from 'umi';
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

import {GetArticleDetail} from "@/services/articles/article";

import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import SomeLikes from "@/components/Somelikes"
import Catalogue from "@/components/Catalogue"
import Qrcode from "@/components/Qrcode"
import SideBar from "@/components/SideBar";

import "@/styles/global.less"
import "@/pages/content/index.less";
import Header from "@/components/Header";

export default function ContentPage() {
    const editor_ref = useRef<Editor>(null);
    const chartOptions = {minWidth: 100, maxWidth: 600, minHeight: 100, maxHeight: 300};// Markdown中的图表配置项

    // 路由参数解析
    const urlParams  = useParams();
    const queryID = urlParams.id ? urlParams.id?.split(".")[0] : "1"
    const id = parseInt(queryID, 10)

    const debug = location.search.split('&')[0].substr(7);
    let showLogin = false

    if (debug.length > 0 ) {
        showLogin = true
    }

    // 页面数据加载
    const [loading, setLoading] = useState(true);
    const [resp, setResp] = useState<API.ArticleContentDetail>({});
    useEffect(() => {
        GetArticleDetail({id: id}).then((res) => {
            document.title = (res.data.article?.title ? res.data.article.title : "") + "栗·YLeseclaireurs"
            setResp(res.data)
            setLoading(false)
            editor_ref.current?.getInstance().setMarkdown(res.data.article?.content)
            console.log(res.data)
        });
    }, [id]);

    const markdownURL = "/markdown/?id=" + resp.article?.id + "&debug=true"

    const url = "https://ur7.cn/detail/" + resp.article?.id + ".html"

    const [display, setDisplay] = useState("block")
    const handleScroll = () =>{
        let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        if (scrollTop > 50) {
            setDisplay("none")
        } else {
            setDisplay("inline-block")
        }
    }
    return (
        <>
            <Qrcode url={url}/>
            <div className="app" onWheel={handleScroll}>
                <div className="content">
                    <Header display={display}/>
                    <BackTop className="back-top"/>
                    <h2 style={{marginTop: 60}}>{resp.article?.title}</h2>
                    <span className="tag">
                        <Tag style={{color: "#999"}} color="rgba(0,0,0,.05)">原创</Tag>
                        <a className="author">栗·Leseclaireurs</a> <span> 2023-12-05 19:34 发表于北京 </span>{showLogin && <Link to={markdownURL}>编辑</Link> }
                    </span>
                    {!loading && <Viewer ref={editor_ref} initialValue={resp.article?.content} plugins={[
                            [codeSyntaxHighlightPlugin, {highlighter: Prism}],
                            umlPlugin,
                            [chartPlugin, chartOptions],
                            tableMergedCellPlugin,
                    ]}/>}
                    <Comments/>
                    <Catalogue prev={resp.prev}  next={resp.next} total={resp.total} />
                    <SomeLikes recommends={resp.recommends}/>
                    <Footer />
                </div>
            </div>
        </>
    );
}
