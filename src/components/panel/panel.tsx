import React, {useCallback, useState} from 'react';
import panelStyle from './panel.scss';
import {History} from '~/components/history';
import {SearchInput} from '~/components/search-input';
import {fetchRepositories} from '~/api/github';
import {debounce} from '~/utils/debounce';
import {useWindowDimensions} from '~/hooks/use-window-dimensions';
import {isMobile} from '~/utils/is-mobile';
import {observer} from 'mobx-react-lite';
import {useHistoryStore} from '~/config/stores/history';

export const Panel = observer(
    (): JSX.Element => {
        const {history} = useHistoryStore();

        const windowSize = useWindowDimensions();
        const inputStyle: React.CSSProperties = !isMobile(windowSize.width) ? {width: '90%', marginLeft: '0px'} : {};

        const [inputValue, setInputValue] = useState<string>('');

        const debouncedSave = useCallback(
            debounce((newValue: string) => fetchRepositories({payload: {query: newValue}}), 1000),
            [],
        );

        const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
            setInputValue(e.target.value);
            debouncedSave(e.target.value);
        };

        return (
            <div className={panelStyle.panel}>
                <div className={panelStyle.container}>
                    <SearchInput
                        style={inputStyle}
                        onChange={onChangeText}
                        value={inputValue}
                        name="search-repos"
                        placeholder="Type some repo"
                    />
                    <History items={history} />
                </div>
            </div>
        );
    },
);
