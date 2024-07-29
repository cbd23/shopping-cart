// Pages
import App from './components/App/App'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites'
import Cart from './components/Cart/Cart'

// Product categories
import WomenClothing from './components/WomenClothing/WomenClothing'
import MenClothing from './components/MenClothing/MenClothing'
import Jewelry from './components/Jewelry/Jewelry'
import Electronics from './components/Electronics/Electronics'


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/shop/women',
                element: <WomenClothing />
            },
            {
                path: '/shop/men',
                element: <MenClothing />
            },
            {
                path: '/shop/jewelry',
                element: <Jewelry />
            },
            {
                path: '/shop/electronics',
                element: <Electronics />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/favorites',
                element: <Favorites />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },
]

export default routes