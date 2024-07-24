import { defineConfig } from 'vitepress'

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "📺",
//   description: "A VitePress Site",

//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],
    
//     /*
//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//     */
//   }
// })

// 1. import the defineConfigWithTheme function
import { defineConfigWithTheme } from 'vitepress'
// 2. import configuration objects that need to be inherited
import escookConfig from '@escook/vitepress-theme/config'


export default defineConfigWithTheme({
  // 3. specify the configuration to inherit via extended
  extends: escookConfig,
  title: 'TheWJNing♥️Movies📺',
  description: 'TheWJNing Subtitle Work & Comment on film website',

  themeConfig: {
    logo: '/logo_gif.gif',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/components/Friends_Subtitle' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '免责声明Disclaimers', link: '/components/免责声明Disclaimers' },
          { text: '老友记字幕', link: '/components/Friends_Subtitle' },
          { text: 'Markdown Examples', link: '/components/markdown-examples' },
          { text: 'Runtime API Examples', link: '/components/api-examples' }
        ]
      }
    ],
    // 4. through this configuration item, turn off the confetti effect of mouse clicks
    confetti: false
    // omit other configuration items...
  }
})