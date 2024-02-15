import React from "react";
import {data} from "@/pages/content/data";
import "./index.less"

export default function SomeLikes() {
    const SomeLikes = data.map((item, index) =>
        <div key={index} className="some_likes_item">
            <div className="some_likes_title">{item.title}</div>
            <div className="some_likes_desc">{item.desc}</div>
        </div>
    );

    return (
        <div className="some_likes">
            <div className="function_hd js_related_title">喜欢此内容的人还喜欢</div>
            {SomeLikes}
        </div>
    );
}