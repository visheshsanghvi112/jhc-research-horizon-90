
import { motion } from 'framer-motion';
import { Search, Filter, Award, Users, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const ResearchShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'IoT'];
  
  const researchPapers = [
    {
      id: 1,
      title: "Machine Learning Approaches for Predictive Healthcare Analytics",
      authors: ["Dr. Priya Sharma", "Dr. Rajesh Kumar"],
      category: "AI & ML",
      year: 2024,
      citations: 127,
      abstract: "This paper explores advanced machine learning techniques for predicting patient outcomes and optimizing healthcare delivery systems.",
      awards: ["Best Paper Award"],
      institution: "AIIMS Delhi",
      impact: "Implemented in 15+ hospitals"
    },
    {
      id: 2,
      title: "Blockchain-Based Secure Data Sharing in Distributed Systems",
      authors: ["Prof. Amit Patel", "Dr. Sneha Joshi"],
      category: "Cybersecurity",
      year: 2024,
      citations: 89,
      abstract: "Novel blockchain architecture ensuring secure and efficient data sharing across distributed healthcare networks.",
      awards: [],
      institution: "IIT Bombay",
      impact: "Adopted by 3 major enterprises"
    },
    {
      id: 3,
      title: "Deep Learning for Natural Language Processing in Indian Languages",
      authors: ["Dr. Meera Reddy", "Prof. Vikram Singh"],
      category: "AI & ML",
      year: 2023,
      citations: 203,
      abstract: "Comprehensive study on implementing deep learning models for multilingual NLP applications in Indian regional languages.",
      awards: ["Excellence in Research", "Industry Impact Award"],
      institution: "ISI Kolkata",
      impact: "Used by 50+ apps"
    }
  ];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🔬 Research Showcase
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Research Papers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover groundbreaking research from previous JHC conferences and their real-world impact
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search papers, authors, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                <Filter className="h-3 w-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Research Papers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {paper.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{paper.year}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-3">
                    {paper.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {paper.authors.map((author, idx) => (
                      <span key={idx} className="text-sm text-muted-foreground">
                        {author}{idx < paper.authors.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{paper.institution}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                  
                  {paper.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {paper.awards.map((award, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-yellow-500 text-yellow-700">
                          <Award className="h-3 w-3 mr-1" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {paper.citations} citations
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {paper.impact}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Full Paper
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No papers found matching your search criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResearchShowcase;
