
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import { Helmet } from 'react-helmet-async';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Data Visualizations & Gallery | Big Data Analytics Research</title>
        <meta name="description" content="Visual gallery of Big Data Analytics research findings, charts, graphs, and data visualizations from the MSc project at Jai Hind College." />
        <meta property="og:title" content="Data Visualizations & Gallery | Big Data Analytics Research" />
        <meta property="og:description" content="Visual gallery of Big Data Analytics research findings, charts, graphs, and data visualizations from the MSc project at Jai Hind College." />
        <meta property="og:url" content="https://jhc2025.vercel.app/gallery" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block p-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
                <div className="bg-background rounded-full px-6 py-2">
                  <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Data Visualizations & Gallery
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Big Data Analytics Research Gallery
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive collection of data visualizations, charts, graphs, and research findings 
                from the MSc Big Data Analytics project. View statistical analysis results, predictive model outputs, 
                and data-driven insights from our academic research.
              </p>
            </div>
            
            {/* Gallery Component */}
            <ImageGallery />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
