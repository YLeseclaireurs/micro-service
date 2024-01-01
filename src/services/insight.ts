type DataType = {
    id: number;
    title: string;
    content: string;
    like_num: number;
    star_num: number;
    share_num: number;
};

const insightArticles:DataType[] = [
    {
        id: 1,
        content: "我们显然无法了解自己的无知程度，无法确切了解自己所生活的这个世界的不确定性。",
        avatar: "https://picx.zhimg.com/8589ed3e65ebd6011d8f9268696688af_l.jpg?source=2c26e567",
        like_num: 83,
        star_num: 3,
        share_num: 0,
    },
    {
        id: 2,
        uid: 2,
        username: "星",
        content: "其实是直觉引导的行为。以为是毋庸置疑的真理，其实是记忆累加变成的习惯。",
        avatar: "https://pic1.zhimg.com/v2-93446443e78697dbe2e4a052c5a47b12_l.jpg?source=32738c0c",
        like_num: 22,
        star_num: 8,
        share_num: 0,
    }
]

export default ()=> insightArticles;
