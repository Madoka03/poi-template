import Vue from 'vue';

import Router from 'vue-router';

import ExampleRoute from './routes/ExampleRoute.vue';

Vue.use(Router);


let VueRouter = new Router({
    routes: [
        {
            path: '/',
            redirect: '/example'
        },
        {
            path: '/example',
            component: ExampleRoute,
        }
    ]
});

VueRouter.beforeEach((to, from, next) => {

    next();

});

export default VueRouter;