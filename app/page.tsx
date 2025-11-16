import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}
