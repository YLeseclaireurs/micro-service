import React from "react";
import {Link} from 'umi';
import "./index.less"

export default function Catalogue() {
    return (
        <div className="page_up_down">
            <div className="topic">读书会 · 目录 · 12篇</div>
            <div className="album_read_bd">
                <span className="album_read_nav_item album_read_nav_prev">
                    <Link to="/">
                        <span className="album_read_nav_inner">
                            <span className="album_read_nav_btn">《上一篇</span>
                            <span className="album_read_nav_btn">假期准备读的2本书</span>
                        </span>
                    </Link>
                </span>
                <span className="album_read_nav_item album_read_nav_next">
                    <Link to="/">
                        <span className="album_read_nav_inner">
                            <span className="album_read_nav_btn">下一篇》</span>
                            <span className="album_read_nav_btn">11月读的2本书</span>
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    );
}