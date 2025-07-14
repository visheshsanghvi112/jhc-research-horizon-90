
import { Mail, MapPin, Phone, Globe, User, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch regarding this MSc Big Data Analytics research project, methodology, or findings
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-primary" />
                  <CardTitle>Student Researcher</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-semibold">Vishesh Sanghvi</p>
                <p className="text-sm text-muted-foreground mt-2">
                  MSc Big Data Analytics Student<br />
                  Jai Hind College (Empowered Autonomous)
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Research Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">vishesh.research@jaihindcollege.edu.in</p>
                <p className="text-sm text-muted-foreground mt-2">
                  For research inquiries, collaboration, or academic discussions
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Institution Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jai Hind College (Empowered Autonomous)<br />
                  'A' Road, Churchgate<br />
                  Mumbai - 400020<br />
                  Maharashtra, India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle>Department</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Department of Big Data Analytics</strong><br />
                  B.Sc. IT, B.Voc. SD & M.Sc. Big Data Analytics<br />
                  <strong>HOD:</strong> Mr. Wilson Rao
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-primary mb-6">Research Project Details</h2>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">MSc Big Data Analytics Research</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced research in predictive analytics, machine learning, and data science methodologies
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-primary text-lg">Research Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Research Focus:</p>
                  <p className="text-sm text-muted-foreground">
                    Big Data Analytics, Predictive Modeling, Data Visualization
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Duration:</p>
                  <p className="text-sm text-muted-foreground">
                    June 2024 - May 2025 (Academic Year)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Institution:</p>
                  <p className="text-sm text-muted-foreground">
                    Jai Hind College (Empowered Autonomous), Mumbai
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Program:</p>
                  <p className="text-sm text-muted-foreground">
                    Master of Science in Big Data Analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Academic Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Open to academic discussions, research collaboration, and knowledge sharing with fellow researchers and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
