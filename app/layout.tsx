import './globals.css'
import {Antonio, PT_Sans_Narrow} from 'next/font/google'

const antonio = Antonio({subsets: ['latin'], variable: '--font-antonio'})
const sansNarrow = PT_Sans_Narrow({
    weight: ['400', '700'],
    subsets: ['latin'],
    // display: 'swap',
    variable: '--font-sans-narrow'
})

export const metadata = {
    title: 'Housing',
    description: 'Search for houses',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${antonio.variable} ${sansNarrow.variable}`}>
        {/*<body className={`${antonio.className} bg-cyan-50/40`}>{children}</body>*/}
            <body>{children}</body>
        </html>
    )
}
