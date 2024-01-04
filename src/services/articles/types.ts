declare namespace API {

    // 文章实体
    type Article = {
        id?: number;
        username?: string;
        city?: string;
        topic?: string;
        content?: string;
        updated_at?: string;
        created_at?: string;
    };


    // 文章详情
    type ArticleDetailParams = {
        id?: number;
    };
    type ArticleDetailResp = {
        code:number;
        message:string;
        data: Article;
    };


    // 文章列表
    type ArticleListParams = {
        arch?: string;
        page?: number;
        size?: number;
    };
    type ArticleListResp = {
        code?: number;
        message?: string;
        data?: [Article];
    };


    // 文章内容发布接口参数
    type CommitArticleParams = {
        content?:string;
        arch?: string;
        topic?: string;
        title?: string;
    }
    type CommitArticleData = {
        id?: string;
        title?: string;
    }
    type CommitArticleResp = {
        code?: number;
        message?: string;
        data?: CommitArticleData;
    }
}
