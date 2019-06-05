import Vue from 'vue';
import Component from 'vue-class-component';

import { LayoutBase } from '_components/_shared/LayoutBase';

@Component({
    name: 'AboutPage',
    components: {
        LayoutBase
    },
    template: require('./AboutPage.pug')
})
export default class AboutPage extends Vue {
}