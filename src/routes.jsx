// Pages
import App from './components/App/App'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites'
import Cart from './components/Cart/Cart'

// Product categories
import Womenswear from './components/Womenswear/Womenswear'
import Menswear from './components/Menswear/Menswear'
import Kidswear from './components/Kidswear/Kidswear'

// Product
import Product from './components/Product/Product'

// ErrorPage
import ErrorPage from './components/ErrorPage/ErrorPage'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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
                path: '/shop/womenswear',
                element: <Womenswear />
            },
            {
                path: '/shop/menswear',
                element: <Menswear />
            },
            {
                path: '/shop/kidswear',
                element: <Kidswear />
            },
            {
                path: '/shop/:category/:productId',
                element: <Product />
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