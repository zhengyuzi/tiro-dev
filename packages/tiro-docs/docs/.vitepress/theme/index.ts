import DefaultTheme from 'vitepress/theme'
import Example from '../app/components/example.vue'
import ExampleTable from '../app/components/example-table.vue'
import ExampleIcon from '../app/components/example-icon.vue'
import Layout from '../app/components/Layout.vue'
import Tiro from '@tiro/ui'
import '../app/style/custom.css'

export default {
  NotFound: DefaultTheme.NotFound,
  Layout,
  enhanceApp({ app }) {
    app.component('ti-example', Example)
    app.component('ti-example-table', ExampleTable)
    app.component('ti-example-icon', ExampleIcon)
    app.use(Tiro)
  }
}
