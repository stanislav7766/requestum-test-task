import React from 'react';
import inputStyle from './input.scss';

type InputProps = {
    placeholder: string;
    value: string;
    name: string;
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    style: React.CSSProperties;
};
export const SearchInput = ({placeholder, value, name, onChange, style}: InputProps): JSX.Element => (
    <input
        className={`${inputStyle.input}`}
        type="text"
        style={style}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
    />
);
