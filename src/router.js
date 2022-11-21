 import MainPage from './components/page/MainPage.vue';
import {createWebHistory,createRouter} from 'vue-router';
 
 
const routes =[
    {path : '/test', name : 'main routes', component:MainPage}
]
  
const router = createRouter ({
    history : createWebHistory(), 
    routes : routes
})

export default router;

