import React, { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import { observer } from 'mobx-react-lite';

import { StoreProvider } from 'src/store/context';

import { App } from './App';

import './index.scss';

const Index = observer(() => {

    return (
        <App />
    );
});

ReactDOM.render(<StoreProvider><Index/></StoreProvider>, document.getElementById('root'));