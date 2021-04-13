import { createApp } from 'vue'
import App from './App.vue'
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import router from './router'

const app = createApp(App).use(router);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyANl9DNN_ULE4gENdDcVVt9OqdERIx6pYM',
    },
}).mount('#app')
// createApp(App).mount('#app')
