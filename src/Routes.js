import Index from './pages/Index/Index.vue'
import About from './pages/Other/About.vue'
import Experiences from './pages/Other/Experiences.vue'
import Contact from './pages/Other/Contact.vue'
import Whether from './pages/Other/Whether.vue'
export const Routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/Experiences',
        component: Experiences
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Contact',
        component: Contact
    },
    {
        path: '/Whether',
        component: Whether
    }
];