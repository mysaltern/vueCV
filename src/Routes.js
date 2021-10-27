import Index from './pages/Index/Index.vue'
import About from './pages/Other/About.vue'
import Experiences from './pages/Other/Experiences.vue'
import Contact from './pages/Other/Contact.vue'
import Contacts from './pages/Contacts/Index.vue'
import Weather from './pages/Other/Weather.vue'
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
        path: '/Contacts',
        component: Contacts
    },
    {
        path: '/Weather',
        component: Weather
    }
];