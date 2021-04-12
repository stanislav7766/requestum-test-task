import {IFetchRepositories, OFetchRepositories} from 'types/api/github';
import {Repositories, Repository} from 'types/repository';
import {historyStore} from '~/config/stores/history';
import {repositoriesStore} from '~/config/stores/repositories';
import {GITHUB_REPOSITORIES} from '~/constants/url';
import {makeRequest} from '~/utils/api';
import {isEmptyString} from '~/utils/common';
import {mapRepos} from '~/utils/api/map-response';

export const fetchRepositories = async ({payload}: IFetchRepositories): Promise<OFetchRepositories> => {
    const {query} = payload;
    const empty = isEmptyString(query);

    if (empty) return {success: false, reason: ''};

    try {
        const requester = makeRequest({
            method: 'GET',
            path: GITHUB_REPOSITORIES,
            headers: {Accept: 'application/vnd.github.v3+json'},
            params: {q: query},
        });

        const response = await requester;
        const data = await response.json();
        if (!response.ok) return {success: false, reason: 'Something wrong'};

        const repositories: Repositories = mapRepos<Repository>(data?.items, ['name', 'description', 'language']);

        repositoriesStore.setRepositories(repositories);
        historyStore.setHistory(query);

        return {success: true, reason: ''};
    } catch (error) {
        repositoriesStore.setRepositories([]);
        return {success: false, reason: error.message};
    }
};
