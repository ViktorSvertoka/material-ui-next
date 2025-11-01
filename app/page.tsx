import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './styles';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Banner />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Gallery />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
