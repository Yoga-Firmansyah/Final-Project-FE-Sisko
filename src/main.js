import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mixin({

    methods: {

        moneyFormat(number) {
            const isNegative = number < 0;
            let absoluteNumber = Math.abs(number);
            let reverse = absoluteNumber.toString().split('').reverse().join(''),
                thousands = reverse.match(/\d{1,3}/g);
            thousands = thousands.join('.').split('').reverse().join('');
            return isNegative ? '-' + thousands : thousands;
        },
    }
})

app.mount('#app')
