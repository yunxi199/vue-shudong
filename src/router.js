import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import Login from './view/Login'
import Article from './view/Article'
import ColumnDetail from './view/ColumnDetail'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    meta:{
      cc:true

    }
  },
  {
    path: '/column/:id',
    component: ColumnDetail,
    meta:{
      cc:true
    }
  },
  {
    path: '/login',
    component: Login,
    meta:{
      cc:false
    }
  },
  {
    path: '/article',
    component: Article,
    meta:{
      cc:true
    }
  }
]
})
