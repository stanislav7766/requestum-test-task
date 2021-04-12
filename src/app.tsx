import React from 'react';
import {Header} from './components/header';
import {Landing} from './pages/landing';
import {storesConfig} from './config/stores';
import {ComposeStore} from './components/compose-store';
import '~/common-styles/app.scss';

const Application = (): JSX.Element => (
    <>
        <Header />
        <Landing />
    </>
);

export const App = (): JSX.Element => <ComposeStore Child={<Application />} wrappers={storesConfig} />;
