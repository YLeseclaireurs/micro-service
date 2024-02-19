declare namespace API {

    // 文章实体
    type Article = {
        id?: number;
        title?: string;
        url_token?: string;
        username?: string;
        city?: string;
        category?: string;
        topics?: string;
        brief?: string;
        content?: string;
        comment_nums?: number;
        share_nums?: number;
        updated_at?: string;
        created_at?: string;
    };

    type ArticleContentDetail = {
        article?: Article;
        prev?:Article;
        next?:Article;
        total?:number;
        recommends?: [Article];
    }


    // 文章详情
    type ArticleDetailParams = {
        id?: number;
    };
    type ArticleDetailResp = {
        code:number;
        message:string;
        data: ArticleContentDetail;
    };


    // 文章列表
    type ArticleListParams = {
        category?: string;
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
        title?: string;
        url_token?: string;
        category?:string;
        topics?: string;
        content?: string;
    }
    type CommitArticleResp = {
        code?: number;
        message?: string;
        data?: Article;
    }
}
