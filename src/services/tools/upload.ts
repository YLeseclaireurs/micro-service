import request from 'umi-request';


type UploadRes = {
    code?: number;
    message?: string;
    data?: UploadData;
}

type UploadData = {
    url?: string;
}

export async function UploadImage(body: any, options?: { [key: string]: any }) {
    return request<UploadRes>('/api/v1.0/tools/upload-image', {
        method: 'POST',
        timeout: 10000,
        data: body,
        ...(options || {}),
    });
}