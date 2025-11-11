import type { Preview } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { store } from '../src/store/store';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        Story => (
            <Provider store={store}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </Provider>
        ),
    ],
};

export default preview;
