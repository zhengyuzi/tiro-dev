import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPlugin, tablePlugin } from './app/plugins/md-it-plugins'

export default defineConfig({
  title: 'Tiro-UI',
  cleanUrls: 'without-subfolders',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    algolia: {
      appId: '7IAU1WLYJ0',
      apiKey: 'b593f332d7e31267d72e4bb239f0eb06',
      indexName: 'tiro-ui'
    },
    nav: [
      {
        text: '指南',
        link: '/guide/introduction',
        activeMatch: '/guide/'
      },
      {
        text: '组件',
        link: '/components/input',
        activeMatch: '/components/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [{ text: '关于 Tiro UI', link: '/guide/introduction' }]
        },
        {
          text: '快速上手',
          items: [{ text: '安装', link: '/guide/install' }]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Button 按钮', link: '/components/button' }
          ]
        },
        {
          text: '表单组件',
          items: [{ text: 'Input 输入框', link: '/components/input' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhengYuZi/tiro-dev' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(...containerPlugin())
      md.use(...tablePlugin())
    }
  },
  vite: {
    plugins: [vueJsx()]
  }
})
