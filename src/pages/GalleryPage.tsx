
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
              <div className="bg-background rounded-full px-6 py-2">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Conference Gallery
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              National Research Conference
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of images from the National Research Conference, 
              showcasing keynote sessions, research presentations, awards ceremonies, and memorable moments 
              from our academic community. Use the search and filter options to find specific moments.
            </p>
          </div>
          
          {/* Gallery Component */}
          <ImageGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
