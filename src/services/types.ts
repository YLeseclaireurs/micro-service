declare namespace API {
    type Article = {
        id?: number;
        username?: string;
        city?: string;
        topic?: string;
        content?: string;
        updated_at?: string;
        created_at?: string;
    };

    type ArticleDetailParams = {
        id?: number;
    };


    type ArticleListParams = {
        page?: number;
        size?: number;
    };

    type ArticleList = {
        code?: number;
        message?: string;
        data?: [Article];
    };
}
