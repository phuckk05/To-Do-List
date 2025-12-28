import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/features/todo/home';
import { createTable } from './src/database/schema';
import { useEffect } from 'react';

export default function App() {

    useEffect(() => {
        const initDB = async () => {
            await createTable();
        };

        initDB();
    }, []);

    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}