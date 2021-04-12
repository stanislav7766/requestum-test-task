import {observer} from 'mobx-react-lite';
import React from 'react';
import {RepositoryItems} from 'types/repository';
import {Card, CardItems} from '~/components/card';
import {useRepositoriesStore} from '~/config/stores/repositories';
import reposStyle from './repositories.scss';

const mapperReposItems = <Obj,>(obj: Obj) =>
    Object.keys(obj).reduce((accum: CardItems, key: string) => {
        accum.push({prop: key, value: obj[key]});
        return accum;
    }, []);

export const Repositories = observer(
    (): JSX.Element => {
        const {repositories} = useRepositoriesStore();

        const renderRepo = repositories.map((repo, index) => {
            const {name, ...rest} = repo;
            const items = mapperReposItems<RepositoryItems>(rest);
            return <Card key={index} title={repo.name} items={items} />;
        });
        return (
            <div className={reposStyle.repositories}>
                <div className={reposStyle.container}>{renderRepo}</div>
            </div>
        );
    },
);
