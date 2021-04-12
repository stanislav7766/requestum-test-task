import React from 'react';
import cardStyle from './card.scss';

export type CardItems = Array<{prop: string; value: string}>;

type CardProps = {
    title: string;
    items: CardItems;
};

export const Card = ({title, items}: CardProps): JSX.Element => {
    return (
        <div className={cardStyle.container}>
            <div className={cardStyle.title}>{title}</div>
            <div className={cardStyle.body}>
                {items.map((item, index) => (
                    <div key={index}>
                        <span className={cardStyle.item}>{item.prop}: </span>
                        <span className={`${cardStyle.item} ${cardStyle.bold}`}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
