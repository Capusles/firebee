import { defineConfig } from 'dumi';
import path from 'path';


export default defineConfig({
  mode: 'site',
  alias: {
    'firebee': path.resolve(__dirname, './src'),
    '@/src': path.resolve(__dirname, './src'),
  },
  extraBabelPlugins: [
    ['import', {libraryName: 'antd', style: 'css'}, 'antd'],
  ],
  menus: {
    '/component': [
      {
        title: 'CRUD',
        children: [
          'tab-create/index.md',
        ],
      },
    ],
  },
  navs: [null],
});
