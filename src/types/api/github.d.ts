declare module 'types/api/github' {
    export interface IFetchRepositories {
        payload: {
            query: string;
        };
    }

    export interface OFetchRepositories {
        success: boolean;
        reason: string;
    }
}
