import React from "react";
import {Link} from 'umi';
import "./index.less"

export default function SomeLikes(props: any) {

    const recommends = props?.recommends

    const count = recommends?.length

    const SomeLikes = recommends?.map((item: API.Article, index: number) =>
        <div key={index} className="some_likes_item"  style={{borderBottom: `${index+1==count ? "none": "1px solid #f5f5f5"}` }}>
            <div className="some_likes_title"><Link to={"/detail/" + item.id?.toString() + ".html"}>{item.title}</Link></div>
            <div className="some_likes_desc"><Link to={"/detail/" + item.id?.toString() + ".html"}>{item.topics}</Link></div>
        </div>
    );

    return (
        <div className="some_likes">
            <div className="function_hd js_related_title">喜欢此内容的人还喜欢</div>
            {SomeLikes}
        </div>
    );
}
