import request from 'umi-request';

export async function GetArticleDetail(body: API.ArticleDetailParams, options?: { [key: string]: any }) {
    return request<API.Article>('/api/v1.0/article/retrieve-article-detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}