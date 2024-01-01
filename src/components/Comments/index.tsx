import { message, Flex, Input, Avatar,Button } from 'antd';
import  "./index.less";
import { CommentOutlined,StarOutlined,HeartOutlined } from '@ant-design/icons';
import React, {useState} from "react";

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
    const [list, setList] = useState<DataType[]>([
        {
            id: 1,
            uid: 1,
            username: "栗",
            content: "我们显然无法了解自己的无知程度，无法确切了解自己所生活的这个世界的不确定性。",
            avatar: "https://picx.zhimg.com/8589ed3e65ebd6011d8f9268696688af_l.jpg?source=2c26e567",
            like_num: 83,
            star_num: 3
        },
        {
            id: 2,
            uid: 2,
            username: "星",
            content: "其实是直觉引导的行为。以为是毋庸置疑的真理，其实是记忆累加变成的习惯。",
            avatar: "https://pic1.zhimg.com/v2-93446443e78697dbe2e4a052c5a47b12_l.jpg?source=32738c0c",
            like_num: 22,
            star_num: 8
        }
    ])

    const commentList = list.map(comment =>
        <div key={comment.id} className="comments-item">
            <div className="comments-avatar-container">
                <Avatar size={50}  src={comment.avatar} />
            </div>
            <div className="comments-content-container">
                <div className="comments-content-container-username">
                    <span className="username">{comment.username}</span> <span> 1小时前 </span>
                </div>
                <div className="comments-content-container-desc">
                    {comment.content}
                </div>
                <div className="comments-content-container-tools">
                    <span><HeartOutlined /> {comment.like_num} &nbsp;</span>
                    <span><StarOutlined /> {comment.star_num} &nbsp;</span>
                    <span ><CommentOutlined /> Reply&nbsp;</span>
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
            messageApi.open({
                type: 'warning',
                content: "评论内容不能为空",
            });
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
        console.log("ID", id)
        setComment("")
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
