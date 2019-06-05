import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'LayoutBase',
    template: require('./LayoutBase.pug')
})
export class LayoutBase extends Vue {}
