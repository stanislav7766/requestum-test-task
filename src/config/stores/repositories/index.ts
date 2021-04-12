import {createContext, useContext} from 'react';
import {RepositoriesStore} from '~/stores/repositories';

export const repositoriesStore = new RepositoriesStore();
export const RepositoriesContext = createContext<RepositoriesStore>({} as RepositoriesStore);

export const useRepositoriesStore = (): RepositoriesStore => useContext(RepositoriesContext);
