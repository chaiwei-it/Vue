import Index from '../components/index/index.vue'
import Note from '../components/note/index.vue'
import Catalog from '../components/catalog/index.vue'
import Login from '../components/user/login.vue'
import Register from '../components/user/register.vue'

const routers = [
  {
    path: '/',
    // component: Index,
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/note',
    name: 'note',
    component: Note
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
export default routers
