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

import ProdUpdate from '../components/prods/ProdUpdate.vue';
import PkgUpdate from '../components/pkgs/PkgUpdate.vue';
import VehicleUpdate from '../components/vehicles/VehicleUpdate.vue';
import SubscUpdate from '../components/subscs/SubscUpdate.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
        },
        // prods
        {
            path: '/prods',
            component: ProdsList,
        },
        {
            path: '/prods/:id',
            component: ProdView,
        },
        {
            path: '/prods/update/:id',
            component: ProdUpdate,
        },
        // pkgs
        {
            path: '/pkgs',
            component: PkgsList,
        },
        {
            path: '/pkgs/:id',
            component: PkgView,
        },
        {
            path: '/pkgs/update/:id',
            component: PkgUpdate,
        },
        // vehicles
        {
            path: '/vehicles',
            component: Vehicles,
        },
        {
            path: '/vehicles/:id',
            component: VehicleView,
        },
        {
            path: '/vehicles/update/:id',
            component: VehicleUpdate,
        },
        // subscs
        {
            path: '/subscs',
            component: SubscsList,
        },
        {
            path: '/subscs/:id',
            component: SubscView,
        },
        {
            path: '/subscs/update/:id',
            component: SubscUpdate,
        },
    ]
});

export default router;

