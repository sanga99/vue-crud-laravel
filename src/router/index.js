import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import ProdsList from '../components/prods/ProdsList.vue';
import PkgsList from '../components/pkgs/PkgsList.vue';
import Vehicles from '../components/vehicles/VehiclesList.vue';
import SubscsList from '../components/subscs/SubscsList.vue';

import ProdView from '../components/prods/ProdView.vue';
import PkgView from '../components/pkgs/PkgView.vue';
import VehicleView from '../components/vehicles/VehicleView.vue';
import SubscView from '../components/subscs/SubscView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/prods',
            component: ProdsList,
        },
        {
            path: '/prods/:id',
            component: ProdView,
        },
        {
            path: '/pkgs',
            component: PkgsList,
        },
        {
            path: '/pkgs/:id',
            component: PkgView,
        },
        {
            path: '/vehicles',
            component: Vehicles,
        },
        {
            path: '/vehicles/:id',
            component: VehicleView,
        },
        {
            path: '/subscs',
            component: SubscsList,
        },
        {
            path: '/subscs/:id',
            component: SubscView,
        },
    ]
});

export default router;

