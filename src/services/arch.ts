type DataType = {
    id: number;
    title: string;
    content: string;
    like_num: number;
    star_num: number;
    share_num: number;
};

const archArticles:DataType[] = [
    {
        id: 1,
        title: "美国人真的会把外衣、内衣、袜子和鞋子全部放在洗衣机一起洗吗？",
        content: "越之见： 社会切切实实就是一个草台班子。 越早洞察到这个真相，就能越早活开。 人所有的唯唯诺诺、自卑、自我否定、压抑以及失败都源于把社会和周围的人想得太强…",
        like_num: 83,
        star_num: 3,
        share_num: 0,
    },
    {
        id: 2,
        title: "旅行的意义是什么？",
        content: "曾经年少： 因为你是中国人，有幸存者偏差。 平行世界里，把中国抽掉，你会发现，美帝现在的国势正鲜花着锦、烈火烹油、如日中天、独步天下。 舆论普遍认为美帝的…",
        like_num: 22,
        star_num: 8,
        share_num: 0,
    }
]

export default ()=> archArticles;
