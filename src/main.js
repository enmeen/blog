import Vue from 'vue'
import VueRouter from 'vue-router'
import WrapBox from './components/Wrap.vue'

/*Vue.use(VueRouter);
// 提出到一个单独的文件
const routes = [
    /!*{path: '/', component: Home},
    {path: '/content', component: Content},
    {path: '/info', component: Info},*!/
];
const router = new VueRouter({
    routes
});*/

new Vue({
    el: '#body',
    /*router,*/
    components: {WrapBox}
});


/*
new Vue({
    el: '#nav',
    render: a => a(Nav)
});
new Vue({
    el: '#main',
    render: a => a(Main)
});
*/

