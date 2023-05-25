import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google';

import muiTheme from '../theme/index'

const theme = createTheme(muiTheme)

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}