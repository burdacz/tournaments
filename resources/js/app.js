import Vue from 'vue';

import { App, plugin } from '@inertiajs/inertia-vue';
import vuetify from './plugins/vuetify';
import PortalVue from 'portal-vue';

Vue.mixin({ methods: { route }}); // route is from @routes directive in app.blade.php
Vue.use(PortalVue);
Vue.use(plugin);

const app = document.getElementById('app');

import moment from 'moment';
moment.locale('en');
Object.defineProperty(Vue.prototype, '$moment', { value: moment });

new Vue({
    vuetify,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(app)
