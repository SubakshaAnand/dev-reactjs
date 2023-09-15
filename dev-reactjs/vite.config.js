import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(() => {
    return {
        server: {
            open: true,
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
        define: {
            'process.env': {},
        },
        build: {
            outDir: 'build',
        },
        plugins: [
            react({
                jsxImportSource: '@emotion/react',
            
            }),
            svgr({ svgrOptions: { icon: true } })],
    };
});