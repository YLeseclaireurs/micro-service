import React, { useState, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import  "@/pages/markdown/index.less";
import { Button,Input,Select } from 'antd';

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

import { Col, Row } from 'antd';


import {UploadImage} from "@/services/tools/upload";

import {initData} from "@/pages/markdown/data";

const colorSyntaxOptions = {
    preset: ['#181818', '#292929', '#393939']
};

const chartOptions = {
    minWidth: 100,
    maxWidth: 600,
    minHeight: 100,
    maxHeight: 300,
};



export default function App() {
    const editor_ref = useRef<Editor>(null);

    const [content, setContent] = useState('')

    const handleChange = () => {
        const editor_instance = editor_ref.current?.getInstance();
        setContent(editor_instance?.getMarkdown())
        console.log("内容MD", content)
    }

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);


    return (
        <div className="App" >
            {/*<Viewer
                ref={editor_ref}
                initialValue={initData}
                plugins={[
                    [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                    umlPlugin,
                    [chartPlugin, chartOptions],
                    tableMergedCellPlugin,
                ]}
            />*/}
            <div style={{margin:20}}>
                <Editor
                    ref={editor_ref}
                    initialValue={initData}
                    initialEditType="markdown"
                    previewStyle="vertical"
                    height={"600px"}
                    plugins={[
                        [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                        [chartPlugin, chartOptions],
                        tableMergedCellPlugin,
                        umlPlugin,
                        [colorPlugin, colorSyntaxOptions],
                    ]}
                    toolbarItems={[
                        ['heading', 'bold', 'italic', 'strike'], ['hr', 'quote'], ['ul', 'ol', 'task', 'indent', 'outdent'], ['table', 'image', 'link'], ['code', 'codeblock']
                    ]}
                    onChange={handleChange}
                    usageStatistics={false}
                    placeholder="写下你的想法.."


                    hooks={{
                        addImageBlobHook: (fileOrBlob: Blob | File, callback: (url: string, text?: string) => void) => {
                            const param = new FormData();
                            param.append('file', fileOrBlob);
                            console.log("param", param)

                            // 图片上传请求
                            UploadImage(param)
                                .then((res) => {
                                    setImage(res.data?.url ? res.data.url :  "");
                                    setLoading(true)
                                    console.log("请求返回值", loading, image)
                                })
                                .catch((err) => {
                                    console.log("错误", err);
                                });

                            /* request({
                                 url: '/api/v1.0/tools/upload-image',
                                 headers: { 'Content-Type': 'multipart/form-data' },
                                 method: 'POST',
                                 data: param,
                             })
                             .then((res) => {
                                 const { data } = res as any;
                                 const { url, name } = data || {};
                                 callback(url, name);
                             })
                             .catch((err) => {
                                 console.log(err);
                             });*/
                        },
                    }}
                />
                <div style={{marginLeft:0, marginTop:30, marginBottom:20}}>
                    <span style={{fontWeight: 300}}>标题：</span><Input style={{"width":400}} placeholder="" />&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div style={{marginLeft:0, marginTop:10, marginBottom:20}}>
                    <span style={{fontWeight: 300}}>话题：</span><Input style={{"width":400}} placeholder="" />&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div style={{marginLeft:0, marginTop:10, marginBottom:20}}>
                    <span style={{fontWeight: 300}}>标签：</span>
                    <Select
                        defaultValue="架构"
                        style={{ width: 400 }}
                        onChange={handleChange}
                        options={[
                            { value: 'arch', label: '架构' },
                            { value: 'insight', label: '思考' },
                        ]}
                    />
                </div>
                <Button type="primary" style={{ display:"inline", marginLeft:0, marginTop:10, marginBottom:30}} onClick={() => {
                    const editor_instance = editor_ref.current?.getInstance();
                    console.log("提交", editor_instance?.getMarkdown())
                }}>内容发布</Button>
            </div>
        </div>
    );
}
