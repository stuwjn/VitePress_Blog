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
  title: '📺',
  description: 'A VitePress Site',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    // 4. through this configuration item, turn off the confetti effect of mouse clicks
    confetti: false
    // omit other configuration items...
  }
})