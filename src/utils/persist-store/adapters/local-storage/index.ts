import {StorageAdapter} from 'mobx-persist-store';

function readStore(name: string): Promise<string | undefined> {
    return new Promise(resolve => {
        const data = localStorage.getItem(name) ?? '{}';
        resolve(data);
    });
}

function writeStore(name: string, content: string): Promise<void | Error> {
    return new Promise(resolve => {
        localStorage.setItem(name, content);
        resolve();
    });
}

export const asyncStorageAdapter = new StorageAdapter({
    read: readStore,
    write: writeStore,
});
