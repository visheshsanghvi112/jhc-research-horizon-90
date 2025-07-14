
import EnhancedNavbar from '@/components/EnhancedNavbar';
import HeroSection from '@/components/HeroSection';
import AboutConference from '@/components/AboutConference';
import SpeakersSection from '@/components/SpeakersSection';
import CallForPapers from '@/components/CallForPapers';
import PastHighlights from '@/components/PastHighlights';
import Participation from '@/components/Participation';
import EnhancedRegistration from '@/components/EnhancedRegistration';
import AwardsSection from '@/components/AwardsSection';
import Guidelines from '@/components/Guidelines';
import InteractiveSchedule from '@/components/InteractiveSchedule';
import VisualSeparator from '@/components/VisualSeparator';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { PageTransition } from '@/components/LoadingStates';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JHC | MSc Big Data Analytics Research Showcase</title>
        <meta name="description" content="Official student research site of Jai Hind College – MSc Big Data Analytics 2025. Explore data-driven insights and predictive analytics." />
        <meta property="og:title" content="JHC | MSc Big Data Analytics Research Showcase" />
        <meta property="og:description" content="Official student research site of Jai Hind College – MSc Big Data Analytics 2025. Explore data-driven insights and predictive analytics." />
        <meta property="og:url" content="https://jhc2025.vercel.app/" />
      </Helmet>
      
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
          <EnhancedNavbar />
          <HeroSection />
          
          {/* Enhanced visual separators with subtle animations */}
          <div className="relative overflow-hidden">
            <VisualSeparator variant="wave" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
          </div>
          
          <AboutConference />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="lines" />
            <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-primary/5 opacity-30"></div>
          </div>
          
          <SpeakersSection />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="dots" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-40"></div>
          </div>
          
          <CallForPapers />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="wave" />
            <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-primary/5 opacity-50"></div>
          </div>
          
          <PastHighlights />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="lines" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-30"></div>
          </div>
          
          <Participation />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="dots" />
            <div className="absolute inset-0 bg-gradient-to-l from-accent/3 to-primary/3 opacity-40"></div>
          </div>
          
          <EnhancedRegistration />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="wave" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
          </div>
          
          <AwardsSection />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="lines" />
            <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-primary/5 opacity-30"></div>
          </div>
          
          <Guidelines />
          
          <div className="relative overflow-hidden">
            <VisualSeparator variant="dots" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-40"></div>
          </div>
          
          <InteractiveSchedule />
          
          <Footer />
          
          <FloatingActionButton />
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
