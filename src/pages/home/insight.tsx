type DataType = {
    id: number;
    title: string;
    content: string;
    comment_num: number;
    share_num: number;
};

export const InsightArticles:DataType[] = [
    {
        id: 1,
        title: "为什么很多聪明的人，却一辈子在社会最底层？",
        content: "奇迹年： 有段时间，网上盛传张亮和杨国福两大麻辣烫巨头的创始人是亲戚，张亮原本在舅舅杨国福的店里打工，学到技术以后出去单干，创立了张亮麻辣烫。 这个说法…",
        comment_num: 83,
        share_num: 3,
    },
    {
        id: 2,
        title: "有没有哪本书，读完后感觉整个人生都打开了？",
        content: "林深见鹿： 最近看了恩格斯的《家庭、私有制和国家的起源》，从来没想到，一本马恩的书，能让我看到凌晨三点，拍案叫绝。 推荐大家都看一下，绝对不是空洞的理论，而是会颠覆大家对于婚姻的认知。 多读书，没坏处，见的…",
        comment_num: 22,
        share_num: 8,
    }
]
