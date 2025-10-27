# ReachMax Website

A modern, optimized Next.js website for ReachMax - AI Voice Agent for Real Estate Agents.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices
- **Live Admin Dashboard** - Manage leads, analytics, and content
- **SEO Optimized** - Complete meta tags, sitemap, and robots.txt
- **Performance Optimized** - Lazy loading, image optimization, and caching
- **Contact Form** - Working contact form with API endpoint
- **Legal Pages** - AGB, Impressum, and Datenschutz
- **Analytics Ready** - Vercel Analytics integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reachmaxlandingalmostready99pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id

# Admin Dashboard (optional)
ADMIN_PASSWORD=your-secure-password
```

### Contact Form Setup

The contact form is ready to use with the `/api/contact` endpoint. To enable email sending:

1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Update the API route with your SMTP credentials
3. Configure email templates

## 📊 Admin Dashboard

Access the admin dashboard at `/admin` to:

- **View Leads**: See all contact form submissions
- **Analytics**: Monitor page views and conversion rates
- **Content Management**: Edit pages and settings
- **Lead Management**: Update lead status and export data

## 🎨 Customization

### Colors and Branding

Update the color scheme in `app/globals.css`:

```css
:root {
  --primary: #FFD700; /* Your brand color */
  --secondary: #FFA500;
  /* ... other colors */
}
```

### Content Updates

- **Hero Section**: Edit `components/hero-section.tsx`
- **Pricing**: Update `components/pricing-section.tsx`
- **FAQ**: Modify `components/faq-section.tsx`
- **Contact Info**: Update navigation and footer components

### Legal Pages

- **AGB**: `app/agb/page.tsx`
- **Impressum**: `app/impressum/page.tsx`
- **Datenschutz**: `app/datenschutz/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## 📈 Performance Optimization

The website includes several performance optimizations:

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Lazy Loading**: Components load only when needed
- **Code Splitting**: Automatic bundle splitting
- **Caching**: Optimized caching headers
- **Compression**: Gzip compression enabled

### Performance Monitoring

Run bundle analysis:
```bash
npm run analyze
```

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: Automatic sitemap generation at `/sitemap.xml`
- **Robots.txt**: SEO-friendly robots.txt at `/robots.txt`
- **Structured Data**: Ready for schema markup
- **Performance**: Core Web Vitals optimized

## 🛡️ Security

- **Security Headers**: X-Frame-Options, X-Content-Type-Options
- **Input Validation**: Form validation and sanitization
- **Rate Limiting**: Ready for API rate limiting
- **HTTPS**: Enforced in production

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized for mobile networks
- **PWA Ready**: Can be converted to Progressive Web App

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format checking
npm run format:check
```

## 📞 Support

For questions or support:

- **Email**: ciroreachmax@pm.me
- **Phone**: +49 123 456 7890

## 📄 License

© 2024 ReachMax GmbH. All rights reserved.

---

**Built with ❤️ for ReachMax**













