import {createContext, useContext} from 'react';
import {HistoryStore} from '~/stores/history';
import {persistStore} from '~/utils/persist-store';

export const historyStore = persistStore<HistoryStore>(new HistoryStore(), {
    name: 'historyStore',
    properties: ['history'],
});

export const HistoryContext = createContext<HistoryStore>({} as HistoryStore);

export const useHistoryStore = (): HistoryStore => useContext(HistoryContext);
