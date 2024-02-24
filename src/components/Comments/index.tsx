import { message, Flex, Input,Button } from 'antd';
import  "./index.less";
import { LikeOutlined  } from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {AddCommentLikeNum, CommitComment, GetCommentList} from "@/services/comments/comment";

export default function Comments(props: any) {

    const bizID = props.id

    type DataType = {
        id: number;
        username: string;
        email: string;
        content: string;
        like_num: number;
    };
    const [messageApi, contextHolder] = message.useMessage();
    const { TextArea } = Input;
    const [comment, setComment] = useState("");
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState(3)
    const [showComment, setShowComment] = useState(false)
    const [list, setList] = useState<API.Comment[]>([])


    useEffect(() => {
        const params = {
            biz_id: bizID,
            page:1,
            size:20,
        }
        list.length == 0 && GetCommentList(params).then((res) => {
            setList(res.data?res.data:[])
            console.log("请求返回值",  list)
        });
    }, [bizID]);


    const  doLike = (comment: API.Comment) => {
        AddCommentLikeNum({id: comment.id}).then((res) => {
            if (res.code == 0) {

            }
        });

        console.log("评价", comment)
    }

    const commentList = list.map(comment =>
        <div key={comment.id} className="comments-item">
            <div className="comments-content-container">
                <div className="comments-content-container-username">
                    <span className="username">{comment.username}</span> <span> 1小时前 </span>
                </div>
                <div className="comments-content-container-desc">
                    {comment.content}&nbsp;&nbsp;
                </div>
                <div className="comments-content-container-tools">
                    <span className={"pointer"} onClick={() => doLike(comment)}><LikeOutlined /> {comment.like_num}&nbsp;</span>
                </div>
            </div>
        </div>
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(e.target.value.toString())
        console.log('Change:', comment);
    };

    const onUsernameChange = (value:any) => {
        setUsername(value.target.value)
    }
    const onEmailChange = (value:any) => {
        setEmail(value.target.value)
    }

    const submitComment = ()  => {
        let len = 0
        for (let i = 0; i < username.length; i++) {
            if (username.charCodeAt(i) > 127 || username.charCodeAt(i) == 94) {
                len += 2
            } else {
                len++
            }
        }
        if (len <= 2) {
            return messageApi.open({type: 'warning', content: "昵称不能少于2个字"});
        }

        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))) {
            return messageApi.open({type: 'warning', content: "请输入正确的Email"});
        }
        if (comment == "") {
            return messageApi.open({type: 'warning', content: "评论内容不能为空"});
        }

        setId(id+1)
        const item:DataType = {
            id: id,
            username: username,
            email: email,
            content: comment,
            like_num: 0
        }
        setList([item, ...list])
        console.log("comment", comment)

        // 清空内容
        setComment("")
        setUsername("")
        setEmail("")

        // 评价提交
        const params = {biz_id: bizID, username: username, email: email, content: comment,}
        CommitComment(params).then((res) => {
            console.log("请求返回值", res)
            if (res.code == 0) {
                messageApi.open({type: 'success', content: "评价发布成功"})
            } else {
                messageApi.open({type: 'warning', content: "评价发布失败"})
            }
        }).catch(function(error) {
            console.log(error);
            messageApi.open({type: 'warning', content: "评价发布失败"})
        });
    }

    const showCommentEditor = () => {
        setShowComment(true)
        console.log("show", showComment)
    }

    // 1.登陆功能  2.查询登陆用户的信息 3.提交评价内容 4.获取评价内容
    return (
        <div className="comments" >
            {contextHolder}
            <div className="comments-header">
                <div className="selector"><span>留言列表</span></div>
                <div className="writer"><span ><Button onClick={showCommentEditor} type="text">写留言</Button></span></div>
            </div>
            {showComment &&
                <div className="comments-editor">
                    <div className="username"><Input style={{width: 150}} placeholder="你的昵称" allowClear onChange={onUsernameChange}/></div>
                    <div className="username"><Input style={{width: 300}} placeholder="你的邮箱" allowClear onChange={onEmailChange}/></div>
                    <Flex vertical gap={32}>
                        <TextArea
                            maxLength={100}
                            onChange={onChange}
                            placeholder="写下你的想法"
                            style={{height: 80, resize: 'none'}}
                        />
                    </Flex>
                    <div className="comments-editor-bottom">
                        <Button onClick={submitComment}>发布评论</Button>
                    </div>
                </div>
            }
            <div className="comments-list">
                {commentList}
            </div>
        </div>
    )
}
