import '../styles/global.css'
import type {AppProps} from 'next/app'
import {NavBar} from "@/features/layout/NavBar";

export default function App({Component, pageProps}: AppProps) {
    return (
        <NavBar>

            <Component {...pageProps} />
        </NavBar>
    )
}
