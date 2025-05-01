import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

export default withPwa(
  defineConfig({
    vite: {
      plugins: [
        SearchPlugin({
          // 支持中文分词
          tokenize: 'full',
          previewLength: 62,
          buttonLabel: '搜索',
          placeholder: '搜索文档',
        }),
      ],
    },
  }),
)
