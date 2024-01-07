import { message, Flex, Input, Avatar,Button } from 'antd';
import  "./index.less";
import { CommentOutlined,StarOutlined,HeartOutlined } from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {CommitComment, GetCommentList} from "@/services/comments/comment";

export default function Comments() {
    type DataType = {
        id: number;
        uid: number;
        username: string;
        content: string;
        avatar: string;
        like_num: number;
        star_num: number;
    };
    const [messageApi, contextHolder] = message.useMessage();
    const { TextArea } = Input;
    const [comment, setComment] = useState("");
    const [uid, setUID] = useState(0)
    const [targetUID, setTargetUID] = useState(0)
    const [id, setId] = useState(3)
    const [showComment, setShowComment] = useState(false)
    const [list, setList] = useState<API.Comment[]>([])


    useEffect(() => {
        const params = {
            biz_id:1,
            page:1,
            size:20,
        }
        list.length == 0 && GetCommentList(params).then((res) => {
            setList(res.data?res.data:[])
            console.log("请求返回值",  list)
        });
    });


    const  doReply = (comment: API.Comment) => {
        setShowComment(true)

        setTargetUID(comment?.user?.uid ? comment?.user?.uid : 0)

        console.log("评价", comment)
    }

    const commentList = list.map(comment =>
        <div key={comment.id} className="comments-item">
            <div className="comments-avatar-container">
                <Avatar size={50}  src={comment.user?.avatar} />
            </div>
            <div className="comments-content-container">
                <div className="comments-content-container-username">
                    <span className="username">{comment.user?.username}</span> <span> 1小时前 </span>
                </div>
                <div className="comments-content-container-desc">
                    {comment.content}&nbsp;&nbsp;
                </div>
                <div className="comments-content-container-tools">
                    <span onClick={() => doReply(comment)}><CommentOutlined /> 回复&nbsp;</span>
                </div>
            </div>
        </div>
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(e.target.value.toString())
        console.log('Change:', comment);
    };

    const submitComment = ()  => {
        if (comment == "") {
            messageApi.open({type: 'warning', content: "评论内容不能为空"});
            return
        }

        setId(id+1)
        const item:DataType = {
            id: id,
            uid: uid,
            username: "宝",
            content: comment,
            avatar: "https://picx.zhimg.com/v2-0b1e0cff6273b779e1c0a13f0f737cf9_l.jpg?source=2c26e567",
            like_num: 0,
            star_num: 0
        }
        setList([item, ...list])
        console.log("comment", comment)
        setComment("")


        // 评价提交
        const params = {
            biz_id: 1,
            uid: 1,
            target_uid: 2,
            content: comment,

        }
        CommitComment(params).then((res) => {
            console.log("请求返回值", res)
            messageApi.open({
                type: 'success',
                content: "评价发布成功",
            })
        }).catch(function(error) {
            console.log(error);
            messageApi.open({
                type: 'warning',
                content: "评价发布失败",
            })
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
                    <Flex vertical gap={32}>
                        <TextArea
                            maxLength={100}
                            onChange={onChange}
                            placeholder="写下你的想法"
                            style={{ height: 80, resize: 'none' }}
                        />
                    </Flex>
                    <div className="comments-editor-bottom">
                        <Button  onClick={submitComment}>发布评论</Button>
                    </div>
                </div>
            }
            <div className="comments-list">
                {commentList}
            </div>
        </div>
    )
}
