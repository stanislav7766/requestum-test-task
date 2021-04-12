import {makeAutoObservable} from 'mobx';
import {Repositories} from 'types/repository';

export class RepositoriesStore {
    constructor() {
        makeAutoObservable(this);
    }

    repositories: Repositories = [];

    setRepositories = (repos: Repositories): void => {
        this.repositories = repos;
    };
}
