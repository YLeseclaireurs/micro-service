import { useRequest } from 'ahooks';
import { Col, Row } from 'antd';
import styles from "@/pages/content/index.less";



import React, { useState, useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import  "./index.less"
import { Button } from 'antd';

import Prism from 'prismjs';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCellPlugin from '@toast-ui/editor-plugin-table-merged-cell';
import chartPlugin from '@toast-ui/editor-plugin-chart';
import umlPlugin from '@toast-ui/editor-plugin-uml';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';



import {GetArticleDetail} from "@/services/article";



const initData =`
11月比较忙，重读了之前读过的2本好书： 《思考快与慢》 《错误的行为》 画外音：坚持一件事很难，但读书，真的有用。

《思考快与慢》 在生活中，我们会经常下意识地用直觉判断问题。这样快捷又省力，不用做复杂的思考活动。

我们累积记忆，让大脑给我们形成一套习惯的认知模式，冠上一些常规的印象。但是，我们这些由直觉与记忆产生的想法，不仅草率，而且会产生很多偏见，甚至是错误。

更糟糕的是，我们常常察觉不到这种偏见与错误。以为做出的是理智决定，其实是直觉引导的行为。以为是毋庸置疑的真理，其实是记忆累加变成的习惯。

《思考快与慢》就揭示了一个可怕的真相：我们的大脑太容易上当了，常常高估对这个世界的理解，我们根本没有自己想象的那么理性。

原来在我们的大脑里，有两个系统，作者将它称为系统1和系统2。

* 系统1是快思考，类似我们常说的直觉，帮助我们在生活琐事上快速作出反应，比如怎么穿衣服、怎么刷牙等，这能节省日常生活的脑力损耗。
* 系统2是慢思考，面对认知，理解，思考等稍稍复杂的问题，必须交给系统2，也就是慢思考处理，它更理性、更谨慎。

但是慢思考实在是太累了，太消耗能量，太反人性了，快思考就成了我们现实生活中的主宰。这种直觉式的思考会经常让我们在判断与决策中产生偏见，错过了更好的选择。 改变一个人对人性的看法很难，改变一个人对自身阴暗面的看法就更难了。

我们能相互交流，因为我们关于世界的知识和对文字的运用水平都相当。

我们大脑有说不清楚的局限:我们对自己认为熟知的事物确信不疑，我们显然无法了解自己的无知程度，无法确切了解自己所生活的这个世界的不确定性。

书里不仅详细阐述了这种思考模式给我们带来的负面影响，同时通过经典有趣的行为实验来引导我们认识习惯性思考模式的弊端。

书告诉我们在什么情况下可以相信自己的直觉，什么时候又不能相信。并有效实用的办法能帮助我们做出理性的决策，避免那些常常使我们陷入麻烦的思维失误。


**调研：** 
朋友，最近读了一些什么书？ 欢迎推荐给我，我转荐好书给大家？


2013年2月10日，由文章主演，周星驰执导的电影《西游·降魔篇》在全国上映，该片全球票房破2.15亿美元，打破华语片票房纪录 [17]；9月2日，文章首部导演作品《小爸爸》完成制作，在东方、浙江、深圳、陕西四大卫视并同步优酷、土豆网双平台首播；9月，参演姜文执导的动作喜剧《一步之遥》 [18]；11月，凭借抗战剧《雪豹》中的演出获得第12届四川电视节金熊猫奖长篇电视剧类最佳男演员奖，这是他获得的第一个电视剧类专业个人表演奖项。
##### <span style="color: #67a38f">文章履历简介</span>
* 2017年3月2日，凭借《少帅》获得2017中国电视剧品质盛典年度品质表演剧星；3月20日，文章执导并参演的《剃刀边缘》在东方卫视和北京卫视播出。11月11日，指导的由马云、甄子丹、吴京、邹市明主演的微电影《功守道》上映。 [26]
* 2018年9月30日，主演的喜剧动作电影《胖子行动队》上映。 [8]
* 2020年5月29日，主演抗日电影《雪豹之虎啸军魂》 [27]，再度饰演周卫国。
* 2021年8月20日，主演的电影《测谎人》上映。 [47]
* 2022年11月，参演上剧场专属版《如梦之梦》 [53]。
* 2023年3月30日至4月9日，出演话剧《宝岛一村》；8月23日至26日，参演的话剧《钟馗嫁妹》在北京首都剧场上演。 [55] [57]
$$plantuml
@startuml
Alice -> Bob: 认证请求
Bob -> Alice: 认证失败
group 我自己的标签 [我自己的标签2]
    Alice -> Log : 开始记录攻击日志
    loop 1000次
        Alice -> Bob: DNS攻击
    end
    Alice -> Log : 结束记录攻击日志
end
@enduml
$$

\`\`\`js
type commentService struct{
    commentDao dao.CommentDao
}

func NewCommentService() commentService {
    return commentService{
        commentDao: daoImpl.NewCommentDao(),
    }
}

func (r commentService) GetByID(ctx context.Context, id int64) (comment *service.Comment, err error){
    return r.commentDao.GetByID(ctx, id)
}

func (r commentService) GetCommentList(ctx context.Context, page, size int64) (comments []*service.Comment, err error) {
    return r.commentDao.GetCommentList(ctx, page, size)
}
\`\`\`
$$chart
,category1,category2
Jan,21,23
Feb,31,17

type: column
title: Monthly Revenue
x.title: Month
y.title: Amount
y.min: 1
y.max: 40
y.suffix: $
$$

`;

export default function HomePage() {

    const params = {
        id:1
    };
    const {data } = useRequest(() => GetArticleDetail(params));
    console.log(data)



    const editor_ref = useRef<Editor>(null);
    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300,
    };

    return (
          <Row className={styles.center}>
              <Col className={styles.pad} xs={24} sm={24} md={24} lg={24} xl={{ span: 10, offset: 7}} xxl={{ span: 8, offset: 8}}>
                  <div>
                      <h2>镀金时代</h2>
                      <span><a className={styles.author}>栗·YLeseclaireurs</a> <span className={styles.tag}> 2023-12-05 19:34 发表于北京 </span></span>
                      <div className="App" >
                          <Viewer
                              ref={editor_ref}
                              initialValue={initData}
                              plugins={[
                                  [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                                  umlPlugin,
                                  [chartPlugin, chartOptions],
                                  tableMergedCellPlugin,
                              ]}
                          />
                      </div>
                      <p>
                          #读书会 12
                      </p>
                  </div>
              </Col>
          </Row>
    );
}
