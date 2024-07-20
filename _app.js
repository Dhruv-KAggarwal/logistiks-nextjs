// pages/_app.js

import '../styles/global.css';
import Navigation from './components/navigation.js';
import Hero  from './components/hero.js';
import Service from './components/service.js';
import ReviewCarousel from './components/review.js';
import Contact from './components/contact.js';




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Hero />
      <Service />
            
      <ReviewCarousel />
      <Contact />
    </>
  );
}

export default MyApp;
