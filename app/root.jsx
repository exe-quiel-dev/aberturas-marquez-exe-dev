import {
    Meta,
    Links,
    Outlet
} from '@remix-run/react'
import styles from '~/styles/index.css'

// Components
import Header from '~/components/header'
import Footer from '~/components/footer'

// IMGS
import favicon from '../public/imgs/favicon.png'

export function meta() {
    return [
        {
            charset: 'utf-8'
        },
        {
            title: 'Aberturas Marquez'
        },
        {
            name: 'description',
            content: 'Tienda de aberturas online'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        },
        {
            rel: "google-site-verification",
            content: "0rpfnWp5tdIK3oaWg53-ZGpteCsneQ2OfHGD308LTRA"
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin: true
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
        },
        {
            rel: 'icon',
            href: favicon
        }
    ]
}


export default function App() {

    return (
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang='es'>
            <head>
                <Meta />
                <Links />
            </head>
            <body className='bg-gradient-to-tl from-cyan-700 to-slate-500' id='root'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}