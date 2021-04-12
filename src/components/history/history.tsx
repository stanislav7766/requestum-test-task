import React from 'react';
import historyStyle from './history.scss';

type HistoryProps = {
    items: Array<string>;
};
export const History = ({items}: HistoryProps): JSX.Element => {
    const renderItem = (item: string, index: number): JSX.Element => (
        <div key={index} className={historyStyle.item}>
            {item}
        </div>
    );
    return (
        <div className={historyStyle.container}>
            <div className={historyStyle.title}>Search History:</div>
            <div className={historyStyle.items}>{items.map((item, index) => renderItem(item, index))}</div>
        </div>
    );
};
