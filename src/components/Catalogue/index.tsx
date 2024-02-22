import React from "react";
import {Link} from 'umi';
import "./index.less"

export default function Catalogue(props:any) {

    const prev = props.prev
    const next = props.next
    const total = props.total

    let showPrev = false
    let showNext = false
    let prevURL, nextURL = ""
    if (prev != null) {
        showPrev = true
        prevURL = "/detail/" + prev?.id +".html"
    }
    if (next != null) {
        showNext = true
        nextURL = "/detail/" + next?.id +".html"
    }

    return (
        <div className="page_up_down">
            <div className="topic">读书会 · 目录 · {total}篇</div>
            <div className="album_read_bd">
                {
                    showPrev &&
                    <span className="album_read_nav_item album_read_nav_prev">
                        <Link to={prevURL?prevURL:"/"}>
                            <span className="album_read_nav_inner">
                                <span className="album_read_nav_btn">《上一篇</span>
                                <span className="album_read_nav_btn">假期准备读的2本书</span>
                            </span>
                        </Link>
                    </span>
                }
                {
                    showNext&&
                    <span className="album_read_nav_item album_read_nav_next">
                    <Link to={nextURL}>
                        <span className="album_read_nav_inner">
                            <span className="album_read_nav_btn">下一篇》</span>
                            <span className="album_read_nav_btn">11月读的2本书</span>
                        </span>
                    </Link>
                </span>
                }
            </div>
        </div>
    );
}
