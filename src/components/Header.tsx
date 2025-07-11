
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToTopInstant } from '@/utils/scrollToTop';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Team', href: '/team' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle regular page navigation - scroll to top immediately
      scrollToTopInstant();
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    scrollToTopInstant();
    navigate('/register');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToTopInstant();
    } else {
      scrollToTopInstant();
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/4bbac82d-c957-4b3e-a551-6b7dc16575df.png" 
              alt="Jai Hind College Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">JHC 2025</h1>
              <p className="text-xs text-muted-foreground">Research Conference</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={handleRegisterClick}
              className="bg-accent hover:bg-accent/90 text-black"
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Navigation Panel - Made SOLID */}
        <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4bbac82d-c957-4b3e-a551-6b7dc16575df.png" 
                alt="Jai Hind College Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-base font-bold text-primary">JHC 2025</h1>
                <p className="text-xs text-muted-foreground">Research Conference</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex flex-col p-4 space-y-2 bg-white">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleRegisterClick}
              className="text-left px-4 py-3 mt-4 text-base font-medium bg-accent text-black hover:bg-accent/90 rounded-md transition-colors duration-200"
            >
              Register Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
