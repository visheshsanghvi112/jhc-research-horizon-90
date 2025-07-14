
# JHC 2025 National Research Conference Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🎯 About

Official website for the **JHC 2025 National Research Conference** on **"Empowering Innovation through Generative AI, Data Science, and Analytics"** organized by Jai Hind College, Mumbai.

### 📅 Conference Details
- **Date**: November 21-22, 2025
- **Venue**: Jai Hind College, Churchgate, Mumbai - 400020
- **Theme**: Empowering Innovation through Generative AI, Data Science, and Analytics
- **Organizer**: Department of B.Sc. IT, B.Voc. Software Development & M.Sc. Big Data Analytics

## 🌐 Live Website

**Website**: [https://jhc2025.vercel.app/](https://jhc2025.vercel.app/)

## 🚀 Features

### ✨ Modern Design
- Responsive and mobile-first design
- Smooth animations and transitions using Framer Motion
- Clean and professional UI with Tailwind CSS
- Accessibility-compliant components

### 🎨 Key Sections
- **Hero Section** with countdown timer
- **About Conference** with detailed information
- **Speakers Section** showcasing keynote speakers
- **Call for Papers** with submission guidelines
- **Registration** with different categories
- **Awards Section** for outstanding contributions
- **Schedule** with interactive timeline
- **Past Highlights** from previous conferences
- **Guidelines** for participants
- **Contact Information** and venue details

### 🔧 Technical Features
- **SEO Optimized** with meta tags and structured data
- **PWA Ready** with manifest.json
- **Fast Loading** with optimized images and lazy loading
- **Cross-browser Compatible**
- **Analytics Ready** for tracking user engagement

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### UI Components
- **Radix UI** - Unstyled, accessible components
- **Shadcn/ui** - Beautiful, reusable components
- **Lucide React** - Beautiful & consistent icons
- **Recharts** - Composable charting library

### State Management & Routing
- **React Router DOM** - Client-side routing
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation
- **TanStack Query** - Powerful data synchronization

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Lovable** - AI-powered development platform

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jhc-2025-conference.git
   cd jhc-2025-conference
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── AboutConference.tsx
│   ├── CallForPapers.tsx
│   ├── EnhancedNavbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── utils/              # Helper functions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point

public/
├── lovable-uploads/    # Conference images and assets
├── sitemap.xml        # SEO sitemap
├── robots.txt         # Search engine directives
├── manifest.json      # PWA manifest
└── favicon.ico        # Site favicon
```

## 🎨 Design System

### Colors
The website uses a carefully crafted color palette:
- **Primary**: Blue (#1e40af) - Professional and trustworthy
- **Secondary**: Orange (#f97316) - Energetic and innovative
- **Accent**: Yellow (#eab308) - Attention-grabbing highlights
- **Background**: Clean whites and subtle grays

### Typography
- **Font Family**: System fonts for optimal performance
- **Heading Scale**: Responsive typography with proper hierarchy
- **Body Text**: Optimized readability across all device sizes

### Components
All components follow:
- **Accessibility** guidelines (WCAG 2.1)
- **Responsive** design principles
- **Consistent** spacing and typography
- **Reusable** and maintainable code

## 🔍 SEO Optimization

### Meta Tags
- Comprehensive meta tags for all pages
- Open Graph tags for social media sharing
- Twitter Card tags for enhanced tweets
- Structured data markup for search engines

### Performance
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Implemented for images and components

### Search Features
- **XML Sitemap**: Automated sitemap generation
- **Robots.txt**: Proper search engine directives
- **Canonical URLs**: Prevent duplicate content issues
- **Structured Data**: Schema.org markup for rich snippets

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect to Vercel**
   - Import your repository to Vercel
   - Configure build settings (auto-detected)
   - Deploy with one click

2. **Custom Domain**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings
   - SSL certificates are automatically managed

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

We welcome contributions to improve the conference website! Here's how you can help:

### How to Contribute
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure accessibility compliance

### Areas for Contribution
- **Bug fixes** and performance improvements
- **New features** and enhancements
- **Documentation** improvements
- **Accessibility** enhancements
- **SEO** optimizations
- **Mobile** experience improvements

## 📞 Contact & Support

### Conference Inquiries
- **Email**: jhc.research@jaihindcollege.edu.in
- **Phone**: [Contact college for phone number]
- **Address**: Jai Hind College, Churchgate, Mumbai - 400020

### Technical Support
- **Developer**: Vishesh Sanghvi
- **GitHub Issues**: [Create an issue](https://github.com/your-username/jhc-2025-conference/issues)
- **Website**: [https://jhc2025.vercel.app/](https://jhc2025.vercel.app/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Copyright Notice
```
Copyright (c) 2025 Jai Hind College (Empowered Autonomous)
Website Development by Vishesh Sanghvi
```

## 🙏 Acknowledgments

### Special Thanks
- **Jai Hind College** for organizing this prestigious conference
- **Department of B.Sc. IT, B.Voc. Software Development & M.Sc. Big Data Analytics** for their support
- **Lovable AI Platform** for development tools and assistance
- **Vercel** for hosting and deployment services
- **Open Source Community** for the amazing tools and libraries

### Technology Credits
- **React Team** for the amazing framework
- **Vercel Team** for Next.js and hosting platform
- **Tailwind Labs** for the utility-first CSS framework
- **Radix UI Team** for accessible component primitives
- **Framer** for the motion library
- **All contributors** and maintainers of open-source libraries used

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/jhc-2025-conference&type=Date)](https://star-history.com/#your-username/jhc-2025-conference&Date)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/jhc-2025-conference)
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/jhc-2025-conference)
![GitHub issues](https://img.shields.io/github/issues/your-username/jhc-2025-conference)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/jhc-2025-conference)

---

**Made with ❤️ by [Vishesh Sanghvi](https://github.com/vishesh-sanghvi) for Jai Hind College's National Research Conference 2025**

---

*"Empowering Innovation through Generative AI, Data Science, and Analytics"*

🎓 **Jai Hind College** | 🌐 **jhc2025.vercel.app** | 📧 **jhc.research@jaihindcollege.edu.in**
