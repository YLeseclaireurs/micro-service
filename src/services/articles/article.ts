import request from 'umi-request';

export async function GetArticleDetail(body: API.ArticleDetailParams, options?: { [key: string]: any }) {
    return request<API.ArticleDetailResp>('/api/v1.0/article/retrieve-article-detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

export async function GetArticleList(body: API.ArticleListParams, options?: { [key: string]: any }) {
    return request<API.ArticleListResp>('/api/v1.0/article/retrieve-article-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

export async function CommitArticle(body: API.CommitArticleParams, options?: { [key: string]: any }) {
    return request<API.CommitArticleResp>('/api/v1.0/article/publish-article', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

