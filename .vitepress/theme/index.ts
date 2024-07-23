// // https://vitepress.dev/guide/custom-theme
//  import { h } from 'vue'
//  import type { Theme } from 'vitepress'
//  import DefaultTheme from 'vitepress/theme'
//  import './style.css'

//  export default {
//    extends: DefaultTheme,
//    Layout: () => {
//      return h(DefaultTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//    },
//    enhanceApp({ app, router, siteData }) {
//      // ...
//    }
//  } satisfies Theme


import { h } from 'vue'
import type { Theme } from 'vitepress'
// 1. import vitepress theme
import escookTheme from '@escook/vitepress-theme'
// 2. import matching CSS styles (this step cannot be omitted)
import '@escook/vitepress-theme/style.css'
// import your custom styles
import './style.css'

export default {
  // 3. specify the theme to inherit and perform secondary extensions based on this theme
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // expand custom features...
  }
} satisfies Theme