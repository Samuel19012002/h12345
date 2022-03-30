import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import '@oruga-ui/theme-bulma/dist/bulma.css'
import App from './App.vue'
import CInput from './components/c-input.vue'

import './styles/_all.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    routes,
    history: createWebHistory(),
})

console.log(bulmaConfig)

createApp(App)
    .use(router)
    .use(Oruga, {
        ...bulmaConfig,
        iconPack: 'fas',
    })
    .component('CInput', CInput)
    .mount('#app')
