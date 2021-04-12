import {makeAutoObservable} from 'mobx';
import {History, Query} from 'types/history';

export class HistoryStore {
    constructor() {
        makeAutoObservable(this);
    }

    history: History = [];

    get historyLength(): number {
        return this.history.length;
    }
    _pushHistory = (query: Query): void => {
        this.history = [query, ...this.history];
    };
    _sliceHistory = (query: Query): void => {
        this.history = [query, ...this.history.slice(0, this.historyLength - 1)];
    };
    setHistory = (query: Query): void => {
        if (this.historyLength < 5) {
            this._pushHistory(query);
            return;
        }
        this._sliceHistory(query);
    };
}
