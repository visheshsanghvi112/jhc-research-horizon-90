
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | MSc Big Data Analytics Research Project</title>
        <meta name="description" content="Frequently asked questions about the MSc Big Data Analytics research project at Jai Hind College. Get answers about methodology and findings." />
        <meta property="og:title" content="FAQ | MSc Big Data Analytics Research Project" />
        <meta property="og:description" content="Frequently asked questions about the MSc Big Data Analytics research project at Jai Hind College. Get answers about methodology and findings." />
        <meta property="og:url" content="https://jhc2025.vercel.app/faq" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <div className="pt-16">
          <FAQSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
