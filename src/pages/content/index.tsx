import React, { useState, useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import  "./index.less"

import { useRequest } from 'ahooks';
import styles from "@/pages/content/index.less";


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



import {GetArticleDetail} from "@/services/article";

import {initData} from "@/pages/content/data";


export default function HomePage() {
    const params = {
        id:1
    };
    //const {data } = useRequest(() => GetArticleDetail(params));
    //console.log(data)


    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    GetArticleDetail(params).then((res) => {
        setContent(res.data.content? res.data.content :  "");
        setLoading(true)
        console.log("请求返回值", loading, content)
    });


    const editor_ref = useRef<Editor>(null);
    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300,
    };

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <h2>镀金时代</h2>
                <span><a className={styles.author}>栗·YLeseclaireurs</a> <span className={styles.tag}> 2023-12-05 19:34 发表于北京 </span></span>
                {/*<div>{content}</div>*/}
                {loading && <Viewer
                    ref={editor_ref}
                    initialValue={content}
                    plugins={[
                        [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                        umlPlugin,
                        [chartPlugin, chartOptions],
                        tableMergedCellPlugin,
                    ]}
                />}
                <p>#读书会 12</p>
            </div>
        </div>
    );
}
