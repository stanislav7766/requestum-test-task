import {RepositoriesContext, repositoriesStore} from './repositories';
import {HistoryContext, historyStore} from './history';

export const storesConfig = [
    {Provider: RepositoriesContext.Provider, store: repositoriesStore},
    {Provider: HistoryContext.Provider, store: historyStore},
];
