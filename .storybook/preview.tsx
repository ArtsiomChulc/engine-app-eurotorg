import type { Preview } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router';
import { Layout } from '../src/app/layout/Layout';

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
        (Story) =>
            <BrowserRouter>
                <Layout>
                    <Story/>
                </Layout>
            </BrowserRouter>
    ]
};

export default preview;
