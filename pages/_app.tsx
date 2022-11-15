import '../styles/globals.css'
import '../styles/custom.css'
import 'antd/dist/antd.css';
import '../components/card/main.css'
import '../components/account/main.css'
import '../components/headerFooter/main.css'
import '../components/signOptions/main.css'
import '../components/bodyComponent/main.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
