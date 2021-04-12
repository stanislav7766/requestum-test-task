import React from 'react';
import {Panel} from '~/components/panel';
import {Repositories} from '~/components/repositories';
import landingStyle from './landing.scss';
import layoutStyle from '~/common-styles/layout.scss';

export const Landing = (): JSX.Element => (
    <div className={`${landingStyle.landing} ${layoutStyle.px30}`}>
        <Panel />
        <Repositories />
    </div>
);
