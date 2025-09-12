import React from 'react';
import './styles/index.scss';
import { AuthLayout, MainLayout } from 'app/layouts';
import { IntlProvider } from 'react-intl';

const App = () => (
    <IntlProvider locale="en">
        <div className="app">
            <AuthLayout />
        </div>
    </IntlProvider>
);

export default App;
