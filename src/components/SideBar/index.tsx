import React, {useEffect, useState} from "react";
import {Link} from 'umi';
import {GetArticleList} from "@/services/articles/article";
import "./index.less"

export default function SideBar(props: any) {

    const display = props.display

    const [articleList, setArticleList] = useState<API.Article[]>([])

    useEffect(() => {
        GetArticleList({page:1, size:20}).then((res) => {
            const articles = res.data?res.data:[]
            setArticleList(articles)
            console.log("请求返回值",  res.data)
        });
    }, []);

    const ArticlesComponents = articleList.map((article,index) =>
        <div key={index}  className="item">
            <div><Link to={"/detail/" + article.id?.toString() + ".html"}> {index+1}.{article.title} </Link></div>
        </div>
    );

    return (
        <div style={{height: "100%", display: display}} className="side" >
            <div style={{height: "100%", display: display}} className="side-content side-content-top">
                <div className="item">{ArticlesComponents}</div>
            </div>
        </div>
    );
}
