import React, {createContext, useContext} from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { RootStore } from './store';

export const storeContext = createContext<RootStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(() => new RootStore());

    return (
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
    );
};

export const useStore = () => {
    const store = useContext(storeContext);
    if (!store) {
        throw new Error(
            'Store not found! Consider wrapping component in <Provider/>',
        );
    }
    return store;
};
