type Method = 'GET' | 'POST';

type MakeRequest<Params> = {
    method: Method;
    path: string;
    headers: HeadersInit;
    params: Params;
};

const createQueryParams = <Params extends {[key: string]: string}>(params: Params): string =>
    Object.keys(params)
        .map(k => `${k}=${encodeURI(params[k])}`)
        .join('&');

export const makeRequest = <Params extends {[key: string]: string}>({
    method,
    path,
    headers,
    params,
}: MakeRequest<Params>): Promise<Response> => {
    const url = path + (path.indexOf('?') === -1 ? '?' : '&') + createQueryParams<Params>(params);

    return fetch(url, {method, headers});
};
