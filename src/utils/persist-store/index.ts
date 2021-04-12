import {persistence} from 'mobx-persist-store';
import {PersistenceStore} from 'mobx-persist-store/lib/types';
import {asyncStorageAdapter} from './adapters/local-storage';
import {PersistStoreOptions} from './types';

export const persistStore = <S>(store: S, {name, properties, delay = 200}: PersistStoreOptions): PersistenceStore<S> =>
    persistence({
        name,
        properties,
        adapter: asyncStorageAdapter,
        reactionOptions: {
            delay,
        },
    })(store);
