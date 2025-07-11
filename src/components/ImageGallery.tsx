
import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { X, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  year: string;
  category: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  const conferenceImages: GalleryImage[] = [
    {
      id: 'conf-1',
      url: '/lovable-uploads/138790b0-7483-4f48-ae16-2db2f83b5253.png',
      title: 'Paper Presentation Sessions',
      description: 'Outstanding research presentations from our annual conference',
      year: '2024',
      category: 'Presentations'
    },
    {
      id: 'conf-2',
      url: '/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png',
      title: 'Organizing Team Excellence',
      description: 'Dedicated faculty and staff ensuring conference success',
      year: '2024',
      category: 'Team'
    },
    {
      id: 'conf-3',
      url: '/lovable-uploads/49ef0f2c-2f2a-4f3a-bc3f-3dc7fcb42a61.png',
      title: 'Academic Collaboration',
      description: 'Industry experts and academicians sharing insights',
      year: '2024',
      category: 'Collaboration'
    },
    {
      id: 'conf-4',
      url: '/lovable-uploads/edc1f11d-5a12-4c2a-8218-835a615404bb.png',
      title: 'Award Ceremony',
      description: 'Recognition of outstanding research contributions and achievements',
      year: '2024',
      category: 'Awards'
    },
    {
      id: 'conf-5',
      url: '/lovable-uploads/d72d7669-0e47-4ed7-b343-dde3176af457.png',
      title: 'Keynote Speaker Session',
      description: 'Distinguished speaker addressing the conference audience',
      year: '2024',
      category: 'Keynotes'
    },
    {
      id: 'conf-6',
      url: '/lovable-uploads/09f8903b-c328-4b5f-af8d-b8a57dfabfa4.png',
      title: 'Expert Panel Discussion',
      description: 'Industry leaders sharing insights on cybersecurity excellence',
      year: '2024',
      category: 'Panels'
    },
    {
      id: 'conf-7',
      url: '/lovable-uploads/6df9a9f8-b4c2-4954-82fb-6601b0e35fa8.png',
      title: 'Research Recognition',
      description: 'Honoring exceptional research contributions in AI and Big Data',
      year: '2024',
      category: 'Awards'
    },
    {
      id: 'conf-8',
      url: '/lovable-uploads/31a68a9a-0aef-416b-94e3-c61078770a9a.png',
      title: 'Certificate Presentation',
      description: 'Formal recognition ceremony for conference participants',
      year: '2024',
      category: 'Ceremonies'
    },
    {
      id: 'conf-9',
      url: '/lovable-uploads/8968bc78-1a7b-4977-884e-52224231bf06.png',
      title: 'Engaged Audience',
      description: 'Enthusiastic participants actively engaging in conference sessions',
      year: '2024',
      category: 'Audience'
    },
    {
      id: 'conf-10',
      url: '/lovable-uploads/d22c8a91-cdc0-4263-94f5-b720d6165c09.png',
      title: 'Technical Workshop',
      description: 'Hands-on technical sessions and practical demonstrations',
      year: '2024',
      category: 'Workshops'
    },
    {
      id: 'conf-11',
      url: '/lovable-uploads/451331e6-b94a-4044-8596-085b205db32c.png',
      title: 'Conference Team Photo',
      description: 'Complete organizing committee and distinguished guests',
      year: '2024',
      category: 'Team'
    }
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(conferenceImages.map(img => img.category))];
    return cats;
  }, []);

  // Filter images based on search and category
  const filteredImages = useMemo(() => {
    return conferenceImages.filter(image => {
      const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           image.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Handle image loading
  const handleImageLoad = (imageId: string) => {
    setLoadingImages(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageLoadStart = (imageId: string) => {
    setLoadingImages(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing {filteredImages.length} of {conferenceImages.length} images
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
        {filteredImages.map((image) => (
          <Card 
            key={image.id} 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
            onClick={() => openModal(image)}
          >
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden rounded-t-lg relative">
                {loadingImages[image.id] && (
                  <Skeleton className="absolute inset-0 z-10" />
                )}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onLoadStart={() => handleImageLoadStart(image.id)}
                  onLoad={() => handleImageLoad(image.id)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1 text-foreground line-clamp-2">{image.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{image.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {image.year}
                  </span>
                  <span className="inline-block px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg mb-2">No images found</div>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search terms or category filter
          </p>
        </div>
      )}

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 md:p-4 animate-fade-in">
          <div className="relative max-w-7xl max-h-[95vh] w-full flex flex-col">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            {/* Image and details container */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col max-h-full animate-scale-in">
              <div className="flex-1 flex items-center justify-center bg-gray-100 min-h-0">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 md:p-6 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl md:text-2xl font-bold flex-1">{selectedImage.title}</h2>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground text-sm rounded-full ml-4">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {selectedImage.year}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                  </span>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Use ← → arrow keys to navigate • Press ESC to close
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
