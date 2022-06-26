import '../styles/global/index.scss';
import type { AppProps } from 'next/app';
import MainLayout from 'components/layouts/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp;
