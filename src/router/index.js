import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Dashboard from '@/components/Dashboard';
import VerRodizio from '@/components/VerRodizio';
import NovoRodizio from '@/components/NovoRodizio';
import EditarRodizio from '@/components/EditarRodizio';
import Registrar from '@/components/Registrar';
import Login from '@/components/Login';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        login: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Registrar,
      meta: {
        login: true
      }
    },
    {
      path: '/novo',
      name: 'novo-rodizio',
      component: NovoRodizio,
      meta: {
        login: true
      }
    },
    {
      path: '/editar/:id',
      name: 'editar-rodizio',
      component: EditarRodizio,
      meta: {
        login: true
      }
    },
    {
      path: '/:id',
      name: 'ver-rodizio',
      component: VerRodizio,
      meta: {
        login: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!firebase.auth().currentUser) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (firebase.auth().currentUser) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
