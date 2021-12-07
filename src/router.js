import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () =>
                import ('./views/Profile.vue')
        },

        {
            path: '/user',
            name: 'user',
            // lazy-loaded
            component: () =>
                import ('./views/BoardUser.vue')
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            // lazy-loaded
            component: () =>
                import ('./views/Dashboard.vue')
        },

        {
            path: '/listspace',
            name: 'listspace',
            // lazy-loaded
            component: () =>
                import ('./views/Listspace.vue')
        },
        {
            path: '/basic:id',
            name: 'basic',
            // lazy-loaded
            component: () =>
                import ('./views/Basic.vue')
        },

        {
            path: '/dashboardtwo',
            name: 'dashboardtwo',
            // lazy-loaded
            component: () =>
                import ('./views/Dashboardtwo.vue')
        },
        {
            path: '/description:id',
            name: 'description',
            // lazy-loaded
            component: () =>
                import ('./views/Description.vue')
        },
        {
            path: '/location:id',
            name: 'location',
            // lazy-loaded
            component: () =>
                import ('./views/Location.vue')
        },
        {
            path: '/amenities:id',
            name: 'amenities',
            // lazy-loaded
            component: () =>
                import ('./views/Amenities.vue')
        },
        {
            path: '/photo:id',
            name: 'photo',
            // lazy-loaded
            component: () =>
                import ('./views/Photo.vue')
        },
        {
            path: '/price:id',
            name: 'price',
            // lazy-loaded
            component: () =>
                import ('./views/Pricing.vue'),
        },

        {
            path: '/booking:id',
            name: 'booking',
            // lazy-loaded
            component: () =>
                import ('./views/Booking.vue')
        },
        {
            path: '/parent',
            name: 'parent',
            // lazy-loaded
            component: () =>
                import ('./views/Parent.vue')
        },
        {
          path: '/copy',
          name: 'copy',
          // lazy-loaded
          component: () =>
              import ('./views/Justcopy.vue')
      },
        {
            path: '/listing',
            name: 'listing',
            // lazy-loaded
            component: () =>
                import ('./views/Listing.vue')
        },
        {
            path: '/singlelist:slug',
            name: 'singlelist',
            // lazy-loaded
            component: () =>
                import ('./views/SingleListProperty.vue')
        },
       
    ]
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/home', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // try to access a restricted page + not logged in
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});