declare namespace API {

    type Comment = {
        id?: number;
        username?: string;
        email?: string;
        content?: string;
        like_num?: number;
        updated_at?: string;
        created_at?: string;
    };

    type CommentListParams = {
        biz_id?: number;
        page?: number;
        size?: number;
    };
    type CommentListResp = {
        code?: number;
        message?: string;
        data?: [Comment];
    };


    type CommitCommentParams = {
        biz_id?: number;
        username?: string;
        email?: string;
        content?: string;
    }
    type CommitCommentResp = {
        code?: number;
        message?: string;
        data?: Comment;
    }

    type AddCommentLikeNumParams = {
        id?: number;
    }
    type AddCommentLikeNumResp = {
        code?: number;
        message?: string;
    }
}
