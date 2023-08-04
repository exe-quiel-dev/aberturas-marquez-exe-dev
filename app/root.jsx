import {
    Meta,
    Links,
    Outlet
} from '@remix-run/react'
import styles from '~/styles/index.css'

// Components
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return [
        {
            charset: 'utf-8',
            title: 'Aberturas Marquez',
            description: 'Tienda de aberturas online',
            viewport: 'width=device-width, initial-scale= 1'
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
        }
    ]
}


export default function App() {

    return(
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang='es'>
            <head>
                <Meta />
                <Links />
            </head>
            <body className='bg-gray-400'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}