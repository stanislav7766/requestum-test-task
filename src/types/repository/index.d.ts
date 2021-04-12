declare module 'types/repository' {
    export type Repository = {
        name: string;
        description: string;
        language: string;
    };
    type RepositoryItems = Omit<Repository, 'name'>;

    export type Repositories = Repository[];
}
