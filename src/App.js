import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.js';

const App = () => {
    return (
        <BrowserRouter>
            {/*<Header */}
            <Routes />
        </BrowserRouter>
    );
}

export default App;