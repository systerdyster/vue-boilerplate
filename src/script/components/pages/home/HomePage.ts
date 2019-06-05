import Vue from 'vue';
import Component from 'vue-class-component';

import { LayoutBase } from '_components/_shared/LayoutBase';

@Component({
    name: 'HomePage',
    components: {
        LayoutBase
    },
    template: require('./HomePage.pug')
})
export default class HomePage extends Vue {
}