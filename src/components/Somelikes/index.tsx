import React from "react";
import {data} from "@/pages/content/data";
import "./index.less"

export default function SomeLikes(props: any) {

    const recommends = props.recommends

    const count = recommends?.length

    const a = true

    const SomeLikes = recommends?.map((item: API.Article, index: number) =>
        <div key={index} className="some_likes_item"  style={{borderBottom: `${index+1==count ? "none": "1px solid #f5f5f5"}` }}>
            <div className="some_likes_title">{item.title}</div>
            <div className="some_likes_desc">{item.topics}</div>
        </div>
    );

    return (
        <div className="some_likes">
            <div className="function_hd js_related_title">喜欢此内容的人还喜欢</div>
            {SomeLikes}
        </div>
    );
}
