import { Flex, Input, Avatar,Button } from 'antd';
import  "./index.less";
import { CommentOutlined,StarOutlined,HeartOutlined } from '@ant-design/icons';
import React, {useState} from "react";

export default function Comments() {
    const { TextArea } = Input;

    const [comment, setComment] = useState("");
    const [uid, setUID] = useState(0)
    const [targetUID, setTargetUID] = useState(0)


    type DataType = {
        key: string;
        uid: number;
        username: string;
        content: string;
        avatar: string;
    };
    const comments:DataType[] = [
        {
            key: "1",
            uid: 1,
            username: "栗",
            content: "我们显然无法了解自己的无知程度，无法确切了解自己所生活的这个世界的不确定性。",
            avatar: "https://picx.zhimg.com/8589ed3e65ebd6011d8f9268696688af_l.jpg?source=2c26e567",
        },
        {
            key: "2",
            uid: 2,
            username: "星",
            content: "其实是直觉引导的行为。以为是毋庸置疑的真理，其实是记忆累加变成的习惯。",
            avatar: "https://pic1.zhimg.com/v2-93446443e78697dbe2e4a052c5a47b12_l.jpg?source=32738c0c",
        }
    ]
    const [list, setList] = useState(comments)



    const commentList = comments.map(comment =>
        <div className="comments-item">
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
                    <HeartOutlined /> 83 &nbsp;
                    <StarOutlined /> 3 &nbsp;
                    <CommentOutlined /> Reply&nbsp;
                </div>
            </div>
        </div>
    );


    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(e.target.value.toString())
        console.log('Change:', comment);
    };

    const submitComment = (value:any)  => {

        const item:DataType = {
            key: "3",
            uid: uid,
            username: "宝",
            content: comment,
            avatar: "https://picx.zhimg.com/v2-0b1e0cff6273b779e1c0a13f0f737cf9_l.jpg?source=2c26e567",
        }

        list.push(item)
        setList(list)

        console.log("list", list, value)

    }
    return (
        <div className="comments">
            <h4>见解：</h4>
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
                    <Button onClick={submitComment}>发布评论</Button>
                </div>
            </div>
            <div className="comments-list">
                {commentList}
            </div>
        </div>
    )
}
