import { Box, ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import AppLayout from 'components/layouts/appLayout';
import { theme } from 'components/theme';
import { AccentGlobal } from 'components/theme/Accent';
import { FontsGlobal } from 'components/theme/fonts';
import { PrismGlobal } from 'components/theme/prism';
import { AnimatePresence } from 'framer-motion';
import * as gtag from 'lib/gtag';
import App, { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AccentGlobal />
      <PrismGlobal />
      <Analytics />
      <GoogleAnalytics gaId="G-2ZKD9HQS9W" />
      <AppLayout>
        <AnimatePresence
          // exitBeforeEnter
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
